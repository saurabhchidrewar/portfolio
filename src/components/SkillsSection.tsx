"use client";

import { motion } from "framer-motion";
import {
    Code,
    Database,
    Cloud,
    Wrench,
    Sparkles,
    Layers,
    Terminal,
    Package,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";

export default function SkillsSection() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: Code,
            color: "from-blue-500 to-cyan-500",
            skills: [
                "Python",
                "JavaScript",
                "TypeScript",
                "C++",
                "Java",
                "Go",
                "Dart",
            ],
        },
        {
            title: "Frontend Development",
            icon: Layers,
            color: "from-purple-500 to-pink-500",
            skills: [
                "React",
                "Next.js",
                "Flutter",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Material-UI",
            ],
        },
        {
            title: "Backend Development",
            icon: Terminal,
            color: "from-green-500 to-emerald-500",
            skills: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "GraphQL",
                "Microservices",
                "WebSockets",
            ],
        },
        {
            title: "Databases",
            icon: Database,
            color: "from-orange-500 to-red-500",
            skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Redis"],
        },
        {
            title: "Cloud & DevOps",
            icon: Cloud,
            color: "from-indigo-500 to-purple-500",
            skills: [
                "AWS",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "GitHub Actions",
                "Heroku",
            ],
        },
        {
            title: "Data Engineering & ML",
            icon: Package,
            color: "from-pink-500 to-rose-500",
            skills: [
                "Apache Kafka",
                "Apache Spark",
                "Apache Nifi",
                "Pandas",
                "NumPy",
                "Scikit-learn",
                "TensorFlow",
                "PyTorch",
            ],
        },
        {
            title: "Tools & Technologies",
            icon: Wrench,
            color: "from-yellow-500 to-orange-500",
            skills: [
                "Git",
                "GitHub",
                "Postman",
                "VS Code",
                "Agile/Scrum",
                "Jira",
                "Testing (Jest, Pytest)",
            ],
        },
    ];

    return (
        <Section id="skills" background="default">
            <Container size="lg">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 hover:shadow-lg transition-shadow">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Technical Skills
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Skills & Technologies
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive toolkit of technologies and frameworks I
                        work with
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: categoryIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 bg-gradient-to-br from-white to-gray-50">
                                <CardContent className="p-6">
                                    {/* Category Header */}
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div
                                            className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg`}
                                        >
                                            <category.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Skills Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map(
                                            (skill, skillIndex) => (
                                                <motion.div
                                                    key={skillIndex}
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
                                                            categoryIndex *
                                                                0.1 +
                                                            skillIndex * 0.05,
                                                    }}
                                                    viewport={{ once: true }}
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    <Badge
                                                        variant="secondary"
                                                        className="px-3 py-1.5 text-sm font-medium bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-default"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                </motion.div>
                                            )
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Card className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-100">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-900 font-semibold text-lg">
                                Driving technical excellence through innovative
                                solutions
                            </span>
                        </div>
                    </Card>
                </motion.div>
            </Container>
        </Section>
    );
}
