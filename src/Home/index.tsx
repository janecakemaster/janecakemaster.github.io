import { ButtonLink } from "../shared/ButtonLink";
import { Prompt } from "./Prompt";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

function Link({ href, children }: LinkProps) {
  return (
    <a href={href} className="decoration-blue-500 underline hover:overline">
      {children}
    </a>
  );
}

function Home({ openResume }: { openResume: () => void }) {
  return (
    <div
      className={`text-left font-mono rounded-md p-4 mx-auto bg-white text-[#1e1e1e] dark:bg-[#1e1e1e] dark:text-[#f1f1f1] shadow-md shadow-[#000000]/10`}
    >
      <p>
        <Prompt /> echo <span className="text-pink-400">$JANECAKEMASTER</span>
      </p>
      <p>fullstack js/ts engineer from the dirty jerz 🗽 nyc, az 🌵...</p>
      <p>currently living in sf 🌉</p>
      <p>
        <Link href="https://github.com/janecakemaster">github</Link>{" "}
        <Link href="https://linkedin.com/in/janecakemaster">linkedin</Link>{" "}
        <ButtonLink onClick={() => openResume()}>resume</ButtonLink>
      </p>
    </div>
  );
}

export default Home;
