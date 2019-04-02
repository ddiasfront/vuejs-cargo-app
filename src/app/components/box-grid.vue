<template>
 <div>
    <h3 class="mainTitle">{{box.title}}</h3>
    <p class="mainContent" v-if="box.type === 'tel'">{{box.content}}</p>
    <p class="mainContent" v-else>{{box.content}}</p>
  </div>
</template>

<script>  
export default {
  name: 'boxGrid',
  props: ['box']
};
</script>
