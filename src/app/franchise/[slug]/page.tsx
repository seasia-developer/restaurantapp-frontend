import Benefits from "../components/benefits/Benefits";
import Faq from "../components/faq/Faq";
import WhyUs from "../components/why-us/WhyUs";
import Testimonials from "../components/testimonials/Testimonials";
import StartupCost from "../components/startup-cost/StartupCost";
import OurStory from "../components/our-story/OurStory";
import BusinessBroker from "../components/business-broker/BusinessBroker";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
     <BusinessBroker />
      {/* <Testimonials/> */}
      {/* <WhyUs/> */}
      {/* <StartupCost /> */}
      {/* <Faq /> */}
      {/* <Benefits /> */}
    </>
  );
}
