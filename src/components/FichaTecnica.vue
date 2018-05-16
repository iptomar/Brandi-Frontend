<template>
    <b-container class="bv-example-row">
        <b-row class="text-center">
            <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
        </b-row>
    </b-container>
</template>

<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'

Vue.use(VueFormGenerator)

export default {
  components: {
    'vue-form-generator': VueFormGenerator.component
  },

  data() {
      return {
    model: {
      Dseginacao: '',
      NProcessoLCRM: '', 
      NProcessoCEARC: '',
      Coordenacao:'',
      DataDeAberturaProcesso:'',
      DataDeEntradanoLCRM:'',
      DataDeEntradaDoCEARC:'',
      FotoObjeto:'',
      FormatoFoto:['png'],
      SuperCategoria:'',
      Categoria:'',
      SubCategoria:'',
      Localizacao:'',
      status: true
    },

    schema: {
      fields: [ { 
        type: 'input',
        inputType: 'text',
        label: 'Deseginação do objeto',
        model: 'Deseginacao',
        placeholder: 'Insira a desinação do Objeto',
        featured: true,
        required: true
      }, {
        type: 'input',
        inputType: 'text',
        label: 'Processo LCRM Nº',
        model: 'NProcessoLCRM',
        placeholder: 'Insira o numero de processo LCRM',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'text',
        label: 'Processo CEARC Nº',
        model: 'NProcessoCEARC',
        placeholder: 'Insira o numero de processo CEARC',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'text',
        label: 'Coordenação/Direção Técnica da Intervenção:',
        model: 'Coordenacao',
        placeholder: 'Professor Adjunto | Conservador-restaurador',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'date',
        label: 'Data de Abertura Processo',
        model: 'DataDeAberturaProcesso',
        placeholder: '',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'date',
        label: 'Data de entrada no LCRM: ',
        model: 'DataDeEntradanoLCRM',
        placeholder: '',
        featured: true,
        required: false
      },
      {
        type: 'input',
        inputType: 'date',
        label: 'Data de entrada do CEARC: ',
        model: 'DataDeEntradaDoCEARC',
        placeholder: '',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'file',
        label: 'Registo Fotográfico Identificativo do Objecto: ',
        model: 'FotoObjeto',
        placeholder: '',
        featured: true,
        required: true
      },{
        type: 'select',
        inputType: 'text',
        label: 'Formato',
        model: 'FormatoFoto',
        featured: true,
        required: true,
        values: ['JPG', 'PNG','JEPG']
        
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Super-Categoria',
        model: 'SuperCategoria',
        featured: true,
        required: true
      },{
        type: 'input',
        inputType: 'text',
        label: 'Categoria',
        model: 'Categoria',
        featured: true,
        required: true
      },{
        type: 'input',
        inputType: 'text',
        label: 'SubCategoria',
        model: 'SubCategoria',
        featured: true,
        required: true
      },{
        type: 'input',
        inputType: 'text',
        label: 'Localização',
        model: 'Localizacao',
        featured: true,
        required: true
      },
     
      ]
    },

    formOptions: {
      validateAfterLoad: true,
      validateAfterChanged: true
    }
  }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
