import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { QuickLinks } from '../components/QuickLinks';
import { QuoteCarousel } from '../components/QuoteCarousel';
import { ProjectsSection } from '../components/ProjectsSection';
import { InternshipsSection } from '../components/InternshipsSection';
import { SkillsSection } from '../components/SkillsSection';
import { AchievementsSection } from '../components/AchievementsSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage = () => {
  return (
    <div className="bg-gray-900">
      <HeroSection />
      <QuickLinks />
      <QuoteCarousel />
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="internships">
        <InternshipsSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="achievements">
        <AchievementsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};