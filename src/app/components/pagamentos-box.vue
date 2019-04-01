<template>
 <div >
     <h3>Pagamentos</h3>
    <p v-for="(pay, key) in paymentsData" v-bind:key="key" v-bind:class="{active: pay.status !== 'not_ok'}" >
        {{pay.name == 'adia' ? 'Adiantamento' : pay.name == 'canh' ? 'Canhoto' : pay.name == 'sald' ? 'Saldo' : ''}}
    </p>
  </div>
</template>

<script>  

export default {
  name: 'paymentsBox',
  props: ['paymentsData']
};
</script>
