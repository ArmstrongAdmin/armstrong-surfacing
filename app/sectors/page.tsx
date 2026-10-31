import Image from "next/image";

const sectors = [
  {
    title: "Commercial",
    image: "/images/sector-commercial.jpg",
    description:
      "Retail parks, business parks, distribution centres and commercial developments.",
  },
  {
    title: "Industrial",
    image: "/images/sector-industrial.jpg",
    description:
      "Factories, logistics hubs, yards and heavy-duty industrial infrastructure.",
  },
  {
    title: "Education",
    image: "/images/sector-education.jpg",
    description:
      "Schools, colleges and educational campuses requiring roads and parking facilities.",
  },
  {
    title: "Residential",
    image: "/images/sector-residential.jpg",
    description:
      "Housing developments, access roads and residential surfacing works.",
  },
  {
    title: "Public Sector",
    image: "/images/sector-public.jpg",
    description:
      "Government, council and publicly funded infrastructure projects.",
  },
  {
    title: "Highways",
    image: "/images/sector-highways.jpg",
    description:
      "Road improvements, resurfacing schemes and transport infrastructure.",
  },
];

export default function SectorsPage() {
  return (
    <main>

      <section className="relative h-[500px]">

        <div className="relative">
          <Image
            src="/images/sectors-hero.jpg"
            alt="Sectors"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#071B39]/80" />

        <div className="relative mx-auto flex h-full max-w-[1600px] items-center px-8">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-blue-400">
              Sectors
            </p>

            <h1 className="text-6xl font-black text-white">
              Trusted Across
              <br />
              Multiple Industries
            </h1>
          </div>

        </div>

      </section>

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="mb-6 text-5xl font-black">
            Delivering Quality Wherever It&apos;s Needed
          </h2>

          <p className="text-xl leading-relaxed text-slate-600">
            Armstrong Surfacing works across Northern Ireland,
            supporting commercial, public sector, industrial,
            educational and residential developments.
          </p>

        </div>

      </section>

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-[1600px] px-8">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >

                <div className="relative h-72">

                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />

                </div>

                <div className="p-8">

                  <h3 className="mb-4 text-3xl font-black">
                    {sector.title}
                  </h3>

                  <p className="text-slate-600">
                    {sector.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="bg-[#071B39] py-24 text-white">

        <div className="mx-auto max-w-4xl px-8 text-center">

          <h2 className="mb-6 text-5xl font-black">
            Experience You Can Depend On
          </h2>

          <p className="mb-10 text-slate-300 text-xl">
            From local developments to major infrastructure projects,
            Armstrong Surfacing delivers dependable results.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Speak To Our Team
          </a>

        </div>

      </section>

    </main>
  );
}