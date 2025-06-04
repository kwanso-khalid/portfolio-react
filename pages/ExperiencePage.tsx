
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { experienceData } from '../data';
import { BriefcaseIcon, CheckCircleIcon, HashtagIcon, ExternalLinkIcon } from '../components/icons';

const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 animate-fade-in-up">
      <SectionTitle title="Experience" subtitle="My professional journey and achievements." centered />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border-dark-neutral transform -translate-x-1/2 hidden md:block"></div>

        {experienceData.map((exp, index) => (
          <div key={exp.id} className={`mb-12 md:mb-16 flex md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Dot on the timeline */}
            <div className="hidden md:flex flex-col items-center mx-6 shrink-0">
               <div className="w-6 h-6 bg-accent-blue rounded-full border-4 border-secondary-dark shadow-md z-10 mt-1"></div>
               {index < experienceData.length -1 && <div className="w-1 h-full bg-border-dark-neutral"></div>}
            </div>
            
            {/* Card Content */}
            <div className="w-full md:w-[calc(50%-1.5rem-0.25rem)]"> {/* 1.5rem for mx-6, 0.25rem for half of timeline width */}
              <Card className="shadow-xl relative">
                {/* Mobile dot */}
                <div className="md:hidden absolute -left-4 top-6 w-3 h-3 bg-accent-blue rounded-full border-2 border-secondary-dark"></div>

                <div className="flex items-start mb-3">
                  <BriefcaseIcon className="h-10 w-10 text-accent-blue mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-text-light-primary">{exp.role}</h3>
                    <p className="text-accent-blue font-medium">
                      {exp.companyLink ? (
                        <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center">
                          {exp.company} <ExternalLinkIcon className="w-4 h-4 ml-1.5" />
                        </a>
                      ) : exp.company}
                    </p>
                    <p className="text-sm text-light-tertiary">{exp.date}</p>
                  </div>
                </div>
                
                <p className="text-light-tertiary mb-4 leading-relaxed">{exp.description}</p>
                
                <h4 className="text-md font-semibold text-text-light-primary mb-2">Key Achievements:</h4>
                <ul className="space-y-1.5 mb-4">
                  {exp.keyAchievements.map((ach, i) => (
                    <li key={i} className="flex items-start text-sm text-light-tertiary">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-md font-semibold text-text-light-primary mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="bg-primary-dark text-xs text-accent-blue px-2.5 py-1 rounded-full flex items-center border border-accent-blue/30">
                      <HashtagIcon className="w-3 h-3 mr-1 opacity-70"/> {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
