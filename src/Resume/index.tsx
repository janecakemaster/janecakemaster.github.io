import { Prompt } from "./Prompt";
import { ButtonLink } from "../shared/ButtonLink";

function Resume({ returnHome }: { returnHome: () => void }) {
  return (
    <div
      className={`text-left font-mono rounded-md p-4 mx-auto bg-white text-[#1e1e1e] dark:bg-[#1e1e1e] dark:text-[#f1f1f1] shadow-md shadow-[#000000]/10`}
    >
      <p>
        <Prompt /> ls <span className="text-blue-400">jobs</span>
      </p>
      <p>
        <ButtonLink onClick={() => returnHome()}>home</ButtonLink>
      </p>
    </div>
  );
}

export default Resume;
