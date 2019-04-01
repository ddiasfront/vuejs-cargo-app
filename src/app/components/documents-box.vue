<template>
 <div >
     <h3>Documentos</h3>
    <p v-for="(document, key) in documentsData" v-bind:key="key" v-bind:class="{active: document.status == 'emitted'}" >
        {{document.name == 'cte' ? 'CTe' : document.name == 'mdfe' ? 'MDFe' : document.name == 'ct' ? 'Contrato' : document.name == 'ciot' ? 'CIOT' : ''}}
    </p>
  </div>
</template>

<script>  

export default {
  name: 'documentsBox',
  props: ['documentsData']
};
</script>
