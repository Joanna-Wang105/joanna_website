import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const ProjectCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card w-full card-xl shadow-xl bg-gray-50 lg:max-w-full">
      <div className="card-body">
        <div className="flex flex-col">
          {/* Icon + Type */}
          <div className="flex items-center gap-2 mb-1">
            <i className={props.icon}></i>
            <span className="font-medium">{props.type}</span>
          </div>

          {/* Title */}
          <h1 className="card-title mb-1">{props.title}</h1>

          {/* Description */}
          <p className="mb-3">{props.description}</p>

          {/* Features */}
          <div className="flex flex-col gap-1">
            {props.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2">
                <i className="fa-solid fa-check text-green-500 mt-1.5"></i>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Tools */}
          <p className="mt-4">🛠️ {props.tools}</p>

          {/* GitHub Link */}
          {props.github && (
            <a
              href={props.github}
              className="text-blue-400 block pb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-link mt-3"></i> GitHub
            </a>
          )}
        </div>

        {/* Video Button */}
        {props.video && (
          <>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold px-5 py-3 rounded-lg shadow-lg transition transform hover:scale-105 mt-4"
            >
              <i className="fa-solid fa-play"></i> Watch Video
            </button>
            <p className="mt-2 text-sm text-gray-500">
              Note: This project was completed in collaboration with the
              industry partner. The source code is not publicly available due to
              confidentiality agreements.
            </p>
          </>
        )}

        {/* Modal */}
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.75)",
              zIndex: 40,
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: "900px",
              height: "auto",
              padding: "0",
              border: "none",
              borderRadius: "12px",
              overflow: "visible",
              background: "transparent",
            },
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-10 -right-5 z-50 bg-white text-gray-800 py-1 px-2 rounded-2xl hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-100 transition duration-200"
            aria-label="Close Video"
          >
            <i className="fa-solid fa-xmark text-sm"> Close</i>
          </button>

          {/* Video */}
          <video
            src={props.video}
            controls
            className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl"
          >
            Your browser does not support the video tag.
          </video>
        </Modal>
      </div>
    </div>
  );
};
