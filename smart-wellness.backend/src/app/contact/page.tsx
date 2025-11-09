'use client';

import { useState } from 'react';
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowLeft, 
  Send, 
  Facebook, 
  Instagram, 
  Twitter,
  Youtube,
  MessageCircle
} from "lucide-react";
import Header from "@/components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    programInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      programInterest: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header currentPage="contact" />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white pt-28 pb-16">{/* Added pt-28 to account for fixed header */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ready to start your wellness journey? Have questions about our programs? We're here to help you every step of the way.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Program Interest */}
              <div>
                <label htmlFor="programInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Program Interest
                </label>
                <select
                  id="programInterest"
                  name="programInterest"
                  value={formData.programInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a program</option>
                  <option value="yoga">Yoga Fundamentals</option>
                  <option value="fitness">Advanced Fitness Training</option>
                  <option value="kids">Kids Wellness Program</option>
                  <option value="coaching">Wellness Coaching Certification</option>
                  <option value="nutrition">Nutrition & Healthy Living</option>
                  <option value="mindfulness">Mindfulness & Meditation</option>
                  <option value="wushu">Wushu Traditional Forms</option>
                  <option value="muaythai">Muay Thai Conditioning</option>
                  <option value="taichi">Tai Chi Wellness</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter the subject of your message"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  placeholder="Enter your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      123 Wellness Boulevard<br />
                      Health District, HD 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+1-555-WELLNESS" className="hover:text-blue-600 transition-colors">
                        +1 (555) WELLNESS
                      </a><br />
                      <a href="tel:+1-555-935-5637" className="hover:text-blue-600 transition-colors">
                        +1 (555) 935-5637
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@smartwellness.com" className="hover:text-blue-600 transition-colors">
                        info@smartwellness.com
                      </a><br />
                      <a href="mailto:programs@smartwellness.com" className="hover:text-blue-600 transition-colors">
                        programs@smartwellness.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Operating Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                      <p>Saturday: 7:00 AM - 8:00 PM</p>
                      <p>Sunday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://facebook.com/smartwellnessacademy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                >
                  <Facebook className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
                  <span className="font-medium text-gray-700 group-hover:text-gray-900">Facebook</span>
                </a>
                
                <a 
                  href="https://instagram.com/smartwellnessacademy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors group"
                >
                  <Instagram className="h-6 w-6 text-pink-600 group-hover:text-pink-700" />
                  <span className="font-medium text-gray-700 group-hover:text-gray-900">Instagram</span>
                </a>
                
                <a 
                  href="https://twitter.com/smartwellnessacademy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors group"
                >
                  <Twitter className="h-6 w-6 text-sky-600 group-hover:text-sky-700" />
                  <span className="font-medium text-gray-700 group-hover:text-gray-900">Twitter</span>
                </a>
                
                <a 
                  href="https://youtube.com/smartwellnessacademy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-colors group"
                >
                  <Youtube className="h-6 w-6 text-red-600 group-hover:text-red-700" />
                  <span className="font-medium text-gray-700 group-hover:text-gray-900">YouTube</span>
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Stay connected with us on social media for daily wellness tips, program updates, success stories, and community highlights!
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">123 Wellness Boulevard</p>
                </div>
              </div>
              <div className="mt-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Strip */}
      <div className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Call Us</h4>
              <p className="text-blue-100">+1 (555) WELLNESS</p>
            </div>
            <div>
              <Mail className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Email Us</h4>
              <p className="text-blue-100">info@smartwellness.com</p>
            </div>
            <div>
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Visit Us</h4>
              <p className="text-blue-100">Mon-Fri: 6AM-10PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}