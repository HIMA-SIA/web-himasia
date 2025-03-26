import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/shared/header";
import Footer from "@/components/sections/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail Program Kerja | HIMASIA UTDI",
  description: "Informasi lengkap tentang program kerja Himpunan Mahasiswa Sistem Informasi Akuntansi Universitas Teknologi Digital Indonesia",
};

export default function ActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}