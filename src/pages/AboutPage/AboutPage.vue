<template>
  <div class="l-main">
    <section class="about section" id="about">
        <h2 class="section-title">About</h2>

        <div class="about__container bd-grid">
            <div class="about__img">
                <img src="./images/scott02.jpg" alt="">
            </div>

            <div>
                <h2 class="about__subtitle">I'm Scott</h2>
                <p class="about__text">前端工作求職中</p>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.about{
    min-height: calc(100vh);
    row-gap: 1rem;
}
.about__container{
    row-gap: 2rem;
    text-align: center;
}
.about__subtitle{
    margin-bottom: var(--mb-2);
}
.about__img{
    justify-self: center;
}
.about__img img{
    width: 200px;
    border-radius: .5rem;
}
</style>