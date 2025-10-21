"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Briefcase,
    GraduationCap,
    Download,
    Code2,
    Database,
    Cpu,
    Users,
    Mail,
    Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import personalData from "@/data/personal.json";
import educationData from "@/data/education.json";
import type { PersonalInfo, Education } from "@/types";

export default function AboutSection() {
    const personal = personalData as PersonalInfo;
    const education = educationData as Education[];

    const infoItems = [
        {
            icon: MapPin,
            text: personal.location,
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Briefcase,
            text: personal.highlights[0],
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: GraduationCap,
            text: `${education[0].degree} (CGPA: ${education[0].cgpa})`,
            color: "from-purple-500 to-pink-500",
        },
    ];

    const expertise = [
        {
            icon: Code2,
            title: "Full Stack Development",
            description:
                "Python, Javascript, Typescript, Node.js, React, Next.js, Flutter, C++, Apache Kafka, Apache Spark, Apache Nifi",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Database,
            title: "Database Management",
            description: "MongoDB, MySQL, PostgreSQL, SQLite",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: Cpu,
            title: "Machine Learning",
            description:
                "Pandas, Numpy, Scikit-learn, TensorFlow, Keras, PyTorch, OpenCV, Matplotlib, Seaborn, SciPy",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: Users,
            title: "Agile Development",
            description: "Team collaboration, Testing automation, CI/CD",
            color: "from-orange-500 to-red-500",
        },
    ];

    return (
        <Section id="about" background="default">
            <Container size="lg">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 hover:shadow-lg transition-shadow">
                        <Sparkles className="w-4 h-4 mr-2" />
                        About Me
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Get to know me
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A passionate software engineer dedicated to creating
                        impactful digital solutions
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Profile Image */}
                    <motion.div
                        className="relative order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            {/* Main image container */}
                            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://raw.githubusercontent.com/saurabhchidrewar/assets/refs/heads/main/image%20(10).png"
                                    alt={personal.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">
                                            {personal.availability}
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Open to network
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-4 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
                        </div>
                    </motion.div>

                    {/* About Content */}
                    <motion.div
                        className="space-y-6 order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-4">
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                {personal.title}
                                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    {personal.subtitle}
                                </span>
                            </h3>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                {personal.bio}
                            </p>
                        </div>

                        {/* Info cards */}
                        <div className="grid gap-3">
                            {infoItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.6 + index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <Card className="hover:shadow-md transition-all duration-300 border-gray-100">
                                        <CardContent className="p-4">
                                            <div className="flex items-center space-x-3">
                                                <div
                                                    className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-md`}
                                                >
                                                    <item.icon className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="text-gray-900 font-semibold">
                                                    {item.text}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4 relative z-10">
                            <motion.button
                                type="button"
                                className="px-6 py-6 text-base bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg font-medium flex items-center justify-center cursor-pointer"
                                style={{ pointerEvents: "auto" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log("Download Resume clicked!");
                                    window.open(personal.resumeUrl, "_blank");
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download Resume
                            </motion.button>
                            <motion.button
                                type="button"
                                className="px-6 py-6 text-base border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-900 rounded-lg font-medium flex items-center justify-center cursor-pointer transition-all duration-300"
                                style={{ pointerEvents: "auto" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log("Get In Touch clicked!");
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Get In Touch
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Expertise Grid */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        My Expertise
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {expertise.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-100 bg-gradient-to-br from-white to-gray-50">
                                    <CardContent className="p-6 text-center">
                                        <div
                                            className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${area.color} shadow-lg mb-4`}
                                        >
                                            <area.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2 text-lg">
                                            {area.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {area.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
