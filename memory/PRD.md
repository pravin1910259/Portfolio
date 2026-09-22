# PRD — Pravin Salla Mechanical Engineering Portfolio

## Original Problem Statement
"I want to build a portfolio to help me apply to various job applications. I am Pravin Salla, I am a Mechanical Engineering Student, currently doing my masters and I have also attached my resume, I want a Home section, an experience section, a projects section, and a contact section as well, i can also share with you more projects as well as files to those projects."

## User Personas
- Recruiters / hiring managers in mechanical, aerospace, robotics, automotive, and hardware engineering
- Research labs and PhD/industry R&D teams evaluating a master's candidate
- Pravin himself (site owner receiving contact form messages)

## Architecture
- Frontend: React 19 + Tailwind + framer-motion (scroll reveals, masked line hero) + lenis (momentum scrolling) + shadcn/ui + sonner toasts. Single-page portfolio with sections: Hero, Marquee, Experience (01), Projects (02), Skills (03), Education (04), Contact (05), Footer.
- Backend: FastAPI (`/api` prefix). `POST /api/contact` validates input (pydantic + EmailStr), rate-limits per IP (5/hr), stores in MongoDB `contact_messages`, and emails the owner via Emergent-managed Resend proxy (guardrail-gated, server-side template, escaped interpolation).
- Content: single source of truth in `frontend/src/data.js` (edit to update the site).
- Resume PDF: `frontend/public/Pravin_Salla_Resume.pdf` (download buttons in nav/hero/footer).

## Core Requirements (static)
- Dark modern engineering aesthetic (user-chosen), real resume content only
- Sections: Home, Experience, Projects, Contact + Skills, Education, resume download
- Working contact form emailing prsalla19@gmail.com (Resend, managed)
- Contact details: prsalla19@gmail.com, +1 (925) 209-8261, Davis CA, linkedin.com/in/pravin-salla-312609264

## Implemented (2026-07-22, updated session 2)
- Kinetic hero with masked line-by-line reveal (DESIGN. / SIMULATE. / BUILD.), animated interactive wireframe gear canvas with cursor parallax, metrics bar
- Slow editorial skills marquee; numbered manifesto chapter headings
- Experience timeline (GSR @ AHMCT/Caltrans, GTA EME 50, Design Intern @ Ayka)
- Projects grid with 4 real projects + 1 blank reserved slot: Subsonic Wind Tunnel (full report DOCX downloadable), SAGE 2025 publication (DOI link + PDF), Hahn Grinder friction study, Vehicle Aerodynamics CFD study (full report PDF, schematic placeholder image — user to send real render)
- Project source files hosted in frontend/public: Project_Wind_Tunnel_Report.docx, Publication_Fault_Diagnosis_SAGE.pdf, Project_Vehicle_Aerodynamics_Report.pdf
- Skills matrix (6 resume categories), Education cards (UC Davis MS 3.7, Somaiya BTech 3.6)
- Contact form → MongoDB + email notification to owner (verified email_sent:true), toast feedback, validation, rate limiting
- Resume PDF download, mobile menu, footer
- THEME: "Drafting Paper" (Sample A) applied site-wide — light warm paper #F2EFE7, ink text, blueprint-blue grid hairlines, orange #E8590C accents; dark theme removed from UI (token remap in tailwind.config.js + index.css)
- Removed "OPEN TO FULL-TIME ROLES" hero tagline and nav "OPEN TO ROLES" indicator (user request)
- Hidden /samples page still exists with theme mockups (A, A2, A3, A4, B, C) for future theme switches
- Wind tunnel project now uses the user's real photos: full-assembly dark-lab shot as cover + 9-photo gallery with lightbox (prev/next, captions, ESC/arrows) — images optimized to ~100-250KB and hosted at /projects/windtunnel/
- Hero now features the user's real portrait (/pravin-portrait.jpg, 162KB) in a framed card with name caption, with the interactive blueprint gear canvas overlapping the top-left corner; headline sized down on mobile to prevent clipping

## Backlog / Next Tasks
- P0: User to send additional projects + project files/images to add (user said they have more)
- P1: Real project photography/renders per project (currently stock images)
- P1: Project detail modals or pages with CAD drawings, test data, reports
- P2: Profile photo / about blurb in hero or about strip
- P2: Blog/notes section; Google Analytics; SEO meta/OG image; custom domain
