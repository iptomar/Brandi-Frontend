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
      TipoConjunto: '',
      ElementosConstituintes: '',
      Integrado_Em_Conjunto: ['Sim', 'Não'],
      ElementosAcessorios: '',
      AssinaturaAutoria:'',
      InscricaoMontagem:'',
      InscricaoConstr:'',
      ClassPatrimonial:'',
      Estilo:'',
      Epoca: ['Coevo','Tardio','Outra Época','Réplica','Reprodução','Falsificação'],
      Qualidade: ['Excelente','Muito Boa','Boa','Regular','Fraca'],
      Descricao: '',
      Analogia: '',
      Conclusoes: '',
      Autoria: '',
      Datacao: '',
      LocalOrigem: '',
      EstruturaTecnica: '',
      SuperficieTecnica: '',
      EstruturaMaterial: '',
      SuperficieMaterial:''
    },

    schema: {
      fields: [{
        type: 'input',
        inputType: 'text',
        label: 'TipoConjunto',
        model: 'tipoconjunto',
        placeholder: 'Your name',
        featured: true,
        required: true
      }, {
        type: 'input',
        inputType: 'text',
        label: 'ElementosConstituintes',
        model: 'elementosconstituintes',
        required: true,
        validator: VueFormGenerator.validators.string
      }, {
        type: 'select',
        label: 'Integrado_Em_Conjunto',
        model: 'integradoemconjunto',
        values: ['Sim','Não']
      }, {
        type: 'input',
        inputType: 'text',
        label: 'ElementosAcessorios',
        model: 'elementosacessorios',
         required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'AssinaturaAutoria',
        model: 'assinaturaautoria',
         required: true,
        validator: VueFormGenerator.validators.string
      }, 
      {
        type: 'input',
        inputType: 'text',
        label: 'InscricaoMontagem',
        model: 'inscricaomontagem',
         required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'InscricaoConstr',
        model: 'inscricaoConstr',
         required: true,
        validator: VueFormGenerator.validators.string
      },
       {
        type: 'input',
        inputType: 'text',
        label: 'ClassPatrimonial',
        model: 'classpatrimonial',
         required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Estilo',
        model: 'Estilo',
         required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'select',
        label: 'Epoca',
        model: 'epoca',
        values: ['Coevo','Tardio','Outra Época','Réplica','Reprodução','Falsificação'],
      },
      {
        type: 'select',
        label: 'Qualidade',
        model: 'qualidade',
        values: ['Excelente','Muito Boa','Boa','Regular','Fraca'],
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Descricao',
        model: 'descricao',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Analogia',
        model: 'analogia',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Conclusoes',
        model: 'conclusoes',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Autoria',
        model: 'autoria',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Datacao',
        model: 'datacao',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'LocalOrigem',
        model: 'localorigem',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'EstruturaTecnica',
        model: 'estruturatecnica',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'SuperficieTecnica',
        model: 'superficietecnica',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'EstruturaMaterial',
        model: 'estruturamaterial',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'SuperficieMaterial',
        model: 'superficiematerial',
        required: true,
        validator: VueFormGenerator.validators.string
      },]
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