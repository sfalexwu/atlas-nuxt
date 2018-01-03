module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Atlassian Video Archive',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'atlassian video archive' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css' }
    ],
    script: [
       { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
       { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#0052cc' },
  /*
  ** Build configuration
  */
  css: [
      "@atlaskit/reduced-ui-pack/dist/bundle.css"
  ],
  build: {
      vendor: ["axios"]
  }
};
