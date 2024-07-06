


import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Soorya J",
  title: "Hi all, I'm Soorya J",
  subTitle: emoji(
    "A Python Full Stack Developer 🐍 passionate about crafting robust Web and Mobile applications using Django and other powerful Python frameworks alongside modern front-end technologies like React.js"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Soorya-J",
  linkedin: "https://www.linkedin.com/in/Soorya J/",
  gmail: "sooryajsoorya@gmail.com",
  facebook: "https://www.facebook.com/Soorya J",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A Crazy Full Stack Developer  on a mission to explore every tech stack under the sun, from Django and Flask to React.js, Vue.js, and beyond!",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django",
      fontAwesomeClassname:"fas fa-project-diagram"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University Of Kerala",
      logo: require("./assets/images/Kerala_University.png"),
      subHeader: "Bachelor of Science in Physics",
      duration: "September 2019 - April 2022",
      desc: "Achieved a  CGPA score of 7.0"
    },
    {
      schoolName: "Keltron,Thiruvananthapuram",
      logo: require("./assets/images/Keltron.jpg"),
      subHeader: "Diploma in Python Full Stack Development",
      duration: "March 2023 - March 2024",
      desc: "Achieved a score of 86 percentage"
    }
  ]
};

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "60%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: false,
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require('./assets/images/Keltron.jpg'),
      date: "June 2018 - Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require('./assets/images/Keltron.jpg'),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};


const openSource = {
  showGithubProfile: "true", 
  display: true
};


const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/youtube.jpg"),
      projectName: "Youtube Clone",
      projectDesc: "Developed a Youtube Clone using Vite+React.Implemented a responsive layout ensuring seamless user experience across various devices, from desktops to mobile devices. Technologies used: Vite,React,JavascriptES6, RESTful APIs",
      footerLink: [
        {
          name: "Visit",
          url: "https://github.com/Soorya-J/Youtube-clone"
        }
      ]
    },
    {
      image: require("./assets/images/weather.jpg"),
      projectName: "WEATHER FORCAST APPLICATION",
      projectDesc: "Developed a dynamic responsive weather application using React,leveraging APIs to fetch realtime weather data and presenting it tousers in an intuitive and visually appealing manner Technologies Used: React, JavaScript, HTML, CSS, RESTful APIs",
      footerLink: [
        {
          name: "Visit",
          url: "https://soorya-j.github.io/Weather_Forcast/"
        }
      ]
    },
    {
      image: require("./assets/images/musicplayer.jpeg"),
      projectName: "Music Player",
      projectDesc: "Designed and developed a fully functional music player platform using Django, a high-level Python web framework.Enhanced user experience with intuitive UI/UX design.Technologies Used : Django, Python, HTML, CSS, JavaScript, Bootstrap, MySQL.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.youtube.com/"
        }
      ]
    } 
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Keltron Python Full-Stack Developer",
      image: require("./assets/images/Keltron.jpg"),
      imageAlt: "Keltron",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "",
      title: "Why Python?",
      description:
        "Python has become one of the most popular programming languages, and for good reasons"
    },
    {
      url: "",
      title: "Diving into React",
      description:
        "React has become a dominant force in front-end development for several compelling reasons:"
    }
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  number: "+91-8921238089",
  email_address: "sooryajsoorya@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Soorya_RJ",
  display: true
};

const isHireable = false;

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
