/*
 * DraftShield™ 404 Page
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0E1929" }}>
      <Navigation />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-6">
          <div
            className="text-8xl mb-4"
            style={{ fontFamily: "'Archivo Black', sans-serif", color: "#F0B500", opacity: 0.4 }}
          >
            404
          </div>
          <h1
            className="text-3xl text-white mb-3"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            Page not found
          </h1>
          <p className="text-base mb-8" style={{ color: "#A8B0BA", fontFamily: "Inter, sans-serif" }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-ds-primary">
              Back to Home <ArrowRight size={16} />
            </Link>
            <Link href="/product" className="btn-ds-ghost">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
