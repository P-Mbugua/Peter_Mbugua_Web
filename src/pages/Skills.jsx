import React, { useEffect, useRef } from 'react';

// Sample data for skills
const technicalSkillsData = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'CSS', level: 80 },
  { name: 'HTML', level: 75 },
  { name: 'Node.js', level: 70 }
];

const softSkillsData = [
  { name: 'Effective Communication', description: 'Ability to convey ideas clearly and effectively.' },
  { name: 'Problem Solving', description: 'Skilled at identifying and resolving issues efficiently.' },
  { name: 'Team Collaboration', description: 'Experience in working effectively within teams.' },
  { name: 'Time Management', description: 'Ability to manage time and prioritize tasks effectively.' }
];

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.setProperty('--skill-level', `${ref.dataset.level}%`);
        ref.classList.add('animate-bar');
        // Set final width explicitly after animation
        const level = ref.dataset.level;
        ref.querySelector('.skill-fill').style.width = `${level}`;
      }
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-50 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-4 text-shadow-lg">Skills & Expertise</h2>
          <p className="text-lg font-light mb-8">
            Here is a summary of my skills and expertise. I have experience with a variety of technologies and tools,
            and I am continuously learning and improving. Below you will find some key areas of my technical skillset
            and soft skills.
          </p>
        </div>
      </header>

      {/* Technical Skills Cards Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalSkillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="flex justify-between mb-4">
                <span className="text-gray-700 font-medium text-xl">{skill.name}</span>
                <span className="text-gray-500 text-lg">{skill.level}%</span>
              </div>
              <div
                ref={(el) => skillRefs.current.push(el)}
                data-level={skill.level}
                className="relative h-4 bg-gray-300 rounded overflow-hidden"
              >
                <div className="skill-fill absolute top-0 left-0 h-full bg-blue-500 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills Cards Section */}
      <div>
        <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Soft Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {softSkillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{skill.name}</h4>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact or Further Information */}
      <div className="mt-12 text-center">
        <p className="text-gray-700 text-lg">
          I’m excited to connect and explore potential opportunities. Whether you’re interested in discussing my skills, 
          collaborating on a project, or just want to chat about tech, feel free to 
          <a href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold ml-1">get in touch</a>.
        </p>
      </div>
    </div>
  );
};

export default Skills;
