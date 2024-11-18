import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      
      <div className="hero-background"></div>

      
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <mesh rotation={[90, 0, 20]}>
          <sphereGeometry args={[1, 100, 200]} />
          <MeshDistortMaterial color="#4A90E2" distort={0.5} speed={2} />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>

      
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          This Is Just The Beginning , The Best Is Yet To Come
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
