<template>
  <TresCanvas
    alpha
    clear-color="transparent"
    :clear-alpha="0"
    :window-size="false"
    class="w-full h-full absolute inset-0"
  >
    <TresPerspectiveCamera :position="[0, 0, 10]" />
    <MouseParallax :factor="0.2" />

    <template v-if="isReady">
      <TresGroup ref="groupWeb" :visible="true">
        <TresPoints>
          <TresBufferGeometry>
            <TresBufferAttribute
              :args="[posCode, 3]"
              attach="attributes-position"
            />
          </TresBufferGeometry>
          <TresPointsMaterial
            ref="matWeb"
            color="#22d3ee"
            :size="0.06"
            :map="glowTexture"
            :transparent="true"
            :opacity="0"
            :depthWrite="false"
            :blending="2"
          />
        </TresPoints>
      </TresGroup>

      <TresGroup ref="groupAI" :visible="false">
        <TresPoints>
          <TresBufferGeometry>
            <TresBufferAttribute
              :args="[posStar, 3]"
              attach="attributes-position"
            />
          </TresBufferGeometry>
          <TresPointsMaterial
            ref="matAI"
            color="#ffffff"
            :size="0.06"
            :map="glowTexture"
            :transparent="true"
            :opacity="0"
            :depthWrite="false"
            :blending="2"
          />
        </TresPoints>
      </TresGroup>

      <TresGroup ref="groupMobile" :visible="false">
        <TresPoints>
          <TresBufferGeometry>
            <TresBufferAttribute
              :args="[posChain, 3]"
              attach="attributes-position"
            />
          </TresBufferGeometry>
          <TresPointsMaterial
            ref="matMobile"
            color="#c084fc"
            :size="0.06"
            :map="glowTexture"
            :transparent="true"
            :opacity="0"
            :depthWrite="false"
            :blending="2"
          />
        </TresPoints>
      </TresGroup>
    </template>
  </TresCanvas>
</template>

<script setup lang="ts">
import { shallowRef, ref, watch, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import gsap from "gsap";
import { MouseParallax } from "@tresjs/cientos";

const props = defineProps<{
  activeIndex: number;
}>();

const isReady = ref(false);
const glowTexture = shallowRef<THREE.Texture | null>(null);

const groupWeb = shallowRef();
const groupAI = shallowRef();
const groupMobile = shallowRef();

const matWeb = shallowRef();
const matAI = shallowRef();
const matMobile = shallowRef();

let animationFrameId: number;

const createGlowTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const center = 64;
    const gradient = ctx.createRadialGradient(
      center,
      center,
      0,
      center,
      center,
      center,
    );
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.2)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
};

const particleCount = 15000;

const randomGaussian = (mean = 0, stdev = 1) => {
  const u = 1 - Math.random();
  const v = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return z * stdev + mean;
};

// Developer
const posCode = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
  const rand = Math.random();
  let x = 0,
    y = 0,
    z = randomGaussian(0, 0.08);
  const t = Math.random();

  if (rand < 0.2) {
    x = -1.0 - t * 1.5;
    y = 1.5 - t * 1.5;
  } else if (rand < 0.4) {
    x = -2.5 + t * 1.5;
    y = 0.0 - t * 1.5;
  } else if (rand < 0.6) {
    x = -0.5 + t * 1.0;
    y = -1.8 + t * 3.6;
  } else if (rand < 0.8) {
    x = 1.0 + t * 1.5;
    y = 1.5 - t * 1.5;
  } else {
    x = 2.5 - t * 1.5;
    y = 0.0 - t * 1.5;
  }

  x += randomGaussian(0, 0.08);
  y += randomGaussian(0, 0.08);

  posCode[i * 3] = x;
  posCode[i * 3 + 1] = y;
  posCode[i * 3 + 2] = z;
}

// AI
const posStar = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
  const rand = Math.random();
  let scale = 1,
    cx = 0,
    cy = 0;

  if (rand < 0.5) {
    scale = 2.5;
    cx = 0;
    cy = 0;
  } else if (rand < 0.75) {
    scale = 1.0;
    cx = -2.5;
    cy = 1.5;
  } else {
    scale = 0.8;
    cx = 2.0;
    cy = -1.5;
  }

  const t = Math.random() * Math.PI * 2;
  const xCore = Math.pow(Math.cos(t), 3) * scale;
  const yCore = Math.pow(Math.sin(t), 3) * scale;

  const fill = Math.pow(Math.random(), 1.5);
  let x = xCore * fill + cx;
  let y = yCore * fill + cy;
  let z = randomGaussian(0, 0.1);

  x += randomGaussian(0, 0.05);
  y += randomGaussian(0, 0.05);

  posStar[i * 3] = x;
  posStar[i * 3 + 1] = y;
  posStar[i * 3 + 2] = z;
}

// Blockchain
const posChain = new Float32Array(particleCount * 3);
const nodes = [
  { x: -1.5, y: -1.5, z: -1.5 },
  { x: 1.5, y: -1.5, z: -1.5 },
  { x: -1.5, y: 1.5, z: -1.5 },
  { x: 1.5, y: 1.5, z: -1.5 },
  { x: -1.5, y: -1.5, z: 1.5 },
  { x: 1.5, y: -1.5, z: 1.5 },
  { x: -1.5, y: 1.5, z: 1.5 },
  { x: 1.5, y: 1.5, z: 1.5 },
  { x: 0, y: 0, z: 0 },
];

type NodePos = { x: number; y: number; z: number };
const getRandomNode = (): NodePos => {
  const index = Math.floor(Math.random() * nodes.length);
  return nodes[index] as NodePos;
};

for (let i = 0; i < particleCount; i++) {
  const rand = Math.random();
  let px = 0,
    py = 0,
    pz = 0;

  if (rand < 0.5) {
    const node = getRandomNode();
    px = node.x + randomGaussian(0, 0.2);
    py = node.y + randomGaussian(0, 0.2);
    pz = node.z + randomGaussian(0, 0.2);
  } else {
    const n1 = getRandomNode();
    const n2 = getRandomNode();
    const t = Math.random();
    px = n1.x + (n2.x - n1.x) * t + randomGaussian(0, 0.03);
    py = n1.y + (n2.y - n1.y) * t + randomGaussian(0, 0.03);
    pz = n1.z + (n2.z - n1.z) * t + randomGaussian(0, 0.03);
  }

  posChain[i * 3] = px;
  posChain[i * 3 + 1] = py;
  posChain[i * 3 + 2] = pz;
}

const animateTransition = (newIdx: number, oldIdx?: number) => {
  const groups = [groupWeb.value, groupAI.value, groupMobile.value];
  const mats = [matWeb.value, matAI.value, matMobile.value];

  const targetOpacity = 0.9;

  if (oldIdx === undefined) {
    if (groups[newIdx] && mats[newIdx]) {
      groups[newIdx].visible = true;
      gsap.to(groups[newIdx].scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2,
        ease: "expo.out",
      });
      gsap.to(mats[newIdx], { opacity: targetOpacity, duration: 1.5 });
    }
    return;
  }

  const oldGroup = groups[oldIdx];
  const oldMat = mats[oldIdx];
  const newGroup = groups[newIdx];
  const newMat = mats[newIdx];

  if (oldGroup && oldMat) {
    gsap.to(oldGroup.scale, {
      x: 0.01,
      y: 0.01,
      z: 0.01,
      duration: 0.8,
      ease: "power2.in",
    });
    gsap.to(oldMat, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        oldGroup.visible = false;
      },
    });
  }

  if (newGroup && newMat) {
    newGroup.visible = true;
    gsap.set(newGroup.scale, { x: 0.01, y: 0.01, z: 0.01 });
    gsap.to(newGroup.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 2,
      ease: "elastic.out(1, 0.7)",
      delay: 0.6,
    });
    gsap.to(newMat, { opacity: targetOpacity, duration: 1, delay: 0.6 });
  }
};

let time = 0;
const ambientRotation = () => {
  time += 0.005;

  if (groupWeb.value && groupWeb.value.visible) {
    groupWeb.value.rotation.y = Math.sin(time * 2) * 0.2;
    groupWeb.value.rotation.x = Math.cos(time * 1.5) * 0.1;
  }
  if (groupAI.value && groupAI.value.visible) {
    groupAI.value.rotation.y += 0.002;
    groupAI.value.rotation.z += 0.002;
  }
  if (groupMobile.value && groupMobile.value.visible) {
    groupMobile.value.rotation.y += 0.002;
    groupMobile.value.rotation.x += 0.001;
  }

  animationFrameId = requestAnimationFrame(ambientRotation);
};

watch(
  () => props.activeIndex,
  (newIdx, oldIdx) => {
    animateTransition(newIdx, oldIdx);
  },
);

onMounted(() => {
  if (import.meta.client) {
    glowTexture.value = createGlowTexture();
    isReady.value = true;
    ambientRotation();
    setTimeout(() => animateTransition(props.activeIndex), 300);
  }
});

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});
</script>
