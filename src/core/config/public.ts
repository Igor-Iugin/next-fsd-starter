import {createEnv} from '@t3-oss/env-nextjs'
import {vercel} from '@t3-oss/env-nextjs/presets'
import {z} from 'zod'


export const publicConfig = createEnv({
	client: {},
	shared: {
		NODE_ENV: z.enum(['development', 'production'])
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV
	},
	extends: [vercel()]
})
