const browserSync  = require('browser-sync').create();

module.exports = {
  browser: function() {
    return browserSync.reload(serverConfig)
  },
  serverConfig: {
    server: {
      baseDir: '../../dist'
    },
    port: 8000
  }
};