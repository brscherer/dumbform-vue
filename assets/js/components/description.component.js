export const DescriptionComponent = Vue.component('description-component', {
  props: {
    error: Array,
    descricao: {
      text: String
    },
  },
  template: `
  <p>
    <span class="error" v-if="error.descricao">{{ error.descricao }}<br></span>
    <label for="descricao">Descrição: </label>
    <textarea rows="4" cols="50" id="descricao" name="descricao" v-model="descricao.text" type="text"></textarea>
  </p>`,
  computed: {
    text(){
      return this.descricao.text;
    }
  },
  watch: {
    descricao(val) {
      this.validDescription(val);
    }
  },
  methods: {
    validDescription(description) {
      if (!description) {
        this.error['descricao'] = 'A descrição é obrigatória.';
        return;
      } else if (description.length > 200) {
        this.error['descricao'] = 'A descrição tem tamanho máximo de 200 caracteres.';
        return;
      }
      this.error['descricao'] = '';
    }
  }
});
