import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

class AwardsSection extends StatelessWidget {
  const AwardsSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 48),
      constraints: const BoxConstraints(maxWidth: 1200),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Awards & Recognition',
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                ),
          ).animate().fadeIn(duration: 600.ms).slideX(begin: -0.2, end: 0),
          const SizedBox(height: 8),
          Text(
            'Celebrating achievements and excellence',
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Colors.grey[600],
                ),
          )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideX(begin: -0.2, end: 0),
          const SizedBox(height: 32),
          _buildAwardsGrid(context),
        ],
      ),
    );
  }

  Widget _buildAwardsGrid(BuildContext context) {
    final awards = [
      {
        'title': 'Outstanding Contributor Award',
        'subtitle': 'Employee of the Year 2025',
        'company': 'Source.One',
        'description':
            'Recognized for exceptional performance and impact, demonstrating outstanding leadership and innovation in software development.',
        'icon': Icons.emoji_events,
        'color': const Color(0xFFFFD700), // Gold
      },
      {
        'title': 'Best Youngster Award',
        'subtitle': 'Best Performer – Q1 2024',
        'company': 'Source.One',
        'description':
            'Honored for leadership potential and consistent delivery excellence, showcasing rapid growth and professional development.',
        'icon': Icons.star,
        'color': const Color(0xFF4CAF50), // Green
      },
      {
        'title': 'AI Impact Award',
        'subtitle': 'Machine Learning Innovation',
        'company': 'Source.One',
        'description':
            'Awarded for successful implementation of a machine learning project that determined real-time freight costs for goods based on their load characteristics.',
        'icon': Icons.psychology,
        'color': const Color(0xFF2196F3), // Blue
      },
      {
        'title': 'Growth Category Award',
        'subtitle': 'Revenue Generation Excellence',
        'company': 'Source.One',
        'description':
            'Recognized for contribution in project campaigns that managed multiple company-wide campaigns via webchat and mobile applications, providing key metrics and driving revenue growth.',
        'icon': Icons.trending_up,
        'color': const Color(0xFF9C27B0), // Purple
      },
    ];

    return LayoutBuilder(
      builder: (context, constraints) {
        final isMobile = constraints.maxWidth <= 600;
        final isTablet = constraints.maxWidth <= 900;

        if (isMobile) {
          return Column(
            children: awards.asMap().entries.map((entry) {
              final index = entry.key;
              final award = entry.value;
              return Padding(
                padding: const EdgeInsets.only(bottom: 24),
                child: _buildAwardCard(context, award, index),
              );
            }).toList(),
          );
        }

        return GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: isTablet ? 1 : 2,
            childAspectRatio: isTablet ? 2.5 : 1.8,
            crossAxisSpacing: 24,
            mainAxisSpacing: 24,
          ),
          itemCount: awards.length,
          itemBuilder: (context, index) {
            return _buildAwardCard(context, awards[index], index);
          },
        );
      },
    );
  }

  Widget _buildAwardCard(
      BuildContext context, Map<String, dynamic> award, int index) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.08),
            blurRadius: 20,
            offset: const Offset(0, 8),
          ),
        ],
        border: Border.all(
          color: (award['color'] as Color).withOpacity(0.2),
          width: 1,
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: (award['color'] as Color).withOpacity(0.1),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(
                  award['icon'] as IconData,
                  color: award['color'] as Color,
                  size: 24,
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      award['title'] as String,
                      style: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.black87,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      award['subtitle'] as String,
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.grey[600],
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: (award['color'] as Color).withOpacity(0.1),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Text(
              award['company'] as String,
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: award['color'] as Color,
              ),
            ),
          ),
          const SizedBox(height: 12),
          Text(
            award['description'] as String,
            style: TextStyle(
              fontSize: 14,
              color: Colors.grey[600],
              height: 1.5,
            ),
          ),
        ],
      ),
    )
        .animate()
        .fadeIn(delay: (300 + index * 100).ms, duration: 600.ms)
        .slideY(begin: 0.2, end: 0);
  }
}
