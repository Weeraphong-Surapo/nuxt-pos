<template>
  <header class="bg-surface-primary border-bottom pt-6 pb-6">
    <div class="container-fluid">
      <div class="mb-npx">
        <div class="row align-items-center">
          <div class="col-sm-6 col-12 mb-4 mb-sm-0">
            <!-- Title -->
            <h1 class="h2 mb-0 ls-tight">Application</h1>
          </div>
          <!-- Actions -->
          <div class="col-sm-6 col-12 text-sm-end">
            <div class="mx-n1">
              <a href="#" class="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                <span class="pe-2">
                  <i class="bi bi-pencil"></i>
                </span>
                <span>Edit</span>
              </a>
              <NuxtLink
                :to="{ name: 'pos' }"
                class="btn d-inline-flex btn-sm btn-primary mx-1"
              >
                <span class="pe-2">
                  <i class="bi bi-plus"></i>
                </span>
                <span>POS</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Nav -->
        <!-- <ul class="nav nav-tabs mt-4 overflow-x border-0">
          <li class="nav-item">
            <a href="#" class="nav-link active">All files</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link font-regular">Shared</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link font-regular">File requests</a>
          </li>
        </ul> -->
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
