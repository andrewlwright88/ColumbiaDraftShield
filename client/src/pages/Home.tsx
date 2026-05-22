/**
 * DraftShield™ Home Page — v2
 * Design: Cinematic Industrial Premium
 * Palette: --ds-midnight (#0E1929) / --ds-navy (#1A2E44) / --ds-orange (#F26419) / --ds-cream (#F5F0E8)
 * Typography: Archivo Black (display) / Inter (body)
 * Sections: Hero → Problem → Solution → Guarantee → Product Overview → Where It Works → Savings Teaser → Install Preview → Brand Closing → Final CTA
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  RectangleHorizontal,
  DoorClosed,
  Warehouse,
  AirVent,
  ChevronUp,
  Star,
  Shield,
  Zap,
  Sun,
} from "lucide-react";
import { IMG } from "@/lib/images";
import { SKUS, SCIENCE_FACTS, TESTIMONIALS, HOME_DEPOT_URL } from "@/lib/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ─── Application icons ────────────────────────────────────────────────────────
const APP_ICONS = [
  { icon: RectangleHorizontal, label: "Windows", sub: "Primary application" },
  { icon: DoorClosed, label: "Door jambs & tops", sub: "Secondary" },
  { icon: Warehouse, label: "Garage perimeters", sub: "Secondary" },
  { icon: AirVent, label: "AC units", sub: "Secondary" },
  { icon: ChevronUp, label: "Attic hatches", sub: "Secondary" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden bg-[#0E1929]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Frost-covered window, morning light"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(14,25,41,0.3) 0%, rgba(14,25,41,0.55) 55%, rgba(14,25,41,0.88) 100%)"
        }} />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-6">
            INTRODUCING THE PREMIUM TIER
          </p>

          {/* Headline */}
          <h1 className="font-['Archivo_Black'] text-6xl sm:text-7xl lg:text-8xl leading-[0.95] text-white mb-6">
            Zero drafts.<br />
            <span className="text-[#F26419]">Guaranteed.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            The first premium foam weatherstrip engineered to seal — and stay sealed.
            Closed-cell PU foam. Premium acrylic adhesive. Built to last five winters.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href={HOME_DEPOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
            >
              Find at Home Depot <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/savings"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
            >
              Calculate Your Savings
            </Link>
          </div>

          {/* Trust micro-marks */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/60 text-xs tracking-widest uppercase">
            <span><span className="text-white font-semibold">Made in USA</span> · Corona, CA</span>
            <span><span className="text-white font-semibold">Since 1947</span> · 78 years</span>
            <span><span className="text-white font-semibold">5-Year Guarantee</span></span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Discover</span>
        <div className="w-px h-8 bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}

// ─── Problem Section ──────────────────────────────────────────────────────────
function ProblemSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="bg-[#F5F0E8] py-24 lg:py-32">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Left: copy */}
          <div>
            <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              THE CATEGORY HAS A PROBLEM
            </p>
            <h2 className="font-['Archivo_Black'] text-4xl lg:text-5xl text-[#0E1929] leading-tight mb-8">
              Foam tape fails.<br />In one winter.<br />Sometimes less.
            </h2>
            <div className="space-y-5 text-[#1A2E44]/80 leading-relaxed">
              <p>
                The foam weatherstripping most homeowners buy is open-cell foam with a rubber-based adhesive.
                That adhesive has a glass transition temperature of 0–10°C — the temperature at which it stops bonding effectively.
              </p>
              <p>
                So it fails right when it matters. In October, on a cold window frame, the install never sets.
                By January, the seal is loose. By next fall, the homeowner is back at the store buying more tape.
              </p>
              <p>
                Two brands hold 84% of US foam-weatherstrip shelf share. Both compete on price. Neither has solved this. We did.
              </p>
            </div>
            <Link
              href="/science"
              className="inline-flex items-center gap-2 mt-8 text-[#F26419] font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all duration-200"
            >
              Read the Full Science <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: stats */}
          <div className="space-y-6">
            {SCIENCE_FACTS.map((f, i) => (
              <div
                key={i}
                className="border-l-2 border-[#F26419] pl-6 py-2"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="font-['Archivo_Black'] text-4xl text-[#0E1929] mb-1">{f.stat}</div>
                <div className="text-sm font-bold text-[#0E1929] uppercase tracking-wider mb-1">{f.label}</div>
                <div className="text-sm text-[#1A2E44]/70">{f.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Solution Section ─────────────────────────────────────────────────────────
function SolutionSection() {
  const { ref, visible } = useReveal();
  const features = [
    {
      icon: Zap,
      title: "Closed-Cell PU Foam",
      body: "Polyurethane foam that compresses, recovers, and seals — without absorbing moisture, freezing, or tearing. Not the recycled open-cell foam used by the dominant brands.",
    },
    {
      icon: Sun,
      title: "UV-Stabilized PE Liner",
      body: "The outer skin resists ultraviolet degradation. Internal glass-fiber cord prevents stretch and sag over years of compression. The seal stays where you put it.",
    },
    {
      icon: Shield,
      title: "Acrylic Adhesive Rated to 220°F",
      body: "Premium acrylic chemistry, –40°F to +220°F service range. Bonds reliably across PVC, aluminum, painted wood, and powder-coated metals. Holds in cold installs.",
    },
  ];

  return (
    <section ref={ref} className="bg-[#0E1929] py-24 lg:py-32">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">THE SOLUTION</p>
          <h2 className="font-['Archivo_Black'] text-4xl lg:text-5xl text-white leading-tight">
            Built to seal.<br />Engineered to last.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`border border-white/10 p-8 hover:border-[#F26419]/40 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-10 h-10 bg-[#F26419]/15 flex items-center justify-center mb-6">
                <f.icon className="w-5 h-5 text-[#F26419]" />
              </div>
              <h3 className="font-['Archivo_Black'] text-white text-lg mb-4">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/science"
            className="inline-flex items-center gap-2 text-[#F26419] font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all duration-200"
          >
            See the Engineering <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Guarantee Section ────────────────────────────────────────────────────────
function GuaranteeSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="bg-[#1A2E44] py-24 lg:py-32">
      <div className={`container max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-6">
          A CATEGORY-FIRST PROMISE
        </p>
        <h2 className="font-['Archivo_Black'] text-5xl lg:text-6xl text-white leading-tight mb-8">
          Five years.<br />Or your money back.
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 text-white/70 text-lg leading-relaxed mb-8">
          <p>
            We are the first foam weatherstrip brand to put five years behind our product.
            Every roll comes with a written guarantee. Install per the instructions.
            If the seal fails before five years, send us the receipt. We refund the purchase and ship a replacement.
          </p>
          <p className="text-white/50 text-base">
            Backed by Columbia Aluminum Products. 78 years of manufacturing, on the same lot in Corona, California.
          </p>
        </div>
        <div className="inline-flex items-center gap-3 border border-[#F26419]/40 px-8 py-4 mb-8">
          <Shield className="w-6 h-6 text-[#F26419]" />
          <span className="font-['Archivo_Black'] text-white text-xl">5 YEAR GUARANTEE</span>
        </div>
        <div className="block">
          <Link
            href="/guarantee"
            className="inline-flex items-center gap-2 text-[#F26419] font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all duration-200"
          >
            Read the Full Guarantee <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Product Overview Section ─────────────────────────────────────────────────
function ProductOverviewSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="bg-[#F5F0E8] py-24 lg:py-32">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">THE PRODUCT</p>
          <h2 className="font-['Archivo_Black'] text-4xl lg:text-5xl text-[#0E1929] leading-tight mb-4">
            One product. Five sizes.<br />Every gap in your home.
          </h2>
          <p className="text-[#1A2E44]/70 max-w-2xl leading-relaxed">
            DraftShield is a single product — a premium adhesive-backed foam weatherstrip — available in five sizes.
            Pick the dimension that fits your gap. Pick the universal roll if you want the size that works almost everywhere.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SKUS.map((sku, i) => (
            <Link
              key={sku.slug}
              href={`/product/${sku.slug}`}
              className={`group relative bg-white border border-[#0E1929]/10 p-6 hover:border-[#F26419] hover:shadow-lg transition-all duration-300 flex flex-col ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {sku.badge && (
                <span className="absolute top-4 right-4 bg-[#F26419] text-white text-[10px] font-bold px-2 py-1 tracking-wider uppercase">
                  {sku.badge}
                </span>
              )}
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#0E1929] flex items-center justify-center mb-4">
                  <div className="w-6 h-3 bg-[#F26419] rounded-sm" />
                </div>
                <p className="text-[#F26419] text-[10px] font-bold tracking-widest uppercase mb-1">{sku.eyebrow}</p>
                <h3 className="font-['Archivo_Black'] text-[#0E1929] text-base leading-tight mb-2">{sku.shortName}</h3>
                <p className="text-[#1A2E44]/60 text-xs font-mono mb-3">
                  {sku.totalFt ? `3× ${sku.width} × ${sku.depth} · ${sku.totalFt}` : `${sku.width} × ${sku.depth} · ${sku.length}`}
                </p>
                <p className="text-[#1A2E44]/70 text-xs leading-relaxed">{sku.tagline}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-[#F26419] text-xs font-bold tracking-wider uppercase group-hover:gap-2 transition-all duration-200">
                View Product <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/install/sizing-guide"
            className="inline-flex items-center gap-2 text-[#0E1929] font-bold text-sm tracking-widest uppercase hover:text-[#F26419] hover:gap-3 transition-all duration-200"
          >
            Not Sure Which Size? Use the Sizing Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Where It Works Section ───────────────────────────────────────────────────
function WhereItWorksSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="bg-[#0E1929] py-24 lg:py-32">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">WHERE TO APPLY</p>
          <h2 className="font-['Archivo_Black'] text-4xl lg:text-5xl text-white leading-tight mb-4">
            Built for windows.<br />Works on a lot more.
          </h2>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            DraftShield is engineered first for windows — frames, sashes, and perimeters.
            The same product handles door jambs, garage door sides, window-mounted AC units,
            attic access doors, and most other places in your home where a small gap leaks conditioned air.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {APP_ICONS.map(({ icon: Icon, label, sub }, i) => (
            <div
              key={label}
              className={`border border-white/10 p-6 text-center hover:border-[#F26419]/40 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#F26419]" />
                </div>
              </div>
              <p className="text-white font-bold text-sm mb-1">{label}</p>
              <p className="text-white/40 text-xs">{sub}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/where-to-apply"
            className="inline-flex items-center gap-2 text-[#F26419] font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all duration-200"
          >
            See All Applications <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Savings Teaser ───────────────────────────────────────────────────────────
function SavingsTeaser() {
  const { ref, visible } = useReveal();
  const [zip, setZip] = useState("");

  return (
    <section ref={ref} className="bg-[#F5F0E8] py-24 lg:py-32">
      <div className={`container max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">THE SAVINGS STORY</p>
            <h2 className="font-['Archivo_Black'] text-4xl lg:text-5xl text-[#0E1929] leading-tight mb-6">
              $200+ per year.<br />
              <span className="text-[#F26419]">And a 30% federal tax credit.</span>
            </h2>
            <p className="text-[#1A2E44]/70 leading-relaxed mb-4">
              The IRA Section 25C tax credit covers 30% of weatherization purchases — up to $1,200 per year.
              Combined with what you save on heating and cooling, a typical DraftShield install pays for itself in the first season.
            </p>
            <p className="text-[#1A2E44]/70 leading-relaxed">
              Enter your zip code. See what you'd save in your home.
            </p>
          </div>

          <div className="bg-white border border-[#0E1929]/10 p-8">
            <p className="text-[#0E1929] font-bold text-sm tracking-wider uppercase mb-6">Quick Estimate</p>
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                placeholder="Enter zip code"
                maxLength={5}
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
                className="flex-1 border border-[#0E1929]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#F26419] transition-colors"
              />
              <Link
                href={`/savings${zip.length === 5 ? `?zip=${zip}` : ""}`}
                className="bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-6 py-3 text-sm tracking-wider uppercase transition-colors whitespace-nowrap"
              >
                Calculate →
              </Link>
            </div>
            <p className="text-[#1A2E44]/50 text-xs">
              Or{" "}
              <Link href="/savings" className="text-[#F26419] hover:underline">
                go to the full calculator →
              </Link>
            </p>

            {/* Sample result preview */}
            <div className="mt-6 pt-6 border-t border-[#0E1929]/10 grid grid-cols-3 gap-4">
              {[
                { label: "Annual Savings", value: "$340" },
                { label: "5-Year Projection", value: "$1,700" },
                { label: "IRA Tax Credit", value: "$150" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-['Archivo_Black'] text-[#0E1929] text-xl">{item.value}</div>
                  <div className="text-[#1A2E44]/50 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-[#1A2E44]/40 text-xs mt-3 text-center">Sample estimate — enter your details for personalized results</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Install Preview ──────────────────────────────────────────────────────────
function InstallPreview() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="bg-[#1A2E44] py-24 lg:py-32">
      <div className={`container max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">INSTALLATION</p>
            <h2 className="font-['Archivo_Black'] text-4xl lg:text-5xl text-white leading-tight mb-6">
              Install in 20 minutes.<br />No tools beyond scissors.
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed mb-8">
              <p>
                Pull the roll from the package. Clean the surface with rubbing alcohol.
                Cut to length. Peel the backing. Press into place. That's the install.
              </p>
              <p>
                A standard window takes around 20 minutes. A full house can be done in an afternoon.
              </p>
            </div>
            <Link
              href="/install"
              className="inline-flex items-center gap-2 text-[#F26419] font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all duration-200"
            >
              Watch All Install Videos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Step list */}
          <div className="space-y-4">
            {[
              { n: "01", step: "Clean the surface", detail: "Wipe with rubbing alcohol. Let dry completely." },
              { n: "02", step: "Measure and cut", detail: "Scissors or utility knife. Cut to the length you need." },
              { n: "03", step: "Peel the backing", detail: "Split-back release liner — peel as you press." },
              { n: "04", step: "Press into place", detail: "Firm pressure along the full length. Done." },
            ].map((s, i) => (
              <div
                key={i}
                className={`flex gap-5 items-start border-b border-white/10 pb-4 last:border-0 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-['Archivo_Black'] text-[#F26419] text-2xl leading-none mt-1 w-8 shrink-0">{s.n}</span>
                <div>
                  <p className="text-white font-bold mb-1">{s.step}</p>
                  <p className="text-white/50 text-sm">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="bg-[#F5F0E8] py-24 lg:py-32">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">REAL HOMES. REAL RESULTS.</p>
          <h2 className="font-['Archivo_Black'] text-4xl text-[#0E1929]">What homeowners say.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`bg-white border border-[#0E1929]/10 p-8 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#F26419] text-[#F26419]" />
                ))}
              </div>
              <p className="text-[#1A2E44]/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-bold text-[#0E1929] text-sm">{t.author}</p>
                <p className="text-[#1A2E44]/50 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Brand Closing ────────────────────────────────────────────────────────────
function BrandClosing() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative bg-[#0E1929] py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.heritage} alt="Columbia Aluminum Products facility" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-[#0E1929]/70" />
      </div>
      <div className={`relative z-10 container max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-6">SINCE 1947</p>
        <h2 className="font-['Archivo_Black'] text-4xl lg:text-5xl text-white leading-tight mb-6">
          Columbia Aluminum Products<br />
          has been building hardware for<br />
          American homes for 78 years.<br />
          <span className="text-[#F26419]">DraftShield is what we built next.</span>
        </h2>
        <p className="text-white/50 mb-10">Made in California. Engineered for every climate.</p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-[#F26419] font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all duration-200"
        >
          The Columbia Story <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

// ─── Final CTA Band ───────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="bg-[#F5F0E8] py-16 border-t border-[#0E1929]/10">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <h3 className="font-['Archivo_Black'] text-2xl lg:text-3xl text-[#0E1929]">Ready to seal up?</h3>
        <div className="flex flex-wrap gap-4">
          <a
            href={HOME_DEPOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
          >
            Find at Home Depot <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/savings"
            className="inline-flex items-center gap-2 border-2 border-[#0E1929] text-[#0E1929] hover:bg-[#0E1929] hover:text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200"
          >
            Calculate My Savings
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <GuaranteeSection />
      <ProductOverviewSection />
      <WhereItWorksSection />
      <SavingsTeaser />
      <InstallPreview />
      <TestimonialsSection />
      <BrandClosing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
