export const camelCase = (str = '') => str.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())

// Convert camelCase to kebab-case
export const kebab = (str = '') => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
