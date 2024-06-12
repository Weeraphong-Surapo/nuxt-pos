<template>
  <EasyDataTable
    :headers="headers"
    :items="customers"
    :loading="loading"
    theme-color="#5c60f5"
    show-index
  >
    <template #item-action="{ id }">
      <div class="btn-group">
        <NuxtLink
          :to="{ name: 'customer-id', params: { id: id } }"
          class="btn btn-warning btn-sm"
          >แก้ไข</NuxtLink
        >
        <button class="btn btn-danger btn-sm" type="button" @click="confirmDelete(id)">
          ลบ
        </button>
      </div>
    </template>
  </EasyDataTable>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->

    <ConfirmModal
      :deleteData="deleteCustomer"
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

const confirmDelete = (id: string) => {
  dataId.value = id;
  showModal.value = true;
};

const headers: Header[] = [
  { text: "ชื่อ", value: "full_name", sortable: true },
  { text: "เบอร์โทร", value: "phone" },
  { text: "ไลน์", value: "line" },
  { text: "ที่อยู่", value: "address" },
  { text: "สร้างวันที่", value: "createdDate" },
  { text: "จัดการ", value: "action" },
];

const props = defineProps(["customers", "fetchCustomers", "loading"]);

const deleteCustomer = async () => {
  try {
    const response = await fetch("/api/customer/" + dataId.value, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.fetchCustomers();
  } catch (error) {
    console.log(error);
  }finally{
    showModal.value = false;
  }
};
</script>

<style scoped></style>
