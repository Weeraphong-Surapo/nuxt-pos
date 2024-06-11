<template>
  <table class="table">
    <thead>
      <tr>
        <th>รหัสสินค้า</th>
        <th>สินค้า</th>
        <th>ราคา</th>
        <th>จำนวน</th>
        <th>รวม</th>
      </tr>
    </thead>
    <tbody>
      <!-- {{ products }} -->
      <tr v-if="products" v-for="(product, index) in products" :key="index">
        <td>{{ product.product.barcode }}</td>
        <td>{{ product.product.name }}</td>
        <td>{{ product.product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.product.price * product.quantity }}.00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5" class="text-center">ภาษี {{ vat }} บาท</td>
      </tr>
      <tr>
        <td colspan="5" class="text-center">ราคารวม {{ total_price }} บาท</td>
      </tr>
      <tr>
        <td colspan="5" class="text-center bg-success">
          <h5 class="text-white">ราคาทั้งสิ้น {{ total_price_sum_vat }} บาท</h5>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
defineProps(["products", "total_price_sum_vat", "total_price", "vat"]);
</script>

<style lang="scss" scoped></style>
