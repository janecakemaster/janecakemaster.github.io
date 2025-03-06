import { useState } from "react";

type ResumeItemProps = {
  company: string;
  description: string;
  items: string[];
};

export function ResumeItem({ company, description, items }: ResumeItemProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <div
        onClick={() => setShowDetails(!showDetails)}
        className="grid grid-cols-3"
      >
        <div className="col-span-1 hover:text-blue-400 transition-colors">
          {company}
        </div>
        <div className="col-span-1 opacity-60">{description}</div>
      </div>
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
