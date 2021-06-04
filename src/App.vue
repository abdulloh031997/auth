<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class="container">
      <div class="row" v-for="(item, index) in todoForm" :key="index">
        <div class="col-md-4">
          <div>
            <input type="text" v-model="item.title" id="" />
          </div>
        </div>
        <div class="col-md-4">
          <pre>{{ todoForm }}</pre>
        </div>
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
