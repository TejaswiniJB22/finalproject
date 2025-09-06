import React from "react";

const FifthSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center text-center overflow-hidden">
      <div
        className="w-full pt-24 pb-16 px-6"
        style={{
          background: "linear-gradient(to bottom, #00a67d 0%, #00a67d 40%, #ffffff 100%)",
        }}
      >
        <h2 className="text-white text-5xl md:text-7xl font-semibold leading-tight">
          ABOUT
          <br />
          THE RACE
        </h2>

        <p className="mt-8 text-white text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto">
          This is a race of yourself to yourself. <br />
          Fight the race! Develop the website. <br />
          Complete the task. <br />
          As a developer, it&apos;s Not That hard.
        </p>
      </div>

      <div className="relative -mt-12 flex items-center justify-center w-full bg-gradient-to-b from-transparent to-white pb-24">
        <img
          src="/images/i6.png"
          alt="Concentric ring"
          className="w-[30rem] md:w-[40rem] opacity-95 drop-shadow-xl"
        />
        <img
          src="/images/i6.png"
          alt="Concentric ring"
          className="absolute w-[22rem] md:w-[28rem] opacity-95 drop-shadow-xl"
        />
        <img
          src="/images/i6.png"
          alt="Concentric ring"
          className="absolute w-[14rem] md:w-[18rem] opacity-95 drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default FifthSection;
