import React from "react";
import { useParams } from "react-router-dom";
// import { projects } from "../constants";
// Replace with your actual data source
import { sparkEnglish } from "../../assets";
import { styles } from "../../styles";
const projects = [
  {
    id: 1,
    name: "Spark English Institute",
    description: "This is a brief description of Project 1.",
    details: "Detailed description and features of Project 1.",
    poster: sparkEnglish, // Poster image URL
    highlights: [
      "Implemented responsive design using React and Tailwind CSS.",
      "Integrated payment gateway with secure authentication.",
      "Optimized database queries for 50% faster performance.",
      "Achieved 95% Lighthouse performance score.",
    ],
    screenshots: [
      "https://themefisher.com/blog/edubin.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY10xvkX7mEII_cf6Cdj_JPtcmP14y4LLgrg&s",
      "https://market-resized.envatousercontent.com/previews/files/273020249/akkhor-preview/05_home4.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=1c9196506cdf2ea408c4ea8bb0c13a885a7d084548a1c543af5c77f634137835",
      "https://s3.envato.com/files/449110621/05_preview.png",
    ],
    source_code_link: "https://github.com/user/project1",
    live_url: "https://live-demo.com/project1",
  },
  {
    id: 2,
    name: "Project 2",
    description: "This is a brief description of Project 2.",
    details: "Detailed description and features of Project 2.",
    poster: "https://via.placeholder.com/800x400",
    highlights: [
      "Built a dynamic dashboard with real-time data visualization.",
      "Deployed on AWS with CI/CD pipeline integration.",
      "Developed RESTful APIs for seamless communication.",
      "Increased user engagement by 30% with improved UX/UI.",
    ],
    screenshots: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
    source_code_link: "https://github.com/user/project2",
    live_url: "https://live-demo.com/project2",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative z-0 bg-primary min-h-screen  ">
      <div
        className={`${styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto max-h-auto  `}
      >
        {/* Project Poster */}
        <div className="w-[70vw] text-center">
          <img
            src={project.poster}
            alt={`${project.name} Poster`}
            className="rounded-lg w-full mb-8"
          />
        </div>

        {/* Project Title and Description */}
        <h1 className="text-4xl font-bold text-white">{project.name}</h1>
        <p className="mt-4 text-secondary">{project.description}</p>

        {/* Key Details in Bullet Points */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">Key Highlights:</h2>
          <ul className="list-disc list-inside mt-4 text-secondary text-lg">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        {/* Screenshots Section */}
        <div className="screenshots mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {project.screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot}
              alt={`Screenshot ${index + 1}`}
              className="rounded-lg w-full"
            />
          ))}
        </div>

        {/* Additional Details */}
        <div className="mt-10 text-white">
          <h2 className="text-2xl font-bold">Details:</h2>
          <p>{project.details}</p>
        </div>

        {/* Links to Source Code and Live Demo */}
        <div className="mt-10 mb-16 py-10">
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mr-5"
          >
            Source Code
          </a>
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
