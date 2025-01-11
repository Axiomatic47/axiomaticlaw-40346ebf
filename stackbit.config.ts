import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    nodeVersion: '18',
    ssgName: 'custom', // Update if you're using a specific static site generator like Next.js or Hugo
    contentSources: [
        {
            name: 'git',
            type: 'git',
            options: {
                repo: 'git@github.com:Axiomatic47/axiomaticlaw-40346ebf.git',
                branch: 'main',
            },
        },
    ],
    devCommand: 'npm run dev',
    postInstallCommand: 'npm i --no-save @stackbit/types',
});

