window.HUB_PROJECTS = {
  amara: {
    title: "Amara Assistant",
    strap: "AI product · full-stack · integration",
    status: "Current repository evidence · runtime behaviour should be rechecked before stronger claims",
    statusClass: "verified",
    intro: "Amara is a customer-facing AI front-office system for small and medium-sized businesses. The engineering story is the joined-up route from an enquiry through business-specific assistance, capture, CRM state and human handoff while keeping unknown information unknown rather than inventing it.",
    evidenceDate: "Repository evidence reviewed 25 September 2026",
    liveLinks: [{label:"Meet Amara", url:"https://meet-amara.co.uk/"}],
    problems: [
      {title:"How do you keep an AI assistant useful without letting it invent business facts?", body:"Constrain answers around business-specific configuration and knowledge, log gaps that need approved guidance, and escalate sensitive or low-confidence situations rather than pretending certainty.", evidence:"Current product/repository evidence supports grounded business assistance, knowledge-gap handling and human handoff."},
      {title:"How do you turn a conversation into operational work instead of a dead-end chat?", body:"Treat the assistant as an entry point into a wider workflow: capture the enquiry, preserve source context, route to CRM/inbox, create follow-up work where appropriate and open a human handoff when required.", evidence:"Current product design links assistant enquiries with CRM, tasks, inbox/activity records and handoff."},
      {title:"How do you make a customer-facing AI product production-minded?", body:"Separate public demos from authenticated customer data, use tenant isolation and role boundaries, and make integrations, security and recovery part of the architecture rather than later add-ons.", evidence:"Repository evidence includes Supabase-backed customer data, role/security boundaries and production integrations."}
    ],
    references: [["Product architecture","Amara repository / README","Assistant, CRM, customer workspace, integrations and safety principles."],["Live product","meet-amara.co.uk","Public product entry point; runtime should be checked before relying on a specific route or behaviour."]],
    limitations: ["This Hub publication does not claim a fresh full Amara test-suite run.","Private customer data and private implementation details are intentionally not exposed."]
  },
  receptionist: {
    title: "AI Receptionist",
    strap: "Voice AI · multilingual UX · cost-aware architecture",
    status: "Current repository evidence · cost rationale documented as a design decision",
    statusClass: "verified",
    intro: "The Receptionist demonstrates voice engineering and a product-economics decision: use browser/device language capability where practical instead of relying entirely on paid per-interaction language services.",
    evidenceDate: "Repository evidence reviewed 25 September 2026",
    liveLinks: [{label:"Receptionist showcase", url:"https://meet-amara.co.uk/amara-ai-receptionist"}],
    problems: [
      {title:"How do you expand multilingual support without letting recurring service cost grow unchecked?", body:"Use browser/device language capability for suitable languages and make capability/setup part of onboarding, while retaining server processing for cases that need it.", evidence:"Repository language definitions and browser-speech tests support the architecture. No percentage saving is claimed."},
      {title:"How do you make browser speech work across real devices?", body:"Choose a supported recorder format dynamically, retain server and native browser paths, bind speech activity to a session and carry the selected language through transcription.", evidence:"Browser gateway tests cover recorder format, session binding, transcription abstraction and fallback."},
      {title:"How do you keep multilingual failure states deterministic and safe?", body:"Define known greeting, clarification, emergency and translation-failure wording instead of improvising recovery at runtime.", evidence:"Language regression tests cover deterministic recovery wording and browser-only language handling."}
    ],
    references: [["Language architecture","Receptionist language modules/tests","Browser/device capability and deterministic multilingual behaviour."],["Speech gateway","Receptionist browser gateway tests","Recorder format, session binding, STT abstraction and fallback."]],
    limitations: ["No measured percentage cost saving is claimed without billing evidence.","Language capability varies by browser/device and must be surfaced during onboarding."]
  },
  crm: {
    title: "CRM / Office Suite",
    strap: "Full-stack · data · automation · security",
    status: "Current repository evidence · runtime recheck recommended",
    statusClass: "verified",
    intro: "The CRM / Office Suite turns Amara from a chat feature into an operational system with tenant-scoped contacts, companies, opportunities, tasks, activities, inbox, calendar, bookings and integration paths.",
    evidenceDate: "Repository evidence reviewed 25 September 2026",
    liveLinks: [{label:"Public Office demo", url:"https://meet-amara.co.uk/office-demo"}],
    problems: [
      {title:"How do you stop fragmented enquiry data becoming fragmented business work?", body:"Ingest assistant, receptionist, form and import events into one tenant-scoped operational model and preserve source, consent and handoff context.", evidence:"Current repository evidence supports joined-up enquiry-to-CRM workflow design."},
      {title:"How do you keep a growing CRM usable without unbounded list queries?", body:"Centralise bounded pagination so normal workspace views cannot silently turn into very large fetches.", evidence:"CRM usage regression coverage includes bounded list access and consolidated workspace behaviour."},
      {title:"How do you make customer operations fail closed without taking public demos down?", body:"Separate public demo routes from authenticated customer boundaries, retain login/MFA/recovery and block untrusted cross-origin mutations.", evidence:"Customer security regression coverage supports the boundary design."}
    ],
    references: [["Operational model","Amara CRM repository","CRM pipelines, inbox, calendar, tasks, activities and tenant isolation."],["Security boundary","Customer Office security tests","Protected workspace, MFA and origin-bound mutations."]],
    limitations: ["Current repository tests are referenced but not restated here as a fresh executed total.","Public demo behaviour can differ from the authenticated commercial workspace by design."]
  },
  diary: {
    title: "Put It In My Diary",
    strap: "Flutter · mobile lifecycle · privacy",
    status: "Shipped baseline evidence · current aggregate test count should be refreshed before publication",
    statusClass: "verified",
    intro: "A released Flutter family planner. The strongest engineering stories are the lifecycle problems underneath the calendar: private-event access, notification routing, persistence and release discipline.",
    evidenceDate: "Project evidence reviewed 25 September 2026",
    problems: [
      {title:"How do you protect private events without breaking ordinary app lifecycle behaviour?", body:"Persist PIN/private-event protection state and keep the same access rule across views and app state changes.", evidence:"Release evidence includes physical-device checks of PIN creation, unlock and persistence."},
      {title:"How do you make a notification open the right event from foreground, background or cold start?", body:"Treat routing as a cross-layer lifecycle problem: trace the payload, recover event identity and route to the event-aware destination.", evidence:"Notification routing is retained as a specific mobile-debugging case; fresh regression evidence should accompany stronger wording."},
      {title:"How do you keep user data available across restarts and ordinary failure modes?", body:"Use durable persistence and recovery patterns and verify restoration rather than relying on in-memory state.", evidence:"The project test strategy includes restart, offline, notification, upgrade and physical-device concerns."}
    ],
    references: [["Physical release evidence","Put It In My Diary release record","Physical-device build/install/launch and PIN checks."],["Test strategy","Diary project specification","Unit, integration, offline, notification and upgrade checks."]],
    limitations: ["Refresh the current authoritative test count before publishing a numeric total.","Parser V2 work and later Android claims must stay separate from the released baseline unless independently verified."]
  },
  fieldops: {
    title: "Field Operations App",
    strap: "Flutter · field operations · evidence capture",
    status: "Work in progress · do not present as production-ready",
    statusClass: "wip",
    intro: "A field-operations engineering transformation: reuse proven mobile foundations from Diary, remove irrelevant family/calendar behaviour and rebuild the workflow around a rep's work day, store visits, displays, parts and fresh photo evidence.",
    evidenceDate: "Design/build evidence reviewed 25 September 2026",
    problems: [
      {title:"How do you build quickly without throwing away a proven mobile foundation?", body:"Transform a copy of the released Diary codebase rather than start blank: retain useful persistence, recovery, camera and form patterns while removing product-specific calendar behaviour.", evidence:"The build record documents controlled reuse while leaving the released Diary app untouched."},
      {title:"How do you prevent a field visit disappearing when a rep is interrupted?", body:"Model work-day and visit drafts as durable local state so incomplete work can be reopened instead of lost.", evidence:"Current app/build evidence includes local visit drafts and recovery-oriented workflow design."},
      {title:"How do you capture useful field evidence without turning the app into generic CRM paperwork?", body:"Keep the store visit central: store identity, stands/displays, work carried out, parts used, fresh camera evidence, manager interaction, exceptions and follow-up.", evidence:"Current design/build evidence supports per-display records, work/parts capture and camera-first evidence."}
    ],
    references: [["Workflow design","Field Operations App design/build record","Work day, route, check-in, displays, evidence and sign-off."],["Reuse strategy","Engineering Hub evidence plan","Diary foundation transformed rather than rewritten from scratch."]],
    limitations: ["Physical app-kill/camera/lost-data behaviour is not yet fully proven.","Central sync and office visibility must not be implied merely because a visit saves locally.","The app remains work in progress until remaining device/workflow checks are complete."]
  },
  coder: {
    title: "Standalone Coder",
    strap: "Side project · provider abstraction",
    status: "Re-verify implementation before stronger runtime claims",
    statusClass: "recheck",
    intro: "A smaller architecture story: keep the coding workflow independent from one model/provider by containing provider-specific behaviour behind adapters and rotating selection logic.",
    evidenceDate: "Portfolio design record · 25 September 2026",
    problems: [
      {title:"How do you avoid hard-wiring the app to one model/provider?", body:"Put provider-specific behaviour behind adapters so the core workflow speaks a stable interface.", evidence:"The rotating-adapter boundary is the agreed engineering story."},
      {title:"How do you rotate providers without destabilising the main workflow?", body:"Route provider choice through one controlled selection layer rather than scatter model-choice conditionals throughout the app.", evidence:"Rotation logic is the source-level case to re-verify next."},
      {title:"How do you contain provider change?", body:"Keep credentials, provider quirks and request/response translation at the adapter edge.", evidence:"Stronger source references wait for a fresh implementation pass."}
    ],
    references: [["Portfolio scope","Engineering Hub proposal","Rotating adapter/provider architecture is the agreed side-project story."]],
    limitations: ["No current runtime/test claim is made on this page."]
  },
  trading: {
    title: "Trading System",
    strap: "Side project · automated systems · environment separation",
    status: "Re-verify current environment · engineering only, no profitability claim",
    statusClass: "recheck",
    intro: "The useful portfolio story is systems engineering, not returns: multiple bots/environments, explicit separation of research/backtesting from live authority and recovery/provenance when machines or configuration change.",
    evidenceDate: "Portfolio/recovery records · recheck required",
    problems: [
      {title:"How do you keep multiple bots and environments from becoming one ambiguous state?", body:"Keep bot identity, configuration, test evidence and environment responsibility explicit.", evidence:"Historical records exist; current machine/environment state requires re-verification."},
      {title:"How do you stop research/backtest capability silently becoming live authority?", body:"Keep research/backtest paths separate from live execution controls and make live authority explicit.", evidence:"Portfolio records preserve the live-disabled boundary; current runtime needs recheck."},
      {title:"How do you recover after disk, machine or configuration problems?", body:"Treat backup, environment reconstruction, provenance and known-good baselines as part of the system.", evidence:"Recovery records exist and should be tied to the currently recoverable environment before stronger claims."}
    ],
    references: [["Scope rule","Engineering Hub proposal","Use architecture, separation, recovery and risk control — not profit — as evidence."]],
    limitations: ["No profitability or trading-performance claim is made.","Current live execution state must be independently rechecked before publication."]
  },
  botdoc: {
    title: "Bot Doc",
    strap: "Side project · maintenance · validation · recovery",
    status: "Current runtime recheck required before scheduled/autonomous-operation claims",
    statusClass: "recheck",
    intro: "Bot Doc is separate from the trading platform: a maintenance and validation layer for health, readiness, guarded optimisation, rollback and evidence.",
    evidenceDate: "Historical evidence available · current runtime recheck required",
    problems: [
      {title:"How do you know an automated bot is healthy rather than merely running?", body:"Use structured forward/back-test, readiness and system evidence instead of equating a live process with correct behaviour.", evidence:"Historical checkpoints/reports exist; current scheduled runtime still needs re-verification."},
      {title:"How do you optimise without destroying the known-good system?", body:"Gate changes behind evidence, guarded apply paths and rollback rather than allow an optimisation loop to mutate working state freely.", evidence:"Historical phase records support the safe-optimisation/rollback pattern."},
      {title:"How do you prove what changed and what can be recovered?", body:"Keep reports, configuration provenance, test evidence and recovery checkpoints so maintenance actions leave an auditable trail.", evidence:"Retained governance/recovery reports support the pattern but are not presented as current-operation proof."}
    ],
    references: [["Portfolio scope","Engineering Hub proposal","Bot Doc is maintenance/validation/recovery, separate from trading execution."]],
    limitations: ["Do not claim a functioning weekly schedule until the current runtime is re-verified.","Historical test totals must stay dated and must not be restated as current results."]
  }
};
