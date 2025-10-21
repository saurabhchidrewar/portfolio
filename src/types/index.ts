// Personal Information
export interface PersonalInfo {
    name: string;
    title: string;
    subtitle: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    availability: string;
    resumeUrl: string;
    imageUrl: string;
    socialLinks: {
        linkedin: string;
        github: string;
        twitter: string;
    };
    highlights: string[];
}

// Education
export interface Education {
    degree: string;
    field: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
    achievements: string[];
}

// Experience
export interface ExperienceHighlight {
    metric: string;
    description: string;
}

export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    duration: string;
    type: string;
    description: string;
    achievements: string[];
    technologies: string[];
    highlights: ExperienceHighlight[];
}

// Projects
export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubLink: string | null;
    liveLink: string | null;
    features: string[];
    impact: string;
    year: string;
    category: string;
    status: string;
}

// Skills
export interface Skill {
    name: string;
    level: number;
    years: string;
}

export interface SkillCategory {
    title: string;
    icon: string;
    skills: Skill[];
}

export interface TopSkill {
    name: string;
    level: number;
    icon: string;
}

export interface SkillsData {
    categories: SkillCategory[];
    topSkills: TopSkill[];
}

// Awards
export interface Award {
    title: string;
    subtitle: string;
    company: string;
    description: string;
    icon: string;
    year: string;
    category: string;
}
