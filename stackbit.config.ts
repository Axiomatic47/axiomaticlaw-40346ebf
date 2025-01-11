import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'custom',
    nodeVersion: '18',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content/pages'],
            models: [
                {
                    name: 'discipline',
                    type: 'data',
                    label: 'Discipline',
                    fields: [
                        { name: 'id', type: 'string', required: true },
                        { name: 'title', type: 'string', required: true },
                        { name: 'description', type: 'string' },
                        {
                            name: 'compositions',
                            type: 'list',
                            items: {
                                type: 'model',
                                models: ['composition']
                            }
                        }
                    ]
                },
                {
                    name: 'composition',
                    type: 'object',
                    label: 'Composition',
                    fields: [
                        { name: 'id', type: 'string', required: true },
                        { name: 'title', type: 'string', required: true },
                        { name: 'description', type: 'string' },
                        {
                            name: 'sections',
                            type: 'list',
                            items: {
                                type: 'model',
                                models: ['section']
                            }
                        }
                    ]
                },
                {
                    name: 'section',
                    type: 'object',
                    label: 'Section',
                    fields: [
                        { name: 'id', type: 'string', required: true },
                        { name: 'title', type: 'string', required: true },
                        { name: 'content', type: 'string' }
                    ]
                }
            ]
        })
    ],
    devCommand: 'npm run dev',
    buildCommand: 'npm run build'
});