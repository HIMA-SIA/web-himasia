'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

// Sample data - replace with your actual data
const members = [
  {
    id: '001',
    name: 'Nama Anggota 1',
    position: 'Developer',
    division: 'Teknologi',
    image: '/images/placeholder.jpg',
    social: {
      instagram: 'https://instagram.com/username1',
      linkedin: 'https://linkedin.com/in/username1',
      twitter: 'https://twitter.com/username1',
    },
  },
  {
    id: '002',
    name: 'Nama Anggota 2',
    position: 'Designer',
    division: 'Media',
    image: '/images/placeholder.jpg',
    social: {
      instagram: 'https://instagram.com/username2',
      linkedin: 'https://linkedin.com/in/username2',
      twitter: 'https://twitter.com/username2',
    },
  },
  {
    id: '003',
    name: 'Nama Anggota 3',
    position: 'Project Manager',
    division: 'Acara',
    image: '/images/placeholder.jpg',
    social: {
      instagram: 'https://instagram.com/username3',
      linkedin: 'https://linkedin.com/in/username3',
      twitter: 'https://twitter.com/username3',
    },
  },
  {
    id: '004',
    name: 'Nama Anggota 4',
    position: 'Content Creator',
    division: 'Humas',
    image: '/images/placeholder.jpg',
    social: {
      instagram: 'https://instagram.com/username4',
      linkedin: 'https://linkedin.com/in/username4',
      twitter: 'https://twitter.com/username4',
    },
  },
  // Add more members as needed
]

const divisions = ['Semua', 'Teknologi', 'Media', 'Acara', 'Humas']

export default function Members() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDivision, setSelectedDivision] = useState('Semua')

  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.id.includes(searchTerm)
    
    const matchesDivision = selectedDivision === 'Semua' || member.division === selectedDivision
    
    return matchesSearch && matchesDivision
  })

  return (
    <section id="members" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">Anggota Kami</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Kenali anggota-anggota kami yang berbakat dan berdedikasi dalam mengembangkan organisasi.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="w-full md:w-2/3">
            <Input
              placeholder="Cari berdasarkan nama, posisi, atau ID anggota..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-1/3">
            <Select value={selectedDivision} onValueChange={setSelectedDivision}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih Divisi" />
              </SelectTrigger>
              <SelectContent>
                {divisions.map((division) => (
                  <SelectItem key={division} value={division}>
                    {division}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <div className="relative h-48 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-red-900">{member.name}</h4>
                    <p className="text-cyan-600 mb-1">{member.position}</p>
                    <p className="text-gray-600 mb-3">ID: {member.id}</p>
                    <p className="text-gray-600 mb-4">Divisi: {member.division}</p>
                    
                    <div className="flex gap-3">
                      {member.social.instagram && (
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
                          <Instagram size={20} />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors">
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-400 transition-colors">
                          <Twitter size={20} />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">Tidak ada anggota yang ditemukan.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}