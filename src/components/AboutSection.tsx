"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Briefcase,
    GraduationCap,
    Download,
    Code,
    Database,
    Cloud,
    Users,
} from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
    const infoItems = [
        { icon: MapPin, text: "Based in Pune, India", color: "text-blue-600" },
        {
            icon: Briefcase,
            text: "1.5+ years of experience",
            color: "text-green-600",
        },
        {
            icon: GraduationCap,
            text: "B.E. E&TC from PICT (CGPA: 9.3/10)",
            color: "text-purple-600",
        },
    ];

    const expertise = [
        {
            icon: Code,
            title: "Full Stack Development",
            description: "Python, Node.js, React, Flutter",
        },
        {
            icon: Database,
            title: "Database Management",
            description: "MongoDB, MySQL, PostgreSQL",
        },
        {
            icon: Cloud,
            title: "Machine Learning",
            description: "Python ML models, Data Analysis",
        },
        {
            icon: Users,
            title: "Agile Development",
            description: "Team collaboration, Testing automation",
        },
    ];

    return (
        <section
            id="about"
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
                        className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        About Me
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Get to know me
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        I&apos;m a passionate software engineer who loves
                        creating digital solutions that make a real impact
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Profile Image */}
                    <motion.div
                        className="relative order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
                            <div
                                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-float"
                                style={{ animationDelay: "1s" }}
                            ></div>

                            {/* Main image */}
                            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://drive.usercontent.google.com/download?id=1Nah3Asv8otkBXhSMO50cMRmlkYH0kT1s"
                                    alt="Saurabh Chidrewar"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Floating info card */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Available for work
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* About Content */}
                    <motion.div
                        className="space-y-8 order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                Software Development Engineer &
                                <span className="block gradient-text bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Full Stack Developer
                                </span>
                            </h3>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                I am a Software Development Engineer with 1.5+
                                years of experience at Source.One, building
                                innovative solutions that drive business growth.
                                I specialize in Python, Node.js, React, and
                                Flutter development, with expertise in MongoDB
                                and machine learning. I have increased customer
                                base by 25% and reduced turnaround time by 20%
                                through optimized solutions. Awarded Outstanding
                                Contributor 2025.
                            </p>
                        </div>

                        {/* Info items */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {infoItems.map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.6 + index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div
                                        className={`p-2 rounded-lg bg-gray-50 ${item.color}`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700 font-medium">
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Expertise areas */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-gray-900">
                                My Expertise
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {expertise.map((area, index) => (
                                    <motion.div
                                        key={area.title}
                                        className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.8 + index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                    >
                                        <div className="flex items-start space-x-3">
                                            <div className="p-2 bg-indigo-100 rounded-lg">
                                                <area.icon className="w-5 h-5 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-1">
                                                    {area.title}
                                                </h5>
                                                <p className="text-sm text-gray-600">
                                                    {area.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href="https://drive.google.com/file/d/1e5DhVFZm2CVd5C04JyzRF1PZ5pJ9qVdq/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-3 btn btn-primary text-lg px-8 py-4 shadow-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download className="w-5 h-5" />
                            <span>Download CV</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
