"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    Home,
    User,
    Briefcase,
    Code,
    FolderOpen,
    Award,
    Mail,
} from "lucide-react";

interface NavigationProps {
    isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(0);

    const navItems = [
        { label: "Home", index: 0, icon: Home, href: "#home" },
        { label: "About", index: 1, icon: User, href: "#about" },
        { label: "Experience", index: 2, icon: Briefcase, href: "#experience" },
        { label: "Skills", index: 3, icon: Code, href: "#skills" },
        { label: "Projects", index: 4, icon: FolderOpen, href: "#projects" },
        { label: "Awards", index: 5, icon: Award, href: "#awards" },
        { label: "Contact", index: 6, icon: Mail, href: "#contact" },
    ];

    const scrollToSection = (index: number) => {
        const sections = [
            "home",
            "about",
            "experience",
            "skills",
            "projects",
            "awards",
            "contact",
        ];

        const targetSection = document.getElementById(sections[index]);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) =>
                document.getElementById(item.href.substring(1))
            );
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i] && sections[i].offsetTop <= scrollPosition) {
                    setActiveSection(i);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50"
                        : "bg-transparent"
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${
                                    isScrolled
                                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                                        : "bg-white/20 backdrop-blur-sm text-white border border-white/30"
                                }`}
                            >
                                SC
                            </div>
                            {isScrolled && (
                                <span className="hidden sm:block text-xl font-bold text-gray-800">
                                    Saurabh
                                </span>
                            )}
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.index)}
                                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                        activeSection === item.index
                                            ? isScrolled
                                                ? "text-indigo-600 bg-indigo-50"
                                                : "text-white bg-white/20"
                                            : isScrolled
                                            ? "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                    {activeSection === item.index && (
                                        <motion.div
                                            className={`absolute bottom-0 left-1/2 w-1 h-1 rounded-full ${
                                                isScrolled
                                                    ? "bg-indigo-600"
                                                    : "bg-white"
                                            }`}
                                            layoutId="activeIndicator"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="lg:hidden p-2 rounded-xl transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                color: isScrolled ? "#6366f1" : "white",
                                backgroundColor: isScrolled
                                    ? "#f3f4f6"
                                    : "rgba(255,255,255,0.1)",
                            }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            className="fixed top-20 left-4 right-4 z-50 bg-white rounded-2xl shadow-2xl p-6 lg:hidden"
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="space-y-2">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.label}
                                        onClick={() =>
                                            scrollToSection(item.index)
                                        }
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                                            activeSection === item.index
                                                ? "bg-indigo-50 text-indigo-600"
                                                : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                                        }`}
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span className="font-medium">
                                            {item.label}
                                        </span>
                                        {activeSection === item.index && (
                                            <motion.div
                                                className="w-2 h-2 bg-indigo-600 rounded-full ml-auto"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
