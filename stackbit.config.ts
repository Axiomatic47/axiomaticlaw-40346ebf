import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'custom',
  contentSources: [
    new GitContentSource({
      repo: 'git@github.com:Axiomatic47/axiomaticlaw-40346ebf.git', // Replace with your Git repo
      branch: 'main',
      rootPath: __dirname,
      contentDirs: ['src/data'], // Adjusted to match your data directory
      models: [
        {
          name: 'Page',
          type: 'page',
          urlPath: '/{slug}',
          filePath: 'src/data/pages/{slug}.json', // Adjusted to reflect directory structure
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'slug', type: 'string', required: true },
          ],
        },
        {
          name: 'Blog',
          type: 'page',
          urlPath: '/blog/{slug}',
          filePath: 'src/data/blog/{slug}.json', // Adjusted to reflect directory structure
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'slug', type: 'string', required: true },
          ],
        },
      ],
    }),
  ],
  devCommand: 'npm run dev', // Command for running the dev server
  postInstallCommand: 'npm i --no-save @stackbit/types',

  // Generate sitemap entries
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === 'page');

    return documents
      .filter((doc) => pageModels.some((model) => model.name === doc.modelName))
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
