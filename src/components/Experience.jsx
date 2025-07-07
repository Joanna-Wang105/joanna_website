import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/experiences";
export default function Experience() {
  return (
    <div className="mx-10 mb-10">
      <h1 className="my-4 text-3xl font-sans">Experiences</h1>
      <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
