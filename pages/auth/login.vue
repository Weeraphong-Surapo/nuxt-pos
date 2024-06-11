<template>
  <div class="container h-100">
    <!-- Set container height to full height -->
    <div class="row align-items-center justify-content-center h-100">
      <!-- Center content vertically and horizontally -->
      <div class="login-container p-0">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0">Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter username"
                  v-model="form.username"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter password"
                  v-model="form.password"
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block" :disabled="loading">{{ loading ? "Login..." :"Login" }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { loginUser } from "~/types/userType";
definePageMeta({
  layout: false,
});

const loading = ref(false)

const form = ref<loginUser>({
  username: "weeraphong",
  password: "Bigcza123456",
});

const handleSubmit = async () => {
  loading.value = true
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(form.value),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigateTo({ name: "index" });
  } catch (error) {
    console.log(error);
  }finally{
    loading.value = false
  }
};
</script>

<style scoped>
body {
  background-color: #f8f9fa;
}

.login-container {
  max-width: 400px;
  margin: auto; /* Center horizontally */
  margin-top: 100px; /* Adjust top margin as needed */
  /* padding: 20px; */
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.login-container .card-header {
  background-color: #007bff;
  color: #fff;
  border-radius: 10px 10px 0 0;
}

.login-container h3 {
  margin-bottom: 0;
}

.login-container .form-group {
  margin-bottom: 20px;
}

.login-container input[type="text"],
.login-container input[type="password"] {
  border-radius: 5px;
  border: 1px solid #ced4da;
}

.login-container button[type="submit"] {
  border-radius: 5px;
}
</style>
