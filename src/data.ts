export const data = {
    name: "Alan Rios",
    role: "Back-End | Node.js | TypeScript | Express.js",
    dateOfBirth: "2003-01-02",
    status: "Disponible para trabajar",
    carrer: {
        name: "Tecnología Superior en Desarrollo de Software",
        institution: "Escuela Politécnica Nacional",
        graduationYear: 2025,
        icon: "#EPN"
    },
    avatar: "/img/me.webp",
    cv: {
        name: "CV_Alan_Rios.pdf",
        icon: "#CV",
        url: "https://drive.google.com/file/d/1c3wPzI5rFvvS_I82BtbCNj07ww77lR0H/view?usp=sharing",
    },
    location: {
        city: "Quito",
        country: "Ecuador"
    },
    about: ["Hola, soy Alan Rios, desarrollador Back-End con sólida formación técnica y experiencia práctica en la creación de aplicaciones modernas, seguras y funcionales.", "Me apasiona la tecnología, el aprendizaje continuo y construir soluciones que aporten valor real.", "Actualmente busco mi primera oportunidad profesional para crecer, aportar y formar parte de un equipo innovador."],

    skills: [
        {
            title: "Lenguajes de Programación",
            items: [
                { name: "JavaScript", icon: "#JS" },
                { name: "TypeScript", icon: "#TS" },
                { name: "Java", icon: "#Java" },
                { name: "Python", icon: "#Python" },
                { name: "C++", icon: "#CPP" },
                { name: "Dart", icon: "#Dart" },
            ],
        },
        {
            title: "Tecnologías Front-End",
            items: [
                { name: "HTML", icon: "#HTML" },
                { name: "CSS", icon: "#CSS" },
                { name: "Bootstrap", icon: "#Bootstrap" },
                { name: "React", icon: "#React" },
                { name: "Astro", icon: "#Astro" },
                { name: "Tailwind CSS", icon: "#TailwindCSS" },
            ],
        },
        {
            title: "Tecnologías Back-End y Bases de Datos",
            items: [
                { name: "Node.js", icon: "#NodeJs" },
                { name: "Express", icon: "#Express" },
                { name: "SpringBoot", icon: "#Spring" },
                { name: "MySQL", icon: "#MySQL" },
                { name: "PostgreSQL", icon: "#PostgreSQL" },
                { name: "MongoDB", icon: "#MongoDB" },
                { name: "SQLite", icon: "#SQLite" },
                { name: "Turso DB", icon: "#TursoDB" },
            ],
        },
        {
            title: "Plataformas y Servicios Cloud",
            items: [
                { name: "Firebase", icon: "#Firebase" },
                { name: "Clerk", icon: "#Clerk" },
                { name: "Swagger", icon: "#Swagger" },
            ],
        },
        {
            title: "Herramientas y Otros",
            items: [
                { name: "Git", icon: "#Git" },
                { name: "GitHub", icon: "#GitHub" },
                { name: "Docker", icon: "#Docker" },
                { name: "Postman", icon: "#Postman" },
            ],
        },
    ],
    experience: [
        {
            title: "Soporte Técnico y Gestión de Sistemas",
            company: "DGIP - Escuela Politécnica Nacional",
            period: "2024",
            description: "Prácticas profesionales brindando soporte técnico y mantenimiento de sistemas en un entorno institucional, fortaleciendo habilidades técnicas aplicables al desarrollo Back-End.",
            responsibilities: [
                "Diagnóstico y resolución de incidencias técnicas en software, hardware y conectividad de red.",
                "Mantenimiento preventivo y correctivo a equipos utilizados en áreas administrativas y académicas.",
                "Apoyo en la gestión y seguimiento de sistemas institucionales, adquiriendo conocimientos sobre arquitectura y funcionamiento de plataformas internas.",
                "Atención a usuarios y análisis de problemas, desarrollando habilidades de comunicación técnica y pensamiento lógico aplicado.",
            ]
        },
        {
            title: "Gestión Documental y Bases de Datos",
            company: "Dirección Financiera - Escuela Politécnica Nacional",
            period: "2023 - 2024",
            description: "Prácticas profesionales orientadas a la organización y trazabilidad de documentos físicos mediante el diseño de un sistema de gestión de datos con enfoque en Back-End.",
            responsibilities: [
                "Diseñé un sistema de registro para localizar documentos físicos distribuidos en diferentes áreas de la institución.",
                "Estructuré y migré información desde hojas de Excel a una base de datos MySQL, organizando datos clave como ubicación, número de hojas, nombre de carpetas y descripciones.",
                "Normalicé y modelé los datos para facilitar consultas eficientes y mantener la integridad de la información.",
                "Aporté en la mejora de procesos de búsqueda documental mediante el uso de consultas SQL y estructuras relacionales."
            ]
        }
    ],
    projects: [
        {
            name: "BitLink - Acortador de Enlaces",
            url: "https://btlk.vercel.app/",
            img: "/img/bitlink.png",
            github: "https://github.com/AlanRiosMendoza/bitlink",
            description: "Aplicación moderna para acortar URLs, con autenticación mediante Clerk, seguimiento de estadísticas como clics y fecha del último acceso. Incluye una interfaz intuitiva y soporte para múltiples enlaces por usuario.",
            tech: ["Astro", "TailwindCSS", "MySQL", "Clerk", "Turso DB"]
        },
        {
            name: "POS - Sistema de Punto de Venta",
            url: "https://punto-frio-rtr.vercel.app",
            img: "/img/pfrtr.png",
            github: "https://github.com/AlanRiosMendoza/SYSTEM-PUNTO-FRIO-RTR",
            swagger: "https://app.swaggerhub.com/apis/ALANRIOSHD/punto-frio-rtr/1.0.0",
            youtube: "https://www.youtube.com/watch?v=JTLoGubrKY8&ab_channel=AlanRios",
            description: "Plataforma integral para administrar ventas, productos, clientes e inventarios de bebidas. Incluye autenticación con roles, control de envases retornables y panel administrativo, todo optimizado para el negocio Punto Frío R.T.R.",
            tech: ["Node.js", "Express", "MongoDB", "JWT", "React", "TailwindCSS"]
        }

    ],
    contact: {
        contacts: [
            {
                name: "Correo Electrónico",
                icon: "#Email",
                url: "alan.rios.hd@gmail.com"
            },
            {
                name: "WhatsApp",
                icon: "#WhatsApp",
                url: "https://wa.me/593960131442"
            },
            {
                name: "Teléfono",
                icon: "#Phone",
                url: "+593960131442"
            }
        ],
        socials: [
            {
                name: "GitHub",
                url: "https://github.com/AlanRiosMendoza/",
                icon: "#GitHub"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/alan-rm/",
                icon: "#LinkedIn"
            },
            {
                name: "X/Twitter",
                url: "https://x.com/alan_ri0s",
                icon: "#X"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/alan._.rios/",
                icon: "#Instagram"
            }
        ]
    },
    get stats() {
        return {
            projects: this.projects.length,
            experience: 1,
            skills: this.skills.reduce((total, group) => total + group.items.length, 0),
        };
    },
}; 1
