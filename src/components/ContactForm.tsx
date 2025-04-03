
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-white">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-gray-800 border-gray-700 text-white"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="bg-gray-800 border-gray-700 text-white"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="subject" className="text-white">Subject</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject of your inquiry"
          className="bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-white">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
          required
        />
      </div>

      <Button 
        type="submit" 
        className="bg-concert-neonPink hover:bg-opacity-80 text-white w-full md:w-auto"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
