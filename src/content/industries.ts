export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  exchangerRoles: string[];
  keyChallenges: string[];
  recommendedExchangers: {
    name: string;
    slug: string;
    reason: string;
  }[];
  standardsAndCompliance: string[];
  image: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "oil-gas",
    slug: "oil-gas",
    name: "Oil & Gas (Upstream, Midstream & Downstream)",
    tagline: "High-pressure thermal equipment engineered for severe hydrocarbon duties",
    shortDescription: "Heavy-duty heat exchangers built for oil refineries, offshore platforms, gas processing facilities, and LNG terminals where safety and pressure containment are paramount.",
    overview: "In hydrocarbon extraction and refining, heat exchangers operate under aggressive process conditions involving high pressures, hazardous gases, cyclic thermal stresses, and sour crudes containing H2S and chlorides. GSB Export coordinates supply of heavy-wall shell-and-tube exchangers, air-cooled fin-fan coolers, and hairpin exchangers fabricated strictly according to ASME Section VIII and API standards.",
    exchangerRoles: [
      "Crude oil preheat trains maximizing energy recovery before distillation columns",
      "Sour gas amine reboilers, amine strippers, and lean/rich amine exchangers",
      "High-pressure natural gas compressor intercooling and aftercooling",
      "Refinery overhead fractionator vapor condensing",
      "Gas dehydration glycol regeneration loops"
    ],
    keyChallenges: [
      "Severe internal corrosion from sour crude, hydrogen sulfide, and salt water",
      "Operating pressures exceeding 200 bar in gas injection and compression",
      "Fouling deposition from heavy asphaltenes, waxes, and coke",
      "Strict compliance with API 660, API 661, and NACE MR0175/ISO 15156"
    ],
    recommendedExchangers: [
      { name: "Shell and Tube Heat Exchanger", slug: "shell-and-tube", reason: "Standard for high-pressure refinery distillation trains and overhead condensing" },
      { name: "Air-Cooled Heat Exchanger", slug: "air-cooled", reason: "Essential for refinery fin-fan cooling where ambient air eliminates cooling water demand" },
      { name: "Double Pipe Heat Exchanger", slug: "double-pipe", reason: "Best for extreme high-pressure gas heating and thermal cross duties" }
    ],
    standardsAndCompliance: ["ASME BPVC Section VIII Div 1 & 2", "API Standard 660", "API Standard 661", "TEMA Class R", "NACE MR0175 / ISO 15156"],
    image: "/images/industries/oil-gas.svg"
  },
  {
    id: "chemical-petrochemical",
    slug: "chemical-petrochemical",
    name: "Chemical & Petrochemical Processing",
    tagline: "Corrosion-resistant heat transfer for aggressive acids, solvents & polymers",
    shortDescription: "Specialized thermal units crafted from titanium, Hastelloy, and duplex alloys to handle aggressive acids, high-temperature synthesis, and continuous batch reactions.",
    overview: "Continuous and batch chemical processes require precise thermal equilibrium, tight temperature control, and zero cross-contamination. Heat exchangers must endure aggressive reagents, organic solvents, sulfuric/nitric acids, and exothermic reactions. GSB Export facilitates partner coordination for specialized metallurgy, ASME TEMA Class B/C exchangers, and compact welded plate units.",
    exchangerRoles: [
      "Exothermic chemical reactor jacket and internal coil heat removal",
      "Solvent recovery, stripping column reboiling, and vapor condensation",
      "Acid cooling (sulfuric, phosphoric, nitric) using specialized noble alloys",
      "Polymer resin heating, polymerization loop temperature maintenance",
      "Specialty chemical batch crystallizers and distillation condensers"
    ],
    keyChallenges: [
      "Aggressive pitting and crevice corrosion requiring exotic alloys (Hastelloy, Inconel, Titanium)",
      "Polymerization fouling and thermal degradation on heating surfaces",
      "Strict zero-leakage containment requirements for toxic or flammable volatile media"
    ],
    recommendedExchangers: [
      { name: "Shell and Tube Heat Exchanger", slug: "shell-and-tube", reason: "Customizable with exotic alloy metallurgy (Hastelloy, Titanium) for aggressive chemistry" },
      { name: "Plate Heat Exchanger", slug: "plate-heat-exchanger", reason: "High thermal response for precise exothermic batch reactor control" },
      { name: "Spiral Heat Exchanger", slug: "spiral", reason: "Single-channel self-cleaning flow for viscous resins and slurried crystallizers" }
    ],
    standardsAndCompliance: ["ASME Section VIII Div 1", "TEMA Class B (Chemical Service)", "EN 13445", "PED 2014/68/EU"],
    image: "/images/industries/chemical.svg"
  },
  {
    id: "food-beverage",
    slug: "food-beverage",
    name: "Food, Beverage & Dairy Processing",
    tagline: "Ultra-hygienic, sanitary thermal processing ensuring food safety & CIP cleanability",
    shortDescription: "Sanitary plate and tube exchangers designed to 3-A and FDA standards, preventing bacterial growth and enabling rapid Clean-in-Place (CIP) cycles.",
    overview: "In dairy, beverage, and edible food manufacturing, product hygiene, microbiological purity, and preservation of organoleptic properties are non-negotiable. Heat exchangers require crevice-free electropolished stainless surfaces, FDA-approved elastomers, and full drainability. GSB Export coordinates sanitary plate and multi-tube heat exchangers designed for gentlest thermal treatment.",
    exchangerRoles: [
      "Milk, cream, and dairy pasteurization and ultra-high-temperature (UHT) sterilizing",
      "Beer brewing wort cooling, fermentation temperature regulation, and beer pasteurization",
      "Citrus juice, purees, and syrup thermal pasteurization and concentration",
      "Edible oil deodorization, bleaching, and cooling loops",
      "Clean-In-Place (CIP) detergent and rinse heating systems"
    ],
    keyChallenges: [
      "Eliminating dead pockets and stagnation zones where bacteria or biofilm can incubate",
      "Preventing product scorching and protein denaturation on heat transfer surfaces",
      "Strict compliance with hygienic materials (AISI 316L, electropolished Ra < 0.8 µm)"
    ],
    recommendedExchangers: [
      { name: "Plate Heat Exchanger", slug: "plate-heat-exchanger", reason: "Industry standard for milk pasteurization and wort cooling with 3-A sanitary frames" },
      { name: "Spiral Heat Exchanger", slug: "spiral", reason: "Handles thick fruit purees, mash, and distillery spent wash without clogging" }
    ],
    standardsAndCompliance: ["3-A Sanitary Standards", "FDA 21 CFR Compliant Gaskets", "EHEDG Guidelines", "ASME BPE"],
    image: "/images/industries/food-beverage.svg"
  },
  {
    id: "pharmaceutical",
    slug: "pharmaceutical",
    name: "Pharmaceutical & Biotechnology",
    tagline: "High-purity thermal solutions for WFI, CIP, and sterile active ingredient synthesis",
    shortDescription: "Ultra-pure sanitary heat exchangers with orbital welding, comprehensive material traceability, and drainable geometries for API synthesis and Water for Injection.",
    overview: "Pharmaceutical processes demand uncompromising sterility, full material traceability 3.1 certificates, passivation, and surface finishes down to mirror-electropolished standards. GSB Export facilitates sourcing of double-tubesheet shell-and-tube exchangers and sanitary plate units preventing cross-contamination between heating utility steam and active pharmaceutical ingredients.",
    exchangerRoles: [
      "Water for Injection (WFI) loop heating, sub-cooling, and point-of-use cooling",
      "Pure steam condensing and clean utility generation",
      "Active Pharmaceutical Ingredient (API) crystallization and reaction chilling",
      "Bioreactor temperature control and fermentation media sterilization",
      "Clean-in-place (CIP) and Steam-in-place (SIP) utility thermal control"
    ],
    keyChallenges: [
      "Strict double-tubesheet separation to make cross-contamination mechanically impossible",
      "Complete drainability without puddling or horizontal stagnation",
      "Validation documentation including weld video borescopes and electropolish surface roughness reports"
    ],
    recommendedExchangers: [
      { name: "Plate Heat Exchanger", slug: "plate-heat-exchanger", reason: "Sanitary stainless multi-pass plate frames for clean utility preparation" },
      { name: "Shell and Tube Heat Exchanger", slug: "shell-and-tube", reason: "Double tubesheet (DTS) configuration guaranteeing zero cross-contamination in WFI loops" }
    ],
    standardsAndCompliance: ["ASME BPE (Bioprocessing Equipment)", "cGMP Compliance", "EN 10204 3.1 Material Certification", "FDA 21 CFR"],
    image: "/images/industries/pharmaceutical.svg"
  },
  {
    id: "power-generation",
    slug: "power-generation",
    name: "Power Generation & Energy Utilities",
    tagline: "Heavy-duty thermal recovery, steam condensing & turbine auxiliary cooling",
    shortDescription: "Robust heat transfer equipment for thermal power, combined-cycle gas turbine, nuclear, and biomass plants optimizing plant heat rate and thermal efficiency.",
    overview: "Modern power plants depend on high-efficiency heat exchangers to maximize the Rankine cycle thermal efficiency, condense turbine exhaust steam, and cool critical generator lube oil systems. GSB Export coordinates supply of high-integrity feedwater heaters, surface condensers, and closed-loop cooling heat exchangers designed for continuous year-round utility service.",
    exchangerRoles: [
      "Steam turbine surface condensers and vacuum steam condensing",
      "High-pressure and low-pressure boiler feedwater preheating trains",
      "Generator and turbine lube oil console cooling",
      "Flue gas heat recovery and economizer loops",
      "Auxiliary cooling water closed-loop heat exchangers (CCW systems)"
    ],
    keyChallenges: [
      "Massive steam volumetric flow rates under deep vacuum conditions",
      "Thermal fatigue and cyclic load fluctuations in peaking power plants",
      "Erosion-corrosion from high-velocity wet steam and boiler feedwater"
    ],
    recommendedExchangers: [
      { name: "Shell and Tube Heat Exchanger", slug: "shell-and-tube", reason: "High-pressure boiler feedwater heaters and heavy-duty turbine lube oil coolers" },
      { name: "Air-Cooled Heat Exchanger", slug: "air-cooled", reason: "Direct air-cooled condensers (ACC) for power plants in water-constrained locations" },
      { name: "Plate Heat Exchanger", slug: "plate-heat-exchanger", reason: "Compact closed-circuit auxiliary cooling water systems" }
    ],
    standardsAndCompliance: ["ASME Section VIII Div 1 & Div 2", "HEI (Heat Exchange Institute) Standards", "TEMA Class R", "TUV / PED"],
    image: "/images/industries/power-generation.svg"
  },
  {
    id: "hvac-refrigeration",
    slug: "hvac-refrigeration",
    name: "HVAC, District Energy & Refrigeration",
    tagline: "High-COP thermal exchange for district cooling, chillers & heat pumps",
    shortDescription: "Plate and shell-and-tube exchangers engineered for commercial district cooling networks, industrial chillers, data center cooling, and heat pump loops.",
    overview: "Commercial HVAC, large-scale district cooling plants, and industrial refrigeration demand compact equipment with minimal pressure drops and tight temperature approaches to maximize system Coefficient of Performance (COP). GSB Export provides plate heat exchangers and flooded chillers designed for chillers, thermal storage systems, and district cooling energy transfer stations.",
    exchangerRoles: [
      "District cooling building energy transfer stations (ETS) separating building loops",
      "Water-cooled chiller shell-and-tube evaporators and water-cooled condensers",
      "Data center precision liquid cooling and free-cooling economizers",
      "Industrial ammonia (NH3) and CO2 refrigeration chillers and subcoolers",
      "Geothermal and seawater heat pump source exchangers"
    ],
    keyChallenges: [
      "Minimizing pumping power losses with ultra-low pressure drop geometries",
      "Achieving tight 1.0°C temperature approaches to maximize energy efficiency",
      "Resisting corrosion in open cooling tower water loops and coastal environments"
    ],
    recommendedExchangers: [
      { name: "Plate Heat Exchanger", slug: "plate-heat-exchanger", reason: "Ideal for district cooling substations with 1°C approach and expandable plate pack" },
      { name: "Shell and Tube Heat Exchanger", slug: "shell-and-tube", reason: "Rugged DX evaporators and shell-and-tube water-cooled condensers for chillers" }
    ],
    standardsAndCompliance: ["AHRI Standard 400 (Liquid to Liquid Heat Exchangers)", "ASHRAE Standard 90.1", "ASME Section VIII Div 1"],
    image: "/images/industries/hvac.svg"
  },
  {
    id: "water-wastewater",
    slug: "water-wastewater",
    name: "Water, Wastewater & Desalination",
    tagline: "Clog-resistant thermal solutions for municipal sludges, brines & thermal ZLD",
    shortDescription: "Non-clogging spiral and wide-gap exchangers for sewage sludge digesters, industrial effluent heat recovery, and zero-liquid-discharge evaporator loops.",
    overview: "Water treatment facilities, anaerobic sludge digesters, and seawater desalination plants handle heavily contaminated fluids loaded with suspended solids, grit, fibers, and high salinity. Standard narrow-channel exchangers clog rapidly in these conditions. GSB Export coordinates supply of single-channel spiral heat exchangers and wide-gap plate units that maintain velocity without fouling.",
    exchangerRoles: [
      "Municipal wastewater anaerobic sludge digester raw sludge heating and recirculation",
      "Textile and dye house effluent hot wastewater energy recovery",
      "Zero Liquid Discharge (ZLD) falling film brine concentrators and crystallizers",
      "Reverse Osmosis (RO) feed water pre-heating to boost membrane flux",
      "Industrial biological effluent temperature moderation before discharge"
    ],
    keyChallenges: [
      "Severe fouling and plugging from hairs, fibers, and organic biological slimes",
      "Aggressive chloride attack from concentrated seawater brine and RO reject",
      "Need for continuous 24/7 operation without manual mechanical unbolting for cleaning"
    ],
    recommendedExchangers: [
      { name: "Spiral Heat Exchanger", slug: "spiral", reason: "Single curved channel self-scrubs sludges and fibers without plugging" },
      { name: "Plate Heat Exchanger", slug: "plate-heat-exchanger", reason: "Titanium plate units for seawater desalination pre-heating and brine cooling" }
    ],
    standardsAndCompliance: ["ASME Section VIII Div 1", "EN 13445", "ISO 14001 Environmental Guidelines"],
    image: "/images/industries/water-treatment.svg"
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((ind) => ind.slug === slug);
}
