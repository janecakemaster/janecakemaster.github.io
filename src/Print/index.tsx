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
    title: "Engineering Manager / Technical Lead (promoted Sept 2025)",
    location: "SF",
    dates: "September 2024 - May 2026",
    bullets: [
      "Owned the architecture for shared cross-platform infrastructure for interacting with TV and mobile hardware and tracking user activity. Built a decision matrix to compare multiple approaches, got 5+ teams aligned, and shipped the breaking-change migrations.",
      "Designed a hybrid mobile SDK: native app shell, React webview, product UI loaded through an iframe. Wrote the design doc. Led the development of the native bridge with codegen for TypeScript, Kotlin, and Swift types, all enforced in CI.",
      "Stood up the company's on-call and incident management program from scratch. Defined severity levels, escalation, rotations, monitoring, runbooks. Coordinated production incidents as incident commander.",
      "Led A/B experimentation on the conversion funnel. A pricing-display redesign on the TV web checkout drove a 23% lift in subscription starts. A Roku ad-routing test drove 7.3% overall, 19.7% in the strongest segment. Established the team's experimentation framework (ICE scoring, experiment database, prioritization process).",
    ],
  },
  {
    company: "Vercel",
    title: "Software Engineer",
    location: "Remote",
    dates: "October 2022 - May 2024",
    bullets: [
      "Built the AWS Marketplace integration, enabling millions in ARR in enterprise deals. Shipped private offers, subscription lifecycle management, entitlement verification, integrated with usage tracking pipeline (ClickHouse via Tinybird → DynamoDB → AWS Marketplace Metering API) to handle contract-with-consumption billing, the messiest pricing model on Marketplace. Three Marketplace products from other teams later built on top of it.",
      "Shipped the usage visualization views on Vercel's dashboard, plus broader UX improvements across the product.",
    ],
  },
  {
    company: "Splice",
    title: "Senior Backend Engineer",
    location: "Remote",
    dates: "November 2020 - July 2022",
    bullets: [
      "Built backend services in Go for a content management and catalog system while keeping it in sync with a legacy system we were migrating from. Shipped an async asset publishing pipeline end-to-end, cutting publishing time and improving marketing of offerings.",
    ],
  },
  {
    company: "Mixmax",
    title: "Senior Full Stack Engineer",
    location: "Remote",
    dates: "November 2019 - November 2020",
    bullets: [
      "Tech lead on Sidechat, a real-time collaboration feature inside Gmail that let sales teams discuss email threads without forwarding them around. WebSocket chat, Gmail API to sync threads into collaborators' inboxes, @-mention input, notification badges across the UI.",
    ],
  },
  {
    company: "BDG Media (Bustle)",
    title: "Full Stack Engineer",
    location: "NYC",
    dates: "October 2016 - October 2019",
    bullets: [
      "Contributed to a custom graph database on Redis behind the content platform of multiple high-traffic media sites. Hexastore pattern on Redis sorted sets, traversable in any direction to surface a flexible GraphQL API rich with rich content associations. Leveraged Elasticsearch to surface advanced faceting for editorial content in the CMS.",
    ],
  },
  {
    company: "BaubleBar",
    title: "Frontend Engineer",
    location: "NYC",
    dates: "November 2015 - October 2016",
    bullets: [
      "Rebuilt the product detail page (the site's primary revenue page) via additions to legacy Magento/PHP backend to expose variant data and a React frontend with server-side rendering for the image gallery, dynamic variant selection with cascading SKU resolution, server-side rendering.",
    ],
  },
  {
    company: "Vimeo",
    title: "Associate Application Engineer",
    location: "NYC",
    dates: "June 2014 - October 2015",
    bullets: [
      "Relaunched a fresh mobile-first site with a custom JS micro-framework and component library. Powered video playback, profiles, social feed, and payment checkout.",
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
          Tech lead and engineering leader building end-to-end across design
          systems, web apps, APIs, and distributed backends with or without AI
          in the loop.
        </p>
        <p className="technologies">
          <strong>Technologies:</strong> TypeScript, Node.js, React, GraphQL,
          RPC/Protobufs, REST, AWS (Lambda, DynamoDB, CloudFront, S3, SQS/SNS),
          Redis, Elasticsearch, ClickHouse, PostgreSQL, WebSockets, CI/CD
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
    </div>
  );
}

export default Print;
