// "use client";

// export default function SpreadBettingSection() {
//   const cards = [
//     {
//       title: "Switch from CFDs to Tax-Free* Spread Betting Today",
//       description:
//         "Keep more of what you earn. Profits from spread betting are free from capital gains tax and stamp duty*, giving you one of the most tax-efficient ways to trade in the UK.",
//       illustration: (
//         <div className="relative h-32 flex items-end justify-center">
//           <svg viewBox="0 0 200 120" className="w-full max-w-[180px] h-full text-blue-500/80">
//             <defs>
//               <linearGradient id="card1-grad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
//                 <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
//               </linearGradient>
//             </defs>
//             <rect x="40" y="30" width="120" height="50" rx="6" fill="url(#card1-grad)" />
//             <path d="M60 65 L90 45 L120 55 L160 35" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//             <circle cx="95" cy="48" r="12" fill="white" stroke="#3b82f6" strokeWidth="2" />
//             <circle cx="96" cy="47" r="4" fill="#3b82f6" />
//             <circle cx="70" cy="75" r="8" fill="#8b5cf6" fillOpacity="0.5" />
//             <circle cx="140" cy="60" r="6" fill="#3b82f6" fillOpacity="0.5" />
//           </svg>
//         </div>
//       ),
//     },
//     {
//       title: "Tax-Free Potential*",
//       description:
//         "You don't need huge capital to get started. With trades from just 10p per point and leverage up to 1:30 for retail clients, GMG makes global markets accessible to every trader.",
//       illustration: (
//         <div className="relative h-32 flex items-end justify-center">
//           <svg viewBox="0 0 200 120" className="w-full max-w-[180px] h-full text-blue-500/80">
//             <defs>
//               <linearGradient id="card2-grad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
//                 <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.25" />
//               </linearGradient>
//             </defs>
//             <rect x="70" y="45" width="60" height="95" rx="8" fill="#e5e7eb" stroke="#c4b5fd" strokeWidth="1" />
//             <rect x="78" y="55" width="44" height="25" rx="4" fill="white" />
//             <path d="M85 72 L95 65 L105 72 L115 68" stroke="#3b82f6" strokeWidth="2" fill="none" />
//             <circle cx="100" cy="25" r="22" fill="url(#card2-grad)" />
//             <text x="100" y="32" textAnchor="middle" fill="#1e40af" fontSize="20" fontWeight="bold" fontFamily="system-ui">$</text>
//             <rect x="55" y="95" width="30" height="20" rx="2" fill="#3b82f6" fillOpacity="0.3" />
//             <rect x="90" y="100" width="25" height="15" rx="2" fill="#8b5cf6" fillOpacity="0.3" />
//           </svg>
//         </div>
//       ),
//     },
//     {
//       title: "Keep 100% of Your Profits Both Ways",
//       description:
//         "Markets go up, markets go down, but with spread betting you can trade both directions. Go long or short across forex, indices, and commodities, and seize opportunities whichever way the market moves.",
//       illustration: (
//         <div className="relative h-32 flex items-end justify-center">
//           <svg viewBox="0 0 200 120" className="w-full max-w-[180px] h-full">
//             <defs>
//               <linearGradient id="card3-grad" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
//                 <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
//               </linearGradient>
//             </defs>
//             <rect x="35" y="25" width="130" height="65" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
//             <line x1="45" y1="42" x2="155" y2="42" stroke="#94a3b8" strokeWidth="1" />
//             <line x1="45" y1="52" x2="140" y2="52" stroke="#94a3b8" strokeWidth="1" />
//             <line x1="45" y1="62" x2="130" y2="62" stroke="#94a3b8" strokeWidth="1" />
//             <rect x="45" y="70" width="55" height="14" rx="3" fill="#22c55e" fillOpacity="0.9" />
//             <text x="72" y="81" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="system-ui">Total</text>
//             <path d="M50 75 L70 65 L90 70 L120 55 L155 60" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//             <rect x="75" y="88" width="50" height="28" rx="4" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1" />
//           </svg>
//         </div>
//       ),
//     },
//     {
//       title: "Regulated & Reliable",
//       description:
//         "Trade with the confidence that comes from FCA oversight. GMG delivers fast execution, secure systems, and a regulated environment designed to protect you every step of the way.",
//       illustration: (
//         <div className="relative h-32 flex items-end justify-center">
//           <svg viewBox="0 0 200 120" className="w-full max-w-[180px] h-full text-blue-500/80">
//             <defs>
//               <linearGradient id="card4-grad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
//                 <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
//               </linearGradient>
//             </defs>
//             <rect x="50" y="35" width="100" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
//             <path d="M65 75 L85 60 L110 70 L140 55 L155 65" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M70 50 Q100 35 130 50" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
//             <circle cx="100" cy="88" r="14" fill="white" stroke="#22c55e" strokeWidth="2" />
//             <path d="M95 88 L98 91 L106 83" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M55 45 Q75 25 120 40 Q160 50 165 35" stroke="#3b82f6" strokeWidth="2" fill="none" strokeOpacity="0.5" strokeDasharray="4 2" />
//           </svg>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <section
//       className="w-full py-16 md:py-24 px-4"
//       style={{
//         background: "linear-gradient(180deg, #f8fafc 0%, #e0f2fe 40%, #f1f5f9 100%)",
//       }}
//     >
//       <div className="container mx-auto max-w-6xl">
//         {/* Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-[#333] tracking-tight mb-3">
//             Why Traders Choose GMG for Spread Betting
//           </h2>
//           <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
//             The Smarter Way to Spread Bet in the UK
//           </p>
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col"
//             >
//               <h3 className="text-lg md:text-xl font-bold text-[#333] mb-3">
//                 {card.title}
//               </h3>
//               <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1">
//                 {card.description}
//               </p>
//               <div className="mt-auto">{card.illustration}</div>
//             </div>
//           ))}
//         </div>

//         {/* Disclaimer */}
//         <p className="text-center text-sm text-gray-500 max-w-3xl mx-auto mb-10">
//           * Tax laws are subject to change and depend on individual circumstances. Tax law may differ in a jurisdiction other than in the UK.
//         </p>

//         {/* CTA Button */}
//         <div className="flex justify-center">
//           <button
//             type="button"
//             className="px-8 py-4 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm md:text-base uppercase tracking-wide transition-colors shadow-md hover:shadow-lg"
//           >
//             Start Spread Betting Today
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";

const features = [
  {
    title: "Switch from CFDs to Tax-Free® Spread Betting Today",
    text: "Keep more of what you earn. Profits from spread betting are free from capital gains tax and stamp duty*, giving you one of the most tax-efficient ways to trade in the UK.",
    image: "/img1.png",
  },
  {
    title: "Tax-Free Potential*",
    text: "You don’t need huge capital to get started. With trades from just 10p per point and leverage up to 1:30 for retail clients, GMG makes global markets accessible to every trader.",
    image: "/img2.png",
  },
  {
    title: "Keep 100% of Your Profits Both Ways",
    text: "Markets go up, markets go down, but with spread betting you can trade both directions. Go long or short across forex, indices, and commodities, and seize opportunities whichever way the market moves.",
    image: "/img3.png",

  },
  {
    title: "Regulated & Reliable",
    text: "Trade with the confidence that comes from FCA oversight. GMG delivers fast execution, secure systems, and a regulated environment designed to protect you every step of the way.",
    image: "/img4.png",

  },
];

function FeatureCard({ title, text, image }) {
  return (
    <div className="p-4 md:p-6 flex flex-col justify-between"

      style={{
        borderRadius: "20px",
        border: "1px solid #D8EAFF",
        background: "#FFF",
        boxShadow: " -2px 4px 30px 10px rgba(33, 92, 158, 0.20)",
      }}>
      <div className=" text-center md:text-left">
        <h3 className="font-bold leading-[1.3] tracking-[-0.02em] text-[18px] text-[#215C9E] md:text-[24px]">
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

export default function GMGSpreadBettingSection() {
  return (
    <section className="w-full bg-[#fff] md:py-14 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto text-center">
          <h2 className="text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#000000] md:text-[36px]">
            Why Traders Choose GMG for Spread Betting
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
          <button className="rounded-full bg-[#E47732] px-7 py-3 text-[14px] md:text-[16px] font-medium uppercase tracking-[0.02em] text-white">
            Start Spread Betting Today
          </button>
        </div>
      </div>
    </section>
  );
}