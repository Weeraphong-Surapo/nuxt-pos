<template>
  <div class="card shadow border-0 mb-7">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="mb-0">สินค้าทั้งหมด</h5>
      <div class="">
        <button class="btn btn-sm btn-success" @click="exportData">Export Excel</button>
        <button class="btn btn-sm btn-secondary" >Export PDF</button>
        <button class="btn btn-sm btn-dark"></button>
      </div>
      <NuxtLink class="btn-primary btn btn-sm" :to="{ name: 'product-create' }">
        <i class="bi bi-patch-plus fs-6 me-2"></i>เพิ่มสินค้า</NuxtLink
      >
    </div>
    <div class="card-body">
      <TableProduct :products="items" :fetchProduct="getProducts" :loading="loading" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
import type { productData } from "~/types/productType";
import { exportToExcel } from "~/utils/exportExcel";
import { exportToPdf } from "@/utils/exportPdf";


definePageMeta({
  middleware: "auth"
})

const items = ref<productData[] | []>([]);
const loading = ref<boolean>(false);

const exportDataPdf = () => {
  exportToPdf(items.value,"รายงานสินค้า")
};

const exportData = () => {
  console.log(items.value);
  let format_data: any = []; // Initialize as an array

  items.value.forEach((product) => {
    const formattedProduct = {
      รหัสบาร์โค้ด: product.barcode,
      สินค้า: product.name,
      ราคา: product.price,
      ต้นทุน: product.cost,
      จำนวน: product.quantity,
      หมวดหมู่: product.category.name,
      ประเภท: product.sub_category.name,
      รายละเอียด: product.description,
      สถานะ: product.is_active,
      รูปภาพ: product.file_path,
    };
    format_data.push(formattedProduct); // Push each formatted product
  });
  exportToExcel(format_data, "รายงานสินค้า");
};

const getProducts = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/product", {
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
  getProducts();
  console.log(authStore.user);
  
});
</script>
<style scoped></style>
