export const randomRange = (min, max) => Math.random() * (max - min) + min

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
