export const config = {
    env: import.meta.env.VITE_ENV,
    isProd: import.meta.env.VITE_ENV === 'production',
    isDev: import.meta.env.VITE_ENV === 'development'
}