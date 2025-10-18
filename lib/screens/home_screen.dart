import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../widgets/header_section.dart';
import '../widgets/skills_section.dart';
import '../widgets/experience_section.dart';
import '../widgets/awards_section.dart';
import '../widgets/projects_section.dart';
import '../widgets/contact_section.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            const HeaderSection(),
            const SkillsSection(),
            const ExperienceSection(),
            const AwardsSection(),
            const ProjectsSection(),
            const ContactSection(),
          ]
              .animate(interval: 200.ms)
              .fadeIn(duration: 600.ms)
              .slideY(begin: 0.2, end: 0),
        ),
      ),
    );
  }
}
