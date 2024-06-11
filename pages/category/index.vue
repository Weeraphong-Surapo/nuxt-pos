<template>
  <div class="card shadow border-0 mb-7">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="mb-0">หมวดหมู่ทั้งหมด</h5>
      <div class="">
        <!-- <button class="btn btn-sm btn-success" @click="exportData">Export Excel</button> -->
        <button class="btn btn-sm btn-secondary">Export PDF</button>
        <button class="btn btn-sm btn-dark"></button>
      </div>
      <NuxtLink class="btn-primary btn btn-sm" :to="{ name: 'category-create' }">
        <i class="bi bi-patch-plus fs-6 me-2"></i>เพิ่มหมวดหมู่</NuxtLink
      >
    </div>
    <div class="card-body">
      <TableCategory
        :categorys="items"
        :fetchCategory="getCategorys"
        :loading="loading"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { categoryData } from "~/types/categoryType";
const items = ref<categoryData[] | []>([]);

const loading = ref<boolean>(false);

const getCategorys = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    items.value = data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getCategorys();
});
</script>
<style scoped></style>
