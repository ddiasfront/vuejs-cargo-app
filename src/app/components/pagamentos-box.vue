<template>
 <div >
     <h3 class="mainTitle">Pagamentos</h3>
    <span class="mainContent flagDoc" v-for="(pay, key) in paymentsData" v-bind:key="key" v-bind:class="{active: pay.status !== 'not_ok'}" >
        {{pay.name == 'adia' ? 'Adiantamento' : pay.name == 'canh' ? 'Canhoto' : pay.name == 'sald' ? 'Saldo' : ''}}
    </span>
  </div>
</template>

<script>  

export default {
  name: 'paymentsBox',
  props: ['paymentsData']
};
</script>
