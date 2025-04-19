"use client";

import { useState } from "react";
import { Users, ShieldCheck, MessageSquare, Eye } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Member-owned & non-profit",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    description:
      "You're not a customer — you're a co-owner. Every dollar supports care, not shareholders.",
  },
  {
    title: "No deductibles, no networks",
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    description:
      "Get treated anywhere in the U.S. — no out-of-network penalties, no surprise bills.",
  },
  {
    title: "Real-time AI + care team access",
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    description:
      "Message us 24/7 before a visit or during emergencies — we'll coordinate everything for you.",
  },
  {
    title: "Transparent, unlimited care",
    icon: <Eye className="h-8 w-8 text-blue-600" />,
    description:
      "Track every transaction, approve treatments, and get the care you need — no limits.",
  },
];

const FlipCard = ({ icon, title, description }: any) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-64 w-full cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => e.key === "Enter" && setFlipped(!flipped)}
      tabIndex={0}
      role="button"
    >
      <div
        className={`transition-transform duration-500 transform-style-preserve-3d w-full h-full ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg backface-hidden">
          {icon}
          <h3 className="text-xl font-semibold text-center mt-4">{title}</h3>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-blue-50 p-6 rounded-xl shadow-lg backface-hidden rotate-y-180">
          <p className="text-sm text-center text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowWereDifferent = () => {
  return (
    <motion.section
      id="how-were-different"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white rounded-t-3xl shadow-inner"
    >
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">How We’re Different</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <FlipCard key={index} {...feature} />
        ))}
      </div>
    </motion.section>
  );
};

export default HowWereDifferent;