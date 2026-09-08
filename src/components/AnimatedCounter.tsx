"use client";

import { useEffect, useState } from "react";

interface Props {
  end: number;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  decimals = 0,
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}