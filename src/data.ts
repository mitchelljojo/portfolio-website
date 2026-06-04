export type Project = {
  title: string;
  category: string;
  description: string;
  impact: string;
  tools: string[];
  link: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export const personalInfo = {
  name: "Jordan Mitchel",
  displayName: "Jordan Mitchel",
  tagline: "Analytics engineer and data analyst turning messy operations into trusted reporting systems.",
  location: "Jakarta, Indonesia",
  phone: "+62 819 5110 694",
  email: "mitcheljo@icloud.com",
  linkedin: "linkedin.com/in/jojo-mitchel",
  github: "github.com/mitchelljojo",
  roles: ["Analytics Engineer", "Data Analyst", "Data Scientist"],
  summary:
    "Data professional with 4+ years of experience across e-commerce, ride-hailing, edutech, and customer operations. I build reliable SQL models, automate reporting workflows, and translate business questions into dashboards and analysis that teams can actually use. My recent work includes regional data quality frameworks, CRM operations analytics, and process improvements that reduced manual effort while improving decision speed.",
};

export const metrics = [
  { value: "4+", label: "years in data and operations" },
  { value: "8", label: "regional markets supported" },
  { value: "20%", label: "E2E resolution hours reduced" },
  { value: "15%", label: "Reduce pax cancellation" },
];

export const skills = [
  {
    title: "Data Modeling",
    items: ["SQL", "Warehouse Tables", "Business Logic", "ETL Data Pipeline"],
  },
  {
    title: "Analytics",
    items: ["Python", "Machine Learning", "Predictive Analytic", "Root Cause Analysis"],
  },
  {
    title: "Visualization",
    items: ["Looker Studio", "Tableau", "Power BI"],
  },
  {
    title: "Operations Systems",
    items: ["Airflow", "Jira", "CRM Tools"],
  },
];

export const projects: Project[] = [
  {
    title: "Investment Clustering Analysis",
    category: "Machine Learning",
    description:
      "Segmented investment profiles with K-Means to identify behavior patterns and support clearer portfolio recommendations.",
    impact: "Built an end-to-end analysis deck and reproducible Python notebook.",
    tools: ["Python", "K-Means"],
    link: "https://github.com/mitchelljojo/Portofolio/blob/main/Investment%20Clusterin%20Analysis.ipynb",
  },
  {
    title: "Investment Analysis Deck",
    category: "Analytics Storytelling",
    description:
      "Converted clustering results into stakeholder-ready findings, with structured insights, assumptions, and recommendations.",
    impact: "Packaged technical analysis into an executive-friendly narrative.",
    tools: ["Data Storytelling", "Segmentation", "Slides"],
    link: "https://github.com/mitchelljojo/Portofolio/blob/main/Investment%20Clustering%20Deck.pdf",
  },
  {
    title: "E-Commerce Customer Segmentation",
    category: "Customer Analytics",
    description:
      "Analyzed customer cohorts and segmentation patterns to surface behavioral groups for e-commerce decision making.",
    impact: "Created a reusable notebook for customer grouping and performance review.",
    tools: ["Python", "Cohort Analysis", "K-Means"],
    link: "https://github.com/mitchelljojo/Portofolio/blob/main/E_Commerce_Customer_Segmentation_using_Cohort_Analysis.ipynb",
  },
  {
    title: "GitHub Portfolio Repository",
    category: "Code Portfolio",
    description:
      "Central repository for analytics notebooks, decks, and project artifacts.",
    impact: "Keeps project work accessible for hiring teams and collaborators.",
    tools: ["GitHub", "Documentation", "Notebooks"],
    link: "https://github.com/mitchelljojo",
  },
];

export const experience: Experience[] = [
  {
    company: "Alibaba International Digital Commerce - Lazada Project",
    role: "Associate Product Operation, Customer Care",
    period: "Dec 2024 - Present",
    location: "Jakarta, Indonesia",
    highlights: [
      "Architected optimized SQL models and warehouse tables that turned raw requirements into reliable reporting foundations.",
      "Developed automated product and project KPI dashboards to establish a single source of truth for customer care performance.",
      "Led claim process improvements that reduced total processing time and improved handoffs across customer care operations.",
      "Improved payment processing operations with a 5.59% lift in First Contact Resolution and a 20% reduction in E2E resolution hours.",
    ],
  },
  {
    company: "Grab",
    role: "Regional Quality Excellence Analyst",
    period: "Feb 2023 - Dec 2024",
    location: "Jakarta, Indonesia",
    highlights: [
      "Managed regional data pipelines and troubleshooting for downstream analytics across Indonesia, Vietnam, Singapore, Malaysia, Cambodia, Myanmar, Thailand, and the Philippines.",
      "Served as SME for safety and quality data frameworks covering driver, merchant, and customer entities.",
      "Integrated predictive quality models that helped reduce passenger cancellations by 15%.",
      "Partnered with Engineering to automate driver sanction workflows, saving 2.5 hours of manual effort per cycle.",
    ],
  },
  {
    company: "ByteDance",
    role: "Quality Analyst and Operations Specialist",
    period: "Sep 2020 - Feb 2023",
    location: "Jakarta, Indonesia",
    highlights: [
      "Designed automated weekly and monthly reporting templates with root cause analysis for business reviews.",
      "Built an operational dashboard for the Indonesian market in Looker Studio to improve QA and business visibility.",
      "Maintained sampling accuracy above 98% while coordinating policy and process improvements with regional teams.",
    ],
  },
  {
    company: "Valliance",
    role: "External Consultant",
    period: "Aug 2023 - Oct 2023",
    location: "Freelance",
    highlights: [
      "Guided a data team through Tableau to Power BI dashboard migration, including calculation logic and platform limitations.",
      "Delivered operations and sentiment analysis dashboards to support faster decision making.",
    ],
  },
  {
    company: "RevoU Edutech",
    role: "First Team Lead / Senior Team Lead",
    period: "Aug 2022 - Apr 2023",
    location: "Freelance",
    highlights: [
      "Mentored 12 students through a data analytics program covering Excel, SQL, Python, Tableau, and Looker Studio.",
      "Coached capstone teams on real-world business analysis, clustering, and RFM methodology.",
    ],
  },
  {
    company: "Transcosmos Indonesia - Traveloka Project",
    role: "Quality Assurance Specialist",
    period: "Feb 2019 - Jun 2020",
    location: "Semarang, Indonesia",
    highlights: [
      "Produced recurring quality reports and audited more than 10 agents weekly to drive service improvements.",
      "Led a Hotel Failed Issuance improvement project that reduced Tier 2 case volume during peak seasons.",
    ],
  },
];

export const education = [
  {
    institution: "RevoU",
    degree: "Full Stack Data Analytics",
    period: "Aug 2022",
    details: "Final grade 97.5/100. Covered business problem framing, SQL, Python, spreadsheets, Tableau, and Looker Studio.",
  },
  {
    institution: "UNIKA Soegijapranata",
    degree: "Bachelor of Architecture",
    period: "Oct 2018",
    details: "Architecture degree with a foundation in structured problem solving and visual communication.",
  },
];

export const certifications = [
  "Google Data Analytics by Coursera",
  "Machine Learning Specialization by DeepLearning.AI",
  "Power BI Data Modelling with DAX",
  "Data Analytics Method for Marketing by Meta",
  "SQL - MySQL for Data Analytics and Business Intelligence by Udemy",
  "Statistics for Data Science and Business Analysis by Udemy",
];
