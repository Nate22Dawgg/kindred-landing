"use client";

import { useState } from "react";
import { ArrowUpCircle } from "lucide-react";

const StatFlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-32 sm:h-36 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => e.key === "Enter" && setFlipped(!flipped)}
      tabIndex={0}
      role="button"
      aria-label="Toggle equity info"
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ease-in-out ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex justify-between items-center p-4 bg-purple-50 rounded-lg shadow-md backface-hidden">
          <div>
            <h4 className="text-sm font-medium text-gray-600">Equity Balance</h4>
            <p className="text-2xl font-bold text-purple-700">$3,150</p>
          </div>
          <div className="p-2 rounded-full text-purple-600 bg-white">
            <ArrowUpCircle />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex items-center justify-center bg-purple-100 rounded-lg shadow-md backface-hidden rotate-y-180 p-4">
          <p className="text-sm text-purple-800 text-center leading-snug">
            Based on a full year of contributions with no care claims. You’ll be able to withdraw unused care funds and your share of the Member Reserve. Every dollar is tracked, and your available balance grows with unused care. You own your care. You own your fund.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatFlipCard;
