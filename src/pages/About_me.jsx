import React from 'react';

export default function About_me() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      <p className="text-lg mb-6 leading-relaxed">
        Hi, I'm <span className="font-semibold">[Your Name]</span>, a passionate <span className="font-semibold">[Your Profession or Title]</span> based in <span className="font-semibold">[Your Location]</span>. With a background in <span className="font-semibold">[Your Field or Major Skill]</span>, I specialize in creating <span className="font-semibold">[describe what you do]</span>.
      </p>
      <p className="text-lg mb-6 leading-relaxed">
        I graduated from <span className="font-semibold">[Your University or Institution]</span> with a degree in <span className="font-semibold">[Your Degree]</span>. Over the past <span className="font-semibold">[number]</span> years, I’ve worked on various projects involving <span className="font-semibold">[mention some key skills or technologies you’ve used]</span>. My expertise includes <span className="font-semibold">[list a few key skills or technologies]</span>.
      </p>
      <p className="text-lg mb-6 leading-relaxed">
        Outside of work, I enjoy <span className="font-semibold">[list some hobbies or interests]</span>. I’m always eager to learn new things and take on new challenges.
      </p>
      <p className="text-lg text-center">
        Feel free to reach out to me at <span className="font-semibold">[Your Email Address]</span> or connect with me on <span className="font-semibold">[Your LinkedIn Profile or other social media]</span>.
      </p>
    </div>
  );
}
