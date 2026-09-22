export const PROFILE = {
  name: "Pravin Salla",
  role: "Mechanical Engineer",
  affiliation: "MS Candidate — Mechanical & Aerospace Engineering, UC Davis",
  email: "prsalla19@gmail.com",
  phone: "+1 (925) 209-8261",
  location: "Davis, California",
  relocation: "Open to relocation nationwide",
  linkedin: "https://linkedin.com/in/pravin-salla-312609264",
  resumeUrl: "/Pravin_Salla_Resume.pdf",
  availability: "OPEN TO FULL-TIME ROLES — DEC 2026",
  intro:
    "I design, simulate, and build mechanical systems end-to-end — from FEA-validated CAD models to instrumented test rigs on the shop floor. Currently researching heavy-equipment safety systems with Caltrans at UC Davis.",
  metrics: [
    { value: "3.7/4.0", label: "GRADUATE GPA" },
    { value: "1", label: "PEER-REVIEWED PUBLICATION (SAGE)" },
    { value: "40+", label: "PRODUCT CONCEPTS DELIVERED" },
    { value: "836K", label: "NODE CFD MESH VALIDATED" },
  ],
};

export const MARQUEE_ITEMS = [
  "SOLIDWORKS",
  "ANSYS FEA / CFD",
  "GD&T (ASME Y14.5)",
  "MATLAB & SIMULINK",
  "CNC MACHINING",
  "RAPID PROTOTYPING",
  "VIBRATION ANALYSIS",
  "DAQ & INSTRUMENTATION",
  "DFM / DFA",
  "TECHNICAL DOCUMENTATION",
];

export const EXPERIENCE = [
  {
    id: "experience-card-researcher",
    title: "Graduate Student Researcher",
    organization: "UC Davis — AHMCT Research Center (with Caltrans)",
    period: "APR 2026 — PRESENT",
    location: "Sacramento, CA",
    current: true,
    highlights: [
      "Conduct applied research on heavy-equipment safety systems for industrial and construction applications with Caltrans.",
      "Support design, integration, and validation of remote shutdown systems for industrial and construction equipment.",
      "Perform instrumentation setup, pilot testing, and data acquisition for proposed safety systems.",
      "Contribute to technical reports, engineering documentation, and recommendations for field deployment.",
    ],
    tools: ["Instrumentation", "DAQ", "Safety Systems", "Field Validation"],
  },
  {
    id: "experience-card-ta",
    title: "Graduate Teaching Assistant — EME 50: Manufacturing Processes",
    organization: "University of California, Davis",
    period: "AUG 2025 — MAR 2026",
    location: "Davis, CA",
    current: false,
    highlights: [
      "Conducted hands-on instruction in manual milling, lathe, drill press, and CNC machining — covering setup, tooling, machining parameters, and safe shop practices.",
      "Instructed CAD modelling and CAM programming in Fusion 360, reviewing part models, troubleshooting toolpaths and workholding setups, and applying GD&T principles to technical drawings.",
      "Led machining demonstrations for multi-component gyroscope assemblies, reinforcing machining fundamentals and process consistency.",
    ],
    tools: ["Fusion 360 CAM", "CNC", "GD&T", "Shop Instruction"],
  },
  {
    id: "experience-card-intern",
    title: "Design Intern",
    organization: "Ayka Control Systems",
    period: "JUN 2023 — SEP 2023",
    location: "Mumbai, India",
    current: false,
    highlights: [
      "Developed 40+ product concepts and prototypes in SolidWorks and rapid prototyping across consumer and industrial product lines.",
      "Designed injection- and compression-moulding tooling and managed full design-to-manufacture documentation.",
      "Delivered technical reports and presentations to international clients including Offgrid Europe and ClearBot.",
    ],
    tools: ["SolidWorks", "Injection Moulding", "DFM", "Client Delivery"],
  },
];

export const PROJECTS = [
  {
    id: "project-card-wind-tunnel",
    title: "Subsonic Wind Tunnel — Design, CFD & Fabrication",
    category: "THERMAL-FLUIDS / CFD",
    period: "JAN 2024 — APR 2024",
    metrics: ["9.4 m/s test-section velocity", "0.42% turbulence intensity", "~836K-node mesh"],
    description:
      "Co-designed and fabricated a low-speed suction-type wind tunnel from first principles — contraction cone, honeycomb settling chamber, acrylic test section, and diffuser — in welded steel and acrylic. Validated in ANSYS Fluent (k-ω) and confirmed via smoke visualization and anemometer testing on 3D-printed models.",
    image:
      "https://images.pexels.com/photos/22491107/pexels-photo-22491107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["SolidWorks", "ANSYS Fluent", "Welding & Fabrication", "Smoke Visualization"],
    span: "wide",
  },
  {
    id: "project-card-hahn-grinder",
    title: "Hahn Grinder Friction Characterization & Data Analysis",
    category: "EXPERIMENTAL / TRIBOLOGY",
    period: "JAN 2025 — JUN 2025",
    metrics: ["8 piston-speed levels", "Lubricated vs dry", "NI DAQ pipeline"],
    description:
      "Characterized friction on a cylindrical grinder's linear axis using a reciprocating sled setup at MASTER Lab, UC Davis — integrating load cell and potentiometer signals via NI DAQ. Built MATLAB scripts converting raw voltage to physical units, segmenting strokes, and analyzing friction-velocity trends and cycle-to-cycle repeatability for servo sizing and tribological studies.",
    image:
      "https://images.pexels.com/photos/4116228/pexels-photo-4116228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["MATLAB", "NI DAQ", "Load Cell", "Signal Processing"],
    span: "tall",
  },
  {
    id: "project-card-fault-diagnosis",
    title: "Rotating Machinery Fault Diagnosis & Vibration Analysis",
    category: "DYNAMICS / PUBLISHED RESEARCH",
    period: "SEP 2023 — DEC 2023",
    metrics: ["Published — SAGE", "FFT-based analysis", "FE within 10% of test"],
    description:
      "Conducted fault-diagnosis testing on a Machinery Fault Simulator (1.4–4.53 g unbalances, 500–1500 RPM, single- and multi-plane) with FFT-based vibration analysis quantifying effects of unbalance mass, speed, and angular separation. SolidWorks rotor models and ANSYS FE/modal analysis validated natural frequencies within 10% of experiment — co-authored the peer-reviewed article in Noise & Vibration Worldwide (SAGE).",
    image:
      "https://images.unsplash.com/photo-1678225867994-e7a5b071ebfd?crop=entropy&cs=srgb&fm=jpg&q=85&w=940",
    tags: ["FFT Analysis", "ANSYS Modal", "SolidWorks", "SAGE Publication"],
    span: "tall",
  },
];

export const SKILL_GROUPS = [
  {
    name: "CAD & Simulation",
    items: ["SolidWorks", "AutoCAD", "Fusion 360", "ANSYS", "CATIA", "PTC Creo", "Siemens NX", "Abaqus"],
  },
  {
    name: "Engineering Methods",
    items: ["FEA", "FMEA", "GD&T", "Root Cause Analysis", "Tolerance Analysis", "DFM", "CFD", "Failure Analysis", "Design Validation", "Technical Documentation"],
  },
  {
    name: "Programming",
    items: ["MATLAB", "Simulink", "Python", "Arduino IDE"],
  },
  {
    name: "Testing & Controls",
    items: ["LabVIEW", "DAQ", "Sensor Integration", "Signal Processing", "NI SignalExpress", "Frequency-Domain Analysis"],
  },
  {
    name: "Manufacturing & Hardware",
    items: ["CNC Machining (DMG/Haas)", "3D Printing (FDM)", "Laser Cutting", "Milling", "Lathe", "Grinding", "Welding", "Injection Moulding", "Soldering", "Pneumatics", "Hydraulics"],
  },
  {
    name: "Software & Data",
    items: ["Excel", "PowerPoint", "Word", "Power BI (Basic)"],
  },
];

export const EDUCATION = [
  {
    id: "education-card-ucdavis",
    degree: "M.S. Mechanical & Aerospace Engineering",
    institution: "University of California, Davis",
    period: "SEP 2024 — DEC 2026 (EXPECTED)",
    gpa: "3.7 / 4.0",
    coursework: ["Advanced Manufacturing", "Advanced Mechanical Design", "Mechanical Performance of Materials", "Modern Manufacturing Technology"],
  },
  {
    id: "education-card-somaiya",
    degree: "B.Tech Mechanical Engineering — Honors in Design",
    institution: "Somaiya Vidyavihar University",
    period: "SEP 2020 — JUN 2024",
    gpa: "3.6 / 4.0",
    coursework: ["Mechanical System Design", "Process Equipment Design", "Failure Analysis", "Automation", "Elements of Machine Design"],
  },
];

export const INQUIRY_TYPES = ["Job Opportunity", "Research Collaboration", "Internship", "General"];
