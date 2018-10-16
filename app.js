document.addEventListener('DOMContentLoaded', () => {
  VMasker(document.getElementById("telefone")).maskPattern("(99) 999-999-999");
  VMasker(document.getElementById("dataNascimento")).maskPattern("99/99/9999");
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

      this.errors = [];

      if (!this.nome) {
        this.errors.push('O nome é obrigatório.');
      } else if (this.nome.length > 50) {
        this.errors.push('Limite de 50 caracteres no nome.');
      } else if (!/^\D+$/.test(this.nome)) {
        this.errors.push('Não são permitidos números no nome.');
      } else if (!/^[A-Za-zÀ-ú]+$/.test(this.nome)) {
        this.errors.push('Não são permitidos caractéres especiais no nome.');
      }

      if (!this.telefone) {
        this.errors.push('O telefone é obrigatório.');
      } else if (this.telefone.length != 11) {
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
       }

       if (!this.cidade) {
         this.errors.push('A cidade é obrigatória.');
       }

       if (!this.estado) {
         this.errors.push('O estado é obrigatório.');
       }

       if (!this.linguagens) {
         this.errors.push('As linguagens são obrigatórias.');
       }

       if (!this.idiomas) {
         this.errors.push('Os idiomas são obrigatórios.');
       }

       if (!this.descricao) {
         this.errors.push('A descricao é obrigatória.');
       }

      e.preventDefault();

    },
    validBirthday: function (date) {
      this.errors = [];
      const today = new Date();
      const arrDate = date.split('/');
      const bDay = new Date(arrDate[2], arrDate[1] - 1, arrDate[0]);

      if (arrDate[1] - 1 > 12) {
        this.errors.push('Mês inválido');
      } else if (arrDate[0] > 31) {
        this.errors.push('Dia inválido');
      } else if (arrDate[2] > today.getFullYear) {
        this.errors.push('Ano inválido');
      } else if ((Math.floor((today - bDay) / (1000 * 60 * 60 * 24 * 365))) < 18 ) {
        this.errors.push('Menor de 18 anos');
      }

    },
    scrollTop: function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
})
