"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Pesan telah dikirim! Kami akan menghubungi Anda segera.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 dark:text-red-500 mb-4">
            Hubungi Kami
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin berkolaborasi. Kami siap membantu Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-red-900 dark:text-red-400">Informasi Kontak</h3>

            {[ 
              { icon: MapPin, label: "Alamat", detail: "Jl. Raya Janti Jl. Majapahit No.143, Bantul, DIY" },
              { icon: Phone, label: "Telepon", detail: "+62 878-2506-0359" },
              { icon: Mail, label: "Email", detail: "hmjka20@gmail.com" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-red-900 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.label}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-red-900 dark:text-red-400 mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[ 
                { name: "name", type: "text", placeholder: "Nama Lengkap" },
                { name: "email", type: "email", placeholder: "Alamat Email" },
                { name: "subject", type: "text", placeholder: "Subjek" },
              ].map((input, index) => (
                <Input
                  key={index}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={formData[input.name]}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-red-500"
                />
              ))}
              <Textarea
                name="message"
                placeholder="Pesan Anda"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[150px] border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-red-500"
              />
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button type="submit" className="w-full flex items-center justify-center gap-2 bg-red-900 hover:bg-red-800 text-white dark:bg-red-700 dark:hover:bg-red-600 transition-all duration-300 transform">
                  <Send className="h-5 w-5" /> Kirim Pesan
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-red-900 dark:text-red-400 mb-4">Lokasi Kami</h3>
          <div className="w-full h-[350px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.507755670526!2d110.39200227492982!3d-7.782087792225265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a579efc38a7a1%3A0x3f3d9a8a07efb1d4!2sJl.%20Majapahit%2C%20Yogyakarta!5e0!3m2!1sen!2sid!4v1710456789012" 
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
