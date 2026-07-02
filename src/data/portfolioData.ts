import { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  name: "Meron Shambelu",
  firstName: "Meron",
  lastName: "Shambelu",
  title: "Software Engineering Student | Full-Stack Web Developer",
  subTitle: "Building elegant solutions to complex problems with modern technology",
  aboutText: "I am a passionate, detail-oriented Software Engineering student at Debre Berhan University and an ambitious Full-Stack Web Developer based in Addis Ababa, Ethiopia. I thrive on crafting premium digital experiences that seamlessly combine high-fidelity user interfaces with secure, efficient, and well-structured backend systems. With a strong foundation in computer science principles and a continuous learning mindset, I aim to build software that creates real-world impact.",
  careerObjective: "Seeking an internship or junior software engineer opportunity where I can apply my full-stack development skills, collaborate with seasoned professionals, and contribute to building highly polished, high-performance web applications while continuing to expand my knowledge of modern system architectures.",
  values: [
    "Clean, Readable, and Modular Code",
    "Empathetic, User-Centric Design (UI/UX)",
    "Continuous Learning & Adaptability",
    "Strong Problem-Solving & Algorithmic Foundations",
    "Proactive Collaboration & Open Communication",
    "Performance Optimization & Web Accessibility"
  ],
  learningJourney: [
    {
      year: "2024",
      title: "The Journey Begins",
      desc: "Began my Software Engineering Bachelor's Degree at Debre Berhan University. Mastered core computer science concepts and stepped into web engineering with HTML, CSS, and JavaScript."
    },
    {
      year: "2025",
      title: "Advanced Systems & Frameworks",
      desc: "Adopted React and TypeScript for high-fidelity interfaces. Built specialized academic calculators and bilingual portals while focusing on premium aesthetics."
    },
    {
      year: "2026",
      title: "Academic & Professional Excellence",
      desc: "Currently developing specialized commercial sites and preparing to step into the professional tech industry with a focus on full-stack excellence."
    }
  ],
  skills: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 92, icon: "ReactIcon" },
        { name: "TypeScript", level: 88, icon: "Code" },
        { name: "Tailwind CSS v4", level: 95, icon: "Paintbrush" },
        { name: "JavaScript (ES6+)", level: 90, icon: "Braces" },
        { name: "HTML5 & CSS3", level: 95, icon: "FileCode" },
        { name: "Motion (Framer)", level: 85, icon: "Sparkles" }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 84, icon: "Server" },
        { name: "Express.js", level: 86, icon: "Layers" },
        { name: "Python", level: 78, icon: "Code" },
        { name: "RESTful APIs", level: 90, icon: "Link" },
        { name: "MongoDB", level: 80, icon: "Database" },
        { name: "C++", level: 75, icon: "Terminal" }
      ]
    },
    {
      title: "Tools & Deployments",
      skills: [
        { name: "Git & GitHub", level: 88, icon: "Github" },
        { name: "VS Code", level: 92, icon: "Laptop" },
        { name: "Postman", level: 85, icon: "Send" },
        { name: "Vercel / Render", level: 80, icon: "Cloud" }
      ]
    }
  ],
  projects: [
    {
      id: "mesi-coffee",
      name: "Mesi Coffee — Premium Specialty Café Website",
      description: "A high-end, cinematic web experience designed for a luxury artisanal café, featuring a premium brand identity, interactive beverage customization, and a fully reactive shopping cart.",
      longDescription: "Mesi Coffee is a luxury artisanal cafe experience online. Built with React 19 and Tailwind CSS v4, this site features a deep charcoal, gold, and warm coffee palette. Users can dynamically configure their coffee (size, espresso shots, milk choices, and sweetening levels), see the visual update in real-time, add items to an animated sliding drawer cart with coupon reductions (COFFEE10, MESI20), and review a filterable high-fidelity lightbox gallery. It also tracks the cafe's open/closed state dynamically based on local Addis Ababa hours.",
      image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800&auto=format&fit=crop",
      techs: ["React 19", "TypeScript", "Tailwind CSS v4", "Motion", "Lucide React", "Local Storage"],
      features: [
        "Premium Visual Identity: Rich charcoal & warm gold cinematic layout.",
        "Interactive Counter Customizer: Custom milk types, sweet levels, and barista note injections in real-time.",
        "Sliding Shopping Bag: Animated cart drawer with dynamic subtotals, VAT, and coupon support.",
        "Immersive Lightbox Carousel: Filterable photo stream of cafe products with keyboard-guided zoom panels.",
        "Live Operating Indicator: Shows 'Open Now' or 'Closed Now' based on real-time operating hours."
      ],
      github: "https://github.com/meron-s/mesi-coffee-web",
      demo: "https://mesi-coffee.vercel.app/",
      featured: true
    },
    {
      id: "gpa-calculator",
      name: "DBU Software Engineering GPA Portal",
      description: "A specialized, professional academic audit and grade simulation tool pre-configured with the Debre Berhan University Software Engineering curriculum (Year 2 to 5).",
      longDescription: "Engineered specifically for fellow software engineering students, this portal provides a clean overview of academic standards. It lists all curriculum courses from Year 2 to Year 5, letting students input grades, calculate dynamic SGPA, simulate target cumulative standings (CGPA), track total credit achievements, and see their performance trends visually over time via charts.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
      techs: ["React 19", "TypeScript", "Tailwind CSS v4", "Recharts", "Motion", "Context API"],
      features: [
        "DBU Software Engineering Curriculum: Instantly loaded with courses, credits, and prerequisites.",
        "Interactive CGPA Optimizer: Uncheck or toggle specific semesters to observe standings dynamically.",
        "Academic Progress Audit: Track total accumulated credits against the graduation threshold.",
        "Target CGPA Predictor: Input a desired CGPA to learn the exact average grade needed in upcoming courses.",
        "Grade Distribution Charts: Animated charts displaying grading trends and performance distributions."
      ],
      github: "https://github.com/meron-s/dbu-se-gpa-calculator",
      demo: "https://dbu-se-gpa-calculator.vercel.app/",
      featured: true
    },
    {
      id: "ethiobooks",
      name: "EthioBooks Digital Library",
      description: "A modern, bilingual Amharic & English digital portal for exploring, reading, and reviewing legally compiled Ethiopian literature.",
      longDescription: "EthioBooks aims to bridge cultural heritage with modern tech by offering a full bilingual experience (English & Amharic). Built with smooth page transitions, it includes curated catalogs of books, rich author biographies, detailed review boards, user profile shelves, and an administrative panel to submit books or moderate reviews.",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=800&auto=format&fit=crop",
      techs: ["React (Vite)", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router", "Gemini API"],
      features: [
        "Full Bilingual Localization: Effortless switching between English and Amharic UI.",
        "Curated Literary Discovery: Filter and search by author, genre, or publication period.",
        "Dynamic Book Review Boards: Community submissions and ratings for literary pieces.",
        "Author Shelves: Interactive biography cards mapping writers with their published assets.",
        "Responsive Reader View: Elegant reading container with adjustable spacing, font sizes, and dark paper themes."
      ],
      github: "https://github.com/meron-s/ethiobooks-digital-library",
      demo: "https://ethiobooks-digital-library.onrender.com",
      featured: true
    },
    {
      id: "banking-system",
      name: "C++ Terminal Banking System",
      description: "An object-oriented, file-persisted banking application simulating complex ledger operations, secure transactions, and account auditing in C++.",
      longDescription: "A robust back-to-basics software engineering demonstration. This terminal application utilizes object-oriented principles (encapsulation, abstraction, inheritance) to create a reliable bank simulation. Uses C++ file streams to persist database logs securely on the disk.",
      image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=800&auto=format&fit=crop",
      techs: ["C++", "Object-Oriented Design", "File Streams (I/O)", "Algorithms"],
      features: [
        "Account Initialization & Verification: Creating multi-tier account numbers with strict field validation.",
        "Audited Money Exchange: Secure deposit, withdrawal, and ledger balance tracking.",
        "Inter-Account Fund Transfer: Atomic transfer transactions with verification hashes.",
        "Persistent Storage logs: Custom string parsing to read/write ledger records to text-file databases."
      ],
      github: "https://github.com/meron-s/cpp-banking-system.git",
      featured: false
    },
    {
      id: "portfolio-website",
      name: "Awwwards-Level Student Portfolio",
      description: "The premium, responsive website you are browsing. Uses micro-animations, theme triggers, and data-driven modular cards to make a stellar impression.",
      longDescription: "A culmination of premium UI styling, optimized performance, and clean code. Implemented with dark mode by default, standard light mode transitions, customized Recharts stats representing mock GitHub history, a responsive validation contact form, and a modular details viewer.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      techs: ["React 19", "TypeScript", "Tailwind CSS v4", "Motion", "React Hook Form", "Recharts"],
      features: [
        "Fully Data-Driven Structure: Customizing the entire site is as simple as updating a single JSON/TypeScript config.",
        "Adaptive Design: Designed desktop-first with elegant sidebar rails, fluidly scaling down to responsive touch-safe mobile overlays.",
        "Vibrant theme transition: Seamless switching between Cosmic Dark and Alabaster Light theme palettes.",
        "EmailJS Interface: Fully wired contact panel ready to link with transactional mail services."
      ],
      github: "https://github.com/meron-s",
      demo: "#",
      featured: false
    }
  ],
  education: [
    {
      degree: "B.Sc. in Software Engineering",
      institution: "Debre Berhan University (DBU)",
      period: "2024 - Present (Expected Graduation 2029)",
      gpa: "3.85 / 4.00 Cumulative GPA",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (C++)",
        "Database Management Systems (SQL & NoSQL)",
        "Software Architecture & Design Patterns",
        "Web Engineering & Technologies",
        "Operating Systems & System Programming"
      ],
      interests: ["Full-Stack Web Architectures", "Human-Computer Interaction (HCI)", "Algorithm Optimization", "Database Schemas & Sharding"]
    }
  ],
  certificates: [
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google Career Certificates (Coursera)",
      date: "Nov 2024",
      credentialUrl: "https://coursera.org",
      logo: "Award"
    },
    {
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      date: "Aug 2023",
      credentialUrl: "https://freecodecamp.org",
      logo: "FileCheck"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Jan 2024",
      credentialUrl: "#",
      logo: "Shield"
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM (Coursera)",
      date: "May 2024",
      credentialUrl: "#",
      logo: "Cloud"
    }
  ],
  achievements: [
    {
      title: "DBU Annual Tech Hackathon - 2nd Place",
      description: "Co-developed an offline-first learning system for Ethiopian rural school students, implementing synchronized local browser databases.",
      category: "hackathon",
      date: "May 2024"
    },
    {
      title: "Department Academic Excellence Award",
      description: "Recognized as one of the top academic performers in the Department of Software Engineering at Debre Berhan University with a 3.85+ CGPA.",
      category: "award",
      date: "July 2024"
    },
    {
      title: "DBU Google Developer Groups (GDG) Core Member",
      description: "Selected to assist in organizing local coding events, leading peer study groups for React, and guiding introductory frontend workshops.",
      category: "leadership",
      date: "Sep 2024"
    },
    {
      title: "Open-Source Contributor",
      description: "Contributed components and bug fixes to several local translation engines and school database libraries on GitHub.",
      category: "open-source",
      date: "Ongoing"
    }
  ],
  experience: [
    {
      title: "Independent Full-Stack Developer Projects",
      description: "Designed, engineered, and shipped real-world production projects, focusing on responsive frontend designs, cart dynamics, state synchronization, and complex layout animations.",
      period: "2023 - Present",
      highlights: [
        "Coded 'Mesi Coffee' showcasing custom order configurations, custom operating hours badges, and stateful carts.",
        "Built 'EthioBooks Digital Library' with translation dictionaries supporting English & Amharic toggles.",
        "Developed custom curriculum GPA calculator tracking student standings seamlessly with local JSON file import/export capabilities."
      ],
      tag: "Personal Projects"
    },
    {
      title: "Open-Source and Collaboration Actions",
      description: "Maintained active engagement within GitHub and regional study boards, improving code standards and writing robust documentations.",
      period: "2024 - Present",
      highlights: [
        "Published reusable TypeScript utility types and custom styling extensions for Tailwind projects.",
        "Authored explanatory documentations for DBU Software Engineering student groups, facilitating GPA Portal adaptation."
      ],
      tag: "Open Source"
    },
    {
      title: "Academic Peer Tutoring & Volunteering",
      description: "Volunteered as a Peer Tutor in Debre Berhan University, explaining data structures, pointer mechanics in C++, and relational database design.",
      period: "2023 - 2024",
      highlights: [
        "Assisted over 40 sophomore students in understanding Object-Oriented principles and pointers.",
        "Hosted coding sessions on weekends teaching Git commands, branching, and pull request workflows."
      ],
      tag: "Volunteer Activities"
    }
  ],
  githubStats: {
    username: "meron-s",
    totalCommits: 33,
    stars: 5,
    repositoriesCount: 4,
    contributionsThisYear: 33,
    languages: [
      { name: "TypeScript", percentage: 40, color: "#3178c6" },
      { name: "Python", percentage: 25, color: "#3776ab" },
      { name: "JavaScript", percentage: 15, color: "#f1e05a" },
      { name: "C++", percentage: 12, color: "#f34b7d" },
      { name: "CSS/HTML", percentage: 8, color: "#563d7c" }
    ],
    streak: { current: 15, longest: 32 }
  },
  contact: {
    email: "meronshambelu721@gmail.com",
    phone: "0979574804",
    location: "Addis Ababa, Ethiopia",
    github: "https://github.com/meron-s",
    linkedin: "https://www.linkedin.com/in/meron-shambelu-b28921403",
    telegram: "https://t.me/Kal123belay"
  },
  languages: [
    { language: "Amharic", level: "Native / Bilingual", percentage: 100 },
    { language: "English", level: "Professional Working", percentage: 90 }
  ]
};
