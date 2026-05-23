/**
 * DraftShield™ Navigation — v2
 * Routes: /product, /where-to-apply, /science, /savings, /install, /about
 * Design: Cinematic Industrial Premium
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { HOME_DEPOT_URL } from "@/lib/data";
import { IMG } from "@/lib/images";

const NAV_LINKS = [
  {
    label: "Product",
    href: "/product",
    children: [
      { label: "Product Overview", href: "/product" },
      { label: "Universal Roll", href: "/product/universal" },
      { label: "Narrow", href: "/product/narrow" },
      { label: "Standard", href: "/product/standard" },
      { label: "Wide", href: "/product/wide" },
      { label: "Multi-Pack", href: "/product/multi-pack" },
    ],
  },
  { label: "Where to Apply", href: "/where-to-apply" },
  { label: "The Science", href: "/science" },
  { label: "Savings Calculator", href: "/savings" },
  {
    label: "Install & Learn",
    href: "/install",
    children: [
      { label: "Installation Guide", href: "/install" },
      { label: "Sizing Guide", href: "/install/sizing-guide" },
    ],
  },
  { label: "About", href: "/about" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(245,240,232,0.98)" : "rgba(245,240,232,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(14,25,41,0.10)" : "1px solid transparent",
      }}
    >
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Wordmark + TrimMaster lockup */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <span
              className="text-xl tracking-tight"
              style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: "-0.02em", color: "#0E1929" }}
            >
              DRAFT<span style={{ color: "#F26419" }}>SHIELD</span>
              <span className="text-xs align-super ml-0.5" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, color: "#0E1929", opacity: 0.5 }}>™</span>
            </span>
            <span
              className="hidden sm:block h-6 w-px"
              style={{ backgroundColor: "rgba(14,25,41,0.18)" }}
              aria-hidden="true"
            />
            <img
              src={IMG.logoTrimMaster}
              alt="TrimMaster by Columbia Aluminum Products"
              className="hidden sm:block h-7 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm transition-colors"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: "rgba(14,25,41,0.75)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0E1929")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(14,25,41,0.75)")}
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${dropdown === link.label ? "rotate-180" : ""}`} />
                  </Link>
                  {dropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-1 py-2 shadow-xl min-w-[200px]"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(14,25,41,0.10)" }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm transition-colors"
                          style={{ fontFamily: "Inter, sans-serif", color: "rgba(14,25,41,0.75)" }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = "#0E1929"; e.currentTarget.style.backgroundColor = "#F5F0E8"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(14,25,41,0.75)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm transition-colors"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: "rgba(14,25,41,0.75)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0E1929")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(14,25,41,0.75)")}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={HOME_DEPOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold text-xs px-4 py-2 tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
            >
              Find at Home Depot
            </a>
            <button
              className="lg:hidden p-1.5"
              style={{ color: "#0E1929" }}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: "#F5F0E8", borderColor: "rgba(14,25,41,0.10)" }}
        >
          <div className="container max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 text-base border-b"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: "#0E1929", borderColor: "rgba(14,25,41,0.08)" }}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2 pl-4 text-sm"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(14,25,41,0.65)" }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <a
              href={HOME_DEPOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-6 py-3 text-sm tracking-widest uppercase transition-all duration-200"
            >
              Find at Home Depot
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
