"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code, Database, Globe, Zap } from "lucide-react";

export default function HeaderSection() {
    const skills = [
        { icon: Code, text: "Python" },
        { icon: Database, text: "MongoDB" },
        { icon: Globe, text: "React" },
        { icon: Zap, text: "Flutter" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                {/* Gradient orbs */}
                {Array.from({ length: 6 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute rounded-full opacity-20"
                        style={{
                            width: Math.random() * 300 + 100,
                            height: Math.random() * 300 + 100,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `linear-gradient(135deg, ${
                                index % 2 === 0 ? "#6366f1" : "#8b5cf6"
                            }, ${index % 2 === 0 ? "#8b5cf6" : "#a855f7"})`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 8 + index * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            <span className="block">Hi, I&apos;m</span>
                            <span className="block gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Saurabh Chidrewar
                            </span>
                        </h1>
                    </motion.div>

                    {/* Role and description */}
                    <motion.div
                        className="space-y-6 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90">
                            Software Development Engineer
                        </h2>

                        <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                            I develop innovative solutions that drive business
                            growth and user engagement. With expertise in
                            Python, Node.js, React, and Flutter, I create
                            scalable applications that have increased customer
                            base by 25% and reduced turnaround time by 20%.
                            Awarded Outstanding Contributor 2025 at Source.One.
                        </p>
                    </motion.div>

                    {/* Skills badges */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.text}
                                className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 hover:bg-white/20 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.6 + index * 0.1,
                                }}
                            >
                                <skill.icon className="w-4 h-4" />
                                <span className="text-sm font-medium">
                                    {skill.text}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        className="flex flex-row justify-center items-center pt-16 mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <motion.a
                            href="#projects"
                            className="btn btn-primary text-lg px-8 py-4 shadow-2xl mr-12"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn btn-secondary text-lg px-8 py-4 ml-12"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <motion.div
                    className="flex flex-col items-center space-y-2 text-white/60"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <span className="text-sm font-medium">
                        Scroll to explore
                    </span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div> */}
        </section>
    );
}
