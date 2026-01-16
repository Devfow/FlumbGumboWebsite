import React, { useRef, useMemo, useState } from 'react';
import './InteractiveGumbo.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import CustomControls from './CustomControls';

interface Jiggle {
    id: number;
    position: THREE.Vector3;
    startTime: number;
}

const GumboModel = (props: any) => {
  const { color, roughness, metalness, blobbiness, wobbleSpeed } = props;
  const mesh = useRef<THREE.Mesh>(null!);
  const { clock } = useThree();
  const noise3D = useMemo(() => createNoise3D(Math.random), []);
  
  const originalPositions = useRef<Float32Array | null>(null);
  const [jiggles, setJiggles] = useState<Jiggle[]>([]);

  const handleClick = (event: any) => {
    event.stopPropagation();
    setJiggles(j => [...j, { id: Date.now(), position: event.point, startTime: clock.getElapsedTime() }]);
  };

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (mesh.current) {
      // Auto-rotation
      mesh.current.rotation.y += 0.001;

      const geometry = mesh.current.geometry;
      if (!originalPositions.current) {
        originalPositions.current = Float32Array.from(geometry.attributes.position.array);
      }
      
      const positionAttribute = geometry.getAttribute('position');

      for (let i = 0; i < positionAttribute.count; i++) {
        if(!originalPositions.current) continue;
        const x = originalPositions.current[i * 3];
        const y = originalPositions.current[i * 3 + 1];
        const z = originalPositions.current[i * 3 + 2];

        let vec = new THREE.Vector3(x, y, z);

        // 1. Continuous Wobble
        const noiseVec = vec.clone().normalize();
        const noise = noise3D(noiseVec.x + time * wobbleSpeed, noiseVec.y + time * wobbleSpeed, noiseVec.z + time * wobbleSpeed);
        let displacement = new THREE.Vector3().copy(vec).normalize().multiplyScalar(noise * blobbiness);
        
        // 2. Click-based Jiggle
        jiggles.forEach(jiggle => {
            const dist = vec.distanceTo(jiggle.position);
            const jiggleTime = time - jiggle.startTime;
            const frequency = 4; // Lowered for broader waves
            const amplitude = 0.4; // Increased for stronger jiggle
            const falloff = 3; // Increased for wider spread
            
            if (jiggleTime > 0) {
                const wave = Math.sin(dist * frequency - jiggleTime * 10) * amplitude * Math.max(0, 1 - dist / falloff);
                const dampening = Math.exp(-jiggleTime * 1.5); // Adjusted dampening
                
                displacement.add(vec.clone().normalize().multiplyScalar(wave * dampening));
            }
        });

        vec.add(displacement);
        positionAttribute.setXYZ(i, vec.x, vec.y, vec.z);
      }

      // Clean up old jiggles
      if(Math.random() > 0.9) { // Occasionally clean up
        setJiggles(j => j.filter(jiggle => time - jiggle.startTime < 2));
      }

      geometry.computeVertexNormals();
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <mesh ref={mesh} onClick={handleClick}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial 
            color={color} 
            roughness={roughness} 
            metalness={metalness} 
        />
    </mesh>
  );
};

const InteractiveGumbo = () => {
    const [color, setColor] = useState('#ff1493');
    const [roughness, setRoughness] = useState(0.1);
    const [metalness, setMetalness] = useState(0.1);
    const [blobbiness, setBlobbiness] = useState(0.2);
    const [wobbleSpeed, setWobbleSpeed] = useState(0.5);
    const [controlsVisible, setControlsVisible] = useState(true); // Keep this

    const controlsProps = {
        color, setColor,
        roughness, setRoughness,
        metalness, setMetalness,
        blobbiness, setBlobbiness,
        wobbleSpeed, setWobbleSpeed,
    };

  return (
    <div className="interactive-gumbo-container">
      <div className="canvas-container">
        <Canvas>
            <ambientLight intensity={0.8} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <GumboModel {...controlsProps} />
            <Environment preset="apartment" />
            <OrbitControls />
        </Canvas>
      </div>
      <button className="toggle-controls-button" onClick={() => setControlsVisible(!controlsVisible)}>
        {controlsVisible ? 'Hide Controls' : 'Show Controls'}
      </button>
      {controlsVisible && <CustomControls {...controlsProps} />}
    </div>
  );
};

export default InteractiveGumbo;