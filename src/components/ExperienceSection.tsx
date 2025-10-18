'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Source.One',
      location: 'Pune, India',
      period: '2022 - Present',
      description: 'Developing scalable web applications and microservices using React, Node.js, and cloud technologies. Leading multiple projects and mentoring junior developers.',
      achievements: [
        'Led development of 5+ web applications serving 10,000+ users',
        'Implemented machine learning solutions for freight cost optimization',
        'Reduced application load time by 40% through performance optimization',
        'Mentored 3 junior developers and conducted technical training sessions'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker']
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Pune, India',
      period: '2021 - 2022',
      description: 'Worked on building responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Developed 3 full-stack web applications from scratch',
        'Created RESTful APIs handling 1M+ requests per day',
        'Implemented automated testing reducing bugs by 60%',
        'Contributed to open-source projects with 100+ GitHub stars'
      ],
      technologies: ['JavaScript', 'React', 'Express.js', 'PostgreSQL', 'Git']
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600">
            My professional journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-2">
                      <span className="text-[#6C63FF] mt-1">•</span>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#6C63FF]/10 text-[#6C63FF] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
