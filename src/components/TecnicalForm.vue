<template>
<b-container class="container">
    <b-container class="bv-example-row">
      <!-- Div for form example -->
      <b-container class="panel panel-default">
        <b-container class="panel-heading" > Formulário titulo </b-container>
          <b-container class="panel-body">
              <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
          </b-container>
      </b-container>

      <span>**************** START PÁGINA 6 ****************</span>
      <b-container class="container">
        <b-container class="panel panel-default">
          <b-container class="panel-heading" > Intervenções anteriores </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema61' :options='formOptions'></vue-form-generator>
            </b-container>
        </b-container>
      </b-container>

      <b-container class="container">
        <b-container class="panel panel-default">
          <b-container class="panel-heading" > Observações | Conclusões </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema62' :options='formOptions'></vue-form-generator>
            </b-container>
        </b-container>
      </b-container>

      <b-container class="container">
        <b-container class="panel panel-default">
          <b-container class="panel-heading" > Vontade expressa do proprietário ou do Dono da obra </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema63' :options='formOptions'></vue-form-generator>
            </b-container>
        </b-container>
      </b-container>
      <span> **************** END PÁGINA 6 ****************</span>          

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

            schema: {
                groups: [{
                    legend: "Demo",
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

                    }]

                }, {

                    //pagina 7

                    fields: [{
                        type: "radios",
                        label: "Tipo de intervenção proposta pelo conservador-restauro",
                        model: "pcr",
                        values: [
                            "Preservação",
                            "Conservação",
                            "Restauro"
                        ]
                    }, {
                        type: "textArea",
                        label: "Proposta metodológica de intervenção",
                        model: "estrutura",
                        hint: "Max 255 characters",
                        max: 255,
                        placeholder: "Estrutura:",
                        rows: 4,
                        required: true
                    }, {
                        type: "textArea",
                        model: "superficie",
                        hint: "Max 255 characters",
                        max: 255,
                        placeholder: "Superfície:",
                        rows: 4,
                        required: true
                    }, {
                        type: "textArea",
                        model: "elementos_acessorios",
                        hint: "Max 255 characters",
                        max: 255,
                        placeholder: "Elementos Acessórios:",
                        rows: 4,
                        required: true
                    }, {
                        type: "textArea",
                        label: "Recursos (Materiais | Técnicos | Tecnológicos)",
                        model: "recursos_1",
                        hint: "Max 255 characters",
                        max: 255,
                        rows: 4,
                        required: true
                    }, {
                        type: "textArea",
                        model: "recursos_2",
                        hint: "Max 255 characters",
                        max: 255,
                        rows: 4,
                        required: true
                    }, {
                        type: "textArea",
                        model: "recursos_3",
                        hint: "Max 255 characters",
                        max: 255,
                        rows: 4,
                        required: true
                    }, {
                        type: "textArea",
                        label: "Observações | Conclusões",
                        model: "observações_conclusoes",
                        hint: "Max 255 characters",
                        max: 255,
                        rows: 4,
                        required: true
                    }, {
                        type: "input",
                        inputType: "date",
                        label: "Data da Informação da Proposta:",
                        model: "dt1",
                        required: true
                    },  {
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
                        required: true,
                        placeholder: "(IPT)(Client)"
                    }]
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
            } , {
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
	pre .string { color: #885800; }
	pre .number { color: blue; }
	pre .boolean { color: magenta; }
	pre .null { color: red; }
	pre .key { color: green; }    

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
