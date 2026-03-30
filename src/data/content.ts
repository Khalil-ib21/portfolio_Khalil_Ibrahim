// /data/content.ts
 
export interface PortfolioItem {
  slug: string;
  title: string;
  img: string;
  desc: string;
  date?: string;
}
 
//
// Education
//
export const education: PortfolioItem[] = [
  {
    slug: "uob-msc",
    title: "University of Birmingham",
    img: "/uob.jpg",
    date: "Sep 2024 – Sep 2025",
    desc: `
**Degree:** MSc Data Science & Artificial Intelligence
**Classification:** 2:1 (Hons)
**Focus Areas:** Machine Learning, IoT Systems, Digital Twins, Predictive Modelling
 
Developed strong capabilities in applying data-driven methods to real-world engineering challenges. Culminating project focused on cognitive digital twins for smart building energy management — integrating IoT sensor data, occupancy prediction, and HVAC simulation within EnergyPlus.
 
**Key Modules**
- Machine Learning & Predictive Modelling
- Data Engineering & SQL
- IoT Systems & Sensor Data Integration
- Research Methods & Statistical Analysis
- Group Data Science Project`,
  },
  {
    slug: "uob-meng",
    title: "University of Birmingham",
    img: "/uob.jpg",
    date: "Sep 2020 – Jul 2024",
    desc: `
**Degree:** MEng Civil Engineering
**Classification:** 2:1 (Upper Second-Class Honours)
**Focus Areas:** Project Delivery, BIM, Digital Engineering, Structural Analysis
 
A rigorous four-year integrated masters providing deep expertise in civil engineering design, project management, and digital construction methods. Actively involved in student leadership, representing 250+ students and delivering industry events with firms including Skanska, ICE, and Morgan Sindall.
 
**Leadership & Activities**
- Senior Student Representative, School of Engineering (2019–2024)
- Vice President, Civil Engineering Society (2022–2023)
- Running Backs Coach, Birmingham Lions American Football Team (2023–Present)`,
  },
  {
    slug: "lycee",
    title: "Lycée Prince de Liège de Kinshasa",
    img: "/uob.jpg",
    date: "Sep 2013 – Jul 2019",
    desc: `
**Award:** Leadership Prize & Science Excellence Prize
**Final Grade:** 19.0 / 20
 
Graduated with distinction, achieving a near-perfect final grade and recognition for both academic excellence and leadership qualities.
 
**Achievements**
- Recipient of the Leadership Prize
- Recipient of the Science Excellence Prize
- Overall final grade of 19.0/20`,
  },
];
 
//
// Experience
//
export const experience: PortfolioItem[] = [
  {
    slug: "data-literacy",
    title: "Data Analyst Intern, Data Literacy Academy",
    img: "/uob.jpg",
    date: "Jan 2026 – Present",
    desc: `
Working within the RevOps and Data team to manage, review, and correct data in HubSpot, improving CRM accuracy and supporting smoother business operations. Performing data quality checks and maintaining sales and customer records to support reporting, pipeline visibility, and operational decision-making.
 
**Key Skills:** HubSpot CRM, Revenue Operations, Data Governance, Analytical Problem-Solving
**Location:** Birmingham, UK`,
  },
  {
    slug: "amtico",
    title: "Project & Sustainability Support, Amtico",
    img: "/uob.jpg",
    date: "Jul 2025 – Aug 2025",
    desc: `
Led a multidisciplinary team to deliver a time-bound sustainability assessment as part of Amtico's Micro-Internship Programme. Structured tasks, maintained delivery to deadline, and produced a concise client-style report and executive summary translating findings into practical recommendations for decision-making.
 
**Key Skills:** Project Leadership, Sustainability Assessment, Stakeholder Reporting, Team Coordination
**Location:** Birmingham, UK`,
  },
  {
    slug: "junior-site-engineer",
    title: "Junior Site Engineer, Private Contractor",
    img: "/uob.jpg",
    date: "Aug 2024 – Oct 2024",
    desc: `
Coordinated day-to-day site activities across 4–6 subcontractor teams, supporting programme delivery with exposure to constructability, sequencing, and site constraints. Managed materials logistics and site access across 3–4 active work fronts, balancing delivery schedules, safety constraints, and operational continuity. Maintained 20+ site delivery and H&S records supporting audit readiness. Prepared inputs for progress reporting and short-term programme control, identifying delays and quality issues.
 
**Key Skills:** Site Coordination, Subcontractor Management, H&S Compliance, Progress Reporting
**Location:** Kinshasa, DR Congo`,
  },
  {
    slug: "bim-intern",
    title: "Project & Digital Delivery Intern, University of Birmingham Estates",
    img: "/uob.jpg",
    date: "Jan 2024 – Jul 2024",
    desc: `
Supported multidisciplinary project teams by coordinating information and maintaining structured issue and risk logs across live estates projects. Carried out asset and information quality checks within a Common Data Environment (Autodesk Tandem), supporting effective handover and operational readiness.
 
**Key Skills:** BIM, Autodesk Tandem, CDE Workflows, ISO 19650, Issue & Risk Logs, Stakeholder Coordination
**Location:** Birmingham, UK`,
  },
  {
    slug: "milvest",
    title: "Assistant Site Manager (Placement), Milvest / Miller Holding",
    img: "/uob.jpg",
    date: "Apr 2022 – May 2022",
    desc: `
Completed a site-based placement on a large-scale government finance complex, assisting with daily site routines and coordination. Engaged in health & safety activities including toolbox talks and safety walks, reinforcing safe working practices on site.
 
**Key Skills:** Site Management, Health & Safety, Construction Delivery
**Location:** Kinshasa, DR Congo`,
  },
];
 
//
// Projects
//
export const projects: PortfolioItem[] = [
  {
    slug: "cognitive-digital-twin",
    title: "Cognitive Digital Twin for Building Energy & Operations",
    img: "/uob.jpg",
    date: "Jan 2025 – Apr 2025",
    desc: `
Developed a digital engineering concept linking occupancy behaviour, environmental conditions, and operational decision-making to improve building performance. Built an end-to-end workflow using IoT sensor data, analytics, and predictive models to support demand-responsive operational strategies. Produced dashboards to communicate insights to non-technical stakeholders.
 
**Technologies:** Python, EnergyPlus, IoT, Machine Learning, Digital Twins`,
  },
  {
    slug: "occupancy-detection",
    title: "Data Science Group Project: Occupancy Detection",
    img: "/uob.jpg",
    date: "Jan 2025 – Apr 2025",
    desc: `
Led a group data science project as Team Leader, coordinating tasks and managing deadlines. Applied data cleaning, exploratory analysis, feature engineering, and predictive modelling to solve a real-world occupancy detection problem using environmental sensor data.
 
**Technologies:** Python, Pandas, Scikit-learn, Predictive Modelling`,
  },
  {
    slug: "bim-model-qc",
    title: "BIM Model Quality Assurance — Campus Digital Twin",
    img: "/uob.jpg",
    date: "Jan 2024 – Jul 2024",
    desc: `
Conducted information quality assurance and FM-readiness checks on a campus-wide BIM model in Autodesk Tandem. Created structured issue registers and data-gap logs to resolve inconsistencies in asset data, supporting ISO 19650 compliance.
 
**Technologies:** Autodesk Tandem, BIM, ISO 19650, Common Data Environment`,
  },
  {
    slug: "sustainability-assessment",
    title: "Sustainability Assessment — Amtico",
    img: "/uob.jpg",
    date: "Jul 2025 – Aug 2025",
    desc: `
Led a multidisciplinary team to deliver a time-bound sustainability assessment. Produced a client-style report with executive summary translating technical findings into actionable recommendations for decision-making.
 
**Skills:** Project Leadership, Sustainability, Stakeholder Reporting`,
  },
  {
    slug: "portfolio-site",
    title: "Personal Portfolio Website",
    img: "/uob.jpg",
    desc: `
Built a modular personal portfolio using Next.js and Tailwind CSS v4. Dynamically loads content from a TypeScript data file, with Framer Motion transitions and fully responsive layouts.
 
**Technologies:** Next.js, TypeScript, Tailwind CSS, Framer Motion`,
  },
];
 
//
// Courses & Certifications
//
export const certifications = [
  { title: "APM Project Fundamentals Qualification (PFQ)", date: "In Progress" },
  { title: "RICS BIM Foundation", date: "In Progress" },
  { title: "BAFCA Level 1 Coaching Certification", date: "2023" },
];
 
//
// Awards
//
export const awards = [
  {
    title: "Vice President — Civil Engineering Society",
    date: "2022 – 2023",
    desc: "Co-led a 120+ member society at the University of Birmingham, delivering 6+ industry events with firms including Skanska, ICE, and Morgan Sindall.",
  },
  {
    title: "Senior Student Representative",
    date: "2019 – 2024",
    desc: "Represented 250+ engineering students, co-chairing Student–Staff Forums and contributing to curriculum and student experience improvements.",
  },
  {
    title: "Leadership Prize",
    date: "Jul 2019",
    desc: "Awarded at Lycée Prince de Liège de Kinshasa for outstanding leadership qualities and contribution to school life.",
  },
  {
    title: "Science Excellence Prize",
    date: "Jul 2019",
    desc: "Awarded for achieving top academic results in science subjects, graduating with an overall grade of 19.0/20.",
  },
];
 
//
// Export all
//
export const allItems = {
  education,
  experience,
  projects,
  certifications,
  awards,
};