<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <input type="text" v-model="input" id="" />
        </div>
        <div class="col-md-4">{{ input }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoForm: [
        {
          title: "",
          checkedList: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>
