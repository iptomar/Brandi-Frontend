

<template>
    
    <b-container class="mainC container">
      <b-row class="panel panel-default">
    <h1>Folha De Obra</h1>
          <b-container class="panel-body">
             <vue-form-generator :schema='folhaDeObra' :options='formOptions'></vue-form-generator>
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

      folhaDeObra: {
        fields: [{ 
        type: 'input',
        inputType: 'text',
        label: 'Nº do processo',
        model: 'nProcesso',
        placeholder: '',
        featured: true,
        required: true
         },{ 
        type: 'input',
        inputType: 'text',
        label: 'Designação',
        model: 'designacao',
        placeholder: '',
        featured: true,
        required: true
         },

        ]
    
},         
       tableData: [
        {
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },{
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },
        {
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },{
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },{
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },
        {
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },
        {
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },
        {
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },
        {
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },
        {
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },
        {
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },
        {
          Data: "",
          Designacao:  "",
          Materiais: "",
          Quantidades: "",
          Duracao: "",
          Tecnico: "",
          Obs: ""
        },                                
      ],


     columns: [
        {
          field: "Data",
          title: "Data",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
        
          field: "Designacao",
          title: "Designação do procedimento",
          width: 400,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "Materiais",
          title: "Materiais e produtos",
          width: 200,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "Quantidades",
          title: "Quantidades",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "Duracao",
          title: "Duração",
          width: 70,
          placeholder :"HH:MM",
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "Tecnico",
          title: "Técnico",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "Obs",
          title: "Observações",
          width: 150,
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



