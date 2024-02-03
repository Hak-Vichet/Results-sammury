<template>
  <div class="h-screen flex items-center justify-center bg-gray-100 px-10">
    <div class="bg-white rounded-3xl shadow-xl">
      <div class="grid md:grid-cols-2 md:max-w-lg">
        <div class="bg-primary rounded-3xl">
          <YourResult />
        </div>
        <div class="">
          <YourSummary />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import YourResult from "@/components/YourResult.vue";
import YourSummary from "@/components/YourSummary.vue";
</script>
