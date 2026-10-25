import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="mx-auto max-w-[1600px] px-8">

        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-600">
              Featured Projects
            </p>

            <h2 className="max-w-3xl text-5xl font-black leading-tight text-slate-900">
              Delivering Infrastructure
              Projects Across Northern Ireland
            </h2>
          </div>

          <button className="w-fit rounded border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100">
            VIEW ALL PROJECTS
          </button>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B39] via-[#071B39]/30 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">

                  <p className="mb-2 text-sm uppercase tracking-widest text-blue-300">
                    {project.location}
                  </p>

                  <h3 className="text-2xl font-black leading-tight">
                    {project.title}
                  </h3>

                  <button className="mt-4 font-semibold text-blue-300">
                    View Project →
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}