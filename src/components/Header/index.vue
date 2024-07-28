<template>
      <header class="l-header">
        <nav class="nav bd-grid">
            <div class="rainbow">
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

<style scoped>

.rainbow {
    position: relative;
	z-index: 0;
	border-radius: 10px;
	overflow: hidden;
	padding: 0.7rem;
}

.rainbow::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
    animation: rotate 4s linear infinite;
}

.rainbow::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 4px;
    top: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    background: white;
    border-radius: 6px;
    animation: opacityChange 3s infinite alternate;
}

@keyframes rotate {
    100% {
        transform: rotate(1turn);
    }
}

@keyframes opacityChange {
	50% {
		opacity:1;
	}
	100% {
		opacity: .5;
	}
}

</style>