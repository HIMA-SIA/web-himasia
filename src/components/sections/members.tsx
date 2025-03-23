"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "../ui/placehorders";

const members = [
  {
    id: "233210013",
    name: "M Maulana Firdausyah",
    position: "Ketua Umum",
    division: "Ketua Umum",
    image: "/images/lana.JPG",
    social: {
      instagram: "https://www.instagram.com/naszyh_/",
      linkedin: "https://www.linkedin.com/in/muhammad-firdaussyah-083362293/",
      twitter: "https://twitter.com/username1",
    },
  },
  {
    id: "233210004",
    name: "Arfandi Ruhanda S",
    position: "Wakil Ketua Umum",
    division: "Wakil Ketua",
    image: "/images/fandi.JPG",
    social: {
      instagram: "https://www.instagram.com/fandistr_/",
      linkedin: "https://www.linkedin.com/in/arfandi-satria-255146328/",
      twitter: "https://twitter.com/username2",
    },
  },
  {
    id: "233210007",
    name: "Erlindawati Nduru",
    position: "Administrasi 2",
    division: "Administrasi",
    image: "/images/erlin.JPG",
    social: {
      instagram: "https://www.instagram.com/erlinda_nduru/",
      linkedin: "https://www.linkedin.com/in/erlindawati-nduru-5a3254281/",
      twitter: "https://twitter.com/username3",
    },
  },
  {
    id: "233210008",
    name: "Dita Putri Utami",
    position: "Koor Administrasi",
    division: "Administrasi",
    image: "/images/dita.JPG",
    social: {
      instagram: "https://instagram.com/username5",
      linkedin: "https://linkedin.com/in/username5",
      twitter: "https://twitter.com/username5",
    },
  },
  {
    id: "233210011",
    name: "Faza Shafarania W",
    position: "Administrasi 1",
    division: "Administrasi",
    image: "/images/faza.jpg",
    social: {
      instagram: "https://www.instagram.com/fallystiou/",
      linkedin: "https://www.linkedin.com/in/faza-shafarania-winahyu-1b9650335/",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "233210010",
    name: "Sofia Hanifa",
    position: "Anngota",
    division: "Akademik",
    image: "/images/sofia.JPG",
    social: {
      instagram: "https://www.instagram.com/sfyhanifaa_/",
      linkedin: "https://linkedin.com/in/username4",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "233210015",
    name: "Pramudya Ahzani I K",
    position: "Anngota",
    division: "Akademik",
    image: "/images/imral.JPG",
    social: {
      instagram: "https://www.instagram.com/paikder/",
      linkedin: "https://linkedin.com/in/username4",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "233210004",
    name: "Catur Setyono",
    position: "Koor Akademik",
    division: "Akademik",
    image: "/images/catur.JPG",
    social: {
      instagram: "https://www.instagram.com/notyourfriend_id/",
      linkedin: "https://linkedin.com/in/catursetyono",
      twitter: "https://www.threads.net/@notyourfriend_id",
    },
  },
  {
    id: "233210001",
    name: "Joharman Lombu",
    position: "Anngota",
    division: "Akademik",
    image: "/images/johar.JPG",
    social: {
      instagram: "https://www.instagram.com/joharmann_l/",
      linkedin: "https://linkedin.com/in/username4",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "233210012",
    name: "Frisca Putri C",
    position: "Anngota",
    division: "Networking",
    image: "/images/frisca.JPG",
    social: {
      instagram: "https://www.instagram.com/fr1scaaa/",
      linkedin: "https://www.linkedin.com/in/frisca-putri-cahyani-644b67320/",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "233210014",
    name: "Nendi Angger N",
    position: "Anngota",
    division: "Networking",
    image: "/images/angger.JPG",
    social: {
      instagram: "https://www.instagram.com/nendeaan/",
      linkedin: "https://www.linkedin.com/in/nendi-angger-nurcahyo-7562332a6/",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "233210003",
    name: "Muchlis Apri Adi N",
    position: "Koor Networking",
    division: "Networking",
    image: "/images/muchlis.JPG",
    social: {
      instagram: "https://www.instagram.com/muchlis_apri/",
      linkedin: "https://www.linkedin.com/in/muchlis-apri-adi-nugroho-521054306/",
      twitter: "https://twitter.com/username4",
    },
  },
];

const divisions = ["All", "Ketua","Wakil", "Administrasi", "Akademik", "Networking"];

export default function Members() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 4;

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.includes(searchTerm);
    const matchesDivision =
      selectedDivision === "All" || member.division === selectedDivision;
    return matchesSearch && matchesDivision;
  });

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(
    indexOfFirstMember,
    indexOfLastMember
  );
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);

  return (
    <section id="members" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 dark:text-red-500 mb-4">
            Anggota Kami
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Kenalin anggota-anggota kami yang berbakat dan berdedikasi dalam
            mengembangkan organisasi.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-2 mb-10 max-w-3xl mx-auto">
          <div className="w-full md:w-3/4 relative">
            <PlaceholdersAndVanishInput 
              placeholders={[
                "Cari anggota berdasarkan nama...",
                "Cari berdasarkan Nomor Induk Anggota...",
                "Cari berdasarkan posisi...",
                "Tekan Alt untuk melihat shortcut",
              ]}
              onChange={(e) => setSearchTerm(e.target.value)}
              onSubmit={(e) => {
                e.preventDefault();
                // Search is already handled by the onChange event
              }}
            />
            {/* Removed the tip text here */}
          </div>
          <div className="w-full md:w-1/4">
            <Select value={selectedDivision} onValueChange={setSelectedDivision}>
              <SelectTrigger className="w-full">
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
          {currentMembers.map((member) => (
            <Card
              key={member.id}
              className="h-full hover:shadow-lg transition-all dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-red-900 dark:text-red-400">
                  {member.name}
                </h4>
                <p className="text-cyan-600 dark:text-cyan-400 mb-1">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-3">NIA: {member.id}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Divisi: {member.division}</p>
                <div className="flex gap-3">
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-blue-500"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    className="text-gray-500 hover:text-red-400 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === index + 1
                  ? "bg-red-800 text-white dark:bg-red-700"
                  : "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
