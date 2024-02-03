<template>
  <div class="px-5 py-5 mt-3">
    <h1 class="text-md">Summary</h1>

    <div class="flex justify-between bg-red-300/10 px-3 py-2 rounded-md mt-4 items-center">
      <div class="flex items-center gap-x-2">
        <img src="@/assets/icon-reaction.svg" alt="logo" class=""/>
        <p class="red text-sm">Reaction</p>
      </div>

      <p class="text-sm ">80 <code class="text-gray-400 text-sm">/ 100</code></p>
    </div>

    <div class="flex justify-between bg-yellow-300/10 px-3 py-2 rounded-md mt-4 items-center">
      <div class="flex items-center gap-x-2">
        <img src="@/assets/icon-memory.svg" alt="logo" class=""/>
        <p class="text-yellow-400 text-sm">Memory</p>
      </div>

      <p class="text-sm ">92 <code class="text-gray-400 text-sm">/ 100</code></p>
    </div>

    <div class="flex justify-between bg-green-300/10 px-3 py-2 rounded-md mt-4 items-center">
      <div class="flex items-center gap-x-2">
        <img src="@/assets/icon-verbal.svg" alt="logo" class=""/>
        <p class="text-green-400 text-sm">Verbal</p>
      </div>

      <p class="text-sm ">62 <code class="text-gray-400 text-sm">/ 100</code></p>
    </div>

    <div class="flex justify-between bg-blue-300/10 px-3 py-2 rounded-md mt-4 items-center">
      <div class="flex items-center gap-x-2">
        <img src="@/assets/icon-visual.svg" alt="logo" class=""/>
        <p class="text-blue-500 text-sm">Visual</p>
      </div>

      <p class="text-sm ">72 <code class="text-gray-400 text-sm">/ 100</code></p>
    </div>


    <button class="text-sm text-white bg-slate-600 w-full py-2 mt-5 rounded-3xl">Continue</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  {
    "category": "Reaction",
    "score": 80,
    "icons": '@/assets/icon-memory.svg',
    "color": ''
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "@/assets/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/icon-visual.svg"
  }
])


</script>

<style scoped>

.red {
    color: hsl(0, 100%, 67%)
}
</style>
