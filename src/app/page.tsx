import { Hero } from "@/components/sections/hero";
import About from "../components/sections/about";
import Activities from "../components/sections/activities";
import Contact from "../components/sections/contact";
import Footer from "../components/sections/footer";
import Members from "../components/sections/members";
import Organization from "../components/sections/organization";
import Header from "../components/shared/header";
import { Quote } from "@/components/sections/quotes";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Organization />
      <Members />
      <Activities />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
