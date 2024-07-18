import React from 'react';

// Define your services with distinct background colors and text colors
const services = [
  {
    title: 'Custom Web Development',
    description: 'Building tailor-made websites and web applications to meet specific business needs.',
    color: 'bg-blue-200',
    textColor: 'text-blue-800',
  },
  {
    title: 'API Integration',
    description: 'Integrating third-party APIs to enhance functionality and improve data connectivity.',
    color: 'bg-green-200',
    textColor: 'text-green-800',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile applications for iOS and Android with a focus on user experience.',
    color: 'bg-yellow-200',
    textColor: 'text-yellow-800',
  },
  {
    title: 'Software Architecture Design',
    description: 'Designing scalable and maintainable software architectures to support business growth.',
    color: 'bg-purple-200',
    textColor: 'text-purple-800',
  },
  {
    title: 'Cloud Solutions',
    description: 'Implementing cloud-based solutions for scalable infrastructure and cost efficiency.',
    color: 'bg-indigo-200',
    textColor: 'text-indigo-800',
  },
  {
    title: 'DevOps Services',
    description: 'Automating and streamlining development and operations processes for faster delivery and improved reliability.',
    color: 'bg-pink-200',
    textColor: 'text-pink-800',
  },
  {
    title: 'Technical Consulting',
    description: 'Providing expert advice on technology choices and software development best practices.',
    color: 'bg-red-200',
    textColor: 'text-red-800',
  },
  {
    title: 'Graphics Design',
    description: 'Creating visually appealing graphics and artworks for digital and print media.',
    color: 'bg-orange-200',
    textColor: 'text-orange-800',
  },
  {
    title: 'Website Design',
    description: 'Designing engaging and user-friendly websites that enhance brand presence and user experience.',
    color: 'bg-teal-200',
    textColor: 'text-teal-800',
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Explore Our Services</h1>
        <p className="text-lg text-gray-600">
          Discover how we can help your business grow with our range of specialized services.
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`border border-gray-200 rounded-lg shadow-lg p-6 ${service.color} ${service.textColor} transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl`}
          >
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
