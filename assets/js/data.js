/* ============================================
   Content Data — Single source of truth
   Edit this file to update all portfolio content.
   ============================================ */

const PROFILE = {
  name: 'Akarshak Mishra',
  role: 'B.Tech CSE (AI) Student',
  tagline: 'AI student and problem-solver. I love learning about new technologies and working with great teams to solve real-world problems that matter.',
  status: 'Open to opportunities',
  github: 'https://github.com/akarshakmishra47-afk',
  linkedin: 'https://www.linkedin.com/in/akarshak-mishra-b75503383',
  email: 'akarshakmishra47@gmail.com',
  stack: ['C', 'C++', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'MongoDB Atlas', 'Supabase', 'Vercel', 'Render', 'GoDaddy', 'Oops With Java'],
};

const HACKATHONS = [
  {
    title: 'Far Away',
    org: 'Zuup',
    icon: '🚀',
    description: 'MVP Submission for Round 1 of the Far Away challenge. Participated as Team Tech Hustlers.',
    type: 'Competition',
    year: '2026',
    certificate: 'assets/certificates/far_away_certificate.pdf'
  },
  {
    title: 'Adobe University Hackathon 2026',
    org: 'Adobe',
    icon: '💻',
    description: 'Developed innovative solutions as part of Team NexForge for the Adobe university challenge.',
    type: 'Hackathon',
    year: '2026',
    certificate: 'assets/certificates/adobe_hackathon_certificate.pdf'
  },
  {
    title: 'Brain War 2026 – National Level Tech Quiz',
    org: 'codearenas',
    icon: '🧠',
    description: 'Participated in the national level technical quiz competition assessing core computer science concepts.',
    type: 'Quiz',
    year: '2026',
  },
  {
    title: 'Grand Tech Racing - GTR',
    org: 'Bennett University',
    icon: '🏎️',
    description: 'Competitive tech racing and problem-solving event. Participated as Team Heerakund Factory Workers.',
    type: 'Competition',
    year: '2026',
  },
  {
    title: 'Axelerate - RC Car Racing',
    org: 'IIT - BHU',
    icon: '🏁',
    description: 'Engineered and raced an RC car at the prestigious IIT-BHU tech festival with Team Tech_Hustlers.',
    type: 'Competition',
    year: '2026',
  }
];

const PROJECTS = [
  {
    title: 'Vidya-Setu',
    description: 'A comprehensive student web portal & career ecosystem bridging the gap between campus life and professional development.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'Groq AI'],
    infra: 'Full-Stack Ecosystem',
    github: 'https://github.com/akarshakmishra47-afk/Vidya-Setu',
    live: 'https://www.vidya-setu.org.in/',
    readme: `
      <h3>🎓 Vidya Setu — Comprehensive Student Web Portal & Career Ecosystem</h3>
      <p><strong>Overview:</strong> Vidya Setu is a centralized, full-stack web application designed to bridge the gap between campus life and professional development for college students. It provides a cohesive ecosystem where students can manage their academic profiles, discover real-time jobs, leverage AI for resume optimization, apply for scholarships, and interact through a peer-to-peer campus marketplace.</p>
      
      <h4>🧩 Core Application Modules</h4>
      <ul>
        <li><strong>Authentication & User Profile:</strong> JWT-based auth with Bcrypt. RBAC separates students from admins. Profiles link GitHub, LinkedIn, and academics with a Profile Locking System requiring admin approval for edits.</li>
        <li><strong>Automated Job & Internship Engine (The Hub):</strong> Background Cron Service fetches live postings from APIs (Remotive, Himalayas). Standardizes data into a MongoDB Job schema with advanced filtering.</li>
        <li><strong>AI-Powered Resume Intelligence:</strong> Uses Multer and pdf-parse for PDF uploads. Integrates Groq AI API to analyze resumes, identify missing keywords, and generate actionable career roadmaps.</li>
        <li><strong>Comprehensive Scholarship System:</strong> Tracks regional/national scholarships. Integrated schemas for applications and an Issue Resolution ticketing system.</li>
        <li><strong>Campus Marketplace:</strong> Peer-to-Peer localized e-commerce for study materials and dorm essentials, focusing on direct on-campus transactions.</li>
        <li><strong>Academic Resource & Community Hub:</strong> Structured repository for Previous Year Questions (PYQs) and a CommunityPost module for localized student feeds.</li>
      </ul>

      <h4>🛠️ Technology Stack & Architecture</h4>
      <p><strong>Frontend:</strong> HTML5, CSS3, JavaScript (Vanilla + React/Vite ecosystem elements), utilizing modern UI principles like glassmorphism and gradient aesthetics.<br>
      <strong>Backend:</strong> Node.js, Express.js on a modular MVC architecture.<br>
      <strong>Database:</strong> MongoDB & Mongoose (14+ relational NoSQL schemas).<br>
      <strong>Integrations:</strong> Groq SDK (AI), external Job APIs.</p>

      <h4>💡 Impact & Role</h4>
      <p><strong>Role:</strong> Full-Stack Developer<br>
      Architected the entire system from the ground up, focusing on a clean, scalable REST API backend and a highly interactive frontend. Successfully solved the problem of fragmented student resources by consolidating career tools, academic tracking, e-commerce, and campus networking into a single, performant application.</p>
    `
  },
  {
    title: 'National Rail Command',
    description: 'RailVerse AI — The Autonomous Intelligence Layer for Indian Railways. An AI-driven platform for railway operations and management.',
    tags: ['Next.js', 'TypeScript', 'Python', 'AI', 'Tailwind CSS'],
    infra: 'Deployed on Vercel',
    github: 'https://github.com/akarshakmishra47-afk/National-Rail-Command-main',
    live: 'https://national-rail-command.vercel.app',
    readme: `
      <h3>🚂 RailVerse AI — The Autonomous Intelligence Layer for Indian Railways</h3>
      <p><strong>Overview:</strong> RailVerse AI is a predictive and autonomous decision-support platform for Indian Railways. It continuously monitors, predicts, simulates, and optimizes railway operations using a multi-agent AI architecture.</p>
      
      <h4>📦 Core Modules</h4>
      <ul>
        <li><strong>Module 1: Railway Digital Twin:</strong> Interactive India railway map (Leaflet) with real-time station markers and network graph visualization (React Flow) tracking animated train movement and congestion.</li>
        <li><strong>Module 2: Delay Prediction AI:</strong> XGBoost-based weighted scoring (94.2% accuracy) using weather, congestion, time of day, and train category to predict delays and propagation risks.</li>
        <li><strong>Module 3: Crowd Prediction AI:</strong> Random Forest-based analysis (91.5% accuracy) predicting station crowd levels and staff requirements based on festival and weekend data.</li>
        <li><strong>Module 4: Multi-Agent AI System:</strong> Five autonomous AI agents (Operations, Scheduling, Platform, Crowd, Emergency) working in coordination to monitor, optimize, and resolve conflicts.</li>
        <li><strong>Module 5: Simulation Engine:</strong> Three What-If scenarios: Delay Cascade, Festival Surge, and Track Blockage.</li>
        <li><strong>Module 6: AI Decision Center ⚡:</strong> The heart of RailVerse AI featuring a natural language query interface, real-time AI recommendations, and an impact dashboard.</li>
      </ul>

      <h4>🛠️ Tech Stack & Architecture</h4>
      <p><strong>Frontend:</strong> Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Lucide React.<br>
      <strong>Visualization:</strong> React Flow, Leaflet, Recharts.<br>
      <strong>ML Models:</strong> XGBoost, LightGBM, Random Forest, Scikit-learn.<br>
      <strong>Data Generation:</strong> Python, NumPy, Pandas.<br>
      <strong>Deployment:</strong> Vercel-ready.</p>

      <h4>🎯 AI What-If Scenarios</h4>
      <p>Query: <em>"What happens if Train 22416 is delayed by 90 minutes during Kumbh Mela?"</em><br>
      The AI simulates the entire network and produces impacts, risks, and recommended actions autonomously.</p>
      
      <p><strong>Team:</strong> Built for the IDNA National Hackathon by Team RailVerse.</p>
    `
  },
  {
    title: 'Replica of YouTube',
    description: 'A full-stack YouTube clone featuring video browsing UI, responsive layout, and seamless cloud deployment.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    infra: 'Deployed on Vercel · ⭐ 1 star',
    github: 'https://github.com/akarshakmishra47-afk/Replica-of-youtube',
    live: 'https://new-project-beta-eight.vercel.app',
  },
  {
    title: 'Backend Project — Jokes API',
    description: 'A backend service built with JavaScript for serving and managing jokes through a RESTful API.',
    tags: ['JavaScript', 'Node.js', 'REST API'],
    infra: 'Backend service',
    github: 'https://github.com/akarshakmishra47-afk/backend-project-jokes',
    live: '#',  // ← Add live URL if deployed
  },
];

const EDUCATION = [
  {
    degree: 'B.Tech, AI Engineering',
    school: 'PSIT Kanpur / AKTU',
    period: '2025 — 2029',
    details: 'CGPA: 8.84 (Sem 1 SGPA: 8.86, Sem 2 SGPA: 8.82). Excelled in Data Structures, Digital Logic Design, and C/C++ Programming Labs.',
    certifications: [
      'AI for All — TCS iON',
      'Technical Coursework — Apna College',
      '<a href="assets/certificates/ethical_hacking_certificate.pdf" target="_blank" style="color: var(--accent-blue); text-decoration: none;">Ethical Hacking 101 — Simplilearn</a>',
      'Specialized Certifications — Coursera',
    ],
  },
  {
    degree: 'Intermediate (12th Grade)',
    school: 'Kendriya Vidyalaya',
    period: 'Completed in 2024',
    details: 'Score: 80.2%',
    certifications: [],
  },
  {
    degree: 'High School (10th Grade)',
    school: 'Kendriya Vidyalaya',
    period: 'Completed in 2022',
    details: 'Score: 77.8%',
    certifications: [],
  }
];

export { PROFILE, HACKATHONS, PROJECTS, EDUCATION };
