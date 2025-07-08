import React from 'react'
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="w-full px-6 sm:px-10 py-10 bg-[#161616] rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-8 mt-24 ">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start gap-3 text-center lg:text-left">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl font-bold">
          Plans that match your budget!
        </h2>
        <p className="text-white text-xl sm:text-2xl lg:text-2xl font-semibold">
          Find out which plan suits you
        </p>
      </div>

      {/* Right Button */}
      <button className="px-6 py-4 bg-white outline outline-2 outline-zinc-800 flex items-center gap-4 hover:bg-gray-200 transition rounded-lg">
        <Link href={"/plans"}>
            <span className="text-black text-xl sm:text-2xl lg:text-2xl font-bold">
              Our plans &rarr;
            </span>
        </Link>
      </button>
    </div>
  );
};

export default CallToAction;
