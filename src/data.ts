export interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string[];
}

export interface ProjectItem {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link?: string;
}

export interface EducationItem {
    id: number;
    degree: string;
    school: string;
    period: string;
    period_end?: string;
}

export const personalInfo = {
    name: "Candy Mellania Severin",
    role: "Data Scientist",
    bio: "Information and Computational Actuarial Science graduate currently pursuing a Master's in Business Analytics and Data Science at UMCS, Poland. Combining analytical precision with a creative edge in data visualization and digital content design, I am passionate about transforming data into actionable insights that support business growth and innovation.",
    email: "severincandymellania@gmail.com",
    phone: "+48 517 072 256",
    address: "20-001, Lublin 06, Poland",
    social: {
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/candymellania-severin-658158209/",
        twitter: "https://twitter.com"
    }
};

export const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: "Operational Officer",
        company: "Gama Technologies Ltd, Dar Es Salaam",
        period: "Aug 2023 - Oct 2025",
        description: [
            "Coordinated and managed cross-functional teams, organizational operations, personnel, and departmental collaboration for the successful completion of projects within budget and timeline constraints.",
            "Developed and implemented company policies and project budgets.",
            "Monitored performance metrics, costs, and process efficiency to enhance productivity.",
            "Innovated new product and process solutions using data-informed insights."
        ]
    },
    {
        id: 2,
        role: "Administrative Assistant",
        company: "Gama Technologies Ltd, Dar Es Salaam",
        period: "Apr 2022 - Aug 2023",
        description: [
            "Coordinated and managed cross-functional teams, organizational operations, personnel, and departmental collaboration for the successful completion of projects.",
            "Developed and implemented company policies and project budgets.",
            "Monitored performance metrics, costs, and process efficiency to enhance productivity.",
            "Innovated new product and process solutions using data-informed insights."
        ]
    },
    {
        id: 3,
        role: "Marketing & Social Media Intern",
        company: "FST6 Company Ltd, Dar Es Salaam",
        period: "Apr 2021 - Dec 2021",
        description: [
            "Conducted marketing trend research and contributed to campaign planning.",
            "Managed social media content to increase visibility and engagement.",
            "Supported vendor onboarding and community-building initiatives."
        ]
    }
];

export const education: EducationItem[] = [
    {
        id: 1,
        degree: "Master of Science: Business Analytics And Data Science",
        school: "University of Maria Curie-Skłodowska (UMCS) - Lublin, Poland",
        period: "Expected Aug 2027"
    },
    {
        id: 2,
        degree: "Bachelor of Science: Information And Computational Actuarial Science",
        school: "Zhejiang University of Science And Technology - Hangzhou, China",
        period: "May 2023"
    }
];

export const projects: ProjectItem[] = [
    {
        id: 1,
        title: "Sales Performance Dashboard",
        description: "Designed an interactive dashboard analyzing monthly sales performance and customer segmentation to support strategic decision-making.",
        tech: ["Power BI"],
        link: "#"
    },
    {
        id: 2,
        title: "Customer Behavior Prediction",
        description: "Built a predictive model to forecast customer churn and purchasing patterns using logistic regression.",
        tech: ["Python", "Machine Learning"],
        link: "#"
    },
    {
        id: 3,
        title: "Marketing Campaign Analytics",
        description: "Analyzed multi-platform social media data to evaluate ad performance and optimize campaign targeting.",
        tech: ["Excel", "SQL"],
        link: "#"
    },
    {
        id: 4,
        title: "Product Design A/B Testing Insights",
        description: "Visualized user engagement data to assess layout variations and improve conversion rates.",
        tech: ["Tableau"],
        link: "#"
    }
];

export const skills = [
    "Python",
    "R",
    "SQL",
    "Excel",
    "Power BI",
    "Tableau",
    "Matplotlib",
    "Machine Learning",
    "Data Cleaning",
    "Regression",
    "Classification"
];
