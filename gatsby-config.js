module.exports = {
  siteMetadata: {
    title: `Daniel's Website`,
    description: 'This is my development website, with some of my projects',
    author: 'Daniel',
    image: './static/images/profile.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: 'Barlow',
                variants: ['300', '400', '500', '600'],
              },
            ],
          },
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Daniel',
        short_name: 'Daniel',
        start_url: '/',
        background_color: '#303030',
        theme_color: '#9c27b0',
        display: 'standalone',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
