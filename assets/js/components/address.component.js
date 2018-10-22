export const AddressComponent = Vue.component('address-component', {
  props: {
    error: Array,
    address: {
      city: String,
      state: String,
    }
  },
  template: `
  <div>
    <p>
      <span class="error" v-if="error.city">{{ error.city }}<br></span>
      <label for="city">City: </label>
      <input id="city" name="city" v-model="address.city" type="text">
    </p>

    <p>
      <span class="error" v-if="error.state">{{ error.state }}<br></span>
      <label for="state">State: </label>
      <input id="state" name="state" v-model="address.state" type="text">
    </p>
  </div>`,
  computed: {
    city() {
      return this.address.city;
    },
    state() {
      return this.address.state;
    }
  },
  watch: {
    city(city) {
      this.checkCity(city);
    },
    state(state) {
      this.checkState(state);
    }
  },
  methods: {
    checkCity(city) {
      if (!city) {
        this.error['city'] = 'Type your city';
        return;
      } else if (city.length > 50) {
        this.error['city'] = 'Max 50 characters';
        return;
      } else if (!/^\D+$/.test(city)) {
        this.error['city'] = 'Numbers are not allowed';
        return;
      } else if (!/^[A-Za-zÀ-ú ]+$/.test(city)) {
        this.error['city'] = 'Special characters are not allowed';
        return;
      }
      this.error['city'] = '';
    },
    checkState(state) {
      if (!state) {
        this.error['state'] = 'O state é obrigatório.';
        return;
      } else if (state.length > 50) {
        this.error['state'] = 'Max 50 characters';
        return;
      } else if (!/^\D+$/.test(state)) {
        this.error['state'] = 'Numbers are not allowed';
        return;
      } else if (!/^[A-Za-zÀ-ú ]+$/.test(state)) {
        this.error['state'] = 'Special characters are not allowed';
        return;
      }
      this.error['state'] = '';
    }
  }
});
