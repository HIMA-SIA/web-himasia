import { Users, BookOpen, StickyNote } from "lucide-react";

// Features for About section
export const features = [
  {
    name: "Networking",
    description:
      "Membangun komunitas mahasiswa Sistem Informasi Akuntansi yang solid dan kolaboratif.",
    icon: Users,
  },
  {
    name: "Akademik",
    description:
      "Menyediakan sumber daya dan kegiatan untuk meningkatkan pengetahuan dan keterampilan anggota.",
    icon: BookOpen,
  },
  {
    name: "Administrasi",
    description:
      "Menyusun Laporan administrasi keuangan organisasi dan segala bentuk bentuk dokumentasi kegiatan.",
    icon: StickyNote,
  },
];

// Activities for Activities section
export const activities = [
  {
    id: 1,
    title: "SGS batch 2",
    date: "5 Maret 2025",
    time: "19:00 - 21:00 WIB",
    location: "Online",
    description: "Workshop Laravel",
    images: "/activities/sgs2.jpg",
    status: "Selesai",
  },
  {
    id: 2,
    title: "SGS batch 3",
    date: "Coming Soon",
    time: "-",
    location: "-",
    description:
      "Workshop tentang implementasi teknologi terbaru dalam sistem informasi akuntansi.",
    video: "/activities/comingsoon.mp4",
    status: "Akan Datang",
  },
  {
    id: 3,
    title: "Belajar Bareng",
    date: "Coming Soon",
    time: "-",
    location: "-",
    description:
      "Workshop tentang implementasi teknologi terbaru dalam sistem informasi akuntansi.",
    video: "/activities/comingsoon.mp4",
    status: "Akan Datang",
  },
  {
    id: 4,
    title: "Belajar Bareng",
    date: "Coming Soon",
    time: "-",
    location: "-",
    description:
      "Workshop tentang implementasi teknologi terbaru dalam sistem informasi akuntansi.",
    video: "/activities/comingsoon.mp4",
    status: "Akan Datang",
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
