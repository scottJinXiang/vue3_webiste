<script setup lang="ts">
    defineProps(["content", "color", "invalid"]);
</script>

<template>
    <div class="cell" :class="{ invalid }" :style="{ backgroundColor: color }">
        <span v-if="content === 'queen'" class="queen">👑</span>
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
.cell.invalid {
  border: 3px solid red;
  background-color: #ffcccc;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  animation: shake 0.5s ease-in-out;
}

.queen {
    color: gold;
}
</style>