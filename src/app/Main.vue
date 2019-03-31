<template>
  <div class="mainbg">
    <box-simple v-bind:box="cargoData.IdCargo"></box-simple>
    <box-simple v-bind:box="cargoData.PedidoCliente"></box-simple>
    <box-simple v-bind:box="cargoData.Telefone"></box-simple>
    <app-box v-bind:appBoxData="cargoData.Aplicativo"></app-box>
    <box-simple v-bind:box="cargoData.Veiculo"></box-simple>
  </div>
</template>

<script>
import boxGrid from './components/box-grid.vue'
import appBox from './components/application-box.vue'
import axios from 'axios'

export default {
  name: 'Main',
  data() {
    return {
      loadingData: false,
      loadError: false,
      rawResponse: '',
      cargoData: {
        IdCargo: {title: 'ID do frete CargoX', icon: '', content: '' },
        PedidoCliente: {title: 'N de pedido do cliente', icon: '', content: '' },
        Motorista: {title: 'Motorista', icon: '', content: '' },
        Telefone: {title: 'Telefone', icon: '', content: '' },
        Aplicativo: {
          title: 'Aplicativo', 
          icon: '', 
          content: {
            acesso: '',
            gpsat: '',
            primeiroac: '',
            versao: ''
          }
        },
        Veiculo:  {title: 'Veiculo', icon: '', content: [
        ]},
        Origem: {title: 'Origem', icon: '', content: ''},
        Destino: {title: 'Destino', icon: '', content: ''},
        Operacao:  {title: 'Operacao', icon: '', content: ''},
        Venda: {title: 'Venda', icon: '', content: '' },
      },
      ColetaData: {
        Coleta: '',
        EntregaAgd: '',
        EntregaCalc: '',
        EntregaMan: ''
      },
      Documentos: {
        cte: null,
        mdfe: null,
        contrato: null,
        ciot: null,
      },
      Pagamentos: {
        
      }
    }
  },
  created() {
     axios
      .get('http://www.mocky.io/v2/5c7552e43100009c20c23450')
      .then(response => {
        this.fullFillData(response);
        this.fullFillVeiculo(response.data.trucks);
      }).catch(error => {
        console.log(error)
        this.loadError = true
      }).finally(() => this.loadingData = false, console.log(this.cargoData, 'cargoData', this.rawResponse, 'fullresponse', this, 'alldata'))
  },
  methods: {
   fullFillData(response) {
      this.loadingData = true,
      this.rawResponse = response.data,
      this.cargoData.IdCargo.content = response.data.id,
      this.cargoData.PedidoCliente.content = response.data.customer_tracking_number,
      this.cargoData.Motorista.content = response.data.trucker.name,
      this.cargoData.Telefone.content = response.data.trucker.phone,
      this.cargoData.Aplicativo.content.acesso = response.data.trucker.last_app_open_at,
      this.cargoData.Aplicativo.content.gpsat = response.data.trucker.last_app_update_at,
      this.cargoData.Aplicativo.content.primeiroac = response.data.trucker.first_login_at,
      this.cargoData.Aplicativo.content.versao = response.data.trucker.app_version,
      this.cargoData.Origem.content = response.data.origin,
      this.cargoData.Destino.content = response.data.destination,
      this.cargoData.Operacao.content = response.data.trucker_seeker.name,
      this.cargoData.Venda.content = response.data.salesperson.name
   },
   fullFillVeiculo(veiculos) {
     veiculos.forEach(veiculo => {
       this.cargoData.Veiculo.content.push({
         nome: veiculo.type.name,
         placa: veiculo.plate
       })
     })
   }
  },
  components: {
     'box-simple': boxGrid,
     'app-box': appBox
    // 'techs': Techs,
    // 'footer-component': Footer
  }
};
</script>
 