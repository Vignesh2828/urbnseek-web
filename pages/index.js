import Head from "next/head";
import GradientWrapper from "@/components/GradientWrapper";
import CTA from "@/components/ui/CTA";
import Features from "@/components/ui/Features";
import FooterCTA from "@/components/ui/FooterCTA";
import Hero from "@/components/ui/Hero";
import Testimonials from "@/components/ui/Testimonials";
import HowItWorks from "@/components/ui/ToolKit";
import VerifiedPage from "@/components/ui/Verified";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      {/* <LogoGrid /> */}
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <HowItWorks />
      <VerifiedPage />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
