export const CpfComponent = Vue.component('cpf-component', {
  props: {
    error: Array,
    about: {
      cpf: String,
    }
  },
  template: `
  <p>
    <span class="error" v-if="error.cpf">{{ error.cpf }}<br></span>
    <label for="cpf">CPF: </label>
    <input id="cpf" name="cpf" v-model="about.cpf" type="text">
  </p>`,
  computed: {
    cpf() {
      return this.about.cpf;
    }
  },
  watch: {
    cpf(cpf) {
      this.validCpf(cpf);
    }
  },
  methods: {
    validCpf(cpf) {
      const isValid = (cpf) => {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == "00000000000" ||
          cpf == "11111111111" ||
          cpf == "22222222222" ||
          cpf == "33333333333" ||
          cpf == "44444444444" ||
          cpf == "55555555555" ||
          cpf == "66666666666" ||
          cpf == "77777777777" ||
          cpf == "88888888888" ||
          cpf == "99999999999") {
          return false;
        }
        let add = 0;
        for (let i = 0; i < 9; i++) {
          add += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) {
          rev = 0;
        }
        if (rev != parseInt(cpf.charAt(9))) {
          return false;
        }
        add = 0;
        for (let i = 0; i < 10; i++) {
          add += parseInt(cpf.charAt(i)) * (11 - i);
        }
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) {
          rev = 0;
        }
        if (rev != parseInt(cpf.charAt(10))) {
          return false;
        }
        return true;
      }

      if (!cpf) {
        this.error['cpf'] = 'O cpf é obrigatório.';
        return;
      } else if (cpf.length < 14) {
        this.error['cpf'] = 'O cpf está incompleto.';
        return;
      } else if (!isValid(cpf)) {
        this.error['cpf'] = 'CPF inválido.';
        return;
      }
      this.error['cpf'] = '';
    }
  }

});
