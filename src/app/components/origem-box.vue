<template>
    <div>
        <h3>{{origemData.title}}</h3>
        <p>{{origemData.content.address + ' ' 
      +  origemData.content.number + ' ' 
      +  origemData.content.city + ' - ' 
      +  origemData.content.state + ' - CEP:' 
      + origemData.content.zip_code }}</p>
    </div>
</template>
<script>  

export default {
  name: 'origemBox',
  props: ['origemData']
};
</script>
