/**
 * Single source of truth for all site copy.
 *
 * Direct, typed transcription of CONTENT.md — do not paraphrase, shorten,
 * or add claims that are not present there. If copy changes, update
 * CONTENT.md first, then mirror it here.
 *
 * Image slots use on-brand placehold.co URLs until real assets land in
 * public/images/ (see CLAUDE.md → "Image & Asset Handling"). Swapping in a
 * real photo is a one-line `src` change here.
 */

export interface ImageSlot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  tagline: string;
  items: string[];
  image: ImageSlot;
}

export interface HomeContent {
  hero: { image: ImageSlot };
  about: { heading: string; body: string; image: ImageSlot };
  vision: { heading: string; body: string };
  mission: { heading: string; items: string[] };
  whatWeBuild: { heading: string; items: string[] };
  zenModel: {
    heading: string;
    steps: string[];
    tagline: string;
    image: ImageSlot;
  };
  goals2030: { heading: string; stats: Stat[] };
}

export interface ProductsContent {
  intro: { eyebrow: string; heading: string; body: string };
  categories: ProductCategory[];
  zenSolutions: { heading: string; intro: string; items: string[] };
  whyChooseZen: { heading: string; items: string[] };
}

export interface GlobalContent {
  siteName: string;
  taglines: { main: string; sub: string };
  /** Verbatim first two sentences of "About Us" — used as the default meta description. */
  metaDescription: string;
  joinTheJourney: { heading: string; body: string };
  contact: { heading: string; email: string; phone: string; phoneHref: string };
  /** Derived from the "Join the Journey" sentence — options for the inquiry form's audience select. */
  audiences: string[];
  logo: ImageSlot;
  contactImage: ImageSlot;
}

export const globalContent: GlobalContent = {
  siteName: "Zen Enterprises",
  taglines: {
    main: "From Home to Enterprise.",
    sub: "Start small. Grow together. Create impact.",
  },
  metaDescription:
    "Zen Enterprises is a social enterprise committed to promoting inclusive entrepreneurship and sustainable livelihood development. We focus on creating affordable, technology-driven business opportunities that can be started with minimal investment, particularly for women and rural households.",
  joinTheJourney: {
    heading: "Join the Journey",
    body: "Whether you're an aspiring entrepreneur, mentor, investor, CSR partner, or institution, Zen Enterprises invites you to build the future of inclusive entrepreneurship with us.",
  },
  contact: {
    heading: "Contact",
    email: "zen.enterprises11@gmail.com",
    phone: "+91 75885 70274",
    phoneHref: "tel:+917588570274",
  },
  audiences: [
    "Aspiring entrepreneur",
    "Mentor",
    "Investor",
    "CSR partner",
    "Institution",
  ],
  logo: {
    src: "https://placehold.co/320x96/5F7A52/F6F1E4?text=Logo",
    alt: "Zen Enterprises logo (placeholder)",
    width: 320,
    height: 96,
  },
  contactImage: {
    src: "https://placehold.co/800x600/5F7A52/F6F1E4?text=Join+the+Journey",
    alt: "Placeholder for a photo representing joining the Zen Enterprises journey",
    width: 800,
    height: 600,
  },
};

export const homeContent: HomeContent = {
  hero: {
    image: {
      src: "https://placehold.co/1200x800/C1682F/F6F1E4?text=Hero+Entrepreneur+at+Work",
      alt: "Placeholder for the hero photo of an entrepreneur at work",
      width: 1200,
      height: 800,
    },
  },
  about: {
    heading: "About Us",
    body: "Zen Enterprises is a social enterprise committed to promoting inclusive entrepreneurship and sustainable livelihood development. We focus on creating affordable, technology-driven business opportunities that can be started with minimal investment, particularly for women and rural households. Our approach combines innovation, capacity building, market access, and business mentoring to help entrepreneurs establish successful enterprises from their homes or local communities.",
    image: {
      src: "https://placehold.co/800x600/5F7A52/F6F1E4?text=About+Community+Training",
      alt: "Placeholder for a photo of community training with Zen Enterprises",
      width: 800,
      height: 600,
    },
  },
  vision: {
    heading: "Our Vision",
    body: "To create a network of self-reliant entrepreneurs who generate sustainable livelihoods while contributing to environmentally responsible and inclusive economic development.",
  },
  mission: {
    heading: "Our Mission",
    items: [
      "Promote women/rural youth-led entrepreneurship.",
      "Support home-based and micro-enterprises.",
      "Develop sustainable business models using local resources.",
      "Provide access to technology, training, and markets.",
      "Enable financial inclusion and enterprise growth.",
      "Foster green and circular economy businesses.",
    ],
  },
  whatWeBuild: {
    heading: "What We Build",
    items: [
      "Home-based businesses",
      "Women-led enterprises",
      "Rural manufacturing units",
      "Green and circular economy ventures",
      "Digital micro-enterprises",
    ],
  },
  zenModel: {
    heading: "The Zen Model",
    steps: ["Identify", "Train", "Launch", "Market", "Scale"],
    tagline: "We don't just train people — we help them start earning.",
    image: {
      src: "https://placehold.co/1200x600/D9A441/241C12?text=Zen+Model+Identify+to+Scale",
      alt: "Placeholder for an illustration of the Zen Model, from Identify to Scale",
      width: 1200,
      height: 600,
    },
  },
  goals2030: {
    heading: "Aims to Achieve by 2030",
    stats: [
      { value: "10,000+", label: "women entrepreneurs" },
      { value: "2,000+", label: "home enterprises" },
      { value: "25,000+", label: "sustainable livelihoods" },
      { value: "500+", label: "green businesses" },
    ],
  },
};

export const productsContent: ProductsContent = {
  intro: {
    eyebrow: "Product Showcase",
    heading: "Business Opportunities Designed for Every Home",
    body: "At Zen Enterprises, we don't just sell products—we create businesses. Our portfolio features affordable, market-driven enterprise models that enable women, youth, SHGs, FPOs, and rural entrepreneurs to start, grow, and scale sustainable livelihoods.",
  },
  categories: [
    {
      id: "agri-food",
      name: "Agri & Food Enterprises",
      tagline: "Turn locally available produce into value-added products.",
      items: [
        "Millet-based health foods",
        "Ready-to-cook mixes",
        "Spice grinding & packaging",
        "Pickles, chutneys, Papad & sauces",
        "Dehydrated fruits & vegetables",
        "Cold-pressed oils",
        "Herbal teas & nutraceuticals",
        "Bakery products",
      ],
      image: {
        src: "https://placehold.co/800x600/5F7A52/F6F1E4?text=Millet+Foods+and+Pickles",
        alt: "Placeholder for a photo of millet foods and pickles — Agri & Food Enterprises",
        width: 800,
        height: 600,
      },
    },
    {
      id: "green-circular",
      name: "Green & Circular Economy Products",
      tagline: "Convert agricultural waste into profitable green businesses.",
      items: [
        "Biochar",
        "Organic compost & vermicompost",
        "Biomass briquettes & pellets",
        "Mushroom growing kits",
        "Biodegradable packaging",
        "Eco-friendly tableware",
        "Natural fibre products",
      ],
      image: {
        src: "https://placehold.co/800x600/C1682F/F6F1E4?text=Compost+and+Biochar",
        alt: "Placeholder for a photo of compost and biochar — Green & Circular Economy Products",
        width: 800,
        height: 600,
      },
    },
    {
      id: "natural-wellness",
      name: "Natural Wellness & Personal Care",
      tagline: "Create premium products using herbal and natural ingredients.",
      items: [
        "Handmade soaps",
        "Herbal cosmetics",
        "Essential oils",
        "Ayurvedic wellness products",
        "Herbal cleaners",
        "Natural candles",
        "Eco-friendly home care products",
      ],
      image: {
        src: "https://placehold.co/800x600/5F7A52/F6F1E4?text=Handmade+Soaps",
        alt: "Placeholder for a photo of handmade soaps — Natural Wellness & Personal Care",
        width: 800,
        height: 600,
      },
    },
    {
      id: "horticulture-nursery",
      name: "Horticulture & Nursery Enterprises",
      tagline:
        "Build profitable enterprises around plants and protected cultivation.",
      items: [
        "Vegetable seedlings",
        "Fruit plant nurseries",
        "Ornamental plants",
        "Kitchen garden kits",
        "Medicinal & aromatic plants",
        "Flower production",
        "Protected cultivation solutions",
      ],
      image: {
        src: "https://placehold.co/800x600/C1682F/F6F1E4?text=Nursery+Seedlings",
        alt: "Placeholder for a photo of nursery seedlings — Horticulture & Nursery Enterprises",
        width: 800,
        height: 600,
      },
    },
    {
      id: "home-manufacturing",
      name: "Home-Based Manufacturing",
      tagline: "Low-investment businesses with strong market demand.",
      items: [
        "Tailoring & apparel",
        "Handicrafts",
        "Bamboo & cane products",
        "Handmade gift items",
        "Fabric bags",
        "Decorative home products",
        "Customized packaging",
      ],
      image: {
        src: "https://placehold.co/800x600/5F7A52/F6F1E4?text=Tailoring+and+Handicrafts",
        alt: "Placeholder for a photo of tailoring and handicrafts — Home-Based Manufacturing",
        width: 800,
        height: 600,
      },
    },
    {
      id: "digital-services",
      name: "Digital & Service Enterprises",
      tagline: "Opportunities for entrepreneurs with minimal infrastructure.",
      items: [
        "Digital marketing services",
        "E-commerce support",
        "Social media management",
        "Graphic design",
        "Online business assistance",
        "Digital documentation",
        "Rural BPO services",
        "Business registration support",
      ],
      image: {
        src: "https://placehold.co/800x600/C1682F/F6F1E4?text=Digital+Services",
        alt: "Placeholder for a photo of digital services in action — Digital & Service Enterprises",
        width: 800,
        height: 600,
      },
    },
  ],
  zenSolutions: {
    heading: "Zen Solutions",
    intro:
      "Zen Enterprises provides complete support to transform ideas into successful businesses.",
    items: [
      "Business Opportunity Identification",
      "Project Reports & DPR Preparation",
      "Entrepreneurship Development Programmes (EDPs)",
      "Technology Transfer",
      "Product Development",
      "Branding & Packaging",
      "Market Linkages",
      "Business Mentoring",
      "Investment Readiness",
      "Scale-up Support",
    ],
  },
  whyChooseZen: {
    heading: "Why to Choose Zen?",
    items: [
      "Low Investment",
      "Easy to Start",
      "Home-Based Operations",
      "Women-Friendly",
      "Eco-Friendly & Sustainable",
      "Market-Driven Products",
      "Technical & Business Support",
      "Designed for Growth",
    ],
  },
};
