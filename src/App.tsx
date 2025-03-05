import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Resume from "./Resume";
import { ButtonLink } from "./components/ButtonLink";
import { Link } from "./components/Link";

function App() {
  const [useResume, setUseResume] = useState(false);

  return (
    <div className="grid h-screen font-mono">
      <main className="place-self-center">
        <h1 className="text-3xl font-bold tracking-wide py-4">
          @janecakemaster
        </h1>
        <div
          className={`text-left rounded-md p-4 bg-white text-[#1e1e1e] dark:bg-[#1e1e1e] dark:text-[#f1f1f1] shadow-md shadow-[#000000]/10`}
        >
          {useResume ? <Resume /> : <Home />}
        </div>
        <div className="text-left place-self-center pt-4">
          <Link href="https://github.com/janecakemaster">github</Link>{" "}
          <Link href="https://linkedin.com/in/janecakemaster">linkedin</Link>{" "}
          {useResume ? (
            <ButtonLink onClick={() => setUseResume(false)}>home</ButtonLink>
          ) : (
            <ButtonLink onClick={() => setUseResume(true)}>resume</ButtonLink>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
