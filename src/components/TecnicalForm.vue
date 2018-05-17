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
      id: 1,
      name: 'John Doe',
      password: 'J0hnD03!x4',
      skills: ['Javascript', 'VueJS'],
      email: 'john.doe@gmail.com',
      status: true
    },

    schema: {
      fields: [{
        type: 'input',
        inputType: 'text',
        label: 'ID (disabled text field)',
        model: 'id',
        readonly: true,
        disabled: true
      }, {
        type: 'input',
        inputType: 'text',
        label: 'Name',
        model: 'name',
        placeholder: 'Your name',
        featured: true,
        required: true
      }, {
        type: 'input',
        inputType: 'password',
        label: 'Password',
        model: 'password',
        min: 6,
        required: true,
        hint: 'Minimum 6 characters',
        validator: VueFormGenerator.validators.string
      }, {
        type: 'select',
        label: 'Skills',
        model: 'skills',
        values: ['Javascript', 'VueJS', 'CSS3', 'HTML5']
      }, {
        type: 'input',
        inputType: 'email',
        label: 'E-mail',
        model: 'email',
        placeholder: 'Users e-mail address'
      }, {
        type: 'checkbox',
        label: 'Status',
        model: 'status',
        default: true
      }, {
        type: 'checkbox',
        label: 'Status',
        model: 'status',
        default: true
      }, {
        label: 'Página 5'
      }, {
        type: 'textArea',
        label: 'Deterioração Física',
        inputType: 'text',
        model: 'estruturafisica',
        placeholder: 'Estrutura'
      }, {
        type: 'textArea',
        inputType: 'text',
        model: 'superficiefisica',
        placeholder: 'Estrutura'
      },{
        type: 'textArea',
        inputType: 'text',
        model: 'elementosfisica',
        placeholder: 'Estrutura'
      }, {
        type: 'textArea',
        label: 'Deterioração Biológica ',
        inputType: 'text',
        model: 'estruturabiologica',
        placeholder: 'Estrutura'
      }, {
        type: 'textArea',
        inputType: 'text',
        model: 'superficiebiologica',
        placeholder: 'Estrutura'
      },{
        type: 'textArea',
        inputType: 'text',
        model: 'elementosbiologica',
        placeholder: 'Estrutura'
      }, {
        type: 'textArea',
        label: 'Conclusão',
        inputType: 'text',
        model: 'conclusaoestado',
        placeholder: 'Estrutura'
      }, {
        label: 'Página 9'
      }, {
        type: 'input',
        required: true,
        label: 'Ref Arquivo',
        inputType: 'text',
        model: 'refarquivo',
        placeholder: 'Referencia'
      }, {
        type: 'textArea',
        label: 'Originais Fotográficos',
        inputType: 'text',
        model: 'originaistipo',
        placeholder: 'Tipo'
      }, {
        type: 'textArea',
        inputType: 'text',
        model: 'originaisref',
        placeholder: 'Referências'
      }, {
        type: 'textArea',
        inputType: 'text',
        model: 'originaisautor',
        placeholder: 'Autor'
      }, {
        type: 'textArea',
        label: 'Documentação Gráfica',
        inputType: 'text',
        model: 'doctipo',
        placeholder: 'Tipo'
      }, {
        type: 'textArea',
        inputType: 'text',
        model: 'docref',
        placeholder: 'Referências'
      }, {
        type: 'textArea',
        inputType: 'text',
        model: 'docautor',
        placeholder: 'Autor'
      }, {
        type: 'textArea',
        label: 'Exames e Análises',
        inputType: 'text',
        model: 'exametipo',
        placeholder: 'Tipo'
      }, {
        type: 'textArea',
        inputType: 'text',
        model: 'exameref',
        placeholder: 'Referências'
      }, {
        type: 'textArea',
        inputType: 'text',
        model: 'exameautor',
        placeholder: 'Autor'
      }]
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
