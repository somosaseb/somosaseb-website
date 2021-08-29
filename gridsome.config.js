const path = require("path");
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
}

module.exports = {
  siteName: "ASEB Bolivia",
  siteUrl: "https://somosaseb.bo",
  titleTemplate: "%s - ASEB Bolivia",
  plugins: [
    ...productionPlugins,
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        include: ["/", "/articles/**"],
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/articles/**/*.md",
        typeName: "Article",
        resolveAbsolutePaths: true,
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "gridsome-plugin-feed",
      options: {
        contentTypes: ["Article"],
        feedOptions: {
          title: "ASEB Articulos",
        },
        rss: {
          enabled: true,
          output: "/feed.xml",
        },
        atom: {
          enabled: false,
          output: "/feed.atom",
        },
        json: {
          enabled: false,
          output: "/feed.json",
        },
        maxItems: 50,
        htmlFields: ["description", "content"],
        enforceTrailingSlashes: false,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content,
        }),
      },
    },
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
  templates: {
    Article: [
      {
        path: "/articles/:title",
        componenent: "~/templates/Article.vue",
      },
    ],
    Tag: [
      {
        path: "/tags/:id",
        componenent: "~/templates/Tag.vue",
      },
    ],
  },
  configureWebpack: {
    plugins: [...webpackProductionPlugins],
  },
  chainWebpack: (config) => {
    config.module.rules.delete("svg");
    config.module
      .rule("svg")
      .test(/\.svg$/)
      .use("vue")
      .loader("vue-loader")
      .end()
      .use("svg-to-vue-component")
      .loader("svg-to-vue-component/loader");
  },
};
