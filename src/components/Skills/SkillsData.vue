<script setup lang="ts">
    interface Props {
        skillName: string,
        skillPercentage: number,
        skillIcon: string[],
    }
    const props = defineProps<Props>()

</script>
<template>
  <div class="skills__data">
    <div class="skills__names">
        <i :class='skillIcon' class="skills__icon"></i>
        <span>{{ skillName }}</span>
    </div>

    <div>
        <span class="skills__percentage">{{ skillPercentage.toString() + '%' }}</span>
    </div>
    
    <div class="skills__bar skills__width"></div>
  </div>
</template>

<style scoped>
.skills__icon{
    font-size: 2rem;
    margin-right: var(--mb-2);
    color: var(--first-color);
}
.skills__data{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-weight: var(--font-semi);
    padding: .5rem 1rem;
    margin-bottom: var(--mb-4);
    border-radius: .5rem;
    box-shadow: 0 4px 25px rgba(14,36,49,.15);
}
.skills__bar{
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: var(--first-color);
    height: .25rem;
    border-radius: .5rem;
    z-index: var(--z-back);
}

.skills__width{
    width: v-bind(skillPercentage + "%");
}

.skills__names{
    display: flex;
    align-items: center;
}
</style>