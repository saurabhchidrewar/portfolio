"use client";

import { useState, useEffect } from "react";
import HeaderSection from "@/components/HeaderSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
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
        <main className="relative min-h-screen bg-white">
            {/* Navigation */}
            <Navigation isScrolled={isScrolled} />

            {/* Main content */}
            <div className="relative">
                <section id="home">
                    <HeaderSection />
                </section>
                <AboutSection />
                <ExperienceSection />
                <EducationSection />
                <SkillsSection />
                <ProjectsSection />
                <AwardsSection />
                <ContactSection />
            </div>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-white/60">
                        © {new Date().getFullYear()} Saurabh Chidrewar. All
                        rights reserved.
                    </p>
                    <p className="text-white/40 text-sm mt-2">
                        Built with Next.js, TypeScript, and Tailwind CSS
                    </p>
                </div>
            </footer>
        </main>
    );
}
