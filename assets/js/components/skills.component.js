export const SkillsComponent = Vue.component('skills-component', {
  props: {
    error: Array,
    skills: {
      languages: Array,
      idioms: {
        portuguese: Boolean,
        english: Boolean,
        spanish: Boolean,
        levels: {
          portugueseLevel: String,
          englishLevel: String,
          spanishLevel: String,
        }
      }
    },
  },
  template: `
  <div>
    <p>
      <span class="error" v-if="error.linguagem">{{ error.linguagem }}<br></span>
      <label for="languages">Languages: </label>
      <select id="languages" name="languages" v-model="skills.languages" type="text" multiple>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="C#">C#</option>
        <option value="PHP">PHP</option>
      </select>
    </p>

    <p>
      <fieldset id="idioms">
        <legend>Idioms</legend>
        <span class="error" v-if="error.idioms">{{ error.idioms }}<br></span>
        <p>
          <input id="portuguese" name="portuguese" v-model="skills.idioms.portuguese" type="checkbox">
          <label for="portuguese" class="checkbox">Portuguese</label>
          <select id="portugueseLevel" name="portugueseLevel" v-model="skills.idioms.levels.portugueseLevel" type="text" v-if="skills.idioms.portuguese">
            <option value="basico">Basic</option>
            <option value="intermediario">Intermediate</option>
            <option value="avancado">Advanced</option>
            <option value="nativo">Native</option>
          </select>
        </p>
        <p>
          <input id="english" name="english" v-model="skills.idioms.english" type="checkbox">
          <label for="english" class="checkbox">English</label>
          <select id="englishLevel" name="englishLevel" v-model="skills.idioms.levels.englishLevel" type="text" v-if="skills.idioms.english">
            <option value="basico">Basic</option>
            <option value="intermediario">Intermediate</option>
            <option value="avancado">Advanced</option>
            <option value="nativo">Native</option>
          </select>
        </p>
        <p>
          <input id="spanish" name="spanish" v-model="skills.idioms.spanish" type="checkbox">
          <label for="spanish" class="checkbox">Spanish</label>
          <select id="spanishLevel" name="spanishLevel" v-model="skills.idioms.levels.spanishLevel" type="text" v-if="skills.idioms.spanish">
            <option value="basico">Basic</option>
            <option value="intermediario">Intermediate</option>
            <option value="avancado">Advanced</option>
            <option value="nativo">Native</option>
          </select>
        </p>
      </fieldset>
    </p>
  </div>`,
  computed: {
    languages() {
      return this.skills.languages;
    },
    portuguese() {
      return this.skills.idioms.portuguese;
    },
    english() {
      return this.skills.idioms.english;
    },
    spanish() {
      return this.skills.idioms.spanish;
    },
    portugueseLevel() {
      return this.skills.idioms.levels.portugueseLevel;
    },
    englishLevel() {
      return this.skills.idioms.levels.englishLevel;
    },
    spanishLevel() {
      return this.skills.idioms.levels.spanishLevel;
    },
  },
  watch: {
    languages(languages) {
      this.checkLanguage(languages);
    },
    portuguese(portuguese) {
      this.checkIdiom(portuguese);
    },
    portugueseLevel(portugueseLevel) {
      this.checkIdiom(portuguese);
    },
    english(english) {
      this.checkIdiom(english);
    },
    englishLevel(englishLevel) {
      this.checkIdiom(englishLevel);
    },
    spanish(spanish) {
      this.checkIdiom(spanish);
    },
    spanishLevel(spanishLevel) {
      this.checkIdiom(spanishLevel);
    },
  },
  methods: {
    checkLanguage() {
      if (this.languages.length < 1) {
        this.error['linguagem'] = 'Choose at least 1 language';
        return;
      }
      this.error['linguagem'] = '';
    },
    checkIdiom() {
      if ((this.portuguese && !this.portugueseLevel) ||
        (this.english && !this.englishLevel) ||
        (this.spanish && !this.spanishLevel)
      ) {
        this.error['idioms'] = 'Choose a level for selected Spanish';
        return;
      }
      this.error['idioms'] = '';
    }
  }
});
