import React from 'react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Kuldeep Singh</span>
        <Link to="home" smooth duration={500} className="text-blue-600 cursor-pointer">
          Back to top
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

