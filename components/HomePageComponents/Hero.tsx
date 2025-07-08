import React from "react";
import Image from "next/image";
import heroImage from "../../public/home_hero.png";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="relative h-auto md:h-screen bg-gradient-to-r from-black via-gray-900 to-red-900 overflow-hidden pb-8 md:pb-0">
      {/* Image on the right */}
      <div className="absolute right-0 top-0 w-full flex items-start md:items-center justify-end pr-6 sm:pr-12 pt-12 pl-4">
        <Image
          src={heroImage}
          alt="Hero"
          className="max-h-[50vh] sm:max-h-[60vh] md:max-h-[80%] lg:max-h-[90%] object-contain"
        />
      </div>

      {/* Text overlay */}
      <div className="relative z-10 flex flex-col h-auto md:h-full px-6 sm:px-8 md:px-12 max-w-3xl pt-20 sm:pt-32 md:pt-0 justify-start md:justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-6 sm:mb-8">
          Your personal workout{" "}
          <span className="text-red-500 block">evolution</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-6 sm:mb-8">
          More than 20 gyms all around the world
        </p>
        <Link href={"/plans"}>
          <button className="bg-white text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg w-fit text-base sm:text-lg hover:bg-gray-300 mt-8">
            Our plans →
          </button>
        </Link>
      </div>
    </div>
  );
};