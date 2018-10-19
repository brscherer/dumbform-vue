export const SkillsComponent = Vue.component('skills-component', {
  props: {
    error: Array,
    skills: {
      linguagens: Array,
      idiomas: {
        portugues: Boolean,
        ingles: Boolean,
        espanhol: Boolean,
        levels: {
          portuguesLevel: String,
          inglesLevel: String,
          espanholLevel: String,
        }
      }
    },
  },
  template: `
  <div>
    <p>
      <span class="error" v-if="error.linguagem">{{ error.linguagem }}<br></span>
      <label for="linguagens">Linguagens: </label>
      <select id="linguagens" name="linguagens" v-model="skills.linguagens" type="text" multiple>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="C#">C#</option>
        <option value="PHP">PHP</option>
      </select>
    </p>

    <p>
      <fieldset id="idiomas">
        <legend>Idiomas</legend>
        <span class="error" v-if="error.idioma">{{ error.idioma }}<br></span>
        <p>
          <input id="portugues" name="portugues" v-model="skills.idiomas.portugues" type="checkbox">
          <label for="portugues" class="checkbox">Português</label>
          <select id="portuguesLevel" name="portuguesLevel" v-model="skills.idiomas.levels.portuguesLevel" type="text" v-if="skills.idiomas.portugues">
            <option value="basico">Básico</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
            <option value="nativo">Nativo</option>
          </select>
        </p>
        <p>
          <input id="ingles" name="ingles" v-model="skills.idiomas.ingles" type="checkbox">
          <label for="ingles" class="checkbox">Inglês</label>
          <select id="inglesLevel" name="inglesLevel" v-model="skills.idiomas.levels.inglesLevel" type="text" v-if="skills.idiomas.ingles">
            <option value="basico">Básico</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
            <option value="nativo">Nativo</option>
          </select>
        </p>
        <p>
          <input id="espanhol" name="espanhol" v-model="skills.idiomas.espanhol" type="checkbox">
          <label for="espanhol" class="checkbox">Espanhol</label>
          <select id="espanholLevel" name="espanholLevel" v-model="skills.idiomas.levels.espanholLevel" type="text" v-if="skills.idiomas.espanhol">
            <option value="basico">Básico</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
            <option value="nativo">Nativo</option>
          </select>
        </p>
      </fieldset>
    </p>
  </div>`,
  computed: {
    linguagens() {
      return this.skills.linguagens;
    },
    portugues() {
      return this.skills.idiomas.portugues;
    },
    ingles() {
      return this.skills.idiomas.ingles;
    },
    espanhol() {
      return this.skills.idiomas.espanhol;
    },
    portuguesLevel() {
      return this.skills.idiomas.levels.portuguesLevel;
    },
    inglesLevel() {
      return this.skills.idiomas.levels.inglesLevel;
    },
    espanholLevel() {
      return this.skills.idiomas.levels.espanholLevel;
    },
  },
  watch: {
    linguagens(linguagens) {
      this.validLanguage(linguagens);
    },
    portugues(portugues) {
      this.validIdiom(portugues);
    },
    portuguesLevel(portuguesLevel) {
      this.validIdiom(portugues);
    },
    ingles(ingles) {
      this.validIdiom(ingles);
    },
    inglesLevel(inglesLevel) {
      this.validIdiom(inglesLevel);
    },
    espanhol(espanhol) {
      this.validIdiom(espanhol);
    },
    espanholLevel(espanholLevel) {
      this.validIdiom(espanholLevel);
    },
  },
  methods: {
    validLanguage() {
      if (this.linguagens.length < 1) {
        this.error['linguagem'] = 'Escolha pelo menos uma linguagem.';
        return;
      }
      this.error['linguagem'] = '';
    },
    validIdiom() {
      if ((this.portugues && !this.portuguesLevel) ||
        (this.ingles && !this.inglesLevel) ||
        (this.espanhol && !this.espanholLevel)
      ) {
        this.error['idioma'] = 'Indique seu nível no idioma selecionado.';
        return;
      }
      this.error['idioma'] = '';
    }
  }
});
