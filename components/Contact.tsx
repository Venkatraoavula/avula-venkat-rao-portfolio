import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-10 lg:p-16 text-white">
              <h2 className="text-3xl font-bold mb-6">Let's work together!</h2>
              <p className="text-blue-100 text-lg mb-12 max-w-md">
                I'm currently looking for full-time opportunities. If you have any questions or just want to say hi, feel free to reach out.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Email me at</p>
                    <a href={`mailto:${RESUME_DATA.contact.email}`} className="font-medium hover:text-blue-100 transition-colors">
                      {RESUME_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Call me at</p>
                    <a href={`tel:${RESUME_DATA.contact.phone}`} className="font-medium hover:text-blue-100 transition-colors">
                      {RESUME_DATA.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Location</p>
                    <p className="font-medium">
                      {RESUME_DATA.contact.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a 
                  href={`https://github.com/${RESUME_DATA.contact.github}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={`https://linkedin.com/in/${RESUME_DATA.contact.linkedin}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-10 lg:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};