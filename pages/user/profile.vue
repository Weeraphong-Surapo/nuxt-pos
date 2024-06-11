<template>
  <div class="card shadow border-0 mb-7">
    <!-- <div class="card-header">
      <h5 class="mb-0">Product Create</h5>
    </div> -->
    <Loader :loading="loading" />
    <div class="card-body">
      <form @submit.prevent="updateUesr">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="" class="form-label">ชื่อ</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-if="form"
                v-model="form.firstName"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="" class="form-label">นามสกุล</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-if="form"
                v-model="form.lastName"
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">อีเมล</label>
          <input
            type="email"
            class="form-control form-control-sm"
            v-if="form"
            v-model="form.email"
          />
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="" class="form-label">ชื่อผู้ใช้งาน</label>
              <input
                type="text"
                class="form-control form-control-sm"
                disabled
                v-if="form"
                v-model="form.username"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="" class="form-label">สถานะ</label>
              <input
                type="text"
                class="form-control form-control-sm"
                disabled
                v-if="form"
                :value="form.isAdmin ? 'ผู้ดูแลร้าน' : 'พนักงาน'"
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">เงินเดือน</label>
          <input
            type="text"
            class="form-control form-control-sm"
            disabled
            v-if="form"
            v-model="form.salary"
          />
        </div>

        <div class="mb-3">
          <label for="" class="form-label">สร้างเมื่อ</label>
          <input
            type="text"
            class="form-control form-control-sm"
            disabled
            v-if="form"
            v-model="form.createdDate"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">อัพเดตเมื่อ</label>
          <input
            type="text"
            class="form-control form-control-sm"
            disabled
            v-if="form"
            v-model="form.updatedDate"
          />
        </div>

        <button type="submit" class="btn btn-success btn-sm">บันทึก</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../../stores/authStore";
import type { User } from "~/types/userType";
definePageMeta({
  middleware: "auth",
});

const authStore = useAuthStore();
const loading = ref<boolean>(true);
const form = ref<User | null>(null);

const updateUesr = async () => {
  try {
    const response = await fetch("/api/user/" + form.value?.id,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }
};
onMounted(async () => {
  setTimeout(() => {
    loading.value = false;
  }, 100);
  form.value = authStore.user;
});
</script>

<style scoped></style>
