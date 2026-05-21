/*
 * DraftShield™ Where to Buy Page
 * Design: Cinematic Industrial Premium
 */

import { Link } from "wouter";
import { ArrowRight, MapPin, ShoppingCart, Package } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SKUS, HOME_DEPOT_URL } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useScrollReveal(0.1) as React.RefObject<HTMLElement>;
  return <section ref={ref} className={className} style={style}>{children}</section>;
}

export default function WhereToBuy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0E1929" }}>
      <Navigation />

      <div className="pt-32 pb-16" style={{ backgroundColor: "#0E1929" }}>
        <div className="container">
          <span className="section-rule" />
          <h1
            className="text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: "-0.03em" }}
          >
            Where to Buy
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
            DraftShield is available at Home Depot stores nationwide and online.
          </p>
        </div>
      </div>

      <Section className="py-16 lg:py-24" style={{ backgroundColor: "#0E1929" }}>
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16 stagger">
            {[
              {
                icon: MapPin,
                title: "In-Store at Home Depot",
                detail: "Find DraftShield in the weatherstripping aisle at your local Home Depot. Available at 2,300+ locations nationwide.",
                cta: "Find a Store",
                href: HOME_DEPOT_URL,
                external: true,
              },
              {
                icon: ShoppingCart,
                title: "Online at HomeDepot.com",
                detail: "Order online for in-store pickup or home delivery. Free shipping on orders over $45.",
                cta: "Shop Online",
                href: HOME_DEPOT_URL,
                external: true,
              },
              {
                icon: Package,
                title: "Pro & Bulk Orders",
                detail: "Contractors and builders can access volume pricing through the DraftShield Pro Program.",
                cta: "Pro Program",
                href: "/pro",
                external: false,
              },
            ].map(({ icon: Icon, title, detail, cta, href, external }) => (
              <div
                key={title}
                className="reveal p-8 rounded-sm"
                style={{ backgroundColor: "#1B2A4A", border: "1px solid rgba(168,176,186,0.12)" }}
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(242,100,25,0.15)", border: "1px solid rgba(242,100,25,0.25)" }}
                >
                  <Icon size={22} style={{ color: "#F26419" }} />
                </div>
                <h3 className="text-lg text-white mb-2" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
                  {detail}
                </p>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ds-primary text-xs py-2 px-4"
                  >
                    {cta} <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link href={href} className="btn-ds-primary text-xs py-2 px-4">
                    {cta} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Product availability table */}
          <h2
            className="text-2xl text-white mb-6 reveal"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            Product Availability
          </h2>
          <div
            className="rounded-sm overflow-hidden reveal"
            style={{ border: "1px solid rgba(168,176,186,0.12)" }}
          >
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "#1B2A4A", borderBottom: "1px solid rgba(168,176,186,0.12)" }}>
                  {["Product", "Price", "In-Store", "Online", "Pro"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SKUS.map((p, i) => (
                  <tr
                    key={p.slug}
                    style={{
                      backgroundColor: i % 2 === 0 ? "rgba(14,25,41,0.3)" : "rgba(27,42,74,0.3)",
                      borderBottom: "1px solid rgba(168,176,186,0.06)",
                    }}
                  >
                    <td className="px-5 py-4">
                      <Link href={`/product/${p.slug}`} className="text-sm text-white hover:text-orange-400 transition-colors" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                        {p.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-sm" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>Available at Home Depot</td>
                    <td className="px-5 py-4 text-sm" style={{ color: "#4ade80" }}>✓</td>
                    <td className="px-5 py-4 text-sm" style={{ color: "#4ade80" }}>✓</td>
                    <td className="px-5 py-4 text-sm text-white/40">—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
