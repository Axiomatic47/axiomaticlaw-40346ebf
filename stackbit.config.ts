import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'custom', // Specify your static site generator if not custom
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'], // Directory where your content files are stored
      models: [
        {
          name: 'Page',
          type: 'page', // This indicates it's a page model
          urlPath: '/{slug}', // Use the "slug" field to define URLs
          filePath: 'content/pages/{slug}.json', // Location of content files
          fields: [
            { name: 'title', type: 'string', required: true }, // Define fields for the page
            { name: 'slug', type: 'string', required: true },  // Define slug for the page
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
  devCommand: 'npm run dev', // Command to start your development server
  postInstallCommand: 'npm i --no-save @stackbit/types',

  // Populate the site map for editable page URLs
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
