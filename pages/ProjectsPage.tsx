
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { projectsData } from '../data';
import { CheckCircleIcon, HashtagIcon, ExternalLinkIcon, GitHubIcon } from '../components/icons'; // Assuming GitHubIcon for repoLink
import Button from '../components/Button';

const ProjectCard: React.FC<{ project: typeof projectsData[0] }> = ({ project }) => {
  return (
    <Card id={project.id} className="flex flex-col h-full transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
      {project.imageUrl && (
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-52 object-cover rounded-t-lg mb-4" 
        />
      )}
      <div className="p-1 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-text-light-primary mb-1">{project.title}</h3>
        <p className="text-xs text-light-tertiary mb-3">{project.date}</p>
        
        {project.role && <p className="text-sm font-medium text-accent-blue mb-2">Role: {project.role}</p>}
        
        <p className="text-sm text-light-tertiary mb-4 leading-relaxed line-clamp-4 flex-grow">{project.description}</p>
        
        {project.impact && project.impact.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-text-light-primary mb-1.5">Impact:</h4>
            <ul className="space-y-1">
              {project.impact.slice(0,3).map((item, i) => ( // Show first 3 impacts
                <li key={i} className="flex items-start text-xs text-light-tertiary">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-1.5 shrink-0 mt-px" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-text-light-primary mb-1.5">Technologies:</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map(tech => (
              <span key={tech} className="bg-primary-dark text-xs text-accent-blue px-2.5 py-1 rounded-full flex items-center border border-accent-blue/30">
                <HashtagIcon className="w-3 h-3 mr-1 opacity-70"/> {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex space-x-3 pt-2 border-t border-border-dark-neutral/50">
            {project.liveLink && project.liveLink !== '#' && (
                <Button 
                    as="a" 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    variant="primary" 
                    size="sm" 
                    className="flex-1"
                    leftIcon={<ExternalLinkIcon className="w-4 h-4"/>}
                >
                    Live Demo
                </Button>
            )}
            {project.repoLink && (
                 <Button 
                    as="a" 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    leftIcon={<GitHubIcon className="w-4 h-4"/>}
                >
                    View Code
                </Button>
            )}
        </div>
      </div>
    </Card>
  );
};


const ProjectsPage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 animate-fade-in-up">
      <SectionTitle title="Projects" subtitle="A showcase of my recent work and contributions." centered />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
