import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom

export default function More_about_me() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGoHome = () => {
    navigate('/'); // Navigate to the main page (home)
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-2xl border border-gray-300">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900 border-b-4 border-blue-500 pb-4">More About Me</h1>

      {/* Personal Details Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-300 pb-2">Personal Details</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 space-y-4">
          <p className="text-lg text-gray-800"><strong className="text-blue-800">Age:</strong> <span className="font-semibold">[Your Age]</span></p>
          <p className="text-lg text-gray-800"><strong className="text-blue-800">Gender:</strong> <span className="font-semibold">[Your Gender]</span></p>
          <p className="text-lg text-gray-800"><strong className="text-blue-800">Phone:</strong> <span className="font-semibold">[Your Phone Number]</span></p>
          <p className="text-lg text-gray-800"><strong className="text-blue-800">Experience:</strong> <span className="font-semibold">[Years of Experience]</span> years</p>
          <p className="text-lg text-gray-800"><strong className="text-blue-800">Others:</strong> <span className="font-semibold">[Other Relevant Information]</span></p>
        </div>
      </section>

      {/* Background Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-300 pb-2">My Background</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          I am a dedicated and enthusiastic <span className="font-semibold text-blue-800">[Your Profession]</span> with a strong background in <span className="font-semibold text-blue-800">[Your Field or Industry]</span>. After earning my degree in <span className="font-semibold text-blue-800">[Your Degree]</span> from <span className="font-semibold text-blue-800">[Your University]</span>, I have spent the last <span className="font-semibold text-blue-800">[Number]</span> years working in various roles that have allowed me to hone my skills in <span className="font-semibold text-blue-800">[Specific Skills or Technologies]</span>.
        </p>
      </section>

      {/* Education Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-300 pb-2">Education</h2>
        <ul className="list-disc pl-5 text-lg text-gray-800 space-y-4">
          <li>
            <strong className="text-blue-800">[Degree]</strong> in <span className="font-semibold">[Field of Study]</span> - <span className="font-semibold text-blue-800">[University Name]</span> (<span className="font-semibold text-blue-800">[Year]</span>)
            <p className="mt-1 text-sm text-gray-600">Relevant coursework: <span className="font-semibold text-blue-800">[Coursework or Specialization]</span></p>
          </li>
          <li>
            <strong className="text-blue-800">[Degree]</strong> in <span className="font-semibold">[Field of Study]</span> - <span className="font-semibold text-blue-800">[University Name]</span> (<span className="font-semibold text-blue-800">[Year]</span>)
            <p className="mt-1 text-sm text-gray-600">Relevant coursework: <span className="font-semibold text-blue-800">[Coursework or Specialization]</span></p>
          </li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-300 pb-2">Professional Experience</h2>
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700">[Job Title]</h3>
            <p className="text-gray-800"><span className="font-semibold">[Company Name]</span> - <span className="font-semibold">[Location]</span> (<span className="font-semibold">[Year Started] - [Year Ended]</span>)</p>
            <ul className="list-disc pl-5 text-gray-800 mt-2 space-y-1">
              <li>Led <span className="font-semibold text-blue-800">[Project or Initiative]</span> resulting in <span className="font-semibold text-blue-800">[Achievement]</span>.</li>
              <li>Implemented <span className="font-semibold text-blue-800">[Process or Tool]</span> to improve <span className="font-semibold text-blue-800">[Specific Aspect]</span> by <span className="font-semibold text-blue-800">[Result]</span>.</li>
              <li>Collaborated with <span className="font-semibold text-blue-800">[Team or Department]</span> to achieve <span className="font-semibold text-blue-800">[Objective]</span>.</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700">[Job Title]</h3>
            <p className="text-gray-800"><span className="font-semibold">[Company Name]</span> - <span className="font-semibold">[Location]</span> (<span className="font-semibold">[Year Started] - [Year Ended]</span>)</p>
            <ul className="list-disc pl-5 text-gray-800 mt-2 space-y-1">
              <li>Managed <span className="font-semibold text-blue-800">[Task or Responsibility]</span> with a focus on <span className="font-semibold text-blue-800">[Outcome]</span>.</li>
              <li>Developed <span className="font-semibold text-blue-800">[Solution or Strategy]</span> to address <span className="font-semibold text-blue-800">[Problem or Challenge]</span>.</li>
              <li>Trained <span className="font-semibold text-blue-800">[Number or Group]</span> of <span className="font-semibold text-blue-800">[Employees/Team Members]</span> on <span className="font-semibold text-blue-800">[Skill or Knowledge]</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach and Philosophy */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-300 pb-2">My Approach and Philosophy</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          I believe in a <span className="font-semibold text-blue-800">collaborative and innovative approach</span> to problem-solving. My goal is to continuously learn and adapt, leveraging new technologies and methodologies to drive impactful results. I prioritize clear communication and teamwork, as I believe that great ideas often come from diverse perspectives and collective effort.
        </p>
      </section>

      {/* Hobbies and Interests */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-300 pb-2">Hobbies and Interests</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          Outside of my professional life, I am passionate about <span className="font-semibold text-blue-800">[Your Hobbies]</span>, including <span className="font-semibold text-blue-800">[Specific Hobby]</span> and <span className="font-semibold text-blue-800">[Specific Hobby]</span>. These activities not only provide a creative outlet but also help me maintain a balanced and fulfilling life.
        </p>
      </section>

      {/* Get in Touch */}
      <section className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-300 pb-2">Get in Touch</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          If you’d like to connect or learn more about my work, feel free to reach out via <a href="mailto:[Your Email Address]" className="text-blue-600 hover:underline">email</a> or connect with me on <a href="[Your LinkedIn Profile]" className="text-blue-600 hover:underline">LinkedIn</a>.
        </p>
      </section>

      {/* Back to Home Button */}
      <div className="text-center">
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
