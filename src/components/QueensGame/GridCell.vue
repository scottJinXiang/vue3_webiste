<script setup lang="ts">
// interface Props {
//     content: boolean,
//     color: string,
// }

defineProps(["content", "color"]);
</script>
<template>
    <div class="cell" :style="{ backgroundColor: color }">
        <!-- <img v-if="content === 'queen'" class="queen" /> -->
        <span v-if="content === 'queen'" class="queen">♛</span>
        <span v-if="content === 'marked'">x</span>
    </div>
</template>
<style scoped>
.cell {
    font-size: 24px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
}

.queen {
    /* width: 24px;
    height: 24px; */
    color: gold;
}
</style>