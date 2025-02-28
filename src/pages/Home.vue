<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <MainMenu></MainMenu>

      <v-main class="" style="min-height: 300px;">
        <BioSection />
        
      </v-main>
    </v-layout>




  </v-app>
</template>

<script setup>
import MainMenu from '../components/main/MainMenu.vue';
import BioSection from '../components/main/BioSection.vue';
import HelldiverSection from '../components/main/HelldiverSection.vue';
</script>