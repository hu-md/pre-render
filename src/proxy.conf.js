const PROXY_CONFIG = {
  "/api": {
    "target": "http://10.0.10.27:10086",
    "secure": false,
    "pathRewrite": {
      "^/api": "/api",
    },
    "logLevel": "debug"
  }
}

module.exports = PROXY_CONFIG;