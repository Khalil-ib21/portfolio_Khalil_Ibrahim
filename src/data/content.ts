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
**Focus Areas:** Machine Learning, Data Engineering, IoT Systems, Digital Twins
The MSc Data Science program deepened my expertise in applying data-driven methods to real-world engineering and operational challenges. I developed strong skills in predictive modelling, occupancy forecasting, sensor data integration, and simulation — culminating in a final year project on cognitive digital twins for smart building energy management.
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
**Focus Areas:** BIM, Digital Delivery, Structural Engineering, Project Management
My MEng in Civil Engineering gave me a strong foundation in infrastructure design, project delivery, and digital construction methods. I was actively involved in student leadership throughout my degree, serving as Senior Student Representative and Vice President of the Civil Engineering Society.
**Notable Activities**
- Senior Student Representative, School of Engineering (2022–2024)
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
Graduated with distinction from one of Kinshasa's leading secondary schools, achieving a near-perfect final grade and recognition for both academic excellence and leadership qualities.
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
    img: "/ta.jpg",
    desc: `
Work within the RevOps and Data team to manage, review, and correct data in HubSpot, improving CRM accuracy and supporting smoother business operations. Perform data quality checks and maintain sales and customer records to support reporting, pipeline visibility, and operational decision-making.
**Date:** Jan 2026 – Present
**Location:** Birmingham, UK`,
  },
  {
    slug: "bim-intern",
    title: "BIM & Digital Delivery Intern, University of Birmingham Estates",
    img: "/uob.jpg",
    desc: `
Conducted FM-readiness and information quality assurance of a campus BIM model in Autodesk Tandem within a Common Data Environment. Created and maintained issue registers and data-gap logs, supporting the resolution of missing, incomplete, and inconsistent asset information. Developed skills in BIM, digital twins, information governance, ISO 19650-aligned checking, and stakeholder coordination.
**Date:** Jan 2024 – Jul 2024
**Location:** Birmingham, UK`,
  },
  {
    slug: "milvest",
    title: "Assistant Site Manager Intern, Milvest / Miller Holding",
    img: "/uob.jpg",
    desc: `
Assisted with daily site coordination on a large-scale government finance complex, supporting site routines and delivery activities. Participated in health & safety activities including toolbox talks and safety walks to reinforce safe working practices on site. Gained practical exposure to construction site management, team coordination, and site safety procedures in a live project environment.
**Date:** Apr 2022 – May 2022
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
    desc: `
Designed and developed a cognitive digital twin for a university office space to improve building energy performance through occupancy-aware HVAC control. Led the integration of environmental sensor data, occupancy prediction, and HVAC simulation within EnergyPlus to evaluate proactive energy optimisation strategies.
**Technologies:** Python, EnergyPlus, IoT, Machine Learning, Reinforcement Learning, Digital Twins`,
  },
  {
    slug: "occupancy-detection",
    title: "Data Science Group Project: Occupancy Detection",
    img: "/uob.jpg",
    desc: `
Led a group data science project as Team Leader, applying project management techniques to coordinate tasks, manage deadlines, and support effective team collaboration. Applied data science methods including data cleaning, exploratory analysis, feature engineering, and predictive modelling to solve a real-world occupancy detection problem using environmental sensor data.
**Technologies:** Python, Pandas, Scikit-learn, Feature Engineering, Predictive Modelling`,
  },
  {
    slug: "bim-model-qc",
    title: "BIM Model Quality Assurance — Campus Digital Twin",
    img: "/uob.jpg",
    desc: `
Conducted information quality assurance and FM-readiness checks on a campus-wide BIM model in Autodesk Tandem. Created structured issue registers and data-gap logs to identify and resolve inconsistencies in asset data, supporting compliance with ISO 19650 information management standards.
**Technologies:** Autodesk Tandem, BIM, ISO 19650, Common Data Environment, Digital Twins`,
  },
  {
    slug: "portfolio-site",
    title: "Personal Portfolio Website",
    img: "/uob.jpg",
    desc: `
Built a modular personal portfolio using Next.js and Tailwind CSS v4. Dynamically loads content for education, experience, and projects from a TypeScript data file, ensuring easy scalability and consistent design. Includes Framer Motion for transitions and fully responsive layouts.
**Technologies:** Next.js, TypeScript, Tailwind CSS, Framer Motion`,
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