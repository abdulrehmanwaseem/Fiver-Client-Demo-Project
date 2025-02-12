import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useState } from "react";
import { InfoPanel } from "./components/InfoPanel";

function App() {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 ">
        <h1 className="text-2xl font-bold text-center mt-1 select-none">
          3D Oil Refinery Explorer
        </h1>
      </header>
      <Canvas
        shadows
        camera={{ position: [25, 85, 120], fov: 48 }}
        className="w-full h-full"
      >
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-8.5, -1, -29]}
          receiveShadow
        >
          <planeGeometry args={[130, 150]} />
          <meshStandardMaterial
            color="#888888"
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>
        <group position-y={-2}>
          <Experience onModelClick={setSelectedModel} />
          <ContactShadows opacity={0.32} blur={2} />
        </group>
        <OrbitControls maxPolarAngle={Math.PI / 2} minDistance={8} />
        <Environment preset="warehouse" />
      </Canvas>

      {selectedModel && <InfoPanel data={selectedModel} />}

      <div className="select-none fixed bottom-6 left-6 bg-gray-800 bg-opacity-75 backdrop-blur-sm text-white p-4 rounded-lg">
        <p className="text-sm">
          <strong>Controls:</strong>
          <br />
          • Click and drag to rotate
          <br />
          • Scroll to zoom
          <br />• Click on highlighted points for details
        </p>
      </div>
    </>
  );
}

export default App;
