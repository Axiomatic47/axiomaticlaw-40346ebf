import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    nodeVersion: "18",
    ssgName: "custom", // Assuming you're using a custom static site generator like Vite
    contentSources: [
        {
            name: "git",
            options: {
                branch: "main", // Replace with your working branch, if different
                repo: "Axiomatic47/axiomaticlaw-40346ebf", // Replace with your GitHub repo
            },
        },
    ],
    devCommand: "npm run dev", // Add the correct dev command for your SSG (e.g., Vite, Next.js)
    postInstallCommand: "npm i --no-save @stackbit/types",
    // Additional Stackbit Visual Editor configuration
    visualEditor: {
        landingPagePath: "/", // Set your site's default page path
    },
});
