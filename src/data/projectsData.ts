export type Project = {
    id: string;
    title: string;
    subtitle: string;

    description: string;
    longDescription: string;

    technologies: string[];

    githubUrl?: string;
    liveUrl?: string;

    image?: string;

    stats?: {
        label: string;
        value: string;
    }[];

    features?: {
        title: string;
        description: string;
        icon: string;
    }[];

    architecture?: {
        frontend?: string[];
        backend?: string[];
        database?: string[];
        services?: string[];
    };

    challenges?: {
        title: string;
        description: string;
    }[];

    techStack?: {
        category: string;
        technologies: string[];
    }[];

    gallery?: string[];

    learned?: string[];

    previousProject?: string;
    nextProject?: string;
};

export const projectsData: Project[] = [
    {
        id: "ticket-management",

        title: "Multi-Tenant Ticket Management System",

        subtitle:
            "A secure ticket management platform built with Spring Boot and Angular for managing clients, users, tickets, attachments, and workflows.",

        description:
            "A full-stack ticket management system with role-based access control, ticket workflows, client management, file attachments, email notifications, Redis caching, and a responsive Angular dashboard.",

        longDescription:
            "This project is a full-stack ticket management platform designed to centralize the creation, tracking, validation, and management of support tickets. The system separates responsibilities between administrators, managers, and regular users while organizing tickets around their associated clients. The Angular frontend provides dedicated interfaces for tickets, clients, users, profiles, authentication, and dashboards, while the Spring Boot backend exposes the business logic and REST API. The application also integrates JWT-based security, MySQL persistence, Redis caching, Cloudinary file storage, email services, API documentation, and Docker-based deployment.",

        technologies: [
            "Angular",
            "TypeScript",
            "Tailwind CSS",
            "Chart.js",
            "Spring Boot",
            "Java 17",
            "Spring Data JPA",
            "MySQL",
            "Redis",
            "Spring Security",
            "JWT",
            "Cloudinary",
            "Docker",
            "Thymeleaf",
            "Spring Mail",
            "OpenAPI"
        ],

        githubUrl:
            "https://github.com/aymanee04/Ticket-Management-System-Backend/tree/dev",

        liveUrl: "",

        stats: [
            {
                label: "Frontend",
                value: "Angular"
            },
            {
                label: "Backend",
                value: "Spring Boot"
            },
            {
                label: "Database",
                value: "MySQL"
            },
            {
                label: "Cache",
                value: "Redis"
            }
        ],

        features: [
            {
                title: "Ticket Management",
                description:
                    "Create, view, track, and manage tickets through dedicated ticket interfaces and detailed ticket views.",
                icon: "Ticket"
            },

            {
                title: "Ticket Workflow",
                description:
                    "Tickets follow defined statuses including pending validation, in progress, validated, rejected, archived, and cancelled.",
                icon: "Workflow"
            },

            {
                title: "Role-Based Access",
                description:
                    "The application separates access and responsibilities between administrators, managers, and regular users.",
                icon: "ShieldCheck"
            },

            {
                title: "Multi-Tenant Client Management",
                description:
                    "Tickets and users are organized around clients, allowing access to be scoped according to the user's role and associated client.",
                icon: "Building2"
            },

            {
                title: "File Attachments",
                description:
                    "Tickets support file attachments that are processed by the backend and stored using Cloudinary.",
                icon: "Paperclip"
            },

            {
                title: "User Management",
                description:
                    "Administrators can manage users and their associated roles and client relationships through the dedicated user interface.",
                icon: "Users"
            },

            {
                title: "Client Management",
                description:
                    "The application provides dedicated client management functionality for organizing the organizations or entities using the ticket system.",
                icon: "Building"
            },

            {
                title: "Dashboard",
                description:
                    "The Angular dashboard provides an overview of ticket and application information using dashboard components and charts.",
                icon: "LayoutDashboard"
            },

            {
                title: "Authentication",
                description:
                    "Authentication is implemented using Spring Security and JWT, with Angular authentication guards and HTTP interceptors on the frontend.",
                icon: "LockKeyhole"
            },

            {
                title: "Route Protection",
                description:
                    "Angular authentication and role guards restrict access to protected parts of the application.",
                icon: "Shield"
            },

            {
                title: "Redis Caching",
                description:
                    "Redis and Spring Cache are integrated into the backend to support caching of application data.",
                icon: "Database"
            },

            {
                title: "Email Services",
                description:
                    "The backend integrates Spring Mail and Thymeleaf templates for email-related functionality.",
                icon: "Mail"
            },

            {
                title: "API Documentation",
                description:
                    "The backend integrates SpringDoc OpenAPI to provide interactive API documentation.",
                icon: "BookOpen"
            },

            {
                title: "Responsive Angular UI",
                description:
                    "The frontend uses Angular, Tailwind CSS, Lucide icons, and Font Awesome to build the application's interface.",
                icon: "Monitor"
            }
        ],

        architecture: {
            frontend: [
                "Angular",
                "TypeScript",
                "Angular Router",
                "Angular SSR",
                "Tailwind CSS",
                "Chart.js",
                "RxJS"
            ],

            backend: [
                "Spring Boot",
                "Spring Web MVC",
                "Spring Data JPA",
                "Spring Security",
                "REST API"
            ],

            database: [
                "MySQL",
                "Redis"
            ],

            services: [
                "Cloudinary",
                "Spring Mail",
                "Thymeleaf",
                "SpringDoc OpenAPI"
            ]
        },

        challenges: [
            {
                title: "Designing Role-Based Access Control",
                description:
                    "The application needs to provide different capabilities depending on whether the authenticated user is an administrator, manager, or regular user. Security is handled on the backend with Spring Security and JWT, while the Angular application uses authentication and role guards."
            },

            {
                title: "Managing Multi-Tenant Data Access",
                description:
                    "The ticket system associates users and tickets with clients. Access rules therefore need to take the user's role and client relationship into account when retrieving and managing ticket information."
            },

            {
                title: "Implementing a Ticket Lifecycle",
                description:
                    "Tickets move through several business states, including pending validation, in progress, validated, rejected, archived, and cancelled. The application needs to represent these states consistently between the frontend and backend."
            },

            {
                title: "Handling File Attachments",
                description:
                    "Tickets can contain attachments. The backend integrates Cloudinary and file-processing dependencies to handle uploaded files without storing the media directly inside the application."
            },

            {
                title: "Maintaining Secure Frontend Communication",
                description:
                    "The Angular application uses authentication guards and HTTP interceptors to protect routes and manage authenticated API communication with the Spring Boot backend."
            },

            {
                title: "Improving Application Performance",
                description:
                    "Redis and Spring Cache are integrated into the backend to provide a caching layer for application data and reduce unnecessary database operations."
            },

            {
                title: "Building a Maintainable Full-Stack Architecture",
                description:
                    "The project separates the Angular frontend from the Spring Boot backend while organizing the frontend into dedicated modules for tickets, clients, users, dashboard, authentication, profile, services, guards, and shared application layout."
            }
        ],

        techStack: [
            {
                category: "Frontend",
                technologies: [
                    "Angular",
                    "TypeScript",
                    "Angular Router",
                    "RxJS",
                    "Angular SSR"
                ]
            },

            {
                category: "UI",
                technologies: [
                    "Tailwind CSS",
                    "Lucide Angular",
                    "Font Awesome"
                ]
            },

            {
                category: "Backend",
                technologies: [
                    "Java 17",
                    "Spring Boot",
                    "Spring Web MVC",
                    "Spring Data JPA"
                ]
            },

            {
                category: "Security",
                technologies: [
                    "Spring Security",
                    "JWT",
                    "Angular Auth Guard",
                    "Angular Role Guard",
                    "HTTP Interceptors"
                ]
            },

            {
                category: "Database",
                technologies: [
                    "MySQL",
                    "Redis",
                    "Spring Cache"
                ]
            },

            {
                category: "Cloud & Infrastructure",
                technologies: [
                    "Cloudinary",
                    "Docker"
                ]
            },

            {
                category: "Communication",
                technologies: [
                    "Spring Mail",
                    "Thymeleaf"
                ]
            },

            {
                category: "API & Testing",
                technologies: [
                    "SpringDoc OpenAPI",
                    "JUnit",
                    "Mockito",
                    "Spring Security Test"
                ]
            }
        ],

        gallery: [],

        learned: [
            "Building a full-stack application with Angular and Spring Boot",

            "Designing REST APIs with Spring Boot",

            "Implementing JWT authentication with Spring Security",

            "Implementing role-based authorization",

            "Building Angular authentication and role guards",

            "Using HTTP interceptors for authenticated API requests",

            "Working with Spring Data JPA and MySQL",

            "Integrating Redis caching with Spring Boot",

            "Handling file attachments with Cloudinary",

            "Implementing ticket status workflows",

            "Designing multi-client data access rules",

            "Building reusable Angular services and models",

            "Creating dashboards and data visualizations with Chart.js",

            "Using Docker to containerize the backend",

            "Writing backend tests with JUnit and Mockito",

            "Documenting REST APIs with OpenAPI"
        ],

        previousProject: "",

        nextProject: ""
    },
    {
        id: "essentials-fear-of-god",

        title: "ESSENTIALS — Fear of God E-commerce",

        subtitle:
            "A full-stack e-commerce platform inspired by the ESSENTIALS by Fear of God shopping experience.",

        description:
            "A full-stack e-commerce platform with product browsing, authentication, shopping cart, Stripe checkout, Cloudinary image management, email verification, and a protected administration dashboard.",

        longDescription:
            "ESSENTIALS — Fear of God is a full-stack e-commerce application designed to provide a complete online shopping experience. The platform allows customers to browse products by category, search for products, view product details, manage their shopping bag, create an account, verify their email address, and complete purchases through Stripe. The application also includes a protected administration dashboard where administrators can manage products and users, monitor orders and customers, and view sales information.",

        technologies: [
            "React",
            "Vite",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "Stripe",
            "Cloudinary",
            "JWT",
            "bcrypt",
            "Nodemailer",
            "Multer"
        ],

        githubUrl:
            "https://github.com/aymanee04/ESSENTIALS-FEAR-OF-GOD-",

        liveUrl: "",

        stats: [
            {
                label: "Frontend",
                value: "React"
            },
            {
                label: "Backend",
                value: "Node.js"
            },
            {
                label: "Databases",
                value: "MySQL + MongoDB"
            },
            {
                label: "Payments",
                value: "Stripe"
            }
        ],

        features: [
            {
                title: "Product Catalog",
                description:
                    "Browse products through dedicated categories including Essentials, Athletics, and Fear of God, with individual product pages and product suggestions.",
                icon: "ShoppingBag"
            },

            {
                title: "Product Search",
                description:
                    "Search through the available products and quickly access relevant products from the store.",
                icon: "Search"
            },

            {
                title: "Shopping Bag",
                description:
                    "Add products to the shopping bag, update quantities, remove products, and calculate the order subtotal while respecting available stock.",
                icon: "ShoppingCart"
            },

            {
                title: "Authentication",
                description:
                    "Users can register, verify their email address, log in, and maintain an authenticated session using JWT.",
                icon: "ShieldCheck"
            },

            {
                title: "Stripe Checkout",
                description:
                    "The shopping bag is connected to Stripe Checkout to handle the payment process and checkout session creation.",
                icon: "CreditCard"
            },

            {
                title: "Admin Dashboard",
                description:
                    "A protected administration area provides access to dashboard statistics, orders, customers, users, and product management.",
                icon: "LayoutDashboard"
            },

            {
                title: "Order Management",
                description:
                    "Administrators can retrieve and inspect customer orders, including customer information, purchased products, totals, dates, and delivery information.",
                icon: "Package"
            },

            {
                title: "User Management",
                description:
                    "Administrators can view users, remove users, select users, and send notifications to selected users.",
                icon: "Users"
            },

            {
                title: "Cloudinary Media",
                description:
                    "Product images are uploaded and managed using Cloudinary through the backend.",
                icon: "Image"
            },

            {
                title: "Email Verification",
                description:
                    "New accounts use an email verification flow powered by the backend and Nodemailer.",
                icon: "MailCheck"
            },

            {
                title: "Related Products",
                description:
                    "Product pages dynamically retrieve related products from the same category while excluding the currently displayed product.",
                icon: "Layers"
            },

            {
                title: "Protected Admin Routes",
                description:
                    "Administration pages are protected by checking the authenticated user's role before allowing access to the dashboard.",
                icon: "Lock"
            }
        ],

        architecture: {
            frontend: [
                "React",
                "Vite",
                "React Router",
                "Axios"
            ],

            backend: [
                "Node.js",
                "Express.js",
                "REST API"
            ],

            database: [
                "MySQL",
                "MongoDB",
                "Mongoose"
            ],

            services: [
                "Stripe",
                "Cloudinary",
                "Nodemailer"
            ]
        },

        challenges: [
            {
                title: "Handling Authentication and Authorization",
                description:
                    "The application needed to support both customer authentication and protected administration functionality. JWT-based authentication is used to maintain authenticated sessions, while the admin route checks the user's role before granting access."
            },

            {
                title: "Managing Shopping Cart State",
                description:
                    "The shopping bag needs to remain available while navigating through the application. Cart products are stored in localStorage and synchronized when quantities are changed or products are removed."
            },

            {
                title: "Preventing Invalid Checkout",
                description:
                    "Before checkout, the application verifies product stock availability and prevents the user from continuing when one or more products are no longer available."
            },

            {
                title: "Integrating Online Payments",
                description:
                    "The checkout process communicates with the backend to create a Stripe Checkout session and redirects the customer to the generated Stripe payment page."
            },

            {
                title: "Managing Product Media",
                description:
                    "Product images are handled through Multer and Cloudinary, allowing uploaded product media to be stored outside the application server."
            },

            {
                title: "Working With Multiple Data Sources",
                description:
                    "The project combines MySQL and MongoDB for different parts of the application, requiring the backend to communicate with multiple database technologies."
            }
        ],

        techStack: [
            {
                category: "Frontend",
                technologies: [
                    "React",
                    "Vite",
                    "React Router",
                    "Axios"
                ]
            },

            {
                category: "Backend",
                technologies: [
                    "Node.js",
                    "Express.js",
                    "REST API"
                ]
            },

            {
                category: "Database",
                technologies: [
                    "MySQL",
                    "MongoDB",
                    "Mongoose"
                ]
            },

            {
                category: "Authentication",
                technologies: [
                    "JWT",
                    "bcrypt"
                ]
            },

            {
                category: "Payments",
                technologies: [
                    "Stripe Checkout",
                    "Stripe Webhooks"
                ]
            },

            {
                category: "Cloud Services",
                technologies: [
                    "Cloudinary",
                    "Nodemailer"
                ]
            },

            {
                category: "File Uploads",
                technologies: [
                    "Multer",
                    "Cloudinary"
                ]
            }
        ],

        gallery: [],

        learned: [
            "Building a complete full-stack e-commerce application",

            "Designing and consuming REST APIs with Express.js",

            "Implementing JWT-based authentication and role-based authorization",

            "Working with both MySQL and MongoDB in the same application",

            "Integrating Stripe Checkout into an e-commerce workflow",

            "Handling Stripe webhook-based payment events",

            "Managing product images with Multer and Cloudinary",

            "Implementing email verification with Nodemailer",

            "Managing shopping cart state with localStorage",

            "Building protected administration routes",

            "Creating dashboards for orders, customers, users, and sales information",

            "Designing a complete customer-to-checkout flow"
        ],

        previousProject: "",

        nextProject: ""
    },
    {
        id: "arcad-collective",

        title: "ARCAD Collective — Corporate Website",

        subtitle:
            "A modern responsive website developed during my internship at ARCAD Collective to present the organization's services, projects, team, and digital activities.",

        description:
            "A responsive corporate website built with Next.js and Tailwind CSS for ARCAD Collective, featuring dedicated sections for services, about the organization, projects, blog content, partners, testimonials, and contact information.",

        longDescription:
            "This project was developed during my internship at ARCAD Collective, a Moroccan digital cooperative. The goal was to create a modern and responsive web presence that communicates the organization's identity, services, expertise, projects, and approach to digital transformation. The website is structured into dedicated pages for the home, about, services, realizations, blog, and contact sections. I implemented reusable React components for elements such as the navigation bar, footer, service cards, information cards, partner section, reviews, and other page sections. The interface uses Tailwind CSS for responsive layouts and Lucide React for icons, with Next.js providing the application framework and routing.",

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Lucide React",
            "Swiper"
        ],

        githubUrl:
            "https://github.com/aymanee04/ARCAD-COLLECTIVE",

        liveUrl: "",

        stats: [
            {
                label: "Framework",
                value: "Next.js"
            },
            {
                label: "Language",
                value: "TypeScript"
            },
            {
                label: "UI",
                value: "Tailwind CSS"
            },
            {
                label: "Context",
                value: "Internship"
            }
        ],

        features: [
            {
                title: "Responsive Corporate Website",
                description:
                    "A responsive website designed to present ARCAD Collective and adapt its layout across desktop, tablet, and mobile screen sizes.",
                icon: "Monitor"
            },
            {
                title: "Services Showcase",
                description:
                    "Dedicated service sections present the organization's digital services including graphic design, development, digital marketing, e-commerce, call center services, and UX/UI design.",
                icon: "Layers"
            },
            {
                title: "About ARCAD Collective",
                description:
                    "An about section presents the organization, its story, mission, values, team, and identity as a Moroccan digital cooperative.",
                icon: "Users"
            },
            {
                title: "Projects & Realizations",
                description:
                    "A dedicated realizations section presents examples of digital projects and solutions created by the collective.",
                icon: "BriefcaseBusiness"
            },
            {
                title: "Partner Showcase",
                description:
                    "The website includes a dedicated partner section to showcase organizations and collaborators.",
                icon: "Handshake"
            },
            {
                title: "Testimonials",
                description:
                    "The home page includes testimonial cards presenting user feedback and experiences.",
                icon: "MessageSquareQuote"
            },
            {
                title: "Blog Section",
                description:
                    "A dedicated blog page provides a space for presenting articles and digital-related content.",
                icon: "BookOpen"
            },
            {
                title: "Contact Section",
                description:
                    "A dedicated contact page provides contact information and an FAQ section for visitors.",
                icon: "Mail"
            },
            {
                title: "Reusable Components",
                description:
                    "Common interface elements such as the navbar, footer, cards, service components, partner section, reviews, and reusable sections are organized as React components.",
                icon: "Component"
            },
            {
                title: "Responsive Navigation",
                description:
                    "The navigation includes a desktop menu and a mobile menu that adapts to smaller screen sizes.",
                icon: "Menu"
            },
            {
                title: "Service Navigation",
                description:
                    "Individual service cards provide navigation to dedicated service pages for different areas of the organization's activity.",
                icon: "ArrowRight"
            },
            {
                title: "Visual Brand Identity",
                description:
                    "The interface uses ARCAD Collective's visual identity through colorful geometric shapes, typography, imagery, and branded UI elements.",
                icon: "Palette"
            }
        ],

        architecture: {
            frontend: [
                "Next.js",
                "React",
                "TypeScript",
                "Next.js App Router",
                "Tailwind CSS"
            ],

            backend: [
                "Next.js"
            ],

            database: [],

            services: [
                "Lucide React",
                "Swiper"
            ]
        },

        challenges: [
            {
                title: "Building a Responsive Interface",
                description:
                    "The website needed to provide a consistent experience across different screen sizes. Responsive Tailwind CSS utilities were used throughout the pages and reusable components to adapt layouts for mobile, tablet, and desktop."
            },
            {
                title: "Creating Reusable Components",
                description:
                    "Instead of duplicating common interface elements across pages, reusable components were created for the navbar, footer, service cards, information cards, reviews, partners, and other sections."
            },
            {
                title: "Organizing a Multi-Page Website",
                description:
                    "The project contains several areas including About, Services, Realizations, Blog, and Contact. The Next.js application structure was used to organize these pages and their associated components."
            },
            {
                title: "Presenting Multiple Services",
                description:
                    "The website needed to clearly communicate several different services while keeping the interface visually consistent. Dedicated service cards and service routes were used to organize the information."
            },
            {
                title: "Maintaining Visual Consistency",
                description:
                    "The interface combines several visual elements, colors, images, cards, icons, and sections. Tailwind CSS utilities and reusable components helped maintain a consistent visual language throughout the website."
            },
            {
                title: "Mobile Navigation",
                description:
                    "The navigation needed to work on smaller screens without taking excessive space. A mobile menu was implemented with React state to switch between the open and closed navigation states."
            }
        ],

        techStack: [
            {
                category: "Framework",
                technologies: [
                    "Next.js 16"
                ]
            },
            {
                category: "Frontend",
                technologies: [
                    "React 19",
                    "TypeScript"
                ]
            },
            {
                category: "Styling",
                technologies: [
                    "Tailwind CSS 4"
                ]
            },
            {
                category: "UI & Icons",
                technologies: [
                    "Lucide React"
                ]
            },
            {
                category: "Interactive UI",
                technologies: [
                    "Swiper"
                ]
            },
            {
                category: "Development",
                technologies: [
                    "ESLint",
                    "TypeScript"
                ]
            }
        ],

        gallery: [],

        learned: [
            "Building a complete multi-page website with Next.js",
            "Working with the Next.js App Router",
            "Developing reusable React components",
            "Using TypeScript in a real-world frontend project",
            "Creating responsive layouts with Tailwind CSS",
            "Building responsive navigation with React state",
            "Organizing a larger Next.js project structure",
            "Creating reusable service and information cards",
            "Working with Lucide React icons",
            "Using Swiper for interactive UI elements",
            "Implementing responsive desktop and mobile layouts",
            "Working on a real project during a professional internship",
            "Translating a company's visual identity into a web interface"
        ],

        previousProject: "",

        nextProject: ""
    }
];