"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeaderSection from "@/components/HeaderSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="relative min-h-screen">
            {/* Animated background shapes */}
            {Array.from({ length: 5 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute w-72 h-72 rounded-full opacity-10"
                    style={{
                        left: index * 200,
                        top: index * 100,
                        background: "linear-gradient(135deg, #6C63FF, #4F46E5)",
                    }}
                    animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                        duration: 3 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Navigation */}
            <Navigation isScrolled={isScrolled} />

            {/* Main content */}
            <div className="relative z-10">
                <section id="home">
                    <HeaderSection />
                </section>
                <AboutSection />
                <ExperienceSection />
                <SkillsSection />
                <ProjectsSection />
                <AwardsSection />
                <ContactSection />
            </div>
        </main>
    );
}
