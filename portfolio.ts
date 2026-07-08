import emoji from "react-easy-emoji";
import {
  EducationType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Mahendra Boya",
  title: "Hi , I'm Mahendra Boya",
  description:
    " AI & MLOps Engineer.I specialize in building ,deploying and Machine lesarning frameworks and Google Cloud Platform (GCP) .I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "nandinikamaseli834-eng",
};
export const contact = {};
export const experience = [
  {
    role:"",
    company:"",
    companyLogo:"",
    date:";"
  }
],
export const socialLinks: SocialLinksType = {
  email: "mailto:mahendr123@gmail.com",
  linkedin: "https://www.linkedin.com/in/nandinikamaseli834-eng/",
  github: "https://github.com/nandinikamaseli834-eng",

};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "AI & MLOPS ENGINEER PASSIONATE ABOUT PRODUCTION MACHINE LEARNING",
  data: [
    {
      title: "Artificial Intelligence",
      lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Desiging and training robust machine learning"),
        emoji("⚡ Building and orchestrating end to end MLOps production pipelines"),
      
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Machine Learning",
          iconifyTag: "logos:tenserflow",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Google Cloud",
          iconifyTag: "logos:google cloud",
        },
       
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
       
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Machine Learning & AI", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "MLOps & Cloud",
    progressPercentage: "90",
  },
  {
    Stack: "Programming (python)",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Malla Reddy Institute Of Technology & Science",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2023 - April 2027",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];



export const projects: ProjectType[] = [
  {
    name: "AI- based Code Error Explainer",
    desc: "An intelligent developer tool powered by Gemini Large Languge Model.",
    github: "https://github.com/nandinikamaseli834-eng/ai-error explainer",
    link: "https://github.com/nandinikamaseli834-eng/ai-error explainer",
  },
  
   
];



// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Mahendra Boya  | AI & MLOps Engineer",
  description: greetings.description,
  author: "",
  image: "https://avatars.githubusercontent.com/u/nandinikamaseli834-eng",
  url: "https://developer-portfolio-nandinikamaseli834-eng.vercel.app",
  keywords: [
    "Mahendra Boya  ",
    "AI Engineer",
    "MLOps Engineer",
    "Google Cloud Platform MLOps",

  ],
};
