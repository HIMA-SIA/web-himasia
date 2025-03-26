"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, Download, UserPlus, ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { activities } from "@/lib/data";
import Link from "next/link";

export default function ActivityDetail() {
  const params = useParams();
  const router = useRouter();
  const [activity, setActivity] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (params.id) {
      const foundActivity = activities.find(
        (act) => act.id.toString() === params.id
      );
      setActivity(foundActivity);
      setLoading(false);
    }
  }, [params.id]);

  // Function to handle image navigation
  const handleImageChange = (direction: 'next' | 'prev') => {
    if (!activity || !activity.gallery) return;
    
    const galleryLength = activity.gallery.length;
    if (direction === 'next') {
      setActiveImageIndex((prev) => (prev + 1) % (galleryLength + 1)); // +1 for main image
    } else {
      setActiveImageIndex((prev) => (prev - 1 + (galleryLength + 1)) % (galleryLength + 1));
    }
  };

  // Get all images including main image and gallery
  const getAllImages = (activity: any) => {
    if (!activity) return [];
    const mainImage = activity.images || "/images/ph.JPG";
    const galleryImages = activity.gallery || [];
    return [mainImage, ...galleryImages];
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (!activity) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Program Tidak Ditemukan</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Maaf, program yang Anda cari tidak tersedia.</p>
        <Button onClick={() => router.push("/#activities")} variant="default">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Daftar Program
        </Button>
      </div>
    );
  }

  const allImages = getAllImages(activity);

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {activity.video && activeImageIndex === 0 && /\.(mp4|webm|ogg)$/i.test(activity.video) ? (
              <video
                className="object-cover w-full h-full"
                playsInline
                autoPlay
                loop
                muted
                controls
              >
                <source src={activity.video} type="video/mp4" />
                Browser Anda tidak mendukung elemen video.
              </video>
            ) : (
              <Image
                src={allImages[activeImageIndex]}
                alt={`${activity.title} - Image ${activeImageIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Image navigation controls */}
        {allImages.length > 1 && (
          <>
            <button 
              onClick={() => handleImageChange('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => handleImageChange('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Image indicator dots */}
        {allImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeImageIndex === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Overlay with title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-12">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={`px-4 py-2 rounded-full text-white font-medium inline-block mb-4 ${
                activity.status === "Selesai" ? "bg-green-500" : "bg-red-500"
              }`}>
                {activity.status}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {activity.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{activity.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{activity.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/#activities"
          className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors mb-8 group"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 mr-2 group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="h-4 w-4" />
          </span>
          <span>Kembali ke Daftar Program</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            {/* Activity Description */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-500 rounded-full mr-3 inline-block"></span>
                Deskripsi Program
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {activity.fullDescription || activity.description || "Tidak ada deskripsi detail yang tersedia untuk program ini."}
              </p>
              
              {activity.objectives && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <span className="w-1 h-6 bg-cyan-500 rounded-full mr-3 inline-block"></span>
                    Tujuan Program
                  </h3>
                  <ul className="list-none pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                    {activity.objectives.map((objective: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {activity.outcomes && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <span className="w-1 h-6 bg-cyan-500 rounded-full mr-3 inline-block"></span>
                    Hasil yang Diharapkan
                  </h3>
                  <ul className="list-none pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                    {activity.outcomes.map((outcome: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
            
            {/* Gallery Section (if available) */}
            {activity.gallery && activity.gallery.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                    <span className="w-2 h-8 bg-red-500 rounded-full mr-3 inline-block"></span>
                    Galeri
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {activity.gallery.map((image: string, index: number) => (
                      <div 
                        key={index} 
                        className="relative h-40 rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => setActiveImageIndex(index + 1)} // +1 because main image is at index 0
                      >
                        <Image
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                          <span className="text-white font-medium">Lihat</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-500 rounded-full mr-3 inline-block"></span>
                Aksi
              </h2>
              
              <div className="space-y-6">
                {activity.documentationLink && (
                  <div 
                    className="group relative overflow-hidden rounded-xl"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="absolute inset-0 bg-cyan-500 rounded-xl transform -skew-y-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-0"></div>
                    <Button 
                      className="w-full bg-cyan-600 hover:bg-cyan-600 relative z-10 py-6 group-hover:text-white transition-all duration-300 overflow-hidden rounded-xl"
                      onClick={() => window.open(activity.documentationLink, '_blank')}
                    >
                      <div className="relative z-10 flex items-center justify-center">
                        <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                        <span className="font-medium">Unduh Dokumentasi</span>
                      </div>
                    </Button>
                    <div className="absolute -top-12 left-0 right-0 bg-cyan-800 text-white text-sm rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 text-center shadow-lg">
                      <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-800 rotate-45"></div>
                      Dokumentasi di Google Drive
                    </div>
                  </div>
                )}
                
                {activity.registrationLink && (
                  <div className="group relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-red-500 rounded-xl transform -skew-y-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-0"></div>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-600 relative z-10 py-6 group-hover:text-white transition-all duration-300 overflow-hidden rounded-xl"
                      onClick={() => window.open(activity.registrationLink, '_blank')}
                    >
                      <div className="relative z-10 flex items-center justify-center">
                        <UserPlus className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                        <span className="font-medium">Daftar Sekarang</span>
                      </div>
                    </Button>
                    <div className="absolute -top-12 left-0 right-0 bg-red-800 text-white text-sm rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 text-center shadow-lg">
                      <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-800 rotate-45"></div>
                      Formulir Pendaftaran
                    </div>
                  </div>
                )}
                
                {activity.externalLink && (
                  <div className="group relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-xl transform -skew-y-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-0"></div>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-300 dark:border-gray-600 relative z-10 py-6 group-hover:border-transparent transition-all duration-300 overflow-hidden rounded-xl"
                      onClick={() => window.open(activity.externalLink, '_blank')}
                    >
                      <div className="relative z-10 flex items-center justify-center">
                        <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        <span className="font-medium">Informasi Lebih Lanjut</span>
                      </div>
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Contact Person */}
              {activity.contactPerson && (
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-500 rounded-full mr-3 inline-block"></span>
                    Narahubung
                  </h3>
                  <div className="space-y-4">
                    {activity.contactPerson.map((contact: any, index: number) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full p-3 mr-3 flex-shrink-0">
                          <span className="font-bold text-lg">{contact.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">{contact.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{contact.role}</p>
                          <a 
                            href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`}
                            className="text-sm text-red-500 hover:text-red-600 transition-colors flex items-center mt-1 group"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="group-hover:underline">{contact.phone}</span>
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}