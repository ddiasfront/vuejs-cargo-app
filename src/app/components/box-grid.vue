<template>
 <div >
    <h3 v-if="typeof this.box.title === 'string'">{{box.title}}</h3>
    <p v-if="typeof this.box.content === 'string'">{{box.content}}</p>
  </div>
</template>

<script>

export default {
  name: 'boxGrid',
  props: ['box'],
  created() {
    console.log(this.box)
  }
};
</script>
