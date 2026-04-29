import "./App.css";
import Home from "./Home";
import { Print } from "./Print";
import { Link } from "./components/Link";

function App() {
  if (window.location.hash === "#/print") {
    return <Print />;
  }

  return (
    <div className="grid min-h-screen font-mono">
      <main className="w-full max-w-[36rem] justify-self-center self-start pt-24">
        <div className="w-full text-left rounded-md p-4 bg-white text-[#1e1e1e] dark:bg-[#1e1e1e] dark:text-[#f1f1f1] shadow-md shadow-[#000000]/10">
          <Home />
        </div>
        <div className="text-left place-self-center pt-4">
          <Link href="https://github.com/janecakemaster">github</Link>{" "}
          <Link href="https://linkedin.com/in/janecakemaster">linkedin</Link>{" "}
          <Link href="#/print" target="_blank">
            resume
          </Link>
        </div>
      </main>
    </div>
  );
}

export default App;
