module.exports = {
  siteMetadata: {
    title: `Daniel's Website`,
    description: 'This is my development website, with some of my projects',
    author: 'Daniel',
    image: '/images/profile.png',
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
    // blog sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects',
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
              {
                family: 'Fira Code',
                variants: ['300', '400', '500', '600'],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx'],
        defaultLayouts: {
          posts: require.resolve('./src/templates/blogpost.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              // showCaptions: true, // does not look good (alignment)
              wrapperStyle: 'margin-left: 0;',
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 640,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 320, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              // urlOverrides: [
              //   {
              //     id: 'youtube',
              //     embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
              //   },
              // ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              // containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            },
          },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    // 'gatsby-plugin-feed-mdx',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'Daniel',
    //     short_name: 'Daniel',
    //     start_url: '/',
    //     background_color: '#303030',
    //     theme_color: '#9c27b0',
    //     display: 'standalone',
    //     // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    //   },
    // },
    'gatsby-plugin-offline',
  ],
};
