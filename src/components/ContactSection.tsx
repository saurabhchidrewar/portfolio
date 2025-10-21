"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Twitter,
    Send,
    MessageCircle,
    Clock,
    Sparkles,
    Code,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import personalData from "@/data/personal.json";
import type { PersonalInfo } from "@/types";

export default function ContactSection() {
    const personal = personalData as PersonalInfo;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create mailto link with pre-filled content
        const subject = encodeURIComponent(
            formData.subject || "Hello from your portfolio!"
        );
        const body = encodeURIComponent(
            `Hi Saurabh,

${formData.message}

Best regards,
${formData.name}
Email: ${formData.email}`
        );

        const mailtoLink = `mailto:${personal.email}?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form after opening email client
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: personal.email,
            link: `mailto:${personal.email}`,
            description: "Send me an email anytime",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Phone,
            label: "Phone",
            value: personal.phone,
            link: `tel:${personal.phone}`,
            description: "Call me for urgent matters",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: MapPin,
            label: "Location",
            value: personal.location,
            link: null,
            description: "Available for remote work",
            color: "from-purple-500 to-pink-500",
        },
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            label: "LinkedIn",
            url: personal.socialLinks.linkedin,
            color: "hover:text-blue-600",
        },
        {
            icon: Github,
            label: "GitHub",
            url: personal.socialLinks.github,
            color: "hover:text-gray-800",
        },
        {
            icon: Code,
            label: "LeetCode",
            url: "https://leetcode.com/u/saurabh2621/",
            color: "hover:text-orange-500",
        },
        {
            icon: Twitter,
            label: "Twitter",
            url: personal.socialLinks.twitter,
            color: "hover:text-blue-400",
        },
    ];

    return (
        <section
            id="contact"
            className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            <Container size="lg" className="relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Badge
                        variant="secondary"
                        className="mb-4 px-5 py-2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                    >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Let&apos;s Connect
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Have a project in mind or just want to chat? I&apos;d
                        love to hear from you. Let&apos;s create something
                        amazing together!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Information - Left Side */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-white">
                                Let&apos;s start a conversation
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                I&apos;m always excited to discuss new
                                opportunities, creative projects, or just have a
                                chat about technology and development.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2 + index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                >
                                    <Card className="group bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
                                        <CardContent className="p-5">
                                            <div className="flex items-start space-x-4">
                                                <div
                                                    className={`p-3 rounded-xl bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                                >
                                                    <info.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-base font-bold text-white mb-1">
                                                        {info.label}
                                                    </h4>
                                                    <p className="text-sm text-white/50 mb-2">
                                                        {info.description}
                                                    </p>
                                                    {info.link ? (
                                                        <a
                                                            href={info.link}
                                                            className="text-white/90 font-medium hover:text-white transition-colors break-all"
                                                        >
                                                            {info.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-white/90 font-medium">
                                                            {info.value}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 bg-white/5 backdrop-blur-md rounded-xl text-white/80 transition-all duration-300 border border-white/10 hover:bg-white/10 ${social.color}`}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.5 + index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Response Time */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white/5 backdrop-blur-md border-white/10">
                                <CardContent className="flex items-center space-x-3 p-4">
                                    <Clock className="w-5 h-5 text-white/60" />
                                    <div>
                                        <p className="text-sm text-white/60">
                                            Response time
                                        </p>
                                        <p className="text-white font-semibold">
                                            Usually within 24 hours
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form - Right Side */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-2xl">
                            <CardContent className="p-8">
                                <div className="flex items-center space-x-3 mb-8">
                                    <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        Send me a message
                                    </h3>
                                </div>

                                <form
                                    className="space-y-6"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-semibold text-white/90 mb-2"
                                            >
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-semibold text-white/90 mb-2"
                                            >
                                                Your Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-semibold text-white/90 mb-2"
                                        >
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold text-white/90 mb-2"
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={6}
                                            required
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Tell me about your project or just say hi..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg shadow-xl shadow-blue-500/30"
                                        size="lg"
                                        asChild
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Send className="w-5 h-5 mr-2" />
                                            <span>Send Message</span>
                                        </motion.button>
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
