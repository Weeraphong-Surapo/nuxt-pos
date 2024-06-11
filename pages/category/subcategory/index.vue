<template>
  <div class="card shadow border-0 mb-7">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="mb-0">ประเภททั้งหมด</h5>
      <!-- <div class="">

      </div> -->
      <NuxtLink class="btn-primary btn btn-sm" :to="{ name: 'category-subcategory-create' }">
        <i class="bi bi-patch-plus fs-6 me-2"></i>เพิ่มประเภท</NuxtLink
      >
    </div>
    <div class="card-body">
      <TableSubCategory
        :sub_categorys="items"
        :fetchSubCategorys="getSubCategorys"
        :loading="loading"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { categoryData } from "~/types/categoryType";
const items = ref<categoryData[] | []>([]);
const loading = ref<boolean>(false);



const getSubCategorys = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/subcategory", {
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
  getSubCategorys();
});
</script>
<style scoped></style>
