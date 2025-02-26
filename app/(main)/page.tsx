
// app/page.tsx

import HeroSection from "../../components/HeroSection";

import DreamsSection from "../../components/DreamSection";
import InfiniteSlider from "../../components/LogoCarousel";
import CounselingForm from "../../components/CounselingForm";
import LifeAtInframe from "../../components/LifeAtInframe";
import CTABanner from "../../components/CTABanner";
import LatestNews from "../../components/LatestNews";
import FeaturesSection from "../../components/WhyInframe";
import TestimonialCarousel from "../../components/TestimonialSection ";
import MembershipPartnership from "../../components/MemberShipSection";
import CourseCatalog from "../../components/CourseCarousel";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <CourseCatalog/>
      <DreamsSection />
      <InfiniteSlider />
      <CounselingForm />
      <LifeAtInframe />
 
      <MembershipPartnership/>
      <CTABanner />
      {/* <LatestNews /> */}
      <FeaturesSection />
      <TestimonialCarousel />
    </div>
  );
}
