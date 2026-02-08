import React from 'react';
import { RESUME_DATA } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </p>
        <p className="text-sm">
          Built with React, Tailwind CSS, and powered by <span className="text-blue-400 font-medium">Google Gemini</span>.
        </p>
      </div>
    </footer>
  );
};