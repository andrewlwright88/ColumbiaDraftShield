/*
 * DraftShield™ Guarantee Page
 * Design: Cinematic Industrial Premium
 * Marketing hero + plain-English claim path + formal written terms.
 */

import { Link } from "wouter";
import { ArrowRight, Shield, CheckCircle, XCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Section({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useScrollReveal(0.1) as React.RefObject<HTMLElement>;
  return (
    <section ref={ref} className={className} style={style}>
      {children}
    </section>
  );
}

const CLAIM_STEPS = [
  {
    num: "01",
    title: "Save your receipt",
    detail:
      "Keep your Home Depot receipt or order confirmation. It's the proof of purchase we need to process any claim.",
  },
  {
    num: "02",
    title: "Contact us within 5 years",
    detail:
      "If the seal fails before five years from your purchase date, send us a message through our contact form. Include your receipt, the SKU, and a brief description of the failure.",
  },
  {
    num: "03",
    title: "We refund and replace",
    detail:
      "We review every claim. Once approved, we refund your purchase and ship a replacement roll at no cost. Most claims are processed within 5 business days.",
  },
];

const COVERED = [
  "Adhesive failure — the foam separating from a properly prepared surface",
  "Foam compression set — the seal failing to recover after compression",
  "Tearing, cracking, or splitting of the foam core under normal use",
  "UV degradation of the outer skin within the 5-year period",
];

const NOT_COVERED = [
  "Damage from installation on improperly cleaned, unprimed, or unsuitable surfaces (see install guide)",
  "Installation in temperatures below 50°F without surface warming (see install guide)",
  "Physical damage from cutting, pets, impact, or aggressive cleaning chemicals",
  "Cosmetic discoloration that does not affect sealing performance",
  "Use outside intended residential applications (industrial, marine, automotive)",
];

export default function Guarantee() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0E1929" }}>
      <Navigation />

      {/* Hero */}
      <div
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "#0E1929" }}
      >
        <div className="container relative z-10 max-w-3xl">
          <span className="section-rule" />
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#F26419", fontFamily: "Inter, sans-serif" }}
          >
            The 5-Year Written Guarantee
          </p>
          <h1
            className="text-5xl lg:text-6xl text-white mb-6"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Five years.<br />Or your money back.
          </h1>
          <p
            className="text-xl mb-8"
            style={{
              color: "#A8B0BA",
              fontFamily: "Inter, sans-serif",
              lineHeight: 1.6,
            }}
          >
            Every roll of DraftShield is backed by a written five-year guarantee.
            Install it per the instructions. If the seal fails before five years,
            we refund your purchase and ship a replacement.
          </p>
          <div className="inline-flex items-center gap-3 border px-6 py-3" style={{ borderColor: "rgba(242,100,25,0.4)" }}>
            <Shield size={18} style={{ color: "#F26419" }} />
            <span
              className="text-sm font-bold tracking-wider uppercase"
              style={{ color: "white", fontFamily: "Inter, sans-serif" }}
            >
              5 Year Guarantee
            </span>
          </div>
        </div>
      </div>

      {/* How to claim — 3 steps */}
      <Section className="py-20 lg:py-24" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="section-rule" />
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#F26419", fontFamily: "Inter, sans-serif" }}
            >
              How to file a claim
            </p>
            <h2
              className="text-4xl lg:text-5xl reveal"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                color: "#0E1929",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Three steps. No phone tree.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger">
            {CLAIM_STEPS.map((step) => (
              <div
                key={step.num}
                className="reveal bg-white p-8 border"
                style={{ borderColor: "rgba(14,25,41,0.1)" }}
              >
                <div
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    color: "#F26419",
                    opacity: 0.6,
                  }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-lg mb-3"
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    color: "#0E1929",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#0E1929", fontFamily: "Inter, sans-serif" }}
                >
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
            >
              File a Claim <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* What's covered / not covered */}
      <Section className="py-20 lg:py-24" style={{ backgroundColor: "#1A2E44" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={22} style={{ color: "#F26419" }} />
                <h2
                  className="text-2xl lg:text-3xl text-white"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  What's covered
                </h2>
              </div>
              <ul className="space-y-4">
                {COVERED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}
                  >
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#F26419" }}
                    />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <XCircle size={22} style={{ color: "#A8B0BA" }} />
                <h2
                  className="text-2xl lg:text-3xl text-white"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  What's not covered
                </h2>
              </div>
              <ul className="space-y-4">
                {NOT_COVERED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}
                  >
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#A8B0BA" }}
                    />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Formal written terms */}
      <Section className="py-20 lg:py-24" style={{ backgroundColor: "#0E1929" }}>
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#F26419", fontFamily: "Inter, sans-serif" }}
          >
            Written Guarantee Terms
          </p>
          <h2
            className="text-3xl lg:text-4xl text-white mb-10 reveal"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            The full terms, in writing.
          </h2>

          <div
            className="space-y-8 text-sm leading-relaxed reveal"
            style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}
          >
            <div>
              <h3
                className="text-white text-base font-bold mb-2 uppercase tracking-wider"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                1. Scope
              </h3>
              <p>
                Columbia Aluminum Products, Inc. ("Columbia") guarantees that
                each DraftShield™ foam weatherstrip product ("Product") will
                perform as a continuous air seal for a period of five (5) years
                from the original date of purchase by the end consumer, subject
                to the terms below. This guarantee is offered in addition to,
                and does not affect, any rights you have under applicable
                consumer protection law.
              </p>
            </div>

            <div>
              <h3
                className="text-white text-base font-bold mb-2 uppercase tracking-wider"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                2. Eligibility
              </h3>
              <p>
                This guarantee covers the original purchaser only and is
                non-transferable. The Product must have been purchased from
                Columbia, The Home Depot, or an authorized Columbia retailer.
                Proof of purchase (receipt or order confirmation) is required to
                process a claim.
              </p>
            </div>

            <div>
              <h3
                className="text-white text-base font-bold mb-2 uppercase tracking-wider"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                3. What is covered
              </h3>
              <p>
                Columbia will refund the purchase price and ship a replacement
                Product at no cost if, within five (5) years of the purchase
                date and under normal residential use, the Product exhibits: (a)
                adhesive failure resulting in separation from a properly
                prepared surface; (b) loss of compression recovery causing the
                seal to no longer make full contact; (c) tearing, cracking, or
                splitting of the foam core; or (d) ultraviolet degradation of
                the outer skin.
              </p>
            </div>

            <div>
              <h3
                className="text-white text-base font-bold mb-2 uppercase tracking-wider"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                4. What is not covered
              </h3>
              <p>
                This guarantee does not cover failures caused by: (a)
                installation contrary to the published installation
                instructions, including installation on unsuitable, unprepared,
                or unprimed surfaces; (b) installation at surface temperatures
                below 50°F (10°C) without the surface warming step described in
                the installation guide; (c) physical damage from cutting,
                impact, pets, or aggressive cleaning chemicals; (d) cosmetic
                discoloration that does not affect sealing performance; or (e)
                use outside intended residential applications, including
                industrial, marine, or automotive use.
              </p>
            </div>

            <div>
              <h3
                className="text-white text-base font-bold mb-2 uppercase tracking-wider"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                5. How to file a claim
              </h3>
              <p>
                Submit a claim through our contact form at draftshield.com/contact.
                Include your proof of purchase, the Product SKU, your purchase
                date, and a brief description of the failure. Columbia will
                review each claim and respond within five (5) business days.
                Approved refunds are issued to the original payment method;
                replacement Product ships at no cost via standard ground.
              </p>
            </div>

            <div>
              <h3
                className="text-white text-base font-bold mb-2 uppercase tracking-wider"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                6. Limitation of liability
              </h3>
              <p>
                Columbia's sole liability under this guarantee is limited to
                refund of the Product purchase price and replacement of the
                Product. Columbia is not liable for incidental, consequential,
                or indirect damages, including but not limited to energy costs,
                property damage, or labor costs associated with installation or
                removal of the Product. Some jurisdictions do not allow the
                exclusion of incidental or consequential damages, so this
                limitation may not apply to you.
              </p>
            </div>

            <div>
              <h3
                className="text-white text-base font-bold mb-2 uppercase tracking-wider"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                7. Governing law
              </h3>
              <p>
                This guarantee is governed by the laws of the State of
                California, without regard to its conflict-of-laws provisions.
                This guarantee gives you specific legal rights, and you may also
                have other rights that vary by jurisdiction.
              </p>
            </div>

            <p className="pt-4 text-xs" style={{ color: "rgba(168,176,186,0.6)" }}>
              Columbia Aluminum Products, Inc. · Corona, California ·
              Effective {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section
        className="py-16 border-t"
        style={{
          backgroundColor: "#F5F0E8",
          borderColor: "rgba(14,25,41,0.1)",
        }}
      >
        <div className="container">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                color: "#0E1929",
                letterSpacing: "-0.02em",
              }}
            >
              Questions about a claim?
            </h2>
            <p
              className="text-base"
              style={{ color: "#0E1929", fontFamily: "Inter, sans-serif" }}
            >
              Our support team responds within one business day. We process
              every claim with the receipt, the SKU, and a short description.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
            >
              Contact Support <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
