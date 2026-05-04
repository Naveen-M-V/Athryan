import { ExternalLink, Github, Globe, Smartphone, Palette, Code } from "lucide-react";
import { useReveal } from "@/hooks/use-scroll";
import project1 from "@/assets/1.png";
import project2 from "@/assets/2.png";
import project3 from "@/assets/3.png";
import project4 from "@/assets/4.png";
import project5 from "@/assets/5.png";
import project6 from "@/assets/6.png";
import project7 from "@/assets/7.png";
import project8 from "@/assets/8.png";

const projects = [
  {
    id: 1,
    title: "Which Renewables",
    category: "Web Development",
    description: "WhichRenewables.com is a digital platform that connects renewable energy professionals, businesses, and users, offering insights and networking across the clean energy sector.",
    image: project1,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    link: "https://which-app.vercel.app",
    icon: Globe,
  },
  {
    id: 2,
    title: "Easy Entry",
    category: "Web Development",
    description: "EasyEntry.in is a ticketing platform designed to simplify event entry management, enabling organizers to create, distribute, and validate tickets seamlessly.",
    image: project2,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://easyentry.in",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Talent Shield",
    category: "Web Development",
    description: "HRMS.TalentShield.co.uk is a human resource management system portal that allows organizations to manage employee data, attendance, payroll, and other HR processes through a centralized digital platform.",
    image: project3,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://hrms.talentshield.co.uk",
    icon: Palette,
  },
  {
    id: 4,
    title: "My Guide in Rome",
    category: "Web Development",
    description: "MyGuideInRome.com is a travel platform that helps users explore Rome through curated tours, activities, and local recommendations provided by experts.",
    image: project4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    link: "https://guide-five-ebon.vercel.app/",
    icon: Code,
  },
  {
    id: 5,
    title: "Self Made Ninja Academy",
    category: "Web Development",
    description: "Selfmade.ninja is an online tech learning platform that offers hands-on courses in programming, cybersecurity, AI, and web development, focused on practical, real-world skills.",
    image: project5,
    tech: ["Bootstrap", "Core UI", "Swiper JS"],
    link: "http://selfmade.ninja/",
    icon: Globe,
  },
  {
    id: 6,
    title: "Gold Winner",
    category: "Web Development",
    description: "GoldWinner Mother's Day Campaign is a promotional platform that lets users send personalized Mother's Day gifts and messages on behalf of the Gold Winner brand.",
    image: project6,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://goldwinner.athryan.com",
    github: null,
    icon: Palette,
  },
  {
    id: 7,
    title: "Self Made Ninja Labs",
    category: "Web Development",
    description: "Selfmade Ninja Labs is a cloud-based virtual lab platform that provides real, hands-on environments for coding, cybersecurity, DevOps, and AI experimentation.",
    image: project7,
    tech: ["Bootstrap", "Core UI", "Swiper JS"],
    link: "https://labs.selfmade.ninja/",
    github: null,
    icon: Palette,
  },
  {
    id: 8,
    title: "Sibidharan Personal Portfolio",
    category: "Web Development",
    description: "Sibidharan's personal portfolio website showcasing his work, skills, and projects.",
    image: project8,
    tech: ["WordPress"],
    link: "https://sibidharan.me/",
    github: null,
    icon: Palette,
  },
];

export function Projects() {
  useReveal();

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--gold)]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--platinum)]/8 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--gold)]">
            — Our Work
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">
            Featured{" "}
            <span className="text-gradient italic font-serif font-medium">
              Projects
            </span>
          </h2>
          <div className="hairline mx-auto mt-6 w-32" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of digital solutions that showcase our expertise in web development, mobile apps, branding, and digital marketing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="reveal group relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-[var(--card)]/50 backdrop-blur-sm rounded-2xl border border-[var(--gold)]/20 overflow-hidden hover:border-[var(--gold)]/40 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-[0.3em] bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--gold)]/30 rounded-full text-[var(--gold)]">
                      {project.category}
                    </span>
                  </div>

                  {/* Icon overlay on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gold)]/20 backdrop-blur-sm border border-[var(--gold)]/40">
                      <project.icon className="h-5 w-5 text-[var(--gold)]" />
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl tracking-wide group-hover:text-[var(--gold)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="hairline mt-3 w-12 bg-[var(--gold)]" />
                  
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] font-mono uppercase tracking-[0.2em] bg-[var(--input)]/50 border border-[var(--border)] rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-[var(--gold)] hover:text-[var(--gold-soft)] transition-colors duration-300 group/link"
                    >
                      <ExternalLink className="h-3 w-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal">
          <p className="text-sm text-muted-foreground uppercase tracking-[0.3em]">
            Ready to start your next project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-primary-foreground text-sm font-semibold hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_40px_-10px_oklch(0.72_0.15_250/0.5)]"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
