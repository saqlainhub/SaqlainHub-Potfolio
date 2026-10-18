
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}
