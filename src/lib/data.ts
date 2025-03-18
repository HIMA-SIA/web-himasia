import { 
  Users, 
  BookOpen, 
  StickyNote,
} from "lucide-react";

// Features for About section
export const features = [
  {
    name: "Networking",
    description: "Membangun komunitas mahasiswa Sistem Informasi Akuntansi yang solid dan kolaboratif.",
    icon: Users,
  },
  {
    name: "Akademik",
    description: "Menyediakan sumber daya dan kegiatan untuk meningkatkan pengetahuan dan keterampilan anggota.",
    icon: BookOpen,
  },
  {
    name: "Administrasi",
    description: "Mendorong pengembangan solusi inovatif dalam bidang sistem informasi akuntansi.",
    icon: StickyNote,
  },
  ];

// Activities for Activities section
export const activities = [
  {
    id: 1,
    title: "Workshop Teknologi Akuntansi",
    date: "15 Mei 2024",
    time: "09:00 - 15:00 WIB",
    location: "Auditorium UTDI",
    description: "Workshop tentang implementasi teknologi terbaru dalam sistem informasi akuntansi.",
    image: "/images/workshop.jpg",
    status: "Akan Datang",
  },
  {
    id: 2,
    title: "Seminar Karir di Bidang SIA",
    date: "20 April 2024",
    time: "13:00 - 16:00 WIB",
    location: "Ruang Seminar UTDI",
    description: "Seminar yang membahas peluang karir di bidang Sistem Informasi Akuntansi.",
    image: "/images/seminar.jpg",
    status: "Selesai",
  },
  {
    id: 3,
    title: "Pelatihan Software Akuntansi",
    date: "10 Juni 2024",
    time: "09:00 - 12:00 WIB",
    location: "Lab Komputer UTDI",
    description: "Pelatihan penggunaan software akuntansi untuk mahasiswa SIA.",
    image: "/images/training.jpg",
    status: "Akan Datang",
  },
  {
    id: 4,
    title: "Kunjungan Industri",
    date: "5 Maret 2024",
    time: "08:00 - 17:00 WIB",
    location: "PT. Teknologi Finansial Indonesia",
    description: "Kunjungan ke perusahaan untuk melihat implementasi sistem informasi akuntansi di dunia industri.",
    image: "/images/industry-visit.jpg",
    status: "Selesai",
  },
];

// Navigation items for header
export const navigation = [
  { name: "Beranda", href: "#" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Struktur Organisasi", href: "#organization" },
  { name: "Anggota", href: "#members" },
  { name: "Program Kerja", href: "#activities" },
  { name: "Kontak", href: "#contact" },
];