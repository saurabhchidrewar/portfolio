"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Wrench, Sparkles } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                {/* Floating particles */}
                {Array.from({ length: 20 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}

                {/* Gradient orbs */}
                {Array.from({ length: 3 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute rounded-full opacity-10"
                        style={{
                            width: 200 + index * 100,
                            height: 200 + index * 100,
                            left: `${20 + index * 30}%`,
                            top: `${10 + index * 20}%`,
                            background: `linear-gradient(135deg, ${
                                index % 2 === 0 ? "#6366f1" : "#8b5cf6"
                            }, ${index % 2 === 0 ? "#8b5cf6" : "#a855f7"})`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 8 + index * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Icon with animation */}
                    <motion.div
                        className="flex justify-center mb-8"
                        animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="relative">
                            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl">
                                <Wrench className="w-12 h-12 text-white" />
                            </div>
                            <motion.div
                                className="absolute -top-2 -right-2"
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <Sparkles className="w-6 h-6 text-yellow-400" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="block">Website Under Renovation</span>
                        <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Renovation
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl sm:text-2xl text-white/80 mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Bringing you something amazing soon!
                    </motion.p>

                    {/* Contact cards */}
                    <motion.div
                        className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {/* Phone */}
                        <motion.a
                            href="tel:+917588114817"
                            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-white/60 text-sm">
                                        Call me
                                    </p>
                                    <p className="text-white font-semibold">
                                        +91 7588114817
                                    </p>
                                </div>
                            </div>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            href="mailto:saurabhchidrewar5@gmail.com"
                            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-white/60 text-sm">
                                        Email me
                                    </p>
                                    <p className="text-white font-semibold text-sm">
                                        saurabhchidrewar5@gmail.com
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
