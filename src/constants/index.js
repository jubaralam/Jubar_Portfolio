import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  // starbucks,
  // tesla,
  // tripguide,
  threejs,
  shaheen,
  samrudhh,
  sparkEnglish,
  bluefly,
} from "../assets";

export const navLinks = [
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
  {
    id: "projects",
    title: "Project",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

const technologies = [
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
];

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "Shaheen Flex",
    icon: shaheen,
    iconBg: "#383E56",
    date: "Oct 2021 - April 2022",
    points: [
      "Image Editing: Enhancing and manipulating photos.",
      " Graphic Design: Creating visuals for ads, social media, and websites.",
      " Typography: Incorporating and stylizing text in designs.",
      " Color Correction: Adjusting colors for desired tone and mood.",
    ],
  },
  {
    title: "Cold Room Technician",
    company_name: "Samrudhh Engineer's",
    icon: samrudhh,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Installation and Maintenance: Skilled in installing and maintaining efficient cold room systems",

      " Troubleshooting Expert: Quickly diagnose and resolve refrigeration system issues.",

      "  Compliance and Safety: Ensure equipment meets industry standards and safety regulations.",

      "Preventive Maintenance: Implement schedules to prevent breakdowns and extend equipment life.",

      "Emergency Response: Promptly respond to service calls with effective problem-solving.",
      "Record Keeping: Maintain accurate records of maintenance activities.",

      "Client Communication: Effectively communicate with clients on system usage and maintenance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "English Training Institute",
    description:
      "Web-based platform that allows users to search, book, appointment a convenient and efficient solution for English learner needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sparkEnglish,
    live_url: "https://spark-english-demo.vercel.app/",
    source_code_link: "https://github.com/jubaralam/sparkEnglishDemo",
  },
  {
    name: "BlueFly Ecommerce",
    description:
      "It's a replica of an application's user interface using HTML, CSS, and JavaScript for structure, style, and interactivity, respectively.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: bluefly,
    live_url: "https://bluefly-sigma.vercel.app/",
    source_code_link: "https://github.com/jubaralam/bluefly",
  },

  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

const techColors = {
  reactjs: "text-blue-500",
  react: "text-blue-500",
  javascript: "text-yellow-500",
  nodejs: "text-green-500",
  express: "text-black bg-gray-200 px-1",
  expressjs: "text-black bg-gray-200 px-1",
  mongodb: "text-green-700",
  mongoose: "text-red-500",
  redux: "text-purple-500",
  tailwindcss: "text-teal-400",
  material_ui: "text-blue-400",
  axios: "text-indigo-500",
  chartjs: "text-red-500",
  nextjs: "text-black bg-gray-200 px-1",
  typescript: "text-blue-600",
  firebase: "text-orange-500",
  graphql: "text-rose-500",
  socketio: "text-gray-700",
  webpack: "text-blue-700",
  eslint: "text-purple-600",
  prettier: "text-orange-500",
  jest: "text-red-600",
  cypress: "text-green-600",
  storybook: "text-rose-400",
  prisma: "text-black bg-gray-200 px-1",
  docker: "text-blue-600",
  kubernetes: "text-blue-400",
  vercel: "text-black bg-gray-200 px-1",
  netlify: "text-green-500",
  supabase: "text-emerald-500",
  bootstrap: "text-purple-600",
  sass: "text-pink-500",
  redux_toolkit: "text-purple-500",
  tailwind_css: "text-teal-400",
  tailwind_ui: "text-teal-400",
  jwt: "text-purple-600",
  bcrypt: "text-gray-700 bg-gray-200 px-1",
  bcryptjs: "text-gray-700 bg-gray-200 px-1",
  vite: "text-purple-500",
  postcss: "text-red-500",
  autoprefixer: "text-yellow-500",
  react_router_dom: "text-red-600",
  framer_motion: "text-black bg-gray-200 px-1",
  motion: "text-black bg-gray-200 px-1",
  jquery: "text-blue-500",
  lodash: "text-blue-600",
  d3js: "text-orange-500",
  threejs: "text-black bg-gray-200 px-1",
  nestjs: "text-red-600",
  electron: "text-blue-400",
};

const projectTypeColor = {
  frontend: "text-blue-500", // For frontend projects
  backend: "text-green-500", // For backend projects
  fullstack: "text-purple-500", // For full-stack projects
  uiux: "text-pink-500", // For UI/UX design projects
  mobile: "text-yellow-500", // For mobile app projects
};

const projectStatusColor = {
  completed: "text-green-700 bg-green-100 px-2 py-1 rounded",
  inprogress: "text-yellow-700 bg-yellow-100 px-2 py-1 rounded",
  pending: "text-gray-700 bg-gray-100 px-2 py-1 rounded",
  deprecated: "text-red-700 bg-red-100 px-2 py-1 rounded",
  maintenance: "text-blue-700 bg-blue-100 px-2 py-1 rounded",
};

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  techColors,
  projectTypeColor,
  projectStatusColor,
};
