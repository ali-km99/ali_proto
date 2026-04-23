<template>
  <div
    ref="wrapperRef"
    class="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden font-['Share_Tech_Mono',monospace]"
    @mousemove="handleMouseMove"
  >
    <!-- Grid bg -->
    <div
      class="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(245,197,24,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(245,197,24,0.04)_1px,transparent_1px)] [background-size:60px_60px]"
    ></div>

    <!-- Scanlines -->
    <div
      class="absolute inset-0 pointer-events-none z-[1] [background:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)]"
    ></div>

    <!-- Particles -->
    <div class="absolute inset-0 pointer-events-none">
      <span
        v-for="n in 20"
        :key="n"
        class="absolute rounded-full bg-[#f5c518] opacity-[0.15] animate-[float_linear_infinite]"
        :style="particleStyle(n)"
      ></span>
    </div>

    <!-- Mouse glow -->
    <div
      class="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-100 [background:radial-gradient(circle,rgba(245,197,24,0.07)_0%,transparent_70%)]"
      :style="{ left: mouse.x + 'px', top: mouse.y + 'px' }"
    ></div>

    <!-- Main Content -->
    <div
      class="relative z-10 flex flex-col items-center text-center p-8 pb-24 max-w-[640px] w-full"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 800 } }"
    >
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 border border-[rgba(245,197,24,0.3)] bg-[rgba(245,197,24,0.08)] px-4 py-1.5 rounded-full text-[#f5c518] text-[11px] tracking-[0.15em] mb-8"
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
      >
        <span
          class="w-2 h-2 bg-[#f5c518] rounded-full animate-[blink_1.2s_ease-in-out_infinite]"
        ></span>
        <span>ERROR_CODE :: 404</span>
      </div>

      <!-- Glitch 404 -->
      <div
        class="mb-6"
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: { duration: 600, delay: 300 },
        }"
      >
        <h1
          class="glitch font-['Bebas_Neue',sans-serif] text-[clamp(120px,22vw,220px)] text-[#f5c518] leading-none relative tracking-[-4px] [text-shadow:0_0_40px_rgba(245,197,24,0.4)] animate-[glitch-main_4s_infinite]"
          data-text="404"
        >
          404
        </h1>
      </div>

      <!-- Code block -->
      <div
        class="w-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] mb-6 text-left"
        v-motion
        :initial="{ opacity: 0, x: -30 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 500 } }"
      >
        <div
          class="flex items-center gap-1.5 px-3.5 py-2 border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)]"
        >
          <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-[#f5c518]"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-[#28ca42]"></span>
          <span
            class="text-[rgba(255,255,255,0.3)] text-[11px] ml-2 tracking-[0.1em]"
            >error.log</span
          >
        </div>
        <div class="p-5 text-[13px] leading-loose text-[rgba(255,255,255,0.5)]">
          <p>
            <span class="text-[#f5c518] font-bold">const</span> error = &#123;
          </p>
          <p>&nbsp;&nbsp;status: <span class="text-[#3cf5a0]">404</span>,</p>
          <p>
            &nbsp;&nbsp;message:
            <span class="text-[#3cf5a0]">'Page not found'</span>,
          </p>
          <p>
            &nbsp;&nbsp;path:
            <span class="text-[#3cf5a0]">'{{ currentPath }}'</span>,
          </p>
          <p>
            &nbsp;&nbsp;suggestion:
            <span class="text-[#3cf5a0]">'Go back home'</span>,
          </p>
          <p>&#125;</p>
        </div>
      </div>

      <!-- Sub text -->
      <p
        class="text-[rgba(255,255,255,0.35)] text-sm mb-8 leading-relaxed"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 500, delay: 700 } }"
      >
        الصفحة التي تبحث عنها اختفت أو لم تكن موجودة أصلاً.
      </p>

      <!-- Actions -->
      <div
        class="flex gap-3 mb-10 flex-wrap justify-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 900 } }"
      >
        <router-link
          to="/"
          class="inline-flex items-center gap-2 bg-[#f5c518] text-[#0a0a0a] text-sm font-black px-7 py-3 no-underline tracking-[0.05em] transition-all duration-200 hover:bg-[#ffd740] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,197,24,0.3)]"
        >
          <span>← العودة للرئيسية</span>
        </router-link>
        <router-link
          to="/about"
          class="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.6)] text-sm px-7 py-3 no-underline transition-all duration-200 hover:border-[#f5c518] hover:text-[#f5c518] hover:-translate-y-0.5"
        >
          <span>About Me</span>
        </router-link>
      </div>

      <!-- Nav hint -->
      <div
        class="flex items-center gap-3 text-[rgba(255,255,255,0.2)] text-[11px] tracking-[0.15em] mb-4"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 500, delay: 1100 } }"
      >
        <span class="flex-1 h-px bg-[rgba(255,255,255,0.08)]"></span>
        <span>or navigate to</span>
        <span class="flex-1 h-px bg-[rgba(255,255,255,0.08)]"></span>
      </div>

      <!-- Quick links -->
      <div
        class="flex gap-4 flex-wrap justify-center"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 500, delay: 1200 } }"
      >
        <router-link
          v-for="link in quickLinks"
          :key="link.to"
          :to="link.to"
          class="text-[rgba(255,255,255,0.3)] no-underline text-[12px] tracking-[0.1em] transition-colors duration-200 py-1 border-b border-transparent hover:text-[#f5c518] hover:border-[rgba(245,197,24,0.4)]"
        >
          {{ link.label }} ↗
        </router-link>
      </div>
    </div>

    <!-- Corner decorations -->
    <div
      class="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-[#f5c518] pointer-events-none z-5"
    ></div>
    <div
      class="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-[#f5c518] pointer-events-none z-5"
    ></div>
    <div
      class="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-[#f5c518] pointer-events-none z-5"
    ></div>
    <div
      class="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-[#f5c518] pointer-events-none z-5"
    ></div>

    <!-- Brand footer -->
    <div
      class="absolute bottom-[37px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 z-10"
    >
      <span
        class="text-[#f5c518] font-['Bebas_Neue',sans-serif] text-[18px] tracking-[0.15em]"
        >Ali KM</span
      >
      <span class="text-[rgba(255,255,255,0.2)] text-[9px] tracking-[0.25em]"
        >FUTURE TECHNOLOGY</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const wrapperRef = ref(null);
const mouse = ref({ x: -300, y: -300 });

const currentPath = computed(() => route?.fullPath || "/unknown-page");

const quickLinks = [
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

function handleMouseMove(e) {
  mouse.value = { x: e.clientX, y: e.clientY };
}

function particleStyle(n) {
  const size = Math.random() * 4 + 1;
  return {
    width: size + "px",
    height: size + "px",
    left: ((n * 5.3) % 100) + "%",
    top: ((n * 7.1) % 100) + "%",
    animationDelay: n * 0.3 + "s",
    animationDuration: 6 + (n % 4) + "s",
  };
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Bebas+Neue&display=swap");

/* Glitch effect — لا يمكن استبدالها بـ Tailwind بسبب pseudo-elements مع content: attr() */
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
}
.glitch::before {
  color: #ff3c3c;
  clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
  animation: glitch-top 4s infinite;
  opacity: 0.8;
}
.glitch::after {
  color: #3cf5f5;
  clip-path: polygon(0 55%, 100% 55%, 100% 75%, 0 75%);
  animation: glitch-bottom 4s infinite;
  opacity: 0.8;
}

@keyframes float {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.15;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-80px) scale(0.5);
    opacity: 0;
  }
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
}
@keyframes glitch-main {
  0%,
  95%,
  100% {
    transform: none;
  }
  96% {
    transform: skewX(-3deg);
  }
  97% {
    transform: skewX(3deg);
  }
  98% {
    transform: none;
  }
}
@keyframes glitch-top {
  0%,
  95%,
  100% {
    transform: none;
    opacity: 0;
  }
  96% {
    transform: translate(-4px, -2px);
    opacity: 0.8;
  }
  97% {
    transform: translate(4px, 2px);
    opacity: 0.8;
  }
  98% {
    opacity: 0;
  }
}
@keyframes glitch-bottom {
  0%,
  96%,
  100% {
    transform: none;
    opacity: 0;
  }
  97% {
    transform: translate(4px, 3px);
    opacity: 0.8;
  }
  98% {
    transform: translate(-4px, -3px);
    opacity: 0.8;
  }
  99% {
    opacity: 0;
  }
}
</style>
