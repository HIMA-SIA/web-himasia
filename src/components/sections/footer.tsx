"use client"

import { motion } from "motion/react"
import { Instagram, Youtube, MapPin, Phone, Mail, ArrowUp, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-red-950 text-white dark:bg-gray-950 relative">
      <div 
        className="absolute right-8 -top-6 bg-red-600 hover:bg-red-700 p-3 rounded-full cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5" />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-red-600 h-6 w-1 mr-3 rounded-full"></span>
              Tentang Kami
            </h3>
            <p className="text-red-200 dark:text-gray-300 mb-6 text-sm leading-relaxed">
              HIMASIA adalah Himpunan Mahasiswa Sistem Informasi Akuntansi yang berdedikasi untuk mengembangkan 
              inovasi dan berbagi pengetahuan di Universitas Teknologi Digital Indonesia.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.instagram.com/himasia.utdi/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                onMouseEnter={() => setHoveredIcon('instagram')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="relative">
                  <Instagram size={22} />
                  {hoveredIcon === 'instagram' && (
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-red-600 px-2 py-1 rounded whitespace-nowrap"
                    >
                      Instagram
                    </motion.span>
                  )}
                </div>
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@himasiautdi" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                onMouseEnter={() => setHoveredIcon('youtube')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="relative">
                  <Youtube size={22} />
                  {hoveredIcon === 'youtube' && (
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-red-600 px-2 py-1 rounded whitespace-nowrap"
                    >
                      YouTube
                    </motion.span>
                  )}
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-red-600 h-6 w-1 mr-3 rounded-full"></span>
              Tautan
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Beranda", href: "#" },
                { name: "Tentang Kami", href: "#about" },
                { name: "Struktur", href: "#organization" },
                { name: "Anggota", href: "#members" },
                { name: "Program", href: "#activities" },
                { name: "Kontak", href: "#contact" }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a 
                    href={link.href} 
                    className="text-red-200 dark:text-gray-300 hover:text-white transition-colors flex items-center text-sm"
                  >
                    <span className="h-1 w-1 bg-red-400 rounded-full mr-2"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-red-600 h-6 w-1 mr-3 rounded-full"></span>
              Kontak
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-red-900/30 rounded-full p-2 mr-3 group-hover:bg-red-600 transition-colors">
                  <MapPin className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                </div>
                <span className="text-red-200 dark:text-gray-300 text-sm">
                  Jl. Raya Janti Jl. Majapahit No.143, Jaranan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, DIY 55198
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-red-900/30 rounded-full p-2 mr-3 group-hover:bg-red-600 transition-colors">
                  <Phone className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                </div>
                <a href="tel:+6287825060359" className="text-red-200 dark:text-gray-300 hover:text-white transition-colors text-sm">
                +62 838-9647-7498
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-red-900/30 rounded-full p-2 mr-3 group-hover:bg-red-600 transition-colors">
                  <Mail className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                </div>
                <a href="mailto:hmjka20@gmail.com" className="text-red-200 dark:text-gray-300 hover:text-white transition-colors text-sm">
                  hmjka20@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-red-900/30 dark:border-gray-800 mt-10 pt-6 text-center">
          <p className="text-red-300 dark:text-gray-400 text-sm flex items-center justify-center">
            <span>&copy; {new Date().getFullYear()} HIMASIA UTDI</span>
            <span className="mx-2">•</span>
            <span>Hak Cipta Dilindungi</span>
          </p>
        </div>
      </div>
    </footer>
  )
}