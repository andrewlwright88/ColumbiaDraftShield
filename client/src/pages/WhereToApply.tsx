/**
 * DraftShield™ /where-to-apply — Where to Apply Page (v2)
 * Replaces /by-application/* from v1.
 * Design: Cinematic Industrial Premium
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, RectangleHorizontal, DoorClosed, Warehouse, AirVent, ChevronUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { APPLICATIONS, SKU_MAP, HOME_DEPOT_URL } from "@/lib/data";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const ICON_MAP: Record<string, React.ElementType> = {
  RectangleHorizontal,
  DoorClosed,
  Warehouse,
  AirVent,
  ChevronUp,
};

const NOT_COVERED = [
  {
    label: "Door bottoms",
    detail: "Door bottoms require a door sweep — a different product type. Columbia's Door Products division makes door sweeps separately.",
  },
  {
    label: "Garage door bottoms",
    detail: "Garage door bottoms need a dedicated garage door bottom seal, not a foam weatherstrip.",
  },
  {
    label: "Sliding door tracks",
    detail: "The sliding track and meeting stile between panels require a different sealing approach.",
  },
  {
    label: "Gaps over 5/8\"",
    detail: "DraftShield Wide handles gaps up to about 5/8\". Larger gaps need a different product type.",
  },
];

export default function WhereToApply() {
  const heroReveal = useReveal();
  const appsReveal = useReveal();
  const notCoveredReveal = useReveal();
  const ctaReveal = useReveal();

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Navigation />

      {/* ── Hero ── */}
      <section className="bg-[#0E1929] pt-32 pb-20">
        <div
          ref={heroReveal.ref}
          className={`container max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${heroReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">WHERE TO APPLY</p>
          <h1 className="font-['Archivo_Black'] text-5xl lg:text-7xl text-white leading-tight mb-6">
            Built for windows.<br />
            <span className="text-[#F26419]">Works on a lot more.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            DraftShield is engineered first for windows. The same product handles door jambs, garage door sides,
            window-mounted AC units, attic access doors, and most other places in your home where a small gap leaks conditioned air.
          </p>
        </div>
      </section>

      {/* ── Applications ── */}
      <section ref={appsReveal.ref} className="py-24 lg:py-32">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {APPLICATIONS.map((app, i) => {
              const Icon = ICON_MAP[app.icon] ?? RectangleHorizontal;
              const recommendedSku = SKU_MAP[app.recommendedSlug];
              return (
                <div
                  key={app.id}
                  id={app.id}
                  className={`grid lg:grid-cols-[1fr_2fr] gap-12 items-start pb-16 border-b border-[#0E1929]/10 last:border-0 transition-all duration-700 ${appsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Left: label */}
                  <div>
                    <div className="w-14 h-14 bg-[#0E1929] flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-[#F26419]" />
                    </div>
                    <p className="text-[#F26419] text-[10px] font-bold tracking-widest uppercase mb-2">{app.eyebrow}</p>
                    <h2 className="font-['Archivo_Black'] text-3xl text-[#0E1929] mb-4">{app.headline}</h2>
                    {app.isPrimary && (
                      <span className="inline-block bg-[#0E1929] text-white text-[10px] font-bold px-3 py-1.5 tracking-widest uppercase">
                        Primary Application
                      </span>
                    )}
                  </div>

                  {/* Right: content */}
                  <div>
                    <p className="text-[#1A2E44]/80 leading-relaxed mb-6 text-lg">{app.body}</p>

                    {/* Recommended size */}
                    {recommendedSku && (
                      <div className="bg-white border border-[#0E1929]/10 p-5 mb-6">
                        <p className="text-[#F26419] text-[10px] font-bold tracking-widest uppercase mb-2">Recommended Size</p>
                        <p className="text-[#0E1929] font-bold mb-1">{app.recommendedSize}</p>
                        <Link
                          href={`/product/${recommendedSku.slug}`}
                          className="inline-flex items-center gap-1 text-[#F26419] text-xs font-bold tracking-wider uppercase hover:gap-2 transition-all duration-200 mt-2"
                        >
                          View {recommendedSku.shortName} <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="/install/sizing-guide"
                        className="inline-flex items-center gap-2 bg-[#0E1929] hover:bg-[#1A2E44] text-white font-bold px-6 py-3 text-xs tracking-widest uppercase transition-all duration-200"
                      >
                        Use Sizing Guide <ArrowRight className="w-3 h-3" />
                      </Link>
                      <a
                        href={HOME_DEPOT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-6 py-3 text-xs tracking-widest uppercase transition-all duration-200"
                      >
                        Find at Home Depot <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Not Covered ── */}
      <section ref={notCoveredReveal.ref} className="bg-[#0E1929] py-24 lg:py-32">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className={`transition-all duration-700 ${notCoveredReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">WHAT IT DOESN'T COVER</p>
            <h2 className="font-['Archivo_Black'] text-4xl text-white mb-12">
              What DraftShield doesn't cover.
            </h2>
            <p className="text-white/60 max-w-2xl leading-relaxed mb-10">
              We'd rather tell you upfront than have you buy the wrong product.
              DraftShield is a foam weatherstrip. It is not a door sweep, a garage door bottom seal, or a caulk.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {NOT_COVERED.map((item, i) => (
                <div
                  key={i}
                  className={`border border-white/10 p-6 transition-all duration-500 ${notCoveredReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#F26419] inline-block" />
                    {item.label}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm mt-8">
              Need a door sweep or garage door bottom seal?{" "}
              <a href="mailto:support@draftshield.com" className="text-[#F26419] hover:underline">
                Contact us
              </a>{" "}
              — we'll point you to the right Columbia product.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaReveal.ref} className="bg-[#F5F0E8] py-24">
        <div className={`container max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${ctaReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">NEXT STEP</p>
          <h2 className="font-['Archivo_Black'] text-4xl text-[#0E1929] mb-6">
            Know where you're applying it?<br />Now find your size.
          </h2>
          <p className="text-[#1A2E44]/70 max-w-xl mx-auto leading-relaxed mb-10">
            The right size is determined by the gap — not the application.
            Use the sizing guide to get a personalized recommendation in 3 questions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/install/sizing-guide"
              className="inline-flex items-center gap-2 bg-[#0E1929] hover:bg-[#1A2E44] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
            >
              Use the Sizing Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={HOME_DEPOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200"
            >
              Find at Home Depot <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
