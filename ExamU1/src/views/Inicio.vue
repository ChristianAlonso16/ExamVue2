<template lang="">
    <div>
    <b-container fluid>
        <template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>
    </b-container>
    <b-container class="mt-5">
        <hi>Inicio</hi>
    </b-container>
</div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          
          {
            text: 'Formulario',
            to: { name: 'formulario' }
            
          },
          {
            text: 'Paginacion',
            to: { name: 'paginacion' }
          }
        ]
      }
    }
  }
</script>
<style lang="">
    
</style>