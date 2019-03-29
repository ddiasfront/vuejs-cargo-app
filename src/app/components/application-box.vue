<template>
 <div >
    <h3>{{ appBoxData.title }}</h3>
    <p v-if="typeof this.appBoxData.content.acesso === 'string'">{{appBoxData.content.acesso}} </p>
    <p v-if="typeof this.appBoxData.content.gpsat === 'string'">{{appBoxData.content.gpsat}}</p>
    <p v-if="typeof this.appBoxData.content.gpsat === 'string'">{{appBoxData.content.primeiroac}}</p>
    <p v-if="typeof this.appBoxData.content.gpsat === 'string'">{{appBoxData.content.versao}}</p>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  moment: moment,
  name: 'appBox',
  props: ['appBoxData'],
    data() {
      return { 
        acessData: ''
      }
  },
  updated() {
    if ( this.appBoxData.content.acesso !== undefined ) {
    var date = moment(this.appBoxData.content.acesso)
    console.log(date);
    console.log(date.format('DD/MM/YYYY'))
    debugger
    
    }
   
  },
  methods: {
    formatDate(date) {
      return moment(this.appBoxData.content.acesso).format('DD/MM/YYYY')
    }
  }
};
</script>
