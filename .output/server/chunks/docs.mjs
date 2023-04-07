import { defineEventHandler, getHeaders, getQuery } from 'h3';
import { r as request } from './request.mjs';
import 'unenv/runtime/npm/consola';
import 'axios';

const docs = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  try {
    const headers = getHeaders(event);
    const { namespace } = getQuery(event);
    const res = await request({
      headers: {
        "x-auth-token": headers["x-auth-token"],
        "user-agent": headers["user-agent"]
      },
      url: `/repos/${namespace}/docs`,
      method: "get"
    });
    return {
      code: 200,
      data: res.data,
      message: "ok",
      time: Date.now()
    };
  } catch (e) {
    return {
      code: ((_a = e == null ? void 0 : e.response) == null ? void 0 : _a.status) || (e == null ? void 0 : e.status) || (e == null ? void 0 : e.statusCode) || 500,
      data: e || e,
      message: ((_c = (_b = e == null ? void 0 : e.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || ((_d = e == null ? void 0 : e.response) == null ? void 0 : _d.message) || e.message || e.statusText || "\u670D\u52A1\u5F02\u5E38\uFF0C\u8BF7\u91CD\u8BD5",
      time: Date.now()
    };
  }
});

export { docs as default };
//# sourceMappingURL=docs.mjs.map
