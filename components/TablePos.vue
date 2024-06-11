<template>
  <EasyDataTable
    :headers="headers"
    :items="products"
    theme-color="#5c60f5"
    :loading="loading"
    :rows-per-page="9"

  >
    <template #item-action="item">
      <div class="btn-group">
        <button class="btn btn-primary btn-sm" type="button" @click="addToCart(item)"><i class="bi bi-cart-plus-fill"></i></button>
      </div>
    </template>
    <template #item-image="{ file_path }">
      <img
        :src="file_path"
        alt=""
        style="height: 60px; width: 80px; object-fit: cover"
        class="rounded"
      />
    </template>
  </EasyDataTable>
</template>

<script setup lang="ts">
import type { Header } from "vue3-easy-data-table";

const headers: Header[] = [
  { text: "บาร์โค้ด", value: "barcode", sortable: true },
  { text: "รูปภาพ", value: "image" },
  { text: "สินค้า", value: "name", sortable: true },
  { text: "ราคา", value: "price", sortable: true },
  { text: "จำนวน", value: "quantity" },
  { text: "Action", value: "action" },
];

const props = defineProps(["products", "fetchProduct", "loading","addToCart"]);

const deleteProduct = async (ProductId: Number) => {
  try {
    const response = await fetch("/api/product/" + ProductId, {
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
</script>

<style scoped></style>
