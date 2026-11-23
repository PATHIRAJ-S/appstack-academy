import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  icon: Icon = null,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#2563EB] hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 focus:ring-blue-500',
    secondary: 'bg-[#7C3AED] hover:bg-purple-700 text-white shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 focus:ring-purple-500',
    outline: 'border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'bg-transparent text-[#0F172A] hover:bg-slate-100 hover:text-[#2563EB] focus:ring-slate-400',
    dark: 'bg-[#0F172A] hover:bg-slate-800 text-white focus:ring-slate-900',
    accent: 'bg-[#06B6D4] hover:bg-cyan-600 text-white shadow-md shadow-cyan-500/20 focus:ring-cyan-500'
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5'
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
};

export default Button;
