import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects.js";

export const Project = () => {
  return (
    <div className="flex flex-col mx-7 mb-10">
      <h1 className="my-4 text-3xl font-sans">Projects 🚀</h1>
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </div>
  );
};
