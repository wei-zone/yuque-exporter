import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, normalizeStyle, computed, createBlock, withCtx, resolveDynamicComponent, reactive, mergeProps, createVNode, useSSRContext } from 'vue';
import { g as buildProps, e as definePropType, h as useNamespace, w as withInstall, B as iconPropType, E as ElIcon, Z as useRouter, _ as _export_sfc$1, R as ElButton } from '../server.mjs';
import { a as ElForm, b as ElFormItem, E as ElInput } from './el-input-03255676.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'async-validator';

const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  }
});
const __default__$1 = /* @__PURE__ */ defineComponent({
  name: "ElCard"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: cardProps,
  setup(__props) {
    const ns = useNamespace("card");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).is(`${_ctx.shadow}-shadow`)])
      }, [
        _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("header"))
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createTextVNode(toDisplayString(_ctx.header), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("body")),
          style: normalizeStyle(_ctx.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6)
      ], 2);
    };
  }
});
var Card = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);
const ElCard = withInstall(Card);
const linkProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger", "default"],
    default: "default"
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: { type: Boolean, default: false },
  href: { type: String, default: "" },
  icon: {
    type: iconPropType
  }
});
const linkEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const _hoisted_1 = ["href"];
const __default__ = /* @__PURE__ */ defineComponent({
  name: "ElLink"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: linkProps,
  emits: linkEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("link");
    const linkKls = computed(() => [
      ns.b(),
      ns.m(props.type),
      ns.is("disabled", props.disabled),
      ns.is("underline", props.underline && !props.disabled)
    ]);
    function handleClick(event) {
      if (!props.disabled)
        emit("click", event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(unref(linkKls)),
        href: _ctx.disabled || !_ctx.href ? void 0 : _ctx.href,
        onClick: handleClick
      }, [
        _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("inner"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true),
        _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 2 }) : createCommentVNode("v-if", true)
      ], 10, _hoisted_1);
    };
  }
});
var Link = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);
const ElLink = withInstall(Link);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const form = reactive({
      token: ""
    });
    const login = () => {
      const token = form.token || {}.VITE_TOKEN || "";
      window.localStorage.setItem("yuque_token", token);
      router.push({
        path: "/"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_card = ElCard;
      const _component_el_link = ElLink;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page login-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_card, { style: { "width": "420px", "margin-bottom": "200px" } }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-header"${_scopeId}><span${_scopeId}>\u6B22\u8FCE\u4F7F\u7528</span>`);
            _push2(ssrRenderComponent(_component_el_link, {
              type: "primary",
              href: "https://www.yuque.com/yuque/developer/api#785a3731",
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u83B7\u53D6token `);
                } else {
                  return [
                    createTextVNode(" \u83B7\u53D6token ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card-header" }, [
                createVNode("span", null, "\u6B22\u8FCE\u4F7F\u7528"),
                createVNode(_component_el_link, {
                  type: "primary",
                  href: "https://www.yuque.com/yuque/developer/api#785a3731",
                  target: "_blank"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u83B7\u53D6token ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, { model: form }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: form.token,
                          "onUpdate:modelValue": ($event) => form.token = $event,
                          placeholder: "\u8BF7\u8F93\u5165token\u5E76\u767B\u5F55",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: form.token,
                            "onUpdate:modelValue": ($event) => form.token = $event,
                            placeholder: "\u8BF7\u8F93\u5165token\u5E76\u767B\u5F55",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          style: { "width": "100%" },
                          type: "primary",
                          onClick: login
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u767B\u5F55`);
                            } else {
                              return [
                                createTextVNode("\u767B\u5F55")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            style: { "width": "100%" },
                            type: "primary",
                            onClick: login
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u767B\u5F55")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: form.token,
                          "onUpdate:modelValue": ($event) => form.token = $event,
                          placeholder: "\u8BF7\u8F93\u5165token\u5E76\u767B\u5F55",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_button, {
                          style: { "width": "100%" },
                          type: "primary",
                          onClick: login
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u767B\u5F55")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_form, { model: form }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: form.token,
                        "onUpdate:modelValue": ($event) => form.token = $event,
                        placeholder: "\u8BF7\u8F93\u5165token\u5E76\u767B\u5F55",
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_button, {
                        style: { "width": "100%" },
                        type: "primary",
                        onClick: login
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u767B\u5F55")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_link, {
        type: "primary",
        href: "https://github.com/wforguo/yuque-exporter/blob/master/README.md",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` GitHub/\u5E2E\u52A9\u6587\u6863 `);
          } else {
            return [
              createTextVNode(" GitHub/\u5E2E\u52A9\u6587\u6863 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-0d353643.mjs.map
