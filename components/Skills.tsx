import React from 'react';
import { Layout, Server, Database, Cpu, Wrench } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-blue-600" />,
      skills: RESUME_DATA.skills.frontend,
      color: "bg-blue-50 border-blue-100"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-indigo-600" />,
      skills: RESUME_DATA.skills.backend,
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6 text-emerald-600" />,
      skills: RESUME_DATA.skills.database,
      color: "bg-emerald-50 border-emerald-100"
    },
    {
      title: "AI & Tools",
      icon: <Cpu className="w-6 h-6 text-violet-600" />,
      skills: [...RESUME_DATA.skills.ai, ...RESUME_DATA.skills.tools],
      color: "bg-violet-50 border-violet-100"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive set of technical skills across the full stack, with specialized knowledge in database management and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-6 border ${category.color} hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-6">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};