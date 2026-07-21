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

/** E-commerce platforms Zen brand products are listed on. */
export type MarketplacePlatform = 'Amazon.in' | 'Meesho';

export interface ProductListing {
  /** Product title (concise — the brand name is shown separately on the card). */
  title: string;
  /** One-line factual descriptor of the product. */
  description?: string;
  /** Current selling price as shown on the listing, e.g. "₹199". May go stale. */
  price?: string;
  /** Struck-through MRP, e.g. "₹500". Rendered only when price is also set. */
  mrp?: string;
  platform: MarketplacePlatform;
  /** Deep link to the live listing on the retailer's site. */
  url: string;
  image: ImageSlot;
}

export interface Brand {
  id: string;
  name: string;
  /** Short brand descriptor. Keep factual — no invented claims. */
  blurb: string;
  logo: ImageSlot;
  platforms: MarketplacePlatform[];
  listings: ProductListing[];
}

export interface CatalogueItem {
  /** Product name as supplied in the client's catalogue. */
  name: string;
  image: ImageSlot;
}

export interface ShopContent {
  eyebrow: string;
  heading: string;
  intro: string;
  /** Note explaining links open on the retailer's site (no iframe embedding allowed). */
  disclosure: string;
  brands: Brand[];
  catalogue: { heading: string; intro: string; items: CatalogueItem[] };
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
  /** Full logo lockup (mark + wordmark + tagline) — footer. */
  logoFull: ImageSlot;
  /** Square logo mark (no text) — nav bar; also the favicon source (app/icon.png). */
  logoMark: ImageSlot;
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
  logoFull: {
    src: "/images/logo-full.jpg",
    alt: "Zen Enterprises logo — a home cradled in a hand, with the tagline Building Trust. Creating Value. Enriching Lives.",
    width: 800,
    height: 640,
  },
  logoMark: {
    src: "/images/logo-mark.png",
    alt: "Zen Enterprises logo mark — a gold Z inside a home cradled in a hand",
    width: 256,
    height: 256,
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

/**
 * "Shop Online" — Zen brand products already live on e-commerce marketplaces.
 * Amazon.in and Meesho forbid iframe embedding (X-Frame-Options), so listings
 * render as rich link cards that open on the retailer's site rather than true
 * inline embeds. Product titles/images are placeholders until the client
 * confirms exact listings; only the provided deep link is real.
 */
export const shopContent: ShopContent = {
  eyebrow: "Shop Online",
  heading: "Zen Brands on E-commerce",
  intro:
    "Products from Zen Enterprises brands are already available on leading e-commerce platforms. Explore them under their respective brands and shop directly on Amazon.in and Meesho.",
  disclosure: "Links open the live listing on the retailer's website.",
  brands: [
    {
      id: "ceramix",
      name: "Ceramix",
      blurb:
        "A Zen Enterprises brand of concrete home-décor and organizers, available on Amazon.in and Meesho.",
      logo: {
        src: "/images/brands/ceramix-logo.png",
        alt: "Ceramix logo",
        width: 375,
        height: 100,
      },
      platforms: ["Amazon.in", "Meesho"],
      listings: [
        {
          title: "Concrete Striped Round Jar",
          description:
            "Multipurpose concrete jar — jewellery, makeup & table organizer and home-décor accessory.",
          price: "₹199",
          mrp: "₹500",
          platform: "Amazon.in",
          url: "https://amzn.in/d/0edN1CSz",
          image: {
            src: "/images/catalogue/cement-jars.jpg",
            alt: "Ceramix cement jars with fluted lids in cream, terracotta, ochre, sage and grey, styled with a flower pot and coaster",
            width: 913,
            height: 1024,
          },
        },
      ],
    },
    {
      id: "aura",
      name: "Aura",
      blurb: "Scented soaps and candles — a Zen Enterprises brand.",
      logo: {
        src: "/images/brands/aura-logo.jpg",
        alt: "Aura logo — a sun in a leaf wreath, for scented soaps and candles",
        width: 1024,
        height: 559,
      },
      platforms: [],
      listings: [],
    },
    {
      id: "drynova",
      name: "DryNova",
      blurb: "Premium dehydrated produce — a Zen Enterprises brand.",
      logo: {
        src: "/images/brands/drynova-logo.png",
        alt: "DryNova logo — premium dehydrated produce",
        width: 921,
        height: 329,
      },
      platforms: [],
      listings: [],
    },
    {
      id: "resora",
      name: "Resora",
      blurb: "Handmade elegance — a Zen Enterprises brand.",
      logo: {
        src: "/images/brands/resora-logo.jpg",
        alt: "Resora logo — handmade elegance",
        width: 800,
        height: 800,
      },
      platforms: [],
      listings: [],
    },
  ],
  catalogue: {
    heading: "Product Catalogue",
    intro: "Photos from the Zen Enterprises product catalogue.",
    items: [
      {
        name: "Cement Jars",
        image: {
          src: "/images/catalogue/cement-jars.jpg",
          alt: "Cement jars with fluted lids in cream, terracotta, ochre, sage and grey",
          width: 913,
          height: 1024,
        },
      },
      {
        name: "Cement Jar Scented Candle",
        image: {
          src: "/images/catalogue/cement-jar-scented-candle.jpg",
          alt: "Scented candle poured in a cement jar",
          width: 1024,
          height: 576,
        },
      },
      {
        name: "Candle Holders",
        image: {
          src: "/images/catalogue/candle-holders.jpg",
          alt: "Cement candle holders from the Zen product catalogue",
          width: 1024,
          height: 576,
        },
      },
      {
        name: "Scented Candle",
        image: {
          src: "/images/catalogue/scented-candle.jpg",
          alt: "Lit scented candle in a cement holder with dripping yellow wax",
          width: 1024,
          height: 576,
        },
      },
      {
        name: "Custom Photo Coasters",
        image: {
          src: "/images/catalogue/custom-photo-coasters.jpg",
          alt: "Custom photo coaster with a gold-flecked resin border on a display stand",
          width: 931,
          height: 1024,
        },
      },
      {
        name: "Cement Jar Flower Pot",
        image: {
          src: "/images/catalogue/cement-jar-flower-pot.jpg",
          alt: "Cement jar styled as a flower pot decoration",
          width: 1024,
          height: 576,
        },
      },
      {
        name: "Cement Jar Pencil Holder",
        image: {
          src: "/images/catalogue/cement-jar-pencil-holder.jpg",
          alt: "Cement jar pencil holder on a desk",
          width: 1024,
          height: 576,
        },
      },
      {
        name: "Plastic Jars",
        image: {
          src: "/images/catalogue/plastic-jars.jpg",
          alt: "Colourful decorative plastic jars with labels, used as organizers",
          width: 1024,
          height: 659,
        },
      },
    ],
  },
};
