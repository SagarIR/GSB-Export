export interface EngineeringPhase {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const ENGINEERING_SERVICES = {
  overview: "Thermal engineering is the backbone of efficient industrial process operations. GSB Export coordinates comprehensive technical evaluation and engineering consultation between process plant buyers and partner manufacturing engineers, ensuring every heat exchanger is thermally optimized, mechanically resilient, and fully compliant with project design codes.",
  capabilities: [
    {
      title: "Thermal Rating & Sizing Evaluation",
      description: "Verification of thermal duties using proven heat transfer equations and specialized rating software. We evaluate log mean temperature difference (LMTD), convective heat transfer coefficients, and foul-factor allowances to prevent under-sizing or excessive pressure drop.",
      focusAreas: ["LMTD & correction factors (Ft)", "Reynolds number & flow regime assessment", "Allowable pressure drop optimization", "Thermal cross mitigation"]
    },
    {
      title: "Mechanical Design & Pressure Vessel Compliance",
      description: "Coordination of mechanical calculations for shells, tubesheets, channels, covers, and nozzles according to ASME Section VIII Division 1 & 2, TEMA, and API standards, factoring in seismic, wind, and nozzle loads.",
      focusAreas: ["Tubesheet thickness & ligament efficiency", "Shell & channel pressure containment", "Expansion joint & thermal stress analysis", "Nozzle reinforcement calculations"]
    },
    {
      title: "Metallurgy & Corrosion Engineering",
      description: "Selection of optimal base metals, cladding, and weld filler alloys matched to process chemistry, operating temperatures, fluid velocity limits, and risk of chloride stress corrosion cracking or galvanic coupling.",
      focusAreas: ["Sour gas service metallurgy (NACE MR0175)", "Austenitic vs Duplex stainless evaluation", "Titanium & noble nickel alloy integration", "Gasket polymer chemical compatibility"]
    },
    {
      title: "Engineering Drawings & Documentation Review",
      description: "Detailed evaluation of engineering submittals before fabrication kickoff, ensuring all nozzle orientations, piping interfaces, support saddle locations, and clearance envelopes match site layout drawings.",
      focusAreas: ["General Arrangement (GA) drawing review", "Detailed fabrication & nozzle schedule drawings", "Process & thermal data sheet reconciliation", "Bill of Materials (BOM) verification"]
    }
  ],
  workflow: [
    {
      step: "01",
      title: "Process Data Sheet Intake",
      description: "Review of customer RFQ parameters: fluid stream properties, inlet/outlet temperatures, operating pressures, allowable pressure drop, and fouling tendencies.",
      deliverables: ["Process parameter confirmation", "Clarification questionnaires"]
    },
    {
      step: "02",
      title: "Thermal & Mechanical Sizing",
      description: "Technical coordination with specialized design teams to model surface area, tube count, baffle pitch, or plate corrugation geometry.",
      deliverables: ["Thermal performance sheet", "Preliminary GA dimensional drawing"]
    },
    {
      step: "03",
      title: "Metallurgical & Code Alignment",
      description: "Reconciliation of material specifications against project piping classes, ASME/TEMA standards, and customer engineering specifications.",
      deliverables: ["Material specification review", "Code compliance matrix"]
    },
    {
      step: "04",
      title: "Commercial & Technical Proposal",
      description: "Delivery of a transparent, itemized proposal detailing equipment configuration, delivery timelines, inspection test plans (ITP), and shipping terms.",
      deliverables: ["Complete commercial offer", "Detailed technical specification document"]
    }
  ],
  disclaimer: "GSB Export acts as an engineering coordinator and export supply partner. Detailed thermal and mechanical pressure vessel engineering stamps and fabrication are executed in coordination with certified manufacturing facilities."
};
