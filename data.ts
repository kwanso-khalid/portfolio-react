import React from 'react';
import { Project, ExperienceEntry, SkillCategory, CoreCompetency, ContactInfo } from './types';
import {
  CodeBracketIcon, ServerStackIcon, CircleStackIcon, CloudIcon, CubeTransparentIcon,
  CommandLineIcon, ListBulletIcon, UsersIcon, BeakerIcon, UserGroupIcon, WrenchScrewdriverIcon,
  EnvelopeIcon, PhoneIcon, LinkedInIcon, GitHubIcon, GlobeAltIcon, BuildingOffice2Icon, RectangleGroupIcon, LightBulbIcon
} from './components/icons';
import { CONTACT_EMAIL, CONTACT_PHONE, LINKEDIN_URL, GITHUB_URL, PORTFOLIO_URL, COMPANY_NAME, COMPANY_URL } from './constants';

export const coreCompetenciesData: CoreCompetency[] = [
  { id: 'fsd', title: 'Full Stack Development', description: 'Crafting responsive UIs and robust server-side applications using modern technologies and best practices.', IconComponent: CodeBracketIcon },
  { id: 'tl', title: 'Team Leadership', description: 'Guiding and mentoring engineering teams to deliver high-quality software solutions efficiently.', IconComponent: UserGroupIcon },
  { id: 'ad', title: 'Architecture Design', description: 'Designing scalable, resilient, and maintainable software systems and cloud architectures.', IconComponent: CubeTransparentIcon },
  { id: 'cs', title: 'Cloud Solutions', description: 'Leveraging AWS and modern cloud services to build and deploy scalable applications.', IconComponent: CloudIcon },
  { id: 'ai', title: 'AI Integration', description: 'Integrating AI and ML solutions to solve complex business problems and enhance user experiences.', IconComponent: BeakerIcon },
  { id: 'ts', title: 'Technical Strategy', description: 'Developing and executing technical roadmaps aligned with business goals and strategic planning.', IconComponent: LightBulbIcon },
];

export const projectsData: Project[] = [
  {
    id: 'choopass',
    title: 'ChooPass - BChes',
    date: 'July 2023 - Present',
    description: 'A cutting-edge enterprise video visitor management and check-in platform serving multiple industries. Features advanced analytics dashboards with customizable data visualization, Communications Workflows, and comprehensive reporting capabilities.',
    role: 'Technical Project Manager',
    impact: [
      'Spearheaded development of an enterprise-grade check-in platform serving 500+ organizations within 6 months.',
      'Improved secure payment processing with Stripe and Chargebee, processing $5M+ in transactions.',
      'Reduced system downtime by 30% through robust infrastructure and monitoring.',
      'Achieved 99.99% system uptime through robust architecture.',
      'Enhanced platform performance, reducing average response time by 40%.',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Chargebee', 'AWS ECS', 'AWS Lambda', 'Amazon S3', 'CloudFront', 'Route 53', 'Docker', 'GitHub Actions', 'Terraform'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveLink: '#', // Replace with actual link
  },
  {
    id: '4corners',
    title: '4Corners - OpenAI Integration',
    date: 'September 2023 - November 2023',
    description: 'An innovative AI-powered legal document analysis system that automatically summarizes depositions, identifies key entities, and generates concise reports. The system enhances legal research efficiency and accuracy, and streamlined legal document review while maintaining strict confidentiality and security requirements.',
    role: 'Technical Lead',
    impact: [
      'Reduced document analysis time by 75% through AI automation.',
      'Improved accuracy in legal information extraction by 90%.',
      'Achieved 95% accuracy in key information extraction.',
      'Handled a high volume of documents, processing over 10,000 monthly.',
      'Integrated advanced security measures for sensitive data handling.',
    ],
    technologies: ['React', 'OpenAI API', 'TypeScript', 'Next.js', 'MongoDB', 'Redis', 'AWS Lambda', 'Amazon S3'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
  },
  {
    id: 'tvstoybox',
    title: 'TVs ToyBox E-commerce Platform',
    date: 'January 2019 - December 2019',
    description: 'A comprehensive e-commerce platform for TVs ToyBox, integrating with industry giants like Diamond Comics and Zoku. The system handles complex inventory management, order processing, and real-time data synchronization across multiple channels.',
    role: 'Project Manager',
    impact: [
      'Scaled platform to handle $10M+ in annual sales.',
      'Integrated with major distributors like Diamond Comics and HOS.',
      'Streamlined order processing time by 60% through automation.',
      'Decreased customer service inquiries by 40%.',
      'Improved inventory accuracy to 99.5%.',
    ],
    technologies: ['React', 'Express', 'MySQL', 'Redis', 'AWS EC2', 'RDS', 'ElasticBeanstalk', 'Docker', 'Jenkins'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
  },
  {
    id: 'bushnell',
    title: 'Bushnell SSO Implementation',
    date: 'April 2019 - December 2020',
    description: 'Developed and deployed a robust Single Sign-On (SSO) solution using OpenID Connect and OAuth 2.0, enabling seamless authentication across multiple applications and services. The system handles complex authorization scenarios and provides a centralized user management interface.',
    role: 'Technical Lead',
    impact: [
      'Enabled secure authentication for 20+ applications.',
      'Reduced login-related support tickets by 60%.',
      'Implemented MFA, reducing security incidents by 95%.',
      'Decreased authentication time by 70%.',
      'Improved user experience with seamless login.',
    ],
    technologies: ['Java', 'Spring Security', 'Node.js', 'PostgreSQL', 'Redis', 'OpenID Connect', 'OAuth 2.0', 'AWS Cognito', 'Docker', 'Kubernetes'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
  },
  {
    id: 'sytal',
    title: 'Sytal - Malware Analysis Platform',
    date: 'January 2014 - December 2014',
    description: 'The project involved creating an advanced automated static and dynamic malware analysis system. The system provided an API for integration with security tools and featured near real-time threat detection capabilities.',
    role: 'Lead Developer',
    impact: [
      'Processed 1M+ files for malware analysis.',
      'Achieved 98% accuracy in malware detection.',
      'Reduced analysis time from hours to minutes.',
      'Integrated with 10+ security tools.',
      'Implemented automated reporting system.',
    ],
    technologies: ['Python', 'Django', 'MongoDB', 'Redis', 'AngularJS', 'Docker', 'Kubernetes', 'Elasticsearch'],
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
  },
  {
    id: 'walmartapi',
    title: 'Walmart API Integration',
    date: 'April 2018 - June 2018',
    description: 'Developed an integration with Walmart\'s Marketplace API, enabling automated product listing, inventory synchronization, and order management. The system handles real-time synchronization and includes robust error handling and retry mechanisms.',
    role: 'Technical Lead',
    impact: [
      'Automated listing of 50,000+ products.',
      'Synchronized inventory in real-time.',
      'Achieved 99.8% order accuracy rate.',
      'Reduced manual data entry by 80%.',
      'Developed custom retry mechanisms.',
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'AWS Lambda', 'SQS', 'CloudWatch', 'Docker'],
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
  },
];

export const experienceData: ExperienceEntry[] = [
  {
    id: 'engmgr',
    role: 'Technical Project Manager',
    company: 'Kwanso',
    companyLink: 'https://kwanso.com',
    date: 'September 2021 - Present',
    description: 'Leading engineering teams and driving technical innovation. Responsible for project planning, execution, and delivery, ensuring alignment with strategic business goals. Mentoring engineers and fostering a collaborative, high-performance culture.',
    keyAchievements: [
      'Managing and mentoring engineering teams.',
      'Driving technical strategy and innovation.',
      'Overseeing project architecture and design.',
      'Planning and executing team Sprints and workshops.',
    ],
    technologies: ['React', 'Node.js', 'Next.js', 'TypeScript', 'OpenAI', 'Vercel'],
  },
  {
    id: 'projmgr',
    role: 'Project Manager',
    company: 'Previous Company', // Replace with actual
    date: 'October 2020 - August 2021',
    description: 'Led project management and team coordination efforts. Managed project lifecycles from conception to deployment, ensuring timely delivery and adherence to quality standards. Facilitated communication between stakeholders and development teams.',
    keyAchievements: [
      'Successfully delivered 15+ projects on time and within budget.',
      'Improved team productivity by 25% through agile methodologies.',
      'Managed cross-functional teams of up to 10 members.',
      'Implemented effective risk management strategies.',
    ],
    technologies: ['Jira', 'Confluence', 'Agile', 'Scrum', 'MS Project'],
  },
];

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    IconComponent: CodeBracketIcon,
    skills: [
      { name: 'React' }, { name: 'Next.js' }, { name: 'Vue.js' }, { name: 'Angular' }, { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' }, { name: 'HTML5' }, { name: 'CSS3/Sass' }, { name: 'Tailwind CSS' },
      { name: 'Redux/ Zustand' }, { name: 'GraphQL (Apollo)' }, { name: 'Webpack/Vite' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Development',
    IconComponent: ServerStackIcon,
    skills: [
      { name: 'Node.js' }, { name: 'Express.js' }, { name: 'Python (Django/Flask)' }, { name: 'Java (Spring Boot)' },
      { name: 'Ruby on Rails' }, { name: 'PHP (Laravel)' }, { name: 'REST APIs' }, { name: 'GraphQL APIs' }, { name: 'Microservices' }
    ]
  },
  {
    id: 'db',
    name: 'Database & ORM',
    IconComponent: CircleStackIcon,
    skills: [
      { name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'MongoDB' }, { name: 'Redis' },
      { name: 'Elasticsearch' }, { name: 'SQLAlchemy' }, { name: 'Prisma' }, { name: 'TypeORM' }
    ]
  },
  {
    id: 'devops',
    name: 'Cloud & DevOps',
    IconComponent: CloudIcon,
    skills: [
      { name: 'AWS (EC2, S3, Lambda, RDS, ECS, EKS)' }, { name: 'Docker' }, { name: 'Kubernetes' },
      { name: 'Terraform' }, { name: 'Ansible' }, { name: 'CI/CD (GitHub Actions, Jenkins)' }, { name: 'Serverless Framework' }
    ]
  },
  {
    id: 'systemdesign',
    name: 'System Design',
    IconComponent: CubeTransparentIcon,
    skills: [
      { name: 'Scalability Patterns' }, { name: 'Distributed Systems' }, { name: 'Event-Driven Architecture' },
      { name: 'DDD (Domain-Driven Design)' }, { name: 'Message Queues (Kafka, RabbitMQ)' }, { name: 'Caching Strategies' }
    ]
  },
  {
    id: 'programming',
    name: 'Programming Languages',
    IconComponent: CommandLineIcon,
    skills: [
      { name: 'JavaScript/TypeScript' }, { name: 'Python' }, { name: 'Java' }, { name: 'Ruby' }, { name: 'Go' }, { name: 'C#' }
    ]
  },
  {
    id: 'versioncontrol',
    name: 'Version Control',
    IconComponent: ListBulletIcon,
    skills: [
      { name: 'Git' }, { name: 'GitHub' }, { name: 'GitLab' }, { name: 'Bitbucket' }, { name: 'GitFlow' }
    ]
  },
  {
    id: 'teamleadership',
    name: 'Team Leadership',
    IconComponent: UsersIcon,
    skills: [
      { name: 'Agile/Scrum Methodologies' }, { name: 'Project Management' }, { name: 'Mentoring & Coaching' },
      { name: 'Code Reviews' }, { name: 'Technical Planning' }, { name: 'Conflict Resolution' }
    ]
  },
  {
    id: 'aiml',
    name: 'AI & Machine Learning',
    IconComponent: BeakerIcon,
    skills: [
      { name: 'OpenAI API' }, { name: 'LangChain' }, { name: 'Vector DBs' },
      { name: 'Embeddings' }, { name: 'RAG (Retrieval Augmented Generation)' }, { name: 'Fine-tuning Models' }
    ]
  },
];

export const contactInfoData: ContactInfo[] = [
  { type: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, IconComponent: EnvelopeIcon },
  { type: 'Phone', value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE}`, IconComponent: PhoneIcon },
  { type: 'LinkedIn', value: 'Connect on LinkedIn', href: LINKEDIN_URL, IconComponent: LinkedInIcon },
  { type: 'GitHub', value: 'View Projects', href: GITHUB_URL, IconComponent: GitHubIcon },
  { type: 'Portfolio', value: 'Visit Website', href: PORTFOLIO_URL, IconComponent: GlobeAltIcon },
  { type: 'Company', value: COMPANY_NAME, href: COMPANY_URL, IconComponent: BuildingOffice2Icon },
];

export const heroTechStack: { name: string, IconComponent: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement | null }[] = [
  { name: "React", IconComponent: CodeBracketIcon },
  { name: "TypeScript", IconComponent: CodeBracketIcon },
  { name: "Node.js", IconComponent: ServerStackIcon },
  { name: "OpenAI", IconComponent: BeakerIcon },
  { name: "AWS", IconComponent: CloudIcon },
  { name: "Next.js", IconComponent: CodeBracketIcon },
  { name: "GraphQL", IconComponent: CodeBracketIcon },
];