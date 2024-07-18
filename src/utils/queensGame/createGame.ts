import { ref, computed, type Ref, type ComputedRef } from 'vue';
import { sectionGrid } from '../../data/queensGame/sectionGrid'


interface Cell {
    content: 'marked' | 'queen' | null;
    section: number;
}
interface Queen {
    row: number;
    col: number;
    valid: boolean;
}


function createBoard(): Cell[][] {
    return sectionGrid.map((row) =>
        row.map((section) => ({
            content: null,
            section
        }))
    )
}

export function createGame() {
    const boardState: Ref<Cell[][]> = ref(createBoard())
    const queens: Ref<Queen[]> = ref([])

    function resetValidations(): void {
        queens.value.forEach((queen) => (queen.valid = true))
    }

    function validateRow(rowIndex: number): boolean {
        const queensInRow: Array<Queen> = queens.value.filter((queen) => queen.row === rowIndex)

        if (queensInRow.length > 1 ){
            queensInRow.forEach((queen) => (queen.valid = false))
            return false
        }
        return true
    }

    function validateColumn(columnIndex: number): boolean {
        const queensInColumn: Array<Queen> = queens.value.filter((queen) => queen.col === columnIndex)

        if (queensInColumn.length > 1) {
            queensInColumn.forEach((queen) => (queen.valid = false))
            return false
        }
        return true
    }

    function validateSection(section: number): boolean {
        const queensInSection: Array<Queen> = queens.value.filter((queen) => {
            const { row, col } = queen
            return boardState.value[row][col].section === section
        })

        if (queensInSection.length > 1) {
            queensInSection.forEach((queen) => (queen.valid = false))
            return false
        }
        return true
    }

    function checkDiagonalConflicts(queen: Queen): boolean {
        const directions: [number, number][] = [
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1]
        ]

        let conflicts: boolean = false
        const { row: rowIndex, col: colIndex } = queen
        for (const [dx, dy] of directions) {
            const newRow: number = rowIndex + dx
            const newCol: number = colIndex + dy

            if (
                newRow >= 0 &&
                newRow < boardState.value.length &&
                newCol >= 0 &&
                newCol < boardState.value[0].length
            ) {
                const adjacentQueen: Queen | undefined = queens.value.find((q) => q.row === newRow && q.col === newCol)
                if (adjacentQueen) {
                    queen.valid = false
                    adjacentQueen.valid = false
                    conflicts = true
                }
            }
        }

        return !conflicts
    }

    function validateBoard(): void {
        resetValidations()

        for (const queen of queens.value) {
            const { row, col } = queen
            const cell: Cell = boardState.value[row][col]
            const rowValid: boolean = validateRow(row)
            const columnValid: boolean = validateColumn(col)
            const sectionValid: boolean = validateSection(cell.section)
            const diagonalValid: boolean = checkDiagonalConflicts(queen)

            queen.valid = rowValid && columnValid && sectionValid && diagonalValid
        }
    }

    function isValidQueen(rowIndex: number, cellIndex: number): boolean {
        return queens.value.some(
            (queen) => queen.row === rowIndex && queen.col === cellIndex && !queen.valid
        )
    }

    function toggleCell(rowIndex: number, cellIndex: number): void {
        const cell: Cell = boardState.value[rowIndex][cellIndex]

        if (!cell.content) {
            cell.content = 'marked'
        } else if (cell.content === 'marked') {
            cell.content = 'queen'
            queens.value.push({ row: rowIndex, col: cellIndex, valid: true })
        } else {
            queens.value = queens.value.filter(
                (queen) => queen.row !== rowIndex || queen.col !== cellIndex
            )
            cell.content = null
        }

        validateBoard()
    }

    function clearBoard(): void {
        boardState.value = boardState.value.map((row) =>
            row.map((cell) => ({ ...cell, content: null }))
        )
        queens.value = []
    }

    const gameWon: ComputedRef<boolean> = computed(() => {
        if (queens.value.length !== sectionGrid.length) {
            return false
        }

        return queens.value.every((queen) => queen.valid)
    })

    return {
        boardState,
        toggleCell,
        queens,
        isValidQueen,
        clearBoard,
        gameWon
    }
}