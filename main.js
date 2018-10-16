const getColorFromRange = (color1, color2, coefficient, options = {}) => {
  const sigmoid = (x, k = 1) => 1 / (1 + Math.pow(Math.E, -k * x))
  let c = coefficient

  if (options.intensity) c = sigmoid(coefficient - 0.5, options.intensity)

  const red = color1[0] + (color2[0] - color1[0]) * c
  const green = color1[1] + (color2[1] - color1[1]) * c
  const blue = color1[2] + (color2[2] - color1[2]) * c

  return `rgb(${red}, ${green}, ${blue})`
}

module.exports = getColorFromRange
