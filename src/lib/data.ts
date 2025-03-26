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
    fullDescription: "Study Group Session (SGS) Batch 2 adalah program workshop intensif yang berfokus pada framework Laravel. Program ini dirancang untuk membantu mahasiswa memahami dasar-dasar pengembangan web menggunakan Laravel, mulai dari instalasi hingga pembuatan aplikasi sederhana.",
    objectives: [
      "Memperkenalkan framework Laravel kepada mahasiswa",
      "Mengajarkan konsep MVC dalam pengembangan web",
      "Memberikan pengalaman praktis dalam pembuatan aplikasi web"
    ],
    outcomes: [
      "Peserta mampu membuat aplikasi web sederhana menggunakan Laravel",
      "Peserta memahami struktur dan alur kerja Laravel",
      "Peserta dapat mengimplementasikan fitur dasar seperti autentikasi dan CRUD"
    ],
    documentationLink: "https://drive.google.com/drive/folders/example1",
    contactPerson: [
      {
        name: "Catur Setyono",
        role: "Koordinator Akademik",
        phone: "081234567890"
      }
    ]
  },
  {
    id: 2,
    title: "Webinar Teknologi Blockchain",
    date: "15 April 2025",
    time: "13:00 - 15:00 WIB",
    location: "Zoom Meeting",
    description: "Webinar tentang teknologi blockchain dan implementasinya dalam bisnis modern.",
    images: "/activities/webinar.jpg",
    status: "Akan Datang",
    fullDescription: "Webinar ini akan membahas teknologi blockchain dan bagaimana teknologi ini dapat diimplementasikan dalam berbagai sektor bisnis. Pembicara dari industri akan berbagi pengalaman dan studi kasus nyata tentang penggunaan blockchain.",
    objectives: [
      "Memberikan pemahaman tentang konsep dasar blockchain",
      "Menjelaskan potensi implementasi blockchain di berbagai industri",
      "Memperkenalkan peluang karir di bidang blockchain"
    ],
    outcomes: [
      "Peserta memahami konsep dasar blockchain dan cryptocurrency",
      "Peserta mengetahui contoh implementasi blockchain di dunia nyata",
      "Peserta mendapatkan wawasan tentang tren teknologi masa depan"
    ],
    registrationLink: "https://forms.google.com/example-registration",
    externalLink: "https://webinar-blockchain.example.com",
    contactPerson: [
      {
        name: "Muchlis Apri Adi N",
        role: "Koordinator Networking",
        phone: "087654321098"
      },
      {
        name: "Frisca Putri C",
        role: "Anggota Networking",
        phone: "089876543210"
      }
    ]
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
