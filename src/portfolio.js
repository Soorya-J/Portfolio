import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Illustration
const illustration = {
  animated: true,
};

// Greeting Section
const greeting = {
  username: "Soorya J",
  title: "Hi all, I'm Soorya J",
  subTitle: emoji(
    "Software Engineer with 2+ years of experience in C#, .NET Core, ASP.NET Core Web API, and SQL Server. I build scalable RESTful APIs using Clean Architecture and deploy enterprise applications on Microsoft Azure. Experienced in Angular frontend development, .NET MAUI mobile apps, Meta API integrations, AI features, OCR processing, and performance optimization."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true,
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Soorya-J",
  linkedin: "https://www.linkedin.com/in/soorya-j-13707525a/",
  gmail: "sooryajbusinessmail@gmail.com",
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "Full Stack .NET Developer specializing in scalable backend APIs, cloud deployment, and modern frontend applications.",
  skills: [
    emoji("⚡ Develop secure and scalable RESTful APIs using ASP.NET Core"),
    emoji("⚡ Design SQL Server databases with query optimization"),
    emoji("⚡ Deploy backend services on Microsoft Azure App Services"),
    emoji("⚡ Build responsive UI using Angular"),
    emoji("⚡ Integrate Meta APIs, Webhooks, AI & OCR features"),
    emoji("⚡ Develop cross-platform mobile apps using .NET MAUI (MVVM)")
  ],
  softwareSkills: [
    { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
    { skillName: ".NET Core", fontAwesomeClassname: "fas fa-laptop-code" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "SQL Server", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true,
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Kerala",
      logo: require("./assets/images/Kerala_University.png"),
      subHeader: "Bachelor's Degree – Physics",
      duration: "August 2019 – April 2022",
      desc: "Completed Bachelor's degree in Physics."
    },
    {
      schoolName: "Keltron, Thiruvananthapuram",
      logo: require("./assets/images/Keltron.jpg"),
      subHeader: "Diploma in Full Stack Development",
      duration: "March 2023 – February 2024",
      desc: "Full Stack Development with focus on Backend & APIs."
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend (.NET Core)", progressPercentage: "85%" },
    { Stack: "Frontend (Angular)", progressPercentage: "75%" },
    { Stack: "Database (SQL Server)", progressPercentage: "80%" },
    { Stack: "Cloud (Azure)", progressPercentage: "70%" }
  ],
  displayCodersrank: false,
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer (.NET Core | Angular | SQL Server)",
      company: "Zigbill Software Solutions Pvt Ltd",
      companylogo: require("./assets/images/Keltron.jpg"),
      date: "July 2024 – Present",
      desc: "Developing enterprise-grade backend APIs and scalable systems.",
      descBullets: [
        "Designed and developed RESTful Web APIs using ASP.NET Core",
        "Integrated Meta (Facebook) APIs with webhook-based lead workflows",
        "Implemented centralized logging and global exception handling",
        "Deployed backend services on Microsoft Azure App Services",
        "Integrated AI summaries and OCR-based intelligent data processing",
        "Followed Clean Architecture and SOLID principles"
      ]
    },
    {
      role: "Software Developer Intern (Python Django | Angular)",
      company: "Hesper Tech Private Limited",
      companylogo: require("./assets/images/Keltron.jpg"),
      date: "September 2023 – March 2024",
      desc: "Worked on Engineering Project Management System.",
      descBullets: [
        "Developed REST APIs using Python Django",
        "Built Angular dashboards for reporting and tracking",
        "Integrated SQL Server using Django ORM",
        "Implemented logging and performance monitoring"
      ]
    }
  ]
};

// Achievements
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Certifications and Technical Contributions",
  achievementsCards: [
    {
      title: "Meta API Integration Certification",
      image: require("./assets/images/Keltron.jpg"),
      imageAlt: "Meta API"
    },
    {
      title: "Agentic AI in Action 2025",
      image: require("./assets/images/Keltron.jpg"),
      imageAlt: "AI Certification"
    }
  ],
  display: true,
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  number: "+91 8921238089",
  email_address: "sooryajbusinessmail@gmail.com"
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const twitterDetails = {
  userName: "Soorya_RJ",
  display: false
};

const openSource = {
  showGithubProfile: true,
  display: true
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
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
