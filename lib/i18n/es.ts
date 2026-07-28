import type { Brand } from "@/lib/brand";

/* Canonical dictionary — `en.ts` is typed against this shape.
   Headings are split into lead/accent/tail so the JSX keeps the color span. */
export const es = (brand: Brand) => ({
  meta: {
    title: `${brand.name} — Apps web con IA para negocios modernos`,
    description: `${brand.name} construye aplicaciones web con IA — desde gestión de leads y clasificación de tickets hasta rastreo de vehículos — diseñadas para automatizar y escalar tus operaciones.`,
    localeSwitchLabel: "Cambiar idioma",
  },

  nav: {
    links: {
      home: "Inicio",
      services: "Servicios",
      portfolio: "Portafolio",
      process: "Proceso",
      contact: "Contacto",
    },
    cta: "Contáctanos",
    callAria: "Llámanos",
    callUs: "Llámanos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },

  hero: {
    eyebrow: "Estudio de software con IA",
    headingLead: "Software con IA.",
    headingAccent: "Hecho para escalar",
    headingTail: "tu negocio.",
    sub: `${brand.name} construye apps web con IA que automatizan el trabajo que te frena — desde captura de leads y clasificación de tickets hasta rastreo en tiempo real. Listas para desplegar, hechas para dar resultados.`,
    ctaPrimary: "Ver nuestros productos",
    ctaSecondary: "Contáctanos",
    scroll: "Desliza",
    phaseDeveloping: "revelando",
    phaseFocus: "en foco",
  },

  services: {
    eyebrow: "Nuestros productos",
    headingLead: "La IA hace el trabajo.",
    headingAccent: "Tú te enfocas en crecer.",
    cta: "Solicita acceso anticipado",
    cards: {
      leads: {
        title: "Gestor de Leads y CRM",
        description:
          "Captura, califica y asigna leads automáticamente. Tu equipo solo ve los que importan.",
        stat: "3×",
        statLabel: "más conversiones",
      },
      triage: {
        title: "Clasificación de Tickets con IA",
        description: "Enruta, prioriza y responde automáticamente en menos de 2 segundos.",
        stat: "68%",
        statLabel: "resolución más rápida",
      },
      tracking: {
        title: "Sistema de Rastreo con IA",
        description:
          "GPS en vivo, ETAs predictivos y alertas de anomalías para vehículos u órdenes.",
        stat: "91%",
        statLabel: "entregas a tiempo",
      },
      custom: {
        title: "Apps de IA a la Medida",
        description:
          "IA construida alrededor de tus datos y flujos de trabajo. Del prototipo a producción, rápido.",
        badgeLines: ["Semanas,", "no meses"],
      },
      chatbots: {
        title: "Chatbots con IA",
        description:
          "Chatbots entrenados a la medida que atienden soporte, ventas y onboarding — integrados en tu app o sitio web. Disponibles 24/7, sin transferir a un humano para lo común.",
        stat: "80%",
        statLabel: "consultas resueltas sin humanos",
      },
      integration: {
        title: "Integración de IA",
        description:
          "Conecta IA directamente a tu CRM, ERP o stack de soporte actual — sin reemplazar nada.",
      },
    },
    mockups: {
      chatStatus: "asistente • en línea",
      chat: [
        { role: "user" as const, text: "¿Cuál es el estado de mi pedido?" },
        {
          role: "ai" as const,
          text: "El pedido #4821 va en camino — llegada estimada hoy entre 2 y 4 PM.",
        },
        { role: "user" as const, text: "¿Puedo reprogramarlo?" },
        { role: "ai" as const, text: "¡Claro! Elige una nueva fecha y la actualizo ahora." },
      ],
      leadsStatus: "pipeline en vivo",
      leads: [
        { name: "Acme Corp", score: 94, status: "hot" as const },
        { name: "Dunder Mifflin", score: 81, status: "warm" as const },
        { name: "Initech", score: 73, status: "warm" as const },
        { name: "Globex Inc", score: 58, status: "cold" as const },
      ],
      leadStatus: { hot: "Caliente", warm: "Tibio", cold: "Frío" },
      ticketStatus: "clasificación ia — 2s promedio",
      tickets: [
        { id: "#1042", label: "Error de facturación", priority: "P1", routed: "Finanzas" },
        { id: "#1043", label: "Problema de acceso", priority: "P2", routed: "Auth" },
        { id: "#1044", label: "Solicitud de función", priority: "P3", routed: "Producto" },
      ],
      trackingStatus: "4 activos • en vivo",
      codeFile: "modelo.py",
      codeAccuracy: "✓ 98.2% de precisión en el set de prueba",
      integrations: ["Salesforce", "HubSpot", "Zendesk", "API a la medida"],
      connected: "conectado",
    },
  },

  portfolio: {
    badge: "Vitrina de productos",
    headingLead: "Productos reales.",
    headingAccent: "Resultados reales",
    headingTail: "Impulsados por IA.",
    sub: "Cada producto que lanzamos resuelve un problema operativo real. Aquí está lo que hemos construido y el impacto que ha tenido.",
    filterAll: "Todos",
    categories: {
      leads: "Gestión de Leads",
      support: "Soporte y Tickets",
      logistics: "Rastreo y Logística",
      custom: "IA a la Medida",
      chatbots: "Chatbots",
    },
    carousel: {
      eyebrow: "Casos de éxito",
      headingLead: "Trabajo que aguanta",
      headingAccent: "en producción.",
      label: "Carrusel de casos de éxito",
      next: "Siguiente caso de éxito",
      previous: "Caso de éxito anterior",
      drag: "Arrastra",
      problem: "Problema",
      solution: "Solución",
      result: "Resultado",
    },
    projects: [
      {
        key: "leadflow",
        category: "leads" as const,
        title: "LeadFlow — Gestor de Leads con IA",
        stat: "3×",
        statLabel: "más conversiones",
        problem:
          "Los equipos de ventas revisaban manualmente cientos de leads no calificados, perdiendo horas cada semana en contactos fríos mientras los prospectos calientes se enfriaban.",
        solution:
          "Un CRM con IA que califica cada lead entrante, asigna tareas de seguimiento automáticamente y coloca el 10% con mayor probabilidad de cerrar en una fila prioritaria.",
        result:
          "3× más conversiones calificadas en los primeros 60 días de operación",
      },
      {
        key: "triageai",
        category: "support" as const,
        title: "TriageAI — Sistema de Clasificación de Tickets",
        stat: "68%",
        statLabel: "resolución más rápida",
        problem:
          "Un equipo de soporte de alto volumen dedicaba 40% de su tiempo solo a leer y enrutar tickets — dejando los casos complejos atorados detrás de solicitudes simples.",
        solution:
          "TriageAI lee cada ticket entrante, lo clasifica por tipo y urgencia, responde automáticamente los casos comunes y enruta las excepciones al especialista correcto en menos de 2 segundos.",
        result: "68% de reducción en el tiempo promedio de resolución",
      },
      {
        key: "tracksense",
        category: "logistics" as const,
        title: "TrackSense — Rastreo de Vehículos y Órdenes",
        stat: "91%",
        statLabel: "entregas a tiempo",
        problem:
          "Una empresa de logística no tenía visibilidad en tiempo real de la posición de su flota ni del estado de las órdenes, lo que generaba quejas de clientes y retrasos costosos imposibles de diagnosticar antes de la entrega.",
        solution:
          "Rastreo GPS en vivo, ETAs predichos por IA, alertas por geocerca y un portal de estado para el cliente — todo conectado por una sola API.",
        result: "91% de entregas a tiempo, contra 74% previo",
      },
      {
        key: "contractlens",
        category: "custom" as const,
        title: "ContractLens — Analizador de Documentos con IA",
        stat: "30×",
        statLabel: "revisión más rápida",
        problem:
          "Un despacho de servicios legales dedicaba días a revisar manualmente contratos de proveedores buscando cláusulas de responsabilidad, y se le escapaban términos críticos bajo presión de tiempo.",
        solution:
          "Un LLM afinado en lenguaje contractual que extrae, marca y resume cláusulas de riesgo en segundos — con un puntaje de confianza y una explicación en lenguaje simple para cada hallazgo.",
        result: "La revisión de contratos bajó de 4 horas a menos de 8 minutos",
      },
      {
        key: "outboundai",
        category: "leads" as const,
        title: "OutboundAI — Prospección Automatizada",
        stat: "44%",
        statLabel: "tasa de apertura",
        problem:
          "Un equipo de ventas B2B quemaba capacidad de sus representantes en secuencias de prospección genéricas, mal cronometradas y que terminaban ignoradas.",
        solution:
          "OutboundAI personaliza cada mensaje usando datos de la empresa y señales de LinkedIn, programa los envíos en el momento óptimo y pausa la secuencia en cuanto el lead responde.",
        result: "44% de apertura y 18% de respuesta — contra 9% y 3% previos",
      },
      {
        key: "nexbot",
        category: "chatbots" as const,
        title: "NexBot — Chatbot de Atención con IA",
        stat: "80%",
        statLabel: "resuelto sin humanos",
        problem:
          "Una marca de e-commerce atendía miles de mensajes repetitivos al día — estado del pedido, devoluciones, tallas — quemando personal sin ganar nada de apalancamiento.",
        solution:
          "NexBot se entrenó con su catálogo de productos, datos de pedidos y política de devoluciones. Integrado en su app web, resuelve solicitudes comunes al instante y escala las excepciones con todo el contexto adjunto.",
        result:
          "80% de las consultas de soporte resueltas de forma autónoma, ahorrando más de 1,200 horas-agente al mes",
      },
      {
        key: "replydraft",
        category: "support" as const,
        title: "ReplyDraft — Copiloto de Soporte con IA",
        stat: "22 min",
        statLabel: "primera respuesta promedio",
        problem:
          "Los agentes de soporte junior respondían lento y con tono inconsistente, lo que obligaba a revisión de un senior en casi todos los tickets antes de enviar.",
        solution:
          "ReplyDraft vive dentro de la bandeja de soporte y genera un borrador listo para enviar en cada ticket — tomando de la base de conocimiento y de casos resueltos. El agente revisa y envía en un clic.",
        result: "El tiempo de primera respuesta bajó de 6 horas a 22 minutos",
      },
    ],
  },

  process: {
    eyebrow: "Cómo trabajamos",
    headingLead: "Del planteamiento del problema.",
    headingAccent: "A IA en producción.",
    sub: "Nuestro proceso de cuatro pasos es rápido, transparente y diseñado para generar impacto — ya sea que despliegues tu primera herramienta de IA o la escales en toda la organización.",
    stepLabel: "Paso",
    cta: "Empecemos a construir",
    steps: [
      {
        number: "01",
        title: "Descubrimiento",
        description:
          "Mapeamos tu flujo de trabajo, tus fuentes de datos y dónde están los cuellos de botella reales. Sin relleno — solo un entendimiento claro del problema que resolvemos y del resultado que necesitas.",
      },
      {
        number: "02",
        title: "Construcción",
        description:
          "Nuestros ingenieros desarrollan los modelos de IA, la lógica de backend y las interfaces de usuario. Trabajamos en sprints cortos con demos en cada hito, para que siempre sepas exactamente qué estás recibiendo.",
      },
      {
        number: "03",
        title: "Pruebas y Ajuste",
        description:
          "Antes de que algo toque producción, corremos el sistema contra datos reales, forzamos casos límite y afinamos el desempeño del modelo. La precisión y la confiabilidad no se negocian.",
      },
      {
        number: "04",
        title: "Despliegue y Escala",
        description:
          "Lanzamos en tu entorno — nube, on-premise o híbrido — y seguimos de la mano durante el arranque. Conforme crece el uso, el sistema escala contigo. Soporte continuo y reentrenamiento del modelo incluidos.",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto",
    headingLead: "Construyamos tu",
    headingAccent: "ventaja con IA.",
    sub: "¿Tienes un flujo de trabajo que quieres automatizar, una idea de producto, o solo quieres explorar qué puede hacer la IA por tu negocio? Escríbenos — mapeamos la oportunidad y te decimos exactamente qué es posible.",
    form: {
      title: "Mándanos un mensaje",
      subtitle: "Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas.",
      name: "Nombre *",
      namePlaceholder: "Tu nombre",
      email: "Correo *",
      emailPlaceholder: "tu@correo.com",
      phone: "Teléfono",
      phonePlaceholder: "(55) 1234 5678",
      details: "Detalles del proyecto *",
      detailsPlaceholder: "Describe el problema que quieres resolver con IA...",
      file: "Subir archivo (opcional)",
      fileCta: "Haz clic para subir o arrastra y suelta",
      fileHint: "PDF, PNG, JPG hasta 10MB",
      success: "¡Mensaje enviado! Te respondemos en menos de 24 horas.",
      error: "Algo salió mal. Inténtalo de nuevo o escríbenos directo por correo.",
      submit: "Contáctanos",
      submitting: "Enviando…",
      submitted: "¡Enviado!",
    },
    call: {
      title: "Agenda una llamada de descubrimiento",
      description:
        "Reserva 30 minutos — mapeamos tu flujo de trabajo e identificamos dónde la IA genera más palanca.",
      cta: "Agendar llamada",
    },
    other: {
      title: "Otras formas de contactarnos",
      phoneNote: "(llamada · iMessage)",
      whatsappNote: "(WhatsApp)",
      location: "Cobertura nacional",
    },
    response: {
      title: "Respuesta rápida",
      body: "Normalmente respondemos en menos de",
      highlight: "24 horas",
    },
  },

  footer: {
    eyebrow: "Cuando tú quieras",
    headingLead: "Construyamos algo",
    headingAccent: "extraordinario.",
    sub: "Deja que la IA haga el trabajo. Tú encárgate de crecer.",
    ctaPrimary: "Contáctanos",
    ctaSecondary: "Ver el trabajo",
    products: [
      "Gestor de Leads y CRM",
      "Clasificación de Tickets con IA",
      "Sistemas de Rastreo",
      "Apps de IA a la Medida",
      "Chatbots con IA",
      "Integración de IA",
    ],
    blurb:
      "Apps web con IA hechas para automatizar operaciones, acelerar ventas y escalar negocios — de los leads a la logística.",
    location: "Cobertura nacional",
    status: "Sistemas operando",
    navigate: "Navegar",
    productsTitle: "Productos",
    connect: "Síguenos",
    backToTop: "Volver arriba",
    rights: (year: number) => `© ${year} ${brand.name}. Todos los derechos reservados.`,
  },

  error: {
    eyebrow: "Runtime recuperado",
    title: "Algo salió mal.",
    body: "Recarga la experiencia para cargar la versión más reciente del sitio.",
    retry: "Intentar de nuevo",
  },
});
