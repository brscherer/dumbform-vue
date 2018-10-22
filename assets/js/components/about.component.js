import { CpfComponent } from './cpf.component.js'

export const AboutComponent = Vue.component('about-component', {
  props: {
    error: Array,
    about: {
      name: String,
      phone: String,
      email: String,
      birthday: String,
      cpf: String,
    }
  },
  components: {
    CpfComponent,
  },
  template: `
  <div>
    <p>
      <span class="error" v-if="error.name">{{ error.name }}<br></span>
      <label for="name">Name: </label>
      <input id="name" name="name" v-model="about.name" type="text">
    </p>

    <p>
      <span class="error" v-if="error.phone">{{ error.phone }}<br></span>
      <label for="phone">Phone: </label>
      <input id="phone" name="phone" v-model="about.phone" type="text">
    </p>

    <p>
      <span class="error" v-if="error.email">{{ error.email }}<br></span>
      <label for="email">Email: </label>
      <input id="email" name="email" v-model="about.email" type="email">
    </p>

    <p>
      <span class="error" v-if="error.birthday">{{ error.birthday }}<br></span>
      <label for="birthday">Birthday: </label>
      <input id="birthday" name="birthday" v-model="about.birthday" type="text">
    </p>

    <cpf-component :about="about" :error="error"></cpf-component>
  </div>`,
  computed: {
    name() {
      return this.about.name;
    },
    phone() {
      return this.about.phone;
    },
    email() {
      return this.about.email;
    },
    birthday() {
      return this.about.birthday;
    }
  },
  watch: {
    name(name) {
      this.checkName(name);
    },
    phone(phone) {
      this.checkPhone(phone);
    },
    email(email) {
      this.checkEmail(email);
    },
    birthday(birthday) {
      this.checkBirthday(birthday);
    }
  },
  methods: {
    checkName(name) {
      if (!name) {
        this.error['name'] = 'Type your name';
        return;
      } else if (name.length > 50) {
        this.error['name'] = 'Max 50 characters';
        return;
      } else if (!/^\D+$/.test(name)) {
        this.error['name'] = 'Numbers are not allowed';
        return;
      } else if (!/^[A-Za-zÀ-ú ]+$/.test(name)) {
        this.error['name'] = 'Special characters are not allowed';
        return;
      }
      this.error['name'] = ''
    },
    checkPhone(phone) {
      if (!phone) {
        this.error['phone'] = 'Type your phone';
        return;
      } else if (phone.length < 16 && phone.length > 0) {
        this.error['phone'] = 'Invalid phone';
        return;
      }
      this.error['phone'] = ''
    },
    checkEmail(email) {
      if (!email) {
        this.error['email'] = 'Type an email';
        return;
      } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        this.error['email'] = 'Invalid email';
        return;
      }
      this.error['email'] = ''
    },
    checkBirthday(birthday) {
      if (!birthday) {
        this.error['birthday'] = 'Type your birthday';
        return;
      } else if (birthday.length < 10) {
        this.error['birthday'] = 'Invalid date';
        return;
      }

      const today = new Date();
      const arrDate = birthday.split('/');
      const bDay = new Date(arrDate[2], arrDate[1] - 1, arrDate[0]);

      if (arrDate[1] - 1 > 12) {
        this.error['birthday'] = 'Invalid month';
        return;
      } else if (arrDate[0] > 31) {
        this.error['birthday'] = 'Invalid day';
        return;
      } else if (arrDate[2] > today.getFullYear) {
        this.error['birthday'] = 'Invalid year';
        return;
      } else if ((Math.floor((today - bDay) / (1000 * 60 * 60 * 24 * 365))) < 18) {
        this.error['birthday'] = 'Under 18';
        return;
      }
      this.error['birthday'] = ''
    },
  }
});
