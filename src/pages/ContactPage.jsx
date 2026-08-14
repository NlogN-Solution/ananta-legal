import React, { useState } from 'react';
import DeckLayout from '../components/DeckLayout';
import { useLang } from '../i18n/LanguageContext';

const SERVICE_KEYS = [
  'company-formation',
  'contracts',
  'fundraising-investment',
  'intellectual-property',
  'compliance-governance',
  'other',
];

export default function ContactPage() {
  const { t } = useLang();
  const c = t.contact;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'company-formation',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'company-formation',
      message: '',
    });
  };

  const Intro = (
    <section className="page-header">
      <div className="wrap">
        <div className="sec-label mono">{c.label}</div>
        <h1>{c.h1}<span style={{ color: 'var(--lime)' }}>.</span></h1>
        <p className="sub">{c.sub}</p>
      </div>
    </section>
  );

  const Form = (
    <section>
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="ci-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4>{c.emailTitle}</h4>
                <a href="mailto:anantalegal9@gmail.com">anantalegal9@gmail.com</a>
                <p>{c.emailNote}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="ci-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4>{c.phoneTitle}</h4>
                <a href="tel:+9779768585046">+977 9768585046</a>
                <p>{c.phoneNote}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="ci-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>{c.officeTitle}</h4>
                <p>{c.officeName}</p>
                <p>{c.officeAddr}</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>{c.formTitle}</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{c.fName}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder={c.fNamePh} />
              </div>
              <div className="form-group">
                <label htmlFor="email">{c.fEmail}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder={c.fEmailPh} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">{c.fCompany}</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder={c.fCompanyPh} />
              </div>
              <div className="form-group">
                <label htmlFor="service">{c.fService}</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                  {SERVICE_KEYS.map((k) => (
                    <option value={k} key={k}>{c.services[k]}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">{c.fMessage}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder={c.fMessagePh}></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              {c.submit} <span className="arr">↗</span>
            </button>

            {formSubmitted && (
              <div className="form-success">
                <strong>{c.successTitle}</strong> {c.successBody}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );

  const Map = (
     <section>
      <div className="wrap">
        <div className="map-section">
          <h3>{c.mapTitle}</h3>
          <div className="map-container">
            <iframe
              title="Map — Ananta Legal, Jal Binayak Dyo Marg, Lalitpur 30802, Nepal"
              src="https://maps.google.com/maps?q=XYZ%20Building%2C%20Jal%20Binayak%20Dyo%20Marg%2C%20Lalitpur%2030802%2C%20Nepal&z=16&hl=en&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            className="map-link"
            href="https://maps.google.com/?q=XYZ+Building,+Jal+Binayak+Dyo+Marg,+Lalitpur+30802,+Nepal"
            target="_blank"
            rel="noreferrer"
          >
            {c.officeAddr} <span className="arr">↗</span>
          </a>
        </div>
      </div>
    </section>
  );

  const PAGES = [
    { id: 'contact-intro', label: c.labels.intro, node: Intro },
    { id: 'contact-form', label: c.labels.form, node: Form },
    { id: 'contact-map', label: c.labels.map, node: Map },
  ];

  return <DeckLayout pages={PAGES} />;
}
