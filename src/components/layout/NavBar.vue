<template>
  <div class="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30">
    <header
      class="flex items-center justify-between md:justify-normal md:py-0 py-4 px-4 md:px-16 border-b border-[#1a1a1a] relative z-10 max-w-[100vw] overflow-hidden"
    >
      <!-- Logo -->
      <RouterLink to="/">
        <img
          src="../../assets/لقطة_شاشة_2025-12-17_153207-removebg-preview.png"
          class="w-40 md:w-80 object-contain"
        />
      </RouterLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex gap-10 text-gray-400 ml-60">
        <RouterLink
          to="/"
          active-class="text-[#FFC107]"
          class="hover:text-[#FFC107]"
          >Home</RouterLink
        >

        <RouterLink
          to="/projects"
          active-class="text-[#FFC107]"
          class="hover:text-[#FFC107]"
          >Projects</RouterLink
        >
        <RouterLink
          to="/services"
          active-class="text-[#FFC107]"
          class="hover:text-[#FFC107]"
          >Services</RouterLink
        >
        <RouterLink
          to="/about"
          active-class="text-[#FFC107]"
          class="hover:text-[#FFC107]"
          >About</RouterLink
        >
      </nav>

      <!-- Burger -->
      <button
        @click="toggleMenu"
        class="md:hidden flex flex-col gap-1 z-999 mr-6"
      >
        <span
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ 'rotate-45 translate-y-1.5': isOpen }"
        ></span>
        <span
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ 'opacity-0': isOpen }"
        ></span>
        <span
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-1.5': isOpen }"
        ></span>
      </button>
    </header>

    <!-- Mobile Menu -->
    <transition name="menu">
      <div
        v-if="isOpen"
        class="md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 text-lg z-40"
      >
        <!-- زر إغلاق -->
        <button
          @click="toggleMenu"
          class="absolute top-6 right-6 text-white text-3xl"
        >
          ✕
        </button>

        <RouterLink @click="toggleMenu" to="/" active-class="text-[#FFC107]"
          >Home</RouterLink
        >
        <RouterLink
          @click="toggleMenu"
          to="/about"
          active-class="text-[#FFC107]"
          >About</RouterLink
        >

        <RouterLink
          @click="toggleMenu"
          to="/projects"
          active-class="text-[#FFC107]"
          >Projects</RouterLink
        >
        <RouterLink
          @click="toggleMenu"
          to="/services"
          active-class="text-[#FFC107]"
          >Services</RouterLink
        >
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// منع السكرول لما المنيو مفتوحة
watch(isOpen, (val) => {
  document.body.style.overflow = val ? "hidden" : "auto";
});
</script>
<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.35s ease;
}

.menu-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.menu-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.menu-enter-active,
.menu-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.menu-enter-from {
  opacity: 0;
  transform: translateY(-40px) scale(0.98);
}

.menu-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.menu-leave-to {
  opacity: 0;
  transform: translateY(-40px) scale(0.98);
}
</style>
