"use client";

import { useState, useEffect } from "react";
import Header from "../header";
import NewEvent from "./NewForm";
const pad = (n) => String(Math.max(0, Math.floor(n))).padStart(2, "0");

export default function EventHero({ eventsData }) {
    const targetDate = new Date("2026-02-11T09:00:00").getTime();

    const [countdown, setCountdown] = useState([
        { value: "00", label: "Days" },
        { value: "00", label: "Hours" },
        { value: "00", label: "Minutes" },
        { value: "00", label: "Seconds" },
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
                { value: pad(minutes), label: "Minutes" },
                { value: pad(seconds), label: "Seconds" },
            ]);
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [targetDate]);

    return (
        <section className="relative w-full overflow-hidden">
            {/* <Header /> */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/banner-bg.svg')",
                }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 "
                style={{
                    background: 'rgba(29, 31, 43, 0.50)',
                }}
            />

            <div className="relative mx-auto container py-12 md:py-20">
                <div className="grid gap-10 md:grid-cols-12 items-center">
                    {/* Left content */}
                    <div className="md:col-span-8 lg:col-span-8">

                        <h2 className="mt-8 max-w-2xl text-center md:text-left text-[24px] font-bold md:leading-[1.09] leading-[1.2] tracking-[-0.02em] text-white md:text-[56px] 2xl:text-6xl uppercase 2xl:leading-[4.5rem]">
                            Spread Betting. Tax-Free. FCA-Regulated.
                        </h2>

                        <p className="mt-6 text-center md:text-left text-[14px] leading-[1.55] text-white md:text-[20px]">
                            At GMG, we give UK and Northern Ireland traders the edge. FCA regulation, tax benefits, and fast execution combine to make spread betting a smarter way to trade global markets. Whether markets rise or fall, you can take your shot, with as little as 10p per point.
                        </p>

                        {/* CTAs */}
                        <div className="md:mt-10 mt-5 flex flex-wrap justify-center md:justify-start items-center gap-5">
                            {/* <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("event-schedule");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-[50px] bg-[#293B93] px-5 py-2.5 md:text-[16px] text-[14px] font-semibold text-white transition hover:brightness-110"
              >
                Explore Schedule
              </button> */}

                            {/* <button className="group inline-flex items-center gap-2 rounded-full text-[16px] font-semibold text-white transition hover:bg-white/14">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#293B93] transition group-hover:brightness-110">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="translate-x-[1px]"
                  >
                    <path
                      d="M9 7.5V16.5L17 12L9 7.5Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Watch Video
              </button> */}
                        </div>
                    </div>


                    {/* Right form card - iFXExpo Dubai 2026 registration */}
                    <div className="md:col-span-4 lg:col-span-4 flex flex-col">
                        <NewEvent />
                    </div>
                </div>

                {/* Bottom: heading with dividers + countdown boxes */}
                <div className="md:mt-16 mt-10">
                    {/* Heading with horizontal lines */}
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 hidden md:block bg-white/20" />
                        <p className="text-center text-lg md:text-xl font-semibold tracking-wide text-white md:whitespace-nowrap whitespace-normal">
                            Upcoming Speaker Reveal - Don&apos;t Miss Out
                        </p>
                        <div className="h-px flex-1 hidden md:block bg-white/20" />
                    </div>
                    {/* Countdown timer boxes */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
                        {countdown.map((item, i) => (
                            <div
                                key={item.label}
                                className="flex flex-col items-center justify-center rounded-xl bg-[#36363a] min-w-[72px] md:min-w-[80px] py-4 px-5"
                            >
                                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tabular-nums">
                                    {item.value}
                                </span>
                                <span className="mt-1 text-xs md:text-sm text-gray-400 font-normal">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subtle vignette */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-140px_220px_rgba(0,0,0,0.65)]" />
        </section>
    );
}
