"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the data to your backend
    alert("Pesan telah dikirim! Kami akan menghubungi Anda segera.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 dark:text-red-500 mb-4">Hubungi Kami</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin berkolaborasi.
            Kami siap membantu Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-red-900 dark:text-red-400 mb-6">Informasi Kontak</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-red-900 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Alamat</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Jl. Contoh No. 123, Kota, Provinsi, 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-red-900 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Telepon</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">+62 123 4567 890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-red-900 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    info@himasia.org
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-red-900 dark:text-red-400 mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Alamat Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subjek"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px] border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-red-900 hover:bg-red-800 text-white dark:bg-red-700 dark:hover:bg-red-600"
              >
                <Send className="h-4 w-4 mr-2" />
                Kirim Pesan
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}