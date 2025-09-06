import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top: headline + button */}
      <div className="px-6 md:px-10 pt-16 md:pt-24 text-center md:text-left">
        <h2
          className="
            font-extrabold tracking-tight
            leading-[1.05]
            text-[clamp(38px,8vw,110px)]
            max-w-5xl mx-auto md:mx-0
          "
        >
          Be the First to Receive <br />
          the Latest News
        </h2>

        <button
          className="
            mt-8 inline-flex items-center justify-center
            h-12 w-[420px] max-w-full
            rounded-full border border-white
            text-base font-medium
            hover:bg-white hover:text-black transition
          "
        >
          <span className="mr-2">Sign Up</span> →
        </button>
      </div>

      {/* Middle: logo + links */}
      <div className="px-6 md:px-10 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + brand (structured like other columns) */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/i8.svg"
                alt="Brington logo"
                className="w-10 h-10 filter invert"
              />
              <span className="text-xl font-semibold">Brington</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Social</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer">Youtube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@mysite.com</li>
              <li>Tel. 123-456-7890</li>
              <li>India</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-10 mt-12">
        <div className="border-t border-gray-600" />
      </div>

      <div className="px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2035 by Brington Inc</p>
        <span className="mt-4 md:mt-0">Built with love and caffeine</span>
      </div>
    </footer>
  );
}
