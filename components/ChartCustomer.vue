<template>
  <div>
    <Bar :data="chartData" :options="chartOptions" v-if="!loading" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

defineProps(["loading","chartData"]);

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>
