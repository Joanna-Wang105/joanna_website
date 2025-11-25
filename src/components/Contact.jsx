import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Contact() {
  return (
    <section className="bg-base-100 py-10 px-5 lg:px-12 md:px-7">
      <h1 className="text-center text-3xl mb-8 font-bold">
        <Typewriter
          words={["✨ 💬 Let's Connect"]}
          cursor={false}
          typeSpeed={40}
        />
      </h1>
      <p className="text-center text-lg text-gray-600 max-w-xl mx-auto">
        Have a role, opportunity, or idea you think I’d be a good fit for? Let’s
        connect — I’d love to hear from you!
      </p>

      <p className="text-center text-md text-gray-500 italic mt-4 mb-10">
        歡迎聯絡我 <br></br> 日本語でもご遠慮なくご連絡ください!
      </p>

      <div className="flex flex-col md:flex-row justify-evenly">
        <a
          href="https://www.linkedin.com/in/joanna-wang-a9b308296"
          target="_blank"
          className="hover:scale-110 transition text-xl"
        >
          <div className="flex flex-col items-center bg-gray-50 rounded-xl p-14 shadow-lg mb-8">
            <div className="px-2 py-1 border-2 rounded-2xl border-gray-200 bg-gray-200 w-fit mb-2">
              <FaLinkedin className="text-3xl text-blue-600" />
            </div>
            <h1 className="text-xl my-2">LinkedIn</h1>
            <h2 className="hover:text-blue-600">joanna-wang-a9b308296</h2>
            <i className="fa-solid fa-arrow-up-right-from-square mt-3 hover:text-blue-600"></i>
          </div>
        </a>

        <a
          href="mailto:joannare105@gmail.com"
          className="hover:scale-110 transition text-xl"
        >
          <div className="flex flex-col items-center bg-gray-50 rounded-xl p-14 shadow-lg mb-8">
            <div className="px-2 py-1 border-2 rounded-2xl border-gray-200 bg-gray-200 w-fit mb-2">
              <FaEnvelope className="text-3xl text-blue-600" />
            </div>
            <h1 className="text-xl my-2">Email</h1>
            <h2 className="hover:text-blue-600">joannare105@gmail.com</h2>
            <i class="fa-solid fa-arrow-up-right-from-square mt-3 hover:text-blue-600"></i>
          </div>
        </a>
      </div>
    </section>
  );
}
