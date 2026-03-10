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
      <Meta title="Spread Betting. Tax-Free. FCA-Regulated" description="At GMG, we give UK and Northern Ireland traders the edge. FCA regulation, tax benefits, and fast execution combine to make spread betting a smarter way to trade global markets." />
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
