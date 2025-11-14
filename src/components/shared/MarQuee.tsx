'use client';

import Marquee from 'react-fast-marquee';

interface MarQueeProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function MarQuee({ text, speed = 50, className }: MarQueeProps) {
  return (
    <Marquee speed={speed} className={className} gradient={false}>
      <span className="px-4">{text}</span>
    </Marquee>
  );
}
