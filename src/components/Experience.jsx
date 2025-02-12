import { Html, useGLTF } from "@react-three/drei";
import { useState } from "react";

const sceneItems = [
  {
    model: "Oil_tanks.glb",
    position: [-95.0, 0.12, 61.8],
    scale: 0.2,
    rotation: [0.0, Math.PI, 0],
    title: "Storage Tanks",
    details:
      "High-capacity storage tanks designed for safe containment of various petroleum products. These tanks feature advanced safety systems, pressure regulation, and environmental protection measures.",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=800",
    specs: {
      capacity: "50,000 barrels",
      type: "Fixed roof",
      material: "Carbon steel",
    },
  },
  {
    model: "Refinary.glb",
    position: [21.3, 2, -2.8],
    scale: 0.5,
    rotation: [0, 0, 0],
    title: "Processing Units",
    details:
      "State-of-the-art refining units that process crude oil through distillation, cracking, and treatment to produce various petroleum products. Features advanced catalytic systems and heat exchangers.",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=800",
    specs: {
      capacity: "200,000 bpd",
      processes: "Distillation, Cracking",
      efficiency: "95%",
    },
  },
  {
    model: "Factory.glb",
    position: [-16.8, 1.2, -72.8],
    scale: 2,
    rotation: [0, 0, 0],
    title: "Manufacturing Plant",
    details:
      "Modern manufacturing facility equipped with automated systems for product finishing, packaging, and quality control. Includes advanced emissions control and waste management systems.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800",
    specs: {
      area: "50,000 sq ft",
      automation: "Level 4",
      output: "24/7 operation",
    },
  },
];

export const Experience = ({ onModelClick }) => {
  return (
    <>
      {sceneItems.map((item, index) => (
        <Item key={index} {...item} onModelClick={onModelClick} />
      ))}
    </>
  );
};

const Item = ({
  model,
  position,
  scale,
  rotation,
  title,
  details,
  image,
  specs,
  onModelClick,
  ...props
}) => {
  const gltf = useGLTF(`models/${model}`);
  const [x, y, z] = position;
  const [rx, ry, rz] = rotation;
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[x, y, z]}
      rotation={[rx, ry, rz]}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() =>
        onModelClick({
          title,
          description: details,
          image,
          specs,
          position: [x, y + 2, z],
        })
      }
    >
      <primitive object={gltf.scene} {...props} />
      {hovered && (
        <Html position={[0, 1, 0]} center>
          <div className="px-3 py-2 text-sm text-white transition-all duration-200 transform border rounded-lg shadow-xl bg-gray-900/95 backdrop-blur-sm whitespace-nowrap border-white/10 hover:scale-105">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              Click to view {title}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};
