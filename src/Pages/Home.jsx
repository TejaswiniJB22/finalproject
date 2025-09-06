import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image1.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full px-6 md:px-16 text-white mt-28">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          I am a Sample <br /> Website
        </h1>

        <p className="mt-6 text-xl md:text-2xl max-w-2xl">
          I'm a Sample Website, Create me as same as I am,
          <br /> Don’t Do any Mistakes.
        </p>
        <div className="mt-10 flex justify-start items-center w-full">
          <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 rounded-full text-lg font-semibold shadow-lg transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
