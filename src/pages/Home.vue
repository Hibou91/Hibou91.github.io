<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <MainMenu></MainMenu>

      <v-main class="" style="min-height: 300px;">
        <BioSection />
        <div class="py-12 d-flex flex-column justify-center align-center">
          <div>
            
            <div class="d-flex flex-column align-left">
              <span class="text-h5 mb-5">Designing programs and programming designs</span>
              <span class="text-p">Programs can be more than just tools.  </span>
              <span class="text-p">Designing and with creativity can take even the most simple concept to the next level.  </span>
            </div>
          </div>

        </div>
        <HelldiverSection />
      </v-main>
    </v-layout>




  </v-app>
</template>

<script setup>
import MainMenu from '../components/main/MainMenu.vue';
import BioSection from '../components/main/BioSection.vue';
import HelldiverSection from '../components/main/HelldiverSection.vue';

</script>