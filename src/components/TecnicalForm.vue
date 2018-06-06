<template>
  <b-container class="container">
    <h1>Página 4</h1>
    <b-container class="container">
      <b-row class="panel panel-default">
        <b-container class="panel-heading panel-heading-custom" >EXAMES E ANÁLISES</b-container>
          <b-container class="panel-body">
              <vue-form-generator :schema='pagina_4_1' :options='formOptions'></vue-form-generator>
              <v-table
                is-horizontal-resize
                style="width:100%"
                :columns="columns"
                :table-data="tableData"
                row-hover-color="#eee"
                row-click-color="#edf7ff"
                :cell-edit-done="cellEditDone"
              >
              </v-table>
              <vue-form-generator :schema='pagina_4_2' style="margin-top: 10px" :options='formOptions'></vue-form-generator>
          </b-container>
      </b-row>
    </b-container>
      <h1>Página 6</h1>
      <b-container class="container">
        <b-row class="panel panel-default">
        <b-container class="panel-heading panel-heading-custom" >INTERVENÇÕES ANTERIORES</b-container>
        <b-container class="panel-body">
            <vue-form-generator :schema='schema61' :options='formOptions'></vue-form-generator>
        </b-container>
        <b-container class="panel-body">
          <vue-form-generator :schema='schema62' :options='formOptions'></vue-form-generator>
        </b-container>
        <b-container class="panel-body">
          <vue-form-generator :schema='schema63' style="margin-top: 10px" :options='formOptions'></vue-form-generator>
        </b-container>
      </b-row>
      </b-container>
    </b-container>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";

export default {
  components: {
    "vue-form-generator": VueFormGenerator.component
  },

  data() {
    return {
      model: {
        id: 1,
        name: "John Doe",
        password: "J0hnD03!x4",
        skills: ["Javascript", "VueJS"],
        email: "john.doe@gmail.com",
        status: true
      },

      // pagina 4
      pagina_4_1: {
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
            ]
          }
        ]
      },

      pagina_4_2: {
        fields: [
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

      // START schema para a página 6
      schema61: {
        fields: [
          {
            type: "textArea",
            label: "Estrutura",
            model: "estrutura",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
          },
          {
            type: "textArea",
            label: "Superfície",
            model: "superficie",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
            //validator: VueFormGenerator.validators.string
          },
          {
            type: "textArea",
            label: "Elementos Acessórios",
            model: "elementosacessorios",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
            //validator: VueFormGenerator.validators.string
          }
        ]
      },
      schema62: {
        fields: [
          {
            label: "Observações | Conclusões",
            type: "textArea",
            model: "conclusao",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
          }
        ]
      },
      //to add: another check button && seção checkbox on same level
      schema63: {
        fields: [
          {
            type: "checkbox",
            label: "Preservação",
            model: "Preservacao",
            default: true
          },
          {
            type: "checkbox",
            label: "Conservação",
            model: "Conservacao",
            default: true
          },
          {
            type: "checkbox",
            label: "Restauro",
            model: "Restauro",
            default: true
          },
          {
            type: "textArea",
            label: "Aspectos Específicos",
            model: "AspectosEspecificos",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
          },
          {
            type: "checkbox",
            label: "Preservação",
            model: "Preservacao",
            default: true
          },
          {
            type: "checkbox",
            label: "Conservação",
            model: "Conservacao",
            default: true
          },
          {
            type: "checkbox",
            label: "Restauro",
            model: "Restauro",
            default: true
          }
        ]
      },
      // END schema para a página 6

      // START página 7
      pagina_7: {
        fields: [
          {
            type: "radios",
            label: "Tipo de intervenção proposta pelo conservador-restauro",
            model: "pcr",
            values: ["Preservação", "Conservação", "Restauro"]
          },
          {
            label: "Página 5"
          },
          {
            type: "textArea",
            label: "Deterioração Física",
            inputType: "text",
            model: "estruturafisica",
            placeholder: "Estrutura"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "superficiefisica",
            placeholder: "Superfície"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "elementosfisica",
            placeholder: "Elementos Acessórios"
          },
          {
            type: "textArea",
            label: "Deterioração Biológica ",
            inputType: "text",
            model: "estruturabiologica",
            placeholder: "Estrutura"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "superficiebiologica",
            placeholder: "Superfície"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "elementosbiologica",
            placeholder: "Elementos Acessórios"
          },
          {
            type: "textArea",
            label: "Conclusão",
            inputType: "text",
            model: "conclusaoestado"
          },
          {
            label: "Página 7"
          },
          {
            type: "textArea",
            label: "Proposta metodológica de intervenção",
            model: "estrutura",
            hint: "Max 255 characters",
            max: 255,
            placeholder: "Estrutura:",
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            model: "superficie",
            hint: "Max 255 characters",
            max: 255,
            placeholder: "Superfície:",
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            model: "elementos_acessorios",
            hint: "Max 255 characters",
            max: 255,
            placeholder: "Elementos Acessórios:",
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            label: "Recursos (Materiais | Técnicos | Tecnológicos)",
            model: "recursos_1",
            hint: "Max 255 characters",
            max: 255,
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            model: "recursos_2",
            hint: "Max 255 characters",
            max: 255,
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            model: "recursos_3",
            hint: "Max 255 characters",
            max: 255,
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            label: "Observações | Conclusões",
            model: "observações_conclusoes",
            hint: "Max 255 characters",
            max: 255,
            rows: 4,
            required: true
          },
          {
            type: "input",
            inputType: "date",
            label: "Data da Informação da Proposta:",
            model: "dt1",
            required: true
          },
          {
            type: "input",
            inputType: "date",
            label: "Data da Aceitação da Proposta:",
            model: "dt2",
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Interlocutores do processo",
            model: "interlocutores_do_processo",
            maxlength: 25,
            required: true,
            placeholder: "(IPT)(Client)"
          },
          {
            label: "Página 9"
          },
          {
            type: "input",
            required: true,
            label: "Ref Arquivo",
            inputType: "text",
            model: "refarquivo",
            placeholder: "Referencia"
          },
          {
            type: "textArea",
            label: "Originais Fotográficos",
            inputType: "text",
            model: "originaistipo",
            placeholder: "Tipo"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "originaisref",
            placeholder: "Referências"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "originaisautor",
            placeholder: "Autor"
          },
          {
            type: "textArea",
            label: "Documentação Gráfica",
            inputType: "text",
            model: "doctipo",
            placeholder: "Tipo"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "docref",
            placeholder: "Referências"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "docautor",
            placeholder: "Autor"
          },
          {
            type: "textArea",
            label: "Exames e Análises",
            inputType: "text",
            model: "exametipo",
            placeholder: "Tipo"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "exameref",
            placeholder: "Referências"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "exameautor",
            placeholder: "Autor"
          }
        ]
      },

      tableData: [
        {
          date: "",
          design: "",
          materials: "",
          quantity: "",
          quantity: "",
          duration: "",
          tecnico: "",
          observation: ""
        },
        {
          date: "",
          design: "",
          materials: "",
          quantity: "",
          quantity: "",
          duration: "",
          tecnico: "",
          observation: ""
        },
        {
          date: "",
          design: "",
          materials: "",
          quantity: "",
          quantity: "",
          duration: "",
          tecnico: "",
          observation: ""
        },
        {
          date: "",
          design: "",
          materials: "",
          quantity: "",
          quantity: "",
          duration: "",
          tecnico: "",
          observation: ""
        },
        {
          date: "",
          design: "",
          materials: "",
          quantity: "",
          quantity: "",
          duration: "",
          tecnico: "",
          observation: ""
        },
        {
          date: "",
          design: "",
          materials: "",
          quantity: "",
          quantity: "",
          duration: "",
          tecnico: "",
          observation: ""
        },
        {
          date: "",
          design: "",
          materials: "",
          quantity: "",
          quantity: "",
          duration: "",
          tecnico: "",
          observation: ""
        },
        {
          date: "",
          design: "",
          materials: "",
          quantity: "",
          quantity: "",
          duration: "",
          tecnico: "",
          observation: ""
        }
      ],
      columns: [
        {
          field: "date",
          title: "Data",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          formatter: function(rowData, rowIndex, pagingIndex, field) {
            return `<span class='cell-edit-color'>${rowData[field]}</span>`;
          },
          isResize: true
        },

        {
          field: "design",
          title: "Designação do procedimento",
          width: 230,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "materials",
          title: "Materiais e produtos",
          width: 200,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "quantity",
          title: "Quantidades",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "duration",
          title: "Duração",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "tecnico",
          title: "Técnico",
          width: 130,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "observation",
          title: "Observações",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        }
      ],

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    };
  },
  methods: {
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue;
    }
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