<template>
  <div class="card shadow border-0 mb-7">
    <!-- <div class="card-header">
      <h5 class="mb-0">Product Create</h5>
    </div> -->
    <Loader :loading="loading" />
    <div class="card-body">
      {{ form }}
      <form @submit.prevent="createProduct()">
        <div class="d-flex justify-content-center">
          <img
            v-if="imageUrl"
            :src="imageUrl"
            alt="Uploaded Image"
            class="mt-3 img-thumbnail"
            width="124"
            height="72"
          />
          <img
            v-else
            src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
            alt=""
            width="124"
            height="72"
          />
        </div>
        <p v-if="form.file" class="my-2 text-center">{{ form.file.name }}</p>

        <div class="mb-2">
          <div class="d-flex flex-column align-items-center">
            <div class="" v-if="!form.file">
              <label for="file-upload" class="custom-file-upload btn btn-primary btn-sm">
                อัพโหลดรูปภาพ
              </label>
              <input id="file-upload" type="file" @change="handleFileUpload" />
            </div>
            <div v-else>
              <button class="btn btn-danger btn-sm" @click="cancelImage()">ยกเลิก</button>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">สินค้า</label>
          <input type="text" class="form-control form-control-sm" v-model="form.name" />
          <!-- <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div> -->
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">รหัสสินค้า</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  v-model="form.barcode"
                />
                <!-- <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div> -->
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">จำนวน</label>
              <input
                type="number"
                class="form-control form-control-sm"
                v-model="form.quantity"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">ราคาทุน</label>
              <input
                type="number"
                class="form-control form-control-sm"
                v-model="form.cost"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">ราคาขาย</label>
              <input
                type="number"
                class="form-control form-control-sm"
                v-model="form.price"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">หมวดหมู่</label>
              <select class="form-select form-select-sm" @change="selectedCategory">
                <option value="" disabled selected>เลือกหมวดหมู่</option>
                <option
                  :value="category.id"
                  v-for="(category, index) in categorys"
                  :key="index"
                >
                  {{ category?.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">ประเภท</label>
              <select class="form-select form-select-sm" @change="selectedSubCategory">
                <option value="" disabled selected>เลือกประเภท</option>
                <option
                  :value="subCategory.id"
                  v-for="(subCategory, index) in sub_categorys"
                  :key="index"
                >
                  {{ subCategory?.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">รายละเอียด</label>
          <textarea
            class="form-control"
            cols="30"
            rows="3"
            v-model="form.description"
          ></textarea>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :checked="Boolean(form.is_active)"
              @click="form.is_active = true"
            />
            <label class="form-check-label" for="flexRadioDefault1"> เปิดขาย </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :checked="!form.is_active"
              @click="form.is_active = false"
            />
            <label class="form-check-label" for="flexRadioDefault2"> ไม่เปิดขาย </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-sm">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { categoryData } from "~/types/categoryType";
import type { subCategoryType } from "~/types/subCategoryType";
import type { productFormData } from "~/types/productType";
const form = ref<productFormData>({
  id:null,
  name: "",
  barcode: "",
  is_active: 1,
  price: 0,
  category: "",
  sub_category: "",
  description: "",
  quantity: 0,
  cost: 0,
  file: null,
  file_path: "",

});

const loading = ref<boolean>(false);
const imageUrl = ref<string>("");
const categorys = ref<categoryData[] | null>(null);
const sub_categorys = ref<subCategoryType[] | null>(null);

const allCategorys = async () => {
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
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

const selectedCategory = async (event: Event) => {
  loading.value = true;

  try {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    // สร้าง object ใหม่เพื่อกำหนดค่าให้กับ form.value.category
    form.value.category = selectedValue;
    await allSubCategory(selectedValue);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const selectedSubCategory = async (event: Event) => {
  try {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    // สร้าง object ใหม่เพื่อกำหนดค่าให้กับ form.value.category
    form.value.sub_category = selectedValue;
  } catch (error) {
    console.log(error);
  }
};

const allSubCategory = async (category_id: string) => {
  try {
    const response = await fetch("/api/category/" + category_id + "/subcategory", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    sub_categorys.value = data.data;
  } catch (e) {
    console.log(e);
  }
};

const createProduct = async () => {
  loading.value = true;
  try {
    const formData = new FormData();
    if (form.value.file) {
      formData.append("file", form.value.file);
    }
    // Append other form data if needed
    formData.append("name", form.value.name);
    formData.append("barcode", form.value.barcode);
    formData.append("isActive", form.value.is_active ? "1" : "0");
    formData.append("price", form.value.price.toString());
    formData.append("category", form.value.category.toString());
    formData.append("sub_category", form.value.sub_category.toString());
    formData.append("description", form.value.description);
    formData.append("quantity", form.value.quantity.toString());
    formData.append("cost", form.value.cost.toString());

    const response = await fetch("/api/product", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const fileValue = target.files?.[0] || null;
  form.value.file = fileValue;
  if (fileValue) {
    imageUrl.value = URL.createObjectURL(fileValue);
  }
};

const cancelImage = () => {
  form.value.file = null;
  imageUrl.value = "";
};

onMounted(() => {
  allCategorys();
});
</script>

<style scoped>
input[type="file"] {
  display: none;
}

.custom-file-upload {
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background-color: #007bff;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease-in-out;
}

.custom-file-upload:hover {
  background-color: #0056b3;
}

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
