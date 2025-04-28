export function useCountdown(initialSeconds = 120) {
  const time = ref('2:00')
  const secondsLeft = ref(initialSeconds)
  let interval: NodeJS.Timer | null = null

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString()
    const sec = (s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  const start = () => {
    if (interval) clearInterval(interval)

    time.value = formatTime(secondsLeft.value)

    interval = setInterval(() => {
      if (secondsLeft.value <= 0) {
        clearInterval(interval!)
        return
      }

      secondsLeft.value--
      time.value = formatTime(secondsLeft.value)
    }, 1000)
  }

  const reset = () => {
    secondsLeft.value = initialSeconds
    time.value = formatTime(initialSeconds)
  }

  onUnmounted(() => {
    if (interval) clearInterval(interval)
  })

  return {
    time,
    start,
    reset,
    secondsLeft,
  }
}
