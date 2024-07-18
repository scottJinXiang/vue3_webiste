<script lang="ts" setup>
    import { onMounted } from "vue";
    import GridCell from "../../components/QueensGame/GridCell.vue";
    import { createGame } from "../../utils/queensGame/createGame";
    import WinMessage from "../../components/QueensGame/WinMessage.vue"
    import AppTimer from "../../components/QueensGame/AppTimer.vue"
    import { useTimer } from "../../utils/queensGame/useTimer"
    import AppButton from "../../components/QueensGame/AppButton.vue"
    import { cellColors } from "../../data/queensGame/cellColors"

    const {
        boardState,
        gameWon,
        isValidQueen,
        toggleCell,
        clearBoard,
    } = createGame()

    const { startTimer, stopTimer, resetTimer } = useTimer();

    function handleToggleCell(rowIndex: number, cellIndex: number): void {
        toggleCell(rowIndex, cellIndex)

        if (gameWon.value) {
            stopTimer();
        }
    }

    function resetGame(): void {
        clearBoard();
        resetTimer();
    }

    onMounted(() => {
        startTimer();
    });
    
</script>

<template>
    <div class="l-main">
        <section class="section">
            
            <div class="center" style="margin: 10% 3% 0% 3%;">
                皇后是一款結合了掃雷、象棋和數獨元素的益智遊戲遊戲在一個8x8的棋盤上進行，目標是按照特定規則在棋盤上放置八個皇后，同時滿足所有這些約束條件即可勝利
            </div>
            <div class="center" style="margin-bottom: 2%;">
                <ul>
                    <li>👑每行一個皇后</li>
                    <li>👑每列一個皇后</li>
                    <li>👑每個顏色區域內一個皇后</li>
                    <li>👑任何兩個皇后不能放置在相鄰的對角線格子上</li>
                </ul>
            </div>
            <div class="game-board">
                <template v-for="(row, rowIndex) in boardState">
                    <GridCell
                        v-for="(cell, cellIndex) in row"
                        :key="`${rowIndex}-${cellIndex}`"
                        :content="cell.content"
                        :color="cellColors[cell.section]"
                        :invalid="isValidQueen(rowIndex, cellIndex)"
                        @click="handleToggleCell(rowIndex, cellIndex)"
                    />
                </template>
            </div>
            <div class="center">
                <AppTimer />
            </div>
            <div class="center">
                <WinMessage v-if="gameWon" />
            </div>
            <div class="center">
                <AppButton @click="resetGame">Reset Game</AppButton>
                <AppButton @click="clearBoard">Clear Board</AppButton>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .game-board {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(8, 42px);
        grid-template-rows: repeat(8, 42px);
        border: 1px solid #100;
    }
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>