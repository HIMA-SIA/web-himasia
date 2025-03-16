'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

// Sample data - replace with your actual data
const activities = [
  {
    id: 1,
    title: 'Workshop Pengembangan Web',
    date: '15 Januari 2023',
    location: 'Aula Utama',
    time: '09:00 - 15:00',
    image: '/images/placeholder.jpg',
    description: 'Workshop intensif tentang pengembangan web modern menggunakan React dan NextJS.',
    status: 'Selesai',
  },
  {
    id: 2,
    title: 'Seminar Teknologi AI',
    date: '20 Februari 2023',
    location: 'Auditorium',
    time: '13:00 - 16:00',
    image: '/images/placeholder.jpg',
    description: 'Seminar mengenai perkembangan terbaru dalam teknologi kecerdasan buatan dan implementasinya.',
    status: 'Selesai',
  },
  {
    id: 3,
    title: 'Hackathon Inovasi Digital',
    date: '10-12 Maret 2023',
    location: 'Gedung Inovasi',
    time: 'Full Day',
    image: '/images/placeholder.jpg',
    description: 'Kompetisi pengembangan aplikasi selama 48 jam untuk memecahkan masalah sosial.',
    status: 'Selesai',
  },
  {
    id: 4,
    title: 'Bootcamp Data Science',
    date: '5-10 April 2023',
    location: 'Lab Komputer',
    time: '09:00 - 17:00',
    image: '/images/placeholder.jpg',
    description: 'Program intensif untuk mempelajari dasar-dasar data science dan machine learning.',
    status: 'Akan Datang',
  },
]

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Program Kerja</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Berbagai kegiatan dan program yang kami selenggarakan untuk mengembangkan 
            kompetensi dan membangun komunitas teknologi.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          {/* Activities */}
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-6 md:top-10 transform md:translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white"></div>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${
                      activity.status === 'Selesai' ? 'bg-green-500' : 'bg-blue-500'
                    } hover:${
                      activity.status === 'Selesai' ? 'bg-green-600' : 'bg-blue-600'
                    }`}>
                      {activity.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{activity.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{activity.location}</span>
                  </div>
                  <p className="text-gray-700">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}