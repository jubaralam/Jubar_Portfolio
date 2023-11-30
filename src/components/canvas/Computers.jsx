import { OrbitControls, Preload,  useGLTF} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import CanvasLoader from "../Loader";
import { HemisphereLight } from "three";

// import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";
const Computers = () => {

  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <HemisphereLight intensity={0.15} groundColor="black" />
      <SpotLight intensity={1} />
      <SpotLight position={[-20,50 , 10]} 
      
      angle={0.12}
      penumbra={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
