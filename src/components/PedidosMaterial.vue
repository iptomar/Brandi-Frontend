    <template>
    <b-container class="container">
    <h1>Pedido de Material </h1>
    <b-row class="panel panel-default">
        <b-container class="panel-heading panel-heading-custon">Pedido de Material</b-container>
        <b-container class="panel-body">
            <vue-form-generator :schema='pedido_material' :options='formOptions'></vue-form-generator>
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
        return{
            model:{
                //Nome do Tecnico
                NomeTecnico:"",
                //Tipo do Material
                TipoMaterial:["Ferramenta","Outro"],
                //Nome do Material
                NomeMaterial:"",
                //peça para qual o material é pedido para ser restaurado
                Peca:"",
                //Justificação do uso do material
                Justificacao:"",
                
            },

            pedido_material:{
                    fields:[{
                    type:"input",
                    inputType:"Text",
                    label:"Nome",
                    model:"NomeTecnico",
                    placeholder:"O Seu nome",
                    required:true
                },{
                    type:"select",
                    label:"Tipo do Material",
                    model:"TipoMaterial",
                    values:['Ferramenta','Outro'],
                    required:true
                },{
                    type:"input",
                    inputType:"Text",
                    label:"Nome do Material a ser usado para restaurar a peça",
                    model:"NomeMaterial",
                    placeholder:"Escreva aqui o nome do material a ser usado para restaurar a peça",
                    required:true
                },{
                    type:"input",
                    inputType:"text",
                    label:"Nome da Peça a ser restaurada",
                    model:"Peca",
                    placeholder:"Escreva aqui o nome da peça a ser restaurada",
                    required:true
                },{
                    type:"input",
                    inputType:"text",
                    label:"Justificação do uso do material",
                    model:"Justificacao",
                    placeholder:"Escreva o porquê que quer usar este material no restauro da peça",
                    required:true
                }],
                formOptions: {
                validateAfterLoad: true,
                validateAfterChanged: true
            },

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

.form-group>label {
    font-weight: bold !important;
}

.list-row>label {
    display: block;
    text-align: left;
}

.field-checklist .wrapper {
    width: 100%;
}
</style>