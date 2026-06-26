export type Lang = 'it' | 'es'

export const dict = {
  nav: {
    studio:   { it: 'Studio',   es: 'Studio' },
    academy:  { it: 'Academy',  es: 'Academy' },
    podcast:  { it: 'Podcast',  es: 'Podcast' },
    contact:  { it: 'Contatti', es: 'Contacto' },
  },
  hero: {
    eyebrow:  { it: 'ROMA · AI BRAND', es: 'ROMA · AI BRAND' },
    title:    { it: 'MAMI', es: 'MAMI' },
    subtitle: {
      it: "Un'unica visione, tre mondi: infrastruttura AI, formazione e voce per le attività locali.",
      es: 'Una sola visión, tres mundos: infraestructura de IA, formación y voz para los negocios locales.',
    },
    cta1: { it: 'Scopri MAMI',   es: 'Descubre MAMI' },
    cta2: { it: 'Parla con noi', es: 'Hablemos' },
  },
  manifesto: {
    line: {
      it: "Non siamo solo un'agenzia di marketing. Costruiamo sistemi completi con Intelligenza Artificiale che portano più clienti, automatizzano i processi e fanno crescere i tuoi ricavi.",
      es: 'No somos solo una agencia de marketing. Construimos sistemas completos con Inteligencia Artificial que traen más clientes, automatizan procesos y hacen crecer tus ingresos.',
    },
  },

  // ─── CREATIVE STUDIO ───────────────────────────────────────────────────────
  studio: {
    label:   { it: 'MAMI Creative Studio', es: 'MAMI Creative Studio' },
    tag:     { it: 'Infrastruttura AI per il tuo business', es: 'Infraestructura IA para tu negocio' },
    heading: {
      it: 'Non solo marketing.\nSistemi AI completi per far crescere la tua attività.',
      es: 'No solo marketing.\nSistemas de IA completos para hacer crecer tu negocio.',
    },
    intro: {
      it: "Lavoriamo con ristoranti, B&B, hotel, parrucchieri, estetisti, palestre, boutique e molto altro. Progettiamo l'intera infrastruttura digitale e AI che trasforma visitatori in clienti reali — 24 ore su 24, 7 giorni su 7.",
      es: 'Trabajamos con restaurantes, B&B, hoteles, peluquerías, estéticas, gimnasios, boutiques y mucho más. Diseñamos toda la infraestructura digital e IA que convierte visitas en clientes reales — 24 horas al día, 7 días a la semana.',
    },
    services_label: { it: 'I nostri servizi', es: 'Nuestros servicios' },
    services: [
      { it: 'Siti Web & Landing Page', es: 'Sitios Web & Landing Pages' },
      { it: 'Negozi Online', es: 'Tiendas Online' },
      { it: 'Branding & Identità Visiva', es: 'Branding & Identidad Visual' },
      { it: 'Marketing Digitale', es: 'Marketing Digital' },
      { it: 'Gestione Social Media', es: 'Gestión de Redes Sociales' },
      { it: 'Google Business & SEO Locale', es: 'Google Business & SEO Local' },
      { it: 'Pubblicità Online', es: 'Publicidad Online' },
      { it: 'Foto & Video Professionali', es: 'Foto & Vídeo Profesional' },
      { it: 'Reels & Contenuti', es: 'Reels & Contenido' },
      { it: 'Chatbot AI & Assistenti Virtuali', es: 'Chatbots IA & Asistentes Virtuales' },
      { it: 'WhatsApp Business AI', es: 'WhatsApp Business IA' },
      { it: 'Automazioni & Integrazioni', es: 'Automatizaciones & Integraciones' },
      { it: 'CRM & Funnel di Vendita', es: 'CRM & Funnels de Venta' },
      { it: 'Email Marketing', es: 'Email Marketing' },
      { it: 'Sistemi di Prenotazione', es: 'Sistemas de Reservas' },
      { it: 'Dashboard & Analisi Dati', es: 'Dashboards & Analítica' },
    ],
    clients_label: { it: 'Lavoriamo con', es: 'Trabajamos con' },
    clients: [
      { it: 'Ristoranti', es: 'Restaurantes' },
      { it: 'Airbnb & B&B', es: 'Airbnb & B&B' },
      { it: 'Hotel', es: 'Hoteles' },
      { it: 'Parrucchieri & Barbieri', es: 'Peluquerías & Barberías' },
      { it: 'Centri Estetici', es: 'Centros de Estética' },
      { it: 'Palestre', es: 'Gimnasios' },
      { it: 'Boutique', es: 'Boutiques' },
      { it: 'Cliniche', es: 'Clínicas' },
      { it: 'Caffetterie', es: 'Cafeterías' },
      { it: 'Negozi Locali', es: 'Comercios Locales' },
    ],
    products: [
      {
        title: { it: 'WhatsApp AI Concierge', es: 'WhatsApp AI Concierge' },
        desc:  { it: 'Risponde, prenota e qualifica i clienti 24/7 su WhatsApp.', es: 'Responde, reserva y cualifica clientes 24/7 en WhatsApp.' },
      },
      {
        title: { it: 'Motore Recensioni', es: 'Motor de Reseñas' },
        desc:  { it: 'Trasforma i clienti felici in recensioni a 5 stelle, in automatico.', es: 'Convierte clientes felices en reseñas de 5 estrellas, en automático.' },
      },
      {
        title: { it: 'Campagne di Riattivazione', es: 'Campañas de Reactivación' },
        desc:  { it: 'Riporta i vecchi clienti con messaggi mirati su WhatsApp ed email.', es: 'Recupera clientes antiguos con mensajes dirigidos por WhatsApp y email.' },
      },
      {
        title: { it: 'Recupero Chiamate Perse', es: 'Recuperación de Llamadas Perdidas' },
        desc:  { it: "Ogni chiamata persa diventa un messaggio e un'opportunità.", es: 'Cada llamada perdida se convierte en un mensaje y una oportunidad.' },
      },
      {
        title: { it: 'MAMI LOCAL AI Dashboard', es: 'MAMI LOCAL AI Dashboard' },
        desc:  { it: "Posizionamento Google, prenotazioni e metriche in un'unica dashboard in italiano semplice.", es: 'Posicionamiento Google, reservas y métricas en un solo panel, en lenguaje claro.' },
      },
    ],
    cta: { it: 'Richiedi una demo', es: 'Pide una demo' },
  },

  // ─── ACADEMY ───────────────────────────────────────────────────────────────
  academy: {
    label:   { it: 'MAMI AI Academy', es: 'MAMI AI Academy' },
    tag:     { it: 'Dal principiante al livello professionale', es: 'Desde cero hasta nivel profesional' },
    heading: {
      it: "Impara a usare l'AI per lavorare meglio,\nguadagnare di più e costruire il tuo business digitale.",
      es: 'Aprende a usar la IA para trabajar mejor,\nganar más y construir tu negocio digital.',
    },
    intro: {
      it: "La nostra academy insegna in modo semplice, pratico e senza tecnicismi — sia in italiano che in spagnolo. Dall'uso base di ChatGPT fino alla creazione di agenti AI, automazioni e app. Tutto con un unico obiettivo: i risultati.",
      es: 'Nuestra academy enseña de forma sencilla, práctica y sin tecnicismos — tanto en italiano como en español. Desde el uso básico de ChatGPT hasta la creación de agentes IA, automatizaciones y apps. Todo con un único objetivo: los resultados.',
    },
    topics_label: { it: 'Cosa impari', es: 'Qué aprendes' },
    topics: [
      { it: 'ChatGPT', es: 'ChatGPT' },
      { it: 'Claude AI', es: 'Claude AI' },
      { it: 'Gemini', es: 'Gemini' },
      { it: 'Automazioni', es: 'Automatizaciones' },
      { it: 'Agenti AI', es: 'Agentes IA' },
      { it: 'n8n', es: 'n8n' },
      { it: 'Generazione Immagini', es: 'Generación de Imágenes' },
      { it: 'Generazione Video', es: 'Generación de Vídeos' },
      { it: 'Design con AI', es: 'Diseño con IA' },
      { it: 'Marketing con AI', es: 'Marketing con IA' },
      { it: 'Programmazione Assistita', es: 'Programación Asistida' },
      { it: 'Creazione App', es: 'Creación de Apps' },
      { it: 'Sviluppo Web', es: 'Desarrollo Web' },
      { it: 'Creazione Contenuti', es: 'Creación de Contenido' },
      { it: 'Produttività', es: 'Productividad' },
      { it: 'Monetizzazione', es: 'Monetización' },
    ],
    points: {
      it: ['Dal principiante al livello professionale', 'In italiano e spagnolo', 'Pratico, senza tecnicismi, orientato ai risultati'],
      es: ['Desde cero hasta nivel profesional', 'En italiano y español', 'Práctico, sin tecnicismos, orientado a resultados'],
    },
    cta: { it: 'Entra in Academy', es: 'Entra a la Academy' },
  },

  // ─── PODCAST ───────────────────────────────────────────────────────────────
  podcast: {
    label:   { it: 'Ciao Mami Podcast', es: 'Ciao Mami Podcast' },
    tag:     { it: 'Senza filtri. 100% autentico.', es: 'Sin filtros. 100% auténtico.' },
    heading: {
      it: 'Il podcast che parla di tutto\ncon energia, opinione e personalità.',
      es: 'El podcast que habla de todo\ncon energía, opinión y personalidad.',
    },
    intro: {
      it: "Gossip, attualità, AI spiegata in modo semplice, relazioni, cultura latina e italiana, reality, tendenze e molto altro. Uno spazio autentico dove le opinioni contano e nessun argomento è off-limits.",
      es: 'Farándula, actualidad, IA explicada fácil, relaciones, cultura latina e italiana, realities, tendencias y mucho más. Un espacio auténtico donde las opiniones cuentan y ningún tema está prohibido.',
    },
    topics_label: { it: 'Di cosa parliamo', es: 'De qué hablamos' },
    topics: [
      { it: 'Gossip & Farándula', es: 'Gossip & Farándula' },
      { it: 'Notizie Virali', es: 'Noticias Virales' },
      { it: 'Reality Show', es: 'Reality Shows' },
      { it: 'Social Media', es: 'Redes Sociales' },
      { it: 'Relazioni & Vita', es: 'Relaciones & Vida' },
      { it: 'Cultura Latina', es: 'Cultura Latina' },
      { it: 'Cultura Italiana', es: 'Cultura Italiana' },
      { it: 'Attualità', es: 'Actualidad' },
      { it: 'Imprenditoria', es: 'Emprendimiento' },
      { it: 'AI Spiegata Semplice', es: 'IA Explicada Fácil' },
      { it: 'Storie Vere', es: 'Historias Reales' },
      { it: 'Opinioni & Dibattiti', es: 'Opiniones & Debates' },
      { it: 'Tendenze', es: 'Tendencias' },
      { it: 'Interviste', es: 'Entrevistas' },
    ],
    cta:     { it: 'Ascolta ora', es: 'Escucha ahora' },
    cta_yt:  { it: 'Guarda su YouTube', es: 'Ver en YouTube' },
  },

  // ─── CONTACT ───────────────────────────────────────────────────────────────
  contact: {
    heading:  { it: 'Parliamo del tuo progetto', es: 'Hablemos de tu proyecto' },
    sub:      { it: "Raccontaci la tua attività e costruiamo insieme l'infrastruttura AI giusta per te.", es: 'Cuéntanos tu negocio y construimos juntos la infraestructura de IA perfecta para ti.' },
    cta:      { it: 'Prenota una call gratuita', es: 'Reserva una llamada gratis' },
    location: { it: 'Roma, Italia', es: 'Roma, Italia' },
  },
} as const

export function t(obj: { it: string; es: string }, lang: Lang): string {
  return obj[lang]
}
