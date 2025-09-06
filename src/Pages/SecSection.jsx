import React, { useEffect, useState } from "react";

const SecSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1 = ["61 Unit", "73 Unit", "89 Unit", "102 Unit", "+102 Unit"];
  const row2 = ["49 Unit", "59 Unit", "71 Unit", "81 Unit", "+81 Unit"];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #fff 20%, #ffd9c0 50%, #ffe6e6 80%, #fff 100%)",
      }}
    >
      <div className="text-center mb-6">
        <p className="text-gray-800 text-lg">Sample Numbers</p>
        <h2 className="text-3xl font-semibold">Row No. 1</h2>
      </div>
      <div
        className="flex gap-10 mb-24 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${scrollY * 0.5}px)`,
        }}
      >
        {row1.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-80 h-40 flex items-center justify-center text-black text-4xl font-bold border-2 border-black rounded-full"
            style={{
              background: "linear-gradient(135deg, #ffe0e0, #fff5f5)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="text-center mb-6">
        <p className="text-gray-800 text-lg">Sample Numbers</p>
        <h2 className="text-3xl font-semibold">Row No. 2</h2>
      </div>
      <div
        className="flex gap-10 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${scrollY * 0.5}px)`, 
        }}
      >
        {row2.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-80 h-40 flex items-center justify-center text-black text-4xl font-bold border-2 border-black rounded-full"
            style={{
              background: "linear-gradient(135deg, #ffe0e0, #fff5f5)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg">
        Chat with AI
      </button>
    </section>
  );
};

export default SecSection;
