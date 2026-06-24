import { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { RoadmapSection } from './components/sections/RoadmapSection';
import { QuizSection } from './components/sections/QuizSection';
import { ProgressSection } from './components/sections/ProgressSection';
import { InterviewSection } from './components/sections/InterviewSection';
import { NavSection } from './types';

export default function App() {
  const [active, setActive] = useState<NavSection>('Home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [active]);

  const renderSection = () => {
    switch (active) {
      case 'Home':      return <HeroSection setActive={setActive} />;
      case 'Roadmap':   return <RoadmapSection />;
      case 'Quiz':      return <QuizSection />;
      case 'Progress':  return <ProgressSection />;
      case 'Interview': return <InterviewSection />;
      default:          return <HeroSection setActive={setActive} />;
    }
  };

  return (
    <div className="min-h-screen text-white font-sans">
      <NavBar active={active} setActive={setActive} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}
