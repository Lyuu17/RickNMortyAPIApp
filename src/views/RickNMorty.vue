<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Rick N Morty API</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <BusquedaCapitulo @entradaCallback="entradaCallback" />
      <Capitulo :capitulo="episodioDatos"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import axios from 'axios';
import BusquedaCapitulo from '@/components/BusquedaCapitulo.vue';
import Capitulo from '@/components/Capitulo.vue';

class RickNMortyAPI {
  constructor() {
    this.base = "https://rickandmortyapi.com/api";
  }

  base: string;

  async obtenerEpisodios(id: string|undefined) {
    let url = "/episode";
    if (id !== undefined)
      url = `${url}/${id}`;
    return this.obtener(url);
  }
  async obtener(args: string) {
    try {
      return await(await axios.get(`${this.base}${args}`)).data;
    }
    catch(e: any) {
      console.log(Error(e));
    }
  }
}

export default defineComponent({
  name: 'RickNMorty',
  components: { BusquedaCapitulo, Capitulo, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  emits: ["entradaCallback"],
  data() {
    return {
      api: new RickNMortyAPI(),
      episodioDatos: {}
    }
  },
  created() {
    this.resetearEpisodioDatos();
  },
  methods: {
    resetearEpisodioDatos() {
      this.episodioDatos = {
        name: "Sin datos",
        air_date: "Sin datos",
        characters: []
      };
    },
    async entradaCallback(texto: string) {
      const datos = await this.api.obtenerEpisodios(texto);
      datos != undefined ? this.episodioDatos = datos : this.resetearEpisodioDatos();
    }
  }
});
</script>
