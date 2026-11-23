import React, { useEffect } from 'react';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import WhyChooseUs from '../sections/WhyChooseUs';
import CoursesPreview from '../sections/CoursesPreview';
import LearningJourney from '../sections/LearningJourney';
import StudentProjectsSection from '../sections/StudentProjectsSection';
import InternshipSection from '../sections/InternshipSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import AchievementsSection from '../sections/AchievementsSection';
import CertificateVerificationSection from '../sections/CertificateVerificationSection';
import GallerySection from '../sections/GallerySection';
import BlogPreview from '../sections/BlogPreview';
import FinalCTA from '../sections/FinalCTA';

const Home = () => {
  useEffect(() => {
    document.title = 'AppStack Academy | Learn, Build & Get Certified';
  }, []);

  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Stats />
      <WhyChooseUs />
      <CoursesPreview />
      <LearningJourney />
      {/*       <StudentProjectsSection /> */}
      {/*       <InternshipSection /> */}
      <TestimonialsSection />
      {/*      <AchievementsSection /> */}
      {/*       <CertificateVerificationSection /> */}
      {/*   <GallerySection /> */}
      {/*   <BlogPreview /> */}
      <FinalCTA />
    </main>
  );
};

export default Home;
