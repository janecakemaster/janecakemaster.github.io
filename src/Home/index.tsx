import { Prompt } from "../components/Prompt";

function Home() {
  return (
    <>
      <p>
        <Prompt /> echo <span className="text-pink-400">$JANECAKEMASTER</span>
      </p>
      <p>engineer and engineering leader</p>
      <p className="pt-2">
        <Prompt /> echo <span className="text-pink-400">$ORIGIN</span>
      </p>
      <p>dirty jerz 🗽 nyc</p>
      <p className="pt-2">
        <Prompt /> echo <span className="text-pink-400">$HOME</span>
      </p>
      <p>az 🌵</p>
    </>
  );
}

export default Home;
