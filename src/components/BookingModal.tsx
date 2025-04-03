
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Concert } from '@/lib/mockData';

interface BookingModalProps {
  concert?: Concert | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ concert, isOpen, onClose }) => {
  const [ticketType, setTicketType] = useState<"regular" | "vip">("regular");
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!concert) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Booking successful! Check your email for confirmation.");
      onClose();
    }, 1500);
  };

  const price = ticketType === "regular" ? concert.price.regular : concert.price.vip;
  const total = price * quantity;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-concert-dark text-white border-concert-purple">
        <DialogHeader>
          <DialogTitle className="text-2xl text-concert-neonPink">Book Tickets</DialogTitle>
          <DialogDescription className="text-gray-300">
            {concert.title} • {new Date(concert.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} • {concert.venue}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-white">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
            </div>
            
            <div>
              <Label className="text-white mb-3 block">Ticket Type</Label>
              <RadioGroup value={ticketType} onValueChange={(value) => setTicketType(value as "regular" | "vip")} className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2 border border-gray-700 p-3 rounded-md">
                  <RadioGroupItem value="regular" id="regular" />
                  <Label htmlFor="regular" className="flex justify-between w-full">
                    <span>Regular</span>
                    <span>${concert.price.regular}</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border border-gray-700 p-3 rounded-md">
                  <RadioGroupItem value="vip" id="vip" />
                  <Label htmlFor="vip" className="flex justify-between w-full">
                    <div>
                      <span>VIP</span>
                      <p className="text-xs text-gray-400">Priority seating & exclusive perks</p>
                    </div>
                    <span>${concert.price.vip}</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label htmlFor="quantity" className="text-white">Quantity</Label>
              <div className="flex items-center space-x-2">
                <Button 
                  type="button"
                  variant="outline"
                  className="h-10 w-10 p-0" 
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
                  className="bg-gray-800 border-gray-700 text-white text-center"
                  required
                />
                <Button 
                  type="button"
                  variant="outline"
                  className="h-10 w-10 p-0" 
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between">
              <span className="text-gray-300">Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-gray-300">Booking fee:</span>
              <span>${(total * 0.05).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2 font-bold">
              <span>Total:</span>
              <span className="text-concert-neonPink">${(total + total * 0.05).toFixed(2)}</span>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} className="border-gray-600">
              Cancel
            </Button>
            <Button type="submit" className="bg-concert-neonPink hover:bg-opacity-80" disabled={isLoading}>
              {isLoading ? "Processing..." : "Complete Booking"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
