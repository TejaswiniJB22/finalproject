import React from "react";

const speakers = [
  {
    name: "Harry Williams",
    role: "Director of Mobile Gaming, Fixer",
    image: "/images/1.jpg",
    linkedin: "https://linkedin.com/in/harrywilliams",
  },
  {
    name: "Akira Lee",
    role: "Director of Mobile Gaming, Fixer",
    image: "/images/2.jpg",
    linkedin: "https://linkedin.com/in/akiralee",
  },
  {
    name: "Veronika Zakharova",
    role: "Director of Mobile Gaming, Fixer",
    image: "/images/3.jpg",
    linkedin: "https://linkedin.com/in/veronikazakharova",
  },
  {
    name: "Ann Jacobs",
    role: "Director of Mobile Gaming, Fixer",
    image: "/images/4.jpg",
    linkedin: "https://linkedin.com/in/annjacobs",
  },
  {
    name: "Lissa Cross",
    role: "Director of Mobile Gaming, Fixer",
    image: "/images/5.jpg",
    linkedin: "https://linkedin.com/in/lissacross",
  },
  {
    name: "Murty Yang",
    role: "Director of Mobile Gaming, Fixer",
    image: "/images/6.jpg",
    linkedin: "https://linkedin.com/in/murtyyang",
  },
  {
    name: "Sheldon Smith",
    role: "Director of Mobile Gaming, Fixer",
    image: "/images/7.jpg",
    linkedin: "https://linkedin.com/in/sheldonsmith",
  },
  {
    name: "Jason Guhl",
    role: "Director of Mobile Gaming, Fixer",
    image: "/images/8.jpg",
    linkedin: "https://linkedin.com/in/jasonguhl",
  },
];

const EighthSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Speakers</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-6"
            >
              <div className="flex items-center gap-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{speaker.name}</h3>
                  <p className="text-gray-500 text-sm">{speaker.role}</p>
                </div>
              </div>
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-gray-500 rounded-full text-sm font-medium hover:bg-gray-100 transition"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EighthSection;
