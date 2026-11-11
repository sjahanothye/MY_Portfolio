export const personalInfo = {
  name: "Sumaya Jahan Othye",
  role: "Software Engineer | AI/ML Enthusiast",
  headline: "Specializing in Full-Stack Web Development, Computer Vision & Deep Learning",
  bloodGroup: "A+ (Positive)",
  email: "sjahanothye1@gmail.com",
  phone: "+8801533419019",
  whatsapp: "+8801533419019",
  location: "59/1, Subash Bosh Avenue, Luxmibazar, Dhaka, Bangladesh",
  github: "https://github.com/sjahanothye",
  linkedin: "https://www.linkedin.com/in/sumaya-jahan-othye",
  vercel: "https://vercel.com/sjahanothye",
  avatar: "/profile.jpg",
  resumeUrl: "/CV_SUMAYA_JAHAN_OTHYE.pdf",
  bio: `Passionate and driven Computer Science & Engineering graduate from the University of Asia Pacific (Graduated: 2026) with a strong academic foundation (CGPA 3.48). I specialize in Full-Stack Web Development and AI/ML (Deep Learning and Computer Vision), combining analytical thinking with technical problem-solving to build modern, scalable, and user-friendly digital solutions. Through my undergraduate thesis on Deepfake Image Detection using TensorFlow, I gained hands-on expertise in implementing self-supervised learning and computer vision models. I am highly motivated to innovate, collaborate, and create intelligent software applications that solve real-world problems.`,
  story: `My journey into programming began with curiosity about how logical instructions transform into impactful software. Over the years, I've honed my skills through rigorous academic courses, competitive coursework, and practical full-stack projects using React, Next.js, Django, and modern backend services. Alongside web development, my fascination with artificial intelligence led me to deep dive into computer vision and self-supervised learning, culminating in my thesis on deepfake detection. Outside the code editor, I enjoy exploring quantitative analysis, academic research, UI design trends, and engaging in creative brainstorming sessions.`,
  languages: [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Professional Working Proficiency" },
  ],
  interests: [
    "Artificial Intelligence & Deep Learning",
    "Computer Vision & Pattern Recognition",
    "Scalable Full-Stack Architecture",
    "Academic Research & Paper Reading",
    "UI/UX Design & Micro-interactions",
    "Technology Blogging & Mentoring"
  ]
};

export const skillsData = {
  categories: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js 14", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Bootstrap 5", level: 90 }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Django (Python)", level: 85 },
        { name: "Node.js & Express", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 82 },
        { name: "SQLite", level: 88 },
        { name: "RESTful APIs & JWT", level: 88 }
      ]
    },
    {
      title: "AI / ML & Data Science",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "Computer Vision & OpenCV", level: 85 },
        { name: "Deep Learning (CNN/ResNet)", level: 88 },
        { name: "Self-Supervised Learning", level: 82 },
        { name: "Slot Attention Mechanisms", level: 80 },
        { name: "NumPy, Pandas, Scikit-Learn", level: 88 },
        { name: "Matplotlib & Data Viz", level: 85 }
      ]
    },
    {
      title: "Core CS, Tools & Testing",
      skills: [
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "Object-Oriented Programming (OOP)", level: 90 },
        { name: "Git & GitHub", level: 92 },
        { name: "Selenium (Python) Automation", level: 82 },
        { name: "VS Code & Postman", level: 90 },
        { name: "Figma UI Design", level: 80 },
        { name: "Ubuntu / Linux & Windows OS", level: 88 }
      ]
    }
  ]
};

export const educationData = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "University of Asia Pacific (UAP)",
    duration: "2022 – 2026",
    grade: "CGPA 3.48 (out of 4.00)",
    status: "Graduated (2026)",
    description: "Completed comprehensive computer science curriculum with strong focus on software engineering, algorithm design, artificial intelligence, and database management systems. Conducted high-impact undergraduate research in deepfake detection.",
    courses: [
      "Artificial Intelligence & Machine Learning",
      "Computer Vision & Image Processing",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Technologies & Software Engineering",
      "Operating Systems & Computer Networks"
    ]
  }
];

export const thesisData = {
  title: "Deepfake Image Detection Using Self-Supervised Contrastive Learning and Slot Attention",
  institution: "University of Asia Pacific | Department of CSE",
  period: "Undergraduate Thesis | June 2026",
  pdfUrl: "/thesis.pdf",
  authors: "Sumaya Jahan Othye (Roll: 22101147), Mahia Akter Momo, Nafisa Ali",
  myRole: "Model Architecture Design, Self-Supervised Contrastive Pretraining, Slot Attention Integration & Code Implementation (Primary Author of Ch. 3 & 4)",
  supervisors: "Nakiba Nuren Rahman (Supervisor), Dr. Nasima Begum (Co-Supervisor)",
  github: "https://github.com/nafisaalicodes/Deepfake-Image-Detection-Using-Self-Supervised-Contrastive-Learning-and-Slot-Attention-",
  teamRepo: "https://github.com/nafisaalicodes/Deepfake-Image-Detection-Using-Self-Supervised-Contrastive-Learning-and-Slot-Attention-",
  badge: "Undergraduate Research & Thesis",
  accuracy: "90.73% Test Accuracy",
  dataset: "OpenDeepfake Preview Dataset (19,999 Images)",
  reportLength: "87 Pages Full Research Report",
  summary: "A cutting-edge computer vision research addressing the widespread challenge of hyper-realistic facial manipulation by pioneering the combination of contrastive representation learning and object-centric Slot Attention mechanisms.",
  keyHighlights: [
    "Custom Architecture: Designed and implemented a custom ResNet encoder paired with an 8-slot Slot Attention module in TensorFlow.",
    "Self-Supervised Contrastive Learning: Leveraged contrastive learning to extract fine-grained facial tamper representations without over-relying on sparse labels.",
    "Slot Decomposition: Utilized Slot Attention to decompose complex facial features into discrete slots, forcing the model to zoom in on manipulated facial regions rather than background artifacts.",
    "Impressive Benchmark: Achieved 90.73% test accuracy on 19,999 benchmark images, significantly mitigating background texture overfitting."
  ],
  tools: ["TensorFlow", "OpenCV", "Python", "NumPy", "Matplotlib", "ResNet Architectures", "Contrastive Learning"],
  challenges: [
    "High computational demand and memory consumption required for computing contrastive pair loss tensors.",
    "Eliminating bias where the model inadvertently learns non-facial background patterns instead of facial blending boundary artifacts.",
    "Balancing slot convergence speed with deep feature representation stability in TensorFlow."
  ],
  futureScope: [
    "Extension to frame-by-frame temporal deepfake video streams with cross-frame attention.",
    "Audio-visual multi-modal synchronization check to detect synchronized deepfake lip-sync attacks.",
    "Deployment as an open-source browser plugin for real-time verification of online media."
  ]
};

export const projectsData = [
  {
    id: "healthconnect",
    name: "HealthConnect — Healthcare & Social Impact Platform",
    category: "Full-Stack Web App",
    tagline: "Connecting communities across Bangladesh through organized medical camps, blood drives, and social welfare.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "https://healthconnect-client.vercel.app",
    deploymentPlatform: "Vercel",
    clientRepo: "https://github.com/sjahanothye/healthconnect-client",
    serverRepo: "https://github.com/sjahanothye/healthconnect-server",
    brief: "HealthConnect is a modern, community-driven event management platform designed to connect volunteers, licensed doctors, and local organizations across Bangladesh. Enables individuals to organize healthcare camps, donate blood, and participate in community health drives.",
    description: `HealthConnect is a mission-driven, full-stack platform built with Next.js 14, TypeScript, and Node.js. It bridges the gap between underprivileged communities and volunteer healthcare providers.
    
    The platform allows event organizers to create and coordinate medical checkup camps, blood donation sessions, and health literacy workshops with custom participant caps and verification safeguards. Volunteers and participants can register, track event schedules, view verified doctor profiles, and receive instant participation confirmations.`,
    features: [
      "Role-based authentication & authorization (Admin, Doctor, Organizer, Volunteer)",
      "Dynamic event browsing with search, category filtering, and location tags",
      "Interactive RSVP & volunteer sign-up system with automated slot limits",
      "Comprehensive organizer dashboard to manage events, attendees, and feedback",
      "Fully responsive and accessible UI crafted with Tailwind CSS & Next.js 14"
    ],
    challenges: [
      "Handling concurrent event registrations without race conditions in MongoDB.",
      "Ensuring seamless cross-origin authentication with secure HTTP-only cookies between client (Vercel) and server.",
      "Optimizing image delivery and page transitions for users on low-bandwidth rural connections."
    ],
    futurePlans: [
      "Integrate automated SMS notifications for upcoming rural medical camps.",
      "Incorporate video teleconsultation features for remote patient follow-ups.",
      "Implement automated PDF volunteer certificate generation upon event completion."
    ]
  },
  {
    id: "bazar-dor",
    name: "বাজার দর (Bazar Dor) — Commodity Price Tracker",
    category: "Web Application",
    tagline: "Real-time Bangladeshi daily commodity price tracking for wholesale and retail markets.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "REST APIs"],
    liveUrl: "https://assignment07-drab.vercel.app",
    deploymentPlatform: "Vercel",
    clientRepo: "https://github.com/sjahanothye/Assignment07",
    brief: "A modern, reliable web application tracking real-time Bangladeshi daily commodity prices (rice, lentils, cooking oil, vegetables, fish, meat, and spices) with market-wise comparison.",
    description: `বাজার দর (Bazar Dor) addresses the challenge of daily commodity price volatility in Bangladesh. It provides consumers, household planners, and retailers with transparent, accurate, and up-to-date daily market rates.
    
    Users can quickly examine wholesale vs. retail price differences, identify maximum and minimum price spreads, filter by category (Vegetables, Grains, Protein, Spices), and view historical trend indications at a glance.`,
    features: [
      "Real-time daily price updates across essential commodities",
      "Wholesale vs. Retail comparison with maximum-minimum price ranges",
      "Category-wise filtering (চাল, ডাল, তেল, শাকসবজি, মাছ, মাংস, মসলা)",
      "Instant live search and sorting by price variance",
      "Mobile-friendly, responsive interface with dual Bangla-English typography"
    ],
    challenges: [
      "Structuring bilingual data models (Bangla and English) without breaking UI layout responsiveness.",
      "Maintaining fast client-side search and filtering over extensive price datasets with zero perceptible lag.",
      "Creating clear visual indicators for price spreads that are intuitive for users of all technical proficiencies."
    ],
    futurePlans: [
      "Add crowdsourced price reporting where local buyers can submit receipts for verification.",
      "Incorporate predictive AI models to forecast seasonal vegetable price drops and spikes.",
      "Build offline PWA support so shoppers can view cached market prices without internet."
    ]
  },
  {
    id: "fitlog",
    name: "FitLog — Gym Companion & Workout Logger",
    category: "Interactive Fitness App",
    tagline: "Interactive dark-themed gym companion and daily workout planner for athletes.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Canvas Confetti", "LocalStorage API"],
    liveUrl: "https://assignment06-wheat.vercel.app",
    deploymentPlatform: "Vercel",
    clientRepo: "https://github.com/sjahanothye/Assignment06",
    brief: "A high-performance gym companion allowing athletes to build custom workout routines across 12 major lifts, track live sets & calories, and celebrate completions.",
    description: `FitLog is designed for athletes and gym-goers who want an uncluttered, high-contrast workout logger. Built with React and TypeScript, it allows users to browse an exercise database categorized by muscle group, assemble a personalized daily training split, and track their reps and weights in real-time.
    
    The app features live timers, metabolic calorie estimation algorithms, and rewarding celebration animations to boost training motivation.`,
    features: [
      "Curated library of 12 compound and isolation exercises across major muscle groups",
      "Interactive routine builder with dynamic set and rep counters",
      "Live workout duration tracker with estimated metabolic calorie burn",
      "Instant confetti celebrations upon completing set goals",
      "Persistent workout history using browser local storage"
    ],
    challenges: [
      "Keeping timer states accurate when mobile browsers switch background tabs or sleep.",
      "Developing accurate calorie burn calculation based on exercise intensity and duration.",
      "Creating smooth, tactile micro-animations on mobile touch screens."
    ],
    futurePlans: [
      "Add cloud synchronization across devices with user profile accounts.",
      "Integrate progressive overload recommendations based on previous session PRs.",
      "Implement exportable weekly workout volume summaries in PDF/CSV format."
    ]
  },
  {
    id: "academic-pm",
    name: "Academic Project Management & Collaboration Platform",
    category: "Full-Stack Web App",
    tagline: "Streamlining team coordination, milestone tracking, and supervisor submissions for university students.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    techStack: ["Python", "Django", "SQLite", "Bootstrap 5", "JavaScript"],
    liveUrl: "https://github.com/sjahanothye",
    clientRepo: "https://github.com/sjahanothye",
    brief: "Full-stack academic platform built with Django's MVT architecture to facilitate student team collaboration, role-based project submission, and supervisor evaluation.",
    description: `Developed to solve coordination bottlenecks in university group projects, this platform provides role-based authentication for students, group leaders, and faculty supervisors.
    
    It features structured milestone tracking, document and code submission repositories, interactive progress dashboards, and automated email alerts for upcoming academic deadlines.`,
    features: [
      "Role-based authentication (Faculty, Team Lead, Student)",
      "Interactive dashboards with milestone progress tracking",
      "Relational schema handling concurrent team allocations and task assignments",
      "Secure file upload system for reports, presentations, and code deliverables",
      "Built with Django ORM, server-side validation, and responsive Bootstrap views"
    ],
    challenges: [
      "Designing complex normalized relational models in SQLite to manage multiple team tiers without data redundancy.",
      "Implementing robust server-side validation and sanitization for diverse student file uploads.",
      "Managing permission scopes so supervisors can only grade assigned batches."
    ],
    futurePlans: [
      "Add real-time chat and discussion boards using Django Channels & WebSockets.",
      "Integrate automated plagiarism scanning for submitted academic reports.",
      "Deploy on cloud infrastructure with PostgreSQL and AWS S3 storage."
    ]
  },
  {
    id: "earth-guardians",
    name: "Earth Guardians — Gamified Eco-Action Platform",
    category: "Gamified Web App",
    tagline: "Gamified environmental awareness web application connecting citizens through eco-missions and NASA data.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
    techStack: ["PHP", "JavaScript", "HTML5/CSS3", "NASA Earth API", "AQI API"],
    liveUrl: null,
    clientRepo: "https://github.com/sjahanothye/Earth-Guardian",
    brief: "Engaging web app encouraging sustainable living through gamified eco-missions, XP badges, real-time air quality index monitoring, and NASA Earth climate data.",
    description: `Earth Guardians inspires environmental consciousness through playful game mechanics. Users take on real-world eco-challenges (tree planting, plastic reduction, energy saving) to earn XP, level up, and unlock achievement badges.
    
    The application connects to external scientific APIs to deliver live Air Quality Index (AQI) readings, local weather insights, and NASA satellite climate visualizations.`,
    features: [
      "Gamified mission system with XP, leveling, and eco-badges",
      "Real-time integration with live AQI and meteorological APIs",
      "Interactive climate dashboard powered by NASA Earth imagery",
      "Community forum for sharing green initiatives and tree-plantation drives",
      "Personalized impact statistics tracking saved carbon and water"
    ],
    challenges: [
      "Working with multiple third-party API rate limits and providing reliable fallback cache data.",
      "Creating an intuitive gamification feedback loop that encourages genuine sustained action.",
      "Ensuring clean cross-browser rendering across legacy mobile browsers."
    ],
    futurePlans: [
      "Re-engineer backend with Node.js/Express and MongoDB for higher scalability.",
      "Add geolocation-based local community cleanup meetups with map integration.",
      "Introduce school eco-club leaderboards for competitive inter-institution challenges."
    ]
  },
  {
    id: "devstack",
    name: "DevStack — Interactive Tech Stack Builder",
    category: "Web Application",
    tagline: "Interactive developer tech stack builder with real-time feedback and slot architecture.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://sjahanothye.github.io/Assignment05/",
    clientRepo: "https://github.com/sjahanothye/Assignment05",
    brief: "An interactive web app allowing software engineers to discover, organize, and assemble customized technology stacks with real-time feedback and smooth animations.",
    description: `DevStack is an interactive, modern web application designed for developers and software engineers to discover, organize, and assemble their ideal software technology stacks with real-time feedback, smooth animations, and zero duplicate entries.
    
    Users can browse through frontend, backend, database, and devops categories, drag or select technologies into active slots, and preview their integrated tech blueprint.`,
    features: [
      "Dynamic category-wise technology selector with instant visual badges",
      "Interactive stack assembler with duplicate prevention safeguards",
      "Fast client-side build with Vite and responsive Tailwind design",
      "One-click reset and summary view of assembled architecture"
    ],
    challenges: [
      "Managing instant reactive state synchronization across chosen tech categories without redundant component re-renders."
    ],
    futurePlans: [
      "Add exportable stack README badge generator.",
      "Integrate community stack reviews and voting."
    ]
  }
];

