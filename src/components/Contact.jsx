import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-base-100 py-10 px-3 lg:px-12 md:px-4">
      <h1 className="text-center text-3xl mb-12">Let's Connect!</h1>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="flex flex-col items-center bg-gray-50 rounded-xl p-14 shadow-lg mb-8">
          <div className="px-2 py-1 border-2 rounded-2xl border-gray-200 bg-gray-200 w-fit mb-2">
            <FaLinkedin className="text-3xl text-blue-600" />
          </div>

          <h1 className="text-xl my-2">LinkedIn</h1>
          <a
            href="https://www.linkedin.com/in/joanna-wang-a9b308296"
            target="_blank"
            className="hover:text-blue-600 transition text-xl"
          >
            joanna-wang-a9b308296{" "}
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>

        <div className="flex flex-col items-center bg-gray-50 rounded-xl p-14 shadow-lg mb-8">
          <div className="px-2 py-1 border-2 rounded-2xl border-gray-200 bg-gray-200 w-fit mb-2">
            <FaEnvelope className="text-3xl text-blue-600" />
          </div>
          <h1 className="text-xl my-2">Email</h1>
          <a
            href="mailto:joannare105@gmail.com"
            className="hover:text-blue-600 transition text-xl"
          >
            joannare105@gmail.com{" "}
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
