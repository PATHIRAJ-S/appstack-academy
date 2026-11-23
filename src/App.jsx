import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnquiryProvider } from './context/EnquiryContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import EnquireModal from './components/EnquireModal';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import StudentProjects from './pages/StudentProjects';
import Internship from './pages/Internship';
import Testimonials from './pages/Testimonials';
import Achievements from './pages/Achievements';
import CertificateVerification from './pages/CertificateVerification';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <EnquiryProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB] selection:text-white">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseDetails />} />
              {/*  <Route path="/student-projects" element={<StudentProjects />} /> */}
              {/*   <Route path="/internship" element={<Internship />} /> */}
              <Route path="/testimonials" element={<Testimonials />} />
              {/*   <Route path="/achievements" element={<Achievements />} /> */}
              {/*               <Route path="/certificate-verification" element={<CertificateVerification />} /> */}
              <Route path="/gallery" element={<Gallery />} />
              {/*    <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetails />} /> */}
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <EnquireModal />
        </div>
      </Router>
    </EnquiryProvider>
  );
}

export default App;
