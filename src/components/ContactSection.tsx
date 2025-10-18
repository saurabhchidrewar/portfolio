"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

export default function ContactSection() {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "saurabh.c@source.one",
            link: "mailto:saurabh.c@source.one",
            description: "Send me an email anytime",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 9876543210",
            link: "tel:+919876543210",
            description: "Call me for urgent matters",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Pune, India",
            link: null,
            description: "Available for remote work",
            color: "from-purple-500 to-pink-500",
        },
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            label: "LinkedIn",
            url: "https://linkedin.com/in/saurabhchidrewar",
            color: "hover:text-blue-600",
            bgColor: "hover:bg-blue-50",
        },
        {
            icon: Github,
            label: "GitHub",
            url: "https://github.com/saurabhchidrewar",
            color: "hover:text-gray-800",
            bgColor: "hover:bg-gray-50",
        },
        {
            icon: Twitter,
            label: "Twitter",
            url: "https://twitter.com/saurabhchidrewar",
            color: "hover:text-blue-400",
            bgColor: "hover:bg-blue-50",
        },
    ];

    return (
        <section
            id="contact"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
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
                        className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Let&apos;s Connect
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Ready to work together? Let&apos;s discuss your next
                        project and bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Let&apos;s start a conversation
                            </h3>
                            <p className="text-white/80 text-lg leading-relaxed">
                                I&apos;m always excited to discuss new
                                opportunities, creative projects, or just have a
                                chat about technology and development. Whether
                                you have a specific project in mind or just want
                                to connect, I&apos;d love to hear from you.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.3 + index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div
                                            className={`p-3 rounded-xl bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <info.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-white mb-1">
                                                {info.label}
                                            </h4>
                                            <p className="text-sm text-white/60 mb-2">
                                                {info.description}
                                            </p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-white font-medium hover:text-white/80 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-white font-medium">
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white">
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 bg-white/5 backdrop-blur-sm rounded-xl text-white/80 transition-all duration-300 border border-white/10 ${social.color} ${social.bgColor}`}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.6 + index * 0.1,
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
                            className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Clock className="w-5 h-5 text-white/60" />
                            <div>
                                <p className="text-sm text-white/80">
                                    Response time
                                </p>
                                <p className="text-white font-medium">
                                    Usually within 24 hours
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                Send me a message
                            </h3>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-white/80 mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-white/80 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-white/80 mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-white/80 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
