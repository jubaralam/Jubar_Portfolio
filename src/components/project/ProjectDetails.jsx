import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { projects } from "../constants";
// Replace with your actual data source
// import { sparkEnglish } from "../../assets";
import { styles } from "../../styles";
import axios from "axios";
import { Notification } from "@mantine/core";

const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [flag, setFlag] = useState(true);
  const [project, setProject] = useState([]);
  const [showNotification, setShowNotification] = useState(true);

  const getProjects = async () => {
    try {
      const res = await axios.get(
        `https://portfolio-backend-sjow.onrender.com/api/project/id/${id}`
      );
      console.log("response", res.data.data);
      setProject(res.data.data);
      setFlag(false);
    } catch (error) {
      setFlag(false);
      alert(error.response?.data?.message);
    }
  };

  setTimeout(() => setShowNotification(false), 10000);

  useEffect(() => {
    getProjects();
  }, [id]);

  const {
    title,
    description,
    poster,
    github_link,
    leanings,
    project_type,
    project_url,
    stars,
    status,
    technologies,
    video_demo_link,
  } = project;

  if (showNotification) {
    return (
      <div className="fixed top-5 right-5 z-50">
        <Notification
          withBorder
          radius="lg"
          title="🚀 Project Details Page - In Progress"
          color="teal"
        >
          The Project Details Page of my portfolio is currently being designed
          and developed to showcase my work in a more interactive and engaging
          way. Stay tuned for updates! 🎨💻
        </Notification>
      </div>
    );
  }
  return (
    <div className="relative z-0 bg-primary min-h-screen  ">
      {/* Notification */}
      {/* {showNotification && (
        <div className="fixed top-5 right-5 z-50">
          <Notification
            withBorder
            radius="lg"
            title="Project Loaded!"
            color="teal"
            onClose={() => setShowNotification(false)}
          >
            Project details have been successfully fetched.
          </Notification>
        </div>
      )} */}
      {flag ? (
        "Loading"
      ) : (
        <div
          className={`${styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto max-h-auto  `}
        >
          {/* Project Poster */}
          <div className="w-[70vw] text-center">
            <img
              src={poster}
              alt={`${title} Poster`}
              className="rounded-lg w-full mb-8"
            />
          </div>

          {/* Project Title and Description */}
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p className="mt-4 text-secondary">{description}</p>

          {/* Key Details in Bullet Points */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white">Key Highlights:</h2>
            <ul className="list-disc list-inside mt-4 text-secondary text-lg">
              {technologies.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Screenshots Section */}
          {/* <div className="screenshots mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="rounded-lg w-full"
              />
            ))}
          </div> */}

          {/* Additional Details */}
          <div className="mt-10  text-white">
            <h2 className="text-2xl font-bold">Details:</h2>
            <p>{project.details}</p>
          </div>

          {/* Links to Source Code and Live Demo */}
          <div className="mt-10 mb-16 py-10">
            {github_link?.map((link) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mr-5"
              >
                GitHub Repo. Link
              </a>
            ))}

            <a
              href={project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Live Project Link
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
