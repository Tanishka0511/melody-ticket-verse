
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import type { Concert } from '@/lib/mockData';

interface FeaturedConcertProps {
  concert: Concert;
}

const FeaturedConcert: React.FC<FeaturedConcertProps> = ({ concert }) => {
  const formattedDate = new Date(concert.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative overflow-hidden rounded-lg h-[500px]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={concert.imageUrl} 
          alt={concert.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-concert-dark via-concert-dark/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12 max-w-3xl">
        <div className="bg-concert-neonPink px-3 py-1 rounded-full inline-block mb-4 w-fit">
          <span className="text-xs font-semibold uppercase tracking-wider text-white">Featured Event</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
          {concert.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          {concert.artist}
        </p>
        <p className="text-gray-300 mb-6 max-w-2xl">
          {concert.description}
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center text-gray-300">
            <Calendar size={18} className="mr-2 text-concert-neonPink" />
            <span>{formattedDate} • {concert.time}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin size={18} className="mr-2 text-concert-neonPink" />
            <span>{concert.venue}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={`/booking/${concert.id}`}>
            <Button className="btn-primary animate-pulse-glow">
              Book Tickets Now
            </Button>
          </Link>
          <Link to={`/concerts/${concert.id}`}>
            <Button variant="outline" className="btn-secondary">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedConcert;
