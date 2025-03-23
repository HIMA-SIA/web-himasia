"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Prepare template parameters
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_name: "HIMASIA UTDI", // Recipient name
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_0rlnye8", // Replace with your EmailJS service ID
        "template_r6m0yi5", // Replace with your EmailJS template ID
        templateParams,
        "Bi1U0Yp6jM8wOKUE3" // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setFormStatus("success");

        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setFormStatus("idle");
        }, 2000);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setFormStatus("error");

        // Reset status after 3 seconds
        setTimeout(() => {
          setFormStatus("idle");
        }, 3000);
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
            <p className="text-gray-300 mb-12 max-w-xl">
              Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
              atau ingin berkolaborasi. Kami siap membantu Anda dengan segala
              informasi tentang HIMASIA UTDI.
            </p>

            <div className="space-y-8">
              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-red-900/30 rounded-full p-3 mr-4 group-hover:bg-red-600 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-red-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Alamat</h4>
                  <p className="text-gray-300 mt-1">
                    Jl. Raya Janti Jl. Majapahit No.143, Jaranan, Banguntapan,
                    Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa
                    Yogyakarta 55198
                  </p>
                </div>
              </motion.div>

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

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-red-900 dark:text-red-400 mb-4">
            Lokasi Kami
          </h3>
          <div className="w-full h-[350px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.06044324241776!2d110.40725100000002!3d-7.793309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59d1c3912be1%3A0x5227388d3b2dd581!2sSEKRET%20HMJ%20KA%20STMIK%20AKAKOM!5e0!3m2!1sid!2sid!4v1742707688718!5m2!1sid!2sid"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
