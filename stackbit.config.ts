import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'custom',
  contentSources: [
    new GitContentSource({
      repo: 'git@github.com:Axiomatic47/axiomaticlaw-40346ebf.git',
      branch: 'main',
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        {
          name: 'Page',
          type: 'page',
          urlPath: '/{slug}',
          filePath: 'content/pages/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'slug', type: 'string', required: true },
          ],
        },
        {
          name: 'Blog',
          type: 'page',
          urlPath: '/blog/{slug}',
          filePath: 'content/blog/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'slug', type: 'string', required: true },
          ],
        },
      ],
    }),
  ],
  devCommand: 'npm run dev',
  devServer: {
    url: 'http://localhost:8080',
  },
  buildCommand: 'npm run build',
  postInstallCommand: 'npm i --no-save @stackbit/types',
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === 'page');
    return documents
      .filter((d) => pageModels.some((m) => m.name === d.modelName))
      .map((document) => {
        const urlPath =
          document.modelName === 'Page'
            ? `/${document.fields.slug}`
            : `/blog/${document.fields.slug}`;
        return {
          stableId: document.id,
          urlPath,
          document,
          isHomePage: document.fields.slug === 'home',
        };
      }) as SiteMapEntry[];
  },
});
