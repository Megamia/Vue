<template>
  <div class="body">
    <div class="main"></div>
    <div class="content">
      <span>Custom header </span>
      <!-- <button id="show-modal" @click="showModal = true">
        </button> -->
      <button class="modal-default-button" @click="$emit('close')">OK</button>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: gray;
}
.main {
  display: flex;
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
  height: 300px;
  opacity: 0.6;
  /* position: absolute; */
}
.content {
  position: absolute;
  background-color: red;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  height: max-content;
}
.content button {
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
}
.main span {
  color: black;
  font-size: 30px;
}
</style>
