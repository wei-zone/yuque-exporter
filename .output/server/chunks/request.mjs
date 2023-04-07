import consola from 'unenv/runtime/npm/consola';
import axios from 'axios';

const request = axios.create({
  baseURL: "https://www.yuque.com/api/v2/"
});
request.interceptors.request.use((config) => {
  return config;
});
request.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return Promise.resolve(res.data);
    }
    consola.info("request.res -->", res);
    return Promise.reject(res);
  },
  (e) => {
    consola.error("request.e -->", e);
    return Promise.reject(e);
  }
);
const request$1 = request;

export { request$1 as r };
//# sourceMappingURL=request.mjs.map
