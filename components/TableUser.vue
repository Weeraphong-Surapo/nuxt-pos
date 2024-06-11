<template>
  <EasyDataTable
    :headers="headers"
    :items="users"
    :loading="loading"
    theme-color="#5c60f5"
    show-index
  >
    <template #item-action="{ id }">
      <div class="btn-group">
        <NuxtLink
          :to="{ name: 'user-id', params: { id: id } }"
          class="btn btn-warning btn-sm"
          >แก้ไข</NuxtLink
        >
        <button
          class="btn btn-danger btn-sm"
          type="button"
          @click="deleteUser(Number(id))"
        >
          ลบ
        </button>
      </div>
    </template>
    <template #item-active="{id}">
        <button class="badge text-bg-success">ปกติ</button>
    </template>
  </EasyDataTable>
</template>

<script setup lang="ts">
import type { Header } from "vue3-easy-data-table";

const headers: Header[] = [
  { text: "ชื่อ", value: "firstName", sortable: true },
  { text: "ชื่อผู้ใช้งาน", value: "username" },
  { text: "อีเมล", value: "email" },
  { text: "เงินเดือน", value: "salary" },
  { text: "สถานะ", value: "active" },
  // { text: "WEIGHT (lbs)", value: "indicator.weight"},
  // { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
  { text: "จัดการ", value: "action" },
];

const props = defineProps(["users", "fetchUsers", "loading"]);

const deleteUser = async (userId: Number) => {
  try {
    const response = await fetch("/api/user/" + userId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.fetchUsers();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
