import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full px-4 py-12 border-t border-white flex flex-col items-center gap-8 bg-black">
      {/* Logo */}
      <div className="text-2xl font-bold font-['Inter'] text-white flex items-center gap-1">
        <span>Fit</span>
        <span className="text-red-600">Zone</span>
      </div>

      {/* Divider */}
      <div className="w-48 border-t border-white" />

      {/* Links */}
      <div className="flex gap-12 text-white text-xl font-bold font-['Inter']">
        <Link href="/plans" className="hover:underline">Plans</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>

      {/* Bottom Text */}
      <div className="text-white/60 text-sm font-bold font-['Inter'] mt-8">
        FitZone | 2025
      </div>
    </footer>
  );
};

export default Footer;
