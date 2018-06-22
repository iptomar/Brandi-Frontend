

<template>
    
    <b-container class="container">
      <b-row class="panel panel-default">
        <b-container class="panel-heading panel-heading-custom" >TESTE DE EFICÁCIA DOS SOLVENTES NA LIMPEZA/SOLUBILIZAÇÃO DE ESTRATOS E SUJIDADES </b-container>
          <b-container class="panel-body">
             <vue-form-generator :schema='testeSolubilidade' :options='formOptions'></vue-form-generator>
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
          </b-container>
          
          <b-container class="panel-body">
             <vue-form-generator :schema='edentificacao' :options='formOptions'></vue-form-generator>
             <h5>Graus de Eficácia no Processo de Solubilização dos Estratos</h5>
             <v-table 
                is-horizontal-resize
                style="width:100%"
                :columns="columns2"
                :table-data="table2Data"
                row-hover-color="#eee"
                row-click-color="#edf7ff"
               
              >
              </v-table>
          </b-container>
      </b-row>    
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
        IdentificaçãoDoEstrato: '',
        Características: '',
        NumeroFolhaDeTeste:'',
        tecnicoRespnsavel:'',
        data:''
      },

      testeSolubilidade: {
        fields: [{ 
        type: 'input',
        inputType: 'text',
        label: 'Identificação do Estrato/Sujidade',
        model: 'IdentificaçãoDoEstrato',
        placeholder: '',
        featured: true,
        required: true
         },{ 
        type: 'input',
        inputType: 'text',
        label: 'Características',
        model: 'Características',
        placeholder: '',
        featured: true,
        required: true
         },

        ]
    
},         
       tableData: [
        {
          Solventes: "",
          Eficacia:  "",
          obs: "",
        },{
          Solventes: "",
          Eficacia:  "",
          obs: "",
        },
        {
          Solventes: "",
          Eficacia:  "",
          obs: "",
        },{
          Solventes: "",
          Eficacia:  "",
          obs: "",
        },{
          Solventes: "",
          Eficacia:  "",
          obs: "",
        },
        {
          Solventes: "",
          Eficacia:  "",
          obs: "",
        },
        {
          Solventes: "",
          Eficacia:  "",
          obs: "",
        },

        
      ],
        table2Data: [
        {
          check1: "Muito Eficaz",
          check2:  "Eficaz",
          check3: "Eficácia Média",
          check4: "Pouco Eficaz",
          check5: "Eficácia Nula",
        }
      ],

     columns: [
        {
          field: "Solventes",
          title: "Solvente ou Mistura de Solventes",
          width: 300,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
        
          field: "Eficacia",
          title: "Grau de Eficácia Na Solubilização(1-5)",
          width: 200,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "obs",
          title: "Observações",
          width: 300,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        }
      ], 
     

      edentificacao:{
        fields: [{ 
        type: 'input',
        inputType: 'text',
        label: 'Folha de teste Nº',
        model: 'NumeroFolhaDeTeste',
        placeholder: 'Insira o Nº da folha de teste',
        featured: true,
        required: true
         },{ 
        type: 'input',
        inputType: 'text',
        label: 'Técnico Responsável',
        model: 'tecnicoRespnsavel',
        placeholder: 'Insira o nome do técnico responsável',
        featured: true,
        required: true
         },
         { 
        type: 'input',
        inputType: 'date',
        label: 'Data:',
        model: 'data',
        placeholder: '',
        featured: true,
        required: true
         },

        ]       
      }, 
      columns2: [
        {
        field: "check1",
          title: "1",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: false,
          isResize: true
        },        {
          field: "check2",
          title: "2",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: false,
          isResize: true
        },     {
          field: "check3",
          title: "3",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: false,
          isResize: true
        },{
          field: "check4",
          title: "4",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: false,
          isResize: true
        },{
          field: "check5",
          title: "5",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: false,
          isResize: true
        },
       
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



