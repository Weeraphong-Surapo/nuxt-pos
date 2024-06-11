<template>
  <EasyDataTable
    :headers="headers"
    :items="products"
    theme-color="#5c60f5"
    :loading="loading"
  >
    <template #item-action="{ id }">
      <div class="btn-group">
        <!-- <button class="btn btn-primary btn-sm">ดู</button> -->
        <NuxtLink
          :to="{ name: 'product-id', params: { id: id } }"
          class="btn btn-warning btn-sm"
          >แก้ไข</NuxtLink
        >
        <button class="btn btn-danger btn-sm" type="button" @click="confirmDelete(id)">
          ลบ
        </button>
      </div>
    </template>
    <template #item-image="{ file_path }">
      <img
        :src="file_path"
        alt=""
        style="height: 70px; width: 90px; object-fit: cover"
        class="rounded"
      />
    </template>
  </EasyDataTable>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->

    <ConfirmModal
      :deleteData="deleteProduct"
      :show="showModal"
      @close="showModal = false"
    >
    </ConfirmModal>
  </Teleport>
</template>

<script setup lang="ts">
import type { Header } from "vue3-easy-data-table";

const showModal = ref(false);
const dataId = ref("");

const headers: Header[] = [
  { text: "บาร์โค้ด", value: "barcode", sortable: true },
  { text: "รูปภาพ", value: "image" },
  { text: "สินค้า", value: "name", sortable: true },
  { text: "ต้นทุน", value: "cost", sortable: true },
  { text: "ราคาขาย", value: "price", sortable: true },
  { text: "หมวดหมู่", value: "category.name", sortable: true },
  { text: "ประเภท", value: "sub_category.name", sortable: true },
  { text: "จำนวน", value: "quantity" },
  { text: "สถานนะ", value: "is_active" },
  // { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
  { text: "จัดการ", value: "action" },
];

const props = defineProps(["products", "fetchProduct", "loading"]);

const deleteProduct = async () => {
  try {
    const response = await fetch("/api/product/" + dataId.value, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.fetchProduct();
  } catch (error) {
    console.log(error);
  }
};

const confirmDelete = (id: string) => {
  dataId.value = id;
  showModal.value = true;
};
</script>

<style scoped></style>
