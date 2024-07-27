<template>
    <button><slot /></button>
</template>

<style scoped>
button {
    background: var(--first-color);
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    font-size: 12px;
    margin-right: 10px;
}
</style>
