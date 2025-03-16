'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-950">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Selamat Datang di [Nama Organisasi]
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Membangun masa depan teknologi bersama komunitas yang berdedikasi
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600"
          >
            Lihat Youtube
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white/10"
          >
            Instagram Kami
          </Button>
        </div>
      </motion.div>
    </section>
  )
}