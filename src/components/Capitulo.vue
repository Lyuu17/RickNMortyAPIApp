<template>
  <div class="text-center sm:w-1/4 m-auto pl-2 pr-2 mt-5">
    <h1 class="text-2xl text-orange-400">Título</h1>
    <p>{{ capitulo.name }}</p>

    <br>

    <h1 class="text-2xl text-orange-400">Fecha de Emisión</h1>
    <p>{{ capitulo.air_date }}</p>

    <br>

    <h1 class="text-2xl text-orange-400">Nº de personajes</h1>
    <p>{{ capitulo.characters.length }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    capitulo: {
      type: Object,
      required: true
    }
  }
});
</script>