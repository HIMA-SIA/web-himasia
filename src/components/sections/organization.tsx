'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const leaders = [
  {
    name: 'M Maulana Firdausyah',
    position: 'Ketua Umum',
    image: '/images/lana.JPG',
    description: 'Memimpin organisasi dan bertanggung jawab atas seluruh kegiatan.',
  },
  {
    name: 'Arfandi Ruhanda Sgit ',
    position: 'Wakil Ketua',
    image: '/images/fandi.JPG',
    description: 'Membantu ketua dalam menjalankan tugas dan tanggung jawab organisasi.',
  },
  {
    name: 'Erlindawati Nduru',
    position: 'Sekretaris',
    image: '/images/erlin.JPG',
    description: 'Mengelola administrasi dan dokumentasi organisasi.',
  },
  {
    name: 'Faza Shafarania W',
    position: 'Sekretaris',
    image: '/images/faza.jpg',
    description: 'Mengelola keuangan dan anggaran organisasi.',
  },
  {
    name: 'Dita Putri Utami',
    position: 'Bendahara',
    image: '/images/dita.JPG',
    description: 'Mengelola keuangan dan anggaran organisasi.',
  },
]

const divisions = [
  {
    name: 'Divisi Administrasi',
    leader: 'Dita Putri Utami',
    members: 3,
    description: 'Mengelola keuangan dan anggaran organisasi. dan infrastruktur digital.',
  },
  {
    name: 'Divisi Akademik',
    leader: 'Catur Setyono',
    members: 4,
    description: 'Merencanakan dan membuat kegiatan pengembangan anggota.',
  },
  {
    name: 'Divisi Networking',
    leader: 'Muchlis Apri Adi N',
    members: 3,
    description: 'Mengelola komunikasi eksternal dan hubungan dengan mitra atau sponsor.',
  },
  
]

export default function Organization() {
  return (
    <section id="organization" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">Struktur Organisasi</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Struktur organisasi kami dirancang untuk memastikan efisiensi dan kolaborasi 
            antar divisi dalam mencapai tujuan bersama.
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
              <Card className="w-64 overflow-hidden group shadow-lg border-2 border-red-900">
                <div className="relative h-48 w-full">
                  <Image
                    src={leaders[0].image}
                    alt={leaders[0].name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="text-xl font-semibold text-red-900">{leaders[0].name}</h4>
                  <p className="text-cyan-600 font-medium mb-2">{leaders[0].position}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vertical Line */}
            <div className="w-1 h-12 bg-red-900"></div>

            {/* Second Level - Wakil, Sekretaris, Bendahara */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              {leaders.slice(1).map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Vertical Line to each second level position */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-red-900 hidden md:block"></div>
                  
                  <Card className="w-64 overflow-hidden group shadow-md border border-red-200">
                    <div className="relative h-40 w-full">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h4 className="text-lg font-semibold text-red-900">{leader.name}</h4>
                      <p className="text-cyan-600 font-medium mb-1">{leader.position}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Vertical Line */}
            <div className="w-1 h-12 bg-red-900"></div>

            {/* Divisions - Third Level */}
            <h3 className="text-2xl font-bold text-red-900 mb-8 text-center">Divisi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.map((division, index) => (
                <motion.div
                  key={division.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Vertical Line to each division (only visible on larger screens) */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-red-900 hidden lg:block"></div>
                  
                  <Card className="h-full hover:shadow-lg transition-shadow border border-red-100">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-red-900 mb-2">{division.name}</h4>
                      <p className="text-gray-700 mb-1"><span className="font-medium">Kepala:</span> {division.leader}</p>
                      <p className="text-gray-700 mb-3"><span className="font-medium">Jumlah Anggota:</span> {division.members}</p>
                      <p className="text-gray-600">{division.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Information Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-red-900 mb-8 text-center">Detail Pengurus Inti</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={`detail-${leader.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow ">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative h-24 w-24 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-red-900 md:text-left text-center">{leader.name}</h4>
                        <p className="text-cyan-600 font-medium mb-2 md:text-left text-center">{leader.position}</p>
                        <p className="text-gray-600">{leader.description}</p>
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
  )
}