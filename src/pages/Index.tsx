
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedConcert from '@/components/FeaturedConcert';
import ConcertCard from '@/components/ConcertCard';
import ArtistCard from '@/components/ArtistCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { concerts, artists } from '@/lib/mockData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  // Get featured concerts
  const featuredConcerts = concerts.filter(concert => concert.featured);
  const featuredConcert = featuredConcerts[0];
  
  // Get upcoming concerts (non-featured)
  const upcomingConcerts = concerts.filter(concert => !concert.featured).slice(0, 3);
  
  return (
    <div className="min-h-screen bg-concert-dark text-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Concert Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Event</h2>
          </div>
          
          {featuredConcert && <FeaturedConcert concert={featuredConcert} />}
        </section>
        
        {/* Upcoming Concerts Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Link to="/concerts">
              <Button variant="link" className="text-concert-neonPink">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingConcerts.map(concert => (
              <ConcertCard key={concert.id} concert={concert} />
            ))}
          </div>
        </section>
        
        {/* Artists Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Artists</h2>
            <Link to="/artists">
              <Button variant="link" className="text-concert-neonPink">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.slice(0, 3).map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="glass-effect rounded-xl p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-8">Subscribe to our newsletter and be the first to know about upcoming concerts, exclusive presales, and special discounts.</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white h-12"
                />
                <Button className="bg-concert-neonPink hover:bg-opacity-80 h-12">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Import Input component
const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

export default Index;
