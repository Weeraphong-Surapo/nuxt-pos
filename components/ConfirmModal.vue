<script setup>
const props = defineProps({
  show: Boolean,
  deleteData:Function
});
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <!-- <div class="modal-header">
          <slot name="header">default header</slot>
        </div> -->

        <div class="modal-body p-0 text-center">
          <slot name="body">
            <i class="bi bi-exclamation-square text-warning" style="font-size: 60px"></i>
            <h4 class="text-dark">ต้องการลบข้อมูล ?</h4>
          </slot>
        </div>

        <div class="modal-footer d-flex justify-content-center pt-3 pb-0">
          <slot name="footer">
            <div class="">
              <button class="btn btn-danger btn-sm me-5" @click="deleteData">
                DELETE
              </button>
              <button class="btn btn-secondary btn-sm" @click="$emit('close')">
                Close
              </button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 400px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
