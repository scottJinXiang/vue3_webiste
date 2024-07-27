<script setup lang="ts">
import { vConfetti } from "@neoconfetti/vue"

defineProps(["win"]);
</script>

<template>
    <template v-if="win">
        <span v-confetti="{particleCount: 200, force: 0.3}"/>
        <div class="win-message">
            Congratulations! You have won the game! 🎉
        </div>
    </template>
    <div v-else class="win-message">
        Fighting!
    </div>
</template>

<style scoped>
.win-message {
    font-size: 14px;
    margin: 10px 0;
    color: #000;
}
</style>