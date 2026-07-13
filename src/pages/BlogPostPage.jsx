import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CTA from '../components/CTA';
import DeckLayout from '../components/DeckLayout';
import { useLang } from '../i18n/LanguageContext';

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  } catch {
    return '';
  }
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const { t } = useLang();
  const bp = t.blogPost;

  const [post, setPost] = useState(undefined); // undefined = loading, null = not found

  useEffect(() => {
    let active = true;
    fetch(`/api/posts/${slug}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => active && setPost(d || null))
      .catch(() => active && setPost(null));
    return () => {
      active = false;
    };
  }, [slug]);

  if (post === undefined) {
    const Loading = (
      <section className="page-header">
        <div className="wrap"><p className="sub">Loading…</p></div>
      </section>
    );
    return <DeckLayout pages={[{ id: 'bp-loading', label: '…', node: Loading }]} />;
  }

  if (!post) {
    const NotFound = (
      <section className="page-header">
        <div className="wrap">
          <h1>{bp.notFound}</h1>
          <p className="sub">
            <Link to="/blog" style={{ color: 'var(--olive)' }}>{bp.back}</Link>
          </p>
        </div>
      </section>
    );
    return <DeckLayout pages={[{ id: 'bp-404', label: bp.notFound, node: NotFound }]} />;
  }

  const Title = (
    <section className="page-header">
      <div className="wrap">
        <div className="sec-label mono">
          <span className="ln"></span>
          <Link to="/blog" style={{ color: 'var(--olive)' }}>{bp.breadcrumb}</Link> / {bp.crumbTail}
        </div>
        <header className="blog-post-header">
          <span className="blog-cat-tag">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span>{bp.publishedOn} {fmtDate(post.created_at)}</span>
            <span>•</span>
            <span>{post.read_time}</span>
            <span>•</span>
            <Link to={`/blog/edit/${post.slug}`} style={{ color: 'var(--olive)' }}>Edit</Link>
          </div>
        </header>
      </div>
    </section>
  );

  const Body = (
    <section className="blog-post">
      <div className="wrap">
        {post.cover_image && (
          <img className="blog-post-cover" src={post.cover_image} alt="" />
        )}
        <article
          className="blog-post-body reveal in"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  );

  const PAGES = [
    { id: 'bp-title', label: bp.labels.title, node: Title },
    { id: 'bp-body', label: bp.labels.body, node: Body },
    { id: 'bp-cta', label: t.deck.labels.contact, node: <CTA /> },
  ];

  return <DeckLayout pages={PAGES} />;
}
