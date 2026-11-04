import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Three.js 3D Engine for Concept A: The Universe Has a Glitch
 * Renders the 5 Paradox frames:
 * 1. The Void: Deep dark space, distant singularity pulsing.
 * 2. The Distortion: Radiant glowing accretion ring bending spacetime.
 * 3. The Contradiction: Inverted floating skyscrapers/monoliths suspended in space.
 * 4. The Witness: Astronaut silhouette approaching the contained tesseract.
 * 5. The Reveal: Portal fractures open, camera zooms forward through the anomaly.
 */
export default function CosmicCanvas({ time = 0, interactive = true }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const objectsRef = useRef({});
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene, Camera, Renderer
    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080D17, 0.035);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Ambient & Point Lights
    const ambientLight = new THREE.AmbientLight(0x141829, 2.5);
    scene.add(ambientLight);

    const singularityLight = new THREE.PointLight(0xFF7A9E, 4, 60);
    singularityLight.position.set(0, 0, 0);
    scene.add(singularityLight);

    const cosmicLight = new THREE.PointLight(0x8878FF, 3, 50);
    cosmicLight.position.set(8, 6, 5);
    scene.add(cosmicLight);

    const cyanLight = new THREE.PointLight(0x5CE1E6, 3, 40);
    cyanLight.position.set(-8, -4, 4);
    scene.add(cyanLight);

    // 3. Starfield Background (The Void)
    const starCount = 1800;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color(0xF5F5F7),
      new THREE.Color(0x8878FF),
      new THREE.Color(0xFF7A9E),
      new THREE.Color(0x5CE1E6)
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 120;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 120;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 120;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      starColors[i3] = c.r;
      starColors[i3 + 1] = c.g;
      starColors[i3 + 2] = c.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 4. Singularity Core (Frame 01)
    const singularityGeo = new THREE.SphereGeometry(0.65, 32, 32);
    const singularityMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const singularityMesh = new THREE.Mesh(singularityGeo, singularityMat);
    scene.add(singularityMesh);

    // 5. The Distortion Ring (Accretion Disc - Frame 02)
    const ringGeo = new THREE.TorusGeometry(3.6, 0.18, 30, 160);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xFF7A9E,
      emissive: 0x8878FF,
      emissiveIntensity: 2.2,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: false,
    });
    const distortionRing = new THREE.Mesh(ringGeo, ringMat);
    distortionRing.rotation.x = Math.PI / 2.6;
    distortionRing.rotation.y = Math.PI / 8;
    scene.add(distortionRing);

    // Outer faint halo ring
    const haloGeo = new THREE.RingGeometry(4.2, 5.8, 64);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x8878FF,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22,
      wireframe: true,
    });
    const haloRing = new THREE.Mesh(haloGeo, haloMat);
    haloRing.rotation.x = Math.PI / 2.6;
    scene.add(haloRing);

    // 6. Inverted City Monoliths (Frame 03: The Contradiction)
    const cityGroup = new THREE.Group();
    const buildingCount = 28;
    for (let i = 0; i < buildingCount; i++) {
      const bHeight = 2.5 + Math.random() * 4.5;
      const bGeo = new THREE.BoxGeometry(0.6 + Math.random() * 0.5, bHeight, 0.6 + Math.random() * 0.5);
      const bMat = new THREE.MeshStandardMaterial({
        color: 0x121A2D,
        emissive: i % 3 === 0 ? 0x8878FF : 0x5CE1E6,
        emissiveIntensity: 0.6,
        wireframe: true,
      });
      const building = new THREE.Mesh(bGeo, bMat);
      const angle = (i / buildingCount) * Math.PI * 2;
      const radius = 5 + Math.random() * 2.5;
      building.position.set(Math.cos(angle) * radius, 6 + (bHeight / 2), Math.sin(angle) * radius - 3);
      building.rotation.x = Math.PI; // Inverted pointing downwards!
      cityGroup.add(building);
    }
    scene.add(cityGroup);

    // Bottom Infinite Digital Plane (Grid lines below)
    const gridHelper = new THREE.GridHelper(50, 40, 0x8878FF, 0x1D243B);
    gridHelper.position.y = -6;
    scene.add(gridHelper);

    // 7. The Witness Astronaut & The Contained Tesseract (Frame 04)
    const witnessGroup = new THREE.Group();

    // Astronaut figure representation (Stylized high-tech geometric silhouette)
    const suitGeo = new THREE.CapsuleGeometry(0.4, 0.9, 12, 16);
    const suitMat = new THREE.MeshStandardMaterial({
      color: 0xF5F5F7,
      roughness: 0.3,
      metalness: 0.8,
    });
    const astronautBody = new THREE.Mesh(suitGeo, suitMat);

    // Visor with glowing gold/rose reflection
    const visorGeo = new THREE.SphereGeometry(0.26, 16, 16);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0xFFB703,
      emissive: 0xFF7A9E,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.95,
    });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 0.35, 0.28);
    astronautBody.add(visor);

    // Thruster jet glow
    const thrusterGeo = new THREE.ConeGeometry(0.12, 0.4, 8);
    const thrusterMat = new THREE.MeshBasicMaterial({ color: 0x5CE1E6, wireframe: true });
    const thruster = new THREE.Mesh(thrusterGeo, thrusterMat);
    thruster.rotation.x = Math.PI;
    thruster.position.set(0, -0.65, 0);
    astronautBody.add(thruster);

    witnessGroup.add(astronautBody);
    astronautBody.position.set(-2.8, -0.5, 6);
    astronautBody.rotation.y = 0.5;
    astronautBody.rotation.z = -0.15;
    scene.add(witnessGroup);

    // The Transparent Contained World (Hypercube / Tesseract containing miniature flora)
    const cubeGroup = new THREE.Group();
    cubeGroup.position.set(1.5, 0.3, 3);

    // Outer glass box
    const outerCubeGeo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const outerCubeMat = new THREE.MeshPhysicalMaterial({
      color: 0x8878FF,
      transparent: true,
      opacity: 0.35,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.9,
      ior: 1.5,
      wireframe: true,
    });
    const outerCube = new THREE.Mesh(outerCubeGeo, outerCubeMat);
    cubeGroup.add(outerCube);

    // Inner glowing Sakura Tree / Biome representation
    const innerCoreGeo = new THREE.IcosahedronGeometry(0.85, 2);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0xFF7A9E,
      emissive: 0xFF3366,
      emissiveIntensity: 2.5,
      wireframe: true,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    cubeGroup.add(innerCore);

    // Floating miniature blossom particles inside the cube
    const blossomCount = 80;
    const blossomGeo = new THREE.BufferGeometry();
    const blossomPos = new Float32Array(blossomCount * 3);
    for (let i = 0; i < blossomCount; i++) {
      blossomPos[i * 3] = (Math.random() - 0.5) * 1.8;
      blossomPos[i * 3 + 1] = (Math.random() - 0.5) * 1.8;
      blossomPos[i * 3 + 2] = (Math.random() - 0.5) * 1.8;
    }
    blossomGeo.setAttribute('position', new THREE.BufferAttribute(blossomPos, 3));
    const blossomMat = new THREE.PointsMaterial({ color: 0xFF7A9E, size: 0.09, transparent: true, opacity: 0.9 });
    const blossomParticles = new THREE.Points(blossomGeo, blossomMat);
    cubeGroup.add(blossomParticles);

    scene.add(cubeGroup);

    // 8. Dimensional Shards for The Reveal (Frame 05)
    const shardsGroup = new THREE.Group();
    const shardCount = 36;
    for (let i = 0; i < shardCount; i++) {
      const sGeo = new THREE.TetrahedronGeometry(0.4 + Math.random() * 0.5);
      const sMat = new THREE.MeshStandardMaterial({
        color: 0x5CE1E6,
        emissive: 0x8878FF,
        emissiveIntensity: 1.2,
        roughness: 0.1,
        metalness: 0.9,
      });
      const shard = new THREE.Mesh(sGeo, sMat);
      const theta = (i / shardCount) * Math.PI * 2;
      shard.position.set(Math.cos(theta) * 3, Math.sin(theta) * 3, 0);
      shardsGroup.add(shard);
    }
    scene.add(shardsGroup);

    // Save references for animation loop
    objectsRef.current = {
      starField,
      singularityMesh,
      distortionRing,
      haloRing,
      cityGroup,
      gridHelper,
      astronautBody,
      witnessGroup,
      cubeGroup,
      outerCube,
      innerCore,
      shardsGroup,
      singularityLight,
      cosmicLight,
      cyanLight,
    };

    // 9. Mouse movement listener for interactive 3D parallax
    const handleMouseMove = (e) => {
      if (!interactive) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = x * 2.2;
      mouseRef.current.targetY = y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 10. Window Resize Listener
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 11. Animation Tick Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Constant background drift
      if (starField) {
        starField.rotation.y = elapsedTime * 0.015;
      }

      // Continuous rotations
      if (distortionRing) {
        distortionRing.rotation.z += 0.005;
      }
      if (haloRing) {
        haloRing.rotation.z -= 0.003;
      }
      if (outerCube) {
        outerCube.rotation.x += 0.008;
        outerCube.rotation.y += 0.012;
      }
      if (innerCore) {
        innerCore.rotation.x -= 0.015;
        innerCore.rotation.y -= 0.018;
      }
      if (astronautBody) {
        astronautBody.position.y = -0.5 + Math.sin(elapsedTime * 1.5) * 0.18;
        astronautBody.rotation.z = -0.15 + Math.sin(elapsedTime * 0.8) * 0.04;
      }

      // Dynamic Shard Orbit
      if (shardsGroup) {
        shardsGroup.rotation.z += 0.006;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Scene & Camera based on cinematic timeline `time` (0s - 12s)
  useEffect(() => {
    const camera = cameraRef.current;
    const objs = objectsRef.current;
    if (!camera || !objs.singularityMesh) return;

    // Normalizing time to 0 - 12s
    const t = Math.max(0, Math.min(12, time));

    // Progress 0.0 to 1.0
    const progress = t / 12;

    // Stage interpolation
    if (t <= 2.5) {
      // FRAME 01: The Void (0s - 2.5s)
      // Camera far back, solitary faint pulsing star
      const localP = t / 2.5;
      camera.position.z = 24 - localP * 4;
      camera.position.y = 0;
      camera.position.x = mouseRef.current.x * 0.8;

      objs.singularityMesh.scale.setScalar(0.7 + Math.sin(t * 6) * 0.2);
      objs.singularityLight.intensity = 1.2 + Math.sin(t * 8) * 1.0;
      objs.distortionRing.scale.setScalar(localP * 0.2);
      objs.distortionRing.material.opacity = localP * 0.4;
      objs.haloRing.material.opacity = 0;
      objs.cityGroup.position.y = 25; // Far out of sight
      objs.witnessGroup.position.z = -15; // Far behind
      objs.cubeGroup.scale.setScalar(0.001);
      objs.shardsGroup.scale.setScalar(0.001);
    } else if (t <= 5.0) {
      // FRAME 02: The Distortion (2.5s - 5.0s)
      // Space bends, radiant glowing ring expands
      const localP = (t - 2.5) / 2.5;
      camera.position.z = 20 - localP * 4;
      camera.position.y = localP * 1.5;
      camera.position.x = mouseRef.current.x * 1.2;

      objs.singularityMesh.scale.setScalar(1.2 + localP * 0.5);
      objs.singularityLight.intensity = 2.5 + localP * 2.0;
      objs.distortionRing.scale.setScalar(0.2 + localP * 0.9);
      objs.distortionRing.material.opacity = 0.4 + localP * 0.6;
      objs.haloRing.material.opacity = localP * 0.35;
      objs.cityGroup.position.y = 18 - localP * 8; // Descending into view
      objs.witnessGroup.position.z = -10 + localP * 8;
      objs.cubeGroup.scale.setScalar(0.1 + localP * 0.3);
      objs.shardsGroup.scale.setScalar(0.1);
    } else if (t <= 7.5) {
      // FRAME 03: The Contradiction (5.0s - 7.5s)
      // Inverted city appears above landscape below
      const localP = (t - 5.0) / 2.5;
      camera.position.z = 16 - localP * 2;
      camera.position.y = 1.5 - localP * 2.0;
      camera.position.x = mouseRef.current.x * 1.4;

      objs.distortionRing.scale.setScalar(1.1 + Math.sin(localP * Math.PI) * 0.15);
      objs.cityGroup.position.y = 10 - localP * 2.5; // Inverted skyscrapers fully visible
      objs.gridHelper.position.y = -6 + localP * 0.5;
      objs.witnessGroup.position.z = -2 + localP * 4;
      objs.cubeGroup.scale.setScalar(0.4 + localP * 0.4);
      objs.shardsGroup.scale.setScalar(0.3);
    } else if (t <= 10.0) {
      // FRAME 04: The Witness (7.5s - 10.0s)
      // Lone astronaut approaches transparent miniature world tesseract
      const localP = (t - 7.5) / 2.5;
      camera.position.z = 14 - localP * 3;
      camera.position.y = -0.5 + localP * 0.8;
      camera.position.x = mouseRef.current.x * 1.6;

      objs.witnessGroup.position.set(-0.5 + localP * 0.3, 0, 2.5 + localP * 2.5);
      objs.cubeGroup.position.set(1.2 - localP * 0.4, 0.2, 3);
      objs.cubeGroup.scale.setScalar(0.8 + localP * 0.35);
      objs.innerCore.scale.setScalar(1.0 + Math.sin(t * 4) * 0.25);
      objs.shardsGroup.scale.setScalar(0.5 + localP * 0.4);
    } else {
      // FRAME 05: The Reveal (10.0s - 12.0s)
      // Object fractures into dimensional portal, camera passes through!
      const localP = (t - 10.0) / 2.0;
      camera.position.z = 11 - localP * 12; // Camera rushes forward through the portal!
      camera.position.y = 0.3 - localP * 0.3;
      camera.position.x = mouseRef.current.x * (1 - localP * 0.5);

      // Shards disperse outward as portal breaks
      objs.shardsGroup.scale.setScalar(0.9 + localP * 4.5);
      objs.cubeGroup.scale.setScalar(1.15 + localP * 2.5);
      objs.outerCube.material.opacity = Math.max(0, 0.4 - localP * 0.4);
      objs.singularityLight.intensity = 4.5 + localP * 8.0; // Blinding portal emergence flash
      objs.singularityLight.color.setHex(0x5CE1E6);
    }
  }, [time]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-label="3D Cosmic Paradox Space Canvas"
    />
  );
}

