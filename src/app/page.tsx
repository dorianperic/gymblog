import { Hero } from "../../components/HomePageComponents/Hero";
import FeaturesSection from "../../components/HomePageComponents/FeaturesSection";
import { cardFeatures } from "../../data/cardFeatuers";
import { cardFeatures2 } from "../../data/cardFeatures2";
import Stats from "../../components/HomePageComponents/Stats";
import Testimonials from "../../components/HomePageComponents/Testimonials";
import FrequentlyAsked from "../../components/HomePageComponents/FrequentlyAsked";
import CallToAction from "../../components/HomePageComponents/CallToAction";
import { homeFaqs } from "../../data/homeFaq";

export default function Home() {
  return (
    <>
      <Hero/>
      <FeaturesSection features={cardFeatures}/>
      <Stats/>
      <FeaturesSection features={cardFeatures2}/>
      <Testimonials/>
      <FrequentlyAsked faqs={homeFaqs}/>
      <CallToAction/>
    </>
  );
}
