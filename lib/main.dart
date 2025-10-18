import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:google_fonts/google_fonts.dart';
import 'widgets/header_section.dart';
import 'widgets/about_section.dart';
import 'widgets/skills_section.dart';
import 'widgets/projects_section.dart';
import 'widgets/contact_section.dart';
import 'widgets/experience_section.dart';
import 'widgets/awards_section.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Saurabh Chidrewar',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF6C63FF),
          brightness: Brightness.light,
        ),
        useMaterial3: true,
        textTheme: GoogleFonts.interTextTheme(),
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final _scrollController = ScrollController();
  bool _isScrolled = false;
  bool _isMenuOpen = false;

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_onScroll);
  }

  @override
  void dispose() {
    _scrollController.removeListener(_onScroll);
    _scrollController.dispose();
    super.dispose();
  }

  void _onScroll() {
    if (_scrollController.offset > 50 && !_isScrolled) {
      setState(() => _isScrolled = true);
    } else if (_scrollController.offset <= 50 && _isScrolled) {
      setState(() => _isScrolled = false);
    }
  }

  void _scrollToSection(int index) {
    final sections = [
      0.0, // Header
      800.0, // About
      1600.0, // Experience
      2400.0, // Skills
      3200.0, // Awards
      4000.0, // Projects
      4800.0, // Contact
    ];

    if (index < sections.length) {
      _scrollController.animateTo(
        sections[index],
        duration: const Duration(milliseconds: 800),
        curve: Curves.easeInOut,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Animated background shapes
          ...List.generate(5, (index) {
            return Positioned(
              left: index * 200.0,
              top: index * 100.0,
              child: Container(
                width: 300,
                height: 300,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: LinearGradient(
                    colors: [
                      Theme.of(context).colorScheme.primary.withOpacity(0.1),
                      Theme.of(context).colorScheme.secondary.withOpacity(0.1),
                    ],
                  ),
                ),
              )
                  .animate(
                    onPlay: (controller) => controller.repeat(),
                  )
                  .scale(
                    duration: (3 + index).seconds,
                    begin: const Offset(0.8, 0.8),
                    end: const Offset(1.2, 1.2),
                  )
                  .fade(
                    duration: (3 + index).seconds,
                    begin: 0.3,
                    end: 0.1,
                  ),
            );
          }),

          // Main content
          SingleChildScrollView(
            controller: _scrollController,
            child: const Column(
              children: [
                HeaderSection(),
                AboutSection(),
                ExperienceSection(),
                SkillsSection(),
                AwardsSection(),
                ProjectsSection(),
                ContactSection(),
              ],
            ),
          ),

          // Animated navigation bar
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            child: Container(
              padding: EdgeInsets.symmetric(
                horizontal: 24,
                vertical: _isScrolled ? 12 : 24,
              ),
              decoration: BoxDecoration(
                color: _isScrolled
                    ? Colors.white.withOpacity(0.9)
                    : Colors.transparent,
                boxShadow: _isScrolled
                    ? [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.1),
                          blurRadius: 10,
                          offset: const Offset(0, 5),
                        ),
                      ]
                    : null,
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'SC',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: _isScrolled
                          ? Theme.of(context).colorScheme.primary
                          : Colors.white,
                    ),
                  ).animate().fadeIn(duration: 600.ms),
                  if (MediaQuery.of(context).size.width > 600)
                    Row(
                      children: [
                        _NavButton(
                          label: 'Home',
                          onTap: () => _scrollToSection(0),
                          isScrolled: _isScrolled,
                        ),
                        _NavButton(
                          label: 'About',
                          onTap: () => _scrollToSection(1),
                          isScrolled: _isScrolled,
                        ),
                        _NavButton(
                          label: 'Experience',
                          onTap: () => _scrollToSection(2),
                          isScrolled: _isScrolled,
                        ),
                        _NavButton(
                          label: 'Skills',
                          onTap: () => _scrollToSection(3),
                          isScrolled: _isScrolled,
                        ),
                        _NavButton(
                          label: 'Awards',
                          onTap: () => _scrollToSection(4),
                          isScrolled: _isScrolled,
                        ),
                        _NavButton(
                          label: 'Projects',
                          onTap: () => _scrollToSection(5),
                          isScrolled: _isScrolled,
                        ),
                        _NavButton(
                          label: 'Contact',
                          onTap: () => _scrollToSection(6),
                          isScrolled: _isScrolled,
                        ),
                      ],
                    )
                  else
                    IconButton(
                      icon: Icon(
                        _isMenuOpen ? Icons.close : Icons.menu,
                        color: _isScrolled
                            ? Theme.of(context).colorScheme.primary
                            : Colors.white,
                      ),
                      onPressed: () {
                        setState(() => _isMenuOpen = !_isMenuOpen);
                      },
                    ),
                ],
              ),
            ),
          ).animate().slideY(
                begin: -1,
                end: 0,
                duration: 600.ms,
                curve: Curves.easeOutCubic,
              ),

          // Mobile menu
          if (_isMenuOpen && MediaQuery.of(context).size.width <= 600)
            Positioned(
              top: 80,
              left: 0,
              right: 0,
              child: Container(
                margin: const EdgeInsets.symmetric(horizontal: 24),
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.1),
                      blurRadius: 20,
                      offset: const Offset(0, 10),
                    ),
                  ],
                ),
                child: Column(
                  children: [
                    _MobileNavButton(
                      label: 'Home',
                      onTap: () {
                        _scrollToSection(0);
                        setState(() => _isMenuOpen = false);
                      },
                    ),
                    _MobileNavButton(
                      label: 'About',
                      onTap: () {
                        _scrollToSection(1);
                        setState(() => _isMenuOpen = false);
                      },
                    ),
                    _MobileNavButton(
                      label: 'Experience',
                      onTap: () {
                        _scrollToSection(2);
                        setState(() => _isMenuOpen = false);
                      },
                    ),
                    _MobileNavButton(
                      label: 'Skills',
                      onTap: () {
                        _scrollToSection(3);
                        setState(() => _isMenuOpen = false);
                      },
                    ),
                    _MobileNavButton(
                      label: 'Awards',
                      onTap: () {
                        _scrollToSection(4);
                        setState(() => _isMenuOpen = false);
                      },
                    ),
                    _MobileNavButton(
                      label: 'Projects',
                      onTap: () {
                        _scrollToSection(5);
                        setState(() => _isMenuOpen = false);
                      },
                    ),
                    _MobileNavButton(
                      label: 'Contact',
                      onTap: () {
                        _scrollToSection(6);
                        setState(() => _isMenuOpen = false);
                      },
                    ),
                  ],
                ),
              ),
            ).animate().fadeIn(duration: 300.ms).scale(
                  begin: const Offset(0.95, 0.95),
                  end: const Offset(1, 1),
                ),
        ],
      ),
    );
  }
}

class _NavButton extends StatefulWidget {
  final String label;
  final VoidCallback onTap;
  final bool isScrolled;

  const _NavButton({
    required this.label,
    required this.onTap,
    required this.isScrolled,
  });

  @override
  State<_NavButton> createState() => _NavButtonState();
}

class _NavButtonState extends State<_NavButton> {
  bool isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => isHovered = true),
      onExit: (_) => setState(() => isHovered = false),
      child: TextButton(
        onPressed: widget.onTap,
        style: TextButton.styleFrom(
          foregroundColor: widget.isScrolled
              ? Theme.of(context).colorScheme.primary
              : Colors.white,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        ),
        child: Text(
          widget.label,
          style: TextStyle(
            fontWeight: isHovered ? FontWeight.bold : FontWeight.normal,
          ),
        ),
      ),
    ).animate(target: isHovered ? 1 : 0).scale(
          begin: const Offset(1, 1),
          end: const Offset(1.1, 1.1),
          duration: 200.ms,
        );
  }
}

class _MobileNavButton extends StatelessWidget {
  final String label;
  final VoidCallback onTap;

  const _MobileNavButton({
    required this.label,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: onTap,
      style: TextButton.styleFrom(
        foregroundColor: Theme.of(context).colorScheme.primary,
        padding: const EdgeInsets.symmetric(vertical: 16),
        minimumSize: const Size(double.infinity, 0),
      ),
      child: Text(
        label,
        style: const TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.w500,
        ),
      ),
    );
  }
}
