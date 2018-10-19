import { CpfComponent } from './cpf.component.js'

export const AboutComponent = Vue.component('about-component', {
  props: {
    error: Array,
    about: {
      nome: String,
      telefone: String,
      email: String,
      dataNascimento: String,
      cpf: String,
    }
  },
  components: {
    CpfComponent,
  },
  template: `
  <div>
    <p>
      <span class="error" v-if="error.nome">{{ error.nome }}<br></span>
      <label for="nome">Nome: </label>
      <input id="nome" name="nome" v-model="about.nome" type="text">
    </p>

    <p>
      <span class="error" v-if="error.telefone">{{ error.telefone }}<br></span>
      <label for="telefone">Telefone: </label>
      <input id="telefone" name="telefone" v-model="about.telefone" type="text">
    </p>

    <p>
      <span class="error" v-if="error.email">{{ error.email }}<br></span>
      <label for="email">Email: </label>
      <input id="email" name="email" v-model="about.email" type="email">
    </p>

    <p>
      <span class="error" v-if="error.dataNascimento">{{ error.dataNascimento }}<br></span>
      <label for="dataNascimento">Data de Nascimento: </label>
      <input id="dataNascimento" name="dataNascimento" v-model="about.dataNascimento" type="text">
    </p>

    <cpf-component :about="about" :error="error"></cpf-component>
  </div>`,
  computed: {
    nome() {
      return this.about.nome;
    },
    telefone() {
      return this.about.telefone;
    },
    email() {
      return this.about.email;
    },
    dataNascimento() {
      return this.about.dataNascimento;
    }
  },
  watch: {
    nome(nome) {
      this.validName(nome);
    },
    telefone(telefone) {
      this.validPhone(telefone);
    },
    email(email) {
      this.validEmail(email);
    },
    dataNascimento(dataNascimento) {
      this.validBirthday(dataNascimento);
    }
  },
  methods: {
    validName(name) {
      if (!name) {
        this.error['nome'] = 'O nome é obrigatório.';
        return;
      } else if (name.length > 50) {
        this.error['nome'] = 'Limite de 50 caracteres no nome.';
        return;
      } else if (!/^\D+$/.test(name)) {
        this.error['nome'] = 'Não são permitidos números no nome.';
        return;
      } else if (!/^[A-Za-zÀ-ú ]+$/.test(name)) {
        this.error['nome'] = 'Não são permitidos caracteres especiais no nome.';
        return;
      }
      this.error['nome'] = ''
    },
    validPhone(phone) {
      if (!phone) {
        this.error['telefone'] = 'O telefone é obrigatório.';
        return;
      } else if (phone.length < 16 && phone.length > 0) {
        this.error['telefone'] = 'Número de telefone inválido.';
        return;
      }
      this.error['telefone'] = ''
    },
    validEmail(email) {
      if (!email) {
        this.error['email'] = 'O email é obrigatório.';
        return;
      } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        this.error['email'] = 'O email é inválido.';
        return;
      }
      this.error['email'] = ''
    },
    validBirthday(birthday) {
      if (!birthday) {
        this.error['dataNascimento'] = 'A data de nascimento é obrigatória.';
        return;
      } else if (birthday.length < 10) {
        this.error['dataNascimento'] = 'Data inválida';
        return;
      }

      const today = new Date();
      const arrDate = birthday.split('/');
      const bDay = new Date(arrDate[2], arrDate[1] - 1, arrDate[0]);

      if (arrDate[1] - 1 > 12) {
        this.error['dataNascimento'] = 'Mês inválido';
        return;
      } else if (arrDate[0] > 31) {
        this.error['dataNascimento'] = 'Dia inválido';
        return;
      } else if (arrDate[2] > today.getFullYear) {
        this.error['dataNascimento'] = 'Ano inválido';
        return;
      } else if ((Math.floor((today - bDay) / (1000 * 60 * 60 * 24 * 365))) < 18) {
        this.error['dataNascimento'] = 'Menor de 18 anos';
        return;
      }
      this.error['dataNascimento'] = ''
    },
  }
});
