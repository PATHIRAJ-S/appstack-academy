import React, { createContext, useContext, useState } from 'react';

const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const openEnquiry = (courseName = '') => {
    setSelectedCourse(courseName);
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
    setSelectedCourse('');
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, openEnquiry, closeEnquiry, selectedCourse }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};
