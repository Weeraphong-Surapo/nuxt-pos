<template>
  <div>
    <button @click="openModal">Open Modal</button>
    <jenesius-vue-modal v-model="modalOpen">
      <h2>Modal Content</h2>
      <p>This is a sample modal content.</p>
      <button @click="closeModal">Close</button>
    </jenesius-vue-modal>
  </div>
</template>

<script>
import JenesiusVueModal from "jenesius-vue-modal";

export default {
  components: {
    JenesiusVueModal,
  },
  data() {
    return {
      modalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
};
</script>
