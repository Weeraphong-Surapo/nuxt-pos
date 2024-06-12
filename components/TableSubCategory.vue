<template>
  <EasyDataTable
    :headers="headers"
    :items="sub_categorys"
    :loading="loading"
    theme-color="#5c60f5"
    show-index
  >
    <template #item-action="{ id }">
      <div class="btn-group">
        <NuxtLink
          :to="{ name: 'category-subcategory-id', params: { id: id } }"
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
const showModal = ref(false);
const sub_category_id = ref("");

const headers: Header[] = [
  { text: "หมวดหมู่", value: "categorys.name", sortable: true },
  { text: "ประเภท", value: "name", sortable: true },
  // { text: "WEIGHT (lbs)", value: "indicator.weight"},
  // { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
  { text: "จัดการ", value: "action" },
];

const props = defineProps(["sub_categorys", "fetchSubCategorys", "loading"]);

const deleteCategory = async () => {
  try {
    console.log("hello");

    const response = await fetch("/api/subcategory/" + sub_category_id.value, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.fetchSubCategorys();
  } catch (error) {
    console.log(error);
  } finally {
    showModal.value = false;
  }
};

const confirmDelete = (subcategoryId: string) => {
  sub_category_id.value = subcategoryId;
  showModal.value = true;
};
</script>

<style scoped></style>
