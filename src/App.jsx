import {
  ContactShadows,
  Environment,
  Html,
  Loader,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense, useState } from "react";
import { InfoPanel } from "./components/InfoPanel";

function App() {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <Suspense fallback={<Loader />}>
      <header className="fixed top-0 left-0 right-0 z-10 ">
        <h1 className="mt-1 text-2xl font-bold text-center select-none">
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

      {selectedModel && (
        <InfoPanel
          data={selectedModel}
          onClose={() => setSelectedModel(null)}
        />
      )}

      <div className="fixed p-4 text-white bg-gray-800 bg-opacity-75 rounded-lg select-none bottom-6 left-6 backdrop-blur-sm">
        <p className="text-sm">
          <strong>Controls:</strong>
          <br />
          • Click and drag to rotate
          <br />
          • Scroll to zoom
          <br />• Click on highlighted points for details
        </p>
      </div>
    </Suspense>
  );
}

export default App;
