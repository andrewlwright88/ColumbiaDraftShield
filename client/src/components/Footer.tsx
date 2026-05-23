/**
 * DraftShield™ Footer — v2
 * Design: Cinematic Industrial Premium
 */

import { Link } from "wouter";
import { HOME_DEPOT_URL } from "@/lib/data";
import { IMG } from "@/lib/images";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0E1929", borderTop: "1px solid rgba(168,176,186,0.12)" }}>
      {/* Heritage band */}
      <div className="py-10 bg-[#1A2E44] border-b border-white/10">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="bg-[#F5F0E8] px-4 py-3 rounded-sm flex items-center" title="TrimMaster by Columbia Aluminum Products">
                <img src={IMG.logoTrimMaster} alt="TrimMaster by Columbia Aluminum Products" className="h-7 w-auto" />
              </div>
              <div className="w-px h-10 bg-white/15 hidden md:block" />
              <img src={IMG.logoColumbia} alt="Columbia Aluminum Products" className="h-12 w-auto opacity-90" />
            </div>
            <div className="flex items-center gap-8">
              {[
                { label: "Made in USA", sub: "Corona, CA" },
                { label: "Since 1947", sub: "78 years" },
                { label: "5-Year Guarantee", sub: "Zero drafts" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: "0.06em" }}>
                    {item.label}
                  </div>
                  <div className="text-xs mt-0.5 text-white/50">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-white text-xl mb-3" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: "-0.02em" }}>
              DRAFT<span style={{ color: "#F26419" }}>SHIELD</span>
              <span className="text-xs align-super ml-0.5 text-white/50" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>™</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-white/50" style={{ fontFamily: "Inter, sans-serif" }}>
              Premium adhesive-backed foam weatherstrip. Zero drafts, guaranteed.
            </p>
            <a
              href={HOME_DEPOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#F26419] hover:bg-[#d4561a] text-white font-bold text-xs px-4 py-2 tracking-widest uppercase transition-all duration-200"
            >
              Find at Home Depot
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-xs font-semibold mb-4 tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
              Products
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Product Overview", href: "/product" },
                { label: "Universal Roll", href: "/product/universal" },
                { label: "Narrow", href: "/product/narrow" },
                { label: "Standard", href: "/product/standard" },
                { label: "Wide", href: "/product/wide" },
                { label: "Multi-Pack", href: "/product/multi-pack" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-white text-xs font-semibold mb-4 tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
              Learn
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Where to Apply", href: "/where-to-apply" },
                { label: "The Science", href: "/science" },
                { label: "Savings Calculator", href: "/savings" },
                { label: "Install & Learn", href: "/install" },
                { label: "Sizing Guide", href: "/install/sizing-guide" },
                { label: "About Us", href: "/about" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-xs font-semibold mb-4 tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
              Support
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Where to Buy", href: "/where-to-buy" },
                { label: "Contact Us", href: "/contact" },
                { label: "5-Year Guarantee", href: "/guarantee" },
                { label: "FAQ", href: "/install#faq" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2026 DraftShield™. A product of TrimMaster® by Columbia Aluminum Products. Made in USA since 1947.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-xs text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-xs text-white/40 hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
