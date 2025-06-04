
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { BookOpenIcon } from '../components/icons';

const BlogsPage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 animate-fade-in-up text-center">
      <SectionTitle title="Blogs" subtitle="Insights, articles, and thoughts on technology and development." centered />
      
      <div className="max-w-md mx-auto bg-secondary-dark p-8 rounded-lg shadow-xl">
        <BookOpenIcon className="h-24 w-24 text-accent-blue mx-auto mb-6" />
        <h3 className="text-2xl font-semibold text-text-light-primary mb-3">Coming Soon!</h3>
        <p className="text-light-tertiary">
          I'm currently working on curating valuable content for this section. 
          Stay tuned for insightful articles and updates on my latest learnings and experiences.
        </p>
      </div>
    </div>
  );
};

export default BlogsPage;
