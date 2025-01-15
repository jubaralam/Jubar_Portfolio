import React from "react";
import ProjectsPage from "../components/project/ProjectsPage";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "../components/project/ProjectDetails";
import  Home from "../components/Home";
import  Contact  from "../components/Contact";
import About from "../components/About";
import  Works from "../components/Works";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
};

export default AllRoutes;
