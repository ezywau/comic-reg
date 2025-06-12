import { useEffect, useState } from "react";

export default function HeroSection() {
  const [fontSize, setFontSize] = useState("text-6xl");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 200) {
        setFontSize(y < 100 ? "text-6xl" : "text-4xl");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="text-center py-32 bg-gradient-to-b from-[#0f0f1f] to-[#1a1a2e] text-yellow-400">
      <h1 className={`${fontSize} font-bold transition-all duration-300 ease-in-out`}>
        COMIC 2024
      </h1>
      <p className="text-xl mt-2">Competition of MAN Insan Cendekia</p>
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full">
        Daftar Sekarang
      </button>
    </section>
  );
}
<video autoPlay muted loop playsInline className="your-class">
  <source src="/background.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
