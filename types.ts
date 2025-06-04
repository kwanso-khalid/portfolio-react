
import React from 'react';

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  href: string;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  role?: string;
  impact?: string[];
  technologies: string[];
  imageUrl?: string; // e.g., /path/to/image.jpg or full URL
  liveLink?: string;
  repoLink?: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyLink?: string;
  date: string;
  description: string;
  keyAchievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  // IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>; // Not used for individual skills, but for category
}

export interface SkillCategory {
  id:string;
  name: string;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  skills: Skill[];
}

export interface CoreCompetency {
  id: string;
  title: string;
  description: string;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ContactInfo {
  type: 'Email' | 'Phone' | 'LinkedIn' | 'GitHub' | 'Portfolio' | 'Company';
  value: string;
  href?: string;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

