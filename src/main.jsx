import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './i18n/LanguageContext';
import './styles/tokens.css';
import './styles/base.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/marquee.css';
import './styles/services.css';
import './styles/approach.css';
import './styles/process.css';
import './styles/stories.css';
import './styles/faq.css';
import './styles/cta.css';
import './styles/footer.css';
import './styles/about.css';
import './styles/practice.css';
import './styles/contact.css';
import './styles/blog.css';
import './styles/origin.css';
import './styles/leadmagnet.css';
import './styles/chat.css';
import './styles/blog-editor.css';
import './styles/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
