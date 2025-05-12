import { useEffect, useState } from 'react';

const DynamicBackground = () => {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      // ตำแหน่งแบบเปอร์เซ็นต์
      const xPos = Math.floor(x * 100);
      const yPos = Math.floor(y * 100);

      // สีหลักหลายจุด
      const color1 = `hsla(${(x * 360) % 360}, 80%, 60%, 0.6)`;
      const color2 = `hsla(${(y * 360 + 60) % 360}, 80%, 60%, 0.6)`;
      const color3 = `hsla(${((x + y) * 180) % 360}, 80%, 60%, 0.4)`;

      // ผสมหลายจุด
      const multiRadial = `
        radial-gradient(circle at ${xPos}% ${yPos}%, ${color1}, transparent 60%),
        radial-gradient(circle at ${100 - xPos}% ${100 - yPos}%, ${color2}, transparent 60%),
        radial-gradient(circle at 50% 50%, ${color3}, transparent 70%)
      `;

      setGradient(multiRadial);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="dynamic-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -10,
        width: "100vw",
        height: "100vh",
        transition: "background 0.5s ease",
        background: gradient,
      }}
    />
  );
};

export default DynamicBackground;
