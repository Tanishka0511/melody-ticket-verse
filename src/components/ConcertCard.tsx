
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import type { Concert } from '@/lib/mockData';
import { formatDate } from '@/lib/utils';

interface ConcertCardProps {
  concert: Concert;
  className?: string;
}

const ConcertCard: React.FC<ConcertCardProps> = ({ concert, className = '' }) => {
  const formattedDate = new Date(concert.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={`concert-card h-full flex flex-col ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={concert.imageUrl} 
          alt={concert.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-lg font-bold text-white">{concert.title}</h3>
          <p className="text-sm text-gray-300">{concert.artist}</p>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-400 mb-2">
          <Calendar size={16} className="mr-1" />
          <span>{formattedDate} • {concert.time}</span>
        </div>
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <MapPin size={16} className="mr-1" />
          <span>{concert.venue}</span>
        </div>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{concert.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-concert-neonPink font-bold">${concert.price.regular}</p>
          </div>
          <Link to={`/booking/${concert.id}`}>
            <Button className="bg-concert-purple hover:bg-opacity-80 text-white">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConcertCard;
