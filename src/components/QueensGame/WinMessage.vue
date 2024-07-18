<script setup lang="ts">
import { vConfetti } from "@neoconfetti/vue"
</script>

<template>
    <span v-confetti="{particleCount: 200, force: 0.3}"/>
    <div class="win-message">
        Congratulations! You have won the game! 🎉
    </div>
</template>

<style scoped>
.win-message {
    font-size: 14px;
    margin: 10px 0;
    color: #000;
}
</style>