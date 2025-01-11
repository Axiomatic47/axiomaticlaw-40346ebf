import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'custom', // Specify your static site generator if not custom
  contentSources: [
    new GitContentSource({
      repo: 'git@github.com:Axiomatic47/axiomaticlaw-40346ebf.git', // Replace with your Git repository URL
      branch: 'main', // Specify the branch where your content resides
      rootPath: __dirname,
      contentDirs: ['src/data'], // Updated directory to match your actual structure
      models: [
        {
          name: 'Page',
          type: 'page', // Indicates it's a page model
          urlPath: '/{slug}', // Use the "slug" field to define URLs
          filePath: 'src/data/pages/{slug}.ts', // Adjusted path for content files in your setup
          fields: [
            { name: 'title', type: 'string', required: true }, // Define fields for the page
            { name: 'slug', type: 'string', required: true },  // Define slug for the page
          ],
        },
        {
          name: 'Blog',
          type: 'page',
          urlPath: '/blog/{slug}',
          filePath: 'src/data/blog/{slug}.ts', // Adjusted path for blog files in your setup
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
