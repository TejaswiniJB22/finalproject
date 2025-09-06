import React, { useState } from "react";

const SeventhSection = () => {
  const [selected, setSelected] = useState("A");

  const images = {
    A: ["/images/a.jpg", "/images/b.png"],
    B: ["/images/c.jpg", "/images/d.png"],
    C: ["/images/e.jpg", "/images/f.png"],
    D: ["/images/g.jpg", "/images/h.png"],
    E: ["/images/i.jpg", "/images/j.png"],
    F: ["/images/k.jpg", "/images/l.png"],
  };

  return (
    <section className="w-full h-screen flex">
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={images[selected][0]}
            alt={`${selected}-bg`}
            className="w-full h-full object-contain"
          />
          <img
            src={images[selected][1]}
            alt={`${selected}-overlay`}
            className="absolute w-full h-full object-contain animate-rotateY pointer-events-none"
          />
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col">
        <div className="grid grid-cols-3 grid-rows-2 flex-grow">
          {Object.keys(images).map((key) => (
            <button
              key={key}
              onMouseEnter={() => setSelected(key)}
              onClick={() => setSelected(key)}
              className={`flex items-center justify-center text-3xl font-bold transition
                ${selected === key ? "bg-gray-700" : "bg-black"} text-white`}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="h-16 flex items-center justify-center bg-white">
          <p className="text-xl font-semibold text-purple-600">A-Z PROJECT</p>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
