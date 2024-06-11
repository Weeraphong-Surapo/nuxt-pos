<template>
  <div class="card shadow border-0 mb-7">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="mb-0">ลูกค้าทั้งหมด</h5>
      <!-- <div class="">

      </div> -->
      <NuxtLink
        class="btn-primary btn btn-sm"
        :to="{ name: 'customer-create' }"
      >
        <i class="bi bi-patch-plus fs-6 me-2"></i>เพิ่มลูกค้า</NuxtLink
      >
    </div>
    <div class="card-body">
      <TableCustomer
        :loading="loading"
        :fetchCustomers="getAlCustomers"
        :customers="customers"
      />
    </div>
  </div>
</template>

<script setup>
const loading = ref(false);
const customers = ref([]);

const getAlCustomers = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/customer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    customers.value = data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getAlCustomers();
});
</script>

<style lang="scss" scoped></style>
