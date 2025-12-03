import React, { useState } from 'react';
import { Search, MapPin, Calendar, TrendingUp, Shield, Clock } from 'lucide-react';

const HeroSection = () => {
  const [searchLocation, setSearchLocation] = useState('');

  return (
    
    <section className="relative w-full py-2 lg:py-4 bg-linear-to-br from-[#F6F7F9] via-[#EFF3FD] to-[#F6F7F9] flex items-center justify-center">  
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-6 px-8">
          
          {/* the slogan text */}
          <div className="inline-flex items-center gap-2 bg-[#3563E9]/10 text-[#3563E9] px-4 py-3 rounded-full text-sm font-semibold mt-2">
            <TrendingUp className="w-4 h-4" />
            <span>#1 Car Rental Platform</span>
          </div>

          {/* titre and descrption */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A202C] leading-tight">
              Find Your
              <span className="text-[#3563E9]"> Perfect Ride</span>
            </h1>
            <p className="text-lg text-[#90A3BF] max-w-2xl mx-auto">
              Discover the best car rental deals from premium to budget-friendly vehicles. Book in minutes, drive in hours.
            </p>
          </div>

            {/* booking card*/}
          <div className="w-full max-w-2xl bg-white rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            
            <div className="space-y-2">
              {/* location Input */}
              <div className="relative text-left">
                <label className="text-xs font-semibold text-gray-500 ml-1 mb-1 block">Location</label>
                <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#90A3BF]" />
                    <input
                    type="text"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    placeholder="Enter your location or airport"
                    className="w-full pl-12 pr-4 py-3 bg-[#F6F7F9] border-2 border-transparent rounded-2xl focus:border-[#3563E9] focus:bg-white focus:outline-none transition-all text-[#1A202C] placeholder:text-[#90A3BF]"
                    />
                </div>
              </div>

              {/* dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative text-left">
                  <label className="text-xs font-semibold text-gray-500 ml-1 mb-1 block">Pick-up Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#90A3BF]" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-3 py-3 bg-[#F6F7F9] border-2 border-transparent rounded-xl focus:border-[#3563E9] focus:bg-white focus:outline-none transition-all text-sm text-[#1A202C]"
                      
                    />
                  </div>
                </div>
                <div className="relative text-left">
                  <label className="text-xs font-semibold text-gray-500 ml-1 mb-1 block">Return Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#90A3BF]" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-3 py-3 bg-[#F6F7F9] border-2 border-transparent rounded-xl focus:border-[#3563E9] focus:bg-white focus:outline-none transition-all text-sm text-[#1A202C]"
                    />
                  </div>
                </div>
              </div>

              {/* search Button */}
              <button className="w-full bg-[#3563E9] hover:bg-[#264BC5] text-white py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-4 mt-6">
                <Search className="w-5 h-5" />
                Search Available Cars
              </button>
            </div>
          </div>

          {/* support 24/7 .verified. .+numbers of cars  */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-4">
            <div className="flex items-center gap-3 text-[#1A202C]">
              <div className="w-12 h-12 bg-[#3563E9]/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#3563E9]" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold leading-none">100%</div>
                <div className="text-sm text-[#90A3BF] mt-1">Verified</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[#1A202C]">
              <div className="w-12 h-12 bg-[#3563E9]/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#3563E9]" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold leading-none">24/7</div>
                <div className="text-sm text-[#90A3BF] mt-1">Support</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[#1A202C]">
              <div className="w-12 h-12 bg-[#3563E9]/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#3563E9]" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold leading-none">200+</div>
                <div className="text-sm text-[#90A3BF] mt-1">Cars</div>
              </div>
            </div>
          </div>

        </div>
      
    </section>
  );
};

export default HeroSection;