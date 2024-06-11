<template>
  <div class="card shadow border-0 mb-7">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="mb-0">ผู้ใช้งานทั้งหมด</h5>
      <NuxtLink class="btn-primary btn btn-sm" :to="{ name: 'user-create' }">
        <i class="bi bi-patch-plus fs-6 me-2"></i>เพิ่มผู้ใช้งาน</NuxtLink
      >
    </div>

    <div class="card-body">
      <TableUser :users="items" :fetchUsers="getUsers" :loading="loading" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = ref([]);

const showModal = ref(false);

const loading = ref<boolean>(false);

const getUsers = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    items.value = data.data;
    console.log(data.data);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getUsers();
});
</script>
<style scoped></style>
