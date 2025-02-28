<template>
    <div>
        <v-app-bar :elevation="5" density="compact">
            <template v-slot:prepend>
                
                <v-app-bar-nav-icon>
                    
                </v-app-bar-nav-icon>
            </template>

            <!--<v-app-bar-title>Application Bar</v-app-bar-title>-->
            <RouterLink to="/helldivers"><v-btn variant="plain">Helldivers Ticketing</v-btn></RouterLink>
        </v-app-bar>
    </div>
</template>