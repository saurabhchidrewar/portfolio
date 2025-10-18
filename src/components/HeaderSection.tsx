"use client";

import { motion } from "framer-motion";

export default function HeaderSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] to-[#0D47A1]" />

            {/* Animated background shapes */}
            {Array.from({ length: 5 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute w-48 h-48 rounded-full bg-white/5"
                    style={{
                        left: index * 100,
                        top: index * 100,
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                        duration: 3 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Hi, I&apos;m Saurabh 👋
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-4xl font-medium text-white/90 mb-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Full Stack Software Engineer
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    I build exceptional digital experiences that make an impact.
                    With expertise in both frontend and backend development, I
                    create seamless, scalable solutions that solve real-world
                    problems.
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <div className="w-10 h-16 border-2 border-white/30 rounded-full flex justify-center">
                    <motion.div
                        className="w-2 h-2 bg-white rounded-full mt-2"
                        animate={{
                            y: [0, 20, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
