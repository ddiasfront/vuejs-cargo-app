<template>
 <div >
    <h3 >{{box.title}}</h3>
    <p>{{box.content}}</p>
  </div>
</template>

<script>  

export default {
  name: 'boxGrid',
  props: ['box']
};
</script>
