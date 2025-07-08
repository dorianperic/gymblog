import FeatureCard from "./FeatureCard";
import { ReactNode } from "react";

interface Feature {
  heading: string;
  icon: ReactNode;
  text: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-18 pt-18">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            heading={feature.heading}
            icon={feature.icon}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
}

