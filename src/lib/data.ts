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
    title: "Pelantikan PH 2024/2025",
    date: "5 November 2024",
    time: "08:00 - 12:00 WIB",
    location: "S34 UTDI",
    description: "Acara pelantikan anggota baru HIMASIA",
    videoLink: "IYK5G6jdW5k",
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
    id: 3,
    title: "SGS batch 3",
    date: "Coming Soon",
    time: "-",
    location: "-",
    description:
    "Workshop tentang implementasi teknologi terbaru dalam sistem informasi akuntansi.",
    video: "/activities/comingsoon.mp4",
    status: "Akan Datang",
    fullDescription: "Sesi diskusi ini akan membahas konsep dasar pengembangan web dengan React.js serta bagaimana framework ini dapat digunakan untuk membangun aplikasi web modern. Mentor akan memberikan materi dasar dan studi kasus implementasi React dalam proyek nyata.",
  objectives: [
    "Memahami dasar-dasar React.js dan komponennya",
    "Menjelaskan cara kerja state dan props dalam React",
    "Mengenalkan peluang karir di bidang frontend development"
  ],
  outcomes: [
    "Peserta memahami konsep dasar React.js dan ekosistemnya",
    "Peserta mampu membuat komponen React sederhana",
    "Peserta memiliki gambaran tentang tren dan peluang karir di bidang frontend development"
  ],
  registrationLink: "https://forms.google.com/studygroup-react",
  externalLink: "https://studygroup-react.example.com",
  contactPerson: [
    {
      name: "Catur Setyono",
      role: "Koordinator Study Group",
      phone: "082334569871"
    },
    {
      name: "Frisca Putri C",
      role: "Anggota Study Group",
      phone: "089876543210"
    }
  ]
  },
  {
    id: 4,
    title: "Webinar Teknologi Blockchain",
    date: "Coming Soon",
    time: "-",
    location: "-",
    description: "Webinar tentang teknologi blockchain dan implementasinya dalam bisnis modern.",
    video: "/activities/comingsoon.mp4",
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
