<template>
    <div class="bg" @mouseover="state.onHover = true" @mouseleave="state.onHover = false;">

        <div class="btn-img" >


            <img v-if="color == 'GREEN'" src="/helldivers/ui/eye_bg_green.jpg" alt="" srcset="" width="60px" height="60"
                class="btn-bg eye-bg"
                :style="`left:${state.eyeMovementX}px;top:${state.eyeMovementY}px;mask-position:${state.eyeMovementX * -1}px ${state.eyeMovementY * -1}px;`"
                :ref="name + 'EyeBg'">
            <img v-if="color == 'RED'" src="/helldivers/ui/eye_bg_red.jpg" alt="" srcset="" width="60px" height="60"
                class="btn-bg eye-bg"
                :style="`left:${state.eyeMovementX}px;top:${state.eyeMovementY}px;mask-position:${state.eyeMovementX * -1}px ${state.eyeMovementY * -1}px;`"
                :ref="name + 'EyeBg'">
            <img src="/helldivers/ui/eye_pupil.png" alt="" srcset="" width="60" height="60" class="btn-bg "
                :style="`left:${state.eyeMovementX}px;top:${state.eyeMovementY}px;mask-position:${state.eyeMovementX * -1}px ${state.eyeMovementY * -1}px;`"
                :ref="name + 'EyePupil'">
            <img src="/helldivers/ui/eye_pupil_b.png" alt="" srcset="" width="60" height="60"
                class="btn-bg big-pupil"
                :style="`left:${state.eyeMovementX}px;top:${state.eyeMovementY}px;mask-position:${state.eyeMovementX * -1}px ${state.eyeMovementY * -1}px;`"
                :ref="name + 'EyePupilB'">
        </div>

        <img src="/helldivers/ui/eye_frame.png" alt="" srcset="" width="60" height="60" class="btn-img">
    </div>
</template>

<script setup>


import { ref, onMounted, useTemplateRef } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

const props = defineProps(['name', 'color'])



const EyePupil = useTemplateRef(props.name + "EyePupil")
const EyePupilB = useTemplateRef(props.name + "EyePupilB")

const state = ref({

    eyeMovementX: 0,
    eyeMovementY: 0,
    eyemovementSpeed: .6,
    eyeMaxMove: 8,
    eyeDial: 0,
    onHover: false,
})

onMounted(() => {
    state.value.rect = EyePupil.value.getBoundingClientRect();

})

const moveEye = (e) => {
    let centerY = state.value.rect.top + ((state.value.rect.bottom - state.value.rect.top) / 2)
    let centerX = state.value.rect.left + ((state.value.rect.right - state.value.rect.left) / 2)
    if (state.value.onHover == true) {
        if (EyePupilB.value) {
            EyePupilB.value.style.width = '60px' // Math.min((EyePupilB.value.style.width + state.value.eyemovementSpeed), 60) + 'px'
            EyePupilB.value.style.height = '60px'//Math.min((EyePupilB.value.style.width + state.value.eyemovementSpeed), 60)  + 'px'
        }

        if (e.clientY > centerY) {
            state.value.eyeMovementY = Math.max(state.value.eyeMovementY - state.value.eyemovementSpeed, 0)
        } else if (e.clientY < centerY) {
            state.value.eyeMovementY = Math.min((state.value.eyeMovementY + state.value.eyemovementSpeed), 0)
        }

        if (e.clientX > centerX) {
            state.value.eyeMovementX = Math.max(state.value.eyeMovementX - state.value.eyemovementSpeed, 0)
        } else if (e.clientX < centerX) {
            state.value.eyeMovementX = Math.min((state.value.eyeMovementX + state.value.eyemovementSpeed), 0)
        }
    }
    else {

        if (EyePupilB.value) {
            EyePupilB.value.style.width = '2px'
            EyePupilB.value.style.height = '2px'
        }


        if (e.clientY > centerY) {
            state.value.eyeMovementY = Math.min(state.value.eyeMovementY + state.value.eyemovementSpeed, state.value.eyeMaxMove)
        } else if (e.clientY < centerY) {
            state.value.eyeMovementY = Math.max((state.value.eyeMovementY - state.value.eyemovementSpeed), 0 - state.value.eyeMaxMove)
        }

        if (e.clientX > centerX) {
            state.value.eyeMovementX = Math.min(state.value.eyeMovementX + state.value.eyemovementSpeed, state.value.eyeMaxMove)
        } else if (e.clientX < centerX) {
            state.value.eyeMovementX = Math.max((state.value.eyeMovementX - state.value.eyemovementSpeed), 0 - state.value.eyeMaxMove)
        }
    }


}

window.addEventListener('mousemove', moveEye)

onBeforeRouteLeave((to, from) => {
    window.removeEventListener('mousemove', moveEye)
})

</script>

<style scoped>
.bg {
    width: fit-content;
    margin-top:20px;
    margin-left: 20px;
}

.btn-img {
    position: relative;
}

.btn-bg {
    position: absolute;
    mask-image: url("/helldivers/ui/eye_mask.png");
    mask-mode: alpha;
    mask-size: cover;
    mask-repeat: no-repeat;
}

.big-pupil {
    transform-origin: center;


    width: 2px;
    height: 2px;

}

.bg:active .eye-bg{
    filter: brightness(1.3);
}
</style>