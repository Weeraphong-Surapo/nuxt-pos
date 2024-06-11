<template>
  <div class="card shadow border-0 mb-7">
    <Loader :loading="loading" />
    <div class="card-header">
      <h5 class="text-warning">รายงานสรุปยอดขาย</h5>
    </div>
    <div class="card-body">
      <TableReportSaleProduct
        :items="dataReportSaleProduct"
        :fetchData="fetchDataReportSaleProducts"
        :loading="loading"
      />
    </div>
  </div>
  <div class="card shadow border-0 mb-7">
    <div class="card-header">
      <h5 class="text-warning">รายงานสรุปการซื้อลูกค้า</h5>
    </div>
    <div class="card-body">
      <ChartCustomer :loading="loading" :chartData="chartData" />
    </div>
  </div>
  <div class="card shadow border-0 mb-7">
    <div class="card-header">
      <h5 class="text-warning">รายงานสรุปการขายประเภทสินค้า</h5>
    </div>
    <div class="card-body">
      <ChartCategoryByProduct
        :loading="loading"
        :chartData="chartDataCategoryByProduct"
      />
    </div>
  </div>
</template>

<script setup>
const loading = ref(false);

const dataReportCustomer = ref([]);
const dataReportCategoryByProduct = ref([]);
const dataReportSaleProduct = ref([]);
const chartData = ref({
  labels: [],
  datasets: [
    {
      label: "ชื่อลูกค้า",
      backgroundColor: ["#f87979", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff6384"],
      data: [],
    },
  ],
});

const chartDataCategoryByProduct = ref({
  labels: [],
  datasets: [
    {
      label: "รายได้",
      backgroundColor: ["#f87979", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff6384"],
      data: [],
    },
  ],
});

const fetchDataReportCustomer = async () => {
  loading.value = true;
  try {
    await fetchDataReportCategoryByProduct();
    await fetchDataReportSaleProducts();
    const response = await fetch("/api/report/customer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dataReportCustomer.value = data.data;
    updateChartData();
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
};

const updateChartData = () => {
  chartData.value.labels = dataReportCustomer.value.map(
    (item) => item.customer_full_name || "ไม่ระบุชื่อ"
  );
  chartData.value.datasets[0].data = dataReportCustomer.value.map((item) =>
    parseFloat(item.total_price_sum_vat)
  );
};

const fetchDataReportCategoryByProduct = async () => {
  try {
    const response = await fetch("/api/report/categorybyproduct", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dataReportCategoryByProduct.value = data.data;
    updateChartDataCategoryByProduct();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const updateChartDataCategoryByProduct = () => {
  chartDataCategoryByProduct.value.labels = dataReportCategoryByProduct.value.map(
    (item) => item.category_name || "ไม่ระบุชื่อ"
  );
  chartDataCategoryByProduct.value.datasets[0].data = dataReportCategoryByProduct.value.map(
    (item) => parseFloat(item.total_price_category)
  );
};

const fetchDataReportSaleProducts = async () => {
  try {
    const response = await fetch("/api/report/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dataReportSaleProduct.value = data.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchDataReportCustomer();
});
</script>

<style lang="scss" scoped></style>
