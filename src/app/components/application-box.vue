<template>
  <div>
    <h3 class="mainTitle">{{ appBoxData.title }}</h3>
    <ul>
      <li class="mainContent" v-if="typeof this.appBoxData.content.acesso === 'string'">{{acessDate}}</li>
      <li class="mainContent" v-if="typeof this.appBoxData.content.acesso === 'string'">{{gpsDate}}</li>
      <li class="mainContent" v-if="typeof this.appBoxData.content.acesso === 'string'">{{primeiroAcDate}}</li>
      <li class="mainContent" v-if="typeof this.appBoxData.content.acesso === 'string'">{{versaoApp}}</li>
    </ul>
  </div>
</template>

<script>
import moment from "moment";

export default {
  moment: moment,
  name: "appBox",
  props: ["appBoxData"],
  data() {
    return {
      acessDate: "",
      gpsDate: "",
      primeiroAcDate: "",
      versaoApp: ""
    };
  },
  updated() {
    if (this.appBoxData.content.acesso !== undefined) {
      var date = moment(this.appBoxData.content.acesso);
      this.acessDate = moment(this.appBoxData.content.acesso).isValid()
        ? "Acesso " + this.formatDate(date)
        : "";
    }
    if (this.appBoxData.content.gpsat !== undefined) {
      this.gpsDate = this.appBoxData.content.gpsat
        ? "GPS Atualizado " + this.appBoxData.content.gpsat
        : "";
    }
    if (this.appBoxData.content.primeiroac !== undefined) {
      var primeiroAcDate = moment(this.appBoxData.content.primeiroac);
      this.primeiroAcDate = moment(this.appBoxData.content.primeiroac).isValid()
        ? "Primeiro aceso em  " + this.formatDate(primeiroAcDate)
        : "";
    }
    if (this.appBoxData.content.versao !== undefined) {
      this.versaoApp = this.appBoxData.content.versao
        ? "Versão v1.40.1 " + this.appBoxData.content.versao
        : "";
    }
  },
  methods: {
    formatDate(date) {
      return moment(this.appBoxData.content.acesso).format("DD/MM/YYYY");
    }
  }
};
</script>
