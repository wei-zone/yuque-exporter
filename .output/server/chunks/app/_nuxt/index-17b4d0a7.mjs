import { E as ElInput, U as UPDATE_MODEL_EVENT, C as CHANGE_EVENT, m as mutable, i as isKorean, a as ElForm, b as ElFormItem } from './el-input-03255676.mjs';
import { defineComponent, ref, computed, watch, nextTick, provide, reactive, onUpdated, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, createBlock, resolveDynamicComponent, withCtx, renderSlot, createCommentVNode, inject, mergeProps, createVNode, toRef, Teleport, Transition, withDirectives, vShow, readonly, toDisplayString, useSlots, isRef, vModelCheckbox, Fragment, createTextVNode, toRefs, withModifiers, shallowReactive, useSSRContext, cloneVNode, Text, Comment, shallowRef, triggerRef, toRaw, getCurrentInstance, h, renderList, resolveComponent, resolveDirective, withKeys, vModelText, createSlots, watchEffect, isVNode, render, onUnmounted } from 'vue';
import { placements, createPopper } from '@popperjs/core';
import { d as buildProp, e as definePropType, g as buildProps, h as useNamespace, i as addUnit, w as withInstall, l as formItemContextKey, m as useId, o as useSizeProp, r as useFormItem, v as useFormItemInputId, j as debugWarn, x as withNoopInstall, b as componentSizes, s as useFormSize, E as ElIcon, y as close_default, B as iconPropType, C as circle_close_default, D as arrow_down_default, z as useLocale, N as useGlobalComponentSettings, T as TypeComponentsMap, P as withInstallFunction, U as _export_sfc, u as useGetDerivedNamespace, f as useIdInjection, _ as _export_sfc$1, k as useZIndex, A as useDeprecated, O as TypeComponents, Q as timer_default, a as componentSizeMap, n as isElement, p as isUndefined$1, q as useFormDisabled, R as ElButton, S as vLoading, I as removeClass, G as addClass, t as throwError, K as getProp, F as arrow_up_default, H as hasClass, L as arrow_right_default, M as loading_default, J as getStyle } from '../server.mjs';
import { useResizeObserver, useEventListener, isBoolean, isNumber, isClient, onClickOutside, useTimeoutFn, tryOnScopeDispose, unrefElement } from '@vueuse/core';
import { NOOP, isObject, isString, isArray, isFunction, toRawType, hasOwn } from '@vue/shared';
import { pick, isUndefined, isEqual, get, debounce, isNil, fromPairs, merge, flatMap } from 'lodash-unified';
import escapeHtml from 'escape-html';
import normalizeWheel from 'normalize-wheel-es';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import dayjs from 'dayjs';
import JSZip from 'jszip';
import pkg from 'file-saver';
import consola from 'unenv/runtime/npm/consola';
import axios from 'axios';
import 'async-validator';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
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

const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
function scrollIntoView(container, selected) {
  if (!isClient)
    return;
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer !== null && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const getComponentSize = (size) => {
  return componentSizeMap[size || "default"];
};
const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
const useFocus = (el) => {
  return {
    focus: () => {
      var _a, _b;
      (_b = (_a = el.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
  };
};
const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = getCurrentInstance();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = computed(() => isFunction(props[updateEventKeyRaw]));
    const isModelBindingAbsent = computed(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || !isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };
    const onChange = (val) => {
      if (!isBoolean(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
const usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
  const stateUpdater = {
    name: "updateState",
    enabled: true,
    phase: "write",
    fn: ({ state }) => {
      const derivedState = deriveState(state);
      Object.assign(states.value, derivedState);
    },
    requires: ["computeStyles"]
  };
  const options = computed(() => {
    const { onFirstUpdate, placement, strategy, modifiers } = unref(opts);
    return {
      onFirstUpdate,
      placement: placement || "bottom",
      strategy: strategy || "absolute",
      modifiers: [
        ...modifiers || [],
        stateUpdater,
        { name: "applyStyles", enabled: false }
      ]
    };
  });
  const instanceRef = shallowRef();
  const states = ref({
    styles: {
      popper: {
        position: unref(options).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  });
  const destroy = () => {
    if (!instanceRef.value)
      return;
    instanceRef.value.destroy();
    instanceRef.value = void 0;
  };
  watch(options, (newOptions) => {
    const instance = unref(instanceRef);
    if (instance) {
      instance.setOptions(newOptions);
    }
  }, {
    deep: true
  });
  watch([referenceElementRef, popperElementRef], ([referenceElement, popperElement]) => {
    destroy();
    if (!referenceElement || !popperElement)
      return;
    instanceRef.value = createPopper(referenceElement, popperElement, unref(options));
  });
  return {
    state: computed(() => {
      var _a;
      return { ...((_a = unref(instanceRef)) == null ? void 0 : _a.state) || {} };
    }),
    styles: computed(() => unref(states).styles),
    attributes: computed(() => unref(states).attributes),
    update: () => {
      var _a;
      return (_a = unref(instanceRef)) == null ? void 0 : _a.update();
    },
    forceUpdate: () => {
      var _a;
      return (_a = unref(instanceRef)) == null ? void 0 : _a.forceUpdate();
    },
    instanceRef: computed(() => unref(instanceRef))
  };
};
function deriveState(state) {
  const elements = Object.keys(state.elements);
  const styles = fromPairs(elements.map((element) => [element, state.styles[element] || {}]));
  const attributes = fromPairs(elements.map((element) => [element, state.attributes[element]]));
  return {
    styles,
    attributes
  };
}
function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}
const usePopperContainerId = () => {
  const namespace = useGetDerivedNamespace();
  const idInjection = useIdInjection();
  const id = computed(() => {
    return `${namespace.value}-popper-container-${idInjection.prefix}`;
  });
  const selector = computed(() => `#${id.value}`);
  return {
    id,
    selector
  };
};
const usePopperContainer = () => {
  const { id, selector } = usePopperContainerId();
  return {
    id,
    selector
  };
};
const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  autoClose,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const { registerTimeout: registerTimeoutForAutoClose } = useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
      const _autoClose = unref(autoClose);
      if (isNumber(_autoClose) && _autoClose > 0) {
        registerTimeoutForAutoClose(() => {
          close(event);
        }, _autoClose);
      }
    }, unref(showAfter));
  };
  const onClose = (event) => {
    registerTimeout(() => {
      close(event);
    }, unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};
const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};
const messageConfig = {};
const GAP = 4;
const BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
const renderThumbStyle = ({
  move,
  size,
  bar
}) => ({
  [bar.size]: size,
  transform: `translate${bar.axis}(${move}%)`
});
const scrollbarContextKey = Symbol("scrollbarContextKey");
const thumbProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});
const COMPONENT_NAME$2 = "Thumb";
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "thumb",
  props: thumbProps,
  setup(__props) {
    const props = __props;
    const scrollbar = inject(scrollbarContextKey);
    const ns = useNamespace("scrollbar");
    if (!scrollbar)
      throwError(COMPONENT_NAME$2, "can not inject scrollbar context");
    const instance = ref();
    const thumb = ref();
    const thumbState = ref({});
    const visible = ref(false);
    let cursorDown = false;
    let cursorLeave = false;
    let originalOnSelectStart = isClient ? document.onselectstart : null;
    const bar = computed(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const thumbStyle = computed(() => renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const offsetRatio = computed(() => instance.value[bar.value.offset] ** 2 / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
    const clickThumbHandler = (e) => {
      var _a;
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button))
        return;
      (_a = window.getSelection()) == null ? void 0 : _a.removeAllRanges();
      startDrag(e);
      const el = e.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      if (!thumb.value || !instance.value || !scrollbar.wrapElement)
        return;
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e) => {
      if (!instance.value || !thumb.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = thumbState.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave)
        visible.value = false;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart;
    };
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            ref_key: "instance",
            ref: instance,
            class: normalizeClass([unref(ns).e("bar"), unref(ns).is(unref(bar).key)]),
            onMousedown: clickTrackHandler
          }, [
            createElementVNode("div", {
              ref_key: "thumb",
              ref: thumb,
              class: normalizeClass(unref(ns).e("thumb")),
              style: normalizeStyle(unref(thumbStyle)),
              onMousedown: clickThumbHandler
            }, null, 38)
          ], 34), [
            [vShow, _ctx.always || visible.value]
          ])
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var Thumb = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const barProps = buildProps({
  always: {
    type: Boolean,
    default: true
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "bar",
  props: barProps,
  setup(__props, { expose }) {
    const props = __props;
    const moveX = ref(0);
    const moveY = ref(0);
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP;
        const offsetWidth = wrap.offsetWidth - GAP;
        moveY.value = wrap.scrollTop * 100 / offsetHeight * props.ratioY;
        moveX.value = wrap.scrollLeft * 100 / offsetWidth * props.ratioX;
      }
    };
    expose({
      handleScroll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Thumb, {
          move: moveX.value,
          ratio: _ctx.ratioX,
          size: _ctx.width,
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"]),
        createVNode(Thumb, {
          move: moveY.value,
          ratio: _ctx.ratioY,
          size: _ctx.height,
          vertical: "",
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"])
      ], 64);
    };
  }
});
var Bar = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const scrollbarProps = buildProps({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: false
  },
  wrapStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
});
const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }) => [scrollTop, scrollLeft].every(isNumber)
};
const COMPONENT_NAME$1 = "ElScrollbar";
const __default__$d = /* @__PURE__ */ defineComponent({
  name: COMPONENT_NAME$1
});
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("scrollbar");
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbarRef = ref();
    const wrapRef = ref();
    const resizeRef = ref();
    const sizeWidth = ref("0");
    const sizeHeight = ref("0");
    const barRef = ref();
    const ratioY = ref(1);
    const ratioX = ref(1);
    const style = computed(() => {
      const style2 = {};
      if (props.height)
        style2.height = addUnit(props.height);
      if (props.maxHeight)
        style2.maxHeight = addUnit(props.maxHeight);
      return [props.wrapStyle, style2];
    });
    const wrapKls = computed(() => {
      return [
        props.wrapClass,
        ns.e("wrap"),
        { [ns.em("wrap", "hidden-default")]: !props.native }
      ];
    });
    const resizeKls = computed(() => {
      return [ns.e("view"), props.viewClass];
    });
    const handleScroll = () => {
      var _a;
      if (wrapRef.value) {
        (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrapRef.value);
        emit("scroll", {
          scrollTop: wrapRef.value.scrollTop,
          scrollLeft: wrapRef.value.scrollLeft
        });
      }
    };
    function scrollTo(arg1, arg2) {
      if (isObject(arg1)) {
        wrapRef.value.scrollTo(arg1);
      } else if (isNumber(arg1) && isNumber(arg2)) {
        wrapRef.value.scrollTo(arg1, arg2);
      }
    }
    const setScrollTop = (value) => {
      if (!isNumber(value)) {
        return;
      }
      wrapRef.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber(value)) {
        return;
      }
      wrapRef.value.scrollLeft = value;
    };
    const update = () => {
      if (!wrapRef.value)
        return;
      const offsetHeight = wrapRef.value.offsetHeight - GAP;
      const offsetWidth = wrapRef.value.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrapRef.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrapRef.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
    };
    watch(() => props.noresize, (noresize) => {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        ({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update));
        stopResizeListener = useEventListener("resize", update);
      }
    }, { immediate: true });
    watch(() => [props.maxHeight, props.height], () => {
      if (!props.native)
        nextTick(() => {
          var _a;
          update();
          if (wrapRef.value) {
            (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrapRef.value);
          }
        });
    });
    provide(scrollbarContextKey, reactive({
      scrollbarElement: scrollbarRef,
      wrapElement: wrapRef
    }));
    onUpdated(() => update());
    expose({
      wrapRef,
      update,
      scrollTo,
      setScrollTop,
      setScrollLeft,
      handleScroll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "scrollbarRef",
        ref: scrollbarRef,
        class: normalizeClass(unref(ns).b())
      }, [
        createElementVNode("div", {
          ref_key: "wrapRef",
          ref: wrapRef,
          class: normalizeClass(unref(wrapKls)),
          style: normalizeStyle(unref(style)),
          onScroll: handleScroll
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            ref_key: "resizeRef",
            ref: resizeRef,
            class: normalizeClass(unref(resizeKls)),
            style: normalizeStyle(_ctx.viewStyle)
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["class", "style"]))
        ], 38),
        !_ctx.native ? (openBlock(), createBlock(Bar, {
          key: 0,
          ref_key: "barRef",
          ref: barRef,
          height: sizeHeight.value,
          width: sizeWidth.value,
          always: _ctx.always,
          "ratio-x": ratioX.value,
          "ratio-y": ratioY.value
        }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"])) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Scrollbar = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const ElScrollbar = withInstall(Scrollbar);
const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
const roleTypes = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
const popperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});
const __default__$c = /* @__PURE__ */ defineComponent({
  name: "ElPopper",
  inheritAttrs: false
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: popperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef2 = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const role = computed(() => props.role);
    const popperProvides = {
      triggerRef: triggerRef2,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const popperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
const __default__$b = /* @__PURE__ */ defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: popperArrowProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("popper");
    const { arrowOffset, arrowRef, arrowStyle } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    watch(() => props.arrowOffset, (val) => {
      arrowOffset.value = val;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: normalizeClass(unref(ns).e("arrow")),
        style: normalizeStyle(unref(arrowStyle)),
        "data-popper-arrow": ""
      }, null, 6);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const NAME = "ElOnlyChild";
const OnlyChild = /* @__PURE__ */ defineComponent({
  name: NAME,
  setup(_, {
    slots,
    attrs
  }) {
    var _a;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a : NOOP);
    return () => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  const ns = useNamespace("only-child");
  return createVNode("span", {
    "class": ns.e("content")
  }, [s]);
}
const popperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: definePropType(Function)
  },
  onMouseleave: {
    type: definePropType(Function)
  },
  onClick: {
    type: definePropType(Function)
  },
  onKeydown: {
    type: definePropType(Function)
  },
  onFocus: {
    type: definePropType(Function)
  },
  onBlur: {
    type: definePropType(Function)
  },
  onContextmenu: {
    type: definePropType(Function)
  },
  id: String,
  open: Boolean
});
const __default__$a = /* @__PURE__ */ defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: popperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef: triggerRef2 } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef2);
    const ariaControls = computed(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = computed(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = computed(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = computed(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    expose({
      triggerRef: triggerRef2
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-controls": unref(ariaControls),
        "aria-describedby": unref(ariaDescribedby),
        "aria-expanded": unref(ariaExpanded),
        "aria-haspopup": unref(ariaHaspopup)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
const focusReason = ref();
const lastUserFocusTimestamp = ref(0);
const lastAutomatedFocusTimestamp = ref(0);
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = window.performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
  }
};
const useFocusReason = () => {
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusAfterTrapped;
    const { focusReason: focusReason2 } = useFocusReason();
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(last, true);
            }
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        relatedTarget && trapContainer.contains(relatedTarget);
      }
      if (isFocusedInTrap)
        emit("focusin", e);
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason2.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e);
      }
    };
    return {
      onKeydown
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["render", _sfc_render$6], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const popperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: placements,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  id: String,
  style: {
    type: definePropType([String, Array, Object])
  },
  className: {
    type: definePropType([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
});
const popperContentEmits = {
  mouseenter: (evt) => evt instanceof MouseEvent,
  mouseleave: (evt) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};
const buildPopperOptions = (props, modifiers = []) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: [...genModifiers(props), ...modifiers]
  };
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  if (!isClient)
    return;
  return unrefElement($el);
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration
      }
    }
  ];
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}
const DEFAULT_ARROW_OFFSET = 0;
const usePopperContent = (props) => {
  const { popperInstanceRef, contentRef, triggerRef: triggerRef2, role } = inject(POPPER_INJECTION_KEY, void 0);
  const arrowRef = ref();
  const arrowOffset = ref();
  const eventListenerModifier = computed(() => {
    return {
      name: "eventListeners",
      enabled: !!props.visible
    };
  });
  const arrowModifier = computed(() => {
    var _a;
    const arrowEl = unref(arrowRef);
    const offset = (_a = unref(arrowOffset)) != null ? _a : DEFAULT_ARROW_OFFSET;
    return {
      name: "arrow",
      enabled: !isUndefined(arrowEl),
      options: {
        element: arrowEl,
        padding: offset
      }
    };
  });
  const options = computed(() => {
    return {
      onFirstUpdate: () => {
        update();
      },
      ...buildPopperOptions(props, [
        unref(arrowModifier),
        unref(eventListenerModifier)
      ])
    };
  });
  const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef2));
  const { attributes, state, styles, update, forceUpdate, instanceRef } = usePopper(computedReference, contentRef, options);
  watch(instanceRef, (instance) => popperInstanceRef.value = instance);
  return {
    attributes,
    arrowRef,
    contentRef,
    instanceRef,
    state,
    styles,
    role,
    forceUpdate,
    update
  };
};
const usePopperContentDOM = (props, {
  attributes,
  styles,
  role
}) => {
  const { nextZIndex } = useZIndex();
  const ns = useNamespace("popper");
  const contentAttrs = computed(() => unref(attributes).popper);
  const contentZIndex = ref(props.zIndex || nextZIndex());
  const contentClass = computed(() => [
    ns.b(),
    ns.is("pure", props.pure),
    ns.is(props.effect),
    props.popperClass
  ]);
  const contentStyle = computed(() => {
    return [
      { zIndex: unref(contentZIndex) },
      props.popperStyle || {},
      unref(styles).popper
    ];
  });
  const ariaModal = computed(() => role.value === "dialog" ? "false" : void 0);
  const arrowStyle = computed(() => unref(styles).arrow || {});
  const updateZIndex = () => {
    contentZIndex.value = props.zIndex || nextZIndex();
  };
  return {
    ariaModal,
    arrowStyle,
    contentAttrs,
    contentClass,
    contentStyle,
    contentZIndex,
    updateZIndex
  };
};
const usePopperContentFocusTrap = (props, emit) => {
  const trapped = ref(false);
  const focusStartRef = ref();
  const onFocusAfterTrapped = () => {
    emit("focus");
  };
  const onFocusAfterReleased = (event) => {
    var _a;
    if (((_a = event.detail) == null ? void 0 : _a.focusReason) !== "pointer") {
      focusStartRef.value = "first";
      emit("blur");
    }
  };
  const onFocusInTrap = (event) => {
    if (props.visible && !trapped.value) {
      if (event.target) {
        focusStartRef.value = event.target;
      }
      trapped.value = true;
    }
  };
  const onFocusoutPrevented = (event) => {
    if (!props.trapping) {
      if (event.detail.focusReason === "pointer") {
        event.preventDefault();
      }
      trapped.value = false;
    }
  };
  const onReleaseRequested = () => {
    trapped.value = false;
    emit("close");
  };
  return {
    focusStartRef,
    trapped,
    onFocusAfterReleased,
    onFocusAfterTrapped,
    onFocusInTrap,
    onFocusoutPrevented,
    onReleaseRequested
  };
};
const __default__$9 = /* @__PURE__ */ defineComponent({
  name: "ElPopperContent"
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: popperContentProps,
  emits: popperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      focusStartRef,
      trapped,
      onFocusAfterReleased,
      onFocusAfterTrapped,
      onFocusInTrap,
      onFocusoutPrevented,
      onReleaseRequested
    } = usePopperContentFocusTrap(props, emit);
    const { attributes, arrowRef, contentRef, styles, instanceRef, role, update } = usePopperContent(props);
    const {
      ariaModal,
      arrowStyle,
      contentAttrs,
      contentClass,
      contentStyle,
      updateZIndex
    } = usePopperContentDOM(props, {
      styles,
      attributes,
      role
    });
    const formItemContext = inject(formItemContextKey, void 0);
    const arrowOffset = ref();
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowStyle,
      arrowRef,
      arrowOffset
    });
    if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) {
      provide(formItemContextKey, {
        ...formItemContext,
        addInputId: NOOP,
        removeInputId: NOOP
      });
    }
    const updatePopper = (shouldUpdateZIndex = true) => {
      update();
      shouldUpdateZIndex && updateZIndex();
    };
    expose({
      popperContentRef: contentRef,
      popperInstanceRef: instanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        ref_key: "contentRef",
        ref: contentRef
      }, unref(contentAttrs), {
        style: unref(contentStyle),
        class: unref(contentClass),
        tabindex: "-1",
        onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
        onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
      }), [
        createVNode(unref(ElFocusTrap), {
          trapped: unref(trapped),
          "trap-on-focus-in": true,
          "focus-trap-el": unref(contentRef),
          "focus-start-el": unref(focusStartRef),
          onFocusAfterTrapped: unref(onFocusAfterTrapped),
          onFocusAfterReleased: unref(onFocusAfterReleased),
          onFocusin: unref(onFocusInTrap),
          onFocusoutPrevented: unref(onFocusoutPrevented),
          onReleaseRequested: unref(onReleaseRequested)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
      ], 16);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const ElPopper = withInstall(Popper);
const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  appendTo: {
    type: definePropType([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: false
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: Boolean
});
const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.space]
  }
});
const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle
} = createModelToggleComposable("visible");
const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  showArrow: {
    type: Boolean,
    default: true
  }
});
const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];
const isTriggerType = (trigger, type) => {
  if (isArray(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e) => {
    isTriggerType(unref(trigger), type) && handler(e);
  };
};
const __default__$8 = /* @__PURE__ */ defineComponent({
  name: "ElTooltipTrigger"
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: useTooltipTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef2 = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    expose({
      triggerRef: triggerRef2
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopperTrigger), {
        id: unref(id),
        "virtual-ref": _ctx.virtualRef,
        open: unref(open),
        "virtual-triggering": _ctx.virtualTriggering,
        class: normalizeClass(unref(ns).e("trigger")),
        onBlur: unref(onBlur),
        onClick: unref(onClick),
        onContextmenu: unref(onContextMenu),
        onFocus: unref(onFocus),
        onMouseenter: unref(onMouseenter),
        onMouseleave: unref(onMouseleave),
        onKeydown: unref(onKeydown)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
    };
  }
});
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const __default__$7 = /* @__PURE__ */ defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: useTooltipContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const { selector } = usePopperContainerId();
    const ns = useNamespace("tooltip");
    const contentRef = ref(null);
    const destroyed = ref(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const transitionClass = computed(() => {
      return props.transition || `${ns.namespace.value}-fade-in-linear`;
    });
    const persistentRef = computed(() => {
      return props.persistent;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const appendTo = computed(() => {
      return props.appendTo || selector.value;
    });
    const contentStyle = computed(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = computed(() => !unref(open));
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
      stopHandle = onClickOutside(computed(() => {
        var _a;
        return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
      }), () => {
        if (unref(controlled))
          return;
        const $trigger = unref(trigger);
        if ($trigger !== "hover") {
          onClose();
        }
      });
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    let stopHandle;
    watch(() => unref(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    watch(() => props.content, () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    });
    expose({
      contentRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        disabled: !_ctx.teleported,
        to: unref(appendTo)
      }, [
        createVNode(Transition, {
          name: unref(transitionClass),
          onAfterLeave: onTransitionLeave,
          onBeforeEnter,
          onAfterEnter: onAfterShow,
          onBeforeLeave
        }, {
          default: withCtx(() => [
            unref(shouldRender) ? withDirectives((openBlock(), createBlock(unref(ElPopperContent), mergeProps({
              key: 0,
              id: unref(id),
              ref_key: "contentRef",
              ref: contentRef
            }, _ctx.$attrs, {
              "aria-label": _ctx.ariaLabel,
              "aria-hidden": unref(ariaHidden),
              "boundaries-padding": _ctx.boundariesPadding,
              "fallback-placements": _ctx.fallbackPlacements,
              "gpu-acceleration": _ctx.gpuAcceleration,
              offset: _ctx.offset,
              placement: _ctx.placement,
              "popper-options": _ctx.popperOptions,
              strategy: _ctx.strategy,
              effect: _ctx.effect,
              enterable: _ctx.enterable,
              pure: _ctx.pure,
              "popper-class": _ctx.popperClass,
              "popper-style": [_ctx.popperStyle, unref(contentStyle)],
              "reference-el": _ctx.referenceEl,
              "trigger-target-el": _ctx.triggerTargetEl,
              visible: unref(shouldShow),
              "z-index": _ctx.zIndex,
              onMouseenter: unref(onContentEnter),
              onMouseleave: unref(onContentLeave),
              onBlur,
              onClose: unref(onClose)
            }), {
              default: withCtx(() => [
                !destroyed.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [vShow, unref(shouldShow)]
            ]) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["name"])
      ], 8, ["disabled", "to"]);
    };
  }
});
var ElTooltipContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const _hoisted_1$7 = ["innerHTML"];
const _hoisted_2$6 = { key: 1 };
const __default__$6 = /* @__PURE__ */ defineComponent({
  name: "ElTooltip"
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: useTooltipProps,
  emits: tooltipEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    usePopperContainer();
    const id = useId();
    const popperRef = ref();
    const contentRef = ref();
    const updatePopper = () => {
      var _a;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = ref(false);
    const toggleReason = ref();
    const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: toRef(props, "showAfter"),
      hideAfter: toRef(props, "hideAfter"),
      autoClose: toRef(props, "autoClose"),
      open: show,
      close: hide
    });
    const controlled = computed(() => isBoolean(props.visible) && !hasUpdateHandler.value);
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if (unref(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = () => {
      var _a, _b;
      const popperContent = (_b = (_a = contentRef.value) == null ? void 0 : _a.contentRef) == null ? void 0 : _b.popperContentRef;
      return popperContent && popperContent.contains(document.activeElement);
    };
    expose({
      popperRef,
      contentRef,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopper), {
        ref_key: "popperRef",
        ref: popperRef,
        role: _ctx.role
      }, {
        default: withCtx(() => [
          createVNode(ElTooltipTrigger, {
            disabled: _ctx.disabled,
            trigger: _ctx.trigger,
            "trigger-keys": _ctx.triggerKeys,
            "virtual-ref": _ctx.virtualRef,
            "virtual-triggering": _ctx.virtualTriggering
          }, {
            default: withCtx(() => [
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
          createVNode(ElTooltipContent, {
            ref_key: "contentRef",
            ref: contentRef,
            "aria-label": _ctx.ariaLabel,
            "boundaries-padding": _ctx.boundariesPadding,
            content: _ctx.content,
            disabled: _ctx.disabled,
            effect: _ctx.effect,
            enterable: _ctx.enterable,
            "fallback-placements": _ctx.fallbackPlacements,
            "hide-after": _ctx.hideAfter,
            "gpu-acceleration": _ctx.gpuAcceleration,
            offset: _ctx.offset,
            persistent: _ctx.persistent,
            "popper-class": _ctx.popperClass,
            "popper-style": _ctx.popperStyle,
            placement: _ctx.placement,
            "popper-options": _ctx.popperOptions,
            pure: _ctx.pure,
            "raw-content": _ctx.rawContent,
            "reference-el": _ctx.referenceEl,
            "trigger-target-el": _ctx.triggerTargetEl,
            "show-after": _ctx.showAfter,
            strategy: _ctx.strategy,
            teleported: _ctx.teleported,
            transition: _ctx.transition,
            "virtual-triggering": _ctx.virtualTriggering,
            "z-index": _ctx.zIndex,
            "append-to": _ctx.appendTo
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "content", {}, () => [
                _ctx.rawContent ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: _ctx.content
                }, null, 8, _hoisted_1$7)) : (openBlock(), createElementBlock("span", _hoisted_2$6, toDisplayString(_ctx.content), 1))
              ]),
              _ctx.showArrow ? (openBlock(), createBlock(unref(ElPopperArrow), {
                key: 0,
                "arrow-offset": _ctx.arrowOffset
              }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
        ]),
        _: 3
      }, 8, ["role"]);
    };
  }
});
var Tooltip = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const ElTooltip = withInstall(Tooltip);
const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
});
const _hoisted_1$6 = ["textContent"];
const __default__$5 = /* @__PURE__ */ defineComponent({
  name: "ElBadge"
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: badgeProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (isNumber(props.value) && isNumber(props.max)) {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    expose({
      content
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(Transition, {
          name: `${unref(ns).namespace.value}-zoom-in-center`,
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("sup", {
              class: normalizeClass([
                unref(ns).e("content"),
                unref(ns).em("content", _ctx.type),
                unref(ns).is("fixed", !!_ctx.$slots.default),
                unref(ns).is("dot", _ctx.isDot)
              ]),
              textContent: toDisplayString(unref(content))
            }, null, 10, _hoisted_1$6), [
              [vShow, !_ctx.hidden && (unref(content) || _ctx.isDot)]
            ])
          ]),
          _: 1
        }, 8, ["name"])
      ], 2);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const ElBadge = withInstall(Badge);
const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (isClient) {
  document.addEventListener("mousedown", (e) => startClick = e);
  document.addEventListener("mouseup", (e) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e, startClick);
      }
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    const fn = function(event) {
      const normalized = normalizeWheel(event);
      callback && Reflect.apply(callback, this, [event, normalized]);
    };
    element.addEventListener("wheel", fn, { passive: true });
  }
};
const Mousewheel = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value);
  }
};
const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  }
};
const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const useCheckboxDisabled = ({
  model,
  isChecked
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isLimitDisabled = computed(() => {
    var _a, _b;
    const max = (_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value;
    const min = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
    return !isUndefined$1(max) && model.value.length >= max && !isChecked.value || !isUndefined$1(min) && model.value.length <= min && isChecked.value;
  });
  const isDisabled = useFormDisabled(computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value));
  return {
    isDisabled,
    isLimitDisabled
  };
};
const useCheckboxEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const { formItem } = useFormItem();
  const { emit } = getCurrentInstance();
  function getLabeledValue(value) {
    var _a, _b;
    return value === props.trueLabel || value === true ? (_a = props.trueLabel) != null ? _a : true : (_b = props.falseLabel) != null ? _b : false;
  }
  function emitChangeEvent(checked, e) {
    emit("change", getLabeledValue(checked), e);
  }
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit("change", getLabeledValue(target.checked), e);
  }
  async function onClickRoot(e) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      const eventTargets = e.composedPath();
      const hasLabel = eventTargets.some((item) => item.tagName === "LABEL");
      if (!hasLabel) {
        model.value = getLabeledValue([false, props.falseLabel].includes(model.value));
        await nextTick();
        emitChangeEvent(model.value, e);
      }
    }
  }
  const validateEvent = computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.validateEvent) || props.validateEvent);
  watch(() => props.modelValue, () => {
    if (validateEvent.value) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const useCheckboxModel = (props) => {
  const selfModel = ref(false);
  const { emit } = getCurrentInstance();
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isGroup = computed(() => isUndefined$1(checkboxGroup) === false);
  const isLimitExceeded = ref(false);
  const model = computed({
    get() {
      var _a, _b;
      return isGroup.value ? (_a = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) == null ? void 0 : _a.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a, _b;
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value = ((_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value) !== void 0 && val.length > (checkboxGroup == null ? void 0 : checkboxGroup.max.value);
        isLimitExceeded.value === false && ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _b.call(checkboxGroup, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isFocused = ref(false);
  const isChecked = computed(() => {
    const value = model.value;
    if (isBoolean(value)) {
      return value;
    } else if (isArray(value)) {
      if (isObject(props.label)) {
        return value.map(toRaw).some((o) => isEqual(o, props.label));
      } else {
        return value.map(toRaw).includes(props.label);
      }
    } else if (value !== null && value !== void 0) {
      return value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxButtonSize = useFormSize(computed(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }), {
    prop: true
  });
  const checkboxSize = useFormSize(computed(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }));
  const hasOwnLabel = computed(() => {
    return !!(slots.default || props.label);
  });
  return {
    checkboxButtonSize,
    isChecked,
    isFocused,
    checkboxSize,
    hasOwnLabel
  };
};
const setStoreValue = (props, { model }) => {
  function addToStore() {
    if (isArray(model.value) && !model.value.includes(props.label)) {
      model.value.push(props.label);
    } else {
      model.value = props.trueLabel || true;
    }
  }
  props.checked && addToStore();
};
const useCheckbox = (props, slots) => {
  const { formItem: elFormItem } = useFormItem();
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
  const {
    isFocused,
    isChecked,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel
  } = useCheckboxStatus(props, slots, { model });
  const { isDisabled } = useCheckboxDisabled({ model, isChecked });
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  setStoreValue(props, { model });
  return {
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isFocused,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    model,
    handleChange,
    onClickRoot
  };
};
const _hoisted_1$5 = ["tabindex", "role", "aria-checked"];
const _hoisted_2$5 = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_3$1 = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"];
const __default__$4 = /* @__PURE__ */ defineComponent({
  name: "ElCheckbox"
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      inputId,
      isLabeledByFormItem,
      isChecked,
      isDisabled,
      isFocused,
      checkboxSize,
      hasOwnLabel,
      model,
      handleChange,
      onClickRoot
    } = useCheckbox(props, slots);
    const ns = useNamespace("checkbox");
    const compKls = computed(() => {
      return [
        ns.b(),
        ns.m(checkboxSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("bordered", props.border),
        ns.is("checked", isChecked.value)
      ];
    });
    const spanKls = computed(() => {
      return [
        ns.e("input"),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("indeterminate", props.indeterminate),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(!unref(hasOwnLabel) && unref(isLabeledByFormItem) ? "span" : "label"), {
        class: normalizeClass(unref(compKls)),
        "aria-controls": _ctx.indeterminate ? _ctx.controls : null,
        onClick: unref(onClickRoot)
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(spanKls)),
            tabindex: _ctx.indeterminate ? 0 : void 0,
            role: _ctx.indeterminate ? "checkbox" : void 0,
            "aria-checked": _ctx.indeterminate ? "mixed" : void 0
          }, [
            _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
              key: 0,
              id: unref(inputId),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
              class: normalizeClass(unref(ns).e("original")),
              type: "checkbox",
              "aria-hidden": _ctx.indeterminate ? "true" : "false",
              name: _ctx.name,
              tabindex: _ctx.tabindex,
              disabled: unref(isDisabled),
              "true-value": _ctx.trueLabel,
              "false-value": _ctx.falseLabel,
              onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
              onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
              onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false)
            }, null, 42, _hoisted_2$5)), [
              [vModelCheckbox, unref(model)]
            ]) : withDirectives((openBlock(), createElementBlock("input", {
              key: 1,
              id: unref(inputId),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(model) ? model.value = $event : null),
              class: normalizeClass(unref(ns).e("original")),
              type: "checkbox",
              "aria-hidden": _ctx.indeterminate ? "true" : "false",
              disabled: unref(isDisabled),
              value: _ctx.label,
              name: _ctx.name,
              tabindex: _ctx.tabindex,
              onChange: _cache[5] || (_cache[5] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
              onFocus: _cache[6] || (_cache[6] = ($event) => isFocused.value = true),
              onBlur: _cache[7] || (_cache[7] = ($event) => isFocused.value = false)
            }, null, 42, _hoisted_3$1)), [
              [vModelCheckbox, unref(model)]
            ]),
            createElementVNode("span", {
              class: normalizeClass(unref(ns).e("inner"))
            }, null, 2)
          ], 10, _hoisted_1$5),
          unref(hasOwnLabel) ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(unref(ns).e("label"))
          }, [
            renderSlot(_ctx.$slots, "default"),
            !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.label), 1)
            ], 64)) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["class", "aria-controls", "onClick"]);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const _hoisted_1$4 = ["name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2$4 = ["name", "tabindex", "disabled", "value"];
const __default__$3 = /* @__PURE__ */ defineComponent({
  name: "ElCheckboxButton"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      isFocused,
      isChecked,
      isDisabled,
      checkboxButtonSize,
      model,
      handleChange
    } = useCheckbox(props, slots);
    const checkboxGroup = inject(checkboxGroupContextKey, void 0);
    const ns = useNamespace("checkbox");
    const activeStyle = computed(() => {
      var _a, _b, _c, _d;
      const fillValue = (_b = (_a = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    const labelKls = computed(() => {
      return [
        ns.b("button"),
        ns.bm("button", checkboxButtonSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(labelKls))
      }, [
        _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          "true-value": _ctx.trueLabel,
          "false-value": _ctx.falseLabel,
          onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false)
        }, null, 42, _hoisted_1$4)), [
          [vModelCheckbox, unref(model)]
        ]) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          value: _ctx.label,
          onChange: _cache[5] || (_cache[5] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[6] || (_cache[6] = ($event) => isFocused.value = true),
          onBlur: _cache[7] || (_cache[7] = ($event) => isFocused.value = false)
        }, null, 42, _hoisted_2$4)), [
          [vModelCheckbox, unref(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(isChecked) ? unref(activeStyle) : void 0)
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const checkboxGroupProps = buildProps({
  modelValue: {
    type: definePropType(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: useSizeProp,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isArray(val),
  change: (val) => isArray(val)
};
const __default__$2 = /* @__PURE__ */ defineComponent({
  name: "ElCheckboxGroup"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("checkbox");
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = async (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      await nextTick();
      emit("change", value);
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide(checkboxGroupContextKey, {
      ...pick(toRefs(props), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue,
      changeEvent
    });
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        id: unref(groupId),
        class: normalizeClass(unref(ns).b("group")),
        role: "group",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "checkbox-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a = unref(formItem)) == null ? void 0 : _a.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
withNoopInstall(CheckboxButton);
withNoopInstall(CheckboxGroup);
const tagProps = buildProps({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const __default__$1 = /* @__PURE__ */ defineComponent({
  name: "ElTag"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useFormSize();
    const ns = useNamespace("tag");
    const classes = computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(classes)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("close")),
          onClick: withModifiers(handleClose, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(unref(close_default))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns).namespace.value}-zoom-in-center`,
        appear: ""
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(classes)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).e("close")),
              onClick: withModifiers(handleClose, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const ElTag = withInstall(Tag);
const selectGroupKey = Symbol("ElSelectGroup");
const selectKey = Symbol("ElSelect");
function useOption(props, states) {
  const select = inject(selectKey);
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const isObject2 = computed(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === "[object object]";
  });
  const itemSelected = computed(() => {
    if (!select.props.multiple) {
      return isEqual2(props.value, select.props.modelValue);
    } else {
      return contains(select.props.modelValue, props.value);
    }
  });
  const limitReached = computed(() => {
    if (select.props.multiple) {
      const modelValue = select.props.modelValue || [];
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    return props.label || (isObject2.value ? "" : props.value);
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject2.value) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const isEqual2 = (a, b) => {
    if (!isObject2.value) {
      return a === b;
    } else {
      const { valueKey } = select.props;
      return get(a, valueKey) === get(b, valueKey);
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.hoverIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote)
      select.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props;
    if (!Object.is(val, oldVal)) {
      select.onOptionDestroy(oldVal, instance.proxy);
      select.onOptionCreate(instance.proxy);
    }
    if (!props.created && !remote) {
      if (valueKey && typeof val === "object" && typeof oldVal === "object" && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  const { queryChange } = toRaw(select);
  watch(queryChange, (changes) => {
    const { query } = unref(changes);
    const regexp = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp.test(currentLabel.value) || props.created;
    if (!states.visible) {
      select.filteredOptionsCount--;
    }
  }, { immediate: true });
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem
  };
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns = useNamespace("select");
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    });
    const { currentLabel, itemSelected, isDisabled, select, hoverItem } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    select.onOptionCreate(vm);
    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm, true);
      }
    }
    return {
      ns,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.ns.be("dropdown", "item"),
      _ctx.ns.is("disabled", _ctx.isDisabled),
      {
        selected: _ctx.itemSelected,
        hover: _ctx.hover
      }
    ]),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createElementVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 34)), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$5], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const ns = useNamespace("select");
    const popperClass = computed(() => select.props.popperClass);
    const isMultiple = computed(() => select.props.multiple);
    const isFitInputWidth = computed(() => select.props.fitInputWidth);
    const minWidth = ref("");
    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function useSelectStates(props) {
  const { t } = useLocale();
  return reactive({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: false,
    selected: props.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    prefixWidth: 11,
    tagInMultiLine: false,
    mouseEnter: false
  });
}
const useSelect = (props, states, ctx) => {
  const { t } = useLocale();
  const ns = useNamespace("select");
  useDeprecated({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, computed(() => props.suffixTransition === false));
  const reference = ref(null);
  const input = ref(null);
  const tooltipRef = ref(null);
  const tags = ref(null);
  const selectWrapper = ref(null);
  const scrollbar = ref(null);
  const hoverOption = ref(-1);
  const queryChange = shallowRef({ query: "" });
  const groupQueryChange = shallowRef("");
  const optionList = ref([]);
  let originClientHeight = 0;
  const { form, formItem } = useFormItem();
  const readonly2 = computed(() => !props.filterable || props.multiple || !states.visible);
  const selectDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
  const showClose = computed(() => {
    const hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "";
    const criteria = props.clearable && !selectDisabled.value && states.inputHovering && hasValue;
    return criteria;
  });
  const iconComponent = computed(() => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon);
  const iconReverse = computed(() => ns.is("reverse", iconComponent.value && states.visible && props.suffixTransition));
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && states.query === "" && states.options.size === 0)
        return false;
      if (props.filterable && states.query && states.options.size > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const optionsArray = computed(() => {
    const list = Array.from(states.options.values());
    const newList = [];
    optionList.value.forEach((item) => {
      const index2 = list.findIndex((i) => i.currentLabel === item);
      if (index2 > -1) {
        newList.push(list[index2]);
      }
    });
    return newList.length ? newList : list;
  });
  const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.query;
    });
    return props.filterable && props.allowCreate && states.query !== "" && !hasExistingOption;
  });
  const selectSize = useFormSize();
  const collapseTagSize = computed(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropMenuVisible = computed({
    get() {
      return states.visible && emptyText.value !== false;
    },
    set(val) {
      states.visible = val;
    }
  });
  watch([() => selectDisabled.value, () => selectSize.value, () => form == null ? void 0 : form.size], () => {
    nextTick(() => {
      resetInputHeight();
    });
  });
  watch(() => props.placeholder, (val) => {
    states.cachedPlaceHolder = states.currentPlaceholder = val;
  });
  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      resetInputHeight();
      if (val && val.length > 0 || input.value && states.query !== "") {
        states.currentPlaceholder = "";
      } else {
        states.currentPlaceholder = states.cachedPlaceHolder;
      }
      if (props.filterable && !props.reserveKeyword) {
        states.query = "";
        handleQueryChange(states.query);
      }
    }
    setSelected();
    if (props.filterable && !props.multiple) {
      states.inputLength = 20;
    }
    if (!isEqual(val, oldVal) && props.validateEvent) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => states.visible, (val) => {
    var _a, _b, _c;
    if (!val) {
      if (props.filterable) {
        if (isFunction(props.filterMethod)) {
          props.filterMethod("");
        }
        if (isFunction(props.remoteMethod)) {
          props.remoteMethod("");
        }
      }
      input.value && input.value.blur();
      states.query = "";
      states.previousQuery = null;
      states.selectedLabel = "";
      states.inputLength = 20;
      states.menuVisibleOnFocus = false;
      resetHoverIndex();
      nextTick(() => {
        if (input.value && input.value.value === "" && states.selected.length === 0) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      });
      if (!props.multiple) {
        if (states.selected) {
          if (props.filterable && props.allowCreate && states.createdSelected && states.createdLabel) {
            states.selectedLabel = states.createdLabel;
          } else {
            states.selectedLabel = states.selected.currentLabel;
          }
          if (props.filterable)
            states.query = states.selectedLabel;
        }
        if (props.filterable) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      }
    } else {
      (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      if (props.filterable) {
        states.filteredOptionsCount = states.optionsCount;
        states.query = props.remote ? "" : states.selectedLabel;
        if (props.multiple) {
          (_c = input.value) == null ? void 0 : _c.focus();
        } else {
          if (states.selectedLabel) {
            states.currentPlaceholder = `${states.selectedLabel}`;
            states.selectedLabel = "";
          }
        }
        handleQueryChange(states.query);
        if (!props.multiple && !props.remote) {
          queryChange.value.query = "";
          triggerRef(queryChange);
          triggerRef(groupQueryChange);
        }
      }
    }
    ctx.emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    var _a, _b, _c;
    if (!isClient)
      return;
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    if (props.multiple) {
      resetInputHeight();
    }
    const inputs = ((_c = selectWrapper.value) == null ? void 0 : _c.querySelectorAll("input")) || [];
    if (!Array.from(inputs).includes(document.activeElement)) {
      setSelected();
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  watch(() => states.hoverIndex, (val) => {
    if (isNumber(val) && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    } else {
      hoverOption.value = {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  const resetInputHeight = () => {
    nextTick(() => {
      var _a, _b;
      if (!reference.value)
        return;
      const input2 = reference.value.$el.querySelector("input");
      originClientHeight = originClientHeight || (input2.clientHeight > 0 ? input2.clientHeight + 2 : 0);
      const _tags = tags.value;
      const gotSize = getComponentSize(selectSize.value || (form == null ? void 0 : form.size));
      const sizeInMap = gotSize === originClientHeight || originClientHeight <= 0 ? gotSize : originClientHeight;
      const isElHidden = input2.offsetParent === null;
      !isElHidden && (input2.style.height = `${(states.selected.length === 0 ? sizeInMap : Math.max(_tags ? _tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap)) - 2}px`);
      states.tagInMultiLine = Number.parseFloat(input2.style.height) >= sizeInMap;
      if (states.visible && emptyText.value !== false) {
        (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      }
    });
  };
  const handleQueryChange = async (val) => {
    if (states.previousQuery === val || states.isOnComposition)
      return;
    if (states.previousQuery === null && (isFunction(props.filterMethod) || isFunction(props.remoteMethod))) {
      states.previousQuery = val;
      return;
    }
    states.previousQuery = val;
    nextTick(() => {
      var _a, _b;
      if (states.visible)
        (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    });
    states.hoverIndex = -1;
    if (props.multiple && props.filterable) {
      nextTick(() => {
        const length = input.value.value.length * 15 + 20;
        states.inputLength = props.collapseTags ? Math.min(50, length) : length;
        managePlaceholder();
        resetInputHeight();
      });
    }
    if (props.remote && isFunction(props.remoteMethod)) {
      states.hoverIndex = -1;
      props.remoteMethod(val);
    } else if (isFunction(props.filterMethod)) {
      props.filterMethod(val);
      triggerRef(groupQueryChange);
    } else {
      states.filteredOptionsCount = states.optionsCount;
      queryChange.value.query = val;
      triggerRef(queryChange);
      triggerRef(groupQueryChange);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      await nextTick();
      checkDefaultFirstOption();
    }
  };
  const managePlaceholder = () => {
    if (states.currentPlaceholder !== "") {
      states.currentPlaceholder = input.value.value ? "" : states.cachedPlaceHolder;
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n) => n.created);
    const firstOriginOption = optionsInDropdown[0];
    states.hoverIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    var _a;
    if (!props.multiple) {
      const option = getOption(props.modelValue);
      if ((_a = option.props) == null ? void 0 : _a.created) {
        states.createdLabel = option.props.value;
        states.createdSelected = true;
      } else {
        states.createdSelected = false;
      }
      states.selectedLabel = option.currentLabel;
      states.selected = option;
      if (props.filterable)
        states.query = states.selectedLabel;
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
    nextTick(() => {
      resetInputHeight();
    });
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = toRawType(value).toLowerCase() === "object";
    const isNull = toRawType(value).toLowerCase() === "null";
    const isUndefined2 = toRawType(value).toLowerCase() === "undefined";
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          isDisabled: cachedOption.isDisabled
        };
        break;
      }
    }
    if (option)
      return option;
    const label = isObjectValue ? value.label : !isNull && !isUndefined2 ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    if (props.multiple) {
      newOption.hitState = false;
    }
    return newOption;
  };
  const resetHoverIndex = () => {
    setTimeout(() => {
      const valueKey = props.valueKey;
      if (!props.multiple) {
        states.hoverIndex = optionsArray.value.findIndex((item) => {
          return getValueKey(item) === getValueKey(states.selected);
        });
      } else {
        if (states.selected.length > 0) {
          states.hoverIndex = Math.min.apply(null, states.selected.map((selected) => {
            return optionsArray.value.findIndex((item) => {
              return get(item, valueKey) === get(selected, valueKey);
            });
          }));
        } else {
          states.hoverIndex = -1;
        }
      }
    }, 300);
  };
  const handleResize = () => {
    var _a, _b;
    resetInputWidth();
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    if (props.multiple)
      resetInputHeight();
  };
  const resetInputWidth = () => {
    var _a;
    states.inputWidth = (_a = reference.value) == null ? void 0 : _a.$el.offsetWidth;
  };
  const onInputChange = () => {
    if (props.filterable && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel;
      handleQueryChange(states.query);
    }
  };
  const debouncedOnInputChange = debounce(() => {
    onInputChange();
  }, debounce$1.value);
  const debouncedQueryChange = debounce((e) => {
    handleQueryChange(e.target.value);
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val);
    }
  };
  const deletePrevTag = (e) => {
    if (e.target.value.length <= 0 && !toggleLastOptionHitState()) {
      const value = props.modelValue.slice();
      value.pop();
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
    }
    if (e.target.value.length === 1 && props.modelValue.length === 0) {
      states.currentPlaceholder = states.cachedPlaceHolder;
    }
  };
  const deleteTag = (event, tag) => {
    const index2 = states.selected.indexOf(tag);
    if (index2 > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice();
      value.splice(index2, 1);
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      ctx.emit("remove-tag", tag.value);
    }
    event.stopPropagation();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : "";
    if (!isString(value)) {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    ctx.emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.hoverIndex = -1;
    states.visible = false;
    ctx.emit("clear");
  };
  const handleOptionSelect = (option, byClick) => {
    var _a;
    if (props.multiple) {
      const value = (props.modelValue || []).slice();
      const optionIndex = getValueIndex(value, option.value);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        states.query = "";
        handleQueryChange("");
        states.inputLength = 20;
      }
      if (props.filterable)
        (_a = input.value) == null ? void 0 : _a.focus();
    } else {
      ctx.emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      states.visible = false;
    }
    states.isSilentBlur = byClick;
    setSoftFocus();
    if (states.visible)
      return;
    nextTick(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr = [], value) => {
    if (!isObject(value))
      return arr.indexOf(value);
    const valueKey = props.valueKey;
    let index2 = -1;
    arr.some((item, i) => {
      if (toRaw(get(item, valueKey)) === get(value, valueKey)) {
        index2 = i;
        return true;
      }
      return false;
    });
    return index2;
  };
  const setSoftFocus = () => {
    states.softFocus = true;
    const _input = input.value || reference.value;
    if (_input) {
      _input == null ? void 0 : _input.focus();
    }
  };
  const scrollToOption = (option) => {
    var _a, _b, _c, _d, _e;
    const targetOption = Array.isArray(option) ? option[0] : option;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${ns.be("dropdown", "wrap")}`);
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbar.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.optionsCount++;
    states.filteredOptionsCount++;
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.optionsCount--;
      states.filteredOptionsCount--;
      states.options.delete(key);
    }
  };
  const resetInputState = (e) => {
    if (e.code !== EVENT_CODE.backspace)
      toggleLastOptionHitState(false);
    states.inputLength = input.value.value.length * 15 + 20;
    resetInputHeight();
  };
  const toggleLastOptionHitState = (hit) => {
    if (!Array.isArray(states.selected))
      return;
    const option = states.selected[states.selected.length - 1];
    if (!option)
      return;
    if (hit === true || hit === false) {
      option.hitState = hit;
      return hit;
    }
    option.hitState = !option.hitState;
    return option.hitState;
  };
  const handleComposition = (event) => {
    const text = event.target.value;
    if (event.type === "compositionend") {
      states.isOnComposition = false;
      nextTick(() => handleQueryChange(text));
    } else {
      const lastCharacter = text[text.length - 1] || "";
      states.isOnComposition = !isKorean(lastCharacter);
    }
  };
  const handleMenuEnter = () => {
    nextTick(() => scrollToOption(states.selected));
  };
  const handleFocus = (event) => {
    if (!states.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        if (props.filterable && !states.visible) {
          states.menuVisibleOnFocus = true;
        }
        states.visible = true;
      }
      ctx.emit("focus", event);
    } else {
      states.softFocus = false;
    }
  };
  const blur = () => {
    var _a;
    states.visible = false;
    (_a = reference.value) == null ? void 0 : _a.blur();
  };
  const handleBlur = (event) => {
    nextTick(() => {
      if (states.isSilentBlur) {
        states.isSilentBlur = false;
      } else {
        ctx.emit("blur", event);
      }
    });
    states.softFocus = false;
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClose = () => {
    states.visible = false;
  };
  const handleKeydownEscape = (event) => {
    if (states.visible) {
      event.preventDefault();
      event.stopPropagation();
      states.visible = false;
    }
  };
  const toggleMenu = (e) => {
    var _a;
    if (e && !states.mouseEnter) {
      return;
    }
    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false;
      } else {
        if (!tooltipRef.value || !tooltipRef.value.isFocusInsideContent()) {
          states.visible = !states.visible;
        }
      }
      if (states.visible) {
        (_a = input.value || reference.value) == null ? void 0 : _a.focus();
      }
    }
  };
  const selectOption = () => {
    if (!states.visible) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoverIndex]) {
        handleOptionSelect(optionsArray.value[states.hoverIndex], void 0);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(() => optionsArray.value.filter((option) => option.visible).every((option) => option.disabled));
  const showTagList = computed(() => states.selected.slice(0, props.maxCollapseTags));
  const collapseTagList = computed(() => states.selected.slice(props.maxCollapseTags));
  const navigateOptions = (direction) => {
    if (!states.visible) {
      states.visible = true;
      return;
    }
    if (states.options.size === 0 || states.filteredOptionsCount === 0)
      return;
    if (states.isOnComposition)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoverIndex++;
        if (states.hoverIndex === states.options.size) {
          states.hoverIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoverIndex--;
        if (states.hoverIndex < 0) {
          states.hoverIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoverIndex];
      if (option.disabled === true || option.states.groupDisabled === true || !option.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const handleMouseEnter = () => {
    states.mouseEnter = true;
  };
  const handleMouseLeave = () => {
    states.mouseEnter = false;
  };
  return {
    optionList,
    optionsArray,
    selectSize,
    handleResize,
    debouncedOnInputChange,
    debouncedQueryChange,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    readonly: readonly2,
    resetInputHeight,
    showClose,
    iconComponent,
    iconReverse,
    showNewOption,
    collapseTagSize,
    setSelected,
    managePlaceholder,
    selectDisabled,
    emptyText,
    toggleLastOptionHitState,
    resetInputState,
    handleComposition,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    blur,
    handleBlur,
    handleClearClick,
    handleClose,
    handleKeydownEscape,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropMenuVisible,
    queryChange,
    groupQueryChange,
    showTagList,
    collapseTagList,
    reference,
    input,
    tooltipRef,
    tags,
    selectWrapper,
    scrollbar,
    handleMouseEnter,
    handleMouseLeave
  };
};
var ElOptions = /* @__PURE__ */ defineComponent({
  name: "ElOptions",
  emits: ["update-options"],
  setup(_, { slots, emit }) {
    let cachedOptions = [];
    function isSameOptions(a, b) {
      if (a.length !== b.length)
        return false;
      for (const [index2] of a.entries()) {
        if (a[index2] != b[index2]) {
          return false;
        }
      }
      return true;
    }
    return () => {
      var _a, _b;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const filteredOptions = [];
      function filterOptions(children2) {
        if (!Array.isArray(children2))
          return;
        children2.forEach((item) => {
          var _a2, _b2, _c, _d;
          const name = (_a2 = (item == null ? void 0 : item.type) || {}) == null ? void 0 : _a2.name;
          if (name === "ElOptionGroup") {
            filterOptions(!isString(item.children) && !Array.isArray(item.children) && isFunction((_b2 = item.children) == null ? void 0 : _b2.default) ? (_c = item.children) == null ? void 0 : _c.default() : item.children);
          } else if (name === "ElOption") {
            filteredOptions.push((_d = item.props) == null ? void 0 : _d.label);
          } else if (Array.isArray(item.children)) {
            filterOptions(item.children);
          }
        });
      }
      if (children.length) {
        filterOptions((_b = children[0]) == null ? void 0 : _b.children);
      }
      if (!isSameOptions(filteredOptions, cachedOptions)) {
        cachedOptions = filteredOptions;
        emit("update-options", filteredOptions);
      }
      return children;
    };
  }
});
const COMPONENT_NAME = "ElSelect";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElInput,
    ElSelectMenu,
    ElOption: Option,
    ElOptions,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false
    },
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: useTooltipContentProps.teleported,
    persistent: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: iconPropType,
      default: circle_close_default
    },
    fitInputWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: iconPropType,
      default: arrow_down_default
    },
    tagType: { ...tagProps.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: true
    },
    remoteShowSuffix: {
      type: Boolean,
      default: false
    },
    suffixTransition: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      values: placements,
      default: "bottom-start"
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, ctx) {
    const nsSelect = useNamespace("select");
    useNamespace("input");
    useLocale();
    const states = useSelectStates(props);
    const {
      optionList,
      optionsArray,
      selectSize,
      readonly: readonly2,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      reference,
      input,
      tooltipRef,
      tags,
      selectWrapper,
      scrollbar,
      queryChange,
      groupQueryChange,
      handleMouseEnter,
      handleMouseLeave,
      showTagList,
      collapseTagList
    } = useSelect(props, states, ctx);
    const { focus } = useFocus(reference);
    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
      tagInMultiLine
    } = toRefs(states);
    const wrapperKls = computed(() => {
      const classList = [nsSelect.b()];
      const _selectSize = unref(selectSize);
      if (_selectSize) {
        classList.push(nsSelect.m(_selectSize));
      }
      if (props.disabled) {
        classList.push(nsSelect.m("disabled"));
      }
      return classList;
    });
    const selectTagsStyle = computed(() => ({
      maxWidth: `${unref(inputWidth) - 32}px`,
      width: "100%"
    }));
    const tagTextStyle = computed(() => {
      const maxWidth = unref(inputWidth) > 123 ? unref(inputWidth) - 123 : unref(inputWidth) - 75;
      return { maxWidth: `${maxWidth}px` };
    });
    provide(selectKey, reactive({
      props,
      options,
      optionsArray,
      cachedOptions,
      optionsCount,
      filteredOptionsCount,
      hoverIndex,
      handleOptionSelect,
      onOptionCreate,
      onOptionDestroy,
      selectWrapper,
      selected,
      setSelected,
      queryChange,
      groupQueryChange
    }));
    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, []);
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, "");
    }
    const popperPaneRef = computed(() => {
      var _a, _b;
      return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    const onOptionsRendered = (v) => {
      optionList.value = v;
    };
    return {
      onOptionsRendered,
      tagInMultiLine,
      prefixWidth,
      selectSize,
      readonly: readonly2,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,
      reference,
      input,
      tooltipRef,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar,
      wrapperKls,
      selectTagsStyle,
      nsSelect,
      tagTextStyle,
      handleMouseEnter,
      handleMouseLeave,
      showTagList,
      collapseTagList
    };
  }
});
const _hoisted_1$3 = ["disabled", "autocomplete"];
const _hoisted_2$3 = { style: { "height": "100%", "display": "flex", "justify-content": "center", "align-items": "center" } };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_options = resolveComponent("el-options");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectWrapper",
    class: normalizeClass(_ctx.wrapperKls),
    onMouseenter: _cache[21] || (_cache[21] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
    onMouseleave: _cache[22] || (_cache[22] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args)),
    onClick: _cache[23] || (_cache[23] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropMenuVisible,
      placement: _ctx.placement,
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "popper-options": _ctx.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      onShow: _ctx.handleMenuEnter
    }, {
      default: withCtx(() => [
        createElementVNode("div", {
          class: "select-trigger",
          onMouseenter: _cache[19] || (_cache[19] = ($event) => _ctx.inputHovering = true),
          onMouseleave: _cache[20] || (_cache[20] = ($event) => _ctx.inputHovering = false)
        }, [
          _ctx.multiple ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref: "tags",
            class: normalizeClass(_ctx.nsSelect.e("tags")),
            style: normalizeStyle(_ctx.selectTagsStyle)
          }, [
            _ctx.collapseTags && _ctx.selected.length ? (openBlock(), createBlock(Transition, {
              key: 0,
              onAfterLeave: _ctx.resetInputHeight
            }, {
              default: withCtx(() => [
                createElementVNode("span", {
                  class: normalizeClass([
                    _ctx.nsSelect.b("tags-wrapper"),
                    { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
                  ])
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.showTagList, (item) => {
                    return openBlock(), createBlock(_component_el_tag, {
                      key: _ctx.getValueKey(item),
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      hit: item.hitState,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                          style: normalizeStyle(_ctx.tagTextStyle)
                        }, toDisplayString(item.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]);
                  }), 128)),
                  _ctx.selected.length > _ctx.maxCollapseTags ? (openBlock(), createBlock(_component_el_tag, {
                    key: 0,
                    closable: false,
                    size: _ctx.collapseTagSize,
                    type: _ctx.tagType,
                    "disable-transitions": ""
                  }, {
                    default: withCtx(() => [
                      _ctx.collapseTagsTooltip ? (openBlock(), createBlock(_component_el_tooltip, {
                        key: 0,
                        disabled: _ctx.dropMenuVisible,
                        "fallback-placements": ["bottom", "top", "right", "left"],
                        effect: _ctx.effect,
                        placement: "bottom",
                        teleported: _ctx.teleported
                      }, {
                        default: withCtx(() => [
                          createElementVNode("span", {
                            class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                          }, "+ " + toDisplayString(_ctx.selected.length - _ctx.maxCollapseTags), 3)
                        ]),
                        content: withCtx(() => [
                          createElementVNode("div", {
                            class: normalizeClass(_ctx.nsSelect.e("collapse-tags"))
                          }, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.collapseTagList, (item) => {
                              return openBlock(), createElementBlock("div", {
                                key: _ctx.getValueKey(item),
                                class: normalizeClass(_ctx.nsSelect.e("collapse-tag"))
                              }, [
                                createVNode(_component_el_tag, {
                                  class: "in-tooltip",
                                  closable: !_ctx.selectDisabled && !item.isDisabled,
                                  size: _ctx.collapseTagSize,
                                  hit: item.hitState,
                                  type: _ctx.tagType,
                                  "disable-transitions": "",
                                  style: { margin: "2px" },
                                  onClose: ($event) => _ctx.deleteTag($event, item)
                                }, {
                                  default: withCtx(() => [
                                    createElementVNode("span", {
                                      class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                                      style: normalizeStyle({
                                        maxWidth: _ctx.inputWidth - 75 + "px"
                                      })
                                    }, toDisplayString(item.currentLabel), 7)
                                  ]),
                                  _: 2
                                }, 1032, ["closable", "size", "hit", "type", "onClose"])
                              ], 2);
                            }), 128))
                          ], 2)
                        ]),
                        _: 1
                      }, 8, ["disabled", "effect", "teleported"])) : (openBlock(), createElementBlock("span", {
                        key: 1,
                        class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                      }, "+ " + toDisplayString(_ctx.selected.length - _ctx.maxCollapseTags), 3))
                    ]),
                    _: 1
                  }, 8, ["size", "type"])) : createCommentVNode("v-if", true)
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true),
            !_ctx.collapseTags ? (openBlock(), createBlock(Transition, {
              key: 1,
              onAfterLeave: _ctx.resetInputHeight
            }, {
              default: withCtx(() => [
                createElementVNode("span", {
                  class: normalizeClass([
                    _ctx.nsSelect.b("tags-wrapper"),
                    { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
                  ])
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected, (item) => {
                    return openBlock(), createBlock(_component_el_tag, {
                      key: _ctx.getValueKey(item),
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      hit: item.hitState,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                          style: normalizeStyle({ maxWidth: _ctx.inputWidth - 75 + "px" })
                        }, toDisplayString(item.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]);
                  }), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true),
            _ctx.filterable ? withDirectives((openBlock(), createElementBlock("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.query = $event),
              type: "text",
              class: normalizeClass([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
              disabled: _ctx.selectDisabled,
              autocomplete: _ctx.autocomplete,
              style: normalizeStyle({
                marginLeft: _ctx.prefixWidth && !_ctx.selected.length || _ctx.tagInMultiLine ? `${_ctx.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${_ctx.inputLength / (_ctx.inputWidth - 32)}%`,
                maxWidth: `${_ctx.inputWidth - 42}px`
              }),
              onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
              onKeyup: _cache[3] || (_cache[3] = (...args) => _ctx.managePlaceholder && _ctx.managePlaceholder(...args)),
              onKeydown: [
                _cache[4] || (_cache[4] = (...args) => _ctx.resetInputState && _ctx.resetInputState(...args)),
                _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["prevent"]), ["down"])),
                _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["prevent"]), ["up"])),
                _cache[7] || (_cache[7] = withKeys((...args) => _ctx.handleKeydownEscape && _ctx.handleKeydownEscape(...args), ["esc"])),
                _cache[8] || (_cache[8] = withKeys(withModifiers((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
                _cache[9] || (_cache[9] = withKeys((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["delete"])),
                _cache[10] || (_cache[10] = withKeys(($event) => _ctx.visible = false, ["tab"]))
              ],
              onCompositionstart: _cache[11] || (_cache[11] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionupdate: _cache[12] || (_cache[12] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionend: _cache[13] || (_cache[13] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onInput: _cache[14] || (_cache[14] = (...args) => _ctx.debouncedQueryChange && _ctx.debouncedQueryChange(...args))
            }, null, 46, _hoisted_1$3)), [
              [vModelText, _ctx.query]
            ]) : createCommentVNode("v-if", true)
          ], 6)) : createCommentVNode("v-if", true),
          createVNode(_component_el_input, {
            id: _ctx.id,
            ref: "reference",
            modelValue: _ctx.selectedLabel,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => _ctx.selectedLabel = $event),
            type: "text",
            placeholder: typeof _ctx.currentPlaceholder === "function" ? _ctx.currentPlaceholder() : _ctx.currentPlaceholder,
            name: _ctx.name,
            autocomplete: _ctx.autocomplete,
            size: _ctx.selectSize,
            disabled: _ctx.selectDisabled,
            readonly: _ctx.readonly,
            "validate-event": false,
            class: normalizeClass([_ctx.nsSelect.is("focus", _ctx.visible)]),
            tabindex: _ctx.multiple && _ctx.filterable ? -1 : void 0,
            onFocus: _ctx.handleFocus,
            onBlur: _ctx.handleBlur,
            onInput: _ctx.debouncedOnInputChange,
            onPaste: _ctx.debouncedOnInputChange,
            onCompositionstart: _ctx.handleComposition,
            onCompositionupdate: _ctx.handleComposition,
            onCompositionend: _ctx.handleComposition,
            onKeydown: [
              _cache[16] || (_cache[16] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              withKeys(withModifiers(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
              withKeys(_ctx.handleKeydownEscape, ["esc"]),
              _cache[18] || (_cache[18] = withKeys(($event) => _ctx.visible = false, ["tab"]))
            ]
          }, createSlots({
            suffix: withCtx(() => [
              _ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon")]),
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 2
          }, [
            _ctx.$slots.prefix ? {
              name: "prefix",
              fn: withCtx(() => [
                createElementVNode("div", _hoisted_2$3, [
                  renderSlot(_ctx.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, null, {
          default: withCtx(() => [
            withDirectives(createVNode(_component_el_scrollbar, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: normalizeClass([
                _ctx.nsSelect.is("empty", !_ctx.allowCreate && Boolean(_ctx.query) && _ctx.filteredOptionsCount === 0)
              ])
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.query,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                createVNode(_component_el_options, { onUpdateOptions: _ctx.onOptionsRendered }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [vShow, _ctx.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.options.size === 0) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _ctx.$slots.empty ? renderSlot(_ctx.$slots, "empty", { key: 0 }) : (openBlock(), createElementBlock("p", {
                key: 1,
                class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
              }, toDisplayString(_ctx.emptyText), 3))
            ], 64)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [_directive_click_outside, _ctx.handleClose, _ctx.popperPaneRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$3], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns = useNamespace("select");
    const visible = ref(true);
    getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const select = inject(selectKey);
    const { groupQueryChange } = toRaw(select);
    watch(groupQueryChange, () => {
      visible.value = children.value.some((option) => option.visible === true);
    }, { flush: "post" });
    return {
      visible,
      ns
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    class: normalizeClass(_ctx.ns.be("group", "wrap"))
  }, [
    createElementVNode("li", {
      class: normalizeClass(_ctx.ns.be("group", "title"))
    }, toDisplayString(_ctx.label), 3),
    createElementVNode("li", null, [
      createElementVNode("ul", {
        class: normalizeClass(_ctx.ns.b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
const getCell = function(event) {
  var _a;
  return (_a = event.target) == null ? void 0 : _a.closest("td");
};
const orderBy = function(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === "string") {
    reverse = reverse === "descending" ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  const getKey = sortMethod ? null : function(value, index2) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map((by) => {
        if (typeof by === "string") {
          return get(value, by);
        } else {
          return by(value, index2, array);
        }
      });
    }
    if (sortKey !== "$key") {
      if (isObject(value) && "$value" in value)
        value = value.$value;
    }
    return [isObject(value) ? get(value, sortKey) : value];
  };
  const compare = function(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (let i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map((value, index2) => {
    return {
      value,
      index: index2,
      key: getKey ? getKey(value, index2) : null
    };
  }).sort((a, b) => {
    let order = compare(a, b);
    if (!order) {
      order = a.index - b.index;
    }
    return order * +reverse;
  }).map((item) => item.value);
};
const getColumnById = function(table, columnId) {
  let column = null;
  table.columns.forEach((item) => {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};
const getColumnByKey = function(table, columnKey) {
  let column = null;
  for (let i = 0; i < table.columns.length; i++) {
    const item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  if (!column)
    throwError("ElTable", `No column matching with column-key: ${columnKey}`);
  return column;
};
const getColumnByCell = function(table, cell, namespace) {
  const matches = (cell.className || "").match(new RegExp(`${namespace}-table_[^\\s]+`, "gm"));
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};
const getRowIdentity = (row, rowKey) => {
  if (!row)
    throw new Error("Row is required when get row identity");
  if (typeof rowKey === "string") {
    if (!rowKey.includes(".")) {
      return `${row[rowKey]}`;
    }
    const key = rowKey.split(".");
    let current = row;
    for (const element of key) {
      current = current[element];
    }
    return `${current}`;
  } else if (typeof rowKey === "function") {
    return rowKey.call(null, row);
  }
};
const getKeysMap = function(array, rowKey) {
  const arrayMap = {};
  (array || []).forEach((row, index2) => {
    arrayMap[getRowIdentity(row, rowKey)] = { row, index: index2 };
  });
  return arrayMap;
};
function parseWidth(width) {
  if (width === "")
    return width;
  if (width !== void 0) {
    width = Number.parseInt(width, 10);
    if (Number.isNaN(width)) {
      width = "";
    }
  }
  return width;
}
function parseMinWidth(minWidth) {
  if (minWidth === "")
    return minWidth;
  if (minWidth !== void 0) {
    minWidth = parseWidth(minWidth);
    if (Number.isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
}
function parseHeight(height) {
  if (typeof height === "number") {
    return height;
  }
  if (typeof height === "string") {
    if (/^\d+(?:px)?$/.test(height)) {
      return Number.parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}
function toggleRowStatus(statusArr, row, newVal) {
  let changed = false;
  const index2 = statusArr.indexOf(row);
  const included = index2 !== -1;
  const toggleStatus = (type) => {
    if (type === "add") {
      statusArr.push(row);
    } else {
      statusArr.splice(index2, 1);
    }
    changed = true;
    if (isArray(row.children)) {
      row.children.forEach((item) => {
        toggleRowStatus(statusArr, item, newVal != null ? newVal : !included);
      });
    }
  };
  if (isBoolean(newVal)) {
    if (newVal && !included) {
      toggleStatus("add");
    } else if (!newVal && included) {
      toggleStatus("remove");
    }
  } else {
    included ? toggleStatus("remove") : toggleStatus("add");
  }
  return changed;
}
function walkTreeNode(root, cb, childrenKey = "children", lazyKey = "hasChildren") {
  const isNil2 = (array) => !(Array.isArray(array) && array.length);
  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach((item) => {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      const children2 = item[childrenKey];
      if (!isNil2(children2)) {
        _walker(item, children2, level + 1);
      }
    });
  }
  root.forEach((item) => {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    const children = item[childrenKey];
    if (!isNil2(children)) {
      _walker(item, children, 0);
    }
  });
}
let removePopper;
function createTablePopper(parentNode, trigger, popperContent, nextZIndex, tooltipOptions) {
  tooltipOptions = merge({
    enterable: true,
    showArrow: true
  }, tooltipOptions);
  const ns = parentNode == null ? void 0 : parentNode.dataset.prefix;
  const scrollContainer = parentNode == null ? void 0 : parentNode.querySelector(`.${ns}-scrollbar__wrap`);
  function renderContent() {
    const isLight = tooltipOptions.effect === "light";
    const content2 = document.createElement("div");
    content2.className = [
      `${ns}-popper`,
      isLight ? "is-light" : "is-dark",
      tooltipOptions.popperClass || ""
    ].join(" ");
    popperContent = escapeHtml(popperContent);
    content2.innerHTML = popperContent;
    content2.style.zIndex = String(nextZIndex());
    parentNode == null ? void 0 : parentNode.appendChild(content2);
    return content2;
  }
  function renderArrow() {
    const arrow = document.createElement("div");
    arrow.className = `${ns}-popper__arrow`;
    return arrow;
  }
  function showPopper() {
    popperInstance && popperInstance.update();
  }
  removePopper == null ? void 0 : removePopper();
  removePopper = () => {
    try {
      popperInstance && popperInstance.destroy();
      content && (parentNode == null ? void 0 : parentNode.removeChild(content));
      trigger.removeEventListener("mouseenter", onOpen);
      trigger.removeEventListener("mouseleave", onClose);
      scrollContainer == null ? void 0 : scrollContainer.removeEventListener("scroll", removePopper);
      removePopper = void 0;
    } catch (e) {
    }
  };
  let popperInstance = null;
  let onOpen = showPopper;
  let onClose = removePopper;
  if (tooltipOptions.enterable) {
    ({ onOpen, onClose } = useDelayedToggle({
      showAfter: tooltipOptions.showAfter,
      hideAfter: tooltipOptions.hideAfter,
      open: showPopper,
      close: removePopper
    }));
  }
  const content = renderContent();
  content.onmouseenter = onOpen;
  content.onmouseleave = onClose;
  const modifiers = [];
  if (tooltipOptions.offset) {
    modifiers.push({
      name: "offset",
      options: {
        offset: [0, tooltipOptions.offset]
      }
    });
  }
  if (tooltipOptions.showArrow) {
    const arrow = content.appendChild(renderArrow());
    modifiers.push({
      name: "arrow",
      options: {
        element: arrow,
        padding: 10
      }
    });
  }
  const popperOptions = tooltipOptions.popperOptions || {};
  popperInstance = createPopper(trigger, content, {
    placement: tooltipOptions.placement || "top",
    strategy: "fixed",
    ...popperOptions,
    modifiers: popperOptions.modifiers ? modifiers.concat(popperOptions.modifiers) : modifiers
  });
  trigger.addEventListener("mouseenter", onOpen);
  trigger.addEventListener("mouseleave", onClose);
  scrollContainer == null ? void 0 : scrollContainer.addEventListener("scroll", removePopper);
  return popperInstance;
}
function getCurrentColumns(column) {
  if (column.children) {
    return flatMap(column.children, getCurrentColumns);
  } else {
    return [column];
  }
}
function getColSpan(colSpan, column) {
  return colSpan + column.colSpan;
}
const isFixedColumn = (index2, fixed, store, realColumns) => {
  let start = 0;
  let after = index2;
  const columns = store.states.columns.value;
  if (realColumns) {
    const curColumns = getCurrentColumns(realColumns[index2]);
    const preColumns = columns.slice(0, columns.indexOf(curColumns[0]));
    start = preColumns.reduce(getColSpan, 0);
    after = start + curColumns.reduce(getColSpan, 0) - 1;
  } else {
    start = index2;
  }
  let fixedLayout;
  switch (fixed) {
    case "left":
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      }
      break;
    case "right":
      if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
      break;
    default:
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      } else if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
  }
  return fixedLayout ? {
    direction: fixedLayout,
    start,
    after
  } : {};
};
const getFixedColumnsClass = (namespace, index2, fixed, store, realColumns, offset = 0) => {
  const classes = [];
  const { direction, start, after } = isFixedColumn(index2, fixed, store, realColumns);
  if (direction) {
    const isLeft = direction === "left";
    classes.push(`${namespace}-fixed-column--${direction}`);
    if (isLeft && after + offset === store.states.fixedLeafColumnsLength.value - 1) {
      classes.push("is-last-column");
    } else if (!isLeft && start - offset === store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
      classes.push("is-first-column");
    }
  }
  return classes;
};
function getOffset(offset, column) {
  return offset + (column.realWidth === null || Number.isNaN(column.realWidth) ? Number(column.width) : column.realWidth);
}
const getFixedColumnOffset = (index2, fixed, store, realColumns) => {
  const {
    direction,
    start = 0,
    after = 0
  } = isFixedColumn(index2, fixed, store, realColumns);
  if (!direction) {
    return;
  }
  const styles = {};
  const isLeft = direction === "left";
  const columns = store.states.columns.value;
  if (isLeft) {
    styles.left = columns.slice(0, start).reduce(getOffset, 0);
  } else {
    styles.right = columns.slice(after + 1).reverse().reduce(getOffset, 0);
  }
  return styles;
};
const ensurePosition = (style, key) => {
  if (!style)
    return;
  if (!Number.isNaN(style[key])) {
    style[key] = `${style[key]}px`;
  }
};
function useExpand(watcherData) {
  const instance = getCurrentInstance();
  const defaultExpandAll = ref(false);
  const expandRows = ref([]);
  const updateExpandRows = () => {
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    if (defaultExpandAll.value) {
      expandRows.value = data.slice();
    } else if (rowKey) {
      const expandRowsMap = getKeysMap(expandRows.value, rowKey);
      expandRows.value = data.reduce((prev, row) => {
        const rowId = getRowIdentity(row, rowKey);
        const rowInfo = expandRowsMap[rowId];
        if (rowInfo) {
          prev.push(row);
        }
        return prev;
      }, []);
    } else {
      expandRows.value = [];
    }
  };
  const toggleRowExpansion = (row, expanded) => {
    const changed = toggleRowStatus(expandRows.value, row, expanded);
    if (changed) {
      instance.emit("expand-change", row, expandRows.value.slice());
    }
  };
  const setExpandRowKeys = (rowKeys) => {
    instance.store.assertRowKey();
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    const keysMap = getKeysMap(data, rowKey);
    expandRows.value = rowKeys.reduce((prev, cur) => {
      const info = keysMap[cur];
      if (info) {
        prev.push(info.row);
      }
      return prev;
    }, []);
  };
  const isRowExpanded = (row) => {
    const rowKey = watcherData.rowKey.value;
    if (rowKey) {
      const expandMap = getKeysMap(expandRows.value, rowKey);
      return !!expandMap[getRowIdentity(row, rowKey)];
    }
    return expandRows.value.includes(row);
  };
  return {
    updateExpandRows,
    toggleRowExpansion,
    setExpandRowKeys,
    isRowExpanded,
    states: {
      expandRows,
      defaultExpandAll
    }
  };
}
function useCurrent(watcherData) {
  const instance = getCurrentInstance();
  const _currentRowKey = ref(null);
  const currentRow = ref(null);
  const setCurrentRowKey = (key) => {
    instance.store.assertRowKey();
    _currentRowKey.value = key;
    setCurrentRowByKey(key);
  };
  const restoreCurrentRowKey = () => {
    _currentRowKey.value = null;
  };
  const setCurrentRowByKey = (key) => {
    const { data, rowKey } = watcherData;
    let _currentRow = null;
    if (rowKey.value) {
      _currentRow = (unref(data) || []).find((item) => getRowIdentity(item, rowKey.value) === key);
    }
    currentRow.value = _currentRow;
    instance.emit("current-change", currentRow.value, null);
  };
  const updateCurrentRow = (_currentRow) => {
    const oldCurrentRow = currentRow.value;
    if (_currentRow && _currentRow !== oldCurrentRow) {
      currentRow.value = _currentRow;
      instance.emit("current-change", currentRow.value, oldCurrentRow);
      return;
    }
    if (!_currentRow && oldCurrentRow) {
      currentRow.value = null;
      instance.emit("current-change", null, oldCurrentRow);
    }
  };
  const updateCurrentRowData = () => {
    const rowKey = watcherData.rowKey.value;
    const data = watcherData.data.value || [];
    const oldCurrentRow = currentRow.value;
    if (!data.includes(oldCurrentRow) && oldCurrentRow) {
      if (rowKey) {
        const currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
        setCurrentRowByKey(currentRowKey);
      } else {
        currentRow.value = null;
      }
      if (currentRow.value === null) {
        instance.emit("current-change", null, oldCurrentRow);
      }
    } else if (_currentRowKey.value) {
      setCurrentRowByKey(_currentRowKey.value);
      restoreCurrentRowKey();
    }
  };
  return {
    setCurrentRowKey,
    restoreCurrentRowKey,
    setCurrentRowByKey,
    updateCurrentRow,
    updateCurrentRowData,
    states: {
      _currentRowKey,
      currentRow
    }
  };
}
function useTree(watcherData) {
  const expandRowKeys = ref([]);
  const treeData = ref({});
  const indent = ref(16);
  const lazy = ref(false);
  const lazyTreeNodeMap = ref({});
  const lazyColumnIdentifier = ref("hasChildren");
  const childrenColumnName = ref("children");
  const instance = getCurrentInstance();
  const normalizedData = computed(() => {
    if (!watcherData.rowKey.value)
      return {};
    const data = watcherData.data.value || [];
    return normalize(data);
  });
  const normalizedLazyNode = computed(() => {
    const rowKey = watcherData.rowKey.value;
    const keys = Object.keys(lazyTreeNodeMap.value);
    const res = {};
    if (!keys.length)
      return res;
    keys.forEach((key) => {
      if (lazyTreeNodeMap.value[key].length) {
        const item = { children: [] };
        lazyTreeNodeMap.value[key].forEach((row) => {
          const currentRowKey = getRowIdentity(row, rowKey);
          item.children.push(currentRowKey);
          if (row[lazyColumnIdentifier.value] && !res[currentRowKey]) {
            res[currentRowKey] = { children: [] };
          }
        });
        res[key] = item;
      }
    });
    return res;
  });
  const normalize = (data) => {
    const rowKey = watcherData.rowKey.value;
    const res = {};
    walkTreeNode(data, (parent, children, level) => {
      const parentId = getRowIdentity(parent, rowKey);
      if (Array.isArray(children)) {
        res[parentId] = {
          children: children.map((row) => getRowIdentity(row, rowKey)),
          level
        };
      } else if (lazy.value) {
        res[parentId] = {
          children: [],
          lazy: true,
          level
        };
      }
    }, childrenColumnName.value, lazyColumnIdentifier.value);
    return res;
  };
  const updateTreeData = (ifChangeExpandRowKeys = false, ifExpandAll = ((_a) => (_a = instance.store) == null ? void 0 : _a.states.defaultExpandAll.value)()) => {
    var _a2;
    const nested = normalizedData.value;
    const normalizedLazyNode_ = normalizedLazyNode.value;
    const keys = Object.keys(nested);
    const newTreeData = {};
    if (keys.length) {
      const oldTreeData = unref(treeData);
      const rootLazyRowKeys = [];
      const getExpanded = (oldValue, key) => {
        if (ifChangeExpandRowKeys) {
          if (expandRowKeys.value) {
            return ifExpandAll || expandRowKeys.value.includes(key);
          } else {
            return !!(ifExpandAll || (oldValue == null ? void 0 : oldValue.expanded));
          }
        } else {
          const included = ifExpandAll || expandRowKeys.value && expandRowKeys.value.includes(key);
          return !!((oldValue == null ? void 0 : oldValue.expanded) || included);
        }
      };
      keys.forEach((key) => {
        const oldValue = oldTreeData[key];
        const newValue = { ...nested[key] };
        newValue.expanded = getExpanded(oldValue, key);
        if (newValue.lazy) {
          const { loaded = false, loading = false } = oldValue || {};
          newValue.loaded = !!loaded;
          newValue.loading = !!loading;
          rootLazyRowKeys.push(key);
        }
        newTreeData[key] = newValue;
      });
      const lazyKeys = Object.keys(normalizedLazyNode_);
      if (lazy.value && lazyKeys.length && rootLazyRowKeys.length) {
        lazyKeys.forEach((key) => {
          const oldValue = oldTreeData[key];
          const lazyNodeChildren = normalizedLazyNode_[key].children;
          if (rootLazyRowKeys.includes(key)) {
            if (newTreeData[key].children.length !== 0) {
              throw new Error("[ElTable]children must be an empty array.");
            }
            newTreeData[key].children = lazyNodeChildren;
          } else {
            const { loaded = false, loading = false } = oldValue || {};
            newTreeData[key] = {
              lazy: true,
              loaded: !!loaded,
              loading: !!loading,
              expanded: getExpanded(oldValue, key),
              children: lazyNodeChildren,
              level: ""
            };
          }
        });
      }
    }
    treeData.value = newTreeData;
    (_a2 = instance.store) == null ? void 0 : _a2.updateTableScrollY();
  };
  watch(() => expandRowKeys.value, () => {
    updateTreeData(true);
  });
  watch(() => normalizedData.value, () => {
    updateTreeData();
  });
  watch(() => normalizedLazyNode.value, () => {
    updateTreeData();
  });
  const updateTreeExpandKeys = (value) => {
    expandRowKeys.value = value;
    updateTreeData();
  };
  const toggleTreeExpansion = (row, expanded) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = id && treeData.value[id];
    if (id && data && "expanded" in data) {
      const oldExpanded = data.expanded;
      expanded = typeof expanded === "undefined" ? !data.expanded : expanded;
      treeData.value[id].expanded = expanded;
      if (oldExpanded !== expanded) {
        instance.emit("expand-change", row, expanded);
      }
      instance.store.updateTableScrollY();
    }
  };
  const loadOrToggle = (row) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = treeData.value[id];
    if (lazy.value && data && "loaded" in data && !data.loaded) {
      loadData(row, id, data);
    } else {
      toggleTreeExpansion(row, void 0);
    }
  };
  const loadData = (row, key, treeNode) => {
    const { load } = instance.props;
    if (load && !treeData.value[key].loaded) {
      treeData.value[key].loading = true;
      load(row, treeNode, (data) => {
        if (!Array.isArray(data)) {
          throw new TypeError("[ElTable] data must be an array");
        }
        treeData.value[key].loading = false;
        treeData.value[key].loaded = true;
        treeData.value[key].expanded = true;
        if (data.length) {
          lazyTreeNodeMap.value[key] = data;
        }
        instance.emit("expand-change", row, true);
      });
    }
  };
  return {
    loadData,
    loadOrToggle,
    toggleTreeExpansion,
    updateTreeExpandKeys,
    updateTreeData,
    normalize,
    states: {
      expandRowKeys,
      treeData,
      indent,
      lazy,
      lazyTreeNodeMap,
      lazyColumnIdentifier,
      childrenColumnName
    }
  };
}
const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === "string") {
    return data;
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};
const doFlattenColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
function useWatcher$1() {
  var _a;
  const instance = getCurrentInstance();
  const { size: tableSize } = toRefs((_a = instance.proxy) == null ? void 0 : _a.$props);
  const rowKey = ref(null);
  const data = ref([]);
  const _data = ref([]);
  const isComplex = ref(false);
  const _columns = ref([]);
  const originColumns = ref([]);
  const columns = ref([]);
  const fixedColumns = ref([]);
  const rightFixedColumns = ref([]);
  const leafColumns = ref([]);
  const fixedLeafColumns = ref([]);
  const rightFixedLeafColumns = ref([]);
  const updateOrderFns = [];
  const leafColumnsLength = ref(0);
  const fixedLeafColumnsLength = ref(0);
  const rightFixedLeafColumnsLength = ref(0);
  const isAllSelected = ref(false);
  const selection = ref([]);
  const reserveSelection = ref(false);
  const selectOnIndeterminate = ref(false);
  const selectable = ref(null);
  const filters = ref({});
  const filteredData = ref(null);
  const sortingColumn = ref(null);
  const sortProp = ref(null);
  const sortOrder = ref(null);
  const hoverRow = ref(null);
  watch(data, () => instance.state && scheduleLayout(false), {
    deep: true
  });
  const assertRowKey = () => {
    if (!rowKey.value)
      throw new Error("[ElTable] prop row-key is required");
  };
  const updateChildFixed = (column) => {
    var _a2;
    (_a2 = column.children) == null ? void 0 : _a2.forEach((childColumn) => {
      childColumn.fixed = column.fixed;
      updateChildFixed(childColumn);
    });
  };
  const updateColumns = () => {
    _columns.value.forEach((column) => {
      updateChildFixed(column);
    });
    fixedColumns.value = _columns.value.filter((column) => column.fixed === true || column.fixed === "left");
    rightFixedColumns.value = _columns.value.filter((column) => column.fixed === "right");
    if (fixedColumns.value.length > 0 && _columns.value[0] && _columns.value[0].type === "selection" && !_columns.value[0].fixed) {
      _columns.value[0].fixed = true;
      fixedColumns.value.unshift(_columns.value[0]);
    }
    const notFixedColumns = _columns.value.filter((column) => !column.fixed);
    originColumns.value = [].concat(fixedColumns.value).concat(notFixedColumns).concat(rightFixedColumns.value);
    const leafColumns2 = doFlattenColumns(notFixedColumns);
    const fixedLeafColumns2 = doFlattenColumns(fixedColumns.value);
    const rightFixedLeafColumns2 = doFlattenColumns(rightFixedColumns.value);
    leafColumnsLength.value = leafColumns2.length;
    fixedLeafColumnsLength.value = fixedLeafColumns2.length;
    rightFixedLeafColumnsLength.value = rightFixedLeafColumns2.length;
    columns.value = [].concat(fixedLeafColumns2).concat(leafColumns2).concat(rightFixedLeafColumns2);
    isComplex.value = fixedColumns.value.length > 0 || rightFixedColumns.value.length > 0;
  };
  const scheduleLayout = (needUpdateColumns, immediate = false) => {
    if (needUpdateColumns) {
      updateColumns();
    }
    if (immediate) {
      instance.state.doLayout();
    } else {
      instance.state.debouncedUpdateLayout();
    }
  };
  const isSelected = (row) => {
    return selection.value.includes(row);
  };
  const clearSelection = () => {
    isAllSelected.value = false;
    const oldSelection = selection.value;
    if (oldSelection.length) {
      selection.value = [];
      instance.emit("selection-change", []);
    }
  };
  const cleanSelection = () => {
    let deleted;
    if (rowKey.value) {
      deleted = [];
      const selectedMap = getKeysMap(selection.value, rowKey.value);
      const dataMap = getKeysMap(data.value, rowKey.value);
      for (const key in selectedMap) {
        if (hasOwn(selectedMap, key) && !dataMap[key]) {
          deleted.push(selectedMap[key].row);
        }
      }
    } else {
      deleted = selection.value.filter((item) => !data.value.includes(item));
    }
    if (deleted.length) {
      const newSelection = selection.value.filter((item) => !deleted.includes(item));
      selection.value = newSelection;
      instance.emit("selection-change", newSelection.slice());
    }
  };
  const getSelectionRows = () => {
    return (selection.value || []).slice();
  };
  const toggleRowSelection = (row, selected = void 0, emitChange = true) => {
    const changed = toggleRowStatus(selection.value, row, selected);
    if (changed) {
      const newSelection = (selection.value || []).slice();
      if (emitChange) {
        instance.emit("select", newSelection, row);
      }
      instance.emit("selection-change", newSelection);
    }
  };
  const _toggleAllSelection = () => {
    var _a2, _b;
    const value = selectOnIndeterminate.value ? !isAllSelected.value : !(isAllSelected.value || selection.value.length);
    isAllSelected.value = value;
    let selectionChanged = false;
    let childrenCount = 0;
    const rowKey2 = (_b = (_a2 = instance == null ? void 0 : instance.store) == null ? void 0 : _a2.states) == null ? void 0 : _b.rowKey.value;
    data.value.forEach((row, index2) => {
      const rowIndex = index2 + childrenCount;
      if (selectable.value) {
        if (selectable.value.call(null, row, rowIndex) && toggleRowStatus(selection.value, row, value)) {
          selectionChanged = true;
        }
      } else {
        if (toggleRowStatus(selection.value, row, value)) {
          selectionChanged = true;
        }
      }
      childrenCount += getChildrenCount(getRowIdentity(row, rowKey2));
    });
    if (selectionChanged) {
      instance.emit("selection-change", selection.value ? selection.value.slice() : []);
    }
    instance.emit("select-all", selection.value);
  };
  const updateSelectionByRowKey = () => {
    const selectedMap = getKeysMap(selection.value, rowKey.value);
    data.value.forEach((row) => {
      const rowId = getRowIdentity(row, rowKey.value);
      const rowInfo = selectedMap[rowId];
      if (rowInfo) {
        selection.value[rowInfo.index] = row;
      }
    });
  };
  const updateAllSelected = () => {
    var _a2, _b, _c;
    if (((_a2 = data.value) == null ? void 0 : _a2.length) === 0) {
      isAllSelected.value = false;
      return;
    }
    let selectedMap;
    if (rowKey.value) {
      selectedMap = getKeysMap(selection.value, rowKey.value);
    }
    const isSelected2 = function(row) {
      if (selectedMap) {
        return !!selectedMap[getRowIdentity(row, rowKey.value)];
      } else {
        return selection.value.includes(row);
      }
    };
    let isAllSelected_ = true;
    let selectedCount = 0;
    let childrenCount = 0;
    for (let i = 0, j = (data.value || []).length; i < j; i++) {
      const keyProp = (_c = (_b = instance == null ? void 0 : instance.store) == null ? void 0 : _b.states) == null ? void 0 : _c.rowKey.value;
      const rowIndex = i + childrenCount;
      const item = data.value[i];
      const isRowSelectable = selectable.value && selectable.value.call(null, item, rowIndex);
      if (!isSelected2(item)) {
        if (!selectable.value || isRowSelectable) {
          isAllSelected_ = false;
          break;
        }
      } else {
        selectedCount++;
      }
      childrenCount += getChildrenCount(getRowIdentity(item, keyProp));
    }
    if (selectedCount === 0)
      isAllSelected_ = false;
    isAllSelected.value = isAllSelected_;
  };
  const getChildrenCount = (rowKey2) => {
    var _a2;
    if (!instance || !instance.store)
      return 0;
    const { treeData } = instance.store.states;
    let count = 0;
    const children = (_a2 = treeData.value[rowKey2]) == null ? void 0 : _a2.children;
    if (children) {
      count += children.length;
      children.forEach((childKey) => {
        count += getChildrenCount(childKey);
      });
    }
    return count;
  };
  const updateFilters = (columns2, values) => {
    if (!Array.isArray(columns2)) {
      columns2 = [columns2];
    }
    const filters_ = {};
    columns2.forEach((col) => {
      filters.value[col.id] = values;
      filters_[col.columnKey || col.id] = values;
    });
    return filters_;
  };
  const updateSort = (column, prop, order) => {
    if (sortingColumn.value && sortingColumn.value !== column) {
      sortingColumn.value.order = null;
    }
    sortingColumn.value = column;
    sortProp.value = prop;
    sortOrder.value = order;
  };
  const execFilter = () => {
    let sourceData = unref(_data);
    Object.keys(filters.value).forEach((columnId) => {
      const values = filters.value[columnId];
      if (!values || values.length === 0)
        return;
      const column = getColumnById({
        columns: columns.value
      }, columnId);
      if (column && column.filterMethod) {
        sourceData = sourceData.filter((row) => {
          return values.some((value) => column.filterMethod.call(null, value, row, column));
        });
      }
    });
    filteredData.value = sourceData;
  };
  const execSort = () => {
    data.value = sortData(filteredData.value, {
      sortingColumn: sortingColumn.value,
      sortProp: sortProp.value,
      sortOrder: sortOrder.value
    });
  };
  const execQuery = (ignore = void 0) => {
    if (!(ignore && ignore.filter)) {
      execFilter();
    }
    execSort();
  };
  const clearFilter = (columnKeys) => {
    const { tableHeaderRef } = instance.refs;
    if (!tableHeaderRef)
      return;
    const panels = Object.assign({}, tableHeaderRef.filterPanels);
    const keys = Object.keys(panels);
    if (!keys.length)
      return;
    if (typeof columnKeys === "string") {
      columnKeys = [columnKeys];
    }
    if (Array.isArray(columnKeys)) {
      const columns_ = columnKeys.map((key) => getColumnByKey({
        columns: columns.value
      }, key));
      keys.forEach((key) => {
        const column = columns_.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      instance.store.commit("filterChange", {
        column: columns_,
        values: [],
        silent: true,
        multi: true
      });
    } else {
      keys.forEach((key) => {
        const column = columns.value.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      filters.value = {};
      instance.store.commit("filterChange", {
        column: {},
        values: [],
        silent: true
      });
    }
  };
  const clearSort = () => {
    if (!sortingColumn.value)
      return;
    updateSort(null, null, null);
    instance.store.commit("changeSortCondition", {
      silent: true
    });
  };
  const {
    setExpandRowKeys,
    toggleRowExpansion,
    updateExpandRows,
    states: expandStates,
    isRowExpanded
  } = useExpand({
    data,
    rowKey
  });
  const {
    updateTreeExpandKeys,
    toggleTreeExpansion,
    updateTreeData,
    loadOrToggle,
    states: treeStates
  } = useTree({
    data,
    rowKey
  });
  const {
    updateCurrentRowData,
    updateCurrentRow,
    setCurrentRowKey,
    states: currentData
  } = useCurrent({
    data,
    rowKey
  });
  const setExpandRowKeysAdapter = (val) => {
    setExpandRowKeys(val);
    updateTreeExpandKeys(val);
  };
  const toggleRowExpansionAdapter = (row, expanded) => {
    const hasExpandColumn = columns.value.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      toggleRowExpansion(row, expanded);
    } else {
      toggleTreeExpansion(row, expanded);
    }
  };
  return {
    assertRowKey,
    updateColumns,
    scheduleLayout,
    isSelected,
    clearSelection,
    cleanSelection,
    getSelectionRows,
    toggleRowSelection,
    _toggleAllSelection,
    toggleAllSelection: null,
    updateSelectionByRowKey,
    updateAllSelected,
    updateFilters,
    updateCurrentRow,
    updateSort,
    execFilter,
    execSort,
    execQuery,
    clearFilter,
    clearSort,
    toggleRowExpansion,
    setExpandRowKeysAdapter,
    setCurrentRowKey,
    toggleRowExpansionAdapter,
    isRowExpanded,
    updateExpandRows,
    updateCurrentRowData,
    loadOrToggle,
    updateTreeData,
    states: {
      tableSize,
      rowKey,
      data,
      _data,
      isComplex,
      _columns,
      originColumns,
      columns,
      fixedColumns,
      rightFixedColumns,
      leafColumns,
      fixedLeafColumns,
      rightFixedLeafColumns,
      updateOrderFns,
      leafColumnsLength,
      fixedLeafColumnsLength,
      rightFixedLeafColumnsLength,
      isAllSelected,
      selection,
      reserveSelection,
      selectOnIndeterminate,
      selectable,
      filters,
      filteredData,
      sortingColumn,
      sortProp,
      sortOrder,
      hoverRow,
      ...expandStates,
      ...treeStates,
      ...currentData
    }
  };
}
function replaceColumn(array, column) {
  return array.map((item) => {
    var _a;
    if (item.id === column.id) {
      return column;
    } else if ((_a = item.children) == null ? void 0 : _a.length) {
      item.children = replaceColumn(item.children, column);
    }
    return item;
  });
}
function sortColumn(array) {
  array.forEach((item) => {
    var _a, _b;
    item.no = (_a = item.getColumnIndex) == null ? void 0 : _a.call(item);
    if ((_b = item.children) == null ? void 0 : _b.length) {
      sortColumn(item.children);
    }
  });
  array.sort((cur, pre) => cur.no - pre.no);
}
function useStore() {
  const instance = getCurrentInstance();
  const watcher = useWatcher$1();
  const ns = useNamespace("table");
  const mutations = {
    setData(states, data) {
      const dataInstanceChanged = unref(states._data) !== data;
      states.data.value = data;
      states._data.value = data;
      instance.store.execQuery();
      instance.store.updateCurrentRowData();
      instance.store.updateExpandRows();
      instance.store.updateTreeData(instance.store.states.defaultExpandAll.value);
      if (unref(states.reserveSelection)) {
        instance.store.assertRowKey();
        instance.store.updateSelectionByRowKey();
      } else {
        if (dataInstanceChanged) {
          instance.store.clearSelection();
        } else {
          instance.store.cleanSelection();
        }
      }
      instance.store.updateAllSelected();
      if (instance.$ready) {
        instance.store.scheduleLayout();
      }
    },
    insertColumn(states, column, parent, updateColumnOrder) {
      const array = unref(states._columns);
      let newColumns = [];
      if (!parent) {
        array.push(column);
        newColumns = array;
      } else {
        if (parent && !parent.children) {
          parent.children = [];
        }
        parent.children.push(column);
        newColumns = replaceColumn(array, parent);
      }
      sortColumn(newColumns);
      states._columns.value = newColumns;
      states.updateOrderFns.push(updateColumnOrder);
      if (column.type === "selection") {
        states.selectable.value = column.selectable;
        states.reserveSelection.value = column.reserveSelection;
      }
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    updateColumnOrder(states, column) {
      var _a;
      const newColumnIndex = (_a = column.getColumnIndex) == null ? void 0 : _a.call(column);
      if (newColumnIndex === column.no)
        return;
      sortColumn(states._columns.value);
      if (instance.$ready) {
        instance.store.updateColumns();
      }
    },
    removeColumn(states, column, parent, updateColumnOrder) {
      const array = unref(states._columns) || [];
      if (parent) {
        parent.children.splice(parent.children.findIndex((item) => item.id === column.id), 1);
        nextTick(() => {
          var _a;
          if (((_a = parent.children) == null ? void 0 : _a.length) === 0) {
            delete parent.children;
          }
        });
        states._columns.value = replaceColumn(array, parent);
      } else {
        const index2 = array.indexOf(column);
        if (index2 > -1) {
          array.splice(index2, 1);
          states._columns.value = array;
        }
      }
      const updateFnIndex = states.updateOrderFns.indexOf(updateColumnOrder);
      updateFnIndex > -1 && states.updateOrderFns.splice(updateFnIndex, 1);
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    sort(states, options) {
      const { prop, order, init } = options;
      if (prop) {
        const column = unref(states.columns).find((column2) => column2.property === prop);
        if (column) {
          column.order = order;
          instance.store.updateSort(column, prop, order);
          instance.store.commit("changeSortCondition", { init });
        }
      }
    },
    changeSortCondition(states, options) {
      const { sortingColumn, sortProp, sortOrder } = states;
      const columnValue = unref(sortingColumn), propValue = unref(sortProp), orderValue = unref(sortOrder);
      if (orderValue === null) {
        states.sortingColumn.value = null;
        states.sortProp.value = null;
      }
      const ignore = { filter: true };
      instance.store.execQuery(ignore);
      if (!options || !(options.silent || options.init)) {
        instance.emit("sort-change", {
          column: columnValue,
          prop: propValue,
          order: orderValue
        });
      }
      instance.store.updateTableScrollY();
    },
    filterChange(_states, options) {
      const { column, values, silent } = options;
      const newFilters = instance.store.updateFilters(column, values);
      instance.store.execQuery();
      if (!silent) {
        instance.emit("filter-change", newFilters);
      }
      instance.store.updateTableScrollY();
    },
    toggleAllSelection() {
      instance.store.toggleAllSelection();
    },
    rowSelectedChanged(_states, row) {
      instance.store.toggleRowSelection(row);
      instance.store.updateAllSelected();
    },
    setHoverRow(states, row) {
      states.hoverRow.value = row;
    },
    setCurrentRow(_states, row) {
      instance.store.updateCurrentRow(row);
    }
  };
  const commit = function(name, ...args) {
    const mutations2 = instance.store.mutations;
    if (mutations2[name]) {
      mutations2[name].apply(instance, [instance.store.states].concat(args));
    } else {
      throw new Error(`Action not found: ${name}`);
    }
  };
  const updateTableScrollY = function() {
    nextTick(() => instance.layout.updateScrollY.apply(instance.layout));
  };
  return {
    ns,
    ...watcher,
    mutations,
    commit,
    updateTableScrollY
  };
}
const InitialStateMap = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  ["treeProps.hasChildren"]: {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  ["treeProps.children"]: {
    key: "childrenColumnName",
    default: "children"
  }
};
function createStore(table, props) {
  if (!table) {
    throw new Error("Table is required.");
  }
  const store = useStore();
  store.toggleAllSelection = debounce(store._toggleAllSelection, 10);
  Object.keys(InitialStateMap).forEach((key) => {
    handleValue(getArrKeysValue(props, key), key, store);
  });
  proxyTableProps(store, props);
  return store;
}
function proxyTableProps(store, props) {
  Object.keys(InitialStateMap).forEach((key) => {
    watch(() => getArrKeysValue(props, key), (value) => {
      handleValue(value, key, store);
    });
  });
}
function handleValue(value, propsKey, store) {
  let newVal = value;
  let storeKey = InitialStateMap[propsKey];
  if (typeof InitialStateMap[propsKey] === "object") {
    storeKey = storeKey.key;
    newVal = newVal || InitialStateMap[propsKey].default;
  }
  store.states[storeKey].value = newVal;
}
function getArrKeysValue(props, keys) {
  if (keys.includes(".")) {
    const keyList = keys.split(".");
    let value = props;
    keyList.forEach((key) => {
      value = value[key];
    });
    return value;
  } else {
    return props[keys];
  }
}
class TableLayout {
  constructor(options) {
    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = [];
    this.fit = true;
    this.showHeader = true;
    this.height = ref(null);
    this.scrollX = ref(false);
    this.scrollY = ref(false);
    this.bodyWidth = ref(null);
    this.fixedWidth = ref(null);
    this.rightFixedWidth = ref(null);
    this.gutterWidth = 0;
    for (const name in options) {
      if (hasOwn(options, name)) {
        if (isRef(this[name])) {
          this[name].value = options[name];
        } else {
          this[name] = options[name];
        }
      }
    }
    if (!this.table) {
      throw new Error("Table is required for Table Layout");
    }
    if (!this.store) {
      throw new Error("Store is required for Table Layout");
    }
  }
  updateScrollY() {
    const height = this.height.value;
    if (height === null)
      return false;
    const scrollBarRef = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (scrollBarRef == null ? void 0 : scrollBarRef.wrapRef)) {
      let scrollY = true;
      const prevScrollY = this.scrollY.value;
      scrollY = scrollBarRef.wrapRef.scrollHeight > scrollBarRef.wrapRef.clientHeight;
      this.scrollY.value = scrollY;
      return prevScrollY !== scrollY;
    }
    return false;
  }
  setHeight(value, prop = "height") {
    if (!isClient)
      return;
    const el = this.table.vnode.el;
    value = parseHeight(value);
    this.height.value = Number(value);
    if (!el && (value || value === 0))
      return nextTick(() => this.setHeight(value, prop));
    if (typeof value === "number") {
      el.style[prop] = `${value}px`;
      this.updateElsHeight();
    } else if (typeof value === "string") {
      el.style[prop] = value;
      this.updateElsHeight();
    }
  }
  setMaxHeight(value) {
    this.setHeight(value, "max-height");
  }
  getFlattenColumns() {
    const flattenColumns = [];
    const columns = this.table.store.states.columns.value;
    columns.forEach((column) => {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });
    return flattenColumns;
  }
  updateElsHeight() {
    this.updateScrollY();
    this.notifyObservers("scrollable");
  }
  headerDisplayNone(elm) {
    if (!elm)
      return true;
    let headerChild = elm;
    while (headerChild.tagName !== "DIV") {
      if (getComputedStyle(headerChild).display === "none") {
        return true;
      }
      headerChild = headerChild.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    if (!isClient)
      return;
    const fit = this.fit;
    const bodyWidth = this.table.vnode.el.clientWidth;
    let bodyMinWidth = 0;
    const flattenColumns = this.getFlattenColumns();
    const flexColumns = flattenColumns.filter((column) => typeof column.width !== "number");
    flattenColumns.forEach((column) => {
      if (typeof column.width === "number" && column.realWidth)
        column.realWidth = null;
    });
    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach((column) => {
        bodyMinWidth += Number(column.width || column.minWidth || 80);
      });
      if (bodyMinWidth <= bodyWidth) {
        this.scrollX.value = false;
        const totalFlexWidth = bodyWidth - bodyMinWidth;
        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          const allColumnsWidth = flexColumns.reduce((prev, column) => prev + Number(column.minWidth || 80), 0);
          const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          let noneFirstWidth = 0;
          flexColumns.forEach((column, index2) => {
            if (index2 === 0)
              return;
            const flexWidth = Math.floor(Number(column.minWidth || 80) * flexWidthPerPixel);
            noneFirstWidth += flexWidth;
            column.realWidth = Number(column.minWidth || 80) + flexWidth;
          });
          flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else {
        this.scrollX.value = true;
        flexColumns.forEach((column) => {
          column.realWidth = Number(column.minWidth);
        });
      }
      this.bodyWidth.value = Math.max(bodyMinWidth, bodyWidth);
      this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else {
      flattenColumns.forEach((column) => {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        } else {
          column.realWidth = Number(column.width || column.minWidth);
        }
        bodyMinWidth += column.realWidth;
      });
      this.scrollX.value = bodyMinWidth > bodyWidth;
      this.bodyWidth.value = bodyMinWidth;
    }
    const fixedColumns = this.store.states.fixedColumns.value;
    if (fixedColumns.length > 0) {
      let fixedWidth = 0;
      fixedColumns.forEach((column) => {
        fixedWidth += Number(column.realWidth || column.width);
      });
      this.fixedWidth.value = fixedWidth;
    }
    const rightFixedColumns = this.store.states.rightFixedColumns.value;
    if (rightFixedColumns.length > 0) {
      let rightFixedWidth = 0;
      rightFixedColumns.forEach((column) => {
        rightFixedWidth += Number(column.realWidth || column.width);
      });
      this.rightFixedWidth.value = rightFixedWidth;
    }
    this.notifyObservers("columns");
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index2 = this.observers.indexOf(observer);
    if (index2 !== -1) {
      this.observers.splice(index2, 1);
    }
  }
  notifyObservers(event) {
    const observers = this.observers;
    observers.forEach((observer) => {
      var _a, _b;
      switch (event) {
        case "columns":
          (_a = observer.state) == null ? void 0 : _a.onColumnsChange(this);
          break;
        case "scrollable":
          (_b = observer.state) == null ? void 0 : _b.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${event}.`);
      }
    });
  }
}
const { CheckboxGroup: ElCheckboxGroup } = ElCheckbox;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElTooltip,
    ElIcon,
    ArrowDown: arrow_down_default,
    ArrowUp: arrow_up_default
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const { t } = useLocale();
    const ns = useNamespace("table-filter");
    const parent = instance == null ? void 0 : instance.parent;
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance;
    }
    const tooltipVisible = ref(false);
    const tooltip = ref(null);
    const filters = computed(() => {
      return props.column && props.column.filters;
    });
    const filterValue = computed({
      get: () => {
        var _a;
        return (((_a = props.column) == null ? void 0 : _a.filteredValue) || [])[0];
      },
      set: (value) => {
        if (filteredValue.value) {
          if (typeof value !== "undefined" && value !== null) {
            filteredValue.value.splice(0, 1, value);
          } else {
            filteredValue.value.splice(0, 1);
          }
        }
      }
    });
    const filteredValue = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (props.column) {
          props.upDataColumn("filteredValue", value);
        }
      }
    });
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple;
      }
      return true;
    });
    const isActive = (filter) => {
      return filter.value === filterValue.value;
    };
    const hidden = () => {
      tooltipVisible.value = false;
    };
    const showFilterPanel = (e) => {
      e.stopPropagation();
      tooltipVisible.value = !tooltipVisible.value;
    };
    const hideFilterPanel = () => {
      tooltipVisible.value = false;
    };
    const handleConfirm = () => {
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleReset = () => {
      filteredValue.value = [];
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleSelect = (_filterValue) => {
      filterValue.value = _filterValue;
      if (typeof _filterValue !== "undefined" && _filterValue !== null) {
        confirmFilter(filteredValue.value);
      } else {
        confirmFilter([]);
      }
      hidden();
    };
    const confirmFilter = (filteredValue2) => {
      props.store.commit("filterChange", {
        column: props.column,
        values: filteredValue2
      });
      props.store.updateAllSelected();
    };
    watch(tooltipVisible, (value) => {
      if (props.column) {
        props.upDataColumn("filterOpened", value);
      }
    }, {
      immediate: true
    });
    const popperPaneRef = computed(() => {
      var _a, _b;
      return (_b = (_a = tooltip.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    return {
      tooltipVisible,
      multiple,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isActive,
      t,
      ns,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip
    };
  }
});
const _hoisted_1$2 = { key: 0 };
const _hoisted_2$2 = ["disabled"];
const _hoisted_3 = ["label", "onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createBlock(_component_el_tooltip, {
    ref: "tooltip",
    visible: _ctx.tooltipVisible,
    offset: 0,
    placement: _ctx.placement,
    "show-arrow": false,
    "stop-popper-mouse-event": false,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": _ctx.ns.b(),
    persistent: ""
  }, {
    content: withCtx(() => [
      _ctx.multiple ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("content"))
        }, [
          createVNode(_component_el_scrollbar, {
            "wrap-class": _ctx.ns.e("wrap")
          }, {
            default: withCtx(() => [
              createVNode(_component_el_checkbox_group, {
                modelValue: _ctx.filteredValue,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.filteredValue = $event),
                class: normalizeClass(_ctx.ns.e("checkbox-group"))
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
                    return openBlock(), createBlock(_component_el_checkbox, {
                      key: filter.value,
                      label: filter.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(filter.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["label"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("bottom"))
        }, [
          createElementVNode("button", {
            class: normalizeClass({ [_ctx.ns.is("disabled")]: _ctx.filteredValue.length === 0 }),
            disabled: _ctx.filteredValue.length === 0,
            type: "button",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleConfirm && _ctx.handleConfirm(...args))
          }, toDisplayString(_ctx.t("el.table.confirmFilter")), 11, _hoisted_2$2),
          createElementVNode("button", {
            type: "button",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleReset && _ctx.handleReset(...args))
          }, toDisplayString(_ctx.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (openBlock(), createElementBlock("ul", {
        key: 1,
        class: normalizeClass(_ctx.ns.e("list"))
      }, [
        createElementVNode("li", {
          class: normalizeClass([
            _ctx.ns.e("list-item"),
            {
              [_ctx.ns.is("active")]: _ctx.filterValue === void 0 || _ctx.filterValue === null
            }
          ]),
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleSelect(null))
        }, toDisplayString(_ctx.t("el.table.clearFilter")), 3),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
          return openBlock(), createElementBlock("li", {
            key: filter.value,
            class: normalizeClass([_ctx.ns.e("list-item"), _ctx.ns.is("active", _ctx.isActive(filter))]),
            label: filter.value,
            onClick: ($event) => _ctx.handleSelect(filter.value)
          }, toDisplayString(filter.text), 11, _hoisted_3);
        }), 128))
      ], 2))
    ]),
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("span", {
        class: normalizeClass([
          `${_ctx.ns.namespace.value}-table__column-filter-trigger`,
          `${_ctx.ns.namespace.value}-none-outline`
        ]),
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.showFilterPanel && _ctx.showFilterPanel(...args))
      }, [
        createVNode(_component_el_icon, null, {
          default: withCtx(() => [
            _ctx.column.filterOpened ? (openBlock(), createBlock(_component_arrow_up, { key: 0 })) : (openBlock(), createBlock(_component_arrow_down, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [_directive_click_outside, _ctx.hideFilterPanel, _ctx.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var FilterPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function useLayoutObserver(root) {
  const instance = getCurrentInstance();
  onUpdated(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUnmounted(() => {
    tableLayout.value.removeObserver(instance);
  });
  const tableLayout = computed(() => {
    const layout = root.layout;
    if (!layout) {
      throw new Error("Can not find table layout.");
    }
    return layout;
  });
  const onColumnsChange = (layout) => {
    var _a;
    const cols = ((_a = root.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col")) || [];
    if (!cols.length)
      return;
    const flattenColumns = layout.getFlattenColumns();
    const columnsMap = {};
    flattenColumns.forEach((column) => {
      columnsMap[column.id] = column;
    });
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i];
      const name = col.getAttribute("name");
      const column = columnsMap[name];
      if (column) {
        col.setAttribute("width", column.realWidth || column.width);
      }
    }
  };
  const onScrollableChange = (layout) => {
    var _a, _b;
    const cols = ((_a = root.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i];
      col.setAttribute("width", layout.scrollY.value ? layout.gutterWidth : "0");
    }
    const ths = ((_b = root.vnode.el) == null ? void 0 : _b.querySelectorAll("th.gutter")) || [];
    for (let i = 0, j = ths.length; i < j; i++) {
      const th = ths[i];
      th.style.width = layout.scrollY.value ? `${layout.gutterWidth}px` : "0";
      th.style.display = layout.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: tableLayout.value,
    onColumnsChange,
    onScrollableChange
  };
}
const TABLE_INJECTION_KEY = Symbol("ElTable");
function useEvent(props, emit) {
  const instance = getCurrentInstance();
  const parent = inject(TABLE_INJECTION_KEY);
  const handleFilterClick = (event) => {
    event.stopPropagation();
    return;
  };
  const handleHeaderClick = (event, column) => {
    if (!column.filters && column.sortable) {
      handleSortClick(event, column, false);
    } else if (column.filterable && !column.sortable) {
      handleFilterClick(event);
    }
    parent == null ? void 0 : parent.emit("header-click", column, event);
  };
  const handleHeaderContextMenu = (event, column) => {
    parent == null ? void 0 : parent.emit("header-contextmenu", column, event);
  };
  const draggingColumn = ref(null);
  const dragging = ref(false);
  const dragState = ref({});
  const handleMouseDown = (event, column) => {
    if (!isClient)
      return;
    if (column.children && column.children.length > 0)
      return;
    if (draggingColumn.value && props.border) {
      dragging.value = true;
      const table = parent;
      emit("set-drag-visible", true);
      const tableEl = table == null ? void 0 : table.vnode.el;
      const tableLeft = tableEl.getBoundingClientRect().left;
      const columnEl = instance.vnode.el.querySelector(`th.${column.id}`);
      const columnRect = columnEl.getBoundingClientRect();
      const minLeft = columnRect.left - tableLeft + 30;
      addClass(columnEl, "noclick");
      dragState.value = {
        startMouseLeft: event.clientX,
        startLeft: columnRect.right - tableLeft,
        startColumnLeft: columnRect.left - tableLeft,
        tableLeft
      };
      const resizeProxy = table == null ? void 0 : table.refs.resizeProxy;
      resizeProxy.style.left = `${dragState.value.startLeft}px`;
      document.onselectstart = function() {
        return false;
      };
      document.ondragstart = function() {
        return false;
      };
      const handleMouseMove2 = (event2) => {
        const deltaLeft = event2.clientX - dragState.value.startMouseLeft;
        const proxyLeft = dragState.value.startLeft + deltaLeft;
        resizeProxy.style.left = `${Math.max(minLeft, proxyLeft)}px`;
      };
      const handleMouseUp = () => {
        if (dragging.value) {
          const { startColumnLeft, startLeft } = dragState.value;
          const finalLeft = Number.parseInt(resizeProxy.style.left, 10);
          const columnWidth = finalLeft - startColumnLeft;
          column.width = column.realWidth = columnWidth;
          table == null ? void 0 : table.emit("header-dragend", column.width, startLeft - startColumnLeft, column, event);
          requestAnimationFrame(() => {
            props.store.scheduleLayout(false, true);
          });
          document.body.style.cursor = "";
          dragging.value = false;
          draggingColumn.value = null;
          dragState.value = {};
          emit("set-drag-visible", false);
        }
        document.removeEventListener("mousemove", handleMouseMove2);
        document.removeEventListener("mouseup", handleMouseUp);
        document.onselectstart = null;
        document.ondragstart = null;
        setTimeout(() => {
          removeClass(columnEl, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", handleMouseMove2);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };
  const handleMouseMove = (event, column) => {
    var _a;
    if (column.children && column.children.length > 0)
      return;
    const target = (_a = event.target) == null ? void 0 : _a.closest("th");
    if (!column || !column.resizable)
      return;
    if (!dragging.value && props.border) {
      const rect = target.getBoundingClientRect();
      const bodyStyle = document.body.style;
      if (rect.width > 12 && rect.right - event.pageX < 8) {
        bodyStyle.cursor = "col-resize";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "col-resize";
        }
        draggingColumn.value = column;
      } else if (!dragging.value) {
        bodyStyle.cursor = "";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "pointer";
        }
        draggingColumn.value = null;
      }
    }
  };
  const handleMouseOut = () => {
    if (!isClient)
      return;
    document.body.style.cursor = "";
  };
  const toggleOrder = ({ order, sortOrders }) => {
    if (order === "")
      return sortOrders[0];
    const index2 = sortOrders.indexOf(order || null);
    return sortOrders[index2 > sortOrders.length - 2 ? 0 : index2 + 1];
  };
  const handleSortClick = (event, column, givenOrder) => {
    var _a;
    event.stopPropagation();
    const order = column.order === givenOrder ? null : givenOrder || toggleOrder(column);
    const target = (_a = event.target) == null ? void 0 : _a.closest("th");
    if (target) {
      if (hasClass(target, "noclick")) {
        removeClass(target, "noclick");
        return;
      }
    }
    if (!column.sortable)
      return;
    const states = props.store.states;
    let sortProp = states.sortProp.value;
    let sortOrder;
    const sortingColumn = states.sortingColumn.value;
    if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
      if (sortingColumn) {
        sortingColumn.order = null;
      }
      states.sortingColumn.value = column;
      sortProp = column.property;
    }
    if (!order) {
      sortOrder = column.order = null;
    } else {
      sortOrder = column.order = order;
    }
    states.sortProp.value = sortProp;
    states.sortOrder.value = sortOrder;
    parent == null ? void 0 : parent.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick,
    handleHeaderContextMenu,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    handleSortClick,
    handleFilterClick
  };
}
function useStyle$2(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const getHeaderRowStyle = (rowIndex) => {
    const headerRowStyle = parent == null ? void 0 : parent.props.headerRowStyle;
    if (typeof headerRowStyle === "function") {
      return headerRowStyle.call(null, { rowIndex });
    }
    return headerRowStyle;
  };
  const getHeaderRowClass = (rowIndex) => {
    const classes = [];
    const headerRowClassName = parent == null ? void 0 : parent.props.headerRowClassName;
    if (typeof headerRowClassName === "string") {
      classes.push(headerRowClassName);
    } else if (typeof headerRowClassName === "function") {
      classes.push(headerRowClassName.call(null, { rowIndex }));
    }
    return classes.join(" ");
  };
  const getHeaderCellStyle = (rowIndex, columnIndex, row, column) => {
    var _a;
    let headerCellStyles = (_a = parent == null ? void 0 : parent.props.headerCellStyle) != null ? _a : {};
    if (typeof headerCellStyles === "function") {
      headerCellStyles = headerCellStyles.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = getFixedColumnOffset(columnIndex, column.fixed, props.store, row);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, headerCellStyles, fixedStyle);
  };
  const getHeaderCellClass = (rowIndex, columnIndex, row, column) => {
    const fixedClasses = getFixedColumnsClass(ns.b(), columnIndex, column.fixed, props.store, row);
    const classes = [
      column.id,
      column.order,
      column.headerAlign,
      column.className,
      column.labelClassName,
      ...fixedClasses
    ];
    if (!column.children) {
      classes.push("is-leaf");
    }
    if (column.sortable) {
      classes.push("is-sortable");
    }
    const headerCellClassName = parent == null ? void 0 : parent.props.headerCellClassName;
    if (typeof headerCellClassName === "string") {
      classes.push(headerCellClassName);
    } else if (typeof headerCellClassName === "function") {
      classes.push(headerCellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    classes.push(ns.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  return {
    getHeaderRowStyle,
    getHeaderRowClass,
    getHeaderCellStyle,
    getHeaderCellClass
  };
}
const getAllColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
const convertToRows = (originColumns) => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column.level = 1;
    traverse(column, void 0);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getAllColumns(originColumns);
  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
      column.children.forEach((col) => col.isSubColumn = true);
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
function useUtils$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const columnRows = computed(() => {
    return convertToRows(props.store.states.originColumns.value);
  });
  const isGroup = computed(() => {
    const result = columnRows.value.length > 1;
    if (result && parent) {
      parent.state.isGroup.value = true;
    }
    return result;
  });
  const toggleAllSelection = (event) => {
    event.stopPropagation();
    parent == null ? void 0 : parent.store.commit("toggleAllSelection");
  };
  return {
    isGroup,
    toggleAllSelection,
    columnRows
  };
}
var TableHeader = /* @__PURE__ */ defineComponent({
  name: "ElTableHeader",
  components: {
    ElCheckbox
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const filterPanels = ref({});
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    const {
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick
    } = useEvent(props, emit);
    const {
      getHeaderRowStyle,
      getHeaderRowClass,
      getHeaderCellStyle,
      getHeaderCellClass
    } = useStyle$2(props);
    const { isGroup, toggleAllSelection, columnRows } = useUtils$1(props);
    instance.state = {
      onColumnsChange,
      onScrollableChange
    };
    instance.filterPanels = filterPanels;
    return {
      ns,
      filterPanels,
      onColumnsChange,
      onScrollableChange,
      columnRows,
      getHeaderRowClass,
      getHeaderRowStyle,
      getHeaderCellClass,
      getHeaderCellStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
      isGroup,
      toggleAllSelection
    };
  },
  render() {
    const {
      ns,
      isGroup,
      columnRows,
      getHeaderCellStyle,
      getHeaderCellClass,
      getHeaderRowClass,
      getHeaderRowStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleSortClick,
      handleMouseOut,
      store,
      $parent
    } = this;
    let rowSpan = 1;
    return h("thead", {
      class: { [ns.is("group")]: isGroup }
    }, columnRows.map((subColumns, rowIndex) => h("tr", {
      class: getHeaderRowClass(rowIndex),
      key: rowIndex,
      style: getHeaderRowStyle(rowIndex)
    }, subColumns.map((column, cellIndex) => {
      if (column.rowSpan > rowSpan) {
        rowSpan = column.rowSpan;
      }
      return h("th", {
        class: getHeaderCellClass(rowIndex, cellIndex, subColumns, column),
        colspan: column.colSpan,
        key: `${column.id}-thead`,
        rowspan: column.rowSpan,
        style: getHeaderCellStyle(rowIndex, cellIndex, subColumns, column),
        onClick: ($event) => handleHeaderClick($event, column),
        onContextmenu: ($event) => handleHeaderContextMenu($event, column),
        onMousedown: ($event) => handleMouseDown($event, column),
        onMousemove: ($event) => handleMouseMove($event, column),
        onMouseout: handleMouseOut
      }, [
        h("div", {
          class: [
            "cell",
            column.filteredValue && column.filteredValue.length > 0 ? "highlight" : ""
          ]
        }, [
          column.renderHeader ? column.renderHeader({
            column,
            $index: cellIndex,
            store,
            _self: $parent
          }) : column.label,
          column.sortable && h("span", {
            onClick: ($event) => handleSortClick($event, column),
            class: "caret-wrapper"
          }, [
            h("i", {
              onClick: ($event) => handleSortClick($event, column, "ascending"),
              class: "sort-caret ascending"
            }),
            h("i", {
              onClick: ($event) => handleSortClick($event, column, "descending"),
              class: "sort-caret descending"
            })
          ]),
          column.filterable && h(FilterPanel, {
            store,
            placement: column.filterPlacement || "bottom-start",
            column,
            upDataColumn: (key, value) => {
              column[key] = value;
            }
          })
        ])
      ]);
    }))));
  }
});
function useEvents(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const tooltipContent = ref("");
  const tooltipTrigger = ref(h("div"));
  const { nextZIndex } = useZIndex();
  const handleEvent = (event, row, name) => {
    var _a;
    const table = parent;
    const cell = getCell(event);
    let column;
    const namespace = (_a = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a.dataset.prefix;
    if (cell) {
      column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace);
      if (column) {
        table == null ? void 0 : table.emit(`cell-${name}`, row, column, cell, event);
      }
    }
    table == null ? void 0 : table.emit(`row-${name}`, row, column, event);
  };
  const handleDoubleClick = (event, row) => {
    handleEvent(event, row, "dblclick");
  };
  const handleClick = (event, row) => {
    props.store.commit("setCurrentRow", row);
    handleEvent(event, row, "click");
  };
  const handleContextMenu = (event, row) => {
    handleEvent(event, row, "contextmenu");
  };
  const handleMouseEnter = debounce((index2) => {
    props.store.commit("setHoverRow", index2);
  }, 30);
  const handleMouseLeave = debounce(() => {
    props.store.commit("setHoverRow", null);
  }, 30);
  const handleCellMouseEnter = (event, row, tooltipOptions) => {
    var _a;
    const table = parent;
    const cell = getCell(event);
    const namespace = (_a = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a.dataset.prefix;
    if (cell) {
      const column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace);
      const hoverState = table.hoverState = { cell, column, row };
      table == null ? void 0 : table.emit("cell-mouse-enter", hoverState.row, hoverState.column, hoverState.cell, event);
    }
    if (!tooltipOptions) {
      return;
    }
    const cellChild = event.target.querySelector(".cell");
    if (!(hasClass(cellChild, `${namespace}-tooltip`) && cellChild.childNodes.length)) {
      return;
    }
    const range = document.createRange();
    range.setStart(cellChild, 0);
    range.setEnd(cellChild, cellChild.childNodes.length);
    const rangeWidth = Math.round(range.getBoundingClientRect().width);
    const padding = (Number.parseInt(getStyle(cellChild, "paddingLeft"), 10) || 0) + (Number.parseInt(getStyle(cellChild, "paddingRight"), 10) || 0);
    if (rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) {
      createTablePopper(parent == null ? void 0 : parent.refs.tableWrapper, cell, cell.innerText || cell.textContent, nextZIndex, tooltipOptions);
    }
  };
  const handleCellMouseLeave = (event) => {
    const cell = getCell(event);
    if (!cell)
      return;
    const oldHoverState = parent == null ? void 0 : parent.hoverState;
    parent == null ? void 0 : parent.emit("cell-mouse-leave", oldHoverState == null ? void 0 : oldHoverState.row, oldHoverState == null ? void 0 : oldHoverState.column, oldHoverState == null ? void 0 : oldHoverState.cell, event);
  };
  return {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  };
}
function useStyles(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const getRowStyle = (row, rowIndex) => {
    const rowStyle = parent == null ? void 0 : parent.props.rowStyle;
    if (typeof rowStyle === "function") {
      return rowStyle.call(null, {
        row,
        rowIndex
      });
    }
    return rowStyle || null;
  };
  const getRowClass = (row, rowIndex) => {
    const classes = [ns.e("row")];
    if ((parent == null ? void 0 : parent.props.highlightCurrentRow) && row === props.store.states.currentRow.value) {
      classes.push("current-row");
    }
    if (props.stripe && rowIndex % 2 === 1) {
      classes.push(ns.em("row", "striped"));
    }
    const rowClassName = parent == null ? void 0 : parent.props.rowClassName;
    if (typeof rowClassName === "string") {
      classes.push(rowClassName);
    } else if (typeof rowClassName === "function") {
      classes.push(rowClassName.call(null, {
        row,
        rowIndex
      }));
    }
    return classes;
  };
  const getCellStyle = (rowIndex, columnIndex, row, column) => {
    const cellStyle = parent == null ? void 0 : parent.props.cellStyle;
    let cellStyles = cellStyle != null ? cellStyle : {};
    if (typeof cellStyle === "function") {
      cellStyles = cellStyle.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = getFixedColumnOffset(columnIndex, props == null ? void 0 : props.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, cellStyles, fixedStyle);
  };
  const getCellClass = (rowIndex, columnIndex, row, column, offset) => {
    const fixedClasses = getFixedColumnsClass(ns.b(), columnIndex, props == null ? void 0 : props.fixed, props.store, void 0, offset);
    const classes = [column.id, column.align, column.className, ...fixedClasses];
    const cellClassName = parent == null ? void 0 : parent.props.cellClassName;
    if (typeof cellClassName === "string") {
      classes.push(cellClassName);
    } else if (typeof cellClassName === "function") {
      classes.push(cellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    classes.push(ns.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  const getSpan = (row, column, rowIndex, columnIndex) => {
    let rowspan = 1;
    let colspan = 1;
    const fn = parent == null ? void 0 : parent.props.spanMethod;
    if (typeof fn === "function") {
      const result = fn({
        row,
        column,
        rowIndex,
        columnIndex
      });
      if (Array.isArray(result)) {
        rowspan = result[0];
        colspan = result[1];
      } else if (typeof result === "object") {
        rowspan = result.rowspan;
        colspan = result.colspan;
      }
    }
    return { rowspan, colspan };
  };
  const getColspanRealWidth = (columns, colspan, index2) => {
    if (colspan < 1) {
      return columns[index2].realWidth;
    }
    const widthArr = columns.map(({ realWidth, width }) => realWidth || width).slice(index2, index2 + colspan);
    return Number(widthArr.reduce((acc, width) => Number(acc) + Number(width), -1));
  };
  return {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  };
}
function useRender$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  } = useEvents(props);
  const {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  } = useStyles(props);
  const firstDefaultColumnIndex = computed(() => {
    return props.store.states.columns.value.findIndex(({ type }) => type === "default");
  });
  const getKeyOfRow = (row, index2) => {
    const rowKey = parent.props.rowKey;
    if (rowKey) {
      return getRowIdentity(row, rowKey);
    }
    return index2;
  };
  const rowRender = (row, $index, treeRowData, expanded = false) => {
    const { tooltipEffect, tooltipOptions, store } = props;
    const { indent, columns } = store.states;
    const rowClasses = getRowClass(row, $index);
    let display = true;
    if (treeRowData) {
      rowClasses.push(ns.em("row", `level-${treeRowData.level}`));
      display = treeRowData.display;
    }
    const displayStyle = display ? null : {
      display: "none"
    };
    return h("tr", {
      style: [displayStyle, getRowStyle(row, $index)],
      class: rowClasses,
      key: getKeyOfRow(row, $index),
      onDblclick: ($event) => handleDoubleClick($event, row),
      onClick: ($event) => handleClick($event, row),
      onContextmenu: ($event) => handleContextMenu($event, row),
      onMouseenter: () => handleMouseEnter($index),
      onMouseleave: handleMouseLeave
    }, columns.value.map((column, cellIndex) => {
      const { rowspan, colspan } = getSpan(row, column, $index, cellIndex);
      if (!rowspan || !colspan) {
        return null;
      }
      const columnData = { ...column };
      columnData.realWidth = getColspanRealWidth(columns.value, colspan, cellIndex);
      const data = {
        store: props.store,
        _self: props.context || parent,
        column: columnData,
        row,
        $index,
        cellIndex,
        expanded
      };
      if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
        data.treeNode = {
          indent: treeRowData.level * indent.value,
          level: treeRowData.level
        };
        if (typeof treeRowData.expanded === "boolean") {
          data.treeNode.expanded = treeRowData.expanded;
          if ("loading" in treeRowData) {
            data.treeNode.loading = treeRowData.loading;
          }
          if ("noLazyChildren" in treeRowData) {
            data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
          }
        }
      }
      const baseKey = `${$index},${cellIndex}`;
      const patchKey = columnData.columnKey || columnData.rawColumnKey || "";
      const tdChildren = cellChildren(cellIndex, column, data);
      const mergedTooltipOptions = column.showOverflowTooltip && merge({
        effect: tooltipEffect
      }, tooltipOptions, column.showOverflowTooltip);
      return h("td", {
        style: getCellStyle($index, cellIndex, row, column),
        class: getCellClass($index, cellIndex, row, column, colspan - 1),
        key: `${patchKey}${baseKey}`,
        rowspan,
        colspan,
        onMouseenter: ($event) => handleCellMouseEnter($event, row, mergedTooltipOptions),
        onMouseleave: handleCellMouseLeave
      }, [tdChildren]);
    }));
  };
  const cellChildren = (cellIndex, column, data) => {
    return column.renderCell(data);
  };
  const wrappedRowRender = (row, $index) => {
    const store = props.store;
    const { isRowExpanded, assertRowKey } = store;
    const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } = store.states;
    const columns = store.states.columns.value;
    const hasExpandColumn = columns.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      const expanded = isRowExpanded(row);
      const tr = rowRender(row, $index, void 0, expanded);
      const renderExpanded = parent.renderExpanded;
      if (expanded) {
        if (!renderExpanded) {
          console.error("[Element Error]renderExpanded is required.");
          return tr;
        }
        return [
          [
            tr,
            h("tr", {
              key: `expanded-row__${tr.key}`
            }, [
              h("td", {
                colspan: columns.length,
                class: `${ns.e("cell")} ${ns.e("expanded-cell")}`
              }, [renderExpanded({ row, $index, store, expanded })])
            ])
          ]
        ];
      } else {
        return [[tr]];
      }
    } else if (Object.keys(treeData.value).length) {
      assertRowKey();
      const key = getRowIdentity(row, rowKey.value);
      let cur = treeData.value[key];
      let treeRowData = null;
      if (cur) {
        treeRowData = {
          expanded: cur.expanded,
          level: cur.level,
          display: true
        };
        if (typeof cur.lazy === "boolean") {
          if (typeof cur.loaded === "boolean" && cur.loaded) {
            treeRowData.noLazyChildren = !(cur.children && cur.children.length);
          }
          treeRowData.loading = cur.loading;
        }
      }
      const tmp = [rowRender(row, $index, treeRowData)];
      if (cur) {
        let i = 0;
        const traverse = (children, parent2) => {
          if (!(children && children.length && parent2))
            return;
          children.forEach((node) => {
            const innerTreeRowData = {
              display: parent2.display && parent2.expanded,
              level: parent2.level + 1,
              expanded: false,
              noLazyChildren: false,
              loading: false
            };
            const childKey = getRowIdentity(node, rowKey.value);
            if (childKey === void 0 || childKey === null) {
              throw new Error("For nested data item, row-key is required.");
            }
            cur = { ...treeData.value[childKey] };
            if (cur) {
              innerTreeRowData.expanded = cur.expanded;
              cur.level = cur.level || innerTreeRowData.level;
              cur.display = !!(cur.expanded && innerTreeRowData.display);
              if (typeof cur.lazy === "boolean") {
                if (typeof cur.loaded === "boolean" && cur.loaded) {
                  innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                }
                innerTreeRowData.loading = cur.loading;
              }
            }
            i++;
            tmp.push(rowRender(node, $index + i, innerTreeRowData));
            if (cur) {
              const nodes2 = lazyTreeNodeMap.value[childKey] || node[childrenColumnName.value];
              traverse(nodes2, cur);
            }
          });
        };
        cur.display = true;
        const nodes = lazyTreeNodeMap.value[key] || row[childrenColumnName.value];
        traverse(nodes, cur);
      }
      return tmp;
    } else {
      return rowRender(row, $index, void 0);
    }
  };
  return {
    wrappedRowRender,
    tooltipContent,
    tooltipTrigger
  };
}
const defaultProps$2 = {
  store: {
    required: true,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object
  },
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var TableBody = /* @__PURE__ */ defineComponent({
  name: "ElTableBody",
  props: defaultProps$2,
  setup(props) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender$1(props);
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    watch(props.store.states.hoverRow, (newVal, oldVal) => {
      if (!props.store.states.isComplex.value || !isClient)
        return;
      let raf = window.requestAnimationFrame;
      if (!raf) {
        raf = (fn) => window.setTimeout(fn, 16);
      }
      raf(() => {
        const el = instance == null ? void 0 : instance.vnode.el;
        const rows = Array.from((el == null ? void 0 : el.children) || []).filter((e) => e == null ? void 0 : e.classList.contains(`${ns.e("row")}`));
        const oldRow = rows[oldVal];
        const newRow = rows[newVal];
        if (oldRow) {
          removeClass(oldRow, "hover-row");
        }
        if (newRow) {
          addClass(newRow, "hover-row");
        }
      });
    });
    onUnmounted(() => {
      var _a;
      (_a = removePopper) == null ? void 0 : _a();
    });
    return {
      ns,
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger
    };
  },
  render() {
    const { wrappedRowRender, store } = this;
    const data = store.states.data.value || [];
    return h("tbody", {}, [
      data.reduce((acc, row) => {
        return acc.concat(wrappedRowRender(row, acc.length));
      }, [])
    ]);
  }
});
function hColgroup(props) {
  const isAuto = props.tableLayout === "auto";
  let columns = props.columns || [];
  if (isAuto) {
    if (columns.every((column) => column.width === void 0)) {
      columns = [];
    }
  }
  const getPropsData = (column) => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: void 0
    };
    if (isAuto) {
      propsData.style = {
        width: `${column.width}px`
      };
    } else {
      propsData.name = column.id;
    }
    return propsData;
  };
  return h("colgroup", {}, columns.map((column) => h("col", getPropsData(column))));
}
hColgroup.props = ["columns", "tableLayout"];
function useMapState() {
  const table = inject(TABLE_INJECTION_KEY);
  const store = table == null ? void 0 : table.store;
  const leftFixedLeafCount = computed(() => {
    return store.states.fixedLeafColumnsLength.value;
  });
  const rightFixedLeafCount = computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  const columnsCount = computed(() => {
    return store.states.columns.value.length;
  });
  const leftFixedCount = computed(() => {
    return store.states.fixedColumns.value.length;
  });
  const rightFixedCount = computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  return {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns: store.states.columns
  };
}
function useStyle$1(props) {
  const { columns } = useMapState();
  const ns = useNamespace("table");
  const getCellClasses = (columns2, cellIndex) => {
    const column = columns2[cellIndex];
    const classes = [
      ns.e("cell"),
      column.id,
      column.align,
      column.labelClassName,
      ...getFixedColumnsClass(ns.b(), cellIndex, column.fixed, props.store)
    ];
    if (column.className) {
      classes.push(column.className);
    }
    if (!column.children) {
      classes.push(ns.is("leaf"));
    }
    return classes;
  };
  const getCellStyles = (column, cellIndex) => {
    const fixedStyle = getFixedColumnOffset(cellIndex, column.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return fixedStyle;
  };
  return {
    getCellClasses,
    getCellStyles,
    columns
  };
}
var TableFooter = /* @__PURE__ */ defineComponent({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props) {
    const { getCellClasses, getCellStyles, columns } = useStyle$1(props);
    const ns = useNamespace("table");
    return {
      ns,
      getCellClasses,
      getCellStyles,
      columns
    };
  },
  render() {
    const {
      columns,
      getCellStyles,
      getCellClasses,
      summaryMethod,
      sumText,
      ns
    } = this;
    const data = this.store.states.data.value;
    let sums = [];
    if (summaryMethod) {
      sums = summaryMethod({
        columns,
        data
      });
    } else {
      columns.forEach((column, index2) => {
        if (index2 === 0) {
          sums[index2] = sumText;
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach((value) => {
          if (!Number.isNaN(+value)) {
            notNumber = false;
            const decimal = `${value}`.split(".")[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index2] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(+value)) {
              return Number.parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index2] = "";
        }
      });
    }
    return h("table", {
      class: ns.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      hColgroup({
        columns
      }),
      h("tbody", [
        h("tr", {}, [
          ...columns.map((column, cellIndex) => h("td", {
            key: cellIndex,
            colspan: column.colSpan,
            rowspan: column.rowSpan,
            class: getCellClasses(columns, cellIndex),
            style: getCellStyles(column, cellIndex)
          }, [
            h("div", {
              class: ["cell", column.labelClassName]
            }, [sums[cellIndex]])
          ]))
        ])
      ])
    ]);
  }
});
function useUtils(store) {
  const setCurrentRow = (row) => {
    store.commit("setCurrentRow", row);
  };
  const getSelectionRows = () => {
    return store.getSelectionRows();
  };
  const toggleRowSelection = (row, selected) => {
    store.toggleRowSelection(row, selected, false);
    store.updateAllSelected();
  };
  const clearSelection = () => {
    store.clearSelection();
  };
  const clearFilter = (columnKeys) => {
    store.clearFilter(columnKeys);
  };
  const toggleAllSelection = () => {
    store.commit("toggleAllSelection");
  };
  const toggleRowExpansion = (row, expanded) => {
    store.toggleRowExpansionAdapter(row, expanded);
  };
  const clearSort = () => {
    store.clearSort();
  };
  const sort = (prop, order) => {
    store.commit("sort", { prop, order });
  };
  return {
    setCurrentRow,
    getSelectionRows,
    toggleRowSelection,
    clearSelection,
    clearFilter,
    toggleAllSelection,
    toggleRowExpansion,
    clearSort,
    sort
  };
}
function useStyle(props, layout, store, table) {
  const isHidden2 = ref(false);
  const renderExpanded = ref(null);
  const resizeProxyVisible = ref(false);
  const setDragVisible = (visible) => {
    resizeProxyVisible.value = visible;
  };
  const resizeState = ref({
    width: null,
    height: null,
    headerHeight: null
  });
  const isGroup = ref(false);
  const scrollbarViewStyle = {
    display: "inline-block",
    verticalAlign: "middle"
  };
  const tableWidth = ref();
  const tableScrollHeight = ref(0);
  const bodyScrollHeight = ref(0);
  const headerScrollHeight = ref(0);
  const footerScrollHeight = ref(0);
  watchEffect(() => {
    layout.setHeight(props.height);
  });
  watchEffect(() => {
    layout.setMaxHeight(props.maxHeight);
  });
  watch(() => [props.currentRowKey, store.states.rowKey], ([currentRowKey, rowKey]) => {
    if (!unref(rowKey) || !unref(currentRowKey))
      return;
    store.setCurrentRowKey(`${currentRowKey}`);
  }, {
    immediate: true
  });
  watch(() => props.data, (data) => {
    table.store.commit("setData", data);
  }, {
    immediate: true,
    deep: true
  });
  watchEffect(() => {
    if (props.expandRowKeys) {
      store.setExpandRowKeysAdapter(props.expandRowKeys);
    }
  });
  const handleMouseLeave = () => {
    table.store.commit("setHoverRow", null);
    if (table.hoverState)
      table.hoverState = null;
  };
  const handleHeaderFooterMousewheel = (event, data) => {
    const { pixelX, pixelY } = data;
    if (Math.abs(pixelX) >= Math.abs(pixelY)) {
      table.refs.bodyWrapper.scrollLeft += data.pixelX / 5;
    }
  };
  const shouldUpdateHeight = computed(() => {
    return props.height || props.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
  });
  const tableBodyStyles = computed(() => {
    return {
      width: layout.bodyWidth.value ? `${layout.bodyWidth.value}px` : ""
    };
  });
  const doLayout = () => {
    if (shouldUpdateHeight.value) {
      layout.updateElsHeight();
    }
    layout.updateColumnsWidth();
    requestAnimationFrame(syncPosition);
  };
  const setScrollClassByEl = (el, className) => {
    if (!el)
      return;
    const classList = Array.from(el.classList).filter((item) => !item.startsWith("is-scrolling-"));
    classList.push(layout.scrollX.value ? className : "is-scrolling-none");
    el.className = classList.join(" ");
  };
  const setScrollClass = (className) => {
    const { tableWrapper } = table.refs;
    setScrollClassByEl(tableWrapper, className);
  };
  const hasScrollClass = (className) => {
    const { tableWrapper } = table.refs;
    return !!(tableWrapper && tableWrapper.classList.contains(className));
  };
  const syncPosition = function() {
    if (!table.refs.scrollBarRef)
      return;
    if (!layout.scrollX.value) {
      const scrollingNoneClass = "is-scrolling-none";
      if (!hasScrollClass(scrollingNoneClass)) {
        setScrollClass(scrollingNoneClass);
      }
      return;
    }
    const scrollContainer = table.refs.scrollBarRef.wrapRef;
    if (!scrollContainer)
      return;
    const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer;
    const { headerWrapper, footerWrapper } = table.refs;
    if (headerWrapper)
      headerWrapper.scrollLeft = scrollLeft;
    if (footerWrapper)
      footerWrapper.scrollLeft = scrollLeft;
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
    if (scrollLeft >= maxScrollLeftPosition) {
      setScrollClass("is-scrolling-right");
    } else if (scrollLeft === 0) {
      setScrollClass("is-scrolling-left");
    } else {
      setScrollClass("is-scrolling-middle");
    }
  };
  const tableSize = useFormSize();
  const bodyWidth = computed(() => {
    const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout;
    return bodyWidth_.value ? `${bodyWidth_.value - (scrollY.value ? gutterWidth : 0)}px` : "";
  });
  const tableLayout = computed(() => {
    if (props.maxHeight)
      return "fixed";
    return props.tableLayout;
  });
  const emptyBlockStyle = computed(() => {
    if (props.data && props.data.length)
      return null;
    let height = "100%";
    if (props.height && bodyScrollHeight.value) {
      height = `${bodyScrollHeight.value}px`;
    }
    const width = tableWidth.value;
    return {
      width: width ? `${width}px` : "",
      height
    };
  });
  const tableInnerStyle = computed(() => {
    if (props.height) {
      return {
        height: !Number.isNaN(Number(props.height)) ? `${props.height}px` : props.height
      };
    }
    if (props.maxHeight) {
      return {
        maxHeight: !Number.isNaN(Number(props.maxHeight)) ? `${props.maxHeight}px` : props.maxHeight
      };
    }
    return {};
  });
  const scrollbarStyle = computed(() => {
    if (props.height) {
      return {
        height: "100%"
      };
    }
    if (props.maxHeight) {
      if (!Number.isNaN(Number(props.maxHeight))) {
        const maxHeight = props.maxHeight;
        const reachMaxHeight = tableScrollHeight.value >= Number(maxHeight);
        if (reachMaxHeight) {
          return {
            maxHeight: `${tableScrollHeight.value - headerScrollHeight.value - footerScrollHeight.value}px`
          };
        }
      } else {
        return {
          maxHeight: `calc(${props.maxHeight} - ${headerScrollHeight.value + footerScrollHeight.value}px)`
        };
      }
    }
    return {};
  });
  const handleFixedMousewheel = (event, data) => {
    const bodyWrapper = table.refs.bodyWrapper;
    if (Math.abs(data.spinY) > 0) {
      const currentScrollTop = bodyWrapper.scrollTop;
      if (data.pixelY < 0 && currentScrollTop !== 0) {
        event.preventDefault();
      }
      if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
        event.preventDefault();
      }
      bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
    } else {
      bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
    }
  };
  return {
    isHidden: isHidden2,
    renderExpanded,
    setDragVisible,
    isGroup,
    handleMouseLeave,
    handleHeaderFooterMousewheel,
    tableSize,
    emptyBlockStyle,
    handleFixedMousewheel,
    resizeProxyVisible,
    bodyWidth,
    resizeState,
    doLayout,
    tableBodyStyles,
    tableLayout,
    scrollbarViewStyle,
    tableInnerStyle,
    scrollbarStyle
  };
}
function useKeyRender(table) {
  const observer = ref();
  onUnmounted(() => {
    var _a;
    (_a = observer.value) == null ? void 0 : _a.disconnect();
  });
}
var defaultProps$1 = {
  data: {
    type: Array,
    default: () => []
  },
  size: useSizeProp,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: true
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: true
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => {
      return {
        hasChildren: "hasChildren",
        children: "children"
      };
    }
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false
  },
  flexible: Boolean
};
const useScrollbar = () => {
  const scrollBarRef = ref();
  const scrollTo = (options, yCoord) => {
    const scrollbar = scrollBarRef.value;
    if (scrollbar) {
      scrollbar.scrollTo(options, yCoord);
    }
  };
  const setScrollPosition = (position, offset) => {
    const scrollbar = scrollBarRef.value;
    if (scrollbar && isNumber(offset) && ["Top", "Left"].includes(position)) {
      scrollbar[`setScroll${position}`](offset);
    }
  };
  const setScrollTop = (top) => setScrollPosition("Top", top);
  const setScrollLeft = (left) => setScrollPosition("Left", left);
  return {
    scrollBarRef,
    scrollTo,
    setScrollTop,
    setScrollLeft
  };
};
let tableIdSeed = 1;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "ElTable",
  directives: {
    Mousewheel
  },
  components: {
    TableHeader,
    TableBody,
    TableFooter,
    ElScrollbar,
    hColgroup
  },
  props: defaultProps$1,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(props) {
    const { t } = useLocale();
    const ns = useNamespace("table");
    const table = getCurrentInstance();
    provide(TABLE_INJECTION_KEY, table);
    const store = createStore(table, props);
    table.store = store;
    const layout = new TableLayout({
      store: table.store,
      table,
      fit: props.fit,
      showHeader: props.showHeader
    });
    table.layout = layout;
    const isEmpty = computed(() => (store.states.data.value || []).length === 0);
    const {
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      sort
    } = useUtils(store);
    const {
      isHidden: isHidden2,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      emptyBlockStyle,
      handleFixedMousewheel,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      doLayout,
      tableBodyStyles,
      tableLayout,
      scrollbarViewStyle,
      tableInnerStyle,
      scrollbarStyle
    } = useStyle(props, layout, store, table);
    const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar();
    const debouncedUpdateLayout = debounce(doLayout, 50);
    const tableId = `${ns.namespace.value}-table_${tableIdSeed++}`;
    table.tableId = tableId;
    table.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout
    };
    const computedSumText = computed(() => props.sumText || t("el.table.sumText"));
    const computedEmptyText = computed(() => {
      return props.emptyText || t("el.table.emptyText");
    });
    useKeyRender();
    return {
      ns,
      layout,
      store,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden: isHidden2,
      isEmpty,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      bodyWidth,
      tableBodyStyles,
      emptyBlockStyle,
      debouncedUpdateLayout,
      handleFixedMousewheel,
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort,
      t,
      setDragVisible,
      context: table,
      computedSumText,
      computedEmptyText,
      tableLayout,
      scrollbarViewStyle,
      tableInnerStyle,
      scrollbarStyle,
      scrollBarRef,
      scrollTo,
      setScrollLeft,
      setScrollTop
    };
  }
});
const _hoisted_1$1 = ["data-prefix"];
const _hoisted_2$1 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hColgroup = resolveComponent("hColgroup");
  const _component_table_header = resolveComponent("table-header");
  const _component_table_body = resolveComponent("table-body");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_table_footer = resolveComponent("table-footer");
  const _directive_mousewheel = resolveDirective("mousewheel");
  return openBlock(), createElementBlock("div", {
    ref: "tableWrapper",
    class: normalizeClass([
      {
        [_ctx.ns.m("fit")]: _ctx.fit,
        [_ctx.ns.m("striped")]: _ctx.stripe,
        [_ctx.ns.m("border")]: _ctx.border || _ctx.isGroup,
        [_ctx.ns.m("hidden")]: _ctx.isHidden,
        [_ctx.ns.m("group")]: _ctx.isGroup,
        [_ctx.ns.m("fluid-height")]: _ctx.maxHeight,
        [_ctx.ns.m("scrollable-x")]: _ctx.layout.scrollX.value,
        [_ctx.ns.m("scrollable-y")]: _ctx.layout.scrollY.value,
        [_ctx.ns.m("enable-row-hover")]: !_ctx.store.states.isComplex.value,
        [_ctx.ns.m("enable-row-transition")]: (_ctx.store.states.data.value || []).length !== 0 && (_ctx.store.states.data.value || []).length < 100,
        "has-footer": _ctx.showSummary
      },
      _ctx.ns.m(_ctx.tableSize),
      _ctx.className,
      _ctx.ns.b(),
      _ctx.ns.m(`layout-${_ctx.tableLayout}`)
    ]),
    style: normalizeStyle(_ctx.style),
    "data-prefix": _ctx.ns.namespace.value,
    onMouseleave: _cache[0] || (_cache[0] = ($event) => _ctx.handleMouseLeave())
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("inner-wrapper")),
      style: normalizeStyle(_ctx.tableInnerStyle)
    }, [
      createElementVNode("div", _hoisted_2$1, [
        renderSlot(_ctx.$slots, "default")
      ], 512),
      _ctx.showHeader && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        ref: "headerWrapper",
        class: normalizeClass(_ctx.ns.e("header-wrapper"))
      }, [
        createElementVNode("table", {
          ref: "tableHeader",
          class: normalizeClass(_ctx.ns.e("header")),
          style: normalizeStyle(_ctx.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          createVNode(_component_hColgroup, {
            columns: _ctx.store.states.columns.value,
            "table-layout": _ctx.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          createVNode(_component_table_header, {
            ref: "tableHeaderRef",
            border: _ctx.border,
            "default-sort": _ctx.defaultSort,
            store: _ctx.store,
            onSetDragVisible: _ctx.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      createElementVNode("div", {
        ref: "bodyWrapper",
        class: normalizeClass(_ctx.ns.e("body-wrapper"))
      }, [
        createVNode(_component_el_scrollbar, {
          ref: "scrollBarRef",
          "view-style": _ctx.scrollbarViewStyle,
          "wrap-style": _ctx.scrollbarStyle,
          always: _ctx.scrollbarAlwaysOn
        }, {
          default: withCtx(() => [
            createElementVNode("table", {
              ref: "tableBody",
              class: normalizeClass(_ctx.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: normalizeStyle({
                width: _ctx.bodyWidth,
                tableLayout: _ctx.tableLayout
              })
            }, [
              createVNode(_component_hColgroup, {
                columns: _ctx.store.states.columns.value,
                "table-layout": _ctx.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              _ctx.showHeader && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_header, {
                key: 0,
                ref: "tableHeaderRef",
                border: _ctx.border,
                "default-sort": _ctx.defaultSort,
                store: _ctx.store,
                onSetDragVisible: _ctx.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : createCommentVNode("v-if", true),
              createVNode(_component_table_body, {
                context: _ctx.context,
                highlight: _ctx.highlightCurrentRow,
                "row-class-name": _ctx.rowClassName,
                "tooltip-effect": _ctx.tooltipEffect,
                "tooltip-options": _ctx.tooltipOptions,
                "row-style": _ctx.rowStyle,
                store: _ctx.store,
                stripe: _ctx.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"])
            ], 6),
            _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "emptyBlock",
              style: normalizeStyle(_ctx.emptyBlockStyle),
              class: normalizeClass(_ctx.ns.e("empty-block"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.ns.e("empty-text"))
              }, [
                renderSlot(_ctx.$slots, "empty", {}, () => [
                  createTextVNode(toDisplayString(_ctx.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : createCommentVNode("v-if", true),
            _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
              key: 1,
              ref: "appendWrapper",
              class: normalizeClass(_ctx.ns.e("append-wrapper"))
            }, [
              renderSlot(_ctx.$slots, "append")
            ], 2)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      _ctx.showSummary ? withDirectives((openBlock(), createElementBlock("div", {
        key: 1,
        ref: "footerWrapper",
        class: normalizeClass(_ctx.ns.e("footer-wrapper"))
      }, [
        createVNode(_component_table_footer, {
          border: _ctx.border,
          "default-sort": _ctx.defaultSort,
          store: _ctx.store,
          style: normalizeStyle(_ctx.tableBodyStyles),
          "sum-text": _ctx.computedSumText,
          "summary-method": _ctx.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [vShow, !_ctx.isEmpty],
        [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      _ctx.border || _ctx.isGroup ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(_ctx.ns.e("border-left-patch"))
      }, null, 2)) : createCommentVNode("v-if", true)
    ], 6),
    withDirectives(createElementVNode("div", {
      ref: "resizeProxy",
      class: normalizeClass(_ctx.ns.e("column-resize-proxy"))
    }, null, 2), [
      [vShow, _ctx.resizeProxyVisible]
    ])
  ], 46, _hoisted_1$1);
}
var Table = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const defaultClassNames = {
  selection: "table-column--selection",
  expand: "table__expand-column"
};
const getDefaultClassName = (type) => {
  return defaultClassNames[type] || "";
};
const cellForced = {
  selection: {
    renderHeader({ store }) {
      function isDisabled() {
        return store.states.data.value && store.states.data.value.length === 0;
      }
      return h(ElCheckbox, {
        disabled: isDisabled(),
        size: store.states.tableSize.value,
        indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
        "onUpdate:modelValue": store.toggleAllSelection,
        modelValue: store.states.isAllSelected.value
      });
    },
    renderCell({
      row,
      column,
      store,
      $index
    }) {
      return h(ElCheckbox, {
        disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
        size: store.states.tableSize.value,
        onChange: () => {
          store.commit("rowSelectedChanged", row);
        },
        onClick: (event) => event.stopPropagation(),
        modelValue: store.isSelected(row)
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader({ column }) {
      return column.label || "#";
    },
    renderCell({
      column,
      $index
    }) {
      let i = $index + 1;
      const index2 = column.index;
      if (typeof index2 === "number") {
        i = $index + index2;
      } else if (typeof index2 === "function") {
        i = index2($index);
      }
      return h("div", {}, [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader({ column }) {
      return column.label || "";
    },
    renderCell({
      row,
      store,
      expanded
    }) {
      const { ns } = store;
      const classes = [ns.e("expand-icon")];
      if (expanded) {
        classes.push(ns.em("expand-icon", "expanded"));
      }
      const callback = function(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h("div", {
        class: classes,
        onClick: callback
      }, {
        default: () => {
          return [
            h(ElIcon, null, {
              default: () => {
                return [h(arrow_right_default)];
              }
            })
          ];
        }
      });
    },
    sortable: false,
    resizable: false
  }
};
function defaultRenderCell({
  row,
  column,
  $index
}) {
  var _a;
  const property = column.property;
  const value = property && getProp(row, property).value;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return ((_a = value == null ? void 0 : value.toString) == null ? void 0 : _a.call(value)) || "";
}
function treeCellPrefix({
  row,
  treeNode,
  store
}, createPlaceholder = false) {
  const { ns } = store;
  if (!treeNode) {
    if (createPlaceholder) {
      return [
        h("span", {
          class: ns.e("placeholder")
        })
      ];
    }
    return null;
  }
  const ele = [];
  const callback = function(e) {
    e.stopPropagation();
    if (treeNode.loading) {
      return;
    }
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(h("span", {
      class: ns.e("indent"),
      style: { "padding-left": `${treeNode.indent}px` }
    }));
  }
  if (typeof treeNode.expanded === "boolean" && !treeNode.noLazyChildren) {
    const expandClasses = [
      ns.e("expand-icon"),
      treeNode.expanded ? ns.em("expand-icon", "expanded") : ""
    ];
    let icon = arrow_right_default;
    if (treeNode.loading) {
      icon = loading_default;
    }
    ele.push(h("div", {
      class: expandClasses,
      onClick: callback
    }, {
      default: () => {
        return [
          h(ElIcon, { class: { [ns.is("loading")]: treeNode.loading } }, {
            default: () => [h(icon)]
          })
        ];
      }
    }));
  } else {
    ele.push(h("span", {
      class: ns.e("placeholder")
    }));
  }
  return ele;
}
function getAllAliases(props, aliases) {
  return props.reduce((prev, cur) => {
    prev[cur] = cur;
    return prev;
  }, aliases);
}
function useWatcher(owner, props_) {
  const instance = getCurrentInstance();
  const registerComplexWatchers = () => {
    const props = ["fixed"];
    const aliases = {
      realWidth: "width",
      realMinWidth: "minWidth"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          let value = newVal;
          if (columnKey === "width" && key === "realWidth") {
            value = parseWidth(newVal);
          }
          if (columnKey === "minWidth" && key === "realMinWidth") {
            value = parseMinWidth(newVal);
          }
          instance.columnConfig.value[columnKey] = value;
          instance.columnConfig.value[key] = value;
          const updateColumns = columnKey === "fixed";
          owner.value.store.scheduleLayout(updateColumns);
        });
      }
    });
  };
  const registerNormalWatchers = () => {
    const props = [
      "label",
      "filters",
      "filterMultiple",
      "sortable",
      "index",
      "formatter",
      "className",
      "labelClassName",
      "showOverflowTooltip"
    ];
    const aliases = {
      property: "prop",
      align: "realAlign",
      headerAlign: "realHeaderAlign"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          instance.columnConfig.value[key] = newVal;
        });
      }
    });
  };
  return {
    registerComplexWatchers,
    registerNormalWatchers
  };
}
function useRender(props, slots, owner) {
  const instance = getCurrentInstance();
  const columnId = ref("");
  const isSubColumn = ref(false);
  const realAlign = ref();
  const realHeaderAlign = ref();
  const ns = useNamespace("table");
  watchEffect(() => {
    realAlign.value = props.align ? `is-${props.align}` : null;
    realAlign.value;
  });
  watchEffect(() => {
    realHeaderAlign.value = props.headerAlign ? `is-${props.headerAlign}` : realAlign.value;
    realHeaderAlign.value;
  });
  const columnOrTableParent = computed(() => {
    let parent = instance.vnode.vParent || instance.parent;
    while (parent && !parent.tableId && !parent.columnId) {
      parent = parent.vnode.vParent || parent.parent;
    }
    return parent;
  });
  const hasTreeColumn = computed(() => {
    const { store } = instance.parent;
    if (!store)
      return false;
    const { treeData } = store.states;
    const treeDataValue = treeData.value;
    return treeDataValue && Object.keys(treeDataValue).length > 0;
  });
  const realWidth = ref(parseWidth(props.width));
  const realMinWidth = ref(parseMinWidth(props.minWidth));
  const setColumnWidth = (column) => {
    if (realWidth.value)
      column.width = realWidth.value;
    if (realMinWidth.value) {
      column.minWidth = realMinWidth.value;
    }
    if (!realWidth.value && realMinWidth.value) {
      column.width = void 0;
    }
    if (!column.minWidth) {
      column.minWidth = 80;
    }
    column.realWidth = Number(column.width === void 0 ? column.minWidth : column.width);
    return column;
  };
  const setColumnForcedProps = (column) => {
    const type = column.type;
    const source = cellForced[type] || {};
    Object.keys(source).forEach((prop) => {
      const value = source[prop];
      if (prop !== "className" && value !== void 0) {
        column[prop] = value;
      }
    });
    const className = getDefaultClassName(type);
    if (className) {
      const forceClass = `${unref(ns.namespace)}-${className}`;
      column.className = column.className ? `${column.className} ${forceClass}` : forceClass;
    }
    return column;
  };
  const checkSubColumn = (children) => {
    if (Array.isArray(children)) {
      children.forEach((child) => check(child));
    } else {
      check(children);
    }
    function check(item) {
      var _a;
      if (((_a = item == null ? void 0 : item.type) == null ? void 0 : _a.name) === "ElTableColumn") {
        item.vParent = instance;
      }
    }
  };
  const setColumnRenders = (column) => {
    if (props.renderHeader) ; else if (column.type !== "selection") {
      column.renderHeader = (scope) => {
        instance.columnConfig.value["label"];
        const renderHeader = slots.header;
        return renderHeader ? renderHeader(scope) : column.label;
      };
    }
    let originRenderCell = column.renderCell;
    if (column.type === "expand") {
      column.renderCell = (data) => h("div", {
        class: "cell"
      }, [originRenderCell(data)]);
      owner.value.renderExpanded = (data) => {
        return slots.default ? slots.default(data) : slots.default;
      };
    } else {
      originRenderCell = originRenderCell || defaultRenderCell;
      column.renderCell = (data) => {
        let children = null;
        if (slots.default) {
          const vnodes = slots.default(data);
          children = vnodes.some((v) => v.type !== Comment) ? vnodes : originRenderCell(data);
        } else {
          children = originRenderCell(data);
        }
        const shouldCreatePlaceholder = hasTreeColumn.value && data.cellIndex === 0 && data.column.type !== "selection";
        const prefix = treeCellPrefix(data, shouldCreatePlaceholder);
        const props2 = {
          class: "cell",
          style: {}
        };
        if (column.showOverflowTooltip) {
          props2.class = `${props2.class} ${unref(ns.namespace)}-tooltip`;
          props2.style = {
            width: `${(data.column.realWidth || Number(data.column.width)) - 1}px`
          };
        }
        checkSubColumn(children);
        return h("div", props2, [prefix, children]);
      };
    }
    return column;
  };
  const getPropsData = (...propsKey) => {
    return propsKey.reduce((prev, cur) => {
      if (Array.isArray(cur)) {
        cur.forEach((key) => {
          prev[key] = props[key];
        });
      }
      return prev;
    }, {});
  };
  const getColumnElIndex = (children, child) => {
    return Array.prototype.indexOf.call(children, child);
  };
  const updateColumnOrder = () => {
    owner.value.store.commit("updateColumnOrder", instance.columnConfig.value);
  };
  return {
    columnId,
    realAlign,
    isSubColumn,
    realHeaderAlign,
    columnOrTableParent,
    setColumnWidth,
    setColumnForcedProps,
    setColumnRenders,
    getPropsData,
    getColumnElIndex,
    updateColumnOrder
  };
}
var defaultProps = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: false
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: true
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: [Boolean, Object],
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: true
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => {
      return ["ascending", "descending", null];
    },
    validator: (val) => {
      return val.every((order) => ["ascending", "descending", null].includes(order));
    }
  }
};
let columnIdSeed = 1;
var ElTableColumn$1 = /* @__PURE__ */ defineComponent({
  name: "ElTableColumn",
  components: {
    ElCheckbox
  },
  props: defaultProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const columnConfig = ref({});
    const owner = computed(() => {
      let parent2 = instance.parent;
      while (parent2 && !parent2.tableId) {
        parent2 = parent2.parent;
      }
      return parent2;
    });
    useWatcher(owner, props);
    const {
      columnId,
      isSubColumn,
      realHeaderAlign,
      columnOrTableParent,
      setColumnWidth,
      setColumnForcedProps,
      setColumnRenders,
      getPropsData,
      getColumnElIndex,
      realAlign,
      updateColumnOrder
    } = useRender(props, slots, owner);
    const parent = columnOrTableParent.value;
    columnId.value = `${parent.tableId || parent.columnId}_column_${columnIdSeed++}`;
    instance.columnId = columnId.value;
    instance.columnConfig = columnConfig;
    return;
  },
  render() {
    var _a, _b, _c;
    try {
      const renderDefault = (_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a, {
        row: {},
        column: {},
        $index: -1
      });
      const children = [];
      if (Array.isArray(renderDefault)) {
        for (const childNode of renderDefault) {
          if (((_c = childNode.type) == null ? void 0 : _c.name) === "ElTableColumn" || childNode.shapeFlag & 2) {
            children.push(childNode);
          } else if (childNode.type === Fragment && Array.isArray(childNode.children)) {
            childNode.children.forEach((vnode2) => {
              if ((vnode2 == null ? void 0 : vnode2.patchFlag) !== 1024 && !isString(vnode2 == null ? void 0 : vnode2.children)) {
                children.push(vnode2);
              }
            });
          }
        }
      }
      const vnode = h("div", children);
      return vnode;
    } catch (e) {
      return h("div", []);
    }
  }
});
const ElTable = withInstall(Table, {
  TableColumn: ElTableColumn$1
});
const ElTableColumn = withNoopInstall(ElTableColumn$1);
const messageTypes = ["success", "info", "warning", "error"];
const messageDefaults = mutable({
  customClass: "",
  center: false,
  dangerouslyUseHTMLString: false,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: false,
  type: "info",
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: isClient ? document.body : void 0
});
const messageProps = buildProps({
  customClass: {
    type: String,
    default: messageDefaults.customClass
  },
  center: {
    type: Boolean,
    default: messageDefaults.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageDefaults.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: messageDefaults.duration
  },
  icon: {
    type: iconPropType,
    default: messageDefaults.icon
  },
  id: {
    type: String,
    default: messageDefaults.id
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: messageDefaults.message
  },
  onClose: {
    type: definePropType(Function),
    required: false
  },
  showClose: {
    type: Boolean,
    default: messageDefaults.showClose
  },
  type: {
    type: String,
    values: messageTypes,
    default: messageDefaults.type
  },
  offset: {
    type: Number,
    default: messageDefaults.offset
  },
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex
  },
  grouping: {
    type: Boolean,
    default: messageDefaults.grouping
  },
  repeatNum: {
    type: Number,
    default: messageDefaults.repeatNum
  }
});
const messageEmits = {
  destroy: () => true
};
const instances = shallowReactive([]);
const getInstance = (id) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  const current = instances[idx];
  let prev;
  if (idx > 0) {
    prev = instances[idx - 1];
  }
  return { current, prev };
};
const getLastOffset = (id) => {
  const { prev } = getInstance(id);
  if (!prev)
    return 0;
  return prev.vm.exposed.bottom.value;
};
const getOffsetOrSpace = (id, offset) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  return idx > 0 ? 20 : offset;
};
const _hoisted_1 = ["id"];
const _hoisted_2 = ["innerHTML"];
const __default__ = /* @__PURE__ */ defineComponent({
  name: "ElMessage"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: messageProps,
  emits: messageEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { Close } = TypeComponents;
    const { ns, zIndex } = useGlobalComponentSettings("message");
    const { currentZIndex, nextZIndex } = zIndex;
    const messageRef = ref();
    const visible = ref(false);
    const height = ref(0);
    let stopTimer = void 0;
    const badgeType = computed(() => props.type ? props.type === "error" ? "danger" : props.type : "info");
    const typeClass = computed(() => {
      const type = props.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const iconComponent = computed(() => props.icon || TypeComponentsMap[props.type] || "");
    const lastOffset = computed(() => getLastOffset(props.id));
    const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value);
    const bottom = computed(() => height.value + offset.value);
    const customStyle = computed(() => ({
      top: `${offset.value}px`,
      zIndex: currentZIndex.value
    }));
    function startTimer() {
      if (props.duration === 0)
        return;
      ({ stop: stopTimer } = useTimeoutFn(() => {
        close();
      }, props.duration));
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close() {
      visible.value = false;
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        close();
      }
    }
    watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(document, "keydown", keydown);
    useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
    });
    expose({
      visible,
      bottom,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        onBeforeLeave: _ctx.onClose,
        onAfterLeave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("destroy")),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            id: _ctx.id,
            ref_key: "messageRef",
            ref: messageRef,
            class: normalizeClass([
              unref(ns).b(),
              { [unref(ns).m(_ctx.type)]: _ctx.type && !_ctx.icon },
              unref(ns).is("center", _ctx.center),
              unref(ns).is("closable", _ctx.showClose),
              _ctx.customClass
            ]),
            style: normalizeStyle(unref(customStyle)),
            role: "alert",
            onMouseenter: clearTimer,
            onMouseleave: startTimer
          }, [
            _ctx.repeatNum > 1 ? (openBlock(), createBlock(unref(ElBadge), {
              key: 0,
              value: _ctx.repeatNum,
              type: unref(badgeType),
              class: normalizeClass(unref(ns).e("badge"))
            }, null, 8, ["value", "type", "class"])) : createCommentVNode("v-if", true),
            unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass([unref(ns).e("icon"), unref(typeClass)])
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: normalizeClass(unref(ns).e("content"))
              }, toDisplayString(_ctx.message), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
                createElementVNode("p", {
                  class: normalizeClass(unref(ns).e("content")),
                  innerHTML: _ctx.message
                }, null, 10, _hoisted_2)
              ], 2112))
            ]),
            _ctx.showClose ? (openBlock(), createBlock(unref(ElIcon), {
              key: 2,
              class: normalizeClass(unref(ns).e("closeBtn")),
              onClick: withModifiers(close, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(Close))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 46, _hoisted_1), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name", "onBeforeLeave"]);
    };
  }
});
var MessageConstructor = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let seed = 1;
const normalizeOptions = (params) => {
  const options = !params || isString(params) || isVNode(params) || isFunction(params) ? { message: params } : params;
  const normalized = {
    ...messageDefaults,
    ...options
  };
  if (!normalized.appendTo) {
    normalized.appendTo = document.body;
  } else if (isString(normalized.appendTo)) {
    let appendTo = document.querySelector(normalized.appendTo);
    if (!isElement(appendTo)) {
      appendTo = document.body;
    }
    normalized.appendTo = appendTo;
  }
  return normalized;
};
const closeMessage = (instance) => {
  const idx = instances.indexOf(instance);
  if (idx === -1)
    return;
  instances.splice(idx, 1);
  const { handler } = instance;
  handler.close();
};
const createMessage = ({ appendTo, ...options }, context) => {
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const container = document.createElement("div");
  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose == null ? void 0 : userOnClose();
      closeMessage(instance);
    },
    onDestroy: () => {
      render(null, container);
    }
  };
  const vnode = createVNode(MessageConstructor, props, isFunction(props.message) || isVNode(props.message) ? {
    default: isFunction(props.message) ? props.message : () => props.message
  } : null);
  vnode.appContext = context || message._context;
  render(vnode, container);
  appendTo.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const handler = {
    close: () => {
      vm.exposed.visible.value = false;
    }
  };
  const instance = {
    id,
    vnode,
    vm,
    handler,
    props: vnode.component.props
  };
  return instance;
};
const message = (options = {}, context) => {
  if (!isClient)
    return { close: () => void 0 };
  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => void 0 };
  }
  const normalized = normalizeOptions(options);
  if (normalized.grouping && instances.length) {
    const instance2 = instances.find(({ vnode: vm }) => {
      var _a;
      return ((_a = vm.props) == null ? void 0 : _a.message) === normalized.message;
    });
    if (instance2) {
      instance2.props.repeatNum += 1;
      instance2.props.type = normalized.type;
      return instance2.handler;
    }
  }
  const instance = createMessage(normalized, context);
  instances.push(instance);
  return instance.handler;
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized, type }, appContext);
  };
});
function closeAll(type) {
  for (const instance of instances) {
    if (!type || type === instance.props.type) {
      instance.handler.close();
    }
  }
}
message.closeAll = closeAll;
message._context = null;
const ElMessage = withInstallFunction(message, "$message");
const request = axios.create({
  baseURL: "/api"
});
request.interceptors.request.use((config) => {
  config.headers["x-auth-token"] = window.localStorage.getItem("yuque_token") || "";
  return config;
});
request.interceptors.response.use(
  (res) => {
    var _a;
    if (res.status === 200 && res.data.code === 200) {
      return Promise.resolve(res.data);
    }
    consola.info("request.res -->", res);
    ElMessage.error(((_a = res.data) == null ? void 0 : _a.message) || res.statusText || "\u670D\u52A1\u5F02\u5E38\uFF0C\u8BF7\u91CD\u8BD5");
    return Promise.reject(res);
  },
  (e) => {
    var _a, _b, _c;
    consola.error("request.e -->", e);
    ElMessage.error(
      ((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || ((_c = e == null ? void 0 : e.response) == null ? void 0 : _c.message) || e.message || e.statusText || "\u670D\u52A1\u5F02\u5E38\uFF0C\u8BF7\u91CD\u8BD5"
    );
    return Promise.reject(e);
  }
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const saveAs = pkg.saveAs;
    const namespace = ref("");
    const reposData = ref([]);
    const tableData = ref([]);
    const tableLoading = ref(true);
    const multipleSelection = ref([]);
    const handleSelectionChange = (val) => {
      multipleSelection.value = val.map((item) => item.slug);
    };
    const getDocList = async (value) => {
      namespace.value = value;
      try {
        tableLoading.value = true;
        const { data } = await request(`/docs?namespace=${value}`);
        tableData.value = data;
        tableLoading.value = false;
      } catch (e) {
        tableLoading.value = false;
      }
    };
    const handleExportSingle = (slug) => {
      handleExport([slug]);
    };
    const handleExportMultiple = () => {
      handleExport(multipleSelection.value);
    };
    const handleExport = async (docs) => {
      try {
        tableLoading.value = true;
        const requests = docs.map((slug) => {
          return request(`/export?slug=${slug}&namespace=${namespace.value}`);
        });
        const res = await Promise.all(requests);
        fileZip(res);
      } catch (e) {
        tableLoading.value = false;
      }
    };
    const fileZip = (list) => {
      const zip = new JSZip();
      let name = "";
      list.forEach((item) => {
        const { body, title, book } = item.data;
        zip.file(`${title}.md`, body);
        if (!name)
          name = book.name;
      });
      zip.generateAsync({ type: "blob" }).then(function(content) {
        saveAs(content, name);
        ElMessage.success("\u5BFC\u51FA\u6210\u529F");
        tableLoading.value = false;
      }).catch((e) => {
        console.log("export.e", e);
        ElMessage.warning("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01");
        tableLoading.value = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_button = ElButton;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_icon = ElIcon;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page home-page" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, tableLoading.value)))} data-v-4805d528><div class="page-control" data-v-4805d528>`);
      _push(ssrRenderComponent(_component_el_form, {
        "label-width": "auto",
        "label-position": "left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "\u77E5\u8BC6\u5E93\uFF1A",
              style: { "margin-bottom": "0" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_select, {
                    modelValue: namespace.value,
                    "onUpdate:modelValue": ($event) => namespace.value = $event,
                    placeholder: "\u8BF7\u9009\u62E9",
                    filterable: "",
                    onChange: getDocList
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(reposData.value, (item) => {
                          _push4(ssrRenderComponent(_component_el_option, {
                            key: item.namespace,
                            label: item.name,
                            value: item.namespace
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(reposData.value, (item) => {
                            return openBlock(), createBlock(_component_el_option, {
                              key: item.namespace,
                              label: item.name,
                              value: item.namespace
                            }, null, 8, ["label", "value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_select, {
                      modelValue: namespace.value,
                      "onUpdate:modelValue": ($event) => namespace.value = $event,
                      placeholder: "\u8BF7\u9009\u62E9",
                      filterable: "",
                      onChange: getDocList
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(reposData.value, (item) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: item.namespace,
                            label: item.name,
                            value: item.namespace
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_form_item, {
                label: "\u77E5\u8BC6\u5E93\uFF1A",
                style: { "margin-bottom": "0" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_select, {
                    modelValue: namespace.value,
                    "onUpdate:modelValue": ($event) => namespace.value = $event,
                    placeholder: "\u8BF7\u9009\u62E9",
                    filterable: "",
                    onChange: getDocList
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(reposData.value, (item) => {
                        return openBlock(), createBlock(_component_el_option, {
                          key: item.namespace,
                          label: item.name,
                          value: item.namespace
                        }, null, 8, ["label", "value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        disabled: !multipleSelection.value.length,
        loading: tableLoading.value,
        onClick: handleExportMultiple
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6279\u91CF\u5BFC\u51FA `);
          } else {
            return [
              createTextVNode(" \u6279\u91CF\u5BFC\u51FA ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_table, {
        style: [
          !tableLoading.value ? null : { display: "none" },
          { "flex": "1", "width": "100%", "height": "100%" }
        ],
        stripe: "",
        data: tableData.value,
        "empty-text": "\u6682\u65E0\u6570\u636E",
        onSelectionChange: handleSelectionChange
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              type: "selection",
              width: "55"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "title",
              label: "\u6807\u9898",
              align: "center",
              "show-overflow-tooltip": ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u521B\u5EFA\u65F6\u95F4",
              align: "center"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "justify-content": "center" })}" data-v-4805d528${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(timer_default), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(timer_default))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span style="${ssrRenderStyle({ "margin-left": "10px" })}" data-v-4805d528${_scopeId2}>${ssrInterpolate(unref(dayjs)(scope.row.created_at).format("YYYY-MM-DD HH:mm:ss"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { style: { "display": "flex", "align-items": "center", "justify-content": "center" } }, [
                      createVNode(_component_el_icon, null, {
                        default: withCtx(() => [
                          createVNode(unref(timer_default))
                        ]),
                        _: 1
                      }),
                      createVNode("span", { style: { "margin-left": "10px" } }, toDisplayString(unref(dayjs)(scope.row.created_at).format("YYYY-MM-DD HH:mm:ss")), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u66F4\u65B0\u65F6\u95F4",
              align: "center"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "justify-content": "center" })}" data-v-4805d528${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(timer_default), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(timer_default))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span style="${ssrRenderStyle({ "margin-left": "10px" })}" data-v-4805d528${_scopeId2}>${ssrInterpolate(unref(dayjs)(scope.row.updated_at).format("YYYY-MM-DD HH:mm:ss"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { style: { "display": "flex", "align-items": "center", "justify-content": "center" } }, [
                      createVNode(_component_el_icon, null, {
                        default: withCtx(() => [
                          createVNode(unref(timer_default))
                        ]),
                        _: 1
                      }),
                      createVNode("span", { style: { "margin-left": "10px" } }, toDisplayString(unref(dayjs)(scope.row.updated_at).format("YYYY-MM-DD HH:mm:ss")), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u64CD\u4F5C",
              align: "center",
              width: "120"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    size: "small",
                    onClick: ($event) => handleExportSingle(scope.row.slug)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u5BFC\u51FA`);
                      } else {
                        return [
                          createTextVNode("\u5BFC\u51FA")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "small",
                      onClick: ($event) => handleExportSingle(scope.row.slug)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u5BFC\u51FA")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                type: "selection",
                width: "55"
              }),
              createVNode(_component_el_table_column, {
                prop: "title",
                label: "\u6807\u9898",
                align: "center",
                "show-overflow-tooltip": ""
              }),
              createVNode(_component_el_table_column, {
                label: "\u521B\u5EFA\u65F6\u95F4",
                align: "center"
              }, {
                default: withCtx((scope) => [
                  createVNode("div", { style: { "display": "flex", "align-items": "center", "justify-content": "center" } }, [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(unref(timer_default))
                      ]),
                      _: 1
                    }),
                    createVNode("span", { style: { "margin-left": "10px" } }, toDisplayString(unref(dayjs)(scope.row.created_at).format("YYYY-MM-DD HH:mm:ss")), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u66F4\u65B0\u65F6\u95F4",
                align: "center"
              }, {
                default: withCtx((scope) => [
                  createVNode("div", { style: { "display": "flex", "align-items": "center", "justify-content": "center" } }, [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(unref(timer_default))
                      ]),
                      _: 1
                    }),
                    createVNode("span", { style: { "margin-left": "10px" } }, toDisplayString(unref(dayjs)(scope.row.updated_at).format("YYYY-MM-DD HH:mm:ss")), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u64CD\u4F5C",
                align: "center",
                width: "120"
              }, {
                default: withCtx((scope) => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    size: "small",
                    onClick: ($event) => handleExportSingle(scope.row.slug)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u5BFC\u51FA")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4805d528"]]);

export { index as default };
//# sourceMappingURL=index-17b4d0a7.mjs.map
