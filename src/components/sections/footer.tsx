'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-red-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Tentang Kami</h3>
            <p className="text-red-200 mb-4">
              [Nama Organisasi] adalah komunitas teknologi yang berdedikasi untuk mengembangkan 
              inovasi dan berbagi pengetahuan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-red-200 hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#about" className="text-red-200 hover:text-white transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#organization" className="text-red-200 hover:text-white transition-colors">Struktur Organisasi</a>
              </li>
              <li>
                <a href="#members" className="text-red-200 hover:text-white transition-colors">Anggota</a>
              </li>
              <li>
                <a href="#activities" className="text-red-200 hover:text-white transition-colors">Program Kerja</a>
              </li>
              <li>
                <a href="#contact" className="text-red-200 hover:text-white transition-colors">Kontak</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-red-200">
                  Jl. Contoh No. 123, Kota, Provinsi, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0" />
                <span className="text-red-200">+62 123 4567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0" />
                <span className="text-red-200">info@organisasi.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
            <ul className="space-y-2">
              <li className="text-red-200">Senin - Jumat: 09:00 - 17:00</li>
              <li className="text-red-200">Sabtu: 09:00 - 13:00</li>
              <li className="text-red-200">Minggu: Tutup</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-red-900 mt-12 pt-8 text-center">
          <p className="text-red-300">
            &copy; {new Date().getFullYear()} [Nama Organisasi]. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}