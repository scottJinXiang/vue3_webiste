import { ref, type Ref, computed, type ComputedRef } from 'vue'

interface UseTimer {
    time: Ref<number>;
    formattedTime: ComputedRef<string>;
    startTimer: () => void;
    stopTimer: () => void;
    resetTimer: () => void;
}


const time: Ref<number> = ref(0)

export function useTimer(): UseTimer {
    let timerInterval: ReturnType<typeof setInterval> | null = null
    const startTimer = (): void => {
        if (timerInterval) return;
        timerInterval = setInterval(() => {
            time.value++
        }, 1000)
    }

    const stopTimer = (): void => {
        clearInterval(timerInterval as NodeJS.Timeout);
        timerInterval = null;
    }

    const resetTimer = (): void => {
        time.value = 0
    }

    const formattedTime = computed<string>(() => {
        const minutes = Math.floor(time.value / 60)
        const seconds = time.value % 60
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    })

    return {
        time,
        formattedTime,
        startTimer,
        stopTimer,
        resetTimer
    }
}