'use client';
import { useState } from 'react';
import Button from './ui/Button';
import { ArrowUpCircle, LineChart, ShieldCheck } from 'lucide-react';
import StatFlipCard from "@/components/StatFlipCard";

function EquityCard({ title, value, icon, bgColor, iconColor }: {
  title: string;
  value: string;
  icon: JSX.Element;
  bgColor: string;
  iconColor: string;
}) {
  return (
    <div className={`flex justify-between items-center p-3 ${bgColor} rounded-lg`}>
      <div>
        <h4 className="text-sm font-medium text-gray-600">{title}</h4>
        <p className="text-xl font-semibold">{value}</p>
      </div>
      <div className={`p-2 rounded-full ${iconColor} bg-white`}>
        {icon}
      </div>
    </div>
  );
}

export default function Hero() {
  const [equity] = useState(8450);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-waves">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Own Your Health</h1>
            <p className="mb-6 text-lg text-gray-700">
              The Kindred Plan helps you build equity while staying healthy. Join a member-owned fund that grows with you.
            </p>
            <Button>Join Now</Button>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <EquityCard title="Monthly Contribution" value="$350" icon={<ArrowUpCircle />} bgColor="bg-blue-50" iconColor="text-blue-600" />
            <EquityCard title="Yearly Equity Growth" value="$3,990" icon={<LineChart />} bgColor="bg-green-50" iconColor="text-green-500" />
            <EquityCard title="Medical Expenses Covered" value="100%" icon={<ShieldCheck />} bgColor="bg-indigo-50" iconColor="text-indigo-500" />
            <StatFlipCard />

          </div>
        </div>
      </div>
    </section>
  );
}
