'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const leaders = [
  {
    name: 'Nama Ketua',
    position: 'Ketua Umum',
    image: '/images/placeholder.jpg',
    description: 'Memimpin organisasi dan bertanggung jawab atas seluruh kegiatan.',
  },
  {
    name: 'Nama Wakil',
    position: 'Wakil Ketua',
    image: '/images/placeholder.jpg',
    description: 'Membantu ketua dalam menjalankan tugas dan tanggung jawab organisasi.',
  },
  {
    name: 'Nama Sekretaris',
    position: 'Sekretaris',
    image: '/images/placeholder.jpg',
    description: 'Mengelola administrasi dan dokumentasi organisasi.',
  },
  {
    name: 'Nama Bendahara',
    position: 'Bendahara',
    image: '/images/placeholder.jpg',
    description: 'Mengelola keuangan dan anggaran organisasi.',
  },
]

const divisions = [
  {
    name: 'Divisi Teknologi',
    leader: 'Nama Kepala Divisi',
    members: 5,
    description: 'Bertanggung jawab atas pengembangan teknologi dan infrastruktur digital.',
  },
  {
    name: 'Divisi Acara',
    leader: 'Nama Kepala Divisi',
    members: 8,
    description: 'Merencanakan dan mengkoordinasikan seluruh kegiatan dan acara organisasi.',
  },
  {
    name: 'Divisi Humas',
    leader: 'Nama Kepala Divisi',
    members: 6,
    description: 'Mengelola komunikasi eksternal dan hubungan dengan mitra atau sponsor.',
  },
  {
    name: 'Divisi Media',
    leader: 'Nama Kepala Divisi',
    members: 7,
    description: 'Mengelola konten media sosial dan publikasi organisasi.',
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Struktur Organisasi</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Struktur organisasi kami dirancang untuk memastikan efisiensi dan kolaborasi 
            antar divisi dalam mencapai tujuan bersama.
          </p>
        </motion.div>

        <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Pengurus Inti</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group">
                <div className="relative h-64 w-full">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-blue-900">{leader.name}</h4>
                  <p className="text-cyan-600 font-medium mb-2">{leader.position}</p>
                  <p className="text-gray-600">{leader.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Divisi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {divisions.map((division, index) => (
            <motion.div
              key={division.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">{division.name}</h4>
                  <p className="text-gray-700 mb-1"><span className="font-medium">Kepala:</span> {division.leader}</p>
                  <p className="text-gray-700 mb-3"><span className="font-medium">Jumlah Anggota:</span> {division.members}</p>
                  <p className="text-gray-600">{division.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}