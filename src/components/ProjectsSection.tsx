"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Star } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
    const projects = [
        {
            title: "PICT Cafeteria Billing System",
            description:
                "Collaborated in a team of 4 to design a software solution that helps in generating food item receipts of PICT Cafeteria. The software helps the owner analyse the number of food items sold on a particular day along with their frequency.",
            image: "https://images.unsplash.com/photo-1534078575607-d6c0daf63247?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            technologies: [
                "JavaScript",
                "ReactJS",
                "MySQL",
                "NodeJS",
                "ExpressJS",
            ],
            githubLink:
                "https://github.com/saurabhchidrewar/PICT-Cafeteria-Management",
            liveLink: "https://pict-canteen.herokuapp.com/",
            features: [
                "Real-time billing and receipt generation",
                "Sales analytics and reporting dashboard",
                "Food item frequency analysis",
                "Daily sales tracking",
                "User-friendly interface",
            ],
            impact: "Saved Rs. 12,000 per year",
            year: "2023",
            category: "Full Stack",
        },
        {
            title: "Polymers Trading Platform",
            description:
                "Developed an application enabling traders to purchase polymers online at Source.One. This platform significantly increased the daily active customer base and optimized backend performance.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            technologies: [
                "Python",
                "Node.js",
                "Express.js",
                "MongoDB",
                "React",
                "Flutter",
            ],
            githubLink: null,
            liveLink: null,
            features: [
                "Online polymer trading platform",
                "Optimized API routes for better performance",
                "MongoDB query optimization",
                "Acceptance testing suite",
                "Agile development methodology",
            ],
            impact: "25% increase in customer base",
            year: "2024",
            category: "E-Commerce",
        },
        {
            title: "Employee Tracking Mobile App",
            description:
                "Developed a mobile application using Flutter to track and monitor on-field employees, locations, and industry visits. Integrated with company database for seamless syncing of employee notes and updates.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2339&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            technologies: ["Flutter", "Node.js", "MongoDB", "JavaScript"],
            githubLink: null,
            liveLink: null,
            features: [
                "Real-time employee location tracking",
                "Industry visit monitoring",
                "Seamless database integration",
                "Optimized search functionality",
                "Mobile-first design",
            ],
            impact: "15% improvement in search speed",
            year: "2023",
            category: "Mobile App",
        },
    ];

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        Featured Work
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        My Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A showcase of my recent work and the impact I&apos;ve
                        made through technology
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group card card-hover overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Overlay content */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium">
                                        {project.category}
                                    </span>
                                    <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {project.year}
                                    </span>
                                </div>

                                {/* Action buttons */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.githubLink && (
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Github className="w-4 h-4" />
                                        </motion.a>
                                    )}
                                    {project.liveLink && (
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </motion.a>
                                    )}
                                </div>

                                {/* Impact badge */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-2 text-white">
                                        <Star className="w-4 h-4" />
                                        <span className="text-sm font-medium">
                                            {project.impact}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Key Features */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                        Key Features:
                                    </h4>
                                    <ul className="space-y-1">
                                        {project.features
                                            .slice(0, 3)
                                            .map((feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="flex items-start space-x-2 text-sm"
                                                >
                                                    <span className="text-indigo-600 mt-1">
                                                        •
                                                    </span>
                                                    <span className="text-gray-600">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        {project.features.length > 3 && (
                                            <li className="text-sm text-gray-500">
                                                +{project.features.length - 3}{" "}
                                                more features
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                        Technologies:
                                    </h4>
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies
                                            .slice(0, 4)
                                            .map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        {project.technologies.length > 4 && (
                                            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
                                                +
                                                {project.technologies.length -
                                                    4}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-2">
                                    {project.githubLink && (
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </motion.a>
                                    )}
                                    {project.liveLink && (
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        href="https://github.com/saurabhchidrewar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary text-lg px-8 py-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Projects on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
