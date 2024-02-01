<template>
  <b-container class="mt-5">
    <div class="overflow-auto">
    <template>
            <b-breadcrumb :items="itemsT"></b-breadcrumb>
          </template>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small></b-table>
  </div>
  </b-container>

</template>
  
<script>
import services from '../services/services'
export default {
  data() {
    return {
      perPage: 3,
      sortBy:"Marca",
      currentPage: 1,
      items: [
      ],
      fields: [
        { key: "brand", label: "Marca", sortable: true },
        { key: "model", label: "Modelo", sortable: true },
        { key: "serie", label: "Serie", sortable: true },
        { key: "year", label: "Año", sortable: true },
        { key: "birthday", label: "Fech. Nac.", sortable: true }
      ],
      itemsT: [

        {
          text: 'Inicio',
          to: { name: 'inicio' }

        },
        {
          text: 'Formulario',
          to: { name: 'formulario' }
        }
      ],
    }
  },
  computed: {
    rows() {
      return this.items.length
    }

  },
  methods:{
    async get() {
      try {
        const data = await services.get(this.currentPage,
          this.perPage,this.sortBy);
        this.items = data.content;
      } catch (error) {
        console.error(error);
      }
    },
   
  },
  mounted() {
this.get();
  }
}
</script>