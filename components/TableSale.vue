<template>
  <EasyDataTable
    :headers="headers"
    :items="sales"
    theme-color="#5c60f5"
    :loading="loading"
  >
    <template #item-action="{ id }">
      <div class="btn-group">
        <!-- <button class="btn btn-primary btn-sm">ดู</button> -->
        <NuxtLink
          :to="{ name: 'sale-id', params: { id: id } }"
          class="btn btn-primary btn-sm"
          ><i class="bi bi-eye-fill"></i></NuxtLink
        >
      </div>
    </template>
    <template #item-type_pay="{ type_pay }">
    <span>{{ type_pay ? 'โอนชำระ' : 'ชำระเงินสด' }}</span>
    </template>
  </EasyDataTable>
</template>

<script setup lang="ts">
import type { Header } from "vue3-easy-data-table";

const headers: Header[] = [
  { text: "รหัส", value: "order_code", sortable: true },
  { text: "ลูกค้า", value: "customers.full_name" },
  { text: "รูปแบบ", value: "type_pay", sortable: true },
  { text: "ภาษี", value: "vat", sortable: true },
  { text: "ราคาขาย", value: "total_price", sortable: true },
  { text: "ราคาขายรวมภาษี", value: "total_price_sum_vat", sortable: true },
  { text: "วันที่", value: "createdDate" },
  // { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
  { text: "จัดการ", value: "action" },
];

const props = defineProps(["sales", "fetchSales", "loading"]);

</script>

<style scoped></style>
