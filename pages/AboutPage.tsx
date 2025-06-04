
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { skillsData, contactInfoData } from '../data';
import { CONTACT_EMAIL, FULL_NAME, COMPANY_NAME, GITHUB_URL, LINKEDIN_URL, PORTFOLIO_URL, CONTACT_PHONE, COMPANY_URL } from '../constants';
import { EnvelopeIcon, PhoneIcon, LinkedInIcon, GitHubIcon, GlobeAltIcon, BuildingOffice2Icon } from '../components/icons';

const professionalJourney = [
  `As an Technical Project Manager at ${COMPANY_NAME}, I am passionate about driving innovation and embracing challenges. With a foundation in robust software engineering, I've honed my skills in not just coding, but in leading teams, setting high standards, and delivering impactful solutions that resonate with user needs and business objectives. My journey has been about transforming complex problems into elegant, scalable software, bringing a meticulous, results-oriented approach to every project.`,
  `My expertise spans the full software development lifecycle, from conceptualization and architectural design to deployment and iterative improvement. Understanding core client requirements and translating these into actionable user stories, my ability to gain in-depth knowledge of business needs enables me to deliver solutions that exceed expectations. My expertise covers a wide range of technologies including modern JavaScript frameworks (React, Next.js), backend systems (Node.js, Python), cloud platforms (AWS), and DevOps practices. I'm also deeply involved in emerging fields such as Generative AI, LLM model training, and chatbot development.`,
  `A firm believer in the power of teamwork, I focus on building and leading high-performing teams by setting clear goals, fostering open communication, and empowering individuals to grow. My commitment to continuous learning keeps me at the forefront of technological advancements, ensuring that the solutions I deliver are both innovative and future-proof. As I often say, "Success is not about having the best talent, it's about having a team that can work seamlessly together."`
];

const connectLinks = [
  { Icon: EnvelopeIcon, title: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { Icon: PhoneIcon, title: 'Phone', value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE}` },
  { Icon: LinkedInIcon, title: 'LinkedIn', value: 'Connect on LinkedIn', href: LINKEDIN_URL },
  { Icon: GitHubIcon, title: 'GitHub', value: 'View Projects', href: GITHUB_URL },
  { Icon: GlobeAltIcon, title: 'Portfolio', value: 'Visit Website', href: PORTFOLIO_URL },
  { Icon: BuildingOffice2Icon, title: 'Company', value: COMPANY_NAME, href: COMPANY_URL }
];


const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 animate-fade-in-up">
      <SectionTitle title="About Me" subtitle={`Get to know more about my journey and expertise as ${FULL_NAME}.`} centered />

      {/* Professional Journey Section */}
      <section>
        <Card className="bg-secondary-dark p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-text-light-primary mb-6">Professional Journey</h3>
          <div className="space-y-4 text-light-tertiary text-base md:text-lg leading-relaxed">
            {professionalJourney.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Card>
      </section>

      {/* Skills & Expertise Section */}
      <section>
        <SectionTitle title="Skills & Expertise" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((category) => (
            <Card key={category.id} className="h-full">
              <div className="flex items-center mb-4">
                <category.IconComponent className="h-8 w-8 text-accent-blue mr-3" />
                <h4 className="text-xl font-semibold text-text-light-primary">{category.name}</h4>
              </div>
              <ul className="space-y-1.5">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center text-sm text-light-tertiary">
                    <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2.5 shrink-0"></span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Let's Connect Section */}
      <section>
        <SectionTitle title="Let's Connect" centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectLinks.map(link => (
            <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="block">
              <Card className="text-center h-full" hoverEffect>
                <div className="flex justify-center mb-3">
                  <link.Icon className="h-8 w-8 text-accent-blue" />
                </div>
                <h4 className="text-lg font-semibold text-text-light-primary mb-1">{link.title}</h4>
                <p className="text-sm text-light-tertiary truncate">{link.value}</p>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
