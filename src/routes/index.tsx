import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MissionVision } from "@/components/site/MissionVision";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { Features } from "@/components/site/Features";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";
import { useReveal } from "@/hooks/use-scroll";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Athryan Tech Solution" },
      {
        name: "description",
        content:
          "Athryan Tech Solution delivers AI-powered cybersecurity: penetration testing, network security, threat intelligence, and cloud security for modern enterprises.",
      },
      { property: "og:title", content: "Athryan Tech Solution — Securing the Digital Future" },
      {
        property: "og:description",
        content:
          "Advanced cybersecurity solutions for modern threats. 24/7 SOC, zero-trust, and elite pen-testing.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <WhyChooseUs />
      <Projects />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
