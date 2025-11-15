'use client';

import { Canvas } from '@react-three/fiber';
import { ARButton, XR } from '@react-three/xr';
import React, { useState } from 'react';
import * as THREE from 'three';

interface ARImageProps {
  imageUrl: string;
}

const ARImage: React.FC<ARImageProps> = ({ imageUrl }) => {
  return (
    <mesh position={[0, 0, -2]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={new THREE.TextureLoader().load(imageUrl)} />
    </mesh>
  );
};

const WebXRPreview: React.FC = () => {
  const [isARStarted, setIsARStarted] = useState(false);

  const handleStartAR = () => {
    setIsARStarted(true);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {!isARStarted && (
        <button
          onClick={handleStartAR}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
          }}
        >
          Start AR Preview
        </button>
      )}

      {isARStarted && (
        <Canvas style={{ width: '100%', height: '100%' }}>
          <XR>
            <ARButton sessionInit={{ requiredFeatures: ['hit-test'] }} />
            <ARImage imageUrl="/cuadro-vertical-1_1.jpg" />
          </XR>
        </Canvas>
      )}
    </div>
  );
};

export default WebXRPreview;
