"use client";

import { motion } from "framer-motion";
import {
    Calendar,
    MapPin,
    Building2,
    Award,
    Users,
    TrendingUp,
} from "lucide-react";

export default function ExperienceSection() {
    const experiences = [
        {
            title: "Software Development Engineer - 1",
            company: "Source.One",
            location: "Pune, India",
            period: "July '23 - Present",
            duration: "1.5+ years",
            description:
                "Developing innovative solutions that drive business growth and user engagement. Building scalable applications using Python, Node.js, React, and Flutter with expertise in MongoDB and machine learning.",
            achievements: [
                "Developed an application enabling traders to purchase polymers online, increasing daily active customer base by over 25%",
                "Designed efficient APIs to optimize backend routes, resulting in a 20% reduction in turnaround time",
                "Optimized MongoDB database queries to enhance overall performance",
                "Implemented an acceptance testing suite, reducing manual testing efforts by 40%",
                "Developed a Python ML model to forecast logistics expenses leveraging past data",
                "Utilized agile methodologies to improve project management and responsiveness",
            ],
            technologies: [
                "Python",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Flutter",
                "React",
            ],
            highlights: [
                {
                    icon: Users,
                    text: "25% increase in customer base",
                    color: "text-blue-600",
                },
                {
                    icon: TrendingUp,
                    text: "20% reduction in turnaround time",
                    color: "text-green-600",
                },
                {
                    icon: Award,
                    text: "40% time savings in testing",
                    color: "text-purple-600",
                },
            ],
        },
        {
            title: "Software Development Engineer Intern",
            company: "Source.One",
            location: "Pune, India",
            period: "January '23 - May '23",
            duration: "5 months",
            description:
                "Developed mobile applications using Flutter to track and monitor on-field employees, locations, and industry visits. Integrated app with company database for seamless syncing.",
            achievements: [
                "Developed a mobile application using Flutter to track and monitor on-field employees",
                "Integrated app with company database, ensuring seamless syncing of employee notes and updates",
                "Implemented optimized search functionality for locating potential clients, improving speed by over 15%",
                "Worked with Node.js and MongoDB for backend integration",
            ],
            technologies: ["Flutter", "Node.js", "MongoDB", "JavaScript"],
            highlights: [
                {
                    icon: TrendingUp,
                    text: "15% improvement in search speed",
                    color: "text-blue-600",
                },
                {
                    icon: Award,
                    text: "Mobile app development",
                    color: "text-green-600",
                },
                {
                    icon: Users,
                    text: "Employee tracking system",
                    color: "text-purple-600",
                },
            ],
        },
        {
            title: "Summer Intern",
            company: "Siemens",
            location: "Pune, India",
            period: "May '22 - July '22",
            duration: "3 months",
            description:
                "Worked on restructuring Teamcenter, product lifecycle management software. Designed guided navigation to help users navigate across with ease.",
            achievements: [
                "Worked on restructuring Teamcenter, product lifecycle management software",
                "Designed a guided navigation that helped users navigate across with ease",
                "Improved the feature searching efficacy of the users by over 20%",
                "Developed using ReactJS and ReactTour",
            ],
            technologies: ["ReactJS", "ReactTour", "JavaScript"],
            highlights: [
                {
                    icon: TrendingUp,
                    text: "20% improvement in search efficacy",
                    color: "text-blue-600",
                },
                {
                    icon: Award,
                    text: "Guided navigation design",
                    color: "text-green-600",
                },
                {
                    icon: Users,
                    text: "Teamcenter restructuring",
                    color: "text-purple-600",
                },
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
        >
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
                        className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                        Professional Journey
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Work Experience
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Building impactful solutions and growing as a software
                        engineer
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex items-center ${
                                    index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                                {/* Content */}
                                <div
                                    className={`ml-12 md:ml-0 md:w-1/2 ${
                                        index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                                    }`}
                                >
                                    <motion.div
                                        className="card p-8 space-y-6"
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Header */}
                                        <div className="space-y-4">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <h3 className="text-2xl font-bold text-gray-900">
                                                    {exp.title}
                                                </h3>
                                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                                                    {exp.duration}
                                                </span>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2 text-lg font-semibold text-gray-800">
                                                    <Building2 className="w-5 h-5 text-indigo-600" />
                                                    <span>{exp.company}</span>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                                                    <div className="flex items-center space-x-1">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>
                                                            {exp.location}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>
                                                            {exp.period}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            {exp.highlights.map(
                                                (highlight, highlightIndex) => (
                                                    <motion.div
                                                        key={highlightIndex}
                                                        className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                                                        initial={{
                                                            opacity: 0,
                                                            scale: 0.9,
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            scale: 1,
                                                        }}
                                                        transition={{
                                                            duration: 0.5,
                                                            delay:
                                                                0.3 +
                                                                highlightIndex *
                                                                    0.1,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                    >
                                                        <highlight.icon
                                                            className={`w-4 h-4 ${highlight.color}`}
                                                        />
                                                        <span className="text-sm font-medium text-gray-700">
                                                            {highlight.text}
                                                        </span>
                                                    </motion.div>
                                                )
                                            )}
                                        </div>

                                        {/* Achievements */}
                                        <div className="space-y-3">
                                            <h4 className="text-lg font-semibold text-gray-900">
                                                Key Achievements:
                                            </h4>
                                            <ul className="space-y-2">
                                                {exp.achievements.map(
                                                    (achievement, achIndex) => (
                                                        <motion.li
                                                            key={achIndex}
                                                            className="flex items-start space-x-3"
                                                            initial={{
                                                                opacity: 0,
                                                                x: -20,
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                x: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay:
                                                                    0.4 +
                                                                    achIndex *
                                                                        0.1,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                        >
                                                            <span className="text-indigo-600 mt-1">
                                                                •
                                                            </span>
                                                            <span className="text-gray-600">
                                                                {achievement}
                                                            </span>
                                                        </motion.li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div className="space-y-3">
                                            <h4 className="text-lg font-semibold text-gray-900">
                                                Technologies Used:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map(
                                                    (tech, techIndex) => (
                                                        <motion.span
                                                            key={techIndex}
                                                            className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0.8,
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                scale: 1,
                                                            }}
                                                            transition={{
                                                                duration: 0.3,
                                                                delay:
                                                                    0.5 +
                                                                    techIndex *
                                                                        0.05,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                            whileHover={{
                                                                scale: 1.05,
                                                            }}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
