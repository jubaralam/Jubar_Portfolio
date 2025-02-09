import React, { useState } from "react";

import { Button, FileInput, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import axios from "axios";

const AddProject = () => {
  const [file, setFile] = useState(null);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      description: "",
      status: "",
      technologies: "",
      github_link: "",
      project_url: "",
      learnings: "",
      video_demo_link: "",
      project_type: "",
      stars: "",
    },

    validate: {
      title: (value) => (value.length < 2 ? "Invalid title" : null),
      description: (value) => (value.length < 2 ? "Invalid description" : null),
      status: (value) => (value.length < 2 ? "Invalid status" : null),
      technologies: (value) =>
        value.length < 2 ? "Invalid technologies" : null,
      github_link: (value) => (value.length < 2 ? "Invalid github link" : null),
      project_url: (value) => (value.length < 2 ? "Invalid project url" : null),
      learnings: (value) => (value.length < 2 ? "Invalid learnings" : null),
      video_demo_link: (value) =>
        value.length < 2 ? "Invalid video demo link" : null,
      project_type: (value) =>
        value.length < 2 ? "Invalid project type" : null,
      
    },
  });

  const sendData = async (data) => {
    const formData = new FormData();

    // Append text fields
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    
    if (file) {
      formData.append("file", file); // Ensure this matches backend
    }
    try {
      const res = await axios.post(
        "https://portfolio-backend-sjow.onrender.com/api/project/add/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Error submitting data");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendData(form.getValues());
    console.log("working", form.getValues());
  };

  return (
    <>
      <div className="max-w-4xl mx-auto flex flex-wrap flex-col items-center justify-center min-h-screen pt-[80px] ">
        <h1>Add Project</h1>
        <div className="bg-gray-200 w-full py-7 px-5 rounded-lg">
          <form onSubmit={handleSubmit}>
            <TextInput
              withAsterisk
              label="Title"
              placeholder="I.e Institute Management System"
              key={form.key("title")}
              {...form.getInputProps("title")}
            />
            <TextInput
              withAsterisk
              label="Description"
              placeholder="Description about project"
              key={form.key("description")}
              {...form.getInputProps("description")}
            />
            <TextInput
              withAsterisk
              label="Status"
              placeholder="i.e inprogress, pending,completed,deprecated,maintenance"
              key={form.key("status")}
              {...form.getInputProps("status")}
            />
            <TextInput
              withAsterisk
              label="project type"
              placeholder="i.e frontend, backend, fullStach"
              key={form.key("project_type")}
              {...form.getInputProps("project_type")}
            />
            <TextInput
              withAsterisk
              label="stars"
              placeholder="i.e 1,2,3,4,5"
              key={form.key("stars")}
              {...form.getInputProps("stars")}
            />
            <TextInput
              withAsterisk
              label="technologies"
              placeholder="technologies"
              key={form.key("technologies")}
              {...form.getInputProps("technologies")}
            />
            <TextInput
              withAsterisk
              label="github links"
              placeholder="github links"
              key={form.key("github_link")}
              {...form.getInputProps("github_link")}
            />
            <TextInput
              withAsterisk
              label="Project url"
              placeholder="Project url"
              key={form.key("project_url")}
              {...form.getInputProps("project_url")}
            />
            <TextInput
              withAsterisk
              label="learnings"
              placeholder="learnings"
              key={form.key("learnings")}
              {...form.getInputProps("learnings")}
            />
            <TextInput
              withAsterisk
              label="video demo link"
              placeholder="video demo link"
              key={form.key("video_demo_link")}
              {...form.getInputProps("video_demo_link")}
            />

            {/* Image Upload Field */}
            

            <FileInput
              label="Upload Project Thumbnail"
              placeholder="Select an image"
              onChange={setFile} // Update state directly
            />

            {/* File Input for Image Upload */}
            {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}

            <Group justify="flex-end" mt="md">
              <Button type="submit">Add</Button>
            </Group>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProject;
