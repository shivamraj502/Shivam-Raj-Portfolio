import { useState } from "react";
import { FaCode, FaServer, FaPaintBrush } from "react-icons/fa";

function Skills() {
  const [open, setOpen] = useState(1);

  return (
    <section id="skills" className="py-28 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Skills
        </h2>

        <p className="text-center text-gray-500 mt-2">
          My Technical Level
        </p>

        <div className="mt-16 space-y-6">

          {/* Frontend */}

          <div className="border rounded-2xl overflow-hidden">

            <button
              onClick={() => setOpen(open === 1 ? 0 : 1)}
              className="w-full flex items-center gap-4 p-6"
            >
              <FaCode className="text-indigo-500 text-2xl" />

              <div className="text-left">
                <h3 className="font-semibold">
                  Frontend Developer
                </h3>

                <p className="text-sm text-gray-500">
                  React Developer
                </p>
              </div>
            </button>

            {open === 1 && (
              <div className="px-6 pb-6 space-y-5">

                <SkillBar name="HTML" value="90%" />
                <SkillBar name="CSS" value="85%" />
                <SkillBar name="JavaScript" value="80%" />
                <SkillBar name="React" value="75%" />

              </div>
            )}

          </div>

          {/* Backend */}

          <div className="border rounded-2xl overflow-hidden">

            <button
              onClick={() => setOpen(open === 2 ? 0 : 2)}
              className="w-full flex items-center gap-4 p-6"
            >
              <FaServer className="text-indigo-500 text-2xl" />

              <div className="text-left">
                <h3 className="font-semibold">
                  Backend Developer
                </h3>

                <p className="text-sm text-gray-500">
                  Server Side
                </p>
              </div>
            </button>

            {open === 2 && (
              <div className="px-6 pb-6 space-y-5">

                <SkillBar name="Node JS" value="70%" />
                <SkillBar name="Express JS" value="65%" />
                <SkillBar name="MongoDB" value="75%" />

              </div>
            )}

          </div>

          {/* Designer */}

          <div className="border rounded-2xl overflow-hidden">

            <button
              onClick={() => setOpen(open === 3 ? 0 : 3)}
              className="w-full flex items-center gap-4 p-6"
            >
              <FaPaintBrush className="text-indigo-500 text-2xl" />

              <div className="text-left">
                <h3 className="font-semibold">
                  UI Designer
                </h3>

                <p className="text-sm text-gray-500">
                  Web Design
                </p>
              </div>
            </button>

            {open === 3 && (
              <div className="px-6 pb-6 space-y-5">

                <SkillBar name="Figma" value="70%" />
                <SkillBar name="UI Design" value="80%" />

              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

function SkillBar({ name, value }) {
  return (
    
    <div>
      <div className="flex justify-between">
        <span>{name}</span>
        <span>{value}</span>
      </div>

      <div className="h-2 bg-gray-200 rounded-full mt-2">
        <div
          className="h-2 bg-indigo-500 rounded-full"
          style={{ width: value }}
        ></div>
      </div>
    </div>
  );
}

export default Skills;