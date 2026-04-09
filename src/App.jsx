import { Hero } from "@/sections/Hero";
import { Navbar } from "@/layouts/Navbar";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Contact/>
      <Experience/>
      <Testimonials/>
    </main>
  </div>
}

export default App
