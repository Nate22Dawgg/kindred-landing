'use client';

import { useState } from 'react';
import Button from './ui/Button';

export default function Hero() {
  const [equity] = useState(8450);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-waves">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Healthcare that builds <span className="text-blue-600">value</span>, not debt.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The Kindred Plan is a member-funded health reserve that covers your care and grows your financial equity — no bills, no networks, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                href="#waitlist" 
                variant="primary"
                className="px-8 py-3 text-base"
              >
                Join the Waitlist
              </Button>
              <Button 
                href="#how-it-works" 
                variant="secondary"
                className="px-8 py-3 text-base"
              >
                See How It Works
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-8 z-10">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Member Equity</span>
                    <span className="text-green-600 font-bold">${equity.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full animate-grow" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <EquityCard 
                    title="Monthly Contribution" 
                    value="$350" 
                    icon="arrow-circle-up" 
                    bgColor="bg-blue-50" 
                    iconColor="text-green-500" 
                  />
                  <EquityCard 
                    title="Yearly Equity Growth" 
                    value="$3,990" 
                    icon="chart-line" 
                    bgColor="bg-green-50" 
                    iconColor="text-green-500" 
                  />
                  <EquityCard 
                    title="Medical Expenses Covered" 
                    value="100%" 
                    icon="shield-alt" 
                    bgColor="bg-indigo-50" 
                    iconColor="text-indigo-500" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EquityCard({ title, value, icon, bgColor, iconColor }) {
  return (
    <div className={`flex justify-between items-center p-3 ${bgColor} rounded-lg`}>
      <div>
        <span className="block text-sm text-gray-500">{title}</span>
        <span className="block text-lg font-semibold text-gray-800">{value}</span>
      </div>
      <div>
        <i className={`fas fa-${icon} ${iconColor} text-xl`}></i>
      </div>
    </div>
  );
}
