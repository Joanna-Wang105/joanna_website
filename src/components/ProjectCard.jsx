import React from "react";

export const ProjectCard = (props) => {
  return (
    <div className="card w-full card-xl shadow-xl bg-gray-50 lg:max-w-full">
      <div className="card-body">
        <p>
          <i className={props.icon}></i> {props.type}
        </p>
        <h1 className="card-title">{props.title}</h1>
        <p className="pb-2">{props.description}</p>

        {props.features.map((feat, i) => (
          <p key={i}>
            <i className="fa-solid fa-check text-green-500"></i> {feat}
          </p>
        ))}
        <p>🛠️ {props.tools}</p>
        <a
          href={props.github}
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-link"></i> GitHub
        </a>
      </div>
    </div>
  );
};
