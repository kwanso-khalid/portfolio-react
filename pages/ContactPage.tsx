import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import { contactInfoData } from '../data';
import { EnvelopeIcon, PhoneIcon, GitHubIcon, RectangleGroupIcon, PaperAirplaneIcon, CheckCircleIcon } from '../components/icons';
import { CONTACT_EMAIL, CONTACT_PHONE, GITHUB_URL, PORTFOLIO_URL } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend.
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Reset form after a delay or on success
    setTimeout(() => {
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setIsSubmitted(false); // Allow another submission
    }, 3000);
  };

  const quickLinks = [
    { name: "Portfolio", href: PORTFOLIO_URL, Icon: RectangleGroupIcon },
    { name: "GitHub", href: GITHUB_URL, Icon: GitHubIcon },
  ];

  return (
    <div className="space-y-16 md:space-y-24 animate-fade-in-up">
      <SectionTitle
        title="Let's Connect"
        subtitle="Ready to discuss your next project or explore collaboration opportunities?"
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Contact Information & Quick Links */}
        <div className="lg:col-span-1 space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-text-light-primary mb-4">Contact Information</h3>
            <p className="text-sm text-light-tertiary mb-4">Get in touch through any of these channels:</p>
            <div className="space-y-3">
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-accent-blue mr-3" />
                <div>
                  <p className="text-sm font-medium text-text-light-primary">Email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-light-tertiary hover:text-accent-blue">{CONTACT_EMAIL}</a>
                </div>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-accent-blue mr-3" />
                <div>
                  <p className="text-sm font-medium text-text-light-primary">Phone</p>
                  <a href={`tel:${CONTACT_PHONE}`} className="text-sm text-light-tertiary hover:text-accent-blue">{CONTACT_PHONE}</a>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-text-light-primary mb-4">Quick Links</h3>
            <p className="text-sm text-light-tertiary mb-4">Check out my work and profiles:</p>
            <div className="space-y-3">
              {quickLinks.map(link => (
                <Button
                  key={link.name}
                  as="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="w-full justify-start"
                  leftIcon={<link.Icon className="w-5 h-5" />}
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Send a Message Form */}
        <div className="lg:col-span-2">
          <Card className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-text-light-primary mb-1">Send a Message</h3>
            <p className="text-sm text-light-tertiary mb-6">Fill out the form below and I'll get back to you as soon as possible.</p>

            {isSubmitted ? (
              <div className="text-center py-8 bg-green-900/30 border border-green-500 rounded-md">
                <CheckCircleIcon className="h-12 w-12 text-green-400 mx-auto mb-3" />
                <p className="text-lg font-semibold text-green-300">Message Sent!</p>
                <p className="text-sm text-green-400">Thank you for reaching out. I'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-light-secondary mb-1">First Name</label>
                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required
                      className="w-full bg-primary-dark border-border-dark-neutral rounded-md shadow-sm p-3 text-sm text-text-light-primary focus:ring-accent-blue focus:border-accent-blue"
                      placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-light-secondary mb-1">Last Name</label>
                    <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required
                      className="w-full bg-primary-dark border-border-dark-neutral rounded-md shadow-sm p-3 text-sm text-text-light-primary focus:ring-accent-blue focus:border-accent-blue"
                      placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light-secondary mb-1">Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-primary-dark border-border-dark-neutral rounded-md shadow-sm p-3 text-sm text-text-light-primary focus:ring-accent-blue focus:border-accent-blue"
                    placeholder="Enter your email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light-secondary mb-1">Message</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required
                    className="w-full bg-primary-dark border-border-dark-neutral rounded-md shadow-sm p-3 text-sm text-text-light-primary focus:ring-accent-blue focus:border-accent-blue"
                    placeholder="Enter your message"></textarea>
                </div>
                <div className="text-right">
                  <Button type="submit" variant="primary" size="lg" leftIcon={<PaperAirplaneIcon className="w-5 h-5" />}>
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;