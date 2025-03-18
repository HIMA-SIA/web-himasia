"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const members = [
  {
    id: "001",
    name: "M Maulana Firdausyah",
    position: "Hacker",
    division: "Ketua",
    image: "/images/lana.JPG",
    social: {
      instagram: "https://www.instagram.com/naszyh_/",
      linkedin: "https://www.linkedin.com/in/muhammad-firdaussyah-083362293/",
      twitter: "https://twitter.com/username1",
    },
  },
  {
    id: "002",
    name: "Arfandi Ruhanda S",
    position: "Event",
    division: "Wakil",
    image: "/images/fandi.JPG",
    social: {
      instagram: "https://www.instagram.com/fandistr_/",
      linkedin: "https://www.linkedin.com/in/arfandi-satria-255146328/",
      twitter: "https://twitter.com/username2",
    },
  },
  {
    id: "003",
    name: "Erlindawati Nduru",
    position: "Administration",
    division: "Administrasi",
    image: "/images/erlin.JPG",
    social: {
      instagram: "https://www.instagram.com/erlinda_nduru/",
      linkedin: "https://www.linkedin.com/in/erlindawati-nduru-5a3254281/",
      twitter: "https://twitter.com/username3",
    },
  },
  {
    id: "004",
    name: "Dita Putri Utami",
    position: "Administration",
    division: "Administrasi",
    image: "/images/dita.JPG",
    social: {
      instagram: "https://instagram.com/username5",
      linkedin: "https://linkedin.com/in/username5",
      twitter: "https://twitter.com/username5",
    },
  },
  {
    id: "005",
    name: "Faza Shafarania W",
    position: "Administration",
    division: "Administrasi",
    image: "/images/faza.jpg",
    social: {
      instagram: "https://www.instagram.com/fallystiou/",
      linkedin: "https://www.linkedin.com/in/faza-shafarania-winahyu-1b9650335/",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "006",
    name: "Sofia Hanifa",
    position: "Event",
    division: "Akademik",
    image: "/images/sofia.JPG",
    social: {
      instagram: "https://www.instagram.com/sfyhanifaa_/",
      linkedin: "https://linkedin.com/in/username4",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "007",
    name: "Pramudya Ahzani I K",
    position: "Social Media",
    division: "Akademik",
    image: "/images/imral.JPG",
    social: {
      instagram: "https://www.instagram.com/paikder/",
      linkedin: "https://linkedin.com/in/username4",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "008",
    name: "Catur Setyono",
    position: "Hacker",
    division: "Akademik",
    image: "/images/catur.JPG",
    social: {
      instagram: "https://www.instagram.com/notyourfriend_id/",
      linkedin: "https://linkedin.com/in/catursetyono",
      twitter: "https://www.threads.net/@notyourfriend_id",
    },
  },
  {
    id: "009",
    name: "Joharman Lombu",
    position: "Core Team",
    division: "Akademik",
    image: "/images/johar.JPG",
    social: {
      instagram: "https://www.instagram.com/joharmann_l/",
      linkedin: "https://linkedin.com/in/username4",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "010",
    name: "Frisca Putri C",
    position: "Social Media",
    division: "Networking",
    image: "/images/frisca.JPG",
    social: {
      instagram: "https://www.instagram.com/fr1scaaa/",
      linkedin: "https://www.linkedin.com/in/frisca-putri-cahyani-644b67320/",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "011",
    name: "Nendi Angger N",
    position: "Social Media",
    division: "Networking",
    image: "/images/angger.JPG",
    social: {
      instagram: "https://www.instagram.com/nendeaan/",
      linkedin: "https://www.linkedin.com/in/nendi-angger-nurcahyo-7562332a6/",
      twitter: "https://twitter.com/username4",
    },
  },
  {
    id: "012",
    name: "Muchlis Apri Adi N",
    position: "Event",
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
    <section id="members" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
            Anggota Kami
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Kenalin anggota-anggota kami yang berbakat dan berdedikasi dalam
            mengembangkan organisasi.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <Input
            placeholder="Cari berdasarkan nama, posisi, atau ID anggota..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-2/3"
          />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentMembers.map((member) => (
            <Card
              key={member.id}
              className="h-full hover:shadow-lg transition-all"
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
                <h4 className="text-xl font-semibold text-red-900">
                  {member.name}
                </h4>
                <p className="text-cyan-600 mb-1">{member.position}</p>
                <p className="text-gray-600 mb-3">ID: {member.id}</p>
                <p className="text-gray-600 mb-4">Divisi: {member.division}</p>
                <div className="flex gap-3">
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    className="text-gray-500 hover:text-pink-600"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    className="text-gray-500 hover:text-red-600"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    className="text-gray-500 hover:text-red-400"
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
                  ? "bg-cyan-500 text-white"
                  : "bg-white text-gray-700"
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
