<template>
    <div id="propgrammerbio" class="section-bg section-bio-bg" >
        <div class="section-bio-fg">

        </div>
        <div class="d-flex justify-space-around">
           
            <div class="section-infoCard">




                <v-window v-model="window" show-arrows="hover">
                    <template v-slot:prev="{ props }">
                        <div @click="props.onClick">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                            </svg>
                        </div>

                    </template>
                    <template v-slot:next="{ props }">
                        <div @click="props.onClick">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </div>
                    </template>
                    <v-window-item key="baseData">
                        <v-card class="d-flex flex-column justify-center align-center" height="50vh">
                            <span class="text-h5 mb-5">Helldivers Ticketing</span>
                            <div class="d-flex flex-column align-left">
                                <span class="text-p">To-do lists </span>
                                <span class="text-p">Personal, hobby and work </span>
                                <span class="text-p">Gothic Fantasy </span>

                                <RouterLink to="/helldivers" class="mt-5"><v-btn variant="outlined" >Check the Docs</v-btn></RouterLink>
                                
                            
                            </div>

                        </v-card>
                    </v-window-item>
                    <v-window-item key="experience">
                        <v-card class="d-flex flex-column justify-center align-center" height="50vh">
                            <span class="text-h5 mb-5">Technology </span>
                            <div class="d-flex flex-column align-left">
                                <span class="text-p">Electron </span>
                                <span class="text-p">Vue </span>
                                <span class="text-p">Vue router </span>
                            </div>
                        </v-card>
                    </v-window-item>
                    <v-window-item key="education">
                        <v-card class="d-flex flex-column justify-center align-center" height="50vh">
                            <span class="text-h5 mb-5">Graphics </span>
                            <div class="d-flex flex-column align-left">
                                <span class="text-p">Photoshop  </span>
                                <span class="text-p">Krita </span>
                            </div>
                        </v-card>
                    </v-window-item>
                </v-window>

            </div>
            <div>

</div>

        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
        length: 3,
        window: 0,
    }),
}
</script>
<style scoped>
.section-infoCard {
    max-width: 50%;
    width: 300px;
}

.section-bio-bg {
    background-image: url("/main/helldivers_bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    position: relative;
}

.section-bio-fg {
    background-image: url("/main/helldivers_fg.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
}

@media only screen and (max-width: 600px) {
    .section-infoCard {
    max-width: 100%;
    width: 100%;
}
}
</style>