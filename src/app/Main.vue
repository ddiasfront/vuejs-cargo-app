<template>
  <div class="mainbg">
    <box-simple
      v-for="box in boxArray"
      v-bind:key="box.id"
      v-bind:box="box"
    ></box-simple>
  </div>
</template>

<script>
import boxGrid from './components/box-grid.vue'
import axios from 'axios'

export default {
  name: 'Main',
  data() {
    return {
      rawResponse: [
      // { id: 1, title: 'Minha jornada com Vue', icon: 'id', content: ['Array 1', 'Array 2'] },
      // { id: 2, title: 'Postagens com Vue', content: 'String' },
      // { id: 3, title: 'Porque Vue é tão divertido', content: 'String' }
    ],
    idCargo: {title: 'ID do frete CargoX', icon: '', content: this.rawResponse.id},
    PedidoCliente: {title: 'N de pedido do cliente'},
    Motorista: {title: 'Motorista'},
    Telefone: {title: 'Telefone'},
    Aplicativo: {title: 'Aplicativo'},
    Veiculo:  {title: 'Veiculo'},
    Origem: {title: 'Origem'},
    Destino: {title: 'Destino'},
    Operacao:  {title: 'Operacao'},
    Venda: {title: 'Venda'},
    }
  },
  mounted () {
    axios
      .get('http://www.mocky.io/v2/5c7552e43100009c20c23450')
      .then(response => (this.rawResponse = response))
      .then()
  },
  components: {
     'box-simple': boxGrid
    // 'techs': Techs,
    // 'footer-component': Footer
  }
};
</script>
