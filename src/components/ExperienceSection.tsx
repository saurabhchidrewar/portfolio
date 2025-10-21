"use client";

import { motion } from "framer-motion";
import {
    Calendar,
    MapPin,
    Building2,
    TrendingUp,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import experienceData from "@/data/experience.json";
import type { Experience } from "@/types";

export default function ExperienceSection() {
    const experiences = experienceData as Experience[];

    return (
        <Section id="experience" background="muted">
            <Container size="lg">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 hover:shadow-lg transition-shadow">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Professional Journey
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Work Experience
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Building impactful solutions and growing as a software
                        engineer
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-600 via-emerald-500 to-green-400 hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 top-8 w-5 h-5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full border-4 border-background shadow-lg z-10 hidden md:block"></div>

                                {/* Content */}
                                <div className="md:ml-20">
                                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100">
                                        <div className="relative">
                                            {/* Header gradient */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-500 to-green-400"></div>

                                            <CardContent className="p-8">
                                                {/* Title Section */}
                                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-3 mb-3">
                                                            <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg">
                                                                <Building2 className="w-6 h-6 text-white" />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-2xl font-bold text-gray-900">
                                                                    {exp.title}
                                                                </h3>
                                                                <p className="text-lg font-semibold text-green-600">
                                                                    {
                                                                        exp.company
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-wrap items-center gap-4 text-gray-600">
                                                            <div className="flex items-center space-x-2">
                                                                <MapPin className="w-4 h-4" />
                                                                <span>
                                                                    {
                                                                        exp.location
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <Calendar className="w-4 h-4" />
                                                                <span>
                                                                    {exp.period}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <Badge
                                                            variant="outline"
                                                            className="w-fit px-4 py-1 border-green-600 text-green-600"
                                                        >
                                                            {exp.duration}
                                                        </Badge>
                                                        <Badge
                                                            variant="secondary"
                                                            className="w-fit px-4 py-1"
                                                        >
                                                            {exp.type}
                                                        </Badge>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-700 leading-relaxed mb-6">
                                                    {exp.description}
                                                </p>

                                                {/* Highlights */}
                                                {exp.highlights.length > 0 && (
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                                        {exp.highlights.map(
                                                            (
                                                                highlight,
                                                                hIndex
                                                            ) => (
                                                                <motion.div
                                                                    key={hIndex}
                                                                    className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100"
                                                                    initial={{
                                                                        opacity: 0,
                                                                        scale: 0.9,
                                                                    }}
                                                                    whileInView={{
                                                                        opacity: 1,
                                                                        scale: 1,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.5,
                                                                        delay:
                                                                            0.3 +
                                                                            hIndex *
                                                                                0.1,
                                                                    }}
                                                                    viewport={{
                                                                        once: true,
                                                                    }}
                                                                    whileHover={{
                                                                        scale: 1.05,
                                                                    }}
                                                                >
                                                                    <div className="flex items-center space-x-2 mb-1">
                                                                        <TrendingUp className="w-5 h-5 text-green-600" />
                                                                        <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                                                            {
                                                                                highlight.metric
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <p className="text-sm text-gray-600 font-medium">
                                                                        {
                                                                            highlight.description
                                                                        }
                                                                    </p>
                                                                </motion.div>
                                                            )
                                                        )}
                                                    </div>
                                                )}

                                                <Separator className="my-6" />

                                                {/* Achievements */}
                                                <div className="space-y-4">
                                                    <h4 className="text-lg font-bold text-gray-900 flex items-center">
                                                        <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="grid gap-3">
                                                        {exp.achievements.map(
                                                            (
                                                                achievement,
                                                                achIndex
                                                            ) => (
                                                                <motion.li
                                                                    key={
                                                                        achIndex
                                                                    }
                                                                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                                                    initial={{
                                                                        opacity: 0,
                                                                        x: -20,
                                                                    }}
                                                                    whileInView={{
                                                                        opacity: 1,
                                                                        x: 0,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.5,
                                                                        delay:
                                                                            0.4 +
                                                                            achIndex *
                                                                                0.1,
                                                                    }}
                                                                    viewport={{
                                                                        once: true,
                                                                    }}
                                                                >
                                                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                                    <span className="text-gray-700">
                                                                        {
                                                                            achievement
                                                                        }
                                                                    </span>
                                                                </motion.li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>

                                                {/* Technologies */}
                                                <div className="mt-6">
                                                    <h4 className="text-sm font-semibold text-gray-600 mb-3">
                                                        Technologies Used:
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.technologies.map(
                                                            (
                                                                tech,
                                                                techIndex
                                                            ) => (
                                                                <motion.div
                                                                    key={
                                                                        techIndex
                                                                    }
                                                                    initial={{
                                                                        opacity: 0,
                                                                        scale: 0.8,
                                                                    }}
                                                                    whileInView={{
                                                                        opacity: 1,
                                                                        scale: 1,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.3,
                                                                        delay:
                                                                            0.5 +
                                                                            techIndex *
                                                                                0.05,
                                                                    }}
                                                                    viewport={{
                                                                        once: true,
                                                                    }}
                                                                    whileHover={{
                                                                        scale: 1.1,
                                                                    }}
                                                                >
                                                                    <Badge
                                                                        variant="secondary"
                                                                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                                                                    >
                                                                        {tech}
                                                                    </Badge>
                                                                </motion.div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </div>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
