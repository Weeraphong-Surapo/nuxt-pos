<template>
  <div class="card shadow border-0 mb-7">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="mb-0">Order #32430324 / วันที่ {{ sale?.createdDate }}</h5>
      <div>
        <button class="btn btn-sm btn-warning me-3">Print</button>
        <button class="btn btn-sm btn-info">Excel</button>
      </div>
    </div>
    <Loader :loading="loading" />
    <div class="card-body">
      <div class="row">
        <div class="col-md-4">
          <form>
            <div class="mb-3">
              <label for="" class="form-label">ชื่อลูกค้า</label>
              <input
                type="email"
                class="form-control form-control-sm"
                readonly
                disabled
                value="test"
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">เบอร์โทร</label>
              <input
                type="test"
                class="form-control form-control-sm"
                readonly
                disabled
                value="test"
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">ไลน์</label>
              <input
                type="test"
                class="form-control form-control-sm"
                readonly
                disabled
                value="test"
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">ที่อยู่</label>
              <input
                type="test"
                class="form-control form-control-sm"
                readonly
                disabled
                value="test"
              />
            </div>
            <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
          </form>
        </div>
        <div class="col-md-8">
          <TableOrder
            :products="sale?.orders ?? []"
            :total_price="sale?.total_price ?? ''"
            :total_price_sum_vat="sale?.total_price_sum_vat"
            :vat="sale?.vat"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  barcode: string;
  name: string;
  price: string;
  is_active: boolean;
  quantity: number;
  file_name: string;
  file_path: string | null;
  description: string;
  cost: string;
  category_id: number;
  sub_category_id: number;
  createdDate: string;
  updatedDate: string;
}

interface Order {
  id: number;
  product_id: number;
  list_sale_id: number;
  quantity: number;
  product: Product;
}

interface Customer {
  id: number;
  full_name: string;
  phone: string;
  address: string;
  line: string;
  createdDate: string;
}

interface Sale {
  id: number;
  order_code: string;
  customer_id: number;
  type_pay: number;
  vat: string;
  getMoney: string;
  changeMoney: string;
  total_price: string;
  total_price_sum_vat: string;
  createdDate: string;
  orders: Order[];
  customers: Customer;
}

const sale = ref<Sale |null>(null);
const loading = ref(false);
const router = useRoute();
const getSale = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/sale/" + router.params.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    sale.value = data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getSale();
});
</script>

<style scoped></style>
