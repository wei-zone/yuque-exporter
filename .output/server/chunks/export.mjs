import { defineEventHandler, getHeaders, getQuery } from 'h3';
import { r as request } from './request.mjs';
import 'unenv/runtime/npm/consola';
import 'axios';

const _export = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  try {
    const headers = getHeaders(event);
    const { slug, namespace } = getQuery(event);
    const res = await request({
      headers: {
        "x-auth-token": headers["x-auth-token"],
        "user-agent": headers["user-agent"]
      },
      url: `/repos/${namespace}/docs/${slug}`,
      method: "get",
      params: {
        /**
         * raw=1 返回文档最原始的格式
         * ● body - 正文 Markdown 源代码
         * ● body_draft - 草稿 Markdown 源代码
         */
        raw: 1
      }
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

export { _export as default };
//# sourceMappingURL=export.mjs.map
