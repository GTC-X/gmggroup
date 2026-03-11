"use client";
  import Meta from "./components/Meta";
import NewBanner from "./components/newBanner";
import SpreadBettingSection from "./components/SpreadBettingSection";
import SpreadBettingForYouSection from "./components/SpreadBettingForYouSection";
import HowSpreadBettingWorksSection from "./components/HowSpreadBettingWorksSection";
import AboutUsSection from "./components/AboutUsSection";
import LegalFooterSection from "./components/LegalFooterSection";

export default function GTCRegisterWithDesign() {
  return (
    <>
      <Meta title="Spread Betting with FCA Broker GMGmarkets" description="Trade tax-free* spread betting with GMGmarkets. FCA-regulated, fast execution, and low barriers to entry. (*Tax treatment depends on your circumstances.)" />
      <div className="min-h-screen bg-[#0F143A] text-white">
        {/* Top Bar */}
        <NewBanner />
        <SpreadBettingSection />
        <SpreadBettingForYouSection />
        <HowSpreadBettingWorksSection />
        <AboutUsSection />
        <LegalFooterSection />
      </div>
    </>
  );
}
