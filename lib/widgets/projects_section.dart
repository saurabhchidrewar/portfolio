import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:url_launcher/url_launcher.dart';

class ProjectsSection extends StatelessWidget {
  const ProjectsSection({super.key});

  @override
  Widget build(BuildContext context) {
    final projects = [
      {
        'title': 'PICT Cafeteria Billing System',
        'description':
            "Built a software solution that helps in generating food item receipts of PICT College Cafeteria. The software helps the owner analyse the number of food items sold on a particular day along with their frequency. The cafeteria owner saved Rs. 12,000 per year as a result. Tech Stack: ReactJS, MySQL",
        'image':
            "https://images.unsplash.com/photo-1534078575607-d6c0daf63247?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        'technologies': [
          'JavaScript',
          'ReactJS',
          'MySQL',
          'TailwindCSS',
          'NodeJS',
          'ExpressJS',
          'MongoDB'
        ],
        'link': 'https://github.com/saurabhchidrewar/PICT-Cafeteria-Management',
      },
    ];

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 48),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Projects',
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                ),
          ).animate().fadeIn(duration: 600.ms).slideX(begin: -0.2, end: 0),
          const SizedBox(height: 8),
          Text(
            'Some of my recent work',
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

              return ListView.separated(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: projects.length,
                separatorBuilder: (context, index) =>
                    SizedBox(height: isMobile ? 24 : 32),
                itemBuilder: (context, index) {
                  final project = projects[index];
                  return _ProjectCard(
                    title: project['title'] as String,
                    description: project['description'] as String,
                    image: project['image'] as String,
                    technologies: (project['technologies'] as List<String>),
                    link: project['link'] as String,
                    index: index,
                    isMobile: isMobile,
                    isTablet: isTablet,
                  );
                },
              );
            },
          ),
        ],
      ),
    );
  }
}

class _ProjectCard extends StatefulWidget {
  final String title;
  final String description;
  final String image;
  final List<String> technologies;
  final String link;
  final int index;
  final bool isMobile;
  final bool isTablet;

  const _ProjectCard({
    required this.title,
    required this.description,
    required this.image,
    required this.technologies,
    required this.link,
    required this.index,
    required this.isMobile,
    required this.isTablet,
  });

  @override
  State<_ProjectCard> createState() => _ProjectCardState();
}

class _ProjectCardState extends State<_ProjectCard> {
  bool isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => isHovered = true),
      onExit: (_) => setState(() => isHovered = false),
      child: GestureDetector(
        onTap: () => _launchUrl(widget.link),
        child: Container(
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.surface,
            borderRadius: BorderRadius.circular(16),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(isHovered ? 0.2 : 0.1),
                blurRadius: isHovered ? 20 : 10,
                offset: Offset(0, isHovered ? 8 : 4),
              ),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child:
                widget.isMobile ? _buildMobileLayout() : _buildDesktopLayout(),
          ),
        ),
      ),
    )
        .animate()
        .fadeIn(delay: (200 * widget.index).ms, duration: 600.ms)
        .slideY(begin: 0.2, end: 0)
        .scale(
          begin: const Offset(0.95, 0.95),
          end: const Offset(1, 1),
          duration: 600.ms,
        );
  }

  Widget _buildMobileLayout() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SizedBox(
          height: 200,
          child: _buildImage(),
        ),
        Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _buildTitle(),
              const SizedBox(height: 8),
              _buildDescription(),
              const SizedBox(height: 16),
              _buildTechnologies(),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildDesktopLayout() {
    return SizedBox(
      height: 300,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          if (!widget.isTablet) ...[
            Expanded(
              flex: 4,
              child: _buildImage(),
            ),
            Expanded(
              flex: 3,
              child: Padding(
                padding: const EdgeInsets.all(24),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    _buildTitle(),
                    const SizedBox(height: 16),
                    _buildDescription(),
                    const SizedBox(height: 24),
                    _buildTechnologies(),
                  ],
                ),
              ),
            ),
          ] else ...[
            Expanded(
              flex: 5,
              child: _buildImage(),
            ),
            Expanded(
              flex: 4,
              child: Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    _buildTitle(),
                    const SizedBox(height: 12),
                    _buildDescription(),
                    const SizedBox(height: 20),
                    _buildTechnologies(),
                  ],
                ),
              ),
            ),
          ],
        ],
      ),
    );
  }

  Widget _buildImage() {
    return Stack(
      fit: StackFit.expand,
      children: [
        Image.network(
          widget.image,
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
        if (isHovered)
          Container(
            color: Colors.black.withOpacity(0.3),
            child: Center(
              child: Container(
                padding:
                    const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(
                  'View Project',
                  style: TextStyle(
                    color: Theme.of(context).colorScheme.primary,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
          ).animate().fadeIn(duration: 200.ms),
      ],
    );
  }

  Widget _buildTitle() {
    return Text(
      widget.title,
      style: Theme.of(context).textTheme.titleLarge?.copyWith(
            fontWeight: FontWeight.bold,
            color: isHovered ? Theme.of(context).colorScheme.primary : null,
          ),
    );
  }

  Widget _buildDescription() {
    return Text(
      widget.description,
      style: Theme.of(context).textTheme.bodyMedium?.copyWith(
            color: Colors.grey[600],
            height: 1.5,
          ),
    );
  }

  Widget _buildTechnologies() {
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: widget.technologies.map((tech) {
        return Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.primary.withOpacity(0.1),
            borderRadius: BorderRadius.circular(20),
          ),
          child: Text(
            tech,
            style: TextStyle(
              color: Theme.of(context).colorScheme.primary,
              fontSize: 12,
              fontWeight: FontWeight.w500,
            ),
          ),
        );
      }).toList(),
    );
  }

  Future<void> _launchUrl(String url) async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri);
    }
  }
}
