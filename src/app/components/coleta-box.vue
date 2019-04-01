<template>
    <div>
        <h3 class="mainTitle">{{coletaData.Coleta.title}}</h3>
        <p class="mainContent">{{coletaDataFinal}}</p>
        <h3 class="mainTitle">{{coletaData.EntregaAgd.title}}</h3>
        <p class="mainContent">{{coletaData.EntregaAgd.content}}</p>
        <h3 class="mainTitle">{{coletaData.EntregaCalc.title}}</h3>
        <p class="mainContent">{{coletaData.EntregaCalc.content}}</p>
    </div>
</template>
<script>  
import moment from "moment";

export default {
  moment: moment,
  name: 'coletaBox',
  props: ['coletaData'],
  data() {
      return {
          coletaDataFinal: '',
          coletaAgdFinal: '',
          entregaCalcFinal: ''
      }
  },
  updated() {
       this.coletaDataFinal = this.coletaData.Coleta.content.slice(5,7) + '/' + this.coletaData.Coleta.content.slice(8,10)  + '/' + this.coletaData.Coleta.content.slice(0,4);
  }
};
</script>
