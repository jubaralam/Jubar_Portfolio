import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import { Tilt } from "react-tilt";
import { styles } from "../styles";
// import { github } from "../assets";
// import { url } from "../assets";
import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import ProjectCard from "./ProjectCard";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

const Works = () => {
  const [flag, setFlag] = useState(true);
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      const res = await axios.get(
        `https://portfolio-backend-sjow.onrender.com/api/project/latest/`
      );
      console.log("response", res.data.data);
      setProjects(res.data.data);
      setFlag(false);
    } catch (error) {
      setFlag(false);
      alert(error.response?.data?.message);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Recent Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      {/* <div className="mt-20 flex flex-wrap gap-7  overflow-y-auto  relative w-full h-screen mx-auto min-h-screen overflow-hidden">
        {flag ? (
          <LoadingSpinner />
        ) : (
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        )}
      </div> */}
      <div className="mt-20 flex flex-wrap gap-7">
        {/* {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))} */}

        {flag ? (
          <LoadingSpinner />
        ) : (
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
