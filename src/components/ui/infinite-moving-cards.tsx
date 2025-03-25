/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  background = "default",
  cardClassName,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  background?: "default" | "gray" | "gradient" | "white" | "dark" | "none";
  cardClassName?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Get background class based on the background prop
  const getBackgroundClass = () => {
    switch (background) {
      case "gray":
        return "bg-gray-50 dark:bg-gray-900";
      case "gradient":
        return "bg-gradient-to-r from-white to-gray-100 dark:from-gray-950 dark:to-gray-900";
      case "white":
        return "bg-white dark:bg-black";
      case "dark":
        return "bg-gray-900 dark:bg-gray-950";
      case "none":
        return "";
      default:
        return "bg-gray-100 dark:bg-gray-900";
    }
  };

  return (
    <div
      className={cn(
        "py-12 w-full overflow-hidden",
        getBackgroundClass(),
        className
      )}
    >
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {items.map((item, idx) => (
            <li
              className={cn(
                "relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-white px-8 py-6 shadow-md transition-all duration-200 hover:shadow-xl md:w-[450px] dark:border-zinc-700 dark:bg-zinc-800/90",
                cardClassName
              )}
              key={`${item.name}-${idx}`}
            >
              <blockquote className="relative">
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-2 -left-2 -z-1 text-4xl text-red-200 dark:text-red-900/30"
                >
                  "
                </div>
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -bottom-12 -right-2 -z-1 text-4xl text-red-200 dark:text-red-900/30"
                >
                  "
                </div>
                <span className="relative z-20 text-sm leading-[1.6] font-normal text-gray-700 dark:text-gray-100">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center border-t border-zinc-100 pt-4 dark:border-zinc-700/50">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-red-900 dark:text-red-400">
                      {item.name}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
