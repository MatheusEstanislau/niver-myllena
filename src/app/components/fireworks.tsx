import Particles from "react-particles";
import { loadConfettiPreset } from "tsparticles-preset-confetti";

function Fireworks() {
  const customInit = async (engine: any) => {
    await loadConfettiPreset(engine);
  };

  return (
    <div className="relative z-10">
      <Particles
        options={{ preset: "confetti" }}
        init={customInit}
      />
    </div>
  );
}

export default Fireworks;
