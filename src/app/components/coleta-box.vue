<template>
    <div>
        <h3>{{coletaData.Coleta.title}}</h3>
        <p>{{coletaDataFinal}}</p>
        <h3>{{coletaData.EntregaAgd.title}}</h3>
        <p>{{coletaData.EntregaAgd.content}}</p>
        <h3>{{coletaData.EntregaCalc.title}}</h3>
        <p>{{coletaData.EntregaCalc.content}}</p>
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
  },
  beforeUpdate() {
      debugger
  }
};
</script>
