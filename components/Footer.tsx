import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#03152E] text-white">

      {/* CTA Section */}

      <div className="border-b border-blue-900">

        <div className="mx-auto max-w-[1600px] px-8 py-16">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-blue-400">
                Ready To Start Your Project?
              </p>

              <h2 className="text-5xl font-black">
                Request A Free Site Survey
              </h2>

              <p className="mt-4 text-slate-300">
                Speak to our team about your next surfacing,
                civil engineering or infrastructure project.
              </p>
            </div>

            <Link
                href="/contact#enquiry-form"
                className="rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
                >
                REQUEST A QUOTE
            </Link>

          </div>

        </div>

      </div>

      {/* Main Footer */}

      <div className="mx-auto max-w-[1600px] px-8 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h3 className="text-3xl font-black">
              ARMSTRONG
            </h3>

            <p className="font-semibold tracking-[3px] text-blue-400">
              SURFACING LTD
            </p>

            <p className="mt-6 leading-relaxed text-slate-300">
              Delivering surfacing, civil engineering,
              road construction and infrastructure projects
              throughout Northern Ireland for over 100 years.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="mb-5 text-xl font-bold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-300">

                <li>
                    <Link href="/" className="transition hover:text-blue-400">
                    Home
                    </Link>
                </li>

                <li>
                    <Link href="/about" className="transition hover:text-blue-400">
                    About Us
                    </Link>
                </li>

                <li>
                    <Link href="/services" className="transition hover:text-blue-400">
                    Services
                    </Link>
                </li>

                <li>
                    <Link href="/projects" className="transition hover:text-blue-400">
                    Projects
                    </Link>
                </li>

                <li>
                    <Link href="/careers" className="transition hover:text-blue-400">
                    Careers
                    </Link>
                </li>

                <li>
                    <Link href="/contact" className="transition hover:text-blue-400">
                    Contact
                    </Link>
                </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h4 className="mb-5 text-xl font-bold">
              Services
            </h4>

            <ul className="space-y-3 text-slate-300">

                <li>
                    <Link href="/services#commercial-surfacing" className="transition hover:text-blue-400">
                    Commercial Surfacing
                    </Link>
                </li>

                <li>
                    <Link href="/services#road-construction" className="transition hover:text-blue-400">
                    Road Construction
                    </Link>
                </li>

                <li>
                    <Link href="/services#car-parks" className="transition hover:text-blue-400">
                    Car Parks
                    </Link>
                </li>

                <li>
                    <Link href="/services#civil-engineering" className="transition hover:text-blue-400">
                    Civil Engineering
                    </Link>
                </li>

                <li>
                    <Link href="/services#driveways" className="transition hover:text-blue-400">
                    Driveways
                    </Link>
                </li>

                <li>
                    <Link href="/services#site-preparation" className="transition hover:text-blue-400">
                    Site Preparation
                    </Link>
                </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-5 text-xl font-bold">
              Contact Details
            </h4>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <Phone
                  size={20}
                  className="mt-1 text-blue-400"
                />

                <div>
                  <p className="font-semibold">
                    028 9264 8270
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-3">

                <Mail
                  size={20}
                  className="mt-1 text-blue-400"
                />

                <div>
                  <p className="break-all">
                    enquiries@armstrong-surfacing.co.uk
                  </p>

                  <p className="break-all">
                    accounts@armstrong-surfacing.co.uk
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="mt-1 text-blue-400"
                />

                <div>
                  <p>
                    35 Stoneyford Road
                  </p>

                  <p>
                    Lisburn
                  </p>

                  <p>
                    BT28 3RG
                  </p>
                </div>

              </div>

              <div className="pt-3">

                <button className="rounded border border-blue-500 p-3">
                  <FaFacebookF size={20} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Copyright */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-8 py-6 text-sm text-slate-400 lg:flex-row">

          <p>
            Copyright © 2026 Armstrong Surfacing Ltd.
            All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>

        </div>

      </div>

    </footer>
  );
}