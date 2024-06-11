<template>
  <div>
    <button @click="showToast">Show Toast</button>
  </div>
</template>

<script setup>
import { useNuxtApp } from "#app";

const nuxtApp = useNuxtApp();

const showToast = () => {
  nuxtApp.$toast.success("This is a success toast!", {
    position: "bottom-right",
    timeout: 5000,
  });
};
</script>
