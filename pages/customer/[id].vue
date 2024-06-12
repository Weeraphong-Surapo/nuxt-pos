<template>
  <div class="card shadow border-0 mb-7">
    <!-- <div class="card-header">
      <h5 class="mb-0">Product Create</h5>
    </div> -->
    <Loader :loading="loading" />
    <div class="card-body">
      <form @submit.prevent="updateCustomer()">
        <div class="mb-3">
          <label for="" class="form-label">ชื่อลูกค้า</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="form.full_name"
          />
        </div>
        <div class="row">
          <div class="mb-3">
            <label for="" class="form-label">เบอร์โทร</label>
            <input
              type="text"
              class="form-control form-control-sm"
              v-model="form.phone"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">ไลน์</label>
            <input type="text" class="form-control form-control-sm" v-model="form.line" />
          </div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">ที่อยู่</label>
          <textarea
            rows="3"
            cols="10"
            class="form-control form-control-sm"
            v-model="form.address"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-sm" :disabled="loading">
          บันทึก
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRoute();

const form = ref({
  full_name: "",
  phone: "",
  line: "",
  address: "",
});

const loading = ref(false);

const getCustomer = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/customer/" + router.params.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    form.value = data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const updateCustomer = async () => {
  loading.value = true;
  try {
    const resopnse = await fetch("/api/customer/" + router.params.id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });

    navigateTo({ name: "customer" });
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getCustomer();
});
</script>

<style scoped></style>
