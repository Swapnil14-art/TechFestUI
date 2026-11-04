import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * High-performance 3D WebGL Canvas for the scroll-driven hero sequence.
 * Art direction inspired by Ash Thorp (cinematic sci-fi), Refik Anadol (fluid data fields),
 * and NASA deep-space imagery.
 * 
 * Frame progression driven strictly by scrollProgress (0.0 to 1.0):
 * 0.00 - 0.22: The Void (deep cosmic void, solitary pulsing singularity)
 * 0.22 - 0.44: The Distortion (gravitational lensing ring bending spacetime)
 * 0.44 - 0.66: The Contradiction (inverted city architecture above endless landscape)
 * 0.66 - 0.85: The Witness (astronaut approaching contained world tesseract)
 * 0.85 - 1.00: The Reveal (object fractures into portal shards, camera plunges through)
 */
export default function CosmicScrollCanvas({ scrollProgress = 0 }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const objectsRef = useRef({});
  const mouseRef = useRef({ x: 0, y: 0, currentX: 0, currentY: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04060A, 0.025);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(54, width / height, 0.1, 1000);
    camera.position.set(0, 0, 32);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Lighting System
    const ambientLight = new THREE.AmbientLight(0x0D1224, 2.0);
    scene.add(ambientLight);

    const singularityLight = new THREE.PointLight(0xFF5B79, 4, 70);
    singularityLight.position.set(0, 0, 0);
    scene.add(singularityLight);

    const cosmicVioletLight = new THREE.PointLight(0x8B5CF6, 3.5, 60);
    cosmicVioletLight.position.set(10, 8, 8);
    scene.add(cosmicVioletLight);

    const cyanLight = new THREE.PointLight(0x38BDF8, 2.5, 50);
    cyanLight.position.set(-10, -6, 6);
    scene.add(cyanLight);

    // 3. Deep-Space Starfield (Astronomical temperature colors: O/B blue, A/F white, K/M red-orange)
    const starCount = 2400;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    const palette = [
      new THREE.Color(0xF2F2F5), // Starlight white
      new THREE.Color(0x93C5FD), // Blue giant
      new THREE.Color(0xC4B5FD), // Violet hue
      new THREE.Color(0xFCA5A5), // Distant warm star
      new THREE.Color(0x38BDF8), // Radiant cyan
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 140;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 140;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 140;

      const c = palette[Math.floor(Math.random() * palette.length)];
      starColors[i3] = c.r;
      starColors[i3 + 1] = c.g;
      starColors[i3 + 2] = c.b;

      starSizes[i] = 0.15 + Math.random() * 0.35;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 4. Refik Anadol-inspired Fluid Data Particle Field (Nebular Volumetric Cloud)
    const nebulaCount = 1200;
    const nebulaGeo = new THREE.BufferGeometry();
    const nebulaPos = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);

    for (let i = 0; i < nebulaCount; i++) {
      const i3 = i * 3;
      const radius = 6 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.7;

      nebulaPos[i3] = radius * Math.cos(phi) * Math.cos(theta);
      nebulaPos[i3 + 1] = radius * Math.sin(phi);
      nebulaPos[i3 + 2] = radius * Math.cos(phi) * Math.sin(theta);

      const colorMix = Math.random();
      const c = colorMix > 0.5 ? new THREE.Color(0x8B5CF6) : new THREE.Color(0xFF5B79);
      nebulaColors[i3] = c.r;
      nebulaColors[i3 + 1] = c.g;
      nebulaColors[i3 + 2] = c.b;
    }
    nebulaGeo.setAttribute('position', new THREE.BufferAttribute(nebulaPos, 3));
    nebulaGeo.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));

    const nebulaMat = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const nebulaCloud = new THREE.Points(nebulaGeo, nebulaMat);
    scene.add(nebulaCloud);

    // 5. Singularity Core (Frame 01)
    const singularityGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const singularityMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const singularityMesh = new THREE.Mesh(singularityGeo, singularityMat);
    scene.add(singularityMesh);

    // Singularity Accretion Ring (Frame 02: Space Bends)
    const ringGeo = new THREE.TorusGeometry(4.2, 0.15, 24, 180);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xFF5B79,
      emissive: 0x8B5CF6,
      emissiveIntensity: 2.4,
      roughness: 0.15,
      metalness: 0.9,
    });
    const distortionRing = new THREE.Mesh(ringGeo, ringMat);
    distortionRing.rotation.x = Math.PI / 2.5;
    distortionRing.rotation.y = Math.PI / 9;
    scene.add(distortionRing);

    // Secondary Outer Gravitational Halo
    const haloGeo = new THREE.RingGeometry(4.8, 6.6, 64);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const haloRing = new THREE.Mesh(haloGeo, haloMat);
    haloRing.rotation.x = Math.PI / 2.5;
    scene.add(haloRing);

    // 6. Inverted City Monoliths (Frame 03: The Contradiction)
    const cityGroup = new THREE.Group();
    const buildingCount = 32;
    for (let i = 0; i < buildingCount; i++) {
      const bHeight = 3.0 + Math.random() * 5.5;
      const bGeo = new THREE.BoxGeometry(0.7 + Math.random() * 0.5, bHeight, 0.7 + Math.random() * 0.5);
      const bMat = new THREE.MeshStandardMaterial({
        color: 0x070A12,
        emissive: i % 2 === 0 ? 0x8B5CF6 : 0x38BDF8,
        emissiveIntensity: 0.7,
        wireframe: true,
      });
      const bMesh = new THREE.Mesh(bGeo, bMat);
      const angle = (i / buildingCount) * Math.PI * 2;
      const dist = 6 + Math.random() * 3.5;
      bMesh.position.set(Math.cos(angle) * dist, 7 + bHeight / 2, Math.sin(angle) * dist - 2);
      bMesh.rotation.x = Math.PI; // Inverted pointing downwards!
      cityGroup.add(bMesh);
    }
    scene.add(cityGroup);

    // Infinite Digital Ground Plane below
    const groundGrid = new THREE.GridHelper(60, 48, 0x8B5CF6, 0x141A2E);
    groundGrid.position.y = -7;
    scene.add(groundGrid);

    // 7. The Witness & Contained Tesseract (Frame 04)
    const witnessGroup = new THREE.Group();

    // Astronaut figure (Stylized minimal architectural geometry)
    const suitGeo = new THREE.CapsuleGeometry(0.38, 0.95, 12, 16);
    const suitMat = new THREE.MeshStandardMaterial({
      color: 0xF2F2F5,
      roughness: 0.25,
      metalness: 0.85,
    });
    const astronaut = new THREE.Mesh(suitGeo, suitMat);

    // Gold / Rose Visor reflection
    const visorGeo = new THREE.SphereGeometry(0.24, 16, 16);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0xFF5B79,
      emissive: 0xF59E0B,
      emissiveIntensity: 1.2,
      roughness: 0.1,
      metalness: 0.95,
    });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 0.35, 0.28);
    astronaut.add(visor);

    witnessGroup.add(astronaut);
    astronaut.position.set(-2.8, 0, 5.5);
    astronaut.rotation.y = 0.45;
    astronaut.rotation.z = -0.12;
    scene.add(witnessGroup);

    // Contained World Tesseract (Transparent glass cube with miniature biome inside)
    const cubeGroup = new THREE.Group();
    cubeGroup.position.set(1.4, 0.4, 3);

    const outerCubeGeo = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const outerCubeMat = new THREE.MeshPhysicalMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.38,
      roughness: 0.08,
      metalness: 0.1,
      transmission: 0.9,
      wireframe: true,
    });
    const outerCube = new THREE.Mesh(outerCubeGeo, outerCubeMat);
    cubeGroup.add(outerCube);

    // Inner Glowing Botanical Core (Sakura / Living data cluster)
    const innerCoreGeo = new THREE.IcosahedronGeometry(0.8, 3);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0xFF5B79,
      emissive: 0xEC4899,
      emissiveIntensity: 2.2,
      wireframe: true,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    cubeGroup.add(innerCore);

    // Swarm particles inside the cube
    const swarmCount = 90;
    const swarmGeo = new THREE.BufferGeometry();
    const swarmPos = new Float32Array(swarmCount * 3);
    for (let i = 0; i < swarmCount; i++) {
      swarmPos[i * 3] = (Math.random() - 0.5) * 1.8;
      swarmPos[i * 3 + 1] = (Math.random() - 0.5) * 1.8;
      swarmPos[i * 3 + 2] = (Math.random() - 0.5) * 1.8;
    }
    swarmGeo.setAttribute('position', new THREE.BufferAttribute(swarmPos, 3));
    const swarmMat = new THREE.PointsMaterial({ color: 0xFF5B79, size: 0.08, transparent: true, opacity: 0.9 });
    const swarmParticles = new THREE.Points(swarmGeo, swarmMat);
    cubeGroup.add(swarmParticles);

    scene.add(cubeGroup);

    // 8. Dimensional Portal Shards (Frame 05: The Reveal)
    const shardsGroup = new THREE.Group();
    const shardCount = 42;
    for (let i = 0; i < shardCount; i++) {
      const sGeo = new THREE.TetrahedronGeometry(0.35 + Math.random() * 0.4);
      const sMat = new THREE.MeshStandardMaterial({
        color: 0x38BDF8,
        emissive: 0x8B5CF6,
        emissiveIntensity: 1.4,
        roughness: 0.1,
        metalness: 0.95,
      });
      const shard = new THREE.Mesh(sGeo, sMat);
      const theta = (i / shardCount) * Math.PI * 2;
      shard.position.set(Math.cos(theta) * 3.2, Math.sin(theta) * 3.2, 0);
      shardsGroup.add(shard);
    }
    scene.add(shardsGroup);

    // Store references
    objectsRef.current = {
      starField,
      nebulaCloud,
      singularityMesh,
      distortionRing,
      haloRing,
      cityGroup,
      groundGrid,
      astronaut,
      witnessGroup,
      cubeGroup,
      outerCube,
      innerCore,
      shardsGroup,
      singularityLight,
      cosmicVioletLight,
      cyanLight,
    };

    // Mouse movement parallax listener
    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.x = x * 1.8;
      mouseRef.current.y = y * 1.2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize listener
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Render loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse lerp
      mouseRef.current.currentX += (mouseRef.current.x - mouseRef.current.currentX) * 0.05;
      mouseRef.current.currentY += (mouseRef.current.y - mouseRef.current.currentY) * 0.05;

      // Slow background cosmic rotation
      if (starField) starField.rotation.y = elapsedTime * 0.01;
      if (nebulaCloud) nebulaCloud.rotation.y = -elapsedTime * 0.018;

      // Ring rotations
      if (distortionRing) distortionRing.rotation.z += 0.005;
      if (haloRing) haloRing.rotation.z -= 0.003;

      // Tesseract rotations
      if (outerCube) {
        outerCube.rotation.x += 0.007;
        outerCube.rotation.y += 0.01;
      }
      if (innerCore) {
        innerCore.rotation.x -= 0.012;
        innerCore.rotation.y -= 0.015;
      }

      // Astronaut subtle floating bob
      if (astronaut) {
        astronaut.position.y = Math.sin(elapsedTime * 1.4) * 0.15;
      }

      // Portal Shards orbit
      if (shardsGroup) shardsGroup.rotation.z += 0.008;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Synchronize 3D Scene based on scrollProgress (0.00 to 1.00)
  useEffect(() => {
    const camera = cameraRef.current;
    const objs = objectsRef.current;
    if (!camera || !objs.singularityMesh) return;

    const p = Math.max(0, Math.min(1, scrollProgress));

    if (p <= 0.22) {
      // FRAME 01: The Void (0.00 - 0.22)
      const lp = p / 0.22;
      camera.position.z = 32 - lp * 6;
      camera.position.y = mouseRef.current.currentY * 0.5;
      camera.position.x = mouseRef.current.currentX * 0.6;

      objs.singularityMesh.scale.setScalar(0.7 + Math.sin(p * 20) * 0.15);
      objs.singularityLight.intensity = 1.2 + Math.sin(p * 25) * 1.0;
      objs.distortionRing.scale.setScalar(lp * 0.2);
      objs.distortionRing.material.opacity = lp * 0.3;
      objs.haloRing.material.opacity = 0;
      objs.cityGroup.position.y = 35; // Hidden above
      objs.witnessGroup.position.z = -20; // Far behind
      objs.cubeGroup.scale.setScalar(0.001);
      objs.shardsGroup.scale.setScalar(0.001);
    } else if (p <= 0.44) {
      // FRAME 02: The Distortion (0.22 - 0.44)
      const lp = (p - 0.22) / 0.22;
      camera.position.z = 26 - lp * 5;
      camera.position.y = lp * 1.2 + mouseRef.current.currentY * 0.8;
      camera.position.x = mouseRef.current.currentX * 0.9;

      objs.singularityMesh.scale.setScalar(1.0 + lp * 0.5);
      objs.singularityLight.intensity = 2.5 + lp * 2.0;
      objs.distortionRing.scale.setScalar(0.2 + lp * 0.85);
      objs.distortionRing.material.opacity = 0.3 + lp * 0.7;
      objs.haloRing.material.opacity = lp * 0.35;
      objs.cityGroup.position.y = 26 - lp * 12; // Descending
      objs.witnessGroup.position.z = -12 + lp * 8;
      objs.cubeGroup.scale.setScalar(0.1 + lp * 0.3);
      objs.shardsGroup.scale.setScalar(0.1);
    } else if (p <= 0.66) {
      // FRAME 03: The Contradiction (0.44 - 0.66)
      const lp = (p - 0.44) / 0.22;
      camera.position.z = 21 - lp * 3;
      camera.position.y = 1.2 - lp * 1.8 + mouseRef.current.currentY;
      camera.position.x = mouseRef.current.currentX * 1.1;

      objs.cityGroup.position.y = 14 - lp * 4; // Inverted skyline fully in frame
      objs.distortionRing.scale.setScalar(1.05 + Math.sin(lp * Math.PI) * 0.12);
      objs.witnessGroup.position.z = -4 + lp * 5;
      objs.cubeGroup.scale.setScalar(0.4 + lp * 0.4);
      objs.shardsGroup.scale.setScalar(0.25);
    } else if (p <= 0.85) {
      // FRAME 04: The Witness (0.66 - 0.85)
      const lp = (p - 0.66) / 0.19;
      camera.position.z = 18 - lp * 4;
      camera.position.y = -0.6 + lp * 0.8 + mouseRef.current.currentY * 1.2;
      camera.position.x = mouseRef.current.currentX * 1.3;

      objs.witnessGroup.position.set(-0.3 + lp * 0.3, 0, 1.5 + lp * 3.5);
      objs.cubeGroup.position.set(1.3 - lp * 0.4, 0.2, 3);
      objs.cubeGroup.scale.setScalar(0.8 + lp * 0.35);
      objs.innerCore.scale.setScalar(1.0 + Math.sin(p * 15) * 0.2);
      objs.shardsGroup.scale.setScalar(0.4 + lp * 0.4);
    } else {
      // FRAME 05: The Reveal (0.85 - 1.00)
      const lp = (p - 0.85) / 0.15;
      camera.position.z = 14 - lp * 16; // Camera rushes forward through the portal!
      camera.position.y = 0.2 - lp * 0.2;
      camera.position.x = mouseRef.current.currentX * (1 - lp * 0.8);

      objs.shardsGroup.scale.setScalar(0.8 + lp * 5.0);
      objs.cubeGroup.scale.setScalar(1.15 + lp * 3.0);
      objs.outerCube.material.opacity = Math.max(0, 0.38 - lp * 0.38);
      objs.singularityLight.intensity = 4.5 + lp * 9.0;
      objs.singularityLight.color.setHex(0x38BDF8);
    }
  }, [scrollProgress]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-label="Cosmic Scroll WebGL 3D Canvas"
    />
  );
}

