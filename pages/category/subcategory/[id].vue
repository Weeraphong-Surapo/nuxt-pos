<template>
  <div class="card shadow border-0 mb-7">
    <div class="card-header">
      <h5 class="mb-0">แก้ไขประเภท</h5>
    </div>
    <Loader :loading="loading" />
    {{ form }}
    <div class="card-body">
      <form @submit.prevent="updateCategory()" class="position-relative">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">ประเภท</label>
              <input
                v-if="form?.name"
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
                  v-if="form?.categorys"
                  :value="category.id"
                  v-for="(category, index) in categorys"
                  :key="index"
                  :selected="Number(category.id) == form.categorys?.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-sm" :disabled="loadingBtn">
          {{ loadingBtn ? "กำลังอัพเดต..." : "อัพเดต" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { categoryData } from "~/types/categoryType";
import type { subCategoryFormData } from "~/types/subCategoryType";
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

const router = useRoute();
const form = ref<subCategoryFormData | null>(null);

const loading = ref<boolean>(false);
const loadingBtn = ref<boolean>(false);

const categorys = ref<categoryData[] | null>(null);

const selectedCategory = async (event: Event) => {
  try {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    // สร้าง object ใหม่เพื่อกำหนดค่าให้กับ form.value.category
    if (form.value && form.value.categorys) {
      form.value.categorys.id = Number(selectedValue);
    } else {
      console.warn("form.value or form.value.categorys is undefined");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = async () => {
  loadingBtn.value = true;
  try {
    const updateValue = {
      name: form.value?.name,
      category: form.value?.categorys?.id,
    };
    const response = await fetch("/api/subcategory/" + router.params.id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateValue),
    });
    const data = await response.json();
    showToast("อัพเดตสำเร็จ");
    navigateTo({ name: "category-subcategory" });
  } catch (e) {
    console.log(e);
  } finally {
    loadingBtn.value = false;
  }
};

const getSubCategorys = async () => {
  loading.value = true;
  try {
    await getCategory();
    const response = await fetch("/api/subcategory/" + router.params.id, {
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

const getCategory = async () => {
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
  }
};

onMounted(() => {
  getSubCategorys();
});
</script>

<style scoped>
.position-relative {
  position: relative;
}
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
