import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const BlogCard = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group"
    >
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-md text-[#2563EB] shadow-sm">
          {post.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-[#64748B] mb-2 font-medium">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-2 line-clamp-2">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="text-sm text-[#64748B] leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.author}</span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-blue-700 transition-colors group-hover:translate-x-1 duration-200"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
