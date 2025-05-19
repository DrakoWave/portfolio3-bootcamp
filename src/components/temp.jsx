import React from "react";
export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-16">
        {/*Hero Section*/}
        <div id="About" className="  text-center space-y-8 mb-16">
          <h1 className="p-2 text-5xl font-bold bg-gradient-to-r from-red-600 via-amber-500 to-pink-500 bg-clip-text text-transparent">
            I'm Athul A S
          </h1>

          <p className="text-x1 text-gray-600 max-w-3xl mx-auto">
            A curious mind on a journey through the ever-evolving world of code
            and creative technology
          </p>
        </div>

        {/*Profile image*/}
        <div className="relative flex justify-center mb-16">
          <div className="absolute insert-0 bg-gradient-to-r from-red-600  via-amber-500 to-orange-500 rounded-full blur-lg opacity-20"></div>
          <img
            src="https://i.ytimg.com/vi/yT9YnRTCUB0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA2ZvWAAhUfRTBxLKaQlLxmsXrf5Q"
            alt="Profile Image"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>
        {/*professional bg*/}
        <div className="text-center bg-white shadow-md mb-16 p-6 rounded-md">
          <h1 className="text-5xl font-semibold mb-10 text-gray-700 p-2">
            My Journey
          </h1>
          <div className="space-y-6 text-left max-w-4xl mx-auto ">
            <p className="text-lg text-gray-600">
              "My journey began with curiosity—wondering how apps work and
              websites come to life. From tinkering with basic code to building
              real projects, I'm learning to shape ideas into digital
              experiences, one line at a time."
            </p>
          </div>
        </div>

        {/*Skill*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 bg-gradient-to-b from-red-600  via-amber-500 to-orange-500 bg-clip-text">
          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-3xl font-semibold mb-10 text-transparent">
              Mobile Development
            </h1>
            <p className="text-lg text-gray-600">
              Built intuitive Android apps with a focus on clean design and
              functionality.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-3xl font-semibold mb-10 text-transparent">
              Competitive Programming
            </h1>
            <p className="text-lg text-gray-600">
              Sharpened logic and problem-solving through algorithmic
              challenges.
            </p>
          </div>
          <div className="p-6  rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-3xl font-semibold mb-10 text-transparent">
              Web Development
            </h1>
            <p className="text-lg text-gray-600">
              Currently exploring the full stack—from layout to server logic.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-3xl font-semibold mb-10 text-transparent">
              Front-End Basics
            </h1>
            <p className="text-lg text-gray-600">
              Learning to craft responsive, user-friendly interfaces with HTML,
              CSS, and JavaScript.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-3xl font-semibold mb-10 text-transparent">
              Back-End Basics
            </h1>
            <p className="text-lg text-gray-600">
              Understanding how servers, databases, and APIs work together
              behind the scenes.
            </p>
          </div>
        </div>

        {/*Professional Interest*/}

        <div className=" p-8 shadow-lg mb-16 h-full">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8 ">
            Beyond Coding
          </h2>

          <div className=" bg-gradient-to-b from-red-600  via-amber-500 to-orange-500 bg-clip-text grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-15 m-auto">
            <div className="space-y-3 ">
              <h3 className="text-2xl text-transparent font-semibold">
                OpenSource Contribution
              </h3>
              <p className="text-lg text-gray-800">
                i am an active open source contributor
              </p>
            </div>
            <div className="space-y-3 ">
              <h3 className="text-2xl text-transparent font-semibold">
                Art & Aesthetics
              </h3>
              <p className="text-lg text-gray-800">
                Sketching, painting, and exploring visual creativity beyond the
                screen.
              </p>
            </div>
            <div className="space-y-3 ">
              <h3 className="text-2xl text-transparent font-semibold">
                Fitness & Focus
              </h3>
              <p className="text-lg text-gray-800">
                Staying active and mindful to keep both body and brain in
                balance.
              </p>
            </div>
            <div className="space-y-3 ">
              <h3 className="text-2xl text-transparent font-semibold">
                Craft & DIY
              </h3>
              <p className="text-lg text-gray-800">
                Hands-on with creativity—building, fixing, and experimenting
                with ideas.
              </p>
            </div>
          </div>
        </div>
        {/*call to action*/}
        <div className="bg-gradient-to-r from-red-600 via-amber-500 to-orange-500 py-12 px-5 text-white rounded-xl text-center">
          <div className="space-y-3 ">
            <h3 className="text-2xl text-white font-semibold mb-5">
              Let's Work Together
            </h3>
            <p className="text-xl text-white mx-auto">
              i am always ready to collaborate with other talented personals
            </p>

            <a
              href="#Contact"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-opacity-20 hover:text-white transition-color duration-300"
            >
              GetinTouch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
