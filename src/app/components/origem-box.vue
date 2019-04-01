<template>
    <div>
        <h3 class="mainTitle">{{origemData.title}}</h3>
        <p class="mainContent">{{origemData.content.address + ' ' 
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
