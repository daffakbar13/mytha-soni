import React from "react";
import { twMerge } from "tailwind-merge";

import type { CardProps } from "./types";

const Card: React.FC<CardProps> = (props) => {
  const { children, className, bodyClassName } = props;

  return (
    <div
      className={twMerge(
        "relative w-full h-full border-4 rounded-full border-bronze bg-[#FFFAF3DB] overflow-hidden shadow-[0_0_10px_0_rgba(0,0,0,0.5)]",
        className
      )}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-[0.88] bg-linen"></div>
      <div className={twMerge("relative z-10", bodyClassName)}>{children}</div>
    </div>
  );
};

export default Card;
