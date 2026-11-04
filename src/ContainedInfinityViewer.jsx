import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Contained Infinity 3D Interactive Canvas
 * Depicts the paradox: "Limits within Limitlessness"
 * A bioluminescent sakura / crystalline tree thriving inside an impossible hypercube in deep vacuum.
 */
export default function ContainedInfinityViewer() {
  const mountRef = useRef(null);
  const [entropy, setEntropy] = useState(50); // 0 to 100
  const [isRotating, setIsRotating] = useState(true);
  const sceneRef = useRef(null);
  const cubeRef = useRef(null);
  const innerRef = useRef(null);
  const particlesRef = useRef(null);
  const isDraggingRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 400;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0x2A2E5B, 3);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0xFF7A9E, 4, 30);
    pointLight.position.set(3, 4, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x5CE1E6, 3, 30);
    pointLight2.position.set(-3, -3, 4);
    scene.add(pointLight2);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Outer Glass Hypercube
    const boxGeo = new THREE.BoxGeometry(3, 3, 3);
    const boxMat = new THREE.MeshPhysicalMaterial({
      color: 0x8878FF,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.9,
      wireframe: true,
    });
    const box = new THREE.Mesh(boxGeo, boxMat);
    rootGroup.add(box);
    cubeRef.current = box;

    // Glowing Inner Tesseract (Double wireframe inverted box)
    const innerBoxGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const innerBoxMat = new THREE.MeshBasicMaterial({
      color: 0xFF7A9E,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const innerBox = new THREE.Mesh(innerBoxGeo, innerBoxMat);
    rootGroup.add(innerBox);
    innerRef.current = innerBox;

    // Blooming Sakura Tree core / Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(0.7, 3);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xFF7A9E,
      emissive: 0x8878FF,
      emissiveIntensity: 1.5,
      roughness: 0.2,
      metalness: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // Bioluminescent Particle Swarm (Petals inside containment)
    const pCount = 200;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    const pVel = [];

    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 2.2;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 2.2;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 2.2;
      pVel.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xFF7A9E,
      size: 0.07,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(pGeo, pMat);
    rootGroup.add(particles);
    particlesRef.current = { particles, pPos, pVel };

    // Mouse Interaction for rotation
    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMouseRef.current.x;
      const deltaY = e.clientY - prevMouseRef.current.y;
      rootGroup.rotation.y += deltaX * 0.008;
      rootGroup.rotation.x += deltaY * 0.008;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const dom = mount;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseRef.current.x;
      const deltaY = e.touches[0].clientY - prevMouseRef.current.y;
      rootGroup.rotation.y += deltaX * 0.01;
      rootGroup.rotation.x += deltaY * 0.01;
      prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => { isDraggingRef.current = false; };

    dom.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    // Render loop
    let animId;
    let clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const delta = clock.getDelta();

      if (isRotating && !isDraggingRef.current) {
        rootGroup.rotation.y += delta * 0.35;
        rootGroup.rotation.x += delta * 0.15;
      }

      if (innerBox) {
        innerBox.rotation.y -= delta * 0.5;
        innerBox.rotation.z += delta * 0.4;
      }

      // Swarm turbulence within containment bounds
      if (particlesRef.current) {
        const { pPos, pVel } = particlesRef.current;
        for (let i = 0; i < pCount; i++) {
          pPos[i * 3] += pVel[i].x;
          pPos[i * 3 + 1] += pVel[i].y;
          pPos[i * 3 + 2] += pVel[i].z;

          // Containment wall bouncing
          if (Math.abs(pPos[i * 3]) > 1.3) pVel[i].x *= -1;
          if (Math.abs(pPos[i * 3 + 1]) > 1.3) pVel[i].y *= -1;
          if (Math.abs(pPos[i * 3 + 2]) > 1.3) pVel[i].z *= -1;
        }
        particles.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isRotating]);

  // Handle Entropy Change
  const handleEntropyChange = (val) => {
    setEntropy(val);
    if (innerRef.current) {
      const scale = 0.8 + (val / 100) * 0.9;
      innerRef.current.scale.set(scale, scale, scale);
    }
  };

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl glass-panel-glow overflow-hidden flex flex-col items-center justify-between p-6">
      <div className="w-full flex justify-between items-center z-10 font-mono text-xs text-bone-300">
        <span className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-rose animate-ping" />
          <span className="tracking-widest">OBJECT: TESSERACT-01</span>
        </span>
        <span className="text-violet tracking-wider">CONTAINED INFINITY</span>
      </div>

      {/* 3D Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
        title="Drag with mouse or touch to rotate 3D hypercube"
      />

      {/* Controls Overlay */}
      <div className="w-full z-10 glass-pill p-3 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <span className="text-gray-400">ENTROPY:</span>
          <input
            type="range"
            min="10"
            max="100"
            value={entropy}
            onChange={(e) => handleEntropyChange(Number(e.target.value))}
            className="w-28 sm:w-36 accent-rose cursor-pointer"
          />
          <span className="text-rose font-bold">{entropy}%</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="px-3 py-1 rounded border border-white/10 hover:border-violet text-bone-200 transition-colors"
          >
            {isRotating ? 'PAUSE SPIN' : 'AUTO SPIN'}
          </button>
          <span className="text-[10px] text-gray-500 hidden md:inline">DRAG TO ROTATE 3D</span>
        </div>
      </div>
    </div>
  );
}

