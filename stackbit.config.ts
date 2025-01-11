import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'custom',
    nodeVersion: '18',
    devCommand: 'npm run dev',
    buildCommand: 'npm run build',
    experimental: {
        ssg: {
            name: 'vite',
            port: 8080,
        },
    },
});