"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  Tractor,
  Car,
  Flame,
  BookOpen,
  Shield,
  Banknote,
  GraduationCap,
  Building2,
  Wallet,
  Landmark,
  Gavel,
  Hammer,
  FlaskConical,
  ShieldHalf,
  Truck,
  PackageSearch,
  MonitorSmartphone,
  ShoppingCart,
  Megaphone,
} from "lucide-react";

const solutions = [
  { title: "Agribusiness", link: "/agribusiness", icon: Tractor },
  { title: "Automotive", link: "/automative", icon: Car },
  { title: "Energy Sector", link: "/energy", icon: Flame },
  { title: "Research & Consulting", link: "/research-and-consulting", icon: BookOpen },
  { title: "Insurance Companies", link: "/insurance-companies", icon: Shield },
  { title: "Financial Sector", link: "/finance", icon: Banknote },
  { title: "Academic & Education", link: "/academic-and-education", icon: GraduationCap },
  { title: "Corporation", link: "/corporation", icon: Building2 },
  { title: "Asset Management", link: "/asset-management", icon: Wallet },
  { title: "Government Agencies", link: "/government-agencies", icon: Landmark },
  { title: "Law Firms", link: "/law-firms", icon: Gavel },
  { title: "Construction", link: "/construction", icon: Hammer },
  { title: "Chemical", link: "/chemical", icon: FlaskConical },
  { title: "Aerospace & Defence", link: "/aerospace-and-defence", icon: ShieldHalf },
  { title: "Importers", link: "/importers", icon: Truck },
  { title: "Exporters", link: "/exporters", icon: Truck },
  { title: "Supply Chain & Logistics", link: "/supply-chain-and-logistics", icon: PackageSearch },
  { title: "IT & Consulting", link: "/it-and-consulting", icon: MonitorSmartphone },
  { title: "Retail", link: "/retail", icon: ShoppingCart },
  { title: "Sales & Marketing", link: "/sales-and-marketing", icon: Megaphone },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimer = useRef(null);

  // 🤖 bot detection
  const isBot =
    typeof navigator !== "undefined" &&
    (navigator.webdriver ||
      /bot|crawler|spider|headless/i.test(navigator.userAgent));

  const handleMouseEnter = () => {
    if (isBot) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isBot) return;
    closeTimer.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 200);
  };

  useEffect(() => {
    if (isBot) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isBot]);

  return (
    <header
      className={`w-full shadow-sm fixed z-50 transition-all duration-300 font-sans ${
        scrolled ? "bg-white shadow-xl" : "bg-transparent border-b py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" >
          <img
            src="/logo.png"
            alt="Exim Trade Data"
            className="h-10 w-auto flex-none"
            loading="eager"
            decoding="async"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/services", "Services"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              
              className="hover:text-blue-600 transition font-bold text-lg"
            >
              {label}
            </a>
          ))}

          {/* Solutions dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-blue-600 transition font-bold text-lg">
              Solutions
            </button>

            {solutionsOpen && (
              <div className="fixed left-1/2 -translate-x-1/2 top-16 z-50">
                <div className="w-250 bg-white border shadow-xl grid grid-cols-4 p-8 rounded-xl">
                  <div className="col-span-3 grid grid-cols-3 gap-x-6 gap-y-4 pr-4">
                    {solutions.map(({ title, link, icon: Icon }) => (
                      <a
                        key={title}
                        href={`${link}`}
                        
                        className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-blue-100"
                      >
                        <Icon className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-800 text-sm font-medium">
                          {title}
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="pl-6 border-l">
                    <h4 className="text-md font-semibold text-blue-700 mb-2">
                      Solutions
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Gain industry specific insights through our trade intelligence platform.
                    </p>
                    <a
                      href="/industries-covered"
                      
                      className="text-white bg-blue-600 px-4 py-2 text-sm rounded-full hover:bg-blue-700 transition"
                    >
                      View All Industries
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {[
            ["/search-global-trade-data", "Search Data"],
            ["/import-export-data-country-wise", "Countries"],
            ["/api-development-and-integration-company", "API"],
            ["/pricing", "Pricing"],
            ["/contact", "Contact Us"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              
              className="hover:text-blue-600 transition font-bold text-lg"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/pricing#pricing_section"
            
            className="relative cursor-pointer inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-white transition-all duration-300 bg-blue-600 hover:scale-105"
          >
            <span className="relative z-10">Get A Demo</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-6 space-y-3 text-center animate-fade-in">
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/services", "Services"],
            ["/search-global-trade-data", "Search Data"],
            ["/import-export-data-country-wise", "Countries"],
            ["/api-development-and-integration-company", "API"],
            ["/pricing", "Pricing"],
            ["/contact", "Contact Us"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              
              className="block text-gray-800 hover:text-blue-600"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;