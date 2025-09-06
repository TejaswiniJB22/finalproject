import React from "react";

const AlertSection = () => {
  return (
    <div className="relative overflow-hidden bg-white py-4 border-t border-gray-200">
      <div className="flex animate-marquee">
        <div className="flex items-center gap-12 whitespace-nowrap">
          {Array(20)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="flex items-center gap-3 text-3xl font-bold text-teal-600">
                HURDLES
                <img
                  src="/images/image4.svg"
                  alt="icon"
                  className="w-8 h-8 inline-block"
                />
              </span>
            ))}
        </div>
        <div className="flex items-center gap-12 whitespace-nowrap">
          {Array(20)
            .fill(null)
            .map((_, i) => (
              <span key={`dup-${i}`} className="flex items-center gap-3 text-3xl font-bold text-teal-600">
                HURDLES
                <img
                  src="/images/image4.svg"
                  alt="icon"
                  className="w-8 h-8 inline-block"
                />
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AlertSection;
