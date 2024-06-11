<template>
  <div class="card shadow border-0 mb-7">
    <!-- <div class="card-header">
      <h5 class="mb-0">Product Create</h5>
    </div> -->
    <Loader :loading="loading" />
    <div class="card-body">
      <form @submit.prevent="handleSubmit()">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">ชื่อผู้ใช้</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="form.username"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">รหัสผ่าน</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="form.password"
          />
        </div>
        <!-- <div class="border border-1 border-primary"></div> -->
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">ชื่อ</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="form.firstName"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">นามสกุล</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="form.lastName"
              />
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">อีเมล</label>
          <input type="text" class="form-control form-control-sm" v-model="form.email" />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">เงินเดือน</label>
          <input type="text" class="form-control form-control-sm" v-model="form.salary" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">สถานะ</label>
          <select class="form-select form-select-sm" @change="selectIsAdmin">
            <option value="0" selected>พนักงาน</option>
            <option value="1">ผู้ดูแลร้าน</option>
          </select>
        </div>

        <button class="btn btn-sm btn-primary">บันทึก</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false);

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  salary: "",
  isAdmin: false,
});

const handleSubmit = async () => {
  try {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });
    const data = await response.json();
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};

const selectIsAdmin = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const selectedValue = target.value;
  form.value.isAdmin = selectedValue ? true : false;
};
</script>

<style scoped></style>
