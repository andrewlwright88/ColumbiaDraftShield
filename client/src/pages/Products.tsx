/**
 * DraftShield™ /product — Single Product Overview Page (v2)
 * One product, five sizes. Not a catalog of kits.
 * Design: Cinematic Industrial Premium
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SKUS, SKU_MAP, SHARED_SPECS, CONSTRUCTION_LAYERS, HOME_DEPOT_URL } from "@/lib/data";
import { IMG } from "@/lib/images";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function Products() {
  const heroReveal = useReveal();
  const sizesReveal = useReveal();
  const constructionReveal = useReveal();
  const specsReveal = useReveal();
  const sizeGuideReveal = useReveal();

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative bg-[#0E1929] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={SKU_MAP.universal.image ?? IMG.product} alt="DraftShield product lineup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0E1929]/60" />
        </div>
        <div
          ref={heroReveal.ref}
          className={`relative z-10 container max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${heroReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">THE PRODUCT</p>
          <h1 className="font-['Archivo_Black'] text-5xl lg:text-7xl text-white leading-tight mb-6">
            One foam strip.<br />
            <span className="text-[#F26419]">Engineered to outlast standard foam tape.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
            DraftShield is a single product — a premium adhesive-backed foam weatherstrip — available in five sizes.
            Choose by the gap you're sealing, or start with the Universal Roll.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/install/sizing-guide"
              className="inline-flex items-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
            >
              Find My Size <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={HOME_DEPOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200"
            >
              Find at Home Depot <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 5 Sizes ── */}
      <section ref={sizesReveal.ref} className="py-24 lg:py-32">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className={`mb-14 transition-all duration-700 ${sizesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-3">THE 5 SIZES</p>
            <h2 className="font-['Archivo_Black'] text-4xl text-[#0E1929]">Pick a size by gap, not by application.</h2>
          </div>

          <div className="space-y-4">
            {SKUS.map((sku, i) => (
              <div
                key={sku.slug}
                className={`group bg-white border border-[#0E1929]/10 hover:border-[#F26419] transition-all duration-300 ${sizesReveal.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="grid md:grid-cols-[1fr_auto] items-center p-6 gap-6">
                  <div className="grid sm:grid-cols-[auto_1fr_1fr] gap-6 items-center">
                    {/* Size indicator */}
                    <div className="flex items-center gap-4">
                      {sku.badge && (
                        <span className="bg-[#F26419] text-white text-[10px] font-bold px-2 py-1 tracking-wider uppercase whitespace-nowrap">
                          {sku.badge}
                        </span>
                      )}
                      <div>
                        <p className="text-[#F26419] text-[10px] font-bold tracking-widest uppercase">{sku.eyebrow}</p>
                        <h3 className="font-['Archivo_Black'] text-[#0E1929] text-xl">{sku.name}</h3>
                      </div>
                    </div>
                    {/* Dimensions */}
                    <div>
                      <p className="text-[#1A2E44]/50 text-xs uppercase tracking-wider mb-1">Dimensions</p>
                      <p className="font-mono text-[#0E1929] font-bold">
                        {sku.totalFt
                          ? `3× ${sku.width} × ${sku.depth} · ${sku.totalFt}`
                          : `${sku.width} × ${sku.depth} · ${sku.length}`}
                      </p>
                    </div>
                    {/* Tagline */}
                    <p className="text-[#1A2E44]/70 text-sm leading-relaxed">{sku.body}</p>
                  </div>
                  <Link
                    href={`/product/${sku.slug}`}
                    className="inline-flex items-center gap-2 text-[#F26419] font-bold text-sm tracking-wider uppercase whitespace-nowrap group-hover:gap-3 transition-all duration-200"
                  >
                    View Product <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Construction ── */}
      <section ref={constructionReveal.ref} className="bg-[#0E1929] py-24 lg:py-32">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-700 ${constructionReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">WHAT'S INSIDE EVERY ROLL</p>
              <h2 className="font-['Archivo_Black'] text-4xl text-white leading-tight mb-6">
                What's inside every roll.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Every DraftShield roll, regardless of size, uses the same engineered construction.
                Five layers. Zero compromises.
              </p>
              <Link
                href="/science"
                className="inline-flex items-center gap-2 text-[#F26419] font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all duration-200"
              >
                See the Full Engineering Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {CONSTRUCTION_LAYERS.map((layer, i) => (
                <div
                  key={i}
                  className={`flex gap-5 border-b border-white/10 pb-4 last:border-0 transition-all duration-500 ${constructionReveal.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="font-['Archivo_Black'] text-[#F26419] text-xl w-8 shrink-0">{layer.num}</span>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{layer.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{layer.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Shared Specs ── */}
      <section ref={specsReveal.ref} className="bg-white py-24 lg:py-32">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className={`transition-all duration-700 ${specsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">SPECIFICATIONS</p>
            <h2 className="font-['Archivo_Black'] text-4xl text-[#0E1929] mb-12">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-0 border border-[#0E1929]/10">
              {SHARED_SPECS.map((spec, i) => (
                <div key={i} className="flex gap-6 p-5 border-b border-r border-[#0E1929]/10 last:border-b-0">
                  <span className="text-[#1A2E44]/50 text-sm w-48 shrink-0">{spec.label}</span>
                  <span className="text-[#0E1929] font-semibold text-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Size Guide CTA ── */}
      <section ref={sizeGuideReveal.ref} className="bg-[#F5F0E8] py-24">
        <div className={`container max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${sizeGuideReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">PICK A SIZE BY GAP</p>
          <h2 className="font-['Archivo_Black'] text-4xl text-[#0E1929] mb-6">
            Not sure which size?
          </h2>
          <p className="text-[#1A2E44]/70 max-w-xl mx-auto leading-relaxed mb-10">
            A 1/4" gap is a 1/4" gap whether it's around a window or a garage door.
            Measure the gap, then pick the size that compresses to seal it.
            Not sure how to measure? Use the sizing guide.
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
