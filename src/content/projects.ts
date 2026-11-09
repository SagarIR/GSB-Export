export interface ApplicationCase {
  id: string;
  slug: string;
  title: string;
  type: "Illustrative Application" | "Typical Engineering Application";
  industry: string;
  equipmentType: string;
  dutySummary: string;
  challenge: string;
  technicalSolution: string;
  equipmentSpecs: {
    label: string;
    value: string;
  }[];
  keyBenefits: string[];
}

export const APPLICATION_CASES: ApplicationCase[] = [
  {
    id: "refinery-crude-preheat",
    slug: "refinery-crude-preheat",
    title: "Crude Distillation Unit Preheat & Process Cooling",
    type: "Illustrative Application",
    industry: "Oil & Gas / Refining",
    equipmentType: "Shell and Tube Heat Exchanger (TEMA AES/AET)",
    dutySummary: "High-temperature crude oil pre-heating utilizing hot atmospheric column residue to maximize furnace energy recovery.",
    challenge: "Heavy crude streams produce severe fouling over extended operational runs, while high operating temperatures (320°C) and pressures (45 bar) generate substantial differential thermal expansion between tubes and shell.",
    technicalSolution: "Floating head TEMA AET configuration allowing unrestricted bundle thermal expansion. Tubes engineered with SA 214 seamless metallurgy with optimized baffle spacing to maintain high fluid velocity and suppress particulate sedimentation.",
    equipmentSpecs: [
      { label: "Configuration", value: "TEMA Type AET (Split-backing ring floating head)" },
      { label: "Design Pressure", value: "50 bar(g) tube-side / 30 bar(g) shell-side" },
      { label: "Design Temperature", value: "340°C" },
      { label: "Metallurgy", value: "Carbon Steel Shell / SS 316L Tube Bundle" }
    ],
    keyBenefits: [
      "Accommodates major thermal expansion without tubesheet strain",
      "Removable bundle allows thorough mechanical hydro-blasting during plant turnaround",
      "Significantly reduces crude heater fuel consumption"
    ]
  },
  {
    id: "dairy-pasteurization",
    slug: "dairy-pasteurization",
    title: "Sanitary Milk HTST Pasteurization & Heat Regeneration",
    type: "Illustrative Application",
    industry: "Food, Beverage & Dairy",
    equipmentType: "Sanitary Gasketed Plate Heat Exchanger (PHE)",
    dutySummary: "Continuous High-Temperature Short-Time (HTST) milk pasteurization with integrated 92% thermal regeneration.",
    challenge: "Preventing microbiological contamination and thermal burning of milk solids while minimizing external steam and chiller utility consumption.",
    technicalSolution: "Multi-section plate pack configured with food-grade electropolished AISI 316L corrugated plates and FDA-compliant clip-on EPDM gaskets. Incoming raw cold milk is heated by outgoing pasteurized hot milk, achieving exceptional energy recovery.",
    equipmentSpecs: [
      { label: "Configuration", value: "Multi-section sanitary frame with regenerative exchange" },
      { label: "Heat Regeneration Efficiency", value: "Up to 92%" },
      { label: "Holding Temperature", value: "72°C for 15 seconds" },
      { label: "Plate Material", value: "Electropolished AISI 316L (Ra < 0.8 µm)" }
    ],
    keyBenefits: [
      "Drastic 90%+ reduction in boiler steam consumption via regenerative pass",
      "Full Clean-in-Place (CIP) cleanability without opening plate pack",
      "Gentle, uniform heating prevents milk protein scorching"
    ]
  },
  {
    id: "arid-gas-compression-cooler",
    slug: "arid-gas-compression-cooler",
    title: "Natural Gas Compression Intercooler in Arid Desert Setting",
    type: "Illustrative Application",
    industry: "Gas Processing & Power Utilities",
    equipmentType: "Air-Cooled Heat Exchanger (Fin-Fan Cooler)",
    dutySummary: "Cooling multi-stage compressed natural gas between compression stages in a water-scarce desert location.",
    challenge: "Extreme ambient air temperatures reaching +52°C in summer, zero availability of municipal cooling water, and high gas pressures up to 120 bar.",
    technicalSolution: "Forced-draft air-cooled heat exchanger fitted with embedded 'G-fin' aluminum tubes and forged steel plug headers. Dual-speed high-efficiency axial fans modulate airflow to handle severe ambient fluctuations without freeze-up in winter.",
    equipmentSpecs: [
      { label: "Design Code", value: "API Standard 661 / ASME Section VIII Div 1" },
      { label: "Gas Operating Pressure", value: "120 bar(g)" },
      { label: "Ambient Design Point", value: "+52°C dry bulb" },
      { label: "Fin Construction", value: "Embedded G-type aluminum fins on carbon steel base tubes" }
    ],
    keyBenefits: [
      "100% water-free thermal rejection eliminates cooling towers and water treatment costs",
      "Plug-header construction allows individual tube cleaning and mechanical inspection",
      "Heavy-duty marine-grade epoxy coatings resist abrasive blowing sand"
    ]
  },
  {
    id: "anaerobic-sludge-digester",
    slug: "anaerobic-sludge-digester",
    title: "Anaerobic Digester Sewage Sludge Heating & Energy Recovery",
    type: "Illustrative Application",
    industry: "Wastewater & Municipal Utilities",
    equipmentType: "Spiral Heat Exchanger (SHE)",
    dutySummary: "Maintaining anaerobic digester sludge at 37°C mesophilic temperatures utilizing hot effluent water.",
    challenge: "Raw sewage sludge contains high concentrations of suspended organic solids, rags, and fibers that clog conventional shell-and-tube or narrow-gap plate exchangers within days.",
    technicalSolution: "Single-channel concentric spiral heat exchanger with wide 20 mm flow channels. The continuous curved flow path generates a scrubbing effect: if particles start settling, the local cross-section constricts, velocity increases, and the flow automatically scours away the deposit.",
    equipmentSpecs: [
      { label: "Channel Spacing", value: "20 mm wide unobstructed passage" },
      { label: "Design Pressure", value: "10 bar(g)" },
      { label: "Metallurgy", value: "AISI 316L Stainless Steel" },
      { label: "Access Type", value: "Removable hinged end covers for full mechanical inspection" }
    ],
    keyBenefits: [
      "Virtually clog-free operation handling up to 8% dry solids sludge",
      "Significant maintenance cost reduction compared to multi-tube exchangers",
      "Compact footprint fits easily within confined wastewater plant basements"
    ]
  }
];
