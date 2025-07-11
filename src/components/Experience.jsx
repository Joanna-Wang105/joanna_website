import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/experiences";
import { useState } from "react";

export default function Experience() {
  const [selectedType, setSelectedType] = useState("all");

  const filteredExperience =
    selectedType === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === selectedType);

  return (
    <div className="mx-10 mb-10">
      <h1 className="my-4 text-3xl font-sans">Experiences</h1>
      <select
        className="select mb-4"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Internship">Internship</option>
        <option value="Part-Time">Part-time</option>
        <option value="Volunteer">Volunteering</option>
      </select>

      <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {filteredExperience.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
