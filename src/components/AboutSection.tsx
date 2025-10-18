'use client';

import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Download } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const infoItems = [
    { icon: MapPin, text: 'Based in Pune, India' },
    { icon: Briefcase, text: '3+ years of experience' },
    { icon: GraduationCap, text: 'B.E. from PICT, Pune' },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://drive.usercontent.google.com/download?id=1Nah3Asv8otkBXhSMO50cMRmlkYH0kT1s"
                alt="Saurabh Chidrewar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800">
              Software Engineer & Full Stack Developer
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I am a Software Engineer with 3+ years of experience in building scalable web applications and microservices. I specialize in full-stack development with expertise in React, Node.js, and cloud technologies. I am passionate about creating efficient, maintainable, and user-friendly solutions.
            </p>

            <div className="space-y-3">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://drive.google.com/file/d/1e5DhVFZm2CVd5C04JyzRF1PZ5pJ9qVdq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#6C63FF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#5A52E5] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
