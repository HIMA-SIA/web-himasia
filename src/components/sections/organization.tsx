"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const leaders = [
  {
    name: "M Maulana Firdausyah",
    position: "Ketua Umum",
    image: "/images/lana.JPG",
    description:
      "Memimpin organisasi dan bertanggung jawab atas seluruh kegiatan.",
  },
  {
    name: "Arfandi Ruhanda S",
    position: "Wakil Ketua",
    image: "/images/fandi.JPG",
    description:
      "Membantu ketua dalam menjalankan tugas dan tanggung jawab organisasi.",
  },
  {
    name: "Dita Putri Utami",
    position: "Koor Administrasi",
    image: "/images/dita.JPG",
    description: "Mengelola keuangan dan Administrasi organisasi.",
  },
  {
    name: "Catur Setyono",
    position: "Koor Akademik",
    image: "/images/catur.JPG",
    description: "Mengelola kegiatan akademik dan kegiatan mahasiswa.",
  },
  {
    name: "Muchlis Apri Adi N",
    position: "Koor Networking",
    image: "/images/muchlis.JPG",
    description: "Mengelola komunikasi dengan pihak eksternal dan mitra.",
  },
];

const divisions = [
  {
    name: "Divisi Administrasi",
    leader: "Dita Putri Utami",
    members: 3,
    description:
      "Mengelola keuangan dan anggaran organisasi. dan infrastruktur digital.",
  },
  {
    name: "Divisi Akademik",
    leader: "Catur Setyono",
    members: 4,
    description: "Merencanakan dan membuat kegiatan pengembangan anggota.",
  },
  {
    name: "Divisi Networking",
    leader: "Muchlis Apri Adi N",
    members: 3,
    description:
      "Mengelola komunikasi eksternal dan hubungan dengan mitra atau sponsor.",
  },
];

export default function Organization() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="organization" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 dark:text-red-500 mb-4">
            Struktur Organisasi
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Struktur organisasi kami dirancang untuk memastikan efisiensi dan
            kolaborasi antar divisi dalam mencapai tujuan bersama.
          </p>
        </motion.div>

        {/* Organizational Structure Tree */}
        <div className="mb-20">
          <div className="flex flex-col items-center">
            {/* Ketua Umum - Top Level */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div
                className="w-64 perspective-1000 cursor-pointer"
                onMouseEnter={() => setHoveredCard("leader-0")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className={`relative w-full h-full transition-all duration-500 preserve-3d ${
                    hoveredCard === "leader-0" ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front of card */}
                  <Card className="w-64 overflow-hidden group shadow-lg border-2 border-red-900 dark:border-red-700 relative z-10 dark:bg-gray-800 backface-hidden">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={leaders[0].image}
                        alt={leaders[0].name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-4 text-center">
                      <h4 className="text-xl font-semibold text-red-900 dark:text-red-400">
                        {leaders[0].name}
                      </h4>
                      <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-2">
                        {leaders[0].position}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Back of card */}
                  <Card className="w-64 absolute inset-0 h-full overflow-hidden shadow-lg border-2 border-red-900 dark:border-red-700 dark:bg-gray-800 backface-hidden rotate-y-180">
                    <CardContent className="p-6 flex flex-col justify-center h-full">
                      <h4 className="text-xl font-semibold text-red-900 dark:text-red-400 mb-4">
                        {leaders[0].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {leaders[0].description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                          {leaders[0].position}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Improved Vertical Line */}
            <div className="w-1 h-16 bg-gradient-to-b from-red-800 to-red-900 dark:from-red-700 dark:to-red-600 rounded-full shadow-md"></div>
            {/* Second Level - Wakil, Sekretaris, Bendahara */}
            <div className="flex flex-col md:flex-row gap-8 mb-8 relative ">
              {/* Horizontal connector for second level - Fixed width and positioning */}
              <div className="hidden mb-16 md:block absolute top-0 left-0 right-0 transform -translate-y-1/2 h-1 w-full bg-gradient-to-r from-red-800 via-red-900 to-red-800 dark:from-red-700 dark:via-red-600 dark:to-red-700 rounded-full shadow-md"></div>

              {leaders.slice(1).map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div
                    className="w-64 perspective-1000 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(`leader-${index + 1}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <motion.div
                      className={`relative w-full h-full transition-all duration-500 preserve-3d ${
                        hoveredCard === `leader-${index + 1}`
                          ? "rotate-y-180"
                          : ""
                      }`}
                    >
                      {/* Front of card */}
                      <Card className="w-64 mt-8 overflow-hidden group shadow-md border border-red-100 dark:border-red-100 relative z-10 dark:bg-gray-800 backface-hidden ">
                        <div className="relative h-40 w-full overflow-hidden">
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <CardContent className="p-4 text-center">
                          <h4 className="text-lg font-semibold text-red-900 dark:text-red-400">
                            {leader.name}
                          </h4>
                          <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-1">
                            {leader.position}
                          </p>
                        </CardContent>
                      </Card>

                      {/* Back of card */}
                      <Card className="w-64 absolute inset-0 h-full overflow-hidden shadow-md border border-red-200 dark:border-red-900/30 dark:bg-gray-800 backface-hidden rotate-y-180">
                        <CardContent className="p-6 flex flex-col justify-center h-full">
                          <h4 className="text-lg font-semibold text-red-900 dark:text-red-400 mb-3">
                            {leader.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {leader.description}
                          </p>
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                              {leader.position}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Improved Vertical Line */}
            <div className="w-1 h-16 bg-gradient-to-b from-red-800 to-red-900 dark:from-red-700 dark:to-red-600 rounded-full shadow-md mb-4"></div>

            {/* Divisions - Third Level */}
            <h3 className="text-2xl font-bold text-red-900 dark:text-red-500 mb-8 text-center">
              Divisi
            </h3>

            {/* Main horizontal connector for divisions */}
            <div className="relative w-full max-w-4xl mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-1 w-[80%] bg-gradient-to-r from-red-800 via-red-900 to-red-800 dark:from-red-700 dark:via-red-600 dark:to-red-700 rounded-full shadow-md"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
              {divisions.map((division, index) => (
                <motion.div
                  key={division.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border border-red-100 dark:border-red-900/30 relative z-10 dark:bg-gray-800 group">
                    <CardContent className="p-6 relative overflow-hidden">
                      <div className="absolute -right-12 -top-12 w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
                      <div className="relative z-10">
                        <h4 className="text-xl font-semibold text-red-900 dark:text-red-400 mb-2 group-hover:translate-x-1 transition-transform duration-300">
                          {division.name}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-1 transition-all duration-300">
                          <span className="font-medium">Kepala:</span>{" "}
                          {division.leader}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-3 transition-all duration-300">
                          <span className="font-medium">Jumlah Anggota:</span>{" "}
                          {division.members}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 transition-all duration-300">
                          {division.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Information Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-500 mb-8 text-center">
            Detail Pengurus Inti
          </h3>
          <div className="grid col-1 lg:col-1  md:flex md:flex-wrap justify-center gap-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={`detail-${leader.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 overflow-hidden ">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative h-24 w-24 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0 ring-4 ring-red-100 dark:ring-red-900/30 group">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-red-900 dark:text-red-400 md:text-left text-center">
                          {leader.name}
                        </h4>
                        <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-2 md:text-left text-center">
                          {leader.position}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {leader.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
