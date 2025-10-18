'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, Brain, TrendingUp } from 'lucide-react';

export default function AwardsSection() {
  const awards = [
    {
      title: 'Outstanding Contributor Award',
      subtitle: 'Employee of the Year 2025',
      company: 'Source.One',
      description: 'Recognized for exceptional performance and impact, demonstrating outstanding leadership and innovation in software development.',
      icon: Trophy,
      color: '#FFD700', // Gold
    },
    {
      title: 'Best Youngster Award',
      subtitle: 'Best Performer – Q1 2024',
      company: 'Source.One',
      description: 'Honored for leadership potential and consistent delivery excellence, showcasing rapid growth and professional development.',
      icon: Star,
      color: '#4CAF50', // Green
    },
    {
      title: 'AI Impact Award',
      subtitle: 'Machine Learning Innovation',
      company: 'Source.One',
      description: 'Awarded for successful implementation of a machine learning project that determined real-time freight costs for goods based on their load characteristics.',
      icon: Brain,
      color: '#2196F3', // Blue
    },
    {
      title: 'Growth Category Award',
      subtitle: 'Revenue Generation Excellence',
      company: 'Source.One',
      description: 'Recognized for contribution in project campaigns that managed multiple company-wide campaigns via webchat and mobile applications, providing key metrics and driving revenue growth.',
      icon: TrendingUp,
      color: '#9C27B0', // Purple
    },
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
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600">
            Celebrating achievements and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4"
              style={{ borderLeftColor: award.color }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${award.color}20` }}
                >
                  <award.icon
                    className="w-6 h-6"
                    style={{ color: award.color }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-2">
                    {award.subtitle}
                  </p>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: `${award.color}20`,
                      color: award.color,
                    }}
                  >
                    {award.company}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
