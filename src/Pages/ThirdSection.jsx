import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function ThirdSection() {
  const { scrollYProgress } = useScroll();
  const pathRef = useRef(null);

  // These are the relative progress points (20%, 45%, etc.)
  const progressPoints = [0.2, 0.45, 0.7, 0.95];

  // State for star positions
  const [points, setPoints] = React.useState([]);

  // Update star positions whenever scrollYProgress changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      const newPoints = progressPoints.map((p) =>
        pathRef.current.getPointAtLength(len * p * latest)
      );
      setPoints(newPoints);
    }
  });

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
        {/* Path itself */}
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

        {/* Moving stars */}
        {points.map((p, i) => (
          <g key={i} transform={`translate(${p.x}, ${p.y})`}>
            <motion.use
              href="#star"
              width="40"
              height="40"
              x="-20"
              y="-20"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <text
              x="70"
              y="0"
              fontSize="110"
              fontFamily="serif"
              fill="black"
            >
              {["1,034", "2", "54", "25"][i]}
            </text>
            <text
              x="70"
              y="40"
              fontSize="20"
              fontFamily="sans-serif"
              fill="black"
            >
              Sample Data about Sample Things
            </text>
          </g>
        ))}
      </svg>
    </section>
  );
}

