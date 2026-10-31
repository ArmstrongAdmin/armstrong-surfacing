import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Armstrong Surfacing Ltd",
  description:
    "Learn about Armstrong Surfacing, our heritage, values and experience delivering surfacing and civil engineering projects across Northern Ireland.",

  openGraph: {
    title: "About Us | Armstrong Surfacing Ltd",
    description:
      "Learn about Armstrong Surfacing, our heritage, values and experience delivering surfacing projects across Northern Ireland.",
    images: ["/images/about-hero.jpg"],
  },
};
export default function AboutPage() {
  return (
    <main>

      {/* Hero */}

      <section className="relative h-[500px]">
        <div className="relative">
          <Image
            src="/images/about-hero.jpg"
            alt="Armstrong Surfacing"
            fill
            priority
            className="object-cover"
          />
        </div>
       

        <div className="absolute inset-0 bg-[#071B39]/70" />

        <div className="relative mx-auto flex h-full max-w-[1600px] items-center px-8">

          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-blue-400">
              About Armstrong Surfacing
            </p>

            <h1 className="text-6xl font-black text-white">
              Over 100 Years
              <br />
              Of Surfacing Excellence
            </h1>

          </div>

        </div>

      </section>

      {/* Company Story */}

      <section className="bg-white py-24">

        <div className="mx-auto grid max-w-[1600px] gap-16 px-8 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-600">
              Our Story
            </p>

            <h2 className="mb-8 text-5xl font-black text-slate-900">
              Four Generations
              Building Northern Ireland
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              The Armstrong family has been involved in
              surfacing and quarrying for over 100 years.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              Today Armstrong Surfacing continues to provide
              high-quality surfacing, road construction,
              car park development and civil engineering
              services throughout Northern Ireland.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Our reputation has been built on reliability,
              workmanship and long-lasting results.
            </p>

          </div>

          <div className="relative min-h-[500px] overflow-hidden rounded-2xl">

            <div className="relative">
              <Image
                src="/images/about-story.jpg"
                alt="Armstrong Surfacing Team"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="bg-[#071B39] py-24 text-white">

        <div className="mx-auto grid max-w-[1400px] gap-8 px-8 text-center md:grid-cols-4">

          <div>
            <h3 className="text-6xl font-black text-blue-400">
              100+
            </h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3 className="text-6xl font-black text-blue-400">
              4
            </h3>
            <p>Generations</p>
          </div>

          <div>
            <h3 className="text-6xl font-black text-blue-400">
              5000+
            </h3>
            <p>Projects Completed</p>
          </div>

          <div>
            <h3 className="text-6xl font-black text-blue-400">
              NI
            </h3>
            <p>Wide Coverage</p>
          </div>

        </div>

      </section>

      {/* Values */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-[1400px] px-8">

          <div className="mb-16 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-blue-600">
              Our Values
            </p>

            <h2 className="text-5xl font-black">
              What We Stand For
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-black">
                Quality
              </h3>

              <p className="text-slate-600">
                Delivering workmanship that stands the test
                of time.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-black">
                Reliability
              </h3>

              <p className="text-slate-600">
                Projects delivered safely and efficiently.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-black">
                Experience
              </h3>

              <p className="text-slate-600">
                Knowledge gained across four generations.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}