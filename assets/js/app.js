import { AboutComponent } from './components/about.component.js';
import { AddressComponent } from './components/address.component.js';
import { SkillsComponent } from './components/skills.component.js';
import { DescriptionComponent } from './components/description.component.js';

document.addEventListener('DOMContentLoaded', () => {
  VMasker(document.getElementById("phone")).maskPattern("(99) 999-999-999");
  VMasker(document.getElementById("birthday")).maskPattern("99/99/9999");
  VMasker(document.getElementById("cpf")).maskPattern("999.999.999-99");
});

new Vue({
  el: '#app',
  data: {
    confirm: false,
    error: [],
    about: {
      name: '',
      phone: '',
      email: '',
      birthday: '',
      cpf: '',
    },
    address: {
      city: '',
      state: '',
    },
    skills: {
      languages: [],
      idioms: {
        portuguese: null,
        english: null,
        spanish: null,
        levels: {
          portugueseLevel: '',
          englishLevel: '',
          spanishLevel: '',
        }
      }
    },
    description: {
      text: ''
    }
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      if (this.error.length == 0) {
        this.confirm = true;
      }
    }
  }
})
