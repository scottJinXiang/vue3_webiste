<template>
    <!-- ===== FOOTER ===== -->
    <footer class="footer">
        <p class="footer__title">JinXiang</p>

        <div class="footer__social">
            <a href="" class="footer__icon"><i class='bx bxl-facebook-circle' ></i></a>
            <a href="" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
            <a href="https://github.com/scottJinXiang" class="footer__icon"><i class='bx bxl-github' ></i></a>
        </div>
        <p>&#169;2021 copyright all right reserved</p>

    </footer>
</template>

<script setup lang="ts">
</script>

<style>
    /* ===== FOOTER ===== */
    .footer{
        background-color: var(--second-color);
        color: #fff;
        text-align: center;
        font-weight: var(--font-semi);
        padding: 2rem 0;
    }
    .footer__title{
        font-size: 2rem;
        margin-bottom: var(--mb-4);
    }
    .footer__social{
        margin-bottom: var(--mb-4);
    }
    .footer__icon{
        font-size: 1.5rem;
        color: #fff;
        margin: 0 var(--mb-2);
    }
</style>