import React from "react";

const SixthSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-start justify-start px-6 md:px-16 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/i7.jpg')" }}
    >
      <div className="text-white space-y-4 md:space-y-6 max-w-lg">
        <h2 className="text-2xl md:text-4xl font-bold">Project Name</h2>
        <h2 className="text-2xl md:text-4xl font-bold">Client Name</h2>
      </div>
    </section>
  );
};

export default SixthSection;
