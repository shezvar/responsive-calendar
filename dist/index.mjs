import * as j from "react";
import S, { useState as F, useEffect as se, useRef as G, useCallback as re, useMemo as ge, useLayoutEffect as mo, useContext as de, createContext as ye, forwardRef as _l, Fragment as ce, isValidElement as ho, cloneElement as aa, createElement as Wl, useId as Re, useSyncExternalStore as Bl, useReducer as Hl, createRef as Vl } from "react";
import * as Dn from "react-dom";
import { flushSync as Ln, createPortal as ia } from "react-dom";
var Kr = { exports: {} }, Jt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fs;
function Yl() {
  if (fs) return Jt;
  fs = 1;
  var e = S, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, c, u) {
    var d, f = {}, h = null, m = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (d in c) r.call(c, d) && !a.hasOwnProperty(d) && (f[d] = c[d]);
    if (i && i.defaultProps) for (d in c = i.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: i, key: h, ref: m, props: f, _owner: o.current };
  }
  return Jt.Fragment = n, Jt.jsx = l, Jt.jsxs = l, Jt;
}
var en = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function zl() {
  return ms || (ms = 1, process.env.NODE_ENV !== "production" && function() {
    var e = S, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), p = Symbol.iterator, g = "@@iterator";
    function x(v) {
      if (v === null || typeof v != "object")
        return null;
      var C = p && v[p] || v[g];
      return typeof C == "function" ? C : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(v) {
      {
        for (var C = arguments.length, _ = new Array(C > 1 ? C - 1 : 0), Q = 1; Q < C; Q++)
          _[Q - 1] = arguments[Q];
        b("error", v, _);
      }
    }
    function b(v, C, _) {
      {
        var Q = w.ReactDebugCurrentFrame, ie = Q.getStackAddendum();
        ie !== "" && (C += "%s", _ = _.concat([ie]));
        var me = _.map(function(oe) {
          return String(oe);
        });
        me.unshift("Warning: " + C), Function.prototype.apply.call(console[v], console, me);
      }
    }
    var N = !1, O = !1, R = !1, M = !1, U = !1, q;
    q = Symbol.for("react.module.reference");
    function P(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === r || v === a || U || v === o || v === u || v === d || M || v === m || N || O || R || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === f || v.$$typeof === l || v.$$typeof === i || v.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === q || v.getModuleId !== void 0));
    }
    function B(v, C, _) {
      var Q = v.displayName;
      if (Q)
        return Q;
      var ie = C.displayName || C.name || "";
      return ie !== "" ? _ + "(" + ie + ")" : _;
    }
    function K(v) {
      return v.displayName || "Context";
    }
    function A(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case i:
            var C = v;
            return K(C) + ".Consumer";
          case l:
            var _ = v;
            return K(_._context) + ".Provider";
          case c:
            return B(v, v.render, "ForwardRef");
          case f:
            var Q = v.displayName || null;
            return Q !== null ? Q : A(v.type) || "Memo";
          case h: {
            var ie = v, me = ie._payload, oe = ie._init;
            try {
              return A(oe(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, L = 0, V, X, W, H, Z, Y, te;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function k() {
      {
        if (L === 0) {
          V = console.log, X = console.info, W = console.warn, H = console.error, Z = console.group, Y = console.groupCollapsed, te = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: E,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        L++;
      }
    }
    function D() {
      {
        if (L--, L === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, v, {
              value: V
            }),
            info: $({}, v, {
              value: X
            }),
            warn: $({}, v, {
              value: W
            }),
            error: $({}, v, {
              value: H
            }),
            group: $({}, v, {
              value: Z
            }),
            groupCollapsed: $({}, v, {
              value: Y
            }),
            groupEnd: $({}, v, {
              value: te
            })
          });
        }
        L < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var T = w.ReactCurrentDispatcher, J;
    function ae(v, C, _) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (ie) {
            var Q = ie.stack.trim().match(/\n( *(at )?)/);
            J = Q && Q[1] || "";
          }
        return `
` + J + v;
      }
    }
    var pe = !1, Ie;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      Ie = new He();
    }
    function qe(v, C) {
      if (!v || pe)
        return "";
      {
        var _ = Ie.get(v);
        if (_ !== void 0)
          return _;
      }
      var Q;
      pe = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = T.current, T.current = null, k();
      try {
        if (C) {
          var oe = function() {
            throw Error();
          };
          if (Object.defineProperty(oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(oe, []);
            } catch (Ve) {
              Q = Ve;
            }
            Reflect.construct(v, [], oe);
          } else {
            try {
              oe.call();
            } catch (Ve) {
              Q = Ve;
            }
            v.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ve) {
            Q = Ve;
          }
          v();
        }
      } catch (Ve) {
        if (Ve && Q && typeof Ve.stack == "string") {
          for (var ne = Ve.stack.split(`
`), _e = Q.stack.split(`
`), Ee = ne.length - 1, Ce = _e.length - 1; Ee >= 1 && Ce >= 0 && ne[Ee] !== _e[Ce]; )
            Ce--;
          for (; Ee >= 1 && Ce >= 0; Ee--, Ce--)
            if (ne[Ee] !== _e[Ce]) {
              if (Ee !== 1 || Ce !== 1)
                do
                  if (Ee--, Ce--, Ce < 0 || ne[Ee] !== _e[Ce]) {
                    var Ke = `
` + ne[Ee].replace(" at new ", " at ");
                    return v.displayName && Ke.includes("<anonymous>") && (Ke = Ke.replace("<anonymous>", v.displayName)), typeof v == "function" && Ie.set(v, Ke), Ke;
                  }
                while (Ee >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        pe = !1, T.current = me, D(), Error.prepareStackTrace = ie;
      }
      var Bt = v ? v.displayName || v.name : "", Ot = Bt ? ae(Bt) : "";
      return typeof v == "function" && Ie.set(v, Ot), Ot;
    }
    function _t(v, C, _) {
      return qe(v, !1);
    }
    function kn(v) {
      var C = v.prototype;
      return !!(C && C.isReactComponent);
    }
    function Nn(v, C, _) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return qe(v, kn(v));
      if (typeof v == "string")
        return ae(v);
      switch (v) {
        case u:
          return ae("Suspense");
        case d:
          return ae("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case c:
            return _t(v.render);
          case f:
            return Nn(v.type, C, _);
          case h: {
            var Q = v, ie = Q._payload, me = Q._init;
            try {
              return Nn(me(ie), C, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Zt = Object.prototype.hasOwnProperty, Zo = {}, Jo = w.ReactDebugCurrentFrame;
    function On(v) {
      if (v) {
        var C = v._owner, _ = Nn(v.type, v._source, C ? C.type : null);
        Jo.setExtraStackFrame(_);
      } else
        Jo.setExtraStackFrame(null);
    }
    function vl(v, C, _, Q, ie) {
      {
        var me = Function.call.bind(Zt);
        for (var oe in v)
          if (me(v, oe)) {
            var ne = void 0;
            try {
              if (typeof v[oe] != "function") {
                var _e = Error((Q || "React class") + ": " + _ + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              ne = v[oe](C, oe, Q, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              ne = Ee;
            }
            ne && !(ne instanceof Error) && (On(ie), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", _, oe, typeof ne), On(null)), ne instanceof Error && !(ne.message in Zo) && (Zo[ne.message] = !0, On(ie), y("Failed %s type: %s", _, ne.message), On(null));
          }
      }
    }
    var xl = Array.isArray;
    function wr(v) {
      return xl(v);
    }
    function bl(v) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, _ = C && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return _;
      }
    }
    function wl(v) {
      try {
        return es(v), !1;
      } catch {
        return !0;
      }
    }
    function es(v) {
      return "" + v;
    }
    function ts(v) {
      if (wl(v))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bl(v)), es(v);
    }
    var ns = w.ReactCurrentOwner, yl = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rs, os;
    function jl(v) {
      if (Zt.call(v, "ref")) {
        var C = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function El(v) {
      if (Zt.call(v, "key")) {
        var C = Object.getOwnPropertyDescriptor(v, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function kl(v, C) {
      typeof v.ref == "string" && ns.current;
    }
    function Nl(v, C) {
      {
        var _ = function() {
          rs || (rs = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        _.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Ol(v, C) {
      {
        var _ = function() {
          os || (os = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        _.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var Sl = function(v, C, _, Q, ie, me, oe) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: v,
        key: C,
        ref: _,
        props: oe,
        // Record the component responsible for creating this element.
        _owner: me
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function Cl(v, C, _, Q, ie) {
      {
        var me, oe = {}, ne = null, _e = null;
        _ !== void 0 && (ts(_), ne = "" + _), El(C) && (ts(C.key), ne = "" + C.key), jl(C) && (_e = C.ref, kl(C, ie));
        for (me in C)
          Zt.call(C, me) && !yl.hasOwnProperty(me) && (oe[me] = C[me]);
        if (v && v.defaultProps) {
          var Ee = v.defaultProps;
          for (me in Ee)
            oe[me] === void 0 && (oe[me] = Ee[me]);
        }
        if (ne || _e) {
          var Ce = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          ne && Nl(oe, Ce), _e && Ol(oe, Ce);
        }
        return Sl(v, ne, _e, ie, Q, ns.current, oe);
      }
    }
    var yr = w.ReactCurrentOwner, ss = w.ReactDebugCurrentFrame;
    function Wt(v) {
      if (v) {
        var C = v._owner, _ = Nn(v.type, v._source, C ? C.type : null);
        ss.setExtraStackFrame(_);
      } else
        ss.setExtraStackFrame(null);
    }
    var jr;
    jr = !1;
    function Er(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function as() {
      {
        if (yr.current) {
          var v = A(yr.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function Tl(v) {
      return "";
    }
    var is = {};
    function $l(v) {
      {
        var C = as();
        if (!C) {
          var _ = typeof v == "string" ? v : v.displayName || v.name;
          _ && (C = `

Check the top-level render call using <` + _ + ">.");
        }
        return C;
      }
    }
    function ls(v, C) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var _ = $l(C);
        if (is[_])
          return;
        is[_] = !0;
        var Q = "";
        v && v._owner && v._owner !== yr.current && (Q = " It was passed a child from " + A(v._owner.type) + "."), Wt(v), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, Q), Wt(null);
      }
    }
    function cs(v, C) {
      {
        if (typeof v != "object")
          return;
        if (wr(v))
          for (var _ = 0; _ < v.length; _++) {
            var Q = v[_];
            Er(Q) && ls(Q, C);
          }
        else if (Er(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var ie = x(v);
          if (typeof ie == "function" && ie !== v.entries)
            for (var me = ie.call(v), oe; !(oe = me.next()).done; )
              Er(oe.value) && ls(oe.value, C);
        }
      }
    }
    function Pl(v) {
      {
        var C = v.type;
        if (C == null || typeof C == "string")
          return;
        var _;
        if (typeof C == "function")
          _ = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === f))
          _ = C.propTypes;
        else
          return;
        if (_) {
          var Q = A(C);
          vl(_, v.props, "prop", Q, v);
        } else if (C.PropTypes !== void 0 && !jr) {
          jr = !0;
          var ie = A(C);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ml(v) {
      {
        for (var C = Object.keys(v.props), _ = 0; _ < C.length; _++) {
          var Q = C[_];
          if (Q !== "children" && Q !== "key") {
            Wt(v), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), Wt(null);
            break;
          }
        }
        v.ref !== null && (Wt(v), y("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var us = {};
    function ds(v, C, _, Q, ie, me) {
      {
        var oe = P(v);
        if (!oe) {
          var ne = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = Tl();
          _e ? ne += _e : ne += as();
          var Ee;
          v === null ? Ee = "null" : wr(v) ? Ee = "array" : v !== void 0 && v.$$typeof === t ? (Ee = "<" + (A(v.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof v, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, ne);
        }
        var Ce = Cl(v, C, _, ie, me);
        if (Ce == null)
          return Ce;
        if (oe) {
          var Ke = C.children;
          if (Ke !== void 0)
            if (Q)
              if (wr(Ke)) {
                for (var Bt = 0; Bt < Ke.length; Bt++)
                  cs(Ke[Bt], v);
                Object.freeze && Object.freeze(Ke);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cs(Ke, v);
        }
        if (Zt.call(C, "key")) {
          var Ot = A(v), Ve = Object.keys(C).filter(function(Il) {
            return Il !== "key";
          }), kr = Ve.length > 0 ? "{key: someKey, " + Ve.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!us[Ot + kr]) {
            var Al = Ve.length > 0 ? "{" + Ve.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, kr, Ot, Al, Ot), us[Ot + kr] = !0;
          }
        }
        return v === r ? Ml(Ce) : Pl(Ce), Ce;
      }
    }
    function Rl(v, C, _) {
      return ds(v, C, _, !0);
    }
    function Fl(v, C, _) {
      return ds(v, C, _, !1);
    }
    var Dl = Fl, Ll = Rl;
    en.Fragment = r, en.jsx = Dl, en.jsxs = Ll;
  }()), en;
}
process.env.NODE_ENV === "production" ? Kr.exports = Yl() : Kr.exports = zl();
var s = Kr.exports;
const la = 6048e5, Gl = 864e5, Ul = 6e4, hs = Symbol.for("constructDateFrom");
function Be(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && hs in e ? e[hs](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Oe(e, t) {
  return Be(t || e, e);
}
function qt(e, t, n) {
  const r = Oe(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Be((n == null ? void 0 : n.in) || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function un(e, t, n) {
  const r = Oe(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return Be((n == null ? void 0 : n.in) || e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = Be((n == null ? void 0 : n.in) || e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const l = a.getDate();
  return o >= l ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let ql = {};
function pn() {
  return ql;
}
function mt(e, t) {
  var i, c, u, d;
  const n = pn(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = Oe(e, t == null ? void 0 : t.in), a = o.getDay(), l = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - l), o.setHours(0, 0, 0, 0), o;
}
function An(e, t) {
  return mt(e, { ...t, weekStartsOn: 1 });
}
function ca(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Be(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = An(o), l = Be(n, 0);
  l.setFullYear(r, 0, 4), l.setHours(0, 0, 0, 0);
  const i = An(l);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function ps(e) {
  const t = Oe(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Gn(e, ...t) {
  const n = Be.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function dn(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Kl(e, t, n) {
  const [r, o] = Gn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = dn(r), l = dn(o), i = +a - ps(a), c = +l - ps(l);
  return Math.round((i - c) / Gl);
}
function Xl(e, t) {
  const n = ca(e, t), r = Be(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), An(r);
}
function ua(e, t, n) {
  return qt(e, t * 7, n);
}
function da(e, t, n) {
  return un(e, t * 12, n);
}
function Ql(e) {
  return Be(e, Date.now());
}
function We(e, t, n) {
  const [r, o] = Gn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +dn(r) == +dn(o);
}
function Zl(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Jl(e) {
  return !(!Zl(e) && typeof e != "number" || isNaN(+Oe(e)));
}
function ec(e) {
  return (t) => {
    const n = Math.trunc, r = n(t);
    return r === 0 ? 0 : r;
  };
}
function tc(e, t) {
  return +Oe(e) - +Oe(t);
}
function fa(e, t, n) {
  const r = tc(e, t) / Ul;
  return ec()(r);
}
function ma(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function ha(e, t) {
  const [n, r] = Gn(e, t.start, t.end);
  return { start: n, end: r };
}
function pa(e, t) {
  const { start: n, end: r } = ha(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, l = o ? r : n;
  l.setHours(0, 0, 0, 0);
  let i = 1;
  const c = [];
  for (; +l <= a; )
    c.push(Be(n, l)), l.setDate(l.getDate() + i), l.setHours(0, 0, 0, 0);
  return o ? c.reverse() : c;
}
function nc(e, t) {
  const { start: n, end: r } = ha(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, l = o ? r : n;
  l.setHours(0, 0, 0, 0), l.setDate(1);
  let i = 1;
  const c = [];
  for (; +l <= a; )
    c.push(Be(n, l)), l.setMonth(l.getMonth() + i);
  return o ? c.reverse() : c;
}
function ga(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function rc(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function va(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function xa(e, t) {
  var i, c, u, d;
  const n = pn(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = Oe(e, t == null ? void 0 : t.in), a = o.getDay(), l = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + l), o.setHours(23, 59, 59, 999), o;
}
const oc = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, sc = (e, t, n) => {
  let r;
  const o = oc[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Nr(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const ac = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ic = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, lc = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, cc = {
  date: Nr({
    formats: ac,
    defaultWidth: "full"
  }),
  time: Nr({
    formats: ic,
    defaultWidth: "full"
  }),
  dateTime: Nr({
    formats: lc,
    defaultWidth: "full"
  })
}, uc = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, dc = (e, t, n, r) => uc[e];
function tn(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : l;
      o = e.formattingValues[i] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[l];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const fc = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, mc = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, hc = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, pc = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, gc = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, vc = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, xc = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, bc = {
  ordinalNumber: xc,
  era: tn({
    values: fc,
    defaultWidth: "wide"
  }),
  quarter: tn({
    values: mc,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: tn({
    values: hc,
    defaultWidth: "wide"
  }),
  day: tn({
    values: pc,
    defaultWidth: "wide"
  }),
  dayPeriod: tn({
    values: gc,
    defaultWidth: "wide",
    formattingValues: vc,
    defaultFormattingWidth: "wide"
  })
};
function nn(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const l = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? yc(i, (f) => f.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      wc(i, (f) => f.test(l))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(u)
    ) : u;
    const d = t.slice(l.length);
    return { value: u, rest: d };
  };
}
function wc(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function yc(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function jc(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let l = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    l = n.valueCallback ? n.valueCallback(l) : l;
    const i = t.slice(o.length);
    return { value: l, rest: i };
  };
}
const Ec = /^(\d+)(th|st|nd|rd)?/i, kc = /\d+/i, Nc = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Oc = {
  any: [/^b/i, /^(a|c)/i]
}, Sc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Cc = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Tc = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, $c = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Pc = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Mc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Rc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Fc = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Dc = {
  ordinalNumber: jc({
    matchPattern: Ec,
    parsePattern: kc,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: nn({
    matchPatterns: Nc,
    defaultMatchWidth: "wide",
    parsePatterns: Oc,
    defaultParseWidth: "any"
  }),
  quarter: nn({
    matchPatterns: Sc,
    defaultMatchWidth: "wide",
    parsePatterns: Cc,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: nn({
    matchPatterns: Tc,
    defaultMatchWidth: "wide",
    parsePatterns: $c,
    defaultParseWidth: "any"
  }),
  day: nn({
    matchPatterns: Pc,
    defaultMatchWidth: "wide",
    parsePatterns: Mc,
    defaultParseWidth: "any"
  }),
  dayPeriod: nn({
    matchPatterns: Rc,
    defaultMatchWidth: "any",
    parsePatterns: Fc,
    defaultParseWidth: "any"
  })
}, Lc = {
  code: "en-US",
  formatDistance: sc,
  formatLong: cc,
  formatRelative: dc,
  localize: bc,
  match: Dc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ac(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in);
  return Kl(n, va(n)) + 1;
}
function Ic(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), r = +An(n) - +Xl(n);
  return Math.round(r / la) + 1;
}
function ba(e, t) {
  var d, f, h, m;
  const n = Oe(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = pn(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((m = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, l = Be((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r + 1, 0, a), l.setHours(0, 0, 0, 0);
  const i = mt(l, t), c = Be((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const u = mt(c, t);
  return +n >= +i ? r + 1 : +n >= +u ? r : r - 1;
}
function _c(e, t) {
  var i, c, u, d;
  const n = pn(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = ba(e, t), a = Be((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), mt(a, t);
}
function Wc(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), r = +mt(n, t) - +_c(n, t);
  return Math.round(r / la) + 1;
}
function ue(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const gt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ue(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ue(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ue(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ue(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ue(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ue(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ue(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ue(o, t.length);
  }
}, Ht = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, gs = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return gt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = ba(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const l = a % 100;
      return ue(l, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : ue(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = ca(e);
    return ue(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return ue(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return ue(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return ue(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return gt.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return ue(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Wc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ue(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ic(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ue(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : gt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Ac(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ue(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return ue(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return ue(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return ue(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = Ht.noon : r === 0 ? o = Ht.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = Ht.evening : r >= 12 ? o = Ht.afternoon : r >= 4 ? o = Ht.morning : o = Ht.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return gt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : gt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ue(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ue(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : gt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : gt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return gt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return xs(r);
      case "XXXX":
      case "XX":
        return St(r);
      case "XXXXX":
      case "XXX":
      default:
        return St(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return xs(r);
      case "xxxx":
      case "xx":
        return St(r);
      case "xxxxx":
      case "xxx":
      default:
        return St(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + vs(r, ":");
      case "OOOO":
      default:
        return "GMT" + St(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + vs(r, ":");
      case "zzzz":
      default:
        return "GMT" + St(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return ue(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return ue(+e, t.length);
  }
};
function vs(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + ue(a, 2);
}
function xs(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ue(Math.abs(e) / 60, 2) : St(e, t);
}
function St(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ue(Math.trunc(r / 60), 2), a = ue(r % 60, 2);
  return n + o + t + a;
}
const bs = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, wa = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Bc = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return bs(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", bs(r, t)).replace("{{time}}", wa(o, t));
}, Hc = {
  p: wa,
  P: Bc
}, Vc = /^D+$/, Yc = /^Y+$/, zc = ["D", "DD", "YY", "YYYY"];
function Gc(e) {
  return Vc.test(e);
}
function Uc(e) {
  return Yc.test(e);
}
function qc(e, t, n) {
  const r = Kc(e, t, n);
  if (console.warn(r), zc.includes(e)) throw new RangeError(r);
}
function Kc(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Xc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Qc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Zc = /^'([^]*?)'?$/, Jc = /''/g, eu = /[a-zA-Z]/;
function xe(e, t, n) {
  var d, f, h, m;
  const r = pn(), o = r.locale ?? Lc, a = r.firstWeekContainsDate ?? ((f = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, l = r.weekStartsOn ?? ((m = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? 0, i = Oe(e, n == null ? void 0 : n.in);
  if (!Jl(i))
    throw new RangeError("Invalid time value");
  let c = t.match(Qc).map((p) => {
    const g = p[0];
    if (g === "p" || g === "P") {
      const x = Hc[g];
      return x(p, o.formatLong);
    }
    return p;
  }).join("").match(Xc).map((p) => {
    if (p === "''")
      return { isToken: !1, value: "'" };
    const g = p[0];
    if (g === "'")
      return { isToken: !1, value: tu(p) };
    if (gs[g])
      return { isToken: !0, value: p };
    if (g.match(eu))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + g + "`"
      );
    return { isToken: !1, value: p };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: l,
    locale: o
  };
  return c.map((p) => {
    if (!p.isToken) return p.value;
    const g = p.value;
    (Uc(g) || Gc(g)) && qc(g, t, String(e));
    const x = gs[g[0]];
    return x(i, g, o.localize, u);
  }).join("");
}
function tu(e) {
  const t = e.match(Zc);
  return t ? t[1].replace(Jc, "'") : e;
}
function nu(e, t) {
  return +Oe(e) > +Oe(t);
}
function ya(e, t, n) {
  const [r, o] = Gn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function ja(e, t) {
  return We(
    Be(e, e),
    Ql(e)
  );
}
function ru(e, t, n) {
  return qt(e, -t, n);
}
function Xr(e, t, n) {
  return un(e, -t, n);
}
function ou(e, t, n) {
  return ua(e, -t, n);
}
function su(e, t, n) {
  return da(e, -t, n);
}
function Ea(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ea(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function z() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ea(e)) && (r && (r += " "), r += t);
  return r;
}
function ka() {
  const [e, t] = F(0);
  return se(() => {
    const n = () => {
      const o = /* @__PURE__ */ new Date(), a = o.getHours(), l = o.getMinutes(), i = 28 + a * 56 + l / 60 * 56;
      t(i);
    };
    n();
    const r = setInterval(n, 6e4);
    return () => clearInterval(r);
  }, []), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "absolute left-0 right-0 border-t-2 border-red-500 z-20 pointer-events-none",
      style: { top: `${e}px` },
      children: /* @__PURE__ */ s.jsx("div", { className: "absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-red-500" })
    }
  );
}
function au({ currentDate: e, events: t, onDateChange: n, onEventClick: r, isDateDisabled: o, onSlotClick: a }) {
  const l = mt(e, { weekStartsOn: 1 }), i = Array.from({ length: 7 }, (f, h) => qt(l, h)), c = t.filter((f) => We(new Date(f.datetime), e)), u = (f) => {
    const h = new Date(f.datetime), m = h.getHours() * 60 + h.getMinutes(), p = f.endDatetime ? new Date(f.endDatetime) : new Date(h.getTime() + 60 * 60 * 1e3), g = fa(p, h), x = Math.floor(m / 5) + 2, w = Math.ceil(g / 5);
    return {
      gridRow: `${x} / span ${w}`,
      gridColumn: 1
    };
  }, d = (f) => f.toLowerCase().includes("binge") ? {
    bg: "bg-blue-100",
    hover: "hover:bg-blue-200",
    text: "text-blue-700",
    border: "border-l-4 border-blue-500"
  } : f.toLowerCase().includes("segun") || f.toLowerCase().includes("design") ? {
    bg: "bg-green-100",
    hover: "hover:bg-green-200",
    text: "text-green-700",
    border: "border-l-4 border-green-500"
  } : f.toLowerCase().includes("search") ? {
    bg: "bg-pink-100",
    hover: "hover:bg-pink-200",
    text: "text-pink-700",
    border: "border-l-4 border-pink-500"
  } : {
    bg: "bg-blue-50",
    hover: "hover:bg-blue-100",
    text: "text-blue-700",
    border: "border-l-4 border-blue-500"
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col h-full bg-white dark:bg-stone-900", children: [
    /* @__PURE__ */ s.jsx("div", { className: "flex-none border-b border-stone-200 dark:border-white/10 shadow-sm", children: /* @__PURE__ */ s.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ s.jsx("div", { className: "w-20 flex-none border-r border-stone-200 dark:border-white/5" }),
      " ",
      i.map((f, h) => {
        const m = We(f, /* @__PURE__ */ new Date()), p = We(f, e);
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => n(f),
            className: z(
              "flex-1 text-center py-2 border-l border-stone-200 dark:border-white/5 hover:bg-stone-50 dark:hover:bg-white/5",
              p && "bg-white dark:bg-blue-900"
            ),
            children: [
              /* @__PURE__ */ s.jsx("div", { className: z(
                "text-xs text-stone-500 dark:text-stone-400",
                m ? "text-blue-700" : "text-blue-700 dark:text-white",
                p && m && "font-bold"
              ), children: xe(f, "EEE") }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: z(
                    "text-lg font-medium",
                    m ? "text-blue-600" : "text-stone-900 dark:text-white",
                    p && m && "font-bold"
                  ),
                  children: xe(f, "d")
                }
              )
            ]
          },
          h
        );
      })
    ] }) }),
    /* @__PURE__ */ s.jsx("div", { className: "flex flex-1 overflow-auto", children: /* @__PURE__ */ s.jsxs("div", { className: "flex flex-1 relative min-h-[1344px]", children: [
      " ",
      /* @__PURE__ */ s.jsxs("div", { className: "w-20 flex-none border-r border-stone-200 dark:border-white/5 bg-white dark:bg-stone-900 z-10", children: [
        /* @__PURE__ */ s.jsx("div", { className: "h-7" }),
        " ",
        Array.from({ length: 24 }, (f, h) => /* @__PURE__ */ s.jsx("div", { className: "h-14 pr-2 text-right relative", children: /* @__PURE__ */ s.jsx("div", { className: "absolute top-0 -translate-y-1/2 right-2 text-xs text-stone-400 dark:text-stone-500", children: h === 0 ? "12 AM" : h < 12 ? `${h} AM` : h === 12 ? "12 PM" : `${h - 12} PM` }) }, h))
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex-1 relative", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ s.jsx("div", { className: "h-7" }),
          Array.from({ length: 24 }, (f, h) => /* @__PURE__ */ s.jsx("div", { className: "relative h-14 border-t border-stone-200 dark:border-white/5", children: /* @__PURE__ */ s.jsx(
            "div",
            {
              className: z(
                "absolute inset-0 z-0",
                o != null && o(new Date(e.setHours(h, 0, 0, 0))) ? "bg-stone-100 dark:bg-stone-800/50 cursor-not-allowed" : "cursor-pointer hover:bg-stone-50 dark:hover:bg-white/5"
              ),
              onClick: () => {
                const m = new Date(e);
                m.setHours(h, 0, 0, 0), !(o != null && o(m)) && (a == null || a(m));
              }
            }
          ) }, h)),
          We(e, /* @__PURE__ */ new Date()) && /* @__PURE__ */ s.jsx(ka, {})
        ] }),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "absolute inset-0 grid grid-cols-1 mr-4 pointer-events-none",
            style: { gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr))" },
            children: c.map((f) => {
              const h = u(f), m = d(f.name);
              return /* @__PURE__ */ s.jsx(
                "div",
                {
                  style: { gridRow: h.gridRow, gridColumn: h.gridColumn },
                  className: "mt-px relative z-10 cursor-pointer hover:opacity-90 pointer-events-auto",
                  onClick: (p) => {
                    p.stopPropagation(), r(f);
                  },
                  children: /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: z(
                        "h-full rounded p-2 text-xs overflow-hidden flex items-center",
                        m.bg,
                        m.hover,
                        m.border,
                        m.text
                      ),
                      children: /* @__PURE__ */ s.jsx("span", { className: "font-bold mr-2", children: f.name })
                    }
                  )
                },
                f.id
              );
            })
          }
        )
      ] })
    ] }) })
  ] });
}
function iu({ currentDate: e, events: t, onDateChange: n, onEventClick: r, isDateDisabled: o, onSlotClick: a }) {
  const l = mt(e, { weekStartsOn: 1 }), i = Array.from({ length: 7 }, (f, h) => qt(l, h)), c = t.filter((f) => {
    const h = new Date(f.datetime);
    return i.some((m) => We(h, m));
  }), u = (f, h) => {
    const m = new Date(f.datetime), p = m.getHours() * 60 + m.getMinutes(), g = f.endDatetime ? new Date(f.endDatetime) : new Date(m.getTime() + 60 * 60 * 1e3), x = fa(g, m), w = Math.floor(p / 5) + 2, y = Math.ceil(x / 5);
    return {
      gridRow: `${w} / span ${y}`,
      gridColumn: h + 1
    };
  }, d = (f) => f.toLowerCase().includes("binge") ? {
    bg: "bg-blue-100",
    hover: "hover:bg-blue-200",
    text: "text-blue-700",
    border: "border-l-4 border-blue-500"
  } : f.toLowerCase().includes("segun") || f.toLowerCase().includes("design") || f.toLowerCase().includes("marketing") ? {
    bg: "bg-green-100",
    hover: "hover:bg-green-200",
    text: "text-green-700",
    border: "border-l-4 border-green-500"
  } : f.toLowerCase().includes("search") || f.toLowerCase().includes("figma") ? {
    bg: "bg-pink-100",
    hover: "hover:bg-pink-200",
    text: "text-pink-700",
    border: "border-l-4 border-pink-500"
  } : f.toLowerCase().includes("marketing") || f.toLowerCase().includes("zoom") ? {
    bg: "bg-orange-100",
    hover: "hover:bg-orange-200",
    text: "text-orange-700",
    border: "border-l-4 border-orange-500"
  } : {
    bg: "bg-blue-50",
    hover: "hover:bg-blue-100",
    text: "text-blue-700",
    border: "border-l-4 border-blue-500"
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col h-full bg-white dark:bg-stone-900", children: [
    /* @__PURE__ */ s.jsx("div", { className: "flex-none border-b border-stone-200 dark:border-white/10 shadow-sm", children: /* @__PURE__ */ s.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ s.jsx("div", { className: "w-20 flex-none border-r border-stone-200 dark:border-white/5" }),
      " ",
      i.map((f, h) => {
        const m = We(f, /* @__PURE__ */ new Date()), p = We(f, e);
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => n(f),
            className: z(
              "flex-1 text-center py-2 border-l border-stone-200 dark:border-white/5 hover:bg-stone-50 dark:hover:bg-white/5",
              p && "bg-white dark:bg-blue-900"
            ),
            children: [
              /* @__PURE__ */ s.jsx("div", { className: z(
                "text-xs text-stone-500 dark:text-stone-400",
                m ? "text-blue-700" : "text-blue-700 dark:text-white",
                p && m && "font-bold"
              ), children: xe(f, "EEE") }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: z(
                    "text-lg font-medium",
                    m ? "text-blue-600" : "text-stone-900 dark:text-white",
                    p && m && "font-bold"
                  ),
                  children: xe(f, "d")
                }
              )
            ]
          },
          h
        );
      })
    ] }) }),
    /* @__PURE__ */ s.jsx("div", { className: "flex flex-1 overflow-auto", children: /* @__PURE__ */ s.jsxs("div", { className: "flex flex-1 relative min-h-[1344px]", children: [
      " ",
      /* @__PURE__ */ s.jsxs("div", { className: "w-20 flex-none border-r border-stone-100 dark:border-white/5 bg-white dark:bg-stone-900 z-10 sticky left-0", children: [
        /* @__PURE__ */ s.jsx("div", { className: "h-7" }),
        " ",
        Array.from({ length: 24 }, (f, h) => /* @__PURE__ */ s.jsx("div", { className: "h-14 pr-2 text-right relative", children: /* @__PURE__ */ s.jsx("div", { className: "absolute top-0 -translate-y-1/2 right-2 text-xs text-stone-400 dark:text-stone-500", children: h === 0 ? "12 AM" : h < 12 ? `${h} AM` : h === 12 ? "12 PM" : `${h - 12} PM` }) }, h))
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex-1 relative", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "absolute inset-0 grid grid-cols-7", children: [
          i.map((f, h) => /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "border-l border-stone-100 dark:border-white/5",
              children: [
                /* @__PURE__ */ s.jsx("div", { className: "h-7" }),
                Array.from({ length: 24 }, (m, p) => /* @__PURE__ */ s.jsx("div", { className: "relative h-14 border-t border-stone-100 dark:border-white/5", children: /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: z(
                      "absolute inset-0 z-0",
                      o != null && o(new Date(f.setHours(p, 0, 0, 0))) ? "bg-stone-100 dark:bg-stone-800/50 cursor-not-allowed" : "cursor-pointer hover:bg-stone-50 dark:hover:bg-white/5"
                    ),
                    onClick: () => {
                      const g = new Date(f);
                      g.setHours(p, 0, 0, 0), !(o != null && o(g)) && (a == null || a(g));
                    }
                  }
                ) }, p))
              ]
            },
            h
          )),
          i.some((f) => We(f, /* @__PURE__ */ new Date())) && /* @__PURE__ */ s.jsx(ka, {})
        ] }),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "absolute inset-0 grid grid-cols-7 pointer-events-none",
            style: { gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr))" },
            children: c.map((f) => {
              const h = new Date(f.datetime), m = i.findIndex((x) => We(x, h));
              if (m === -1) return null;
              const p = u(f, m), g = d(f.name);
              return /* @__PURE__ */ s.jsx(
                "div",
                {
                  style: { gridRow: p.gridRow, gridColumn: p.gridColumn },
                  className: "mx-1 mt-px relative z-10 cursor-pointer hover:opacity-90 pointer-events-auto",
                  onClick: (x) => {
                    x.stopPropagation(), r(f);
                  },
                  children: /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: z(
                        "h-full rounded p-2 text-xs overflow-hidden",
                        g.bg,
                        g.hover,
                        g.border,
                        g.text
                      ),
                      children: [
                        /* @__PURE__ */ s.jsx("div", { className: "font-semibold truncate", children: f.name }),
                        /* @__PURE__ */ s.jsx("div", { className: "text-xs opacity-75 truncate", children: f.time })
                      ]
                    }
                  )
                },
                f.id
              );
            })
          }
        )
      ] })
    ] }) })
  ] });
}
function po(e, t) {
  const n = ga(e), r = ma(e), o = mt(n, { weekStartsOn: 1 }), a = xa(r, { weekStartsOn: 1 });
  let l = pa({
    start: o,
    end: a
  });
  for (; l.length < 42; ) {
    const i = l[l.length - 1];
    l.push(qt(i, 1));
  }
  return l.map((i) => {
    const c = t.filter((u) => We(new Date(u.datetime), i));
    return {
      date: xe(i, "yyyy-MM-dd"),
      isCurrentMonth: ya(i, n),
      isToday: ja(i),
      isSelected: We(i, e),
      events: c,
      originalDate: i
    };
  });
}
function lu(e, t) {
  const n = va(e), r = rc(e);
  return nc({ start: n, end: r }).map((a) => ({
    name: xe(a, "MMMM"),
    date: a,
    days: po(a, t)
  }));
}
const Qr = {
  month: {
    previous: Xr,
    next: un
  },
  week: {
    previous: ou,
    next: ua
  },
  day: {
    previous: ru,
    next: qt
  },
  year: {
    previous: su,
    next: da
  },
  scheduled: {
    previous: Xr,
    next: un
  }
};
function ws({ currentDate: e, events: t, onDateChange: n, onViewChange: r, onEventClick: o, isDateDisabled: a }) {
  const l = po(e, t), i = (c) => c.toLowerCase().includes("binge") || c.toLowerCase().includes("figma") ? {
    bg: "bg-blue-100",
    text: "text-blue-700",
    border: "border-l-2 border-blue-500"
  } : c.toLowerCase().includes("segun") || c.toLowerCase().includes("design") ? {
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-l-2 border-green-500"
  } : c.toLowerCase().includes("search") ? {
    bg: "bg-pink-100",
    text: "text-pink-700",
    border: "border-l-2 border-pink-500"
  } : c.toLowerCase().includes("marketing") || c.toLowerCase().includes("review") ? {
    bg: "bg-orange-100",
    text: "text-orange-700",
    border: "border-l-2 border-orange-500"
  } : c.toLowerCase().includes("catch up") || c.toLowerCase().includes("workout") ? {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    border: "border-l-2 border-yellow-500"
  } : {
    bg: "bg-stone-100",
    text: "text-stone-700",
    border: "border-l-2 border-stone-500"
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col h-full bg-white dark:bg-stone-900", children: [
    /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-7 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-800/50", children: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((c) => /* @__PURE__ */ s.jsx("div", { className: "py-2 text-center text-xs font-semibold text-stone-500 dark:text-stone-400", children: c }, c)) }),
    /* @__PURE__ */ s.jsx("div", { className: "flex-1 grid grid-cols-7 grid-rows-5 lg:grid-rows-6", children: l.map((c) => {
      var u;
      return /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: z(
            "relative border-b border-r border-stone-100 dark:border-white/5 p-2 min-h-[100px]",
            !c.isCurrentMonth && "bg-stone-50/50 dark:bg-stone-800/50 text-stone-400",
            c.isCurrentMonth && "bg-white dark:bg-stone-900",
            (a == null ? void 0 : a(new Date(c.date))) && "bg-stone-100 dark:bg-stone-800/50 cursor-not-allowed opacity-75"
          ),
          onClick: () => {
            a != null && a(new Date(c.date)) || (n(c.originalDate), r("day"));
          },
          children: [
            /* @__PURE__ */ s.jsx(
              "time",
              {
                dateTime: c.date,
                className: z(
                  "flex h-6 w-6 items-center justify-center rounded-full text-sm",
                  c.isToday && "bg-blue-600 font-semibold text-white",
                  !c.isToday && c.isCurrentMonth && "text-stone-900 dark:text-white",
                  !c.isToday && !c.isCurrentMonth && "text-stone-400 dark:text-stone-500"
                ),
                children: (u = c.date.split("-").pop()) == null ? void 0 : u.replace(/^0/, "")
              }
            ),
            /* @__PURE__ */ s.jsxs("div", { className: "mt-1 space-y-1", children: [
              c.events.slice(0, 3).map((d) => {
                const f = i(d.name);
                return /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    onClick: (h) => {
                      h.stopPropagation(), o(d);
                    },
                    className: z(
                      "px-1.5 py-0.5 text-xs rounded-sm truncate cursor-pointer hover:opacity-80",
                      f.bg,
                      f.text,
                      f.border
                    ),
                    children: [
                      /* @__PURE__ */ s.jsx("span", { className: "font-medium", children: d.name }),
                      /* @__PURE__ */ s.jsx("span", { className: "ml-1 opacity-75 hidden xl:inline", children: d.time })
                    ]
                  },
                  d.id
                );
              }),
              c.events.length > 3 && /* @__PURE__ */ s.jsxs("div", { className: "text-xs text-stone-500 pl-1", children: [
                c.events.length - 3,
                " more"
              ] })
            ] })
          ]
        },
        c.date
      );
    }) })
  ] });
}
function cu({ currentDate: e, events: t, onDateChange: n, onViewChange: r }) {
  const o = lu(e, t), a = (l) => {
    if (l.length === 0) return {};
    const i = l[0].name;
    return i.toLowerCase().includes("binge") || i.toLowerCase().includes("figma") ? { bg: "bg-blue-100", text: "text-blue-700" } : i.toLowerCase().includes("segun") || i.toLowerCase().includes("design") ? { bg: "bg-green-100", text: "text-green-700" } : i.toLowerCase().includes("search") ? { bg: "bg-pink-100", text: "text-pink-700" } : i.toLowerCase().includes("marketing") || i.toLowerCase().includes("review") ? { bg: "bg-orange-100", text: "text-orange-700" } : { bg: "bg-stone-100", text: "text-stone-900" };
  };
  return /* @__PURE__ */ s.jsx("div", { className: "bg-white dark:bg-stone-900 overflow-auto h-full", children: /* @__PURE__ */ s.jsx("div", { className: "mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-4 xl:px-8", children: o.map((l) => /* @__PURE__ */ s.jsxs("section", { className: "text-center", children: [
    /* @__PURE__ */ s.jsx("h2", { className: "text-sm font-semibold text-stone-900 dark:text-white", children: l.name }),
    /* @__PURE__ */ s.jsxs("div", { className: "mt-6 grid grid-cols-7 text-xs/6 text-stone-500 dark:text-stone-400", children: [
      /* @__PURE__ */ s.jsx("div", { children: "M" }),
      /* @__PURE__ */ s.jsx("div", { children: "T" }),
      /* @__PURE__ */ s.jsx("div", { children: "W" }),
      /* @__PURE__ */ s.jsx("div", { children: "T" }),
      /* @__PURE__ */ s.jsx("div", { children: "F" }),
      /* @__PURE__ */ s.jsx("div", { children: "S" }),
      /* @__PURE__ */ s.jsx("div", { children: "S" })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-stone-200 text-sm shadow-sm ring-1 ring-stone-200 dark:bg-white/10 dark:shadow-none dark:ring-white/10 min-h-[192px] grid-rows-[repeat(6,minmax(0,1fr))]", children: l.days.map((i, c) => {
      var f;
      const u = a(i.events), d = i.events.length > 0;
      return /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            n(i.originalDate), r("day");
          },
          className: z(
            i.isCurrentMonth ? "bg-white dark:bg-stone-900" : "bg-stone-50 dark:bg-stone-800",
            (i.isSelected || i.isToday) && "font-semibold",
            i.isSelected && "text-white",
            !i.isSelected && i.isCurrentMonth && !i.isToday && "text-stone-900 dark:text-white",
            !i.isSelected && !i.isCurrentMonth && !i.isToday && "text-stone-400 dark:text-stone-500",
            i.isToday && !i.isSelected && "text-blue-600 dark:text-blue-400",
            c === 0 && "rounded-tl-lg",
            c === 6 && "rounded-tr-lg",
            c === l.days.length - 7 && "rounded-bl-lg",
            c === l.days.length - 1 && "rounded-br-lg",
            "py-1.5 hover:bg-stone-100 focus:z-10 dark:hover:bg-stone-700 relative"
          ),
          children: /* @__PURE__ */ s.jsx(
            "time",
            {
              dateTime: i.date,
              className: z(
                "mx-auto flex size-7 items-center justify-center rounded-full",
                i.isSelected && i.isToday && "bg-blue-600",
                i.isSelected && !i.isToday && "bg-stone-900 dark:bg-white dark:text-stone-900",
                !i.isSelected && !i.isToday && d && u.bg,
                !i.isSelected && !i.isToday && d && u.text
              ),
              children: (f = i.date.split("-").pop()) == null ? void 0 : f.replace(/^0/, "")
            }
          )
        },
        i.date
      );
    }) })
  ] }, l.name)) }) });
}
function uu({ currentDate: e, events: t, onEventClick: n }) {
  const o = [...t].sort((c, u) => new Date(c.datetime).getTime() - new Date(u.datetime).getTime()).filter((c) => {
    const u = new Date(c.datetime);
    return nu(u, dn(e)) || We(u, e);
  }), a = {};
  o.forEach((c) => {
    const u = xe(new Date(c.datetime), "yyyy-MM-dd");
    a[u] || (a[u] = []), a[u].push(c);
  });
  const l = Object.keys(a), i = (c) => c.toLowerCase().includes("binge") ? "bg-blue-500" : c.toLowerCase().includes("segun") || c.toLowerCase().includes("design") ? "bg-green-500" : c.toLowerCase().includes("search") ? "bg-pink-500" : "bg-blue-500";
  return /* @__PURE__ */ s.jsx("div", { className: "flex flex-col h-full bg-white dark:bg-stone-900 overflow-auto", children: l.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-center h-full text-stone-500 dark:text-stone-400", children: "No upcoming events scheduled." }) : /* @__PURE__ */ s.jsx("div", { className: "divide-y divide-stone-200 dark:divide-white/10", children: l.map((c) => {
    const u = new Date(c), d = a[c];
    return /* @__PURE__ */ s.jsxs("div", { className: "flex flex-row py-4 px-6 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors", children: [
      /* @__PURE__ */ s.jsx("div", { className: "w-32 flex-none pt-1", children: /* @__PURE__ */ s.jsxs("div", { className: "text-sm font-bold text-stone-900 dark:text-white uppercase", children: [
        xe(u, "d"),
        " ",
        /* @__PURE__ */ s.jsx("span", { className: "text-stone-500 dark:text-stone-400 font-normal", children: xe(u, "MMM, EEE") })
      ] }) }),
      /* @__PURE__ */ s.jsx("div", { className: "flex-1 space-y-3", children: d.map((f) => /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "group flex items-center gap-4 cursor-pointer",
          onClick: () => n(f),
          children: [
            /* @__PURE__ */ s.jsx("div", { className: z("w-2.5 h-2.5 rounded-full flex-none", i(f.name)) }),
            /* @__PURE__ */ s.jsx("div", { className: "w-32 flex-none text-sm text-stone-500 dark:text-stone-400", children: f.allDay ? "All day" : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              xe(new Date(f.datetime), "h:mm"),
              f.endDatetime && ` – ${xe(new Date(f.endDatetime), "h:mm a")}`
            ] }) }),
            /* @__PURE__ */ s.jsx("div", { className: "text-sm font-medium text-stone-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: f.name })
          ]
        },
        f.id
      )) })
    ] }, c);
  }) }) });
}
function du({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M14 10a.75.75 0 0 0-.75-.75H3.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 14 10Z",
    clipRule: "evenodd"
  }));
}
const fu = /* @__PURE__ */ j.forwardRef(du);
function mu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const Na = /* @__PURE__ */ j.forwardRef(mu);
function hu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const pu = /* @__PURE__ */ j.forwardRef(hu);
function gu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  }));
}
const go = /* @__PURE__ */ j.forwardRef(gu);
function vu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const vo = /* @__PURE__ */ j.forwardRef(vu);
function xu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z",
    clipRule: "evenodd"
  }));
}
const bu = /* @__PURE__ */ j.forwardRef(xu);
function wu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
  }));
}
const Oa = /* @__PURE__ */ j.forwardRef(wu);
function yu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
  }));
}
const Sa = /* @__PURE__ */ j.forwardRef(yu);
function ju({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
  }));
}
const Ca = /* @__PURE__ */ j.forwardRef(ju);
function Eu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
  }));
}
const Ta = /* @__PURE__ */ j.forwardRef(Eu);
function ku({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
  }));
}
const $a = /* @__PURE__ */ j.forwardRef(ku);
function Nu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const Pa = /* @__PURE__ */ j.forwardRef(Nu);
function Ou({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));
}
const Qe = /* @__PURE__ */ j.forwardRef(Ou);
function Su({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const Ma = /* @__PURE__ */ j.forwardRef(Su);
function Cu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const Tu = /* @__PURE__ */ j.forwardRef(Cu);
function $u({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
  }));
}
const Ra = /* @__PURE__ */ j.forwardRef($u);
function Pu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
  }));
}
const Fa = /* @__PURE__ */ j.forwardRef(Pu);
function Mu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }), /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
  }));
}
const Da = /* @__PURE__ */ j.forwardRef(Mu);
function Ru({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
  }));
}
const La = /* @__PURE__ */ j.forwardRef(Ru);
function Fu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
  }));
}
const xo = /* @__PURE__ */ j.forwardRef(Fu);
function Du({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
  }));
}
const Aa = /* @__PURE__ */ j.forwardRef(Du);
function Lu({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ j.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ j.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const sn = /* @__PURE__ */ j.forwardRef(Lu), Ia = typeof document < "u" ? S.useLayoutEffect : () => {
};
var Or;
const Au = (Or = S.useInsertionEffect) !== null && Or !== void 0 ? Or : Ia;
function Iu(e) {
  const t = G(null);
  return Au(() => {
    t.current = e;
  }, [
    e
  ]), re((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const Nt = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Tt = (e) => e && "window" in e && e.window === e ? e : Nt(e).defaultView || window;
function _u(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Wu(e) {
  return _u(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Bu = !1;
function bo() {
  return Bu;
}
function _a(e, t) {
  if (!bo()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Wu(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const Zr = (e = document) => {
  var t;
  if (!bo()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function Wa(e) {
  return bo() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Un(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(n) && n.some((r) => e.test(r.brand)) || e.test(window.navigator.userAgent);
}
function wo(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function pt(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const yo = pt(function() {
  return wo(/^Mac/i);
}), Hu = pt(function() {
  return wo(/^iPhone/i);
}), Vu = pt(function() {
  return wo(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  yo() && navigator.maxTouchPoints > 1;
}), Yu = pt(function() {
  return Hu() || Vu();
});
pt(function() {
  return yo() || Yu();
});
pt(function() {
  return Un(/AppleWebKit/i) && !zu();
});
const zu = pt(function() {
  return Un(/Chrome/i);
}), Gu = pt(function() {
  return Un(/Android/i);
});
pt(function() {
  return Un(/Firefox/i);
});
function Ba() {
  let e = G(/* @__PURE__ */ new Map()), t = re((o, a, l, i) => {
    let c = i != null && i.once ? (...u) => {
      e.current.delete(l), l(...u);
    } : l;
    e.current.set(l, {
      type: a,
      eventTarget: o,
      fn: c,
      options: i
    }), o.addEventListener(a, c, i);
  }, []), n = re((o, a, l, i) => {
    var c;
    let u = ((c = e.current.get(l)) === null || c === void 0 ? void 0 : c.fn) || l;
    o.removeEventListener(a, u, i), e.current.delete(l);
  }, []), r = re(() => {
    e.current.forEach((o, a) => {
      n(o.eventTarget, o.type, a, o.options);
    });
  }, [
    n
  ]);
  return se(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Uu(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : Gu() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Ha(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function qu(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Va(e) {
  let t = G({
    isFocused: !1,
    observer: null
  });
  Ia(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = Iu((r) => {
    e == null || e(r);
  });
  return re((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, a = (l) => {
        if (t.current.isFocused = !1, o.disabled) {
          let i = Ha(l);
          n(i);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", a, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var l;
          (l = t.current.observer) === null || l === void 0 || l.disconnect();
          let i = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: i
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: i
          }));
        }
      }), t.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
let Ku = !1, gn = null, Jr = /* @__PURE__ */ new Set(), an = /* @__PURE__ */ new Map(), Pt = !1, eo = !1;
const Xu = {
  Tab: !0,
  Escape: !0
};
function jo(e, t) {
  for (let n of Jr) n(e, t);
}
function Qu(e) {
  return !(e.metaKey || !yo() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function In(e) {
  Pt = !0, Qu(e) && (gn = "keyboard", jo("keyboard", e));
}
function Ze(e) {
  gn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Pt = !0, jo("pointer", e));
}
function Ya(e) {
  Uu(e) && (Pt = !0, gn = "virtual");
}
function za(e) {
  e.target === window || e.target === document || Ku || !e.isTrusted || (!Pt && !eo && (gn = "virtual", jo("virtual", e)), Pt = !1, eo = !1);
}
function Ga() {
  Pt = !1, eo = !0;
}
function to(e) {
  if (typeof window > "u" || typeof document > "u" || an.get(Tt(e))) return;
  const t = Tt(e), n = Nt(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Pt = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", In, !0), n.addEventListener("keyup", In, !0), n.addEventListener("click", Ya, !0), t.addEventListener("focus", za, !0), t.addEventListener("blur", Ga, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", Ze, !0), n.addEventListener("pointermove", Ze, !0), n.addEventListener("pointerup", Ze, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", Ze, !0), n.addEventListener("mousemove", Ze, !0), n.addEventListener("mouseup", Ze, !0)), t.addEventListener("beforeunload", () => {
    Ua(e);
  }, {
    once: !0
  }), an.set(t, {
    focus: r
  });
}
const Ua = (e, t) => {
  const n = Tt(e), r = Nt(e);
  t && r.removeEventListener("DOMContentLoaded", t), an.has(n) && (n.HTMLElement.prototype.focus = an.get(n).focus, r.removeEventListener("keydown", In, !0), r.removeEventListener("keyup", In, !0), r.removeEventListener("click", Ya, !0), n.removeEventListener("focus", za, !0), n.removeEventListener("blur", Ga, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", Ze, !0), r.removeEventListener("pointermove", Ze, !0), r.removeEventListener("pointerup", Ze, !0)) : process.env.NODE_ENV === "test" && (r.removeEventListener("mousedown", Ze, !0), r.removeEventListener("mousemove", Ze, !0), r.removeEventListener("mouseup", Ze, !0)), an.delete(n));
};
function Zu(e) {
  const t = Nt(e);
  let n;
  return t.readyState !== "loading" ? to(e) : (n = () => {
    to(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Ua(e, n);
}
typeof document < "u" && Zu();
function qa() {
  return gn !== "pointer";
}
const Ju = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function ed(e, t, n) {
  let r = Nt(n == null ? void 0 : n.target);
  const o = typeof window < "u" ? Tt(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, a = typeof window < "u" ? Tt(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? Tt(n == null ? void 0 : n.target).HTMLElement : HTMLElement, i = typeof window < "u" ? Tt(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !Ju.has(r.activeElement.type) || r.activeElement instanceof a || r.activeElement instanceof l && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof i && !Xu[n.key]);
}
function td(e, t, n) {
  to(), se(() => {
    let r = (o, a) => {
      ed(!!(n != null && n.isTextInput), o, a) && e(qa());
    };
    return Jr.add(r), () => {
      Jr.delete(r);
    };
  }, t);
}
function nd(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const a = re((c) => {
    if (c.target === c.currentTarget)
      return r && r(c), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = Va(a), i = re((c) => {
    const u = Nt(c.target), d = u ? Zr(u) : Zr();
    c.target === c.currentTarget && d === Wa(c.nativeEvent) && (n && n(c), o && o(!0), l(c));
  }, [
    o,
    n,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? i : void 0,
      onBlur: !t && (r || o) ? a : void 0
    }
  };
}
function rd(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, a = G({
    isFocusWithin: !1
  }), { addGlobalListener: l, removeAllGlobalListeners: i } = Ba(), c = re((f) => {
    f.currentTarget.contains(f.target) && a.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (a.current.isFocusWithin = !1, i(), n && n(f), o && o(!1));
  }, [
    n,
    o,
    a,
    i
  ]), u = Va(c), d = re((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const h = Nt(f.target), m = Zr(h);
    if (!a.current.isFocusWithin && m === Wa(f.nativeEvent)) {
      r && r(f), o && o(!0), a.current.isFocusWithin = !0, u(f);
      let p = f.currentTarget;
      l(h, "focus", (g) => {
        if (a.current.isFocusWithin && !_a(p, g.target)) {
          let x = new h.defaultView.FocusEvent("blur", {
            relatedTarget: g.target
          });
          qu(x, p);
          let w = Ha(x);
          c(w);
        }
      }, {
        capture: !0
      });
    }
  }, [
    r,
    o,
    u,
    l,
    c
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: d,
      onBlur: c
    }
  };
}
let _n = !1, Sn = 0;
function no() {
  _n = !0, setTimeout(() => {
    _n = !1;
  }, 50);
}
function ys(e) {
  e.pointerType === "touch" && no();
}
function od() {
  if (!(typeof document > "u"))
    return Sn === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", ys) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", no)), Sn++, () => {
      Sn--, !(Sn > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", ys) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", no));
    };
}
function qn(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [a, l] = F(!1), i = G({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  se(od, []);
  let { addGlobalListener: c, removeAllGlobalListeners: u } = Ba(), { hoverProps: d, triggerHoverEnd: f } = ge(() => {
    let h = (g, x) => {
      if (i.pointerType = x, o || x === "touch" || i.isHovered || !g.currentTarget.contains(g.target)) return;
      i.isHovered = !0;
      let w = g.currentTarget;
      i.target = w, c(Nt(g.target), "pointerover", (y) => {
        i.isHovered && i.target && !_a(i.target, y.target) && m(y, y.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: w,
        pointerType: x
      }), n && n(!0), l(!0);
    }, m = (g, x) => {
      let w = i.target;
      i.pointerType = "", i.target = null, !(x === "touch" || !i.isHovered || !w) && (i.isHovered = !1, u(), r && r({
        type: "hoverend",
        target: w,
        pointerType: x
      }), n && n(!1), l(!1));
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (g) => {
      _n && g.pointerType === "mouse" || h(g, g.pointerType);
    }, p.onPointerLeave = (g) => {
      !o && g.currentTarget.contains(g.target) && m(g, g.pointerType);
    }) : process.env.NODE_ENV === "test" && (p.onTouchStart = () => {
      i.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (g) => {
      !i.ignoreEmulatedMouseEvents && !_n && h(g, "mouse"), i.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (g) => {
      !o && g.currentTarget.contains(g.target) && m(g, "mouse");
    }), {
      hoverProps: p,
      triggerHoverEnd: m
    };
  }, [
    t,
    n,
    r,
    o,
    i,
    c,
    u
  ]);
  return se(() => {
    o && f({
      currentTarget: i.target
    }, i.pointerType);
  }, [
    o
  ]), {
    hoverProps: d,
    isHovered: a
  };
}
function Kn(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = G({
    isFocused: !1,
    isFocusVisible: t || qa()
  }), [a, l] = F(!1), [i, c] = F(() => o.current.isFocused && o.current.isFocusVisible), u = re(() => c(o.current.isFocused && o.current.isFocusVisible), []), d = re((m) => {
    o.current.isFocused = m, l(m), u();
  }, [
    u
  ]);
  td((m) => {
    o.current.isFocusVisible = m, u();
  }, [], {
    isTextInput: n
  });
  let { focusProps: f } = nd({
    isDisabled: r,
    onFocusChange: d
  }), { focusWithinProps: h } = rd({
    isDisabled: !r,
    onFocusWithinChange: d
  });
  return {
    isFocused: a,
    isFocusVisible: i,
    focusProps: r ? h : f
  };
}
var sd = Object.defineProperty, ad = (e, t, n) => t in e ? sd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Sr = (e, t, n) => (ad(e, typeof t != "symbol" ? t + "" : t, n), n);
let id = class {
  constructor() {
    Sr(this, "current", this.detect()), Sr(this, "handoffState", "pending"), Sr(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, nt = new id();
function At(e) {
  var t;
  return nt.isServer ? null : e == null ? document : (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function yt(e) {
  var t, n;
  return nt.isServer ? null : e == null ? document : (n = (t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) != null ? n : document;
}
function Mt(e) {
  var t, n;
  return (n = (t = yt(e)) == null ? void 0 : t.activeElement) != null ? n : null;
}
function Ka(e) {
  return Mt(e) === e;
}
function Xn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ue() {
  let e = [], t = { addEventListener(n, r, o, a) {
    return n.addEventListener(r, o, a), t.add(() => n.removeEventListener(r, o, a));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return Xn(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, o) {
    let a = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: a });
    });
  }, group(n) {
    let r = Ue();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let o of e.splice(r, 1)) o();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
function it() {
  let [e] = F(Ue);
  return se(() => () => e.dispose(), [e]), e;
}
let be = (e, t) => {
  nt.isServer ? se(e, t) : mo(e, t);
};
function ot(e) {
  let t = G(e);
  return be(() => {
    t.current = e;
  }, [e]), t;
}
let I = function(e) {
  let t = ot(e);
  return S.useCallback((...n) => t.current(...n), [t]);
};
function ld(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function cd(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function Qn({ disabled: e = !1 } = {}) {
  let t = G(null), [n, r] = F(!1), o = it(), a = I(() => {
    t.current = null, r(!1), o.dispose();
  }), l = I((i) => {
    if (o.dispose(), t.current === null) {
      t.current = i.currentTarget, r(!0);
      {
        let c = At(i.currentTarget);
        o.addEventListener(c, "pointerup", a, !1), o.addEventListener(c, "pointermove", (u) => {
          if (t.current) {
            let d = ld(u);
            r(cd(d, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(c, "pointercancel", a, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: a, onClick: a } };
}
function Me(e) {
  return ge(() => e, Object.values(e));
}
let ud = ye(void 0);
function vn() {
  return de(ud);
}
function ro(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Se(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Se), r;
}
var st = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(st || {}), bt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(bt || {});
function he() {
  let e = fd();
  return re((t) => dd({ mergeRefs: e, ...t }), [e]);
}
function dd({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: a = !0, name: l, mergeRefs: i }) {
  i = i ?? md;
  let c = Xa(t, e);
  if (a) return Cn(c, n, r, l, i);
  let u = o ?? 0;
  if (u & 2) {
    let { static: d = !1, ...f } = c;
    if (d) return Cn(f, n, r, l, i);
  }
  if (u & 1) {
    let { unmount: d = !0, ...f } = c;
    return Se(d ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Cn({ ...f, hidden: !0, style: { display: "none" } }, n, r, l, i);
    } });
  }
  return Cn(c, n, r, l, i);
}
function Cn(e, t = {}, n, r, o) {
  let { as: a = n, children: l, refName: i = "ref", ...c } = Cr(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [i]: e.ref } : {}, d = typeof l == "function" ? l(t) : l;
  "className" in c && c.className && typeof c.className == "function" && (c.className = c.className(t)), c["aria-labelledby"] && c["aria-labelledby"] === c.id && (c["aria-labelledby"] = void 0);
  let f = {};
  if (t) {
    let h = !1, m = [];
    for (let [p, g] of Object.entries(t)) typeof g == "boolean" && (h = !0), g === !0 && m.push(p.replace(/([A-Z])/g, (x) => `-${x.toLowerCase()}`));
    if (h) {
      f["data-headlessui-state"] = m.join(" ");
      for (let p of m) f[`data-${p}`] = "";
    }
  }
  if (ln(a) && (Object.keys(vt(c)).length > 0 || Object.keys(vt(f)).length > 0)) if (!ho(d) || Array.isArray(d) && d.length > 1 || pd(d)) {
    if (Object.keys(vt(c)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(vt(c)).concat(Object.keys(vt(f))).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
  } else {
    let h = d.props, m = h == null ? void 0 : h.className, p = typeof m == "function" ? (...w) => ro(m(...w), c.className) : ro(m, c.className), g = p ? { className: p } : {}, x = Xa(d.props, vt(Cr(c, ["ref"])));
    for (let w in f) w in x && delete f[w];
    return aa(d, Object.assign({}, x, f, u, { ref: o(hd(d), u.ref) }, g));
  }
  return Wl(a, Object.assign({}, Cr(c, ["ref"]), !ln(a) && u, !ln(a) && f), d);
}
function fd() {
  let e = G([]), t = re((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function md(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Xa(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(o) => {
    var a;
    return (a = o == null ? void 0 : o.preventDefault) == null ? void 0 : a.call(o);
  }]);
  for (let r in n) Object.assign(t, { [r](o, ...a) {
    let l = n[r];
    for (let i of l) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      i(o, ...a);
    }
  } });
  return t;
}
function Rt(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  for (let r in n) Object.assign(t, { [r](...o) {
    let a = n[r];
    for (let l of a) l == null || l(...o);
  } });
  return t;
}
function fe(e) {
  var t;
  return Object.assign(_l(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function vt(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Cr(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function hd(e) {
  return S.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function ln(e) {
  return e === ce || e === Symbol.for("react.fragment");
}
function pd(e) {
  return ln(e.type);
}
function Eo(e, t, n) {
  let [r, o] = F(n), a = e !== void 0, l = G(a), i = G(!1), c = G(!1);
  return a && !l.current && !i.current ? (i.current = !0, l.current = a, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !a && l.current && !c.current && (c.current = !0, l.current = a, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [a ? e : r, I((u) => (a || Ln(() => o(u)), t == null ? void 0 : t(u)))];
}
function ko(e) {
  let [t] = F(e);
  return t;
}
function Qa(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) Ja(n, Za(t, r), o);
  return n;
}
function Za(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ja(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) Ja(e, Za(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : gd(n) && !ho(n) && Qa(n, t, e);
}
function No(e) {
  var t, n;
  let r = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (r) {
    for (let o of r.elements) if (o !== e && (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image")) {
      o.click();
      return;
    }
    (n = r.requestSubmit) == null || n.call(r);
  }
}
function gd(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
  let t = Object.getPrototypeOf(e);
  return t === null || Object.getPrototypeOf(t) === null;
}
let vd = "span";
var ht = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ht || {});
function xd(e, t) {
  var n;
  let { features: r = 1, ...o } = e, a = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return he()({ ourProps: a, theirProps: o, slot: {}, defaultTag: vd, name: "Hidden" });
}
let jt = fe(xd), bd = ye(null);
function wd({ children: e }) {
  let t = de(bd);
  if (!t) return S.createElement(S.Fragment, null, e);
  let { target: n } = t;
  return n ? ia(S.createElement(S.Fragment, null, e), n) : null;
}
function Oo({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [a, l] = F(null), i = it();
  return se(() => {
    if (r && a) return i.addEventListener(a, "reset", r);
  }, [a, t, r]), S.createElement(wd, null, S.createElement(yd, { setForm: l, formId: t }), Qa(e).map(([c, u]) => S.createElement(jt, { features: ht.Hidden, ...vt({ key: c, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: c, value: u, ...o }) })));
}
function yd({ setForm: e, formId: t }) {
  return se(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : S.createElement(jt, { features: ht.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let jd = ye(void 0);
function Zn() {
  return de(jd);
}
function ei(e) {
  return typeof e != "object" || e === null ? !1 : "nodeType" in e;
}
function ut(e) {
  return ei(e) && "tagName" in e;
}
function Ae(e) {
  return ut(e) && "accessKey" in e;
}
function tt(e) {
  return ut(e) && "tabIndex" in e;
}
function Ed(e) {
  return ut(e) && "style" in e;
}
function kd(e) {
  return Ae(e) && e.nodeName === "IFRAME";
}
function ti(e) {
  return Ae(e) && e.nodeName === "INPUT";
}
function oo(e) {
  return Ae(e) && e.nodeName === "LABEL";
}
function Nd(e) {
  return Ae(e) && e.nodeName === "FIELDSET";
}
function ni(e) {
  return Ae(e) && e.nodeName === "LEGEND";
}
function Od(e) {
  return ut(e) ? e.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : !1;
}
function zt(e) {
  let t = e.parentElement, n = null;
  for (; t && !Nd(t); ) ni(t) && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Sd(n) ? !1 : r;
}
function Sd(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (ni(t)) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let ri = Symbol();
function oi(e, t = !0) {
  return Object.assign(e, { [ri]: t });
}
function we(...e) {
  let t = G(e);
  se(() => {
    t.current = e;
  }, [e]);
  let n = I((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[ri])) ? void 0 : n;
}
let Jn = ye(null);
Jn.displayName = "DescriptionContext";
function si() {
  let e = de(Jn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, si), t;
  }
  return e;
}
function So() {
  var e, t;
  return (t = (e = de(Jn)) == null ? void 0 : e.value) != null ? t : void 0;
}
function ai() {
  let [e, t] = F([]);
  return [e.length > 0 ? e.join(" ") : void 0, ge(() => function(n) {
    let r = I((a) => (t((l) => [...l, a]), () => t((l) => {
      let i = l.slice(), c = i.indexOf(a);
      return c !== -1 && i.splice(c, 1), i;
    }))), o = ge(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return S.createElement(Jn.Provider, { value: o }, n.children);
  }, [t])];
}
let Cd = "p";
function Td(e, t) {
  let n = Re(), r = vn(), { id: o = `headlessui-description-${n}`, ...a } = e, l = si(), i = we(t);
  be(() => l.register(o), [o, l.register]);
  let c = Me({ ...l.slot, disabled: r || !1 }), u = { ref: i, ...l.props, id: o };
  return he()({ ourProps: u, theirProps: a, slot: c, defaultTag: Cd, name: l.name || "Description" });
}
let $d = fe(Td), ii = Object.assign($d, {});
var le = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(le || {});
let er = ye(null);
er.displayName = "LabelContext";
function li() {
  let e = de(er);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, li), t;
  }
  return e;
}
function tr(e) {
  var t, n, r;
  let o = (n = (t = de(er)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function ci({ inherit: e = !1 } = {}) {
  let t = tr(), [n, r] = F([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, ge(() => function(a) {
    let l = I((c) => (r((u) => [...u, c]), () => r((u) => {
      let d = u.slice(), f = d.indexOf(c);
      return f !== -1 && d.splice(f, 1), d;
    }))), i = ge(() => ({ register: l, slot: a.slot, name: a.name, props: a.props, value: a.value }), [l, a.slot, a.name, a.props, a.value]);
    return S.createElement(er.Provider, { value: i }, a.children);
  }, [r])];
}
let Pd = "label";
function Md(e, t) {
  var n;
  let r = Re(), o = li(), a = Zn(), l = vn(), { id: i = `headlessui-label-${r}`, htmlFor: c = a ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: u = !1, ...d } = e, f = we(t);
  be(() => o.register(i), [i, o.register]);
  let h = I((g) => {
    let x = g.currentTarget;
    if (!(g.target !== g.currentTarget && Od(g.target)) && (oo(x) && g.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(g), oo(x))) {
      let w = document.getElementById(x.htmlFor);
      if (w) {
        let y = w.getAttribute("disabled");
        if (y === "true" || y === "") return;
        let b = w.getAttribute("aria-disabled");
        if (b === "true" || b === "") return;
        (ti(w) && (w.type === "file" || w.type === "radio" || w.type === "checkbox") || w.role === "radio" || w.role === "checkbox" || w.role === "switch") && w.click(), w.focus({ preventScroll: !0 });
      }
    }
  }), m = Me({ ...o.slot, disabled: l || !1 }), p = { ref: f, ...o.props, id: i, htmlFor: c, onClick: h };
  return u && ("onClick" in p && (delete p.htmlFor, delete p.onClick), "onClick" in d && delete d.onClick), he()({ ourProps: p, theirProps: d, slot: m, defaultTag: c ? Pd : "div", name: o.name || "Label" });
}
let Rd = fe(Md), ui = Object.assign(Rd, {}), Fd = "span";
function Dd(e, t) {
  let n = Re(), r = Zn(), o = vn(), { id: a = r || `headlessui-checkbox-${n}`, disabled: l = o || !1, autoFocus: i = !1, checked: c, defaultChecked: u, onChange: d, name: f, value: h, form: m, indeterminate: p = !1, tabIndex: g = 0, ...x } = e, w = ko(u), [y, b] = Eo(c, d, w ?? !1), N = tr(), O = So(), R = it(), [M, U] = F(!1), q = I(() => {
    U(!0), b == null || b(!y), R.nextFrame(() => {
      U(!1);
    });
  }), P = I((E) => {
    if (zt(E.currentTarget)) return E.preventDefault();
    E.preventDefault(), q();
  }), B = I((E) => {
    E.key === le.Space ? (E.preventDefault(), q()) : E.key === le.Enter && No(E.currentTarget);
  }), K = I((E) => E.preventDefault()), { isFocusVisible: A, focusProps: $ } = Kn({ autoFocus: i }), { isHovered: L, hoverProps: V } = qn({ isDisabled: l }), { pressed: X, pressProps: W } = Qn({ disabled: l }), H = Rt({ ref: t, id: a, role: "checkbox", "aria-checked": p ? "mixed" : y ? "true" : "false", "aria-labelledby": N, "aria-describedby": O, "aria-disabled": l ? !0 : void 0, indeterminate: p ? "true" : void 0, tabIndex: l ? void 0 : g, onKeyUp: l ? void 0 : B, onKeyPress: l ? void 0 : K, onClick: l ? void 0 : P }, $, V, W), Z = Me({ checked: y, disabled: l, hover: L, focus: A, active: X, indeterminate: p, changing: M, autofocus: i }), Y = re(() => {
    if (w !== void 0) return b == null ? void 0 : b(w);
  }, [b, w]), te = he();
  return S.createElement(S.Fragment, null, f != null && S.createElement(Oo, { disabled: l, data: { [f]: h || "on" }, overrides: { type: "checkbox", checked: y }, form: m, onReset: Y }), te({ ourProps: H, theirProps: x, slot: Z, defaultTag: Fd, name: "Checkbox" }));
}
let Ld = fe(Dd), Ad = ye(() => {
});
function Co({ value: e, children: t }) {
  return S.createElement(Ad.Provider, { value: e }, t);
}
function Id(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function _d(e = Id) {
  return re((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function js(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function di(e, t, n = !1) {
  let [r, o] = F(() => js(t));
  return be(() => {
    if (!t || !e) return;
    let a = Ue();
    return a.requestAnimationFrame(function l() {
      a.requestAnimationFrame(l), o((i) => {
        let c = js(t);
        return c.width === i.width && c.height === i.height ? i : c;
      });
    }), () => {
      a.dispose();
    };
  }, [t, e]), n ? { width: `${r.width}px`, height: `${r.height}px` } : r;
}
var fi = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(fi || {});
function Wd(e) {
  let t = G(null), n = I((o) => {
    t.current = o.pointerType, !zt(o.currentTarget) && o.pointerType === "mouse" && o.button === fi.Left && (o.preventDefault(), e(o));
  }), r = I((o) => {
    t.current !== "mouse" && (zt(o.currentTarget) || e(o));
  });
  return { onPointerDown: n, onClick: r };
}
let mi = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
var Bd = Object.defineProperty, Hd = (e, t, n) => t in e ? Bd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Vd = (e, t, n) => (Hd(e, t + "", n), n), hi = (e, t, n) => {
  if (!t.has(e)) throw TypeError("Cannot " + n);
}, Xe = (e, t, n) => (hi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Tr = (e, t, n) => {
  if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Es = (e, t, n, r) => (hi(e, t, "write to private field"), t.set(e, n), n), et, rn, on;
let To = class {
  constructor(t) {
    Tr(this, et, {}), Tr(this, rn, new mi(() => /* @__PURE__ */ new Set())), Tr(this, on, /* @__PURE__ */ new Set()), Vd(this, "disposables", Ue()), Es(this, et, t), nt.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return Xe(this, et);
  }
  subscribe(t, n) {
    if (nt.isServer) return () => {
    };
    let r = { selector: t, callback: n, current: t(Xe(this, et)) };
    return Xe(this, on).add(r), this.disposables.add(() => {
      Xe(this, on).delete(r);
    });
  }
  on(t, n) {
    return nt.isServer ? () => {
    } : (Xe(this, rn).get(t).add(n), this.disposables.add(() => {
      Xe(this, rn).get(t).delete(n);
    }));
  }
  send(t) {
    let n = this.reduce(Xe(this, et), t);
    if (n !== Xe(this, et)) {
      Es(this, et, n);
      for (let r of Xe(this, on)) {
        let o = r.selector(Xe(this, et));
        pi(r.current, o) || (r.current = o, r.callback(o));
      }
      for (let r of Xe(this, rn).get(t.type)) r(Xe(this, et), t);
    }
  }
};
et = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap();
function pi(e, t) {
  return Object.is(e, t) ? !0 : typeof e != "object" || e === null || typeof t != "object" || t === null ? !1 : Array.isArray(e) && Array.isArray(t) ? e.length !== t.length ? !1 : $r(e[Symbol.iterator](), t[Symbol.iterator]()) : e instanceof Map && t instanceof Map || e instanceof Set && t instanceof Set ? e.size !== t.size ? !1 : $r(e.entries(), t.entries()) : ks(e) && ks(t) ? $r(Object.entries(e)[Symbol.iterator](), Object.entries(t)[Symbol.iterator]()) : !1;
}
function $r(e, t) {
  do {
    let n = e.next(), r = t.next();
    if (n.done && r.done) return !0;
    if (n.done || r.done || !Object.is(n.value, r.value)) return !1;
  } while (!0);
}
function ks(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
  let t = Object.getPrototypeOf(e);
  return t === null || Object.getPrototypeOf(t) === null;
}
function Pr(e) {
  let [t, n] = e(), r = Ue();
  return (...o) => {
    t(...o), r.dispose(), r.microTask(n);
  };
}
var Yd = Object.defineProperty, zd = (e, t, n) => t in e ? Yd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ns = (e, t, n) => (zd(e, typeof t != "symbol" ? t + "" : t, n), n), gi = ((e) => (e[e.Push = 0] = "Push", e[e.Pop = 1] = "Pop", e))(gi || {});
let Gd = { 0(e, t) {
  let n = t.id, r = e.stack, o = e.stack.indexOf(n);
  if (o !== -1) {
    let a = e.stack.slice();
    return a.splice(o, 1), a.push(n), r = a, { ...e, stack: r };
  }
  return { ...e, stack: [...e.stack, n] };
}, 1(e, t) {
  let n = t.id, r = e.stack.indexOf(n);
  if (r === -1) return e;
  let o = e.stack.slice();
  return o.splice(r, 1), { ...e, stack: o };
} }, Ud = class vi extends To {
  constructor() {
    super(...arguments), Ns(this, "actions", { push: (t) => this.send({ type: 0, id: t }), pop: (t) => this.send({ type: 1, id: t }) }), Ns(this, "selectors", { isTop: (t, n) => t.stack[t.stack.length - 1] === n, inStack: (t, n) => t.stack.includes(n) });
  }
  static new() {
    return new vi({ stack: [] });
  }
  reduce(t, n) {
    return Se(n.type, Gd, t, n);
  }
};
const xn = new mi(() => Ud.new());
var so = { exports: {} }, Mr = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Os;
function qd() {
  if (Os) return Mr;
  Os = 1;
  var e = S;
  function t(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, a = e.useEffect, l = e.useMemo, i = e.useDebugValue;
  return Mr.useSyncExternalStoreWithSelector = function(c, u, d, f, h) {
    var m = o(null);
    if (m.current === null) {
      var p = { hasValue: !1, value: null };
      m.current = p;
    } else p = m.current;
    m = l(
      function() {
        function x(O) {
          if (!w) {
            if (w = !0, y = O, O = f(O), h !== void 0 && p.hasValue) {
              var R = p.value;
              if (h(R, O))
                return b = R;
            }
            return b = O;
          }
          if (R = b, n(y, O)) return R;
          var M = f(O);
          return h !== void 0 && h(R, M) ? (y = O, R) : (y = O, b = M);
        }
        var w = !1, y, b, N = d === void 0 ? null : d;
        return [
          function() {
            return x(u());
          },
          N === null ? void 0 : function() {
            return x(N());
          }
        ];
      },
      [u, d, f, h]
    );
    var g = r(c, m[0], m[1]);
    return a(
      function() {
        p.hasValue = !0, p.value = g;
      },
      [g]
    ), i(g), g;
  }, Mr;
}
var Rr = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function Kd() {
  return Ss || (Ss = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = S, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, o = t.useRef, a = t.useEffect, l = t.useMemo, i = t.useDebugValue;
    Rr.useSyncExternalStoreWithSelector = function(c, u, d, f, h) {
      var m = o(null);
      if (m.current === null) {
        var p = { hasValue: !1, value: null };
        m.current = p;
      } else p = m.current;
      m = l(
        function() {
          function x(O) {
            if (!w) {
              if (w = !0, y = O, O = f(O), h !== void 0 && p.hasValue) {
                var R = p.value;
                if (h(R, O))
                  return b = R;
              }
              return b = O;
            }
            if (R = b, n(y, O))
              return R;
            var M = f(O);
            return h !== void 0 && h(R, M) ? (y = O, R) : (y = O, b = M);
          }
          var w = !1, y, b, N = d === void 0 ? null : d;
          return [
            function() {
              return x(u());
            },
            N === null ? void 0 : function() {
              return x(N());
            }
          ];
        },
        [u, d, f, h]
      );
      var g = r(c, m[0], m[1]);
      return a(
        function() {
          p.hasValue = !0, p.value = g;
        },
        [g]
      ), i(g), g;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Rr;
}
process.env.NODE_ENV === "production" ? so.exports = qd() : so.exports = Kd();
var Xd = so.exports;
function ke(e, t, n = pi) {
  return Xd.useSyncExternalStoreWithSelector(I((r) => e.subscribe(Qd, r)), I(() => e.state), I(() => e.state), I(t), n);
}
function Qd(e) {
  return e;
}
function bn(e, t) {
  let n = Re(), r = xn.get(t), [o, a] = ke(r, re((l) => [r.selectors.isTop(l, n), r.selectors.inStack(l, n)], [r, n]));
  return be(() => {
    if (e) return r.actions.push(n), () => r.actions.pop(n);
  }, [r, e, n]), e ? a ? o : !0 : !1;
}
let ao = /* @__PURE__ */ new Map(), cn = /* @__PURE__ */ new Map();
function Cs(e) {
  var t;
  let n = (t = cn.get(e)) != null ? t : 0;
  return cn.set(e, n + 1), n !== 0 ? () => Ts(e) : (ao.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Ts(e));
}
function Ts(e) {
  var t;
  let n = (t = cn.get(e)) != null ? t : 1;
  if (n === 1 ? cn.delete(e) : cn.set(e, n - 1), n !== 1) return;
  let r = ao.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, ao.delete(e));
}
function xi(e, { allowed: t, disallowed: n } = {}) {
  let r = bn(e, "inert-others");
  be(() => {
    var o, a;
    if (!r) return;
    let l = Ue();
    for (let c of (o = n == null ? void 0 : n()) != null ? o : []) c && l.add(Cs(c));
    let i = (a = t == null ? void 0 : t()) != null ? a : [];
    for (let c of i) {
      if (!c) continue;
      let u = At(c);
      if (!u) continue;
      let d = c.parentElement;
      for (; d && d !== u.body; ) {
        for (let f of d.children) i.some((h) => f.contains(h)) || l.add(Cs(f));
        d = d.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function $o(e, t, n) {
  let r = ot((o) => {
    let a = o.getBoundingClientRect();
    a.x === 0 && a.y === 0 && a.width === 0 && a.height === 0 && n();
  });
  se(() => {
    if (!e) return;
    let o = t === null ? null : Ae(t) ? t : t.current;
    if (!o) return;
    let a = Ue();
    if (typeof ResizeObserver < "u") {
      let l = new ResizeObserver(() => r.current(o));
      l.observe(o), a.add(() => l.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let l = new IntersectionObserver(() => r.current(o));
      l.observe(o), a.add(() => l.disconnect());
    }
    return () => a.dispose();
  }, [t, r, e]);
}
let Wn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Zd = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Pe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(Pe || {}), Gt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Gt || {}), Jd = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Jd || {});
function wn(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Wn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function ef(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Zd)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var nr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(nr || {});
function Po(e, t = 0) {
  var n;
  return e === ((n = At(e)) == null ? void 0 : n.body) ? !1 : Se(t, { 0() {
    return e.matches(Wn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Wn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var tf = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(tf || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function dt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let nf = ["textarea", "input"].join(",");
function rf(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, nf)) != null ? n : !1;
}
function bi(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), a = t(r);
    if (o === null || a === null) return 0;
    let l = o.compareDocumentPosition(a);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function of(e, t, n = e === null ? document.body : yt(e)) {
  return Ye(wn(n), t, { relativeTo: e });
}
function Ye(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let a = Array.isArray(e) ? e.length > 0 ? yt(e[0]) : document : yt(e), l = Array.isArray(e) ? n ? bi(e) : e : t & 64 ? ef(e) : wn(e);
  o.length > 0 && l.length > 1 && (l = l.filter((m) => !o.some((p) => p != null && "current" in p ? (p == null ? void 0 : p.current) === m : p === m))), r = r ?? (a == null ? void 0 : a.activeElement);
  let i = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, l.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, l.indexOf(r)) + 1;
    if (t & 8) return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, d = 0, f = l.length, h;
  do {
    if (d >= f || d + f <= 0) return 0;
    let m = c + d;
    if (t & 16) m = (m + f) % f;
    else {
      if (m < 0) return 3;
      if (m >= f) return 1;
    }
    h = l[m], h == null || h.focus(u), d += i;
  } while (h !== Mt(h));
  return t & 6 && rf(h) && h.select(), 2;
}
function wi() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function sf() {
  return /Android/gi.test(window.navigator.userAgent);
}
function $s() {
  return wi() || sf();
}
function Vt(e, t, n, r) {
  let o = ot(n);
  se(() => {
    if (!e) return;
    function a(l) {
      o.current(l);
    }
    return document.addEventListener(t, a, r), () => document.removeEventListener(t, a, r);
  }, [e, t, r]);
}
function yi(e, t, n, r) {
  let o = ot(n);
  se(() => {
    if (!e) return;
    function a(l) {
      o.current(l);
    }
    return window.addEventListener(t, a, r), () => window.removeEventListener(t, a, r);
  }, [e, t, r]);
}
const Ps = 30;
function Mo(e, t, n) {
  let r = ot(n), o = re(function(i, c) {
    if (i.defaultPrevented) return;
    let u = c(i);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let d = function f(h) {
      return typeof h == "function" ? f(h()) : Array.isArray(h) || h instanceof Set ? h : [h];
    }(t);
    for (let f of d) if (f !== null && (f.contains(u) || i.composed && i.composedPath().includes(f))) return;
    return !Po(u, nr.Loose) && u.tabIndex !== -1 && i.preventDefault(), r.current(i, u);
  }, [r, t]), a = G(null);
  Vt(e, "pointerdown", (i) => {
    var c, u;
    $s() || (a.current = ((u = (c = i.composedPath) == null ? void 0 : c.call(i)) == null ? void 0 : u[0]) || i.target);
  }, !0), Vt(e, "pointerup", (i) => {
    if ($s() || !a.current) return;
    let c = a.current;
    return a.current = null, o(i, () => c);
  }, !0);
  let l = G({ x: 0, y: 0 });
  Vt(e, "touchstart", (i) => {
    l.current.x = i.touches[0].clientX, l.current.y = i.touches[0].clientY;
  }, !0), Vt(e, "touchend", (i) => {
    let c = { x: i.changedTouches[0].clientX, y: i.changedTouches[0].clientY };
    if (!(Math.abs(c.x - l.current.x) >= Ps || Math.abs(c.y - l.current.y) >= Ps)) return o(i, () => tt(i.target) ? i.target : null);
  }, !0), yi(e, "blur", (i) => o(i, () => kd(window.document.activeElement) ? window.document.activeElement : null), !0);
}
function Ft(...e) {
  return ge(() => At(...e), [...e]);
}
function af(...e) {
  return ge(() => yt(...e), [...e]);
}
var lf = ((e) => (e[e.Ignore = 0] = "Ignore", e[e.Select = 1] = "Select", e[e.Close = 2] = "Close", e))(lf || {});
const Tn = { Ignore: { kind: 0 }, Select: (e) => ({ kind: 1, target: e }), Close: { kind: 2 } }, cf = 200, Ms = 5;
function uf(e, { trigger: t, action: n, close: r, select: o }) {
  let a = G(null), l = G(null), i = G(null);
  Vt(e && t !== null, "pointerdown", (c) => {
    ei(c == null ? void 0 : c.target) && t != null && t.contains(c.target) && (l.current = c.x, i.current = c.y, a.current = c.timeStamp);
  }), Vt(e && t !== null, "pointerup", (c) => {
    var u, d;
    let f = a.current;
    if (f === null || (a.current = null, !tt(c.target)) || Math.abs(c.x - ((u = l.current) != null ? u : c.x)) < Ms && Math.abs(c.y - ((d = i.current) != null ? d : c.y)) < Ms) return;
    let h = n(c);
    switch (h.kind) {
      case 0:
        return;
      case 1: {
        c.timeStamp - f > cf && (o(h.target), r());
        break;
      }
      case 2: {
        r();
        break;
      }
    }
  }, { capture: !0 });
}
function Ro(e, t, n, r) {
  let o = ot(n);
  se(() => {
    e = e ?? window;
    function a(l) {
      o.current(l);
    }
    return e.addEventListener(t, a, r), () => e.removeEventListener(t, a, r);
  }, [e, t, r]);
}
function Fo(e, t) {
  return ge(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function df(e) {
  return Bl(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function ff(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...a) {
    let l = t[o].call(n, ...a);
    l && (n = l, r.forEach((i) => i()));
  } };
}
function mf() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, o = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, o.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = Math.max(0, r.clientWidth - r.offsetWidth), a = Math.max(0, e - o);
    n.style(r, "paddingRight", `${a}px`);
  } };
}
function hf() {
  return wi() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      for (let a of n().containers) for (let l of a()) if (l.contains(o)) return !0;
      return !1;
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let i = Ue();
        i.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => i.dispose()));
      }
      let a = (o = window.scrollY) != null ? o : window.pageYOffset, l = null;
      t.addEventListener(e, "click", (i) => {
        if (tt(i.target)) try {
          let c = i.target.closest("a");
          if (!c) return;
          let { hash: u } = new URL(c.href), d = e.querySelector(u);
          tt(d) && !r(d) && (l = d);
        } catch {
        }
      }, !0), t.group((i) => {
        t.addEventListener(e, "touchstart", (c) => {
          if (i.dispose(), tt(c.target) && Ed(c.target)) if (r(c.target)) {
            let u = c.target;
            for (; u.parentElement && r(u.parentElement); ) u = u.parentElement;
            i.style(u, "overscrollBehavior", "contain");
          } else i.style(c.target, "touchAction", "none");
        });
      }), t.addEventListener(e, "touchmove", (i) => {
        if (tt(i.target)) {
          if (ti(i.target)) return;
          if (r(i.target)) {
            let c = i.target;
            for (; c.parentElement && c.dataset.headlessuiPortal !== "" && !(c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth); ) c = c.parentElement;
            c.dataset.headlessuiPortal === "" && i.preventDefault();
          } else i.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var i;
        let c = (i = window.scrollY) != null ? i : window.pageYOffset;
        a !== c && window.scrollTo(0, a), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
      });
    });
  } } : {};
}
function pf() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Rs(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let $t = ff(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Ue(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return r.count++, r.meta.add(t), r.computedMeta = Rs(r.meta), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t), n.computedMeta = Rs(n.meta)), this;
}, SCROLL_PREVENT(e) {
  let t = { doc: e.doc, d: e.d, meta() {
    return e.computedMeta;
  } }, n = [hf(), mf(), pf()];
  n.forEach(({ before: r }) => r == null ? void 0 : r(t)), n.forEach(({ after: r }) => r == null ? void 0 : r(t));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
$t.subscribe(() => {
  let e = $t.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && $t.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && $t.dispatch("TEARDOWN", n);
  }
});
function gf(e, t, n = () => ({ containers: [] })) {
  let r = df($t), o = t ? r.get(t) : void 0, a = o ? o.count > 0 : !1;
  return be(() => {
    if (!(!t || !e)) return $t.dispatch("PUSH", t, n), () => $t.dispatch("POP", t, n);
  }, [e, t]), a;
}
function Do(e, t, n = () => [document.body]) {
  let r = bn(e, "scroll-lock");
  gf(r, t, (o) => {
    var a;
    return { containers: [...(a = o.containers) != null ? a : [], n] };
  });
}
function Fs(e) {
  return [e.screenX, e.screenY];
}
function vf() {
  let e = G([-1, -1]);
  return { wasMoved(t) {
    let n = Fs(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Fs(t);
  } };
}
function xf(e = 0) {
  let [t, n] = F(e), r = re((c) => n(c), []), o = re((c) => n((u) => u | c), []), a = re((c) => (t & c) === c, [t]), l = re((c) => n((u) => u & ~c), []), i = re((c) => n((u) => u ^ c), []);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: a, removeFlag: l, toggleFlag: i };
}
var Ds, Ls;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((Ds = process == null ? void 0 : process.env) == null ? void 0 : Ds.NODE_ENV) === "test" && typeof ((Ls = Element == null ? void 0 : Element.prototype) == null ? void 0 : Ls.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var bf = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(bf || {});
function rr(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function or(e, t, n, r) {
  let [o, a] = F(n), { hasFlag: l, addFlag: i, removeFlag: c } = xf(e && o ? 3 : 0), u = G(!1), d = G(!1), f = it();
  return be(() => {
    var h;
    if (e) {
      if (n && a(!0), !t) {
        n && i(3);
        return;
      }
      return (h = r == null ? void 0 : r.start) == null || h.call(r, n), wf(t, { inFlight: u, prepare() {
        d.current ? d.current = !1 : d.current = u.current, u.current = !0, !d.current && (n ? (i(3), c(4)) : (i(4), c(2)));
      }, run() {
        d.current ? n ? (c(3), i(4)) : (c(4), i(3)) : n ? c(1) : i(1);
      }, done() {
        var m;
        d.current && Ef(t) || (u.current = !1, c(7), n || a(!1), (m = r == null ? void 0 : r.end) == null || m.call(r, n));
      } });
    }
  }, [e, n, t, f]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function wf(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let a = Ue();
  return jf(e, { prepare: t, inFlight: o }), a.nextFrame(() => {
    n(), a.requestAnimationFrame(() => {
      a.add(yf(e, r));
    });
  }), a.dispose;
}
function yf(e, t) {
  var n, r;
  let o = Ue();
  if (!e) return o.dispose;
  let a = !1;
  o.add(() => {
    a = !0;
  });
  let l = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((i) => i instanceof CSSTransition)) != null ? r : [];
  return l.length === 0 ? (t(), o.dispose) : (Promise.allSettled(l.map((i) => i.finished)).then(() => {
    a || t();
  }), o.dispose);
}
function jf(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function Ef(e) {
  var t, n;
  return ((n = (t = e.getAnimations) == null ? void 0 : t.call(e)) != null ? n : []).some((r) => r instanceof CSSTransition && r.playState !== "finished");
}
function Lo(e, t) {
  let n = G([]), r = I(e);
  se(() => {
    let o = [...n.current];
    for (let [a, l] of t.entries()) if (n.current[a] !== l) {
      let i = r(t, o);
      return n.current = t, i;
    }
  }, [r, ...t]);
}
function sr() {
  return typeof window < "u";
}
function Kt(e) {
  return ji(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function lt(e) {
  var t;
  return (t = (ji(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ji(e) {
  return sr() ? e instanceof Node || e instanceof Ge(e).Node : !1;
}
function Le(e) {
  return sr() ? e instanceof Element || e instanceof Ge(e).Element : !1;
}
function at(e) {
  return sr() ? e instanceof HTMLElement || e instanceof Ge(e).HTMLElement : !1;
}
function As(e) {
  return !sr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot;
}
const kf = /* @__PURE__ */ new Set(["inline", "contents"]);
function yn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !kf.has(o);
}
const Nf = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Of(e) {
  return Nf.has(Kt(e));
}
const Sf = [":popover-open", ":modal"];
function ar(e) {
  return Sf.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Cf = ["transform", "translate", "scale", "rotate", "perspective"], Tf = ["transform", "translate", "scale", "rotate", "perspective", "filter"], $f = ["paint", "layout", "strict", "content"];
function Ao(e) {
  const t = Io(), n = Le(e) ? Je(e) : e;
  return Cf.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Tf.some((r) => (n.willChange || "").includes(r)) || $f.some((r) => (n.contain || "").includes(r));
}
function Pf(e) {
  let t = Et(e);
  for (; at(t) && !Ut(t); ) {
    if (Ao(t))
      return t;
    if (ar(t))
      return null;
    t = Et(t);
  }
  return null;
}
function Io() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Mf = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ut(e) {
  return Mf.has(Kt(e));
}
function Je(e) {
  return Ge(e).getComputedStyle(e);
}
function ir(e) {
  return Le(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Et(e) {
  if (Kt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    As(e) && e.host || // Fallback.
    lt(e)
  );
  return As(t) ? t.host : t;
}
function Ei(e) {
  const t = Et(e);
  return Ut(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : at(t) && yn(t) ? t : Ei(t);
}
function fn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ei(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Ge(o);
  if (a) {
    const i = io(l);
    return t.concat(l, l.visualViewport || [], yn(o) ? o : [], i && n ? fn(i) : []);
  }
  return t.concat(o, fn(o, [], n));
}
function io(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Rf() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const Dt = Math.min, Fe = Math.max, mn = Math.round, $n = Math.floor, rt = (e) => ({
  x: e,
  y: e
}), Ff = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Df = {
  start: "end",
  end: "start"
};
function Is(e, t, n) {
  return Fe(e, Dt(t, n));
}
function Xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kt(e) {
  return e.split("-")[0];
}
function jn(e) {
  return e.split("-")[1];
}
function ki(e) {
  return e === "x" ? "y" : "x";
}
function Ni(e) {
  return e === "y" ? "height" : "width";
}
const Lf = /* @__PURE__ */ new Set(["top", "bottom"]);
function ct(e) {
  return Lf.has(kt(e)) ? "y" : "x";
}
function Oi(e) {
  return ki(ct(e));
}
function Af(e, t, n) {
  n === void 0 && (n = !1);
  const r = jn(e), o = Oi(e), a = Ni(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = Bn(l)), [l, Bn(l)];
}
function If(e) {
  const t = Bn(e);
  return [lo(e), t, lo(t)];
}
function lo(e) {
  return e.replace(/start|end/g, (t) => Df[t]);
}
const _s = ["left", "right"], Ws = ["right", "left"], _f = ["top", "bottom"], Wf = ["bottom", "top"];
function Bf(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ws : _s : t ? _s : Ws;
    case "left":
    case "right":
      return t ? _f : Wf;
    default:
      return [];
  }
}
function Hf(e, t, n, r) {
  const o = jn(e);
  let a = Bf(kt(e), n === "start", r);
  return o && (a = a.map((l) => l + "-" + o), t && (a = a.concat(a.map(lo)))), a;
}
function Bn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ff[t]);
}
function Vf(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Yf(e) {
  return typeof e != "number" ? Vf(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Hn(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Bs(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ct(t), l = Oi(t), i = Ni(l), c = kt(t), u = a === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (jn(t)) {
    case "start":
      m[l] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      m[l] += h * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const zf = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: l
  } = n, i = a.filter(Boolean), c = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Bs(u, r, c), h = r, m = {}, p = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: x,
      fn: w
    } = i[g], {
      x: y,
      y: b,
      data: N,
      reset: O
    } = await w({
      x: d,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = y ?? d, f = b ?? f, m = {
      ...m,
      [x]: {
        ...m[x],
        ...N
      }
    }, O && p <= 50 && (p++, typeof O == "object" && (O.placement && (h = O.placement), O.rects && (u = O.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : O.rects), {
      x: d,
      y: f
    } = Bs(u, h, c)), g = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: m
  };
};
async function lr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: l,
    elements: i,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: m = 0
  } = Xt(t, e), p = Yf(m), x = i[h ? f === "floating" ? "reference" : "floating" : f], w = Hn(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null || n ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), y = f === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, b = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), N = await (a.isElement == null ? void 0 : a.isElement(b)) ? await (a.getScale == null ? void 0 : a.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = Hn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: b,
    strategy: c
  }) : y);
  return {
    top: (w.top - O.top + p.top) / N.y,
    bottom: (O.bottom - w.bottom + p.bottom) / N.y,
    left: (w.left - O.left + p.left) / N.x,
    right: (O.right - w.right + p.right) / N.x
  };
}
const Gf = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: l,
        initialPlacement: i,
        platform: c,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...x
      } = Xt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = kt(o), y = ct(i), b = kt(i) === i, N = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), O = h || (b || !g ? [Bn(i)] : If(i)), R = p !== "none";
      !h && R && O.push(...Hf(i, g, p, N));
      const M = [i, ...O], U = await lr(t, x), q = [];
      let P = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && q.push(U[w]), f) {
        const $ = Af(o, l, N);
        q.push(U[$[0]], U[$[1]]);
      }
      if (P = [...P, {
        placement: o,
        overflows: q
      }], !q.every(($) => $ <= 0)) {
        var B, K;
        const $ = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, L = M[$];
        if (L && (!(f === "alignment" ? y !== ct(L) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        P.every((W) => ct(W.placement) === y ? W.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: P
            },
            reset: {
              placement: L
            }
          };
        let V = (K = P.filter((X) => X.overflows[0] <= 0).sort((X, W) => X.overflows[1] - W.overflows[1])[0]) == null ? void 0 : K.placement;
        if (!V)
          switch (m) {
            case "bestFit": {
              var A;
              const X = (A = P.filter((W) => {
                if (R) {
                  const H = ct(W.placement);
                  return H === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((W) => [W.placement, W.overflows.filter((H) => H > 0).reduce((H, Z) => H + Z, 0)]).sort((W, H) => W[1] - H[1])[0]) == null ? void 0 : A[0];
              X && (V = X);
              break;
            }
            case "initialPlacement":
              V = i;
              break;
          }
        if (o !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
}, Uf = /* @__PURE__ */ new Set(["left", "top"]);
async function qf(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = kt(n), i = jn(n), c = ct(n) === "y", u = Uf.has(l) ? -1 : 1, d = a && c ? -1 : 1, f = Xt(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: p
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof p == "number" && (m = i === "end" ? p * -1 : p), c ? {
    x: m * d,
    y: h * u
  } : {
    x: h * u,
    y: m * d
  };
}
const Kf = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: l,
        middlewareData: i
      } = t, c = await qf(t, e);
      return l === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: l
        }
      };
    }
  };
}, Xf = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: l = !1,
        limiter: i = {
          fn: (x) => {
            let {
              x: w,
              y
            } = x;
            return {
              x: w,
              y
            };
          }
        },
        ...c
      } = Xt(e, t), u = {
        x: n,
        y: r
      }, d = await lr(t, c), f = ct(kt(o)), h = ki(f);
      let m = u[h], p = u[f];
      if (a) {
        const x = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", y = m + d[x], b = m - d[w];
        m = Is(y, m, b);
      }
      if (l) {
        const x = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", y = p + d[x], b = p - d[w];
        p = Is(y, p, b);
      }
      const g = i.fn({
        ...t,
        [h]: m,
        [f]: p
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [h]: a,
            [f]: l
          }
        }
      };
    }
  };
}, Qf = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: l,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...u
      } = Xt(e, t), d = await lr(t, u), f = kt(o), h = jn(o), m = ct(o) === "y", {
        width: p,
        height: g
      } = a.floating;
      let x, w;
      f === "top" || f === "bottom" ? (x = f, w = h === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = f, x = h === "end" ? "top" : "bottom");
      const y = g - d.top - d.bottom, b = p - d.left - d.right, N = Dt(g - d[x], y), O = Dt(p - d[w], b), R = !t.middlewareData.shift;
      let M = N, U = O;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (U = b), (r = t.middlewareData.shift) != null && r.enabled.y && (M = y), R && !h) {
        const P = Fe(d.left, 0), B = Fe(d.right, 0), K = Fe(d.top, 0), A = Fe(d.bottom, 0);
        m ? U = p - 2 * (P !== 0 || B !== 0 ? P + B : Fe(d.left, d.right)) : M = g - 2 * (K !== 0 || A !== 0 ? K + A : Fe(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: U,
        availableHeight: M
      });
      const q = await l.getDimensions(i.floating);
      return p !== q.width || g !== q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Si(e) {
  const t = Je(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = at(e), a = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, i = mn(n) !== a || mn(r) !== l;
  return i && (n = a, r = l), {
    width: n,
    height: r,
    $: i
  };
}
function _o(e) {
  return Le(e) ? e : e.contextElement;
}
function Yt(e) {
  const t = _o(e);
  if (!at(t))
    return rt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Si(t);
  let l = (a ? mn(n.width) : n.width) / r, i = (a ? mn(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Zf = /* @__PURE__ */ rt(0);
function Ci(e) {
  const t = Ge(e);
  return !Io() || !t.visualViewport ? Zf : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Jf(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ge(e) ? !1 : t;
}
function Lt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = _o(e);
  let l = rt(1);
  t && (r ? Le(r) && (l = Yt(r)) : l = Yt(e));
  const i = Jf(a, n, r) ? Ci(a) : rt(0);
  let c = (o.left + i.x) / l.x, u = (o.top + i.y) / l.y, d = o.width / l.x, f = o.height / l.y;
  if (a) {
    const h = Ge(a), m = r && Le(r) ? Ge(r) : r;
    let p = h, g = io(p);
    for (; g && r && m !== p; ) {
      const x = Yt(g), w = g.getBoundingClientRect(), y = Je(g), b = w.left + (g.clientLeft + parseFloat(y.paddingLeft)) * x.x, N = w.top + (g.clientTop + parseFloat(y.paddingTop)) * x.y;
      c *= x.x, u *= x.y, d *= x.x, f *= x.y, c += b, u += N, p = Ge(g), g = io(p);
    }
  }
  return Hn({
    width: d,
    height: f,
    x: c,
    y: u
  });
}
function cr(e, t) {
  const n = ir(e).scrollLeft;
  return t ? t.left + n : Lt(lt(e)).left + n;
}
function Ti(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - cr(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function em(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", l = lt(r), i = t ? ar(t.floating) : !1;
  if (r === l || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = rt(1);
  const d = rt(0), f = at(r);
  if ((f || !f && !a) && ((Kt(r) !== "body" || yn(l)) && (c = ir(r)), at(r))) {
    const m = Lt(r);
    u = Yt(r), d.x = m.x + r.clientLeft, d.y = m.y + r.clientTop;
  }
  const h = l && !f && !a ? Ti(l, c) : rt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + d.x + h.x,
    y: n.y * u.y - c.scrollTop * u.y + d.y + h.y
  };
}
function tm(e) {
  return Array.from(e.getClientRects());
}
function nm(e) {
  const t = lt(e), n = ir(e), r = e.ownerDocument.body, o = Fe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Fe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + cr(e);
  const i = -n.scrollTop;
  return Je(r).direction === "rtl" && (l += Fe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: l,
    y: i
  };
}
const Hs = 25;
function rm(e, t) {
  const n = Ge(e), r = lt(e), o = n.visualViewport;
  let a = r.clientWidth, l = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, l = o.height;
    const d = Io();
    (!d || d && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const u = cr(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, h = getComputedStyle(f), m = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, p = Math.abs(r.clientWidth - f.clientWidth - m);
    p <= Hs && (a -= p);
  } else u <= Hs && (a += u);
  return {
    width: a,
    height: l,
    x: i,
    y: c
  };
}
const om = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function sm(e, t) {
  const n = Lt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = at(e) ? Yt(e) : rt(1), l = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, u = r * a.y;
  return {
    width: l,
    height: i,
    x: c,
    y: u
  };
}
function Vs(e, t, n) {
  let r;
  if (t === "viewport")
    r = rm(e, n);
  else if (t === "document")
    r = nm(lt(e));
  else if (Le(t))
    r = sm(t, n);
  else {
    const o = Ci(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Hn(r);
}
function $i(e, t) {
  const n = Et(e);
  return n === t || !Le(n) || Ut(n) ? !1 : Je(n).position === "fixed" || $i(n, t);
}
function am(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = fn(e, [], !1).filter((i) => Le(i) && Kt(i) !== "body"), o = null;
  const a = Je(e).position === "fixed";
  let l = a ? Et(e) : e;
  for (; Le(l) && !Ut(l); ) {
    const i = Je(l), c = Ao(l);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && om.has(o.position) || yn(l) && !c && $i(e, l)) ? r = r.filter((d) => d !== l) : o = i, l = Et(l);
  }
  return t.set(e, r), r;
}
function im(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? ar(t) ? [] : am(t, this._c) : [].concat(n), r], i = l[0], c = l.reduce((u, d) => {
    const f = Vs(t, d, o);
    return u.top = Fe(f.top, u.top), u.right = Dt(f.right, u.right), u.bottom = Dt(f.bottom, u.bottom), u.left = Fe(f.left, u.left), u;
  }, Vs(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function lm(e) {
  const {
    width: t,
    height: n
  } = Si(e);
  return {
    width: t,
    height: n
  };
}
function cm(e, t, n) {
  const r = at(t), o = lt(t), a = n === "fixed", l = Lt(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = rt(0);
  function u() {
    c.x = cr(o);
  }
  if (r || !r && !a)
    if ((Kt(t) !== "body" || yn(o)) && (i = ir(t)), r) {
      const m = Lt(t, !0, a, t);
      c.x = m.x + t.clientLeft, c.y = m.y + t.clientTop;
    } else o && u();
  a && !r && o && u();
  const d = o && !r && !a ? Ti(o, i) : rt(0), f = l.left + i.scrollLeft - c.x - d.x, h = l.top + i.scrollTop - c.y - d.y;
  return {
    x: f,
    y: h,
    width: l.width,
    height: l.height
  };
}
function Fr(e) {
  return Je(e).position === "static";
}
function Ys(e, t) {
  if (!at(e) || Je(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return lt(e) === n && (n = n.ownerDocument.body), n;
}
function Pi(e, t) {
  const n = Ge(e);
  if (ar(e))
    return n;
  if (!at(e)) {
    let o = Et(e);
    for (; o && !Ut(o); ) {
      if (Le(o) && !Fr(o))
        return o;
      o = Et(o);
    }
    return n;
  }
  let r = Ys(e, t);
  for (; r && Of(r) && Fr(r); )
    r = Ys(r, t);
  return r && Ut(r) && Fr(r) && !Ao(r) ? n : r || Pf(e) || n;
}
const um = async function(e) {
  const t = this.getOffsetParent || Pi, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: cm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function dm(e) {
  return Je(e).direction === "rtl";
}
const fm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: em,
  getDocumentElement: lt,
  getClippingRect: im,
  getOffsetParent: Pi,
  getElementRects: um,
  getClientRects: tm,
  getDimensions: lm,
  getScale: Yt,
  isElement: Le,
  isRTL: dm
};
function Mi(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function mm(e, t) {
  let n = null, r;
  const o = lt(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function l(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: h,
      height: m
    } = u;
    if (i || t(), !h || !m)
      return;
    const p = $n(f), g = $n(o.clientWidth - (d + h)), x = $n(o.clientHeight - (f + m)), w = $n(d), b = {
      rootMargin: -p + "px " + -g + "px " + -x + "px " + -w + "px",
      threshold: Fe(0, Dt(1, c)) || 1
    };
    let N = !0;
    function O(R) {
      const M = R[0].intersectionRatio;
      if (M !== c) {
        if (!N)
          return l();
        M ? l(!1, M) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !Mi(u, e.getBoundingClientRect()) && l(), N = !1;
    }
    try {
      n = new IntersectionObserver(O, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(O, b);
    }
    n.observe(e);
  }
  return l(!0), a;
}
function hm(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = _o(e), d = o || a ? [...u ? fn(u) : [], ...fn(t)] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const f = u && i ? mm(u, n) : null;
  let h = -1, m = null;
  l && (m = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === u && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var b;
      (b = m) == null || b.observe(t);
    })), n();
  }), u && !c && m.observe(u), m.observe(t));
  let p, g = c ? Lt(e) : null;
  c && x();
  function x() {
    const w = Lt(e);
    g && !Mi(g, w) && n(), g = w, p = requestAnimationFrame(x);
  }
  return n(), () => {
    var w;
    d.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), f == null || f(), (w = m) == null || w.disconnect(), m = null, c && cancelAnimationFrame(p);
  };
}
const Dr = lr, pm = Kf, gm = Xf, vm = Gf, xm = Qf, bm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: fm,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return zf(e, t, {
    ...o,
    platform: a
  });
};
var wm = typeof document < "u", ym = function() {
}, Mn = wm ? mo : ym;
function Vn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Vn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Vn(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ri(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zs(e, t) {
  const n = Ri(e);
  return Math.round(t * n) / n;
}
function Lr(e) {
  const t = j.useRef(e);
  return Mn(() => {
    t.current = e;
  }), t;
}
function jm(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: l
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: u
  } = e, [d, f] = j.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, m] = j.useState(r);
  Vn(h, r) || m(r);
  const [p, g] = j.useState(null), [x, w] = j.useState(null), y = j.useCallback((W) => {
    W !== R.current && (R.current = W, g(W));
  }, []), b = j.useCallback((W) => {
    W !== M.current && (M.current = W, w(W));
  }, []), N = a || p, O = l || x, R = j.useRef(null), M = j.useRef(null), U = j.useRef(d), q = c != null, P = Lr(c), B = Lr(o), K = Lr(u), A = j.useCallback(() => {
    if (!R.current || !M.current)
      return;
    const W = {
      placement: t,
      strategy: n,
      middleware: h
    };
    B.current && (W.platform = B.current), bm(R.current, M.current, W).then((H) => {
      const Z = {
        ...H,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: K.current !== !1
      };
      $.current && !Vn(U.current, Z) && (U.current = Z, Dn.flushSync(() => {
        f(Z);
      }));
    });
  }, [h, t, n, B, K]);
  Mn(() => {
    u === !1 && U.current.isPositioned && (U.current.isPositioned = !1, f((W) => ({
      ...W,
      isPositioned: !1
    })));
  }, [u]);
  const $ = j.useRef(!1);
  Mn(() => ($.current = !0, () => {
    $.current = !1;
  }), []), Mn(() => {
    if (N && (R.current = N), O && (M.current = O), N && O) {
      if (P.current)
        return P.current(N, O, A);
      A();
    }
  }, [N, O, A, P, q]);
  const L = j.useMemo(() => ({
    reference: R,
    floating: M,
    setReference: y,
    setFloating: b
  }), [y, b]), V = j.useMemo(() => ({
    reference: N,
    floating: O
  }), [N, O]), X = j.useMemo(() => {
    const W = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return W;
    const H = zs(V.floating, d.x), Z = zs(V.floating, d.y);
    return i ? {
      ...W,
      transform: "translate(" + H + "px, " + Z + "px)",
      ...Ri(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: H,
      top: Z
    };
  }, [n, i, V.floating, d.x, d.y]);
  return j.useMemo(() => ({
    ...d,
    update: A,
    refs: L,
    elements: V,
    floatingStyles: X
  }), [d, A, L, V, X]);
}
const Fi = (e, t) => ({
  ...pm(e),
  options: [e, t]
}), Em = (e, t) => ({
  ...gm(e),
  options: [e, t]
}), km = (e, t) => ({
  ...vm(e),
  options: [e, t]
}), Nm = (e, t) => ({
  ...xm(e),
  options: [e, t]
}), Di = {
  ...j
}, Om = Di.useInsertionEffect, Sm = Om || ((e) => e());
function Li(e) {
  const t = j.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Sm(() => {
    t.current = e;
  }), j.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var co = typeof document < "u" ? mo : se;
let Gs = !1, Cm = 0;
const Us = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Cm++
);
function Tm() {
  const [e, t] = j.useState(() => Gs ? Us() : void 0);
  return co(() => {
    e == null && t(Us());
  }, []), j.useEffect(() => {
    Gs = !0;
  }, []), e;
}
const $m = Di.useId, Pm = $m || Tm;
let hn;
process.env.NODE_ENV !== "production" && (hn = /* @__PURE__ */ new Set());
function Mm() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = hn) != null && e.has(o))) {
    var a;
    (a = hn) == null || a.add(o), console.warn(o);
  }
}
function Rm() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = hn) != null && e.has(o))) {
    var a;
    (a = hn) == null || a.add(o), console.error(o);
  }
}
function Fm() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const Dm = /* @__PURE__ */ j.createContext(null), Lm = /* @__PURE__ */ j.createContext(null), Am = () => {
  var e;
  return ((e = j.useContext(Dm)) == null ? void 0 : e.id) || null;
}, Im = () => j.useContext(Lm), _m = "data-floating-ui-focusable";
function Wm(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Pm(), a = j.useRef({}), [l] = j.useState(() => Fm()), i = Am() != null;
  if (process.env.NODE_ENV !== "production") {
    const m = r.reference;
    m && !Le(m) && Rm("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [c, u] = j.useState(r.reference), d = Li((m, p, g) => {
    a.current.openEvent = m ? p : void 0, l.emit("openchange", {
      open: m,
      event: p,
      reason: g,
      nested: i
    }), n == null || n(m, p, g);
  }), f = j.useMemo(() => ({
    setPositionReference: u
  }), []), h = j.useMemo(() => ({
    reference: c || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [c, r.reference, r.floating]);
  return j.useMemo(() => ({
    dataRef: a,
    open: t,
    onOpenChange: d,
    elements: h,
    events: l,
    floatingId: o,
    refs: f
  }), [t, d, h, l, o, f]);
}
function Bm(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Wm({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [a, l] = j.useState(null), [i, c] = j.useState(null), d = (o == null ? void 0 : o.domReference) || a, f = j.useRef(null), h = Im();
  co(() => {
    d && (f.current = d);
  }, [d]);
  const m = jm({
    ...e,
    elements: {
      ...o,
      ...i && {
        reference: i
      }
    }
  }), p = j.useCallback((b) => {
    const N = Le(b) ? {
      getBoundingClientRect: () => b.getBoundingClientRect(),
      contextElement: b
    } : b;
    c(N), m.refs.setReference(N);
  }, [m.refs]), g = j.useCallback((b) => {
    (Le(b) || b === null) && (f.current = b, l(b)), (Le(m.refs.reference.current) || m.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    b !== null && !Le(b)) && m.refs.setReference(b);
  }, [m.refs]), x = j.useMemo(() => ({
    ...m.refs,
    setReference: g,
    setPositionReference: p,
    domReference: f
  }), [m.refs, g, p]), w = j.useMemo(() => ({
    ...m.elements,
    domReference: d
  }), [m.elements, d]), y = j.useMemo(() => ({
    ...m,
    ...r,
    refs: x,
    elements: w,
    nodeId: t
  }), [m, x, w, t, r]);
  return co(() => {
    r.dataRef.current.floatingContext = y;
    const b = h == null ? void 0 : h.nodesRef.current.find((N) => N.id === t);
    b && (b.context = y);
  }), j.useMemo(() => ({
    ...m,
    context: y,
    refs: x,
    elements: w
  }), [m, x, w, y]);
}
const qs = "active", Ks = "selected";
function Ar(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let a = e;
  if (o && e) {
    const {
      [qs]: l,
      [Ks]: i,
      ...c
    } = e;
    a = c;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [_m]: ""
    },
    ...a,
    ...t.map((l) => {
      const i = l ? l[n] : null;
      return typeof i == "function" ? e ? i(e) : null : i;
    }).concat(e).reduce((l, i) => (i && Object.entries(i).forEach((c) => {
      let [u, d] = c;
      if (!(o && [qs, Ks].includes(u)))
        if (u.indexOf("on") === 0) {
          if (r.has(u) || r.set(u, []), typeof d == "function") {
            var f;
            (f = r.get(u)) == null || f.push(d), l[u] = function() {
              for (var h, m = arguments.length, p = new Array(m), g = 0; g < m; g++)
                p[g] = arguments[g];
              return (h = r.get(u)) == null ? void 0 : h.map((x) => x(...p)).find((x) => x !== void 0);
            };
          }
        } else
          l[u] = d;
    }), l), {})
  };
}
function Hm(e) {
  e === void 0 && (e = []);
  const t = e.map((i) => i == null ? void 0 : i.reference), n = e.map((i) => i == null ? void 0 : i.floating), r = e.map((i) => i == null ? void 0 : i.item), o = j.useCallback(
    (i) => Ar(i, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), a = j.useCallback(
    (i) => Ar(i, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = j.useCallback(
    (i) => Ar(i, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return j.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: a,
    getItemProps: l
  }), [o, a, l]);
}
function Xs(e, t) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: t
      }
    }
  };
}
const Vm = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: o,
      offset: a = 0,
      index: l = 0,
      minItemsVisible: i = 4,
      referenceOverflowThreshold: c = 0,
      scrollRef: u,
      ...d
    } = Xt(e, t), {
      rects: f,
      elements: {
        floating: h
      }
    } = t, m = n.current[l], p = (u == null ? void 0 : u.current) || h, g = h.clientTop || p.clientTop, x = h.clientTop !== 0, w = p.clientTop !== 0, y = h === p;
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || Mm('`placement` side must be "bottom" when using the `inner`', "middleware.")), !m)
      return {};
    const b = {
      ...t,
      ...await Fi(-m.offsetTop - h.clientTop - f.reference.height / 2 - m.offsetHeight / 2 - a).fn(t)
    }, N = await Dr(Xs(b, p.scrollHeight + g + h.clientTop), d), O = await Dr(b, {
      ...d,
      elementContext: "reference"
    }), R = Fe(0, N.top), M = b.y + R, P = (p.scrollHeight > p.clientHeight ? (B) => B : mn)(Fe(0, p.scrollHeight + (x && y || w ? g * 2 : 0) - R - Fe(0, N.bottom)));
    if (p.style.maxHeight = P + "px", p.scrollTop = R, o) {
      const B = p.offsetHeight < m.offsetHeight * Dt(i, n.current.length) - 1 || O.top >= -c || O.bottom >= -c;
      Dn.flushSync(() => o(B));
    }
    return r && (r.current = await Dr(Xs({
      ...b,
      y: M
    }, p.offsetHeight + g + h.clientTop), d)), {
      y: M
    };
  }
});
function Ym(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: a,
    scrollRef: l,
    onChange: i
  } = t, c = Li(i), u = j.useRef(!1), d = j.useRef(null), f = j.useRef(null);
  j.useEffect(() => {
    if (!o) return;
    function m(g) {
      if (g.ctrlKey || !p || a.current == null)
        return;
      const x = g.deltaY, w = a.current.top >= -0.5, y = a.current.bottom >= -0.5, b = p.scrollHeight - p.clientHeight, N = x < 0 ? -1 : 1, O = x < 0 ? "max" : "min";
      p.scrollHeight <= p.clientHeight || (!w && x > 0 || !y && x < 0 ? (g.preventDefault(), Dn.flushSync(() => {
        c((R) => R + Math[O](x, b * N));
      })) : /firefox/i.test(Rf()) && (p.scrollTop += x));
    }
    const p = (l == null ? void 0 : l.current) || r.floating;
    if (n && p)
      return p.addEventListener("wheel", m), requestAnimationFrame(() => {
        d.current = p.scrollTop, a.current != null && (f.current = {
          ...a.current
        });
      }), () => {
        d.current = null, f.current = null, p.removeEventListener("wheel", m);
      };
  }, [o, n, r.floating, a, l, c]);
  const h = j.useMemo(() => ({
    onKeyDown() {
      u.current = !0;
    },
    onWheel() {
      u.current = !1;
    },
    onPointerMove() {
      u.current = !1;
    },
    onScroll() {
      const m = (l == null ? void 0 : l.current) || r.floating;
      if (!(!a.current || !m || !u.current)) {
        if (d.current !== null) {
          const p = m.scrollTop - d.current;
          (a.current.bottom < -0.5 && p < -1 || a.current.top < -0.5 && p > 1) && Dn.flushSync(() => c((g) => g + p));
        }
        requestAnimationFrame(() => {
          d.current = m.scrollTop;
        });
      }
    }
  }), [r.floating, c, a, l]);
  return j.useMemo(() => o ? {
    floating: h
  } : {}, [o, h]);
}
let Qt = ye({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
Qt.displayName = "FloatingContext";
let Wo = ye(null);
Wo.displayName = "PlacementContext";
function Ai(e) {
  return ge(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Ii() {
  return de(Qt).setReference;
}
function zm() {
  return de(Qt).getReferenceProps;
}
function _i() {
  let { getFloatingProps: e, slot: t } = de(Qt);
  return re((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function Wi(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = de(Wo), n = ge(() => e, [JSON.stringify(e, (o, a) => {
    var l;
    return (l = a == null ? void 0 : a.outerHTML) != null ? l : a;
  })]);
  be(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = de(Qt);
  return ge(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let Qs = 4;
function Bi({ children: e, enabled: t = !0 }) {
  let [n, r] = F(null), [o, a] = F(0), l = G(null), [i, c] = F(null);
  Gm(i);
  let u = t && n !== null && i !== null, { to: d = "bottom", gap: f = 0, offset: h = 0, padding: m = 0, inner: p } = Um(n, i), [g, x = "center"] = d.split(" ");
  be(() => {
    u && a(0);
  }, [u]);
  let { refs: w, floatingStyles: y, context: b } = Bm({ open: u, placement: g === "selection" ? x === "center" ? "bottom" : `bottom-${x}` : x === "center" ? `${g}` : `${g}-${x}`, strategy: "absolute", transform: !1, middleware: [Fi({ mainAxis: g === "selection" ? 0 : f, crossAxis: h }), Em({ padding: m }), g !== "selection" && km({ padding: m }), g === "selection" && p ? Vm({ ...p, padding: m, overflowRef: l, offset: o, minItemsVisible: Qs, referenceOverflowThreshold: m, onFallbackChange(B) {
    var K, A;
    if (!B) return;
    let $ = b.elements.floating;
    if (!$) return;
    let L = parseFloat(getComputedStyle($).scrollPaddingBottom) || 0, V = Math.min(Qs, $.childElementCount), X = 0, W = 0;
    for (let H of (A = (K = b.elements.floating) == null ? void 0 : K.childNodes) != null ? A : []) if (Ae(H)) {
      let Z = H.offsetTop, Y = Z + H.clientHeight + L, te = $.scrollTop, E = te + $.clientHeight;
      if (Z >= te && Y <= E) V--;
      else {
        W = Math.max(0, Math.min(Y, E) - Math.max(Z, te)), X = H.clientHeight;
        break;
      }
    }
    V >= 1 && a((H) => {
      let Z = X * V - W + L;
      return H >= Z ? H : Z;
    });
  } }) : null, Nm({ padding: m, apply({ availableWidth: B, availableHeight: K, elements: A }) {
    Object.assign(A.floating.style, { overflow: "auto", maxWidth: `${B}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${K}px)` });
  } })].filter(Boolean), whileElementsMounted: hm }), [N = g, O = x] = b.placement.split("-");
  g === "selection" && (N = "selection");
  let R = ge(() => ({ anchor: [N, O].filter(Boolean).join(" ") }), [N, O]), M = Ym(b, { overflowRef: l, onChange: a }), { getReferenceProps: U, getFloatingProps: q } = Hm([M]), P = I((B) => {
    c(B), w.setFloating(B);
  });
  return j.createElement(Wo.Provider, { value: r }, j.createElement(Qt.Provider, { value: { setFloating: P, setReference: w.setReference, styles: y, getReferenceProps: U, getFloatingProps: q, slot: R } }, e));
}
function Gm(e) {
  be(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
      if (isNaN(r)) return;
      let o = parseInt(n);
      isNaN(o) || r !== o && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function Um(e, t) {
  var n, r, o;
  let a = Ir((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = Ir((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), i = Ir((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: a, offset: l, padding: i };
}
function Ir(e, t, n = void 0) {
  let r = it(), o = I((c, u) => {
    if (c == null) return [n, null];
    if (typeof c == "number") return [c, null];
    if (typeof c == "string") {
      if (!u) return [n, null];
      let d = Zs(c, u);
      return [d, (f) => {
        let h = Hi(c);
        {
          let m = h.map((p) => window.getComputedStyle(u).getPropertyValue(p));
          r.requestAnimationFrame(function p() {
            r.nextFrame(p);
            let g = !1;
            for (let [w, y] of h.entries()) {
              let b = window.getComputedStyle(u).getPropertyValue(y);
              if (m[w] !== b) {
                m[w] = b, g = !0;
                break;
              }
            }
            if (!g) return;
            let x = Zs(c, u);
            d !== x && (f(x), d = x);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), a = ge(() => o(e, t)[0], [e, t]), [l = a, i] = F();
  return be(() => {
    let [c, u] = o(e, t);
    if (i(c), !!u) return u(i);
  }, [e, t]), l;
}
function Hi(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...Hi(o)] : [r];
  }
  return [];
}
function Zs(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function qm({ children: e, freeze: t }, n) {
  let r = Vi(t, e);
  return ho(r) ? aa(r, { ref: n }) : S.createElement(S.Fragment, null, r);
}
S.forwardRef(qm);
function Vi(e, t) {
  let [n, r] = F(t);
  return !e && n !== t && r(t), e ? n : t;
}
let ur = ye(null);
ur.displayName = "OpenClosedContext";
var Ne = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ne || {});
function It() {
  return de(ur);
}
function Bo({ value: e, children: t }) {
  return S.createElement(ur.Provider, { value: e }, t);
}
function Yi({ children: e }) {
  return S.createElement(ur.Provider, { value: null }, e);
}
function Km(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let xt = [];
Km(() => {
  function e(t) {
    if (!tt(t.target) || t.target === document.body || xt[0] === t.target) return;
    let n = t.target;
    n = n.closest(Wn), xt.unshift(n ?? t.target), xt = xt.filter((r) => r != null && r.isConnected), xt.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Xm(e) {
  throw new Error("Unexpected object: " + e);
}
var je = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(je || {});
function Pn(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let a = 0; a < n.length; ++a) if (!t.resolveDisabled(n[a], a, n)) return a;
      return r;
    }
    case 1: {
      o === -1 && (o = n.length);
      for (let a = o - 1; a >= 0; --a) if (!t.resolveDisabled(n[a], a, n)) return a;
      return r;
    }
    case 2: {
      for (let a = o + 1; a < n.length; ++a) if (!t.resolveDisabled(n[a], a, n)) return a;
      return r;
    }
    case 3: {
      for (let a = n.length - 1; a >= 0; --a) if (!t.resolveDisabled(n[a], a, n)) return a;
      return r;
    }
    case 4: {
      for (let a = 0; a < n.length; ++a) if (t.resolveId(n[a], a, n) === e.id) return a;
      return r;
    }
    case 5:
      return null;
    default:
      Xm(e);
  }
}
function dr(e) {
  let t = I(e), n = G(!1);
  se(() => (n.current = !1, () => {
    n.current = !0, Xn(() => {
      n.current && t();
    });
  }), [t]);
}
let zi = ye(!1);
function Qm() {
  return de(zi);
}
function Js(e) {
  return S.createElement(zi.Provider, { value: e.force }, e.children);
}
function Zm(e) {
  let t = Qm(), n = de(Ui), [r, o] = F(() => {
    var a;
    if (!t && n !== null) return (a = n.current) != null ? a : null;
    if (nt.isServer) return null;
    let l = e == null ? void 0 : e.getElementById("headlessui-portal-root");
    if (l) return l;
    if (e === null) return null;
    let i = e.createElement("div");
    return i.setAttribute("id", "headlessui-portal-root"), e.body.appendChild(i);
  });
  return se(() => {
    r !== null && (e != null && e.body.contains(r) || e == null || e.body.appendChild(r));
  }, [r, e]), se(() => {
    t || n !== null && o(n.current);
  }, [n, o, t]), r;
}
let Gi = ce, Jm = fe(function(e, t) {
  let { ownerDocument: n = null, ...r } = e, o = G(null), a = we(oi((h) => {
    o.current = h;
  }), t), l = Ft(o.current), i = n ?? l, c = Zm(i), u = de(uo), d = it(), f = he();
  return dr(() => {
    var h;
    c && c.childNodes.length <= 0 && ((h = c.parentElement) == null || h.removeChild(c));
  }), c ? ia(S.createElement("div", { "data-headlessui-portal": "", ref: (h) => {
    d.dispose(), u && h && d.add(u.register(h));
  } }, f({ ourProps: { ref: a }, theirProps: r, slot: {}, defaultTag: Gi, name: "Portal" })), c) : null;
});
function e0(e, t) {
  let n = we(t), { enabled: r = !0, ownerDocument: o, ...a } = e, l = he();
  return r ? S.createElement(Jm, { ...a, ownerDocument: o, ref: n }) : l({ ourProps: { ref: n }, theirProps: a, slot: {}, defaultTag: Gi, name: "Portal" });
}
let t0 = ce, Ui = ye(null);
function n0(e, t) {
  let { target: n, ...r } = e, o = { ref: we(t) }, a = he();
  return S.createElement(Ui.Provider, { value: n }, a({ ourProps: o, theirProps: r, defaultTag: t0, name: "Popover.Group" }));
}
let uo = ye(null);
function qi() {
  let e = de(uo), t = G([]), n = I((a) => (t.current.push(a), e && e.register(a), () => r(a))), r = I((a) => {
    let l = t.current.indexOf(a);
    l !== -1 && t.current.splice(l, 1), e && e.unregister(a);
  }), o = ge(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, ge(() => function({ children: a }) {
    return S.createElement(uo.Provider, { value: o }, a);
  }, [o])];
}
let r0 = fe(e0), Ki = fe(n0), Ho = Object.assign(r0, { Group: Ki });
const Rn = { Idle: { kind: "Idle" }, Tracked: (e) => ({ kind: "Tracked", position: e }), Moved: { kind: "Moved" } };
function Xi(e) {
  let t = e.getBoundingClientRect();
  return `${t.x},${t.y}`;
}
function o0(e, t, n) {
  let r = Ue();
  if (t.kind === "Tracked") {
    let o = function() {
      a !== Xi(e) && (r.dispose(), n());
    }, { position: a } = t, l = new ResizeObserver(o);
    l.observe(e), r.add(() => l.disconnect()), r.addEventListener(window, "scroll", o, { passive: !0 }), r.addEventListener(window, "resize", o);
  }
  return () => r.dispose();
}
function s0(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = bn(e, "escape");
  Ro(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === le.Escape && n(o));
  });
}
function a0() {
  var e;
  let [t] = F(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = F((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return be(() => {
    if (!t) return;
    function o(a) {
      r(a.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function Qi({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = I(() => {
    var o, a;
    let l = At(n), i = [];
    for (let c of e) c !== null && (ut(c) ? i.push(c) : "current" in c && ut(c.current) && i.push(c.current));
    if (t != null && t.current) for (let c of t.current) i.push(c);
    for (let c of (o = l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? o : []) c !== document.body && c !== document.head && ut(c) && c.id !== "headlessui-portal-root" && (n && (c.contains(n) || c.contains((a = n == null ? void 0 : n.getRootNode()) == null ? void 0 : a.host)) || i.some((u) => c.contains(u)) || i.push(c));
    return i;
  });
  return { resolveContainers: r, contains: I((o) => r().some((a) => a.contains(o))) };
}
let Zi = ye(null);
function Yn({ children: e, node: t }) {
  let [n, r] = F(null), o = Vo(t ?? n);
  return S.createElement(Zi.Provider, { value: o }, e, o === null && S.createElement(jt, { features: ht.Hidden, ref: (a) => {
    var l, i;
    if (a) {
      for (let c of (i = (l = At(a)) == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? i : []) if (c !== document.body && c !== document.head && ut(c) && c != null && c.contains(a)) {
        r(c);
        break;
      }
    }
  } }));
}
function Vo(e = null) {
  var t;
  return (t = de(Zi)) != null ? t : e;
}
function i0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in j ? ((t) => t.useSyncExternalStore)(j)(() => () => {
  }, () => !1, () => !e) : !1;
}
function fr() {
  let e = i0(), [t, n] = j.useState(nt.isHandoffComplete);
  return t && nt.isHandoffComplete === !1 && n(!1), j.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), j.useEffect(() => nt.handoff(), []), e ? !1 : t;
}
function Yo() {
  let e = G(!1);
  return be(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var ze = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ze || {});
function zo() {
  let e = G(0);
  return yi(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Ji(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) ut(n.current) && t.add(n.current);
  return t;
}
let l0 = "div";
var Ct = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(Ct || {});
function c0(e, t) {
  let n = G(null), r = we(n, t), { initialFocus: o, initialFocusFallback: a, containers: l, features: i = 15, ...c } = e;
  fr() || (i = 0);
  let u = Ft(n.current);
  m0(i, { ownerDocument: u });
  let d = h0(i, { ownerDocument: u, container: n, initialFocus: o, initialFocusFallback: a });
  p0(i, { ownerDocument: u, container: n, containers: l, previousActiveElement: d });
  let f = zo(), h = I((y) => {
    if (!Ae(n.current)) return;
    let b = n.current;
    ((N) => N())(() => {
      Se(f.current, { [ze.Forwards]: () => {
        Ye(b, Pe.First, { skipElements: [y.relatedTarget, a] });
      }, [ze.Backwards]: () => {
        Ye(b, Pe.Last, { skipElements: [y.relatedTarget, a] });
      } });
    });
  }), m = bn(!!(i & 2), "focus-trap#tab-lock"), p = it(), g = G(!1), x = { ref: r, onKeyDown(y) {
    y.key == "Tab" && (g.current = !0, p.requestAnimationFrame(() => {
      g.current = !1;
    }));
  }, onBlur(y) {
    if (!(i & 4)) return;
    let b = Ji(l);
    Ae(n.current) && b.add(n.current);
    let N = y.relatedTarget;
    tt(N) && N.dataset.headlessuiFocusGuard !== "true" && (el(b, N) || (g.current ? Ye(n.current, Se(f.current, { [ze.Forwards]: () => Pe.Next, [ze.Backwards]: () => Pe.Previous }) | Pe.WrapAround, { relativeTo: y.target }) : tt(y.target) && dt(y.target)));
  } }, w = he();
  return S.createElement(S.Fragment, null, m && S.createElement(jt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: h, features: ht.Focusable }), w({ ourProps: x, theirProps: c, defaultTag: l0, name: "FocusTrap" }), m && S.createElement(jt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: h, features: ht.Focusable }));
}
let u0 = fe(c0), d0 = Object.assign(u0, { features: Ct });
function f0(e = !0) {
  let t = G(xt.slice());
  return Lo(([n], [r]) => {
    r === !0 && n === !1 && Xn(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = xt.slice());
  }, [e, xt, t]), I(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function m0(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = f0(n);
  Lo(() => {
    n || Ka(t == null ? void 0 : t.body) && dt(r());
  }, [n]), dr(() => {
    n && dt(r());
  });
}
function h0(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let a = G(null), l = bn(!!(e & 1), "focus-trap#initial-focus"), i = Yo();
  return Lo(() => {
    if (e === 0) return;
    if (!l) {
      o != null && o.current && dt(o.current);
      return;
    }
    let c = n.current;
    c && Xn(() => {
      if (!i.current) return;
      let u = t == null ? void 0 : t.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === u) {
          a.current = u;
          return;
        }
      } else if (c.contains(u)) {
        a.current = u;
        return;
      }
      if (r != null && r.current) dt(r.current);
      else {
        if (e & 16) {
          if (Ye(c, Pe.First | Pe.AutoFocus) !== Gt.Error) return;
        } else if (Ye(c, Pe.First) !== Gt.Error) return;
        if (o != null && o.current && (dt(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, l, e]), a;
}
function p0(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let a = Yo(), l = !!(e & 4);
  Ro(t == null ? void 0 : t.defaultView, "focus", (i) => {
    if (!l || !a.current) return;
    let c = Ji(r);
    Ae(n.current) && c.add(n.current);
    let u = o.current;
    if (!u) return;
    let d = i.target;
    Ae(d) ? el(c, d) ? (o.current = d, dt(d)) : (i.preventDefault(), i.stopPropagation(), dt(u)) : dt(o.current);
  }, !0);
}
function el(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function tl(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || !ln((t = e.as) != null ? t : rl) || S.Children.count(e.children) === 1;
}
let mr = ye(null);
mr.displayName = "TransitionContext";
var g0 = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(g0 || {});
function v0() {
  let e = de(mr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function x0() {
  let e = de(hr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let hr = ye(null);
hr.displayName = "NestingContext";
function pr(e) {
  return "children" in e ? pr(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function nl(e, t) {
  let n = ot(e), r = G([]), o = Yo(), a = it(), l = I((m, p = bt.Hidden) => {
    let g = r.current.findIndex(({ el: x }) => x === m);
    g !== -1 && (Se(p, { [bt.Unmount]() {
      r.current.splice(g, 1);
    }, [bt.Hidden]() {
      r.current[g].state = "hidden";
    } }), a.microTask(() => {
      var x;
      !pr(r) && o.current && ((x = n.current) == null || x.call(n));
    }));
  }), i = I((m) => {
    let p = r.current.find(({ el: g }) => g === m);
    return p ? p.state !== "visible" && (p.state = "visible") : r.current.push({ el: m, state: "visible" }), () => l(m, bt.Unmount);
  }), c = G([]), u = G(Promise.resolve()), d = G({ enter: [], leave: [] }), f = I((m, p, g) => {
    c.current.splice(0), t && (t.chains.current[p] = t.chains.current[p].filter(([x]) => x !== m)), t == null || t.chains.current[p].push([m, new Promise((x) => {
      c.current.push(x);
    })]), t == null || t.chains.current[p].push([m, new Promise((x) => {
      Promise.all(d.current[p].map(([w, y]) => y)).then(() => x());
    })]), p === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => g(p)) : g(p);
  }), h = I((m, p, g) => {
    Promise.all(d.current[p].splice(0).map(([x, w]) => w)).then(() => {
      var x;
      (x = c.current.shift()) == null || x();
    }).then(() => g(p));
  });
  return ge(() => ({ children: r, register: i, unregister: l, onStart: f, onStop: h, wait: u, chains: d }), [i, l, r, f, h, d, u]);
}
let rl = ce, ol = st.RenderStrategy;
function b0(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: a, afterEnter: l, beforeLeave: i, afterLeave: c, enter: u, enterFrom: d, enterTo: f, entered: h, leave: m, leaveFrom: p, leaveTo: g, ...x } = e, [w, y] = F(null), b = G(null), N = tl(e), O = we(...N ? [b, t, y] : t === null ? [] : [t]), R = (n = x.unmount) == null || n ? bt.Unmount : bt.Hidden, { show: M, appear: U, initial: q } = v0(), [P, B] = F(M ? "visible" : "hidden"), K = x0(), { register: A, unregister: $ } = K;
  be(() => A(b), [A, b]), be(() => {
    if (R === bt.Hidden && b.current) {
      if (M && P !== "visible") {
        B("visible");
        return;
      }
      return Se(P, { hidden: () => $(b), visible: () => A(b) });
    }
  }, [P, b, A, $, M, R]);
  let L = fr();
  be(() => {
    if (N && L && P === "visible" && b.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [b, P, L, N]);
  let V = q && !U, X = U && M && q, W = G(!1), H = nl(() => {
    W.current || (B("hidden"), $(b));
  }, K), Z = I((J) => {
    W.current = !0;
    let ae = J ? "enter" : "leave";
    H.onStart(b, ae, (pe) => {
      pe === "enter" ? a == null || a() : pe === "leave" && (i == null || i());
    });
  }), Y = I((J) => {
    let ae = J ? "enter" : "leave";
    W.current = !1, H.onStop(b, ae, (pe) => {
      pe === "enter" ? l == null || l() : pe === "leave" && (c == null || c());
    }), ae === "leave" && !pr(H) && (B("hidden"), $(b));
  });
  se(() => {
    N && o || (Z(M), Y(M));
  }, [M, N, o]);
  let te = !(!o || !N || !L || V), [, E] = or(te, w, M, { start: Z, end: Y }), k = vt({ ref: O, className: ((r = ro(x.className, X && u, X && d, E.enter && u, E.enter && E.closed && d, E.enter && !E.closed && f, E.leave && m, E.leave && !E.closed && p, E.leave && E.closed && g, !E.transition && M && h)) == null ? void 0 : r.trim()) || void 0, ...rr(E) }), D = 0;
  P === "visible" && (D |= Ne.Open), P === "hidden" && (D |= Ne.Closed), M && P === "hidden" && (D |= Ne.Opening), !M && P === "visible" && (D |= Ne.Closing);
  let T = he();
  return S.createElement(hr.Provider, { value: H }, S.createElement(Bo, { value: D }, T({ ourProps: k, theirProps: x, defaultTag: rl, features: ol, visible: P === "visible", name: "Transition.Child" })));
}
function w0(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...a } = e, l = G(null), i = tl(e), c = we(...i ? [l, t] : t === null ? [] : [t]);
  fr();
  let u = It();
  if (n === void 0 && u !== null && (n = (u & Ne.Open) === Ne.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [d, f] = F(n ? "visible" : "hidden"), h = nl(() => {
    n || f("hidden");
  }), [m, p] = F(!0), g = G([n]);
  be(() => {
    m !== !1 && g.current[g.current.length - 1] !== n && (g.current.push(n), p(!1));
  }, [g, n]);
  let x = ge(() => ({ show: n, appear: r, initial: m }), [n, r, m]);
  be(() => {
    n ? f("visible") : !pr(h) && l.current !== null && f("hidden");
  }, [n, h]);
  let w = { unmount: o }, y = I(() => {
    var O;
    m && p(!1), (O = e.beforeEnter) == null || O.call(e);
  }), b = I(() => {
    var O;
    m && p(!1), (O = e.beforeLeave) == null || O.call(e);
  }), N = he();
  return S.createElement(hr.Provider, { value: h }, S.createElement(mr.Provider, { value: x }, N({ ourProps: { ...w, as: ce, children: S.createElement(sl, { ref: c, ...w, ...a, beforeEnter: y, beforeLeave: b }) }, theirProps: {}, defaultTag: ce, features: ol, visible: d === "visible", name: "Transition" })));
}
function y0(e, t) {
  let n = de(mr) !== null, r = It() !== null;
  return S.createElement(S.Fragment, null, !n && r ? S.createElement(fo, { ref: t, ...e }) : S.createElement(sl, { ref: t, ...e }));
}
let fo = fe(w0), sl = fe(b0), Go = fe(y0), Te = Object.assign(fo, { Child: Go, Root: fo });
var j0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(j0 || {}), E0 = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(E0 || {});
let k0 = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Uo = ye(null);
Uo.displayName = "DialogContext";
function gr(e) {
  let t = de(Uo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, gr), n;
  }
  return t;
}
function N0(e, t) {
  return Se(t.type, k0, e, t);
}
let ea = fe(function(e, t) {
  let n = Re(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: a, initialFocus: l, role: i = "dialog", autoFocus: c = !0, __demoMode: u = !1, unmount: d = !1, ...f } = e, h = G(!1);
  i = function() {
    return i === "dialog" || i === "alertdialog" ? i : (h.current || (h.current = !0, console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let m = It();
  o === void 0 && m !== null && (o = (m & Ne.Open) === Ne.Open);
  let p = G(null), g = we(p, t), x = Ft(p.current), w = o ? 0 : 1, [y, b] = Hl(N0, { titleId: null, descriptionId: null, panelRef: Vl() }), N = I(() => a(!1)), O = I((E) => b({ type: 0, id: E })), R = fr() ? w === 0 : !1, [M, U] = qi(), q = { get current() {
    var E;
    return (E = y.panelRef.current) != null ? E : p.current;
  } }, P = Vo(), { resolveContainers: B } = Qi({ mainTreeNode: P, portals: M, defaultContainers: [q] }), K = m !== null ? (m & Ne.Closing) === Ne.Closing : !1;
  xi(u || K ? !1 : R, { allowed: I(() => {
    var E, k;
    return [(k = (E = p.current) == null ? void 0 : E.closest("[data-headlessui-portal]")) != null ? k : null];
  }), disallowed: I(() => {
    var E;
    return [(E = P == null ? void 0 : P.closest("body > *:not(#headlessui-portal-root)")) != null ? E : null];
  }) });
  let A = xn.get(null);
  be(() => {
    if (R) return A.actions.push(r), () => A.actions.pop(r);
  }, [A, r, R]);
  let $ = ke(A, re((E) => A.selectors.isTop(E, r), [A, r]));
  Mo($, B, (E) => {
    E.preventDefault(), N();
  }), s0($, x == null ? void 0 : x.defaultView, (E) => {
    E.preventDefault(), E.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), N();
  }), Do(u || K ? !1 : R, x, B), $o(R, p, N);
  let [L, V] = ai(), X = ge(() => [{ dialogState: w, close: N, setTitleId: O, unmount: d }, y], [w, N, O, d, y]), W = Me({ open: w === 0 }), H = { ref: g, id: r, role: i, tabIndex: -1, "aria-modal": u ? void 0 : w === 0 ? !0 : void 0, "aria-labelledby": y.titleId, "aria-describedby": L, unmount: d }, Z = !a0(), Y = Ct.None;
  R && !u && (Y |= Ct.RestoreFocus, Y |= Ct.TabLock, c && (Y |= Ct.AutoFocus), Z && (Y |= Ct.InitialFocus));
  let te = he();
  return S.createElement(Yi, null, S.createElement(Js, { force: !0 }, S.createElement(Ho, null, S.createElement(Uo.Provider, { value: X }, S.createElement(Ki, { target: p }, S.createElement(Js, { force: !1 }, S.createElement(V, { slot: W }, S.createElement(U, null, S.createElement(d0, { initialFocus: l, initialFocusFallback: p, containers: B, features: Y }, S.createElement(Co, { value: N }, te({ ourProps: H, theirProps: f, slot: W, defaultTag: O0, features: S0, visible: w === 0, name: "Dialog" })))))))))));
}), O0 = "div", S0 = st.RenderStrategy | st.Static;
function C0(e, t) {
  let { transition: n = !1, open: r, ...o } = e, a = It(), l = e.hasOwnProperty("open") || a !== null, i = e.hasOwnProperty("onClose");
  if (!l && !i) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!l) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!i) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!a && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? S.createElement(Yn, null, S.createElement(Te, { show: r, transition: n, unmount: o.unmount }, S.createElement(ea, { ref: t, ...o }))) : S.createElement(Yn, null, S.createElement(ea, { ref: t, open: r, ...o }));
}
let T0 = "div";
function $0(e, t) {
  let n = Re(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...a } = e, [{ dialogState: l, unmount: i }, c] = gr("Dialog.Panel"), u = we(t, c.panelRef), d = Me({ open: l === 0 }), f = I((x) => {
    x.stopPropagation();
  }), h = { ref: u, id: r, onClick: f }, m = o ? Go : ce, p = o ? { unmount: i } : {}, g = he();
  return S.createElement(m, { ...p }, g({ ourProps: h, theirProps: a, slot: d, defaultTag: T0, name: "Dialog.Panel" }));
}
let P0 = "div";
function M0(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: a }] = gr("Dialog.Backdrop"), l = Me({ open: o === 0 }), i = { ref: t, "aria-hidden": !0 }, c = n ? Go : ce, u = n ? { unmount: a } : {}, d = he();
  return S.createElement(c, { ...u }, d({ ourProps: i, theirProps: r, slot: l, defaultTag: P0, name: "Dialog.Backdrop" }));
}
let R0 = "h2";
function F0(e, t) {
  let n = Re(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: a, setTitleId: l }] = gr("Dialog.Title"), i = we(t);
  se(() => (l(r), () => l(null)), [r, l]);
  let c = Me({ open: a === 0 }), u = { ref: i, id: r };
  return he()({ ourProps: u, theirProps: o, slot: c, defaultTag: R0, name: "Dialog.Title" });
}
let D0 = fe(C0), L0 = fe($0);
fe(M0);
let A0 = fe(F0), ft = Object.assign(D0, { Panel: L0, Title: A0, Description: ii }), ta = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function na(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", o = e.cloneNode(!0);
  if (!Ae(o)) return r;
  let a = !1;
  for (let i of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) i.remove(), a = !0;
  let l = a ? (n = o.innerText) != null ? n : "" : r;
  return ta.test(l) && (l = l.replace(ta, "")), l;
}
function I0(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((o) => {
      let a = document.getElementById(o);
      if (a) {
        let l = a.getAttribute("aria-label");
        return typeof l == "string" ? l.trim() : na(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return na(e).trim();
}
function _0(e) {
  let t = G(""), n = G("");
  return I(() => {
    let r = e.current;
    if (!r) return "";
    let o = r.innerText;
    if (t.current === o) return n.current;
    let a = I0(r).trim().toLowerCase();
    return t.current = o, n.current = a, a;
  });
}
var W0 = Object.defineProperty, B0 = (e, t, n) => t in e ? W0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ra = (e, t, n) => (B0(e, typeof t != "symbol" ? t + "" : t, n), n), De = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(De || {}), wt = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(wt || {}), Fn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Fn || {}), al = ((e) => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.SelectOption = 5] = "SelectOption", e[e.RegisterOptions = 6] = "RegisterOptions", e[e.UnregisterOptions = 7] = "UnregisterOptions", e[e.SetButtonElement = 8] = "SetButtonElement", e[e.SetOptionsElement = 9] = "SetOptionsElement", e[e.SortOptions = 10] = "SortOptions", e[e.MarkButtonAsMoved = 11] = "MarkButtonAsMoved", e))(al || {});
function oa(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = bi(t(e.options.slice()), (a) => a.dataRef.current.domRef.current), o = n ? r.indexOf(n) : null;
  return o === -1 && (o = null), { options: r, activeOptionIndex: o };
}
let H0 = { 1(e) {
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let t = e.buttonElement ? Rn.Tracked(Xi(e.buttonElement)) : e.buttonPositionState;
  return { ...e, activeOptionIndex: null, pendingFocus: { focus: je.Nothing }, listboxState: 1, __demoMode: !1, buttonPositionState: t };
}, 0(e, t) {
  if (e.dataRef.current.disabled || e.listboxState === 0) return e;
  let n = e.activeOptionIndex, { isSelected: r } = e.dataRef.current, o = e.options.findIndex((a) => r(a.dataRef.current.value));
  return o !== -1 && (n = o), { ...e, frozenValue: !1, pendingFocus: t.focus, listboxState: 0, activeOptionIndex: n, __demoMode: !1, buttonPositionState: Rn.Idle };
}, 2(e, t) {
  var n, r, o, a, l;
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let i = { ...e, searchQuery: "", activationTrigger: (n = t.trigger) != null ? n : 1, __demoMode: !1 };
  if (t.focus === je.Nothing) return { ...i, activeOptionIndex: null };
  if (t.focus === je.Specific) return { ...i, activeOptionIndex: e.options.findIndex((d) => d.id === t.id) };
  if (t.focus === je.Previous) {
    let d = e.activeOptionIndex;
    if (d !== null) {
      let f = e.options[d].dataRef.current.domRef, h = Pn(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (m) => m.id, resolveDisabled: (m) => m.dataRef.current.disabled });
      if (h !== null) {
        let m = e.options[h].dataRef.current.domRef;
        if (((r = f.current) == null ? void 0 : r.previousElementSibling) === m.current || ((o = m.current) == null ? void 0 : o.previousElementSibling) === null) return { ...i, activeOptionIndex: h };
      }
    }
  } else if (t.focus === je.Next) {
    let d = e.activeOptionIndex;
    if (d !== null) {
      let f = e.options[d].dataRef.current.domRef, h = Pn(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (m) => m.id, resolveDisabled: (m) => m.dataRef.current.disabled });
      if (h !== null) {
        let m = e.options[h].dataRef.current.domRef;
        if (((a = f.current) == null ? void 0 : a.nextElementSibling) === m.current || ((l = m.current) == null ? void 0 : l.nextElementSibling) === null) return { ...i, activeOptionIndex: h };
      }
    }
  }
  let c = oa(e), u = Pn(t, { resolveItems: () => c.options, resolveActiveIndex: () => c.activeOptionIndex, resolveId: (d) => d.id, resolveDisabled: (d) => d.dataRef.current.disabled });
  return { ...i, ...c, activeOptionIndex: u };
}, 3: (e, t) => {
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), o = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find((l) => {
    var i;
    return !l.dataRef.current.disabled && ((i = l.dataRef.current.textValue) == null ? void 0 : i.startsWith(r));
  }), a = o ? e.options.indexOf(o) : -1;
  return a === -1 || a === e.activeOptionIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeOptionIndex: a, activationTrigger: 1 };
}, 4(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : { ...e, searchQuery: "" };
}, 5(e) {
  return e.dataRef.current.mode === 0 ? { ...e, frozenValue: !0 } : { ...e };
}, 6: (e, t) => {
  let n = e.options.concat(t.options), r = e.activeOptionIndex;
  if (e.pendingFocus.focus !== je.Nothing && (r = Pn(e.pendingFocus, { resolveItems: () => n, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled })), e.activeOptionIndex === null) {
    let { isSelected: o } = e.dataRef.current;
    if (o) {
      let a = n.findIndex((l) => o == null ? void 0 : o(l.dataRef.current.value));
      a !== -1 && (r = a);
    }
  }
  return { ...e, options: n, activeOptionIndex: r, pendingFocus: { focus: je.Nothing }, pendingShouldSort: !0 };
}, 7: (e, t) => {
  let n = e.options, r = [], o = new Set(t.options);
  for (let [a, l] of n.entries()) if (o.has(l.id) && (r.push(a), o.delete(l.id), o.size === 0)) break;
  if (r.length > 0) {
    n = n.slice();
    for (let a of r.reverse()) n.splice(a, 1);
  }
  return { ...e, options: n, activationTrigger: 1 };
}, 8: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 9: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element }, 10: (e) => e.pendingShouldSort ? { ...e, ...oa(e), pendingShouldSort: !1 } : e, 11(e) {
  return e.buttonPositionState.kind !== "Tracked" ? e : { ...e, buttonPositionState: Rn.Moved };
} }, V0 = class il extends To {
  constructor(t) {
    super(t), ra(this, "actions", { onChange: (n) => {
      let { onChange: r, compare: o, mode: a, value: l } = this.state.dataRef.current;
      return Se(a, { 0: () => r == null ? void 0 : r(n), 1: () => {
        let i = l.slice(), c = i.findIndex((u) => o(u, n));
        return c === -1 ? i.push(n) : i.splice(c, 1), r == null ? void 0 : r(i);
      } });
    }, registerOption: Pr(() => {
      let n = [], r = /* @__PURE__ */ new Set();
      return [(o, a) => {
        r.has(a) || (r.add(a), n.push({ id: o, dataRef: a }));
      }, () => (r.clear(), this.send({ type: 6, options: n.splice(0) }))];
    }), unregisterOption: Pr(() => {
      let n = [];
      return [(r) => n.push(r), () => {
        this.send({ type: 7, options: n.splice(0) });
      }];
    }), goToOption: Pr(() => {
      let n = null;
      return [(r, o) => {
        n = { type: 2, ...r, trigger: o };
      }, () => n && this.send(n)];
    }), closeListbox: () => {
      this.send({ type: 1 });
    }, openListbox: (n) => {
      this.send({ type: 0, focus: n });
    }, selectActiveOption: () => {
      var n;
      if (this.state.activeOptionIndex !== null) {
        let { dataRef: r } = this.state.options[this.state.activeOptionIndex];
        this.actions.selectOption(r.current.value);
      } else this.state.dataRef.current.mode === 0 && (this.actions.closeListbox(), (n = this.state.buttonElement) == null || n.focus({ preventScroll: !0 }));
    }, selectOption: (n) => {
      this.send({ type: 5, value: n });
    }, search: (n) => {
      this.send({ type: 3, value: n });
    }, clearSearch: () => {
      this.send({ type: 4 });
    }, setButtonElement: (n) => {
      this.send({ type: 8, element: n });
    }, setOptionsElement: (n) => {
      this.send({ type: 9, element: n });
    } }), ra(this, "selectors", { activeDescendantId(n) {
      var r;
      let o = n.activeOptionIndex, a = n.options;
      return o === null || (r = a[o]) == null ? void 0 : r.id;
    }, isActive(n, r) {
      var o;
      let a = n.activeOptionIndex, l = n.options;
      return a !== null ? ((o = l[a]) == null ? void 0 : o.id) === r : !1;
    }, hasFrozenValue(n) {
      return n.frozenValue;
    }, shouldScrollIntoView(n, r) {
      return n.__demoMode || n.listboxState !== 0 || n.activationTrigger === 0 ? !1 : this.isActive(n, r);
    }, didButtonMove(n) {
      return n.buttonPositionState.kind === "Moved";
    } }), this.on(6, () => {
      requestAnimationFrame(() => {
        this.send({ type: 10 });
      });
    });
    {
      let n = this.state.id, r = xn.get(null);
      this.disposables.add(r.on(gi.Push, (o) => {
        !r.selectors.isTop(o, n) && this.state.listboxState === 0 && this.actions.closeListbox();
      })), this.on(0, () => r.actions.push(n)), this.on(1, () => r.actions.pop(n));
    }
    this.disposables.group((n) => {
      this.on(1, (r) => {
        r.buttonElement && (n.dispose(), n.add(o0(r.buttonElement, r.buttonPositionState, () => {
          this.send({ type: 11 });
        })));
      });
    }), this.on(5, (n, r) => {
      var o;
      this.actions.onChange(r.value), this.state.dataRef.current.mode === 0 && (this.actions.closeListbox(), (o = this.state.buttonElement) == null || o.focus({ preventScroll: !0 }));
    });
  }
  static new({ id: t, __demoMode: n = !1 }) {
    return new il({ id: t, dataRef: { current: {} }, listboxState: n ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, buttonElement: null, optionsElement: null, pendingShouldSort: !1, pendingFocus: { focus: je.Nothing }, frozenValue: !1, __demoMode: n, buttonPositionState: Rn.Idle });
  }
  reduce(t, n) {
    return Se(n.type, H0, t, n);
  }
};
const ll = ye(null);
function qo(e) {
  let t = de(ll);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, cl), n;
  }
  return t;
}
function cl({ id: e, __demoMode: t = !1 }) {
  let n = ge(() => V0.new({ id: e, __demoMode: t }), []);
  return dr(() => n.dispose()), n;
}
let vr = ye(null);
vr.displayName = "ListboxDataContext";
function En(e) {
  let t = de(vr);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, En), n;
  }
  return t;
}
let Y0 = ce;
function z0(e, t) {
  let n = Re(), r = vn(), { value: o, defaultValue: a, form: l, name: i, onChange: c, by: u, invalid: d = !1, disabled: f = r || !1, horizontal: h = !1, multiple: m = !1, __demoMode: p = !1, ...g } = e;
  const x = h ? "horizontal" : "vertical";
  let w = we(t), y = ko(a), [b = m ? [] : void 0, N] = Eo(o, c, y), O = cl({ id: n, __demoMode: p }), R = G({ static: !1, hold: !1 }), M = G(/* @__PURE__ */ new Map()), U = _d(u), q = re((te) => Se(P.mode, { [wt.Multi]: () => b.some((E) => U(E, te)), [wt.Single]: () => U(b, te) }), [b]), P = Me({ value: b, disabled: f, invalid: d, mode: m ? wt.Multi : wt.Single, orientation: x, onChange: N, compare: U, isSelected: q, optionsPropsRef: R, listRef: M });
  be(() => {
    O.state.dataRef.current = P;
  }, [P]);
  let B = ke(O, (te) => te.listboxState), K = xn.get(null), A = ke(K, re((te) => K.selectors.isTop(te, n), [K, n])), [$, L] = ke(O, (te) => [te.buttonElement, te.optionsElement]);
  Mo(A, [$, L], (te, E) => {
    O.send({ type: al.CloseListbox }), Po(E, nr.Loose) || (te.preventDefault(), $ == null || $.focus());
  });
  let V = Me({ open: B === De.Open, disabled: f, invalid: d, value: b }), [X, W] = ci({ inherit: !0 }), H = { ref: w }, Z = re(() => {
    if (y !== void 0) return N == null ? void 0 : N(y);
  }, [N, y]), Y = he();
  return S.createElement(W, { value: X, props: { htmlFor: $ == null ? void 0 : $.id }, slot: { open: B === De.Open, disabled: f } }, S.createElement(Bi, null, S.createElement(ll.Provider, { value: O }, S.createElement(vr.Provider, { value: P }, S.createElement(Bo, { value: Se(B, { [De.Open]: Ne.Open, [De.Closed]: Ne.Closed }) }, i != null && b != null && S.createElement(Oo, { disabled: f, data: { [i]: b }, form: l, onReset: Z }), Y({ ourProps: H, theirProps: g, slot: V, defaultTag: Y0, name: "Listbox" }))))));
}
let G0 = "button";
function U0(e, t) {
  let n = Re(), r = Zn(), o = En("Listbox.Button"), a = qo("Listbox.Button"), { id: l = r || `headlessui-listbox-button-${n}`, disabled: i = o.disabled || !1, autoFocus: c = !1, ...u } = e, d = we(t, Ii(), a.actions.setButtonElement), f = zm(), [h, m, p] = ke(a, (L) => [L.listboxState, L.buttonElement, L.optionsElement]), g = h === De.Open;
  uf(g, { trigger: m, action: re((L) => {
    if (m != null && m.contains(L.target)) return Tn.Ignore;
    let V = L.target.closest('[role="option"]:not([data-disabled])');
    return Ae(V) ? Tn.Select(V) : p != null && p.contains(L.target) ? Tn.Ignore : Tn.Close;
  }, [m, p]), close: a.actions.closeListbox, select: a.actions.selectActiveOption });
  let x = I((L) => {
    switch (L.key) {
      case le.Enter:
        No(L.currentTarget);
        break;
      case le.Space:
      case le.ArrowDown:
        L.preventDefault(), a.actions.openListbox({ focus: o.value ? je.Nothing : je.First });
        break;
      case le.ArrowUp:
        L.preventDefault(), a.actions.openListbox({ focus: o.value ? je.Nothing : je.Last });
        break;
    }
  }), w = I((L) => {
    switch (L.key) {
      case le.Space:
        L.preventDefault();
        break;
    }
  }), y = Wd((L) => {
    var V;
    a.state.listboxState === De.Open ? (Ln(() => a.actions.closeListbox()), (V = a.state.buttonElement) == null || V.focus({ preventScroll: !0 })) : (L.preventDefault(), a.actions.openListbox({ focus: je.Nothing }));
  }), b = I((L) => L.preventDefault()), N = tr([l]), O = So(), { isFocusVisible: R, focusProps: M } = Kn({ autoFocus: c }), { isHovered: U, hoverProps: q } = qn({ isDisabled: i }), { pressed: P, pressProps: B } = Qn({ disabled: i }), K = Me({ open: h === De.Open, active: P || h === De.Open, disabled: i, invalid: o.invalid, value: o.value, hover: U, focus: R, autofocus: c }), A = ke(a, (L) => L.listboxState === De.Open), $ = Rt(f(), { ref: d, id: l, type: Fo(e, m), "aria-haspopup": "listbox", "aria-controls": p == null ? void 0 : p.id, "aria-expanded": A, "aria-labelledby": N, "aria-describedby": O, disabled: i || void 0, autoFocus: c, onKeyDown: x, onKeyUp: w, onKeyPress: b }, y, M, q, B);
  return he()({ ourProps: $, theirProps: u, slot: K, defaultTag: G0, name: "Listbox.Button" });
}
let ul = ye(!1), q0 = "div", K0 = st.RenderStrategy | st.Static;
function X0(e, t) {
  let n = Re(), { id: r = `headlessui-listbox-options-${n}`, anchor: o, portal: a = !1, modal: l = !0, transition: i = !1, ...c } = e, u = Ai(o), [d, f] = F(null);
  u && (a = !0);
  let h = En("Listbox.Options"), m = qo("Listbox.Options"), [p, g, x, w] = ke(m, (T) => [T.listboxState, T.buttonElement, T.optionsElement, T.__demoMode]), y = Ft(g), b = Ft(x), N = It(), [O, R] = or(i, d, N !== null ? (N & Ne.Open) === Ne.Open : p === De.Open);
  $o(O, g, m.actions.closeListbox);
  let M = w ? !1 : l && p === De.Open;
  Do(M, b);
  let U = w ? !1 : l && p === De.Open;
  xi(U, { allowed: re(() => [g, x], [g, x]) });
  let q = ke(m, m.selectors.didButtonMove) ? !1 : O, P = ke(m, m.selectors.hasFrozenValue) && !e.static, B = Vi(P, h.value), K = re((T) => h.compare(B, T), [h.compare, B]), A = ke(m, (T) => {
    var J;
    if (u == null || !((J = u == null ? void 0 : u.to) != null && J.includes("selection"))) return null;
    let ae = T.options.findIndex((pe) => K(pe.dataRef.current.value));
    return ae === -1 && (ae = 0), ae;
  }), $ = (() => {
    if (u == null) return;
    if (A === null) return { ...u, inner: void 0 };
    let T = Array.from(h.listRef.current.values());
    return { ...u, inner: { listRef: { current: T }, index: A } };
  })(), [L, V] = Wi($), X = _i(), W = we(t, u ? L : null, m.actions.setOptionsElement, f), H = it();
  se(() => {
    let T = x;
    T && p === De.Open && (Ka(T) || T == null || T.focus({ preventScroll: !0 }));
  }, [p, x]);
  let Z = I((T) => {
    var J;
    switch (H.dispose(), T.key) {
      case le.Space:
        if (m.state.searchQuery !== "") return T.preventDefault(), T.stopPropagation(), m.actions.search(T.key);
      case le.Enter:
        T.preventDefault(), T.stopPropagation(), m.actions.selectActiveOption();
        break;
      case Se(h.orientation, { vertical: le.ArrowDown, horizontal: le.ArrowRight }):
        return T.preventDefault(), T.stopPropagation(), m.actions.goToOption({ focus: je.Next });
      case Se(h.orientation, { vertical: le.ArrowUp, horizontal: le.ArrowLeft }):
        return T.preventDefault(), T.stopPropagation(), m.actions.goToOption({ focus: je.Previous });
      case le.Home:
      case le.PageUp:
        return T.preventDefault(), T.stopPropagation(), m.actions.goToOption({ focus: je.First });
      case le.End:
      case le.PageDown:
        return T.preventDefault(), T.stopPropagation(), m.actions.goToOption({ focus: je.Last });
      case le.Escape:
        T.preventDefault(), T.stopPropagation(), Ln(() => m.actions.closeListbox()), (J = m.state.buttonElement) == null || J.focus({ preventScroll: !0 });
        return;
      case le.Tab:
        T.preventDefault(), T.stopPropagation(), Ln(() => m.actions.closeListbox()), of(m.state.buttonElement, T.shiftKey ? Pe.Previous : Pe.Next);
        break;
      default:
        T.key.length === 1 && (m.actions.search(T.key), H.setTimeout(() => m.actions.clearSearch(), 350));
        break;
    }
  }), Y = ke(m, (T) => {
    var J;
    return (J = T.buttonElement) == null ? void 0 : J.id;
  }), te = Me({ open: p === De.Open }), E = Rt(u ? X() : {}, { id: r, ref: W, "aria-activedescendant": ke(m, m.selectors.activeDescendantId), "aria-multiselectable": h.mode === wt.Multi ? !0 : void 0, "aria-labelledby": Y, "aria-orientation": h.orientation, onKeyDown: Z, role: "listbox", tabIndex: p === De.Open ? 0 : void 0, style: { ...c.style, ...V, "--button-width": di(O, g, !0).width }, ...rr(R) }), k = he(), D = ge(() => h.mode === wt.Multi ? h : { ...h, isSelected: K }, [h, K]);
  return S.createElement(Ho, { enabled: a ? e.static || O : !1, ownerDocument: y }, S.createElement(vr.Provider, { value: D }, k({ ourProps: E, theirProps: c, slot: te, defaultTag: q0, features: K0, visible: q, name: "Listbox.Options" })));
}
let Q0 = "div";
function Z0(e, t) {
  let n = Re(), { id: r = `headlessui-listbox-option-${n}`, disabled: o = !1, value: a, ...l } = e, i = de(ul) === !0, c = En("Listbox.Option"), u = qo("Listbox.Option"), d = ke(u, (P) => u.selectors.isActive(P, r)), f = c.isSelected(a), h = G(null), m = _0(h), p = ot({ disabled: o, value: a, domRef: h, get textValue() {
    return m();
  } }), g = we(t, h, (P) => {
    P ? c.listRef.current.set(r, P) : c.listRef.current.delete(r);
  }), x = ke(u, (P) => u.selectors.shouldScrollIntoView(P, r));
  be(() => {
    if (x) return Ue().requestAnimationFrame(() => {
      var P, B;
      (B = (P = h.current) == null ? void 0 : P.scrollIntoView) == null || B.call(P, { block: "nearest" });
    });
  }, [x, h]), be(() => {
    if (!i) return u.actions.registerOption(r, p), () => u.actions.unregisterOption(r);
  }, [p, r, i]);
  let w = I((P) => {
    if (o) return P.preventDefault();
    u.actions.selectOption(a);
  }), y = I(() => {
    if (o) return u.actions.goToOption({ focus: je.Nothing });
    u.actions.goToOption({ focus: je.Specific, id: r });
  }), b = vf(), N = I((P) => b.update(P)), O = I((P) => {
    b.wasMoved(P) && (o || d && u.state.activationTrigger === Fn.Pointer || u.actions.goToOption({ focus: je.Specific, id: r }, Fn.Pointer));
  }), R = I((P) => {
    b.wasMoved(P) && (o || d && u.state.activationTrigger === Fn.Pointer && u.actions.goToOption({ focus: je.Nothing }));
  }), M = Me({ active: d, focus: d, selected: f, disabled: o, selectedOption: f && i }), U = i ? {} : { id: r, ref: g, role: "option", tabIndex: o === !0 ? void 0 : -1, "aria-disabled": o === !0 ? !0 : void 0, "aria-selected": f, disabled: void 0, onClick: w, onFocus: y, onPointerEnter: N, onMouseEnter: N, onPointerMove: O, onMouseMove: O, onPointerLeave: R, onMouseLeave: R }, q = he();
  return !f && i ? null : q({ ourProps: U, theirProps: l, slot: M, defaultTag: Q0, name: "Listbox.Option" });
}
let J0 = ce;
function eh(e, t) {
  let { options: n, placeholder: r, ...o } = e, a = { ref: we(t) }, l = En("ListboxSelectedOption"), i = Me({}), c = l.value === void 0 || l.value === null || l.mode === wt.Multi && Array.isArray(l.value) && l.value.length === 0, u = he();
  return S.createElement(ul.Provider, { value: !0 }, u({ ourProps: a, theirProps: { ...o, children: S.createElement(S.Fragment, null, r && c ? r : n) }, slot: i, defaultTag: J0, name: "ListboxSelectedOption" }));
}
let th = fe(z0), nh = fe(U0), rh = ui, oh = fe(X0), sh = fe(Z0), ah = fe(eh), ee = Object.assign(th, { Button: nh, Label: rh, Options: oh, Option: sh, SelectedOption: ah });
var ih = Object.defineProperty, lh = (e, t, n) => t in e ? ih(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sa = (e, t, n) => (lh(e, typeof t != "symbol" ? t + "" : t, n), n), $e = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($e || {}), ch = ((e) => (e[e.OpenPopover = 0] = "OpenPopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(ch || {});
let uh = { 0: (e) => e.popoverState === 0 ? e : { ...e, popoverState: 0, __demoMode: !1 }, 1(e) {
  return e.popoverState === 1 ? e : { ...e, popoverState: 1, __demoMode: !1 };
}, 2(e, t) {
  return e.button === t.button ? e : { ...e, button: t.button };
}, 3(e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, 4(e, t) {
  return e.panel === t.panel ? e : { ...e, panel: t.panel };
}, 5(e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
} };
class Ko extends To {
  constructor(t) {
    super(t), sa(this, "actions", { close: () => this.send({ type: 1 }), refocusableClose: (n) => {
      this.actions.close();
      let r = n ? Ae(n) ? n : "current" in n && Ae(n.current) ? n.current : this.state.button : this.state.button;
      r == null || r.focus();
    }, open: () => this.send({ type: 0 }), setButtonId: (n) => this.send({ type: 3, buttonId: n }), setButton: (n) => this.send({ type: 2, button: n }), setPanelId: (n) => this.send({ type: 5, panelId: n }), setPanel: (n) => this.send({ type: 4, panel: n }) }), sa(this, "selectors", { isPortalled: (n) => {
      var r;
      if (!n.button || !n.panel) return !1;
      let o = (r = At(n.button)) != null ? r : document;
      for (let f of o.querySelectorAll("body > *")) if (Number(f == null ? void 0 : f.contains(n.button)) ^ Number(f == null ? void 0 : f.contains(n.panel))) return !0;
      let a = wn(o), l = a.indexOf(n.button), i = (l + a.length - 1) % a.length, c = (l + 1) % a.length, u = a[i], d = a[c];
      return !n.panel.contains(u) && !n.panel.contains(d);
    } });
    {
      let n = this.state.id, r = xn.get(null);
      this.on(0, () => r.actions.push(n)), this.on(1, () => r.actions.pop(n));
    }
  }
  static new({ id: t, __demoMode: n = !1 }) {
    return new Ko({ id: t, __demoMode: n, popoverState: n ? 0 : 1, buttons: { current: [] }, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: { current: null }, afterPanelSentinel: { current: null }, afterButtonSentinel: { current: null } });
  }
  reduce(t, n) {
    return Se(n.type, uh, t, n);
  }
}
const dl = ye(null);
function xr(e) {
  let t = de(dl);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, xr), n;
  }
  return t;
}
function dh({ id: e, __demoMode: t = !1 }) {
  let n = ge(() => Ko.new({ id: e, __demoMode: t }), []);
  return dr(() => n.dispose()), n;
}
let Xo = ye(null);
Xo.displayName = "PopoverGroupContext";
function fl() {
  return de(Xo);
}
let br = ye(null);
br.displayName = "PopoverPanelContext";
function fh() {
  return de(br);
}
let mh = "div";
function hh(e, t) {
  var n;
  let r = Re(), { __demoMode: o = !1, ...a } = e, l = dh({ id: r, __demoMode: o }), i = G(null), c = we(t, oi(($) => {
    i.current = $;
  })), [u, d, f, h, m] = ke(l, re(($) => [$.popoverState, $.button, $.panel, $.buttonId, $.panelId], [])), p = af((n = i.current) != null ? n : d), g = ot(h), x = ot(m), w = ge(() => ({ buttonId: g, panelId: x, close: l.actions.close }), [g, x, l]), y = fl(), b = y == null ? void 0 : y.registerPopover, N = I(() => {
    var $, L;
    let V = Mt(($ = i.current) != null ? $ : d);
    return (L = y == null ? void 0 : y.isFocusWithinPopoverGroup()) != null ? L : V && ((d == null ? void 0 : d.contains(V)) || (f == null ? void 0 : f.contains(V)));
  });
  se(() => b == null ? void 0 : b(w), [b, w]);
  let [O, R] = qi(), M = Vo(d), U = Qi({ mainTreeNode: M, portals: O, defaultContainers: [{ get current() {
    return l.state.button;
  } }, { get current() {
    return l.state.panel;
  } }] });
  Ro(p, "focus", ($) => {
    var L, V, X, W, H, Z;
    $.target !== window && tt($.target) && l.state.popoverState === $e.Open && (N() || l.state.button && l.state.panel && (U.contains($.target) || (V = (L = l.state.beforePanelSentinel.current) == null ? void 0 : L.contains) != null && V.call(L, $.target) || (W = (X = l.state.afterPanelSentinel.current) == null ? void 0 : X.contains) != null && W.call(X, $.target) || (Z = (H = l.state.afterButtonSentinel.current) == null ? void 0 : H.contains) != null && Z.call(H, $.target) || l.actions.close()));
  }, !0);
  let q = u === $e.Open;
  Mo(q, U.resolveContainers, ($, L) => {
    l.actions.close(), Po(L, nr.Loose) || ($.preventDefault(), d == null || d.focus());
  });
  let P = Me({ open: u === $e.Open, close: l.actions.refocusableClose }), B = ke(l, re(($) => Se($.popoverState, { [$e.Open]: Ne.Open, [$e.Closed]: Ne.Closed }), [])), K = { ref: c }, A = he();
  return S.createElement(Yn, { node: M }, S.createElement(Bi, null, S.createElement(br.Provider, { value: null }, S.createElement(dl.Provider, { value: l }, S.createElement(Co, { value: l.actions.refocusableClose }, S.createElement(Bo, { value: B }, S.createElement(R, null, A({ ourProps: K, theirProps: a, slot: P, defaultTag: mh, name: "Popover" }))))))));
}
let ph = "button";
function gh(e, t) {
  let n = Re(), { id: r = `headlessui-popover-button-${n}`, disabled: o = !1, autoFocus: a = !1, ...l } = e, i = xr("Popover.Button"), [c, u, d, f, h, m, p] = ke(i, re((k) => [k.popoverState, i.selectors.isPortalled(k), k.button, k.buttonId, k.panel, k.panelId, k.afterButtonSentinel], [])), g = G(null), x = `headlessui-focus-sentinel-${Re()}`, w = fl(), y = w == null ? void 0 : w.closeOthers, b = fh() !== null;
  se(() => {
    if (!b) return i.actions.setButtonId(r), () => i.actions.setButtonId(null);
  }, [b, r, i]);
  let [N] = F(() => Symbol()), O = we(g, t, Ii(), I((k) => {
    if (!b) {
      if (k) i.state.buttons.current.push(N);
      else {
        let D = i.state.buttons.current.indexOf(N);
        D !== -1 && i.state.buttons.current.splice(D, 1);
      }
      i.state.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), k && i.actions.setButton(k);
    }
  })), R = we(g, t), M = I((k) => {
    var D, T, J;
    if (b) {
      if (i.state.popoverState === $e.Closed) return;
      switch (k.key) {
        case le.Space:
        case le.Enter:
          k.preventDefault(), (T = (D = k.target).click) == null || T.call(D), i.actions.close(), (J = i.state.button) == null || J.focus();
          break;
      }
    } else switch (k.key) {
      case le.Space:
      case le.Enter:
        k.preventDefault(), k.stopPropagation(), i.state.popoverState === $e.Closed ? (y == null || y(i.state.buttonId), i.actions.open()) : i.actions.close();
        break;
      case le.Escape:
        if (i.state.popoverState !== $e.Open) return y == null ? void 0 : y(i.state.buttonId);
        if (!g.current) return;
        let ae = Mt(g.current);
        if (ae && !g.current.contains(ae)) return;
        k.preventDefault(), k.stopPropagation(), i.actions.close();
        break;
    }
  }), U = I((k) => {
    b || k.key === le.Space && k.preventDefault();
  }), q = I((k) => {
    var D, T;
    zt(k.currentTarget) || o || (b ? (i.actions.close(), (D = i.state.button) == null || D.focus()) : (k.preventDefault(), k.stopPropagation(), i.state.popoverState === $e.Closed ? (y == null || y(i.state.buttonId), i.actions.open()) : i.actions.close(), (T = i.state.button) == null || T.focus()));
  }), P = I((k) => {
    k.preventDefault(), k.stopPropagation();
  }), { isFocusVisible: B, focusProps: K } = Kn({ autoFocus: a }), { isHovered: A, hoverProps: $ } = qn({ isDisabled: o }), { pressed: L, pressProps: V } = Qn({ disabled: o }), X = c === $e.Open, W = Me({ open: X, active: L || X, disabled: o, hover: A, focus: B, autofocus: a }), H = Fo(e, d), Z = Rt(b ? { ref: R, type: H, onKeyDown: M, onClick: q, disabled: o || void 0, autoFocus: a } : { ref: O, id: f, type: H, "aria-expanded": c === $e.Open, "aria-controls": h ? m : void 0, disabled: o || void 0, autoFocus: a, onKeyDown: M, onKeyUp: U, onClick: q, onMouseDown: P }, K, $, V), Y = zo(), te = I(() => {
    if (!Ae(i.state.panel)) return;
    let k = i.state.panel;
    function D() {
      Se(Y.current, { [ze.Forwards]: () => Ye(k, Pe.First), [ze.Backwards]: () => Ye(k, Pe.Last) }) === Gt.Error && Ye(wn(yt(i.state.button)).filter((T) => T.dataset.headlessuiFocusGuard !== "true"), Se(Y.current, { [ze.Forwards]: Pe.Next, [ze.Backwards]: Pe.Previous }), { relativeTo: i.state.button });
    }
    D();
  }), E = he();
  return S.createElement(S.Fragment, null, E({ ourProps: Z, theirProps: l, slot: W, defaultTag: ph, name: "Popover.Button" }), X && !b && u && S.createElement(jt, { id: x, ref: p, features: ht.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: te }));
}
let vh = "div", xh = st.RenderStrategy | st.Static;
function ml(e, t) {
  let n = Re(), { id: r = `headlessui-popover-backdrop-${n}`, transition: o = !1, ...a } = e, l = xr("Popover.Backdrop"), i = ke(l, re((w) => w.popoverState, [])), [c, u] = F(null), d = we(t, u), f = It(), [h, m] = or(o, c, f !== null ? (f & Ne.Open) === Ne.Open : i === $e.Open), p = I((w) => {
    if (zt(w.currentTarget)) return w.preventDefault();
    l.actions.close();
  }), g = Me({ open: i === $e.Open }), x = { ref: d, id: r, "aria-hidden": !0, onClick: p, ...rr(m) };
  return he()({ ourProps: x, theirProps: a, slot: g, defaultTag: vh, features: xh, visible: h, name: "Popover.Backdrop" });
}
let bh = "div", wh = st.RenderStrategy | st.Static;
function yh(e, t) {
  let n = Re(), { id: r = `headlessui-popover-panel-${n}`, focus: o = !1, anchor: a, portal: l = !1, modal: i = !1, transition: c = !1, ...u } = e, d = xr("Popover.Panel"), f = ke(d, d.selectors.isPortalled), [h, m, p, g, x] = ke(d, re((E) => [E.popoverState, E.button, E.__demoMode, E.beforePanelSentinel, E.afterPanelSentinel], [])), w = `headlessui-focus-sentinel-before-${n}`, y = `headlessui-focus-sentinel-after-${n}`, b = G(null), N = Ai(a), [O, R] = Wi(N), M = _i();
  N && (l = !0);
  let [U, q] = F(null), P = we(b, t, N ? O : null, d.actions.setPanel, q), B = Ft(m), K = Ft(b.current);
  be(() => (d.actions.setPanelId(r), () => d.actions.setPanelId(null)), [r, d]);
  let A = It(), [$, L] = or(c, U, A !== null ? (A & Ne.Open) === Ne.Open : h === $e.Open);
  $o($, m, d.actions.close), Do(p ? !1 : i && $, K);
  let V = I((E) => {
    var k;
    switch (E.key) {
      case le.Escape:
        if (d.state.popoverState !== $e.Open || !b.current) return;
        let D = Mt(b.current);
        if (D && !b.current.contains(D)) return;
        E.preventDefault(), E.stopPropagation(), d.actions.close(), (k = d.state.button) == null || k.focus();
        break;
    }
  });
  se(() => {
    var E;
    e.static || h === $e.Closed && ((E = e.unmount) == null || E) && d.actions.setPanel(null);
  }, [h, e.unmount, e.static, d]), se(() => {
    if (p || !o || h !== $e.Open || !b.current) return;
    let E = Mt(b.current);
    b.current.contains(E) || Ye(b.current, Pe.First);
  }, [p, o, b.current, h]);
  let X = Me({ open: h === $e.Open, close: d.actions.refocusableClose }), W = Rt(N ? M() : {}, { ref: P, id: r, onKeyDown: V, onBlur: o && h === $e.Open ? (E) => {
    var k, D, T, J, ae;
    let pe = E.relatedTarget;
    pe && b.current && ((k = b.current) != null && k.contains(pe) || (d.actions.close(), ((T = (D = g.current) == null ? void 0 : D.contains) != null && T.call(D, pe) || (ae = (J = x.current) == null ? void 0 : J.contains) != null && ae.call(J, pe)) && pe.focus({ preventScroll: !0 })));
  } : void 0, tabIndex: -1, style: { ...u.style, ...R, "--button-width": di($, m, !0).width }, ...rr(L) }), H = zo(), Z = I(() => {
    let E = b.current;
    if (!E) return;
    function k() {
      Se(H.current, { [ze.Forwards]: () => {
        var D;
        Ye(E, Pe.First) === Gt.Error && ((D = d.state.afterPanelSentinel.current) == null || D.focus());
      }, [ze.Backwards]: () => {
        var D;
        (D = d.state.button) == null || D.focus({ preventScroll: !0 });
      } });
    }
    k();
  }), Y = I(() => {
    let E = b.current;
    if (!E) return;
    function k() {
      Se(H.current, { [ze.Forwards]: () => {
        var D;
        if (!d.state.button) return;
        let T = (D = yt(d.state.button)) != null ? D : document.body, J = wn(T), ae = J.indexOf(d.state.button), pe = J.slice(0, ae + 1), Ie = [...J.slice(ae + 1), ...pe];
        for (let He of Ie.slice()) if (He.dataset.headlessuiFocusGuard === "true" || U != null && U.contains(He)) {
          let qe = Ie.indexOf(He);
          qe !== -1 && Ie.splice(qe, 1);
        }
        Ye(Ie, Pe.First, { sorted: !1 });
      }, [ze.Backwards]: () => {
        var D;
        Ye(E, Pe.Previous) === Gt.Error && ((D = d.state.button) == null || D.focus());
      } });
    }
    k();
  }), te = he();
  return S.createElement(Yi, null, S.createElement(br.Provider, { value: r }, S.createElement(Co, { value: d.actions.refocusableClose }, S.createElement(Ho, { enabled: l ? e.static || $ : !1, ownerDocument: B }, $ && f && S.createElement(jt, { id: w, ref: g, features: ht.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: Z }), te({ ourProps: W, theirProps: u, slot: X, defaultTag: bh, features: wh, visible: $, name: "Popover.Panel" }), $ && f && S.createElement(jt, { id: y, ref: x, features: ht.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: Y })))));
}
let jh = "div";
function Eh(e, t) {
  let n = G(null), r = we(n, t), [o, a] = F([]), l = I((g) => {
    a((x) => {
      let w = x.indexOf(g);
      if (w !== -1) {
        let y = x.slice();
        return y.splice(w, 1), y;
      }
      return x;
    });
  }), i = I((g) => (a((x) => [...x, g]), () => l(g))), c = I(() => {
    var g;
    let x = yt(n.current);
    if (!x) return !1;
    let w = Mt(n.current);
    return (g = n.current) != null && g.contains(w) ? !0 : o.some((y) => {
      var b, N;
      return ((b = x.getElementById(y.buttonId.current)) == null ? void 0 : b.contains(w)) || ((N = x.getElementById(y.panelId.current)) == null ? void 0 : N.contains(w));
    });
  }), u = I((g) => {
    for (let x of o) x.buttonId.current !== g && x.close();
  }), d = ge(() => ({ registerPopover: i, unregisterPopover: l, isFocusWithinPopoverGroup: c, closeOthers: u }), [i, l, c, u]), f = Me({}), h = e, m = { ref: r }, p = he();
  return S.createElement(Yn, null, S.createElement(Xo.Provider, { value: d }, p({ ourProps: m, theirProps: h, slot: f, defaultTag: jh, name: "Popover.Group" })));
}
let kh = fe(hh), Nh = fe(gh), Oh = fe(ml), Sh = fe(ml), Ch = fe(yh), Th = fe(Eh), ve = Object.assign(kh, { Button: Nh, Backdrop: Sh, Overlay: Oh, Panel: Ch, Group: Th }), Qo = ye(null);
Qo.displayName = "GroupContext";
let $h = ce;
function Ph(e) {
  var t;
  let [n, r] = F(null), [o, a] = ci(), [l, i] = ai(), c = ge(() => ({ switch: n, setSwitch: r }), [n, r]), u = {}, d = e, f = he();
  return S.createElement(i, { name: "Switch.Description", value: l }, S.createElement(a, { name: "Switch.Label", value: o, props: { htmlFor: (t = c.switch) == null ? void 0 : t.id, onClick(h) {
    n && (oo(h.currentTarget) && h.preventDefault(), n.click(), n.focus({ preventScroll: !0 }));
  } } }, S.createElement(Qo.Provider, { value: c }, f({ ourProps: u, theirProps: d, slot: {}, defaultTag: $h, name: "Switch.Group" }))));
}
let Mh = "button";
function Rh(e, t) {
  var n;
  let r = Re(), o = Zn(), a = vn(), { id: l = o || `headlessui-switch-${r}`, disabled: i = a || !1, checked: c, defaultChecked: u, onChange: d, name: f, value: h, form: m, autoFocus: p = !1, ...g } = e, x = de(Qo), [w, y] = F(null), b = G(null), N = we(b, t, x === null ? null : x.setSwitch, y), O = ko(u), [R, M] = Eo(c, d, O ?? !1), U = it(), [q, P] = F(!1), B = I(() => {
    P(!0), M == null || M(!R), U.nextFrame(() => {
      P(!1);
    });
  }), K = I((J) => {
    if (zt(J.currentTarget)) return J.preventDefault();
    J.preventDefault(), B();
  }), A = I((J) => {
    J.key === le.Space ? (J.preventDefault(), B()) : J.key === le.Enter && No(J.currentTarget);
  }), $ = I((J) => J.preventDefault()), L = tr(), V = So(), { isFocusVisible: X, focusProps: W } = Kn({ autoFocus: p }), { isHovered: H, hoverProps: Z } = qn({ isDisabled: i }), { pressed: Y, pressProps: te } = Qn({ disabled: i }), E = Me({ checked: R, disabled: i, hover: H, focus: X, active: Y, autofocus: p, changing: q }), k = Rt({ id: l, ref: N, role: "switch", type: Fo(e, w), tabIndex: e.tabIndex === -1 ? 0 : (n = e.tabIndex) != null ? n : 0, "aria-checked": R, "aria-labelledby": L, "aria-describedby": V, disabled: i || void 0, autoFocus: p, onClick: K, onKeyUp: A, onKeyPress: $ }, W, Z, te), D = re(() => {
    if (O !== void 0) return M == null ? void 0 : M(O);
  }, [M, O]), T = he();
  return S.createElement(S.Fragment, null, f != null && S.createElement(Oo, { disabled: i, data: { [f]: h || "on" }, overrides: { type: "checkbox", checked: R }, form: m, onReset: D }), T({ ourProps: k, theirProps: g, slot: E, defaultTag: Mh, name: "Switch" }));
}
let Fh = fe(Rh), Dh = Ph, Lh = ui, Ah = ii, hl = Object.assign(Fh, { Group: Dh, Label: Lh, Description: Ah });
const Ih = [
  { id: 1, name: "Ademola Johnson", email: "segun@gmail.com", checked: !0 },
  { id: 2, name: "Segun tasks", checked: !0 },
  { id: 3, name: "Result tasks", color: "purple", checked: !0 },
  { id: 4, name: "Holidays", checked: !0 }
];
function _h({ currentDate: e, onDateChange: t, events: n }) {
  const r = po(e, n), [o, a] = F(Ih.map((i) => ({ ...i }))), l = (i) => {
    a(
      (c) => c.map((u) => u.id === i ? { ...u, checked: !u.checked } : u)
    );
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "hidden lg:flex lg:flex-col w-64 h-full border-r border-stone-200 bg-stone-50 dark:border-white/10 dark:bg-stone-800/50", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between text-stone-900 dark:text-white mb-4", children: [
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: () => t(Qr.month.previous(e, 1)),
            className: "p-1.5 text-stone-400 hover:text-stone-500 dark:hover:text-white",
            children: /* @__PURE__ */ s.jsx(go, { className: "size-5" })
          }
        ),
        /* @__PURE__ */ s.jsx("div", { className: "text-sm font-semibold", children: xe(e, "MMMM yyyy") }),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: () => t(Qr.month.next(e, 1)),
            className: "p-1.5 text-stone-400 hover:text-stone-500 dark:hover:text-white",
            children: /* @__PURE__ */ s.jsx(vo, { className: "size-5" })
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-7 gap-1 text-center text-xs text-stone-500 dark:text-stone-400 mb-2", children: [
        /* @__PURE__ */ s.jsx("div", { children: "Mo" }),
        /* @__PURE__ */ s.jsx("div", { children: "Tu" }),
        /* @__PURE__ */ s.jsx("div", { children: "We" }),
        /* @__PURE__ */ s.jsx("div", { children: "Th" }),
        /* @__PURE__ */ s.jsx("div", { children: "Fr" }),
        /* @__PURE__ */ s.jsx("div", { children: "Sa" }),
        /* @__PURE__ */ s.jsx("div", { children: "Su" })
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-7 gap-1 text-sm", children: r.map((i) => {
        var c;
        return /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: () => t(i.originalDate),
            className: z(
              "aspect-square flex items-center justify-center rounded-md text-sm hover:bg-stone-100 dark:hover:bg-stone-700",
              i.isCurrentMonth ? "text-stone-900 dark:text-white" : "text-stone-400 dark:text-stone-500",
              i.isToday && "bg-blue-600 text-white hover:bg-blue-700 font-semibold",
              i.isSelected && !i.isToday && "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
            ),
            children: (c = i.date.split("-").pop()) == null ? void 0 : c.replace(/^0/, "")
          },
          i.date
        );
      }) })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "px-6 pb-4", children: /* @__PURE__ */ s.jsxs("div", { className: "border-t border-stone-200 dark:border-white/10 pt-4", children: [
      /* @__PURE__ */ s.jsx("div", { className: "space-y-2", children: o.map((i) => /* @__PURE__ */ s.jsxs("div", { className: "flex items-center group", children: [
        /* @__PURE__ */ s.jsx(
          Ld,
          {
            checked: i.checked,
            onChange: () => l(i.id),
            className: "group/checkbox flex size-4 items-center justify-center rounded border border-stone-300 bg-white data-[checked]:bg-blue-600 data-[checked]:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer dark:border-stone-600 dark:bg-stone-800",
            children: /* @__PURE__ */ s.jsx(Na, { className: "size-3 text-white opacity-0 group-data-[checked]/checkbox:opacity-100" })
          }
        ),
        /* @__PURE__ */ s.jsxs("label", { className: "ml-3 text-sm text-stone-700 dark:text-stone-300 cursor-pointer", onClick: () => l(i.id), children: [
          i.name,
          i.email && /* @__PURE__ */ s.jsx("div", { className: "text-xs text-stone-500 dark:text-stone-400", children: i.email })
        ] })
      ] }, i.id)) }),
      /* @__PURE__ */ s.jsxs("button", { className: "mt-4 flex items-center w-full text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white", children: [
        /* @__PURE__ */ s.jsx(Oa, { className: "h-4 w-4 mr-2" }),
        "Add account"
      ] })
    ] }) }),
    /* @__PURE__ */ s.jsx("div", { className: "mt-auto p-6 border-t border-stone-200 dark:border-white/10 hidden", children: /* @__PURE__ */ s.jsxs("button", { className: "w-full flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-3 py-2 text-sm font-semibold text-stone-700 shadow-sm hover:bg-stone-50 dark:border-white/10 dark:bg-stone-800 dark:text-white dark:hover:bg-stone-700", children: [
      /* @__PURE__ */ s.jsx(xo, { className: "h-5 w-5" }),
      "Invite people"
    ] }) })
  ] });
}
function Wh({ currentDate: e, view: t, onViewChange: n, onDateChange: r, onToggleSidebar: o, isSidebarOpen: a, onCreateEvent: l }) {
  const [i, c] = F(!1), u = G(null), d = () => t === "year" ? xe(e, "yyyy") : t === "month" || t === "week" ? xe(e, "MMMM yyyy") : xe(e, "MMMM d, yyyy"), f = (m) => {
    const p = Qr[t][m];
    r(p(e, 1));
  }, h = (m) => {
    n(m), c(!1);
  };
  return se(() => {
    const m = (p) => {
      u.current && !u.current.contains(p.target) && c(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []), /* @__PURE__ */ s.jsxs("header", { className: "flex items-center justify-between border-b border-stone-200 px-6 py-3 dark:border-white/10", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: o,
              className: "p-1 text-stone-400 hover:text-stone-600 dark:hover:text-white transition-colors hidden lg:block",
              title: a ? "Hide sidebar" : "Show sidebar",
              children: /* @__PURE__ */ s.jsx(fu, { className: z(
                "size-5 transition-transform duration-300",
                !a && "rotate-180"
              ) })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => r(/* @__PURE__ */ new Date()),
              className: "px-3 py-1 text-sm font-medium rounded-md hover:bg-stone-100 text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white",
              children: "Today"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => f("previous"),
              className: "p-1 text-stone-400 rounded-md hover:bg-stone-100 hover:text-stone-600 dark:hover:text-white",
              "aria-label": "Previous period",
              children: /* @__PURE__ */ s.jsx(go, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => f("next"),
              className: "p-1 text-stone-400 rounded-md hover:bg-stone-100 hover:text-stone-600 dark:hover:text-white",
              "aria-label": "Next period",
              children: /* @__PURE__ */ s.jsx(vo, { className: "size-5" })
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "lg:block", children: /* @__PURE__ */ s.jsxs("h1", { className: "px-3 py-1 text-sm font-medium text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white", children: [
          d(),
          (t === "day" || t === "week") && /* @__PURE__ */ s.jsxs("span", { className: "ml-2 text-sm font-normal text-stone-500", children: [
            "(Week ",
            xe(e, "w"),
            ")"
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "hidden", children: /* @__PURE__ */ s.jsxs("h1", { className: "px-3 py-1 text-sm font-medium text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white", children: [
        d(),
        (t === "day" || t === "week") && /* @__PURE__ */ s.jsxs("span", { className: "ml-2 text-sm font-normal text-stone-500", children: [
          "(Week ",
          xe(e, "w"),
          ")"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "relative", ref: u, children: [
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => c(!i),
            className: "inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-3 py-1 text-sm font-medium text-stone-700 shadow-sm hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700",
            children: [
              /* @__PURE__ */ s.jsxs("span", { className: "capitalize", children: [
                t,
                " view"
              ] }),
              /* @__PURE__ */ s.jsx(pu, { className: "h-4 w-4" })
            ]
          }
        ),
        i && /* @__PURE__ */ s.jsx("div", { className: "absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-stone-800 dark:ring-stone-700 z-10", children: /* @__PURE__ */ s.jsx("div", { className: "py-1", children: ["day", "week", "month", "year", "scheduled"].map((m) => /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => h(m),
            className: z(
              "block w-full px-4 py-2 text-left text-sm capitalize",
              t === m ? "bg-stone-100 text-stone-900 dark:bg-stone-700 dark:text-white" : "text-stone-700 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-stone-700"
            ),
            children: [
              m,
              " view"
            ]
          },
          m
        )) }) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ s.jsx("button", { className: "p-2 text-stone-400 hover:text-stone-600 hidden", children: /* @__PURE__ */ s.jsx(bu, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: l,
            className: "rounded-full bg-blue-600 p-1 text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:shadow-none dark:hover:bg-blue-400 dark:focus-visible:outline-blue-500",
            "aria-label": "Create event",
            children: /* @__PURE__ */ s.jsx(Oa, { "aria-hidden": "true", className: "size-5" })
          }
        )
      ] })
    ] })
  ] });
}
function pl({ value: e, onChange: t }) {
  const [n, r] = F(e), o = pa({
    start: mt(ga(n), { weekStartsOn: 1 }),
    end: xa(ma(n), { weekStartsOn: 1 })
  }), a = () => r(Xr(n, 1)), l = () => r(un(n, 1));
  return /* @__PURE__ */ s.jsxs("div", { className: "w-64 p-4 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          onClick: a,
          className: "p-1 text-gray-400 hover:text-gray-500",
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Previous month" }),
            /* @__PURE__ */ s.jsx(go, { className: "w-5 h-5", "aria-hidden": "true" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx("h2", { className: "text-sm font-semibold text-gray-900", children: xe(n, "MMMM yyyy") }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          onClick: l,
          className: "p-1 text-gray-400 hover:text-gray-500",
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Next month" }),
            /* @__PURE__ */ s.jsx(vo, { className: "w-5 h-5", "aria-hidden": "true" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2", children: [
      /* @__PURE__ */ s.jsx("div", { children: "M" }),
      /* @__PURE__ */ s.jsx("div", { children: "T" }),
      /* @__PURE__ */ s.jsx("div", { children: "W" }),
      /* @__PURE__ */ s.jsx("div", { children: "T" }),
      /* @__PURE__ */ s.jsx("div", { children: "F" }),
      /* @__PURE__ */ s.jsx("div", { children: "S" }),
      /* @__PURE__ */ s.jsx("div", { children: "S" })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-7 gap-1 text-sm", children: o.map((i) => /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        onClick: () => t(i),
        className: z(
          "py-1.5 hover:bg-gray-100 rounded-full",
          !ya(i, n) && "text-gray-400",
          We(i, e) && "bg-blue-600 text-white hover:bg-blue-700",
          ja(i) && !We(i, e) && "text-blue-600 font-semibold"
        ),
        children: /* @__PURE__ */ s.jsx("time", { dateTime: xe(i, "yyyy-MM-dd"), children: xe(i, "d") })
      },
      i.toString()
    )) })
  ] });
}
const Bh = Array.from({ length: 24 * 4 }).map((e, t) => {
  const n = Math.floor(t / 4), r = t % 4 * 15, o = /* @__PURE__ */ new Date();
  return o.setHours(n, r), o.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
});
function zn({ value: e, onChange: t }) {
  return /* @__PURE__ */ s.jsx("div", { className: "w-32 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50 max-h-60 overflow-auto", children: /* @__PURE__ */ s.jsx("ul", { className: "py-1", children: Bh.map((n) => /* @__PURE__ */ s.jsxs(
    "li",
    {
      className: z(
        "relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-gray-100",
        n === e ? "text-blue-600 font-semibold" : "text-gray-900"
      ),
      onClick: () => t(n),
      children: [
        /* @__PURE__ */ s.jsx("span", { className: "block truncate", children: n }),
        n === e ? /* @__PURE__ */ s.jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600", children: /* @__PURE__ */ s.jsx(Na, { className: "h-5 w-5", "aria-hidden": "true" }) }) : null
      ]
    },
    n
  )) }) });
}
function gl({
  isOpen: e,
  title: t,
  message: n,
  confirmText: r = "Confirm",
  cancelText: o = "Cancel",
  onConfirm: a,
  onCancel: l
}) {
  const i = G(null);
  return /* @__PURE__ */ s.jsx(Te.Root, { show: e, as: ce, children: /* @__PURE__ */ s.jsxs(ft, { as: "div", className: "relative z-[60]", initialFocus: i, onClose: l, children: [
    /* @__PURE__ */ s.jsx(
      Te.Child,
      {
        as: ce,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-stone-500 bg-opacity-75 transition-opacity" })
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ s.jsx("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ s.jsx(
      Te.Child,
      {
        as: ce,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        enterTo: "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        children: /* @__PURE__ */ s.jsxs(ft.Panel, { className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "sm:flex sm:items-start", children: [
            /* @__PURE__ */ s.jsx("div", { className: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10", children: /* @__PURE__ */ s.jsx(Tu, { className: "h-6 w-6 text-red-600", "aria-hidden": "true" }) }),
            /* @__PURE__ */ s.jsxs("div", { className: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left", children: [
              /* @__PURE__ */ s.jsx(ft.Title, { as: "h3", className: "text-base font-semibold leading-6 text-stone-900", children: t }),
              /* @__PURE__ */ s.jsx("div", { className: "mt-2", children: /* @__PURE__ */ s.jsx("p", { className: "text-sm text-stone-500", children: n }) })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
                onClick: a,
                children: r
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 hover:bg-stone-50 sm:mt-0 sm:w-auto",
                onClick: l,
                ref: i,
                children: o
              }
            )
          ] })
        ] })
      }
    ) }) })
  ] }) });
}
const _r = [
  { id: "none", name: "Do not repeat" },
  { id: "daily", name: "Daily" },
  { id: "weekly", name: "Weekly" },
  { id: "monthly", name: "Monthly" },
  { id: "yearly", name: "Yearly" }
], Hh = [
  { id: "GMT", name: "London (GMT+0)" },
  { id: "CET", name: "Paris (GMT+1)" },
  { id: "EET", name: "Athens (GMT+2)" },
  { id: "EST", name: "New York (GMT-5)" },
  { id: "PST", name: "Los Angeles (GMT-8)" },
  { id: "JST", name: "Tokyo (GMT+9)" }
], Wr = [
  { id: "busy", name: "Busy" },
  { id: "free", name: "Free" }
], Br = [
  { id: "default", name: "Default visibility" },
  { id: "public", name: "Public" },
  { id: "private", name: "Private" }
], Hr = [
  { id: "start", name: "When event starts" },
  { id: "5min", name: "5 minutes before" },
  { id: "10min", name: "10 minutes before" },
  { id: "15min", name: "15 minutes before" },
  { id: "30min", name: "30 minutes before" },
  { id: "1hour", name: "1 hour before" },
  { id: "1day", name: "1 day before" }
], Vr = [
  { id: "blue", value: "bg-blue-500", selectedClass: "ring-blue-500" },
  { id: "red", value: "bg-red-500", selectedClass: "ring-red-500" },
  { id: "orange", value: "bg-orange-500", selectedClass: "ring-orange-500" },
  { id: "yellow", value: "bg-yellow-500", selectedClass: "ring-yellow-500" },
  { id: "green", value: "bg-green-500", selectedClass: "ring-green-500" },
  { id: "teal", value: "bg-teal-500", selectedClass: "ring-teal-500" },
  { id: "sky", value: "bg-sky-500", selectedClass: "ring-sky-500" },
  { id: "indigo", value: "bg-indigo-500", selectedClass: "ring-indigo-500" },
  { id: "purple", value: "bg-purple-500", selectedClass: "ring-purple-500" },
  { id: "pink", value: "bg-pink-500", selectedClass: "ring-pink-500" },
  { id: "gray", value: "bg-stone-500", selectedClass: "ring-stone-500" }
];
function Vh({ isOpen: e, onClose: t, onSave: n, initialDate: r, initialTime: o }) {
  const [a, l] = F(""), [i, c] = F(!1), [u, d] = F(_r[0]), [f, h] = F(null), [m, p] = F(!1), [g, x] = F(/* @__PURE__ */ new Date()), [w, y] = F("10:00 AM"), [b, N] = F("11:00 AM"), [O, R] = F(!1), [M, U] = F(Wr[0]), [q, P] = F(Br[0]), [B, K] = F(Hr[4]), [A, $] = F(Vr[0]), [L, V] = F(!1), [X, W] = F(!1);
  se(() => {
    e && (l(""), c(!1), d(_r[0]), h(null), p(!1), x(r || /* @__PURE__ */ new Date()), y(o || "10:00 AM"), N("11:00 AM"), R(!1), U(Wr[0]), P(Br[0]), K(Hr[4]), $(Vr[0]), V(!1), W(!1));
  }, [e, r, o]);
  const H = () => {
    L ? W(!0) : t();
  }, Z = () => {
    W(!1), t();
  }, Y = (E, k) => {
    E(k), V(!0);
  }, te = async () => {
    if (!n) {
      t();
      return;
    }
    const E = (J, ae) => {
      const [pe, Ie] = ae.split(" ");
      let [He, qe] = pe.split(":").map(Number);
      He === 12 && (He = 0), Ie === "PM" && (He += 12);
      const _t = new Date(J);
      return _t.setHours(He, qe, 0, 0), _t;
    }, k = E(g, w), D = E(g, b), T = {
      name: a || "(No title)",
      time: `${w} - ${b}`,
      datetime: k.toISOString(),
      endDatetime: D.toISOString(),
      href: "#"
    };
    await n(T);
  };
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Te.Root, { show: e, as: ce, children: /* @__PURE__ */ s.jsxs(ft, { as: "div", className: "relative z-50", onClose: H, children: [
      /* @__PURE__ */ s.jsx(
        Te.Child,
        {
          as: ce,
          enter: "ease-in-out duration-500",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in-out duration-500",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-stone-500 bg-opacity-75 transition-opacity" })
        }
      ),
      /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ s.jsx("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 right-3 bottom-3 top-3", children: /* @__PURE__ */ s.jsx(
        Te.Child,
        {
          as: ce,
          enter: "transform transition ease-in-out duration-500 sm:duration-700",
          enterFrom: "translate-x-full",
          enterTo: "translate-x-0",
          leave: "transform transition ease-in-out duration-500 sm:duration-700",
          leaveFrom: "translate-x-0",
          leaveTo: "translate-x-full",
          children: /* @__PURE__ */ s.jsx(ft.Panel, { className: "pointer-events-auto w-screen md:max-w-lg lg:max-w-xl rounded-2xl overflow-hidden", children: /* @__PURE__ */ s.jsxs("div", { className: "flex h-full flex-col overflow-y-scroll bg-white", children: [
            /* @__PURE__ */ s.jsx("div", { className: "bg-stone-50 px-4 py-6 sm:px-6", children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ s.jsx(ft.Title, { className: "text-base font-semibold leading-6 text-stone-900", children: "Create event" }),
              /* @__PURE__ */ s.jsx("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "relative rounded-md bg-stone-50 text-stone-400 hover:text-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  onClick: H,
                  children: [
                    /* @__PURE__ */ s.jsx("span", { className: "absolute -inset-2.5" }),
                    /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Close panel" }),
                    /* @__PURE__ */ s.jsx(sn, { className: "h-6 w-6", "aria-hidden": "true" })
                  ]
                }
              ) })
            ] }) }),
            /* @__PURE__ */ s.jsxs("div", { className: "relative flex-1 px-4 py-6 sm:px-6 space-y-6", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-2 flex justify-center", children: /* @__PURE__ */ s.jsx("span", { className: "text-stone-400 text-lg", children: "T" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1", children: /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "text",
                    className: "block w-full bg-stone-100 rounded-md px-3 py-1.5 text-base text-stone-900 outline-1 -outline-offset-1 outline-stone-300 placeholder:text-stone-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-500 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-stone-400 dark:focus:outline-stone-500",
                    placeholder: "Add title",
                    value: a,
                    onChange: (E) => Y(l, E.target.value)
                  }
                ) })
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-1 flex justify-center", children: /* @__PURE__ */ s.jsx(Ma, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1", children: m ? (
                  // Expanded Edit View
                  /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                      /* @__PURE__ */ s.jsxs(ve, { className: "relative", children: [
                        /* @__PURE__ */ s.jsx(ve.Button, { className: "bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded text-sm font-medium text-stone-900 focus:outline-none", children: xe(g, "EEEE, d MMMM") }),
                        /* @__PURE__ */ s.jsx(ve.Panel, { className: "absolute z-10 mt-1", children: /* @__PURE__ */ s.jsx(pl, { value: g, onChange: (E) => Y(x, E) }) })
                      ] }),
                      /* @__PURE__ */ s.jsxs(ve, { className: "relative", children: [
                        /* @__PURE__ */ s.jsx(ve.Button, { className: "bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded text-sm font-medium text-stone-900 focus:outline-none", children: w }),
                        /* @__PURE__ */ s.jsx(ve.Panel, { className: "absolute z-10 mt-1", children: /* @__PURE__ */ s.jsx(zn, { value: w, onChange: (E) => Y(y, E) }) })
                      ] }),
                      /* @__PURE__ */ s.jsx("span", { className: "text-stone-500", children: "–" }),
                      /* @__PURE__ */ s.jsxs(ve, { className: "relative", children: [
                        /* @__PURE__ */ s.jsx(ve.Button, { className: "bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded text-sm font-medium text-stone-900 focus:outline-none", children: b }),
                        /* @__PURE__ */ s.jsx(ve.Panel, { className: "absolute z-10 mt-1", children: /* @__PURE__ */ s.jsx(zn, { value: b, onChange: (E) => Y(N, E) }) })
                      ] })
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
                        /* @__PURE__ */ s.jsx(
                          hl,
                          {
                            checked: i,
                            onChange: (E) => Y(c, E),
                            className: z(
                              i ? "bg-blue-600" : "bg-stone-200",
                              "relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2"
                            ),
                            children: /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                "aria-hidden": "true",
                                className: z(
                                  i ? "translate-x-4" : "translate-x-0",
                                  "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                )
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ s.jsx("span", { className: "text-sm text-stone-700", children: "All day" })
                      ] }),
                      /* @__PURE__ */ s.jsx(ee, { value: f, onChange: (E) => Y(h, E), children: /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center", children: [
                          /* @__PURE__ */ s.jsx("div", { className: "size-5", children: /* @__PURE__ */ s.jsx(Ra, { className: "h-5 w-5 text-stone-400" }) }),
                          /* @__PURE__ */ s.jsx(ee.Button, { className: z(
                            "relative cursor-default rounded-md py-1 pl-1 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6",
                            f ? "text-blue-600" : "text-blue-600 hover:text-blue-500 font-medium"
                          ), children: /* @__PURE__ */ s.jsx("span", { className: "block truncate", children: f ? f.name : "Time zone" }) })
                        ] }),
                        f && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "absolute -right-6 top-1.5 text-stone-400 hover:text-stone-600",
                            onClick: (E) => {
                              E.stopPropagation(), Y(h, null);
                            },
                            children: /* @__PURE__ */ s.jsx(sn, { className: "h-5 w-5" })
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          Te,
                          {
                            as: ce,
                            leave: "transition ease-in duration-100",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /* @__PURE__ */ s.jsx(ee.Options, { className: "absolute z-10 mt-1 max-h-60 w-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: Hh.map((E) => /* @__PURE__ */ s.jsx(
                              ee.Option,
                              {
                                className: ({ active: k, selected: D }) => z(
                                  "relative cursor-default select-none py-2 pl-3 pr-9",
                                  D || k ? "bg-stone-100 text-stone-900" : "text-stone-700 hover:bg-stone-50"
                                ),
                                value: E,
                                children: ({ selected: k }) => /* @__PURE__ */ s.jsx("span", { className: z(k ? "font-semibold" : "font-normal", "block truncate"), children: E.name })
                              },
                              E.id
                            )) })
                          }
                        )
                      ] }) })
                    ] }),
                    /* @__PURE__ */ s.jsx(ee, { value: u, onChange: (E) => Y(d, E), children: /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ s.jsxs(ee.Button, { className: "relative cursor-default rounded-md border border-stone-300 bg-white py-1 pl-3 pr-10 text-left text-stone-700 shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6", children: [
                        /* @__PURE__ */ s.jsx("span", { className: "block truncate", children: u.name }),
                        /* @__PURE__ */ s.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ s.jsx(Qe, { className: "h-5 w-5 text-stone-400", "aria-hidden": "true" }) })
                      ] }),
                      /* @__PURE__ */ s.jsx(
                        Te,
                        {
                          as: ce,
                          leave: "transition ease-in duration-100",
                          leaveFrom: "opacity-100",
                          leaveTo: "opacity-0",
                          children: /* @__PURE__ */ s.jsx(ee.Options, { className: "absolute z-10 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: _r.map((E) => /* @__PURE__ */ s.jsx(
                            ee.Option,
                            {
                              className: ({ active: k, selected: D }) => z(
                                "relative cursor-default select-none py-2 pl-3 pr-9",
                                D || k ? "bg-stone-100 text-stone-900" : "text-stone-700 hover:bg-stone-50"
                              ),
                              value: E,
                              children: ({ selected: k }) => /* @__PURE__ */ s.jsx("span", { className: z(k ? "font-semibold" : "font-normal", "block truncate"), children: E.name })
                            },
                            E.id
                          )) })
                        }
                      )
                    ] }) })
                  ] })
                ) : (
                  // Collapsed View
                  /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "cursor-pointer hover:bg-stone-50 rounded-md p-2 -ml-2 transition-colors",
                      onClick: () => p(!0),
                      children: [
                        /* @__PURE__ */ s.jsxs("div", { className: "text-sm text-stone-900", children: [
                          xe(g, "EEEE, d MMMM"),
                          "   ",
                          w,
                          " – ",
                          b
                        ] }),
                        /* @__PURE__ */ s.jsxs("div", { className: "text-xs text-stone-500 mt-1", children: [
                          "Time zone • ",
                          u.name
                        ] })
                      ]
                    }
                  )
                ) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "border-t border-stone-100" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-1 flex justify-center", children: /* @__PURE__ */ s.jsx(xo, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1 space-y-3", children: /* @__PURE__ */ s.jsx(
                  "textarea",
                  {
                    id: "about",
                    name: "about",
                    placeholder: "Add users",
                    rows: 3,
                    className: "block w-full rounded-md bg-stone-100 px-3 py-1.5 text-base text-stone-900 outline-1 -outline-offset-1 outline-stone-300 placeholder:text-stone-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-stone-500 dark:focus:outline-indigo-500",
                    defaultValue: ""
                  }
                ) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "border-t border-stone-100" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-1 flex justify-center", children: /* @__PURE__ */ s.jsx(Aa, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsxs("div", { className: "flex-1 space-y-3", children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s.jsx("div", { className: "h-5 w-5 bg-green-500 rounded-sm flex items-center justify-center text-[10px] text-white font-bold", children: "G" }),
                    /* @__PURE__ */ s.jsx("span", { className: "text-sm text-stone-900", children: "Google Meet" })
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "h-5 w-5 bg-blue-500 rounded-sm flex items-center justify-center text-[10px] text-white font-bold", children: "Z" }),
                      /* @__PURE__ */ s.jsx("span", { className: "text-sm text-stone-900", children: "Zoom" })
                    ] }),
                    /* @__PURE__ */ s.jsx("button", { type: "button", className: "rounded bg-white px-2 py-1 text-xs font-semibold text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 hover:bg-stone-50", children: "Connect" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "border-t border-stone-100" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-1 flex justify-center", children: /* @__PURE__ */ s.jsx(Da, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1", children: /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "text",
                    className: "block w-full bg-stone-100 rounded-md px-3 py-1.5 text-base text-stone-900 outline-1 -outline-offset-1 outline-stone-300 placeholder:text-stone-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-500 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-stone-400 dark:focus:outline-stone-500",
                    placeholder: "Add location"
                  }
                ) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "border-t border-stone-100" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-1 flex justify-center", children: /* @__PURE__ */ s.jsx(Sa, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1", children: /* @__PURE__ */ s.jsx(
                  "textarea",
                  {
                    id: "about",
                    name: "about",
                    placeholder: "Add description, URL, or Attachments",
                    rows: 3,
                    className: "block w-full rounded-md bg-stone-100 px-3 py-1.5 text-base text-stone-900 outline-1 -outline-offset-1 outline-stone-300 placeholder:text-stone-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-stone-500 dark:focus:outline-indigo-500",
                    defaultValue: ""
                  }
                ) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "border-t border-stone-100" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-2 flex justify-center", children: /* @__PURE__ */ s.jsx($a, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1", children: O ? (
                  // Expanded View
                  /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "relative flex-1", children: /* @__PURE__ */ s.jsxs("button", { type: "button", className: "w-full flex items-center justify-between rounded-md bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-900 hover:bg-stone-200", children: [
                        /* @__PURE__ */ s.jsx("span", { children: "Segun Oroyo" }),
                        /* @__PURE__ */ s.jsx(Qe, { className: "h-4 w-4 text-stone-500 hidden" })
                      ] }) }),
                      /* @__PURE__ */ s.jsxs(ve, { className: "relative flex-1", children: [
                        /* @__PURE__ */ s.jsx(ve.Button, { className: z("flex items-center justify-center w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2", A.value, A.selectedClass), children: /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Select color" }) }),
                        /* @__PURE__ */ s.jsx(ve.Panel, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-5 gap-2", children: Vr.map((E) => /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: z(
                              "h-6 w-6 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-1",
                              E.value,
                              E.selectedClass
                            ),
                            onClick: () => Y($, E),
                            children: A.id === E.id && /* @__PURE__ */ s.jsx(Pa, { className: "size-3 text-white" })
                          },
                          E.id
                        )) }) })
                      ] })
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "w-6 flex justify-center", children: /* @__PURE__ */ s.jsx(Ta, { className: "h-5 w-5 text-stone-400" }) }),
                      /* @__PURE__ */ s.jsx(ee, { value: M, onChange: (E) => Y(U, E), children: /* @__PURE__ */ s.jsxs("div", { className: "relative flex-1", children: [
                        /* @__PURE__ */ s.jsxs(ee.Button, { className: "relative w-full cursor-default rounded-md bg-stone-100 py-1.5 pl-3 pr-10 text-left text-stone-900 shadow-sm hover:bg-stone-200 focus:outline-none sm:text-sm sm:leading-6", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "block truncate", children: M.name }),
                          /* @__PURE__ */ s.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ s.jsx(Qe, { className: "h-5 w-5 text-stone-400", "aria-hidden": "true" }) })
                        ] }),
                        /* @__PURE__ */ s.jsx(Te, { as: ce, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ s.jsx(ee.Options, { className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: Wr.map((E) => /* @__PURE__ */ s.jsx(
                          ee.Option,
                          {
                            className: ({ active: k }) => z("relative cursor-default select-none py-2 pl-3 pr-9", k ? "bg-stone-100 text-stone-900" : "text-stone-900"),
                            value: E,
                            children: ({ selected: k }) => /* @__PURE__ */ s.jsx("span", { className: z(k ? "font-semibold" : "font-normal", "block truncate"), children: E.name })
                          },
                          E.id
                        )) }) })
                      ] }) })
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "w-6 flex justify-center", children: /* @__PURE__ */ s.jsx(Fa, { className: "h-5 w-5 text-stone-400" }) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "flex-1 flex items-center gap-2", children: [
                        /* @__PURE__ */ s.jsx(ee, { value: q, onChange: (E) => Y(P, E), children: /* @__PURE__ */ s.jsxs("div", { className: "relative flex-1", children: [
                          /* @__PURE__ */ s.jsxs(ee.Button, { className: "relative w-full cursor-default rounded-md bg-stone-100 py-1.5 pl-3 pr-10 text-left text-stone-900 shadow-sm hover:bg-stone-200 focus:outline-none sm:text-sm sm:leading-6", children: [
                            /* @__PURE__ */ s.jsx("span", { className: "block truncate", children: q.name }),
                            /* @__PURE__ */ s.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ s.jsx(Qe, { className: "h-5 w-5 text-stone-400", "aria-hidden": "true" }) })
                          ] }),
                          /* @__PURE__ */ s.jsx(Te, { as: ce, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ s.jsx(ee.Options, { className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: Br.map((E) => /* @__PURE__ */ s.jsx(
                            ee.Option,
                            {
                              className: ({ active: k }) => z("relative cursor-default select-none py-2 pl-3 pr-9", k ? "bg-stone-100 text-stone-900" : "text-stone-900"),
                              value: E,
                              children: ({ selected: k }) => /* @__PURE__ */ s.jsx("span", { className: z(k ? "font-semibold" : "font-normal", "block truncate"), children: E.name })
                            },
                            E.id
                          )) }) })
                        ] }) }),
                        /* @__PURE__ */ s.jsx(La, { className: "h-5 w-5 text-stone-400" })
                      ] })
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "w-6 flex justify-center", children: /* @__PURE__ */ s.jsx(Ca, { className: "h-5 w-5 text-stone-400" }) }),
                      /* @__PURE__ */ s.jsx(ee, { value: B, onChange: (E) => Y(K, E), children: /* @__PURE__ */ s.jsxs("div", { className: "relative flex-1", children: [
                        /* @__PURE__ */ s.jsxs(ee.Button, { className: "relative w-full cursor-default rounded-md bg-stone-100 py-1.5 pl-3 pr-10 text-left text-stone-900 shadow-sm hover:bg-stone-200 focus:outline-none sm:text-sm sm:leading-6", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "block truncate", children: B.name }),
                          /* @__PURE__ */ s.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ s.jsx(Qe, { className: "h-5 w-5 text-stone-400", "aria-hidden": "true" }) })
                        ] }),
                        /* @__PURE__ */ s.jsx(Te, { as: ce, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ s.jsx(ee.Options, { className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: Hr.map((E) => /* @__PURE__ */ s.jsx(
                          ee.Option,
                          {
                            className: ({ active: k }) => z("relative cursor-default select-none py-2 pl-3 pr-9", k ? "bg-stone-100 text-stone-900" : "text-stone-900"),
                            value: E,
                            children: ({ selected: k }) => /* @__PURE__ */ s.jsx("span", { className: z(k ? "font-semibold" : "font-normal", "block truncate"), children: E.name })
                          },
                          E.id
                        )) }) })
                      ] }) })
                    ] })
                  ] })
                ) : (
                  // Collapsed View
                  /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "cursor-pointer hover:bg-stone-50 rounded-md p-2 -ml-2 transition-colors",
                      onClick: () => R(!0),
                      children: [
                        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-stone-900", children: "Segun Oroyo" }),
                          /* @__PURE__ */ s.jsx("span", { className: z("h-2.5 w-2.5 rounded-full", A.value) })
                        ] }),
                        /* @__PURE__ */ s.jsxs("div", { className: "text-xs text-stone-500", children: [
                          M.name,
                          " • ",
                          q.name,
                          " • Notify ",
                          B.name.toLowerCase()
                        ] })
                      ]
                    }
                  )
                ) })
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "flex flex-shrink-0 justify-end px-4 py-4 bg-stone-50", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "rounded-md bg-white px-3 py-2 text-sm font-semibold text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 hover:bg-stone-50",
                  onClick: H,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "submit",
                  className: "ml-4 inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                  onClick: te,
                  children: "Create event"
                }
              )
            ] })
          ] }) })
        }
      ) }) }) })
    ] }) }),
    /* @__PURE__ */ s.jsx(
      gl,
      {
        isOpen: X,
        title: "Discard unsaved changes?",
        message: "You have unsaved changes. Are you sure you want to discard them? This action cannot be undone.",
        confirmText: "Discard changes",
        cancelText: "Keep editing",
        onConfirm: Z,
        onCancel: () => W(!1)
      }
    )
  ] });
}
const Yr = [
  { id: "none", name: "Do not repeat" },
  { id: "daily", name: "Daily" },
  { id: "weekly", name: "Weekly" },
  { id: "monthly", name: "Monthly" },
  { id: "yearly", name: "Yearly" }
], Yh = [
  { id: "GMT", name: "London (GMT+0)" },
  { id: "CET", name: "Paris (GMT+1)" },
  { id: "EET", name: "Athens (GMT+2)" },
  { id: "EST", name: "New York (GMT-5)" },
  { id: "PST", name: "Los Angeles (GMT-8)" },
  { id: "JST", name: "Tokyo (GMT+9)" }
], zr = [
  { id: "busy", name: "Busy" },
  { id: "free", name: "Free" }
], Gr = [
  { id: "default", name: "Default visibility" },
  { id: "public", name: "Public" },
  { id: "private", name: "Private" }
], Ur = [
  { id: "start", name: "When event starts" },
  { id: "5min", name: "5 minutes before" },
  { id: "10min", name: "10 minutes before" },
  { id: "15min", name: "15 minutes before" },
  { id: "30min", name: "30 minutes before" },
  { id: "1hour", name: "1 hour before" },
  { id: "1day", name: "1 day before" }
], qr = [
  { id: "blue", value: "bg-blue-500", selectedClass: "ring-blue-500" },
  { id: "red", value: "bg-red-500", selectedClass: "ring-red-500" },
  { id: "orange", value: "bg-orange-500", selectedClass: "ring-orange-500" },
  { id: "yellow", value: "bg-yellow-500", selectedClass: "ring-yellow-500" },
  { id: "green", value: "bg-green-500", selectedClass: "ring-green-500" },
  { id: "teal", value: "bg-teal-500", selectedClass: "ring-teal-500" },
  { id: "sky", value: "bg-sky-500", selectedClass: "ring-sky-500" },
  { id: "indigo", value: "bg-indigo-500", selectedClass: "ring-indigo-500" },
  { id: "purple", value: "bg-purple-500", selectedClass: "ring-purple-500" },
  { id: "pink", value: "bg-pink-500", selectedClass: "ring-pink-500" },
  { id: "gray", value: "bg-stone-500", selectedClass: "ring-stone-500" }
];
function zh({ isOpen: e, onClose: t, event: n, onUpdate: r, onDelete: o }) {
  const [a, l] = F(""), [i, c] = F(!1), [u, d] = F(Yr[0]), [f, h] = F(null), [m, p] = F(!1), [g, x] = F(/* @__PURE__ */ new Date()), [w, y] = F("10:00 AM"), [b, N] = F("11:00 AM"), [O, R] = F(!1), [M, U] = F(zr[0]), [q, P] = F(Gr[0]), [B, K] = F(Ur[4]), [A, $] = F(qr[0]), [L, V] = F(!1), [X, W] = F(!1);
  se(() => {
    e && (l(n ? n.name : ""), c(!1), d(Yr[0]), h(null), p(!1), x(/* @__PURE__ */ new Date()), y("10:00 AM"), N("11:00 AM"), R(!1), U(zr[0]), P(Gr[0]), K(Ur[4]), $(qr[0]), V(!1), W(!1));
  }, [n, e]);
  const H = () => {
    L ? W(!0) : t();
  }, Z = () => {
    W(!1), t();
  }, Y = (k, D) => {
    k(D), V(!0);
  }, te = async () => {
    if (!r || !n) {
      t();
      return;
    }
    const k = (ae, pe) => {
      const [Ie, He] = pe.split(" ");
      let [qe, _t] = Ie.split(":").map(Number);
      qe === 12 && (qe = 0), He === "PM" && (qe += 12);
      const kn = new Date(ae);
      return kn.setHours(qe, _t, 0, 0), kn;
    }, D = k(g, w), T = k(g, b), J = {
      ...n,
      name: a,
      time: `${w} - ${b}`,
      datetime: D.toISOString(),
      endDatetime: T.toISOString()
      // Update other fields as needed
    };
    await r(J);
  }, E = async () => {
    !o || !n || await o(n.id);
  };
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Te.Root, { show: e, as: ce, children: /* @__PURE__ */ s.jsxs(ft, { as: "div", className: "relative z-50", onClose: H, children: [
      /* @__PURE__ */ s.jsx(
        Te.Child,
        {
          as: ce,
          enter: "ease-in-out duration-500",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in-out duration-500",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-stone-500 bg-opacity-75 transition-opacity" })
        }
      ),
      /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ s.jsx("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 right-3 bottom-3 top-3", children: /* @__PURE__ */ s.jsx(
        Te.Child,
        {
          as: ce,
          enter: "transform transition ease-in-out duration-500 sm:duration-700",
          enterFrom: "translate-x-full",
          enterTo: "translate-x-0",
          leave: "transform transition ease-in-out duration-500 sm:duration-700",
          leaveFrom: "translate-x-0",
          leaveTo: "translate-x-full",
          children: /* @__PURE__ */ s.jsx(ft.Panel, { className: "pointer-events-auto w-screen md:max-w-lg lg:max-w-xl rounded-2xl overflow-hidden", children: /* @__PURE__ */ s.jsxs("div", { className: "flex h-full flex-col overflow-y-scroll bg-white", children: [
            /* @__PURE__ */ s.jsx("div", { className: "bg-stone-50 px-4 py-6 sm:px-6", children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ s.jsx(ft.Title, { className: "text-base font-semibold leading-6 text-stone-900", children: "Edit event" }),
              /* @__PURE__ */ s.jsx("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "relative rounded-md bg-stone-50 text-stone-400 hover:text-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  onClick: H,
                  children: [
                    /* @__PURE__ */ s.jsx("span", { className: "absolute -inset-2.5" }),
                    /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Close panel" }),
                    /* @__PURE__ */ s.jsx(sn, { className: "h-6 w-6", "aria-hidden": "true" })
                  ]
                }
              ) })
            ] }) }),
            /* @__PURE__ */ s.jsxs("div", { className: "relative flex-1 px-4 py-6 sm:px-6 space-y-6", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-2 flex justify-center", children: /* @__PURE__ */ s.jsx("span", { className: "text-stone-400 text-lg", children: "T" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1", children: /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "text",
                    className: "block w-full border-0 p-0 text-stone-900 placeholder:text-stone-400 focus:ring-0 sm:text-sm sm:leading-6",
                    placeholder: "Add title",
                    value: a,
                    onChange: (k) => Y(l, k.target.value)
                  }
                ) })
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-1 flex justify-center", children: /* @__PURE__ */ s.jsx(Ma, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1", children: m ? (
                  // Expanded Edit View
                  /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                      /* @__PURE__ */ s.jsxs(ve, { className: "relative", children: [
                        /* @__PURE__ */ s.jsx(ve.Button, { className: "bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded text-sm font-medium text-stone-900 focus:outline-none", children: xe(g, "EEEE, d MMMM") }),
                        /* @__PURE__ */ s.jsx(ve.Panel, { className: "absolute z-10 mt-1", children: /* @__PURE__ */ s.jsx(pl, { value: g, onChange: (k) => Y(x, k) }) })
                      ] }),
                      /* @__PURE__ */ s.jsxs(ve, { className: "relative", children: [
                        /* @__PURE__ */ s.jsx(ve.Button, { className: "bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded text-sm font-medium text-stone-900 focus:outline-none", children: w }),
                        /* @__PURE__ */ s.jsx(ve.Panel, { className: "absolute z-10 mt-1", children: /* @__PURE__ */ s.jsx(zn, { value: w, onChange: (k) => Y(y, k) }) })
                      ] }),
                      /* @__PURE__ */ s.jsx("span", { className: "text-stone-500", children: "–" }),
                      /* @__PURE__ */ s.jsxs(ve, { className: "relative", children: [
                        /* @__PURE__ */ s.jsx(ve.Button, { className: "bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded text-sm font-medium text-stone-900 focus:outline-none", children: b }),
                        /* @__PURE__ */ s.jsx(ve.Panel, { className: "absolute z-10 mt-1", children: /* @__PURE__ */ s.jsx(zn, { value: b, onChange: (k) => Y(N, k) }) })
                      ] })
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ s.jsx(
                          hl,
                          {
                            checked: i,
                            onChange: (k) => Y(c, k),
                            className: z(
                              i ? "bg-blue-600" : "bg-stone-200",
                              "relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2"
                            ),
                            children: /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                "aria-hidden": "true",
                                className: z(
                                  i ? "translate-x-4" : "translate-x-0",
                                  "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                )
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ s.jsx("span", { className: "text-sm text-stone-700", children: "All day" })
                      ] }),
                      /* @__PURE__ */ s.jsx(ee, { value: f, onChange: (k) => Y(h, k), children: /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ s.jsx(ee.Button, { className: z(
                          "relative cursor-default rounded-md py-1 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6",
                          f ? "text-blue-600" : "text-blue-600 hover:text-blue-500 font-medium"
                        ), children: /* @__PURE__ */ s.jsx("span", { className: "block truncate", children: f ? f.name : "Time zone" }) }),
                        f && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "absolute -right-6 top-1.5 text-stone-400 hover:text-stone-600",
                            onClick: (k) => {
                              k.stopPropagation(), Y(h, null);
                            },
                            children: /* @__PURE__ */ s.jsx(sn, { className: "h-5 w-5" })
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          Te,
                          {
                            as: ce,
                            leave: "transition ease-in duration-100",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /* @__PURE__ */ s.jsx(ee.Options, { className: "absolute z-10 mt-1 max-h-60 w-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: Yh.map((k) => /* @__PURE__ */ s.jsx(
                              ee.Option,
                              {
                                className: ({ active: D, selected: T }) => z(
                                  "relative cursor-default select-none py-2 pl-3 pr-9",
                                  T || D ? "bg-stone-100 text-stone-900" : "text-stone-700 hover:bg-stone-50"
                                ),
                                value: k,
                                children: ({ selected: D }) => /* @__PURE__ */ s.jsx("span", { className: z(D ? "font-semibold" : "font-normal", "block truncate"), children: k.name })
                              },
                              k.id
                            )) })
                          }
                        )
                      ] }) })
                    ] }),
                    /* @__PURE__ */ s.jsx(ee, { value: u, onChange: (k) => Y(d, k), children: /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ s.jsxs(ee.Button, { className: "relative cursor-default rounded-md border border-stone-300 bg-white py-1 pl-3 pr-10 text-left text-stone-700 shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6", children: [
                        /* @__PURE__ */ s.jsx("span", { className: "block truncate", children: u.name }),
                        /* @__PURE__ */ s.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ s.jsx(Qe, { className: "h-5 w-5 text-stone-400", "aria-hidden": "true" }) })
                      ] }),
                      /* @__PURE__ */ s.jsx(
                        Te,
                        {
                          as: ce,
                          leave: "transition ease-in duration-100",
                          leaveFrom: "opacity-100",
                          leaveTo: "opacity-0",
                          children: /* @__PURE__ */ s.jsx(ee.Options, { className: "absolute z-10 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: Yr.map((k) => /* @__PURE__ */ s.jsx(
                            ee.Option,
                            {
                              className: ({ active: D, selected: T }) => z(
                                "relative cursor-default select-none py-2 pl-3 pr-9",
                                T || D ? "bg-stone-100 text-stone-900" : "text-stone-700 hover:bg-stone-50"
                              ),
                              value: k,
                              children: ({ selected: D }) => /* @__PURE__ */ s.jsx("span", { className: z(D ? "font-semibold" : "font-normal", "block truncate"), children: k.name })
                            },
                            k.id
                          )) })
                        }
                      )
                    ] }) })
                  ] })
                ) : (
                  // Collapsed View
                  /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "cursor-pointer hover:bg-stone-50 rounded-md p-2 -ml-2 transition-colors",
                      onClick: () => p(!0),
                      children: [
                        /* @__PURE__ */ s.jsxs("div", { className: "text-sm text-stone-900", children: [
                          xe(g, "EEEE, d MMMM"),
                          "   ",
                          w,
                          " – ",
                          b
                        ] }),
                        /* @__PURE__ */ s.jsxs("div", { className: "text-xs text-stone-500 mt-1", children: [
                          "Time zone • ",
                          u.name
                        ] })
                      ]
                    }
                  )
                ) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "border-t border-stone-100" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-1 flex justify-center", children: /* @__PURE__ */ s.jsx(Ra, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1", children: /* @__PURE__ */ s.jsx("input", { type: "text", defaultValue: "London (GMT+0)", className: "block w-full border-0 p-0 text-stone-900 placeholder:text-stone-400 focus:ring-0 sm:text-sm", placeholder: "Timezone" }) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "border-t border-stone-100" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-1 flex justify-center", children: /* @__PURE__ */ s.jsx(xo, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsxs("div", { className: "flex-1 space-y-3", children: [
                  /* @__PURE__ */ s.jsx("input", { type: "text", className: "block w-full border-0 p-0 text-stone-900 placeholder:text-stone-400 focus:ring-0 sm:text-sm", placeholder: "Add Participants" }),
                  /* @__PURE__ */ s.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                      /* @__PURE__ */ s.jsx("span", { className: "font-medium text-stone-900", children: "3 participants" }),
                      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 text-stone-400", children: [
                        /* @__PURE__ */ s.jsxs("button", { className: "hover:text-stone-600", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Email" }),
                          /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" }) })
                        ] }),
                        /* @__PURE__ */ s.jsxs("button", { className: "hover:text-stone-600", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Profile" }),
                          /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" }) })
                        ] }),
                        /* @__PURE__ */ s.jsx("button", { className: "hover:text-stone-600", children: /* @__PURE__ */ s.jsx(sn, { className: "h-4 w-4" }) })
                      ] })
                    ] }),
                    /* @__PURE__ */ s.jsx("p", { className: "text-xs text-stone-500", children: "1 yes, 2 awaiting" }),
                    /* @__PURE__ */ s.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ s.jsx("img", { className: "h-8 w-8 rounded-full bg-stone-50", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" }),
                          /* @__PURE__ */ s.jsx("span", { className: "absolute -bottom-0.5 -right-0.5 block h-3.5 w-3.5 rounded-full bg-white ring-2 ring-white", children: /* @__PURE__ */ s.jsx("span", { className: "block h-full w-full rounded-full bg-green-500" }) })
                        ] }),
                        /* @__PURE__ */ s.jsxs("div", { children: [
                          /* @__PURE__ */ s.jsx("p", { className: "text-sm font-medium text-stone-900", children: "James Collison" }),
                          /* @__PURE__ */ s.jsx("p", { className: "text-xs text-stone-500", children: "organizer" })
                        ] })
                      ] }),
                      /* @__PURE__ */ s.jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ s.jsx("img", { className: "h-8 w-8 rounded-full bg-stone-50", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" }),
                        /* @__PURE__ */ s.jsxs("div", { children: [
                          /* @__PURE__ */ s.jsx("p", { className: "text-sm font-medium text-stone-900", children: "Daniel Hobbs" }),
                          /* @__PURE__ */ s.jsx("p", { className: "text-xs text-stone-500", children: "dhobbs@site.com" })
                        ] })
                      ] }),
                      /* @__PURE__ */ s.jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-600", children: "L" }),
                        /* @__PURE__ */ s.jsxs("div", { children: [
                          /* @__PURE__ */ s.jsx("p", { className: "text-sm font-medium text-stone-900", children: "Liza Harrison" }),
                          /* @__PURE__ */ s.jsx("p", { className: "text-xs text-stone-500", children: "liza@site.com" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "pt-2", children: /* @__PURE__ */ s.jsxs("button", { className: "flex w-full items-center justify-between text-left text-sm text-stone-900", children: [
                      /* @__PURE__ */ s.jsxs("div", { children: [
                        /* @__PURE__ */ s.jsx("p", { className: "font-medium", children: "Participant permissions" }),
                        /* @__PURE__ */ s.jsx("p", { className: "text-xs text-stone-500", children: "Invite others • See participant list" })
                      ] }),
                      /* @__PURE__ */ s.jsx(Qe, { className: "h-4 w-4 text-stone-400" })
                    ] }) }),
                    /* @__PURE__ */ s.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ s.jsxs("div", { className: "inline-flex rounded-md shadow-sm", children: [
                      /* @__PURE__ */ s.jsx("button", { type: "button", className: "relative inline-flex items-center rounded-l-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus:z-10", children: "Send invite" }),
                      /* @__PURE__ */ s.jsx("button", { type: "button", className: "relative -ml-px inline-flex items-center rounded-r-md bg-blue-600 px-2 py-2 text-white hover:bg-blue-500 focus:z-10 border-l border-blue-700", children: /* @__PURE__ */ s.jsx(Qe, { className: "h-4 w-4", "aria-hidden": "true" }) })
                    ] }) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "border-t border-stone-100" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-1 flex justify-center", children: /* @__PURE__ */ s.jsx(Aa, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsxs("div", { className: "flex-1 space-y-3", children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s.jsx("div", { className: "h-5 w-5 bg-green-500 rounded-sm flex items-center justify-center text-[10px] text-white font-bold", children: "G" }),
                    /* @__PURE__ */ s.jsx("span", { className: "text-sm text-stone-900", children: "Google Meet" })
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "h-5 w-5 bg-blue-500 rounded-sm flex items-center justify-center text-[10px] text-white font-bold", children: "Z" }),
                      /* @__PURE__ */ s.jsx("span", { className: "text-sm text-stone-900", children: "Zoom" })
                    ] }),
                    /* @__PURE__ */ s.jsx("button", { type: "button", className: "rounded bg-white px-2 py-1 text-xs font-semibold text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 hover:bg-stone-50", children: "Connect" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "border-t border-stone-100" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-1 flex justify-center", children: /* @__PURE__ */ s.jsx(Da, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1", children: /* @__PURE__ */ s.jsx("input", { type: "text", className: "block w-full border-0 p-0 text-stone-900 placeholder:text-stone-400 focus:ring-0 sm:text-sm", placeholder: "Add Location" }) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "border-t border-stone-100" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-1 flex justify-center", children: /* @__PURE__ */ s.jsx(Sa, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1", children: /* @__PURE__ */ s.jsx("input", { type: "text", className: "block w-full border-0 p-0 text-stone-900 placeholder:text-stone-400 focus:ring-0 sm:text-sm", placeholder: "Add description, URL, or Attachments" }) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "border-t border-stone-100" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ s.jsx("div", { className: "w-6 pt-2 flex justify-center", children: /* @__PURE__ */ s.jsx($a, { className: "h-5 w-5 text-stone-400" }) }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1", children: O ? (
                  // Expanded View
                  /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "relative flex-1", children: /* @__PURE__ */ s.jsxs("button", { type: "button", className: "w-full flex items-center justify-between rounded-md bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-900 hover:bg-stone-200", children: [
                        /* @__PURE__ */ s.jsx("span", { children: "Segun Oroyo" }),
                        /* @__PURE__ */ s.jsx(Qe, { className: "h-4 w-4 text-stone-500 hidden" })
                      ] }) }),
                      /* @__PURE__ */ s.jsxs(ve, { className: "relative flex-1", children: [
                        /* @__PURE__ */ s.jsx(ve.Button, { className: z("flex items-center justify-center w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2", A.value, A.selectedClass), children: /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Select color" }) }),
                        /* @__PURE__ */ s.jsx(ve.Panel, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-5 gap-2", children: qr.map((k) => /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: z(
                              "h-6 w-6 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-1",
                              k.value,
                              k.selectedClass
                            ),
                            onClick: () => Y($, k),
                            children: A.id === k.id && /* @__PURE__ */ s.jsx(Pa, { className: "size-3 text-white" })
                          },
                          k.id
                        )) }) })
                      ] })
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "w-6 flex justify-center", children: /* @__PURE__ */ s.jsx(Ta, { className: "h-5 w-5 text-stone-400" }) }),
                      /* @__PURE__ */ s.jsx(ee, { value: M, onChange: (k) => Y(U, k), children: /* @__PURE__ */ s.jsxs("div", { className: "relative flex-1", children: [
                        /* @__PURE__ */ s.jsxs(ee.Button, { className: "relative w-full cursor-default rounded-md bg-stone-100 py-1.5 pl-3 pr-10 text-left text-stone-900 shadow-sm hover:bg-stone-200 focus:outline-none sm:text-sm sm:leading-6", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "block truncate", children: M.name }),
                          /* @__PURE__ */ s.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ s.jsx(Qe, { className: "h-5 w-5 text-stone-400", "aria-hidden": "true" }) })
                        ] }),
                        /* @__PURE__ */ s.jsx(Te, { as: ce, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ s.jsx(ee.Options, { className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: zr.map((k) => /* @__PURE__ */ s.jsx(
                          ee.Option,
                          {
                            className: ({ active: D }) => z("relative cursor-default select-none py-2 pl-3 pr-9", D ? "bg-stone-100 text-stone-900" : "text-stone-900"),
                            value: k,
                            children: ({ selected: D }) => /* @__PURE__ */ s.jsx("span", { className: z(D ? "font-semibold" : "font-normal", "block truncate"), children: k.name })
                          },
                          k.id
                        )) }) })
                      ] }) })
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "w-6 flex justify-center", children: /* @__PURE__ */ s.jsx(Fa, { className: "h-5 w-5 text-stone-400" }) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "flex-1 flex items-center gap-2", children: [
                        /* @__PURE__ */ s.jsx(ee, { value: q, onChange: (k) => Y(P, k), children: /* @__PURE__ */ s.jsxs("div", { className: "relative flex-1", children: [
                          /* @__PURE__ */ s.jsxs(ee.Button, { className: "relative w-full cursor-default rounded-md bg-stone-100 py-1.5 pl-3 pr-10 text-left text-stone-900 shadow-sm hover:bg-stone-200 focus:outline-none sm:text-sm sm:leading-6", children: [
                            /* @__PURE__ */ s.jsx("span", { className: "block truncate", children: q.name }),
                            /* @__PURE__ */ s.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ s.jsx(Qe, { className: "h-5 w-5 text-stone-400", "aria-hidden": "true" }) })
                          ] }),
                          /* @__PURE__ */ s.jsx(Te, { as: ce, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ s.jsx(ee.Options, { className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: Gr.map((k) => /* @__PURE__ */ s.jsx(
                            ee.Option,
                            {
                              className: ({ active: D }) => z("relative cursor-default select-none py-2 pl-3 pr-9", D ? "bg-stone-100 text-stone-900" : "text-stone-900"),
                              value: k,
                              children: ({ selected: D }) => /* @__PURE__ */ s.jsx("span", { className: z(D ? "font-semibold" : "font-normal", "block truncate"), children: k.name })
                            },
                            k.id
                          )) }) })
                        ] }) }),
                        /* @__PURE__ */ s.jsx(La, { className: "h-5 w-5 text-stone-400" })
                      ] })
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "w-6 flex justify-center", children: /* @__PURE__ */ s.jsx(Ca, { className: "h-5 w-5 text-stone-400" }) }),
                      /* @__PURE__ */ s.jsx(ee, { value: B, onChange: (k) => Y(K, k), children: /* @__PURE__ */ s.jsxs("div", { className: "relative flex-1", children: [
                        /* @__PURE__ */ s.jsxs(ee.Button, { className: "relative w-full cursor-default rounded-md bg-stone-100 py-1.5 pl-3 pr-10 text-left text-stone-900 shadow-sm hover:bg-stone-200 focus:outline-none sm:text-sm sm:leading-6", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "block truncate", children: B.name }),
                          /* @__PURE__ */ s.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ s.jsx(Qe, { className: "h-5 w-5 text-stone-400", "aria-hidden": "true" }) })
                        ] }),
                        /* @__PURE__ */ s.jsx(Te, { as: ce, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ s.jsx(ee.Options, { className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: Ur.map((k) => /* @__PURE__ */ s.jsx(
                          ee.Option,
                          {
                            className: ({ active: D }) => z("relative cursor-default select-none py-2 pl-3 pr-9", D ? "bg-stone-100 text-stone-900" : "text-stone-900"),
                            value: k,
                            children: ({ selected: D }) => /* @__PURE__ */ s.jsx("span", { className: z(D ? "font-semibold" : "font-normal", "block truncate"), children: k.name })
                          },
                          k.id
                        )) }) })
                      ] }) })
                    ] })
                  ] })
                ) : (
                  // Collapsed View
                  /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "cursor-pointer hover:bg-stone-50 rounded-md p-2 -ml-2 transition-colors",
                      onClick: () => R(!0),
                      children: [
                        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-stone-900", children: "Segun Oroyo" }),
                          /* @__PURE__ */ s.jsx("span", { className: z("h-2.5 w-2.5 rounded-full", A.value) })
                        ] }),
                        /* @__PURE__ */ s.jsxs("div", { className: "text-xs text-stone-500", children: [
                          M.name,
                          " • ",
                          q.name,
                          " • Notify ",
                          B.name.toLowerCase()
                        ] })
                      ]
                    }
                  )
                ) })
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "flex flex-shrink-0 justify-between px-4 py-4 bg-stone-50", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-100",
                  onClick: E,
                  children: "Delete"
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "rounded-md bg-white px-3 py-2 text-sm font-semibold text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 hover:bg-stone-50",
                    onClick: H,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "submit",
                    className: "ml-4 inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                    onClick: te,
                    children: "Save changes"
                  }
                )
              ] })
            ] })
          ] }) })
        }
      ) }) }) })
    ] }) }),
    /* @__PURE__ */ s.jsx(
      gl,
      {
        isOpen: X,
        title: "Discard unsaved changes?",
        message: "You have unsaved changes. Are you sure you want to discard them? This action cannot be undone.",
        confirmText: "Discard changes",
        cancelText: "Keep editing",
        onConfirm: Z,
        onCancel: () => W(!1)
      }
    )
  ] });
}
function Qh({
  events: e = [],
  initialView: t = "month",
  initialDate: n,
  className: r,
  classNames: o,
  onEventCreate: a,
  onEventUpdate: l,
  onEventDelete: i,
  onDateChange: c,
  onViewChange: u,
  isDateDisabled: d,
  onSlotClick: f,
  renderHeader: h,
  renderSidebar: m
}) {
  const [p, g] = F(t), [x, w] = F(n || /* @__PURE__ */ new Date()), [y, b] = F(!0), [N, O] = F(!1), [R, M] = F(!1), [U, q] = F(void 0), [P, B] = F(void 0), [K, A] = F(void 0);
  se(() => {
    t && g(t);
  }, [t]), se(() => {
    n && w(n);
  }, [n]);
  const $ = (T) => {
    w(T), c == null || c(T);
  }, L = (T) => {
    g(T), u == null || u(T);
  }, V = () => {
    b(!y);
  }, X = () => {
    B(/* @__PURE__ */ new Date()), A(void 0), O(!0);
  }, W = (T) => {
    if (f)
      f(T);
    else {
      B(T);
      const J = T.getHours(), ae = T.getMinutes(), pe = J >= 12 ? "PM" : "AM", Ie = J % 12 || 12, He = ae < 10 ? `0${ae}` : ae;
      A(`${Ie}:${He} ${pe}`), O(!0);
    }
  }, H = (T) => {
    q(T), M(!0);
  }, Z = () => {
    O(!1), B(void 0), A(void 0);
  }, Y = () => {
    M(!1), q(void 0);
  }, te = async (T) => {
    await (a == null ? void 0 : a(T)), Z();
  }, E = async (T) => {
    await (l == null ? void 0 : l(T)), Y();
  }, k = async (T) => {
    await (i == null ? void 0 : i(T)), Y();
  }, D = () => {
    const T = {
      currentDate: x,
      events: e,
      onDateChange: $,
      onViewChange: L,
      onEventClick: H,
      classNames: o,
      isDateDisabled: d,
      onSlotClick: W
    };
    switch (p) {
      case "day":
        return /* @__PURE__ */ s.jsx(au, { ...T });
      case "week":
        return /* @__PURE__ */ s.jsx(iu, { ...T });
      case "month":
        return /* @__PURE__ */ s.jsx(ws, { ...T });
      case "year":
        return /* @__PURE__ */ s.jsx(cu, { ...T });
      case "scheduled":
        return /* @__PURE__ */ s.jsx(uu, { ...T });
      default:
        return /* @__PURE__ */ s.jsx(ws, { ...T });
    }
  };
  return /* @__PURE__ */ s.jsxs("div", { className: z("flex h-full bg-white dark:bg-gray-900", r, o == null ? void 0 : o.root), children: [
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: z(
          "h-full transition-all duration-300 ease-in-out",
          y ? "lg:w-64" : "w-0",
          o == null ? void 0 : o.sidebar
        ),
        style: { overflow: "hidden" },
        children: m ? m({ currentDate: x, onDateChange: $, events: e }) : /* @__PURE__ */ s.jsx(_h, { currentDate: x, onDateChange: $, events: e })
      }
    ),
    /* @__PURE__ */ s.jsxs("div", { className: z("flex flex-1 flex-col overflow-hidden", o == null ? void 0 : o.content), children: [
      h ? h({
        currentDate: x,
        view: p,
        onViewChange: L,
        onDateChange: $,
        onToggleSidebar: V,
        isSidebarOpen: y,
        onCreateEvent: X
      }) : /* @__PURE__ */ s.jsx(
        Wh,
        {
          currentDate: x,
          view: p,
          onViewChange: L,
          onDateChange: $,
          onToggleSidebar: V,
          isSidebarOpen: y,
          onCreateEvent: X
        }
      ),
      /* @__PURE__ */ s.jsx("div", { className: "flex-1 overflow-auto", children: D() }),
      /* @__PURE__ */ s.jsx(
        Vh,
        {
          isOpen: N,
          onClose: Z,
          onSave: te,
          initialDate: P,
          initialTime: K
        }
      ),
      /* @__PURE__ */ s.jsx(
        zh,
        {
          isOpen: R,
          onClose: Y,
          event: U,
          onUpdate: E,
          onDelete: k
        }
      )
    ] })
  ] });
}
export {
  Qh as Calendar,
  au as DayView,
  ws as MonthView,
  iu as WeekView,
  cu as YearView
};
