<template>
    <!-- ===== HOME ===== -->
    <div class="l-main">
        <section class="home bd-grid" id="home">
        <div class="home__data">
            <h1 class="home__title">Hi, <br>I'm <span class="home__title-color">莊晉翔</span><br> Front-end <br>Developer</h1>
            <router-link to="/contact" class="button">Contact</router-link>
        </div>
  
        <div class="home__social">
            <a href="#" class="home__social-icon"><i class='bx bxl-linkedin-square'></i></a>
            <a href="#" class="home__social-icon"><i class='bx bxl-instagram' ></i></a>
            <a href="https://github.com/scottJinXiang" class="home__social-icon"><i class='bx bxl-github' ></i></a>
        </div>
  
        <div class="home__img">
            <img src="./images/scott01.jpg" alt="">
        </div>
        
    </section>
    </div>
  
  </template>
  
<script setup lang="ts">
</script>
  
<style scoped>



.home__title{
    font-size: var(--big-font-size);
}

.home__title-color{
    color: var(--first-color);
}



.home__social-icon{
    width: max-content;
    margin-bottom: var(--mb-2);
    font-size: 1.5rem;
    color: var(--second-color);
}
.home__social-icon:hover{
    color: var(--first-color);
}
</style>