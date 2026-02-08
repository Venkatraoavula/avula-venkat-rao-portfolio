import React from 'react';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import { EXPERIENCE, RESUME_DATA } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Briefcase size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Experience</h2>
            </div>
            
            <div className="space-y-8">
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-500"></div>
                  <div className="mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span className="bg-slate-200 px-2 py-0.5 rounded text-xs">{exp.type}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-slate-600 text-sm leading-relaxed">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Education & Certs</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{RESUME_DATA.education.degree}</h3>
                <p className="text-slate-700 font-medium mt-1">{RESUME_DATA.education.college}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {RESUME_DATA.education.year}
                  </span>
                  <span className="font-semibold text-emerald-600">CGPA: {RESUME_DATA.education.cgpa}</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold">
                  <Award size={20} className="text-orange-500" />
                  Certifications
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-900">NPTEL Certification</p>
                      <p className="text-sm text-slate-500">Programming in Java</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-900">Revature Pre-Training</p>
                      <p className="text-sm text-slate-500">Python, SQL, Manual Testing</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};