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
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-4 h-full border-gray-300 border-1">
      <span className="text-gray-500 text-sm">
        {experience.startDate} - {experience.endDate}
      </span>

      <div className="mb-2 gap-2 w-fit flex flex-row flex-wrap items-center">
        <h2 className="mb-2 font-bold text-2xl leading-tight break-words">
          {experience.title}
        </h2>
        <span
          className="px-2 py-1 text-xs font-semibold rounded"
          style={styles}
        >
          {experience.type}
        </span>
      </div>

      <div className="pb-3">
        <i className="fa-solid fa-location-dot text-red-600 mr-1" />
        <span>{experience.company}</span>
      </div>
      <p className="experience-descrip">{experience.description}</p>
    </div>
  );
}
