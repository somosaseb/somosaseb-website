const path = require("path");
const glob = require("glob");

const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const productionPlugins = [];
const webpackProductionPlugins = [];

const PATHS = {
  src: path.join(__dirname, "src"),
};

if (process.env.CI == "1") {
  console.log("==> Register production plugins");

  if (!!process.env.GOOGLE_ANALYTICS_ID)
    productionPlugins.push({
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: process.env.GOOGLE_ANALYTICS_ID,
      },
    });

  productionPlugins.push({
    use: "@gridsome/plugin-sitemap",
    options: {
      config: {
        "/": {
          changefreq: "daily",
          priority: 1,
        },
      },
    },
  });

  productionPlugins.push({
    use: "gridsome-plugin-manifest",
    options: {
      background_color: "#FFFFFF",
      name: "somosaseb.bo",
      short_name: "ASEB Bolivia",
      theme_color: "#FFFFFF",
      orientation: "landscape",
      lang: "es",
    },
  });

  productionPlugins.push({
    use: "@gridsome/plugin-critical",
    options: {
      paths: ["/"],
      width: 1300,
      height: 900,
    },
  });

  webpackProductionPlugins.push(
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    })
  );
}

module.exports = {
  siteName: "ASEB Bolivia",
  siteUrl: "https://somosaseb.bo",
  titleTemplate: "%s - ASEB Bolivia",
  plugins: [...productionPlugins],
  configureWebpack: {
    plugins: [...webpackProductionPlugins],
  },
};
