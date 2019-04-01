<template>
 <div >
     <h3>Status</h3>
     <p>{{historyStatusData}}</p>
    <p v-for="(history, key) in historyStatusData" v-bind:key="key">
        {{history.translation}}
    </p>
  </div>
</template>

<script>  

export default {
  name: 'historyStatuBox',
  props: ['historyStatusData']
};
</script>
