/*
 * DraftShield™ About Page
 * Design: Cinematic Industrial Premium
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import { IMG } from "@/lib/images";
const HERITAGE_IMG = IMG.heritage;

function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useScrollReveal(0.1) as React.RefObject<HTMLElement>;
  return <section ref={ref} className={className} style={style}>{children}</section>;
}

const TIMELINE = [
  { year: "1947", event: "Columbia Aluminum Products founded in Corona, California." },
  { year: "1962", event: "TrimMaster® brand launched for professional contractor market." },
  { year: "1978", event: "First EPDM-integrated aluminum weatherstrip product introduced." },
  { year: "1995", event: "ISO 9001 certification achieved. Export to 12 countries begins." },
  { year: "2010", event: "ENERGY STAR partner status awarded." },
  { year: "2024", event: "DraftShield™ product line developed for direct-to-consumer market." },
  { year: "2026", event: "DraftShield™ launches nationwide at Home Depot." },
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0E1929" }}>
      <Navigation />

      {/* Hero */}
      <div
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "#0E1929" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${HERITAGE_IMG})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(14,25,41,0.95) 0%, rgba(14,25,41,0.6) 100%)" }} />
        <div className="container relative z-10 max-w-3xl">
          <span className="section-rule" />
          <h1
            className="text-5xl lg:text-6xl text-white mb-5"
            style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: "-0.03em" }}
          >
            78 years of American precision.
          </h1>
          <p className="text-xl" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
            Columbia Aluminum Products has been manufacturing precision building products in Corona, California since 1947. DraftShield is our newest chapter.
          </p>
        </div>
      </div>

      {/* Story */}
      <Section className="py-20" style={{ backgroundColor: "#0E1929" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="section-rule" />
              <h2
                className="text-3xl text-white mb-6 reveal"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                Our Story
              </h2>
              <div className="space-y-4 stagger">
                {[
                  "Columbia Aluminum Products was founded in 1947 by Harold Weiss, a machinist who believed that precision manufacturing could solve everyday building problems. Starting with a single extrusion press in a Corona, California warehouse, Columbia grew into one of the most respected names in aluminum building products.",
                  "The TrimMaster® brand, launched in 1962, became the professional contractor's choice for aluminum trim and weatherstripping across North America. For decades, TrimMaster products were specified by architects, installed by contractors, and trusted by homeowners who never knew the brand name — only that their doors sealed tight.",
                  "DraftShield is the next chapter: bringing TrimMaster's precision manufacturing directly to homeowners, with a product designed to be installed without a contractor, backed by a guarantee that removes all the risk.",
                ].map((para, i) => (
                  <p key={i} className="text-base leading-relaxed reveal" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2
                className="text-3xl text-white mb-6 reveal"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                Timeline
              </h2>
              <div className="relative stagger">
                <div
                  className="absolute left-16 top-0 bottom-0 w-px"
                  style={{ backgroundColor: "rgba(168,176,186,0.15)" }}
                />
                {TIMELINE.map((item) => (
                  <div key={item.year} className="flex gap-6 mb-6 relative reveal">
                    <div
                      className="shrink-0 w-12 text-right text-sm font-bold"
                      style={{ fontFamily: "'Archivo Black', sans-serif", color: "#F0B500" }}
                    >
                      {item.year}
                    </div>
                    <div
                      className="shrink-0 w-2 h-2 rounded-full mt-1.5 relative z-10"
                      style={{ backgroundColor: "#F0B500" }}
                    />
                    <p className="text-sm" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
                      {item.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="py-20" style={{ backgroundColor: "#1B2A4A" }}>
        <div className="container">
          <h2
            className="text-3xl text-white mb-10 reveal"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            What we stand for
          </h2>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {[
              { title: "Made in USA", detail: "Every DraftShield product is designed, extruded, and assembled in our Corona, California facility. We have no offshore manufacturing." },
              { title: "Precision over price", detail: "We could make a cheaper product. We choose not to. Every tolerance, every material choice, every finish is optimized for performance, not margin." },
              { title: "Guaranteed results", detail: "Our 5-Year Performance Guarantee is not a marketing claim. If your DraftShield seal fails, we replace it — no questions, no hassle." },
            ].map((v) => (
              <div
                key={v.title}
                className="reveal p-6 rounded-sm"
                style={{ backgroundColor: "rgba(14,25,41,0.5)", border: "1px solid rgba(168,176,186,0.10)" }}
              >
                <div className="section-rule" style={{ backgroundColor: "#F0B500" }} />
                <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
                  {v.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
