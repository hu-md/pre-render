
import { Options } from 'http-proxy-middleware';

export const environment: Env = {
  production: false,
  proxy: {
    target: 'http://10.0.10.27:10312',
    changeOrigin: true,
    secure: false,
    logLevel: "debug"
  }
};

interface Env {
  production: boolean
  proxy?: Options
}