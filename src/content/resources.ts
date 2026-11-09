export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: "Fundamentals" | "Comparison" | "Engineering Design" | "Maintenance & Operations";
  readTime: string;
  publishDate: string;
  summary: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string[];
  }[];
}

export const ARTICLES: ResourceArticle[] = [
  {
    id: "what-is-a-heat-exchanger",
    slug: "what-is-a-heat-exchanger",
    title: "What Is an Industrial Heat Exchanger? Principles, Types & Selection Criteria",
    category: "Fundamentals",
    readTime: "7 min read",
    publishDate: "2026-10-15",
    summary: "A comprehensive guide to industrial heat transfer equipment, explaining fundamental thermodynamics, major mechanical configurations, and key factors for procurement engineers.",
    keyTakeaways: [
      "Heat exchangers transfer thermal energy between fluids without mixing them.",
      "The primary mechanism relies on Fourier's Law of Conduction and Newton's Law of Cooling.",
      "Key equipment selection factors include fluid chemistry, operating pressure, temperature, fouling tendency, and allowable pressure drop."
    ],
    contentSections: [
      {
        heading: "Introduction to Industrial Heat Transfer",
        body: [
          "In modern chemical processing, oil refining, power generation, and food manufacturing, thermal energy management directly dictates operational efficiency and product quality. A heat exchanger is a specialized mechanical device designed to transfer heat between two or more fluids—liquids, vapors, or gases—at different temperatures, without allowing them to mix.",
          "Whether cooling a hot reaction stream, condensing exhaust steam from a turbine, or pasteurizing milk, heat exchangers prevent energy waste by capturing and recycling thermal energy across process loops."
        ]
      },
      {
        heading: "Fundamental Thermodynamics: How Heat Moves",
        body: [
          "Heat transfer within an exchanger occurs via two primary modes: conduction through the metallic separating wall, and convection within the fluid boundary layers on either side of the wall.",
          "The governing heat duty equation is expressed as: Q = U × A × LMTD, where Q represents the total heat duty (kW), U is the overall heat transfer coefficient (W/m²·K), A is the effective heat transfer surface area (m²), and LMTD is the Logarithmic Mean Temperature Difference (°C).",
          "Engineers maximize heat transfer by increasing the surface area A, enhancing the convective coefficient U through turbulence-inducing corrugations or baffles, and optimizing the flow configuration to maximize the effective temperature difference."
        ]
      },
      {
        heading: "Primary Industrial Heat Exchanger Types",
        body: [
          "Industrial heat exchangers are broadly grouped into distinct mechanical architectures based on their internal construction:",
          "1. Shell and Tube Exchangers: Consisting of a bundle of parallel tubes housed within a cylindrical pressure shell. Highly resilient, capable of handling pressures above 300 bar and extreme temperatures.",
          "2. Plate Heat Exchangers (PHE): Built from thin, corrugated metal plates clamped in a frame. Exceptional heat transfer coefficients, small footprint, and tight temperature approaches down to 1°C.",
          "3. Air-Cooled Heat Exchangers (Fin-Fan): Finned tubes exposed to forced or induced ambient air streams. Ideal for arid locations where water cooling is unavailable or environmentally restricted.",
          "4. Double Pipe / Hairpin: Jacketed concentric pipes in a U-bend arrangement. The gold standard for low flow rates and high thermal crossing duties.",
          "5. Spiral Heat Exchangers: Concentric curved channels offering exceptional anti-fouling scrubbing action for slurries, wastewater sludges, and fibrous fluids."
        ]
      },
      {
        heading: "Critical Selection Criteria for Procurement Engineers",
        body: [
          "When selecting an exchanger, engineers must evaluate fluid compatibility, viscosity, phase change requirements, fouling factors, maximum operating pressures, and maintenance accessibility.",
          "GSB Export coordinates technical evaluation to ensure selected equipment matches process realities, project codes (ASME/TEMA/API), and target operating lifespans."
        ]
      }
    ]
  },
  {
    id: "shell-and-tube-vs-plate",
    slug: "shell-and-tube-vs-plate",
    title: "Shell and Tube vs Plate Heat Exchanger: An In-Depth Engineering Comparison",
    category: "Comparison",
    readTime: "9 min read",
    publishDate: "2026-10-22",
    summary: "A rigorous comparative analysis of the two most common industrial heat exchangers, comparing thermal efficiency, pressure limits, footprint, maintenance, and capital expenditure.",
    keyTakeaways: [
      "Plate heat exchangers provide 3 to 5 times higher heat transfer coefficients than shell and tube units.",
      "Shell and tube exchangers excel in high-pressure (>30 bar), extreme temperature (>200°C), and phase-change applications.",
      "PHEs offer an 80% smaller footprint and allow thermal capacity expansion by adding plates.",
      "Gasket material limits determine the upper temperature and chemical boundaries for gasketed plate exchangers."
    ],
    contentSections: [
      {
        heading: "Executive Summary: The Two Heavyweights of Process Heat Transfer",
        body: [
          "Process design engineers frequently face the choice between a Shell and Tube Heat Exchanger (STHE) and a Plate Heat Exchanger (PHE). While both units accomplish thermal transfer between process streams, their mechanical architecture, fluid dynamics, and operational envelopes differ fundamentally.",
          "Selecting the incorrect type can result in premature gasket failure, severe tube fouling, excessive pumping costs, or unnecessary capital expenditure."
        ]
      },
      {
        heading: "Thermal Efficiency and Heat Transfer Coefficients",
        body: [
          "Plate heat exchangers achieve overall heat transfer coefficients (U-values) between 3,000 to 7,000 W/m²·K in water-to-water applications, compared to 800 to 2,000 W/m²·K in comparable shell and tube exchangers.",
          "The intense turbulence induced by herringbone plate corrugations breaks the laminar boundary layer even at Reynolds numbers as low as 50. Consequently, a PHE requires approximately 20% to 30% of the heat transfer surface area of a shell and tube unit for identical thermal duty.",
          "Furthermore, PHEs achieve true counter-current flow with a temperature correction factor (Ft) close to 1.0, enabling temperature approaches as close as 1°C, whereas shell-and-tube units typically require 5°C or greater."
        ]
      },
      {
        heading: "Operating Limits: Pressure and Temperature",
        body: [
          "Shell and tube exchangers dominate high-pressure and high-temperature environments. Built as heavy-wall cylindrical pressure vessels under ASME Section VIII, STHEs easily handle pressures from full vacuum to over 300 bar, and temperatures from cryogenic -196°C to +650°C.",
          "In contrast, gasketed plate heat exchangers are bounded by elastomer gasket properties, generally limited to 25-30 bar and temperatures below 180°C. While fully welded plate exchangers extend these limits, shell and tube remains the premier choice for refinery distillation and high-pressure steam utility."
        ]
      },
      {
        heading: "Physical Footprint and Weight Comparison",
        body: [
          "Due to high surface-to-volume ratios, a plate heat exchanger occupies up to 80% less floor area and weighs significantly less than a shell and tube exchanger of equivalent capacity.",
          "Moreover, servicing a shell and tube unit requires clearing an open maintenance envelope equivalent to the entire tube bundle length to pull the bundle, whereas a PHE opens entirely within its own frame footprint."
        ]
      },
      {
        heading: "Selection Matrix Summary",
        body: [
          "Choose Plate Heat Exchangers when: fluid streams are clean liquids, temperature approach is tight (<5°C), footprint is constrained, or future capacity expansion is desired.",
          "Choose Shell and Tube Exchangers when: pressures exceed 30 bar, temperatures exceed 180°C, fluids contain aggressive vapors undergoing phase change (condensers/reboilers), or severe thermal shocks are anticipated."
        ]
      }
    ]
  },
  {
    id: "how-heat-exchangers-work",
    slug: "how-heat-exchangers-work",
    title: "How Does an Industrial Heat Exchanger Work? Fluid Dynamics & Heat Transfer Mechanics",
    category: "Fundamentals",
    readTime: "8 min read",
    publishDate: "2026-10-28",
    summary: "Detailed breakdown of the mechanical and thermodynamic principles that enable continuous industrial heat transfer across different equipment configurations.",
    keyTakeaways: [
      "Thermal equilibrium is driven by temperature gradients across separating boundaries.",
      "Boundary layer resistance is the primary barrier to convective heat transfer.",
      "Baffle geometry in shell and tube units forces cross-flow and prevents laminar stagnation.",
      "Plate corrugations induce micro-turbulence that enhances heat transfer and scours fouling deposits."
    ],
    contentSections: [
      {
        heading: "The Thermodynamics of Thermal Equilibrium",
        body: [
          "The second law of thermodynamics establishes that thermal energy naturally flows from higher-temperature regions to lower-temperature regions until thermal equilibrium is achieved. In an industrial heat exchanger, this fundamental principle is harnessed under tightly controlled mechanical conditions.",
          "Two separate process streams circulate through isolated channels. Thermal energy transfers through a highly conductive metal boundary (tube wall or plate wall) without allowing physical mixing of the fluids."
        ]
      },
      {
        heading: "Overcoming Boundary Layer Resistance",
        body: [
          "When fluid flows across a solid surface, friction creates a stagnant or slow-moving fluid film known as the boundary layer. Because fluids generally possess much lower thermal conductivity than metals, this boundary layer acts as a thermal insulator.",
          "Industrial heat exchangers are engineered specifically to disrupt this stagnant layer through induced turbulence. Higher fluid velocity and geometric disruptions (such as shell-side baffles or pressed plate corrugations) break laminar streamlines, driving bulk fluid mixing and drastically reducing thermal boundary layer resistance."
        ]
      },
      {
        heading: "The Role of Baffles and Flow Geometries",
        body: [
          "In shell and tube exchangers, transverse segmental or helical baffles serve two vital functions: they mechanically support long tube bundles against flow-induced vibration, and they force the shell-side fluid into high-velocity cross-flow patterns across the tubes.",
          "In plate heat exchangers, chevron-angled pressings force the fluid to flow in three-dimensional swirling patterns across adjacent contact points, generating intense shear stress that scrubs the heat transfer surface."
        ]
      }
    ]
  },
  {
    id: "counterflow-vs-parallel-flow",
    slug: "counterflow-vs-parallel-flow",
    title: "Counterflow vs Parallel Flow: Thermodynamic Principles & Efficiency",
    category: "Engineering Design",
    readTime: "6 min read",
    publishDate: "2026-11-01",
    summary: "An engineering evaluation of flow configurations, explaining why counterflow arrangements deliver superior Log Mean Temperature Difference (LMTD) and allow temperature crossing.",
    keyTakeaways: [
      "Counterflow orientation provides the highest possible Log Mean Temperature Difference (LMTD).",
      "In counterflow, the cold fluid outlet temperature can exceed the hot fluid outlet temperature (temperature cross).",
      "Parallel flow creates rapid initial heat exchange but limits the cold fluid exit temperature below the hot fluid exit temperature.",
      "Cross-flow arrangements are prevalent in air-cooled and compact finned exchangers."
    ],
    contentSections: [
      {
        heading: "Flow Configuration Fundamentals",
        body: [
          "The relative direction in which hot and cold fluids traverse a heat exchanger dictates the temperature profile across the heat transfer area. The primary flow arrangements are:",
          "1. Counter-Current Flow (Counterflow): Fluids enter at opposite ends and flow parallel to each other in opposite directions.",
          "2. Co-Current Flow (Parallel Flow): Fluids enter at the same end and flow in the same direction toward the outlet.",
          "3. Cross-Flow: Fluids flow perpendicular to each other, common in air-cooled exchangers and duct heaters."
        ]
      },
      {
        heading: "Why Counterflow Outperforms Parallel Flow",
        body: [
          "In counterflow, the temperature difference between the two streams remains relatively uniform throughout the entire length of the exchanger. This maintains a steady, high driving force for heat transfer at every point.",
          "Most importantly, counterflow allows a 'temperature cross'—where the cold fluid exits at a temperature higher than the hot fluid's exit temperature. This enables heat recovery efficiencies exceeding 90%.",
          "In contrast, parallel flow exhibits a steep initial temperature difference that rapidly collapses toward the exit. The cold fluid can never exit hotter than the hot fluid's discharge temperature, fundamentally capping thermal recovery."
        ]
      },
      {
        heading: "Special Applications for Parallel Flow",
        body: [
          "Although less thermally efficient, parallel flow is occasionally specified in delicate thermal operations: when handling temperature-sensitive materials (such as proteins or polymers) where rapid initial cooling is required without risk of freezing or local hot-spot degradation at the outlet."
        ]
      }
    ]
  },
  {
    id: "heat-exchanger-material-selection",
    slug: "heat-exchanger-material-selection",
    title: "Heat Exchanger Material Selection Guide: Metallurgy for Corrosive Environments",
    category: "Engineering Design",
    readTime: "10 min read",
    publishDate: "2026-11-03",
    summary: "Comprehensive guide to selecting carbon steels, austenitic and duplex stainless steels, titanium, and nickel alloys to resist chloride stress corrosion, pitting, and erosion.",
    keyTakeaways: [
      "Material selection balances thermal conductivity, mechanical strength, corrosion allowance, and cost.",
      "Duplex stainless steels (2205/2507) provide double the yield strength of austenitic grades and superior resistance to chloride stress corrosion cracking.",
      "Titanium is the premier material for seawater, brine, and chlorine-rich chemical streams.",
      "Nickel alloys (Hastelloy C-276, Inconel 625) are specified for extreme sulfuric, hydrochloric, and sour gas duties."
    ],
    contentSections: [
      {
        heading: "The Engineering Challenge of Metallurgy in Thermal Design",
        body: [
          "Heat exchangers are uniquely vulnerable to corrosion because elevated temperatures accelerate chemical reaction rates, while high fluid velocities can induce erosion-corrosion. Selecting the appropriate metallurgy requires balancing thermal conductivity, mechanical allowable stress, fabrication weldability, and corrosion resistance."
        ]
      },
      {
        heading: "Carbon Steel: The Cost-Effective Workhorse",
        body: [
          "Carbon steels (SA 516 Gr. 70 for plates, SA 106 Gr. B for pipes, SA 179 for tubes) provide high thermal conductivity and low initial cost. They are widely used for clean hydrocarbon services, boiler feedwaters, and non-corrosive utilities, provided appropriate corrosion allowances (typically 1.5 to 3.0 mm) are factored into shell and channel thicknesses."
        ]
      },
      {
        heading: "Austenitic Stainless Steels (304L, 316L, 321)",
        body: [
          "Offering excellent general corrosion resistance and clean surface finishes, AISI 304L and 316L are the industry standard for food, beverage, pharmaceutical, and light chemical processing. However, standard 300-series austenitic stainless steels are susceptible to Chloride Stress Corrosion Cracking (CSCC) at temperatures above 60°C in the presence of even modest chloride concentrations."
        ]
      },
      {
        heading: "Duplex & Super Duplex Stainless Steels (UNS S31803 / S32750)",
        body: [
          "Combining roughly equal proportions of austenite and ferrite phases, duplex stainless steels provide twice the mechanical yield strength of standard 316L. This allows engineers to specify thinner tube and plate walls, improving thermal conductivity while delivering exceptional resistance to pitting, crevice corrosion, and chloride stress cracking."
        ]
      },
      {
        heading: "Titanium and Noble Nickel Alloys",
        body: [
          "For seawater cooling, brine concentrations, and wet chlorine gas, Grade 1 and Grade 2 Titanium form an instantaneous protective titanium dioxide oxide film that is virtually inert to chloride attack.",
          "For severe chemical environments involving hot hydrochloric or sulfuric acids, nickel-molybdenum-chromium alloys such as Hastelloy C-276 and Inconel 625 provide unmatched resistance against pitting, crevice attack, and intergranular corrosion."
        ]
      }
    ]
  },
  {
    id: "heat-exchanger-maintenance-guide",
    slug: "heat-exchanger-maintenance-guide",
    title: "Industrial Heat Exchanger Maintenance & Cleaning Guide",
    category: "Maintenance & Operations",
    readTime: "8 min read",
    publishDate: "2026-11-05",
    summary: "Best practices for preventive maintenance, fouling detection, Clean-in-Place (CIP) procedures, hydro-blasting, and re-gasketing protocols for process plants.",
    keyTakeaways: [
      "Fouling layers act as thermal insulators that increase pressure drop and reduce heat duty.",
      "Monitoring approach temperatures and differential pressures provides early warning of fouling buildup.",
      "Chemical Clean-in-Place (CIP) circulation cleans plate exchangers without dismantling plate packs.",
      "High-pressure water hydro-blasting (10,000–20,000 PSI) remains standard for shell-and-tube bundles."
    ],
    contentSections: [
      {
        heading: "The Cost of Heat Exchanger Fouling",
        body: [
          "Fouling—the accumulation of unwanted deposits such as scaling, biological growth, particulate sedimentation, or coking on heat transfer surfaces—is the primary cause of heat transfer degradation in process plants.",
          "Fouling layers have very low thermal conductivity, requiring higher boiler firing or pump speeds to maintain target process temperatures, driving up operating expenditures."
        ]
      },
      {
        heading: "Early Detection: Monitoring Differential Pressure and Approach Temperature",
        body: [
          "Operations teams should continuously record two key performance indicators: differential pressure (ΔP) across inlet and outlet nozzles, and the approach temperature difference.",
          "A steady rise in ΔP accompanied by a widening approach temperature indicates deposit accumulation. Establishing baseline operating benchmarks enables scheduling proactive maintenance during planned turnarounds rather than facing unscheduled plant shutdowns."
        ]
      },
      {
        heading: "Cleaning Methodologies: CIP vs Mechanical Cleaning",
        body: [
          "1. Clean-In-Place (CIP): Circulating chemical detergents, mild acid washes, or caustic solutions through the exchanger without dismantling. Standard for plate exchangers and hygienic food loops.",
          "2. High-Pressure Hydro-Blasting: Utilizing specialized 10,000 to 20,000 PSI water jets with rotary lances to mechanically scour hard mineral scale and coke deposits from shell-and-tube inner tubes.",
          "3. Ultrasonic Cleaning: Immersing removed tube bundles in ultrasonic chemical baths to loosen stubborn deposits in tight tube-to-baffle crevices."
        ]
      }
    ]
  },
  {
    id: "understanding-lmtd",
    slug: "understanding-lmtd",
    title: "Understanding LMTD (Log Mean Temperature Difference) in Thermal Design",
    category: "Engineering Design",
    readTime: "7 min read",
    publishDate: "2026-11-06",
    summary: "A practical mathematical walkthrough of Log Mean Temperature Difference calculation, correction factors (Ft), and their direct impact on heat exchanger sizing.",
    keyTakeaways: [
      "LMTD accurately accounts for the non-linear temperature profiles of heat exchanger fluids.",
      "Arithmetic mean temperature difference overestimates driving force, leading to undersized exchangers.",
      "The TEMA correction factor Ft accounts for multi-pass shell-and-tube configurations.",
      "If Ft falls below 0.75 to 0.80, the exchanger design is inefficient and requires multiple shells in series."
    ],
    contentSections: [
      {
        heading: "Why Arithmetic Mean Temperature Difference Fails",
        body: [
          "In simple calculations, engineers might consider taking the arithmetic average of the inlet and outlet temperature differences: ΔT_avg = (ΔT1 + ΔT2) / 2. However, because heat transfer rates change continuously along the exchanger length as fluids warm or cool, the actual temperature curve is logarithmic rather than linear.",
          "Using an arithmetic mean consistently overestimates the effective driving force, which results in calculating an undersized heat transfer surface area that fails to meet target process cooling or heating duties in operation."
        ]
      },
      {
        heading: "The LMTD Mathematical Formula",
        body: [
          "The Logarithmic Mean Temperature Difference is formally defined as: LMTD = (ΔT1 - ΔT2) / ln(ΔT1 / ΔT2), where ΔT1 is the temperature difference at one end of the exchanger and ΔT2 is the temperature difference at the other end.",
          "When ΔT1 and ΔT2 are nearly identical, the LMTD approaches the arithmetic average. When they diverge significantly, LMTD precisely captures the diminishing thermal driving force across the channel."
        ]
      },
      {
        heading: "The Correction Factor (Ft) for Multi-Pass Exchangers",
        body: [
          "The pure LMTD equation assumes an ideal counter-current flow arrangement. In real-world multi-pass shell and tube exchangers (such as a 1-pass shell, 2-pass tube design), fluid flows partially in co-current and partially in counter-current directions.",
          "To account for this deviation, a non-dimensional correction factor Ft (ranging from 0 to 1.0) is calculated based on thermal effectiveness P and heat capacity ratio R: Q = U × A × (Ft × LMTD).",
          "Standard engineering practice dictates that if the calculated Ft drops below 0.75, the configuration is inefficient and risks operational instability. Engineers must switch to a pure counter-current plate exchanger or place multiple shells in series."
        ]
      }
    ]
  },
  {
    id: "heat-exchanger-applications-sectors",
    slug: "heat-exchanger-applications-sectors",
    title: "Industrial Heat Exchanger Applications Across Modern Process Sectors",
    category: "Fundamentals",
    readTime: "9 min read",
    publishDate: "2026-11-08",
    summary: "Exploration of essential thermal duties across heavy industries, detailing how customized exchangers optimize energy recovery and process stability.",
    keyTakeaways: [
      "Process industries consume over 40% of global industrial primary energy, making thermal recovery critical.",
      "Refinery applications focus on high-temperature crude preheat and heavy bottoms cooling.",
      "Sanitary applications demand electropolished surfaces, drainability, and FDA compliance.",
      "Municipal wastewater and zero-liquid-discharge (ZLD) plants prioritize clog-free geometries for heavy sludges."
    ],
    contentSections: [
      {
        heading: "Thermal Energy in Global Manufacturing",
        body: [
          "Modern process industries—from petrochemical complexes to pharmaceutical cleanrooms—rely on continuous thermal transformation. Heat exchangers serve as the critical interface where thermal energy is added, extracted, or recirculated.",
          "Without robust, properly rated heat exchangers, plants experience thermal throttling, excessive utility steam costs, product quality variation, or environmental emissions non-compliance."
        ]
      },
      {
        heading: "Refining & Petrochemical Thermal Trains",
        body: [
          "In crude distillation units (CDU), crude preheat trains recover massive quantities of waste heat from hot pumparounds and residual bottoms streams before the crude enters the primary atmospheric furnace. Shell and tube exchangers in TEMA AET or AES configurations reduce refinery fuel gas consumption by up to 50%."
        ]
      },
      {
        heading: "Food & Pharmaceutical Hygiene Demands",
        body: [
          "Sanitary heat exchangers operate under strict microbiological standards. Multi-section plate heat exchangers pasteurize milk, fruit juices, and beer, while double-tubesheet shell-and-tube units cool Water for Injection (WFI) loops without risking cross-contamination from cooling tower water or utility steam."
        ]
      },
      {
        heading: "Environmental Utilities & Energy Transition",
        body: [
          "As industrial plants commit to Zero Liquid Discharge (ZLD) and carbon footprint reduction, heat exchangers enable waste heat recovery from flue gases, anaerobic digester sludge heating, and direct ambient cooling via fin-fan coolers, drastically curbing freshwater consumption."
        ]
      }
    ]
  }
];

export function getArticleBySlug(slug: string): ResourceArticle | undefined {
  return ARTICLES.find((art) => art.slug === slug);
}

