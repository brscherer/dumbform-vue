export const DescriptionComponent = Vue.component('description-component', {
  props: {
    error: Array,
    description: {
      text: String
    },
  },
  template: `
  <p>
    <span class="error" v-if="error.description">{{ error.description }}<br></span>
    <label for="description">Description: </label>
    <textarea rows="4" cols="50" id="description" name="description" v-model="description.text" type="text"></textarea>
  </p>`,
  computed: {
    text(){
      return this.description.text;
    }
  },
  watch: {
    description(val) {
      this.checkDescription(val);
    }
  },
  methods: {
    checkDescription(description) {
      if (!description) {
        this.error['description'] = 'Type your description';
        return;
      } else if (description.length > 200) {
        this.error['description'] = 'Max 200 characters';
        return;
      }
      this.error['description'] = '';
    }
  }
});
