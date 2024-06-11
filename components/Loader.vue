<template>
  <div v-if="loading" class="spinner-overlay">
    <div class="spinner-border border-dotted border-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script setup>
defineProps(["loading"]);
</script>

<style scoped>
.position-relative {
  position: relative;
}
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 1000; */
  z-index: 999999;
}
</style>
