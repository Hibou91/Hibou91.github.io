<template>
    <div class="flex-row " style="margin-top: 30px;">
        <div class="col-menu-left">
            <div class="relative">
                <img src="/helldivers/ui/round_bg_yellow.png" alt="" srcset="" width="70" class="absolute ">

                <img v-if="icon == 'castle'" src="/helldivers/ui/eye_button_long_castle.png" alt="" srcset=""
                    width="70" class="absolute">
                <img v-if="icon == 'garden'" src="/helldivers/ui/eye_button_long_garden.png" alt="" srcset=""
                    width="70" class="absolute">
                <img v-if="icon == 'keeper'" src="/helldivers/ui/eye_button_long_keeper.png" alt="" srcset=""
                    width="70" class="absolute">
                <img v-if="icon == 'library'" src="/helldivers/ui/eye_button_long_library.png" alt="" srcset=""
                    width="70" class="absolute">
                <img v-if="icon == 'loot'" src="/helldivers/ui/eye_button_long_loot.png" alt="" srcset=""
                    width="70" class="absolute">
                <img v-if="icon == 'necategory'" src="/helldivers/ui/eye_button_long_necategory.png" alt=""
                    srcset="" width="70" class="absolute">
                <img v-if="icon == 'newquest'" src="/helldivers/ui/eye_button_long_newquest.png" alt=""
                    srcset="" width="70" class="absolute">
                <img v-if="icon == 'questcategory'" src="/helldivers/ui/eye_button_long_questcategory.png"
                    alt="" srcset="" width="70" class="absolute">
                <img v-if="icon == 'salon'" src="/helldivers/ui/eye_button_long_salon.png" alt="" srcset=""
                    width="70" class="absolute">
                <img v-if="icon == 'scavenge'" src="/helldivers/ui/eye_button_long_scavenge.png" alt=""
                    srcset="" width="70" class="absolute">

                <img src="/helldivers/ui/round_frame.png" alt="" srcset="" width="70" class="absolute ">
            </div>

        </div>
        <div class="col-menu-right">
            <h3 style="margin: 25px">{{ label }}</h3>

        </div>
    </div>
</template>

<script setup>

defineProps(['icon', 'label'])
</script>

<style scoped>
.col-menu-left {
    width: 100px;
}

.col-menu-right {
    width: calc(100% - 100px);
}
</style>