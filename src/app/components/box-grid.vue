<template>
 <div>
    <h3 class="mainTitle">{{box.title}}</h3>
    <p class="mainContent">{{box.content}}</p>
  </div>
</template>

<script>  

export default {
  name: 'boxGrid',
  props: ['box']
};
</script>
