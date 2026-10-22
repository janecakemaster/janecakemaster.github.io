import "./resume.css";

type Role = {
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "Vitalize",
    title: "Senior Product Engineer",
    location: "Remote",
    dates: "May 2026 - Present",
    bullets: [
      "Led the rebuild of incident response: critical alerts now open an incident and page on-call, where no alert had opened any of 82 earlier incidents. Added required CI checks and postmortems with tracked action items.",
      "Engineering lead for notifications: 750k messages a month to 15,000 staff. Priced the vendor against two others and a self-built AWS option: it cost about a third of what the team assumed, so we kept it.",
      "Built an agent skill that drafts technical design docs adopted quickly by teammates. Also built AI tools that tell the author of the PR behind each fixed bug, and answer product questions with a cited test for every claim.",
      "Moved all 31 notification workflows into version-controlled code with a PR check and drift check, which found unused workflows and bugs where the wrong people were notified.",
      "Built 4 components for the shared design system (popover, tag, filter chips, show-all toggle) and set up AI coding agents to keep new code on it.",
    ],
  },
  {
    company: "Weekend (formerly Volley)",
    title: "Senior Engineer, then EM of 5 from Sep 2025",
    location: "SF",
    dates: "September 2024 - May 2026",
    bullets: [
      "Tech lead for a launch of 3 games on 3 TV platforms across 19 services. All 9 combinations shipped on the original date. Also shipped company-wide on-call: rotations, escalation, and runbooks.",
      "Owned the architecture for shared TV, mobile, and activity-tracking infrastructure and aligned 5+ teams on the breaking migrations. The tracking work became the base for company-wide analytics.",
      "Designed a hybrid mobile SDK (native shell, React webview) that 5+ games run their controllers on, with TypeScript, Kotlin, and Swift types generated from one source.",
      "Led subscription experiments. One lifted subscription starts 23%. Within 24 hours, caught a variant that cut conversion 40%, and reverted it.",
    ],
  },
  {
    company: "Vercel",
    title: "Software Engineer",
    location: "Remote",
    dates: "October 2022 - May 2024",
    bullets: [
      "Built Vercel's AWS Marketplace sales channel from scratch in ~7 months, enabling millions in enterprise deals.",
      "Designed its contract-with-consumption billing, which other teams reused for 3 later Marketplace products.",
    ],
  },
  {
    company: "Splice",
    title: "Senior Backend Engineer",
    location: "Remote",
    dates: "November 2020 - July 2022",
    bullets: [
      "Kept a legacy CMS and its new Go replacement in sync through the migration. Wrote the RFC for an async publishing pipeline and shipped it, cutting publishing time from a few minutes to below 10 seconds.",
    ],
  },
  {
    company: "Mixmax",
    title: "Senior Full Stack Engineer",
    location: "Remote",
    dates: "November 2019 - November 2020",
    bullets: [
      "Tech lead on Sidechat, chat inside Gmail threads that only added collaborators can see (WebSockets, Gmail API sync). Launched as a paid enterprise feature and still in the product in 2026.",
    ],
  },
  {
    company: "BDG Media (Bustle)",
    title: "Full Stack Engineer",
    location: "NYC",
    dates: "October 2016 - October 2019",
    bullets: [
      "Developed the custom Redis graph database behind BDG's sites (nearly 50M monthly readers). Removed N+1 queries with batched GraphQL reads and ran Elasticsearch reindexing with zero downtime.",
    ],
  },
  {
    company: "BaubleBar",
    title: "Frontend Engineer",
    location: "NYC",
    dates: "November 2015 - October 2016",
    bullets: [
      "Redesigned the product detail page, the site's main revenue page, and the navbar, and built the design system behind them.",
    ],
  },
  {
    company: "Vimeo",
    title: "Associate Application Engineer",
    location: "NYC",
    dates: "June 2014 - October 2015",
    bullets: [],
  },
];

export function Resume() {
  return (
    <div className="resume-page">
      <button
        type="button"
        onClick={() => window.print()}
        className="no-print resume-btn"
      >
        print
      </button>

      <header>
        <h1>Jane Kim</h1>
        <p className="contact">
          Arizona · Remote · janecakemaster@gmail.com ·
          github.com/janecakemaster · linkedin.com/in/janecakemaster
        </p>
        <p className="headline">
          Engineer who builds the shared systems other teams ship on: tracking
          and a mobile SDK at Weekend, AWS Marketplace billing at Vercel, and
          notifications at Vitalize. Shipped company-wide incident response and
          on-call at Weekend and Vitalize.
        </p>
      </header>

      <section>
        <p className="technologies">
          <strong>Technologies:</strong> TypeScript, Node.js, React, GraphQL,
          RPC/Protobufs, REST, AWS, Go, Redis, Elasticsearch, ClickHouse,
          PostgreSQL, WebSockets, Effect, OpenTelemetry, Grafana, AI coding
          tools (Claude Code, agent skills)
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        {roles.map((role) => (
          <div className="role" key={`${role.company}-${role.dates}`}>
            <div className="role-header">
              <span className="role-dates">{role.dates}</span>
              <span className="role-title">
                {role.company}, {role.location} · {role.title}
              </span>
            </div>
            {role.bullets.length > 0 && (
              <ul>
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        <p className="education">
          <strong>Bachelor's in Computer Science</strong>, Columbia University,
          NYC
        </p>
      </section>

      <section>
        <h2>Community</h2>
        <p>
          Talks: JSConf US 2015, NodeConf Oslo 2016 · CodeNation, NodeSchool,
          Girls Who Code · ERG leadership
        </p>
      </section>
    </div>
  );
}

export default Resume;
