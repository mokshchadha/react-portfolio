import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* About Me Section */}
        <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 text-sm">
              Passionate about all things tech, I'm a Full Stack Dev proficient
              in MERN/MEAN stacks and Flutter and{" "}
              <b className="blue_highlight">
                <a href="https://www.coursera.org/account/accomplishments/professional-cert/RI04BT1RM8MH"  rel="noopener noreferrer" target="_blank">
                  Certified IBM AI Engineer 
                </a>{" "}
              </b>
               With a background in{" "}
              <b className="red_highlight">CS from NIT Hamirpur</b>, Over{" "}
              <b>5+ years of startup experience</b> I thrive in <b>problem solving</b>
              and <b>getting things done.</b>
            </p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Angular
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Artificial Intelligence
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  GenAI
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Postgresql
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  MySQL
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Rust
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Golang
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  NextJs
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  BunJs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-2">
              <div className="border-l-2 border-gray-200 pl-4">
                <h3 className="font-semibold">Senior Subject Matter Expert</h3>
                <p className=" text-sm text-gray-500">
                   Pippin Title • 2023 - Present
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Joined as a Sr SME, Leading AI initiative to speed up
                  processing of Title search docs using GenAI along with
                  decoupling legacy architecture created and deployed payments
                  and mailing microservices successfully.
                </p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <h3 className="font-semibold">Software Engineer 2</h3>
                <p className="text-sm text-gray-500">
                 Source.one • 2019 - 2023
                </p>
                <p className="mt-1 text-sm  text-gray-600 mb-1">
                  Joined as an intern, now currently working as an SDE 2.
                  Source.one focuses on driving the B2B of our country through
                  easy tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
