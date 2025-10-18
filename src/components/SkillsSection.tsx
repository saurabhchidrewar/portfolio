"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Wrench, Star, Zap } from "lucide-react";

export default function SkillsSection() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: Code,
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50",
            textColor: "text-blue-600",
            skills: [
                { name: "React", level: 95, years: "3+" },
                { name: "Next.js", level: 90, years: "2+" },
                { name: "TypeScript", level: 88, years: "2+" },
                { name: "JavaScript", level: 92, years: "3+" },
                { name: "Tailwind CSS", level: 85, years: "2+" },
                { name: "HTML/CSS", level: 90, years: "4+" },
            ],
        },
        {
            title: "Backend Development",
            icon: Database,
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50",
            textColor: "text-green-600",
            skills: [
                { name: "Node.js", level: 90, years: "3+" },
                { name: "Express.js", level: 88, years: "3+" },
                { name: "Python", level: 85, years: "2+" },
                { name: "RESTful APIs", level: 92, years: "3+" },
                { name: "GraphQL", level: 80, years: "1+" },
                { name: "Microservices", level: 85, years: "2+" },
            ],
        },
        {
            title: "Database & Cloud",
            icon: Cloud,
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-50",
            textColor: "text-purple-600",
            skills: [
                { name: "MongoDB", level: 88, years: "2+" },
                { name: "PostgreSQL", level: 85, years: "2+" },
                { name: "AWS", level: 82, years: "2+" },
                { name: "Docker", level: 80, years: "2+" },
                { name: "Redis", level: 75, years: "1+" },
                { name: "Firebase", level: 78, years: "1+" },
            ],
        },
        {
            title: "Tools & Others",
            icon: Wrench,
            color: "from-orange-500 to-red-500",
            bgColor: "bg-orange-50",
            textColor: "text-orange-600",
            skills: [
                { name: "Git", level: 90, years: "4+" },
                { name: "Linux", level: 85, years: "3+" },
                { name: "Figma", level: 80, years: "2+" },
                { name: "Jest", level: 82, years: "2+" },
                { name: "Webpack", level: 75, years: "1+" },
                { name: "Agile/Scrum", level: 88, years: "3+" },
            ],
        },
    ];

    const topSkills = [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "TypeScript", level: 88, icon: "🔷" },
        { name: "AWS", level: 82, icon: "☁️" },
        { name: "MongoDB", level: 88, icon: "🍃" },
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                        className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                        Technical Skills
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A comprehensive overview of my technical skills and
                        experience levels
                    </p>
                </motion.div>

                {/* Top Skills */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Top Skills
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {topSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4 + index * 0.1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="text-4xl mb-2">
                                    {skill.icon}
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                    {skill.name}
                                </h4>
                                <div className="text-sm text-gray-600">
                                    {skill.level}%
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Categories */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            className="card p-8 space-y-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: categoryIndex * 0.2,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center space-x-3 mb-6">
                                <div
                                    className={`p-3 rounded-xl ${category.bgColor}`}
                                >
                                    <category.icon
                                        className={`w-6 h-6 ${category.textColor}`}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="space-y-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay:
                                                categoryIndex * 0.2 +
                                                skillIndex * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-gray-900 font-semibold">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    {skill.years}
                                                </span>
                                            </div>
                                            <span className="text-gray-600 font-medium">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        <div className="relative">
                                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                                <motion.div
                                                    className={`h-3 rounded-full bg-gradient-to-r ${category.color}`}
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width: `${skill.level}%`,
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        delay:
                                                            categoryIndex *
                                                                0.2 +
                                                            skillIndex * 0.1 +
                                                            0.3,
                                                        ease: "easeOut",
                                                    }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-slow"></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
                        <Zap className="w-5 h-5 text-indigo-600" />
                        <span className="text-gray-700 font-medium">
                            Continuously learning and adapting to new
                            technologies
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
