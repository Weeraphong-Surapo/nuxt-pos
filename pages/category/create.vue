<template>
  <div class="card shadow border-0 mb-7">
    <!-- <div class="card-header">
      <h5 class="mb-0">Product Create</h5>
    </div> -->
    <Loader :loading="loading" />
    <div class="card-body">
      <form @submit.prevent="createCategory()">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">หมวดหมู่</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="form.name"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary btn-sm" :disabled="loading">
          {{ loading ? "กำลังบันทึก..." : "บันทึก" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { categoryFormData } from "~/types/categoryType";
const form = ref<categoryFormData>({
  name: "",
});

const loading = ref(false);

const createCategory = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });
    const data = await response.json();
    navigateTo({ name: "category" });
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
