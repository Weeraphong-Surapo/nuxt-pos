<template>
  <div class="card shadow border-0 mb-7">
    <div class="card-header">
      <h5 class="mb-0">Sale</h5>
    </div>
    <div class="card-body">
      <TableSale :loading="loading" :fetchSales="getAllSales" :sales="listSales" />
    </div>
  </div>
</template>

<script setup>
const loading = ref(false);
const listSales = ref([]);

const getAllSales = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/sale", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    listSales.value = data.data;
    console.log(data.data);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getAllSales();
});
</script>

<style lang="scss" scoped></style>
