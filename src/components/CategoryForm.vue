<template>
  <v-card>
    <v-card-text>
      <v-card-title>
        Noticias
      </v-card-title>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <form>
              <v-text-field label="Nombre" v-model="name" :error-messages="nameErrors" @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
              <v-text-field label="Descripcion" v-model="description" multi-line :error-messages="descriptionErrors" @input="$v.description.$touch()" @blur="$v.description.$touch()"></v-text-field>
              <v-btn @click="submit">guardar</v-btn>
              <v-btn @click="clear">limpiar</v-btn>
            </form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import { categoryRef } from "../config/firebaseConfig";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(5) },
    description: { required, minLength: minLength(15) }
  },
  data: () => ({
    name: "",
    description: ""
  }),
  methods: {
    submit() {
      this.$v.$touch();
      this.addCategory();
      this.$v.$reset();
      this.clear();
    },
    addCategory(){
      var category = {
        name : this.name,
        description : this.description
      };
      categoryRef.push(category);
      console.log('Categoria guardada')
    },
    clear() {
      this.$v.$reset();
      this.name = null;
      this.description = null;
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("El nombre de categoria debe tener mas de 5 caracteres");
      !this.$v.name.required && errors.push("Nombre es requerido.");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.minLength &&
        errors.push("Descripcion debe tener un minimo de 15 caracteres");
      !this.$v.description.required && errors.push("Descripcion de requerido");
      return errors;
    }
  }
};
</script>
