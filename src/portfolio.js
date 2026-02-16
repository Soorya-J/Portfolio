import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* Splash Screen */
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

/* Illustration */
const illustration = {
  animated: true
};

/* Greeting Section */
const greeting = {
  username: "Soorya J",
  title: "Hi all, I'm Soorya J",
  subTitle: emoji(
    "Software Engineer with 2+ years of experience in C#, .NET Core, ASP.NET Core Web API, and SQL Server. Experienced in building scalable RESTful APIs using Clean Architecture, integrating third-party APIs, deploying applications to Azure, and developing Angular frontends and .NET MAUI mobile applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VJjuqac6uhzANrT1GYKtB-oaUjHu3mBH/view?usp=sharing",
  displayGreeting: true
};

/* Social Media Links */
const socialMediaLinks = {
  github: "https://github.com/Soorya-J",
  linkedin: "https://www.linkedin.com/in/soorya-j/",
  gmail: "sooryajsoorya@gmail.com",
  facebook: "https://www.facebook.com/",
  display: true
};

/* Skills Section */
const skillsSection = {
  title: "What I do",
  subTitle:
    "Full Stack .NET Developer building enterprise applications using modern backend and frontend technologies.",
  skills: [
    emoji("⚡ Build scalable RESTful APIs using ASP.NET Core Web API"),
    emoji("⚡ Design Clean Architecture based enterprise applications"),
    emoji("⚡ Develop Angular frontends and .NET MAUI mobile apps"),
    emoji("⚡ Deploy and manage applications on Microsoft Azure")
  ],
  softwareSkills: [
    { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
    { skillName: ".NET Core", fontAwesomeClassname: "fas fa-server" },
    { skillName: "SQL Server", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

/* Education Section */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University Of Kerala",
      logo: require("./assets/images/Kerala_University.png"),
      subHeader: "Bachelor of Science in Physics",
      duration: "September 2019 - April 2022",
      desc: "Achieved a CGPA score of 7.0"
    },
    {
      schoolName: "Keltron, Thiruvananthapuram",
      logo: require("./assets/images/Keltron.jpg"),
      subHeader: "Diploma in Python Full Stack Development",
      duration: "March 2023 - March 2024",
      desc: "Achieved a score of 86 percentage"
    }
  ]
};

/* Tech Stack */
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend (.NET Core)", progressPercentage: "80%" },
    { Stack: "Frontend (Angular)", progressPercentage: "70%" },
    { Stack: "Database (SQL Server)", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

/* Work Experience */
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Zigbill Software Solutions",
      companylogo: require("./assets/images/zigbill.jpg"),
      date: "July 2024 - Present",
      desc:
        "Working on enterprise-grade .NET applications with Clean Architecture.",
      descBullets: [
        "Developed and maintained ASP.NET Core Web APIs",
        "Integrated third-party APIs and payment gateways",
        "Optimized SQL queries and improved performance",
        "Deployed applications to Azure Cloud"
      ]
    },
    {
      role: "Software Developer Intern (Python Django | Angular | SQL Server)",
      company: "Hesper Tech Private Limited",
      companylogo: require("./assets/images/hesper.jpg"),
      date: "September 2023 – March 2024",
      desc:
        "Contributed to the development of an Engineering Project Management System for tracking product development and manufacturing workflows.",
      descBullets: [
        "Developed backend REST APIs using Python Django for project allocation and workflow management",
        "Built responsive dashboards and UI components using Angular",
        "Integrated SQL Server with Django ORM for managing project and employee data",
        "Implemented centralized logging, structured error handling, and performance monitoring to improve production stability"
      ]
    }
  ]
};

/* Open Source */
const openSource = {
  showGithubProfile: true,
  display: true
};

/* Big Projects */
const bigProjects = {
  title: "Projects",
  subtitle: "Some of my featured projects",
  projects: [
    {
      image: require("./assets/images/youtube.jpg"),
      projectName: "Youtube Clone",
      projectDesc:
        "Developed a YouTube Clone using Vite + React with responsive design and REST API integration.",
      footerLink: [
        {
          name: "Visit",
          url: "https://github.com/Soorya-J/Youtube-clone"
        }
      ]
    },
    {
      image: require("./assets/images/weather.jpg"),
      projectName: "Weather Forecast Application",
      projectDesc:
        "Responsive weather application using React and REST APIs to fetch real-time weather data.",
      footerLink: [
        {
          name: "Visit",
          url: "https://soorya-j.github.io/Weather_Forcast/"
        }
      ]
    }
  ],
  display: false
};

/* Achievement Section */
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications and professional achievements",
  achievementsCards: [
    {
      title: "Keltron Python Full-Stack Developer",
      subtitle: "Certification",
      image: require("./assets/images/Keltron.jpg"),
      imageAlt: "Keltron",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com"
        }
      ]
    },
    {
      title: "Agentic AI in Action 2025",
      subtitle: "Boston Institute of Analytics, Trivandrum Campus",
      image: require("./assets/images/bia.jpg"),  
      imageAlt: "Agentic AI Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com"
        }
      ]
    }
  ],
  display: true
};

/* Blog Section */
const blogSection = {
  title: "Blogs",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

/* Talk Section */
const talkSection = {
  title: "Talks",
  subtitle: emoji("Sharing knowledge and learning continuously 🚀"),
  talks: [],
  display: false
};

/* Podcast Section */
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming Soon",
  podcast: [],
  display: false
};

/* Resume Section */
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

/* Contact */
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  number: "+91 8921238089",
  email_address: "sooryajbusinessmail@gmail.com"
};

/* Twitter */
const twitterDetails = {
  userName: "Soorya_RJ",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
