import About from "../components/sections/about";
import Activities from "../components/sections/activities";
import Contact from "../components/sections/contact";
import Footer from "../components/sections/footer";
import Hero from "../components/sections/hero";
import Members from "../components/sections/members";
import Organization from "../components/sections/organization";
import Header from "../components/shared/header";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Organization />
      <Members />
      <Activities />
      <Contact />
      <Footer />
    </main>
  )
}