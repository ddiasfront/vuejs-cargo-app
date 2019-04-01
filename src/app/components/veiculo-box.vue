<template>
  <div>
    <h3 v-if="typeof this.veiculoData.title === 'string'">{{veiculoData.title}}</h3>
    <p v-for="item in this.veiculoData.content">{{item.nome + '-' + item.placa}}</p>
  </div>
</template>

<script>
export default {
  name: "veiculoBox",
  props: ["veiculoData"]
};
</script>
