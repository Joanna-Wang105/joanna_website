import React from "react";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <div className="flex flex-col mx-7 mb-10">
      <h1 className="my-4 text-3xl font-sans"> Projects 🚀</h1>
      <div className="grid gap-10 grid-col-1 lg:grid-cols-2 ">
        {/* Web dev project */}
        <ProjectCard
          icon="fa-brands fa-react text-blue-400"
          type="Web Development"
          title="My Portfolio - This Website"
          description="A personal portfolio website showcasing my experience, projects, and certificates"
          features={[
            "Fully responsive and optimized for any devices.",
            "Accessible and semantic HTML",
            "User-centered design with intuitive navigation",
          ]}
          tools="Built with React, Tailwind CSS, JavaScript, Vercel"
          github="https://github.com/Joanna-Wang105/joanna_website"
        />

        {/* Java team project */}
        <ProjectCard
          icon="fa-brands fa-java text-orange-600"
          type="Cooking Game"
          title="Beastly Bistro - Group Project"
          description="A story-driven cooking simulation game combining resource management and time-sensitive gameplay."
          features={[
            "Different endings based on player performance",
            "Task prioritisation and moral choices",
            "Real-time feedback & game balancing mechanisms",
          ]}
          tools="Built with Java, libGDX, SonarCloud"
          github="https://github.com/UQcsse3200/2024-studio-3"
        />
        {/* Weather App */}
        <ProjectCard
          icon="fa-brands fa-react text-blue-400"
          type="Web Development"
          title="Weather App"
          description="A weather application that displays real-time temperature, humidity, wind speed, and rainfall based on user location or search."
          features={[
            "Supports both location-based geolocation and manual search",
            "Dynamic weather icons that reflect current weather conditions",
            "Adorable animated cat for a playful and engaging user experience",
          ]}
          tools=" Built with React, Tailwind CSS, JavaScript, Vercel, OpenWeatherApp API"
          github="https://github.com/Joanna-Wang105/weather-app"
        />
      </div>
    </div>
  );
};
