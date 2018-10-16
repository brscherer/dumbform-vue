document.addEventListener('DOMContentLoaded', () => {
  VMasker(document.getElementById("telefone")).maskPattern("(99) 999-999-999");
  VMasker(document.getElementById("dataNascimento")).maskPattern("99/99/9999");
  VMasker(document.getElementById("cpf")).maskPattern("999.999.999-99");
})

new Vue({
  el: '#form',
  data: {
    errors: [],
    nome: null,
    telefone: null,
    email: null,
    dataNascimento: null,
    cpf: null,
    cidade: null,
    estado: null,
    linguagens: [],
    idiomas: null,
    descricao: null,
    seen: true,
  },
  methods: {
    checkForm: function (e) {
      if (this.errors.length = 0) {
        e.preventDefault();
        this.seen = false;
      } else {
        this.scrollTop();
      }

      if (!this.nome) {
        this.errors.push('O nome é obrigatório.');
      } else if (this.nome.length > 50) {
        this.errors.push('Limite de 50 caracteres no nome.');
      } else if (!/^\D+$/.test(this.nome)) {
        this.errors.push('Não são permitidos números no nome.');
      } else if (!/^[A-Za-zÀ-ú]+$/.test(this.nome)) {
        this.errors.push('Não são permitidos caracteres especiais no nome.');
      }

      if (!this.telefone) {
        this.errors.push('O telefone é obrigatório.');
      } else if (this.telefone.length != 17) {
        this.errors.push('Número de telefone inválido.');
      }

      if (!this.email) {
        this.errors.push('O email é obrigatório.');
      } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
        this.errors.push('O email é inválido.');
      }

      if (!this.dataNascimento) {
        this.errors.push('A data de nascimento é obrigatória.');
      } else if (this.dataNascimento.length < 8) {
        this.errors.push('Data inválida');
      } else {
        this.validBirthday(this.dataNascimento);
      }

      if (!this.cpf) {
        this.errors.push('O cpf é obrigatório.');
      } else if (this.cpf.length < 14) {
        this.errors.push('O cpf está incompleto.');
      } else if (!this.validCpf(this.cpf)) {
        this.errors.push('CPF inválido.');
      }

      if (!this.cidade) {
        this.errors.push('A cidade é obrigatória.');
      }

      if (!this.estado) {
        this.errors.push('O estado é obrigatório.');
      }

      if (this.linguagens.length < 1) {
        this.errors.push('Escolha pelo menos uma linguagem.');
      }

      if (!this.idiomas) {
        this.errors.push('Os idiomas são obrigatórios.');
      }

      if (!this.descricao) {
        this.errors.push('A descrição é obrigatória.');
      } else if (this.descricao.length > 200) {
        this.errors.push('A descrição tem tamanho máximo de 200 caracteres.');
      }

      e.preventDefault();

    },
    validBirthday: function (date) {
      const today = new Date();
      const arrDate = date.split('/');
      const bDay = new Date(arrDate[2], arrDate[1] - 1, arrDate[0]);

      if (arrDate[1] - 1 > 12) {
        this.errors.push('Mês inválido');
      } else if (arrDate[0] > 31) {
        this.errors.push('Dia inválido');
      } else if (arrDate[2] > today.getFullYear) {
        this.errors.push('Ano inválido');
      } else if ((Math.floor((today - bDay) / (1000 * 60 * 60 * 24 * 365))) < 18) {
        this.errors.push('Menor de 18 anos');
      }

    },
    validCpf: function (cpf) {
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
      for (i = 0; i < 9; i++) {
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
      for (i = 0; i < 10; i++) {
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
    },
    scrollTop: function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
})
