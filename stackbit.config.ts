import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'custom', // Specify your static site generator if not custom
  contentSources: [
    new GitContentSource({
      repo: 'git@github.com:Axiomatic47/axiomaticlaw-40346ebf.git', // Replace with your Git repository URL
      branch: 'main', // Specify the branch containing your content
      rootPath: __dirname,
      contentDirs: ['src/data'], // Update the content directory to point to /src/data
      models: [
        {
          name: 'Page',
          type: 'page', // Indicates it's a page model
          urlPath: '/{slug}', // Use the "slug" field to define URLs
          filePath: 'src/data/{slug}.ts', // Adjust path based on file location
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

  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === 'page');

    return documents
      .filter((d) => pageModels.some((m) => m.name === d.modelName))
      .map((document) => ({
        stableId: document.id,
        urlPath: `/${document.fields.slug}`,
        document,
        isHomePage: document.fields.slug === 'home',
      })) as SiteMapEntry[];
  },
});
