import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative h-[850px] overflow-hidden bg-[#071B39]">

      {/* Background */}

       <div className="absolute inset-0">
          <Image
            src="/images/hero-road.png"
            alt="Road surfacing plant"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      

      <div className="absolute inset-0 bg-[#03152E]/55"></div>

      <div className="relative mx-auto max-w-[1600px] px-10 pt-40">

        <p className="mb-5 text-sm font-semibold uppercase tracking-[5px] text-blue-400">
          Surfacing • Roads • Infrastructure • Stronger Communities
        </p>

        <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] text-white md:text-6xl xl:text-7xl">
            BUILDING THE
            <br />
            SURFACES
            <br />
            THAT KEEP

            <span className="block text-blue-500">
                NORTHERN
            </span>

            <span className="block text-blue-500">
                IRELAND MOVING
            </span>
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-slate-200">

          Delivering road surfacing, car parks,
          civil engineering and infrastructure
          projects throughout Northern Ireland
          for over 100 years.

        </p>

        <div className="mt-10 flex gap-5">

          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-10 py-5 font-bold text-white transition hover:bg-blue-700"
            >
            REQUEST A SITE SURVEY
          </Link>

          <Link
            href="/projects"
            className="rounded-lg border border-white px-10 py-5 font-bold text-white transition hover:bg-white hover:text-[#071B39]"
            >
            EXPLORE PROJECTS
          </Link>

        </div>

      </div>

    </section>
  );
}