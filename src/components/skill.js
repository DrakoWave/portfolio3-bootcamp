import { useState } from "react";
export default function Skill() {
  const [skill, setSkill] = useState("technical");
  const skills = {
    technical: [
      { name: "Javascript", prof: 90 },
      { name: "Kotlin", prof: 75 },
      { name: "Python", prof: 60 },
      { name: "HTML", prof: 55 },
    ],
    soft: [
      { name: "Communication", prof: 90 },
      { name: "Leadership", prof: 79 },
      { name: "Team Player", prof: 60 },
      { name: "Time Management", prof: 55 },
    ],
  };

  const getproflabel = (prof) => {
    if (prof >= 90) return "Expert";
    if (prof >= 75) return "Advanced";
    if (prof >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="p-8 min-h-screen w-full bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="Skills" className="text-center mb-12">
          <h2 className="pb-2 text-4xl font-bold bg-gradient-to-r from-red-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            comprehensve overview of my skills
          </p>
        </div>
        {/*Toggle button*/}
        <div className="flex justify-center mb-1 space-x-4">
          <button
            onClick={() => setSkill("technical")}
            className={`px-6 py-3 rounded-lg text-semibold text-lg transition-all duration-200 ${
              skill == "technical"
                ? "bg-gradient-to-r from-red-600 via-amber-500 to-orange-500 text-white shadow-lg"
                : "text-gray-600 hover:text-red-600 "
            }`}
          >
            Technical Skill
          </button>
          <button
            onClick={() => setSkill("soft")}
            className={`px-6 py-3 rounded-lg text-semibold text-lg transition-all duration-200 ${
              skill == "soft"
                ? "bg-gradient-to-r from-red-600 via-amber-500 to-orange-500 text-white shadow-lg"
                : "text-gray-600 hover:text-red-600 "
            }`}
          >
            Soft Skill
          </button>
        </div>

        {/*Map to show output*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {skills[skill].map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4  mb-4">
                <h3 className="text-xl font-semibold text-gray-600">
                  {skill.name}
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">
                    {getproflabel(skill.prof)}
                  </span>
                  <span className="text-sm font-semibold text-red-800">
                    {skill.prof}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-orange-500 rounded-full transition-all duration-200"
                    style={{ width: `${skill.prof}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
