"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

// Navigation items
const navigation = [
  { name: "About us", href: "#about" },
  { name: "Struktur", href: "#organization" },
  { name: "Anggota", href: "#members" },
  { name: "Proker", href: "#activities" },
  { name: "Kontak", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      
      // Determine active section based on scroll position
      const sections = navigation.map(item => item.href).filter(href => href !== "#")
      for (const section of sections.reverse()) {
        const element = document.querySelector(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
      
      // If we're at the top, set home as active
      if (window.scrollY < 100) {
        setActiveSection("#")
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle smooth scrolling when clicking navigation links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // If it's just "#" (home), scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
      return
    }
    
    // For other section links
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-red-900/95 to-red-800/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a 
            href="#" 
            className="flex items-center gap-3 group"
            onClick={(e) => handleNavClick(e, "#")}
          >
            <div className="relative overflow-hidden rounded-full border-2 border-white/20 p-1 transition-all duration-300 group-hover:border-white/40">
              <Image
                src="/logo.png"
                alt="HIMASIA - UTDI"
                width={48}
                height={48}
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-white text-xl tracking-tight">HIMASIA</h1>
              <p className="text-white/70 text-xs">Universitas Teknologi Digital Indonesia</p>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeSection === item.href 
                    ? 'text-white bg-white/10 shadow-sm' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <div className="ml-2 p-1 bg-white/10 backdrop-blur-sm rounded-full">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="p-1 bg-white/10 backdrop-blur-sm rounded-full">
              <ThemeToggle />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 rounded-full"
                >
                  <Menu className="h-5 w-5 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-b from-red-900 to-red-950 border-none text-white">
                <div className="flex items-center gap-3 mb-8 mt-8">
                  <Image
                    src="/logo.png"
                    alt="HIMASIA - UTDI"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="font-bold text-xl">HIMASIA</h2>
                    <p className="text-white/70 text-xs">Universitas Teknologi Digital Indonesia</p>
                  </div>
                </div>
                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`p-3 rounded-lg text-lg font-bold transition-all ${
                        activeSection === item.href 
                          ? 'bg-white/10 text-white' 
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}