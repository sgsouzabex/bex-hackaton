console.log(import.meta.env.VITE_BASE_URL)
const useApi = $fetch.create({ baseURL: import.meta.env.VITE_BASE_URL })

export { useApi }
