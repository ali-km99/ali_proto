<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
    <!-- Navbar -->
    <NavBar class="z-100" />

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-8 md:px-20 relative overflow-hidden">
      <!-- Grid background -->
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="
          background-image:
            linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px);
          background-size: 60px 60px;
        "
      ></div>
      <!-- Glow -->
      <div
        class="absolute top-20 left-1/2 -translate-x-1/2 w-150 h-75 bg-[#f5c518]/5 rounded-full blur-[100px] pointer-events-none"
      ></div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="relative z-10"
      >
        <div
          class="inline-flex items-center gap-2 bg-[#f5c518]/10 border border-[#f5c518]/30 px-4 py-1.5 rounded-full mb-6"
        >
          <span class="w-2 h-2 bg-[#f5c518] rounded-full animate-pulse"></span>
          <span
            class="text-[#f5c518] text-xs tracking-[0.15em] uppercase font-bold"
            >About Me</span
          >
        </div>

        <h1
          class="text-6xl md:text-8xl font-black leading-none mb-2 tracking-tight"
        >
          <span class="text-white">FRONTEND</span>
        </h1>
        <h1
          class="text-6xl md:text-8xl font-black leading-none mb-2 tracking-tight text-white/20"
        >
          ARCHITECT
        </h1>
        <h1
          class="text-6xl md:text-8xl font-black leading-none tracking-tight text-[#f5c518]"
        >
          & BUILDER.
        </h1>
      </div>
    </section>

    <!-- Main CV Grid -->
    <section class="px-8 md:px-20 pb-24 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- LEFT COLUMN -->
        <div class="lg:col-span-1 flex flex-col gap-6">
          <!-- Profile Card -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{
              opacity: 1,
              x: 0,
              transition: { duration: 600, delay: 100 },
            }"
            class="border border-white/10 bg-white/2 p-6 relative group hover:border-[#f5c518]/30 transition-all duration-300"
          >
            <div
              class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#f5c518]"
            ></div>
            <div
              class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#f5c518]"
            ></div>

            <div
              class="w-20 h-20 bg-linear-to-br from-[#f5c518] to-[#c9960c] rounded-full flex items-center justify-center mb-4 text-black font-black text-2xl"
            >
              AK
            </div>
            <h2 class="text-2xl font-black text-white mb-1">Ali KM</h2>
            <p
              class="text-[#f5c518] text-sm font-bold tracking-wider uppercase mb-4"
            >
              Frontend Architect
            </p>

            <div class="space-y-2 text-sm text-white/50">
              <div class="flex items-center gap-3">
                <span class="text-[#f5c518]">📍</span>
                <span>Tripoli, Libya</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-[#f5c518]">📧</span>
                <span>ali.km@dev.io</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-[#f5c518]">🔗</span>
                <span>github.com/alikm</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-[#f5c518]">💼</span>
                <span>linkedin.com/in/alikm</span>
              </div>
            </div>

            <div class="mt-5 pt-5 border-t border-white/10">
              <div class="flex items-center gap-2 mb-1">
                <div
                  class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                ></div>
                <span class="text-green-400 text-xs font-bold"
                  >Available for Work</span
                >
              </div>
              <p class="text-white/30 text-xs">Open to full-time & freelance</p>
            </div>
          </div>

          <!-- Languages -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{
              opacity: 1,
              x: 0,
              transition: { duration: 600, delay: 200 },
            }"
            class="border border-white/10 bg-white/2 p-6 hover:border-[#f5c518]/30 transition-all duration-300"
          >
            <h3
              class="text-xs tracking-[0.2em] uppercase text-[#f5c518] font-bold mb-4"
            >
              Languages
            </h3>
            <div class="space-y-3">
              <div v-for="lang in languages" :key="lang.name">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-white/70">{{ lang.name }}</span>
                  <span class="text-white/30 text-xs">{{ lang.level }}</span>
                </div>
                <div class="h-0.5 bg-white/10 rounded">
                  <div
                    class="h-full bg-[#f5c518] rounded transition-all duration-1000"
                    :style="{ width: lang.percent + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{
              opacity: 1,
              x: 0,
              transition: { duration: 600, delay: 300 },
            }"
            class="border border-white/10 bg-white/2 p-6 hover:border-[#f5c518]/30 transition-all duration-300"
          >
            <h3
              class="text-xs tracking-[0.2em] uppercase text-[#f5c518] font-bold mb-4"
            >
              Education
            </h3>
            <div class="space-y-4">
              <div v-for="edu in education" :key="edu.degree">
                <div class="text-xs text-white/30 mb-1">{{ edu.year }}</div>
                <div class="text-white font-bold text-sm">{{ edu.degree }}</div>
                <div class="text-white/50 text-xs mt-0.5">{{ edu.school }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="lg:col-span-2 flex flex-col gap-6">
          <!-- About Text -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 150 },
            }"
            class="border border-white/10 bg-white/2 p-8 hover:border-[#f5c518]/30 transition-all duration-300 relative"
          >
            <div
              class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f5c518]"
            ></div>
            <h3
              class="text-xs tracking-[0.2em] uppercase text-[#f5c518] font-bold mb-4"
            >
              const developer = &#123;
            </h3>
            <p class="text-white/60 leading-relaxed text-sm mb-4">
              Frontend Developer with solid experience building modern web
              applications using
              <span class="text-[#f5c518]">Vue 3</span>,
              <span class="text-[#f5c518]">TypeScript</span>, and modern
              frontend tools. I focus on creating fast, scalable, and
              user-friendly interfaces that deliver real business value.
            </p>

            <p class="text-white/60 leading-relaxed text-sm">
              Experienced in working on real-world projects including systems
              that connect companies, service providers, and users with complex
              data handling and clean UI design. Passionate about clean code,
              performance, and building smooth user experiences.
            </p>
            <div class="mt-4 text-white/20 text-xs">&#125;</div>
          </div>

          <!-- Skills Grid -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 250 },
            }"
            class="border border-white/10 bg-white/2 p-8 hover:border-[#f5c518]/30 transition-all duration-300"
          >
            <h3
              class="text-xs tracking-[0.2em] uppercase text-[#f5c518] font-bold mb-6"
            >
              Technical Skills
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div v-for="skillGroup in skills" :key="skillGroup.category">
                <div
                  class="text-white/40 text-xs mb-3 uppercase tracking-wider"
                >
                  // {{ skillGroup.category }}
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="item in skillGroup.items"
                    :key="item"
                    class="px-3 py-1 text-xs border border-white/10 text-white/60 hover:border-[#f5c518]/50 hover:text-[#f5c518] transition-all duration-200 cursor-default"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Experience -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 350 },
            }"
            class="border border-white/10 bg-white/2 p-8 hover:border-[#f5c518]/30 transition-all duration-300"
          >
            <h3
              class="text-xs tracking-[0.2em] uppercase text-[#f5c518] font-bold mb-6"
            >
              Experience
            </h3>
            <div class="space-y-8">
              <div
                v-for="(exp, i) in experience"
                :key="i"
                class="relative pl-6 border-l border-white/10 hover:border-[#f5c518]/40 transition-colors duration-300"
              >
                <div
                  class="absolute -left-1.25 top-1 w-2.5 h-2.5 bg-[#f5c518] rounded-full"
                ></div>
                <div
                  class="flex flex-wrap items-start justify-between gap-2 mb-2"
                >
                  <div>
                    <h4 class="text-white font-black text-base">
                      {{ exp.title }}
                    </h4>
                    <p class="text-[#f5c518] text-sm">{{ exp.company }}</p>
                  </div>
                  <span
                    class="text-white/30 text-xs border border-white/10 px-2 py-1"
                    >{{ exp.period }}</span
                  >
                </div>
                <p class="text-white/50 text-sm leading-relaxed">
                  {{ exp.description }}
                </p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <span
                    v-for="tag in exp.tags"
                    :key="tag"
                    class="text-[10px] px-2 py-0.5 bg-[#f5c518]/10 text-[#f5c518]/70 border border-[#f5c518]/20"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats Row -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 450 },
            }"
            class="grid grid-cols-3 gap-4"
          >
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="border border-white/10 bg-white/2 p-5 text-center hover:border-[#f5c518]/40 hover:bg-[#f5c518]/5 transition-all duration-300 group"
            >
              <div
                class="text-3xl font-black text-[#f5c518] group-hover:scale-110 transition-transform duration-300"
              >
                {{ stat.value }}
              </div>
              <div class="text-white/40 text-xs mt-1 uppercase tracking-wider">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterComp />
  </div>
</template>

<script setup>
import { useMotion } from "@vueuse/motion";
import NavBar from "../layout/NavBar.vue";
import FooterComp from "../layout/FooterComp.vue";

const languages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "English", level: "Good", percent: 75 },
];

const education = [
  {
    year: "2022 – Present",
    degree: "B.Sc. Computer Science",
    school: "Al-Rafaa Private University",
  },
  {
    year: "2024",
    degree: "Frontend Diploma",
    school: "Route IT Training Center, Cairo - Egypt",
  },
];

const skills = [
  {
    category: "Core",
    items: ["Vue 3", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend Stack",
    items: ["Vue Router", "Pinia / Vue Query", "Composition API"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Vuetify", "Responsive Design", "Vue Motion()"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vite", "Figma"],
  },
];
const experience = [
  {
    title: "Frontend Developer",
    company: "GrowthTech",
    period: "2024 – Present",
    description:
      "Worked on multiple real-world enterprise projects including building a complete healthcare insurance system connecting companies, employees, hospitals, and service providers. The system handled complex workflows including financial operations, claims management, and detailed reporting for both providers and organizations.",
    tags: ["Vue 3", "TypeScript", "Tailwind", "Vue Query"],
  },
  {
    title: "Frontend Developer",
    company: "GrowthTech",
    period: "2024",
    description:
      "Contributed to developing ERP systems for training centers, including hall booking systems, student and instructor management, and financial/accounting modules. Focused on building responsive interfaces and integrating APIs for dynamic data handling.",
    tags: ["Vue 3", "TypeScript", "UI/UX", "Vuetify"],
  },
  {
    title: "Frontend Developer",
    company: "Freelance / Personal Projects",
    period: "2023 – 2024",
    description:
      "Built multiple frontend projects focusing on responsive design, clean UI, and API integration using modern frontend technologies.",
    tags: ["Vue", "Tailwind", "TypeScript", "Vuetify", "Pinia"],
  },
];

const stats = [
  { value: "4+", label: "Years Exp." },
  { value: "15+", label: "Projects" },
  { value: "100%", label: "Frontend Focus" },
];
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
