<template>
  <div>
    <Pie :data="chartData" :options="chartOptions" v-if="!loading" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Bar, Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

defineProps(["loading", "chartData"]);

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>
