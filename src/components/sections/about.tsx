"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-r from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-red-900 dark:text-red-500 mb-4"
          >
            Tentang Kami
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-cyan-500 mx-auto mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            HIMASIA adalah Himpunan Mahasiswa Sistem Informasi Akuntansi yang berdedikasi untuk mengembangkan 
            inovasi dan berbagi pengetahuan dan pengalaman beroganisasi. Seiring dengan perkembangan teknologi, kami telah berkembang 
            menjadi organisasi yang berpengaruh dalam KM di Universitas Teknologi Digital Indonesia.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4"
          >
            Misi kami adalah membangun ekosistem teknologi yang inklusif dan mendukung 
            pertumbuhan talenta digital melalui berbagai program dan kegiatan yang bermanfaat.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-none shadow dark:bg-gray-800">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full bg-red-100 dark:bg-red-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4"
                  >
                    <feature.icon className="h-6 w-6 text-red-900 dark:text-red-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-red-900 dark:text-red-400 mb-2">{feature.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}