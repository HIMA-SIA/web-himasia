"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, ArrowRight, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { activities } from "@/lib/data";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export default function Activities() {
  // Create timeline entries from activities data
  const timelineEntries = activities.map(activity => ({
    title: activity.date,
    content: (
      <Link href={`/activities/${activity.id}`} className="block">
        <Card className="overflow-hidden hover:shadow-xl transition-shadow dark:bg-gray-800 group">
          <div className="relative h-48 w-full">
            {activity.video && /\.(mp4|webm|ogg)$/i.test(activity.video) ? (
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
                src={activity.images || "/images/ph.JPG"} 
                alt={activity.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
            <div className="absolute top-4 right-4">
              <Badge
                className={`${
                  activity.status === "Selesai"
                    ? "bg-green-500"
                    : "bg-red-600"
                } hover:${
                  activity.status === "Selesai"
                    ? "bg-green-600"
                    : "bg-red-700"
                } text-white`}
              >
                {activity.status}
              </Badge>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <span className="text-white flex items-center justify-center">
                  <span className="mr-1">Lihat Detail</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-red-900 dark:text-red-400 mb-3 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors">
              {activity.title}
            </h3>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
              <Calendar className="h-4 w-4 mr-2 text-red-600 dark:text-red-500" />
              <span>{activity.date}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
              <Clock className="h-4 w-4 mr-2 text-cyan-600 dark:text-cyan-500" />
              <span>{activity.time}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
              <MapPin className="h-4 w-4 mr-2 text-red-600 dark:text-red-500" />
              <span>{activity.location}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
              {activity.description}
            </p>
          </CardContent>
        </Card>
      </Link>
    )
  }));

  return (
    <section id="activities" className="py-24 bg-gradient-to-r from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-full mb-4"
          >
            <Activity className="h-5 w-5 mr-2 animate-pulse" />
            <span className="font-medium">Aktivitas Terkini</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
            Program Kerja
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-red-600 rounded-l-xl"></div>
            <div className="w-16 h-1 bg-cyan-600 rounded-r-xl"></div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Berbagai kegiatan dan program yang kami selenggarakan untuk
            mengembangkan kompetensi dan <span className="text-red-600 dark:text-red-400 font-medium">membangun komunitas teknologi</span>.
          </motion.p>
        </motion.div>

        {/* Timeline component */}
        <Timeline data={timelineEntries} />
      </div>
    </section>
  );
}
