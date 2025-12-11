// Simple front-end i18n switcher for Albanian (default), English, and German
(function () {
  const translations = {
    sq: {
      'lang.current': 'Shqip',
      'breadcrumb.home': 'Kreu',
      'breadcrumb.about': 'Rreth nesh',
      'breadcrumb.contact': 'Kontakti',
      'nav.home': 'Kreu',
      'nav.about': 'Rreth Nesh',
      'nav.contact': 'Kontakti',
      'hero.badge': 'Pasuri të paluajtshme premium në Tiranë',
      'hero.title': 'Zgjedhje të zgjuara. Jetesë më e mirë.',
      'hero.lead': 'Zbuloni apartamente, penthouse dhe ambiente komerciale me një agjent dedikuar.',
      'hero.cta': 'Rezervo një konsultim',
      'services.subheading': 'Shërbimet tona',
      'services.heading': 'Shërbime Profesionale Imobiliare',
      'services.buy.title': 'Asistencë për blerje prone',
      'services.buy.desc': 'Ju ndihmojmë të gjeni pronën e duhur në Tiranë me udhëzim të qartë.',
      'services.sell.title': 'Shitje & Marketing',
      'services.sell.desc': 'Listim, promovim dhe negociim për të shitur shpejt dhe me çmimin më të mirë.',
      'services.rent.title': 'Shërbime me qira',
      'services.rent.desc': 'Lidhim qiradhënësit dhe qiramarrësit me lista të verifikuara.',
      'services.consult.title': 'Konsulencë Imobiliare',
      'services.consult.desc': 'Këshilla për vlera, trende dhe mundësi investimi.',
      'workflow.subheading': 'Procesi',
      'workflow.heading': 'Si funksionon',
      'workflow.step1.title': 'Planifiko një konsultim',
      'workflow.step1.desc': 'Diskuto synimet, zonën e preferuar dhe llojin e pronës.',
      'workflow.step2.title': 'Takohu me agjentin',
      'workflow.step2.desc': 'Agjenti paraqet opsionet më të mira për nevojat tuaja.',
      'workflow.step3.title': 'Vizito pronat',
      'workflow.step3.desc': 'Organizojmë vizita dhe vlerësojmë çdo opsion së bashku.',
      'workflow.step4.title': 'Mbyllja e marrëveshjes',
      'workflow.step4.desc': 'Mbështesim negociatat, dokumentet dhe dorëzimin final.',
      'about.title': 'Ne i vëmë njerëzit të parët.',
      'about.p1': 'Misioni ynë është të ndihmojmë njerëzit të gjejnë vendin e duhur për të jetuar.',
      'about.p2': 'Kuptojmë nevojat tuaja dhe ju mbështesim në çdo hap me ndershmëri dhe përkushtim.',
      'testimonials.subheading': 'Dëshmi',
      'testimonials.heading': 'Klientë të Lumtur',
      'agents.subheading': 'Agjentë',
      'agents.heading': 'Agjentët Tanë',
      'footer.tagline': 'Ju udhëheqim në çdo hap me këshilla transparente dhe shërbim të kujdesshëm.',
      'footer.quicklinks': 'Linqe të Shpejta',
      'footer.featured': 'Lista të Veçuara',
      'footer.about': 'Rreth Deal',
      'footer.book': 'Rezervo një vizitë',
      'footer.question': 'Keni një pyetje?'
    },
    en: {
      'lang.current': 'English',
      'breadcrumb.home': 'Home',
      'breadcrumb.about': 'About us',
      'breadcrumb.contact': 'Contact',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.badge': 'Premium Real Estate In Tirana',
      'hero.title': 'Smart Choices. Better Living.',
      'hero.lead': 'Discover curated apartments, penthouses, and commercial spaces with a dedicated agent.',
      'hero.cta': 'Book a Consultation',
      'services.subheading': 'Our Services',
      'services.heading': 'Professional Real Estate Services',
      'services.buy.title': 'Property Buying Assistance',
      'services.buy.desc': 'We help you find the right property in Tirana with clear guidance.',
      'services.sell.title': 'Property Selling & Marketing',
      'services.sell.desc': 'Listing, promotion, and negotiation to sell quickly at the best price.',
      'services.rent.title': 'Rental Services',
      'services.rent.desc': 'We connect tenants and landlords with verified listings.',
      'services.consult.title': 'Real Estate Consulting',
      'services.consult.desc': 'Advice on values, trends, and investment opportunities.',
      'workflow.subheading': 'Work flow',
      'workflow.heading': 'How it works',
      'workflow.step1.title': 'Schedule a Consultation',
      'workflow.step1.desc': 'Discuss goals, preferred location, and property type.',
      'workflow.step2.title': 'Meet Your Agent',
      'workflow.step2.desc': 'Your agent presents the best options for your needs.',
      'workflow.step3.title': 'Visit Properties',
      'workflow.step3.desc': 'We arrange viewings and evaluate each option together.',
      'workflow.step4.title': 'Close the Deal',
      'workflow.step4.desc': 'We handle negotiation, paperwork, and final handover support.',
      'about.title': 'We Put People First.',
      'about.p1': 'Our mission is to help people find the perfect place to call home.',
      'about.p2': 'We understand your needs and support you at every step with honesty and dedication.',
      'testimonials.subheading': 'Testimonial',
      'testimonials.heading': 'Happy Clients',
      'agents.subheading': 'Agents',
      'agents.heading': 'Our Agent',
      'footer.tagline': 'Guiding you at every step with transparent advice and boutique service.',
      'footer.quicklinks': 'Quick Links',
      'footer.featured': 'Featured Listings',
      'footer.about': 'About Deal',
      'footer.book': 'Book a Visit',
      'footer.question': 'Have a Question?'
    },
    de: {
      'lang.current': 'Deutsch',
      'breadcrumb.home': 'Startseite',
      'breadcrumb.about': 'Über uns',
      'breadcrumb.contact': 'Kontakt',
      'nav.home': 'Startseite',
      'nav.about': 'Über uns',
      'nav.contact': 'Kontakt',
      'hero.badge': 'Premium-Immobilien in Tirana',
      'hero.title': 'Kluge Entscheidungen. Besser leben.',
      'hero.lead': 'Entdecken Sie kuratierte Wohnungen, Penthäuser und Gewerbeflächen mit einem dedizierten Makler.',
      'hero.cta': 'Beratung buchen',
      'services.subheading': 'Unsere Leistungen',
      'services.heading': 'Professionelle Immobiliendienstleistungen',
      'services.buy.title': 'Kaufberatung',
      'services.buy.desc': 'Wir finden die passende Immobilie in Tirana mit klarer Begleitung.',
      'services.sell.title': 'Verkauf & Marketing',
      'services.sell.desc': 'Listing, Promotion und Verhandlung für einen schnellen Verkauf zum besten Preis.',
      'services.rent.title': 'Vermietungsservice',
      'services.rent.desc': 'Wir verbinden Vermieter und Mieter mit geprüften Inseraten.',
      'services.consult.title': 'Immobilienberatung',
      'services.consult.desc': 'Beratung zu Werten, Trends und Investitionschancen.',
      'workflow.subheading': 'Ablauf',
      'workflow.heading': 'So funktioniert es',
      'workflow.step1.title': 'Beratung vereinbaren',
      'workflow.step1.desc': 'Ziele, bevorzugte Lage und Immobilientyp besprechen.',
      'workflow.step2.title': 'Lernen Sie Ihren Makler kennen',
      'workflow.step2.desc': 'Der Makler zeigt die besten Optionen für Ihre Anforderungen.',
      'workflow.step3.title': 'Objektbesichtigungen',
      'workflow.step3.desc': 'Wir organisieren Besichtigungen und bewerten jede Option gemeinsam.',
      'workflow.step4.title': 'Abschluss des Deals',
      'workflow.step4.desc': 'Wir übernehmen Verhandlung, Unterlagen und finale Übergabe.',
      'about.title': 'Menschen stehen an erster Stelle.',
      'about.p1': 'Unsere Mission ist es, Menschen zu helfen, ihr perfektes Zuhause zu finden.',
      'about.p2': 'Wir verstehen Ihre Bedürfnisse und begleiten Sie ehrlich und engagiert in jedem Schritt.',
      'testimonials.subheading': 'Referenzen',
      'testimonials.heading': 'Glückliche Kunden',
      'agents.subheading': 'Makler',
      'agents.heading': 'Unsere Agenten',
      'footer.tagline': 'Wir führen Sie mit transparenter Beratung und persönlichem Service.',
      'footer.quicklinks': 'Schnelle Links',
      'footer.featured': 'Ausgewählte Inserate',
      'footer.about': 'Über Deal',
      'footer.book': 'Besuch buchen',
      'footer.question': 'Haben Sie eine Frage?'
    }
  };

  const elements = () => document.querySelectorAll('[data-i18n]');
  const langToggle = () => document.querySelectorAll('[data-lang]');

  function applyLang(lang) {
    const dict = translations[lang] || translations.sq;
    elements().forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (!value) return;

      // Placeholder support
      if (el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', value);
      }

      // If element is text-only, replace textContent
      if (el.childElementCount === 0) {
        el.textContent = value;
      } else {
        // Update text nodes while keeping child structure
        el.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.nodeValue = value;
          }
        });
      }
    });

    const currentLabel = document.querySelector('[data-i18n="lang.current"]');
    if (currentLabel && dict['lang.current']) currentLabel.textContent = dict['lang.current'];
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }

  function init() {
    const saved = localStorage.getItem('lang') || 'sq';
    applyLang(saved);

    langToggle().forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const newLang = item.getAttribute('data-lang');
        applyLang(newLang);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

