const minMax = (min, value, max) => {
  return Math.max(min, Math.min(value, max))
}

const pctComplete = (value, maxValue) => {
  return Number(Math.round(minMax(0, value / maxValue, 1) + 'e2') + 'e-2')
}

const quantizeValue = (value, step) => {
  return Number(Math.round(value / step) * step)
}

export { quantizeValue, pctComplete, minMax }
