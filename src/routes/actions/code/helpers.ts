export function updateName(name: string, delay = 1000) {
  return new Promise<string | null>((resolve) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(name)
      } else {
        resolve('Failed to save')
      }
    }, delay)
  })
}

