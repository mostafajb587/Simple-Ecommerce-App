import type { ReactNode } from "react";
import { useState, useEffect } from "react";

interface StatCardProps {
  label: string;
  count: number;
  icon: ReactNode;
  bgGradient: string;
}

export default function StatCard({
  label,
  count,
  icon,
  bgGradient,
}: StatCardProps) {
  const [displayCount, setDisplayCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = count;
    if (start === end) return;
    const increment = Math.ceil(end / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start > end) start = end;
      setDisplayCount(start);
      if (start === end) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div
      className={`
        p-6 rounded-2xl shadow-lg
        bg-gradient-to-br ${bgGradient}
        text-white flex items-center space-x-4
        transform transition duration-300
        hover:-translate-y-1 hover:shadow-2xl
      `}
    >
      <div className="text-4xl">{icon}</div>
      <div>
        <div className="text-3xl font-bold">
          {displayCount.toLocaleString()}
        </div>
        <div className="uppercase text-sm opacity-75 mt-1">{label}</div>
      </div>
    </div>
  );
}
