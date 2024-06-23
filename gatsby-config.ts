import type { GatsbyConfig, PluginRef } from 'gatsby';

const config: GatsbyConfig = {
  pathPrefix: '/rebeca',
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emma-core/gatsby-config.mjs
    siteTitle: 'Rebeca',
    siteTitleAlt: 'Rebeca',
    siteHeadline: 'Rebeca',
    siteUrl: 'https://encihub.github.io/rebeca/',
    siteDescription:
      'Rebeca: Masajes, estilo de vida saludable & belleza y bienestar',
    siteLanguage: 'es',
    author: '@jlopezcur',
  },
  trailingSlash: 'always',
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-emma-core',
      // See the theme's README for all available options
      options: {},
    },
    'gatsby-plugin-image',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: `/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Rebeca',
        short_name: 'Rebeca',
        description:
          'Minimalistic bright portfolio with full-width grid and large images',
        start_url: '/',
        background_color: '#fff',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b83280`,
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;
