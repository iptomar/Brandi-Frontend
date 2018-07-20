<template>


   <b-container v-if="auth.logged" class="mainC container">

  <b-row class="panel panel-default">
  <div>
      <b-tabs>
          <b-tab title="Página 1" >
            <b-container class="container">        
            <b-row class="panel panel-default">
        <b-container class="panel-heading panel-heading-custom">DESIGNAÇÃO DO OBJETO</b-container>
        <b-container class="panel-body">
            <vue-form-generator :schema='pagina_1' :model="model" :options='formOptions'></vue-form-generator>
        </b-container>
    </b-row>
    <b-button variant="primary" v-on:click="guardar1">Guardar</b-button>
    </b-container>
        </b-tab>

          <b-tab title="Página 2">            
            <b-container class="container"> 
               <b-row class="panel panel-default">
            <b-container class="panel-heading panel-heading-custom">BEM INTEGRADO EM CONJUNTO</b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='pagina_2' :options='formOptions'></vue-form-generator>
            </b-container>
        </b-row>
        <b-button variant="primary" v-on:click="guardar2">Guardar</b-button>
        </b-container>
          </b-tab>
          
          
          <b-tab title="Página 3">
             <b-container class="container">        
            <b-row class="panel panel-default">
                <b-container class="container">
        <b-container class="panel-heading panel-heading-custom">CONDIÇÕES AMBIENTAIS DO LOCAL DE INSERÇÃO DO BEM CULTURAL</b-container>
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
            </b-row>
            <b-button variant="primary" v-on:click="guardar3">Guardar</b-button>
             </b-container>
          </b-tab>
          
          
          <b-tab title="Página 4">
              <b-container class="container">
        <b-row class="panel panel-default">
            <b-container class="panel-heading panel-heading-custom">EXAMES E ANÁLISES</b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='pagina_4_1' :options='formOptions'></vue-form-generator>
                <v-table is-horizontal-resize style="width:100%" :columns="columns" :table-data="tableData" row-hover-color="#eee" row-click-color="#edf7ff" :cell-edit-done="cellEditDone">
                </v-table>
                <vue-form-generator :schema='pagina_4_2' style="margin-top: 10px" :options='formOptions'></vue-form-generator>
            </b-container>
        </b-row>
        <b-button variant="primary" v-on:click="guardar4">Guardar</b-button>
    </b-container>
          </b-tab>


          <b-tab  title="Página 5">
              <b-container class="container">
        <b-row class="panel panel-default">
            <b-container class="panel-heading panel-heading-custom">ESTADO DE CONSERVAÇÃO</b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema51' :options='formOptions'></vue-form-generator>
            </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema52' :options='formOptions'></vue-form-generator>
            </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema53' style="margin-top: 10px" :options='formOptions'></vue-form-generator>
            </b-container>
        </b-row>
        <b-button variant="primary" v-on:click="guardar5">Guardar</b-button>
        </b-container>
          </b-tab>

<b-tab  title="Página 6">
<b-container class="container">
        <b-row class="panel panel-default">
            <b-container class="panel-heading panel-heading-custom">INTERVENÇÕES ANTERIORES</b-container>
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
        <b-button variant="primary" v-on:click="guardar6">Guardar</b-button>
    </b-container>
</b-tab>

<b-tab  title="Página 7">
   <b-container class="container"> 
      <b-row class="panel panel-default">
     <b-container class="container">        
            <b-row class="panel panel-default">
                <b-container class="panel-heading panel-heading-custom"> Tipo de intervenção proposta pelo conservador-restauro </b-container>
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
      </b-row>
      <b-button variant="primary" v-on:click="guardar7">Guardar</b-button>
    </b-container>
</b-tab>

<b-tab title="Página 8">
  <b-container class="container">
  <b-row class="panel panel-default">       
          <b-container class="panel panel-default">
              <b-container class="panel-heading panel-heading-custom"> Intervenção Realizada </b-container>
              <b-container class="panel-body">
                  <vue-form-generator :schema='schema81' :options='formOptions'></vue-form-generator>              
          </b-container>
      </b-container>
      <b-container class="panel-body">
          <b-container class="panel panel-default">
              <b-container class="panel-heading"> Observações | Conclusões </b-container>
              <b-container class="panel-body">
                  <vue-form-generator :schema='schema82' :options='formOptions'></vue-form-generator>
              </b-container>
          </b-container>
      </b-container>
      
     </b-row>
     <b-button variant="primary" v-on:click="guardar8">Guardar</b-button>
    </b-container> 
</b-tab>

<b-tab title="Página 9">
   <b-container class="container">
        <b-row class="panel panel-default">
            <b-container class="panel-heading panel-heading-custom">DOCUMENTAÇÃO PRODUZIDA | RECOLHIDA</b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema91' :options='formOptions'></vue-form-generator>
            </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema92' :options='formOptions'></vue-form-generator>
            </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema93' style="margin-top: 10px" :options='formOptions'></vue-form-generator>
            </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema94' style="margin-top: 10px" :options='formOptions'></vue-form-generator>
            </b-container>
        </b-row>
        <b-button variant="primary" v-on:click="guardar8">Guardar</b-button>
    </b-container>
</b-tab>

<b-tab title="Página 10">
 <b-container class="container">
        <b-row class="panel panel-default">
            <b-container class="panel-heading panel-heading-custom">FONTES</b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema101' :options='formOptions'></vue-form-generator>
            </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema102' :options='formOptions'></vue-form-generator>
            </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema103' :options='formOptions'></vue-form-generator>
            </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema104' :options='formOptions'></vue-form-generator>
            </b-container>
            <b-container class="panel-body">
                <vue-form-generator :schema='schema105' :options='formOptions'></vue-form-generator>
            </b-container>
            <b-container class="panel-body">

        <b-container class="container">
            <b-container class="panel panel-default">
                <b-row>
                    <!--  <b-table striped hover :items="items72" :fields="fields72" :schema='schema72l' :options='formOptions'></b-table>
                        -->
                    <b-container class="panel-heading panel-heading-custom">CONSTITUIÇÃO DA EQUIPA</b-container>
                    <b-col>
                        <p class="card-text">Nome do Técnico</p>
                        <vue-form-generator :schema='schema106' :options='formOptions'></vue-form-generator>
                    </b-col>

                    <b-col>
                        <p class="card-text">Funções Desempenhadas</p>
                        <vue-form-generator :schema='schema107' :options='formOptions'></vue-form-generator>
                    </b-col>
                    <b-col>
                        <p class="card-text">Habilitações(Escolares/Académicas)</p>

                        <vue-form-generator :schema='schema108' :options='formOptions'></vue-form-generator>
                    </b-col>
                </b-row>
            </b-container>
        </b-container>
            </b-container>
        </b-row>
        <b-button variant="primary" v-on:click="guardar8">Guardar</b-button>
    </b-container>
</b-tab>

      </b-tabs>
  </div>         
    </b-row>



</b-container>
</template>



<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import store from "../tools/store";
import axios from "axios";

export default {
  props: {
    options: {
      type: Object,
      required: false
    },
    value: ""
  },
  components: {
    "vue-form-generator": VueFormGenerator.component
  },

  data() {
    return {
      token: store.token,
      auth: store.auth,
      sideMenu: store.sideMenu,
      model: {
        id: 1,
        name: "John Doe",
        password: "J0hnD03!x4",
        skills: ["Javascript", "VueJS"],
        email: "john.doe@gmail.com",
        status: true,
        Dseginacao: "",
        NProcessoLCRM: "",
        NProcessoCEARC: "",
        Coordenacao: "",
        DataDeAberturaProcesso: "",
        DataDeEntradanoLCRM: "",
        DataDeEntradaDoCEARC: "",
        FotoObjeto: "",
        FormatoFoto: ["png"],
        SuperCategoria: "",
        Categoria: "",
        SubCategoria: "",
        Localizacao: "",
        Proprietario: "",
        EnderecoPostalDoProprietario: "",
        EndereçoElectronicoDoProprietario: "",
        ContactosTelefónicosDoProprietario: "",
        Dimentcao: "",
        OutrasDimensões: "",
        DonoDaObra: "",
        EnderecoPostalDonoDaObra: "",
        ContactosTelefonicosDonoDaObra: "",
        Mecenas: "",
        EndereçoPostalMecenas: "",
        ContactosTelefonicosMecenas: "",
        status: true,
        //pagina 2
        TipoConjunto: "",
        ElementosConstituintes: "",
        IntegradoEmConjunto: ["Sim", "Não"],
        ElementosAcessorios: "",
        AssinaturaAutoria: "",
        InscricaoMontagem: "",
        InscricaoConstr: "",
        ClassPatrimonial: "",
        Estilo: "",
        Epoca: [
          "Coevo",
          "Tardio",
          "Outra Época",
          "Réplica",
          "Reprodução",
          "Falsificação"
        ],
        Qualidade: ["Excelente", "Muito Boa", "Boa", "Regular", "Fraca"],
        Descricao: "",
        Analogia: "",
        Conclusoes: "",
        Autoria: "",
        Datacao: "",
        LocalOrigem: "",
        EstruturaTecnica: "",
        SuperficieTecnica: "",
        EstruturaMaterial: "",
        SuperficieMaterial: ""
      },

      //pagina 1

      pagina_1: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Designação do objeto",
            model: "Designacao",
            placeholder: "Insira a desinação do Objeto",
            featured: true,
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Processo LCRM Nº",
            model: "NProcessoLCRM",
            placeholder: "Insira o numero de processo LCRM",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Processo CEARC Nº",
            model: "NProcessoCEARC",
            placeholder: "Insira o numero de processo CEARC",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Coordenação/Direção Técnica da Intervenção:",
            model: "Coordenacao",
            placeholder: "Professor Adjunto | Conservador-restaurador",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "date",
            label: "Data de Abertura Processo",
            model: "DataDeAberturaProcesso",
            placeholder: "",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "date",
            label: "Data de entrada no LCRM: ",
            model: "DataDeEntradanoLCRM",
            placeholder: "",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "date",
            label: "Data de entrada do CEARC: ",
            model: "DataDeEntradaDoCEARC",

            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "file",
            label: "Registo Fotográfico Identificativo do Objecto: ",
            model: "FotoObjeto",
            featured: true,
            required: true
          },
          {
            type: "select",
            inputType: "text",
            label: "Formato",
            model: "FormatoFoto",
            featured: true,
            required: true,
            values: ["JPG", "PNG", "JEPG"]
          },
          {
            type: "input",
            inputType: "text",
            label: "Super-Categoria",
            model: "SuperCategoria",
            placeholder: "Insira a super-categoria do objeto",
            featured: true,
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Categoria",
            model: "Categoria",
            placeholder: "Insira a categoria do objeto",
            featured: true,
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "SubCategoria",
            model: "SubCategoria",
            placeholder: "Insira a Sub-categoria do objeto",
            featured: true,
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Localização",
            model: "Localizacao",
            featured: true,
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Proprietário",
            model: "Proprietario",
            placeholder: "Insira o nome do proprietário",
            featured: true,
            required: true
          },
           {
            type: "input",
            inputType: "number",
            label: "ID Pedido",
            model: "pedido",
            placeholder: "Pedido",
            featured: true,
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Endereço Postal do Proprietário",
            model: "EnderecoPostalDoProprietario",
            placeholder: "Insira o endereço postal do proprietário",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Endereço Electronico Proprietário",
            model: "EndereçoElectronicoDoProprietario",
            placeholder: "Insira o endereço electronico do proprietário",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Contactos Telefónico Proprietários",
            model: "ContactosTelefónicosDoProprietario",
            placeholder: "Insira o contacto telefónico proprietário",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Dimenção",
            model: "Dimencao",
            featured: true,
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Outras Dimensões",
            model: "OutrasDimensões",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Dono da Obra",
            model: "DonoDaObra",
            placeholder: "Insira o nome do dono da obra",
            featured: true,
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Endereco Postal do Dono da Obra",
            model: "EnderecoPostalDonoDaObra",
            placeholder: "Insira o endereço postal do dono da obra",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Contactos Telefónicos do Dono da Obra",
            model: "ContactosTelefonicosDonoDaObra",
            placeholder: "Insira o contacto telefónico do dono da obra",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Mecenas",
            model: "Mecenas",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Endereço Postal Mecenas",
            model: "EndereçoPostalMecenas",
            placeholder: "Insira o endereço postal do Mecenas",
            featured: true,
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Contactos Telefónicos Mecenas",
            model: "ContactosTelefonicosMecenas",
            placeholder: "Insira o contacto telefónico do Mecenas",
            featured: true,
            required: false
          }
        ]
      },
      //pagina 2
      pagina_2: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Tipo Conjunto",
            model: "TipoConjunto",
            placeholder: "Insira o tipo do conjunto",
            required: false,
            featured: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Elementos Constituintes",
            model: "ElementosConstituintes",
            placeholder: "Insira os elementos constituintes",
            required: false
          },
          {
            type: "select",
            label: "Integrado Em Conjunto",
            model: "IntegradoEmConjunto",
            values: ["Sim", "Não"],
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Elementos Acessórios",
            model: "ElementosAcessorios",
            placeholder: "Insira os os elementos constituintes",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Assinatura Autoria",
            model: "AssinaturaAutoria",
            placeholder: "Insira se tem alguma assinatura de autoria (marcas)",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Inscrições de Montagem",
            model: "InscricaoMontagem",
            placeholder: "Insira se tem alguma inscrição de montagem",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Inscrições de construcao",
            model: "InscricaoConstr",
            placeholder: "Insira se tem alguma inscrição de construção",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Classificação Patrimonial",
            model: "ClassPatrimonial",
            placeholder: "Insira a classificação patrimonial",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Estilo",
            model: "Estilo",
            placeholder: " Insira aqui o estilo da peça",
            required: false
          },
          {
            type: "select",
            label: "Epoca",
            model: "Epoca",
            values: [
              "Coevo",
              "Tardio",
              "Outra Época",
              "Réplica",
              "Reprodução",
              "Falsificação"
            ],
            required: false
          },
          {
            type: "select",
            label: "Qualidade",
            model: "Qualidade",
            values: ["Excelente", "Muito Boa", "Boa", "Regular", "Fraca"],
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Descrição",
            model: "Descricao",
            placeholder: "Insira uma breve descrição",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Analogia",
            model: "Analogia",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Conclusões",
            model: "Conclusoes",
            placeholder: "Insira uma breve conclusão sobre a peça",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Autoria",
            model: "Autoria",
            placeholder: "Insira a autoria da peça",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Datação",
            model: "Datacao",
            placeholder: "Insira a datação da peça",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Local Origem",
            model: "LocalOrigem",
            placeholder: "Insira o local de origem da peça",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Estrutura Técnica",
            model: "EstruturaTecnica",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Superficie Técnica",
            model: "SuperficieTecnica",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Estrutura Material",
            model: "EstruturaMaterial",
            required: false
          },
          {
            type: "input",
            inputType: "text",
            label: "Superficie Material",
            model: "SuperficieMaterial",
            required: false
          }
        ]
      },
      pagina3_Cic: {
        fields: [
          {
            type: "textArea",
            label: "Temperatura",
            model: "Temperatura",
            hint: "Max 10 characters",
            placeholder: "Temperatura(Valores Médios em ºC)",
            max: 10,
            rows: 1,
            required: true
          },
          {
            type: "textArea",
            label: "Humidade Relativa",
            model: "Humidade Relativa",
            hint: "Max 10 characters",
            placeholder: "Humidade Relativa(Valores Médios em %)",
            max: 10,
            rows: 1,
            required: true
          },
          {
            type: "textArea",
            label: "Período do Ano",
            model: "Período do Ano",
            hint: "Max 10 characters",
            placeholder: "Período do Ano(Início / Fim – em meses)",
            max: 10,
            rows: 1,
            required: true
          }
        ]
      },
      pagina3_Radi_Natural: {
        fields: [
          {
            type: "textArea",
            label: "Tipo:",
            model: "Tipo:",
            hint: "Max 50 characters",
            placeholder: "Tipo:",
            max: 50,
            rows: 1,
            required: true
          },
          {
            type: "textArea",
            label: "Valor de Iluminância (lux):",
            model: "Valor de Iluminância (lux):",
            hint: "Max 50 characters",
            placeholder: "Tipo:",
            max: 20,
            rows: 1,
            required: true
          },
          {
            type: "textArea",
            label: "Valor de U.V Medidos:",
            model: "Valor de U.V Medidos:",
            hint: "Max 50 characters",
            placeholder: "Tipo:",
            max: 50,
            rows: 1,
            required: true
          },
          {
            type: "textArea",
            label: "Valor Real de U.V:",
            model: "Valor Real de U.V:",
            hint: "Max 50 characters",
            placeholder: "Tipo:",
            max: 50,
            rows: 1,
            required: true
          },
          {
            type: "textArea",
            label: "UV=(0.3(Medida UV) x 10000)/(50 (Lux)) = 60uW/Lúmen",
            model: "Valor Real de U.V:",
            hint: "Max 50 characters",
            placeholder: "Tipo:",
            max: 50,
            rows: 1,
            required: true
          }
        ]
      },
      pagina3_Radi_Artificial: {
        fields: [
          {
            type: "textArea",
            label: "Tipo:",
            model: "Tipo:",
            hint: "Max 50 characters",
            placeholder: "Tipo:",
            max: 50,
            rows: 1,
            required: true
          },
          {
            type: "textArea",
            label: "Valor de Iluminância (lux):",
            model: "Valor de Iluminância (lux):",
            hint: "Max 50 characters",
            placeholder: "Tipo:",
            max: 20,
            rows: 1,
            required: true
          },
          {
            type: "textArea",
            label: "Valor de U.V Medidos:",
            model: "Valor de U.V Medidos:",
            hint: "Max 50 characters",
            placeholder: "Tipo:",
            max: 50,
            rows: 1,
            required: true
          },
          {
            type: "textArea",
            label: "Valor Real de U.V:",
            model: "Valor Real de U.V:",
            hint: "Max 50 characters",
            placeholder: "Tipo:",
            max: 50,
            rows: 1,
            required: true
          },
          {
            type: "textArea",
            label: "UV=(0.3(Medida UV) x 10000)/(50 (Lux)) = 60uW/Lúmen",
            model: "Valor Real de U.V:",
            hint: "Max 50 characters",
            placeholder: "Tipo:",
            max: 50,
            rows: 1,
            required: true
          }
        ]
      },
      pagina3_Desc: {
        fields: [
          {
            type: "textArea",
            label: "Descrição",
            model: "Descricao",
            hint: "Max 255 characters",
            placeholder: "Descrição:",
            max: 255,
            rows: 4,
            required: true
          }
        ]
      },
      pagina3_Pol: {
        fields: [
          {
            type: "textArea",
            label: "Agentes_Poluidores",
            model: "Agentes_Poluidores",
            hint: "Max 255 characters",
            placeholder: "Agentes Poluidores:",
            max: 255,
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            label: "Fontes | Origem",
            model: "Fontes_Origem",
            hint: "Max 255 characters",
            placeholder: "Fontes | Origem",
            max: 255,
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            label: "Resultados:",
            model: "Resultados",
            hint: "Max 255 characters",
            placeholder: "Resultados:",
            max: 255,
            rows: 4,
            required: true
          }
        ]
      },
      pagina3_Con: {
        fields: [
          {
            type: "textArea",
            hint: "Max 255 characters",
            //placeholder: "Resultados:",
            max: 255,
            rows: 4,
            required: true
          }
        ]
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
      ///////PAGINA 5

      schema51: {
        fields: [
          {
            type: "textArea",
            label: "Deterioração Física, Química e Mecânica dos Materiais:",
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
          }
        ]
      },
      schema52: {
        fields: [
          {
            type: "textArea",
            label: "Deterioração Biológica dos Materiais:",
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
          }
        ]
      },
      schema53: {
        fields: [
          {
            type: "textArea",
            label: "Observações | Conclusões",
            inputType: "text",
            model: "conclusaoestado"
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
      //pagina 7
      schema71: {
        fields: [
          {
            type: "radios",
            label: "",
            model: "pcr",
            values: ["Preservação", "Conservação", "Restauro"]
          }
        ]
      },
      schema72l: {
        fields: [
          {
            type: "textArea",
            label: "Estrutura:",
            model: "estrutura",
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            model: "superficie",
            label: "Superfície:",
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            model: "elementos_acessorios",
            label: "Elementos Acessórios:",
            rows: 4,
            required: true
          }
        ]
      },
      schema72r: {
        fields: [
          {
            type: "textArea",
            model: "recursos_1",
            label: "",
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            model: "recursos_2",
            label: "",
            rows: 4,
            required: true
          },
          {
            type: "textArea",
            model: "recursos_3",
            rows: 4,
            required: true
          }
        ]
      },
      schema73: {
        fields: [
          {
            type: "textArea",
            model: "observações_conclusoes",
            rows: 4,
            required: true
          }
        ]
      },
      schema74: {
        fields: [
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
            required: true
          }
        ]
      },

      //----------- Pagina 8 -------------------------
      schema81: {
        fields: [
          {
            type: "textArea",
            label: "Estrutura",
            model: "Estrutura",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
          },
          {
            type: "textArea",
            label: "Recursos Necessários para a Estrutura",
            model: "Estrutura_Recursos",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
          },
          {
            type: "textArea",
            label: "Superfície",
            model: "Superficie",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
          },
          {
            type: "textArea",
            label: "Recursos Necessários Para a Superfície",
            model: "Superficie_Recursos",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
          },
          {
            type: "textArea",
            label: "Elementos Acessórios",
            model: "Elementos",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
          },
          {
            type: "textArea",
            label: "Recursos Necessários para os Elementos Acessórios",
            model: "Elementos_Recursos",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
          }
        ]
      },
      schema82: {
        fields: [
          {
            type: "textArea",
            model: "conclusao",
            readonly: false,
            featured: true,
            required: true,
            disabled: false
          }
        ]
      }, ///////////////// Página 9
      schema91: {
        fields: [
          {
            type: "input",
            label: "Relatório Técnico da Intervenção do LCRM",
            required: true,
            inputType: "text",
            model: "refarquivo",
            placeholder: "Ref.ª de Arquivo"
          }
        ]
      },
      schema92: {
        fields: [
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
          }
        ]
      },
      schema93: {
        fields: [
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
          }
        ]
      },
      schema94: {
        fields: [
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
      schema101: {
        fields: [
          {
            type: "textArea",
            label: "Arquivísticas | Documentais",
            inputType: "text",
            model: "arquivDoc",
            placeholder: "Autor/Título/Local/Editor/Data/Página (s) "
          },
          {
            type: "textArea",
            inputType: "text",
            model: "arquivTipo",
            placeholder: "Tipo"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "arquivLocal",
            placeholder: "Localização"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "arquivCota",
            placeholder: "Cota"
          }
        ]
      },
      schema102: {
        fields: [
          {
            type: "textArea",
            label: "Iconográficas",
            inputType: "text",
            model: "iconDoc",
            placeholder: "Autor/Título/Local/Editor/Data/Página (s) "
          },
          {
            type: "textArea",
            inputType: "text",
            model: "iconTipo",
            placeholder: "Tipo"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "iconLocal",
            placeholder: "Localização"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "iconCota",
            placeholder: "Cota"
          }
        ]
      },
      schema103: {
        fields: [
          {
            type: "textArea",
            label: "Bibliográficas",
            inputType: "text",
            model: "biblioDoc",
            placeholder: "Autor/Título/Local/Editor/Data/Página (s) "
          },
          {
            type: "textArea",
            inputType: "text",
            model: "biblioTipo",
            placeholder: "Tipo"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "biblioLocal",
            placeholder: "Localização"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "biblioCota",
            placeholder: "Cota"
          }
        ]
      },
      schema104: {
        fields: [
          {
            type: "textArea",
            label: "Eletrónicas",
            inputType: "text",
            model: "electroDoc",
            placeholder:
              "Autor/Título/Local/Editor/Data/Página (s)/Sítio na Internet"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "electroTipo",
            placeholder: "Tipo de Fonte"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "electroData",
            placeholder: "Data da Consulta"
          }
        ]
      },
      schema105: {
        fields: [
          {
            type: "textArea",
            label: "Outras Fontes",
            inputType: "text",
            model: "outraDoc",
            placeholder: "Autor/Título/Local/Editor/Data/Página (s)"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "outraTipo",
            placeholder: "Tipo"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "outraData",
            placeholder: "Localização"
          },
          {
            type: "textArea",
            inputType: "text",
            model: "outraData",
            placeholder: "Cota"
          }
        ]
      },
      schema106: {
        fields: [
          {
            type: "textArea",
            inputType: "text",
            model: "nomeTecnino",
            rows: 4
          }
        ]
      },
      schema107: {
        fields: [
          {
            type: "textArea",
            inputType: "text",
            model: "funcao",
            rows: 4
          }
        ]
      },
      schema108: {
        fields: [
          {
            type: "textArea",
            inputType: "text",
            model: "nivel",
            rows: 4
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

  created() {
    this.sideMenu.isOpen = false;
  },
  methods: {
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue;
    },
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-primary", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
    /*                     */
    guardar1() {
      axios
        .post(
          "/guardarpagina1",
          {},
          {
            headers: {
              authorization: this.token
            },
            params: {
              Designacao: this.model.Designacao,
              ProcessoLCRM: this.model.NProcessoLCRM,
              ProcessoCEARC: this.model.NProcessoCEARC,
              Coordenacao: this.model.Coordenacao,
              Tipologia: this.model.Tipologia,
              Localizacao: this.model.Localizacao,
              Dimensao: this.model.Dimencao
            }
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
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
.mainC {
  padding: 70px 68px;
}
.tab {
  width: 100%;
}

.tabs {
  padding: 15px 25px;
}
</style>
