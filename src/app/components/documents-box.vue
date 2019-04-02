<template>
  <div>
    <h3 class="mainTitle">Documentos</h3>
    <p>
      <span
        class="mainContent flagDoc"
        v-for="(document, key) in documentsData"
        v-bind:key="key"
        v-bind:class="{active: document.status == 'emitted'}"
      >{{document.name == 'cte' ? 'CTe' : document.name == 'mdfe' ? 'MDFe' : document.name == 'ct' ? 'Contrato' : document.name == 'ciot' ? 'CIOT' : ''}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "documentsBox",
  props: ["documentsData"]
};
</script>
