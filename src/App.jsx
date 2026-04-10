import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Hero } from "./sections/Hero";
import { Navbar } from "./layouts/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Testimonials } from "./sections/Testimonials";
import { NotFound } from "./pages/NotFound";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
      <Experience />
      <Testimonials />
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
