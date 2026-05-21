/**
 * DraftShield™ /install/sizing-guide — 3-Question Sizing Guide (v2)
 * Design: Cinematic Industrial Premium
 */

import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SKU_MAP, recommendSkuFromSizingGuide, HOME_DEPOT_URL } from "@/lib/data";

type Step = {
  id: string;
  question: string;
  subtext?: string;
  options: { value: string; label: string; detail: string }[];
};

const STEPS: Step[] = [
  {
    id: "application",
    question: "What are you sealing?",
    subtext: "Pick the primary location where you'll apply DraftShield.",
    options: [
      { value: "windows", label: "Windows", detail: "Frames, sashes, or perimeters of any window type" },
      { value: "doors", label: "Door jambs & tops", detail: "The sides and top of a door frame (not the door bottom)" },
      { value: "garage", label: "Garage door perimeter", detail: "The sides and top of a garage door opening" },
      { value: "ac", label: "AC unit or attic hatch", detail: "Window-mounted AC units or pull-down attic stairs" },
      { value: "multiple", label: "Multiple locations", detail: "Sealing several different spots in the same project" },
    ],
  },
  {
    id: "gapSize",
    question: "How big is the gap?",
    subtext: "Hold a ruler across the gap when the door or window is closed.",
    options: [
      { value: "tight", label: "Tight — under 1/4\"", detail: "Light shows through but a finger won't fit" },
      { value: "standard", label: "Standard — about 1/4\"", detail: "A finger fits loosely; this is the most common gap size" },
      { value: "larger", label: "Larger — 3/8\" to 5/8\"", detail: "A finger fits easily; common on garage doors and older frames" },
      { value: "variable", label: "Variable — different in different spots", detail: "The gap isn't consistent along the length of the frame" },
    ],
  },
  {
    id: "frequency",
    question: "How often is this opening used?",
    subtext: "Helps us recommend the right compression profile for long-term performance.",
    options: [
      { value: "daily", label: "Daily", detail: "Main entry door, frequently used window" },
      { value: "weekly", label: "A few times a week", detail: "Secondary door, bedroom window" },
      { value: "seasonal", label: "Seasonal or occasional", detail: "Attic hatch, storage room, AC unit" },
    ],
  },
];

export default function SizingGuide() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);

  const currentStep = STEPS[step];
  const progress = ((step) / STEPS.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentStep.id]: value };
    setAnswers(newAnswers);

    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      const slug = recommendSkuFromSizingGuide(
        newAnswers.application,
        newAnswers.gapSize,
        newAnswers.frequency
      );
      setResult(slug);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  const recommendedSku = result ? SKU_MAP[result] : null;

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Navigation />

      {/* ── Header ── */}
      <section className="bg-[#0E1929] pt-32 pb-16">
        <div className="container max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-[#F26419] text-xs font-bold tracking-[0.2em] uppercase mb-4">SIZING GUIDE</p>
          <h1 className="font-['Archivo_Black'] text-4xl lg:text-5xl text-white leading-tight mb-4">
            Find your size in 3 questions.
          </h1>
          <p className="text-white/60 leading-relaxed">
            Answer three quick questions. We'll recommend the right DraftShield size for your gap.
          </p>
        </div>
      </section>

      {/* ── Guide ── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-3xl mx-auto px-6 lg:px-8">

          {!result ? (
            <div>
              {/* Progress */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#1A2E44]/50 text-xs uppercase tracking-wider">
                    Question {step + 1} of {STEPS.length}
                  </span>
                  {step > 0 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="inline-flex items-center gap-1 text-[#1A2E44]/50 hover:text-[#0E1929] text-xs font-bold tracking-wider uppercase transition-colors"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>
                  )}
                </div>
                <div className="h-1 bg-[#0E1929]/10 rounded-full">
                  <div
                    className="h-full bg-[#F26419] rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h2 className="font-['Archivo_Black'] text-3xl text-[#0E1929] mb-3">
                  {currentStep.question}
                </h2>
                {currentStep.subtext && (
                  <p className="text-[#1A2E44]/60 leading-relaxed">{currentStep.subtext}</p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentStep.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className="w-full text-left bg-white border border-[#0E1929]/10 hover:border-[#F26419] p-5 transition-all duration-200 group active:scale-[0.99]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-[#0E1929] mb-1">{opt.label}</p>
                        <p className="text-[#1A2E44]/60 text-sm">{opt.detail}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#F26419] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : recommendedSku ? (
            <div>
              {/* Result */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-[#F26419]/10 border border-[#F26419]/30 px-4 py-2 mb-6">
                  <span className="text-[#F26419] text-xs font-bold tracking-widest uppercase">Your Recommendation</span>
                </div>
                <h2 className="font-['Archivo_Black'] text-4xl text-[#0E1929] mb-4">
                  {recommendedSku.name}
                </h2>
                <p className="text-[#1A2E44]/70 text-lg mb-2">
                  {recommendedSku.tagline}
                </p>
                <p className="font-mono text-[#0E1929] font-bold text-lg">
                  {recommendedSku.totalFt
                    ? `3× ${recommendedSku.width} × ${recommendedSku.depth} · ${recommendedSku.totalFt}`
                    : `${recommendedSku.width} × ${recommendedSku.depth} · ${recommendedSku.length}`}
                </p>
              </div>

              {/* Why this size */}
              <div className="bg-white border border-[#0E1929]/10 p-8 mb-8">
                <p className="text-[#F26419] text-xs font-bold tracking-widest uppercase mb-4">WHY THIS SIZE</p>
                <p className="text-[#1A2E44]/80 leading-relaxed">{recommendedSku.body}</p>
              </div>

              {/* Where it fits */}
              <div className="bg-[#0E1929] p-8 mb-8">
                <p className="text-[#F26419] text-xs font-bold tracking-widest uppercase mb-6">WHERE IT FITS</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {recommendedSku.whereFits.map((item, i) => (
                    <div key={i} className="border-l-2 border-[#F26419] pl-4">
                      <p className="text-white font-bold text-sm mb-1">{item.location}</p>
                      <p className="text-white/50 text-xs">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a
                  href={recommendedSku.hdLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
                >
                  Find at Home Depot <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href={`/product/${recommendedSku.slug}`}
                  className="inline-flex items-center gap-2 border-2 border-[#0E1929] text-[#0E1929] hover:bg-[#0E1929] hover:text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200"
                >
                  Full Product Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="text-center">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 text-[#1A2E44]/50 hover:text-[#0E1929] text-sm font-bold tracking-wider uppercase transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Start Over
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* ── Bottom note ── */}
      <section className="bg-[#0E1929] py-12">
        <div className="container max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/50 text-sm mb-4">
            Not sure? Browse all five sizes on the product page, or contact us directly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-[#F26419] font-bold text-xs tracking-widest uppercase hover:gap-3 transition-all duration-200"
            >
              All Products <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white font-bold text-xs tracking-widest uppercase transition-colors"
            >
              Contact Support <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
