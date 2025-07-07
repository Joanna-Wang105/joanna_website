import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/experiences";
export default function Experience() {
  return (
    <div>
      <h1 className="mb-4">Experiences</h1>

      <div className="flex flex-warp flex-row">
        <div className="">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
