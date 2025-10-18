import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:url_launcher/url_launcher.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 48),
      constraints: const BoxConstraints(maxWidth: 1200),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'About Me',
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                ),
          ).animate().fadeIn(duration: 600.ms).slideX(begin: -0.2, end: 0),
          const SizedBox(height: 8),
          Text(
            'Get to know me better',
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Colors.grey[600],
                ),
          )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideX(begin: -0.2, end: 0),
          const SizedBox(height: 32),
          LayoutBuilder(
            builder: (context, constraints) {
              final isMobile = constraints.maxWidth <= 600;
              final isTablet = constraints.maxWidth <= 900;

              if (isMobile) {
                return Column(
                  children: [
                    _buildProfileImage(isMobile: true),
                    const SizedBox(height: 24),
                    _buildAboutContent(),
                  ],
                );
              }

              return Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    flex: isTablet ? 5 : 4,
                    child: _buildProfileImage(isMobile: false),
                  ),
                  SizedBox(width: isTablet ? 32 : 48),
                  Expanded(
                    flex: isTablet ? 7 : 6,
                    child: _buildAboutContent(),
                  ),
                ],
              );
            },
          ),
        ],
      ),
    );
  }

  Widget _buildProfileImage({required bool isMobile}) {
    return Container(
      height: isMobile ? 300 : 400,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 20,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Image.network(
          "https://drive.usercontent.google.com/download?id=1Nah3Asv8otkBXhSMO50cMRmlkYH0kT1s",
          fit: BoxFit.cover,
          loadingBuilder: (context, child, loadingProgress) {
            if (loadingProgress == null) return child;
            return Container(
              color: Colors.grey[200],
              child: Center(
                child: CircularProgressIndicator(
                  value: loadingProgress.expectedTotalBytes != null
                      ? loadingProgress.cumulativeBytesLoaded /
                          loadingProgress.expectedTotalBytes!
                      : null,
                ),
              ),
            );
          },
        ),
      ),
    ).animate().fadeIn(delay: 300.ms, duration: 600.ms).scale(
          begin: const Offset(0.95, 0.95),
          end: const Offset(1, 1),
        );
  }

  Widget _buildAboutContent() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Software Engineer & Full Stack Developer',
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Colors.grey[800],
          ),
        ).animate().fadeIn(delay: 400.ms, duration: 600.ms),
        const SizedBox(height: 12),
        Text(
          'I am a Software Engineer with 3+ years of experience in building scalable web applications and microservices. I specialize in full-stack development with expertise in React, Node.js, and cloud technologies. I am passionate about creating efficient, maintainable, and user-friendly solutions.',
          style: TextStyle(
            fontSize: 15,
            color: Colors.grey[600],
            height: 1.5,
          ),
        ).animate().fadeIn(delay: 500.ms, duration: 600.ms),
        const SizedBox(height: 20),
        _buildInfoRow(
          icon: Icons.location_on_outlined,
          text: 'Based in Pune, India',
          delay: 600,
        ),
        _buildInfoRow(
          icon: Icons.work_outline,
          text: '2+ years of experience',
          delay: 700,
        ),
        _buildInfoRow(
          icon: Icons.school_outlined,
          text: "B.E. from PICT, Pune",
          delay: 800,
        ),
        const SizedBox(height: 24),
        _buildDownloadCVButton(),
      ],
    );
  }

  Widget _buildInfoRow({
    required IconData icon,
    required String text,
    required int delay,
  }) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Row(
        children: [
          Icon(
            icon,
            color: Colors.grey[600],
            size: 18,
          ),
          const SizedBox(width: 8),
          Text(
            text,
            style: TextStyle(
              fontSize: 15,
              color: Colors.grey[600],
            ),
          ),
        ],
      ),
    )
        .animate()
        .fadeIn(delay: delay.ms, duration: 600.ms)
        .slideX(begin: 0.2, end: 0);
  }

  Widget _buildDownloadCVButton() {
    return ElevatedButton.icon(
      onPressed: () {
        launchUrl(Uri.parse(
            "https://drive.google.com/file/d/1e5DhVFZm2CVd5C04JyzRF1PZ5pJ9qVdq/view?usp=sharing"));
      },
      style: ElevatedButton.styleFrom(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
      ),
      icon: const Icon(Icons.download_outlined, size: 20),
      label: const Text(
        'Download CV',
        style: TextStyle(
          fontSize: 15,
          fontWeight: FontWeight.bold,
        ),
      ),
    )
        .animate()
        .fadeIn(delay: 900.ms, duration: 600.ms)
        .slideY(begin: 0.2, end: 0);
  }
}
