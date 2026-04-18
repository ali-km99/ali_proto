<template>
  <!-- Navbar -->
  <div class="fixed w-full z-90 backdrop-blur-xl">
    <header
      class="flex justify-between items-center px-8 md:px-16 py-6 border-b border-[#1a1a1a] relative z-10"
    >
      <div class="flex items-center gap-2 font-bold text-lg tracking-wide">
        <img
          src="../../assets/لقطة_شاشة_2025-12-17_153207-removebg-preview.png"
          alt=""
          width="400px"
          class="-my-8"
        />
      </div>

      <nav
        class="hidden md:flex gap-10 text-sm text-gray-400 duration-100 transition-colors"
      >
        <a href="#" class="hover:text-[#FFC107] duration-200 transition-colors"
          >About</a
        >
        <a href="#" class="hover:text-[#FFC107] duration-200 transition-colors"
          >Skills</a
        >
        <a href="#" class="hover:text-[#FFC107] duration-200 transition-colors"
          >Projects</a
        >
        <a href="#" class="hover:text-[#FFC107] duration-200 transition-colors"
          >Services</a
        >
      </nav>

      <button
        class="border border-[#2a2a2a] px-5 py-2 rounded-xl text-sm hover:border-[#FFC107] transition duration-200"
      >
        Contact Me ↗
      </button>
    </header>
  </div>
</template>
