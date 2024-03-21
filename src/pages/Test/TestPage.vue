<template>
  <div class="about">
    <div class="show">
      <button id="show-modal" @click="showModal = true">Show Modal</button>
    </div>
    <AddModal v-if="showModal" @close="showModal = false" />
    <modal v-if="showModal" @close="showModal = false"></modal>
  </div>
</template>

<script>
// import TestModal from "./TestModal.vue";
import AddModal from "./AddModal.vue";
export default {
  components: {
    AddModal,
    // TestModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.about {
  /* position: relative; */
  display: flex;
  flex: 1;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  height: 100vh;
  /* font-size: 30px; */
  /* font-weight: bold; */
}
.about button {
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
}
.show {
  position: absolute;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
  }
}

.main {
  /* position: relative; */
  /* top: 100px; */
  /* top: 50%; */
  display: flex;
  flex: 1;
  /* flex-direction: column; */
}
.Modal {
  position: absolute;
  display: flex;
  flex: 1;
  top: 30px;
}
.detailmodal {
  display: flex;
  flex: 1;
  position: absolute;

  /* height: 100vh; */
  /* justify-content: center; */
}
</style>
