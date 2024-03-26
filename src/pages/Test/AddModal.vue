<template>
  <template v-for="(fruit, index) in fruits" :key="index" >
    {{fruit}}
    <v-btn @click="deleteFruit(fruit)">
      Delete {{fruit}}
    </v-btn>
  </template>

  <br /><br />
  <v-btn @click="deleteFirst">
    Delete First
  </v-btn>
  <v-btn @click="deleteLast">
    Delete Last
  </v-btn>
</template>
<script>
export default {
    name: "AddModal",
    data() {
      return {
        fruits: ["apple", "orange", "grapes", "pear"]
      };
    },
    methods: {
      deleteFruit(fruit) {
        this.fruits.splice(this.fruits.indexOf(fruit), 1);
        //remove one element starting from the element 'fruit'
      },
      deleteFirst() {
        this.fruits.shift();
        // delete last
      },
      deleteLast() {
        this.fruits.pop();
        // delete last
      }
    }
  };
</script>

