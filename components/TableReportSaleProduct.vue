<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    :loading="loading"
    theme-color="#5c60f5"
    show-index
  >
  <!-- <template #item-action>
    <div>
        <button class="btn btn-outline-primary btn-sm">View</button>
    </div>
  </template> -->
  </EasyDataTable>
</template>

<script setup lang="ts">
import type { Header } from "vue3-easy-data-table";

const headers: Header[] = [
  { text: "สินค้า", value: "products_name", sortable: true },
  { text: "ต้นทุน", value: "products_cost" },
  { text: "ราคาขาย", value: "products_price"},
  { text: "จำนวน", value: "total_price_quantity"},
  { text: "ต้นทุน", value: "total_cost_product"},
  { text: "ขายได้", value: "total_price_product"},
  { text: "กำไร", value: "profit"},
  { text: "ROI", value: "roi" },
  // { text: "จัดการ", value: "action" },
];

const props = defineProps(["items", "fetchData", "loading"]);

</script>

<style scoped></style>
