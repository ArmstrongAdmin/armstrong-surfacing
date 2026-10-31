import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Armstrong Surfacing Ltd`,
    description: project.description,

    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}


export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
  .filter((p) => p.slug !== project.slug)
  .slice(0, 3);


  return (
    <main>

        <section className="relative h-[500px]">

        <div className="relative">
            <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className="object-cover"
            />
        </div>

        <div className="absolute inset-0 bg-[#071B39]/75" />

        <div className="relative mx-auto flex h-full max-w-[1600px] items-center px-8">

            <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-400">
                {project.sector}
            </p>

            <h1 className="text-6xl font-black text-white">
                {project.title}
            </h1>

            </div>

        </div>

        </section>

        <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-8">

            <h2 className="mb-6 text-4xl font-black">
            Project Overview
            </h2>

            <p className="mb-10 text-lg text-slate-600">
            {project.description}
            </p>

            <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-xl bg-slate-100 p-6">
                <h3 className="font-bold">
                Location
                </h3>

                <p>{project.location}</p>
            </div>

            <div className="rounded-xl bg-slate-100 p-6">
                <h3 className="font-bold">
                Sector
                </h3>

                <p>{project.sector}</p>
            </div>

            <div className="rounded-xl bg-slate-100 p-6">
                <h3 className="font-bold">
                Contractor
                </h3>

                <p>Armstrong Surfacing</p>
            </div>

            </div>

        </div>

        </section>

        <section className="bg-slate-50 py-24">

            <div className="mx-auto max-w-4xl px-8">

                <h2 className="mb-8 text-4xl font-black">
                Project Details
                </h2>

                <div className="space-y-6">

                {project.content?.split("\n")
                    .filter(Boolean)
                    .map((paragraph, index) => (
                    <p
                        key={index}
                        className="text-lg leading-relaxed text-slate-700"
                    >
                        {paragraph.trim()}
                    </p>
                ))}

                </div>

            </div>

        </section>

        <section className="bg-white py-24">

            <div className="mx-auto max-w-[1400px] px-8">

                <h2 className="mb-12 text-5xl font-black">
                Related Projects
                </h2>

                <div className="grid gap-8 md:grid-cols-3">

                {relatedProjects.map((related) => (

                    <div
                    key={related.slug}
                    className="overflow-hidden rounded-2xl bg-slate-50 shadow-lg"
                    >

                    <div className="relative h-64">

                        <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover"
                        />

                    </div>

                    <div className="p-6">

                        <h3 className="mb-2 text-2xl font-black">
                        {related.title}
                        </h3>

                        <p className="mb-4 text-slate-600">
                        {related.location}
                        </p>

                        <a
                        href={`/projects/${related.slug}`}
                        className="font-semibold text-blue-600"
                        >
                        View Project →
                        </a>

                    </div>

                    </div>

                ))}

                </div>

            </div>

        </section>

        <section className="bg-[#071B39] py-24 text-white">

            <div className="mx-auto max-w-4xl px-8 text-center">

                <h2 className="mb-6 text-5xl font-black">
                Need A Surfacing Contractor?
                </h2>

                <p className="mb-10 text-xl text-slate-300">
                Speak with our team about your next project.
                </p>

                <a
                href="/contact"
                className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-bold text-white"
                >
                Request A Quote
                </a>

            </div>

        </section>
    </main>
    );
}