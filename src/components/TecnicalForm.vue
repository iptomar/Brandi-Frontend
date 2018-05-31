<template>
  <b-container class="container">
    <h1>Página 4</h1>
    <b-container class="container">
      <b-row class="panel panel-default">
        <b-container class="panel-heading panel-heading-custom" >EXAMES E ANÁLISES</b-container>
          <b-container class="panel-body">
              <vue-form-generator :schema='pagina_4' :options='formOptions'></vue-form-generator>
          </b-container>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import { FieldArray } from 'vfg-field-array';

Vue.component("field-array", FieldArray);

export default {
  components: {
    "vue-form-generator": VueFormGenerator.component,
    "field-array": FieldArray
  },

  data() {
    return {

      // initial model to be populated with data from backend
      // model: {
      //   id: 1,
      //   name: "John Doe",
      //   password: "J0hnD03!x4",
      //   skills: ["Javascript", "VueJS"],
      //   email: "john.doe@gmail.com",
      //   status: true
      // },

      // pagina 4
      pagina_4: {
        fields: [
          {
            type: "checklist",
            label: "Objectivos Gerais",
            model: "objectivos_gerais",
            listBox: true, 
            values: [
                "Identificação de materiais, técnicas e tecnologias de produção",
                "Identificação de intervenções efectuadas no objecto",
                "Caraterização do estado de conservação",
                "Identificação de patologias e agentes de biodeterioração",
                "Datação do objecto e das eventuais intervenções que tenha sido alvo",
                "Ensaio de produtos e materiais a empregar na intervenção"
            ],
          },
          {
            type: 'array',
            label: 'Columns',
            // model: 'columns',
            inputName: "values",
            itemContainerComponent: 'field-array-bootstrap-accordion-item',
            showRemoveButton: true,
            showModeElementUpButton: true,
            showModeElementDownButton: true,
            itemFieldClasses: "form-control",
            itemContainerClasses: "input-group pb-2",
            newElementButtonLabelClasses: "btn btn-outline-dark",
            removeElementButtonClasses: "btn btn-danger input-group-append",
            moveElementUpButtonClasses: "btn btn-outline-dark input-group-append",
            moveElementDownButtonClasses: "btn btn-outline-dark input-group-append",
            newElementButtonLabel: "+ Add Value",
            itemContainerHeader: function(model, schema, index) {
              return "Column " + (index + 1) + (model && model.label ? " (" + model.label + ")" : "");
            },
            items: {
              type: 'object',
              schema: {
                fields: [{
                  type: 'input',
                  inputType: 'text',
                  label: 'Label',
                  // model: 'label',
                },{
                  type: 'input',
                  inputType: 'text',
                  label: 'Field',
                  // model: 'field',
                }]
              }
            }
          },
          {
            type: "textArea",
            label: "Interpretação dos Resultados",
            model: "Interpretacao_Resultados",
            readonly: false,
            rows: 4,
            required: false
          },
          {
            type: "textArea",
            label: "Observações | Conclusões",
            model: "observacoes_conclusoes",
            readonly: false,
            rows: 4,
            required: false
          }
        ]
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    };
  }
};
</script>

<style>
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
html {
  font-family: Tahoma;
  font-size: 14px;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
}

pre {
  overflow: auto;
}
pre .string {
  color: #885800;
}
pre .number {
  color: blue;
}
pre .boolean {
  color: magenta;
}
pre .null {
  color: red;
}
pre .key {
  color: green;
}

h1 {
  text-align: center;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
}

fieldset {
  border: 0;
}

.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border-color: #ddd;
}

.panel-heading-custom {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel-body {
  padding: 15px;
}

.form-control {
    width: 100%;
    max-height: none !important;
}

.form-group > label {
    font-weight: bold !important;
}

.list-row > label {
    display: block;
    text-align: left;
}

.field-checklist .wrapper {
  width: 100%;
}
</style>