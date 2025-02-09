import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
// import { styles } from "../styles";
import { github } from "../assets";
import { url } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";
import { projectTypeColor, techColors, projectStatusColor } from "../constants";

const ProjectCard = (props) => {
  const {
    _id,
    index,
    title,
    description,
    technologies,
    poster,
    github_link,
    project_url,
    status,
    project_type,
  } = props;
  console.log(technologies);
  const navigate = useNavigate();
  const redirectToDetailsPage = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => redirectToDetailsPage(_id)}
      className=""
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speedd: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[400px] border "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              // onClick={() => window.open(project_url, "_blank")}
              onClick={(event) => {
                event.stopPropagation();
                window.open(project_url, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={url}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            {github_link?.map((link) => (
              <div
                key={link}
                // onClick={() => window.open(link, "_blank")}
                onClick={(event) => {
                  event.stopPropagation(); // Prevents triggering the motion.div click event
                  window.open(link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]"> {title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div>
          <div className=" text-white flex my-2 items-center ">
            <p>Status:</p>{" "}
            <h4
              className={`${
                projectStatusColor[status ? status.toLowerCase() : "inprogress"]
              } mx-5 `}
            >
              {status ? status : "Inprogress"}
            </h4>
          </div>
          <div className=" text-white flex ">
            <p>Project Type: </p>{" "}
            <h4
              className={`${
                projectTypeColor[
                  project_type ? project_type.toLowerCase() : "frontend"
                ]
              } mx-5 `}
            >
              {project_type ? project_type : "Frontend"}
            </h4>
          </div>
        </div>
        <div className={`mt-4 flex flex-wrap gap-2 `}>
          {technologies?.map((tag) => (
            <p
              key={tag}
              className={`text-[14px] ${
                techColors[
                  tag
                    .toLowerCase()
                    .trim()
                    .split(" ")
                    .join("_")
                    .replace(/[\s.]/g, "")
                ]
              }`}
            >
              #{tag}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
