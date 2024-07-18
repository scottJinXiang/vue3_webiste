<template>
      <header class="l-header">
        <nav class="nav bd-grid">
            <div>
                <router-link to="*" class="nav__logo">Scott</router-link>
            </div>
            <div :class="[isMenuShow ? show : '']" class="nav__menu " id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item" @click="isMenuShow = !isMenuShow"><router-link to="/home" class="nav__link" active-class="active">Home</router-link></li>
                    <li class="nav__item" @click="isMenuShow = !isMenuShow"><router-link to="/about" class="nav__link" active-class="active">About</router-link></li>
                    <li class="nav__item" @click="isMenuShow = !isMenuShow"><router-link to="/skills" class="nav__link" active-class="active">Skills</router-link></li>
                    <li class="nav__item" @click="isMenuShow = !isMenuShow"><router-link to="/work" class="nav__link" active-class="active">Work</router-link></li>
                    <li class="nav__item" @click="isMenuShow = !isMenuShow"><router-link to="/contact" class="nav__link" active-class="active">Contact</router-link></li>
                    <li class="nav__item" >
                        <i @click="emit('changeColor')"
                            class="bx bxs-palette nav__item__palette" >
                        </i>
                    </li>
                </ul>
            </div>

            <div class="nav__toggle" id="nav-toggle">
                <i @click="isMenuShow = !isMenuShow" class='bx bx-menu'></i>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits<{
    (e: 'changeColor'): void;
}>()
const isMenuShow = ref(false)
const show = ref('show')
</script>

<style >
</style>