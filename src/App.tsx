import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Resume from "./Resume";

function App() {
  const [useResume, setUseResume] = useState(false);

  return (
    <div className="grid h-screen">
      <main className="place-self-center">
        <h1 className="text-3xl font-bold tracking-wide py-4">
          @janecakemaster
        </h1>
        {useResume ? (
          <Resume returnHome={() => setUseResume(false)} />
        ) : (
          <Home openResume={() => setUseResume(true)} />
        )}
      </main>
    </div>
  );
}

export default App;
