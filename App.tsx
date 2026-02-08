import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GeminiChat } from './components/GeminiChat';
import { WelcomeScreen } from './components/WelcomeScreen';

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-50">
      {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <GeminiChat />
    </div>
  );
};

export default App;