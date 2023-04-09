import { defineEventHandler, getHeaders, getQuery } from 'h3';
import yaml from 'yaml';
import { r as request } from './request.mjs';
import 'unenv/runtime/npm/consola';
import 'axios';

const docPath = "/docs";
const listTransferTree = (list, parentUuid, link) => {
  const res = [];
  for (const item of list) {
    if (item.parent_uuid === parentUuid) {
      const children = listTransferTree(list, item.uuid, `${link || ""}/${item.title}`);
      if (children.length) {
        item.items = children;
        item.collapsed = false;
      } else {
        item.link = `${docPath}${link || ""}/${item.title}`;
        if (!parentUuid) {
          item.items = [];
        }
      }
      item.url = item.url || item.uuid;
      item.text = item.title;
      delete item.level;
      delete item.doc_id;
      delete item.open_window;
      delete item.visible;
      delete item.prev_uuid;
      delete item.child_uuid;
      delete item.sibling_uuid;
      res.push(item);
    }
  }
  return res;
};

const repos = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  try {
    const headers = getHeaders(event);
    const { namespace } = getQuery(event);
    if (namespace) {
      const { data } = await request({
        headers,
        url: `/repos/${namespace}`,
        method: "get"
      });
      const repoDetail = {
        ...data,
        docList: yaml.parse(data.toc_yml).filter((item) => item.type !== "META"),
        docTree: listTransferTree(
          yaml.parse(data.toc_yml).filter((item) => item.type !== "META"),
          ""
        )
      };
      delete repoDetail.toc_yml;
      delete repoDetail.user;
      return {
        code: 200,
        data: repoDetail,
        message: "ok",
        time: Date.now()
      };
    } else {
      const user = await request({
        headers,
        url: "/user",
        method: "get"
      });
      const { login } = user.data;
      const res = await request({
        headers,
        url: `/users/${login}/repos`,
        method: "get"
      });
      return {
        code: 200,
        data: res.data,
        message: "ok",
        time: Date.now()
      };
    }
  } catch (e) {
    return {
      code: ((_a = e == null ? void 0 : e.response) == null ? void 0 : _a.status) || (e == null ? void 0 : e.status) || (e == null ? void 0 : e.statusCode) || 500,
      data: e || e,
      message: ((_c = (_b = e == null ? void 0 : e.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || ((_d = e == null ? void 0 : e.response) == null ? void 0 : _d.message) || e.message || e.statusText || "\u670D\u52A1\u5F02\u5E38\uFF0C\u8BF7\u91CD\u8BD5",
      time: Date.now()
    };
  }
});

export { repos as default };
//# sourceMappingURL=repos.mjs.map
