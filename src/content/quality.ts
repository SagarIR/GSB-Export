export const QUALITY_SYSTEM = {
  headline: "Quality Assurance & Inspection Protocols",
  overview: "In industrial heat exchanger supply, equipment reliability directly dictates plant uptime and personnel safety. GSB Export upholds stringent quality assurance frameworks, coordinating comprehensive Inspection and Test Plans (ITP) from raw material verification through hydrostatic proof testing and final export inspection.",
  pillars: [
    {
      title: "Raw Material Traceability & Certification",
      description: "Every plate, seamless tube, forging, and welding consumable is verified against original Mill Test Certificates (MTC) conforming to EN 10204 Type 3.1 (or Type 3.2 upon customer requirement). Heat numbers and material markings are tracked through all manufacturing stages.",
      details: ["Positive Material Identification (PMI) using XRF spectrometers", "Tensile and impact testing verification against ASME specifications", "Intergranular corrosion test certification where specified"]
    },
    {
      title: "Weld Engineering & Procedure Qualification",
      description: "All welding operations adhere to strict Welding Procedure Specifications (WPS) supported by Procedure Qualification Records (PQR) in compliance with ASME Section IX and EN ISO 15614.",
      details: ["Welder Performance Qualifications (WPQ) kept active and logged", "Automated orbital TIG welding for critical tube-to-tubesheet joints", "Pre-heating and Post-Weld Heat Treatment (PWHT) monitoring when required"]
    },
    {
      title: "Non-Destructive Examination (NDT)",
      description: "Certified Level II / III ASNT and ISO 9712 technicians conduct rigorous non-destructive evaluations across pressure containment seams and critical attachments.",
      details: [
        "Radiographic Testing (RT) on longitudinal and circumferential vessel welds",
        "Ultrasonic Testing (UT) for plate lamination and heavy-wall forgings",
        "Liquid Penetrant (PT) inspection on tube-to-tubesheet welds and stainless nozzles",
        "Magnetic Particle Testing (MT) on ferromagnetic weld preps and attachments"
      ]
    },
    {
      title: "Pressure & Leakage Verification",
      description: "Every completed heat exchanger undergoes mandatory pressure testing witnessed and recorded using calibrated electronic chart loggers.",
      details: [
        "Hydrostatic pressure testing at 1.3x to 1.5x design pressure per ASME / PED",
        "Pneumatic air-under-water and bubble leak testing on tube joints",
        "Helium mass spectrometer leak detection for critical high-vacuum or hazardous gas duties"
      ]
    },
    {
      title: "Dimensional & Cleanliness Inspection",
      description: "Thorough dimensional verification against approved General Arrangement (GA) drawings before sign-off.",
      details: [
        "Nozzle projection, elevation, orientation, and flange face finish verification",
        "Internal tube bundle cleanliness, descaling, and moisture-free drying",
        "Stainless steel pickling, passivation, and surface roughness verification"
      ]
    },
    {
      title: "Third-Party Inspection Coordination (TPIA)",
      description: "We coordinate stage-wise witnessing and final release with recognized international third-party inspection authorities.",
      details: [
        "TÜV Rheinland / TÜV NORD",
        "Bureau Veritas (BV)",
        "DNV GL",
        "Lloyd's Register (LR)",
        "SGS India / Intertek"
      ]
    }
  ],
  itpPhases: [
    { stage: "Stage 1", name: "Pre-Production", activities: "Raw material verification, MTC review, WPS/PQR review, calibration verification" },
    { stage: "Stage 2", name: "In-Process Fabrication", activities: "Fit-up inspection, shell rolling checks, tubesheet hole drilling verification, root pass welding check" },
    { stage: "Stage 3", name: "Assembly & Expansion", activities: "Tube bundle insertion, tube expansion torque logging, tube-to-tubesheet seal welding inspection" },
    { stage: "Stage 4", name: "Final Testing & NDT", activities: "100% NDT audit, hydrostatic pressure proof test, pneumatic testing, dimensional sign-off" },
    { stage: "Stage 5", name: "Surface Treatment & Packing", activities: "Pickling & passivation, marine epoxy painting, flange face protection, seaworthy crating audit" }
  ],
  standardsDisclaimer: "Quality standards, design stamps, and inspection witnessing protocols are established based on individual project specifications, client engineering standards, and target country regulations."
};
