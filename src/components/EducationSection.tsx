"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import educationData from "@/data/education.json";
import type { Education } from "@/types";

export default function EducationSection() {
    const education = educationData as Education[];

    return (
        <Section id="education" background="default">
            <Container size="lg">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 hover:shadow-lg transition-shadow">
                        <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                        Academic Background
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Education
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        My academic journey and achievements
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100">
                                <CardContent className="p-0">
                                    <div className="grid lg:grid-cols-3 gap-0">
                                        {/* Left Section - Main Info */}
                                        <div className="lg:col-span-2 p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                                            <div className="flex items-start space-x-4 mb-6">
                                                <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                                                    <GraduationCap className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                        {edu.degree}
                                                    </h3>
                                                    <p className="text-lg text-gray-700 font-medium">
                                                        {edu.field}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-3 mb-6">
                                                <div className="flex items-center space-x-2 text-gray-700">
                                                    <Award className="w-5 h-5 text-blue-600" />
                                                    <span className="font-semibold">
                                                        {edu.institution}
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-4 text-gray-600">
                                                    <div className="flex items-center space-x-2">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>
                                                            {edu.location}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>
                                                            {edu.period}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* CGPA Highlight */}
                                            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                                                <Star className="w-5 h-5 text-yellow-300 fill-current" />
                                                <span className="text-white font-bold text-lg">
                                                    CGPA: {edu.cgpa}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Right Section - Achievements */}
                                        <div className="p-8 bg-white border-l-2 border-gray-100">
                                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                                <Award className="w-5 h-5 mr-2 text-blue-600" />
                                                Key Achievements
                                            </h4>
                                            <ul className="space-y-3">
                                                {edu.achievements.map(
                                                    (achievement, achIndex) => (
                                                        <motion.li
                                                            key={achIndex}
                                                            className="flex items-start space-x-2"
                                                            initial={{
                                                                opacity: 0,
                                                                x: 20,
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                x: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay:
                                                                    0.3 +
                                                                    achIndex *
                                                                        0.1,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                        >
                                                            <span className="text-blue-600 mt-1 text-lg">
                                                                •
                                                            </span>
                                                            <span className="text-gray-700 text-sm leading-relaxed">
                                                                {achievement}
                                                            </span>
                                                        </motion.li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
