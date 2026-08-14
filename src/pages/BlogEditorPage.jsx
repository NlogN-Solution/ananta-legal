import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

/* --- TinyMCE self-hosted (no cloud API key) --- */
import 'tinymce/tinymce';
import 'tinymce/models/dom/model';
import 'tinymce/themes/silver';
import 'tinymce/icons/default';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/code';
import 'tinymce/plugins/table';
import 'tinymce/plugins/media';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/autoresize';
import contentCss from 'tinymce/skins/content/default/content.min.css?inline';

const CATEGORIES = [
  'Company Formation',
  'Fundraising',
  'Intellectual Property',
  'Contracts',
  'Compliance',
  'Guide',
];

const EDITOR_STYLE =
  contentCss +
  `\nbody{font-family:'Hanken Grotesk',system-ui,sans-serif;font-size:1.06rem;line-height:1.7;color:#1F2416;max-width:820px;margin:1.4rem auto;padding:0 1.5rem}` +
  `h2{font-family:Cormorant Garamond,Georgia,serif;font-weight:700}img{max-width:100%;height:auto;border-radius:10px}`;

// Send the session cookie with API calls (works same-origin and cross-origin).
const api = (url, opts = {}) => fetch(url, { credentials: 'include', ...opts });

// Upload images straight to the backend; TinyMCE expects the hosted URL back.
const imagesUploadHandler = (blobInfo) =>
  new Promise((resolve, reject) => {
    const fd = new FormData();
    fd.append('file', blobInfo.blob(), blobInfo.filename());
    api('/api/upload', { method: 'POST', body: fd })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('upload failed'))))
      .then((d) => resolve(d.location))
      .catch(() => reject('Image upload failed — check you are logged in and the server is running.'));
  });

/* --------------------------------------------------------------- login ---- */
function LoginGate({ onAuthed }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const r = await api('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || 'Login failed.');
      onAuthed();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="editor-page">
      <div className="wrap editor-login">
        <img className="editor-login__mark" src="/logo.png" alt="" width="48" height="48" />
        <h1>Admin sign in</h1>
        <p>Sign in to write and edit blog posts.</p>
        {error && <div className="editor-error">{error}</div>}
        <form onSubmit={submit}>
          <label>
            Username
            <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </label>
          <button className="btn btn-primary" disabled={busy}>
            {busy ? 'Signing in…' : 'Sign in'} <span className="arr">↗</span>
          </button>
        </form>
        <Link to="/blog" className="editor-back" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
          ← Back to blog
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- editor ---- */
export default function BlogEditorPage() {
  const { slug } = useParams(); // present when editing
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const [authed, setAuthed] = useState(null); // null = checking
  const [loading, setLoading] = useState(Boolean(slug));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [post, setPost] = useState({
    id: null,
    title: '',
    category: CATEGORIES[0],
    excerpt: '',
    cover_image: '',
    content: '',
  });

  // Check the session — stay signed in across visits.
  useEffect(() => {
    let active = true;
    api('/api/me')
      .then((r) => r.json())
      .then((d) => active && setAuthed(Boolean(d.authenticated)))
      .catch(() => active && setAuthed(false));
    return () => {
      active = false;
    };
  }, []);

  // Load existing post when editing (only once authed).
  useEffect(() => {
    if (!slug || !authed) return;
    let active = true;
    api(`/api/posts/${slug}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('not found'))))
      .then((d) => {
        if (!active) return;
        setPost({
          id: d.id,
          title: d.title || '',
          category: d.category || CATEGORIES[0],
          excerpt: d.excerpt || '',
          cover_image: d.cover_image || '',
          content: d.content || '',
        });
      })
      .catch(() => active && setError('Could not load this post.'))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [slug, authed]);

  const set = (k, v) => setPost((p) => ({ ...p, [k]: v }));

  const logout = async () => {
    await api('/api/logout', { method: 'POST' });
    setAuthed(false);
  };

  const uploadCover = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file);
    try {
      const r = await api('/api/upload', { method: 'POST', body: fd });
      if (!r.ok) throw new Error();
      const d = await r.json();
      set('cover_image', d.location);
    } catch {
      setError('Cover image upload failed.');
    }
  };

  const save = async () => {
    setError('');
    const content = editorRef.current ? editorRef.current.getContent() : post.content;
    if (!post.title.trim()) {
      setError('Please add a title.');
      return;
    }
    setSaving(true);
    const payload = {
      title: post.title.trim(),
      category: post.category,
      excerpt: post.excerpt.trim(),
      cover_image: post.cover_image || null,
      content,
    };
    try {
      const url = post.id ? `/api/posts/${post.id}` : '/api/posts';
      const method = post.id ? 'PUT' : 'POST';
      const r = await api(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || 'Save failed.');
      navigate(`/blog/${data.slug}`);
    } catch (e) {
      setError(e.message || 'Save failed.');
    } finally {
      setSaving(false);
    }
  };

  if (authed === null) {
    return (
      <div className="editor-page">
        <div className="wrap editor-shell">
          <p className="editor-status">Checking your session…</p>
        </div>
      </div>
    );
  }

  if (!authed) {
    return <LoginGate onAuthed={() => setAuthed(true)} />;
  }

  if (loading) {
    return (
      <div className="editor-page">
        <div className="wrap editor-shell">
          <p className="editor-status">Loading…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="editor-page">
      <div className="wrap editor-shell">
        <div className="editor-bar">
          <Link to="/blog" className="editor-back">← Back to blog</Link>
          <h1>{post.id ? 'Edit post' : 'Write a post'}</h1>
          <button className="editor-back" onClick={logout} type="button">Log out</button>
          <button className="btn btn-primary" onClick={save} disabled={saving}>
            {saving ? 'Saving…' : post.id ? 'Update' : 'Publish'} <span className="arr">↗</span>
          </button>
        </div>

        {error && <div className="editor-error">{error}</div>}

        <input
          className="editor-title"
          placeholder="Post title"
          value={post.title}
          onChange={(e) => set('title', e.target.value)}
        />

        <div className="editor-meta">
          <label>
            Category
            <select value={post.category} onChange={(e) => set('category', e.target.value)}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>

          <label className="editor-cover">
            Cover image
            <input type="file" accept="image/*" onChange={uploadCover} />
          </label>

          {post.cover_image && (
            <img className="editor-cover-preview" src={post.cover_image} alt="cover preview" />
          )}
        </div>

        <textarea
          className="editor-excerpt"
          placeholder="Short excerpt (shown on the blog list)…"
          rows={2}
          value={post.excerpt}
          onChange={(e) => set('excerpt', e.target.value)}
        />

        <Editor
          onInit={(_evt, editor) => {
            editorRef.current = editor;
          }}
          initialValue={post.content}
          licenseKey="gpl"
          init={{
            height: 640,
            width: '100%',
            menubar: false,
            skin: false,
            content_css: false,
            content_style: EDITOR_STYLE,
            plugins:
              'advlist autolink lists link image code table media wordcount quickbars autoresize',
            toolbar:
              'undo redo | blocks | bold italic underline | bullist numlist | link image media table | blockquote | code',
            quickbars_selection_toolbar: 'bold italic | quicklink blockquote',
            branding: false,
            promotion: false,
            paste_data_images: true,
            images_upload_handler: imagesUploadHandler,
            automatic_uploads: true,
          }}
        />

        <p className="editor-hint">
          Posts are saved to your PostgreSQL database; images upload to Cloudinary (or local disk
          in development).
        </p>
      </div>
    </div>
  );
}
