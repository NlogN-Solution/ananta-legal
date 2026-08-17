/* ============================================================
   Full site copy in English (en) and Nepali (ne).
   Brand names ("Ananta Legal") are intentionally left untranslated.
   NOTE: Nepali legal phrasing is provided for convenience and should be
   proofread by a Nepali-speaking advocate before production use.
   ============================================================ */

export const translations = {
  /* =========================== ENGLISH =========================== */
  en: {
    nav: {
      about: 'About',
      practice: 'Practice Areas',
      story: 'Our Story',
      blog: 'Blog',
      contact: 'Contact',
      guide: 'Free Guide',
      book: 'Book a free call',
      brandSoft: 'Legal',
      langName: 'नेपाली',
      langShort: 'ने',
    },

    chat: {
      launch: 'Chat with us',
      title: 'Ananta Legal',
      subtitle: 'Quick answers · we reply Mon–Fri',
      placeholder: 'Type your question…',
      greeting:
        "Namaste 🙏 Welcome to Ananta Legal. Tap a question below or type your own — for anything specific to your situation, we'll set you up with a free call.",
      pickPrompt: 'Popular questions',
      send: 'Send',
      close: 'Close chat',
      reset: 'Start over',
      bookCta: 'Book a free call',
      disclaimer: 'General information, not legal advice.',
      fallback:
        "Great question — that one is best answered on a quick call with our team so we can give you a precise answer. Tap “Book a free call”, or email anantalegal9@gmail.com and we'll help.",
      faqs: [
        {
          q: 'How do I register a company in Nepal?',
          keywords: ['register', 'registration', 'incorporat', 'company', 'set up', 'setup', 'pvt', 'private limited', 'ocr', 'open a company'],
          a: 'Registering a private limited company goes through the Office of the Company Registrar (OCR): reserve a name, file the MoA/AoA, then get a PAN/VAT from the IRD. Most founders are up and running in about 1–2 weeks. We handle the full filing for you — book a free call and we’ll map your exact steps and costs.',
        },
        {
          q: 'What’s in a founders’ agreement?',
          keywords: ['founder', 'co-founder', 'cofounder', 'agreement', 'equity', 'vesting', 'shares', 'split', 'shareholder'],
          a: 'A founders’ agreement covers equity splits, vesting (so unvested shares return if someone leaves early), roles and decision-making, IP assignment to the company, and what happens on exit or a dispute. Getting it right early prevents the most common start-up break-ups. We can draft one tailored to your team.',
        },
        {
          q: 'How are your fees structured?',
          keywords: ['fee', 'fees', 'cost', 'price', 'pricing', 'charge', 'how much', 'retainer', 'budget'],
          a: 'We use clear fixed-fee packages for common work (formation, contracts, trademark) and a simple monthly retainer for ongoing support — no surprise hourly bills. Exact pricing depends on scope, so we’ll quote you upfront on a free call.',
        },
        {
          q: 'How do I protect my brand / trademark?',
          keywords: ['trademark', 'brand', 'logo', 'ip', 'intellectual property', 'copyright', 'patent', 'protect'],
          a: 'Brand protection starts with a trademark filing at the Department of Industry — we run a clearance search, file the application, and respond to objections. We also cover copyright and IP assignment so the company (not an individual) owns the work. Happy to review your case on a call.',
        },
        {
          q: 'Do you help with fundraising and SAFEs?',
          keywords: ['fundrais', 'invest', 'investor', 'safe', 'convertible', 'raise', 'term sheet', 'fdi', 'nrb', 'round'],
          a: 'Yes — SAFEs / convertible notes, term-sheet review, share issuance, and the FDI/NRB approvals that apply to foreign investment in Nepal. We flag anything that could scare off investors before you sign. Book a call to review your round.',
        },
        {
          q: 'Can you draft and review contracts?',
          keywords: ['contract', 'nda', 'terms', 'mou', 'vendor', 'employment', 'agreement', 'review'],
          a: 'We draft and review the contracts start-ups actually use — NDAs, employment and contractor agreements, customer terms, vendor and SaaS contracts — in plain English you can stand behind. Tell us what you need on a free call.',
        },
        {
          q: 'How do I talk to a lawyer?',
          keywords: ['call', 'talk', 'speak', 'lawyer', 'advocate', 'contact', 'meet', 'appointment', 'consult'],
          a: 'Easiest way is a free intro call - tap “Book a free call” and pick a time, or email anantalegal9@gmail.com / call +977 9768585046. We’ll listen first and tell you honestly whether you even need a lawyer yet.',
        },
      ],
    },

    deck: {
      hintKeys: 'scroll · swipe · ← →',
      hintTail: 'to turn the page',
      labels: {
        intro: 'Intro',
        practice: 'Practice',
        services: 'Services',
        approach: 'Approach',
        team: 'Our Team',
        process: 'Process',
        stories: 'Stories',
        faq: 'FAQ',
        contact: 'Get in touch',
        colophon: 'Colophon',
      },
    },

    hero: {
      badge: 'Licensed Advocates — Nepal Bar Council',
      hlLine1: "The Entrepreneur's",
      hlLine2: 'Lawyers.',
      sub: 'We handle the legal side of building a company formation, contracts, fundraising and IP so you can focus on growing it. Based in Kathmandu, working with founders everywhere.',
      cta1: 'Book a free intro call',
      cta2: 'See what we handle',
      features: [
        { l1: '200+ Ventures', l2: 'Advised' },
        { l1: 'Flat-Fee', l2: 'Pricing' },
        { l1: '24h', l2: 'Response Time' },
      ],
      panelWords: ['Justice', 'Integrity', 'Excellence'],
      panelBrand: 'Ananta Legal',
    },

    marquee: [
      'Incorporation', 'Term Sheets', 'NDAs', 'Trademarks',
      'Founder Agreements', 'FDI Approvals', 'Cap Tables', 'Compliance',
    ],

    divider: {
      label: 'The practice, at a glance',
      head: 'Legal support for every step of your business.',
    },

    services: {
      label: '§ 01 / What WE handle',
      head: 'Everything legal a venture needs',
      intro: 'We provide the legal infrastructure for your venture without the headache. Whether you need a one-off contract or an on-call legal partner, we keep it simple, fast, and transparent. No hidden fees, no confusing legalese.',
      learnMore: 'Learn more',
      items: [
        { title: 'Company Formation', desc: 'Private limited, OCR registration, PAN & VAT, and the founder paperwork - incorporated in days, not weeks.' },
        { title: 'Contract Drafting & Review', desc: 'Founder agreements, NDAs, employment, SaaS and vendor deals. Drafted tight, negotiated tighter.' },
        { title: 'Foreign Direct Investment', desc: 'FDI approvals, foreign investment structuring, NRB clearance and compliance.' },
        { title: 'Due diligence', desc: 'Investor and transaction due diligence, risk review, and clean-up.' },
        { title: 'Intellectual Property Rights', desc: "Trademarks, copyright and the brand you're building. Own your name before someone else does." },
        { title: 'Compliance and Governance', desc: 'Annual filings, board resolutions, ROC and tax housekeeping. Stay clean, stay fundable.' },
      ],
    },

    approach: {
      label: '§ 02 / Why founders stay',
      leadPre: 'Simple legal help, clear fees, ',
      leadMark: 'and fast service for your business',
      leadPost: '.',
      stats: [
        { n: '200', k: 'ventures advised, from solo founders to funded teams' },
        { n: '72h', k: 'typical turnaround on a contract review' },
        { n: 'Rs.0', k: 'surprise fees - every engagement is flat-quoted' },
        { n: '1', k: 'team who actually picks up the phone. Us.' },
      ],
    },

    team: {
      label: '§ Our Team',
      head: 'Meet the advocates',
      sub: 'Two founding partners who handle every engagement personally, no juniors, no hand-offs, just direct access to the people doing the work.',
    },

    process: {
      label: '§ 03 / How it works',
      head: 'Four steps. Zero mystery.',
      steps: [
        { num: 'STEP 01', title: 'Intro call', desc: "A free 30-minute call. Tell me what you're building and what's keeping you up at night." },
        { num: 'STEP 02', title: 'Flat quote', desc: 'A clear scope and a fixed fee before any work starts. No meters running in the background.' },
        { num: 'STEP 03', title: 'Done right', desc: 'I draft, file and negotiate. You get plain-English updates — not pages of legalese.' },
        { num: 'STEP 04', title: 'On call', desc: 'Stay covered with ongoing support as you grow, raise and hire your first ten.' },
      ],
    },

    stories: {
      label: '§ 04 / Founder stories',
      head: 'Helping businesses move forward with confidence.',
      quotes: [
        { text: 'Registered my startup and closed my first cheque without a single all-nighter on paperwork. Worth every rupee.', name: 'Aastha Karki', role: 'Founder, Gurudev International' },
        { text: "Finally a lawyer who texts back and explains things like I'm a human, not a defendant.", name: 'Kabin Ghimire', role: 'Co-founder, NLOGN Innovations' },
        { text: "The term sheet review caught two clauses that would've quietly cost me control of the company.", name: 'Bibek Subedi', role: 'CEO, Ignition' },
      ],
    },

    faq: {
      label: '§ 05 / The fine print, answered',
      head: 'Questions founders actually ask.',
      items: [
        { q: 'What does it cost?', a: "Flat fees, quoted upfront. After the intro call you get a fixed price for the work — so you know what you're paying before I start, with no billable-hour surprises." },
        { q: 'Can you register my company fully online?', a: "Mostly, yes. OCR registration, PAN and VAT, and the founder documents can be handled remotely. You'll barely lift a finger beyond a few signatures." },
        { q: 'Do you work with foreign founders and FDI?', a: "Often. I handle the approvals, structuring and compliance for overseas investment into Nepal, plus the paperwork your investors' lawyers will ask for." },
        { q: 'Are you a real, licensed lawyer?', a: 'Yes — a licensed advocate enrolled with the Nepal Bar Council. The Gen-Z energy is free; the credentials are real.' },
        { q: 'Do you only work with startups?', a: "Mostly founders and growing businesses, since that's where I add the most value. But a good idea at any size is always welcome on the intro call." },
      ],
    },

    cta: {
      h1: "Let's make it legal",
      h2: 'Book a free first legal consultation',
      p: 'Let’s talk through your vision heart-to-heart, and figure out what your venture truly needs before you spend a single rupee.',
      btn: 'Book a free call',
      mailto: 'anantalegal9@gmail.com',
    },

    footer: {
      brandA: "The Entrepreneur's",
      brandB: 'Lawyers',
      tagline: 'Law, but make it make sense. Simple business and startup legalities for founders building in Nepal and beyond.',
      navigate: 'Navigate',
      getInTouch: 'Get in touch',
      address: 'Jal Binayak Dyo Marg, Lalitpur 30802, Nepal',
      hours: 'Mon–Fri · 10:00–18:00',
      copyright: '© 2026 The Entrepreneur\'s Lawyers. All rights reserved.',
      disclaimer: "This site is for general information and isn't legal advice. Reaching out doesn't create a lawyer–client relationship until we both agree to it in writing.",
    },

    about: {
      label: '§ About',
      h1: 'Meet our team',
      sub: 'Our legal practice is built for founders in Nepal and beyond fast, direct, and founded on practical support for venture builders.',
      teamIntro: 'Two advocates working together to make legal support clear, simple, and startup-ready.',
      team: [
        { image: '/sanskriti-image.jpeg', name: 'Advocate Sanskriti Koirala', title: 'Founding Partner', degree: 'BA LLB', focus: 'Corporate & Commercial Law' },
        { image: '/shivani-image.jpeg', name: 'Shivani Belbase', title: 'Founding Partner', degree: 'BA LLB', focus: 'Corporate & Commercial Law' },
      ],
      bioHead: 'Lawyers who speak founder, not legalese.',
      bio: [
        'At Ananta Legal, we handle the boring legal stuff: company setup, contracts, and protecting your ideas and Intellectual Property Rights, so you can stay focused on building your business. We move fast, just like your startup.',
        'After seeing too many founders lose equity, miss deadlines, and sign contracts they did not understand, we built a practice that works the way startups do — fast, transparent, and without billable-hour games.',
        'With 200 ventures advised, from solo bootstrappers to VC-backed teams, we handle everything from company incorporation and investor term sheets to IP protection and regulatory compliance. We are the team who actually picks up the phone.',
        'When we are not drafting contracts, you will find us mentoring at startup weekends, nerding out over cap table structures, or explaining FDI rules in plain English over coffee.',
      ],
      credentials: [
        { h: 'Nepal Bar Council', p: 'Licensed Advocate, enrolled member' },
        { h: 'LL.B. · Law Graduate', p: 'Specialization in corporate & commercial law' },
        { h: '200 Ventures', p: 'Advised across fintech, SaaS, D2C & deeptech' },
        { h: 'Cross-border Ready', p: 'FDI structuring for international investors' },
      ],
      valuesLabel: '§ Values',
      valuesHead: 'What we believe in',
      values: [
        { title: 'Plain English, always', desc: "If you can't understand your own contract, it's not protecting you. Every document we deliver is written for humans." },
        { title: 'Flat fees, no games', desc: "You'll know exactly what you're paying before we start. No surprises, no billable-hour anxiety." },
        { title: 'Startup speed', desc: 'Your fundraise cannot wait 3 weeks for a contract review. We work on founder timelines, not legacy law firm schedules.' },
      ],
      labels: { intro: 'About', team: 'Our Team', bio: 'Our Story', values: 'Our Values' },
    },

    practiceAreas: {
      label: '§ Practice Areas',
      h1: 'Everything legal a venture needs',
      sub: 'Clear legal support, transparent pricing, and no surprises. Choose the services you need today, or let us handle everything as your long-term legal partner.',
      learnMore: 'Learn more',
      labels: { intro: 'Practice Areas', grid: 'All services' },
      items: [
        { title: 'Company Formation', desc: 'Private limited registration, OCR, PAN & VAT, and the founder paperwork - incorporated in days, not weeks.', features: ['Private Limited Registration', 'Private Firm Registration', 'Industry Registration'] },
        { title: 'Contract Drafting & Review', desc: 'Founder agreements, NDAs, employment, SaaS and vendor deals. Drafted tight, negotiated tighter.', features: ['NDA & Confidentiality', 'Founder Agreements', 'Employment Contracts', 'Vendor & Service Agreements'] },
        { title: 'Foreign Direct Investment', desc: 'FDI approvals, foreign investment structuring, NRB clearance and compliance.', features: ['FDI Approval', 'NRB Clearance', 'Investment Structuring', 'Capital Import Compliance'] },
        { title: 'Due diligence', desc: 'Investor and transaction due diligence, risk review, and clean-up.', features: ['Document Review', 'Risk Assessment', 'Data Room Support', 'Legal Clean-up'] },
        { title: 'Intellectual Property Rights', desc: "Trademarks, copyright and the brand you're building. Own your name before someone else does.", features: ['Trademark Registration', 'Copyright Filing', 'Brand Protection', 'IP Assignment'] },
        { title: 'Compliance and Governance', desc: 'Annual filings, board resolutions, ROC and tax housekeeping. Stay clean, stay fundable.', features: ['Annual Filings', 'Board Resolutions', 'ROC Compliance', 'Tax Housekeeping'] },
      ],
    },

    practiceDetail: {
      breadcrumb: 'Practice Areas',
      statsLabel: 'By the numbers',
      notFound: 'Practice area not found.',
      back: '← Back to all practice areas',
      details: {
        'company-formation': {
          title: 'Company Formation',
          tagline: 'From idea to incorporated — in days, not weeks.',
          intro: "Whether you're a solo founder with a prototype or a team ready to raise, I'll get your company registered, compliant, and investor-ready with zero legal headaches.",
          sections: [
            { heading: "What's included", items: ['Private Limited Company registration with OCR', 'PAN & VAT registration and setup', 'Memorandum & Articles of Association drafting', 'Founder / Shareholder agreements', 'Partnership deeds and joint venture structures', 'Post-incorporation compliance checklist'] },
            { heading: 'How we work differently', text: "Most lawyers treat incorporation like a form-filling exercise. We treat it like the foundation of your company — because it is. We'll help you choose the right structure, split equity fairly, and set up governance that scales. Everything is done remotely where possible, with plain-English explanations at every step." },
          ],
          stats: [{ n: '3-5', k: 'days typical registration' }, { n: '200', k: 'companies incorporated' }, { n: 'Rs.0', k: 'surprise fees' }],
        },
        'contracts': {
          title: 'Contracts, Redlined',
          tagline: 'Drafted tight. Negotiated tighter.',
          intro: "Contracts are the operating system of your business. I make sure yours are bulletproof, readable, and actually protect what you've built.",
          sections: [
            { heading: "What's included", items: ['Non-Disclosure Agreements (NDAs)', 'Founder & Co-founder agreements', 'Employment and contractor agreements', 'SaaS terms of service & privacy policies', 'Vendor and service-level agreements', 'Contract review and redlining'] },
            { heading: 'Why contracts matter more than you think', text: "A bad contract doesn't just cost you money — it costs you control. I've seen founders lose IP, give away board seats, and sign non-competes that killed their next venture. Every clause I draft has a purpose, and every review catches what you'd miss." },
          ],
          stats: [{ n: '72h', k: 'typical turnaround' }, { n: '500+', k: 'contracts drafted' }, { n: '100%', k: 'plain-English guarantee' }],
        },
        'fundraising-investment': {
          title: 'Fundraising & Investment',
          tagline: 'So the round actually closes.',
          intro: 'Raising capital is hard enough without legal bottlenecks. I handle the paperwork, approvals, and due diligence so you can focus on your pitch.',
          sections: [
            { heading: "What's included", items: ['Term sheet review and negotiation', 'SAFE notes and convertible instruments', 'Share subscription agreements', 'FDI approvals and NRB compliance', 'Cap table structuring and modeling', 'Due diligence preparation and data room setup'] },
            { heading: 'Investor-ready, not investor-scared', text: "I've sat on both sides of the table. I know what investors' lawyers look for, what red flags kill deals, and how to structure a round that's fair for founders. Whether it's your first angel check or a Series A, I'll make sure the legal doesn't slow down the money." },
          ],
          stats: [{ n: '50+', k: 'rounds closed' }, { n: '48h', k: 'FDI approval prep' }, { n: '0', k: 'deals killed by bad docs' }],
        },
        'intellectual-property': {
          title: 'Intellectual Property',
          tagline: 'Own your name before someone else does.',
          intro: "Your brand, your code, your content — it's all IP. I'll make sure it's registered, protected, and legally yours.",
          sections: [
            { heading: "What's included", items: ['Trademark search and registration', 'Copyright registration', 'Brand protection strategy', 'IP assignment agreements', 'Licensing and royalty structuring', 'Cease & desist and enforcement'] },
            { heading: 'IP is your moat', text: 'In a world where anyone can clone your product overnight, your intellectual property is often your only real competitive advantage. I help founders protect it early — before a competitor, a former employee, or a bad partnership agreement takes it away.' },
          ],
          stats: [{ n: '100+', k: 'trademarks filed' }, { n: '30', k: 'day average registration' }, { n: '95%', k: 'first-attempt approval rate' }],
        },
        'compliance-governance': {
          title: 'Compliance & Governance',
          tagline: 'Stay clean. Stay fundable.',
          intro: "Compliance isn't glamorous, but it's what keeps your company alive and your investors confident. I handle the filings so you can handle the business.",
          sections: [
            { heading: "What's included", items: ['Annual return filings', 'Board resolution drafting', 'ROC compliance and reporting', 'Tax registration and housekeeping', 'BAFIA and sectoral compliance', 'Governance framework setup for growth-stage companies'] },
            { heading: 'Compliance as a growth tool', text: 'Most founders see compliance as a chore. Smart founders see it as a trust signal. Clean books, proper governance, and up-to-date filings are the first things investors check in due diligence. I make sure you pass with flying colors.' },
          ],
          stats: [{ n: '100%', k: 'on-time filing rate' }, { n: '0', k: 'penalties for my clients' }, { n: '24h', k: 'response on urgent filings' }],
        },
        'exits-disputes': {
          title: 'Exits & Disputes',
          tagline: 'A steady hand when things get complicated.',
          intro: "Whether it's a dream acquisition or a co-founder nightmare, I'll navigate the legal complexity so you come out the other side intact.",
          sections: [
            { heading: "What's included", items: ['Share transfer and buyout agreements', 'Acquisition structuring and negotiation', 'Co-founder exit and separation agreements', 'Dispute resolution and mediation', 'Winding up and dissolution', 'Post-exit non-compete and IP transfer'] },
            { heading: "Exits don't have to be ugly", text: "The best exits are the ones planned for in advance. I help founders build exit provisions into their agreements from day one — and when unplanned exits happen, I'm the steady hand that keeps emotions out of the legal work." },
          ],
          stats: [{ n: '30+', k: 'exits handled' }, { n: '90%', k: 'resolved without litigation' }, { n: '0', k: 'burned bridges' }],
        },
      },
    },

    contact: {
      label: '§ Contact',
      h1: "Let's build something legal",
      sub: 'Smart businesses need smart legal steps. No hidden fees or surprise invoices. Reach out for a free first consultation call or an upfront quote.',
      labels: { intro: 'Contact', form: 'Request a call', map: 'Find us' },
      emailTitle: 'Email directly',
      emailNote: 'Replies within 24 hours',
      phoneTitle: 'Phone Support',
      phoneNote: 'Mon–Fri, 10:00–18:00',
      officeTitle: 'Office Address',
      officeName: 'Ananta Legal',
      officeAddr: 'Jal Binayak Dyo Marg, Lalitpur 30802, Nepal',
      formTitle: 'Consultation Request',
      fName: 'Full Name',
      fNamePh: 'Jane Doe',
      fEmail: 'Email Address',
      fEmailPh: 'jane@company.com',
      fCompany: 'Company / Project Name',
      fCompanyPh: 'Acme Corp',
      fService: 'Service Needed',
      services: {
        'company-formation': 'Company Formation',
        'contracts': 'Contracts & NDAs',
        'fundraising-investment': 'Fundraising & SAFEs',
        'intellectual-property': 'Trademarks & IP',
        'compliance-governance': 'Compliance & ROC',
        'other': 'Other Business Law',
      },
      fMessage: 'Briefly describe your legal concern / queries',
      fMessagePh: 'Briefly describe your legal concern / queries',
      submit: 'Submit Request',
      submitting: 'Sending…',
      successTitle: 'Success!',
      successBody: 'Your request has been sent. We will get back to you within 24 hours.',
      errorTitle: 'Something went wrong.',
      errorBody: 'Could not send your message. Please try again or email us directly.',
      mapTitle: 'Our Location',
    },

    blog: {
      label: '§ Blog',
      h1: 'Legal insights for founders',
      sub: "Plain-English guides, teardowns, and actionable checklists to help you navigate Nepal's regulatory landscape.",
      write: 'Write a post',
      readGuide: 'Read Guide',
      labels: { intro: 'Blog', grid: 'Articles' },
      posts: {
        'startup-incorporation-nepal-2026': { title: 'How to Incorporate a Tech Startup in Nepal (2026 Guide)', excerpt: 'Step-by-step walk-through of registering a Private Limited with OCR, getting a PAN/VAT, and organizing founder shares without the legacy red tape.', category: 'Incorporation', date: 'June 18, 2026', readTime: '6 min read' },
        'safe-notes-nepal-fundraising': { title: "Are SAFE Notes Enforceable Under Nepal's Company Act?", excerpt: 'Understanding the legal mechanisms, convertible debt structures, and alternative term sheets for early-stage startup fundraising in Nepal.', category: 'Fundraising', date: 'May 24, 2026', readTime: '8 min read' },
        'trademark-registration-brand-protection': { title: 'Protect Your Moat: Trademark Registration in Nepal', excerpt: 'Why local trademark registration is critical before you scale your D2C or SaaS brand, and how the Department of Industries process works.', category: 'Intellectual Property', date: 'April 12, 2026', readTime: '5 min read' },
      },
    },

    blogPost: {
      breadcrumb: 'Blog',
      crumbTail: 'Article',
      publishedOn: 'Published on',
      notFound: 'Article not found.',
      back: '← Back to all articles',
      labels: { title: 'Article', body: 'Read' },
      content: {
        'startup-incorporation-nepal-2026': [
          { p: 'Registering a company in Nepal has historically been viewed as a slow, paper-heavy hurdle. However, with recent updates to the Office of the Company Registrar (OCR) digital processes, it is now possible to incorporate a tech startup much faster. In this guide, we break down the step-by-step process of going from a pitch deck to a fully registered, bank-account-ready Private Limited company.' },
          { h2: 'Step 1: Reservation of Company Name' },
          { p: 'Everything starts at the OCR online portal. You must propose a unique name. To prevent rejections, ensure your proposed name represents your industry and doesn\'t conflict with existing businesses. Names containing "Nepal" or generic terms require specific checks.' },
          { h2: 'Step 2: Preparing the MoA and AoA' },
          { p: 'The Memorandum of Association (MoA) and Articles of Association (AoA) are your company\'s core constitution. These documents define your business objectives, share structures, board powers, and capital requirements. For tech startups, it is critical to write broad objective clauses to accommodate future pivots (e.g., SaaS, fintech, consulting).' },
          { quote: '"Never use default templates for your MoA and AoA. They lack standard startup governance clauses and will cause headaches when you raise your first round."' },
          { h2: 'Step 3: Registration and OCR Fees' },
          { p: 'Once your name is approved and MoA/AoA are drafted, you upload the scanned, signed copies. OCR registration fees are calculated on a sliding scale based on your Authorized Capital. Keeping your authorized capital close to your current needs keeps government registration fees low.' },
          { h2: 'Step 4: PAN, VAT, and OCR Sign-off' },
          { p: 'Once OCR issues the Certificate of Incorporation, you must register at the Inland Revenue Department (IRD) for a Permanent Account Number (PAN). Tech businesses dealing in software sales or exports may also need VAT registration depending on revenue thresholds.' },
        ],
        'safe-notes-nepal-fundraising': [
          { p: 'A Simple Agreement for Future Equity (SAFE) is a standard instrument used worldwide to raise early capital. However, raising funds in Nepal presents unique challenges due to strict capital import laws and the specific definitions in the Nepal Company Act 2063.' },
          { h2: 'The Conflict: Convertible Instruments vs. Nepal Law' },
          { p: 'Under the Company Act, shares are traditionally issued at par value (usually Rs. 100). The concept of a "future promise to issue equity" at an undetermined valuation cap is not explicitly governed by the OCR. This makes traditional foreign SAFEs difficult to register directly.' },
          { h2: 'Workarounds and Alternative Term Sheets' },
          { p: 'To make SAFEs or convertible debt work in Nepal, founders must combine the contract with a Share Subscription Agreement (SSA) or structure it as an advance against equity. For foreign venture capital, FDI (Foreign Direct Investment) approval from the Department of Industries and clearance from Nepal Rastra Bank (NRB) are mandatory before capital enters the local bank account.' },
          { quote: '"Do not sign a generic YC SAFE with a foreign investor expecting to move money directly into Nepal. You need a localized version that complies with NRB foreign exchange rules."' },
        ],
        'trademark-registration-brand-protection': [
          { p: 'Many startup founders prioritize building product over brand protection. In Nepal, trademark rights are granted based on a "first-to-file" rule rather than "first-to-use". This means if someone else registers your brand name first, you could be legally forced to rebrand.' },
          { h2: 'The Trademark Process at DOI' },
          { p: 'Trademarks are filed at the Department of Industries (DOI). The process involves a trademark search, application filing under specific classes, examination by the department, and publication in the Industrial Bulletin for opposition checks.' },
          { h2: 'Key Strategies for Founders' },
          { ul: ['File early: Submit your trademark application immediately after company formation.', 'Choose a strong name: Generic or highly descriptive names are frequently rejected by the DOI examiner.', 'Register logo and text: Secure both elements to build a robust brand moat.'] },
        ],
      },
    },

    origin: {
      label: '§ Origin Story',
      h1: 'Why Ananta Legal exists',
      sub: 'We are building the firm we wished existed for our own journey.',
      journeyHead: 'The Journey',
      journey: [
        { year: '2024 — THE SEED', h: 'The Legacy Problem', p: "As Nepal's startup scene came alive with fresh energy, young founders hit an unexpected wall: a generation gap in the legal world. Traditional lawyers felt like they belonged to an entirely different era, making it hard to bridge the communication divide and connect on the same wavelength. Working inside Kathmandu's corporate law firms, we saw this disconnect firsthand. Early-stage founders were either priced out of the help they needed or handed confusing documents full of old-school jargon from advisors who simply couldn't relate to a young founder's reality, which had nothing to do with how modern startups actually run." },
        { year: '2025 — THE EXPERIMENT', h: 'The Experiment', p: "We started helping founders on the side with clear, flat-quoted prices. No billing by the minute, no surprise invoices. Beyond retaining legal advice, founders wanted a partner who spoke their language. Because we are young entrepreneurs ourselves, communication became natural, relatable, and on the same wavelength. The response was immediate; they didn't just want a lawyer; they wanted a partner who truly worked at their speed." },
        { year: '2026 — TODAY', h: 'Today', p: 'Built out of a deep belief in the dreams of young entrepreneurs, Ananta Legal was officially born in Kathmandu to be a true home for tech startups, bold businesses, and cross-border ventures. What started as a shared passion has blossomed into something extraordinary: today, we proudly stand as trusted legal partners for 200 ventures. Walking side-by-side with our founders every single day, we pour our hearts into guiding them through company setups, due diligence, compliance, contract drafting, problem-solving, and protecting the intellectual property they put their souls into creating.' },
      ],
      whyLabel: '§ The Audience',
      whyHead: 'Why specifically for entrepreneurs?',
      why: [
        { emoji: '⚡', h: 'Speed is survival', p: 'Traditional law firms take weeks to draft simple agreements. Startups operate on days. We structure our workflow to close deals and file documents on founder timelines.' },
        { emoji: '📉', h: 'Budget predictability', p: 'When you\'re pre-revenue, you cannot afford an open-ended hourly billing system. Flat fees give you full predictability over legal expenses.' },
        { emoji: '🤝', h: 'Contracts Without the Fear', p: 'We believe legal compliance are collaborative tools, not scary academic papers. Because we\'re young entrepreneurs too, we speak your language, turning complicated legal hurdles into simple, stress-free conversations. We cut the anxiety out of the process, drafting clean, clear documents that both sides can easily understand.' },
        { emoji: '🧭', h: 'Retainerships Without the Intimidation', p: 'Startup problems don\'t keep office hours, and neither should your legal support. Because we\'re young founders right there in the trenches with you, having a continuous retainership should never feel like calling a stuffy corporate office. We make ongoing legal advice stress-free and approachable, so you can drop a message anytime, get straight answers, and always feel completely backed up.' },
      ],
      motivationHead: 'The Motivation',
      motivation1: 'In Nepal, starting a venture is already an uphill battle. Between regulatory red tape, foreign exchange compliance, and outdated taxation structures, entrepreneurs face immense friction.',
      motivationQuote: '"Legal should be a tool to accelerate your venture, not a roadblock."',
      motivation2: 'Our motivation is simple: clear the path so founders can build. By taking the legal load off your shoulders, we give you the peace of mind to focus on product, customer growth, and scaling.',
      labels: { intro: 'Origin Story', journey: 'The Journey', why: 'The Audience', motivation: 'The Motivation' },
    },

    leadMagnet: {
      label: '§ Lead Magnet',
      h1: 'Free Legal Guide for Founders',
      sub: "The 2026 Entrepreneur's Guide to Legal Compliance in Nepal. Skip the legal headaches with our clear, actionable handbook.",
      pdf: 'PDF',
      previewHead: 'The 2026 Compliance Handbook',
      previewP: '42 pages of plain-English guides, checklists, and timelines for tech, SaaS, D2C, and FDI ventures in Nepal.',
      formHead: 'Download the Guide',
      formP: 'Get instant access to the PDF guide and our monthly legal updates newsletter.',
      features: ['Incorporate correctly: step-by-step checklists', 'Equity split math & vesting templates', 'Foreign investment (FDI) guidelines & limits', 'Trademark & IP protection checklist'],
      fName: 'Your Name',
      fNamePh: 'Siddharth',
      fEmail: 'Email Address',
      fEmailPh: 'sid@company.com',
      fCompany: 'Company Name',
      fCompanyPh: 'Acme Corp',
      submit: 'Get Free Guide',
      successTitle: 'Thank you!',
      successBody: 'Your download should start automatically. Check your downloads folder.',
      labels: { intro: 'Free Guide', offer: 'Download' },
    },
  },

  /* =========================== NEPALI =========================== */
  ne: {
    nav: {
      about: 'हाम्रोबारे',
      practice: 'सेवा क्षेत्रहरू',
      story: 'हाम्रो कथा',
      blog: 'ब्लग',
      contact: 'सम्पर्क',
      guide: 'नि:शुल्क गाइड',
      book: 'नि:शुल्क कल बुक गर्नुहोस्',
      brandSoft: 'लिगल',
      langName: 'English',
      langShort: 'EN',
    },

    chat: {
      launch: 'च्याट गर्नुहोस्',
      title: 'अनन्त लिगल',
      subtitle: 'छिटो जवाफ · सोम–शुक्र',
      placeholder: 'तपाईंको प्रश्न लेख्नुहोस्…',
      greeting:
        'नमस्ते 🙏 अनन्त लिगलमा स्वागत छ। तलका प्रश्नमध्ये छान्नुहोस् वा आफ्नै लेख्नुहोस् — तपाईंको विशिष्ट विषयको लागि हामी नि:शुल्क कलको व्यवस्था गर्नेछौं।',
      pickPrompt: 'लोकप्रिय प्रश्नहरू',
      send: 'पठाउनुहोस्',
      close: 'बन्द गर्नुहोस्',
      reset: 'फेरि सुरु',
      bookCta: 'नि:शुल्क कल बुक गर्नुहोस्',
      disclaimer: 'सामान्य जानकारी, कानुनी सल्लाह होइन।',
      fallback:
        'राम्रो प्रश्न — यो हाम्रो टोलीसँग छोटो कलमा राम्ररी जवाफ दिन सकिन्छ। “नि:शुल्क कल बुक गर्नुहोस्” थिच्नुहोस्, वा anantalegal9@gmail.com मा इमेल गर्नुहोस्।',
      faqs: [
        {
          q: 'नेपालमा कम्पनी कसरी दर्ता गर्ने?',
          keywords: ['register', 'registration', 'incorporat', 'company', 'दर्ता', 'कम्पनी', 'ocr'],
          a: 'प्राइभेट लिमिटेड कम्पनी कम्पनी रजिस्ट्रारको कार्यालय (OCR) मार्फत दर्ता हुन्छ: नाम आरक्षण, MoA/AoA दाखिला, त्यसपछि IRD बाट PAN/VAT। प्रायः १–२ हप्तामा तयार हुन्छ। हामी सम्पूर्ण प्रक्रिया सम्हाल्छौं — नि:शुल्क कल बुक गर्नुहोस् र हामी तपाईंको चरण र खर्च देखाउँछौं।',
        },
        {
          q: 'संस्थापक सम्झौतामा के हुन्छ?',
          keywords: ['founder', 'co-founder', 'equity', 'vesting', 'संस्थापक', 'सेयर', 'सम्झौता'],
          a: 'संस्थापक सम्झौतामा सेयर बाँडफाँट, vesting, भूमिका र निर्णय प्रक्रिया, कम्पनीलाई IP हस्तान्तरण, र निकास/विवादमा के हुन्छ समेटिन्छ। सुरुमै सही गर्दा धेरै झगडा रोकिन्छ। हामी तपाईंको टोली अनुसार मस्यौदा गर्न सक्छौं।',
        },
        {
          q: 'तपाईंको शुल्क कस्तो छ?',
          keywords: ['fee', 'fees', 'cost', 'price', 'शुल्क', 'मूल्य', 'कति'],
          a: 'सामान्य कामका लागि स्पष्ट फिक्स्ड-फी प्याकेज र निरन्तर सहयोगका लागि सरल मासिक रिटेनर — कुनै अनपेक्षित घण्टा-बिल छैन। सही मूल्य कामको दायरामा भर पर्छ, त्यसैले नि:शुल्क कलमा अग्रिम बताउँछौं।',
        },
        {
          q: 'ब्रान्ड / ट्रेडमार्क कसरी सुरक्षित गर्ने?',
          keywords: ['trademark', 'brand', 'logo', 'ip', 'copyright', 'ट्रेडमार्क', 'ब्रान्ड'],
          a: 'ब्रान्ड सुरक्षा उद्योग विभागमा ट्रेडमार्क दर्ताबाट सुरु हुन्छ — खोज, आवेदन र आपत्तिको जवाफ हामी सम्हाल्छौं। कपीराइट र IP हस्तान्तरण पनि गर्छौं ताकि व्यक्ति होइन कम्पनीले स्वामित्व पाओस्।',
        },
        {
          q: 'के तपाईं लगानी/SAFE मा मद्दत गर्नुहुन्छ?',
          keywords: ['fundrais', 'invest', 'safe', 'convertible', 'लगानी', 'fdi', 'nrb'],
          a: 'हो — SAFE/परिवर्तनीय नोट, टर्म-सिट समीक्षा, सेयर निष्कासन, र विदेशी लगानीमा लाग्ने FDI/NRB स्वीकृति। हस्ताक्षर अघि लगानीकर्तालाई तर्साउने कुरा हामी औंल्याउँछौं।',
        },
        {
          q: 'के तपाईं सम्झौता मस्यौदा/समीक्षा गर्नुहुन्छ?',
          keywords: ['contract', 'nda', 'terms', 'employment', 'सम्झौता', 'समीक्षा'],
          a: 'स्टार्टअपले प्रयोग गर्ने सम्झौताहरू — NDA, रोजगार/ठेक्का सम्झौता, ग्राहक सर्त, भेन्डर/SaaS सम्झौता — सरल भाषामा मस्यौदा र समीक्षा गर्छौं।',
        },
        {
          q: 'वकिलसँग कसरी कुरा गर्ने?',
          keywords: ['call', 'talk', 'lawyer', 'advocate', 'contact', 'कल', 'वकिल', 'सम्पर्क'],
          a: 'सजिलो तरिका नि:शुल्क परिचय कल हो - “नि:शुल्क कल बुक गर्नुहोस्” थिच्नुहोस्, वा anantalegal9@gmail.com / +977 9768585046। हामी पहिले सुन्छौं र इमानदारीपूर्वक भन्छौं।',
        },
      ],
    },

    deck: {
      hintKeys: 'स्क्रोल · स्वाइप · ← →',
      hintTail: 'पृष्ठ पल्टाउन',
      labels: {
        intro: 'परिचय',
        practice: 'सेवा',
        services: 'सेवाहरू',
        approach: 'दृष्टिकोण',
        team: 'हाम्रो टोली',
        process: 'प्रक्रिया',
        stories: 'कथाहरू',
        faq: 'प्रश्नहरू',
        contact: 'सम्पर्क गर्नुहोस्',
        colophon: 'विवरण',
      },
    },

    hero: {
      badge: 'इजाजतप्राप्त अधिवक्ता — नेपाल बार काउन्सिल',
      hlLine1: 'उद्यमीहरूका',
      hlLine2: 'वकिलहरू।',
      sub: 'कम्पनी निर्माणको कानुनी पाटो हामी सम्हाल्छौं — दर्ता, करार, लगानी र बौद्धिक सम्पत्ति — ताकि तपाईं व्यवसाय बढाउनमा ध्यान दिन सक्नुहोस्। काठमाडौंमा आधारित, संसारभरका संस्थापकहरूसँग काम गर्दै।',
      cta1: 'नि:शुल्क परिचय कल बुक गर्नुहोस्',
      cta2: 'हामीले के सम्हाल्छौं',
      features: [
        { l1: '२००+ उद्यम', l2: 'सल्लाह दिइयो' },
        { l1: 'एकमुष्ट', l2: 'शुल्क' },
        { l1: '२४ घण्टा', l2: 'जवाफ समय' },
      ],
      panelWords: ['न्याय', 'इमान्दारिता', 'उत्कृष्टता'],
      panelBrand: 'अनन्त लिगल',
    },

    marquee: [
      'कम्पनी दर्ता', 'टर्म सिट', 'गोपनीयता करार', 'ट्रेडमार्क',
      'संस्थापक करार', 'वैदेशिक लगानी स्वीकृति', 'क्याप टेबल', 'अनुपालन',
    ],

    divider: {
      label: 'एक नजरमा हाम्रो सेवा',
      head: 'उद्यमले हस्ताक्षर, दर्ता वा विवाद गर्ने सबै कुरा',
    },

    services: {
      label: '§ ०१ / हामी के सम्हाल्छौं',
      head: 'उद्यमलाई चाहिने सबै कानुनी सेवा',
      intro: 'हामी तपाईंको उद्यमका लागि कानुनी पूर्वाधार बिना टाउको दुखाइ सुनिश्चित गर्छौं। तपाईंलाई एकपटकको करार चाहियो वा अन-कल कानुनी साझेदार, हामी साधा, छिटो र पारदर्शी बनाउँछौं। कुनै लुकेका शुल्क छैन, कुनै भ्रमित कानुनी भाषा छैन।',
      learnMore: 'थप जान्नुहोस्',
      items: [
        { title: 'कम्पनी दर्ता', desc: 'प्राइभेट लिमिटेड, OCR दर्ता, PAN र VAT, र संस्थापक कागजात — हप्तौं होइन, केही दिनमै।' },
        { title: 'करार मस्यौदा र समीक्षा', desc: 'संस्थापक करार, NDA, रोजगारी, SaaS र विक्रेता सम्झौता। बलियो मस्यौदा, अझ बलियो वार्ता।' },
        { title: 'वैदेशिक प्रत्यक्ष लगानी', desc: 'FDI स्वीकृति, विदेशी लगानी संरचना, NRB क्लियरन्स र अनुपालन।' },
        { title: 'ड्यु डिलिजेन्स', desc: 'लगानीकर्ता र लेनदेन ड्यु डिलिजेन्स, जोखिम समीक्षा, र सफाई।' },
        { title: 'बौद्धिक सम्पत्ति अधिकार', desc: 'ट्रेडमार्क, प्रतिलिपि अधिकार र तपाईंले बनाउँदै गरेको ब्रान्ड। अरूले लिनुअघि आफ्नो नाम आफ्नै बनाउनुहोस्।' },
        { title: 'अनुपालन र सुशासन', desc: 'वार्षिक विवरण, सञ्चालक निर्णय, ROC र कर व्यवस्थापन। सफा रहनुहोस्, लगानीयोग्य रहनुहोस्।' },
      ],
    },

    approach: {
      label: '§ ०२ / संस्थापकहरू किन रहन्छन्',
      leadPre: 'संस्थापकहरू हामीसँगै रहन्छन् किनभने यहाँको कानुनी काम हुन्छ ',
      leadMark: 'छिटो, एकमुष्ट शुल्कमा, र स्पष्ट',
      leadPost: '।',
      stats: [
        { n: '२००+', k: 'उद्यमलाई सल्लाह, एकल संस्थापकदेखि लगानी पाएका टोलीसम्म' },
        { n: '७२ घण्टा', k: 'करार समीक्षाको सामान्य समय' },
        { n: 'रू.०', k: 'अनपेक्षित शुल्क — हरेक काम एकमुष्ट उद्धृत' },
        { n: '१', k: 'फोन साँच्चै उठाउने व्यक्ति। म।' },
      ],
    },

    team: {
      label: '§ हाम्रो टोली',
      head: 'हाम्रा अधिवक्ताहरूलाई भेट्नुहोस्',
      sub: 'दुई संस्थापक साझेदार जसले हरेक काम व्यक्तिगत रूपमा सम्हाल्छन् — कुनै जुनियर वा हस्तान्तरण छैन, काम गर्ने व्यक्तिसँग सीधा पहुँच मात्र।',
    },

    process: {
      label: '§ ०३ / यसरी काम हुन्छ',
      head: 'चार चरण। कुनै रहस्य छैन।',
      steps: [
        { num: 'चरण ०१', title: 'परिचय कल', desc: 'नि:शुल्क ३० मिनेटको कल। तपाईं के बनाउँदै हुनुहुन्छ र केले निद्रा बिथोलेको छ भन्नुहोस्।' },
        { num: 'चरण ०२', title: 'एकमुष्ट मूल्य', desc: 'काम सुरु हुनुअघि स्पष्ट दायरा र निश्चित शुल्क। पछाडि कुनै मिटर चल्दैन।' },
        { num: 'चरण ०३', title: 'सही ढंगले', desc: 'म मस्यौदा, दर्ता र वार्ता गर्छु। तपाईंलाई सरल भाषामा अपडेट — कानुनी जटिलता होइन।' },
        { num: 'चरण ०४', title: 'सधैँ साथमा', desc: 'तपाईं बढ्दै, लगानी जुटाउँदै र पहिलो दश जनालाई नियुक्त गर्दा निरन्तर सहयोग।' },
      ],
    },

    stories: {
      label: '§ ०४ / संस्थापकका कथा',
      head: 'काम गर्ने संस्थापकहरूसँगै बनाइएको',
      quotes: [
        { text: 'कागजी काममा एक रात पनि नबिताई मेरो स्टार्टअप दर्ता गरेँ र पहिलो चेक पनि बन्द गरेँ। हरेक रुपैयाँ सार्थक भयो।', name: 'आस्था के.', role: 'संस्थापक, फिनटेक' },
        { text: 'अन्ततः एउटा वकिल जसले जवाफ फर्काउँछिन् र कुरा अभियुक्तलाई होइन, मान्छेलाई जस्तै बुझाउँछिन्।', name: 'रिशान टी.', role: 'सह-संस्थापक, D2C ब्रान्ड' },
        { text: 'टर्म सिट समीक्षाले दुई वटा यस्ता धारा समात्यो जसले चुपचाप मेरो कम्पनीको नियन्त्रण नै खोस्ने थियो।', name: 'विवेक एस.', role: 'सीईओ, SaaS स्टार्टअप' },
      ],
    },

    faq: {
      label: '§ ०५ / साना अक्षरको जवाफ',
      head: 'संस्थापकहरूले साँच्चै सोध्ने प्रश्नहरू।',
      items: [
        { q: 'यसको लागत कति हो?', a: 'एकमुष्ट शुल्क, पहिल्यै उद्धृत। परिचय कलपछि कामको निश्चित मूल्य पाउनुहुन्छ — म सुरु गर्नुअघि नै कति तिर्नुहुन्छ थाहा हुन्छ, घण्टा गन्ने कुनै आश्चर्य बिना।' },
        { q: 'के मेरो कम्पनी पूर्ण रूपमा अनलाइन दर्ता गर्न सकिन्छ?', a: 'धेरै हदसम्म, हो। OCR दर्ता, PAN र VAT, र संस्थापक कागजात टाढैबाट सम्हाल्न सकिन्छ। केही हस्ताक्षरबाहेक तपाईंलाई खासै केही गर्नुपर्दैन।' },
        { q: 'के तपाईं विदेशी संस्थापक र वैदेशिक लगानीसँग काम गर्नुहुन्छ?', a: 'प्रायः। म नेपालमा हुने वैदेशिक लगानीको स्वीकृति, संरचना र अनुपालन सम्हाल्छु, साथै तपाईंका लगानीकर्ताका वकिलले माग्ने कागजात पनि।' },
        { q: 'के तपाईं साँच्चै इजाजतप्राप्त वकिल हुनुहुन्छ?', a: 'हो — नेपाल बार काउन्सिलमा दर्ता भएकी इजाजतप्राप्त अधिवक्ता। जेन-जी ऊर्जा नि:शुल्क हो; योग्यता साँचो हो।' },
        { q: 'के तपाईं स्टार्टअपसँग मात्र काम गर्नुहुन्छ?', a: 'प्रायः संस्थापक र बढ्दै गरेका व्यवसाय, किनकि त्यहीँ म सबैभन्दा बढी मूल्य थप्छु। तर जुनसुकै आकारको राम्रो विचार परिचय कलमा सधैँ स्वागत छ।' },
      ],
    },

    cta: {
      h1: 'यसलाई बनाऔँ',
      h2: 'कानुनी।',
      p: 'नि:शुल्क परिचय कल बुक गर्नुहोस् — र एक रुपैयाँ खर्च गर्नुअघि नै तपाईंको उद्यमलाई वास्तवमा के चाहिन्छ थाहा पाउनुहोस्।',
      btn: 'नि:शुल्क कल बुक गर्नुहोस्',
      mailto: 'anantalegal9@gmail.com',
    },

    footer: {
      brandA: 'उद्यमीहरूको',
      brandB: 'वकिल',
      tagline: 'कानुन, तर अर्थपूर्ण बनाउनुहोस्। नेपाल र बाहिर उद्यम बनाउने संस्थापकहरूका लागि सरल व्यवसाय र स्टार्टअप कानुनी सेवा।',
      navigate: 'नेभिगेट',
      getInTouch: 'सम्पर्क गर्नुहोस्',
      address: 'Jal Binayak Dyo Marg, Lalitpur 30802, Nepal',
      hours: 'सोम–शुक्र · १०:००–१८:००',
      copyright: '© २०२६ उद्यमीहरूको वकिल। सर्वाधिकार सुरक्षित।',
      disclaimer: 'यो साइट सामान्य जानकारीका लागि हो र कानुनी सल्लाह होइन। हामी दुवैले लिखित रूपमा सहमत नभएसम्म सम्पर्क गर्दैमा वकिल–ग्राहक सम्बन्ध सिर्जना हुँदैन।',
    },

    about: {
      label: '§ हाम्रोबारे',
      h1: 'हाम्रो टोली',
      sub: 'हाम्रो कानुनी अभ्यास नेपाल र बाहिरका संस्थापकहरूका लागि छिटो, स्पष्ट र व्यवहारिक सहयोगका लागि बनेको हो।',
      teamIntro: 'दुई अधिवक्ताहरूले मिलेर कानुनी सहयोगलाई स्पष्ट, सरल र स्टार्टअप-मित्र बनाउन सहयोग गरिरहेका छन्।',
      team: [
        { image: '/sanskriti-image.jpeg', name: 'अधिवक्ता संस्कृति कोइराला', title: 'संस्थापक साझेदार', degree: 'BA LLB', focus: 'कर्पोरेट तथा वाणिज्य कानून' },
        { image: '/shivani-image.jpeg', name: 'शिवानी बेल्बासे', title: 'संस्थापक साझेदार', degree: 'BA LLB', focus: 'कर्पोरेट तथा वाणिज्य कानून' },
      ],
      bioHead: 'कानुनी जटिलता होइन, संस्थापकको भाषा बोल्ने वकिल।',
      bio: [
        'Ananta Legal मा हामी सामान्य कानुनी कामहरू जस्तै कम्पनी स्थापना, करार र बौद्धिक सम्पत्ति अधिकारको सुरक्षा सम्हाल्छौं, ताकि तपाईं आफ्नो व्यवसाय निर्माणमा केन्द्रित रहन सक्नुहुन्छ। हामीलाई चाहिँ यसैगरी तपाईंको स्टार्टअपको गतिको साथ अगाडि बढ्छ।',
        'धेरै संस्थापकहरूले इक्विटी गुमाएको, म्याद नाघेको र नबुझेका करारमा हस्ताक्षर गरेको देखेपछि, हामीले स्टार्टअपजसरी नै काम गर्ने अभ्यास बनायौं — छिटो, पारदर्शी, र घण्टा गन्ने झमेला बिना।',
        '२००+ उद्यमलाई सल्लाह दिँदै, एकल बुटस्ट्र्यापरदेखि भीसी-समर्थित टोलीसम्म, हामी कम्पनी दर्तादेखि लगानीकर्ताको टर्म सिट, बौद्धिक सम्पत्ति सुरक्षा र नियामक अनुपालनसम्म सबै सम्हाल्छौं। हामी त्यो टोली हौं जसले साँच्चै फोन उठाउँछ।',
        'करार मस्यौदा नगर्दा हामीलाई स्टार्टअप वीकेन्डमा मेन्टरिङ गर्दै, क्याप टेबल संरचनामा रमाउँदै, वा कफीसँगै सरल भाषामा वैदेशिक लगानी नियम बुझाउँदै भेट्न सकिन्छ।',
      ],
      credentials: [
        { h: 'नेपाल बार काउन्सिल', p: 'इजाजतप्राप्त अधिवक्ता, दर्ता सदस्य' },
        { h: 'एल.एल.बी. · कानुन स्नातक', p: 'कर्पोरेट र वाणिज्य कानुनमा विशेषज्ञता' },
        { h: '२००+ उद्यम', p: 'फिनटेक, SaaS, D2C र डीपटेकमा सल्लाह' },
        { h: 'सीमापार तयार', p: 'अन्तर्राष्ट्रिय लगानीकर्ताका लागि वैदेशिक लगानी संरचना' },
      ],
      valuesLabel: '§ मूल्यमान्यता',
      valuesHead: 'हामी केमा विश्वास गर्छौँ',
      values: [
        { title: 'सधैँ सरल भाषा', desc: 'आफ्नै करार बुझ्न सक्नुहुन्न भने त्यसले तपाईंलाई जोगाउँदैन। हामी दिने हरेक कागजात मान्छेका लागि लेखिएको हुन्छ।' },
        { title: 'एकमुष्ट शुल्क, झमेला छैन', desc: 'हामी सुरु गर्नुअघि नै कति तिर्नुहुन्छ ठ्याक्कै थाहा हुन्छ। कुनै आश्चर्य छैन, घण्टा गन्ने तनाव छैन।' },
        { title: 'स्टार्टअप गति', desc: 'तपाईंको लगानी जुटाउने काम करार समीक्षाका लागि ३ हप्ता पर्खन सक्दैन। हामी पुरानो ल फर्मको होइन, संस्थापकको समयतालिकामा काम गर्छौँ।' },
      ],
      labels: { intro: 'हाम्रोबारे', team: 'हाम्रो टोली', bio: 'हाम्रो कथा', values: 'हाम्रो मूल्य' },
    },

    practiceAreas: {
      label: '§ सेवा क्षेत्रहरू',
      h1: 'उद्यमलाई चाहिने सबै कानुनी सेवा',
      sub: ' सरल कानुनी सेवा, पारदर्शी शुल्क। आज आवश्यक सेवा रोज्नुहोस् वा दीर्घकालीन कानुनी साझेदारको रूपमा हामीलाई साथमा राख्नुहोस्।',
      learnMore: 'थप जान्नुहोस्',
      labels: { intro: 'सेवा क्षेत्रहरू', grid: 'सबै सेवा' },
      items: [
        { title: 'कम्पनी दर्ता', desc: 'प्राइभेट लिमिटेड दर्ता, OCR, PAN र VAT, र संस्थापक कागजात — हप्तौं होइन, केही दिनमै दर्ता।', features: ['प्राइभेट लिमिटेड दर्ता', 'OCR र PAN सेटअप', 'संस्थापक करार', 'साझेदारी विलेख'] },
        { title: 'करार, रेडलाइन सहित', desc: 'संस्थापक करार, NDA, रोजगारी, SaaS र विक्रेता सम्झौता। बलियो मस्यौदा, अझ बलियो वार्ता।', features: ['NDA र गोपनीयता', 'SaaS सम्झौता', 'रोजगारी करार', 'विक्रेता र सेवा सम्झौता'] },
        { title: 'लगानी जुटाउने', desc: 'टर्म सिट, SAFE, सेयर सब्स्क्रिप्सन, ड्यु डिलिजेन्स र वैदेशिक लगानी स्वीकृति — ताकि राउन्ड साँच्चै बन्द होस्।', features: ['टर्म सिट समीक्षा', 'SAFE नोट', 'वैदेशिक लगानी स्वीकृति', 'ड्यु डिलिजेन्स सहयोग'] },
        { title: 'बौद्धिक सम्पत्ति', desc: 'ट्रेडमार्क, प्रतिलिपि अधिकार र तपाईंले बनाउँदै गरेको ब्रान्ड। अरूले लिनुअघि आफ्नो नाम आफ्नै बनाउनुहोस्।', features: ['ट्रेडमार्क दर्ता', 'प्रतिलिपि अधिकार दर्ता', 'ब्रान्ड सुरक्षा', 'IP रणनीति'] },
        { title: 'अनुपालन र सुशासन', desc: 'वार्षिक विवरण, सञ्चालक निर्णय, ROC र कर व्यवस्थापन। सफा रहनुहोस्, लगानीयोग्य रहनुहोस्।', features: ['वार्षिक विवरण', 'सञ्चालक निर्णय', 'ROC अनुपालन', 'कर व्यवस्थापन'] },
        { title: 'निकास र विवाद', desc: 'सेयर हस्तान्तरण, अधिग्रहण, र सम्झौता — वा सह-संस्थापक — बिग्रिँदा स्थिर हात।', features: ['सेयर हस्तान्तरण', 'अधिग्रहण संरचना', 'विवाद समाधान', 'सह-संस्थापक निकास'] },
      ],
    },

    practiceDetail: {
      breadcrumb: 'सेवा क्षेत्रहरू',
      statsLabel: 'अङ्कमा',
      notFound: 'सेवा क्षेत्र फेला परेन।',
      back: '← सबै सेवा क्षेत्रमा फर्कनुहोस्',
      details: {
        'company-formation': {
          title: 'कम्पनी दर्ता',
          tagline: 'विचारदेखि दर्तासम्म — हप्तौं होइन, केही दिनमै।',
          intro: 'तपाईं प्रोटोटाइप भएको एकल संस्थापक हुनुहोस् वा लगानी जुटाउन तयार टोली, म तपाईंको कम्पनी दर्ता, अनुपालन र लगानीयोग्य बनाउँछु — शून्य कानुनी टाउको दुखाइसँग।',
          sections: [
            { heading: 'के समावेश छ', items: ['OCR मा प्राइभेट लिमिटेड कम्पनी दर्ता', 'PAN र VAT दर्ता र सेटअप', 'प्रबन्धपत्र र नियमावली मस्यौदा', 'संस्थापक / सेयरधनी करार', 'साझेदारी विलेख र संयुक्त उपक्रम संरचना', 'दर्तापछिको अनुपालन चेकलिस्ट'] },
            { heading: 'म कसरी फरक काम गर्छु', text: 'धेरै वकिलले दर्तालाई फाराम भर्ने काम जस्तो ठान्छन्। म यसलाई तपाईंको कम्पनीको जग ठान्छु — किनकि यो साँच्चै हो। म सही संरचना छान्न, इक्विटी निष्पक्ष बाँड्न र बढ्न सक्ने सुशासन स्थापना गर्न मद्दत गर्छु। सकेसम्म सबै टाढैबाट, हरेक चरणमा सरल भाषामा व्याख्या सहित।' },
          ],
          stats: [{ n: '३-५', k: 'दिन सामान्य दर्ता' }, { n: '२००+', k: 'कम्पनी दर्ता' }, { n: 'रू.०', k: 'अनपेक्षित शुल्क' }],
        },
        'contracts': {
          title: 'करार, रेडलाइन सहित',
          tagline: 'बलियो मस्यौदा। अझ बलियो वार्ता।',
          intro: 'करार तपाईंको व्यवसायको सञ्चालन प्रणाली हो। म तपाईंको करार बलियो, पठनीय र तपाईंले बनाएको कुरा साँच्चै जोगाउने बनाउँछु।',
          sections: [
            { heading: 'के समावेश छ', items: ['गोपनीयता करार (NDA)', 'संस्थापक र सह-संस्थापक करार', 'रोजगारी र ठेकेदार करार', 'SaaS सेवा सर्त र गोपनीयता नीति', 'विक्रेता र सेवा-स्तर सम्झौता', 'करार समीक्षा र रेडलाइनिङ'] },
            { heading: 'करार तपाईंले सोचेभन्दा बढी महत्त्वपूर्ण किन हुन्छ', text: 'खराब करारले पैसा मात्र होइन — नियन्त्रण पनि खोस्छ। मैले संस्थापकहरूले IP गुमाएको, सञ्चालक सिट दिएको र अर्को उद्यमै मार्ने गैर-प्रतिस्पर्धा करारमा हस्ताक्षर गरेको देखेकी छु। मैले मस्यौदा गर्ने हरेक धाराको उद्देश्य हुन्छ, र हरेक समीक्षाले तपाईंले छुटाउने कुरा समात्छ।' },
          ],
          stats: [{ n: '७२ घण्टा', k: 'सामान्य समय' }, { n: '५००+', k: 'करार मस्यौदा' }, { n: '१००%', k: 'सरल भाषा ग्यारेन्टी' }],
        },
        'fundraising-investment': {
          title: 'लगानी जुटाउने',
          tagline: 'ताकि राउन्ड साँच्चै बन्द होस्।',
          intro: 'पुँजी जुटाउनु आफैँमा गाह्रो छ, कानुनी अवरोध त झन्। म कागजात, स्वीकृति र ड्यु डिलिजेन्स सम्हाल्छु ताकि तपाईं आफ्नो पिचमा ध्यान दिन सक्नुहोस्।',
          sections: [
            { heading: 'के समावेश छ', items: ['टर्म सिट समीक्षा र वार्ता', 'SAFE नोट र परिवर्तनीय उपकरण', 'सेयर सब्स्क्रिप्सन करार', 'वैदेशिक लगानी स्वीकृति र NRB अनुपालन', 'क्याप टेबल संरचना र मोडलिङ', 'ड्यु डिलिजेन्स तयारी र डेटा रूम सेटअप'] },
            { heading: 'लगानीकर्ता-तयार, लगानीकर्ता-त्रसित होइन', text: 'म टेबलको दुवैतिर बसेकी छु। लगानीकर्ताका वकिलले के खोज्छन्, कुन रेड फ्ल्यागले सम्झौता मार्छ, र संस्थापकका लागि निष्पक्ष राउन्ड कसरी संरचना गर्ने भन्ने मलाई थाहा छ। पहिलो एन्जल चेक होस् वा सिरिज ए, म कानुनी कारणले पैसा नरोकियोस् भन्ने सुनिश्चित गर्छु।' },
          ],
          stats: [{ n: '५०+', k: 'राउन्ड बन्द' }, { n: '४८ घण्टा', k: 'वैदेशिक लगानी स्वीकृति तयारी' }, { n: '०', k: 'खराब कागजातले मारेका सम्झौता' }],
        },
        'intellectual-property': {
          title: 'बौद्धिक सम्पत्ति',
          tagline: 'अरूले लिनुअघि आफ्नो नाम आफ्नै बनाउनुहोस्।',
          intro: 'तपाईंको ब्रान्ड, कोड, सामग्री — सबै IP हो। म यसलाई दर्ता, सुरक्षित र कानुनी रूपमा तपाईंकै बनाउँछु।',
          sections: [
            { heading: 'के समावेश छ', items: ['ट्रेडमार्क खोज र दर्ता', 'प्रतिलिपि अधिकार दर्ता', 'ब्रान्ड सुरक्षा रणनीति', 'IP हस्तान्तरण करार', 'इजाजत र रोयल्टी संरचना', 'सिज एन्ड डिजिस्ट र कार्यान्वयन'] },
            { heading: 'IP तपाईंको सुरक्षा-घेरा हो', text: 'जहाँ जो कोहीले तपाईंको उत्पादन रातारात नक्कल गर्न सक्छ, त्यहाँ बौद्धिक सम्पत्ति प्रायः तपाईंको एक मात्र वास्तविक प्रतिस्पर्धात्मक लाभ हो। म संस्थापकहरूलाई यसलाई सुरुमै जोगाउन मद्दत गर्छु — प्रतिस्पर्धी, पूर्व कर्मचारी वा खराब साझेदारी करारले लिनुअघि।' },
          ],
          stats: [{ n: '१००+', k: 'ट्रेडमार्क दर्ता' }, { n: '३०', k: 'दिन औसत दर्ता' }, { n: '९५%', k: 'पहिलो प्रयासमै स्वीकृति दर' }],
        },
        'compliance-governance': {
          title: 'अनुपालन र सुशासन',
          tagline: 'सफा रहनुहोस्। लगानीयोग्य रहनुहोस्।',
          intro: 'अनुपालन आकर्षक नहोला, तर यसैले तपाईंको कम्पनी जीवित र लगानीकर्ता विश्वस्त राख्छ। म विवरण सम्हाल्छु ताकि तपाईं व्यवसाय सम्हाल्न सक्नुहोस्।',
          sections: [
            { heading: 'के समावेश छ', items: ['वार्षिक विवरण दाखिला', 'सञ्चालक निर्णय मस्यौदा', 'ROC अनुपालन र प्रतिवेदन', 'कर दर्ता र व्यवस्थापन', 'BAFIA र क्षेत्रगत अनुपालन', 'वृद्धि-चरणका कम्पनीका लागि सुशासन ढाँचा सेटअप'] },
            { heading: 'वृद्धिको साधनका रूपमा अनुपालन', text: 'धेरै संस्थापकले अनुपालनलाई झन्झट ठान्छन्। चलाख संस्थापकले यसलाई विश्वासको संकेत ठान्छन्। सफा खाता, उचित सुशासन र अद्यावधिक विवरण लगानीकर्ताले ड्यु डिलिजेन्समा सबैभन्दा पहिले जाँच्ने कुरा हुन्। म तपाईंलाई उत्कृष्ट रूपमा उत्तीर्ण बनाउँछु।' },
          ],
          stats: [{ n: '१००%', k: 'समयमै दाखिला दर' }, { n: '०', k: 'मेरा ग्राहकलाई जरिवाना' }, { n: '२४ घण्टा', k: 'अत्यावश्यक दाखिलामा जवाफ' }],
        },
        'exits-disputes': {
          title: 'निकास र विवाद',
          tagline: 'कुरा जटिल हुँदा स्थिर हात।',
          intro: 'सपनाको अधिग्रहण होस् वा सह-संस्थापकको दुःस्वप्न, म कानुनी जटिलता पार गराउँछु ताकि तपाईं अर्कोपट्टि सकुशल निस्कनुहोस्।',
          sections: [
            { heading: 'के समावेश छ', items: ['सेयर हस्तान्तरण र बायआउट करार', 'अधिग्रहण संरचना र वार्ता', 'सह-संस्थापक निकास र छुट्टिने करार', 'विवाद समाधान र मध्यस्थता', 'खारेजी र विघटन', 'निकासपछि गैर-प्रतिस्पर्धा र IP हस्तान्तरण'] },
            { heading: 'निकास नराम्रो हुनुपर्दैन', text: 'उत्कृष्ट निकास ती हुन् जसको योजना पहिल्यै बनाइन्छ। म संस्थापकहरूलाई पहिलो दिनदेखि नै करारमा निकासका व्यवस्था राख्न मद्दत गर्छु — र अनपेक्षित निकास हुँदा, भावनालाई कानुनी कामबाट अलग राख्ने स्थिर हात म नै हुन्छु।' },
          ],
          stats: [{ n: '३०+', k: 'निकास सम्हालिएका' }, { n: '९०%', k: 'मुद्दा बिना समाधान' }, { n: '०', k: 'बिग्रेका सम्बन्ध' }],
        },
      },
    },

    contact: {
      label: '§ सम्पर्क',
      h1: 'केही कानुनी कुरा बनाऔँ',
      sub: 'स्मार्ट व्यवसायहरूलाई स्मार्ट कानुनी कदम चाहिन्छ। कुनै लुकेका शुल्क वा आश्चर्यजनक इनव्वाइस छैनन्। नि:शुल्क पहिलो परामर्श कल वा अग्रिम उद्धृतिका लागि सम्पर्क गर्नुहोस्।',
      labels: { intro: 'सम्पर्क', form: 'कल अनुरोध', map: 'हामीलाई भेट्नुहोस्' },
      emailTitle: 'सिधै इमेल',
      emailNote: '२४ घण्टाभित्र जवाफ',
      phoneTitle: 'फोन सहयोग',
      phoneNote: 'सोम–शुक्र, १०:००–१८:००',
      officeTitle: 'कार्यालय ठेगाना',
      officeName: 'Ananta Legal',
      officeAddr: 'Jal Binayak Dyo Marg, Lalitpur 30802, Nepal',
      formTitle: 'परामर्श अनुरोध',
      fName: 'पूरा नाम',
      fNamePh: 'जेन डो',
      fEmail: 'इमेल ठेगाना',
      fEmailPh: 'jane@company.com',
      fCompany: 'कम्पनी / परियोजनाको नाम',
      fCompanyPh: 'एक्मे कर्प',
      fService: 'आवश्यक सेवा',
      services: {
        'company-formation': 'कम्पनी दर्ता',
        'contracts': 'करार र NDA',
        'fundraising-investment': 'लगानी र SAFE',
        'intellectual-property': 'ट्रेडमार्क र IP',
        'compliance-governance': 'अनुपालन र ROC',
        'other': 'अन्य व्यवसाय कानुन',
      },
      fMessage: 'तपाईं के बनाउँदै हुनुहुन्छ छोटकरीमा लेख्नुहोस्',
      fMessagePh: 'आफ्नो उद्यम र कुन कानुनी सहयोग चाहिन्छ भन्ने बारे केही लेख्नुहोस्...',
      submit: 'अनुरोध पठाउनुहोस्',
      submitting: 'पठाउँदै…',
      successTitle: 'सफल!',
      successBody: 'तपाईंको अनुरोध पठाइयो। हामी २४ घण्टाभित्र जवाफ दिने छौँ।',
      errorTitle: 'केही समस्या भयो।',
      errorBody: 'तपाईंको सन्देश पठाउन सकिएन। कृपया फेरि प्रयास गर्नुहोस् वा सिधै हामीलाई इमेल गर्नुहोस्।',
      mapTitle: 'हाम्रो स्थान',
    },

    blog: {
      label: '§ ब्लग',
      h1: 'संस्थापकहरूका लागि कानुनी अन्तर्दृष्टि',
      sub: 'नेपालको नियामक परिदृश्य पार गर्न मद्दत गर्ने सरल भाषाका गाइड, विश्लेषण र व्यावहारिक चेकलिस्ट।',
      write: 'पोस्ट लेख्नुहोस्',
      readGuide: 'गाइड पढ्नुहोस्',
      labels: { intro: 'ब्लग', grid: 'लेखहरू' },
      posts: {
        'startup-incorporation-nepal-2026': { title: 'नेपालमा टेक स्टार्टअप कसरी दर्ता गर्ने (२०२६ गाइड)', excerpt: 'OCR मा प्राइभेट लिमिटेड दर्ता, PAN/VAT लिने, र पुरानो झन्झट बिना संस्थापक सेयर व्यवस्थापन गर्ने चरणबद्ध मार्गदर्शन।', category: 'दर्ता', date: 'जुन १८, २०२६', readTime: '६ मिनेट पढाइ' },
        'safe-notes-nepal-fundraising': { title: 'के SAFE नोट नेपालको कम्पनी ऐनअन्तर्गत लागू हुन्छ?', excerpt: 'नेपालमा प्रारम्भिक चरणको स्टार्टअप लगानीका लागि कानुनी संयन्त्र, परिवर्तनीय ऋण संरचना र वैकल्पिक टर्म सिट बुझ्दै।', category: 'लगानी', date: 'मे २४, २०२६', readTime: '८ मिनेट पढाइ' },
        'trademark-registration-brand-protection': { title: 'आफ्नो घेरा जोगाउनुहोस्: नेपालमा ट्रेडमार्क दर्ता', excerpt: 'आफ्नो D2C वा SaaS ब्रान्ड विस्तार गर्नुअघि स्थानीय ट्रेडमार्क दर्ता किन महत्त्वपूर्ण छ, र उद्योग विभागको प्रक्रिया कसरी चल्छ।', category: 'बौद्धिक सम्पत्ति', date: 'अप्रिल १२, २०२६', readTime: '५ मिनेट पढाइ' },
      },
    },

    blogPost: {
      breadcrumb: 'ब्लग',
      crumbTail: 'लेख',
      publishedOn: 'प्रकाशित मिति',
      notFound: 'लेख फेला परेन।',
      back: '← सबै लेखमा फर्कनुहोस्',
      labels: { title: 'लेख', body: 'पढ्नुहोस्' },
      content: {
        'startup-incorporation-nepal-2026': [
          { p: 'नेपालमा कम्पनी दर्ता गर्नु ऐतिहासिक रूपमा ढिलो र कागजी झन्झटको रूपमा हेरिन्थ्यो। तर कम्पनी रजिस्ट्रारको कार्यालय (OCR) को डिजिटल प्रक्रियामा भएका हालका सुधारका कारण अब टेक स्टार्टअप धेरै छिटो दर्ता गर्न सम्भव छ। यस गाइडमा, हामी पिच डेकबाट पूर्ण दर्ता भएको, बैंक खाता खोल्न तयार प्राइभेट लिमिटेड कम्पनीसम्मको चरणबद्ध प्रक्रिया खुलाउँछौँ।' },
          { h2: 'चरण १: कम्पनीको नाम आरक्षण' },
          { p: 'सबै कुरा OCR अनलाइन पोर्टलबाट सुरु हुन्छ। तपाईंले एउटा अद्वितीय नाम प्रस्ताव गर्नुपर्छ। अस्वीकृति रोक्न, प्रस्तावित नामले तपाईंको उद्योग प्रतिनिधित्व गरोस् र विद्यमान व्यवसायसँग नबाझियोस् भन्ने सुनिश्चित गर्नुहोस्। "नेपाल" वा सामान्य शब्द भएका नामलाई विशेष जाँच आवश्यक हुन्छ।' },
          { h2: 'चरण २: प्रबन्धपत्र र नियमावली तयारी' },
          { p: 'प्रबन्धपत्र (MoA) र नियमावली (AoA) तपाईंको कम्पनीको मूल संविधान हो। यी कागजातले तपाईंको व्यावसायिक उद्देश्य, सेयर संरचना, सञ्चालक अधिकार र पुँजी आवश्यकता परिभाषित गर्छन्। टेक स्टार्टअपका लागि भविष्यका परिवर्तन (जस्तै SaaS, फिनटेक, परामर्श) समेट्न फराकिलो उद्देश्य धारा लेख्नु महत्त्वपूर्ण हुन्छ।' },
          { quote: '"आफ्नो MoA र AoA का लागि पूर्वनिर्धारित टेम्प्लेट कहिल्यै प्रयोग नगर्नुहोस्। तिनमा मानक स्टार्टअप सुशासन धारा हुँदैनन् र पहिलो राउन्ड जुटाउँदा टाउको दुखाइ निम्त्याउँछन्।"' },
          { h2: 'चरण ३: दर्ता र OCR शुल्क' },
          { p: 'नाम स्वीकृत भई MoA/AoA मस्यौदा भएपछि, तपाईंले स्क्यान गरिएका, हस्ताक्षरित प्रतिलिपि अपलोड गर्नुहुन्छ। OCR दर्ता शुल्क तपाईंको अधिकृत पुँजीका आधारमा क्रमिक रूपमा गणना गरिन्छ। अधिकृत पुँजी हालको आवश्यकताको नजिक राख्दा सरकारी दर्ता शुल्क कम रहन्छ।' },
          { h2: 'चरण ४: PAN, VAT र OCR साइन-अफ' },
          { p: 'OCR ले दर्ता प्रमाणपत्र जारी गरेपछि, तपाईंले स्थायी लेखा नम्बर (PAN) का लागि आन्तरिक राजस्व विभाग (IRD) मा दर्ता गर्नुपर्छ। सफ्टवेयर बिक्री वा निर्यात गर्ने टेक व्यवसायलाई राजस्व सीमाअनुसार VAT दर्ता पनि आवश्यक पर्न सक्छ।' },
        ],
        'safe-notes-nepal-fundraising': [
          { p: 'सिम्पल एग्रिमेन्ट फर फ्युचर इक्विटी (SAFE) प्रारम्भिक पुँजी जुटाउन विश्वभर प्रयोग हुने मानक उपकरण हो। तर नेपालमा पुँजी जुटाउनु कडा पुँजी आयात कानुन र नेपाल कम्पनी ऐन २०६३ का विशिष्ट परिभाषाका कारण अनौठो चुनौतीपूर्ण छ।' },
          { h2: 'द्वन्द्व: परिवर्तनीय उपकरण बनाम नेपाल कानुन' },
          { p: 'कम्पनी ऐनअन्तर्गत, सेयर परम्परागत रूपमा अंकित मूल्य (सामान्यतया रू. १००) मा जारी गरिन्छ। अनिश्चित मूल्याङ्कन सीमामा "भविष्यमा इक्विटी दिने वाचा" को अवधारणा OCR ले स्पष्ट रूपमा नियमन गर्दैन। यसले परम्परागत विदेशी SAFE सिधै दर्ता गर्न कठिन बनाउँछ।' },
          { h2: 'उपाय र वैकल्पिक टर्म सिट' },
          { p: 'नेपालमा SAFE वा परिवर्तनीय ऋण काम लाग्न, संस्थापकले करारलाई सेयर सब्स्क्रिप्सन करार (SSA) सँग जोड्नुपर्छ वा इक्विटीविरुद्धको अग्रिमका रूपमा संरचना गर्नुपर्छ। विदेशी भेन्चर क्यापिटलका लागि, पुँजी स्थानीय बैंक खातामा प्रवेश गर्नुअघि उद्योग विभागबाट वैदेशिक लगानी (FDI) स्वीकृति र नेपाल राष्ट्र बैंक (NRB) को स्वीकृति अनिवार्य हुन्छ।' },
          { quote: '"नेपालमा सिधै पैसा सार्ने आशामा विदेशी लगानीकर्तासँग सामान्य YC SAFE मा हस्ताक्षर नगर्नुहोस्। तपाईंलाई NRB को विदेशी विनिमय नियम पालना गर्ने स्थानीयकृत संस्करण चाहिन्छ।"' },
        ],
        'trademark-registration-brand-protection': [
          { p: 'धेरै स्टार्टअप संस्थापकले ब्रान्ड सुरक्षाभन्दा उत्पादन निर्माणलाई प्राथमिकता दिन्छन्। नेपालमा, ट्रेडमार्क अधिकार "पहिले प्रयोग" होइन "पहिले दर्ता" नियमका आधारमा दिइन्छ। यसको अर्थ कसैले तपाईंको ब्रान्ड नाम पहिले दर्ता गर्‍यो भने तपाईं कानुनी रूपमा पुन: ब्रान्डिङ गर्न बाध्य हुन सक्नुहुन्छ।' },
          { h2: 'उद्योग विभागमा ट्रेडमार्क प्रक्रिया' },
          { p: 'ट्रेडमार्क उद्योग विभाग (DOI) मा दर्ता गरिन्छ। प्रक्रियामा ट्रेडमार्क खोज, विशिष्ट वर्गअन्तर्गत आवेदन दाखिला, विभागद्वारा परीक्षण, र विरोध जाँचका लागि औद्योगिक बुलेटिनमा प्रकाशन समावेश हुन्छ।' },
          { h2: 'संस्थापकका लागि मुख्य रणनीति' },
          { ul: ['चाँडै दाखिला गर्नुहोस्: कम्पनी दर्तापछि तुरुन्तै ट्रेडमार्क आवेदन पेस गर्नुहोस्।', 'बलियो नाम छान्नुहोस्: सामान्य वा अति वर्णनात्मक नाम DOI परीक्षकले प्रायः अस्वीकार गर्छ।', 'लोगो र पाठ दुवै दर्ता गर्नुहोस्: बलियो ब्रान्ड घेरा बनाउन दुवै तत्व सुरक्षित गर्नुहोस्।'] },
        ],
      },
    },

    origin: {
      label: '§ उत्पत्ति कथा',
      h1: 'Ananta Legal किन अस्तित्वमा छ',
      sub: 'निर्माताहरूका लागि बनाइएको ल फर्म निर्माणको कथा।',
      journeyHead: 'यात्रा',
      journey: [
        { year: '२०२३ — बीज', h: 'पुरानो समस्या', p: 'काठमाडौँका परम्परागत कर्पोरेट ल फर्ममा अभ्यास गर्दा, संस्कृतिले एउटा ढाँचा देखिन्: प्रारम्भिक चरणका संस्थापकहरू या त गुणस्तरीय कानुनी सहयोगबाट बाहिरिन्थे या टेक्नोलोजी स्टार्टअप कसरी चल्छन् भन्नेसँग नमिल्ने पुरानो शब्दजालले भरिएका कागजात पाउँथे।' },
        { year: '२०२४ — प्रयोग', h: 'एकमुष्ट-शुल्क परामर्श', p: 'संस्कृतिले स्पष्ट, एकमुष्ट उद्धृत मूल्यमा संस्थापकहरूलाई साथमा मद्दत गर्न थालिन्। मिनेटमा बिलिङ छैन, अनपेक्षित बिल छैन। प्रतिक्रिया तत्काल आयो — संस्थापकहरूले कानुनी सल्लाह मात्र होइन; आफ्नो गतिमा काम गर्ने साझेदार चाहन्थे।' },
        { year: '२०२६ — आज', h: 'Ananta Legal', p: 'Ananta Legal आधिकारिक रूपमा काठमाडौँमा टेक स्टार्टअप, व्यवसाय र सीमापार उद्यमका लागि समर्पित फर्मका रूपमा स्थापना भयो। आज, हामी फिनटेक, SaaS र D2C मा २०० भन्दा बढी उद्यमलाई सल्लाह दिन्छौँ।' },
      ],
      whyLabel: '§ लक्षित वर्ग',
      whyHead: 'किन विशेष गरी उद्यमीहरूका लागि?',
      why: [
        { emoji: '⚡', h: 'गति नै अस्तित्व हो', p: 'परम्परागत ल फर्मलाई सामान्य सम्झौता मस्यौदा गर्न हप्तौं लाग्छ। स्टार्टअप दिनमा चल्छन्। हामी संस्थापकको समयतालिकामा सम्झौता बन्द गर्न र कागजात दाखिला गर्न आफ्नो कार्यप्रवाह संरचना गर्छौँ।' },
        { emoji: '📉', h: 'बजेट पूर्वानुमान', p: 'राजस्वअघिको चरणमा, तपाईं खुला घण्टा-बिलिङ प्रणाली धान्न सक्नुहुन्न। एकमुष्ट शुल्कले कानुनी खर्चमा पूर्ण पूर्वानुमान दिन्छ।' },
        { emoji: '🤝', h: 'सरल भाषाको साझेदारी', p: 'हामी करारलाई सहकार्यका व्यावसायिक साधन ठान्छौँ, शत्रुतापूर्ण प्राज्ञिक कागज होइन। हामी दुवै पक्षले सजिलै पढ्न सक्ने सफा, स्पष्ट कागजात मस्यौदा गर्छौँ।' },
      ],
      motivationHead: 'प्रेरणा',
      motivation1: 'नेपालमा, उद्यम सुरु गर्नु आफैँमा उकालो लडाइँ हो। नियामक झन्झट, विदेशी विनिमय अनुपालन र पुरानो कर संरचनाका बीच, उद्यमीहरूले ठूलो घर्षण सामना गर्छन्।',
      motivationQuote: '"कानुन तपाईंको उद्यम छिटो बढाउने साधन हुनुपर्छ, अवरोध होइन।"',
      motivation2: 'हाम्रो प्रेरणा सरल छ: बाटो सफा गर्ने ताकि संस्थापकहरूले बनाउन सकून्। तपाईंको काँधबाट कानुनी भार हटाएर, हामी तपाईंलाई उत्पादन, ग्राहक वृद्धि र विस्तारमा ध्यान दिने मनको शान्ति दिन्छौँ।',
      labels: { intro: 'उत्पत्ति कथा', journey: 'यात्रा', why: 'लक्षित वर्ग', motivation: 'प्रेरणा' },
    },

    leadMagnet: {
      label: '§ लिड म्याग्नेट',
      h1: 'संस्थापकहरूका लागि नि:शुल्क कानुनी गाइड',
      sub: 'नेपालमा कानुनी अनुपालनबारे २०२६ उद्यमी गाइड। हाम्रो स्पष्ट, व्यावहारिक पुस्तिकासँग कानुनी टाउको दुखाइ छोड्नुहोस्।',
      pdf: 'PDF',
      previewHead: '२०२६ अनुपालन पुस्तिका',
      previewP: 'नेपालमा टेक, SaaS, D2C र वैदेशिक लगानी उद्यमका लागि सरल भाषाका गाइड, चेकलिस्ट र समयतालिकाका ४२ पृष्ठ।',
      formHead: 'गाइड डाउनलोड गर्नुहोस्',
      formP: 'PDF गाइड र हाम्रो मासिक कानुनी अपडेट न्युजलेटरमा तत्काल पहुँच पाउनुहोस्।',
      features: ['सही दर्ता: चरणबद्ध चेकलिस्ट', 'इक्विटी विभाजन गणना र भेस्टिङ टेम्प्लेट', 'वैदेशिक लगानी (FDI) निर्देशिका र सीमा', 'ट्रेडमार्क र IP सुरक्षा चेकलिस्ट'],
      fName: 'तपाईंको नाम',
      fNamePh: 'सिद्धार्थ',
      fEmail: 'इमेल ठेगाना',
      fEmailPh: 'sid@company.com',
      fCompany: 'कम्पनीको नाम',
      fCompanyPh: 'एक्मे कर्प',
      submit: 'नि:शुल्क गाइड लिनुहोस्',
      successTitle: 'धन्यवाद!',
      successBody: 'तपाईंको डाउनलोड स्वतः सुरु हुनुपर्छ। आफ्नो डाउनलोड फोल्डर जाँच्नुहोस्।',
      labels: { intro: 'नि:शुल्क गाइड', offer: 'डाउनलोड' },
    },
  },
};
