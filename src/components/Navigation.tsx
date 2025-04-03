
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-concert-dark border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-concert-neonPink">Melody<span className="text-white">Tix</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/concerts" className="text-gray-300 hover:text-white transition-colors">Events</Link>
            <Link to="/artists" className="text-gray-300 hover:text-white transition-colors">Artists</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <Link to="/booking">
              <Button variant="default" className="bg-concert-neonPink hover:bg-opacity-80 text-white border-none">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/concerts" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>Events</Link>
              <Link to="/artists" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>Artists</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>Contact</Link>
              <Link to="/booking" onClick={toggleMenu}>
                <Button variant="default" className="bg-concert-neonPink hover:bg-opacity-80 text-white w-full border-none">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
