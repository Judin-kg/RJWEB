import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF, OrbitControls } from "@react-three/drei";
import "./Ailab.css";
import modelGLB from "./assets/model.glb";
import { useNavigate } from "react-router-dom";

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={2.5} position={[0, -0.5, 0]} />;
};

const Ailab = () => { 
    const navigate = useNavigate();

  return (
    <div className="ailab-container" id="ailab">
      <div className="ar-tab">
        
        {/* Heading */}
        <h1 className="ailab-heading">
          AI <span>LAB</span>
        </h1>

        <Canvas camera={{ position: [0, 1, 7], fov: 50 }} className="canvas">
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Model url={modelGLB} />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            rotateSpeed={0.5}
          />
        </Canvas>

        <div className="buttons-container">
          <button
            className="view-space-btn"
            onClick={() =>
              window.open("https://ar-wfz8.vercel.app/", "_blank")
            }
          >
            View-AR
          </button>

          <button className="rjbot-btn" onClick={() => navigate("/rjbot")}>
            RJ Bot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ailab;
