import Image from "next/image";
const services = [
  {
    id: "commercial-surfacing",
    title: "Commercial Surfacing",
    image: "/images/service-commercial.jpg",
  },
  {
    id: "road-construction",
    title: "Road Construction",
    image: "/images/service-road.jpg",
  },
  {
    id: "car-parks",
    title: "Car Parks",
    image: "/images/service-carpark.jpg",
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering",
    image: "/images/service-civil.jpg",
  },
  {
    id: "driveways",
    title: "Driveways",
    image: "/images/service-driveway.jpg",
  },
  {
    id: "site-preparation",
    title: "Site Preparation",
    image: "/images/service-site.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-[1600px] px-8">

        <div className="mb-16 flex items-end justify-between">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-blue-600">
              Our Services
            </p>

            <h2 className="max-w-3xl text-5xl font-black leading-tight text-slate-900">
              Expertise Across Every
              Stage Of Infrastructure
              Development
            </h2>
          </div>

          <button className="hidden rounded border border-slate-300 px-6 py-3 font-semibold lg:block">
            VIEW ALL SERVICES
          </button>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <div
              id={service.title.toLowerCase().replace(/\s+/g, "-")}
              key={service.title}
              className="group overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6">

                  <h3 className="text-3xl font-black text-white">
                    {service.title}
                  </h3>

                </div>

              </div>

              <div className="p-6">

                <p className="text-slate-600">
                  Delivering high-quality surfacing and
                  infrastructure solutions throughout
                  Northern Ireland.
                </p>

                <button className="mt-5 font-bold text-blue-600">
                  LEARN MORE →
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}