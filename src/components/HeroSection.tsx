
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
          alt="Concert crowd" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-bg opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight">
          Experience the Magic<br />of Live Music
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl">
          Book tickets to the hottest concerts and music festivals. 
          Your unforgettable music experience starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/concerts">
            <Button className="btn-primary text-lg px-8 py-6">
              Browse Events
            </Button>
          </Link>
          <Link to="/booking">
            <Button variant="outline" className="btn-secondary text-lg px-8 py-6">
              Book Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Wave Pattern Overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#1A1A2E" 
            fillOpacity="1" 
            d="M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,176C672,181,768,139,864,122.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
