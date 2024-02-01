<template>
  <div>
    <b-container class="mt-5" fluid>
      <template>
            <b-breadcrumb :items="items"></b-breadcrumb>
          </template>
      <b-row>
        <b-col>
        
        </b-col>
        <b-col>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Marca" label-for="input-1">
              <b-form-input id="input-1" v-model="form.Marca" type="text" placeholder="Ingresa la marca"
                required></b-form-input>
              <b-form-invalid-feedback :state="validation">
                Sin caracteres especiales
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-2" label="Modelo" label-for="input-2">
              <b-form-input id="input-2" v-model="form.Modelo" placeholder="Ingresa el modelo" required
                type="text"></b-form-input>
              <b-form-invalid-feedback :state="validationM">
                Sin caracteres especiales
              </b-form-invalid-feedback>
            </b-form-group>


            <b-form-group id="input-group-3" label="Modelo" label-for="input-3">
              <b-form-input id="input-3" v-model="form.Año" placeholder="Ingresa el año" required
                type="text"></b-form-input>
              <b-form-invalid-feedback :state="validateDate">
                La fecha debe ser menor a la actual
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-4" label="Modelo" label-for="input-4">
              <b-form-input id="input-4" v-model="form.Serie" placeholder="Ingresa la serie" required
                type="text"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>
  
<script>
export default {
 
  data() {
    return {
      form: {
        Marca: '',
        Modelo: '',
        Año: '',
        Serie: '',
        checked: []
      },
      show: true,
      items: [

{
  text: 'Paginacion',
  to: { name: 'paginacion' }

},
{
  text: 'Paginacion',
  to: { name: 'paginacion' }
}
],
    }
  },
  computed: {
    validation() {
      var re = /[A-Za-z0-9]/;
      return re.test(this.form.Marca)
    },
    validationM() {
      var re = /[A-Za-z0-9]/;
      return re.test(this.form.Modelo)
    },
    validateDate() {
      var dateNow = Date.now;
      return this.año > dateNow
    }
  },

  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      this.form.Marca = ''
      this.form.Modelo = ''
      this.form.Año = null
      this.form.Serie = ''
      this.form.checked = []
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },

  },

}
</script>