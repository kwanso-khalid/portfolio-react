import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE_NAME, FULL_NAME, CONTACT_EMAIL, CONTACT_PHONE, LINKEDIN_URL, GITHUB_URL, COMPANY_NAME, COMPANY_URL } from '../constants';
import { LinkedInIcon, GitHubIcon, GlobeAltIcon, XIcon as TwitterIcon } from './icons'; // Corrected import for XIcon
import Logo from './Logo';
import { SocialLink } from '../types';


const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', href: LINKEDIN_URL, IconComponent: LinkedInIcon },
  { name: 'GitHub', href: GITHUB_URL, IconComponent: GitHubIcon },
  { name: 'X (Twitter)', href: "https://x.com/yourprofile", IconComponent: TwitterIcon }, // Replace with actual
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-dark border-t border-border-dark-neutral text-light-tertiary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and Info */}
          <div className="space-y-4">
            <Logo size="small" />
            <p className="text-sm">Technical Project Manager at <a href={COMPANY_URL} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">{COMPANY_NAME}</a></p>
            <p className="text-sm">{CONTACT_EMAIL}</p>
            <p className="text-sm">{CONTACT_PHONE}</p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h5 className="text-lg font-semibold text-text-light-primary mb-4">Navigation</h5>
            <ul className="space-y-2">
              {NAV_LINKS.filter(link => link.name !== 'Home').map((link) => ( // Portfolio link often is Home
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-accent-blue transition-colors">
                    {link.name === 'Home' ? 'Portfolio' : link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Professional */}
          <div>
            <h5 className="text-lg font-semibold text-text-light-primary mb-4">Professional</h5>
            <ul className="space-y-2">
              <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">LinkedIn</a></li>
              <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">GitHub</a></li>
              <li><a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">X (Twitter)</a></li>
              <li><a href={COMPANY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">Company</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h5 className="text-lg font-semibold text-text-light-primary mb-4">Connect</h5>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-light-tertiary hover:text-accent-blue transition-colors"
                >
                  <link.IconComponent className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border-dark-neutral pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;