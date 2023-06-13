"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className='text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#4b71fd] to-black '>
          Find, book, a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">

          The Satisfation of Buying Your OWN car meets noting else! So glad that we got this experience
        </p>
        <p className="hero__subtitle">

          "A dream without ambition is like a car without gas… you're not going anywhere."
        </p>
        
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          {/* <Image src="/hero.png" alt="hero" fill className="object-contain" /> */}
          {/* <Image src="/lambo.png" alt="hero" fill className="object-contain" /> */}
          {/* <Image src="/car.png" alt="hero" fill className="object-contain" /> */}
          <Image src="/Lamborghini-Urus-PNG-Image.png" alt="hero" fill className="object-contain" />
          

        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
