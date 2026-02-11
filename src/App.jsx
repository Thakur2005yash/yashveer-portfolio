import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SkillsLogos from './components/SkillsLogos';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import BottomNav from './components/BottomNav';
import GitHubContributions from './components/GitHubContributions';
import WaveBackground from './components/WaveBackground';
import LoadingOverlay from './components/LoadingOverlay';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white relative">
      <WaveBackground />
      <LoadingOverlay />
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <BottomNav />
      <main className="relative z-10">
        <section id="home">
          <Hero onContactClick={() => setIsContactOpen(true)} />
        </section>
        <About />
        <Skills />
        <SkillsLogos />
        <Projects />
        <Resume />
        <Education />
        <Certifications />
        <Achievements />
        <section className="container-custom mx-auto py-12">
          <GitHubContributions />
        </section>
        <CodingProfiles />
        <Contact onContactClick={() => setIsContactOpen(true)} />
      </main>
      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        email="thakuryashveer2005@gmail.com"
      />
    </div>
  );
}

export default App;
