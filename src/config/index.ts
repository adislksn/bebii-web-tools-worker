import dotenv from 'dotenv'

dotenv.config()

type ConfigEnv = {
    port: number,
    urlVersioning: string,
    urlBase: string,
}

export const CONFIG:ConfigEnv = {
    port: Number(process.env.APP_PORT ?? 3000),
    urlVersioning: '/api/v1',
    urlBase: process.env.APP_BASE_URL ?? 'http://localhost:3000'
}