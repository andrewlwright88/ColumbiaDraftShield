/*
 * DraftShield™ Install & Learn Page
 * Design: Cinematic Industrial Premium
 */

import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Clock, Wrench, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IMG } from "@/lib/images";

const PRODUCT_IMG = IMG.product;

function Section({ children, className = "", style = {}, id }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; id?: string }) {
  const ref = useScrollReveal(0.1) as React.RefObject<HTMLElement>;
  return <section id={id} ref={ref} className={className} style={style}>{children}</section>;
}

const INSTALL_STEPS = [
  {
    num: "01",
    title: "Measure the gap",
    time: "3 min",
    detail: "Close the window or door and measure the gap where air is escaping — both the length of the run and the width of the gap. Pick the DraftShield size that matches your gap width: Narrow for tight sash gaps (≤1/4\"), Universal or Standard for typical window perimeters (≈3/8\"), Wide for door jambs and garage perimeters (up to 1/2\").",
    tools: ["Tape measure"],
  },
  {
    num: "02",
    title: "Clean and dry the surface",
    time: "5 min",
    detail: "Wipe the surface with isopropyl alcohol to remove dust, grease, and any old adhesive residue. The acrylic adhesive needs a clean, dry surface to bond properly. Allow 1–2 minutes for the alcohol to fully evaporate before applying.",
    tools: ["Isopropyl alcohol", "Clean cloth"],
  },
  {
    num: "03",
    title: "Cut to length with scissors",
    time: "2 min",
    detail: "Unroll a length slightly longer than the run you measured. Cut with household scissors — no special tools needed. For tight inside corners (window frames), cut a clean butt joint rather than trying to fold the foam around the corner.",
    tools: ["Scissors"],
  },
  {
    num: "04",
    title: "Peel and press",
    time: "5 min",
    detail: "Peel back about 6 inches of the release liner. Starting at one end of the run, press the exposed foam firmly into place. Continue peeling and pressing in 6-inch sections, applying steady pressure with your thumb along the full length so the adhesive makes full contact.",
    tools: ["Your hands"],
  },
  {
    num: "05",
    title: "Test the seal",
    time: "2 min",
    detail: "Close the window or door. Slide a sheet of paper into the seam at several points along the run — you should feel resistance everywhere. If the paper slides freely at any spot, press that section of DraftShield firmly again. Full adhesive cure takes 24 hours; avoid stressing the seal during that window.",
    tools: ["Sheet of paper"],
  },
];

const FAQS = [
  {
    q: "Will it stick to my surface?",
    a: "Yes — the premium acrylic adhesive bonds reliably to PVC, painted wood, aluminum, and powder-coated metal. These cover the vast majority of residential window frames, door jambs, garage perimeters, and AC unit housings. For raw, unfinished wood or porous masonry, prime the surface first or contact support.",
  },
  {
    q: "How do I remove it later? Will it damage paint?",
    a: "Pull slowly at a low angle and DraftShield peels off cleanly in one continuous strip on most surfaces. If any adhesive residue remains, wipe it with isopropyl alcohol or an adhesive remover. On well-bonded painted surfaces, removal will not damage the paint; on older or flaking paint, test in an inconspicuous spot first.",
  },
  {
    q: "Can I install in cold weather?",
    a: "DraftShield installs best at 50°F (10°C) or warmer. The acrylic adhesive needs a minimum surface temperature to form an initial bond. If you're weatherizing in winter, warm the surface with a hair dryer for 30–60 seconds before applying, then press the foam firmly into place. Full bond strength develops over the first 24 hours.",
  },
  {
    q: "What if my gap is irregular or larger than the strip?",
    a: "Step up one size — if Universal isn't enough, try Wide (up to 1/2\"). For very large or uneven gaps (door bottoms, garage thresholds, gaps over 1/2\"), DraftShield isn't the right product on its own; pair it with a door bottom sweep or threshold seal. For irregular gaps that vary along the run, the foam will compress to fit minor variations — just press it firmly where the gap is widest.",
  },
];

const COLD_WEATHER_TIPS = [
  "Install at 50°F (10°C) or warmer — acrylic adhesive needs warmth to bond",
  "Warm the surface with a hair dryer for 30–60 seconds if it's colder",
  "Wipe with isopropyl alcohol — it both cleans and removes any frost film",
  "Allow 24 hours of cure time before stressing the seal (opening/closing repeatedly)",
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(168,176,186,0.12)" }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base text-white" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
          {q}
        </span>
        <ChevronDown
          size={18}
          className="shrink-0 transition-transform duration-200"
          style={{ color: "#A8B0BA", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm leading-relaxed" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Install() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0E1929" }}>
      <Navigation />

      {/* Hero */}
      <div className="pt-32 pb-16" style={{ backgroundColor: "#0E1929" }}>
        <div className="container">
          <span className="section-rule" />
          <h1
            className="text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: "-0.03em" }}
          >
            Install & Learn
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
            Five steps. Scissors only. Done in under 20 minutes.
          </p>
          <div className="flex flex-wrap gap-5 mt-6">
            {[
              { icon: Clock, label: "15–20 min install" },
              { icon: Wrench, label: "Scissors only" },
              { icon: CheckCircle, label: "No special skills required" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} style={{ color: "#F0B500" }} />
                <span className="text-sm" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps */}
      <Section className="py-16 lg:py-24" style={{ backgroundColor: "#0E1929" }}>
        <div className="container">
          <h2
            className="text-3xl text-white mb-10 reveal"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            Installation Guide
          </h2>
          <div className="space-y-5 stagger">
            {INSTALL_STEPS.map((step) => (
              <div
                key={step.num}
                className="reveal flex gap-6 p-6 lg:p-8 rounded-sm"
                style={{ backgroundColor: "#1B2A4A", border: "1px solid rgba(168,176,186,0.10)" }}
              >
                <div
                  className="shrink-0 text-3xl lg:text-4xl"
                  style={{ fontFamily: "'Archivo Black', sans-serif", color: "#F0B500", opacity: 0.5 }}
                >
                  {step.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold text-white" style={{ fontFamily: "Inter, sans-serif" }}>
                      {step.title}
                    </h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-sm"
                      style={{ backgroundColor: "rgba(240,181,0,0.15)", color: "#F0B500", fontFamily: "Inter, sans-serif" }}
                    >
                      {step.time}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
                    {step.detail}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-0.5 rounded-sm"
                        style={{ backgroundColor: "rgba(168,176,186,0.08)", color: "#A8B0BA", fontFamily: "Inter, sans-serif", border: "1px solid rgba(168,176,186,0.12)" }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Cold-weather callout */}
      <Section className="py-16 lg:py-20" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <span className="section-rule" />
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: "#F0B500", fontFamily: "Inter, sans-serif" }}
              >
                Installing in cold weather
              </p>
              <h2
                className="text-3xl lg:text-4xl reveal"
                style={{ fontFamily: "'Archivo Black', sans-serif", color: "#0E1929", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Most people weatherize in winter. Read this first.
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p
                className="text-base leading-relaxed mb-6 reveal"
                style={{ color: "#0E1929", fontFamily: "Inter, sans-serif" }}
              >
                Acrylic adhesive bonds best when the surface is at least 50°F. That's the single biggest reason foam tape fails on a January install. A 60-second warm-up with a hair dryer is the difference between a five-winter seal and a January peel-off.
              </p>
              <ul className="space-y-3">
                {COLD_WEATHER_TIPS.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 reveal"
                    style={{ color: "#0E1929", fontFamily: "Inter, sans-serif" }}
                  >
                    <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "#F0B500" }} />
                    <span className="text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-16 lg:py-24" style={{ backgroundColor: "#1B2A4A" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <span className="section-rule" />
              <h2
                className="text-3xl text-white mb-4 reveal"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-sm mb-6 reveal" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
                Can't find your answer here? Contact our support team.
              </p>
              <Link href="/contact" className="btn-ds-ghost reveal">
                Contact Support <ArrowRight size={14} />
              </Link>
            </div>
            <div className="lg:col-span-2">
              {FAQS.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
