import React from 'react';
import { 
  Database, 
  Server, 
  Code,
  Circle,
  Smartphone,
  Terminal,
  Cog,
  Globe,
  Hash,
  FileCode,
  BookOpen
} from 'lucide-react';

const SkillsSlider = () => {
  const skills = [
    { name: 'MongoDB', icon: <Database className="w-4 h-4" /> },
    { name: 'Node.js', icon: <Server className="w-4 h-4" /> },
    { name: 'React.js', icon: <Code className="w-4 h-4" /> },
    { name: 'Angular.js', icon: <Circle className="w-4 h-4" /> },
    { name: 'Flutter', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Dart', icon: <Terminal className="w-4 h-4" /> },
    { name: 'Rust', icon: <Cog className="w-4 h-4" /> },
    { name: 'Golang', icon: <Globe className="w-4 h-4" /> },
    { name: 'JavaScript', icon: <Hash className="w-4 h-4" /> },
    { name: 'TypeScript', icon: <FileCode className="w-4 h-4" /> },
    { name: 'PostgreSQL', icon: <BookOpen className="w-4 h-4" /> }
  ];

  // Duplicate the skills array to create the infinite scroll effect
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-4">
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-row items-center min-w-[120px] h-8 mx-2 px-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-blue-500 mr-2">
                {skill.icon}
              </div>
              <span className="text-xs font-medium text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SkillsSlider;