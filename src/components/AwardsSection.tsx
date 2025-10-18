"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Brain, TrendingUp, Award, Calendar } from "lucide-react";

export default function AwardsSection() {
    const awards = [
        {
            title: "Outstanding Contributor Award",
            subtitle: "Employee of the Year 2025",
            company: "Source.One",
            description:
                "Received the Outstanding Contributor Award, equivalent to the Employee of the Year 2025, for exceptional performance and impact at Source.One.",
            icon: Trophy,
            color: "from-yellow-400 to-orange-500",
            bgColor: "bg-yellow-50",
            textColor: "text-yellow-600",
            year: "2025",
            category: "Leadership",
        },
        {
            title: "Best Youngster Award",
            subtitle: "Best Performer – Q1 2024",
            company: "Source.One",
            description:
                "Honored with the Best Youngster Award and Best Performer – Q1 2024 for leadership potential and consistent delivery at Source.One.",
            icon: Star,
            color: "from-green-400 to-emerald-500",
            bgColor: "bg-green-50",
            textColor: "text-green-600",
            year: "2024",
            category: "Performance",
        },
        {
            title: "ACM-ICPC Regional Round",
            subtitle: "Competitive Programming",
            company: "Pune-Gwalior Regional",
            description:
                "Competed in ACM-ICPC Pune-Gwalior Regional Round and secured Rank 251, demonstrating strong problem-solving and algorithmic skills.",
            icon: Brain,
            color: "from-blue-400 to-cyan-500",
            bgColor: "bg-blue-50",
            textColor: "text-blue-600",
            year: "2022",
            category: "Competition",
        },
        {
            title: "Codechef September Starters",
            subtitle: "Coding Competition",
            company: "Codechef",
            description:
                "Secured rank of 73/8048 in Codechef September Starters 2021, showcasing exceptional coding and problem-solving abilities.",
            icon: TrendingUp,
            color: "from-purple-400 to-pink-500",
            bgColor: "bg-purple-50",
            textColor: "text-purple-600",
            year: "2021",
            category: "Coding",
        },
    ];

    return (
        <section
            id="awards"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                        Recognition & Awards
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Awards & Recognition
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Celebrating achievements and excellence in my
                        professional journey
                    </p>
                </motion.div>

                {/* Awards Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            className="group card p-8 space-y-6 relative overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            {/* Decorative gradient */}
                            <div
                                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${award.color} opacity-5 rounded-full -translate-y-16 translate-x-16`}
                            ></div>

                            {/* Award Header */}
                            <div className="flex items-start space-x-4 relative z-10">
                                <div
                                    className={`p-4 rounded-2xl ${award.bgColor} group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <award.icon
                                        className={`w-8 h-8 ${award.textColor}`}
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                            {award.title}
                                        </h3>
                                        <div className="flex items-center space-x-2">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${award.bgColor} ${award.textColor}`}
                                            >
                                                {award.category}
                                            </span>
                                            <span className="flex items-center space-x-1 text-sm text-gray-500">
                                                <Calendar className="w-3 h-3" />
                                                <span>{award.year}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 font-medium mb-3">
                                        {award.subtitle}
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <Award className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm text-gray-500">
                                            {award.company}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed relative z-10">
                                {award.description}
                            </p>

                            {/* Hover effect line */}
                            <div
                                className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${award.color} group-hover:w-full transition-all duration-500`}
                            ></div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    {[
                        { label: "Awards Won", value: "4+", icon: Trophy },
                        {
                            label: "Years Experience",
                            value: "1.5+",
                            icon: Calendar,
                        },
                        {
                            label: "Coding Questions Solved",
                            value: "1000+",
                            icon: TrendingUp,
                        },
                        {
                            label: "Students Taught",
                            value: "450+",
                            icon: Star,
                        },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.7 + index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
