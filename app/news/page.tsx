import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Armstrong Surfacing Ltd",
  description:
    "Latest company updates, project milestones and industry news from Armstrong Surfacing.",

  openGraph: {
    title: "News | Armstrong Surfacing Ltd",
    description:
      "Latest company updates, project milestones and industry news.",
    images: ["/images/news-hero.jpg"],
  },
};

export default function NewsPage() {
  return (
    <main>
      {/* Hero */}

      <section className="relative h-[500px]">
        <div className="relative">
          <Image
            src="/images/news-hero.jpg"
            alt="Armstrong Surfacing News"
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
              Latest News
            </p>

            <h1 className="text-6xl font-black text-white">
              Company News
              <br />
              & Project Updates
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-8 text-center">
          <h2 className="mb-6 text-5xl font-black">
            The Latest From Armstrong Surfacing
          </h2>

          <p className="text-xl leading-relaxed text-slate-600">
            Stay informed about project milestones, company news,
            industry developments and career opportunities.
          </p>
        </div>
      </section>

      {/* News Grid */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[1600px] px-8">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {articles.map((article) => (
              <article
                key={article.slug}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="relative h-72">

                  <div className="relative">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                </div>

                <div className="p-8">

                  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                    {article.date}
                  </p>

                  <h3 className="mb-4 text-2xl font-black">
                    {article.title}
                  </h3>

                  <p className="mb-6 text-slate-600">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/news/${article.slug}`}
                    className="font-semibold text-blue-600"
                  >
                    Read Article →
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#071B39] py-24 text-white">

        <div className="mx-auto max-w-4xl px-8 text-center">

          <h2 className="mb-6 text-5xl font-black">
            Stay Connected
          </h2>

          <p className="mb-10 text-xl text-slate-300">
            Follow our latest projects, successes and company
            announcements.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700"
          >
            Contact Us
          </a>

        </div>

      </section>
    </main>
  );
}