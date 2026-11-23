import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import Button from '../components/Button';
import BlogCard from '../components/BlogCard';
import FinalCTA from '../sections/FinalCTA';
import { blogPosts } from '../data/blog';

const BlogDetails = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | AppStack Blog`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="pt-36 pb-20 text-center max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Article Not Found</h2>
        <Link to="/blog">
          <Button icon={ArrowLeft} iconPosition="left">Back to Blog</Button>
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-28 pb-20">
      <div className="bg-slate-50 border-b border-slate-200/60 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-[#2563EB] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Category & Title */}
        <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
          {post.category}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-4 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B] pb-8 border-b border-slate-200/80 mb-8 font-medium">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#2563EB]" />
            <span>{post.author} ({post.authorRole})</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#7C3AED]" />
            <span>{post.date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#06B6D4]" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden mb-10 shadow-xl bg-slate-100 max-h-[450px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base space-y-6">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('###')) {
              return (
                <h3 key={idx} className="text-2xl font-bold text-[#0F172A] pt-4">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('---')) {
              return <hr key={idx} className="my-6 border-slate-200" />;
            }
            return (
              <p key={idx} className="text-base text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.slug} post={rPost} />
              ))}
            </div>
          </div>
        )}
      </article>

      <FinalCTA />
    </div>
  );
};

export default BlogDetails;
