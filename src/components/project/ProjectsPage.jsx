import React, { useEffect, useState } from "react";
import Works from "../Works";
import ProjectCard from "../ProjectCard";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";

const ProjectsPage = () => {
  const [flag, setFlag] = useState(true);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const res = await axios.get(
        `https://portfolio-backend-sjow.onrender.com/api/project/`
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
      <div className="relative z-0 bg-primary min-h-screen w-full flex flex-col pb-14">
        <div className="bg-cover bg-no-repeat bg-center w-full flex-grow">
          <section className="w-full mx-auto">
            <div className={`${styles.paddingX} max-w-7xl mx-auto pt-32`}>
              <motion.div variants={textVariant}>
                <h2 className={styles.sectionHeadText}>PROJECTS.</h2>
                <p className={styles.sectionSubText}>
                  Projects, I have done so far
                </p>
              </motion.div>
              <div className="mt-20 flex flex-wrap gap-7 w-full">
                {flag ? (
                  <LoadingSpinner />
                ) : (
                  projects.map((project, index) => (
                    <ProjectCard key={project._id} index={index} {...project} />
                  ))
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
