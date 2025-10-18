'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'PICT Cafeteria Billing System',
      description: 'Built a software solution that helps in generating food item receipts of PICT College Cafeteria. The software helps the owner analyse the number of food items sold on a particular day along with their frequency. The cafeteria owner saved Rs. 12,000 per year as a result.',
      image: 'https://images.unsplash.com/photo-1534078575607-d6c0daf63247?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['JavaScript', 'ReactJS', 'MySQL', 'TailwindCSS', 'NodeJS', 'ExpressJS', 'MongoDB'],
      githubLink: 'https://github.com/saurabhchidrewar/PICT-Cafeteria-Management',
      liveLink: null,
      features: [
        'Real-time billing and receipt generation',
        'Sales analytics and reporting dashboard',
        'Inventory management system',
        'User authentication and role-based access',
        'Mobile-responsive design'
      ]
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with advanced features including payment integration, order management, and admin dashboard. Built with modern technologies and deployed on AWS.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma', 'AWS'],
      githubLink: 'https://github.com/saurabhchidrewar/ecommerce-platform',
      liveLink: 'https://ecommerce-demo.vercel.app',
      features: [
        'Secure payment processing with Stripe',
        'Real-time inventory management',
        'Advanced search and filtering',
        'Order tracking and notifications',
        'Admin dashboard with analytics'
      ]
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities. Built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2339&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux', 'Material-UI'],
      githubLink: 'https://github.com/saurabhchidrewar/task-manager',
      liveLink: 'https://taskmanager-demo.netlify.app',
      features: [
        'Real-time collaboration',
        'Drag-and-drop task management',
        'Team and project organization',
        'Progress tracking and reporting',
        'Mobile app integration'
      ]
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
            Projects
          </h2>
          <p className="text-xl text-gray-600">
            Some of my recent work
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 text-gray-800 p-3 rounded-full hover:bg-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-6 h-6" />
                        </motion.a>
                      )}
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 text-gray-800 p-3 rounded-full hover:bg-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-6 h-6" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <span className="text-[#6C63FF] mt-1">•</span>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#6C63FF]/10 text-[#6C63FF] rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-[#6C63FF] text-white px-4 py-2 rounded-lg hover:bg-[#5A52E5] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
