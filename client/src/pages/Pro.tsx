/*
 * DraftShield™ Pro Program Page
 * Design: Cinematic Industrial Premium
 */

import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HOME_DEPOT_URL } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import { IMG } from "@/lib/images";
const HERITAGE_IMG = IMG.heritage;

function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useScrollReveal(0.1) as React.RefObject<HTMLElement>;
  return <section ref={ref} className={className} style={style}>{children}</section>;
}

const PRO_BENEFITS = [
  "Volume pricing on all DraftShield SKUs",
  "Dedicated Pro account manager",
  "Priority order fulfillment",
  "Co-branded installation materials",
  "Technical training and certification",
  "Job-site delivery available",
  "Net-30 payment terms (qualified accounts)",
  "Early access to new product launches",
];

export default function Pro() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0E1929" }}>
      <Navigation />

      {/* Hero */}
      <div
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "#0E1929" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERITAGE_IMG})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,25,41,0.7) 0%, rgba(14,25,41,1) 100%)" }} />
        <div className="container relative z-10">
          <div
            className="inline-block px-3 py-1 rounded-sm text-xs font-semibold mb-4 uppercase tracking-widest"
            style={{ backgroundColor: "#F0B500", color: "#FFFFFF", fontFamily: "Inter, sans-serif" }}
          >
            Pro Program
          </div>
          <h1
            className="text-5xl lg:text-6xl text-white mb-5"
            style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: "-0.03em" }}
          >
            Built for contractors.<br />Backed by 78 years.
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
            The DraftShield Pro Program gives professional installers, general contractors, and remodelers access to volume pricing, priority fulfillment, and dedicated technical support.
          </p>
          <Link href="/contact" className="btn-ds-primary">
            Apply for Pro Access <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Benefits */}
      <Section className="py-20" style={{ backgroundColor: "#1B2A4A" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-rule" />
              <h2
                className="text-3xl text-white mb-6 reveal"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                Pro Program Benefits
              </h2>
              <ul className="space-y-3 stagger">
                {PRO_BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 reveal">
                    <Check size={16} className="mt-0.5 shrink-0" style={{ color: "#F0B500" }} />
                    <span className="text-sm text-white/80" style={{ fontFamily: "Inter, sans-serif" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="reveal rounded-sm p-8 lg:p-10"
              style={{ backgroundColor: "rgba(14,25,41,0.5)", border: "1px solid rgba(168,176,186,0.12)" }}
            >
              <h3
                className="text-xl text-white mb-2"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                Apply for Pro Access
              </h3>
              <p className="text-sm mb-6" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
                Fill out our contact form and select "Pro Program Inquiry" — a Pro account manager will reach out within 1 business day.
              </p>
              <div className="space-y-3">
                {["Business name", "License number (if applicable)", "Estimated annual volume", "Primary product needs"].map((field) => (
                  <div key={field}>
                    <label className="block text-xs text-white/60 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                      {field}
                    </label>
                    <div
                      className="w-full h-10 rounded-sm"
                      style={{ backgroundColor: "rgba(168,176,186,0.08)", border: "1px solid rgba(168,176,186,0.15)" }}
                    />
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-ds-primary w-full justify-center mt-6">
                Submit Application <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
