export interface ProductSpec {
  label: string;
  indicativeValue: string;
  notes?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryTag?: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  workingPrinciple: string;
  keyFeatures: string[];
  applications: string[];
  materials: {
    category: string;
    options: string[];
  }[];
  indicativeSpecs: ProductSpec[];
  designStandards: string[];
  image: string;
  schematicType: string;
  relatedSlugs: string[];
  highlights?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "shell-and-tube",
    slug: "shell-and-tube",
    name: "Shell & Tube Heat Exchanger",
    categoryTag: "SHELL TUBE HEAT EXCHANGER MANUFACTURERS",
    tagline: "High-integrity thermal transfer for high-pressure & extreme temperature duties",
    shortDescription: "Fixed tubesheet, U-tube and floating-head designs for demanding process duties.",
    highlights: ["10–5000 m² area", "Up to 300 bar", "-40°C to 600°C"],
    overview: "Shell and tube heat exchangers represent the most versatile and established class of industrial heat-transfer equipment. Built to withstand extreme mechanical stress, high operating pressures, and corrosive chemical streams, they feature a bundle of tubes enclosed within a cylindrical pressure vessel. GSB Export facilitates custom engineering coordination and supply of fixed tubesheet, floating head, and U-tube configurations tailored to precise thermal ratings.",
    workingPrinciple: "Two fluids flow at different initial temperatures: one fluid courses through the interior of the tubes (tube-side), while the secondary fluid flows across the external surface of the tubes within the outer shell (shell-side). Transverse baffles within the shell induce turbulent cross-flow, maximizing heat transfer coefficients while supporting the tube bundle against flow-induced vibration.",
    keyFeatures: [
      "Robust mechanical design capable of handling high pressures and thermal shocks",
      "Available in Fixed Tubesheet, U-Tube, and Removable Floating Head designs",
      "Easily serviceable and cleanable tube bundles for fouling service",
      "Extensive material compatibility ranging from carbon steels to exotic nickel alloys",
      "Engineered baffle arrangements (segmental, rod, helical) for optimized pressure drop",
      "Suitable for vapor condensation, reboiling, and liquid-liquid heat exchange"
    ],
    applications: [
      "Petrochemical & chemical process cooling and heating",
      "Oil refinery crude pre-heat trains and overhead condensers",
      "Power generation boiler feedwater preheaters and turbine condenser systems",
      "Natural gas processing, amine reboilers, and glycol dehydration",
      "Heavy industrial hydraulic oil coolers and process utility duties"
    ],
    materials: [
      {
        category: "Tubes & Tubesheets",
        options: ["Carbon Steel (SA 179 / SA 214)", "Stainless Steel (304/304L, 316/316L, 321)", "Duplex & Super Duplex (UNS S31803 / S32750)", "Copper-Nickel (90/10, 70/30)", "Titanium (Gr. 2)", "Nickel Alloys (Inconel, Monel, Hastelloy)"]
      },
      {
        category: "Shell & Channels",
        options: ["Carbon Steel (SA 516 Gr. 70, SA 106 Gr. B)", "Stainless Steel (304L, 316L)", "Clad Plate combinations"]
      }
    ],
    indicativeSpecs: [
      { label: "Operating Pressure", indicativeValue: "Full vacuum up to 300+ bar(g)", notes: "Configured strictly to duty requirements" },
      { label: "Operating Temperature", indicativeValue: "-196°C cryogenic up to +650°C", notes: "Dependent on metallurgy and seal design" },
      { label: "Heat Transfer Area", indicativeValue: "From 5 m² up to 5,000+ m² per shell", notes: "Modular multi-shell configurations available" },
      { label: "Design Codes (Contextual)", indicativeValue: "ASME Section VIII Div 1 & 2, TEMA (Class R, C, B), API 660", notes: "Confirmed upon final engineering review" }
    ],
    designStandards: [
      "ASME Boiler & Pressure Vessel Code Section VIII, Div. 1 & 2",
      "TEMA Class R (Refinery), Class C (Commercial), Class B (Chemical)",
      "API Standard 660 (Shell-and-Tube Exchangers for General Refinery Service)",
      "EN 13445 (European Unfired Pressure Vessels)"
    ],
    image: "/images/products/shell-and-tube.png",
    schematicType: "TEMA E-Type Single Pass / Multipass Shell",
    relatedSlugs: ["u-tube-bundle", "finned-tube", "air-cooled", "plate-heat-exchanger"]
  },
  {
    id: "air-cooled",
    slug: "air-cooled",
    name: "Air Cooled Heat Exchanger",
    categoryTag: "AIR COOLED HEAT EXCHANGER MANUFACTURERS",
    tagline: "Water-free ambient air heat rejection for arid climates & eco-conscious plants",
    shortDescription: "Forced and induced-draft process coolers engineered where cooling water is limited.",
    highlights: ["1–4 m fan diameter", "Up to 50 MW", "API 661 / ASME VIII"],
    overview: "Air-cooled heat exchangers (ACHE), commonly known as fin-fan coolers, reject heat directly into ambient air without requiring process cooling water. Ideal for arid locations, water-scarce industrial zones, and zero-liquid-discharge (ZLD) installations, they feature externally finned tube bundles swept by high-volume axial fan assemblies arranged in forced draft or induced draft configurations.",
    workingPrinciple: "Hot process fluid flows through horizontal or inclined finned tubes. Heavy-duty axial cooling fans force or induce large volumes of ambient cooling air vertically across the tube bundle. Extruded, embedded, or wrapped external fins dramatically multiply the outer heat transfer surface area, compensating for air's naturally lower thermal conductivity.",
    keyFeatures: [
      "Zero process water consumption: fully operates using ambient air",
      "Eliminates cooling tower drift, water chemical conditioning, and discharge permits",
      "Available in both Forced Draft (easy fan maintenance) and Induced Draft (uniform air flow) designs",
      "High-efficiency finned tubes: Extruded (bimetallic), Embedded ('G' fin), or Helically Wrapped ('L' fin)",
      "Variable frequency fan drives and automatic louvers for precise winter/summer climate control",
      "Modular bay construction for streamlined transport and on-site crane erection"
    ],
    applications: [
      "Hydrocarbon process condensing and gas compression intercooling",
      "Desert and arid-region power plant closed-circuit cooling",
      "Refinery fractionator overhead condensing systems",
      "Chemical plant solvent recovery and synthesis gas cooling",
      "Turbine lube oil console cooling and industrial diesel power plants"
    ],
    materials: [
      {
        category: "Base Tubes",
        options: ["Carbon Steel (SA 179 / SA 214)", "Stainless Steel (304L, 316L)", "Duplex Stainless Steel (2205)", "Low Temperature Steel (SA 334 Gr. 6)"]
      },
      {
        category: "Fins & Metallurgy",
        options: ["High-Purity Aluminum (1060 / 1100)", "Copper Fins", "Extruded Aluminum with inner liner"]
      },
      {
        category: "Headers & Structures",
        options: ["Plug-type forged headers", "Removable cover plate headers", "Hot-dip galvanized structural steel frames"]
      }
    ],
    indicativeSpecs: [
      { label: "Design Pressure", indicativeValue: "Up to 350+ bar(g)", notes: "Plug-header configurations for high pressures" },
      { label: "Design Temperature", indicativeValue: "Ambient -40°C up to +400°C process fluid", notes: "Engineered for ambient design points up to +55°C" },
      { label: "Fan Drive Type", indicativeValue: "Direct drive, V-belt drive, or planetary gear drive", notes: "Equipped with variable frequency controllers" },
      { label: "Standards Compliance", indicativeValue: "API 661 / ISO 13706, ASME Section VIII", notes: "Full compliance with international refinery specs" }
    ],
    designStandards: [
      "API Standard 661 (Air-Cooled Heat Exchangers for General Refinery Service)",
      "ISO 13706 (Petroleum, petrochemical and natural gas industries — Air-cooled heat exchangers)",
      "ASME Section VIII Div. 1 Pressure Piping Codes"
    ],
    image: "/images/products/air-cooled.png",
    schematicType: "Forced Draft & Induced Draft Fin-Fan Architecture",
    relatedSlugs: ["finned-tube", "shell-and-tube", "double-pipe"]
  },
  {
    id: "finned-tube",
    slug: "finned-tube",
    name: "Finned Tube Heat Exchanger",
    categoryTag: "FINNED TUBE HEAT EXCHANGER MANUFACTURER",
    tagline: "Extended-surface tube bundles for high-efficiency gas and air thermal duties",
    shortDescription: "Extended-surface exchangers for efficient gas-side heat transfer and air duties.",
    highlights: ["Extruded / embedded fins", "Up to 450°C", "Custom fin pitch"],
    overview: "Finned tube heat exchangers (extended-surface exchangers) multiply heat transfer area on the gas/air side by up to 20 times using high-efficiency fin geometry. GSB Export supplies extruded bimetallic, embedded G-fin, and wrapped L-fin configurations engineered for harsh industrial atmospheres.",
    workingPrinciple: "Fluid flows inside the base tubes while air or process gas flows across the external finned surface. The high fin density compensates for low gas heat transfer coefficients, maximizing overall thermal duty within a compact bundle envelope.",
    keyFeatures: [
      "Extruded bimetallic, embedded G-fin, and wrapped L/KL fin options",
      "High mechanical bond strength preventing thermal degradation over operating life",
      "Available in carbon steel, stainless steel, copper-nickel, and titanium tubes",
      "Aluminum, copper, or stainless steel fin metallurgy",
      "Custom tube pitch and fin spacing (4 to 14 fins per inch) to optimize fouling and pressure drop"
    ],
    applications: [
      "Gas turbine air intake coolers and exhaust recuperators",
      "Steam air preheaters for boilers and furnaces",
      "Compressor intercoolers and aftercoolers",
      "Chemical vapor condensing and solvent recovery",
      "HVAC air handling unit heating and cooling coils"
    ],
    materials: [
      {
        category: "Base Tubes",
        options: ["Carbon Steel (SA 179)", "Stainless Steel (304L, 316L)", "Copper-Nickel (90/10)"]
      },
      {
        category: "Fin Material",
        options: ["Aluminum (1060/1100)", "Copper", "Stainless Steel"]
      }
    ],
    indicativeSpecs: [
      { label: "Fin Pitch", indicativeValue: "4 to 14 fins per inch (FPI)" },
      { label: "Design Temperature", indicativeValue: "Up to 450°C" },
      { label: "Operating Pressure", indicativeValue: "Up to 250 bar tube-side" },
      { label: "Fin Type", indicativeValue: "Extruded, Embedded 'G', Wrapped 'L'" }
    ],
    designStandards: [
      "API Standard 661",
      "ASME Section VIII Div. 1",
      "TEMA Class C"
    ],
    image: "/images/products/finned-tube.png",
    schematicType: "Extended Surface Fin-Fan & Coil Architecture",
    relatedSlugs: ["air-cooled", "shell-and-tube"]
  },
  {
    id: "u-tube-bundle",
    slug: "u-tube-bundle",
    name: "U-Tube Bundle",
    categoryTag: "U TUBE BUNDLE HEAT EXCHANGER MANUFACTURER",
    tagline: "Precision replacement and custom U-tube bundles engineered for thermal expansion",
    shortDescription: "New and replacement bundles designed for thermal expansion and high-pressure service.",
    highlights: ["19–25 mm tube OD", "Up to 12 m length", "SS / CS / alloy steel"],
    overview: "U-tube bundles provide inherent thermal expansion relief by allowing tubes to freely expand and contract independently of the outer shell. GSB Export coordinates custom engineering and precision supply of new and drop-in replacement tube bundles for power, chemical, and refining plants with ASME Section IX certified orbital welding and helium leak detection.",
    workingPrinciple: "Each tube is bent into a continuous U-shape with both ends rolled or seal-welded into a single tubesheet. Thermal expansion is absorbed naturally by the floating U-bend end, completely eliminating differential expansion stress between tube and shell without requiring expansion joints.",
    keyFeatures: [
      "Single tubesheet design minimizes joints and potential leak points",
      "Free-floating U-bend eliminates differential thermal expansion stress",
      "Easily removable bundle for shell-side cleaning and chemical descaling",
      "ASME Section IX automated orbital welding of tube-to-tubesheet joints",
      "Hydrostatic testing up to 1.5x design pressure and 100% helium leak verification",
      "Custom baffle geometries (segmental, double-segmental, rod) for vibration suppression"
    ],
    applications: [
      "Boiler feedwater heaters and high-pressure steam generators",
      "Thermal oil heaters and high-temperature thermal fluid loops",
      "High differential temperature process condensers",
      "Replacement bundles for refinery and petrochemical revamp projects",
      "Compressor intercoolers and turbine lube oil cooling"
    ],
    materials: [
      {
        category: "U-Tubes",
        options: ["Seamless Carbon Steel (SA 179)", "Stainless Steel (304L, 316L, 321)", "Duplex & Super Duplex", "Monel 400 & Inconel 625"]
      },
      {
        category: "Tubesheet & Baffles",
        options: ["Carbon Steel (SA 516 Gr. 70)", "Stainless Steel", "Clad Tubesheets"]
      }
    ],
    indicativeSpecs: [
      { label: "Tube OD", indicativeValue: "19 mm to 25.4 mm (3/4\" to 1\")" },
      { label: "Bundle Length", indicativeValue: "Up to 12 meters" },
      { label: "Design Pressure", indicativeValue: "Full vacuum to 350+ bar" },
      { label: "Metallurgy", indicativeValue: "SS, Carbon Steel, Duplex, Exotic Alloys" }
    ],
    designStandards: [
      "ASME Section VIII Div. 1",
      "TEMA Class R, C, B",
      "API Standard 660"
    ],
    image: "/images/products/u-tube-bundle.png",
    schematicType: "TEMA U-Type Removable Bundle Architecture",
    relatedSlugs: ["shell-and-tube", "double-pipe"]
  },
  {
    id: "plate-heat-exchanger",
    slug: "plate-heat-exchanger",
    name: "Plate Heat Exchanger",
    categoryTag: "PLATE HEAT EXCHANGER MANUFACTURERS",
    tagline: "Exceptional thermal efficiency with compact footprint & close temperature approach",
    shortDescription: "Compact gasketed, semi-welded, and brazed plate exchangers for close approach temperatures.",
    highlights: ["Up to 3,800 m³/h flow", "Up to 30 bar pressure", "1°C close approach"],
    overview: "Plate heat exchangers utilize corrugated plates pressed with high precision to generate intense turbulence even at low fluid velocities. Available in gasketed, fully welded, and brazed architectures, these units offer up to 3 to 5 times the heat transfer efficiency of conventional shell and tube units of comparable duty, while requiring an 80% smaller installation footprint.",
    workingPrinciple: "A pack of thin corrugation-patterned metal plates are pressed together. Alternate channels form flow conduits through which hot and cold media flow in counter-current directions. The undulating plate corrugation creates micro-vortices that break laminar boundary layers, ensuring high heat transfer coefficients and continuous self-cleaning action.",
    keyFeatures: [
      "Extremely close temperature approach down to 1°C (2°F)",
      "High thermal efficiency resulting in minimal heat loss and compact installation",
      "True counter-current flow pattern for maximum mean temperature difference (LMTD)",
      "Flexible expandable capacity: plates can be added or rearranged on frame (gasketed type)",
      "Low liquid hold-up volume allowing fast response to process control adjustments",
      "Sanitary hygienic designs compliant with food, beverage, and pharma standards"
    ],
    applications: [
      "HVAC district cooling, heating substations, and thermal energy storage",
      "Dairy and beverage pasteurization, wort cooling, and juice processing",
      "Pharmaceutical clean-in-place (CIP) and water-for-injection (WFI) cooling",
      "Chemical liquid-liquid cooling and batch reactor temperature control",
      "Marine engine jacket water cooling and lubricant temperature regulation"
    ],
    materials: [
      {
        category: "Heat Transfer Plates",
        options: ["AISI 304 & 316L Stainless Steel", "Titanium Gr. 1 & Gr. 2 (sea water / brine service)", "Hastelloy C-276", "Nickel 200/201", "SMO 254"]
      },
      {
        category: "Gasket Polymers (Gasketed Types)",
        options: ["NBR (Nitrile - up to 135°C)", "EPDM (Ethylene Propylene - up to 160°C)", "FKM / Viton® (Fluoroelastomer - high chemical resistance up to 180°C)"]
      },
      {
        category: "Frame & Connection Liners",
        options: ["Painted Structural Carbon Steel", "Stainless Steel Clad", "Solid Stainless Steel (Hygienic)"]
      }
    ],
    indicativeSpecs: [
      { label: "Operating Pressure", indicativeValue: "Up to 25-30 bar(g) (gasketed) / up to 50+ bar (welded/brazed)", notes: "Subject to plate thickness and frame type" },
      { label: "Operating Temperature", indicativeValue: "-35°C up to 180°C (gasketed) / up to 400°C (welded)", notes: "Constrained by gasket compound limits" },
      { label: "Flow Rate Capacity", indicativeValue: "From 0.5 m³/h up to 4,500 m³/h per frame", notes: "Multi-pass designs accommodate high flows" },
      { label: "Temperature Approach", indicativeValue: "Down to 1.0°C (1.8°F)", notes: "Superior recovery in heat economizer loops" }
    ],
    designStandards: [
      "ASME Section VIII Div. 1 (where pressure vessels require stamping)",
      "API 662 Part 1 (Plate Heat Exchangers for General Refinery Service)",
      "3-A Sanitary Standards (Sanitary / Dairy configurations)",
      "CE-PED 2014/68/EU (Pressure Equipment Directive)"
    ],
    image: "/images/products/plate-heat-exchanger.png",
    schematicType: "Gasketed / Semi-Welded / Brazed Plate Architecture",
    relatedSlugs: ["spiral", "shell-and-tube"]
  },
  {
    id: "double-pipe",
    slug: "double-pipe",
    name: "Double Pipe Heat Exchanger",
    categoryTag: "DOUBLE PIPE HEAT EXCHANGER MANUFACTURER",
    tagline: "True counter-current performance for low-flow, high-pressure & thermal crosses",
    shortDescription: "Hairpin multi-tube or jacketed pipe exchangers delivering pure counterflow geometry, ideal for high temperature crosses, extreme pressure differentials, and cyclic thermal duties.",
    highlights: ["Pure counter-current flow", "Up to 400+ bar pressure", "Zero expansion stress"],
    overview: "Double pipe and multi-tube hairpin heat exchangers represent a specialized, mechanically robust solution designed specifically for duties where thermal crossing occurs (where hot fluid outlet is cooler than cold fluid outlet). With their true counter-current geometry and independent thermal expansion capabilities, hairpin exchangers avoid thermal stress issues common in conventional multi-pass shell and tube units.",
    workingPrinciple: "Consisting of a pipe mounted concentrically inside a larger diameter outer pipe in a U-shaped 'hairpin' orientation. One fluid flows through the inner pipe (or multi-tube bundle) while the other flows in the surrounding annular space. Pure counter-current flow maximizes log mean temperature difference (LMTD) without temperature correction factor penalties.",
    keyFeatures: [
      "Pure counter-current flow ensures 100% effective temperature difference (Ft = 1.0)",
      "Exceptional capability to handle extreme thermal crosses without multiple shells",
      "Independent free-floating hairpin bend accommodates severe thermal expansion",
      "Modular design: sections can be connected in series, parallel, or series-parallel combinations",
      "Available with longitudinal finned inner tubes to balance unequal film coefficients",
      "High pressure containment: inner tube design pressures up to 400+ bar"
    ],
    applications: [
      "Severe thermal cross duties where hot stream exits cooler than cold stream",
      "High-pressure gas heating and supercritical fluid processing",
      "Heavy oil and bitumen heating using thermal fluid or high-pressure steam",
      "Polymer processing, viscous resin heating, and crystallization cooling",
      "Pilot plants, specialty chemical reactors, and small-volume continuous loops"
    ],
    materials: [
      {
        category: "Inner Tube / Pipe",
        options: ["Carbon Steel (seamless)", "Stainless Steel (316/316L, 304L, 310)", "Alloy 20", "Inconel 625", "Hastelloy C-276", "Duplex 2205"]
      },
      {
        category: "Outer Pipe / Annulus",
        options: ["Heavy-wall seamless Carbon Steel", "Stainless Steel Schedule 40/80"]
      },
      {
        category: "Internal Finning (Optional)",
        options: ["Continuous welded longitudinal fins in Carbon Steel or Stainless"]
      }
    ],
    indicativeSpecs: [
      { label: "Inner Tube Pressure", indicativeValue: "Up to 400+ bar(g)", notes: "Engineered for high differential pressures" },
      { label: "Shell / Annulus Pressure", indicativeValue: "Up to 150 bar(g)", notes: "Independent pressure rating per side" },
      { label: "Operating Temperature", indicativeValue: "-50°C to +500°C", notes: "No thermal expansion stress issues" },
      { label: "Design Codes", indicativeValue: "ASME Section VIII Div 1, TEMA, B31.3", notes: "Fabricated with full weld radiograph inspection" }
    ],
    designStandards: [
      "ASME Section VIII Div. 1",
      "ASME B31.3 Process Piping",
      "TEMA (applicable sections)"
    ],
    image: "/images/products/double-pipe.png",
    schematicType: "Hairpin Multi-Tube & Jacketed Annular Architecture",
    relatedSlugs: ["u-tube-bundle", "shell-and-tube", "spiral"]
  },
  {
    id: "spiral",
    slug: "spiral",
    name: "Spiral Heat Exchanger",
    categoryTag: "SPIRAL HEAT EXCHANGER MANUFACTURERS",
    tagline: "Unsurpassed anti-fouling performance for heavy slurries, sludges & fibrous media",
    shortDescription: "Single curved channel technology engineered to handle severe fouling fluids, suspended solids, fibrous materials, and heavy slurries without clogging.",
    highlights: ["Self-cleaning flow paths", "Up to 25 bar design", "Zero inter-tube fouling"],
    overview: "Spiral heat exchangers (SHE) feature two concentric spiral flow channels formed by rolling two flat metal plates around a central core. The continuous single-channel geometry creates a self-cleaning scrubbing effect: whenever local fouling begins to accumulate, the cross-sectional velocity increases locally, dynamically scouring away the deposit. This makes spiral exchangers the premier choice for wastewater sludges, distillery slops, paper pulp, and difficult chemical slurries.",
    workingPrinciple: "Two long metal strips are rolled around a split center to create two concentric spiral flow paths. Alternate channels are welded shut on opposite sides and closed with removable covers. Fluid flows in a continuous curved path from the periphery to the center (or vice versa), establishing uniform velocity profiles and intense turbulence without dead zones or stagnation pockets.",
    keyFeatures: [
      "Self-cleaning single-channel flow eliminates deposit stagnation and clogging",
      "Ideal for high-fouling fluids, high solid concentrations, and fibrous slurries",
      "Full counter-current flow with exceptional temperature cross capability",
      "Compact cylindrical shape minimizing floor area requirements",
      "Removable flat end covers grant complete 100% mechanical access for inspection",
      "Low pressure drop achieved through uniform velocity and absence of sharp directional turns"
    ],
    applications: [
      "Municipal & industrial wastewater primary and digested sludge heating/cooling",
      "Bioethanol fermentation broth, spent wash, distillery slops, and vinasse",
      "Pulp and paper black liquor, fibrous white water, and bleaching effluent",
      "Mining mineral slurries and tailing heat recovery",
      "Chemical viscous polymer cooling and slurried crystallizers"
    ],
    materials: [
      {
        category: "Spiral Plates",
        options: ["AISI 304L & 316L Stainless Steel", "Duplex Stainless Steel (2205 / 2507)", "Titanium Gr. 1 / 2", "SMO 254", "Hastelloy C-276"]
      },
      {
        category: "End Covers & Flanges",
        options: ["Carbon Steel with Stainless Lining", "Solid Stainless Steel", "PTFE / Rubber coated"]
      },
      {
        category: "Cover Gaskets",
        options: ["Compressed fiber", "PTFE envelope", "Spiral wound graphite", "FKM / Elastomeric O-rings"]
      }
    ],
    indicativeSpecs: [
      { label: "Operating Pressure", indicativeValue: "Full vacuum up to 25 bar(g)", notes: "Optimal for low-to-medium pressure sludge lines" },
      { label: "Operating Temperature", indicativeValue: "-50°C up to +400°C", notes: "Accommodates high thermal variations" },
      { label: "Channel Gap", indicativeValue: "5 mm to 30 mm customized gap", notes: "Engineered to largest particulate diameter" },
      { label: "Heat Transfer Area", indicativeValue: "Up to 500+ m² in a single compact spiral body", notes: "Substantial space savings vs shell-and-tube" }
    ],
    designStandards: [
      "ASME Section VIII Div. 1",
      "EN 13445 Unfired Pressure Vessels",
      "AD 2000-Merkblatt"
    ],
    image: "/images/products/spiral.png",
    schematicType: "Concentric Single-Channel Curved Architecture",
    relatedSlugs: ["plate-heat-exchanger", "shell-and-tube"]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

