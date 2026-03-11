
"use client";

import React from "react";
import ScrollButton from "./ScrollButton";

const features = [
  {
    title: "Switch from CFDs to Tax-Free® Spread Betting Today",
    text: "Keep more of what you earn. Profits from spread betting are free from capital gains tax and stamp duty*, giving you one of the most tax-efficient ways to trade in the UK.",
    image: "/img1.png",
  },
  {
    title: "Tax-Free Potential*",
    text: "You don’t need huge capital to get started. With trades from just 10p per point and leverage up to 1:30 for retail clients, GMGmarkets makes global markets accessible to every trader.",
    image: "/img2.png",
  },
  {
    title: "Keep 100% of Your Profits Both Ways",
    text: "Markets go up, markets go down, but with spread betting you can trade both directions. Go long or short across forex, indices, and commodities, and seize opportunities whichever way the market moves.",
    image: "/img3.png",

  },
  {
    title: "Regulated & Reliable",
    text: "Trade with the confidence that comes from FCA oversight. GMGmarkets delivers fast execution, secure systems, and a regulated environment designed to protect you every step of the way.",
    image: "/img4.png",

  },
];

function FeatureCard({ title, text, image }) {
  return (
    <div className="p-4 md:p-6 flex flex-col justify-between"

      style={{
        borderRadius: "20px",
        border: "2px solid #D8EAFF",
        background: "#FFF",
        boxShadow: " -2px 4px 30px 10px rgba(33, 92, 158, 0.20)",
      }}>
      <div className=" text-center md:text-left">
        <h3 className="font-bold leading-[1.3] tracking-[-0.02em] text-[18px] text-secondary md:text-[24px]">
          {title}
        </h3>

        <p className="mt-3 leading-[1.52] text-[#4B4B4B] text-[14px] md:text-[16px]  font-normal">
          {text}
        </p>
      </div>

      <div className="mt-4 overflow-hidden rounded-[10px] bg-[#edf1f6]">
        <img
          src={image}
          alt={title}
          className="md:min-h-[300px] max-h-[240px] md:max-h-[300px] w-full object-cover"
        />
      </div>
    </div>
  );
}

export default function GMGmarketsSpreadBettingSection() {
  return (
    <section className="w-full bg-[#fff] md:py-14 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto text-center max-w-3xl">
          <h2 className="text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#000000] md:text-[36px]">
            Why Traders Choose GMGmarkets for Spread Betting
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-[1.2] text-[#8D9099] md:text-[18px]">
            The Smarter Way to Spread Bet in the UK
          </p>
        </div>

        <div className="md:mt-10 mt-6 space-y-4 md:space-y-6">
          {/* Row 1: first card 70%, second card 30% */}
          <div className="grid grid-cols-1 md:gap-6 gap-4 md:grid-cols-[6fr_4fr]">
            <FeatureCard
              title={features[0].title}
              text={features[0].text}
              image={features[0].image}
            />
            <FeatureCard
              title={features[1].title}
              text={features[1].text}
              image={features[1].image}
            />
          </div>
          {/* Row 2: third and fourth cards equal width */}
          <div className="grid grid-cols-1 md:gap-6 gap-4 md:grid-cols-2">
            <FeatureCard
              title={features[2].title}
              text={features[2].text}
              image={features[2].image}
            />
            <FeatureCard
              title={features[3].title}
              text={features[3].text}
              image={features[3].image}
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-[14px] font-normal leading-[1.45] text-[#215C9E] md:text-[16px]">
            * Tax laws are subject to change and depend on individual
            circumstances.
            <br />
            Tax law may differ in a jurisdiction other than in the UK.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <ScrollButton label="Start Spread Betting Today" targetId="register" />
        </div>
      </div>
    </section>
  );
}