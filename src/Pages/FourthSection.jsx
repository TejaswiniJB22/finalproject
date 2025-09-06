import React from "react";
import { motion } from "framer-motion";

export default function FourthSection() {
  const leftItems = ["Sample Text 1", "Sample Text 2", "Sample Text 3"];
  const rightItems = ["Sample Text 1", "Sample Text 2", "Sample Text 3"];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-[#1f2a3e] to-[#3a9ca6] px-6 py-20">
      <div className="text-center max-w-4xl mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-bold text-white leading-snug"
        >
          Anything in
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold text-white leading-snug mt-2"
        >
          Developing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-8 text-gray-300 text-lg md:text-xl"
        >
          This is the space to introduce the Services section. Briefly describe
          the types of services offered and highlight any special benefits or
          features.
        </motion.p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative w-full max-w-7xl">
        <div className="flex flex-col gap-10 text-white text-lg w-full md:w-1/3">
          {leftItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className="flex items-center gap-3 border-b border-gray-500 pb-2"
            >
              <span className="text-black text-xl">✔</span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
 
          <motion.img
            src="/images/image2.svg"
            alt="Background Circle"
            className="w-80 h-80 md:w-[420px] md:h-[420px]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />
          
<motion.img
  src="/images/image3.png"
  alt="Inside Icon"
  className="absolute w-28 h-28 md:w-40 md:h-40 object-contain"
  initial={{ opacity: 0, y: 120 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
/>
 </motion.div>
        <div className="flex flex-col gap-10 text-white text-lg w-full md:w-1/3">
          {rightItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className="flex items-center gap-3 border-b border-gray-500 pb-2"
            >
              <span className="text-black text-xl">✔</span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16"
      >
        <button className="px-10 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold text-lg rounded-full shadow-xl border-2 border-transparent hover:bg-transparent hover:text-green-500 hover:border-green-500 transition-all duration-500">
          Create Now
        </button>
      </motion.div>
    </section>
  );
}
