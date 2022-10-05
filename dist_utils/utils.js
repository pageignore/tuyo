import p from "big.js";
var $ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, X = typeof $ == "object" && $ && $.Object === Object && $, G = X, z = G, J = typeof self == "object" && self && self.Object === Object && self, Q = z || J || Function("return this")(), K = Q, Y = K, Z = Y.Symbol, V = Z, F = V, R = Object.prototype, ee = R.hasOwnProperty, re = R.toString, A = F ? F.toStringTag : void 0;
function te(e) {
  var r = ee.call(e, A), t = e[A];
  try {
    e[A] = void 0;
    var n = !0;
  } catch (a) {
  }
  var o = re.call(e);
  return n && (r ? e[A] = t : delete e[A]), o;
}
var ne = te, oe = Object.prototype, se = oe.toString;
function ae(e) {
  return se.call(e);
}
var ie = ae, P = V, ue = ne, ce = ie, fe = "[object Null]", le = "[object Undefined]", E = P ? P.toStringTag : void 0;
function be(e) {
  return e == null ? e === void 0 ? le : fe : E && E in Object(e) ? ue(e) : ce(e);
}
var k = be;
function ye(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var pe = ye, ge = k, ve = pe, Te = "[object AsyncFunction]", de = "[object Function]", je = "[object GeneratorFunction]", me = "[object Proxy]";
function Ae(e) {
  if (!ve(e))
    return !1;
  var r = ge(e);
  return r == de || r == je || r == Te || r == me;
}
var $e = Ae, Oe = 9007199254740991;
function he(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Oe;
}
var C = he, Ne = $e, xe = C;
function _e(e) {
  return e != null && xe(e.length) && !Ne(e);
}
var m = _e;
function Se(e) {
  return e != null && typeof e == "object";
}
var g = Se;
function Le(e) {
  let r = Object.prototype.toString.call(e);
  r = r.substring(0, r.length - 1);
  let t = r.split(" ")[1];
  return t = t === "Number" && isNaN(e) ? "NaN" : t, t;
}
function b(e) {
  const r = Le(e);
  return r === "NaN" ? "NaN" : r.toLowerCase();
}
function Ie(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var ke = Ie, we = k, Fe = g, Pe = "[object Arguments]";
function Ee(e) {
  return Fe(e) && we(e) == Pe;
}
var Me = Ee, M = Me, Ue = g, W = Object.prototype, Be = W.hasOwnProperty, Ge = W.propertyIsEnumerable, Ke = M(function() {
  return arguments;
}()) ? M : function(e) {
  return Ue(e) && Be.call(e, "callee") && !Ge.call(e, "callee");
}, Ve = Ke, Re = Array.isArray, Ce = Re, S = { exports: {} };
function We() {
  return !1;
}
var De = We;
(function(e, r) {
  var t = K, n = De, o = r && !r.nodeType && r, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? t.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
  e.exports = c;
})(S, S.exports);
var qe = 9007199254740991, He = /^(?:0|[1-9]\d*)$/;
function Xe(e, r) {
  var t = typeof e;
  return r = r == null ? qe : r, !!r && (t == "number" || t != "symbol" && He.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var ze = Xe, Je = k, Qe = C, Ye = g, Ze = "[object Arguments]", er = "[object Array]", rr = "[object Boolean]", tr = "[object Date]", nr = "[object Error]", or = "[object Function]", sr = "[object Map]", ar = "[object Number]", ir = "[object Object]", ur = "[object RegExp]", cr = "[object Set]", fr = "[object String]", lr = "[object WeakMap]", br = "[object ArrayBuffer]", yr = "[object DataView]", pr = "[object Float32Array]", gr = "[object Float64Array]", vr = "[object Int8Array]", Tr = "[object Int16Array]", dr = "[object Int32Array]", jr = "[object Uint8Array]", mr = "[object Uint8ClampedArray]", Ar = "[object Uint16Array]", $r = "[object Uint32Array]", f = {};
f[pr] = f[gr] = f[vr] = f[Tr] = f[dr] = f[jr] = f[mr] = f[Ar] = f[$r] = !0;
f[Ze] = f[er] = f[br] = f[rr] = f[yr] = f[tr] = f[nr] = f[or] = f[sr] = f[ar] = f[ir] = f[ur] = f[cr] = f[fr] = f[lr] = !1;
function Or(e) {
  return Ye(e) && Qe(e.length) && !!f[Je(e)];
}
var hr = Or;
function Nr(e) {
  return function(r) {
    return e(r);
  };
}
var xr = Nr, L = { exports: {} };
(function(e, r) {
  var t = G, n = r && !r.nodeType && r, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a && t.process, s = function() {
    try {
      var u = o && o.require && o.require("util").types;
      return u || i && i.binding && i.binding("util");
    } catch (c) {
    }
  }();
  e.exports = s;
})(L, L.exports);
var _r = hr, Sr = xr, U = L.exports, B = U && U.isTypedArray, Lr = B ? Sr(B) : _r, Ir = Lr, kr = ke, wr = Ve, Fr = Ce, Pr = S.exports, Er = ze, Mr = Ir, Ur = Object.prototype, Br = Ur.hasOwnProperty;
function Gr(e, r) {
  var t = Fr(e), n = !t && wr(e), o = !t && !n && Pr(e), a = !t && !n && !o && Mr(e), i = t || n || o || a, s = i ? kr(e.length, String) : [], u = s.length;
  for (var c in e)
    (r || Br.call(e, c)) && !(i && (c == "length" || o && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Er(c, u))) && s.push(c);
  return s;
}
var Kr = Gr, Vr = Object.prototype;
function Rr(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Vr;
  return e === t;
}
var Cr = Rr;
function Wr(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var Dr = Wr, qr = Dr, Hr = qr(Object.keys, Object), Xr = Hr, zr = Cr, Jr = Xr, Qr = Object.prototype, Yr = Qr.hasOwnProperty;
function Zr(e) {
  if (!zr(e))
    return Jr(e);
  var r = [];
  for (var t in Object(e))
    Yr.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var et = Zr, rt = Kr, tt = et, nt = m;
function ot(e) {
  return nt(e) ? rt(e) : tt(e);
}
var D = ot;
function T(e) {
  if (!e)
    return [];
  const r = b(e);
  return r === "set" || r === "map" ? Array.from(e.keys()) : D(e);
}
function st(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, o = Array(n); ++t < n; )
    o[t] = r(e[t], t, e);
  return o;
}
var at = st, it = at;
function ut(e, r) {
  return it(r, function(t) {
    return e[t];
  });
}
var ct = ut, ft = ct, lt = D;
function bt(e) {
  return e == null ? [] : ft(e, lt(e));
}
var yt = bt;
function d(e) {
  if (!e)
    return [];
  let r = yt(e);
  const t = b(e);
  return (t === "set" || t === "map") && (r = Array.from(e.values())), r;
}
function h(e) {
  if (!e)
    return 0;
  let r = 0;
  return m(e) && (r = e.length), g(e) && (r = T(e).length), r;
}
function O(e, r = 0) {
  return !e || typeof e != "string" || r > e.length - 1 ? null : e.charCodeAt(r) - 97;
}
function q(e) {
  return m(e) || g(e);
}
function pt(e, r, t) {
  const n = t === "reverse";
  let o, a = n ? e.length - 1 : 0, i = n ? 0 : e.length;
  for (Ot(t) && $t(e) && (e = e.sort(t)); (n ? a >= i : a < i) && (o = r.call(e, e[a], a, b(e[a]), e), !(o !== "continue" && o === !1)); n ? a-- : a++)
    ;
}
function gt(e, r, t) {
  const n = t === "reverse", o = T(e), a = d(e);
  let i, s = n ? o.length - 1 : 0, u = n ? 0 : o.length;
  for (; (n ? s >= u : s < u) && (i = r.call(e, a[s], o[s], b(a[s]), e), !(i !== "continue" && i === !1)); n ? s-- : s++)
    ;
}
function I(e, r, t) {
  !e || !q(e) || (m(e) ? pt(e, r, t) : gt(e, r, t));
}
const vt = {
  null: 0,
  boolean: 1,
  NaN: 2,
  symbol: 3,
  number: 4,
  string: 5,
  array: 6,
  object: 7,
  set: 8,
  map: 9
}, Tt = {
  array: mt,
  object: x,
  set: x,
  map: x
};
function dt(e, r) {
  return e - r;
}
function N(e, r = {}) {
  let t = r[e] || vt[e];
  return typeof t == "number" ? t : 999;
}
function jt(e, r, t, n) {
  const o = Number(e), a = Number(r);
  let i = 0;
  if (isNaN(o) && isNaN(a))
    I(e, (s, u) => {
      let c = O(s) || 0, y = O(r[u]) || 0;
      if (i = j(c, y, t), i > 0 || i < 0)
        return !1;
    }), i === 0 && I(r, (s, u) => {
      let c = O(e[u]) || 0, y = O(s) || 0;
      if (i = j(c, y, t), i > 0 || i < 0)
        return !1;
    });
  else if (!isNaN(o) && !isNaN(a))
    i = t(o, a, "string", "string");
  else {
    const s = isNaN(o) ? "string" : "number", u = isNaN(a) ? "string" : "number", c = N(s, n), y = N(u, n);
    i = t(c, y, "order", "order");
  }
  return i;
}
function mt(e, r, t) {
  let n = h(e), o = h(r), a = 0;
  if (v(e, t), v(r, t), n === o) {
    for (let i in e)
      if (a = j(e[i], r[i], t), a > 0 || a < 0)
        break;
  } else
    a = t(n, o, "array", "array");
  return a;
}
function x(e, r, t) {
  let n = h(e), o = h(r);
  const a = b(e), i = b(r);
  let s = 0;
  if (s = t(e, r, a, i), isNaN(s) || s === 0)
    if (s = 0, n === o) {
      const u = T(e), c = T(r);
      if (u.length === c.length) {
        for (let y in u)
          if (s = j(u[y], c[y], t), s > 0 || s < 0)
            break;
        if (s === 0) {
          const y = d(e), H = d(r);
          for (let w in y)
            if (s = j(y[w], H[w], t), s > 0 || s < 0)
              break;
        }
      } else
        s = t(u.length, c.length, "length", "length");
    } else
      s = t(n, o, "length", "length");
  return s;
}
function j(e, r, t, n) {
  const o = b(e), a = b(r), i = N(o, n), s = N(a, n);
  let u = 0;
  return o === a ? g(e) ? u = Tt[o](e, r, t, n) : u = o === "string" ? jt(e, r, t, n) : t(e, r, o, a) : u = t(i, s, "order", "order"), u || 0;
}
function v(e, r, t) {
  if (b(e) !== "array")
    return [];
  const n = r || dt;
  function o(a, i) {
    return j(a, i, n, t);
  }
  return e.sort(o);
}
function _(e, r) {
  const t = b(e), n = b(e);
  if (typeof e != typeof r || t !== n)
    return !1;
  if (g(e)) {
    if (e === r)
      return !0;
    {
      let o = !0;
      const a = d(e), i = d(r);
      if (a.length !== i.length)
        return !1;
      if (v(a), v(i), m(e)) {
        for (let s in a)
          if (o = _(a[s], i[s]), !o)
            return !1;
      } else {
        const s = T(e), u = T(r);
        v(s), v(u);
        for (let c in s)
          if (o = _(s[c], u[c]), !o)
            return !1;
        for (let c in a)
          if (o = _(a[c], i[c]), !o)
            return !1;
      }
    }
  } else
    return e === r;
  return !0;
}
const At = ["number", "string", "boolean", "symbol", "null", "undefined"];
function Nt(e) {
  const r = b(e);
  return At.indexOf(r) >= 0;
}
function xt(e, r, t) {
  if (!e || !q(e) || !r)
    return;
  let n = t === void 0 ? m(e) ? e[0] : d(e)[0] : t, o = n, a = 0;
  return I(e, (i, s, u) => {
    if (a++, (t !== void 0 || a > 1) && (n = r(n, i, s, u, e)), n === "continue")
      return n = o, "continue";
    if (n === !1)
      return !1;
    o = n;
  }), n;
}
function _t(e, r) {
  const t = p(e), n = p(r);
  return t.plus(n).toNumber();
}
function St(e, r) {
  const t = p(e), n = p(r);
  return t.minus(n).toNumber();
}
function Lt(e, r) {
  const t = p(e), n = p(r);
  return t.times(n).toNumber();
}
function It(e, r) {
  const t = p(e), n = p(r);
  return t.div(n).toNumber();
}
function kt(e, r = 2) {
  const t = p(e);
  return Number(t.toFixed(r));
}
function l(e) {
  return (r) => Object.prototype.toString.call(r) === `[object ${e}]`;
}
const wt = l("Number"), Ft = l("String"), Pt = l("Boolean"), Et = l("Null"), Mt = l("Undefined"), $t = l("Array"), Ut = l("Object"), Ot = l("Function"), Bt = l("Set"), Gt = l("Map"), Kt = l("WeakSet"), Vt = l("WeakMap"), Rt = l("Symbol"), Ct = l("Date"), Wt = l("Arguments"), Dt = l("RegExp"), qt = l("HTMLCollection");
export {
  O as alphabetIndex,
  It as div,
  I as each,
  b as getType,
  Wt as isArguments,
  $t as isArray,
  Nt as isBaseType,
  Pt as isBoolean,
  Ct as isDate,
  Ot as isFunction,
  qt as isHTMLCollection,
  Gt as isMap,
  Et as isNull,
  wt as isNumber,
  Ut as isObject,
  Dt as isRegExp,
  _ as isSame,
  Bt as isSet,
  Ft as isString,
  Rt as isSymbol,
  Mt as isUndefined,
  Vt as isWeakMap,
  Kt as isWeakSet,
  T as keys,
  St as minus,
  _t as plus,
  xt as reduce,
  v as sort,
  Lt as times,
  kt as toFixed,
  d as values
};
