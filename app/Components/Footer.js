"use client";

import Link from "next/link";
import Script from "next/script";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  // 🤖 bot detection
  const isBot =
    typeof navigator !== "undefined" &&
    (navigator.webdriver ||
      /bot|crawler|spider|headless/i.test(navigator.userAgent));

  /* ======================
     WhatsApp Float Scroll
     ====================== */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isBot) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBot]);

  /* ======================
     Newsletter Form
     ====================== */
  const [nname, setName] = useState("");
  const [nemail, setEmail] = useState("");
  const [nmobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
  e.preventDefault();

  if (isBot) return;

  if (!nname || !nemail || !nmobile) {
    alert("Please fill all the fields.");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch("/api/sendNewsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nname,
        nemail,
        nmobile,
      }),
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    alert("Newsletters subscribed successfully!");
  } catch (err) {
    alert("Something went wrong!");
  } finally {
    setLoading(false);
    setName("");
    setEmail("");
    setMobile("");
  }
};

  return (
    <footer className="bg-gray-200 text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* ======================
            Subscribe Section
           ====================== */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl text-black font-semibold">
            Subscribe Newsletter
          </h3>

          <form
            onSubmit={sendEmail}
            className="flex flex-col items-center rounded w-full max-w-md"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 w-full rounded m-2 text-black bg-white"
              value={nname}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded m-2 text-black bg-white"
              value={nemail}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="number"
              placeholder="Mobile Number"
              className="px-4 py-2 w-full rounded m-2 mb-4 text-black bg-white"
              value={nmobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 w-full px-5 py-2 hover:scale-105 transition-transform duration-300 shadow-lg m-2"
            >
              <span className="text-white text-sm">
                {loading ? "Sending..." : "Submit"}
              </span>
            </button>
          </form>

          <div className="text-lg text-black mt-4">
            Shpere Eximia Research Pvt Ltd <br />
            G-232, Noida Sector-63, Uttar Pradesh - 201301, India
            <br />
            <span className="block mt-2">+91-9625812393</span>
            <Link
              href="mailto:Info@eximtradedata.com"
              prefetch={false}
              className="underline"
            >
              Info@eximtradedata.com
            </Link>
          </div>

          {/* Social Icons */}
          <div className="mt-12 flex gap-5">
            <Link
              href="https://www.facebook.com/eximtradedataofficial"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <Facebook className="w-6 h-6 text-black" />
            </Link>

            <Link
              href="https://www.instagram.com/eximtradedata/"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <Instagram className="w-6 h-6 text-black" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/exim-trade-data"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <Linkedin className="w-6 h-6 text-black" />
            </Link>

            <Link
              href="https://www.youtube.com/channel/UCsbKPsVwgAgqJi4EB20iBvg"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <Youtube className="w-6 h-6 text-black" />
            </Link>
          </div>
        </div>

        {/* ======================
            Links Section
           ====================== */}
        <div className="md:col-span-3 grid grid-cols-1 gap-8">
          <div className="grid grid-cols-3 gap-4 text-sm">
            {/* Support */}
            <div>
              <h4 className="font-semibold mb-2 text-black text-lg">
                Support
              </h4>
              <ul className="space-y-1 text-black">
                <li><Link href="/contact" prefetch={false}>Contact Us</Link></li>
                <li><Link href="/faq" prefetch={false}>Faqs</Link></li>
                <li><Link href="/pricing" prefetch={false}>Pricing</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-2 text-black text-lg">
                Legal
              </h4>
              <ul className="space-y-1 text-black">
                <li><Link href="/privacy" prefetch={false}>Privacy Policy</Link></li>
                <li><Link href="/terms" prefetch={false}>Terms & Conditions</Link></li>
                <li><Link href="/refund-policy" prefetch={false}>Refunds Policy</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-2 text-black text-lg">
                Company
              </h4>
              <ul className="space-y-1 text-black">
                <li><Link href="/about" prefetch={false}>About</Link></li>
                <li><Link href="/services" prefetch={false}>Why Choose Us</Link></li>
                <li><Link href="/our-client" prefetch={false}>Our Clients</Link></li>
              </ul>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-2 text-black text-lg">
              Solutions
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-black">
              <a href="/agribusiness">Agribusiness</a>
              <a href="/asset-management">Asset Management</a>
              <a href="/academic-and-education">Academic and Education</a>
              <a href="/automative">Automotive</a>
              <a href="/aerospace-and-defence">Aerospace and Defence</a>
              <a href="/construction">Construction</a>
              <a href="/chemical">Chemical</a>
              <a href="/energy">Energy Sector</a>
              <a href="/exporters">Exporters</a>
              <a href="/importers">Importers</a>
              <a href="/law-firms">Law Firms</a>
              <a href="/retail">Retail</a>
              <a href="/sales-and-marketing">Sales and Marketing</a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-semibold mb-2 text-black text-lg">
              Important Links
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-black">
              <a href="/get-started">Get Trial</a>
              <a href="/import-export-data-country-wise">Countries Covered</a>
              <a href="/global-companies-list">Global Companies</a>
              <a href="/global-ports">Global Ports</a>
              <a href="/industries-covered">Industries Covered</a>
              <a href="/global-trade-database">Global Trade Database</a>
              <a href="/global-products">Global Products</a>
              <a href="/api-development-and-integration-company">
                API Integration & Development
              </a>
              <a href="/global-hs-code-list">Global HSN Code List</a>
              <a href="/partners">Referral Partners</a>
            </div>
          </div>
        </div>
      </div>

      {/* JivoChat – humans only */}
      {!isBot && (
        <Script
          src="//code.jivosite.com/widget/7KuVu05nSB"
          strategy="lazyOnload"
        />
      )}

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/918826195070?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
        className={`fixed bottom-55 ${
          scrolled ? "right-4" : "right-1"
        } bg-green-500 text-white p-4 rounded-full shadow-lg transition-all z-50`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0 0 12 .5C5.65.5.5 5.65.5 12c0 2.12.55 4.15 1.57 5.96L0 24l6.3-1.64A11.5 11.5 0 0 0 12 23.5c6.35 0 11.5-5.15 11.5-11.5 0-3.06-1.2-5.92-3.48-8.02z" />
        </svg>
      </a>

      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-black text-center">
        &copy; {2025} Shpere Eximia Research Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}