<template>
  <div class="l-main">
    <section class="work section" id="work">
        <h2 class="section-title">Work</h2>

        <div class="work__container bd-grid">
            <div v-for="img in imgs" :key="img.id" class="work__img">
                <label>{{ img.title }}</label>
                <a v-if="img.extrenal" :href="img.url">
                    <img :src="img.src" alt="" :title="img.title">
                </a>
                <router-link v-else :to="img.url">
                    <img :src="img.src" alt="" :title="img.title">
                </router-link>
            </div>
        </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const faceswapimg = computed(
  () => new URL(`./images/faceswapimg.png`, import.meta.url).href
)
const Fullcalendar = computed(
  () => new URL(`./images/scott02.jpg`, import.meta.url).href
)
const QueensGame = computed(
  () => new URL(`./images/queeensgame.png`, import.meta.url).href
)

const imgs = ref([
    {
        "id":1,
        "url": "https://github.com/scottJinXiang/FaceSwap_application",
        "src": faceswapimg,
        "title": "FaceSwap application",
        "extrenal": true
    },
    {
        "id":2,
        "url": "/project/fullcalendar",
        "src": Fullcalendar,
        "title": "Fullcalendar practice",
        "extrenal": false
    },
    {
        "id":3,
        "url": "/queens-game",
        "src": QueensGame,
        "title": "QueensGame",
        "extrenal": false
    },
    {
        "id":4,
        "url": "",
        "src": "",
        "title": "",
        "extrenal": false
    },
    {
        "id":5,
        "url": "",
        "src": "",
        "title": "",
        "extrenal": false
    },
    {
        "id":6,
        "url": "",
        "src": "",
        "title": "",
        "extrenal": false
    },
])
</script>

<style scoped>
.work{
    text-align: center;
}
.work__container{
    row-gap: 2rem;
}
.work__img{
    box-shadow: 0 4px 25px rgba(14,36,49,.15);
    border-radius: .5rem;
    overflow: hidden;
    margin-right: 30px;
    margin-left: 30px;
    justify-self: center;
    align-self: center;
    border: 1px solid var(--second-color);
    max-width: 300px;
    max-height: 300px;
}
.work__img img{
    transition: 1s;
    cursor: pointer;
}
.work__img img:hover{
    transform: scale(1.5);
}
</style>