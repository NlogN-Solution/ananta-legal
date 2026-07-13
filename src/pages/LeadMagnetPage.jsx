import React, { useState } from 'react';
import DeckLayout from '../components/DeckLayout';
import { useLang } from '../i18n/LanguageContext';

export default function LeadMagnetPage() {
  const { t } = useLang();
  const lm = t.leadMagnet;
  const [downloaded, setDownloaded] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloaded(true);

    const fileContent = `THE 2026 ENTREPRENEUR'S GUIDE TO LEGAL COMPLIANCE IN NEPAL
Prepared by Sanskriti — Founder, Ananta Legal

Thank you for downloading our compliance guide, ${formData.name}!
Here is a summary of the compliance requirements:
1. Company Registration with OCR (Office of the Company Registrar)
2. PAN/VAT registration at Inland Revenue Department (IRD)
3. Annual filings: OCR Shareholder lists, Annual general meeting details
4. FDI (Foreign Direct Investment) approval procedures and NRB reporting.

For assistance, contact us: anantalegal9@gmail.com`;

    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = '2026_Entrepreneurs_Guide_to_Nepal_Compliance.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const Intro = (
    <section className="page-header lead-magnet-hero">
      <div className="wrap">
        <div className="sec-label mono"><span className="ln"></span> {lm.label}</div>
        <h1>{lm.h1}<span style={{ color: 'var(--lime)' }}>.</span></h1>
        <p className="sub">{lm.sub}</p>
      </div>
    </section>
  );

  const Offer = (
    <section>
      <div className="wrap">
        <div className="lm-grid reveal">
          <div className="lm-preview">
            <div className="pdf-icon">{lm.pdf}</div>
            <h3>{lm.previewHead}</h3>
            <p>{lm.previewP}</p>
          </div>

          <div className="lm-info-form">
            <form className="lm-form" onSubmit={handleDownload}>
              <h3>{lm.formHead}</h3>
              <p>{lm.formP}</p>

              <ul className="lm-features">
                {lm.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="form-group">
                <label htmlFor="name">{lm.fName}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder={lm.fNamePh} />
              </div>

              <div className="form-group">
                <label htmlFor="email">{lm.fEmail}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder={lm.fEmailPh} />
              </div>

              <div className="form-group">
                <label htmlFor="company">{lm.fCompany}</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder={lm.fCompanyPh} />
              </div>

              <button type="submit" className="btn btn-primary">
                {lm.submit} <span className="arr">↓</span>
              </button>
            </form>

            {downloaded && (
              <div className="form-success" style={{ marginTop: '1.5rem' }}>
                <strong>{lm.successTitle}</strong> {lm.successBody}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  const PAGES = [
    { id: 'lm-intro', label: lm.labels.intro, node: Intro },
    { id: 'lm-offer', label: lm.labels.offer, node: Offer },
  ];

  return <DeckLayout pages={PAGES} />;
}
