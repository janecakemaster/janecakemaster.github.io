import "./print.css";

type Role = {
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "Weekend (formerly Volley)",
    title: "Engineering Manager / Technical Lead",
    location: "SF",
    dates: "September 2025 – May 2026",
    bullets: [
      "Architected cross-platform analytics tracking infrastructure for a consumer product expanding from one to four TV platforms. Evaluated three architectural approaches for user identity resolution, built a decision matrix across five dimensions, drove cross-org alignment across 5+ teams, and authored breaking-change PRs enforcing the schema company-wide.",
      "Designed and built a hybrid mobile controller SDK — a native app shell loading a React webview that embedded game-specific controllers via iframe. Authored the technical design document, built the native bridge layer with code-generated type definitions across TypeScript, Kotlin, and Swift (enforced by CI), and shipped across 4 milestones.",
      "Drove the architecture for unified cross-platform subscription and stable account identity. Scoped the payment provider migration consolidating two Stripe products, the auth provider migration (Clerk → Fusionauth), and the data model for cross-platform account unification.",
      "Led A/B experimentation on the conversion funnel. Caught a test variant causing a 40% subscription conversion drop within 24 hours and coordinated the rollback. Built the experimentation infrastructure: scoring framework, experiment database, cross-functional prioritization process.",
    ],
  },
  {
    company: "Weekend (formerly Volley)",
    title: "Senior Software Engineer",
    location: "SF",
    dates: "September 2024 – September 2025",
    bullets: [
      "Central integration point for a coordinated launch across 3 TV platforms and 3 game products — 9 platform-game combinations touching nearly every engineering team. Tracked cross-team dependencies, reviewed PRs across 19 repositories, identified timeline risks, and drove shared infrastructure decisions on tracking, auth, and payments.",
      "Inherited a Node.js real-time game backend serving thousands of concurrent WebSocket users. Pivoted from a risky rewrite to incremental modernization: built CI/CD from scratch with GitHub Actions, enforced test coverage thresholds, added Sentry releases with WebSocket connection tracing, upgraded the Node.js runtime, and cleaned up storage/HTTP/game logic across 30+ PRs.",
      "Designed and implemented mobile push notification system. Established tracking event schema standards and built proof-of-concept validating multi-account identity patterns. Mentored 4 engineers across 3 teams.",
    ],
  },
  {
    company: "Vercel",
    title: "Software Engineer",
    location: "Remote",
    dates: "October 2022 – May 2024",
    bullets: [
      "Built AWS Marketplace integration infrastructure from scratch over 7 months on a 2-person team. Implemented private offers for enterprise customers, subscription lifecycle management, and entitlement verification. Designed a usage tracking pipeline (ClickHouse via Tinybird → DynamoDB → AWS Marketplace Metering API) handling contract-with-consumption billing — the most complex Marketplace SaaS pricing model. Infrastructure later supported 3 additional Marketplace products.",
      "Enterprise customers including Cursor, OpenAI, and Zapier purchase Vercel through the Marketplace listing. The integration drove millions in enterprise deals by letting customers consolidate cloud spending through AWS billing. Also built usage visualization and UX improvements for Vercel's dashboard.",
    ],
  },
  {
    company: "Splice",
    title: "Senior Backend Engineer",
    location: "Remote",
    dates: "November 2020 – July 2022",
    bullets: [
      "Built backend services and infrastructure in Go for a content management and catalog system. Designed and shipped an async asset publishing pipeline end-to-end — authored the RFC, drove cross-functional consensus, and coordinated with frontend and design through deployment. Reduced publishing time and impacted a core product goal.",
      "Performed complex data migrations to sync legacy and new platforms. Improved system reliability through backend logic cleanup, verifying unused code paths via Datadog before removal. Mentored frontend engineers on backend patterns through pairing sessions.",
    ],
  },
  {
    company: "Mixmax",
    title: "Senior Full Stack Engineer",
    location: "Remote",
    dates: "November 2019 – November 2020",
    bullets: [
      "Tech lead on Sidechat — a real-time collaboration feature embedded in Gmail allowing sales teams to discuss email threads without forwarding or context-switching. Designed the system: WebSocket-based real-time chat, Gmail API integration for syncing email threads into collaborators' inboxes, @-mention-aware chat input, and notification indicators synced across multiple UI components. CEO wrote the launch announcement.",
      "Built calendaring, reporting, and billing features across the Mixmax platform.",
    ],
  },
  {
    company: "BDG Media (Bustle)",
    title: "Full Stack Engineer",
    location: "NYC",
    dates: "October 2016 – October 2019",
    bullets: [
      "Built and maintained a custom graph database on Redis powering the content platform for a high-traffic digital media site. Used a hexastore pattern on Redis sorted sets for efficient graph traversal in any direction, with Facebook's DataLoader pattern wrapping every Redis command to batch N+1 queries during GraphQL resolution. Worked with Elasticsearch for full-text search with zero-downtime reindexing.",
      "Built GraphQL resolvers, mutations, and schema definitions. Contributed to data import pipelines migrating content into the Redis graph model. Operated production infrastructure: Lambda deployments, Redis Sentinel clusters. Migrated a CMS client from Ember to Preact.",
    ],
  },
  {
    company: "BaubleBar",
    title: "Frontend Engineer",
    location: "NYC",
    dates: "November 2015 – October 2016",
    bullets: [
      "Rebuilt the product detail page — the site's primary revenue page — full-stack. Learned Magento (PHP) from scratch to build backend endpoints serving variant data, then built the React frontend: image gallery, dynamic variant selection with cascading SKU resolution, and server-side rendering. Variant switching was entirely client-side for instant UX with no page reloads.",
    ],
  },
  {
    company: "Vimeo",
    title: "Associate Application Engineer",
    location: "NYC",
    dates: "June 2014 – October 2015",
    bullets: [
      "Relaunched the mobile website with a custom JavaScript micro-framework and component library powering video playback, profiles, social feed, and payment checkout.",
    ],
  },
];

export function Print() {
  return (
    <div className="print-page">
      <button
        type="button"
        onClick={() => window.print()}
        className="no-print print-btn"
      >
        print
      </button>

      <header>
        <h1>Jane Kim</h1>
        <p className="contact">
          janecakemaster@gmail.com · github.com/janecakemaster ·
          linkedin.com/in/janecakemaster
        </p>
      </header>

      <section>
        <p className="summary">
          Product-oriented tech lead and engineering leader building end-to-end
          across the stack with and without AI: front-end design systems,
          complex web apps, API design, and distributed backend systems.
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        {roles.map((role) => (
          <div className="role" key={`${role.company}-${role.dates}`}>
            <div className="role-header">
              <span className="role-title">
                {role.company}, {role.location} · {role.title}
              </span>
              <span className="role-dates">{role.dates}</span>
            </div>
            <ul>
              {role.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
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
    </div>
  );
}

export default Print;
