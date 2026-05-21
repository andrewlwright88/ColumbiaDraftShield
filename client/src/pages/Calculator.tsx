/**
 * DraftShield™ Savings Calculator — v2
 * Route: /savings
 * Design: Cinematic Industrial Premium
 */

import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Calculator as CalcIcon, Info } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SKUS, HOME_DEPOT_URL, calculateSavings, getZoneFromZip } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useScrollReveal(0.1) as React.RefObject<HTMLElement>;
  return <section ref={ref} className={className} style={style}>{children}</section>;
}

export default function Calculator() {
  const [zip, setZip] = useState("");
  const [sqft, setSqft] = useState(1800);
  const [age, setAge] = useState(5);
  const [calculated, setCalculated] = useState(false);
  const [results, setResults] = useState({ annualSavings: 0, fiveYear: 0, taxCredit: 0 });
  const [zone, setZone] = useState<{ zone: string; label: string; recommended: string[] } | null>(null);

  const handleCalculate = () => {
    const z = getZoneFromZip(zip || "6");
    const r = calculateSavings(sqft, age, z.zone);
    setZone(z);
    setResults(r);
    setCalculated(true);
  };

  // Map zone recommendations to SKU slugs
  const recommended = zone
    ? SKUS.filter((s) => zone.recommended.includes(s.slug)).slice(0, 2)
    : [];

  return (
    <div className="min-h-screen bg-[#0E1929]">
      <Navigation />

      {/* Hero */}
      <div className="pt-32 pb-16 bg-[#0E1929]">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">SAVINGS CALCULATOR</p>
          <h1 className="font-['Archivo_Black'] text-5xl lg:text-6xl text-white leading-tight mb-4">
            How much are you<br />losing to drafts?
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Estimate your annual energy savings, 5-year projection, and IRA tax credit eligibility.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <Section className="py-12 pb-24 bg-[#0E1929]">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Input panel */}
            <div className="p-8 lg:p-10 bg-[#1A2E44] border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <CalcIcon size={20} className="text-[#F26419]" />
                <h2 className="font-['Archivo_Black'] text-xl text-white">Enter Your Home Details</h2>
              </div>

              <div className="space-y-8">
                {/* Zip code */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">ZIP Code</label>
                  <input
                    type="text"
                    value={zip}
                    onChange={e => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                    placeholder="e.g. 60614"
                    maxLength={5}
                    className="w-full px-4 py-3 text-white placeholder-white/30 text-base outline-none focus:ring-2 focus:ring-[#F26419]/50 bg-[#0E1929]/60 border border-white/20"
                    style={{ caretColor: "#F26419", fontFamily: "Inter, sans-serif" }}
                  />
                  <p className="text-xs mt-1.5 text-white/50" style={{ fontFamily: "Inter, sans-serif" }}>
                    Used to determine your IECC climate zone
                  </p>
                </div>

                {/* Home size */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-white">Home Size</label>
                    <span className="font-['Archivo_Black'] text-lg text-[#F26419]">
                      {sqft.toLocaleString()} sq ft
                    </span>
                  </div>
                  <input
                    type="range" min={500} max={5000} step={100} value={sqft}
                    onChange={e => setSqft(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #F26419 0%, #F26419 ${((sqft - 500) / 4500) * 100}%, rgba(168,176,186,0.2) ${((sqft - 500) / 4500) * 100}%, rgba(168,176,186,0.2) 100%)`,
                      accentColor: "#F26419",
                    }}
                  />
                  <div className="flex justify-between text-xs mt-1 text-white/40">
                    <span>500 sq ft</span><span>5,000 sq ft</span>
                  </div>
                </div>

                {/* Weatherstrip age */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-white">Current Weatherstripping Age</label>
                    <span className="font-['Archivo_Black'] text-lg text-[#F26419]">
                      {age} yr{age !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <input
                    type="range" min={0} max={20} step={1} value={age}
                    onChange={e => setAge(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #F26419 0%, #F26419 ${(age / 20) * 100}%, rgba(168,176,186,0.2) ${(age / 20) * 100}%, rgba(168,176,186,0.2) 100%)`,
                      accentColor: "#F26419",
                    }}
                  />
                  <div className="flex justify-between text-xs mt-1 text-white/40">
                    <span>New</span><span>20+ years</span>
                  </div>
                </div>

                <button
                  onClick={handleCalculate}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
                >
                  Calculate My Savings <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Results panel */}
            <div>
              {!calculated ? (
                <div className="p-8 lg:p-10 h-full flex flex-col items-center justify-center text-center bg-[#1A2E44]/40 border border-dashed border-white/20">
                  <CalcIcon size={40} className="mb-4 opacity-30 text-white/50" />
                  <p className="text-white/50 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    Enter your home details and click Calculate to see your personalized savings estimate.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {zone && (
                    <div className="p-5 bg-[#F26419]/10 border border-[#F26419]/25">
                      <p className="text-[#F26419] text-xs font-bold tracking-widest uppercase mb-1">Your Climate Zone</p>
                      <p className="font-['Archivo_Black'] text-xl text-white">Zone {zone.zone} — {zone.label}</p>
                    </div>
                  )}

                  {[
                    { label: "Estimated Annual Savings", value: `$${results.annualSavings.toLocaleString()}`, accent: true, sub: "Based on your home size, climate zone, and current seal age" },
                    { label: "5-Year Savings Projection", value: `$${results.fiveYear.toLocaleString()}`, accent: false, sub: "Cumulative savings over 5 years with DraftShield installed" },
                    { label: "IRA Tax Credit Estimate", value: `$${results.taxCredit}`, accent: false, sub: "Estimated credit under the Inflation Reduction Act — consult a tax professional" },
                  ].map((item) => (
                    <div key={item.label} className="p-6 bg-[#1A2E44] border border-white/10">
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "Inter, sans-serif" }}>{item.label}</p>
                      <p className="font-['Archivo_Black'] text-4xl mb-1" style={{ color: item.accent ? "#F26419" : "#FFFFFF", letterSpacing: "-0.02em" }}>
                        {item.value}
                      </p>
                      <p className="text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{item.sub}</p>
                    </div>
                  ))}

                  <div className="flex gap-3 p-4 bg-white/5 border border-white/10">
                    <Info size={14} className="shrink-0 mt-0.5 text-white/40" />
                    <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                      Estimates are for informational purposes only and are based on simplified DOE air-sealing models.
                      Actual savings vary by home construction, local energy rates, and installation quality.
                      Tax credit eligibility should be verified with a qualified tax professional.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Recommended products */}
          {calculated && recommended.length > 0 && (
            <div className="mt-12">
              <h2 className="font-['Archivo_Black'] text-2xl text-white mb-6">Recommended for Your Climate</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {recommended.map((s) => (
                  <div key={s.slug} className="flex gap-5 p-5 bg-[#1A2E44] border border-white/10">
                    <div>
                      <h3 className="font-['Archivo_Black'] text-base text-white mb-1">{s.name}</h3>
                      <p className="text-white/50 text-sm mb-3" style={{ fontFamily: "Inter, sans-serif" }}>{s.tagline}</p>
                      <div className="flex gap-3">
                        <Link
                          href={`/product/${s.slug}`}
                          className="inline-flex items-center gap-1.5 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold text-xs px-4 py-2 tracking-widest uppercase transition-all duration-200"
                        >
                          View Details
                        </Link>
                        <a
                          href={s.hdLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 border border-white/30 hover:border-white text-white font-bold text-xs px-4 py-2 tracking-widest uppercase transition-all duration-200"
                        >
                          Buy at Home Depot
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
