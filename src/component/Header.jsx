import { useState, useEffect } from "react";

export const Header = () => {
  const [opacity, setOpacity] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.getElementById("myskill");

      if (!targetSection) return;

      const rect = targetSection.getBoundingClientRect();
      setIsActive(rect.top <= 120 && rect.bottom >= 120); // 80px disesuaikan dengan tinggi header
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight; // Tinggi layar
      const newOpacity = Math.min(scrollY / (viewportHeight * 0.1), 1); // Naik 10% setiap 1vh
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 118,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`flex px-20 py-5 h-[120px] justify-between fixed w-full z-50 ${
        isActive ? "border-b-2 border-white" : ""
      }`}
      style={{
        backgroundColor: `rgba(26, 26, 26, ${opacity})`, // Background berubah opacity
      }}
    >
      <a href="/" className=" hover:animate-spin">
        <img src="logo.png" className=" size-20 cursor-pointer" />
      </a>
      <nav className="flex">
        <ul className="text-white text-xl jura-regular flex gap-18 items-center font-bold">
          <button
            onClick={() => scrollToSection("aboutme")}
            className="inline cursor-pointer"
          >
            ABOUT ME
          </button>
          <button
            onClick={() => scrollToSection("myskill")}
            className="inline cursor-pointer"
          >
            MY SKILL
          </button>
          <button
            onClick={() => scrollToSection("project")}
            className="inline cursor-pointer"
          >
            PROJECT
          </button>
        </ul>
      </nav>
    </header>
  );
};
