import React from 'react';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Building tailor-made websites and web applications to meet specific business needs.',
  },
  {
    title: 'API Integration',
    description: 'Integrating third-party APIs to enhance functionality and improve data connectivity.',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile applications for iOS and Android with a focus on user experience.',
  },
  {
    title: 'Software Architecture Design',
    description: 'Designing scalable and maintainable software architectures to support business growth.',
  },
  {
    title: 'Cloud Solutions',
    description: 'Implementing cloud-based solutions for scalable infrastructure and cost efficiency.',
  },
  {
    title: 'DevOps Services',
    description: 'Automating and streamlining development and operations processes for faster delivery and improved reliability.',
  },
  {
    title: 'Technical Consulting',
    description: 'Providing expert advice on technology choices and software development best practices.',
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">
          Here are some of the software engineering services I offer to help your business succeed.
        </p>
      </header>
      <section className="flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-sm w-full"
          >
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
