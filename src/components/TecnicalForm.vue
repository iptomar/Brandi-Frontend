<template>
<b-container class="bv-example-row">
    <b-row class="text-center">
        <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
    </b-row>

    <p>pag.7</p>

    <b-container class="container">
        <b-container class="panel-default">CONDIÇÕES AMBIENTAIS DO LOCAL DE INSERÇÃO DO BEM CULTURAL</b-container>
        <vue-form-generator :schema='pagina3_Desc' :options='formOptions'></vue-form-generator>
    </b-container>

    <b-container class="container">
        <b-container>Ciclos das Estações Climatéricas Anuais | Frio /Húmido | Quente /Seco:</b-container>
        <vue-form-generator :schema='pagina3_Cic' :options='formOptions'></vue-form-generator>
    </b-container>

    <b-container class="container">
        <b-container class="panel-default">Radiação | Iluminação</b-container>
         <vue-form-generator :schema='pagina3_Radi_Natural' :options='formOptions'></vue-form-generator>
          <vue-form-generator :schema='pagina3_Radi_Artificial' :options='formOptions'></vue-form-generator>
    </b-container>

    <b-container class="container">
        <b-container class="panel-default">Poluição</b-container>
         <vue-form-generator :schema='pagina3_Pol' :options='formOptions'></vue-form-generator>
    </b-container>
    
    <b-container class="container">
        <b-container class="panel-default">Observações | Conclusões</b-container>
         <vue-form-generator :schema='pagina3_Con' :options='formOptions'></vue-form-generator>
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

                }, 

                
                {
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

            pagina3_Cic: {
                fields:[{
                    type:"textArea",
                    label:"Temperatura",
                    model:"Temperatura",
                    hint:"Max 10 characters",
                    placeholder:"Temperatura(Valores Médios em ºC)",
                    max:10,
                    rows:1,
                    required:true
                },{
                    type:"textArea",
                    label:"Humidade Relativa",
                    model:"Humidade Relativa",
                    hint:"Max 10 characters",
                    placeholder:"Humidade Relativa(Valores Médios em %)",
                    max:10,
                    rows:1,
                    required:true
                },{
                    type:"textArea",
                    label:"Período do Ano",
                    model:"Período do Ano",
                    hint:"Max 10 characters",
                    placeholder:"Período do Ano(Início / Fim – em meses)",
                    max:10,
                    rows:1,
                    required:true
                }]
            },
             pagina3_Radi_Natural: {
                fields:[{
                    type: "textArea",
                    label:"Tipo:",
                    model:"Tipo:",
                    hint:"Max 50 characters",
                    placeholder:"Tipo:",
                    max:50,
                    rows:1,
                    required:true
                },{
                    type: "textArea",
                    label:"Valor de Iluminância (lux):",
                    model:"Valor de Iluminância (lux):",
                    hint:"Max 50 characters",
                    placeholder:"Tipo:",
                    max:20,
                    rows:1,
                    required:true
                },{
                    type: "textArea",
                    label:"Valor de U.V Medidos:",
                    model:"Valor de U.V Medidos:",
                    hint:"Max 50 characters",
                    placeholder:"Tipo:",
                    max:50,
                    rows:1,
                    required:true
                },{
                    type: "textArea",
                    label:"Valor Real de U.V:",
                    model:"Valor Real de U.V:",
                    hint:"Max 50 characters",
                    placeholder:"Tipo:",
                    max:50,
                    rows:1,
                    required:true
                },{
                    type: "textArea",
                    label:"UV=(0.3(Medida UV) x 10000)/(50 (Lux)) = 60uW/Lúmen",
                    model:"Valor Real de U.V:",
                    hint:"Max 50 characters",
                    placeholder:"Tipo:",
                    max:50,
                    rows:1,
                    required:true
                }]
            }, pagina3_Radi_Artificial: {
                fields:[{
                    type: "textArea",
                    label:"Tipo:",
                    model:"Tipo:",
                    hint:"Max 50 characters",
                    placeholder:"Tipo:",
                    max:50,
                    rows:1,
                    required:true
                },{
                    type: "textArea",
                    label:"Valor de Iluminância (lux):",
                    model:"Valor de Iluminância (lux):",
                    hint:"Max 50 characters",
                    placeholder:"Tipo:",
                    max:20,
                    rows:1,
                    required:true
                },{
                    type: "textArea",
                    label:"Valor de U.V Medidos:",
                    model:"Valor de U.V Medidos:",
                    hint:"Max 50 characters",
                    placeholder:"Tipo:",
                    max:50,
                    rows:1,
                    required:true
                },{
                    type: "textArea",
                    label:"Valor Real de U.V:",
                    model:"Valor Real de U.V:",
                    hint:"Max 50 characters",
                    placeholder:"Tipo:",
                    max:50,
                    rows:1,
                    required:true
                },{
                    type: "textArea",
                    label:"UV=(0.3(Medida UV) x 10000)/(50 (Lux)) = 60uW/Lúmen",
                    model:"Valor Real de U.V:",
                    hint:"Max 50 characters",
                    placeholder:"Tipo:",
                    max:50,
                    rows:1,
                    required:true
                }]
            },
            pagina3_Desc: {
                fields:[{
                    type:"textArea",
                    label:"Descrição",
                    model:"Descricao",
                    hint:"Max 255 characters",
                    placeholder: "Descrição:",
                    max:255,
                    rows:4,
                    required:true
                }]
            }, 

            pagina3_Pol: {
                fields:[{   
                type:"textArea",
                label:"Agentes_Poluidores",
                model:"Agentes_Poluidores",
                hint:"Max 255 characters",
                placeholder: "Agentes Poluidores:",
                max:255,
                rows:4,
                required:true
                },{
                    type:"textArea",
                    label:"Fontes | Origem",
                    model:"Fontes_Origem",
                    hint:"Max 255 characters",
                    placeholder: "Fontes | Origem",
                    max:255,
                    rows:4,
                    required:true
                },{
                    type:"textArea",
                    label:"Resultados:",
                    model:"Resultados",
                    hint:"Max 255 characters",
                    placeholder: "Resultados:",
                    max:255,
                    rows:4,
                    required:true   
                }]
            }, 

            pagina3_Con: {
                fields:[{
                type:"textArea",
                hint:"Max 255 characters",
                //placeholder: "Resultados:",
                max:255,
                rows:4,
                required:true  
                }]
            },

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
</style>
