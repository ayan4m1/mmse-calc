require('dotenv/config');

module.exports = {
  pathPrefix: '/mmse-calc',
  siteMetadata: {
    title: 'mmse-calc',
    author: {
      name: 'ayan4m1 <andrew@bulletlogic.com>'
    },
    description: 'mmse-calc',
    siteUrl: 'https://ayan4m1.github.io/mmse-calc/'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'MMSE Calc',
        /* eslint-disable camelcase */
        short_name: 'MMSE',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        /* eslint-enable camelcase */
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-eslint'
  ]
};
