const form = new Vue({
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
    },
    methods:{
      checkForm: function (e) {
        if (!this.errors.length) {
          document.getElementById('form').style = 'display: none;';
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
        }

        if (!this.email) {
          this.errors.push('O email é obrigatório.');
        }

        if (!this.dataNascimento) {
          this.errors.push('A data de nascimento é obrigatória.');
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
      }
    }
  })
