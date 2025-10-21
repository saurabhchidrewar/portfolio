"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import personalData from "@/data/personal.json";
import type { PersonalInfo } from "@/types";

export default function HeaderSection() {
    const personal = personalData as PersonalInfo;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            {/* Floating orbs */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <Container size="lg" className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 pt-20 sm:pt-24">
                    {/* Floating badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium">
                            <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
                            {personal.availability}
                            <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        </div>
                    </motion.div>

                    {/* Main heading */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                            <span className="block mb-2">Hi, I&apos;m</span>
                            <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                {personal.name}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div
                        className="space-y-4 max-w-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90">
                            {personal.title}
                        </h2>
                        <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                            {personal.tagline}
                        </p>
                    </motion.div>

                    {/* Stats highlights */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {personal.highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                                    {highlight.split(" ")[0]}
                                </div>
                                <div className="text-sm text-white/60">
                                    {highlight.split(" ").slice(1).join(" ")}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.button
                            type="button"
                            className="group px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-2xl shadow-blue-500/50 transition-all duration-300 rounded-lg font-medium flex items-center justify-center cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                document
                                    .getElementById("projects")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <motion.button
                            type="button"
                            className="px-8 py-6 text-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-lg font-medium flex items-center justify-center cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(personal.resumeUrl, "_blank");
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download className="mr-2 w-5 h-5" />
                            Download CV
                        </motion.button>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-8 right-8 sm:right-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <motion.div
                            className="flex flex-col items-center space-y-2 text-white/40 cursor-pointer hover:text-white/60 transition-colors"
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            onClick={() => {
                                document
                                    .getElementById("about")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <span className="text-xs font-medium uppercase tracking-wider">
                                Scroll
                            </span>
                            <ChevronDown className="w-5 h-5" />
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
