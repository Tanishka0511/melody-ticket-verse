
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ConcertCard from '@/components/ConcertCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { concerts } from '@/lib/mockData';
import { Search } from 'lucide-react';

const ConcertsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredConcerts = concerts.filter(concert => {
    const matchesSearch = concert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         concert.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         concert.venue.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'featured') return matchesSearch && concert.featured;
    
    // Filter by month
    const concertMonth = new Date(concert.date).getMonth();
    const currentMonth = new Date().getMonth();
    
    if (filter === 'thisMonth') return matchesSearch && concertMonth === currentMonth;
    if (filter === 'nextMonth') return matchesSearch && concertMonth === (currentMonth + 1) % 12;
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-concert-dark text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">All Concerts</h1>
          <p className="text-gray-300">Browse and book tickets to the best concerts and events</p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search by artist, event or venue..." 
                className="pl-10 bg-gray-800 border-gray-700 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'} 
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'bg-concert-purple' : 'border-gray-700 text-gray-300'}
              >
                All
              </Button>
              <Button 
                variant={filter === 'featured' ? 'default' : 'outline'} 
                onClick={() => setFilter('featured')}
                className={filter === 'featured' ? 'bg-concert-purple' : 'border-gray-700 text-gray-300'}
              >
                Featured
              </Button>
              <Button 
                variant={filter === 'thisMonth' ? 'default' : 'outline'} 
                onClick={() => setFilter('thisMonth')}
                className={filter === 'thisMonth' ? 'bg-concert-purple' : 'border-gray-700 text-gray-300'}
              >
                This Month
              </Button>
              <Button 
                variant={filter === 'nextMonth' ? 'default' : 'outline'} 
                onClick={() => setFilter('nextMonth')}
                className={filter === 'nextMonth' ? 'bg-concert-purple' : 'border-gray-700 text-gray-300'}
              >
                Next Month
              </Button>
            </div>
          </div>
        </div>
        
        {/* Concerts Grid */}
        {filteredConcerts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConcerts.map(concert => (
              <ConcertCard key={concert.id} concert={concert} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-2">No concerts found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ConcertsPage;
