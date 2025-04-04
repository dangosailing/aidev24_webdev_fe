const { configurePlugin } = require("cypress-mongodb"); // Use require instead of import

const { defineConfig } = require("cypress");
//const customViteConfig = require("./customConfig");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      // optionally pass in vite config
      //viteConfig: customViteConfig,
      // or a function - the result is merged with
      // any vite.config file that is detected
      viteConfig: async () => {
        // ... do things ...
        const modifiedConfig = await injectCustomConfig(baseConfig);
        return modifiedConfig;
      },
    },
  },
  env: {
    mongodb: {
      uri: "mongodb://localhost:27017",
      database: "runprepper",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on);
    },
  },
});