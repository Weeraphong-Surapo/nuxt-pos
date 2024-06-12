<template>
  <Loader :loading="loading" />
  <div class="container-fluid px-0">
    <div class="row">
      <div class="col-md-7">
        <div
          class="card border border-bottom-0 border-end-0 border-start-0 border-4 vh-100"
        >
          <div class="card-header d-flex justify-content-between align-items-center">
            <h2>ขายสินค้าหน้าร้าน {{ vat }}</h2>
            <NuxtLink :to="{ name: 'index' }" class="btn btn-danger btn-sm"
              >Exit</NuxtLink
            >
          </div>
          <div class="input-group mb-3 input-group-sm">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-person-circle"></i
            ></span>
            <input
              readonly
              type="text"
              class="form-control form-control-sm"
              placeholder="วีระพงษ์ สุราโพธิ์"
            />
          </div>

          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text"><i class="bi bi-people-fill"></i></span>
            <select class="form-select form-select-sm" @change="selectedCustumer">
              <option value="" disabled selected>เลือกลูกค้า</option>
              <option
                :value="customer.id"
                v-for="(customer, index) in customers"
                :key="index"
              >
                {{ customer.full_name }}
              </option>
            </select>
            <button type="button" class="input-group-text bg-dark text-white">
              ยกเลิก
            </button>
          </div>
          <div class="border border-1 border-warning"></div>
          <p class="text-center mt-1">รายการสินค้า ({{ carts.length }})</p>
          <div
            class="card-body mb-0 pb-0"
            style="max-height: calc(100vh - 150px); overflow-y: auto"
          >
            <div
              class="d-flex align-items-center mb-3"
              v-for="(cart, i) in carts"
              :key="i"
              style="overflow-y: auto"
            >
              <div class="input-group input-group-sm rounded-0">
                <button
                  @click="deleteFromCart(cart.id)"
                  type="button"
                  class="input-group-text bg-danger text-white rounded-0"
                >
                  X
                </button>
                <input
                  readonly
                  type="text"
                  class="form-control form-control-sm rounded-0"
                  :value="cart.name"
                />
              </div>

              <div class="d-flex">
                <button
                  class="btn btn-warning btn-sm rounded-0"
                  @click="decreateQty(cart.id)"
                >
                  -
                </button>
                <span style="width: 70px" class="text-center border">{{ cart.qty }}</span>
                <button
                  class="btn btn-primary btn-sm rounded-0"
                  @click="plusQty(cart.id)"
                >
                  +
                </button>
              </div>

              <div class="input-group input-group-sm w-100">
                <input
                  readonly
                  type="text"
                  class="form-control form-control-sm text-end rounded-0"
                  :value="cart.total_price"
                />
                <button
                  type="button"
                  class="input-group-text bg-info text-white rounded-0"
                >
                  ฿
                </button>
              </div>
            </div>
          </div>
          <div class="p-3 border-3 border-secondary">
            <div class="row mb-3">
              <label for="" class="col-sm-2 col-form-label">เปอร์เซ็น (VAT)</label>
              <div class="col-sm-10">
                <input
                  type="number"
                  class="form-control form-control-sm text-end"
                  v-model="inputVat"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="" class="col-sm-2 col-form-label">ภาษี</label>
              <div class="col-sm-10">
                <input
                  readonly
                  type="text"
                  class="form-control form-control-sm text-end"
                  :value="formatNumber(vat)"
                />
              </div>
            </div>

            <div class="row mb-3">
              <label for="" class="col-sm-2 col-form-label">รวมทั้งสิ้น</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control form-control-sm text-end"
                  :value="formatNumber(total_price_vat_show)"
                  readonly
                />
              </div>
            </div>
          </div>
          <button
            class="btn btn-success w-100 rounded-0 btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            :disabled="carts.length < 1"
          >
            ดำเนินการต่อ
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <ModalPos :total_price="total_price">
              <div class="row">
                <div class="col-12">
                  <div
                    class="list-group list-group-horizontal-sm"
                    id="list-tab"
                    role="tablist"
                  >
                    <a
                      class="list-group-item list-group-item-action active text-center"
                      id="list-home-list"
                      data-bs-toggle="list"
                      href="#list-home"
                      role="tab"
                      aria-controls="list-home"
                      @click="type_pay = 0"
                      >ชำระเงินสด</a
                    >
                    <a
                      class="list-group-item list-group-item-action text-center"
                      id="list-profile-list"
                      data-bs-toggle="list"
                      href="#list-profile"
                      role="tab"
                      aria-controls="list-profile"
                      @click="type_pay = 1"
                      >โอนชำระ</a
                    >
                  </div>
                </div>
                <div class="col-12">
                  <div class="tab-content" id="nav-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="list-home"
                      role="tabpanel"
                      aria-labelledby="list-home-list"
                    >
                      <div class="row">
                        <div class="col-md-6">
                          <div class="my-3">
                            <div class="input-group flex-nowrap">
                              <span
                                class="input-group-text"
                                style="width: 150px"
                                id="addon-wrapping"
                                >ยอดรวมเงินชำระ</span
                              >
                              <input
                                type="text"
                                class="form-control from-control-sm text-end"
                                :value="formatNumber(total_price_vat_show)"
                                readonly
                              />
                            </div>
                          </div>
                          <div class="mb-3">
                            <div class="input-group flex-nowrap">
                              <span
                                class="input-group-text"
                                style="width: 150px"
                                id="addon-wrapping"
                                >ยอดรับเงิน</span
                              >
                              <input
                                type="text"
                                class="form-control from-control-sm text-end"
                                v-model="resultInputMoney"
                              />
                            </div>
                          </div>
                          <div class="mb-3">
                            <div class="input-group flex-nowrap">
                              <span
                                class="input-group-text"
                                style="width: 150px"
                                id="addon-wrapping"
                                >ยอดเงินทอน</span
                              >
                              <input
                                type="text"
                                class="form-control from-control-sm text-end"
                                :value="formatNumber(changeMoney)"
                                readonly
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <button
                                type="button"
                                class="btn btn-info text-white w-100 mb-3"
                                @click="paybalance"
                              >
                                ชำระเงินพอดี
                              </button>
                            </div>
                            <div class="col-md-6">
                              <button
                                type="button"
                                class="btn btn-success w-100 mb-3"
                                @click="createListSale()"
                              >
                                ชำระเงิน
                              </button>
                            </div>
                          </div>
                          <button
                            type="button"
                            class="btn btn-secondary w-100"
                            data-bs-dismiss="modal"
                          >
                            ปิด
                          </button>
                        </div>
                        <div class="col-md-6">
                          <div class="calculator mt-3">
                            <div class="calculator-keys">
                              <button
                                type="button"
                                class="bg-primary text-white btn-hover"
                                @click="addNumberCalc('7')"
                              >
                                7
                              </button>
                              <button
                                type="button"
                                class="bg-primary text-white btn-hover"
                                @click="addNumberCalc('8')"
                              >
                                8
                              </button>
                              <button
                                type="button"
                                class="bg-primary text-white btn-hover"
                                @click="addNumberCalc('9')"
                              >
                                9
                              </button>
                              <button
                                type="button"
                                class="bg-primary text-white btn-hover"
                                @click="addNumberCalc('4')"
                              >
                                4
                              </button>
                              <button
                                type="button"
                                class="bg-primary text-white btn-hover"
                                @click="addNumberCalc('5')"
                              >
                                5
                              </button>
                              <button
                                type="button"
                                class="bg-primary text-white btn-hover"
                                @click="addNumberCalc('6')"
                              >
                                6
                              </button>
                              <button
                                type="button"
                                class="bg-primary text-white btn-hover"
                                @click="addNumberCalc('1')"
                              >
                                1
                              </button>
                              <button
                                type="button"
                                class="bg-primary text-white btn-hover"
                                @click="addNumberCalc('2')"
                              >
                                2
                              </button>
                              <button
                                type="button"
                                class="bg-primary text-white btn-hover"
                                @click="addNumberCalc('3')"
                              >
                                3
                              </button>
                              <button
                                type="button"
                                class="decimal text-white btn-hover bg-primary"
                                @click="decreaseLastDigit"
                              >
                                <=
                              </button>
                              <button
                                type="button"
                                class="bg-primary text-white btn-hover"
                                @click="addNumberCalc('0')"
                              >
                                0
                              </button>
                              <button
                                type="button"
                                class="all-clear text-white btn-hover bg-primary"
                                @click="clearInput()"
                              >
                                AC
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="list-profile"
                      role="tabpanel"
                      aria-labelledby="list-profile-list"
                    >
                      <span class="text-muted d-block my-3">
                        เมื่อลูกค้าทำการโอนเงินผ่านธนาคารออนไลน์
                        <span class="text-danger"
                          >แนะนำให้คุณตรวจสอบเลขที่บัญชีและข้อมูลการโอนให้ถูกต้อง
                          และให้เก็บหลักฐานการโอนเงินเอาไว้</span
                        >
                        เมื่อโอนเงินเสร็จสิ้น
                        <span class="text-success">คุณสามารถปุ่ม "ชำระเงินแล้ว"</span>
                        เพื่อช่วยให้กระบวนการดำเนินการได้รวดเร็วและถูกต้อง.</span
                      >
                      <div class="d-flex justify-content-center">
                        <button class="btn btn-success btn-lg" @click="createListSale()">
                          ชำระเงินแล้ว
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalPos>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="card border border-bottom-0 border-start-0 border-end-0 border-4">
          <div class="card-header">
            <input
              type="text"
              class="form-control mb-3 border-danger"
              placeholder="search..."
            />
            <select class="form-select form-select-sm border-danger">
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div class="card-bod">
            <div class="table-responsive">
              <TablePos
                :fetchProduct="allProducts"
                :products="products"
                :loading="loading"
                :addToCart="addToCart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { productData } from "~/types/productType";
import type { CartItem } from "~/types/cartType";
definePageMeta({
  layout: false,
});



const products = ref<productData[]>([]);
const type_pay = ref(0);
const inputMoney = ref<string>("");
const inputVat = ref<number>(0);
const loading = ref(false);
const carts = ref<CartItem[]>([]);
const customers = ref<any[]>([]);
const customer = ref(0);

const resultInputMoney = computed(() => {
  return inputMoney.value == "" ? 0 : inputMoney.value;
});
const allProducts = async () => {
  loading.value = true;
  try {
    await getAllCustomers();
    const response = await fetch("/api/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    products.value = data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const addNumberCalc = (number: string) => {
  inputMoney.value += number;
};

const addToCart = (product: any) => {
  // Check if the product already exists in the cart
  const existingItemIndex = carts.value.findIndex((item) => item.id === product.id);

  if (existingItemIndex !== -1) {
    // If the product already exists, increase the quantity
    carts.value[existingItemIndex].qty++;
    carts.value[existingItemIndex].total_price =
      carts.value[existingItemIndex].price * carts.value[existingItemIndex].qty;
  } else {
    // If the product does not exist, add it to the cart
    const newItem: CartItem = {
      id: String(product.id),
      name: String(product.name),
      price: Number(product.price),
      stock: Number(product.quantity),
      cost: Number(product.cost),
      qty: 1,
      //   stock:quantity,
      total_price: Number(product.price) * 1,
    };
    carts.value.push(newItem);

    localStorage.setItem("cart", JSON.stringify(carts.value));
  }
};

const deleteFromCart = (productId: string) => {
  // Find the index of the product in the cart
  const index = carts.value.findIndex((item) => item.id === productId);

  if (index !== -1) {
    // Remove the product from the cart
    carts.value.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(carts.value));
};

const plusQty = (productId: string) => {
  const index = carts.value.findIndex((item) => item.id === productId);

  if (index !== -1) {
    const cartItem = carts.value[index] as CartItem;

    // Increase the quantity
    if (cartItem.qty < cartItem.stock) {
      cartItem.qty++;
      // Update the total price for the product
      cartItem.total_price = cartItem.price * cartItem.qty;
    }
  }
  localStorage.setItem("cart", JSON.stringify(carts.value));
};

const decreateQty = (productId: string) => {
  const index = carts.value.findIndex((item) => item.id === productId);
  if (index !== -1) {
    // Decrease the quantity
    if (carts.value[index].qty > 1) {
      carts.value[index].qty--;
      // Update the total price for the product
      carts.value[index].total_price = carts.value[index].price * carts.value[index].qty;
    } else {
      // Remove the item from the cart if the quantity is 1
      carts.value.splice(index, 1);
    }
  }
  localStorage.setItem("cart", JSON.stringify(carts.value));
};

const paybalance = () => {
  inputMoney.value = String(total_price_vat_show.value);
};

const total_price = computed(() => {
  return carts.value.reduce((total, item) => total + item.price * item.qty, 0);
});

const total_price_vat_show = computed(() => {
  let result;
  if (inputVat.value > 0) {
    result =
      carts.value.reduce((total, item) => total + item.price * item.qty, 0) + vat.value;
  } else {
    result = carts.value.reduce((total, item) => total + item.price * item.qty, 0);
  }
  return result;
});

const vat = computed(() => {
  const total = carts.value.reduce((total, item) => total + item.price * item.qty, 0);
  const vatAmount = inputVat.value ? (total * inputVat.value) / 100 : 0;
  return vatAmount;
});

const formatNumber = (vatAmount: number) => {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(vatAmount);
};
const changeMoney = computed(() => {
  return total_price_vat_show.value - Number(inputMoney.value);
});

const clearInput = () => {
  inputMoney.value = "0";
};

const decreaseLastDigit = () => {
  // Remove the last character from the input
  inputMoney.value = inputMoney.value.slice(0, -1);
};

const loadCart = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    carts.value = JSON.parse(storedCart);
  }
};

// Assuming carts is a reactive state
const totalCost = computed(() => {
  return carts.value.reduce((acc, c) => acc + c.cost, 0);
});

const totalRevenue = computed(() => {
  return carts.value.reduce((acc, c) => acc + c.price * c.qty, 0);
});

const totalProfit = computed(() => {
  return totalRevenue.value - totalCost.value;
});

const createListSale = async () => {
  loading.value = true;
  let dataInsert;

  // Iterate over each cart item and sum up the values

  if (type_pay.value == 0) {
    dataInsert = {
      customer: customer.value,
      total_price: total_price.value,
      vat: vat.value,
      total_price_sum_vat: total_price_vat_show.value,
      getMoney: inputMoney.value,
      change_money: changeMoney.value,
      type_pay: type_pay.value,
      orders: carts.value,
      profit: totalProfit.value,
    };
  } else {
    dataInsert = {
      customer: customer.value,
      total_price: total_price.value,
      vat: vat.value,
      total_price_sum_vat: total_price_vat_show.value,
      getMoney: total_price_vat_show.value,
      change_money: changeMoney.value,
      type_pay: type_pay.value,
      orders: carts.value,
      profit: totalProfit.value,
    };
  }
  try {
    const response = await fetch("/api/sale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataInsert),
    });
    const data = await response.json();
    carts.value = [];
    localStorage.removeItem("cart");
    loadCart();

  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const getAllCustomers = async () => {
  try {
    const response = await fetch("/api/customer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    customers.value = data.data;
  } catch (error) {
    console.log(error);
  }
};

const selectedCustumer = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const selectedValue = target.value;

  customer.value = Number(selectedValue);
};

onMounted(() => {
  allProducts();
  loadCart();
});
</script>

<style scoped>
.calculator {
  max-width: 100%;
  margin: auto;
  padding: 20px;
  background-color: #f4f7f8;
  border-radius: 8px;
}

.calculator-screen {
  width: 100%;
  height: 60px;
  border: 0;
  padding: 0 20px;
  font-size: 1.5em;
  text-align: right;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
}

.calculator-keys button {
  width: 50px;
  height: 50px;
  margin: 5px;
  font-size: 1.4em;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
}
.calculator-keys {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
}

.calculator-keys button {
  width: 100%;
  height: 60px;
  margin: 0;
}

.calculator-keys button:hover {
  background-color: rgb(34, 40, 227) !important;
  transition: all 0.3s ease-out;
}

.operator,
.decimal,
.all-clear,
.equal-sign {
  background-color: #3498db;
  color: #fff;
}

.operator:hover,
.decimal:hover,
.all-clear:hover,
.equal-sign:hover {
  background-color: #2b8bc6;
}

.equal-sign {
  width: 100%;
}
</style>
