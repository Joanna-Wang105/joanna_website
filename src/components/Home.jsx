export default function Home() {
  return (
    <div className="flex flex-col gap-y-15">
      {/* About me */}
      <div className="mt-16 md:mt-32">
        <div className="flex flex-col md:flex-row md:gap-16 gap-8 p-6 justify-center">
          <figure className="self-center md:self-center">
            <img
              src="/images/profile_pic.jpg"
              alt="my profile picture"
              className="w-54 h-54 rounded-full object-cover"
            />
          </figure>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hi, I'm Joanna Wang 👋
            </h1>
            <p className="text-xl md:text-2xl">
              Web Developer | Penultimate year of B.CompSci / M.CybrSec @ UQ
            </p>
            <div className="flex flex-row gap-x-6">
              {/* LinkedIn */}
              <div>
                <a
                  href="https://www.linkedin.com/in/joanna-wang-a9b308296"
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <i className="fa-brands fa-linkedin text-3xl text-blue-600"></i>
                </a>
              </div>

              {/* GitHub */}
              <div>
                <a
                  href="https://github.com/Joanna-Wang105"
                  className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <i className="fa-brands fa-github text-3xl text-black"></i>
                </a>
              </div>

              {/* email */}
              <div className="tooltip" data-tip="joannare105@gmail.com">
                <a
                  href="mailto:joannare105@gmail.com"
                  className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <i className="fa-solid fa-envelope text-3xl text-sky-800"></i>
                </a>
              </div>
            </div>
            {/* Resume */}
            <div className="border border-green px-4 py-2 mt-2 rounded-lg w-fit hover:scale-105 transition-transform duration-300">
              <a
                href="/resume/Joanna_Wang_resume.pdf"
                download="Joanna_Wang_Resume.pdf"
                className="text-base text-gray-800 font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project */}
      <div className="flex flex-col mx-7 mb-10">
        <div className="flex items-center gap-4 mb-8 mt-3 mx-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <h2 className="text-3xl  text-gray-500 whitespace-nowrap">
            🚀 PROJECTS
          </h2>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly gap-y-9 gap-10 lg:mx-10 md:mx-16">
          {/* Web dev project */}
          <div className="card w-full card-xl shadow-xl bg-gray-50 lg:max-w-full">
            <div className="card-body">
              <p>
                <i class="fa-brands fa-react text-blue-400"></i> Web Development
              </p>
              <h2 className="card-title">My Portfolio - This Website</h2>
              <p className="pb-2">
                A personal portfolio website showcasing my experience, projects,
                and certificates
              </p>
              <p>
                <i class="fa-solid fa-check text-green-500"></i> Fully
                responsive and optimized for any devices.
              </p>
              <p>
                <i class="fa-solid fa-check text-green-500"></i> Accessible and
                semantic HTML
              </p>
              <p>
                <i className="fa-solid fa-check text-green-500"></i>{" "}
                User-centered design with intuitive navigation
              </p>

              <p>🛠️ Built with React, Tailwind CSS, JavaScript, Vercel</p>
              <a
                href="https://github.com/Joanna-Wang105/joanna_website#"
                className="text-blue-400"
                target="_blank"
              >
                <i class="fa-solid fa-link"></i> GitHub
              </a>
            </div>
          </div>

          {/* Java team project */}
          <div className="card bg-gray-50 w-full card-xl shadow-xl lg:max-w-full">
            <div className="card-body">
              <p>
                <i class="fa-brands fa-java text-orange-600"></i> Cooking Game
              </p>
              <h2 className="card-title ">Beastly Bistro - Group Project</h2>
              <p className="pb-2">
                A story-driven cooking simulation game combining resource
                management and time-sensitive gameplay.
              </p>
              <p>
                <i className="fa-solid fa-check text-green-500"></i> Different
                endings based on player performance
              </p>
              <p>
                <i className="fa-solid fa-check text-green-500"></i> Task
                prioritisation and moral choices
              </p>
              <p>
                <i className="fa-solid fa-check text-green-500"></i> Real-time
                feedback & game balancing mechanisms
              </p>
              <p>🛠️ Built with Java, libGDX, SonarCloud</p>
              <a
                href="https://github.com/UQcsse3200/2024-studio-3"
                className="text-blue-400"
                target="_blank"
              >
                <i class="fa-solid fa-link"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
