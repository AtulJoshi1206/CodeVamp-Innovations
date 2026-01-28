import { HeroSection } from '../components/HeroSection';
import { ProofStrip } from '../components/ProofStrip';
import { CoreCompetencies } from '../components/CoreCompetencies';
import { ProjectsSection } from '../components/ProjectsSection';

import { ResearchSection } from '../components/ResearchSection';
import { SkillsSection } from '../components/SkillsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { AchievementsSection } from '../components/AchievementsSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <ProofStrip />
      <CoreCompetencies />
      <ProjectsSection />

      <ResearchSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
};