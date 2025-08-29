import { useState } from "react";
import { cn } from "../lib/utils";

// Import icons from react-icons (install with: npm install react-icons)
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiVercel, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";



const skills = [
  // Frontend
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, category: "frontend" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, category: "frontend" },
  { name: "React", icon: <FaReact className="text-cyan-400" />, category: "frontend" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" />, category: "frontend" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, category: "backend" },
  { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, category: "backend" },

  // Tools
  { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" />, category: "tools" },
{ name: "VS Code", icon: <VscVscode className="text-blue-500" />, category: "tools" },


  { name: "Postman", icon: <SiPostman className="text-orange-400" />, category: "tools" },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center bg-card p-6 rounded-lg shadow-xs hover:shadow-md transition-transform hover:scale-105"
            >
              <div className="text-6xl mb-4">{skill.icon}</div>
              <p className="font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
