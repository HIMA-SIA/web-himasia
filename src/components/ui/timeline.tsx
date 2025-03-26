"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Clock, Calendar, Sparkles } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Update active index based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      data.length - 1,
      Math.floor(latest * data.length)
    );
    setActiveIndex(newIndex);
  });

  return (
    <div
      className="w-full bg-transparent dark:bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2 bg-red-500/10 dark:bg-red-500/20 px-3 py-1.5 rounded-full w-fit mb-3"
            >
              <Sparkles className="h-4 w-4 text-red-500 dark:text-red-400 animate-pulse" />
              <span className="text-xs uppercase tracking-wider font-bold text-red-600 dark:text-red-400">
                Perjalanan Kami
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold relative">
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Aktivitas Terkini HIMASIA
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-1 bg-red-500 rounded-full"
              />
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-neutral-900 dark:text-neutral-200 text-sm md:text-base max-w-md text-right"
          >
            Kepo dengan aktivitas apa saja yang sudah dilewati oleh HIMASIA?
            <span className="block font-medium text-red-500 dark:text-red-500 mt-1">
              Let&lsquo;s Check it Together!
            </span>
          </motion.p>
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className={`h-10 absolute left-3 md:left-3 w-10 rounded-full 
                ${
                  activeIndex >= index
                    ? "bg-gradient-to-br from-red-600 to-red-500 shadow-lg shadow-red-500/20"
                    : "bg-white dark:bg-gray-800"
                } 
                transition-all duration-500 flex items-center justify-center`}
              >
                <div
                  className={`h-4 w-4 rounded-full 
                  ${
                    activeIndex >= index
                      ? "bg-white"
                      : "bg-neutral-200 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600"
                  } 
                  p-2 transition-all duration-500`}
                />
              </div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="hidden md:flex md:pl-20 items-center gap-2"
              >
                <Calendar
                  className={`h-5 w-5 ${
                    activeIndex >= index
                      ? "text-red-600 dark:text-red-500"
                      : "text-neutral-400"
                  } transition-colors duration-300`}
                />
                <h3
                  className={`md:text-4xl font-bold ${
                    activeIndex >= index
                      ? "text-red-900 dark:text-red-500"
                      : "text-neutral-500 dark:text-neutral-400"
                  } transition-colors duration-300`}
                >
                  {item.title}
                </h3>
              </motion.div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:hidden flex items-center gap-2 mb-4"
              >
                <Calendar
                  className={`h-5 w-5 ${
                    activeIndex >= index
                      ? "text-red-600 dark:text-red-500"
                      : "text-neutral-400"
                  } transition-colors duration-300`}
                />
                <h3
                  className={`text-2xl font-bold ${
                    activeIndex >= index
                      ? "text-red-900 dark:text-red-500"
                      : "text-neutral-500 dark:text-neutral-400"
                  } transition-colors duration-300`}
                >
                  {item.title}
                </h3>
              </motion.div>
              {item.content}{" "}
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-600 via-red-500 to-transparent from-[0%] via-[50%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
