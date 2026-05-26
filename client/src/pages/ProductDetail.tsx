/**
 * DraftShield™ /product/:slug — SKU Detail Page (v2)
 * Shared template for all 5 sizes.
 * Design: Cinematic Industrial Premium
 */

import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowRight, ArrowLeft, Shield, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SKU_MAP, SKUS, SHARED_SPECS, CONSTRUCTION_LAYERS, HOME_DEPOT_URL } from "@/lib/data";
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

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const sku = SKU_MAP[slug ?? ""];
  const related = sku ? SKUS.filter((s) => sku.relatedSlugs.includes(s.slug)).slice(0, 4) : [];

  const heroReveal = useReveal();
  const whereFitsReveal = useReveal();
  const constructionReveal = useReveal();
  const specsReveal = useReveal();
  const relatedReveal = useReveal();

  if (!sku) {
    return (
      <div className="min-h-screen bg-[#0E1929]">
        <Navigation />
        <div className="container max-w-6xl mx-auto px-6 pt-40 pb-20 text-center">
          <h1 className="font-['Archivo_Black'] text-4xl text-white mb-4">Product Not Found</h1>
          <Link href="/product" className="inline-flex items-center gap-2 text-[#F0B500] font-bold text-sm tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Navigation />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#0E1929] pt-24 pb-0">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/product" className="hover:text-white/70 transition-colors">Product</Link>
            <span>/</span>
            <span className="text-white/70">{sku.shortName}</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-[#0E1929] pb-24">
        <div
          ref={heroReveal.ref}
          className={`container max-w-6xl mx-auto px-6 lg:px-8 pt-12 transition-all duration-700 ${heroReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Product visual */}
            <div className="relative">
              <div className="aspect-[3/4] bg-[#0E1929] flex items-center justify-center overflow-hidden p-6">
                <img
                  src={sku.image ?? IMG.product}
                  alt={`DraftShield ${sku.name} carton`}
                  className="max-h-full w-auto object-contain"
                />
                {sku.badge && (
                  <div className="absolute top-6 left-6 bg-[#F0B500] text-[#0E1929] text-xs font-bold px-3 py-1.5 tracking-widest uppercase z-10">
                    {sku.badge}
                  </div>
                )}
              </div>
              {/* Dimension callout */}
              <div className="absolute bottom-6 right-6 bg-[#0E1929]/90 border border-white/10 px-4 py-3">
                <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1">Dimensions</p>
                <p className="font-mono text-white font-bold text-sm">
                  {sku.totalFt
                    ? `3× ${sku.width} × ${sku.depth}`
                    : `${sku.width} × ${sku.depth} × ${sku.length}`}
                </p>
                {sku.totalFt && (
                  <p className="font-mono text-[#F0B500] text-xs">{sku.totalFt} total</p>
                )}
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="text-[#F0B500] text-xs font-bold tracking-[0.2em] uppercase mb-3">{sku.eyebrow}</p>
              <h1 className="font-['Archivo_Black'] text-4xl lg:text-5xl text-white leading-tight mb-4">
                {sku.name}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6">{sku.tagline}</p>
              <p className="text-white/60 leading-relaxed mb-8">{sku.body}</p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href={sku.hdLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F0B500] hover:bg-[#C99700] text-[#0E1929] font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
                >
                  Find at Home Depot <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/install/sizing-guide"
                  className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200"
                >
                  Sizing Guide
                </Link>
              </div>

              {/* Guarantee badge */}
              <div className="flex items-center gap-3 border border-white/10 px-5 py-3 w-fit">
                <Shield className="w-5 h-5 text-[#F0B500]" />
                <div>
                  <p className="text-white font-bold text-sm">5-Year Guarantee</p>
                  <p className="text-white/50 text-xs">Zero drafts or we replace it free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where It Fits ── */}
      <section ref={whereFitsReveal.ref} className="py-24 lg:py-32 bg-white">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className={`transition-all duration-700 ${whereFitsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#F0B500] text-xs font-bold tracking-[0.2em] uppercase mb-4">WHERE IT FITS</p>
            <h2 className="font-['Archivo_Black'] text-4xl text-[#0E1929] mb-12">Where it fits.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sku.whereFits.map((item, i) => (
                <div
                  key={i}
                  className={`border border-[#0E1929]/10 p-6 transition-all duration-500 ${whereFitsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F0B500] shrink-0 mt-0.5" />
                    <h3 className="font-bold text-[#0E1929]">{item.location}</h3>
                  </div>
                  <p className="text-[#1A2E44]/60 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Construction ── */}
      <section ref={constructionReveal.ref} className="bg-[#0E1929] py-24 lg:py-32">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-700 ${constructionReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <p className="text-[#F0B500] text-xs font-bold tracking-[0.2em] uppercase mb-4">CONSTRUCTION</p>
              <h2 className="font-['Archivo_Black'] text-4xl text-white leading-tight mb-6">
                What's inside every roll.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Every DraftShield roll uses the same five-layer construction — regardless of size.
                The {sku.shortName} is no exception.
              </p>
              <Link
                href="/science"
                className="inline-flex items-center gap-2 text-[#F0B500] font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all duration-200"
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
                  <span className="font-['Archivo_Black'] text-[#F0B500] text-xl w-8 shrink-0">{layer.num}</span>
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

      {/* ── Specs ── */}
      <section ref={specsReveal.ref} className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className={`transition-all duration-700 ${specsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#F0B500] text-xs font-bold tracking-[0.2em] uppercase mb-4">SPECIFICATIONS</p>
            <h2 className="font-['Archivo_Black'] text-4xl text-[#0E1929] mb-12">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-0 border border-[#0E1929]/10 bg-white">
              <div className="flex gap-6 p-5 border-b border-r border-[#0E1929]/10">
                <span className="text-[#1A2E44]/50 text-sm w-48 shrink-0">Width</span>
                <span className="text-[#0E1929] font-semibold text-sm">{sku.width}</span>
              </div>
              <div className="flex gap-6 p-5 border-b border-r border-[#0E1929]/10">
                <span className="text-[#1A2E44]/50 text-sm w-48 shrink-0">Depth (compressed)</span>
                <span className="text-[#0E1929] font-semibold text-sm">{sku.depth}</span>
              </div>
              <div className="flex gap-6 p-5 border-b border-r border-[#0E1929]/10">
                <span className="text-[#1A2E44]/50 text-sm w-48 shrink-0">Length per roll</span>
                <span className="text-[#0E1929] font-semibold text-sm">{sku.length}</span>
              </div>
              {sku.totalFt && (
                <div className="flex gap-6 p-5 border-b border-r border-[#0E1929]/10">
                  <span className="text-[#1A2E44]/50 text-sm w-48 shrink-0">Total footage</span>
                  <span className="text-[#0E1929] font-semibold text-sm">{sku.totalFt}</span>
                </div>
              )}
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

      {/* ── Related Sizes ── */}
      {related.length > 0 && (
        <section ref={relatedReveal.ref} className="bg-white py-24">
          <div className="container max-w-6xl mx-auto px-6 lg:px-8">
            <div className={`transition-all duration-700 ${relatedReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-[#F0B500] text-xs font-bold tracking-[0.2em] uppercase mb-4">OTHER SIZES</p>
              <h2 className="font-['Archivo_Black'] text-3xl text-[#0E1929] mb-10">Other sizes in the line.</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {related.map((r, i) => (
                  <Link
                    key={r.slug}
                    href={`/product/${r.slug}`}
                    className={`group border border-[#0E1929]/10 p-6 hover:border-[#F0B500] transition-all duration-300 ${relatedReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    {r.badge && (
                      <span className="inline-block bg-[#F0B500] text-[#0E1929] text-[10px] font-bold px-2 py-0.5 tracking-wider uppercase mb-3">
                        {r.badge}
                      </span>
                    )}
                    <h3 className="font-['Archivo_Black'] text-[#0E1929] mb-1">{r.shortName}</h3>
                    <p className="font-mono text-[#1A2E44]/60 text-xs mb-3">
                      {r.width} × {r.depth} · {r.length}
                    </p>
                    <p className="text-[#1A2E44]/60 text-xs leading-relaxed mb-4">{r.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-[#F0B500] text-xs font-bold tracking-wider uppercase group-hover:gap-2 transition-all duration-200">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      <section className="bg-[#F5F0E8] py-16 border-t border-[#0E1929]/10">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-['Archivo_Black'] text-2xl text-[#0E1929]">Ready to seal up?</h3>
            <p className="text-[#1A2E44]/60 text-sm mt-1">Available at Home Depot stores and online.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={sku.hdLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F0B500] hover:bg-[#C99700] text-[#0E1929] font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
            >
              Find at Home Depot <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 border-2 border-[#0E1929] text-[#0E1929] hover:bg-[#0E1929] hover:text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" /> All Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
