import { ReactNode } from "react";

interface FeatureCardProps {
  heading: string;
  icon: ReactNode;
  text: string;
}

export default function FeatureCard({ heading, icon, text }: FeatureCardProps) {
  return (
    <div className="bg-zinc-900 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center space-y-3 flex-1 min-w-[250px] max-w-[350px]">
      <h3 className="text-lg font-bold">{heading}</h3>
      <div className="text-3xl">{icon}</div>
      <p className="text-lg italic">{text}</p>
    </div>
  );
}
