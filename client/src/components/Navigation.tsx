/**
 * DraftShield™ Navigation — v2
 * Routes: /product, /where-to-apply, /science, /savings, /install, /about
 * Design: Cinematic Industrial Premium
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { HOME_DEPOT_URL } from "@/lib/data";

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
        backgroundColor: scrolled ? "rgba(14,25,41,0.97)" : "rgba(14,25,41,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(168,176,186,0.12)" : "1px solid transparent",
      }}
    >
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span
              className="text-white text-xl tracking-tight"
              style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: "-0.02em" }}
            >
              DRAFT<span style={{ color: "#F26419" }}>SHIELD</span>
              <span className="text-xs align-super ml-0.5" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, color: "#A8B0BA" }}>™</span>
            </span>
            <span
              className="hidden sm:block text-xs border-l border-white/20 pl-2 ml-1"
              style={{ fontFamily: "Inter, sans-serif", color: "#A8B0BA", letterSpacing: "0.04em" }}
            >
              by TrimMaster®
            </span>
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
                    className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${dropdown === link.label ? "rotate-180" : ""}`} />
                  </Link>
                  {dropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-1 py-2 shadow-2xl min-w-[200px]"
                      style={{ backgroundColor: "#1A2E44", border: "1px solid rgba(168,176,186,0.15)" }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/5 transition-colors"
                          style={{ fontFamily: "Inter, sans-serif" }}
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
                  className="px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
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
              className="lg:hidden text-white p-1.5"
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
          style={{ backgroundColor: "#0E1929", borderColor: "rgba(168,176,186,0.15)" }}
        >
          <div className="container max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 text-base text-white/85 hover:text-white border-b border-white/5"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2 pl-4 text-sm text-white/60 hover:text-white/90"
                    style={{ fontFamily: "Inter, sans-serif" }}
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
