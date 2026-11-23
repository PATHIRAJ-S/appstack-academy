export const courses = [
  {
    id: "full-stack-development",
    title: "Full Stack Web Development",
    badge: "Most Popular",
    shortDescription: "Master modern MERN stack web development from scratch. Build real production applications, REST APIs, and database-driven web platforms.",
    fullDescription: "Our Full Stack Development program is designed to turn beginners and coding enthusiasts into job-ready software engineers. You will learn frontend UI development with React, backend service design with Node.js and Express, database architecture with MongoDB and PostgreSQL, and deployment workflows with Docker and Cloud hosting.",
    category: "Full Stack",
    duration: "6 Months",
    level: "Beginner to Advanced",
    format: "Live Interactive + Hands-on Labs",
    iconName: "Code",
    technologies: ["HTML5/CSS3", "JavaScript ES6+", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "Git & GitHub"],
    rating: 4.9,
    studentsCount: "450+",
    projectsCount: "8 Portfolio Projects",
    prerequisites: "Basic computer knowledge. No prior coding experience required.",
    modules: [
      {
        title: "Module 1: Web Foundation & Responsive Design",
        duration: "4 Weeks",
        topics: ["HTML5 Semantic Markup", "CSS3 Grid & Flexbox Layouts", "Tailwind CSS Design Systems", "Responsive Mobile-First Architecture", "Git Version Control & GitHub Workflows"]
      },
      {
        title: "Module 2: Advanced JavaScript & ES6+",
        duration: "4 Weeks",
        topics: ["DOM Manipulation & Events", "Asynchronous JS, Promises & Async/Await", "FETCH & REST API Consumption", "Object-Oriented & Functional Programming", "State Management Concepts"]
      },
      {
        title: "Module 3: Modern Frontend with React.js",
        duration: "6 Weeks",
        topics: ["React Components, JSX & Props", "React Hooks (useState, useEffect, useReducer, useContext)", "React Router v6 Navigation", "Custom Hooks & Performance Optimization", "State Management with Redux Toolkit"]
      },
      {
        title: "Module 4: Backend Engineering with Node.js & Express",
        duration: "6 Weeks",
        topics: ["Node.js Architecture & Event Loop", "Express Server Routing & Middleware", "RESTful API Architecture & Authentication (JWT, OAuth)", "Database Design with MongoDB & Mongoose", "SQL Relational Databases with PostgreSQL & Prisma"]
      },
      {
        title: "Module 5: Internship Project & Deployment",
        duration: "4 Weeks",
        topics: ["Full Stack E-Commerce Platform Project", "CI/CD Pipeline Setup", "Deployment on Vercel, Netlify & AWS", "Code Reviews & Performance Audits", "Resume & Portfolio Preparation"]
      }
    ],
    projectsBuilt: [
      { name: "SaaS Dashboard with Analytics", description: "Real-time user management and analytics portal built with React & Node API.", tech: ["React", "Express", "MongoDB", "Tailwind"] },
      { name: "Multi-Vendor E-Commerce Portal", description: "Complete online shopping platform with cart, checkout, payment gateway & admin dashboard.", tech: ["MERN Stack", "Stripe API", "Redux"] },
      { name: "Real-Time Chat & Collaboration App", description: "Instant messaging application with rooms, file uploads & online presence indicators.", tech: ["React", "Socket.io", "Node.js"] }
    ],
    skillsAcquired: ["Full Stack System Architecture", "REST API Design & Integration", "Database Design & Optimization", "Modern React State Management", "Authentication & Security Best Practices", "Git Collaboration & Agile Workflows"],
    whoCanJoin: ["College Students & Recent Graduates", "IT Career Switchers", "Self-Taught Developers seeking structured mastery", "Entrepreneurs wanting to build their own tech products"],
    careerOpportunities: ["Full Stack Engineer", "Frontend Developer", "Node.js Backend Developer", "MERN Stack Specialist", "Web Application Engineer"],
    certificateInfo: "Includes Industry-Recognized AppStack Full Stack Developer Certificate with QR verification code and verifiable credential link.",
    faqs: [
      { question: "Is this course suitable for complete beginners?", answer: "Yes! We start from absolute fundamentals of web design and progressively build up to advanced backend microservices." },
      { question: "What kind of project support will I get?", answer: "Every student is assigned a dedicated mentor for project code reviews, debugging sessions, and architectural guidance." },
      { question: "Will I get an internship opportunity upon completion?", answer: "Yes, top performers and students completing all capstone projects are awarded direct entry into the AppStack Internship Program." }
    ]
  },
  {
    id: "frontend-development",
    title: "Frontend Engineering with React",
    badge: "Trending",
    shortDescription: "Build lightning-fast, visually stunning interactive web applications using React 18, Tailwind CSS, TypeScript, and modern state management.",
    fullDescription: "Master modern user interface engineering. Learn to translate complex Figma designs into responsive, accessible, pixel-perfect web applications with clean code standards, smooth Framer Motion animations, and ultra-performant React component architecture.",
    category: "Frontend",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    format: "Live Interactive + UI Build Sprints",
    iconName: "Layout",
    technologies: ["React.js", "JavaScript ES6+", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Vite", "REST APIs"],
    rating: 4.8,
    studentsCount: "320+",
    projectsCount: "5 Responsive Apps",
    prerequisites: "Basic familiarity with HTML and CSS.",
    modules: [
      {
        title: "Module 1: Advanced Modern CSS & Tailwind",
        duration: "3 Weeks",
        topics: ["Tailwind Utility First Workflow", "CSS Grid, Flexbox & Custom Variables", "Glassmorphism & Dark Mode Implementation", "Responsive Design Patterns"]
      },
      {
        title: "Module 2: JavaScript Deep Dive & Async Programming",
        duration: "3 Weeks",
        topics: ["ES6+ Data Structures & Methods", "Promises, Async/Await & API Fetching", "Local Storage & Session State", "Clean Code & Modular JS"]
      },
      {
        title: "Module 3: Master React Core & Ecosystem",
        duration: "4 Weeks",
        topics: ["React 18 Features", "Hooks & Custom Hook Architecture", "Context API & Redux Toolkit", "Framer Motion Micro-animations"]
      },
      {
        title: "Module 4: Capstone UI Sprint & Portfolio Deployment",
        duration: "2 Weeks",
        topics: ["Complex Dashboard Interface Project", "Lighthouse Performance Tuning", "Accessibility (a11y) Compliance", "Vercel Deployment"]
      }
    ],
    projectsBuilt: [
      { name: "FinTech Banking Dashboard", description: "Interactive analytics dashboard with dynamic charts and dark mode.", tech: ["React", "Tailwind", "Chart.js"] },
      { name: "Streaming Video Discovery App", description: "Movie discovery platform querying TMDB API with infinite scroll.", tech: ["React", "REST API", "Framer Motion"] }
    ],
    skillsAcquired: ["Pixel-perfect UI Component Design", "React State & Context Architecture", "API Integration & Async Data Handling", "Modern Animation & Micro-interactions"],
    whoCanJoin: ["Designers transitioning to code", "Junior Web Developers wanting React expertise", "Students wanting high-demand frontend skills"],
    careerOpportunities: ["Frontend Developer", "React Developer", "UI/UX Engineer", "Web Interface Developer"],
    certificateInfo: "AppStack Certified Frontend Specialist Certificate.",
    faqs: [
      { question: "Do I need to know JavaScript before taking React?", answer: "We cover core JavaScript ES6+ in the first phase of the course so you feel confident before starting React." }
    ]
  },
  {
    id: "python-programming",
    title: "Python Programming & Automation",
    badge: "Core Tech",
    shortDescription: "Learn Python from fundamentals to advanced concepts, automation scripts, web scrapers, data analysis, and Django backend APIs.",
    fullDescription: "Python is the most versatile programming language in tech today. This course equips you with Python fundamentals, object-oriented principles, file handling, web scraping, automation scripts, SQL databases, and building robust RESTful APIs with Django/FastAPI.",
    category: "Programming",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    format: "Live Hands-on Coding",
    iconName: "Terminal",
    technologies: ["Python 3", "Django", "FastAPI", "SQLite/PostgreSQL", "Pandas", "BeautifulSoup", "Git", "Postman"],
    rating: 4.9,
    studentsCount: "380+",
    projectsCount: "6 Practical Scripts & APIs",
    prerequisites: "No prior experience required.",
    modules: [
      {
        title: "Module 1: Python Basics & Logic Building",
        duration: "3 Weeks",
        topics: ["Syntax, Variables & Data Types", "Control Flow, Loops & Conditionals", "Functions, Modules & Packages", "Error & Exception Handling"]
      },
      {
        title: "Module 2: OOP & Data Manipulation",
        duration: "3 Weeks",
        topics: ["Classes, Objects & Inheritance", "File Input/Output & JSON Parsing", "Web Scraping with BeautifulSoup", "Data Basics with Pandas"]
      },
      {
        title: "Module 3: Web Backend with FastAPI & Django",
        duration: "4 Weeks",
        topics: ["HTTP Protocol & REST API Principles", "FastAPI Routes & Pydantic Validation", "Django ORM & Models", "Authentication & JWT"]
      },
      {
        title: "Module 4: Practical Automation & Capstone Project",
        duration: "2 Weeks",
        topics: ["Automated Report Generator", "Database Migration & Querying", "API Deployment to Render/Cloud"]
      }
    ],
    projectsBuilt: [
      { name: "Automated Web Data Scraper", description: "Extracts real-time product prices and generates Excel/JSON reports.", tech: ["Python", "BeautifulSoup", "Pandas"] },
      { name: "RESTful Task Management API", description: "Secure backend API for task tracking with JWT authentication.", tech: ["Python", "FastAPI", "PostgreSQL"] }
    ],
    skillsAcquired: ["Pythonic Code Writing", "Web Automation & Scraping", "Backend API Development", "Database Querying with ORMs"],
    whoCanJoin: ["Beginners entering programming", "Data enthusiasts", "Students wanting strong backend fundamentals"],
    careerOpportunities: ["Python Developer", "Backend Developer", "Automation Engineer", "Junior Data Engineer"],
    certificateInfo: "AppStack Certified Python Developer Certificate.",
    faqs: [
      { question: "Can I switch to Data Science or Django later with this course?", answer: "Absolutely. Python provides the foundation for both Web Backend and Data Science/AI tracks." }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Product Strategy",
    badge: "Creative",
    shortDescription: "Design intuitive digital products. Master Figma, user research, wireframing, interactive prototyping, and design systems.",
    fullDescription: "Transform ideas into sleek, user-centric mobile apps and websites. Learn user research methodology, information architecture, wireframing, UI visual hierarchy, interactive prototyping in Figma, and design system creation.",
    category: "Design",
    duration: "3 Months",
    level: "Beginner to Advanced",
    format: "Design Studio Workshops",
    iconName: "Figma",
    technologies: ["Figma", "FigJam", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Color Theory", "Typography"],
    rating: 4.8,
    studentsCount: "210+",
    projectsCount: "3 Case Studies",
    prerequisites: "Creative mindset and interest in visual digital interfaces.",
    modules: [
      {
        title: "Module 1: UX Research & Product Strategy",
        duration: "3 Weeks",
        topics: ["User Personas & Journey Mapping", "Information Architecture & User Flows", "Competitive Analysis & UX Heuristics"]
      },
      {
        title: "Module 2: UI Visual Design Principles",
        duration: "3 Weeks",
        topics: ["Grid Systems & Spacing Rules", "Color Psychology & Contrast Guidelines", "Typography Hierarchy & Layout Design"]
      },
      {
        title: "Module 3: Advanced Figma & Design Systems",
        duration: "4 Weeks",
        topics: ["Figma Components & Auto-Layout 5.0", "Interactive Micro-Prototypes & Smart Animate", "Creating Reusable Design Tokens & UI Kits"]
      },
      {
        title: "Module 4: Portfolio Case Study & Design Handoff",
        duration: "2 Weeks",
        topics: ["Complete Mobile App UX Case Study", "Usability Testing & Feedback Loops", "Developer Handoff Documentation"]
      }
    ],
    projectsBuilt: [
      { name: "Health & Fitness Mobile App Design", description: "Complete end-to-end UI/UX case study with interactive prototype in Figma.", tech: ["Figma", "UX Research", "Prototyping"] },
      { name: "SaaS Marketing Landing Page Kit", description: "High-converting modern landing page UI kit with dark mode variants.", tech: ["Figma", "Design Systems"] }
    ],
    skillsAcquired: ["Figma Mastery", "User Research & Usability Testing", "Design System Architecture", "High-Fidelity Interactive Prototyping"],
    whoCanJoin: ["Graphic designers expanding to digital UI", "Product managers", "Students interested in product design"],
    careerOpportunities: ["UI/UX Designer", "Product Designer", "Figma Specialist", "Visual UI Developer"],
    certificateInfo: "AppStack Certified Product & UI/UX Designer.",
    faqs: [
      { question: "Do I need coding knowledge for UI/UX design?", answer: "No coding is required! You will focus on design thinking, visual aesthetics, and Figma prototyping." }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth Strategy",
    badge: "High Growth",
    shortDescription: "Drive traffic, conversion, and online brand growth. Master SEO, Performance Marketing, Social Media Strategy, and Analytics.",
    fullDescription: "Build end-to-end digital marketing campaigns that generate revenue. Learn Google Ads, Facebook & Instagram Ads, Search Engine Optimization (SEO), Email Marketing automation, Content Strategy, and Google Analytics 4 tracking.",
    category: "Marketing",
    duration: "3 Months",
    level: "Beginner to Professional",
    format: "Live Campaign Management",
    iconName: "TrendingUp",
    technologies: ["Google Ads", "Meta Ads Manager", "SEO Tools (Ahrefs/SEMrush)", "Google Analytics 4", "Canva", "Mailchimp", "WordPress SEO"],
    rating: 4.7,
    studentsCount: "260+",
    projectsCount: "4 Live Campaigns",
    prerequisites: "Basic internet navigation and social media awareness.",
    modules: [
      {
        title: "Module 1: Search Engine Optimization (SEO)",
        duration: "3 Weeks",
        topics: ["On-Page & Technical SEO Audits", "Keyword Research & Content Strategy", "Link Building & Local SEO Strategy"]
      },
      {
        title: "Module 2: Performance Marketing & Paid Ads",
        duration: "4 Weeks",
        topics: ["Google Search, Display & YouTube Ads", "Meta (Facebook/Instagram) Ad Targeting & Funnels", "Ad Copywriting & Creative Design"]
      },
      {
        title: "Module 3: Content Marketing & Social Media",
        duration: "3 Weeks",
        topics: ["Social Media Content Calendars", "Short-Form Video Marketing Strategy", "Email Marketing Automation & Lead Magnet Funnels"]
      },
      {
        title: "Module 4: Web Analytics & Campaign Optimization",
        duration: "2 Weeks",
        topics: ["Google Analytics 4 Setup & Event Tracking", "Conversion Rate Optimization (CRO)", "ROI & ROAS Reporting Dashboards"]
      }
    ],
    projectsBuilt: [
      { name: "Local Business SEO Audit & Ranking Sprint", description: "Optimized a business website to rank in Google Local Pack top 3.", tech: ["SEO", "Google Business Profile", "Ahrefs"] },
      { name: "E-Commerce Meta Ad Campaign", description: "Targeted Facebook/Instagram ad campaign generating 4.2x ROAS.", tech: ["Meta Ads Manager", "GA4", "Canva"] }
    ],
    skillsAcquired: ["Search Engine Optimization", "Paid Advertising Management", "Social Media Funnel Architecture", "Analytics & Conversion Tracking"],
    whoCanJoin: ["Entrepreneurs & Small Business Owners", "Marketing Graduates", "Freelancers seeking digital clients"],
    careerOpportunities: ["Digital Marketing Executive", "SEO Specialist", "Performance Marketing Associate", "Social Media Strategist"],
    certificateInfo: "AppStack Certified Digital Growth Marketer Certificate.",
    faqs: [
      { question: "Do we manage live budgets in class?", answer: "Yes, students work with real campaign budgets and live analytics to gain practical experience." }
    ]
  }
];
