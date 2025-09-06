import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ThirdSection() {
  const { scrollYProgress } = useScroll();
  const pathRef = useRef(null);
  const [points, setPoints] = useState([]);

  // Make dots move with scroll
  const dashOffset = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  const opacities = [
    useTransform(scrollYProgress, [0.05, 0.15], [0, 1]),
    useTransform(scrollYProgress, [0.25, 0.35], [0, 1]),
    useTransform(scrollYProgress, [0.5, 0.6], [0, 1]),
    useTransform(scrollYProgress, [0.7, 0.8], [0, 1]),
  ];

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPoints([
        pathRef.current.getPointAtLength(len * 0.2),
        pathRef.current.getPointAtLength(len * 0.45),
        pathRef.current.getPointAtLength(len * 0.7),
        pathRef.current.getPointAtLength(len * 0.95),
      ]);
    }
  }, []);

  return (
    <section
      style={{
        height: "500vh",
        background: "linear-gradient(to bottom, #4e8373, #6d9b8f)",
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 1200 2400"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {/* Dotted path */}
        <motion.path
          ref={pathRef}
          d="
            M 0 0
            C 400 400, 700 500, 450 750
            C 250 950, 800 1200, 1000 1350
            C 1150 1550, 850 1750, 600 1900
            C 400 2050, 300 2150, 500 2350
          "
          stroke="black"
          strokeWidth="6"
          fill="none"
          strokeDasharray="10 20"
          strokeLinecap="round"
          style={{
            strokeDashoffset: dashOffset, // makes dots scroll
          }}
        />

        <defs>
          <radialGradient id="glow" r="50%" cx="50%" cy="50%">
            <stop offset="0%" stopColor="purple" stopOpacity="1" />
            <stop offset="100%" stopColor="purple" stopOpacity="0" />
          </radialGradient>
          <symbol id="star" viewBox="0 0 24 24">
            <polygon
              points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10"
              fill="url(#glow)"
            />
          </symbol>
        </defs>

        {/* Stars + text fixed */}
        {points.length > 0 &&
          points.map((p, i) => (
            <g key={i} transform={`translate(${p.x}, ${p.y})`}>
              <motion.use
                href="#star"
                width="40"
                height="40"
                x="-20"
                y="-20"
                style={{ opacity: opacities[i] }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <motion.text
                style={{ opacity: opacities[i] }}
                x="70"
                y="0"
                fontSize="110"
                fontFamily="serif"
                fill="black"
              >
                {["1,034", "2", "54", "25"][i]}
              </motion.text>
              <motion.text
                style={{ opacity: opacities[i] }}
                x="70"
                y="40"
                fontSize="20"
                fontFamily="sans-serif"
                fill="black"
              >
                Sample Data about Sample Things
              </motion.text>
            </g>
          ))}
      </svg>
    </section>
  );
}
