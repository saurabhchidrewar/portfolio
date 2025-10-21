"use client";

import { motion } from "framer-motion";
import {
    Trophy,
    Star,
    Brain,
    TrendingUp,
    Award,
    Calendar,
    Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import awardsData from "@/data/awards.json";
import type { Award as AwardType } from "@/types";

export default function AwardsSection() {
    const awards = awardsData as AwardType[];

    const iconMap: Record<
        string,
        React.ComponentType<{ className?: string }>
    > = {
        Trophy,
        Star,
        Brain,
        TrendingUp,
    };

    const colorMap: Record<
        string,
        { gradient: string; bg: string; text: string }
    > = {
        Trophy: {
            gradient: "from-yellow-400 to-orange-500",
            bg: "bg-yellow-50",
            text: "text-yellow-600",
        },
        Star: {
            gradient: "from-green-400 to-emerald-500",
            bg: "bg-green-50",
            text: "text-green-600",
        },
        Brain: {
            gradient: "from-blue-400 to-cyan-500",
            bg: "bg-blue-50",
            text: "text-blue-600",
        },
        TrendingUp: {
            gradient: "from-purple-400 to-pink-500",
            bg: "bg-purple-50",
            text: "text-purple-600",
        },
    };

    return (
        <Section id="awards" background="default">
            <Container size="lg">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white border-0 hover:shadow-lg transition-shadow">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Recognition & Awards
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Awards & Achievements
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Celebrating milestones and excellence throughout my
                        professional journey
                    </p>
                </motion.div>

                {/* Awards Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {awards.map((award, index) => {
                        const IconComponent = iconMap[award.icon];
                        const colors = colorMap[award.icon];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.15,
                                }}
                                viewport={{ once: true }}
                            >
                                <Card className="group relative overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-2 border-gray-100">
                                    {/* Top gradient bar */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.gradient}`}
                                    ></div>

                                    {/* Decorative gradient orb */}
                                    <div
                                        className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700`}
                                    ></div>

                                    <div className="p-8 space-y-6 relative z-10">
                                        {/* Header */}
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-start space-x-4 flex-1">
                                                <motion.div
                                                    className={`p-4 rounded-2xl ${colors.bg} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                                    whileHover={{ rotate: 5 }}
                                                >
                                                    <IconComponent
                                                        className={`w-8 h-8 ${colors.text}`}
                                                    />
                                                </motion.div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                                        {award.title}
                                                    </h3>
                                                    <p className="text-base font-semibold text-gray-700 mb-2">
                                                        {award.subtitle}
                                                    </p>
                                                    <div className="flex items-center space-x-2 text-gray-600">
                                                        <Award className="w-4 h-4" />
                                                        <span className="text-sm">
                                                            {award.company}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <Badge
                                                    className={`${colors.bg} ${colors.text} border-0`}
                                                >
                                                    {award.category}
                                                </Badge>
                                                <div className="flex items-center space-x-1 text-gray-500 text-sm">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>{award.year}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed">
                                            {award.description}
                                        </p>

                                        {/* Bottom decorative line */}
                                        <div
                                            className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${colors.gradient} group-hover:w-full transition-all duration-500`}
                                        ></div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    {[
                        {
                            label: "Awards Won",
                            value: "4+",
                            icon: Trophy,
                            gradient: "from-yellow-500 to-orange-500",
                        },
                        {
                            label: "Years Experience",
                            value: "3+",
                            icon: Calendar,
                            gradient: "from-blue-500 to-cyan-500",
                        },
                        {
                            label: "Problems Solved",
                            value: "1000+",
                            icon: TrendingUp,
                            gradient: "from-green-500 to-emerald-500",
                        },
                        {
                            label: "Students Taught",
                            value: "200+",
                            icon: Star,
                            gradient: "from-purple-500 to-pink-500",
                        },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.7 + index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 bg-gradient-to-br from-white to-gray-50">
                                <div
                                    className={`w-14 h-14 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                                >
                                    <stat.icon className="w-7 h-7 text-white" />
                                </div>
                                <div
                                    className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
