import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const FoundersSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 rounded-[10px] flex flex-col items-center space-y-10">
      <div className="text-center">
        <h2 className="text-white text-4xl sm:text-5xl font-black font-['Inter']">
          Meet the Founders of Fit
          <span className="text-red-600/80">Zone</span>
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <Avatar className="w-60 h-60 sm:w-80 sm:h-80">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SG</AvatarFallback>
          </Avatar>
          <div className="text-center space-y-1">
            <div className="text-white text-xl sm:text-2xl font-black font-['Inter']">
              John Doe
            </div>
            <div className="text-red-600/80 text-3xl sm:text-4xl font-black font-['Inter']">
              Co-founder
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <Avatar className="w-60 h-60 sm:w-80 sm:h-80">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <div className="text-center space-y-1">
            <div className="text-white text-xl sm:text-2xl font-black font-['Inter']">
              Sam Wilson
            </div>
            <div className="text-red-600/80 text-3xl sm:text-4xl font-black font-['Inter']">
              CEO
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl text-center text-white text-lg sm:text-xl font-medium font-['Inter'] px-4 mx-auto">
        FitZone started as a dream to bring community and health together. From
        a small gym in Croatia, it has grown into a global fitness family
        dedicated to empowering every individual to reach their best self.
      </div>
    </div>
  );
};

export default FoundersSection;
