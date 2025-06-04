
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';
import { coreCompetenciesData, projectsData, heroTechStack } from '../data';
import { FULL_NAME, HERO_TAGLINE, HERO_SUB_TAGLINE } from '../constants';
import { RectangleGroupIcon, ArrowTopRightOnSquareIcon } from '../components/icons';

const HomePage: React.FC = () => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24 animate-fade-in-up">
      {/* Hero Section */}
      <section className="text-center md:text-left pt-8 md:pt-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <img 
              src={`https://picsum.photos/seed/${FULL_NAME.replace(/\s+/g, '')}/240/240`} 
              alt={FULL_NAME} 
              className="rounded-full h-48 w-48 md:h-60 md:w-60 object-cover shadow-2xl border-4 border-accent-blue/50"
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-accent-blue text-lg font-medium">Hi, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-light-primary leading-tight">
              {FULL_NAME}
              <span className="block text-2xl sm:text-3xl md:text-4xl text-accent-blue mt-1">{HERO_TAGLINE}</span>
            </h1>
            <p className="text-xl text-light-tertiary max-w-2xl mx-auto md:mx-0">{HERO_SUB_TAGLINE}. I specialize in building scalable applications and nurturing high-performance engineering teams.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 my-4">
              {heroTechStack.map(tech => (
                <span key={tech.name} className="bg-secondary-dark text-xs text-light-tertiary px-3 py-1.5 rounded-full flex items-center shadow-sm border border-border-dark-neutral">
                  <tech.IconComponent className="w-4 h-4 mr-1.5 text-accent-blue" />
                  {tech.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button as="Link" to="/projects" variant="primary" size="lg" leftIcon={<RectangleGroupIcon className="w-5 h-5"/>}>View Projects</Button>
              <Button as="Link" to="/contact" variant="outline" size="lg" leftIcon={<ArrowTopRightOnSquareIcon className="w-5 h-5"/>}>Hire Me</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold text-accent-blue">50+</p>
          <p className="text-light-tertiary">Projects Delivered</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-accent-blue">10+</p>
          <p className="text-light-tertiary">Tech Stacks Mastered</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-accent-blue">12+</p>
          <p className="text-light-tertiary">Years of Experience</p>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section>
        <SectionTitle title="Core Competencies" subtitle="Leveraging years of experience to deliver exceptional results across various domains." centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coreCompetenciesData.map((competency) => (
            <Card key={competency.id} className="text-center group" hoverEffect>
              <div className="mb-4 flex justify-center">
                 <competency.IconComponent className="h-12 w-12 text-accent-blue group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-text-light-primary mb-2">{competency.title}</h3>
              <p className="text-sm text-light-tertiary">{competency.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <SectionTitle title="Featured Projects" subtitle="Showcasing a selection of my impactful work and key achievements." centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
             <Card key={project.id} className="flex flex-col" hoverEffect>
              {project.imageUrl && (
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              )}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-text-light-primary mb-1">{project.title}</h3>
                <p className="text-xs text-light-tertiary mb-2">{project.date}</p>
                <p className="text-sm text-light-tertiary mb-3 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map(tech => (
                        <span key={tech} className="text-xs bg-primary-dark text-accent-blue px-2 py-0.5 rounded-full border border-accent-blue/30">{tech}</span>
                    ))}
                </div>
              </div>
              <Button as="Link" to={`/projects#${project.id}`} variant="outline" size="sm" className="w-full mt-auto">
                View Details
              </Button>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button as="Link" to="/projects" variant="primary" size="lg">View All Projects</Button>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="text-center bg-secondary-dark py-12 md:py-20 rounded-lg shadow-xl">
        <SectionTitle 
          title="Let's Work Together" 
          subtitle="Whether you need technical leadership, robust software development, or help to bring your ideas to life." 
          centered 
        />
        <Button as="Link" to="/contact" variant="primary" size="lg">Get in Touch</Button>
      </section>
    </div>
  );
};

export default HomePage;
