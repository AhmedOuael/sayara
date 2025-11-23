import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-20 pl-10">
      
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 lg:px-0 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + description */}
        <div className="flex flex-col">
          <h1 className="text-[28px] font-bold text-[#3563E9] tracking-tight">
            Sayara
          </h1>

          <p className="text-slate-600 text-[14px] leading-[22px] mt-4 max-w-xs">
            Our vision is to provide convenience  
            and help increase your sales business.
          </p>
        </div>

        {/* About */}
        <nav>
          <h3 className="text-[16px] font-semibold mb-4">About</h3>
          <ul className="flex flex-col gap-3 text-slate-600 text-[14px]">
            <li><a href="#" className="hover:text-slate-900">How it works</a></li>
            <li><a href="#" className="hover:text-slate-900">Featured</a></li>
            <li><a href="#" className="hover:text-slate-900">Partnership</a></li>
            <li><a href="#" className="hover:text-slate-900">Business Relation</a></li>
          </ul>
        </nav>

        {/* Community */}
        <nav>
          <h3 className="text-[16px] font-semibold mb-4">Community</h3>
          <ul className="flex flex-col gap-3 text-slate-600 text-[14px]">
            <li><a href="#" className="hover:text-slate-900">Events</a></li>
            <li><a href="#" className="hover:text-slate-900">Blog</a></li>
            <li><a href="#" className="hover:text-slate-900">Podcast</a></li>
            <li><a href="#" className="hover:text-slate-900">Invite a friend</a></li>
          </ul>
        </nav>

        {/* Socials */}
        <nav>
          <h3 className="text-[16px] font-semibold mb-4">Socials</h3>
          <ul className="flex flex-col gap-3 text-slate-600 text-[14px]">
            <li><a href="#" className="hover:text-slate-900">Discord</a></li>
            <li><a href="#" className="hover:text-slate-900">Instagram</a></li>
            <li><a href="#" className="hover:text-slate-900">Twitter</a></li>
            <li><a href="#" className="hover:text-slate-900">Facebook</a></li>
          </ul>
        </nav>

      </div>

      {/* DIVIDER LINE */}
      <div className="border-t border-slate-300 w-full"></div>

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-0 py-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-[14px] text-slate-600">
          ©2026 Sayara. All rights reserved
        </p>

        <div className="flex gap-8 mt-4 md:mt-0 text-[14px] text-slate-600">
          <a href="#" className="hover:text-slate-800">Privacy & Policy</a>
          <a href="#" className="hover:text-slate-800">Terms & Condition</a>
        </div>

      </div>

    </footer>
  );
}
