'use client';

import { useState } from 'react';
import Button from './ui/Button';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    reason: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Submitting form data:', formData);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setFormSubmitted(true);

    setFormData({
      firstName: '',
      email: '',
      reason: ''
    });
  };

  return (
    <section id="waitlist" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Be the first to join.</h2>
          <p className="text-xl text-gray-600">
            We're building the first wave now. Early members will help shape the most ethical health system ever designed.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-8">
          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you for joining!</h3>
              <p className="text-gray-600 mb-6">We'll be in touch soon with more information about the Kindred Plan.</p>
              <Button 
                onClick={() => setFormSubmitted(false)} 
                variant="primary"
              >
                Join Another Person
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                <div className="mt-1">
                  <input 
                    type="text" 
                    name="firstName" 
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-3" 
                    placeholder="Your first name"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-3" 
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">What's the #1 reason you'd join Kindred? (Optional)</label>
                <div className="mt-1">
                  <textarea 
                    id="reason" 
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={3} 
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-3" 
                    placeholder="Tell us why you're interested"
                  ></textarea>
                </div>
              </div>
              <div>
                <Button 
                  type="submit" 
                  variant="primary"
                  className="w-full py-3 px-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Join the Waitlist'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
