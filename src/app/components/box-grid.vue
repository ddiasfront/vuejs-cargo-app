<template>
 <div >
      <h3>{{ box.title }}</h3>
      <p v-if="Array.isArray(this.box.content)">Array</p>
    </div>
</template>

<script>

export default {
  name: 'boxGrid',
  props: ['box'],
  created() {
    console.log(this.box)
    debugger
  }
};
</script>
