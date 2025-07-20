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
    </div>
  );
}
