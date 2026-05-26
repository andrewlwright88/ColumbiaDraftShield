/*
 * DraftShield™ Contact Page
 * Design: Cinematic Industrial Premium
 */

import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useScrollReveal(0.1) as React.RefObject<HTMLElement>;
  return <section ref={ref} className={className} style={style}>{children}</section>;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "General Inquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent! We'll respond within 1 business day.");
  };

  const inputStyle = {
    backgroundColor: "rgba(14,25,41,0.6)",
    border: "1px solid rgba(168,176,186,0.20)",
    color: "#FFFFFF",
    fontFamily: "Inter, sans-serif",
    caretColor: "#F0B500",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0E1929" }}>
      <Navigation />

      <div className="pt-32 pb-16" style={{ backgroundColor: "#0E1929" }}>
        <div className="container">
          <span className="section-rule" />
          <h1
            className="text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: "-0.03em" }}
          >
            Contact Us
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
            Questions, support requests, or guarantee claims — we respond within 1 business day.
          </p>
        </div>
      </div>

      <Section className="py-16 lg:py-24" style={{ backgroundColor: "#0E1929" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", detail: "support@draftshield.com", sub: "Response within 1 business day" },
                { icon: Phone, title: "Phone", detail: "1-800-DRAFT-SH", sub: "Mon–Fri, 8am–5pm PT" },
                { icon: MapPin, title: "Address", detail: "Columbia Aluminum Products", sub: "Corona, CA 92879" },
              ].map(({ icon: Icon, title, detail, sub }) => (
                <div
                  key={title}
                  className="reveal flex gap-4 p-5 rounded-sm"
                  style={{ backgroundColor: "#1B2A4A", border: "1px solid rgba(168,176,186,0.12)" }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: "rgba(240,181,0,0.15)", border: "1px solid rgba(240,181,0,0.25)" }}
                  >
                    <Icon size={18} style={{ color: "#F0B500" }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
                      {title}
                    </div>
                    <div className="text-sm font-semibold text-white" style={{ fontFamily: "Inter, sans-serif" }}>
                      {detail}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="reveal rounded-sm p-8 lg:p-10 space-y-5"
                  style={{ backgroundColor: "#1B2A4A", border: "1px solid rgba(168,176,186,0.12)" }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/60 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>Name</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm outline-none focus:ring-2 focus:ring-orange-500/40"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm outline-none focus:ring-2 focus:ring-orange-500/40"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm outline-none focus:ring-2 focus:ring-orange-500/40"
                      style={{ ...inputStyle, appearance: "none" }}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Support">Product Support</option>
                      <option value="Guarantee Claim">Guarantee Claim</option>
                      <option value="Order Issue">Order Issue</option>
                      <option value="Trade & Contractor">Trade & Contractor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm outline-none focus:ring-2 focus:ring-orange-500/40 resize-none"
                      style={inputStyle}
                    />
                  </div>
                  <button type="submit" className="btn-ds-primary w-full justify-center">
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <div
                  className="reveal rounded-sm p-10 text-center"
                  style={{ backgroundColor: "#1B2A4A", border: "1px solid rgba(168,176,186,0.12)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(240,181,0,0.15)", border: "1px solid rgba(240,181,0,0.25)" }}
                  >
                    <Mail size={28} style={{ color: "#F0B500" }} />
                  </div>
                  <h3 className="text-xl text-white mb-2" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    Message Sent
                  </h3>
                  <p className="text-sm" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
                    Thank you, {form.name}. We'll respond to {form.email} within 1 business day.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
