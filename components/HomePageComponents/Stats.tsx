import React from "react";
import Image from "next/image";
import statsIllustration from "../../public/statsIllustration.svg";

const Stats = () => {
  return (
    <div className="relative bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-8 xl:pr-16">
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg opacity-20 lg:opacity-40">
          <Image
            src={statsIllustration}
            alt="Statistics illustration"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Text Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center h-full gap-8 sm:gap-12 lg:gap-16 max-w-xl lg:max-w-2xl">
        {/* Stat Block 1 */}
        <div className="pl-4 sm:pl-6 border-l-4 border-red-600/80">
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">More than</p>
          <p className="text-red-600/80 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none">
            50 thousand
          </p>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold max-w-xl mt-2">
            people have enrolled into our fitness programs
          </p>
        </div>

        {/* Stat Block 2 */}
        <div className="pl-4 sm:pl-6 border-l-4 border-red-600/80">
          <p className="text-red-600/80 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none">
            20 gyms
          </p>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-2">
            in 12 unique locations
          </p>
        </div>
      </div>
      <h1 className="text-center text-5xl pt-48 mt-[232px]">Fit <span className="text-red-500 ml-[-10px]">Zone </span>services</h1>
    </div>
  );
};

export default Stats;