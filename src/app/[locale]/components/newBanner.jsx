"use client";

import { useState, useEffect } from "react";
import Header from "../header";
import Image from "next/image";
const pad = (n) => String(Math.max(0, Math.floor(n))).padStart(2, "0");

export default function EventHero({ eventsData }) {
    const targetDate = new Date("2026-06-01T10:00:00").getTime();

    const [countdown, setCountdown] = useState([
        { value: "00", label: "Days" },
        { value: "00", label: "Hours" },
        { value: "00", label: "Min" },
        { value: "00", label: "Sec" },
    ]);

    useEffect(() => {
        const tick = () => {
            const now = Date.now();
            const diff = Math.max(0, targetDate - now);
            const days = diff / (1000 * 60 * 60 * 24);
            const hours = (days % 1) * 24;
            const minutes = (hours % 1) * 60;
            const seconds = (minutes % 1) * 60;
            setCountdown([
                { value: pad(days), label: "Days" },
                { value: pad(hours), label: "Hours" },
                { value: pad(minutes), label: "Min" },
                { value: pad(seconds), label: "Sec" },
            ]);
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [targetDate]);

    return (
        <section className="relative w-full overflow-hidden  bg-[url('/ab/newHero.webp')] bg-cover bg-top-center">
            {/* <Header /> */}
           
      
            <div className="relative mx-auto container pb-12 md:pb-20">
                <div className="flex items-start justify-start mb-6 pt-3">
                    <Image
                        src="/logo-white.png"
                        alt="GMGmarkets"
                        width={200}
                        height={72}
                        className="object-contain w-[150px] h-[54px] md:w-[250px] md:h-[90px]"
                        priority
                    />
                    </div>
                <div className="grid gap-10 md:grid-cols-12 items-center">
                    {/* Left content */}
                    <div className="md:col-span-8 lg:col-span-8">
                        <div className="max-w-3xl text-center md:text-left">
                             <h2 className="mt-8 text-[24px] font-bold md:leading-[1.09] leading-[1.2] tracking-[-0.02em] text-secondary md:text-[56px] 2xl:text-6xl uppercase 2xl:leading-[4.5rem]">
                            Your FCA-Regulated Home for Spread Betting
                        </h2>

                        <p className="mt-6 text-center md:text-left text-[14px] leading-[1.55] text-white md:text-[20px]">
                            At GMGmarkets, we give UK and Northern Ireland traders the edge. FCA regulation, tax benefits, and fast execution combine to make spread betting a smarter way to trade global markets. Whether markets rise or fall, you can take your shot, with as little as 10p per point.
                        </p>

                        </div>
                       
                  
                    </div>


                    {/* Right form card - iFXExpo Dubai 2026 registration */}
                    <div className="md:col-span-4 lg:col-span-4 flex flex-col">
                        <iframe
                            src="https://client.gmgmarkets.co.uk/registration/new/"
                            title="GMG Markets Registration Form"
                            className="w-full min-h-[900px] rounded-xl border border-white/20 bg-white"
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                </div>

                {/* Bottom: heading with dividers + countdown boxes */}
                <div className="md:mt-16 mt-10">
                    {/* Heading with horizontal lines */}
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 hidden md:block bg-white/20" />
                        <p className="text-center text-lg md:text-xl font-semibold tracking-wide px-5 text-white md:whitespace-nowrap whitespace-normal">
                            Secure Your Spot Before It Begins - Don&apos;t Miss Out
                        </p>
                        <div className="h-px flex-1 hidden md:block bg-white/20" />
                    </div>
                    {/* Countdown timer boxes */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
                        {countdown.map((item, i) => (
                            <div
                                key={item.label}
                                className="flex flex-col items-center justify-center rounded-xl bg-[#0e0e0f81] border border-gray-100/50 min-w-[72px] md:min-w-[160px] py-4 px-5"
                            >
                                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tabular-nums">
                                    {item.value}
                                </span>
                                <span className="mt-1 text-xs md:text-sm text-white font-bold">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

       
        </section>
    );
}
