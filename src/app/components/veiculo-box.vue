<template>
  <div>
    <h3 v-if="typeof this.veiculoData.title === 'string'">{{veiculoData.title}}</h3>
    <p v-if="typeof this.veiculoData.content === 'string'">{{veiculoData.content}}</p>
  </div>
</template>

<script>
export default {
  name: "veiculoBox",
  props: ["veiculoData"]
};
</script>
