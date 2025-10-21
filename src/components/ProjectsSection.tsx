"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    ExternalLink,
    Github,
    Calendar,
    Star,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types";

export default function ProjectsSection() {
    const projects = projectsData as Project[];
    const [expandedFeatures, setExpandedFeatures] = useState<{
        [key: number]: boolean;
    }>({});

    const toggleFeatures = (index: number) => {
        setExpandedFeatures((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <Section id="projects" background="muted">
            <Container size="lg">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 hover:shadow-lg transition-shadow">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Featured Work
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A showcase of impactful projects that demonstrate my
                        technical expertise and problem-solving abilities
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-2 border-gray-100">
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                                    {/* Overlay badges */}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <Badge className="bg-white/95 backdrop-blur-sm text-gray-800 hover:bg-white border-0 shadow-lg">
                                            {project.category}
                                        </Badge>
                                        <Badge className="bg-white/95 backdrop-blur-sm text-gray-800 hover:bg-white border-0 shadow-lg">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {project.year}
                                        </Badge>
                                    </div>

                                    {/* Quick action buttons */}
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        {project.githubLink && (
                                            <motion.a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/95 backdrop-blur-sm text-gray-800 rounded-full hover:bg-white shadow-lg transition-colors"
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: 5,
                                                }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Github className="w-5 h-5" />
                                            </motion.a>
                                        )}
                                        {project.liveLink && (
                                            <motion.a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/95 backdrop-blur-sm text-gray-800 rounded-full hover:bg-white shadow-lg transition-colors"
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: -5,
                                                }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </motion.a>
                                        )}
                                    </div>

                                    {/* Impact badge */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2 text-white bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2">
                                            <Star className="w-5 h-5 fill-current text-yellow-400" />
                                            <span className="text-sm font-semibold">
                                                {project.impact}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <CardContent className="p-6 space-y-5">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Key Features */}
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                                            <Star className="w-4 h-4 mr-2 text-purple-600" />
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.features
                                                .slice(
                                                    0,
                                                    expandedFeatures[index]
                                                        ? project.features
                                                              .length
                                                        : 3
                                                )
                                                .map(
                                                    (feature, featureIndex) => (
                                                        <motion.li
                                                            key={featureIndex}
                                                            className="flex items-start space-x-2 text-sm"
                                                            initial={{
                                                                opacity: 0,
                                                                y: 10,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.3,
                                                                delay:
                                                                    featureIndex *
                                                                    0.1,
                                                            }}
                                                        >
                                                            <span className="text-purple-600 mt-1 font-bold">
                                                                •
                                                            </span>
                                                            <span className="text-gray-600">
                                                                {feature}
                                                            </span>
                                                        </motion.li>
                                                    )
                                                )}
                                            {project.features.length > 3 && (
                                                <li className="relative">
                                                    <motion.button
                                                        type="button"
                                                        className="text-sm text-purple-600 font-medium cursor-pointer hover:text-purple-700 transition-colors bg-transparent border-none p-0 w-full text-left flex items-center"
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                            position:
                                                                "relative",
                                                            zIndex: 50,
                                                        }}
                                                        whileHover={{
                                                            scale: 1.02,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.98,
                                                        }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            toggleFeatures(
                                                                index
                                                            );
                                                        }}
                                                    >
                                                        {expandedFeatures[
                                                            index
                                                        ] ? (
                                                            <>
                                                                <span className="mr-1">
                                                                    −
                                                                </span>
                                                                Show less
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span className="mr-1">
                                                                    +
                                                                </span>
                                                                {project
                                                                    .features
                                                                    .length -
                                                                    3}{" "}
                                                                more features
                                                            </>
                                                        )}
                                                    </motion.button>
                                                </li>
                                            )}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-3">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies
                                                .slice(0, 5)
                                                .map((tech, techIndex) => (
                                                    <Badge
                                                        key={techIndex}
                                                        variant="secondary"
                                                        className="text-xs bg-gray-100 hover:bg-gray-200 transition-colors"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            {project.technologies.length >
                                                5 && (
                                                <Badge
                                                    variant="secondary"
                                                    className="text-xs bg-gray-100"
                                                >
                                                    +
                                                    {project.technologies
                                                        .length - 5}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-2 relative z-20">
                                        {project.githubLink && (
                                            <motion.button
                                                type="button"
                                                className="flex-1 px-4 py-2 text-sm border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-900 rounded-lg font-medium flex items-center justify-center cursor-pointer transition-all duration-300"
                                                style={{
                                                    pointerEvents: "auto",
                                                }}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    window.open(
                                                        project.githubLink ||
                                                            "",
                                                        "_blank"
                                                    );
                                                }}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </motion.button>
                                        )}
                                        {project.liveLink && (
                                            <motion.button
                                                type="button"
                                                className="flex-1 px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium flex items-center justify-center cursor-pointer transition-all duration-300"
                                                style={{
                                                    pointerEvents: "auto",
                                                }}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    window.open(
                                                        project.liveLink || "",
                                                        "_blank"
                                                    );
                                                }}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </motion.button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    className="text-center relative z-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        type="button"
                        className="px-8 py-6 text-lg border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 bg-white hover:bg-gray-50 text-gray-900 rounded-lg font-medium flex items-center justify-center cursor-pointer transition-all duration-300 relative z-20"
                        style={{ pointerEvents: "auto" }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(
                                "https://github.com/saurabhchidrewar?tab=repositories",
                                "_blank"
                            );
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github className="w-5 h-5 mr-2" />
                        View All Projects on GitHub
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.button>
                </motion.div>
            </Container>
        </Section>
    );
}
