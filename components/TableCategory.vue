<template>
  <EasyDataTable
    :headers="headers"
    :items="categorys"
    :loading="loading"
    theme-color="#5c60f5"
    show-index
  >
    <template #item-action="{ id }">
      <div class="btn-group">
        <NuxtLink
          :to="{ name: 'category-id', params: { id: id } }"
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
      :deleteData="deleteCategory"
      :show="showModal"
      @close="showModal = false"
    >
    </ConfirmModal>
  </Teleport>
</template>

<script setup lang="ts">
import type { Header } from "vue3-easy-data-table";
interface Toast {
  success: (message: string, options?: { position?: string; timeout?: number }) => void;
}
import { useNuxtApp } from "#app";
const nuxtApp = useNuxtApp();

const showToast = (text: string) => {
  const toastInstance = nuxtApp.$toast as Toast;
  toastInstance.success(text, {
    position: "bottom-right",
    timeout: 2500,
  });
};

const loading = ref(false)
const showModal = ref(false);
const dataId = ref("");

const confirmDelete = (id: string) => {
  dataId.value = id;
  showModal.value = true;
};

const headers: Header[] = [
  { text: "หมวดหมู่", value: "name", sortable: true },
  { text: "จัดการ", value: "action" },
];

const props = defineProps(["categorys", "fetchCategory", "loading"]);

const deleteCategory = async () => {
  loading.value = true
  try {
    const response = await fetch("/api/category/" + dataId.value, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.fetchCategory();
  } catch (error) {
    console.log(error);
  }finally {
    showToast("ลบข้อมูลสำเร็จ")
    showModal.value = false;
    loading.value = false
  }
};
</script>

<style scoped></style>
