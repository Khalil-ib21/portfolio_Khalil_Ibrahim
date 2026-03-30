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
- Machine Learning 
- Storing and Managing Data 
- IoT Systems & Sensor Data Integration
- Data Visualisation
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
**Focus Areas:**  Structural Engineering, Digital Engineering, Geotechnical Engineering, Material Engineering, Construction Management, Integrated Design Project
 
A rigorous four-year integrated masters providing deep expertise in civil engineering design, project management, and digital construction methods. Actively involved in student leadership, representing 250+ students and delivering industry events with firms including Skanska, ICE, and Morgan Sindall.
 
**Leadership & Activities**
- Senior Student Representative, School of Engineering (2019–2024)
- Vice President, Civil Engineering Society (2022–2023)
- Running Backs Coach, Birmingham Lions American Football Team (2023–Present)`,
  },
  {
    slug: "lycee",
    title: "Lycée Prince de Liège de Kinshasa",
    img: "/lycee.jpg",
    date: "Sep 2013 – Jul 2019",
    desc: `
**Award:** Leadership Prize & Science Excellence Prize
**Final Grade:** 19.0 / 20
 
Graduated with distinction, achieving a near-perfect final grade and recognition for both academic excellence and leadership.
 
**Achievements**
- Leadership Prize & Science Excellence Prize
- Overall final grade of 19.0/20`,
  },
];
 
//
// Experience
//
export const experience: PortfolioItem[] = [
  {
    slug: "data-literacy",
    title: "Data Analyst — Data Literacy Academy",
    img: "/dla.jpg",
    date: "Jan 2026 – Present",
    desc: `
Managing and correcting CRM data in HubSpot to improve accuracy and support business operations. Performing data quality checks and maintaining sales records to support reporting, pipeline visibility, and operational decision-making.
 
**Skills:** HubSpot CRM, Data Governance, Revenue Operations, Analytical Reporting
**Location:** Birmingham, UK`,
  },
  {
    slug: "amtico",
    title: "Project & Sustainability Consultant — Amtico",
    img: "/amtico.jpg",
    date: "Jul 2025 – Aug 2025",
    desc: `
Led a multidisciplinary team to deliver a time-bound sustainability assessment. Structured tasks, maintained delivery to deadline, and produced a client-style report translating findings into practical recommendations.
 
**Skills:** Project Leadership, Sustainability Assessment, Client Reporting, Team Coordination
**Location:** Birmingham, UK`,
  },
  {
    slug: "junior-site-engineer",
    title: "Junior Site Engineer — Private Contractor",
    img: "/contractor.jpg",
    date: "Aug 2024 – Oct 2024",
    desc: `
Coordinated day-to-day site activities across 4–6 subcontractor teams, managing materials logistics and site access across multiple active work fronts. Maintained 20+ H&S and delivery records supporting audit readiness. Prepared progress reports and identified programme delays, access constraints, and quality issues.
 
**Skills:** Site Coordination, Subcontractor Interface, H&S Compliance, Programme Reporting
**Location:** Kinshasa, DR Congo`,
  },
  {
    slug: "bim-intern",
    title: "BIM & Digital Twins Intern — University of Birmingham",
    img: "/bim.jpg",
    date: "Jan 2024 – Jul 2024",
    desc: `
Supported multidisciplinary project teams by coordinating information and maintaining issue and risk logs across live estates projects. Conducted asset and information quality checks within a Common Data Environment (Autodesk Tandem), supporting effective handover and operational readiness.
 
**Skills:** BIM, Autodesk Tandem, CDE, ISO 19650, Issue & Risk Logs, Stakeholder Coordination
**Location:** Birmingham, UK`,
  },
  {
    slug: "milvest",
    title: "Assistant Site Manager — Milvest / Miller Holding",
    img: "/milvest.jpg",
    date: "Apr 2022 – May 2022",
    desc: `
Site-based placement on a large-scale government finance complex. Assisted with daily site routines, coordination, and health & safety activities including toolbox talks and safety walks.
 
**Skills:** Site Management, Health & Safety, Construction Delivery
**Location:** Kinshasa, DR Congo`,
  },
];
 
//
// Projects
//
export const projects: PortfolioItem[] = [
  {
    slug: "cognitive-digital-twin",
    title: "Cognitive Digital Twin — Final Year Project",
    img: "/bim.jpg",
    date: "Jan 2025 – Apr 2025",
    desc: `
Developed a digital twin for a university office space linking occupancy behaviour, environmental conditions, and HVAC simulation to improve building energy performance. Built an end-to-end workflow using IoT sensor data, predictive models, and EnergyPlus simulation. Produced dashboards to communicate insights to non-technical stakeholders.
 
**Technologies:** Python, EnergyPlus, IoT, Machine Learning, Reinforcement Learning, Digital Twins
**[View Project Report](/FYP_Report.pdf)**`,
  },
  {
    slug: "occupancy-detection",
    title: "Occupancy Monitoring & Energy Forecasting — MSc Group Project",
    img: "/bim.jpg",
    date: "Jan 2025 – Apr 2025",
    desc: `
**Team Leader** — Led a team of 5 to develop occupancy prediction and energy forecasting models using environmental sensor data. Managed weekly meetings, coordinated task delegation, and ensured timely milestone delivery.
 
Implemented XGBoost (R² = 0.9502) for occupancy prediction and a CNN-LSTM hybrid model (R² = 0.9400, RMSE = 285.92) for multi-step energy forecasting. Applied SARIMA and SARIMAX as baseline forecasting models for comparison.
 
**Technologies:** Python, XGBoost, CNN-LSTM, SARIMA, Pandas, Scikit-learn
**[View Project Report](/DSGP_Report.pdf)**`,
  },
  {
    slug: "idp",
    title: "Rapid Response Medical Unit — Integrated Design Project",
    img: "/uob.jpg",
    date: "Oct 2023 – Apr 2024",
    desc: `
**Team Leader** — Led an interdisciplinary team of civil, electrical, and mechanical engineers to design a deployable rapid-response healthcare facility for conflict zones. Coordinated collaboration across disciplines, managed project timelines using Gantt charts, conducted SWOT analysis, and ensured effective communication throughout.
 
Delivered a complete design solution including structural layout, MEP integration, and sustainability considerations aligned with real-world deployment constraints.
 
**Tools:** AutoCAD, Revit, MS Project, Gantt Charts, SWOT Analysis
**[View Project Report](/IDP_Report.pdf)**`,
  },
  {
    slug: "bim-model-qc",
    title: "BIM & Digital Twins Internship — Campus Digital Twin",
    img: "/bim.jpg",
    date: "Jan 2024 – Jul 2024",
    desc: `
Conducted FM-readiness and information quality checks on the UoB campus BIM model in Autodesk Tandem. Created issue registers and data-gap logs to resolve asset data inconsistencies and support ISO 19650 compliance. Assisted in integrating facility systems into the digital twin framework.
 
**Technologies:** Autodesk Tandem, BIM, ISO 19650, Common Data Environment`,
  },
  {
    slug: "sustainability-assessment",
    title: "Sustainability Assessment — Amtico",
    img: "/amtico.jpg",
    date: "Jul 2025 – Aug 2025",
    desc: `
Led a multidisciplinary team to deliver a structured sustainability assessment under tight deadlines. Produced a client-style report with an executive summary translating technical findings into actionable recommendations.
 
**Skills:** Project Leadership, Sustainability, Stakeholder Reporting`,
  },
  {
    slug: "portfolio-site",
    title: "Personal Portfolio Website",
    img: "/uob.jpg",
    desc: `
Built a modular portfolio using Next.js and Tailwind CSS v4, dynamically loading content from a TypeScript data file. Includes Framer Motion transitions and fully responsive layouts.
 
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
    desc: "Co-led a 120+ member society, organising 6+ industry events with Skanska, ICE, and Morgan Sindall.",
  },
  {
    title: "Senior Student Representative",
    date: "2019 – 2024",
    desc: "Represented 250+ engineering students, co-chairing Student–Staff Forums and contributing to curriculum improvements.",
  },
  {
    title: "Leadership Prize",
    date: "Jul 2019",
    desc: "Awarded at Lycée Prince de Liège de Kinshasa for outstanding leadership and contribution to school life.",
  },
  {
    title: "Science Excellence Prize",
    date: "Jul 2019",
    desc: "Recognised for top academic results in science, graduating with an overall grade of 19.0/20.",
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