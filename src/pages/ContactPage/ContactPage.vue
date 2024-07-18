<template>
  <div class="l-main">
    <section class="contact section" id="contact">
        <h2 class="section-title">Contact</h2>

        <div class="contact__container bd-grid">
            <form action="" class="contact__form">
                <input type="text" placeholder="Name" class="contact__input">
                <input type="mail" placeholder="Email" class="contact__input">
                <textarea name="" id="" placeholder="聯絡我，我有可能是你的得力助手 !" cols="0" rows="10" class="contact__input"></textarea>

                <input type="button" value="Submit" class="contact__button button">
            </form>
        </div>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
.contact__input{
    width: 100%;
    font-size: var(--normal-font-size);
    font-weight: var(--font-semi);
    padding: 1rem;
    border-radius: .5rem;
    border: 1.5px solid var(--second-color);
    outline: none;
    margin-bottom: var(--mb-4);
}
.contact__button{
    display: block;
    border: none;
    outline: none;
    font-size: var(--normal-font-size);
    cursor: pointer;
    margin-left: auto;
}
</style>