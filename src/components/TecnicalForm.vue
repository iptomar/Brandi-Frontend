<template>
<b-container class="container">
    <b-container class="bv-example-row">

        <span>**************** START PÁGINA 6 ****************</span>
        <b-container class="container">
            <b-container class="panel panel-default">
                <b-container class="panel-heading"> Intervenções anteriores </b-container>
                <b-container class="panel-body">
                    <vue-form-generator :schema='schema61' :options='formOptions'></vue-form-generator>
                </b-container>
            </b-container>
        </b-container>

        <b-container class="container">
            <b-container class="panel panel-default">
                <b-container class="panel-heading"> Observações | Conclusões </b-container>
                <b-container class="panel-body">
                    <vue-form-generator :schema='schema62' :options='formOptions'></vue-form-generator>
                </b-container>
            </b-container>
        </b-container>

        <b-container class="container">
            <b-container class="panel panel-default">
                <b-container class="panel-heading"> Vontade expressa do proprietário ou do Dono da obra </b-container>
                <b-container class="panel-body">
                    <vue-form-generator :schema='schema63' :options='formOptions'></vue-form-generator>
                </b-container>
            </b-container>
        </b-container>

        <span> **************** PÁGINA 7 ****************</span>

        <b-container class="container">
            <b-row class="panel panel-default">
                <b-container class="panel-heading"> Tipo de intervenção proposta pelo conservador-restauro </b-container>
                <b-container class="panel-body">
                    <vue-form-generator :schema='schema71' :options='formOptions'></vue-form-generator>
                </b-container>
            </b-row>
        </b-container>

        <b-container class="container">
            <b-container class="panel panel-default">
                <b-row class="panel-body">
                  <!--  <b-table striped hover :items="items72" :fields="fields72" :schema='schema72l' :options='formOptions'></b-table>
                  -->

                    <b-col>
                        <p class="card-text">Proposta metodológica de intervenção</p>
                    <vue-form-generator :schema='schema72l' :options='formOptions'></vue-form-generator>
                    </b-col>

                    <b-col>
                       <p class="card-text">Recursos Materiais | Técnicos | Tecnológicos</p>
                    <vue-form-generator :schema='schema72r' :options='formOptions'></vue-form-generator>
                  </b-col>
                </b-row>
            </b-container>
        </b-container>

        <b-container class="container">
            <b-container class="panel panel-default">
                <b-container class="panel-heading"> Observações | Conclusões </b-container>
                <b-container class="panel-body">
                    <vue-form-generator :schema='schema73' :options='formOptions'></vue-form-generator>
                </b-container>
            </b-container>
        </b-container>

        <b-container class="container">
            <b-container class="panel panel-default">
                <b-container class="panel-body">
                    <vue-form-generator :schema='schema74' :options='formOptions'></vue-form-generator>
                </b-container>
            </b-container>
        </b-container>

    </b-container>
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

            //pagina 7
            schema71: {

                fields: [{
                    type: "radios",
                    label: "",
                    model: "pcr",
                    values: [
                        "Preservação",
                        "Conservação",
                        "Restauro"
                    ]
                }]
            },

            schema72l: {
                fields: [{
                    type: "textArea",
                    label: "Estrutura:",
                    model: "estrutura",
                    rows: 4,
                    required: true
                }, {
                    type: "textArea",
                    model: "superficie",
                    label: "Superfície:",
                    rows: 4,
                    required: true
                }, {
                    type: "textArea",
                    model: "elementos_acessorios",
                    label: "Elementos Acessórios:",
                    rows: 4,
                    required: true
                }]
            },
            schema72r: {
                fields: [{
                    type: "textArea",
                    model: "recursos_1",
                    label: "",
                    rows: 4,
                    required: true
                }, {
                    type: "textArea",
                    model: "recursos_2",
                      label: "",

                    rows: 4,
                    required: true
                }, {
                    type: "textArea",
                    model: "recursos_3",
                    rows: 4,
                    required: true
                }]
            },
            schema73: {
                fields: [{

                    type: "textArea",
                    model: "observações_conclusoes",
                    rows: 4,
                    required: true
                }]
            },
            schema74: {

                fields: [{
                    type: "input",
                    inputType: "date",
                    label: "Data da Informação da Proposta:",
                    model: "dt1",
                    required: true
                }, {
                    type: "input",
                    inputType: "date",
                    label: "Data da Aceitação da Proposta:",
                    model: "dt2",
                    required: true
                }, {
                    type: "input",
                    inputType: "text",
                    label: "Interlocutores do processo",
                    model: "interlocutores_do_processo",
                    maxlength: 25,
                    required: true
                }]
            },
            // START schema para a página 6
            schema61: {
                fields: [{
                    type: "textArea",
                    label: "Estrutura",
                    model: "estrutura",
                    readonly: false,
                    featured: true,
                    required: true,
                    disabled: false
                }, {
                    type: "textArea",
                    label: "Superfície",
                    model: "superficie",
                    readonly: false,
                    featured: true,
                    required: true,
                    disabled: false,
                    //validator: VueFormGenerator.validators.string
                }, {
                    type: "textArea",
                    label: "Elementos Acessórios",
                    model: "elementosacessorios",
                    readonly: false,
                    featured: true,
                    required: true,
                    disabled: false,
                    //validator: VueFormGenerator.validators.string
                }]
            },
            schema62: {
                fields: [{
                    type: "textArea",
                    model: "conclusao",
                    readonly: false,
                    featured: true,
                    required: true,
                    disabled: false
                }]
            },
            //to add: another check button && seção checkbox on same level
            schema63: {
                fields: [{
                    type: "textArea",
                    label: "Tipo de intervenção",
                    model3: "conclusao",
                    readonly: false,
                    featured: true,
                    required: true,
                    disabled: false
                }, {
                    type: "textArea",
                    label: "Aspectos Específicos",
                    model3: "AspectosEspecificos",
                    readonly: false,
                    featured: true,
                    required: true,
                    disabled: false
                }, {
                    type: "checkbox",
                    label: "Preservação",
                    model3: "Preservacao",
                    default: true
                }, {
                    type: "checkbox",
                    label: "Conservação",
                    model: "Conservacao",
                    default: true
                }, {
                    type: "checkbox",
                    label: "Restauro",
                    model: "Restauro",
                    default: true
                }]
            },
            // END schema para a página 6

            formOptions: {
                validateAfterLoad: true,
                validateAfterChanged: true
            }
        };
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
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    border-color: #ddd;
}

.panel-heading {
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

.field-checklist .wrapper {
    width: 100%;
}

</style>

</style>
