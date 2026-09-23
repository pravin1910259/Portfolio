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

export const ABOUT = {
  paragraphs: [
    "Hi, I am Pravin Salla — a Mechanical Engineer with a hands-on approach to design, testing, and problem solving, drawn to projects where an idea has to survive contact with real hardware and real data.",
    "I'm currently completing my M.S. in Mechanical & Aerospace Engineering at UC Davis, where my work centers on applied research: taking a system from a CAD model through instrumentation, testing, and analysis to a conclusion backed by data rather than assumption. My background spans a mix of research and industry-style engineering — from friction and wear testing on custom rigs, to rapid prototyping and molding tooling for consumer products, to training students on CNC machining and the full CAD-to-CAM workflow. That range has given me a practical feel for what it takes to move a design from concept to something that actually gets built.",
    "I work comfortably across CAD tools like SolidWorks, Fusion 360, CATIA, and Onshape, alongside ANSYS (Mechanical, Fluent, and Additive) and MATLAB (Simulink, Simscape) — and I like bringing a structured, data-driven approach to problems that mix mechanical design with manufacturability and real-world use.",
  ],
  facts: [
    { label: "LOCATION", value: "Davis, CA — open to relocation" },
    { label: "EDUCATION", value: "M.S. Mechanical & Aerospace Engineering, UC Davis (Dec 2026)" },
    { label: "FOCUS", value: "Design → Instrument → Test → Data-backed conclusions" },
    { label: "CORE TOOLS", value: "SolidWorks · Fusion 360 · CATIA · Onshape · ANSYS · MATLAB" },
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
    slug: "gsr-ahmct-caltrans",
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
    slug: "gta-eme50-manufacturing",
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
    slug: "design-intern-ayka",
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
    slug: "subsonic-wind-tunnel",
    title: "Subsonic Wind Tunnel — Design, CFD & Fabrication",
    category: "THERMAL-FLUIDS / CFD",
    period: "JAN 2024 — APR 2024",
    metrics: ["9.4 m/s test-section velocity", "0.42% turbulence intensity", "Contraction ratio 8.29"],
    description:
      "Designed and fabricated an open-circuit, suction-type wind tunnel from first principles — 8.29-ratio contraction cone, hexagonal honeycomb settling chamber, 250×250×400 mm transparent acrylic test section, and diffuser — in SolidWorks, welded steel, and acrylic. Validated in ANSYS Fluent (k-ω, ~836K-node mesh), achieving 9.4 m/s test-section velocity at turbulence intensity as low as 0.42%, confirmed via smoke visualization and anemometer testing on 3D-printed airfoil and vehicle models.",
    image: "/projects/windtunnel/cover.jpg",
    gallery: [
      { src: "/projects/windtunnel/fabrication-contraction.jpg", caption: "Fabricated contraction & settling chamber — welded sheet steel" },
      { src: "/projects/windtunnel/diffuser-section.jpg", caption: "Welded diffuser section on its stand" },
      { src: "/projects/windtunnel/fan.jpg", caption: "Axial fan drive section" },
      { src: "/projects/windtunnel/test-model-jet.jpg", caption: "3D-printed scale jet mounted in the acrylic test section" },
      { src: "/projects/windtunnel/fluent-pathlines.jpg", caption: "ANSYS Fluent — pathlines colored by velocity magnitude" },
      { src: "/projects/windtunnel/fluent-streamlines.jpg", caption: "CFD streamlines through honeycomb settling chamber & contraction" },
      { src: "/projects/windtunnel/fluent-residuals.jpg", caption: "Solver convergence — scaled residuals (k-ω)" },
      { src: "/projects/windtunnel/team-tunnel.jpg", caption: "Team with faculty mentor and the completed tunnel" },
    ],
    tags: ["SolidWorks", "ANSYS Fluent", "Welding & Fabrication", "Smoke Visualization"],
    writeup: [
      {
        heading: "Approach",
        paragraphs: [
          "The goal was a working low-speed wind tunnel for flow visualization on small scale models: an aerofoil, a car, and an aircraft. We worked in four stages. First we reviewed the classic design literature (Barlow, Rae & Pope; Mehta & Bradshaw; Bell & Mehta) to pull out the rules of thumb for each component. Then we modeled every section in SolidWorks, checked the assembled geometry with CFD in ANSYS Fluent, and built the tunnel for ₹17,550 (about $210).",
        ],
      },
      {
        heading: "Key Design Decisions",
        items: [
          { lead: "Open-circuit, suction type.", text: "A closed-circuit tunnel was too big and too expensive for our space and budget. A blower-type tunnel pushes the fan's turbulence straight into the test section, which is only acceptable for rough demonstrations. Putting the fan at the downstream end to pull air through gave cleaner flow, used less power, and made the tunnel quieter and less prone to vibration." },
          { lead: "Contraction ratio of 8.29.", text: "The inlet is 720 × 720 mm and the test section is 250 × 250 mm. Screen losses fall as 1/c², so a larger ratio is better, but the size, cost, and risk of flow separation rise with it. Small tunnels usually land between 6 and 9, and we sized ours inside that range. A hexagonal honeycomb in the settling chamber straightens the incoming air and removes swirl — we chose the hexagonal shape because it has the lowest pressure drop." },
          { lead: "Test section: 400 mm long, clear acrylic.", text: "Its length is 1.6 times its hydraulic diameter, inside the recommended range of 0.5 to 3. The model must block less than 10% of the cross-section. We used 6 mm acrylic so the flow could be watched directly, and added a hinged, laser-cut access door so models are quick to swap." },
          { lead: "Two-piece diffuser with an area ratio of 2.68.", text: "The diffuser widens from 250 mm to 410 mm, inside the 2–5 guideline. This slows the jet before it leaves the tunnel, and splitting it into two pieces made fabrication and assembly easier." },
        ],
      },
      {
        heading: "Validating with CFD",
        paragraphs: [
          "I meshed the full tunnel at a 10 mm element size, which a mesh-convergence check supported and which kept us under the student license's limit of 1 million nodes. I used the k-ω model because it handles near-wall behavior and adverse pressure gradients well in internal flows. Fluent wouldn't let us set the fan's suction at the true outlet, so I treated the diffuser end as the inlet and gave it a negative velocity, running four cases from 1.8 to 3.0 m/s based on the fan manufacturer's specs.",
          "Across those cases, peak test-section velocity went from 5.6 to 9.4 m/s. Minimum turbulence intensity stayed below 1% but rose with speed, from 0.42% to 0.86%. Pathlines showed smooth, attached flow through the test section.",
        ],
      },
      {
        heading: "Build",
        bullets: [
          "Contraction and diffuser: 1.5 mm mild steel sheet, cut on a hydraulic press, welded, and sealed with silicone to stop air leaks.",
          "Fan: a 380 mm Crompton industrial exhaust fan with a speed regulator.",
          "Models: 3D-printed.",
          "Measurement: an anemometer for airspeed, and incense-stick smoke with LED lighting to show the flow.",
        ],
      },
      {
        heading: "Lessons",
        items: [
          { lead: "Plan the instrumentation from the start.", text: "We aimed to measure lift and drag, but without load cells we were limited to smoke visualization and airspeed readings. Next time I'd design the force balance and sensor mounts into the test section from the beginning." },
          { lead: "Alignment is harder than it looks.", text: "Joining five separately built sections on one straight axis was the hardest part of the build. Flanges or locating features designed into the CAD would have saved time." },
          { lead: "Treat CFD as a design check, not a result.", text: "The simulations confirmed the geometry made sense, but they were never compared against measured velocities in the tunnel. Validating one case with the anemometer would have made the results much stronger." },
          { lead: "Constraints set the design.", text: "The student mesh limit, a ₹17.5k budget, and parts available off the shelf decided about as much as the textbook guidelines did. Learning to design within those limits was the most useful skill I took from this project." },
        ],
      },
    ],
    links: [],
    span: "wide",
  },
  {
    id: "project-card-fault-diagnosis",
    slug: "rotating-machinery-fault-diagnosis",
    title: "Fault Diagnosis of Unbalance Mass in Rotating Machinery",
    category: "PUBLISHED RESEARCH — SAGE 2025",
    period: "SEP 2023 — DEC 2023",
    metrics: ["Noise & Vibration Worldwide, 2025", "FE within ~10% of test", "500–1500 RPM, single & multi-plane"],
    description:
      "Co-authored peer-reviewed study (Desai, Salla, et al.) on unbalance fault diagnosis using a Machinery Fault Simulator — FFT-based vibration analysis quantifying the effects of unbalance mass magnitude (1.4–4.96 g), angular position, and rotational speed in single- and multi-plane configurations. SolidWorks rotor models and ANSYS modal analysis validated natural frequencies against experiment with deviations generally below 10%.",
    image:
      "https://images.unsplash.com/photo-1678225867994-e7a5b071ebfd?crop=entropy&cs=srgb&fm=jpg&q=85&w=940",
    tags: ["FFT Analysis", "ANSYS Modal", "SolidWorks", "T-VibLab", "Predictive Maintenance"],
    links: [
      { label: "READ PUBLICATION", url: "https://doi.org/10.1177/09574565251394417" },
    ],
    span: "tall",
  },
  {
    id: "project-card-hahn-grinder",
    slug: "hahn-grinder-friction",
    title: "Hahn Grinder Friction Characterization & Data Analysis",
    category: "EXPERIMENTAL / TRIBOLOGY",
    period: "JAN 2025 — JUN 2025",
    metrics: ["8 piston-speed levels", "Lubricated vs dry", "NI DAQ pipeline"],
    description:
      "Characterized friction on a cylindrical grinder's linear axis using a reciprocating sled setup at MASTER Lab, UC Davis — integrating load cell and potentiometer signals via NI DAQ. Built MATLAB scripts converting raw voltage to physical units, segmenting strokes, and analyzing friction-velocity trends and cycle-to-cycle repeatability for servo sizing and tribological studies.",
    image:
      "https://images.pexels.com/photos/4116228/pexels-photo-4116228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["MATLAB", "NI DAQ", "Load Cell", "Signal Processing"],
    links: [],
    span: "tall",
  },
  {
    id: "project-card-vehicle-aero",
    slug: "vehicle-aerodynamics-cfd",
    title: "Effect of Accessories on Vehicle Aerodynamics — CFD Study",
    category: "AUTOMOTIVE / CFD",
    period: "B.TECH MINI PROJECT",
    metrics: ["Cd 0.3441 → 0.2872 (−16.5%)", "1.1M-element mesh", "150 km/h inlet"],
    description:
      "Modelled a Koenigsegg Jesko Absolut in SolidWorks and ran ANSYS Fluent CFD (k-ε, 1,098,393 elements) across spoiler, wing, diffuser, and fin configurations at 150 km/h. The spoiler + diffuser combination cut drag coefficient 16.53% below baseline while diffusers reduced drag in every tested case; wings traded +27.8% drag for significant downforce (Cl −0.115 with diffuser). Findings drawn from pressure contours and velocity streamline analysis.",
    image: "/projects/vehicle-aero/17_velocity_contour_e_fins.jpg",
    gallery: [
      { src: "/projects/vehicle-aero/01_blueprint_dimensions.jpg", caption: "Body modelled from blueprints — 4320 × 1990 × 1090 mm" },
      { src: "/projects/vehicle-aero/02_baseline_cad_iso_side.jpg", caption: "Baseline body — SolidWorks model" },
      { src: "/projects/vehicle-aero/03_cad_spoiler.jpg", caption: "Lip spoiler geometry" },
      { src: "/projects/vehicle-aero/04_cad_rear_wing.jpg", caption: "Rear wing — 1700 mm span, 33.9° angle of attack" },
      { src: "/projects/vehicle-aero/05_cad_diffuser_part_dims.jpg", caption: "Diffuser part — 1000 mm long, 17°, 7.5 mm blades" },
      { src: "/projects/vehicle-aero/06_cad_diffuser_part_side.jpg", caption: "Diffuser profile" },
      { src: "/projects/vehicle-aero/07_cad_diffuser_on_car.jpg", caption: "Diffuser mounted on the body" },
      { src: "/projects/vehicle-aero/08_cad_fins.jpg", caption: "Mid-rear fins, 25 mm thick" },
      { src: "/projects/vehicle-aero/09_cad_spoiler_plus_diffuser.jpg", caption: "Spoiler + diffuser combination" },
      { src: "/projects/vehicle-aero/10_cad_wing_plus_diffuser.jpg", caption: "Wing + diffuser combination" },
      { src: "/projects/vehicle-aero/11_cad_fins_plus_diffuser.jpg", caption: "Fins + diffuser combination" },
      { src: "/projects/vehicle-aero/12_cfd_control_volume.jpg", caption: "Virtual wind tunnel — 12 × 4 × 8 m, 150 km/h inlet, moving ground" },
      { src: "/projects/vehicle-aero/13_cfd_mesh.jpg", caption: "Mesh — ~1.1M elements, refined at the surface" },
      { src: "/projects/vehicle-aero/14_streamlines_cases_a-d.jpg", caption: "Streamlines — baseline, spoiler, wing, diffuser" },
      { src: "/projects/vehicle-aero/15_streamlines_cases_e-h.jpg", caption: "Streamlines — fins and combinations" },
      { src: "/projects/vehicle-aero/16_velocity_contours_a-d.jpg", caption: "Velocity contours — baseline, spoiler, wing, diffuser" },
      { src: "/projects/vehicle-aero/18_velocity_contours_f-h.jpg", caption: "Velocity contours — spoiler/wing/fins + diffuser" },
      { src: "/projects/vehicle-aero/19_chart_drag_coefficient.jpg", caption: "Drag coefficient by configuration" },
      { src: "/projects/vehicle-aero/20_chart_lift_coefficient.jpg", caption: "Lift coefficient by configuration" },
      { src: "/projects/vehicle-aero/21_chart_drag_force.jpg", caption: "Drag force by configuration" },
      { src: "/projects/vehicle-aero/22_chart_lift_force.jpg", caption: "Lift force by configuration" },
    ],
    writeup: [
      {
        heading: "Approach",
        paragraphs: [
          "The question was simple: which aero add-ons actually reduce drag on a high-performance car, and what do the others cost you? I modeled the body of a Koenigsegg Jesko Absolut in SolidWorks from its blueprints (4320 × 1990 × 1090 mm, 90 mm ground clearance). Then I built eight versions of it: the stock body, each of four add-ons on its own (lip spoiler, rear wing, rear diffuser, fins), and three combinations with the diffuser. All eight ran through ANSYS Fluent under the same conditions, so the only thing changing between runs was the geometry.",
        ],
      },
      {
        heading: "Key Design Decisions",
        items: [
          { lead: "Every case ran under the same conditions.", text: "The car sat in a virtual wind tunnel 12 × 4 × 8 m. Air entered at 150 km/h — the speed where the add-ons start to matter — and the ground moved at the same speed to mimic a real road instead of a stationary floor. The outlet was open to ambient pressure. The car's frontal area of 1.98 m² blocks about 6% of the tunnel's cross-section, so the walls don't distort the flow much." },
          { lead: "Rear wing.", text: "1700 mm span at a 33.9° angle of attack, to test the classic trade of downforce for drag." },
          { lead: "Diffuser.", text: "1000 mm long, angled at 17°, with 7.5 mm blades. A steeper angle risks the flow separating and adding drag; a shallower one does very little." },
          { lead: "Fins.", text: "25 mm thick, placed at the mid-rear like the real Jesko Absolut's." },
          { lead: "Mesh and turbulence model.", text: "The mesh had about 1.1 million elements, finer close to the car's surface. I used the standard k-ε turbulence model with wall functions because it converges reliably and is cheap to run on a student setup. Solutions were run to a residual of 1e-4." },
        ],
      },
      {
        heading: "Results",
        table: {
          headers: ["Configuration", "Cd", "Change in drag", "Cl"],
          rows: [
            ["Baseline", "0.344", "—", "0.718"],
            ["Spoiler + diffuser", "0.287", "−16.5%", "0.317"],
            ["Spoiler", "0.292", "−15.2%", "0.318"],
            ["Diffuser", "0.334", "−2.8%", "0.688"],
            ["Fins", "0.339", "−1.6%", "0.617"],
            ["Rear wing", "0.477", "+38.5%", "−0.050"],
            ["Wing + diffuser", "0.472", "+37.0%", "−0.115"],
          ],
        },
        paragraphs: [
          "The spoiler did most of the work. On its own it cut drag by 15% and lift by 56%, because it shrinks the low-pressure wake behind the car, as the velocity contours show. Adding the diffuser to it gave the best result overall: 16.5% less drag, which works out to about 121 N less at 150 km/h.",
          "The rear wing was the only add-on that produced real downforce. The price was 38% more drag and the largest recirculation zone of any case. The diffuser lowered drag in every combination it was added to.",
        ],
      },
      {
        heading: "Lessons",
        items: [
          { lead: "An add-on's job is not always lower drag.", text: "The fins cut drag by less than 2%, yet Koenigsegg puts them on its lowest-drag car. Their purpose is stability at high speed, which a drag-and-lift study can't measure. What a part is for decides how you should judge it." },
          { lead: "Drag and downforce pull against each other.", text: "The wing made the car worse for top speed and better for cornering. The right choice depends on what the car is being designed to do, not on one number." },
          { lead: "Look at the flow, not just the coefficients.", text: "The streamlines and velocity contours explained every number in the table. The less the flow separated at the rear, the lower the drag." },
          { lead: "What I'd do differently.", text: "I simulated only at 150 km/h and scaled the forces to 70 and 300 km/h, which assumes Cd stays constant with speed. I'd run each speed separately. I'd also run a mesh-independence study, lengthen the domain so the wake has room to develop, and try k-ω SST, which predicts flow separation better. That matters here because separation is exactly what the add-ons change." },
        ],
      },
    ],
    tags: ["SolidWorks", "ANSYS Fluent", "k-ε Turbulence", "Aero Optimization"],
    links: [],
    span: "wide",
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
