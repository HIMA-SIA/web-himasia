"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { activities } from "@/lib/data";
import { Timeline } from "@/components/ui/timeline";

export default function Activities() {
  // Create timeline entries from activities data
  const timelineEntries = activities.map(activity => ({
    title: activity.date,
    content: (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 ">
        <div className="relative h-48 w-full">
          {activity.video &&
          /\.(mp4|webm|ogg)$/i.test(activity.video) ? (
            <video
              className="object-cover w-full h-full"
              playsInline
              autoPlay
              loop
              muted
            >
              <source src={activity.video} type="video/mp4" />
              Browser Anda tidak mendukung elemen video.
            </video>
          ) : (
            <Image
              src={activity.images ?? "/images/ph.JPG"} 
              alt={activity.title}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute top-4 right-4">
            <Badge
              className={`${
                activity.status === "Selesai"
                  ? "bg-green-500"
                  : "bg-red-500"
              } hover:${
                activity.status === "Selesai"
                  ? "bg-green-600"
                  : "bg-red-600"
              } text-white`}
            >
              {activity.status}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-red-900 dark:text-red-400 mb-3">
            {activity.title}
          </h3>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{activity.date}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
            <Clock className="h-4 w-4 mr-2" />
            <span>{activity.time}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{activity.location}</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {activity.description}
          </p>
        </CardContent>
      </Card>
    )
  }));

  return (
    <section id="activities" className="py-24 bg-gray-50 dark:bg-gray-900 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 dark:text-red-500 mb-4">
            Program Kerja
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Berbagai kegiatan dan program yang kami selenggarakan untuk
            mengembangkan kompetensi dan membangun komunitas teknologi.
          </p>
        </motion.div>

        {/* Replace the old timeline with the new Timeline component */}
        <Timeline data={timelineEntries} />
      </div>
    </section>
  );
}
