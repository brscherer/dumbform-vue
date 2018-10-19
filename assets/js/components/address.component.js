export const AddressComponent = Vue.component('address-component', {
  props: {
    error: Array,
    address: {
      cidade: String,
      estado: String,
    }
  },
  template: `
  <div>
    <p>
      <span class="error" v-if="error.cidade">{{ error.cidade }}<br></span>
      <label for="cidade">Cidade: </label>
      <input id="cidade" name="cidade" v-model="address.cidade" type="text">
    </p>

    <p>
      <span class="error" v-if="error.estado">{{ error.estado }}<br></span>
      <label for="estado">Estado: </label>
      <input id="estado" name="estado" v-model="address.estado" type="text">
    </p>
  </div>`,
  computed: {
    cidade() {
      return this.address.cidade;
    },
    estado() {
      return this.address.estado;
    }
  },
  watch: {
    cidade(cidade) {
      this.validCity(cidade);
    },
    estado(estado) {
      this.validState(estado);
    }
  },
  methods: {
    validCity(city) {
      if (!city) {
        this.error['cidade'] = 'A cidade é obrigatória.';
        return;
      } else if (city.length > 50) {
        this.error['cidade'] = 'Limite de 50 caracteres no campo "cidade".';
        return;
      } else if (!/^\D+$/.test(city)) {
        this.error['cidade'] = 'Não são permitidos números no campo "cidade".';
        return;
      } else if (!/^[A-Za-zÀ-ú ]+$/.test(city)) {
        this.error['cidade'] = 'Não são permitidos caracteres especiais no campo "cidade".';
        return;
      }
      this.error['cidade'] = '';
    },
    validState(state) {
      if (!state) {
        this.error['estado'] = 'O estado é obrigatório.';
        return;
      } else if (state.length > 50) {
        this.error['estado'] = 'Limite de 50 caracteres no campo "estado".';
        return;
      } else if (!/^\D+$/.test(state)) {
        this.error['estado'] = 'Não são permitidos números no campo "estado".';
        return;
      } else if (!/^[A-Za-zÀ-ú ]+$/.test(state)) {
        this.error['estado'] = 'Não são permitidos caracteres especiais no campo "estado".';
        return;
      }
      this.error['estado'] = '';
    }
  }
});
