"use client";


import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Quote() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Menjadi bagian dari organisasi ini telah memberikan saya banyak pengalaman berharga, terutama dalam kepemimpinan dan pengambilan keputusan yang cepat.",
    name: "M Maulana Firdausyah",
    title: "Ketua Umum",
  },
  {
    quote:
      "Kolaborasi dan komunikasi yang baik adalah kunci sukses dalam organisasi ini. Saya merasa bangga bisa berkontribusi dan bekerja sama dengan tim yang luar biasa.",
    name: "Arfandi Ruhanda S",
    title: "Wakil Ketua Umum",
  },
  {
    quote:
      "Administrasi bukan hanya tentang dokumen, tetapi juga tentang bagaimana memastikan setiap informasi tersampaikan dengan jelas dan tepat waktu.",
    name: "Erlindawati Nduru",
    title: "Administrasi 2",
  },
  {
    quote:
      "Koordinasi dan manajemen administrasi yang baik memastikan organisasi berjalan dengan lebih tertata dan efektif.",
    name: "Dita Putri Utami",
    title: "Koor Administrasi",
  },
  {
    quote:
      "Menjadi bagian dari tim administrasi mengajarkan saya tentang pentingnya ketelitian dan tanggung jawab dalam setiap pekerjaan.",
    name: "Faza Shafarania W",
    title: "Administrasi 1",
  },
  {
    quote:
      "Berkontribusi di bidang akademik membuka wawasan saya dalam mendukung pengembangan ilmu pengetahuan dan sumber daya yang lebih baik.",
    name: "Sofia Hanifa",
    title: "Anggota Akademik",
  },
  {
    quote:
      "Membangun atmosfer akademik yang kondusif menjadi tantangan tersendiri yang saya nikmati dalam organisasi ini.",
    name: "Pramudya Ahzani I K",
    title: "Anggota Akademik",
  },
  {
    quote:
      "Menjadi koordinator akademik membuat saya lebih memahami bagaimana cara mengelola dan mendukung pertumbuhan intelektual anggota.",
    name: "Catur Setyono",
    title: "Koor Akademik",
  },
  {
    quote:
      "Belajar dan berkembang bersama dalam tim akademik memberikan pengalaman yang sangat berarti bagi saya.",
    name: "Joharman Lombu",
    title: "Anggota Akademik",
  },
  {
    quote:
      "Jaringan yang luas adalah kunci utama dalam pengembangan organisasi. Saya senang bisa berkontribusi dalam bidang networking.",
    name: "Frisca Putri C",
    title: "Anggota Networking",
  },
  {
    quote:
      "Bekerja di bidang networking mengajarkan saya bagaimana membangun hubungan yang solid dan strategis.",
    name: "Nendi Angger N",
    title: "Anggota Networking",
  },
  {
    quote:
      "Sebagai koordinator networking, saya belajar bahwa membangun koneksi yang kuat akan berdampak besar pada perkembangan organisasi ke depannya.",
    name: "Muchlis Apri Adi N",
    title: "Koor Networking",
  },
];
