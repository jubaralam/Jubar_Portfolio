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
 

  tripguide,
  threejs,
  shaheen,
  samrudhh,
  sparkEnglish,
  bluefly
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
    live_url:"https://spark-english-demo.vercel.app/",
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
    live_url:"https://bluefly-sigma.vercel.app/",
    source_code_link: "https://github.com/jubaralam/bluefly",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };