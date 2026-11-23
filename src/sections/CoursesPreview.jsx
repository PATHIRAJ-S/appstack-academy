import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { courses } from '../data/courses';

const CoursesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="POPULAR COURSES"
          title="Industry-Aligned Training Programs"
          highlightText="Training Programs"
          subtitle="Explore our practical coding bootcamps and design programs crafted to transform beginners into skilled professionals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/courses">
            <Button size="lg" icon={ArrowRight} iconPosition="right">
              View All Courses & Curriculums
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CoursesPreview;
