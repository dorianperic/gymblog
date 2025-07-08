import FrequentlyAsked from "../../../components/HomePageComponents/FrequentlyAsked";
import { planFaqs } from "../../../data/planFaqs";
import OfferedPlans from "../../../components/PlansComponents/OfferedPlans";

const FitnessPlans = () => {
  return (
    <>
      <OfferedPlans />
      <FrequentlyAsked faqs={planFaqs} />
    </>
  );
};

export default FitnessPlans;
