"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Send,
  CheckCircle,
  Loader2,
  Instagram,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

// Define EmailJS keys as constants - update these lines
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS once when component mounts with the public key
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      // Remove or comment out this console log in production
      // console.log("EmailJS initialized with public key");
    } else {
      console.error("EmailJS public key is missing - check your .env.local file");
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Validate that all EmailJS keys are available
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS configuration is incomplete");
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
      return;
    }

    // Create template parameters with the form data
    const templateParams = {
      to_name: "HIMASIA UTDI",
      from_name: `${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      phone_number: formData.phone,
      message: formData.message,
      // Add any additional fields your template might need
    }
    
    // Send email using EmailJS directly from the client
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setFormStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        setFormStatus('idle');
      }, 3000);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setFormStatus('error');
      
      // Reset status after error
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background pattern */}

      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
              Hubungi Kami
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mb-8"></div>

            {/* Map replaces the address section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-red-400 mr-2" />
                Lokasi Kami
              </h4>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg group hover:shadow-red-500/20 transition-all duration-300">
                <iframe
                  className="w-full h-full border-0 transition-transform duration-500 group-hover:scale-105"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.06044324241776!2d110.40725100000002!3d-7.793309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59d1c3912be1%3A0x5227388d3b2dd581!2sSEKRET%20HMJ%20KA%20STMIK%20AKAKOM!5e0!3m2!1sid!2sid!4v1742707688718!5m2!1sid!2sid"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                    <p className="text-white text-sm font-medium max-w-[70%]">
                      Jl. Raya Janti Jl. Majapahit No.143, Banguntapan, Yogyakarta
                    </p>
                    <a 
                      href="https://www.google.com/maps/place/SEKRET+HMJ+KA+STMIK+AKAKOM/@-7.793309,110.40725,19z/data=!4m6!3m5!1s0x2e7a59d1c3912be1:0x5227388d3b2dd581!8m2!3d-7.7933086!4d110.4072507!16s%2Fg%2F11j7tq11v8?entry=ttu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-full transition-colors duration-300 flex items-center gap-1.5 w-fit shadow-lg hover:shadow-red-600/30"
                    >
                      <span>Petunjuk Arah</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 backdrop-blur-sm">
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-red-400">Alamat Lengkap:</span> Jl. Raya Janti Jl. Majapahit No.143, Jaranan, Banguntapan,
                  Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa
                  Yogyakarta 55198
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-red-900/30 rounded-full p-3 mr-4 group-hover:bg-red-600 transition-colors duration-300">
                  <Instagram className="h-6 w-6 text-red-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Instagram
                  </h4>
                  <a
                    href="https://www.instagram.com/himasia_utdi/"
                    className="text-gray-300 mt-1 hover:text-red-400 transition-colors duration-300 inline-block"
                  >
                    @himasia_utdi
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-red-900/30 rounded-full p-3 mr-4 group-hover:bg-red-600 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-red-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <a
                    href="mailto:hmjka20@gmail.com"
                    className="text-gray-300 mt-1 hover:text-red-400 transition-colors duration-300 inline-block"
                  >
                    hmjka20@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-2xl font-bold text-red-500 mb-6">
                Kirim Pesan
              </h3>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 p-6 rounded-lg text-center"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Pesan Terkirim!
                  </h4>
                  <p className="text-gray-300">
                    Terima kasih telah menghubungi kami. Kami akan segera
                    merespons pesan Anda.
                  </p>
                </motion.div>
              ) : formStatus === "error" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-900/30 p-6 rounded-lg text-center"
                >
                  <div className="h-16 w-16 text-red-500 mx-auto mb-4">❌</div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Gagal Mengirim!
                  </h4>
                  <p className="text-gray-300">
                    Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba
                    lagi nanti.
                  </p>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-2 text-gray-200"
                      >
                        Nama Depan
                      </label>
                      <div className="relative">
                        <Input
                          id="firstName"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("firstName")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500/20 transition-all duration-300 ${
                            focusedField === "firstName"
                              ? "border-red-500 ring-2 ring-red-500/20"
                              : ""
                          }`}
                        />
                        {focusedField === "firstName" && (
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -top-2 right-2 text-xs bg-red-500 px-2 py-0.5 rounded-full"
                          >
                            Wajib diisi
                          </motion.span>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-2 text-gray-200"
                      >
                        Nama Belakang
                      </label>
                      <div className="relative">
                        <Input
                          id="lastName"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("lastName")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500/20 transition-all duration-300 ${
                            focusedField === "lastName"
                              ? "border-red-500 ring-2 ring-red-500/20"
                              : ""
                          }`}
                        />
                        {focusedField === "lastName" && (
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -top-2 right-2 text-xs bg-red-500 px-2 py-0.5 rounded-full"
                          >
                            Wajib diisi
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-200"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500/20 transition-all duration-300 ${
                          focusedField === "email"
                            ? "border-red-500 ring-2 ring-red-500/20"
                            : ""
                        }`}
                      />
                      {focusedField === "email" && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-2 right-2 text-xs bg-red-500 px-2 py-0.5 rounded-full"
                        >
                          Wajib diisi
                        </motion.span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2 text-gray-200"
                    >
                      Nomor Telepon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500/20 transition-all duration-300 ${
                        focusedField === "phone"
                          ? "border-red-500 ring-2 ring-red-500/20"
                          : ""
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-200"
                    >
                      Pesan
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full min-h-[150px] bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500/20 transition-all duration-300 ${
                          focusedField === "message"
                            ? "border-red-500 ring-2 ring-red-500/20"
                            : ""
                        }`}
                      />
                      {focusedField === "message" && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-2 right-2 text-xs bg-red-500 px-2 py-0.5 rounded-full"
                        >
                          Wajib diisi
                        </motion.span>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}