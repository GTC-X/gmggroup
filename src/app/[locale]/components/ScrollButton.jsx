"use client";

export default function ScrollButton({
  label = "Start Spread Betting Today",
  targetId = "top",
  className = "",
}) {
  const handleScroll = () => {
    const el = document.getElementById(targetId);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href="https://client.gmgmarkets.co.uk/registration/new/"
      target="_blank"
      className={`rounded-full bg-[#E47732] px-7 py-3 cursor-pointer text-[14px] md:text-[16px] font-medium uppercase tracking-[0.02em] text-white hover:opacity-90 transition ${className}`}
    >
      {label}
    </a>
  );
}