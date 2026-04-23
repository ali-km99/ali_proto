<template>
  <section
    class="min-h-screen bg-[#050505] text-white relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-linear-to-r from-black via-[#0a0a0a] to-black"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,204,0,0.19),transparent_50%)]"
    ></div>
    <div
      class="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-size-[50px_50px]"
    ></div>

    <NavBar class="z-100" />

    <div
      class="grid md:grid-cols-2 items-center px-8 md:px-16 py-20 md:py-28 gap-10 relative z-10 mt-12"
    >
      <!-- Left - fade up -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 60 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 700, ease: 'easeOut' },
        }"
      >
        <span
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 200 },
          }"
          class="bg-[#FFC107]/10 text-[#FFC107] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase border-[#4F3E09] border"
        >
          <span
            class="animate-pulse inline-flex size-2 rounded-full bg-[#FFC107]"
          ></span>
          Future Technology
        </span>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: 300 },
          }"
          class="mt-6 font-bold leading-[1.05] text-[42px] sm:text-[56px] md:text-[82px]"
        >
          I BUILD<br />
          <span class="SCALABLE">SCALABLE</span><br />
          <span class="text-[#FFC107]">DIGITAL</span> EXP.
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: 500 },
          }"
          class="text-gray-400 mt-6 max-w-md text-[15px] leading-relaxed"
        >
          Frontend Developer specialized in Vue 3, TypeScript, and
          high-performance web architecture. Transforming complex logic into
          seamless user experiences.
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: 700 },
          }"
          class="flex gap-4 mt-8"
        >
          <button
            class="bg-[#FFC107] text-black px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2"
          >
            View Projects
            <span
              ><img src="../../assets/eye.png" alt="" width="16px" class="mt-1"
            /></span>
          </button>
          <button
            class="border border-[#2a2a2a] px-6 py-3 rounded-xl text-sm hover:border-[#FFC107]"
          >
            Contact Me
          </button>
        </div>
      </div>

      <!-- Right - slide in from right -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 80 }"
        :enter="{
          opacity: 1,
          x: 0,
          transition: { duration: 700, delay: 400, ease: 'easeOut' },
        }"
        class="relative flex justify-center items-center"
      >
        <div
          class="absolute w-85 h-85 border border-[#FFC107]/20 rounded-2xl rotate-6"
        ></div>
        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            class="w-65 md:w-[320px] rounded-2xl border border-[#1f1f1f] shadow-2xl"
          />
          <div
            v-motion
            :initial="{ opacity: 0, y: 20, scale: 0.9 }"
            :enter="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 500, delay: 900 },
            }"
            class="absolute -bottom-6 -left-6 bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-4 w-57.5"
          >
            <div class="flex gap-2 mb-3">
              <span class="w-3 h-3 bg-red-500 rounded-full"></span>
              <span class="w-3 h-3 bg-[#FFC107] rounded-full"></span>
              <span class="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <pre class="text-[11px] text-[#7B818A] leading-relaxed">
<span><span class="text-[#C084FC]">const</span> <span class="text-[#538ED7]">developer</span> = {</span>
  name: <span class="text-[#40BF6E]">'Ali KM'</span>,
  role: <span class="text-[#40BF6E]">'Frontend Architect'</span>,
  status: <span class="text-[#40BF6E]"> 'Ready to build'</span>
};</pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ STATS SECTION ═══ -->
  <section class="py-24 bg-black text-white relative overflow-hidden">
    <div
      class="absolute top-0 left-0 w-150 h-150 bg-yellow-500/10 blur-[120px] rounded-full"
    ></div>
    <div class="max-w-6xl mx-auto px-6 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Engineering <span class="gradient-text">Excellence</span>
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          I don't just write code; I engineer solutions. With a deep focus on
          performance, scalability, and user experience, I build digital
          products that stand the test of time.
        </p>
      </div>

      <!-- Cards - staggered -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(card, i) in statsCards"
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: i * 150 },
          }"
          class="card hover:[&_svg]:text-[#0F0F0F] hover:[&_div]:bg-[#FFC107] z-10 border border-[#2D2714] hover:border-[#FFC107] duration-200"
        >
          <div
            class="flex justify-center items-center mx-auto bg-[#2D2714] size-16 p-4 rounded-full"
          >
            <component :is="card.icon" class="text-[#FFC107] duration-200" />
          </div>
          <h3 class="text-3xl font-bold mt-4">{{ card.value }}</h3>
          <p class="text-gray-400 text-sm mt-2">{{ card.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ TECH STACK SECTION ═══ -->
  <section class="relative min-h-screen bg-black text-white overflow-hidden">
    <div
      class="absolute inset-0 opacity-[0.10] bg-[linear-gradient(rgba(255,255,255,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.39)_1px,transparent_1px)] bg-size-[50px_50px]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,204,0,0.10),transparent_50%)]"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <p class="text-yellow-400 tracking-widest text-sm">TECH STACK</p>
        <h1 class="text-5xl font-bold mt-4">
          Tools of the <span class="text-gray-500">Trade</span>
        </h1>
        <p class="text-gray-400 mt-4">
          My preferred weaponry for conquering digital challenges.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Frontend Core -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 100 },
          }"
        >
          <div
            class="text-[#6A7282] font-semibold flex justify-around border-b border-[#6A728282] pb-4"
          >
            <p>Frontend Core</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon size-7 text-[#6A7282]"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zM352 389a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389zM208 437a21 21 0 01-20.12-27l96-320a21 21 0 1140.23 12l-96 320A21 21 0 01208 437z"
              />
            </svg>
          </div>
          <div
            v-for="(tool, j) in frontend"
            :key="tool.title"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { duration: 400, delay: 200 + j * 80 },
            }"
            class="hover:[&_img]:scale-110 flex items-center rounded-md bg-[#0D0D0D] m-2 p-2 hover:border-[#FFC107] border border-[#000000] duration-300"
          >
            <img :src="tool.url" alt="vue" class="size-7 mr-7 duration-300" />
            <div>
              <p>{{ tool.title }}</p>
              <p class="text-xs text-[#626874]">{{ tool.desc }}</p>
            </div>
          </div>
        </div>

        <!-- UI Frameworks -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 200 },
          }"
        >
          <div
            class="text-[#6A7282] font-semibold flex justify-around border-b border-[#6A728282] pb-4"
          >
            <p>UI Frameworks</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon size-7 text-[#6A7282]"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M208 512a24.84 24.84 0 01-23.34-16l-39.84-103.6a16.06 16.06 0 00-9.19-9.19L32 343.34a25 25 0 010-46.68l103.6-39.84a16.06 16.06 0 009.19-9.19L184.66 144a25 25 0 0146.68 0l39.84 103.6a16.06 16.06 0 009.19 9.19l103 39.63a25.49 25.49 0 0116.63 24.1 24.82 24.82 0 01-16 22.82l-103.6 39.84a16.06 16.06 0 00-9.19 9.19L231.34 496A24.84 24.84 0 01208 512zm66.85-254.84zM88 176a14.67 14.67 0 01-13.69-9.4l-16.86-43.84a7.28 7.28 0 00-4.21-4.21L9.4 101.69a14.67 14.67 0 010-27.38l43.84-16.86a7.31 7.31 0 004.21-4.21L74.16 9.79A15 15 0 0186.23.11a14.67 14.67 0 0115.46 9.29l16.86 43.84a7.31 7.31 0 004.21 4.21l43.84 16.86a14.67 14.67 0 010 27.38l-43.84 16.86a7.28 7.28 0 00-4.21 4.21l-16.86 43.84A14.67 14.67 0 0188 176zM400 256a16 16 0 01-14.93-10.26l-22.84-59.37a8 8 0 00-4.6-4.6l-59.37-22.84a16 16 0 010-29.86l59.37-22.84a8 8 0 004.6-4.6l22.67-58.95a16.45 16.45 0 0113.17-10.57 16 16 0 0116.86 10.15l22.84 59.37a8 8 0 004.6 4.6l59.37 22.84a16 16 0 010 29.86l-59.37 22.84a8 8 0 00-4.6 4.6l-22.84 59.37A16 16 0 01400 256z"
              />
            </svg>
          </div>
          <div
            v-for="(tool, j) in ui"
            :key="tool.title"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { duration: 400, delay: 300 + j * 80 },
            }"
            class="hover:[&_img]:scale-110 flex items-center rounded-md bg-[#0D0D0D] m-2 p-2 hover:border-[#FFC107] border border-[#000000] duration-300"
          >
            <img :src="tool.url" alt="vue" class="size-7 mr-7 duration-300" />
            <div>
              <p>{{ tool.title }}</p>
              <p class="text-xs text-[#626874]">{{ tool.desc }}</p>
            </div>
          </div>
        </div>

        <!-- State & Data -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 300 },
          }"
        >
          <div
            class="text-[#6A7282] font-semibold flex justify-around border-b border-[#6a728282] pb-4"
          >
            <p>State & Data</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon size-7 text-[#6A7282]"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 428c-52.35 0-111.39-11.61-157.93-31-17.07-7.19-31.69-18.82-43.64-28a4 4 0 00-6.43 3.18v12.58c0 28.07 23.49 53.22 66.14 70.82C152.29 471.33 202.67 480 256 480s103.7-8.67 141.86-24.42C440.51 438 464 412.83 464 384.76v-12.58a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 28-46.54 19.39-105.57 31-157.92 31zM464 126.51c-.81-27.65-24.18-52.4-66-69.85C359.74 40.76 309.34 32 256 32s-103.74 8.76-141.91 24.66c-41.78 17.41-65.15 42.11-66 69.69L48 144c0 6.41 5.2 16.48 14.63 24.73 11.13 9.73 27.65 19.33 47.78 27.73C153.24 214.36 207.67 225 256 225s102.76-10.68 145.59-28.58c20.13-8.4 36.65-18 47.78-27.73C458.8 160.49 464 150.42 464 144z"
              />
              <path
                d="M413.92 226c-46.53 19.43-105.57 31-157.92 31s-111.39-11.57-157.93-31c-17.07-7.15-31.69-18.79-43.64-28a4 4 0 00-6.43 3.22V232c0 6.41 5.2 14.48 14.63 22.73 11.13 9.74 27.65 19.33 47.78 27.74C153.24 300.34 207.67 311 256 311s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 246.47 464 238.41 464 232v-30.78a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.96z"
              />
              <path
                d="M413.92 312c-46.54 19.41-105.57 31-157.92 31s-111.39-11.59-157.93-31c-17.07-7.17-31.69-18.81-43.64-28a4 4 0 00-6.43 3.2V317c0 6.41 5.2 14.47 14.62 22.71 11.13 9.74 27.66 19.33 47.79 27.74C153.24 385.32 207.66 396 256 396s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 331.44 464 323.37 464 317v-29.8a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.98z"
              />
            </svg>
          </div>
          <div
            v-for="(tool, j) in state"
            :key="tool.title"
            v-motion
            :initial="{ opacity: 0, x: 20 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { duration: 400, delay: 400 + j * 80 },
            }"
            class="hover:[&_img]:scale-110 flex items-center rounded-md bg-[#0D0D0D] m-2 p-2 hover:border-[#FFC107] border border-[#000000] duration-300"
          >
            <img :src="tool.url" alt="vue" class="size-7 mr-7 duration-300" />
            <div>
              <p>{{ tool.title }}</p>
              <p class="text-xs text-[#626874]">{{ tool.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Tools & DevOps -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 400 },
          }"
        >
          <div
            class="text-[#6A7282] font-semibold flex justify-around border-b border-[#6A728282] pb-4"
          >
            <p>Tools & DevOps</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon size-7 text-[#6A7282]"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M503.58 126.2a16.85 16.85 0 00-27.07-4.55l-51.15 51.15a11.15 11.15 0 01-15.66 0l-22.48-22.48a11.17 11.17 0 010-15.67l50.88-50.89a16.85 16.85 0 00-5.27-27.4c-39.71-17-89.08-7.45-120 23.29-26.81 26.61-34.83 68-22 113.7a11 11 0 01-3.16 11.1L114.77 365.1a56.76 56.76 0 1080.14 80.18L357 272.08a11 11 0 0110.9-3.17c45 12 86 4 112.43-22 15.2-15 25.81-36.17 29.89-59.71 3.83-22.2 1.41-44.44-6.64-61z"
              />
              <path
                d="M437.33 378.41c-13.94-11.59-43.72-38.4-74.07-66.22l-66.07 70.61c28.24 30 53.8 57.85 65 70.88l.07.08A30 30 0 00383.72 464h1.1a30.11 30.11 0 0021-8.62l.07-.07 33.43-33.37a29.46 29.46 0 00-2-43.53zM118.54 214.55a20.48 20.48 0 00-3-10.76 2.76 2.76 0 012.62-4.22h.06c.84.09 5.33.74 11.7 4.61 4.73 2.87 18.23 12.08 41.73 35.54a34.23 34.23 0 007.22 22.12l66.23-61.55a33.73 33.73 0 00-21.6-9.2 2.65 2.65 0 01-.21-.26l-.65-.69-24.54-33.84a28.45 28.45 0 01-4-26.11 35.23 35.23 0 0111.78-16.35c5.69-4.41 18.53-9.72 29.44-10.62a52.92 52.92 0 0115.19.94 65.57 65.57 0 017.06 2.13 15.46 15.46 0 002.15.63 16 16 0 0016.38-25.06c-.26-.35-1.32-1.79-2.89-3.73a91.85 91.85 0 00-9.6-10.36c-8.15-7.36-29.27-19.77-57-19.77a123.13 123.13 0 00-46.3 9c-38.37 15.45-63.47 36.58-75.01 47.79l-.09.09A222.14 222.14 0 0063.7 129.5a27 27 0 00-4.7 11.77 7.33 7.33 0 01-7.71 6.17H50.2a20.65 20.65 0 00-14.59 5.9L6.16 182.05l-.32.32a20.89 20.89 0 00-.24 28.72c.19.2.37.39.57.58L53.67 258a21 21 0 0014.65 6 20.65 20.65 0 0014.59-5.9l29.46-28.79a20.51 20.51 0 006.17-14.76z"
              />
            </svg>
          </div>
          <div
            v-for="(tool, j) in tools"
            :key="tool.title"
            v-motion
            :initial="{ opacity: 0, x: 20 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { duration: 400, delay: 500 + j * 80 },
            }"
            class="hover:[&_img]:scale-110 flex items-center rounded-md bg-[#0D0D0D] m-2 p-2 hover:border-[#FFC107] border border-[#000000] duration-300"
          >
            <img :src="tool.url" alt="vue" class="size-7 mr-7 duration-200" />
            <div>
              <p>{{ tool.title }}</p>
              <p class="text-xs text-[#626874]">{{ tool.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ PROJECTS SECTION ═══ -->
  <section class="bg-black text-white py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-20"
      >
        <p class="text-yellow-500 text-sm mb-2">// Selected Works</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          A selection of projects that showcase my ability to solve complex
          problems with elegant code.
        </p>
      </div>

      <div class="space-y-32">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="grid md:grid-cols-2 gap-12 items-center"
        >
          <!-- IMAGE - alternating slide direction -->
          <div
            v-motion
            :initial="{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { duration: 700, ease: 'easeOut' },
            }"
            :class="[
              'relative group perspective',
              index % 2 !== 0 ? 'md:order-2' : '',
            ]"
          >
            <div
              class="absolute inset-0 rounded-2xl bg-yellow-500/20 translate-x-6 translate-y-6 rotate-2 transition duration-500 group-hover:translate-x-8 group-hover:translate-y-8 group-hover:rotate-3"
            ></div>
            <img
              :src="project.image"
              class="relative rounded-2xl shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:translate-x-1 group-hover:rotate-1"
            />
          </div>

          <!-- CONTENT - opposite direction -->
          <div
            v-motion
            :initial="{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { duration: 700, delay: 150, ease: 'easeOut' },
            }"
            :class="[index % 2 !== 0 ? 'md:order-1' : '']"
          >
            <p class="text-yellow-500 text-xs mb-2">{{ project.tag }}</p>
            <h3 class="text-2xl md:text-3xl font-semibold mb-4">
              {{ project.title }}
            </h3>
            <p class="text-gray-400 mb-6 leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="text-xs px-3 py-1 border border-gray-700 rounded-full text-gray-300"
                >{{ tech }}</span
              >
            </div>
            <div class="flex items-center gap-6 text-sm">
              <a href="#" class="hover:text-yellow-500 transition"
                >View Case Study ↗</a
              >
              <a href="#" class="text-gray-400 hover:text-white transition"
                >Live link</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ SERVICES SECTION ═══ -->
  <section class="bg-black text-white py-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <p class="text-yellow-500 text-sm mb-2">// WHAT I OFFER</p>
        <h2 class="text-4xl md:text-5xl font-bold">Premium Services</h2>
      </div>

      <!-- Cards - staggered fade up -->
      <div class="grid md:grid-cols-3 gap-8 mb-24">
        <div
          v-for="(service, i) in services"
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 50, scale: 0.97 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 500, delay: i * 120 },
          }"
          class="group relative rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-transparent hover:border-yellow-500/40 transition duration-300"
        >
          <div
            class="w-12 h-12 flex items-center justify-center border border-yellow-500 text-black rounded-lg mb-6 transition duration-300 group-hover:bg-yellow-500 group-hover:scale-110"
          >
            <component
              :is="service.icon"
              class="w-8 h-8 text-yellow-500 group-hover:text-[#0A0A0A] transition duration-300"
            />
          </div>
          <h3 class="text-lg font-semibold mb-3">{{ service.title }}</h3>
          <p class="text-gray-400 text-sm mb-6 leading-relaxed">
            {{ service.description }}
          </p>
          <ul class="space-y-2 text-sm text-gray-300">
            <li
              v-for="item in service.list"
              :key="item"
              class="flex items-center gap-2"
            >
              <component :is="Check" class="text-yellow-500" />
              {{ item }}
            </li>
          </ul>
          <div
            class="absolute inset-0 rounded-2xl bg-yellow-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"
          ></div>
        </div>
      </div>
    </div>

    <!-- TESTIMONIAL -->
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.96 }"
      :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 700 } }"
      class="relative"
    >
      <div class="absolute inset-0 bg-yellow-500 -rotate-2 scale-110"></div>
      <div class="relative text-center text-black py-20 px-6 max-w-3xl mx-auto">
        <p class="text-4xl md:text-5xl font-bold mb-4">
          12+ Projects Delivered
        </p>
        <p class="text-lg md:text-xl font-medium leading-relaxed mb-8">
          I help startups and businesses transform ideas into fast, scalable,
          and modern digital experiences that are built for performance,
          clarity, and real impact.
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            class="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >View My Work</a
          >
          <a
            href="#contact"
            class="border border-black px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
            >Let's Work Together</a
          >
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ CONTACT SECTION ═══ -->
  <section class="py-20 px-6 md:px-16 bg-black text-white">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <!-- LEFT -->
      <div
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      >
        <p class="text-yellow-500 text-sm mb-4">// CONTACT ME</p>
        <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Let's Build the <br />Future Together
        </h2>
        <p class="text-gray-400 mb-10 leading-relaxed max-w-md">
          Have a project in mind or just want to say hi? I'm currently available
          for freelance projects and open to new opportunities.
        </p>

        <div class="space-y-5">
          <div
            v-for="(contact, i) in contactItems"
            :key="i"
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { duration: 400, delay: 200 + i * 100 },
            }"
            class="flex items-center gap-4 group"
          >
            <div
              class="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-yellow-500 transition"
            >
              <component
                :is="contact.icon"
                class="w-6 h-6 group-hover:text-black transition duration-300"
              />
            </div>
            <span
              class="text-gray-300 group-hover:text-yellow-500 transition"
              >{{ contact.label }}</span
            >
          </div>
        </div>
      </div>

      <!-- RIGHT (FORM) -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 50 }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
          transition: { duration: 600, delay: 200 },
        }"
        class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur"
      >
        <form class="space-y-6">
          <div class="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="John Doe"
              class="bg-transparent border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition"
            />
            <input
              type="email"
              placeholder="john@example.com"
              class="bg-transparent border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition"
            />
          </div>
          <select
            class="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition"
          >
            <option class="bg-black">Project Inquiry</option>
            <option class="bg-black">Freelance</option>
            <option class="bg-black">Other</option>
          </select>
          <textarea
            rows="5"
            placeholder="Tell me about your project..."
            class="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition"
          ></textarea>
          <button
            type="submit"
            class="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2"
          >
            Send Message <component :is="Send" class="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  </section>

  <FooterComp />
</template>

<script setup lang="ts">
import architecture from "../../assets/svg/architecture.vue";
import PenRuler from "../../assets/svg/pen-ruler.vue";
import LaptopCode from "../../assets/svg/laptop-code.vue";
import Check from "../../assets/svg/check.vue";
import Send from "../../assets/svg/send.vue";
import Github from "../../assets/svg/github.vue";
import Ln from "../../assets/svg/ln.vue";
import Mail from "../../assets/svg/mail.vue";
import NavBar from "../layout/NavBar.vue";
import FooterComp from "../layout/FooterComp.vue";

// Stats cards data (لتسهيل الـ stagger)
import { defineComponent, h } from "vue";

const CodeIcon = defineComponent({
  render: () =>
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 512 512",
        class: "size-8",
      },
      [
        h("path", {
          d: "M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zM352 389a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389zM208 437a21 21 0 01-20.12-27l96-320a21 21 0 1140.23 12l-96 320A21 21 0 01208 437z",
        }),
      ],
    ),
});

const BoxIcon = defineComponent({
  render: () =>
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 512 512",
        class: "size-8",
      },
      [
        h("path", {
          d: "M440.9 136.3a4 4 0 000-6.91L288.16 40.65a64.14 64.14 0 00-64.33 0L71.12 129.39a4 4 0 000 6.91L254 243.88a4 4 0 004.06 0zM54 163.51a4 4 0 00-6 3.49v173.89a48 48 0 0023.84 41.39L234 479.51a4 4 0 006-3.46V274.3a4 4 0 00-2-3.46zM272 275v201a4 4 0 006 3.46l162.15-97.23A48 48 0 00464 340.89V167a4 4 0 00-6-3.45l-184 108a4 4 0 00-2 3.45z",
        }),
      ],
    ),
});

const StarIcon = defineComponent({
  render: () =>
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 512 512",
        class: "size-8",
      },
      [
        h("path", {
          d: "M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256z",
        }),
        h("path", {
          d: "M441.36 226.81L426.27 220l-38.77 17.74-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19z",
        }),
        h("path", {
          d: "M441.36 330.8l-15.09-6.8-38.77 17.73-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2z",
        }),
      ],
    ),
});

const statsCards = [
  { icon: CodeIcon, value: "5+", label: "YEARS EXPERIENCE" },
  { icon: BoxIcon, value: "50+", label: "PROJECTS DELIVERED" },
  { icon: StarIcon, value: "100%", label: "CLIENT SATISFACTION" },
];

const contactItems = [
  { icon: Mail, label: "Alidx09@gmail.com" },
  { icon: Ln, label: "linkedin.com/in/alikm" },
  { icon: Github, label: "github.com/ali-km99" },
];

const frontend = [
  {
    title: "Vue 3",
    desc: "Composition API",
    url: "https://i.postimg.cc/KjwZ94L1/vue_svgrepo_com.jpg",
  },
  {
    title: "TypeScript",
    desc: "Strict Typing",
    url: "https://i.postimg.cc/SR3yZj8s/typescript.jpg",
  },
  {
    title: "HTML5 / CSS3",
    desc: "Semantic & Modern",
    url: "https://i.postimg.cc/Y9X2WdC6/css_3.jpg",
  },
];

const ui = [
  {
    title: "Tailwind CSS",
    desc: "Utility-First",
    url: "https://i.postimg.cc/SR3yZj9B/tailwind.jpg",
  },
  {
    title: "Vuetify",
    desc: "Material Design",
    url: "https://i.postimg.cc/y8V94Yb9/vuetify.jpg",
  },
  {
    title: "SCSS/SASS",
    desc: "Pre-processing",
    url: "https://i.postimg.cc/T1pdqnKB/sass.jpg",
  },
];

const state = [
  {
    title: "Pinia",
    desc: "State Management",
    url: "https://i.postimg.cc/SNmjj17W/pinia-seeklogo.jpg",
  },
  {
    title: "TanStack Query",
    desc: "Async State",
    url: "https://i.postimg.cc/rs38hzWq/tanstack.jpg",
  },
  { title: "REST / GraphQL", desc: "API Integration", url: "" },
];

const tools = [
  {
    title: "Vite",
    desc: "Next Gen Bundler",
    url: "https://i.postimg.cc/yxtVfW9W/vitejs_svgrepo_com.jpg",
  },
  {
    title: "Git & GitHub",
    desc: "Version Control",
    url: "https://i.postimg.cc/gjnzq3xK/git.jpg",
  },
  {
    title: "Figma",
    desc: "Design Handover",
    url: "https://i.postimg.cc/GtHLJv4P/figma.jpg",
  },
];

const projects = [
  {
    tag: "01. FINTECH DASHBOARD",
    title: "Nova Analytics",
    description:
      "A high-performance financial analytics dashboard handling real-time data via WebSockets. Features complex data visualization, dark mode, and customizable widgets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tech: ["Vue 3", "D3.js", "Tailwind", "Firebase"],
  },
  {
    tag: "02. E-COMMERCE PLATFORM",
    title: "Luxe Market",
    description:
      "A headless e-commerce solution built for speed and SEO. Implements ISR for instant page loads, advanced filtering, and seamless checkout experience integration with Stripe.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    tech: ["Nuxt 3", "TypeScript", "Stripe", "Supabase"],
  },
];

const services = [
  {
    icon: LaptopCode,
    title: "Web Development",
    description:
      "Building scalable, fast, and secure web applications using the latest frontend technologies.",
    list: [
      "SPA & PWA Development",
      "Performance Optimization",
      "API Integration",
      "SEO (Search Engine Optimization)",
    ],
  },
  {
    icon: PenRuler,
    title: "UI Implementation",
    description:
      "Translating design mockups into pixel-perfect, responsive, and accessible interfaces.",
    list: [
      "Responsive Design",
      "Animation & Micro-interactions",
      "Design System Setup",
      "UI design according to the situation",
    ],
  },
  {
    icon: architecture,
    title: "System Architecture",
    description:
      "Designing robust frontend architectures for large-scale applications.",
    list: [
      "Tech Stack Consultation",
      "Code Review & Audits",
      "CI/CD Pipeline Setup",
    ],
  },
];
</script>

<style scoped>
.SCALABLE {
  background: linear-gradient(
    70deg,
    rgba(220, 223, 227, 1) 0%,
    rgba(142, 148, 159, 1) 93%,
    rgba(108, 115, 129, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
.gradient-text {
  background: linear-gradient(70deg, #facc15, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 40px 20px;
}
.card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.05);
}
</style>
