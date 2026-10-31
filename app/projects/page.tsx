import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Armstrong Surfacing Ltd",
  description:
    "Explore Armstrong Surfacing's completed surfacing, infrastructure and construction projects.",

  openGraph: {
    title: "Projects | Armstrong Surfacing Ltd",
    description:
      "View completed projects delivered across commercial, industrial and public sector developments.",
    images: ["/images/projects-hero.jpg"],
  },
};

const projects = [
  {
    slug: "retail-development",
    title: "Retail Development Surfacing",
    location: "Lisburn",
    image: "/images/project-1.jpg",
    sector: "Commercial",
  },
  {
    slug: "industrial-estate-infrastructure",
    title: "Industrial Estate Infrastructure",
    location: "Belfast",
    image: "/images/project-2.jpg",
    sector: "Industrial",
  },
  {
    slug: "school-car-park-construction",
    title: "School Car Park Construction",
    location: "Antrim",
    image: "/images/project-3.jpg",
    sector: "Education",
  },
  {
    slug: "road-improvement-works",
    title: "Road Improvement Works",
    location: "County Down",
    image: "/images/project-4.jpg",
    sector: "Highways",
  },
  {
    slug: "housing-development-roads",
    title: "Housing Development Roads",
    location: "Newtownabbey",
    image: "/images/project-5.jpg",
    sector: "Residential",
  },
  {
    slug: "commercial-yard-surfacing",
    title: "Commercial Yard Surfacing",
    location: "Craigavon",
    image: "/images/project-6.jpg",
    sector: "Commercial",
  },
];

export default function ProjectsPage() {
  return (
    <main>

      {/* Hero */}

      <section className="relative h-[500px]">

        <div className="relative">
          <Image
          src="/images/projects-hero.jpg"
          alt="Armstrong Surfacing Projects"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        </div>

        <div className="absolute inset-0 bg-[#071B39]/75" />

        <div className="relative mx-auto flex h-full max-w-[1600px] items-center px-8">

          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-blue-400">
              Project Portfolio
            </p>

            <h1 className="text-6xl font-black text-white">
              Completed Projects
              <br />
              Across Northern Ireland
            </h1>

          </div>

        </div>

      </section>

      {/* Intro */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="mb-6 text-5xl font-black text-slate-900">
            Proven Experience
          </h2>

          <p className="text-xl leading-relaxed text-slate-600">
            From road construction and major surfacing schemes to
            commercial developments and car parks, Armstrong
            Surfacing has successfully delivered projects throughout
            Northern Ireland for generations.
          </p>

        </div>

      </section>

      {/* Projects Grid */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-[1600px] px-8">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2"
              >

                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B39]/90 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6">

                    <span className="rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                      {project.sector}
                    </span>

                  </div>

                </div>

                <div className="p-8">

                  <h3 className="mb-3 text-2xl font-black text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-slate-500">
                    {project.location}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-semibold text-blue-600"
                    >
                    View Project →
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Call To Action */}

      <section className="bg-[#071B39] py-24 text-center text-white">

        <div className="mx-auto max-w-4xl px-8">

          <h2 className="mb-6 text-5xl font-black">
            Looking For A Trusted Surfacing Contractor?
          </h2>

          <p className="mb-10 text-xl text-slate-300">
            Speak with our team about your upcoming project and
            arrange a free consultation.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-lg bg-blue-600 px-10 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}