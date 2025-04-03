
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { concerts } from '@/lib/mockData';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, Mail, CreditCard } from 'lucide-react';
import { toast } from 'sonner';

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const concert = id ? concerts.find(c => c.id === parseInt(id)) : concerts[0];
  
  const [selectedTicket, setSelectedTicket] = useState<'regular' | 'vip'>('regular');
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  if (!concert) {
    return (
      <div className="min-h-screen bg-concert-dark text-white">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Concert Not Found</h1>
          <p>The concert you're looking for doesn't exist.</p>
          <Button className="mt-6 bg-concert-purple" asChild>
            <a href="/concerts">Browse All Concerts</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Booking successful! Check your email for confirmation.");
      setIsLoading(false);
    }, 1500);
  };

  const ticketPrice = selectedTicket === 'regular' ? concert.price.regular : concert.price.vip;
  const subtotal = ticketPrice * quantity;
  const bookingFee = subtotal * 0.05;
  const total = subtotal + bookingFee;

  return (
    <div className="min-h-screen bg-concert-dark text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Book Tickets</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg overflow-hidden sticky top-4">
              <img 
                src={concert.imageUrl} 
                alt={concert.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{concert.title}</h2>
                <p className="text-gray-400 mb-4">{concert.artist}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Calendar size={18} className="mr-2" />
                    <span>{new Date(concert.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock size={18} className="mr-2" />
                    <span>{concert.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin size={18} className="mr-2" />
                    <span>{concert.venue}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Ticket price:</span>
                    <span>${ticketPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Quantity:</span>
                    <span>{quantity}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Booking fee:</span>
                    <span>${bookingFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold mt-4 pt-4 border-t border-gray-800">
                    <span>Total:</span>
                    <span className="text-concert-neonPink">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Ticket Selection */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Select Tickets</h3>
                
                <RadioGroup value={selectedTicket} onValueChange={(value) => setSelectedTicket(value as "regular" | "vip")} className="space-y-4">
                  <div className={`flex items-start p-4 rounded-md border ${selectedTicket === 'regular' ? 'border-concert-neonPink' : 'border-gray-700'}`}>
                    <RadioGroupItem value="regular" id="regular" className="mt-1" />
                    <div className="ml-3 flex-grow">
                      <Label htmlFor="regular" className="font-medium text-lg cursor-pointer">Regular Ticket</Label>
                      <p className="text-gray-400 text-sm">Standard seating with good views</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${concert.price.regular}</p>
                      <p className="text-xs text-gray-400">per ticket</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-start p-4 rounded-md border ${selectedTicket === 'vip' ? 'border-concert-neonPink' : 'border-gray-700'}`}>
                    <RadioGroupItem value="vip" id="vip" className="mt-1" />
                    <div className="ml-3 flex-grow">
                      <Label htmlFor="vip" className="font-medium text-lg cursor-pointer">VIP Experience</Label>
                      <p className="text-gray-400 text-sm">Priority seating, exclusive merch & backstage tour</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${concert.price.vip}</p>
                      <p className="text-xs text-gray-400">per ticket</p>
                    </div>
                  </div>
                </RadioGroup>
                
                <div className="mt-6">
                  <Label htmlFor="quantity" className="mb-2 block">Quantity</Label>
                  <div className="flex items-center w-32">
                    <Button 
                      type="button"
                      variant="outline" 
                      className="h-10 w-10 p-0 rounded-r-none" 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <Input
                      id="quantity"
                      type="number"
                      min={1}
                      max={10}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="h-10 rounded-none text-center bg-gray-800 border-gray-700"
                    />
                    <Button 
                      type="button"
                      variant="outline" 
                      className="h-10 w-10 p-0 rounded-l-none" 
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">Full Name</Label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-3 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="pl-9 bg-gray-800 border-gray-700"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="mb-2 block">Email</Label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-3 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-9 bg-gray-800 border-gray-700"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+1 (123) 456-7890"
                      className="bg-gray-800 border-gray-700"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Payment Info */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="cardNumber" className="mb-2 block">Card Number</Label>
                    <div className="relative">
                      <CreditCard size={16} className="absolute left-3 top-3 text-gray-400" />
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="pl-9 bg-gray-800 border-gray-700"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="expiry" className="mb-2 block">Expiry Date</Label>
                    <Input
                      id="expiry"
                      name="expiry"
                      placeholder="MM/YY"
                      className="bg-gray-800 border-gray-700"
                      value={formData.expiry}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cvc" className="mb-2 block">CVC</Label>
                    <Input
                      id="cvc"
                      name="cvc"
                      placeholder="123"
                      className="bg-gray-800 border-gray-700"
                      value={formData.cvc}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  className="bg-concert-neonPink hover:bg-opacity-80 text-white px-8 py-6 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Complete Purchase"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
