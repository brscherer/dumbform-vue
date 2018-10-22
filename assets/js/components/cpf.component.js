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
      cpf = cpf.replace(/[^\d]+/g, '');

      const checkDuplicateDigit = digits => digits.split('').every((val, i, arr) => val === arr[0]);

      const calculateCpfNumbers = (total) => (result, num, i) => result + (num * total--);

      const checkDigit = (numbers, total) => numbers.split('').reduce(calculateCpfNumbers(total), 0);

      const getDigit = (num) => (num > 1) ? (11 - num) : 0;

      const isEqual = (a) => (b) => b === a

      const isValid = (cpf) => {
        const numbers = cpf.substring(0, 9);
        const digits = cpf.substring(9);
        let result = false;

        if (!checkDuplicateDigit(digits)) {
          const firstDigit = getDigit(checkDigit(numbers, 10) % 11);
          const secondDigit = getDigit(checkDigit(numbers.concat(firstDigit), 11) % 11);
          result = isEqual(digits)(`${firstDigit}${secondDigit}`);
        }
        return result;
      }

      if (!cpf) {
        this.error['cpf'] = 'Type your CPF';
        return;
      } else if (cpf.length < 11) {
        this.error['cpf'] = 'CPF is incomplete';
        return;
      } else if (!isValid(cpf)) {
        this.error['cpf'] = 'Invalid CPF';
        return;
      }
      this.error['cpf'] = '';
    }
  }

});
