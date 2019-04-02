<template>
  <div class="wrapper">
    <header class="row">
      <div class="col col-md-12 cliente">
        <h1>{{cliente.title}}</h1>
        <span>{{cliente.id}}</span>
      </div>
    </header>
    <main class="row justify-content-start">
      <div class="row contentbox col-md-7 justify-content-start">
        <div class="col-md-6">
          <box-simple v-bind:box="cargoData.IdCargo"></box-simple>
          <box-simple v-bind:box="cargoData.PedidoCliente"></box-simple>
          <box-simple v-bind:box="cargoData.Telefone"></box-simple>
          <app-box v-bind:appBoxData="cargoData.Aplicativo"></app-box>
          <veiculo-box v-bind:veiculoData="cargoData.Veiculo"></veiculo-box>
          <origem-box v-bind:origemData="cargoData.Origem"></origem-box>
          <origem-box v-bind:origemData="cargoData.Destino"></origem-box>
          <box-simple v-bind:box="cargoData.Operacao"></box-simple>
          <box-simple v-bind:box="cargoData.Venda"></box-simple>
        </div>
        <div class="col-md-6">
          <coleta-box v-bind:coletaData="coletaData"></coleta-box>
          <documents-box v-bind:documentsData="documentsData"></documents-box>
          <pagamentos-box v-bind:paymentsData="paymentsData"></pagamentos-box>
          <statushistory-box v-bind:historyStatusData="historyStatusData"></statushistory-box>
        </div>
      </div>
      <div class="col col-md-4">
        <iframe
          width="100%"
          height="375"
          frameborder="0"
          style="border:0"
          :src="mapSource"
          allowfullscreen
        ></iframe>
      </div>
    </main>
  </div>
</template>

<script>
import boxGrid from "./components/box-grid.vue";
import appBox from "./components/application-box.vue";
import veiculoBox from "./components/veiculo-box.vue";
import origemBox from "./components/origem-box.vue";
import coletaBox from "./components/coleta-box.vue";
import documentsBox from "./components/documents-box.vue";
import paymentsBox from "./components/pagamentos-box.vue";
import historyStatuBox from "./components/statushistory-box.vue";
import axios from "axios";
import moment from "moment";

export default {
  moment: moment,
  name: "Main",
  data() {
    return {
      loadingData: false,
      loadError: false,
      rawResponse: "",
      cliente: {
        title: "",
        content: ""
      },
      cargoData: {
        IdCargo: { title: "ID do frete CargoX", icon: "", content: "" },
        PedidoCliente: {
          title: "N de pedido do cliente",
          icon: "",
          content: ""
        },
        Motorista: { title: "Motorista", icon: "", content: "" },
        Telefone: { title: "Telefone", icon: "", content: "", type: "tel" },
        Aplicativo: {
          title: "Aplicativo",
          icon: "",
          content: {
            acesso: "",
            gpsat: "",
            primeiroac: "",
            versao: ""
          }
        },
        Veiculo: { title: "Veiculo", icon: "", content: [] },
        Origem: { title: "Origem", icon: "", content: "" },
        Destino: { title: "Destino", icon: "", content: "" },
        Operacao: { title: "Operacao", icon: "", content: "" },
        Venda: { title: "Venda", icon: "", content: "" }
      },
      coletaData: {
        Coleta: {
          title: "Coleta Agendada",
          content: ""
        },
        EntregaAgd: {
          title: "Entrega Agendada",
          content: ""
        },
        EntregaCalc: {
          title: "Entrega Calculada",
          content: ""
        },
        EntregaMan: {
          title: "Entrega Manual",
          content: ""
        }
      },
      documentsData: "",
      paymentsData: {},
      historyStatusData: {},
      mapSource: ''
    };
  },
  created() {
    axios
      .get("http://www.mocky.io/v2/5c7552e43100009c20c23450")
      .then(response => {
        this.fullFillData(response);
        this.fullFillVeiculo(response.data.trucks);
      })
      .catch(error => {
        console.log(error);
        this.loadError = true;
      })
      .finally(
        () => (this.loadingData = false),
        console.log(
          this.cargoData,
          "cargoData",
          this.rawResponse,
          "fullresponse",
          this,
          "alldata"
        )
      );
  },
  methods: {
    fullFillData(response) {
      (this.loadingData = true),
        (this.rawResponse = response.data),
        (this.cargoData.IdCargo.content = response.data.id),
        (this.cargoData.PedidoCliente.content =
          response.data.customer_tracking_number),
        (this.cargoData.Motorista.content = response.data.trucker.name),
        (this.cargoData.Telefone.content = '+' + response.data.trucker.phone.slice(0,2) + ' ' + '(' + response.data.trucker.phone.slice(2,4) + ')' + ' ' + response.data.trucker.phone.slice(4,9) + '-' + response.data.trucker.phone.slice(9,15)),
        (this.cargoData.Aplicativo.content.acesso =
          response.data.trucker.last_app_open_at),
        (this.cargoData.Aplicativo.content.gpsat =
          response.data.trucker.last_app_update_at),
        (this.cargoData.Aplicativo.content.primeiroac =
          response.data.trucker.first_login_at),
        (this.cargoData.Aplicativo.content.versao =
          response.data.trucker.app_version),
        (this.cargoData.Origem.content = response.data.origin),
        (this.cargoData.Destino.content = response.data.destination),
        (this.cargoData.Operacao.content = response.data.trucker_seeker.name),
        (this.cargoData.Venda.content = response.data.salesperson.name),
        (this.coletaData.Coleta.content = response.data.pickup_date),
        (this.coletaData.EntregaAgd.content = moment
          .unix(response.data.delivery_date)
          .isValid()
          ? moment.unix(response.data.delivery_date).format("DD-MM-YYYY hh:mm")
          : "Sem Data"),
        (this.coletaData.EntregaCalc.content = moment
          .unix(response.data.estimated_time_of_arrival)
          .isValid()
          ? moment
              .unix(response.data.estimated_time_of_arrival)
              .format("DD-MM-YYYY hh:mm")
          : "Sem Data"),
        (this.coletaData.EntregaMan.content =
          response.data.manual_input_estimated_time_of_arrival),
        (this.documentsData = response.data.documents),
        (this.paymentsData = response.data.payments),
        (this.historyStatusData = response.data.status_history),
        (this.cliente.title = response.data.customer.name),
        (this.cliente.id = "ID do cliente" + " " + response.data.customer.id),
        (this.mapSource = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyAF7iXFaYH0yz4OKsU0g4VH8dA3WpopR14&origin=${response.data.origin.city}&destination=${response.data.destination.city}&avoid=tolls|highways`);
        
    },
    fullFillVeiculo(veiculos) {
      veiculos.forEach(veiculo => {
        this.cargoData.Veiculo.content.push({
          nome: veiculo.type.name,
          placa: veiculo.plate
        });
      });
    }
  },
  components: {
    "box-simple": boxGrid,
    "app-box": appBox,
    "veiculo-box": veiculoBox,
    "origem-box": origemBox,
    "coleta-box": coletaBox,
    "documents-box": documentsBox,
    "pagamentos-box": paymentsBox,
    "statushistory-box": historyStatuBox
  }
};
</script>
 