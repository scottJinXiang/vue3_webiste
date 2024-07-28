<template>
  <div class="l-main">
    <section class="skills section" id="skills">
        <h2 class="section-title">Skills</h2>

        <div class="skills__container bd-grid">
            <div>
                <h2 class="skills__subtitle">Profesional Skills</h2>
                <p class="skills__text"></p>

                <SkillsData v-for="(skillDetail, index) in skillDetails" v-bind="skillDetail" :key="index" :skill-delay-time="index/10" />

            </div>
            <div class="skills__img">
                <img src="./images/scott02.jpg" alt="" >
            </div>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SkillsData from '../../components/Skills/SkillsData.vue'

const skillDetails = ref([
    {
        skillName:'HTML5',
        skillPercentage:95,
        skillIcon:['bx', 'bxl-html5']
    },
    {
        skillName:'CSS3',
        skillPercentage:85,
        skillIcon:['bx', 'bxl-css3']
    },
    {
        skillName:'JAVASCRIPT',
        skillPercentage:45,
        skillIcon:['bx', 'bxl-javascript']
    },
    {
        skillName:'PYTHON',
        skillPercentage:75,
        skillIcon:['bx', 'bxl-python']
    },
    {
        skillName:'GITHUB',
        skillPercentage:55,
        skillIcon:['bx', 'bxl-github']
    },
    {
        skillName:'Vue.js',
        skillPercentage:75,
        skillIcon:['bx', 'bxl-vuejs']
    },
])
</script>

<style scoped>
.skills{
    min-height: calc(100vh);
    row-gap: 1rem;
}.skills__container{
    row-gap: 2rem;
    text-align: center;
}

.skills__subtitle{
    margin-bottom: var(--mb-2);
    text-align: left;
}
.skills__text{
    margin-bottom: var(--mb-4);
}

.skills__img{
    justify-self: center;
    border-radius: .5rem;
}
</style>