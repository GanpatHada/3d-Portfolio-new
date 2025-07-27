import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  fatcat,
  neogcamp
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full stack developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "Backend developer Intern",
    companyName: "Fatcat",
    icon: fatcat,
    iconBg: "#383E56",
    date: "Feb 2024 - Sept 2024",
    points: [
      "Developed a CRUD application using JDBC Template, enabling efficient database operations.",
      "Designed APIs for exporting data to Excel and for visualizing data in graph or pie chart formats.",
      "Created and managed multiple tables and views, optimizing database structure for better performance and usability"
    ],
  },
  {
    title: "Full stack developer trainee",
    companyName: "Neogcamp",
    icon: neogcamp,
    iconBg: "#E6DEDD",
    date: "March 2023 - Jan 2024",
    points: [
      "I completed comprehensive training in the MERN stack at NeoG Camp, where I mastered React for building dynamic and responsive front-end applications",
      "I gained hands-on experience in designing scalable APIs and implementing server-side logic using Node.js and Express, as well as managing databases with MongoDB.",
      "Through project-based learning, I enhanced my problem-solving abilities, improved debugging skills, and developed a strong understanding of agile methodologies, teamwork, and version control systems like Git.",
    ],
  },
  
];



const projects: TProject[] = [
  {
    name: "Artstore",
    description:
      "Developed and managed an e commerce application providing service in authentic Indian traditional art, featuring diverse styles like Madhubani, Warli,Miniature and many more.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/GanpatHada/artstore3.0_frontend",
  },
  {
    name: "Globeshare",
    description:
      "Built a dynamic social media platform using React and firebase, featuring user authentication, real-time posts, likes, and comments. optimized database queries for seamless performance.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/GanpatHada/globeshare",
  },
  {
    name: "Committask",
    description:
      "A sleek and intuitive task management web app built for modern productivity. Organize tasks, set priorities, track deadlines.",
    tags: [
      {
        name: "Nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/GanpatHada/committask",
  },
];

export { services, technologies, experiences,projects };
