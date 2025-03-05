import { useState } from "react";
import { Prompt } from "./Prompt";

type ResumeItemProps = {
  company: string;
  description: string;
  items: string[];
};

function ResumeItem({ company, description, items }: ResumeItemProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="hover:text-blue-400 transition-colors text-left w-full grid grid-cols-[200px_1fr] gap-4"
      >
        <span>{company}</span>
        <span className="opacity-75">{description}</span>
      </button>
      {showDetails && (
        <ul className="ml-4 mt-2 space-y-1 text-sm opacity-80">
          {items.map((item, i) => (
            <li key={i}>* {item}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

function Resume() {
  return (
    <>
      <p>
        <Prompt /> ls <span className="text-blue-400">jobs</span>
      </p>
      <ul className="space-y-2 mt-2">
        <ResumeItem
          company="Volley"
          description="voice powered games"
          items={[
            "mobile apps",
            "game platform architecture",
            "typescript",
            "react",
          ]}
        />

        <ResumeItem
          company="Vercel"
          description="frontend cloud"
          items={[
            "enterprise billing infrastructure",
            "usage data pipelines",
            "typescript",
          ]}
        />

        <ResumeItem
          company="Splice"
          description="music creation"
          items={["platform modernization", "golang"]}
        />

        <ResumeItem
          company="Mixmax"
          description="sales engagement"
          items={["Sidechat", "email collaboration", "typescript", "react"]}
        />

        <ResumeItem
          company="BDG"
          description="media"
          items={[
            "auth",
            "content migration",
            "graph data",
            "design system",
            "typescript",
            "preact",
            "ember",
          ]}
        />

        <ResumeItem
          company="Baublebar"
          description="ecommerce"
          items={[
            "product detail page",
            "design system",
            "javascript",
            "react",
          ]}
        />

        <ResumeItem
          company="Vimeo"
          description="videos"
          items={[
            "mobile web",
            "accessibility",
            "payment flows",
            "javascript",
            "php",
          ]}
        />

        <ResumeItem
          company="Loverly"
          description="wedding planning"
          items={["wordpress", "javascript", "php"]}
        />

        <ResumeItem
          company="Salesforce"
          description="CRM"
          items={["UI framework", "developer sandbox", "javascript", "java"]}
        />

        <ResumeItem
          company="nRelate"
          description="content recommendation"
          items={["wordpress", "jquery", "php"]}
        />

        <ResumeItem
          company="Columbia University"
          description="undergrad"
          items={["B.A. Computer Science", "a cappella", "hackathons"]}
        />
      </ul>
    </>
  );
}

export default Resume;
