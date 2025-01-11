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
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/',
                staticPath: '/images'
            },
            models: [
                {
                    name: 'discipline',
                    type: 'page',
                    urlPath: '/{id}',
                    filePath: 'content/pages/{id}.json',
                    label: 'Discipline',
                    fields: [
                        { name: 'id', type: 'string', required: true },
                        { name: 'title', type: 'string', required: true },
                        { name: 'description', type: 'string' },
                        {
                            name: 'compositions',
                            type: 'list',
                            items: {
                                type: 'object',
                                fields: [
                                    { name: 'id', type: 'string', required: true },
                                    { name: 'title', type: 'string', required: true },
                                    { name: 'description', type: 'string' },
                                    {
                                        name: 'sections',
                                        type: 'list',
                                        items: {
                                            type: 'object',
                                            fields: [
                                                { name: 'id', type: 'string', required: true },
                                                { name: 'title', type: 'string', required: true },
                                                { name: 'content', type: 'markdown' }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        })
    ]
});