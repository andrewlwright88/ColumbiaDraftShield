/**
 * DraftShield™ ByApplication — v2 redirect stub
 * This page is replaced by /where-to-apply in v2.
 * The App.tsx router handles the redirect; this component is a fallback.
 */
import { Redirect } from "wouter";
export default function ByApplication() {
  return <Redirect to="/where-to-apply" />;
}
