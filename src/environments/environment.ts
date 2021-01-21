
export const environment: Env = {
  production: false,
  proxy: {}
};

interface Env {
  production: boolean
  proxy?: object
}
