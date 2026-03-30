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
**Degree:** MSc Data Science  
**Classification:** First Class Honours  
**Focus Areas:** Machine Learning, Data Engineering, IoT Systems, Digital Twins  <br />
The MSc Data Science program at the University of Birmingham deepened my expertise in applying data-driven methods to real-world engineering and operational challenges. Through rigorous coursework and hands-on projects, I developed strong skills in predictive modelling, occupancy forecasting, sensor data integration, and simulation — culminating in a final year project on cognitive digital twins for smart building energy management. <br />
**Key Modules**
- Machine Learning & Predictive Modelling
- Data Engineering & SQL
- IoT Systems & Sensor Data Integration
- Research Methods & Statistical Analysis
- Group Data Science Project <br />`,
  },
  {
    slug: "uob-meng",
    title: "University of Birmingham",
    img: "/uob.jpg",
    date: "Sep 2020 – Jul 2024",
    desc: `
**Degree:** MEng Civil Engineering  
**Classification:** 2:1 (Upper Second-Class Honours)  
**Focus Areas:** BIM, Digital Delivery, Structural Engineering, Project Management  <br />
My MEng in Civil Engineering gave me a strong foundation in infrastructure design, project delivery, and digital construction methods. I was actively involved in student leadership throughout my degree, serving as Senior Student Representative and Vice President of the Civil Engineering Society. <br />
**Notable Activities**
- Senior Student Representative, School of Engineering (2022–2024)
- Vice President, Civil Engineering Society (2022–2023)
- Running Backs Coach, Birmingham Lions American Football Team (2023–Present) <br />`,
  },
  {
    slug: "lycee",
    title: "Lycée Prince de Liège de Kinshasa",
    img: "/ncuk.jpg",
    date: "Sep 2013 – Jul 2019",
    desc: `
**Award:** Leadership Prize & Science Excellence Prize  
**Final Grade:** 19.0 / 20  <br />
Graduated with distinction from one of Kinshasa's leading secondary schools, achieving a near-perfect final grade and recognition for both academic excellence and leadership qualities. This foundation instilled the discipline and intellectual curiosity that continues to drive my work in data science and engineering today. <br />
**Achievements**
- Recipient of the Leadership Prize
- Recipient of the Science Excellence Prize
- Overall final grade of 19.0/20 <br />`,
  },
];
 
 
//
// Experience
//
export const experience: PortfolioItem[] = [
  {
    slug: "data-literacy",
    title: "Data Analyst Intern, Data Literacy Academy",
    img: "/ta.jpg",
    desc: `
Work within the RevOps and Data team to manage, review, and correct data in HubSpot, improving CRM accuracy and supporting smoother business operations. Perform data quality checks and maintain sales and customer records to support reporting, pipeline visibility, and operational decision-making. Building practical experience in HubSpot CRM, Revenue Operations, data governance, sales operations, and analytical problem-solving. <br />
**Date:** Jan 2026 – Present  
**Location:** Birmingham, UK
`,
  },
  {
    slug: "bim-intern",
    title: "BIM & Digital Delivery Intern, University of Birmingham Estates",
    img: "/integra.jpg",
    desc: `
Conducted FM-readiness and information quality assurance of a campus BIM model in Autodesk Tandem within a Common Data Environment. Created and maintained issue registers and data-gap logs, supporting the resolution of missing, incomplete, and inconsistent asset information. Developed skills in BIM, digital twins, information governance, ISO 19650-aligned checking, and stakeholder coordination. <br />
**Date:** Jan 2024 – Jul 2024  
**Location:** Birmingham, UK
`,
  },
  {
    slug: "milvest",
    title: "Assistant Site Manager Intern, Milvest / Miller Holding",
    img: "/neural.jpg",
    desc: `
Assisted with daily site coordination on a large-scale government finance complex, supporting site routines and delivery activities. Participated in health & safety activities including toolbox talks and safety walks to reinforce safe working practices on site. Gained practical exposure to construction site management, team coordination, and site safety procedures in a live project environment. <br />
**Date:** Apr 2022 – May 2022  
**Location:** Kinshasa, DR Congo
`,
  },
];
 
 
//
// Projects
//
export const projects: PortfolioItem[] = [
  {
    slug: "cognitive-digital-twin",
    title: "Cognitive Digital Twin for Building Energy & Operations",
    img: "/portfolio.jpg",
    desc: `
Designed and developed a cognitive digital twin for a university office space to improve building energy performance through occupancy-aware HVAC control. Led the integration of environmental sensor data, occupancy prediction, and HVAC simulation within EnergyPlus to evaluate proactive energy optimisation strategies. Strengthened skills in digital twins, IoT systems, machine learning, reinforcement learning, simulation, and data-driven decision-making. <br />
**Technologies:** Python, EnergyPlus, IoT, Machine Learning, Reinforcement Learning, Digital Twins
`,
  },
  {
    slug: "occupancy-detection",
    title: "Data Science Group Project: Occupancy Detection",
    img: "/fintech.jpg",
    desc: `
Led a group data science project as Team Leader, applying project management techniques to coordinate tasks, manage deadlines, and support effective team collaboration. Applied data science methods including data cleaning, exploratory analysis, feature engineering, and predictive modelling to solve a real-world occupancy detection problem using environmental sensor data. <br />
**Technologies:** Python, Pandas, Scikit-learn, Feature Engineering, Predictive Modelling
`,
  },
  {
    slug: "bim-model-qc",
    title: "BIM Model Quality Assurance — Campus Digital Twin",
    img: "/os.jpg",
    desc: `
Conducted information quality assurance and FM-readiness checks on a campus-wide BIM model in Autodesk Tandem. Created structured issue registers and data-gap logs to identify and resolve inconsistencies in asset data, supporting compliance with ISO 19650 information management standards. <br />
**Technologies:** Autodesk Tandem, BIM, ISO 19650, Common Data Environment, Digital Twins
`,
  },
  {
    slug: "portfolio-site",
    title: "Personal Portfolio Website",
    img: "/brain-mri.jpg",
    desc: `
Built a modular personal portfolio using Next.js and Tailwind CSS v4. Dynamically loads content for education, experience, and projects from a TypeScript data file, ensuring easy scalability and consistent design. Includes Framer Motion for transitions and fully responsive layouts. <br />
**Technologies:** Next.js, TypeScript, Tailwind CSS, Framer Motion
`,
  },
];
 
 
//
// Courses & Certifications
//
export const certifications = [
  { title: "APM Project Fundamentals Qualification (PFQ)", date: "2024" },
  { title: "BAFCA Level 1 Coaching Certification", date: "2023" },
];
 
//
// Awards
//
export const awards = [
  {
    title: "Leadership Prize",
    date: "Jul 2019",
    desc: "Awarded at Lycée Prince de Liège de Kinshasa in recognition of outstanding leadership qualities and contribution to school life.",
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

