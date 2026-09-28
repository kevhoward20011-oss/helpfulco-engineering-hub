# HelpfulCo Engineering Hub

Public recruiter-facing evidence portfolio for Kev Howard / HelpfulCo Innovations.

## Current public structure
- `index.html` — portfolio landing page with role filters
- `repairs.html` — AI-assisted software repair evidence across Gson, Sonar CXX, SymPy and Next.js
- `governor.html` — Fresh Direction / Sovereign AI Governor forensic case study
- `project.html?id=...` — evidence pages for Amara, AI Receptionist, CRM, Diary, Field Operations App and side projects
- `projects.js` — project evidence/data layer
- `styles.css` — responsive presentation
- `app.js` — role filtering + shareable `?role=` views

## Repair evidence rule
For software repair cases, reproduce the failure first, preserve the broken baseline, keep the upstream/reference patch hidden from the AI solver, verify the proposed repair, and record limitations before comparing with the upstream answer.

## Evidence rule
Do not turn a static repository finding, historic test report or planned design into a current runtime claim. Stronger wording should follow a fresh verification pass.

## Deployment
This is a static site and can be served directly by Vercel, Netlify, GitHub Pages or any static host. `vercel.json` enables clean URLs.
