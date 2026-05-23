/**
 * DraftShield v2 — Central data layer
 * Single product (adhesive-backed foam weatherstrip) in 5 sizes.
 * All buy CTAs route to Home Depot with UTM parameters.
 * Design: Cinematic Industrial Premium | Palette: Midnight/Steel Navy/Performance Orange/Cream
 */

export const HD_BASE =
  "https://www.homedepot.com/b/TrimMaster/N-5yc1vZrke?utm_source=draftshieldweb&utm_medium=referral&utm_campaign=launch";

export const HOME_DEPOT_URL = `${HD_BASE}&utm_content=general`;

export interface Sku {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  width: string;
  depth: string;
  length: string;
  lengthFt: number;
  totalFt?: string;
  tagline: string;
  body: string;
  badge?: string;
  /** Optional packaging mockup URL. Falls back to IMG.product when absent. */
  image?: string;
  whereFits: { location: string; detail: string }[];
  relatedSlugs: string[];
  hdLink: string;
  jsonLdDescription: string;
}

export const SKUS: Sku[] = [
  {
    slug: "universal",
    name: "DraftShield Universal Roll",
    shortName: "Universal Roll",
    eyebrow: "THE FLAGSHIP SIZE",
    width: '3/8"',
    depth: '1/4"',
    length: "17 ft",
    lengthFt: 17,
    tagline: "The size that fits most.",
    body: "If you're new to DraftShield, this is the one to start with — engineered to compress and seal across the widest range of household gaps. Windows, door jambs, AC units, attic hatches.",
    badge: "Start Here",
    image: "/photos/package-universal.png",
    whereFits: [
      {
        location: "Windows",
        detail: "Single-hung, double-hung, casement, and picture window perimeters",
      },
      {
        location: "Door jambs & tops",
        detail: "Standard interior and exterior door frames (not door bottoms — those need a sweep)",
      },
      {
        location: "AC units",
        detail: "Around window-mounted AC units to seal the perimeter between unit and window frame",
      },
      {
        location: "Attic hatches",
        detail: "Pull-down attic stairs and access panels",
      },
    ],
    relatedSlugs: ["narrow", "standard", "wide", "multi-pack"],
    hdLink: `${HD_BASE}&utm_content=universal`,
    jsonLdDescription:
      'Premium adhesive-backed foam weatherstrip, 3/8" × 1/4" × 17 ft. Engineered for windows, door jambs, AC units, and attic hatches.',
  },
  {
    slug: "narrow",
    name: "DraftShield Narrow",
    shortName: "Narrow",
    eyebrow: "FOR TIGHT GAPS",
    width: '1/4"',
    depth: '3/16"',
    length: "17 ft",
    lengthFt: 17,
    tagline: "The smallest profile in the line.",
    body: "Built for tight window sashes, narrow door frames, and any gap under 1/4\". Where Universal is too thick, Narrow fits.",
    whereFits: [
      {
        location: "Window sashes",
        detail: "Between sash and rail on tight-fitting windows",
      },
      {
        location: "Narrow door frames",
        detail: "Frames where the Universal Roll is too thick",
      },
      {
        location: "Refrigerator gaskets",
        detail: "Supplementing loose but intact gaskets",
      },
      { location: "RV & camper", detail: "Doors and windows in mobile applications" },
    ],
    relatedSlugs: ["universal", "standard", "wide", "multi-pack"],
    hdLink: `${HD_BASE}&utm_content=narrow`,
    jsonLdDescription:
      'Premium adhesive-backed foam weatherstrip, 1/4" × 3/16" × 17 ft. Built for tight window sashes, narrow door frames, and gaps under 1/4".',
  },
  {
    slug: "standard",
    name: "DraftShield Standard",
    shortName: "Standard",
    eyebrow: "THE STANDALONE STANDARD",
    width: '3/8"',
    depth: '1/4"',
    length: "17 ft",
    lengthFt: 17,
    tagline: "Same dimensions as Universal Roll.",
    body: "Sold standalone for repeat buyers who already know this size fits their home, or for buyers who want to stock up without the multi-pack format.",
    whereFits: [
      {
        location: "Windows",
        detail: "Same applications as Universal Roll — frames, sashes, perimeters",
      },
      {
        location: "Door jambs & tops",
        detail: "Standard interior and exterior door frames",
      },
      {
        location: "AC units",
        detail: "Window-mounted AC unit perimeters",
      },
      {
        location: "Attic hatches",
        detail: "Pull-down attic stairs and access panels",
      },
    ],
    relatedSlugs: ["universal", "narrow", "wide", "multi-pack"],
    hdLink: `${HD_BASE}&utm_content=standard`,
    jsonLdDescription:
      'Premium adhesive-backed foam weatherstrip, 3/8" × 1/4" × 17 ft. Same dimensions as Universal Roll, sold standalone for repeat buyers.',
  },
  {
    slug: "wide",
    name: "DraftShield Wide",
    shortName: "Wide",
    eyebrow: "FOR LARGER GAPS",
    width: '1/2"',
    depth: '3/8"',
    length: "17 ft",
    lengthFt: 17,
    tagline: "The widest profile in the line.",
    body: "Built for door jambs with extra clearance, garage door side perimeters, and attic hatches that don't close flush. Where Universal is too thin, Wide closes the gap.",
    whereFits: [
      {
        location: "Garage door perimeters",
        detail: "Sides and top of garage door openings",
      },
      {
        location: "Oversized door jambs",
        detail: "Door frames with wider-than-standard clearance",
      },
      {
        location: "Attic hatches",
        detail: "Hatches with significant gap that don't close flush",
      },
      {
        location: "Garage-to-house doors",
        detail: "Pedestrian doors between garage and living space",
      },
    ],
    relatedSlugs: ["universal", "narrow", "standard", "multi-pack"],
    hdLink: `${HD_BASE}&utm_content=wide`,
    jsonLdDescription:
      'Premium adhesive-backed foam weatherstrip, 1/2" × 3/8" × 17 ft. Built for garage door perimeters, oversized door jambs, and larger gaps.',
  },
  {
    slug: "multi-pack",
    name: "DraftShield Multi-Pack",
    shortName: "Multi-Pack",
    eyebrow: "FOR WHOLE-HOUSE PROJECTS",
    width: '3/8"',
    depth: '1/4"',
    length: "17 ft per roll",
    lengthFt: 51,
    totalFt: "51 ft total",
    tagline: "Three Standard rolls in one package.",
    body: "For whole-house weatherization, multi-window projects, or homeowners who want to keep extra stock. Priced below buying three rolls individually.",
    badge: "Best Value",
    whereFits: [
      {
        location: "Whole-house weatherization",
        detail: "Multiple windows and doors in a single project",
      },
      {
        location: "Multi-window projects",
        detail: "Enough footage for an entire floor of windows",
      },
      {
        location: "Property managers",
        detail: "Stocking multiple units or rental properties",
      },
      {
        location: "Contractors",
        detail: "Pre-staging a weatherization job site",
      },
    ],
    relatedSlugs: ["universal", "narrow", "standard", "wide"],
    hdLink: `${HD_BASE}&utm_content=multi-pack`,
    jsonLdDescription:
      "DraftShield Multi-Pack — 3× Standard rolls, 51 ft total. For whole-house weatherization projects. Premium adhesive-backed foam weatherstrip.",
  },
];

export const SKU_MAP = Object.fromEntries(SKUS.map((s) => [s.slug, s]));

export interface Application {
  id: string;
  icon: string;
  label: string;
  shortLabel: string;
  eyebrow: string;
  headline: string;
  body: string;
  recommendedSize: string;
  recommendedSlug: string;
  isPrimary: boolean;
}

export const APPLICATIONS: Application[] = [
  {
    id: "windows",
    icon: "RectangleHorizontal",
    label: "Windows",
    shortLabel: "Windows",
    eyebrow: "PRIMARY APPLICATION",
    headline: "Windows",
    body: "The primary use case. DraftShield seals around window frames, along sashes, and at the meeting rail between upper and lower sashes on double-hung windows. Universal Roll fits most modern windows; Narrow handles tight sash gaps.",
    recommendedSize: "Universal Roll (most windows) · Narrow (tight sashes)",
    recommendedSlug: "universal",
    isPrimary: true,
  },
  {
    id: "doors",
    icon: "DoorClosed",
    label: "Door jambs & tops",
    shortLabel: "Doors",
    eyebrow: "SECONDARY APPLICATION",
    headline: "Door jambs and tops",
    body: "DraftShield seals the jamb and head of exterior doors — the three sides of the door frame where the door closes against the stop. Not the door bottom: that gap requires a door sweep, which is a separate Columbia product.",
    recommendedSize: "Universal Roll (standard jambs) · Wide (wider clearance)",
    recommendedSlug: "universal",
    isPrimary: false,
  },
  {
    id: "garage",
    icon: "Warehouse",
    label: "Garage door perimeters",
    shortLabel: "Garage",
    eyebrow: "SECONDARY APPLICATION",
    headline: "Garage door perimeters",
    body: "The sides and top of a garage door opening are often unsealed or sealed with degraded rubber. DraftShield Wide handles the larger gaps typical of garage door frames. Not the bottom seal — that requires a dedicated garage door bottom seal.",
    recommendedSize: "Wide (most garage perimeters)",
    recommendedSlug: "wide",
    isPrimary: false,
  },
  {
    id: "ac",
    icon: "AirVent",
    label: "AC units",
    shortLabel: "AC Units",
    eyebrow: "SECONDARY APPLICATION",
    headline: "Window-mounted AC units",
    body: "Window AC units rarely seal cleanly against the window opening. DraftShield wraps the perimeter where the AC chassis meets the window frame, blocking the gap that lets conditioned air escape. Best practice: install before placing the AC unit.",
    recommendedSize: "Universal Roll",
    recommendedSlug: "universal",
    isPrimary: false,
  },
  {
    id: "attic",
    icon: "ChevronUp",
    label: "Attic hatches",
    shortLabel: "Attic",
    eyebrow: "SECONDARY APPLICATION",
    headline: "Attic hatches and pull-down stairs",
    body: "Pull-down attic stairs and access panels are major sources of heat loss — they're typically un-insulated and they seal poorly. DraftShield along the perimeter of the panel where it meets the frame creates a compression seal when the panel is closed.",
    recommendedSize: "Universal Roll (most) · Wide (hatches that don't close tight)",
    recommendedSlug: "universal",
    isPrimary: false,
  },
];

export const SHARED_SPECS = [
  { label: "Foam material", value: "Closed-cell polyurethane" },
  { label: "Reinforcement", value: "Internal glass-fiber cord" },
  { label: "Outer skin", value: "UV-stabilized polyethylene" },
  { label: "Adhesive", value: "Premium acrylic, –40°F to +220°F service" },
  { label: "Service life", value: "5 years (warranted)" },
  { label: "Recommended install temp", value: "50°F+ (operates correctly down to 20°F)" },
  { label: "Tools required", value: "Scissors or utility knife" },
  { label: "Made in", value: "Corona, California, USA" },
];

export const CONSTRUCTION_LAYERS = [
  {
    num: "01",
    label: "Closed-cell polyurethane foam core",
    detail: "Compresses, recovers, and seals — without absorbing moisture, freezing, or tearing.",
  },
  {
    num: "02",
    label: "Internal glass-fiber cord",
    detail: "Prevents stretch and sag over years of compression cycles.",
  },
  {
    num: "03",
    label: "UV-stabilized polyethylene outer skin",
    detail: "Resists ultraviolet degradation, extending outdoor service life to 5+ winters.",
  },
  {
    num: "04",
    label: "Premium acrylic adhesive backing",
    detail: "–40°F to +220°F service range. Bonds to PVC, aluminum, painted wood, and powder-coated metals.",
  },
  {
    num: "05",
    label: "Removable release liner",
    detail: "Split-back peel for faster install — no fumbling with the backing.",
  },
];

export const TRUST_MARKS = [
  { label: "Made in USA", sub: "Corona, CA" },
  { label: "Since 1947", sub: "78 years of precision" },
  { label: "5-Year Guarantee", sub: "Zero drafts or we fix it" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Installed the Universal Roll on our front windows last November. First winter in 12 years I didn't feel a cold draft in the living room.",
    author: "Michael T.",
    location: "Minneapolis, MN",
    stars: 5,
  },
  {
    quote:
      "The Wide size was exactly right for our garage door perimeter. Sealed up in 30 minutes and the difference was immediate.",
    author: "Sandra K.",
    location: "Denver, CO",
    stars: 5,
  },
  {
    quote:
      "I was skeptical about the savings claims, but my gas bill dropped noticeably after sealing all the windows with the Multi-Pack.",
    author: "James R.",
    location: "Chicago, IL",
    stars: 5,
  },
];

export const SCIENCE_FACTS = [
  {
    stat: "−40°F",
    label: "Cold-weather bond",
    detail: "Acrylic adhesive holds in the kind of cold installs that make standard foam tape peel off by January.",
  },
  {
    stat: "5 winters",
    label: "Engineered service life",
    detail: "Closed-cell foam, UV-stabilized skin, and a glass-fiber cord built to seal for five winters straight.",
  },
  {
    stat: "30%",
    label: "Heating & cooling savings",
    detail: "Sealing air leaks can cut up to 30% of your heating and cooling costs, per ENERGY STAR.",
  },
  {
    stat: "15 min",
    label: "Average install time",
    detail: "From measuring to pressed in place. Scissors only — no drill, no screws, no special skills.",
  },
];

export const CLIMATE_ZONES: Record<string, { zone: string; label: string; recommended: string[] }> = {
  "0": { zone: "1", label: "Very Hot–Humid", recommended: ["universal", "narrow"] },
  "1": { zone: "1", label: "Very Hot–Humid", recommended: ["universal", "narrow"] },
  "2": { zone: "2", label: "Hot–Humid", recommended: ["universal", "narrow"] },
  "3": { zone: "2", label: "Hot–Dry", recommended: ["universal", "standard"] },
  "4": { zone: "3", label: "Warm–Humid", recommended: ["universal", "standard"] },
  "5": { zone: "3", label: "Warm–Dry", recommended: ["universal", "standard"] },
  "6": { zone: "4", label: "Mixed–Humid", recommended: ["universal", "wide"] },
  "7": { zone: "4", label: "Mixed–Dry", recommended: ["universal", "wide"] },
  "8": { zone: "5", label: "Cold", recommended: ["wide", "multi-pack"] },
  "9": { zone: "5", label: "Cold", recommended: ["wide", "multi-pack"] },
};

export function getZoneFromZip(zip: string) {
  const prefix = zip.charAt(0);
  return CLIMATE_ZONES[prefix] ?? { zone: "4", label: "Mixed", recommended: ["universal", "wide"] };
}

const CLIMATE_MULTIPLIER: Record<string, number> = {
  "1": 0.85,
  "2": 0.95,
  "3": 1.0,
  "4": 1.15,
  "5": 1.35,
};

export function calculateSavings(
  homeSqFt: number,
  weatherstripAge: number,
  climateZone: string = "3"
) {
  const baseAnnualHvac = homeSqFt * 1.3;
  const leakLossPct = Math.min(0.05 + (weatherstripAge / 20) * 0.1, 0.15);
  const climateFactor = CLIMATE_MULTIPLIER[climateZone] ?? 1.0;
  const annualSavings = Math.round(baseAnnualHvac * leakLossPct * climateFactor);
  const fiveYear = annualSavings * 5;
  const taxCredit = Math.min(Math.round(homeSqFt * 0.04), 1200);
  return { annualSavings, fiveYear, taxCredit };
}

export function recommendSkuFromSizingGuide(
  application: string,
  gapSize: string,
  frequency: string
): string {
  if (application === "multiple") return "multi-pack";
  if (gapSize === "tight") return "narrow";
  if (gapSize === "larger") return "wide";
  if (gapSize === "variable") return "multi-pack";
  // Standard gap — prefer Wide one step up for daily-use openings
  if (frequency === "daily" && application === "doors") return "wide";
  return "universal";
}

export const FAQ_CATEGORIES = [
  {
    category: "About the product",
    questions: [
      {
        q: "What is DraftShield made of?",
        a: "DraftShield is a closed-cell polyurethane foam weatherstrip with an internal glass-fiber cord, UV-stabilized polyethylene outer skin, and a premium acrylic adhesive backing rated from –40°F to +220°F. Every component is an upgrade over the open-cell foam and rubber-based adhesive used in standard foam tape.",
      },
      {
        q: "How does DraftShield differ from foam tape at Home Depot?",
        a: "Standard foam tape uses open-cell foam (which absorbs moisture and tears) and rubber-based adhesive (which fails below 50°F). DraftShield uses closed-cell foam that holds its shape across freeze-thaw cycles, and premium acrylic adhesive that bonds reliably even in cold installs — down to 20°F.",
      },
      {
        q: "Is DraftShield available in different colors?",
        a: "DraftShield is currently available in its natural foam color. Additional color options are under consideration for future releases.",
      },
      {
        q: "Where is DraftShield manufactured?",
        a: "DraftShield is manufactured in Corona, California, USA by Columbia Aluminum Products — the same facility that has produced precision aluminum building products since 1947.",
      },
      {
        q: "Is the foam fire-resistant?",
        a: "DraftShield meets standard residential fire safety requirements. For specific fire-rating documentation, contact tech@draftshield.com.",
      },
    ],
  },
  {
    category: "Sizing & application",
    questions: [
      {
        q: "Which size do I need for windows?",
        a: 'Start with the Universal Roll (3/8" × 1/4"). It fits the majority of window frames and sashes. If your sash gap is very tight — light shows through but a finger won\'t fit — try the Narrow (1/4" × 3/16"). Use the Sizing Guide for a personalized recommendation.',
      },
      {
        q: "Can I use DraftShield on door bottoms?",
        a: "No. Door bottoms require a door sweep — a different product type that bridges the gap between the door and the threshold. DraftShield is designed for door jambs (the sides and top) and window applications. Columbia's Door Products division makes door sweeps separately.",
      },
      {
        q: "Will DraftShield work on a garage door bottom?",
        a: "No. Garage door bottoms need a dedicated garage door bottom seal. DraftShield is designed for the sides and top of the garage door opening — the perimeter frame, not the bottom.",
      },
      {
        q: "Can I use DraftShield on a sliding glass door?",
        a: "Yes, on the frame and jamb. DraftShield can seal the perimeter of a sliding glass door frame. It is not suitable for the sliding track or the meeting stile between the panels.",
      },
      {
        q: "What if my gap is larger than 5/8\"?",
        a: "DraftShield Wide (1/2\" × 3/8\") handles gaps up to about 5/8\". For larger gaps, you may need a different product type — contact support@draftshield.com and we'll point you to the right solution.",
      },
    ],
  },
  {
    category: "Installation",
    questions: [
      {
        q: "How long does a window install take?",
        a: "A standard window takes about 20 minutes. A full house of windows can typically be done in an afternoon.",
      },
      {
        q: "What temperature do I need to install in?",
        a: "We recommend installing at 50°F or above for best adhesive bond strength. DraftShield's acrylic adhesive will bond down to 20°F — significantly better than standard rubber-based adhesives — but warmer is always better for initial bond formation.",
      },
      {
        q: "What tools do I need?",
        a: "Scissors or a utility knife to cut to length. That's it. No special tools required.",
      },
      {
        q: "Do I need to remove old weatherstripping first?",
        a: "Yes. Remove all old foam tape or weatherstripping before installing DraftShield. Clean the surface with rubbing alcohol and let it dry completely before applying.",
      },
      {
        q: "Can I install DraftShield on a PVC window?",
        a: "Yes. DraftShield's premium acrylic adhesive is specifically formulated to bond to low-surface-energy (LSE) substrates like PVC, vinyl, and powder-coated aluminum — the materials most modern windows are made from.",
      },
    ],
  },
  {
    category: "Guarantee",
    questions: [
      {
        q: "How does the 5-year guarantee work?",
        a: "Every DraftShield roll comes with a written 5-year performance guarantee. If the seal fails during normal residential service within five years of purchase, we replace the roll and refund the original purchase price.",
      },
      {
        q: "What's covered? What's not?",
        a: "Covered: material failure (foam degradation, adhesive bond loss, compression set), UV degradation, and manufacturing defects. Not covered: damage from animals, vandalism, or accidents; installation outside recommended temperature range; commercial or industrial use; cosmetic discoloration that doesn't affect seal performance.",
      },
      {
        q: "How do I file a guarantee claim?",
        a: "Email guarantee@draftshield.com with your original receipt, photos of the failure, and a brief description of the installation. We respond within 5 business days.",
      },
      {
        q: "Do I need to save my receipt?",
        a: "Yes. Keep your Home Depot receipt or order confirmation. A digital photo is fine.",
      },
      {
        q: "Does the guarantee transfer if I sell my home?",
        a: "The guarantee is tied to the original purchaser. It does not automatically transfer to a new homeowner, but contact us — we handle these situations case by case.",
      },
    ],
  },
  {
    category: "Tax credits",
    questions: [
      {
        q: "Does DraftShield qualify for the IRA tax credit?",
        a: "DraftShield weatherstripping may qualify for the IRA Section 25C tax credit (30% of cost, up to $1,200/year for weatherization). Consult a tax professional to confirm eligibility for your specific situation.",
      },
      {
        q: "How do I claim the Section 25C credit?",
        a: "File IRS Form 5695 with your federal tax return. Keep your receipt and the product's specification sheet as documentation.",
      },
      {
        q: "How much do I get back?",
        a: "The credit is 30% of the purchase price of qualifying weatherization products, up to $1,200 per year across all weatherization improvements. Use our Savings Calculator for a personalized estimate.",
      },
    ],
  },
];
