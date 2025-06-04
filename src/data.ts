export const data = {
    name: "Alan Rios",
    email: "alan.rios.hd@gmail.com",
    role: "Desarrollador Backend",
    careerTitle: "Tecnólogo Superior en Desarrollo de Software",
    status: "Disponible para trabajar",
    avatar: "/src/assets/me.webp",
    cv: "https://drive.google.com/file/d/1_NzYD_MeRGAY8_Pwt0XdEoFs3bLatHYr/view?usp=sharing",
    location: {
        city: "Quito",
        country: "Ecuador"
    },
    about: `Soy un desarrollador con experiencia en Node.js, MongoDB y Express. Me enfoco en crear APIs REST y soluciones escalables.`,
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
                { name: "JMeter", icon: "#JMeter" },
            ],
        },
    ],
    experience: [
        {
            title: "Servicios y Soporte al Usuario",
            company: "EPN - DGIP",
            period: "2024 - 2024",
            description: "",
            responsibilities: [
                "Desarrollo de aplicaciones web con Node.js y Express."
            ]
        },
        {
            title: "Gestión Documental y Bases de Datos",
            company: "EPN - Dirección Financiera",
            period: "2023 - 2024",
            description: "Desarrollo de aplicación para gestión documental y bases de datos.",
            responsibilities: [
                "Diseño y desarrollo de APIs RESTful."
            ]
        },

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
            name: "Sistema de Gestión de ventas e inventarios para el Punto Frío R.T.R.",
            url: "https://punto-frio-rtr.vercel.app",
            img: "/img/pfrtr.png",
            github: "https://github.com/AlanRiosMendoza/SYSTEM-PUNTO-FRIO-RTR",
            description: "Plataforma integral para administrar ventas, productos, clientes e inventarios de bebidas. Incluye autenticación con roles, control de envases retornables y panel administrativo, todo optimizado para el negocio Punto Frío R.T.R.",
            tech: ["Node.js", "Express", "MongoDB", "JWT", "React", "TailwindCSS"]
        }


    ],
    contact: {
        email: "alan.rios.hd@gmail.com",
        phone: "+593 960 131 442",
        whatsapp: "https://api.whatsapp.com/send?phone=593960131442",
        socials: [
            {
                name: "GitHub",
                url: "https://github.com/AlanRiosMendoza/",
                icon: "/svg/github.svg"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/alan-rm/",
                icon: "/svg/linkedin.svg"
            },
            {
                name: "X/Twitter",
                url: "https://x.com/alan_ri0s",
                icon: "/svg/x.svg"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/alan._.rios/",
                icon: "/svg/instagram.svg"
            }
        ]

    }
};
