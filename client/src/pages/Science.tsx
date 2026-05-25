/**
 * DraftShield™ The Science Page — v2
 * Product: closed-cell foam weatherstrip (not aluminum extrusion)
 * Design: Cinematic Industrial Premium
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SCIENCE_FACTS, CONSTRUCTION_LAYERS, HOME_DEPOT_URL } from "@/lib/data";
import { IMG } from "@/lib/images";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useScrollReveal(0.1) as React.RefObject<HTMLElement>;
  return <section ref={ref} className={className} style={style}>{children}</section>;
}

const FAILURE_MODES = [
  {
    title: "Compression set",
    detail: "Standard open-cell foam permanently deforms under constant door pressure, losing 40–60% of its sealing effectiveness within 18 months. DraftShield's closed-cell core recovers fully after every compression cycle.",
  },
  {
    title: "Adhesive failure in cold",
    detail: "Rubber-based adhesive — the kind used in most foam tape — loses bond strength below 50°F. That's exactly when you need the seal most. DraftShield's premium acrylic adhesive maintains full bond strength down to –40°F.",
  },
  {
    title: "UV degradation",
    detail: "Exposed open-cell foam oxidizes and crumbles when exposed to sunlight, particularly on south- and west-facing windows. DraftShield's UV-stabilized polyethylene outer skin extends outdoor service life to 5+ winters.",
  },
  {
    title: "Moisture absorption",
    detail: "Open-cell foam absorbs water, which freezes and expands — tearing the foam and destroying the seal. Closed-cell foam does not absorb water. Full stop.",
  },
];

export default function Science() {
  return (
    <div className="min-h-screen bg-[#0E1929]">
      <Navigation />

      {/* Hero */}
      <div className="pt-32 pb-20 relative overflow-hidden bg-[#0E1929]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${IMG.science})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,25,41,0.7) 0%, rgba(14,25,41,1) 100%)" }} />
        <div className="container max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">THE SCIENCE</p>
          <h1 className="font-['Archivo_Black'] text-5xl lg:text-6xl text-white leading-tight mb-5">
            Why most weatherstripping<br />fails — and how we fixed it.
          </h1>
          <p className="text-xl max-w-2xl text-white/70 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            The weatherstripping aisle hasn't changed in decades — same open-cell foam, same rubber-based adhesive, same one-winter failures. DraftShield was built different. Here's exactly how, and why it lasts.
          </p>
        </div>
      </div>

      {/* Stats */}
      <Section className="py-16 bg-[#1A2E44]">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 stagger">
            {SCIENCE_FACTS.map((fact) => (
              <div key={fact.stat} className="reveal">
                <div className="font-['Archivo_Black'] text-5xl text-[#F26419] mb-2" style={{ letterSpacing: "-0.03em" }}>
                  {fact.stat}
                </div>
                <div className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  {fact.label}
                </div>
                <div className="text-xs leading-relaxed text-white/50" style={{ fontFamily: "Inter, sans-serif" }}>
                  {fact.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why foam fails */}
      <Section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal flex items-center justify-center">
              <img
                src={IMG.packageUniversal}
                alt="DraftShield Universal Roll packaging"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            <div>
              <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">THE PROBLEM</p>
              <h2 className="font-['Archivo_Black'] text-4xl text-[#0E1929] mb-6 leading-tight">
                Why standard foam tape fails in 2–3 years.
              </h2>
              <div className="space-y-5 stagger">
                {FAILURE_MODES.map((item) => (
                  <div key={item.title} className="reveal border-l-2 border-[#F26419] pl-5">
                    <h4 className="text-sm font-semibold text-[#0E1929] mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#1A2E44]/75 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Construction layers */}
      <Section className="py-24 lg:py-32 bg-[#1A2E44]">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">THE SOLUTION</p>
              <h2 className="font-['Archivo_Black'] text-4xl text-white mb-6 leading-tight">
                Five layers. One seal that lasts.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
                Every DraftShield roll is engineered from the core outward. Each layer solves a specific failure mode
                in standard foam tape. Together, they create a weatherstrip that performs for 5+ years — and we guarantee it.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-6 py-3 text-xs tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
                >
                  Shop DraftShield <ArrowRight size={16} />
                </Link>
                <Link
                  href="/install/sizing-guide"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold px-6 py-3 text-xs tracking-widest uppercase transition-all duration-200"
                >
                  Find Your Size <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="space-y-5">
              {CONSTRUCTION_LAYERS.map((layer, i) => (
                <div
                  key={i}
                  className="reveal flex gap-5 p-5 bg-[#0E1929]/50 border border-white/10"
                >
                  <span className="font-['Archivo_Black'] text-[#F26419] text-xl w-8 shrink-0">{layer.num}</span>
                  <div>
                    <p className="text-white font-bold text-sm mb-1" style={{ fontFamily: "Inter, sans-serif" }}>{layer.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{layer.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Science image section */}
      <Section className="py-24 bg-[#0E1929]">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">THE MATERIALS</p>
              <h2 className="font-['Archivo_Black'] text-4xl text-white mb-6 leading-tight">
                Closed-cell foam. The difference is structural.
              </h2>
              <p className="text-white/60 leading-relaxed mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
                Open-cell foam — used in standard foam tape — has a porous, sponge-like structure. It absorbs water,
                compresses permanently, and degrades rapidly under UV. Closed-cell foam has sealed, individual cells.
                Water cannot penetrate. The structure maintains its shape under compression. UV-stabilized skin extends outdoor life.
              </p>
              <p className="text-white/60 leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
                The internal glass-fiber cord prevents the roll from stretching or sagging over years of use — a failure mode
                that causes gaps to open at corners and ends. The premium acrylic adhesive maintains bond strength from
                –40°F to +220°F, covering every climate zone in North America.
              </p>
              <a
                href={HOME_DEPOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
              >
                Find at Home Depot <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal">
              <img src={IMG.science} alt="DraftShield material science" className="w-full" />
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
