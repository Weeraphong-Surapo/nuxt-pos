<template>
  <div class="card shadow border-0 mb-7">
    <Loader :loading="loading" />
    <div class="card-body">
      <form @submit.prevent="updateCategory()">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">หมวดหมู่</label>
          <input type="text" class="form-control form-control-sm" v-model="form.name" />
        </div>
        <button type="submit" class="btn btn-primary btn-sm" :disabled="loading">{{ loading ? "กำลังอัพเดต" :"อัพเดต" }}</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { categoryFormData } from "~/types/categoryType";
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
const form = ref<categoryFormData>({
  name: "",
});
const loading = ref(false);

const updateCategory = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/category/" + router.params.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });
    const data = await response.json();
    showToast("อัพเดตสำเร็จ");
    navigateTo({name:'category'})
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

const getCategory = async () => {
  loading.value = true;
  try {
    const response = await fetch("/api/category/" + router.params.id, {
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

onMounted(() => {
  getCategory();
});
</script>

<style scoped></style>
