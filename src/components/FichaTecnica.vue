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
      Dseginacao: '',
      NProcessoLCRM: '', 
      NProcessoCEARC: '',
      Coordenacao:'',
      DataDeAberturaProcesso:'',
      DataDeEntradanoLCRM:'',
      DataDeEntradaDoCEARC:'',
      FotoObjeto:'',
      FormatoFoto:['png'],
      SuperCategoria:'',
      Categoria:'',
      SubCategoria:'',
      Localizacao:'', 
      Proprietario:'',
      EnderecoPostalDoProprietario:'',
      EndereçoElectronicoDoProprietario:'',
      ContactosTelefónicosDoProprietario:'',
      Dimentcao:'',
      OutrasDimensões:'',
      DonoDaObra:'',
      EnderecoPostalDonoDaObra:'',
      ContactosTelefonicosDonoDaObra:'',
      Mecenas:'',
      EndereçoPostalMecenas:'',
      ContactosTelefonicosMecenas:'',
      status: true
    },

    schema: {
      fields: [ { 
        type: 'input',
        inputType: 'text',
        label: 'Deseginação do objeto',
        model: 'Deseginacao',
        placeholder: 'Insira a desinação do Objeto',
        featured: true,
        required: true
      }, {
        type: 'input',
        inputType: 'text',
        label: 'Processo LCRM Nº',
        model: 'NProcessoLCRM',
        placeholder: 'Insira o numero de processo LCRM',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'text',
        label: 'Processo CEARC Nº',
        model: 'NProcessoCEARC',
        placeholder: 'Insira o numero de processo CEARC',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'text',
        label: 'Coordenação/Direção Técnica da Intervenção:',
        model: 'Coordenacao',
        placeholder: 'Professor Adjunto | Conservador-restaurador',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'date',
        label: 'Data de Abertura Processo',
        model: 'DataDeAberturaProcesso',
        placeholder: '',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'date',
        label: 'Data de entrada no LCRM: ',
        model: 'DataDeEntradanoLCRM',
        placeholder: '',
        featured: true,
        required: false
      },
      {
        type: 'input',
        inputType: 'date',
        label: 'Data de entrada do CEARC: ',
        model: 'DataDeEntradaDoCEARC',

        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'file',
        label: 'Registo Fotográfico Identificativo do Objecto: ',
        model: 'FotoObjeto',
        featured: true,
        required: true
      },{
        type: 'select',
        inputType: 'text',
        label: 'Formato',
        model: 'FormatoFoto',
        featured: true,
        required: true,
        values: ['JPG', 'PNG','JEPG']
        
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Super-Categoria',
        model: 'SuperCategoria',
        placeholder: 'Insira a super-categoria do objeto',
        featured: true,
        required: true
      },{
        type: 'input',
        inputType: 'text',
        label: 'Categoria',
        model: 'Categoria',
        placeholder: 'Insira a categoria do objeto',
        featured: true,
        required: true
      },{
        type: 'input',
        inputType: 'text',
        label: 'SubCategoria',
        model: 'SubCategoria',
        placeholder: 'Insira a Sub-categoria do objeto',
        featured: true,
        required: true
      },{
        type: 'input',
        inputType: 'text',
        label: 'Localização',
        model: 'Localizacao',
        featured: true,
        required: true
      },{
        type: 'input',
        inputType: 'text',
        label: 'Proprietário',
        model: 'Proprietario',
        placeholder: 'Insira o nome do proprietário',
        featured: true,
        required: true
      },{
        type: 'input',
        inputType: 'text',
        label: 'Endereço Postal do Proprietário',
        model: 'EnderecoPostalDoProprietario',
        placeholder: 'Insira o endereço postal do proprietário',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'text',
        label: 'Endereço Electronico Proprietário',
        model: 'EndereçoElectronicoDoProprietario',
        placeholder: 'Insira o endereço electronico do proprietário',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'text',
        label: 'Contactos Telefónico Proprietários',
        model: 'ContactosTelefónicosDoProprietario',
        placeholder: 'Insira o contacto telefónico proprietário',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'text',
        label: 'Dimenção',
        model: 'Dimencao',
        featured: true,
        required: true
      },{
        type: 'input',
        inputType: 'text',
        label: 'Outras Dimensões',
        model: 'OutrasDimensões',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'text',
        label: 'Dono da Obra',
        model: 'DonoDaObra',
        placeholder: 'Insira o nome do dono da obra',
        featured: true,
        required: true
      },{
        type: 'input',
        inputType: 'text',
        label: 'Endereco Postal do Dono da Obra',
        model: 'EnderecoPostalDonoDaObra',
         placeholder: 'Insira o endereço postal do dono da obra',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'text',
        label: 'Contactos Telefónicos do Dono da Obra',
        model: 'ContactosTelefonicosDonoDaObra',
        placeholder: 'Insira o contacto telefónico do dono da obra',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'text',
        label: 'Mecenas',
        model: 'Mecenas',
        featured: true,
        required: false
      }, {
        type: 'input',
        inputType: 'text',
        label: 'Endereço Postal Mecenas',
        model: 'EndereçoPostalMecenas',
         placeholder: 'Insira o endereço postal do Mecenas',
        featured: true,
        required: false
      },{
        type: 'input',
        inputType: 'text',
        label: 'Contactos Telefónicos Mecenas',
        model: 'ContactosTelefonicosMecenas',
        placeholder: 'Insira o contacto telefónico do Mecenas',
        featured: true,
        required: false
      },
      
   
      ]
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
