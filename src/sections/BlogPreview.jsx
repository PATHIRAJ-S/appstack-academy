import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import { blogPosts } from '../data/blog';

const BlogPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="RESOURCES & ARTICLES"
          title="Latest Career Insights & Tech Guides"
          highlightText="Insights & Tech Guides"
          subtitle="Stay updated with industry roadmaps, practical coding techniques, and tech career strategy guides."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/blog">
            <Button size="lg" icon={ArrowRight} iconPosition="right">
              Explore All Articles & Guides
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
