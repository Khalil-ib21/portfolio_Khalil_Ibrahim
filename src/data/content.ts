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
    title: "AI for BIM-FM — Systematic Literature Review & Framework",
    img: "/bimfm.jpg",
    desc: `
**Grade: First Class** — MEng Civil Engineering Final Year Project, University of Birmingham
**Supervisor:** Dr Richard Davies
 
Explored the potential of integrating Building Information Modelling (BIM), digital twins (DT), and artificial intelligence (AI) for facility management (FM) stakeholders in the AEC industry, particularly in the Operation & Maintenance phase.
 
Conducted a systematic literature review identifying state-of-the-art AI techniques for occupancy modelling — finding supervised learning as the predominant approach, with SVMs, HMMs, and kNN for occupancy prediction, and deep learning for vision-based detection and counting. Complemented this with semi-structured interviews with the University of Birmingham Estates team to understand their current BIM-FM approach and identify inefficiencies in occupancy metrics across value, effort, and accuracy dimensions.
 
Developed a theoretical AI-driven BIM-FM framework integrating BIM, digital twin technology, and AI-driven occupancy models to optimise energy and space management. The framework was validated through structured interviews with the Estates team, emphasising benefits for building management and potential to facilitate decision-making, achieve energy optimisation, and support sustainability goals.
 
**Key Outcomes**
- Systematic literature review of AI techniques for occupancy modelling in AEC
- Semi-structured interviews with UoB Estates team identifying real FM inefficiencies
- Developed theoretical AI-driven BIM-FM framework integrating BIM, Digital Twins & ML
- Framework validated with industry stakeholders and proposed for implementation
- Achieved First Class grade
 
**Keywords:** BIM, Digital Twins, AI, Facility Management, Occupancy Monitoring, O&M, Energy Optimisation
**Technologies:** BIM, Digital Twins, Machine Learning, SVMs, HMM, kNN, Deep Learning
**[View Project Report](/FYP_civileng.pdf)**`,
  },
  {
    slug: "occupancy-detection",
    title: "Occupancy Monitoring & Energy Forecasting — MSc Group Project",
    img: "/cnnlstm.jpg",
    date: "Jan 2025 – Apr 2025",
    desc: `
**Grade: First Class** — MSc Data Science Group Project, University of Birmingham
 
**Team Leader** — Led a team of 5 data scientists to investigate how environmental sensor data could replace traditional occupancy monitoring methods (Wi-Fi tracking, lighting sensors) to deliver more accurate, privacy-respecting, and energy-efficient building management.
 
Managed the full project lifecycle: organised weekly meetings, delegated tasks across the team, coordinated data pipeline development, and ensured timely delivery of all milestones. Took personal responsibility for ARIMA/SARIMAX time-series forecasting and CNN-LSTM energy forecasting, as well as LaTeX report formatting and final integration of all team contributions.
 
Developed two complementary models: an XGBoost regression model for real-time occupancy prediction, achieving R² = 0.9502 and MAE = 0.16 — outperforming Random Forest, Gradient Boosting, SVR, and MLP — and a hybrid CNN-LSTM deep learning model for multi-step energy forecasting (240-hour horizon), achieving R² = 0.9400 and RMSE = 285.92. The CNN layers extracted short-term temporal features while LSTM layers captured long-term consumption patterns.
 
Proposed an integrated smart campus framework combining occupancy detection, energy forecasting, and dynamic HVAC control — validated as a scalable, data-driven solution for sustainable building operations.
 
**Key Outcomes**
- XGBoost model: R² = 0.9502, MAE = 0.16 (best-performing model across 5 architectures)
- CNN-LSTM hybrid: R² = 0.9400, RMSE = 285.92 (240-hour multi-step forecasting)
- Led team of 5 through full project lifecycle from ideation to final report
- Proposed scalable smart campus framework for University of Birmingham
 
**Technologies:** Python, XGBoost, CNN-LSTM, SARIMA, SARIMAX, Pandas, Scikit-learn, LaTeX
**[View Project Report](/DSGP_Report.pdf)**`,
  },
  {
    slug: "idp",
    title: "Rapid Response Medical Unit — Integrated Design Project",
    img: "/idp.jpg",
    date: "Oct 2023 – Apr 2024",
    desc: `
**Grade: First Class** — MEng Civil Engineering Integrated Design Project, University of Birmingham
 
**Team Leader** — Led an interdisciplinary team of civil, electrical, and mechanical engineers to design a deployable rapid-response healthcare facility for use in conflict zones and humanitarian emergencies. The brief required a practical, buildable solution that could be rapidly deployed, self-sufficient, and structurally resilient under challenging site conditions.
 
Took full project management responsibility: developed a detailed Gantt chart to manage timelines and workstreams across disciplines, conducted a SWOT analysis to assess design risks and constraints, chaired regular team meetings, and coordinated design integration between structural, MEP, and sustainability workstreams.
 
The final design incorporated a modular structural system for rapid assembly, on-site renewable energy generation (solar PV), water treatment and storage systems, and a controlled clinical environment — all designed to meet real-world deployment constraints. Produced full technical drawings in AutoCAD and Revit, alongside a comprehensive project report demonstrating design decisions, calculations, and risk management.
 
**Key Outcomes**
- Led interdisciplinary team across civil, electrical, and mechanical engineering disciplines
- Delivered full project management documentation: Gantt charts, SWOT analysis, risk register
- Produced complete technical drawings in AutoCAD and Revit
- Designed modular, self-sufficient facility meeting humanitarian deployment requirements
- Achieved First Class grade for design quality, project management, and report
 
**Tools:** AutoCAD, Revit, MS Project, Gantt Charts, SWOT Analysis, Structural Analysis
**[View Project Report](/IDP_DACReport.pdf)**`,
  },
  {
    slug: "cognitive-digital-twin-ds",
    title: "Cognitive Digital Twin — Final Year Project",
    img: "/fyp.jpg",
    date: "Jan 2025 – Sep 2025",
    desc: `
**Grade: First Class** — MSc Data Science & AI Final Year Project, University of Birmingham
**Supervisor:** Dr Rami Bahsoon
 
Investigated the development of an occupancy-aware control system within a Cognitive Digital Twin (CDT) framework for building energy management. Addressed two key research questions: whether short-horizon occupancy forecasting can achieve sufficient accuracy for operational use, and whether forecast-informed control can reduce energy consumption while maintaining comfort and indoor air quality.
 
Using the ROBOD dataset from a university office building, developed a forecasting pipeline based on multi-sensor ensembles achieving MAE ≈ 1.2 occupants and R² ≈ 0.74. These forecasts were integrated into EnergyPlus simulations where proactive HVAC control reduced electricity use by 85% and peak demand by 75% compared to a static schedule. Comfort compliance improved from 39% to 86% within target range, and CO₂ levels remained within ASHRAE 62.1 limits. Reinforcement Learning agents (SAC, PPO) were also tested within the framework.
 
The study demonstrates the feasibility of forecast-driven, occupancy-aware control and provides a modular CDT architecture linking BIM, sensing, analytics, and facility management interfaces — with realistic field deployments expected to achieve 25–40% energy savings, contributing towards net-zero building operation.
 
**Key Outcomes**
- Forecasting pipeline: MAE ≈ 1.2 occupants, R² ≈ 0.74
- Proactive HVAC control: 85% electricity reduction, 75% peak demand reduction
- Comfort compliance improved from 39% → 86%
- Modular CDT architecture linking BIM, IoT sensing, analytics & FM interfaces
- Achieved First Class grade
 
**Technologies:** Python, EnergyPlus, IoT, Machine Learning, Reinforcement Learning (SAC, PPO), Digital Twins, BIM
**[View Project Report](/FYP_dattascience.pdf)**`,
  },
  {
    slug: "bim-model-qc",
    title: "BIM & Digital Twins Internship — Campus Digital Twin",
    img: "/bim.jpg",
    date: "Jan 2024 – Jul 2024",
    desc: `
Conducted FM-readiness and information quality checks on the UoB campus BIM model in Autodesk Tandem within a Common Data Environment. Created structured issue registers and data-gap logs to identify and resolve asset data inconsistencies, supporting ISO 19650 compliance and effective FM handover.
 
Assisted in integrating facility systems into the digital twin framework, improving communication between design and operations teams and supporting long-term building performance management.
 
**Technologies:** Autodesk Tandem, BIM, ISO 19650, Common Data Environment, Digital Twins`,
  },
  {
    slug: "sustainability-assessment",
    title: "Sustainability Assessment — Amtico",
    img: "/amtico.jpg",
    date: "Jul 2025 – Aug 2025",
    desc: `
Led a multidisciplinary team to deliver a structured sustainability assessment for Amtico as part of their Micro-Internship Programme. Structured the project timeline, maintained delivery to deadline, and produced a professional client-style report with an executive summary translating technical findings into clear, actionable recommendations for senior decision-makers.
 
**Skills:** Project Leadership, Sustainability Assessment, Client Reporting, Team Coordination`,
  },
  {
    slug: "portfolio-site",
    title: "Personal Portfolio Website",
    img: "/uob.jpg",
    desc: `
Built a modular personal portfolio using Next.js and Tailwind CSS v4, dynamically loading content from a TypeScript data file. Includes Framer Motion transitions and fully responsive layouts.
 
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