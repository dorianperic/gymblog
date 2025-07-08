import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const OfferedPlans = () => {
  return (
    <main>
      <h1 className="text-5xl text-center font-bold my-24">Our Training Plans</h1>

      <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-12 py-12 bg-black items-center justify-center">
        {/* Normal Plan */}
        <div className="w-full lg:w-[48%] bg-stone-900 border-t-[10px] border-red-600 rounded-xl flex flex-col justify-between items-center px-8 py-12 gap-8">
          <h2 className="text-white text-4xl lg:text-6xl font-bold">
            Standard
          </h2>
          <div className="text-white text-2xl font-bold">
            <span>from </span>
            <span className="line-through">119.90</span>
            <span> to</span>
          </div>
          <div className="text-white text-4xl lg:text-6xl font-bold">
            $ 99.99
          </div>
          <div className="border-t border-white pt-8 flex flex-col gap-6 w-full">
            {[
              "Weight training area",
              "Personal Trainers",
              "No cancellation fees",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <Check className="text-green-600 w-6 h-6" />
                <p className="text-white text-lg lg:text-2xl font-bold">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 text-white font-bold text-xl">
            <p>Zero enrollment fee</p>
            <p>12-Month Commitment</p>
          </div>
          <Link href={"/membership"} className="w-full max-w-md">
            <button className="w-full max-w-md py-4 bg-white text-black text-2xl font-bold rounded-md hover:bg-gray-200 transition">
              Subscribe
            </button>
          </Link>
        </div>
        {/* Premium Plan */}
        <div className="w-full lg:w-[48%] bg-stone-900 border-t-[10px] border-red-600 rounded-xl flex flex-col justify-between items-center px-8 py-12 gap-8">
          <h2 className="text-white text-4xl lg:text-6xl font-bold">Premium</h2>
          <div className="text-white text-2xl font-bold">
            <span>from </span>
            <span className="line-through">149.90</span>
            <span> to</span>
          </div>
          <div className="text-white text-4xl lg:text-6xl font-bold">
            $ 119.90
          </div>
          <div className="border-t border-white pt-8 flex flex-col gap-6 w-full">
            {[
              "Weight training area",
              "Personal Trainers",
              "No cancellation fees",
              <>
                Access to all <span className="text-red-600">FitZone</span>{" "}
                locations
              </>,
              "Bring a friend to train with you",
              "1 free month for a friend",
              "Free evaluation every 60 days",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <Check className="text-green-600 w-6 h-6" />
                <p className="text-white text-lg lg:text-2xl font-bold">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 text-white font-bold text-xl">
            <p>Zero enrollment fee</p>
            <p>12-Month Commitment</p>
          </div>
          <Link href={"/membership"} className="w-full max-w-md">
            <button className="w-full max-w-md py-4 bg-white text-black text-2xl font-bold rounded-md hover:bg-gray-200 transition">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OfferedPlans;
