<template>
  <div class="card shadow border-0 mb-7">
    <Loader :loading="loading" />
    {{ form }}
    <div class="card-body">
      <form @submit.prevent="createCategory()">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">ประเภท</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="form.name"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">หมวดหมู่</label>
              <select class="form-select form-select-sm" @change="selectedCategory">
                <option value="" disabled selected>เลือกหมวดหมู่</option>
                <option
                  :value="category.id"
                  v-for="(category, index) in categorys"
                  :key="index"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-sm" :disabled="loading">
          {{ loading ? "กำลังบันทึก..." : "บันทึก" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { categoryData } from "~/types/categoryType";

const form = ref({
  name: "",
  category: "",
});
const categorys = ref<categoryData[] | null>(null);

const loading = ref(false);
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

const createCategory = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/subcategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });
    const data = await response.json();
    showToast("บันทึกสำเร็จ");
    navigateTo({ name: "category-subcategory" });
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

const getCategory = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    categorys.value = data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const selectedCategory = async (event: Event) => {
  try {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    // สร้าง object ใหม่เพื่อกำหนดค่าให้กับ form.value.category
    form.value.category = selectedValue;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getCategory();
});
</script>

<style scoped></style>
