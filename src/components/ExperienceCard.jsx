export default function ExperienceCard({ experience }) {
  const styles = {
    backgroundColor:
      experience.type === "Internship"
        ? "#f091e4"
        : experience.type === "Part-Time"
        ? "#ffc86c"
        : "#5ae0d7",
  };

  return (
    <div className="card w-full">
      <div className="card-body">
        <p className="text-md text-gray-500">
          {experience.startDate} - {experience.endDate}
        </p>
        <div className="flex items-center w-fit">
          <p className="text-xl lg:text-2xl font-bold">{experience.title}</p>
          <p className="experience-type self-center" style={styles}>
            {experience.type}
          </p>
        </div>
        <p className="text-md">
          <i class="fa-solid fa-location-dot text-red-600"></i>{" "}
          {experience.company}
        </p>
      </div>
      <p className="experience-descrip">{experience.description}</p>
    </div>
  );
}
