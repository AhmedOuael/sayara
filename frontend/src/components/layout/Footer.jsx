// src/components/layout/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LOGO + VISION */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">Sayara</h2>
          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </p>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">About</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>

        {/* COMMUNITY */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Socials</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <p>©2026 Sayara. All rights reserved</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900">Privacy & Policy</a>
            <a href="#" className="hover:text-gray-900">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
