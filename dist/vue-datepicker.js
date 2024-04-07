import { openBlock as T, createElementBlock as Q, createElementVNode as pe, unref as d, reactive as zt, computed as G, ref as x, toRef as Ft, watch as pt, h as Bn, render as Ua, defineComponent as Ee, renderSlot as ie, createCommentVNode as J, normalizeClass as Me, withKeys as me, nextTick as xe, onMounted as Ue, onUnmounted as aa, normalizeProps as Be, mergeProps as Ie, Fragment as ke, normalizeStyle as Je, createTextVNode as dt, toDisplayString as We, onBeforeUpdate as Yn, withModifiers as $e, renderList as Se, withDirectives as Zt, vShow as xt, createBlock as De, withCtx as ye, createVNode as Qe, Transition as Bt, createSlots as ze, useSlots as Tt, guardReactiveProps as Ve, resolveDynamicComponent as na, getCurrentScope as Nn, onScopeDispose as In, isRef as Ka, Teleport as En } from "vue";
import { format as lt, isEqual as Pt, setHours as ln, setMinutes as rn, setSeconds as Ca, setMilliseconds as _a, isAfter as Lt, getYear as ge, getMonth as be, setMonth as Fn, setYear as nt, addMonths as Mt, subMonths as Wt, isValid as ea, isBefore as Ht, set as Ae, eachDayOfInterval as on, getHours as Ze, getMinutes as rt, getSeconds as Ct, startOfWeek as sn, endOfWeek as Ln, parse as Sa, isDate as Wn, addHours as Hn, addYears as un, subYears as dn, addDays as Dt, getDay as Vn, differenceInCalendarDays as zn, add as cn, sub as Un, getWeek as Kn, getISOWeek as jn, isSameQuarter as ja, eachQuarterOfInterval as Gn, startOfYear as Qn, endOfYear as qn, startOfQuarter as Xn, endOfQuarter as Ga, getQuarter as Qa } from "date-fns";
function Ut() {
  return T(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      pe("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      pe("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      pe("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      pe("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Ut.compatConfig = {
  MODE: 3
};
function Oa() {
  return T(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      pe("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Oa.compatConfig = {
  MODE: 3
};
function Ba() {
  return T(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      pe("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Ba.compatConfig = {
  MODE: 3
};
function Ya() {
  return T(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      pe("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      pe("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Ya.compatConfig = {
  MODE: 3
};
function Na() {
  return T(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      pe("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Na.compatConfig = {
  MODE: 3
};
function Ia() {
  return T(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      pe("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Ia.compatConfig = {
  MODE: 3
};
function qa(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function Jn(e) {
  return (t) => lt(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Zn = (e, t, l) => {
  const n = [1, 2, 3, 4, 5, 6, 7];
  let a;
  if (e !== null)
    try {
      a = n.map(Jn(e));
    } catch {
      a = n.map(qa(t));
    }
  else
    a = n.map(qa(t));
  const f = a.slice(0, l), r = a.slice(l + 1, a.length);
  return [a[l]].concat(...r).concat(...f);
}, Ea = (e, t, l) => {
  const n = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    n.push({ value: +a, text: pn(a, t) });
  return l ? n.reverse() : n;
}, fn = (e, t, l) => {
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((f) => {
    const r = f < 10 ? `0${f}` : f;
    return /* @__PURE__ */ new Date(`2017-${r}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const f = l === "long" ? "MMMM" : "MMM";
      return n.map((r, u) => {
        const P = lt(r, f, { locale: e });
        return {
          text: P.charAt(0).toUpperCase() + P.substring(1),
          value: u
        };
      });
    } catch {
    }
  const a = new Intl.DateTimeFormat(t, { month: l, timeZone: "UTC" });
  return n.map((f, r) => {
    const u = a.format(f);
    return {
      text: u.charAt(0).toUpperCase() + u.substring(1),
      value: r
    };
  });
}, xn = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ne = (e) => {
  const t = d(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, el = (e) => ({ type: "dot", ...e ?? {} }), vn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Fa = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Oe = (e) => e, Xa = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Ja = (e) => e === null, mn = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, tl = (e) => {
  const t = [], l = (n) => n.filter((a) => a);
  for (let n = 0; n < e.length; n += 3) {
    const a = [e[n], e[n + 1], e[n + 2]];
    t.push(l(a));
  }
  return t;
}, Vt = (e, t, l) => {
  const n = l != null, a = t != null;
  if (!n && !a)
    return !1;
  const f = +l, r = +t;
  return n && a ? +e > f || +e < r : n ? +e > f : a ? +e < r : !1;
}, _t = (e, t) => tl(e).map((l) => l.map((n) => {
  const { active: a, disabled: f, isBetween: r, highlighted: u } = t(n);
  return {
    ...n,
    active: a,
    disabled: f,
    className: {
      dp__overlay_cell_active: a,
      dp__overlay_cell: !a,
      dp__overlay_cell_disabled: f,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: f && a,
      dp__cell_in_between: r,
      "dp--highlighted": u
    }
  };
})), vt = (e, t, l = !1) => {
  e && t.allowStopPropagation && (l && e.stopImmediatePropagation(), e.stopPropagation());
}, al = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function nl(e, t) {
  let l = [...document.querySelectorAll(al())];
  l = l.filter((a) => !e.contains(a) || a.hasAttribute("data-datepicker-instance"));
  const n = l.indexOf(e);
  if (n >= 0 && (t ? n - 1 >= 0 : n + 1 <= l.length))
    return l[n + (t ? -1 : 1)];
}
const ll = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), pn = (e, t) => new Intl.NumberFormat(t, { useGrouping: !1, style: "decimal" }).format(e), La = (e) => lt(e, "dd-MM-yyyy"), ga = (e) => Array.isArray(e), ta = (e, t) => t.get(La(e)), rl = (e, t) => e ? t ? t instanceof Map ? !!ta(e, t) : t(z(e)) : !1 : !0, Za = (e, t, l, n, a, f) => {
  const r = Sa(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: f });
  return ea(r) && Wn(r) ? n || a ? r : Ae(r, {
    hours: +l.hours,
    minutes: +(l == null ? void 0 : l.minutes),
    seconds: +(l == null ? void 0 : l.seconds),
    milliseconds: 0
  }) : null;
}, ol = (e, t, l, n, a, f) => {
  const r = Array.isArray(l) ? l[0] : l;
  if (typeof t == "string")
    return Za(e, t, r, n, a, f);
  if (Array.isArray(t)) {
    let u = null;
    for (const P of t)
      if (u = Za(e, P, r, n, a, f), u)
        break;
    return u;
  }
  return typeof t == "function" ? t(e) : null;
}, z = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), sl = (e, t, l) => {
  if (t) {
    const a = (e.getMonth() + 1).toString().padStart(2, "0"), f = e.getDate().toString().padStart(2, "0"), r = e.getHours().toString().padStart(2, "0"), u = e.getMinutes().toString().padStart(2, "0"), P = l ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${a}-${f}T${r}:${u}:${P}.000Z`;
  }
  const n = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(n).toISOString();
}, je = (e) => {
  let t = z(JSON.parse(JSON.stringify(e)));
  return t = ln(t, 0), t = rn(t, 0), t = Ca(t, 0), t = _a(t, 0), t;
}, mt = (e, t, l, n) => {
  let a = e ? z(e) : z();
  return (t || t === 0) && (a = ln(a, +t)), (l || l === 0) && (a = rn(a, +l)), (n || n === 0) && (a = Ca(a, +n)), _a(a, 0);
}, Pe = (e, t) => !e || !t ? !1 : Ht(je(e), je(t)), we = (e, t) => !e || !t ? !1 : Pt(je(e), je(t)), _e = (e, t) => !e || !t ? !1 : Lt(je(e), je(t)), la = (e, t, l) => e != null && e[0] && (e != null && e[1]) ? _e(l, e[0]) && Pe(l, e[1]) : e != null && e[0] && t ? _e(l, e[0]) && Pe(l, t) || Pe(l, e[0]) && _e(l, t) : !1, Xe = (e) => {
  const t = Ae(new Date(e), { date: 1 });
  return je(t);
}, ya = (e, t, l) => t && (l || l === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((n) => n === t ? [n, l] : [n, isNaN(+e[n]) ? void 0 : +e[n]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, $t = (e) => ({
  hours: Ze(e),
  minutes: rt(e),
  seconds: Ct(e)
}), gn = (e, t) => {
  if (t) {
    const l = ge(z(t));
    if (l > e)
      return 12;
    if (l === e)
      return be(z(t));
  }
}, yn = (e, t) => {
  if (t) {
    const l = ge(z(t));
    return l < e ? -1 : l === e ? be(z(t)) : void 0;
  }
}, Ot = (e) => {
  if (e)
    return ge(z(e));
}, hn = (e, t) => {
  const l = _e(e, t) ? t : e, n = _e(t, e) ? t : e;
  return on({ start: l, end: n });
}, ul = (e) => {
  const t = Mt(e, 1);
  return { month: be(t), year: ge(t) };
}, st = (e, t) => {
  const l = sn(e, { weekStartsOn: +t }), n = Ln(e, { weekStartsOn: +t });
  return [l, n];
}, bn = (e, t) => {
  const l = {
    hours: Ze(z()),
    minutes: rt(z()),
    seconds: t ? Ct(z()) : 0
  };
  return Object.assign(l, e);
}, ft = (e, t, l) => [Ae(z(e), { date: 1 }), Ae(z(), { month: t, year: l, date: 1 })], ut = (e, t, l) => {
  let n = e ? z(e) : z();
  return (t || t === 0) && (n = Fn(n, t)), l && (n = nt(n, l)), n;
}, kn = (e, t, l, n, a) => {
  if (!n || a && !t || !a && !l)
    return !1;
  const f = a ? Mt(e, 1) : Wt(e, 1), r = [be(f), ge(f)];
  return a ? !dl(...r, t) : !il(...r, l);
}, il = (e, t, l) => Pe(...ft(l, e, t)) || we(...ft(l, e, t)), dl = (e, t, l) => _e(...ft(l, e, t)) || we(...ft(l, e, t)), wn = (e, t, l, n, a, f, r) => {
  if (typeof t == "function" && !r)
    return t(e);
  const u = l ? { locale: l } : void 0;
  return Array.isArray(e) ? `${lt(e[0], f, u)}${a && !e[1] ? "" : n}${e[1] ? lt(e[1], f, u) : ""}` : lt(e, f, u);
}, St = (e) => {
  if (e)
    return null;
  throw new Error(Fa.prop("partial-range"));
}, Xt = (e, t) => {
  if (t)
    return e();
  throw new Error(Fa.prop("range"));
}, Ra = (e) => Array.isArray(e) ? ea(e[0]) && (e[1] ? ea(e[1]) : !0) : e ? ea(e) : !1, cl = (e, t) => Ae(t ?? z(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), ha = (e, t, l, n) => {
  if (!e)
    return !0;
  if (n) {
    const a = l === "max" ? Ht(e, t) : Lt(e, t), f = { seconds: 0, milliseconds: 0 };
    return a || Pt(Ae(e, f), Ae(t, f));
  }
  return l === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, ba = (e, t, l) => e ? cl(e, t) : z(l ?? t), xa = (e, t, l, n, a) => {
  if (Array.isArray(n)) {
    const r = ba(e, n[0], t), u = ba(e, n[1], t);
    return ha(n[0], r, l, !!t) && ha(n[1], u, l, !!t) && a;
  }
  const f = ba(e, n, t);
  return ha(n, f, l, !!t) && a;
}, ka = (e) => Ae(z(), $t(e)), fl = (e, t) => e instanceof Map ? Array.from(e.values()).filter((l) => ge(z(l)) === t).map((l) => be(l)) : [], Dn = (e, t, l) => typeof e == "function" ? e({ month: t, year: l }) : !!e.months.find((n) => n.month === t && n.year === l), Wa = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), It = zt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Mn = () => {
  const e = (n) => {
    It.menuFocused = n;
  }, t = (n) => {
    It.shiftKeyInMenu !== n && (It.shiftKeyInMenu = n);
  };
  return {
    control: G(() => ({ shiftKeyInMenu: It.shiftKeyInMenu, menuFocused: It.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Te = zt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), wa = x(null), Jt = x(!1), Da = x(!1), Ma = x(!1), $a = x(!1), Le = x(0), Ce = x(0), gt = () => {
  const e = G(() => Jt.value ? [...Te.selectionGrid, Te.actionRow].filter((C) => C.length) : Da.value ? [
    ...Te.timePicker[0],
    ...Te.timePicker[1],
    $a.value ? [] : [wa.value],
    Te.actionRow
  ].filter((C) => C.length) : Ma.value ? [...Te.monthPicker, Te.actionRow] : [Te.monthYear, ...Te.calendar, Te.time, Te.actionRow].filter((C) => C.length)), t = (C) => {
    Le.value = C ? Le.value + 1 : Le.value - 1;
    let E = null;
    e.value[Ce.value] && (E = e.value[Ce.value][Le.value]), !E && e.value[Ce.value + (C ? 1 : -1)] ? (Ce.value = Ce.value + (C ? 1 : -1), Le.value = C ? 0 : e.value[Ce.value].length - 1) : E || (Le.value = C ? Le.value - 1 : Le.value + 1);
  }, l = (C) => {
    if (Ce.value === 0 && !C || Ce.value === e.value.length && C)
      return;
    Ce.value = C ? Ce.value + 1 : Ce.value - 1, e.value[Ce.value] ? e.value[Ce.value] && !e.value[Ce.value][Le.value] && Le.value !== 0 && (Le.value = e.value[Ce.value].length - 1) : Ce.value = C ? Ce.value - 1 : Ce.value + 1;
  }, n = (C) => {
    let E = null;
    e.value[Ce.value] && (E = e.value[Ce.value][Le.value]), E ? E.focus({ preventScroll: !Jt.value }) : Le.value = C ? Le.value - 1 : Le.value + 1;
  }, a = () => {
    t(!0), n(!0);
  }, f = () => {
    t(!1), n(!1);
  }, r = () => {
    l(!1), n(!0);
  }, u = () => {
    l(!0), n(!0);
  }, P = (C, E) => {
    Te[E] = C;
  }, $ = (C, E) => {
    Te[E] = C;
  }, h = () => {
    Le.value = 0, Ce.value = 0;
  };
  return {
    buildMatrix: P,
    buildMultiLevelMatrix: $,
    setTimePickerBackRef: (C) => {
      wa.value = C;
    },
    setSelectionGrid: (C) => {
      Jt.value = C, h(), C || (Te.selectionGrid = []);
    },
    setTimePicker: (C, E = !1) => {
      Da.value = C, $a.value = E, h(), C || (Te.timePicker[0] = [], Te.timePicker[1] = []);
    },
    setTimePickerElements: (C, E = 0) => {
      Te.timePicker[E] = C;
    },
    arrowRight: a,
    arrowLeft: f,
    arrowUp: r,
    arrowDown: u,
    clearArrowNav: () => {
      Te.monthYear = [], Te.calendar = [], Te.time = [], Te.actionRow = [], Te.selectionGrid = [], Te.timePicker[0] = [], Te.timePicker[1] = [], Jt.value = !1, Da.value = !1, $a.value = !1, Ma.value = !1, h(), wa.value = null;
    },
    setMonthPicker: (C) => {
      Ma.value = C, h();
    },
    refSets: Te
    // exposed for testing
  };
}, it = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), $n = (e, t) => {
  const l = Pa(e, t);
  return l || z();
}, vl = (e, t) => t.dateInTz ? it(new Date(e), t.dateInTz) : z(e), Pa = (e, t) => {
  if (!e)
    return null;
  if (!t)
    return z(e);
  const l = z(e);
  return t.exactMatch ? vl(e, t) : it(l, t.timezone);
}, ml = (e) => {
  if (!e)
    return 0;
  const t = /* @__PURE__ */ new Date(), l = new Date(t.toLocaleString("en-US", { timeZone: "UTC" })), n = new Date(t.toLocaleString("en-US", { timeZone: e })), a = n.getTimezoneOffset() / 60;
  return (+l - +n) / (1e3 * 60 * 60) - a;
}, en = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), pl = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  ...e ?? {}
}), tn = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, gl = (e) => {
  const t = typeof e == "object" && e, l = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...l, count: tn(!1) };
  const n = t ? e : {}, a = t ? n.count ?? !0 : e, f = tn(a);
  return Object.assign(l, n, { count: f });
}, yl = (e, t, l) => e || (typeof l == "string" ? l : t), hl = (e) => typeof e == "boolean" ? e ? en({}) : !1 : en(e), bl = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, kl = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), wl = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), Dl = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, Ml = (e) => ({ ...{
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0
}, ...e ?? {} }), $l = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((l) => z(l)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, Al = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, Tl = (e, t) => {
  const l = {
    noDisabledRange: !1,
    showLastInRange: !0,
    minMaxRawRange: !1,
    partialRange: !0,
    disableTimeRangeValidation: !1,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: !1,
    fixedEnd: !1
  };
  return typeof e == "object" ? { enabled: !0, ...l, ...e } : {
    enabled: e,
    noDisabledRange: t.noDisabledRange,
    showLastInRange: t.showLastInRange,
    minMaxRawRange: t.minMaxRawRange,
    partialRange: t.partialRange,
    disableTimeRangeValidation: t.disableTimeRangeValidation,
    maxRange: t.maxRange,
    minRange: t.minRange,
    autoRange: t.autoRange,
    fixedStart: t.fixedStart,
    fixedEnd: t.fixedEnd
  };
}, Sl = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t, convertModel: !0 } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone,
  convertModel: e.convertModel ?? !0
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, Aa = (e, t) => new Map(
  e.map((l) => {
    const n = $n(l, t);
    return [La(n), n];
  })
), Rl = (e, t) => e.length ? new Map(
  e.map((l) => {
    const n = $n(l.date, t);
    return [La(n), l];
  })
) : null, Pl = (e, t, l, n, a, f, r) => ({
  minDate: Pa(e, r),
  maxDate: Pa(t, r),
  disabledDates: ga(l) ? Aa(l, r) : l,
  allowedDates: ga(n) ? Aa(n, r) : null,
  highlight: typeof a == "object" && ga(a == null ? void 0 : a.dates) ? Aa(a.dates, r) : a,
  markers: Rl(f, r)
}), Cl = (e, t) => typeof e == "boolean" ? { enabled: e, dragSelect: !0, limit: +t } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? !0
}, Re = (e) => {
  const t = () => {
    const F = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${F}` : `hh:mm${F} aa`;
  }, l = () => {
    var F;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((F = W.value) == null ? void 0 : F.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, n = (F) => bn(F, e.enableSeconds), a = () => R.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [n(e.startTime[0]), n(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? n(e.startTime) : null, f = G(() => gl(e.multiCalendars)), r = G(() => a()), u = G(() => pl(e.ariaLabels)), P = G(() => kl(e.filters)), $ = G(() => hl(e.transitions)), h = G(() => wl(e.actionRow)), S = G(
    () => yl(e.previewFormat, e.format, l())
  ), D = G(() => bl(e.textInput)), L = G(() => Dl(e.inline)), N = G(() => Ml(e.config)), M = G(() => $l(e.highlight)), W = G(() => Al(e.weekNumbers)), C = G(() => Sl(e.timezone, e.emitTimezone)), E = G(() => Cl(e.multiDates, e.multiDatesLimit)), I = G(
    () => Pl(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      M.value,
      e.markers,
      C.value
    )
  ), R = G(
    () => Tl(e.range, {
      minMaxRawRange: !1,
      maxRange: e.maxRange,
      minRange: e.minRange,
      noDisabledRange: e.noDisabledRange,
      showLastInRange: e.showLastInRange,
      partialRange: e.partialRange,
      disableTimeRangeValidation: e.disableTimeRangeValidation,
      autoRange: e.autoRange,
      fixedStart: e.fixedStart,
      fixedEnd: e.fixedEnd
    })
  );
  return {
    defaultedTransitions: $,
    defaultedMultiCalendars: f,
    defaultedStartTime: r,
    defaultedAriaLabels: u,
    defaultedFilters: P,
    defaultedActionRow: h,
    defaultedPreviewFormat: S,
    defaultedTextInput: D,
    defaultedInline: L,
    defaultedConfig: N,
    defaultedHighlight: M,
    defaultedWeekNumbers: W,
    defaultedRange: R,
    propDates: I,
    defaultedTz: C,
    defaultedMultiDates: E,
    getDefaultPattern: l,
    getDefaultStartTime: a
  };
}, _l = (e, t, l) => {
  const n = x(), { defaultedTextInput: a, defaultedRange: f, defaultedTz: r, defaultedMultiDates: u, getDefaultPattern: P } = Re(t), $ = x(""), h = Ft(t, "format"), S = Ft(t, "formatLocale");
  pt(
    n,
    () => {
      e("internal-model-change", n.value);
    },
    { deep: !0 }
  ), pt(h, () => {
    g();
  });
  const D = (o) => r.value.timezone && r.value.convertModel ? it(o, r.value.timezone) : o, L = (o) => {
    if (r.value.timezone && r.value.convertModel) {
      const B = ml(r.value.timezone);
      return Hn(o, B);
    }
    return o;
  }, N = (o, B, s = !1) => wn(
    o,
    t.format,
    t.formatLocale,
    a.value.rangeSeparator,
    t.modelAuto,
    B ?? P(),
    s
  ), M = (o) => o ? t.modelType ? O(o) : {
    hours: Ze(o),
    minutes: rt(o),
    seconds: t.enableSeconds ? Ct(o) : 0
  } : null, W = (o) => t.modelType ? O(o) : { month: be(o), year: ge(o) }, C = (o) => Array.isArray(o) ? u.value.enabled ? o.map((B) => E(B, nt(z(), B))) : Xt(
    () => [
      nt(z(), o[0]),
      o[1] ? nt(z(), o[1]) : St(f.value.partialRange)
    ],
    f.value.enabled
  ) : nt(z(), +o), E = (o, B) => (typeof o == "string" || typeof o == "number") && t.modelType ? Z(o) : B, I = (o) => Array.isArray(o) ? [
    E(
      o[0],
      mt(null, +o[0].hours, +o[0].minutes, o[0].seconds)
    ),
    E(
      o[1],
      mt(null, +o[1].hours, +o[1].minutes, o[1].seconds)
    )
  ] : E(o, mt(null, o.hours, o.minutes, o.seconds)), R = (o) => {
    const B = Ae(z(), { date: 1 });
    return Array.isArray(o) ? u.value.enabled ? o.map((s) => E(s, ut(B, +s.month, +s.year))) : Xt(
      () => [
        E(o[0], ut(B, +o[0].month, +o[0].year)),
        E(
          o[1],
          o[1] ? ut(B, +o[1].month, +o[1].year) : St(f.value.partialRange)
        )
      ],
      f.value.enabled
    ) : E(o, ut(B, +o.month, +o.year));
  }, F = (o) => {
    if (Array.isArray(o))
      return o.map((B) => Z(B));
    throw new Error(Fa.dateArr("multi-dates"));
  }, H = (o) => {
    if (Array.isArray(o) && f.value.enabled) {
      const B = o[0], s = o[1];
      return [
        z(Array.isArray(B) ? B[0] : null),
        z(Array.isArray(s) ? s[0] : null)
      ];
    }
    return z(o[0]);
  }, q = (o) => t.modelAuto ? Array.isArray(o) ? [Z(o[0]), Z(o[1])] : t.autoApply ? [Z(o)] : [Z(o), null] : Array.isArray(o) ? Xt(
    () => o[1] ? [
      Z(o[0]),
      o[1] ? Z(o[1]) : St(f.value.partialRange)
    ] : [Z(o[0])],
    f.value.enabled
  ) : Z(o), A = () => {
    Array.isArray(n.value) && f.value.enabled && n.value.length === 1 && n.value.push(St(f.value.partialRange));
  }, se = () => {
    const o = n.value;
    return [
      O(o[0]),
      o[1] ? O(o[1]) : St(f.value.partialRange)
    ];
  }, le = () => n.value[1] ? se() : O(Oe(n.value[0])), te = () => (n.value || []).map((o) => O(o)), _ = () => (A(), t.modelAuto ? le() : u.value.enabled ? te() : Array.isArray(n.value) ? Xt(() => se(), f.value.enabled) : O(Oe(n.value))), U = (o) => !o || Array.isArray(o) && !o.length ? null : t.timePicker ? I(Oe(o)) : t.monthPicker ? R(Oe(o)) : t.yearPicker ? C(Oe(o)) : u.value.enabled ? F(Oe(o)) : t.weekPicker ? H(Oe(o)) : q(Oe(o)), ee = (o) => {
    const B = U(o);
    Ra(Oe(B)) ? (n.value = Oe(B), g()) : (n.value = null, $.value = "");
  }, V = () => {
    const o = (B) => lt(B, a.value.format);
    return `${o(n.value[0])} ${a.value.rangeSeparator} ${n.value[1] ? o(n.value[1]) : ""}`;
  }, c = () => l.value && n.value ? Array.isArray(n.value) ? V() : lt(n.value, a.value.format) : N(n.value), b = () => n.value ? u.value.enabled ? n.value.map((o) => N(o)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? c() : N(n.value) : "", g = () => {
    !t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? $.value = b() : $.value = t.format(n.value);
  }, Z = (o) => {
    if (t.utc) {
      const B = new Date(o);
      return t.utc === "preserve" ? new Date(B.getTime() + B.getTimezoneOffset() * 6e4) : B;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? D(new Date(o)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? D(Sa(o, P(), /* @__PURE__ */ new Date(), { locale: S.value })) : D(Sa(o, t.modelType, /* @__PURE__ */ new Date(), { locale: S.value })) : D(new Date(o));
  }, O = (o) => o ? t.utc ? sl(o, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +L(o) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? N(L(o)) : N(L(o), t.modelType, !0) : L(o) : "", p = (o, B = !1) => {
    if (e("update:model-value", o), r.value.emitTimezone && B) {
      const s = Array.isArray(o) ? o.map((m) => it(Oe(m), r.value.emitTimezone)) : it(Oe(o), r.value.emitTimezone);
      e("update:model-timezone-value", s);
    }
  }, j = (o) => Array.isArray(n.value) ? u.value.enabled ? n.value.map((B) => o(B)) : [
    o(n.value[0]),
    n.value[1] ? o(n.value[1]) : St(f.value.partialRange)
  ] : o(Oe(n.value)), ae = () => {
    if (Array.isArray(n.value)) {
      const o = st(n.value[0], t.weekStart), B = n.value[1] ? st(n.value[1], t.weekStart) : [];
      return [o.map((s) => z(s)), B.map((s) => z(s))];
    }
    return st(n.value, t.weekStart).map((o) => z(o));
  }, i = (o) => p(Oe(j(o)));
  return {
    inputValue: $,
    internalModelValue: n,
    checkBeforeEmit: () => n.value ? f.value.enabled ? f.value.partialRange ? n.value.length >= 1 : n.value.length === 2 : !!n.value : !1,
    parseExternalModelValue: ee,
    formatInputValue: g,
    emitModelValue: () => (g(), t.monthPicker ? i(W) : t.timePicker ? i(M) : t.yearPicker ? i(ge) : t.weekPicker ? e("update:model-value", ae()) : p(_(), !0))
  };
}, Ol = (e, t) => {
  const { defaultedFilters: l, propDates: n } = Re(e), { validateMonthYearInRange: a } = yt(e), f = (h, S) => {
    let D = h;
    return l.value.months.includes(be(D)) ? (D = S ? Mt(h, 1) : Wt(h, 1), f(D, S)) : D;
  }, r = (h, S) => {
    let D = h;
    return l.value.years.includes(ge(D)) ? (D = S ? un(h, 1) : dn(h, 1), r(D, S)) : D;
  }, u = (h, S = !1) => {
    const D = Ae(z(), { month: e.month, year: e.year });
    let L = h ? Mt(D, 1) : Wt(D, 1);
    e.disableYearSelect && (L = nt(L, e.year));
    let N = be(L), M = ge(L);
    l.value.months.includes(N) && (L = f(L, h), N = be(L), M = ge(L)), l.value.years.includes(M) && (L = r(L, h), M = ge(L)), a(N, M, h, e.preventMinMaxNavigation) && P(N, M, S);
  }, P = (h, S, D) => {
    t("update-month-year", { month: h, year: S, fromNav: D });
  }, $ = G(() => (h) => kn(
    Ae(z(), { month: e.month, year: e.year }),
    n.value.maxDate,
    n.value.minDate,
    e.preventMinMaxNavigation,
    h
  ));
  return { handleMonthYearChange: u, isDisabled: $, updateMonthYear: P };
};
var Rt = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Rt || {}), qe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(qe || {}), wt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(wt || {}), At = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(At || {}), at = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(at || {});
const Bl = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: l,
  pickerWrapperRef: n,
  inline: a,
  emit: f,
  props: r,
  slots: u
}) => {
  const P = x({}), $ = x(!1), h = x({
    top: "0",
    left: "0"
  }), S = x(!1), D = Ft(r, "teleportCenter");
  pt(D, () => {
    h.value = JSON.parse(JSON.stringify({})), R();
  });
  const L = (c) => {
    if (r.teleport) {
      const b = c.getBoundingClientRect();
      return {
        left: b.left + window.scrollX,
        top: b.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, N = (c, b) => {
    h.value.left = `${c + b - P.value.width}px`;
  }, M = (c) => {
    h.value.left = `${c}px`;
  }, W = (c, b) => {
    r.position === Rt.left && M(c), r.position === Rt.right && N(c, b), r.position === Rt.center && (h.value.left = `${c + b / 2 - P.value.width / 2}px`);
  }, C = (c) => {
    const { width: b, height: g } = c.getBoundingClientRect(), { top: Z, left: O } = r.altPosition ? r.altPosition(c) : L(c);
    return { top: +Z, left: +O, width: b, height: g };
  }, E = () => {
    h.value.left = "50%", h.value.top = "50%", h.value.transform = "translate(-50%, -50%)", h.value.position = "fixed", delete h.value.opacity;
  }, I = () => {
    const c = Ne(l), { top: b, left: g, transform: Z } = r.altPosition(c);
    h.value = { top: `${b}px`, left: `${g}px`, transform: Z ?? "" };
  }, R = (c = !0) => {
    var b;
    if (!a.value.enabled) {
      if (D.value)
        return E();
      if (r.altPosition !== null)
        return I();
      if (c) {
        const g = r.teleport ? (b = t.value) == null ? void 0 : b.$el : e.value;
        g && (P.value = g.getBoundingClientRect()), f("recalculate-position");
      }
      return te();
    }
  }, F = ({ inputEl: c, left: b, width: g }) => {
    window.screen.width > 768 && !$.value && W(b, g), A(c);
  }, H = (c) => {
    const { top: b, left: g, height: Z, width: O } = C(c);
    h.value.top = `${Z + b + +r.offset}px`, S.value = !1, $.value || (h.value.left = `${g + O / 2 - P.value.width / 2}px`), F({ inputEl: c, left: g, width: O });
  }, q = (c) => {
    const { top: b, left: g, width: Z } = C(c);
    h.value.top = `${b - +r.offset - P.value.height}px`, S.value = !0, F({ inputEl: c, left: g, width: Z });
  }, A = (c) => {
    if (r.autoPosition) {
      const { left: b, width: g } = C(c), { left: Z, right: O } = P.value;
      if (!$.value) {
        if (Math.abs(Z) !== Math.abs(O)) {
          if (Z <= 0)
            return $.value = !0, M(b);
          if (O >= document.documentElement.clientWidth)
            return $.value = !0, N(b, g);
        }
        return W(b, g);
      }
    }
  }, se = () => {
    const c = Ne(l);
    if (c) {
      const { height: b } = P.value, { top: g, height: Z } = c.getBoundingClientRect(), p = window.innerHeight - g - Z, j = g;
      return b <= p ? wt.bottom : b > p && b <= j ? wt.top : p >= j ? wt.bottom : wt.top;
    }
    return wt.bottom;
  }, le = (c) => se() === wt.bottom ? H(c) : q(c), te = () => {
    const c = Ne(l);
    if (c)
      return r.autoPosition ? le(c) : H(c);
  }, _ = function(c) {
    if (c) {
      const b = c.scrollHeight > c.clientHeight, Z = window.getComputedStyle(c).overflowY.indexOf("hidden") !== -1;
      return b && !Z;
    }
    return !0;
  }, U = function(c) {
    return !c || c === document.body || c.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : _(c) ? c : U(c.parentNode);
  }, ee = (c) => {
    if (c)
      switch (r.position) {
        case Rt.left:
          return { left: 0, transform: "translateX(0)" };
        case Rt.right:
          return { left: `${c.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${c.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: S,
    menuStyle: h,
    xCorrect: $,
    setMenuPosition: R,
    getScrollableParent: U,
    shadowRender: (c, b) => {
      var ae, i, k;
      const g = document.createElement("div"), Z = (ae = Ne(l)) == null ? void 0 : ae.getBoundingClientRect();
      g.setAttribute("id", "dp--temp-container");
      const O = (i = n.value) != null && i.clientWidth ? n.value : document.body;
      O.append(g);
      const p = ee(Z), j = Bn(
        c,
        {
          ...b,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...p }
        },
        Object.fromEntries(
          Object.keys(u).filter((v) => ["right-sidebar", "left-sidebar"].includes(v)).map((v) => [v, u[v]])
        )
      );
      Ua(j, g), P.value = (k = j.el) == null ? void 0 : k.getBoundingClientRect(), Ua(null, g), O.removeChild(g);
    }
  };
}, ct = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] }
], Yl = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Nl = {
  all: () => ct,
  monthYear: () => ct.filter((e) => e.use.includes("month-year")),
  input: () => Yl,
  timePicker: () => ct.filter((e) => e.use.includes("time")),
  action: () => ct.filter((e) => e.use.includes("action")),
  calendar: () => ct.filter((e) => e.use.includes("calendar")),
  menu: () => ct.filter((e) => e.use.includes("menu")),
  shared: () => ct.filter((e) => e.use.includes("shared")),
  yearMode: () => ct.filter((e) => e.use.includes("year-mode"))
}, Ke = (e, t, l) => {
  const n = [];
  return Nl[t]().forEach((a) => {
    e[a.name] && n.push(a.name);
  }), l != null && l.length && l.forEach((a) => {
    a.slot && n.push(a.slot);
  }), n;
}, Kt = (e) => {
  const t = G(() => (n) => e.value ? n ? e.value.open : e.value.close : ""), l = G(() => (n) => e.value ? n ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: l };
}, jt = (e, t) => {
  const { defaultedRange: l, defaultedTz: n } = Re(e), a = z(it(z(), n.value.timezone)), f = x([{ month: be(a), year: ge(a) }]), r = zt({
    hours: l.value.enabled ? [Ze(a), Ze(a)] : Ze(a),
    minutes: l.value.enabled ? [rt(a), rt(a)] : rt(a),
    seconds: l.value.enabled ? [0, 0] : 0
  }), u = G({
    get: () => e.internalModelValue,
    set: (h) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", h);
    }
  }), P = G(
    () => (h) => f.value[h] ? f.value[h].month : 0
  ), $ = G(
    () => (h) => f.value[h] ? f.value[h].year : 0
  );
  return {
    calendars: f,
    time: r,
    modelValue: u,
    month: P,
    year: $
  };
}, Il = (e, t) => {
  const { defaultedMultiCalendars: l, defaultedMultiDates: n, defaultedHighlight: a, defaultedTz: f, propDates: r, defaultedRange: u } = Re(t), { isDisabled: P } = yt(t), $ = x(null), h = x(it(/* @__PURE__ */ new Date(), f.value.timezone)), S = (i) => {
    !i.current && t.hideOffsetDates || ($.value = i.value);
  }, D = () => {
    $.value = null;
  }, L = (i) => Array.isArray(e.value) && u.value.enabled && e.value[0] && $.value ? i ? _e($.value, e.value[0]) : Pe($.value, e.value[0]) : !0, N = (i, k) => {
    const v = () => e.value ? k ? e.value[0] || null : e.value[1] : null, o = e.value && Array.isArray(e.value) ? v() : null;
    return we(z(i.value), o);
  }, M = (i) => {
    const k = Array.isArray(e.value) ? e.value[0] : null;
    return i ? !Pe($.value ?? null, k) : !0;
  }, W = (i, k = !0) => (u.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !i.current ? !1 : we(z(i.value), e.value[k ? 0 : 1]) : u.value.enabled ? N(i, k) && M(k) || we(i.value, Array.isArray(e.value) ? e.value[0] : null) && L(k) : !1, C = (i, k, v) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? i ? !1 : v ? _e(e.value[0], k.value) : Pe(e.value[0], k.value) : !1, E = (i) => !e.value || t.hideOffsetDates && !i.current ? !1 : u.value.enabled ? t.modelAuto && Array.isArray(e.value) ? we(i.value, e.value[0] ? e.value[0] : h.value) : !1 : n.value.enabled && Array.isArray(e.value) ? e.value.some((k) => we(k, i.value)) : we(i.value, e.value ? e.value : h.value), I = (i) => {
    if (u.value.autoRange || t.weekPicker) {
      if ($.value) {
        if (t.hideOffsetDates && !i.current)
          return !1;
        const k = Dt($.value, +u.value.autoRange), v = st(z($.value), t.weekStart);
        return t.weekPicker ? we(v[1], z(i.value)) : we(k, z(i.value));
      }
      return !1;
    }
    return !1;
  }, R = (i) => {
    if (u.value.autoRange || t.weekPicker) {
      if ($.value) {
        const k = Dt($.value, +u.value.autoRange);
        if (t.hideOffsetDates && !i.current)
          return !1;
        const v = st(z($.value), t.weekStart);
        return t.weekPicker ? _e(i.value, v[0]) && Pe(i.value, v[1]) : _e(i.value, $.value) && Pe(i.value, k);
      }
      return !1;
    }
    return !1;
  }, F = (i) => {
    if (u.value.autoRange || t.weekPicker) {
      if ($.value) {
        if (t.hideOffsetDates && !i.current)
          return !1;
        const k = st(z($.value), t.weekStart);
        return t.weekPicker ? we(k[0], i.value) : we($.value, i.value);
      }
      return !1;
    }
    return !1;
  }, H = (i) => la(e.value, $.value, i.value), q = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, A = () => t.modelAuto ? vn(t.internalModelValue) : !0, se = (i) => {
    if (t.weekPicker)
      return !1;
    const k = u.value.enabled ? !W(i) && !W(i, !1) : !0;
    return !P(i.value) && !E(i) && !(!i.current && t.hideOffsetDates) && k;
  }, le = (i) => u.value.enabled ? t.modelAuto ? q() && E(i) : !1 : E(i), te = (i) => a.value ? rl(i.value, r.value.highlight) : !1, _ = (i) => {
    const k = P(i.value);
    return k && (typeof a.value == "function" ? !a.value(i.value, k) : !a.value.options.highlightDisabled);
  }, U = (i) => {
    var k;
    return typeof a.value == "function" ? a.value(i.value) : (k = a.value.weekdays) == null ? void 0 : k.includes(i.value.getDay());
  }, ee = (i) => (u.value.enabled || t.weekPicker) && (!(l.value.count > 0) || i.current) && A() && !(!i.current && t.hideOffsetDates) && !E(i) ? H(i) : !1, V = (i) => {
    const { isRangeStart: k, isRangeEnd: v } = Z(i), o = u.value.enabled ? k || v : !1;
    return {
      dp__cell_offset: !i.current,
      dp__pointer: !t.disabled && !(!i.current && t.hideOffsetDates) && !P(i.value),
      dp__cell_disabled: P(i.value),
      dp__cell_highlight: !_(i) && (te(i) || U(i)) && !le(i) && !o && !F(i) && !(ee(i) && t.weekPicker) && !v,
      dp__cell_highlight_active: !_(i) && (te(i) || U(i)) && le(i),
      dp__today: !t.noToday && we(i.value, h.value) && i.current,
      "dp--past": Pe(i.value, h.value),
      "dp--future": _e(i.value, h.value)
    };
  }, c = (i) => ({
    dp__active_date: le(i),
    dp__date_hover: se(i)
  }), b = (i) => {
    if (e.value && !Array.isArray(e.value)) {
      const k = st(e.value, t.weekStart);
      return {
        ...p(i),
        dp__range_start: we(k[0], i.value),
        dp__range_end: we(k[1], i.value),
        dp__range_between_week: _e(i.value, k[0]) && Pe(i.value, k[1])
      };
    }
    return {
      ...p(i)
    };
  }, g = (i) => {
    if (e.value && Array.isArray(e.value)) {
      const k = st(e.value[0], t.weekStart), v = e.value[1] ? st(e.value[1], t.weekStart) : [];
      return {
        ...p(i),
        dp__range_start: we(k[0], i.value) || we(v[0], i.value),
        dp__range_end: we(k[1], i.value) || we(v[1], i.value),
        dp__range_between_week: _e(i.value, k[0]) && Pe(i.value, k[1]) || _e(i.value, v[0]) && Pe(i.value, v[1]),
        dp__range_between: _e(i.value, k[1]) && Pe(i.value, v[0])
      };
    }
    return {
      ...p(i)
    };
  }, Z = (i) => {
    const k = l.value.count > 0 ? i.current && W(i) && A() : W(i) && A(), v = l.value.count > 0 ? i.current && W(i, !1) && A() : W(i, !1) && A();
    return { isRangeStart: k, isRangeEnd: v };
  }, O = (i) => {
    const { isRangeStart: k, isRangeEnd: v } = Z(i);
    return {
      dp__range_start: k,
      dp__range_end: v,
      dp__range_between: ee(i),
      dp__date_hover: se(i),
      dp__date_hover_start: C(se(i), i, !0),
      dp__date_hover_end: C(se(i), i, !1)
    };
  }, p = (i) => ({
    ...O(i),
    dp__cell_auto_range: R(i),
    dp__cell_auto_range_start: F(i),
    dp__cell_auto_range_end: I(i)
  }), j = (i) => u.value.enabled ? u.value.autoRange ? p(i) : t.modelAuto ? { ...c(i), ...O(i) } : t.weekPicker ? g(i) : O(i) : t.weekPicker ? b(i) : c(i);
  return {
    setHoverDate: S,
    clearHoverDate: D,
    getDayClassData: (i) => t.hideOffsetDates && !i.current ? {} : {
      ...V(i),
      ...j(i),
      [t.dayClass ? t.dayClass(i.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, yt = (e) => {
  const { defaultedFilters: t, defaultedRange: l, propDates: n, defaultedMultiDates: a } = Re(e), f = (_) => n.value.disabledDates ? typeof n.value.disabledDates == "function" ? n.value.disabledDates(z(_)) : !!ta(_, n.value.disabledDates) : !1, r = (_) => {
    const U = n.value.maxDate ? _e(_, n.value.maxDate) : !1, ee = n.value.minDate ? Pe(_, n.value.minDate) : !1, V = f(_), b = t.value.months.map((j) => +j).includes(be(_)), g = e.disabledWeekDays.length ? e.disabledWeekDays.some((j) => +j === Vn(_)) : !1, Z = S(_), O = ge(_), p = O < +e.yearRange[0] || O > +e.yearRange[1];
    return !(U || ee || V || b || p || g || Z);
  }, u = (_, U) => Pe(...ft(n.value.minDate, _, U)) || we(...ft(n.value.minDate, _, U)), P = (_, U) => _e(...ft(n.value.maxDate, _, U)) || we(...ft(n.value.maxDate, _, U)), $ = (_, U, ee) => {
    let V = !1;
    return n.value.maxDate && ee && P(_, U) && (V = !0), n.value.minDate && !ee && u(_, U) && (V = !0), V;
  }, h = (_, U, ee, V) => {
    let c = !1;
    return V ? n.value.minDate && n.value.maxDate ? c = $(_, U, ee) : (n.value.minDate && u(_, U) || n.value.maxDate && P(_, U)) && (c = !0) : c = !0, c;
  }, S = (_) => Array.isArray(n.value.allowedDates) && !n.value.allowedDates.length ? !0 : n.value.allowedDates ? !ta(_, n.value.allowedDates) : !1, D = (_) => !r(_), L = (_) => l.value.noDisabledRange ? !on({ start: _[0], end: _[1] }).some((ee) => D(ee)) : !0, N = (_) => {
    if (_) {
      const U = ge(_);
      return U >= +e.yearRange[0] && U <= e.yearRange[1];
    }
    return !0;
  }, M = (_, U) => !!(Array.isArray(_) && _[U] && (l.value.maxRange || l.value.minRange) && N(_[U])), W = (_, U, ee = 0) => {
    if (M(U, ee) && N(_)) {
      const V = zn(_, U[ee]), c = hn(U[ee], _), b = c.length === 1 ? 0 : c.filter((Z) => D(Z)).length, g = Math.abs(V) - (l.value.minMaxRawRange ? 0 : b);
      if (l.value.minRange && l.value.maxRange)
        return g >= +l.value.minRange && g <= +l.value.maxRange;
      if (l.value.minRange)
        return g >= +l.value.minRange;
      if (l.value.maxRange)
        return g <= +l.value.maxRange;
    }
    return !0;
  }, C = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, E = (_) => Array.isArray(_) ? [_[0] ? ka(_[0]) : null, _[1] ? ka(_[1]) : null] : ka(_), I = (_, U, ee) => _.find(
    (V) => +V.hours === Ze(U) && V.minutes === "*" ? !0 : +V.minutes === rt(U) && +V.hours === Ze(U)
  ) && ee, R = (_, U, ee) => {
    const [V, c] = _, [b, g] = U;
    return !I(V, b, ee) && !I(c, g, ee) && ee;
  }, F = (_, U) => {
    const ee = Array.isArray(U) ? U : [U];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? R(e.disabledTimes, ee, _) : !ee.some((V) => I(e.disabledTimes, V, _)) : _;
  }, H = (_, U) => {
    const ee = Array.isArray(U) ? [$t(U[0]), U[1] ? $t(U[1]) : void 0] : $t(U), V = !e.disabledTimes(ee);
    return _ && V;
  }, q = (_, U) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? F(U, _) : H(U, _) : U, A = (_) => {
    let U = !0;
    if (!_ || C())
      return !0;
    const ee = !n.value.minDate && !n.value.maxDate ? E(_) : _;
    return (e.maxTime || n.value.maxDate) && (U = xa(
      e.maxTime,
      n.value.maxDate,
      "max",
      Oe(ee),
      U
    )), (e.minTime || n.value.minDate) && (U = xa(
      e.minTime,
      n.value.minDate,
      "min",
      Oe(ee),
      U
    )), q(_, U);
  }, se = (_) => {
    if (!e.monthPicker)
      return !0;
    let U = !0;
    const ee = z(Xe(_));
    if (n.value.minDate && n.value.maxDate) {
      const V = z(Xe(n.value.minDate)), c = z(Xe(n.value.maxDate));
      return _e(ee, V) && Pe(ee, c) || we(ee, V) || we(ee, c);
    }
    if (n.value.minDate) {
      const V = z(Xe(n.value.minDate));
      U = _e(ee, V) || we(ee, V);
    }
    if (n.value.maxDate) {
      const V = z(Xe(n.value.maxDate));
      U = Pe(ee, V) || we(ee, V);
    }
    return U;
  }, le = G(() => (_) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : A(_)), te = G(() => (_) => e.monthPicker ? Array.isArray(_) && (l.value.enabled || a.value.enabled) ? !_.filter((ee) => !se(ee)).length : se(_) : !0);
  return {
    isDisabled: D,
    validateDate: r,
    validateMonthYearInRange: h,
    isDateRangeAllowed: L,
    checkMinMaxRange: W,
    isValidTime: A,
    isTimeValid: le,
    isMonthValid: te
  };
}, ra = () => {
  const e = G(() => (n, a) => n == null ? void 0 : n.includes(a)), t = G(() => (n, a) => n.count ? n.solo ? !0 : a === 0 : !0), l = G(() => (n, a) => n.count ? n.solo ? !0 : a === n.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: l };
}, El = (e, t, l) => {
  const n = x(0), a = zt({
    [At.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [At.calendar]: !1,
    [At.header]: !1
  }), f = G(() => e.monthPicker), r = (S) => {
    var D;
    if ((D = e.flow) != null && D.length) {
      if (!S && f.value)
        return h();
      a[S] = !0, Object.keys(a).filter((L) => !a[L]).length || h();
    }
  }, u = () => {
    var S;
    (S = e.flow) != null && S.length && n.value !== -1 && (n.value += 1, t("flow-step", n.value), h());
  }, P = () => {
    n.value = -1;
  }, $ = (S, D, ...L) => {
    var N, M;
    e.flow[n.value] === S && l.value && ((M = (N = l.value)[D]) == null || M.call(N, ...L));
  }, h = () => {
    $(at.month, "toggleMonthPicker", !0), $(at.year, "toggleYearPicker", !0), $(at.calendar, "toggleTimePicker", !1, !0), $(at.time, "toggleTimePicker", !0, !0);
    const S = e.flow[n.value];
    (S === at.hours || S === at.minutes || S === at.seconds) && $(S, "toggleTimePicker", !0, !0, S);
  };
  return { childMount: r, updateFlowStep: u, resetFlow: P, flowStep: n };
}, oa = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [Boolean, String, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: [Object, Boolean], default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: !0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 }
}, et = {
  ...oa,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, Fl = {
  key: 1,
  class: "dp__input_wrap"
}, Ll = ["name", "inputmode", "placeholder", "disabled", "readonly", "required", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], Wl = {
  key: 1,
  class: "dp__clear_icon"
}, Hl = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...oa
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = e, {
      defaultedTextInput: f,
      defaultedAriaLabels: r,
      defaultedInline: u,
      defaultedConfig: P,
      defaultedRange: $,
      defaultedMultiDates: h,
      getDefaultPattern: S,
      getDefaultStartTime: D
    } = Re(a), { checkMinMaxRange: L } = yt(a), N = x(), M = x(null), W = x(!1), C = x(!1), E = G(
      () => ({
        dp__pointer: !a.disabled && !a.readonly && !f.value.enabled,
        dp__disabled: a.disabled,
        dp__input_readonly: !f.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !a.hideInputIcon,
        dp__input_valid: !!a.state,
        dp__input_invalid: a.state === !1,
        dp__input_focus: W.value || a.isMenuOpen,
        dp__input_reg: !f.value.enabled,
        [a.inputClassName]: !!a.inputClassName
      })
    ), I = () => {
      n("set-input-date", null), a.clearable && a.autoApply && (n("set-empty-date"), N.value = null);
    }, R = (g) => {
      const Z = D();
      return ol(
        g,
        f.value.format ?? S(),
        Z ?? bn({}, a.enableSeconds),
        a.inputValue,
        C.value,
        a.formatLocale
      );
    }, F = (g) => {
      const { rangeSeparator: Z } = f.value, [O, p] = g.split(`${Z}`);
      if (O) {
        const j = R(O.trim()), ae = p ? R(p.trim()) : null, i = j && ae ? [j, ae] : [j];
        L(ae, i, 0) && (N.value = j ? i : null);
      }
    }, H = () => {
      C.value = !0;
    }, q = (g) => {
      if ($.value.enabled)
        F(g);
      else if (h.value.enabled) {
        const Z = g.split(";");
        N.value = Z.map((O) => R(O.trim())).filter((O) => O);
      } else
        N.value = R(g);
    }, A = (g) => {
      var O;
      const Z = typeof g == "string" ? g : (O = g.target) == null ? void 0 : O.value;
      Z !== "" ? (f.value.openMenu && !a.isMenuOpen && n("open"), q(Z), n("set-input-date", N.value)) : I(), C.value = !1, n("update:input-value", Z);
    }, se = (g) => {
      f.value.enabled ? (q(g.target.value), f.value.enterSubmit && Ra(N.value) && a.inputValue !== "" ? (n("set-input-date", N.value, !0), N.value = null) : f.value.enterSubmit && a.inputValue === "" && (N.value = null, n("clear"))) : _(g);
    }, le = (g) => {
      f.value.enabled && f.value.tabSubmit && q(g.target.value), f.value.tabSubmit && Ra(N.value) && a.inputValue !== "" ? (n("set-input-date", N.value, !0, !0), N.value = null) : f.value.tabSubmit && a.inputValue === "" && (N.value = null, n("clear", !0));
    }, te = () => {
      W.value = !0, n("focus"), xe().then(() => {
        var g;
        f.value.enabled && f.value.selectOnFocus && ((g = M.value) == null || g.select());
      });
    }, _ = (g) => {
      g.preventDefault(), vt(g, P.value, !0), f.value.enabled && f.value.openMenu && !u.value.input && !a.isMenuOpen ? n("open") : f.value.enabled || n("toggle");
    }, U = () => {
      n("real-blur"), W.value = !1, (!a.isMenuOpen || u.value.enabled && u.value.input) && n("blur"), a.autoApply && f.value.enabled && N.value && !a.isMenuOpen && (n("set-input-date", N.value), n("select-date"), N.value = null);
    }, ee = (g) => {
      vt(g, P.value, !0), n("clear");
    }, V = (g) => {
      if (!f.value.enabled) {
        if (g.code === "Tab")
          return;
        g.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var g;
        (g = M.value) == null || g.focus({ preventScroll: !0 });
      },
      setParsedDate: (g) => {
        N.value = g;
      }
    }), (g, Z) => {
      var O;
      return T(), Q("div", { onClick: _ }, [
        g.$slots.trigger && !g.$slots["dp-input"] && !d(u).enabled ? ie(g.$slots, "trigger", { key: 0 }) : J("", !0),
        !g.$slots.trigger && (!d(u).enabled || d(u).input) ? (T(), Q("div", Fl, [
          g.$slots["dp-input"] && !g.$slots.trigger && (!d(u).enabled || d(u).enabled && d(u).input) ? ie(g.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: A,
            onEnter: se,
            onTab: le,
            onClear: ee,
            onBlur: U,
            onKeypress: V,
            onPaste: H,
            openMenu: () => g.$emit("open"),
            closeMenu: () => g.$emit("close"),
            toggleMenu: () => g.$emit("toggle")
          }) : J("", !0),
          pe("button", {
            ref_key: "inputRef",
            ref: M,
            name: g.name,
            class: Me(E.value),
            inputmode: d(f).enabled ? "text" : "none",
            placeholder: g.placeholder,
            disabled: g.disabled,
            readonly: g.readonly,
            required: g.required,
            autocomplete: g.autocomplete,
            "aria-label": (O = d(r)) == null ? void 0 : O.input,
            "aria-disabled": g.disabled || void 0,
            "aria-invalid": g.state === !1 ? !0 : void 0,
            onInput: A,
            onKeydown: [
              me(se, ["enter"]),
              me(le, ["tab"]),
              V
            ],
            onBlur: U,
            onFocus: te,
            onKeypress: V,
            onPaste: H,
            style: { height: "48px", backgroundColor: "red" }
          }, " Schedule For ", 42, Ll),
          g.$slots["clear-icon"] && e.inputValue && g.clearable && !g.disabled && !g.readonly ? (T(), Q("span", Wl, [
            ie(g.$slots, "clear-icon", { clear: ee })
          ])) : J("", !0)
        ])) : J("", !0)
      ]);
    };
  }
}), Vl = ["title"], zl = ["disabled"], Ul = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...et
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const l = t, n = e, {
      defaultedActionRow: a,
      defaultedPreviewFormat: f,
      defaultedMultiCalendars: r,
      defaultedTextInput: u,
      defaultedInline: P,
      defaultedRange: $,
      defaultedMultiDates: h,
      getDefaultPattern: S
    } = Re(n), { isTimeValid: D, isMonthValid: L } = yt(n), { buildMatrix: N } = gt(), M = x(null), W = x(null), C = x(!1), E = x({}), I = x(null), R = x(null);
    Ue(() => {
      n.arrowNavigation && N([Ne(M), Ne(W)], "actionRow"), F(), window.addEventListener("resize", F);
    }), aa(() => {
      window.removeEventListener("resize", F);
    });
    const F = () => {
      C.value = !1, setTimeout(() => {
        var b, g;
        const V = (b = I.value) == null ? void 0 : b.getBoundingClientRect(), c = (g = R.value) == null ? void 0 : g.getBoundingClientRect();
        V && c && (E.value.maxWidth = `${c.width - V.width - 20}px`), C.value = !0;
      }, 0);
    }, H = G(() => $.value.enabled && !$.value.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), q = G(
      () => !D.value(n.internalModelValue) || !L.value(n.internalModelValue) || !H.value
    ), A = () => {
      const V = f.value;
      return n.timePicker || n.monthPicker, V(Oe(n.internalModelValue));
    }, se = () => {
      const V = n.internalModelValue;
      return r.value.count > 0 ? `${le(V[0])} - ${le(V[1])}` : [le(V[0]), le(V[1])];
    }, le = (V) => wn(
      V,
      f.value,
      n.formatLocale,
      u.value.rangeSeparator,
      n.modelAuto,
      S()
    ), te = G(() => !n.internalModelValue || !n.menuMount ? "" : typeof f.value == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? se() : h.value.enabled ? n.internalModelValue.map((V) => `${le(V)}`) : n.modelAuto ? `${le(n.internalModelValue[0])}` : `${le(n.internalModelValue[0])} -` : le(n.internalModelValue) : A()), _ = () => h.value.enabled ? "; " : " - ", U = G(
      () => Array.isArray(te.value) ? te.value.join(_()) : te.value
    ), ee = () => {
      D.value(n.internalModelValue) && L.value(n.internalModelValue) && H.value ? l("select-date") : l("invalid-select");
    };
    return (V, c) => (T(), Q("div", {
      ref_key: "actionRowRef",
      ref: R,
      class: "dp__action_row"
    }, [
      V.$slots["action-row"] ? ie(V.$slots, "action-row", Be(Ie({ key: 0 }, {
        internalModelValue: V.internalModelValue,
        disabled: q.value,
        selectDate: () => V.$emit("select-date"),
        closePicker: () => V.$emit("close-picker")
      }))) : (T(), Q(ke, { key: 1 }, [
        d(a).showPreview ? (T(), Q("div", {
          key: 0,
          class: "dp__selection_preview",
          title: U.value,
          style: Je(E.value)
        }, [
          V.$slots["action-preview"] && C.value ? ie(V.$slots, "action-preview", {
            key: 0,
            value: V.internalModelValue
          }) : J("", !0),
          !V.$slots["action-preview"] && C.value ? (T(), Q(ke, { key: 1 }, [
            dt(We(U.value), 1)
          ], 64)) : J("", !0)
        ], 12, Vl)) : J("", !0),
        pe("div", {
          ref_key: "actionBtnContainer",
          ref: I,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          V.$slots["action-buttons"] ? ie(V.$slots, "action-buttons", {
            key: 0,
            value: V.internalModelValue
          }) : J("", !0),
          V.$slots["action-buttons"] ? J("", !0) : (T(), Q(ke, { key: 1 }, [
            !d(P).enabled && d(a).showCancel ? (T(), Q("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: M,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: c[0] || (c[0] = (b) => V.$emit("close-picker")),
              onKeydown: [
                c[1] || (c[1] = me((b) => V.$emit("close-picker"), ["enter"])),
                c[2] || (c[2] = me((b) => V.$emit("close-picker"), ["space"]))
              ]
            }, We(V.cancelText), 545)) : J("", !0),
            d(a).showNow ? (T(), Q("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: c[3] || (c[3] = (b) => V.$emit("select-now")),
              onKeydown: [
                c[4] || (c[4] = me((b) => V.$emit("select-now"), ["enter"])),
                c[5] || (c[5] = me((b) => V.$emit("select-now"), ["space"]))
              ]
            }, We(V.nowButtonLabel), 33)) : J("", !0),
            d(a).showSelect ? (T(), Q("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: W,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: q.value,
              onKeydown: [
                me(ee, ["enter"]),
                me(ee, ["space"])
              ],
              onClick: ee
            }, We(V.selectText), 41, zl)) : J("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), Kl = ["onKeydown"], jl = { class: "dp__selection_grid_header" }, Gl = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Ql = ["aria-label"], Gt = /* @__PURE__ */ Ee({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: l }) {
    const { setSelectionGrid: n, buildMultiLevelMatrix: a, setMonthPicker: f } = gt(), r = l, u = e, { defaultedAriaLabels: P, defaultedTextInput: $, defaultedConfig: h } = Re(
      u
    ), { hideNavigationButtons: S } = ra(), D = x(!1), L = x(null), N = x(null), M = x([]), W = x(), C = x(null), E = x(0), I = x(null);
    Yn(() => {
      L.value = null;
    }), Ue(() => {
      xe().then(() => te()), u.noOverlayFocus || F(), R(!0);
    }), aa(() => R(!1));
    const R = (O) => {
      var p;
      u.arrowNavigation && ((p = u.headerRefs) != null && p.length ? f(O) : n(O));
    }, F = () => {
      var p;
      const O = Ne(N);
      O && ($.value.enabled || (L.value ? (p = L.value) == null || p.focus({ preventScroll: !0 }) : O.focus({ preventScroll: !0 })), D.value = O.clientHeight < O.scrollHeight);
    }, H = G(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !u.useRelative,
        "dp--overlay-relative": u.useRelative
      })
    ), q = G(
      () => u.useRelative ? { height: `${u.height}px`, width: "260px" } : void 0
    ), A = G(() => ({
      dp__overlay_col: !0
    })), se = G(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: D.value,
        dp__button_bottom: u.isLast
      })
    ), le = G(() => {
      var O, p;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((O = u.items) == null ? void 0 : O.length) <= 6,
        dp__container_block: ((p = u.items) == null ? void 0 : p.length) > 6
      };
    });
    pt(
      () => u.items,
      () => te(!1),
      { deep: !0 }
    );
    const te = (O = !0) => {
      xe().then(() => {
        const p = Ne(L), j = Ne(N), ae = Ne(C), i = Ne(I), k = ae ? ae.getBoundingClientRect().height : 0;
        j && (j.getBoundingClientRect().height ? E.value = j.getBoundingClientRect().height - k : E.value = h.value.modeHeight - k), p && i && O && (i.scrollTop = p.offsetTop - i.offsetTop - (E.value / 2 - p.getBoundingClientRect().height) - k);
      });
    }, _ = (O) => {
      O.disabled || r("selected", O.value);
    }, U = () => {
      r("toggle"), r("reset-flow");
    }, ee = () => {
      u.escClose && U();
    }, V = (O, p, j, ae) => {
      O && ((p.active || p.value === u.focusValue) && (L.value = O), u.arrowNavigation && (Array.isArray(M.value[j]) ? M.value[j][ae] = O : M.value[j] = [O], c()));
    }, c = () => {
      var p, j;
      const O = (p = u.headerRefs) != null && p.length ? [u.headerRefs].concat(M.value) : M.value.concat([u.skipButtonRef ? [] : [C.value]]);
      a(Oe(O), (j = u.headerRefs) != null && j.length ? "monthPicker" : "selectionGrid");
    }, b = (O) => {
      u.arrowNavigation || vt(O, h.value, !0);
    }, g = (O) => {
      W.value = O, r("hover-value", O);
    }, Z = () => {
      if (U(), !u.isLast) {
        const O = ll(u.menuWrapRef ?? null, "action-row");
        if (O) {
          const p = mn(O);
          p == null || p.focus();
        }
      }
    };
    return t({ focusGrid: F }), (O, p) => {
      var j;
      return T(), Q("div", {
        ref_key: "gridWrapRef",
        ref: N,
        class: Me(H.value),
        style: Je(q.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          me($e(ee, ["prevent"]), ["esc"]),
          p[0] || (p[0] = me($e((ae) => b(ae), ["prevent"]), ["left"])),
          p[1] || (p[1] = me($e((ae) => b(ae), ["prevent"]), ["up"])),
          p[2] || (p[2] = me($e((ae) => b(ae), ["prevent"]), ["down"])),
          p[3] || (p[3] = me($e((ae) => b(ae), ["prevent"]), ["right"]))
        ]
      }, [
        pe("div", {
          ref_key: "containerRef",
          ref: I,
          class: Me(le.value),
          role: "grid",
          style: Je({ height: `${E.value}px` })
        }, [
          pe("div", jl, [
            ie(O.$slots, "header")
          ]),
          O.$slots.overlay ? ie(O.$slots, "overlay", { key: 0 }) : (T(!0), Q(ke, { key: 1 }, Se(O.items, (ae, i) => (T(), Q("div", {
            key: i,
            class: Me(["dp__overlay_row", { dp__flex_row: O.items.length >= 3 }]),
            role: "row"
          }, [
            (T(!0), Q(ke, null, Se(ae, (k, v) => (T(), Q("div", {
              key: k.value,
              ref_for: !0,
              ref: (o) => V(o, k, i, v),
              role: "gridcell",
              class: Me(A.value),
              "aria-selected": k.active || void 0,
              "aria-disabled": k.disabled || void 0,
              tabindex: "0",
              onClick: (o) => _(k),
              onKeydown: [
                me($e((o) => _(k), ["prevent"]), ["enter"]),
                me($e((o) => _(k), ["prevent"]), ["space"])
              ],
              onMouseover: (o) => g(k.value)
            }, [
              pe("div", {
                class: Me(k.className)
              }, [
                O.$slots.item ? ie(O.$slots, "item", {
                  key: 0,
                  item: k
                }) : J("", !0),
                O.$slots.item ? J("", !0) : (T(), Q(ke, { key: 1 }, [
                  dt(We(k.text), 1)
                ], 64))
              ], 2)
            ], 42, Gl))), 128))
          ], 2))), 128))
        ], 6),
        O.$slots["button-icon"] ? Zt((T(), Q("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: C,
          type: "button",
          "aria-label": (j = d(P)) == null ? void 0 : j.toggleOverlay,
          class: Me(se.value),
          tabindex: "0",
          onClick: U,
          onKeydown: [
            me(U, ["enter"]),
            me(Z, ["tab"])
          ]
        }, [
          ie(O.$slots, "button-icon")
        ], 42, Ql)), [
          [xt, !d(S)(O.hideNavigation, O.type)]
        ]) : J("", !0)
      ], 46, Kl);
    };
  }
}), sa = /* @__PURE__ */ Ee({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, l = G(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), n = G(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (a, f) => (T(), Q("div", {
      class: Me({
        dp__menu_inner: !a.stretch,
        "dp--menu--inner-stretched": a.stretch,
        dp__flex_display: a.multiCalendars > 0,
        "dp--flex-display-collapsed": a.collapse
      })
    }, [
      (T(!0), Q(ke, null, Se(l.value, (r, u) => (T(), Q("div", {
        key: r,
        class: Me(n.value)
      }, [
        ie(a.$slots, "default", {
          instance: r,
          index: u
        })
      ], 2))), 128))
    ], 2));
  }
}), ql = ["aria-label", "aria-disabled"], Et = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const l = t, n = x(null);
    return Ue(() => l("set-ref", n)), (a, f) => (T(), Q("button", {
      ref_key: "elRef",
      ref: n,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": a.ariaLabel,
      "aria-disabled": a.disabled || void 0,
      onClick: f[0] || (f[0] = (r) => a.$emit("activate")),
      onKeydown: [
        f[1] || (f[1] = me($e((r) => a.$emit("activate"), ["prevent"]), ["enter"])),
        f[2] || (f[2] = me($e((r) => a.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      pe("span", {
        class: Me(["dp__inner_nav", { dp__inner_nav_disabled: a.disabled }])
      }, [
        ie(a.$slots, "default")
      ], 2)
    ], 40, ql));
  }
}), Xl = { class: "dp--year-mode-picker" }, Jl = ["aria-label"], An = /* @__PURE__ */ Ee({
  __name: "YearModePicker",
  props: {
    ...et,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const l = t, n = e, { showRightIcon: a, showLeftIcon: f } = ra(), { defaultedConfig: r, defaultedMultiCalendars: u, defaultedAriaLabels: P, defaultedTransitions: $ } = Re(n), { showTransition: h, transitionName: S } = Kt($), D = (M = !1, W) => {
      l("toggle-year-picker", { flow: M, show: W });
    }, L = (M) => {
      l("year-select", M);
    }, N = (M = !1) => {
      l("handle-year", M);
    };
    return (M, W) => {
      var C, E, I;
      return T(), Q("div", Xl, [
        d(f)(d(u), e.instance) ? (T(), De(Et, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (C = d(P)) == null ? void 0 : C.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: W[0] || (W[0] = (R) => N(!1))
        }, {
          default: ye(() => [
            M.$slots["arrow-left"] ? ie(M.$slots, "arrow-left", { key: 0 }) : J("", !0),
            M.$slots["arrow-left"] ? J("", !0) : (T(), De(d(Oa), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : J("", !0),
        pe("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (E = d(P)) == null ? void 0 : E.openYearsOverlay,
          onClick: W[1] || (W[1] = () => D(!1)),
          onKeydown: W[2] || (W[2] = me(() => D(!1), ["enter"]))
        }, [
          M.$slots.year ? ie(M.$slots, "year", {
            key: 0,
            year: e.year
          }) : J("", !0),
          M.$slots.year ? J("", !0) : (T(), Q(ke, { key: 1 }, [
            dt(We(e.year), 1)
          ], 64))
        ], 40, Jl),
        d(a)(d(u), e.instance) ? (T(), De(Et, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (I = d(P)) == null ? void 0 : I.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: W[3] || (W[3] = (R) => N(!0))
        }, {
          default: ye(() => [
            M.$slots["arrow-right"] ? ie(M.$slots, "arrow-right", { key: 0 }) : J("", !0),
            M.$slots["arrow-right"] ? J("", !0) : (T(), De(d(Ba), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : J("", !0),
        Qe(Bt, {
          name: d(S)(e.showYearPicker),
          css: d(h)
        }, {
          default: ye(() => [
            e.showYearPicker ? (T(), De(Gt, {
              key: 0,
              items: e.items,
              "text-input": M.textInput,
              "esc-close": M.escClose,
              config: M.config,
              "is-last": M.autoApply && !d(r).keepActionRow,
              "hide-navigation": M.hideNavigation,
              "aria-labels": M.ariaLabels,
              type: "year",
              onToggle: D,
              onSelected: W[4] || (W[4] = (R) => L(R))
            }, ze({
              "button-icon": ye(() => [
                M.$slots["calendar-icon"] ? ie(M.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                M.$slots["calendar-icon"] ? J("", !0) : (T(), De(d(Ut), { key: 1 }))
              ]),
              _: 2
            }, [
              M.$slots["year-overlay-value"] ? {
                name: "item",
                fn: ye(({ item: R }) => [
                  ie(M.$slots, "year-overlay-value", {
                    text: R.text,
                    value: R.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : J("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Ha = (e, t, l) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((n) => we(e, n))) {
      const n = t.value.filter((a) => !we(a, e));
      t.value = n.length ? n : null;
    } else
      (l && +l > t.value.length || !l) && t.value.push(e);
  else
    t.value = [e];
}, Va = (e, t, l) => {
  let n = e.value ? e.value.slice() : [];
  return n.length === 2 && n[1] !== null && (n = []), n.length ? Pe(t, n[0]) ? (n.unshift(t), l("range-start", n[0]), l("range-start", n[1])) : (n[1] = t, l("range-end", t)) : (n = [t], l("range-start", t)), n;
}, ua = (e, t, l, n) => {
  e && (e[0] && e[1] && l && t("auto-apply"), e[0] && !e[1] && n && l && t("auto-apply"));
}, Tn = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => it(z(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = it(z(e.value), e.timezone));
}, Sn = (e, t, l, n) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && n.value.partialRange) ? n.value.fixedStart && (_e(e, t.value[0]) || we(e, t.value[0])) ? [t.value[0], e] : n.value.fixedEnd && (Pe(e, t.value[1]) || we(e, t.value[1])) ? [e, t.value[1]] : (l("invalid-fixed-range", e), t.value) : [], Rn = ({
  multiCalendars: e,
  highlight: t,
  propDates: l,
  calendars: n,
  modelValue: a,
  props: f,
  filters: r,
  year: u,
  month: P,
  emit: $
}) => {
  const h = G(() => Ea(f.yearRange, f.locale, f.reverseYears)), S = x([!1]), D = G(() => (H, q) => {
    const A = Ae(Xe(/* @__PURE__ */ new Date()), {
      month: P.value(H),
      year: u.value(H)
    });
    return kn(
      A,
      l.value.maxDate,
      l.value.minDate,
      f.preventMinMaxNavigation,
      q
    );
  }), L = () => {
    for (let H = 0; H < e.value.count; H++)
      if (H === 0)
        n.value[H] = n.value[0];
      else {
        const q = Ae(z(), n.value[H - 1]);
        n.value[H] = { month: be(q), year: ge(un(q, 1)) };
      }
  }, N = (H) => {
    if (!H)
      return L();
    const q = Ae(z(), n.value[H]);
    return n.value[0].year = ge(dn(q, e.value.count - 1)), L();
  }, M = (H) => f.focusStartDate ? H[0] : H[1] ? H[1] : H[0], W = () => {
    if (a.value) {
      const H = Array.isArray(a.value) ? M(a.value) : a.value;
      n.value[0] = { month: be(H), year: ge(H) };
    }
  };
  Ue(() => {
    W(), e.value.count && L();
  });
  const C = (H, q) => {
    n.value[q].year = H, e.value.count && !e.value.solo && N(q);
  }, E = G(() => (H) => _t(h.value, (q) => {
    var te;
    const A = u.value(H) === q.value, se = Vt(
      q.value,
      Ot(l.value.minDate),
      Ot(l.value.maxDate)
    ) || ((te = r.value.years) == null ? void 0 : te.includes(u.value(H))), le = Wa(t.value, q.value);
    return { active: A, disabled: se, highlighted: le };
  })), I = (H, q) => {
    C(H, q), F(q);
  }, R = (H, q = !1) => {
    if (!D.value(H, q)) {
      const A = q ? u.value(H) + 1 : u.value(H) - 1;
      C(A, H);
    }
  }, F = (H, q = !1, A) => {
    q || $("reset-flow"), A !== void 0 ? S.value[H] = A : S.value[H] = !S.value[H], S.value || $("overlay-closed");
  };
  return {
    isDisabled: D,
    groupedYears: E,
    showYearPicker: S,
    selectYear: C,
    toggleYearPicker: F,
    handleYearSelect: I,
    handleYear: R
  };
}, Zl = (e, t) => {
  const {
    defaultedMultiCalendars: l,
    defaultedAriaLabels: n,
    defaultedTransitions: a,
    defaultedConfig: f,
    defaultedRange: r,
    defaultedHighlight: u,
    propDates: P,
    defaultedTz: $,
    defaultedFilters: h,
    defaultedMultiDates: S
  } = Re(e), { modelValue: D, year: L, month: N, calendars: M } = jt(e, t), W = G(() => fn(e.formatLocale, e.locale, e.monthNameFormat)), C = x(null), { checkMinMaxRange: E } = yt(e), {
    selectYear: I,
    groupedYears: R,
    showYearPicker: F,
    toggleYearPicker: H,
    handleYearSelect: q,
    handleYear: A,
    isDisabled: se
  } = Rn({
    modelValue: D,
    multiCalendars: l,
    highlight: u,
    calendars: M,
    year: L,
    propDates: P,
    month: N,
    filters: h,
    props: e,
    emit: t
  });
  Ue(() => {
    e.startDate && (D.value && e.focusStartDate || !D.value) && I(ge(z(e.startDate)), 0);
  });
  const le = (k) => k ? { month: be(k), year: ge(k) } : { month: null, year: null }, te = () => D.value ? Array.isArray(D.value) ? D.value.map((k) => le(k)) : le(D.value) : le(), _ = (k, v) => {
    const o = M.value[k], B = te();
    return Array.isArray(B) ? B.some((s) => s.year === (o == null ? void 0 : o.year) && s.month === v) : (o == null ? void 0 : o.year) === B.year && v === B.month;
  }, U = (k, v, o) => {
    var s, m;
    const B = te();
    return Array.isArray(B) ? L.value(v) === ((s = B[o]) == null ? void 0 : s.year) && k === ((m = B[o]) == null ? void 0 : m.month) : !1;
  }, ee = (k, v) => {
    if (r.value.enabled) {
      const o = te();
      if (Array.isArray(D.value) && Array.isArray(o)) {
        const B = U(k, v, 0) || U(k, v, 1), s = ut(Xe(z()), k, L.value(v));
        return la(D.value, C.value, s) && !B;
      }
      return !1;
    }
    return !1;
  }, V = G(() => (k) => _t(W.value, (v) => {
    var de;
    const o = _(k, v.value), B = Vt(
      v.value,
      gn(L.value(k), P.value.minDate),
      yn(L.value(k), P.value.maxDate)
    ) || fl(P.value.disabledDates, L.value(k)).includes(v.value) || ((de = h.value.months) == null ? void 0 : de.includes(v.value)), s = ee(v.value, k), m = Dn(u.value, v.value, L.value(k));
    return { active: o, disabled: B, isBetween: s, highlighted: m };
  })), c = (k, v) => ut(Xe(z()), k, L.value(v)), b = (k, v) => {
    const o = D.value ? D.value : Xe(/* @__PURE__ */ new Date());
    D.value = ut(o, k, L.value(v)), t("auto-apply"), t("update-flow-step");
  }, g = (k, v) => {
    const o = c(k, v);
    r.value.fixedEnd || r.value.fixedStart ? D.value = Sn(o, D, t, r) : D.value ? E(o, D.value) && (D.value = Va(D, c(k, v), t)) : D.value = [c(k, v)], xe().then(() => {
      ua(D.value, t, e.autoApply, e.modelAuto);
    });
  }, Z = (k, v) => {
    Ha(c(k, v), D, S.value.limit), t("auto-apply", !0);
  }, O = (k, v) => (M.value[v].month = k, j(v, M.value[v].year, k), S.value.enabled ? Z(k, v) : r.value.enabled ? g(k, v) : b(k, v)), p = (k, v) => {
    I(k, v), j(v, k, null);
  }, j = (k, v, o) => {
    let B = o;
    if (!B && B !== 0) {
      const s = te();
      B = Array.isArray(s) ? s[k].month : s.month;
    }
    t("update-month-year", { instance: k, year: v, month: B });
  };
  return {
    groupedMonths: V,
    groupedYears: R,
    year: L,
    isDisabled: se,
    defaultedMultiCalendars: l,
    defaultedAriaLabels: n,
    defaultedTransitions: a,
    defaultedConfig: f,
    showYearPicker: F,
    modelValue: D,
    presetDate: (k, v) => {
      Tn({
        value: k,
        modelValue: D,
        range: r.value.enabled,
        timezone: v ? void 0 : $.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (k, v) => {
      C.value = c(k, v);
    },
    selectMonth: O,
    selectYear: p,
    toggleYearPicker: H,
    handleYearSelect: q,
    handleYear: A,
    getModelMonthYear: te
  };
}, xl = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...et
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range"
  ],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = Tt(), f = Ke(a, "yearMode"), r = e;
    Ue(() => {
      r.shadow || n("mount", null);
    });
    const {
      groupedMonths: u,
      groupedYears: P,
      year: $,
      isDisabled: h,
      defaultedMultiCalendars: S,
      defaultedConfig: D,
      showYearPicker: L,
      modelValue: N,
      presetDate: M,
      setHoverDate: W,
      selectMonth: C,
      selectYear: E,
      toggleYearPicker: I,
      handleYearSelect: R,
      handleYear: F,
      getModelMonthYear: H
    } = Zl(r, n);
    return t({ getSidebarProps: () => ({
      modelValue: N,
      year: $,
      getModelMonthYear: H,
      selectMonth: C,
      selectYear: E,
      handleYear: F
    }), presetDate: M, toggleYearPicker: (A) => I(0, A) }), (A, se) => (T(), De(sa, {
      "multi-calendars": d(S).count,
      collapse: A.collapse,
      stretch: ""
    }, {
      default: ye(({ instance: le }) => [
        A.$slots["month-year"] ? ie(A.$slots, "month-year", Be(Ie({ key: 0 }, {
          year: d($),
          months: d(u)(le),
          years: d(P)(le),
          selectMonth: d(C),
          selectYear: d(E),
          instance: le
        }))) : (T(), De(Gt, {
          key: 1,
          items: d(u)(le),
          "arrow-navigation": A.arrowNavigation,
          "is-last": A.autoApply && !d(D).keepActionRow,
          "esc-close": A.escClose,
          height: d(D).modeHeight,
          config: A.config,
          "no-overlay-focus": !!(A.noOverlayFocus || A.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (te) => d(C)(te, le),
          onHoverValue: (te) => d(W)(te, le)
        }, {
          header: ye(() => [
            Qe(An, Ie(A.$props, {
              items: d(P)(le),
              instance: le,
              "show-year-picker": d(L)[le],
              year: d($)(le),
              "is-disabled": (te) => d(h)(le, te),
              onHandleYear: (te) => d(F)(le, te),
              onYearSelect: (te) => d(R)(te, le),
              onToggleYearPicker: (te) => d(I)(le, te == null ? void 0 : te.flow, te == null ? void 0 : te.show)
            }), ze({ _: 2 }, [
              Se(d(f), (te, _) => ({
                name: te,
                fn: ye((U) => [
                  ie(A.$slots, te, Be(Ve(U)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), er = (e, t) => {
  const { modelValue: l } = jt(e, t), n = x(null), { defaultedHighlight: a, defaultedMultiDates: f, defaultedFilters: r, defaultedRange: u, propDates: P } = Re(e), $ = x();
  Ue(() => {
    e.startDate && (l.value && e.focusStartDate || !l.value) && ($.value = ge(z(e.startDate)));
  });
  const h = (W) => Array.isArray(l.value) ? l.value.some((C) => ge(C) === W) : l.value ? ge(l.value) === W : !1, S = (W) => u.value.enabled && Array.isArray(l.value) ? la(l.value, n.value, L(W)) : !1, D = G(() => _t(Ea(e.yearRange, e.locale, e.reverseYears), (W) => {
    const C = h(W.value), E = Vt(
      W.value,
      Ot(P.value.minDate),
      Ot(P.value.maxDate)
    ) || r.value.years.includes(W.value), I = S(W.value) && !C, R = Wa(a.value, W.value);
    return { active: C, disabled: E, isBetween: I, highlighted: R };
  })), L = (W) => nt(Xe(/* @__PURE__ */ new Date()), W);
  return {
    groupedYears: D,
    modelValue: l,
    focusYear: $,
    setHoverValue: (W) => {
      n.value = nt(Xe(/* @__PURE__ */ new Date()), W);
    },
    selectYear: (W) => {
      var C;
      if (t("update-month-year", { instance: 0, year: W }), f.value.enabled)
        return l.value ? Array.isArray(l.value) && (((C = l.value) == null ? void 0 : C.map((I) => ge(I))).includes(W) ? l.value = l.value.filter((I) => ge(I) !== W) : l.value.push(nt(je(z()), W))) : l.value = [nt(je(z()), W)], t("auto-apply", !0);
      u.value.enabled ? (l.value = Va(l, L(W), t), xe().then(() => {
        ua(l.value, t, e.autoApply, e.modelAuto);
      })) : (l.value = L(W), t("auto-apply"));
    }
  };
}, tr = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...et
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = e, { groupedYears: f, modelValue: r, focusYear: u, selectYear: P, setHoverValue: $ } = er(a, n), { defaultedConfig: h } = Re(a);
    return t({ getSidebarProps: () => ({
      modelValue: r,
      selectYear: P
    }) }), (D, L) => (T(), Q("div", null, [
      D.$slots["month-year"] ? ie(D.$slots, "month-year", Be(Ie({ key: 0 }, {
        years: d(f),
        selectYear: d(P)
      }))) : (T(), De(Gt, {
        key: 1,
        items: d(f),
        "is-last": D.autoApply && !d(h).keepActionRow,
        height: d(h).modeHeight,
        config: D.config,
        "no-overlay-focus": !!(D.noOverlayFocus || D.textInput),
        "focus-value": d(u),
        type: "year",
        "use-relative": "",
        onSelected: d(P),
        onHoverValue: d($)
      }, ze({ _: 2 }, [
        D.$slots["year-overlay-value"] ? {
          name: "item",
          fn: ye(({ item: N }) => [
            ie(D.$slots, "year-overlay-value", {
              text: N.text,
              value: N.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), ar = {
  key: 0,
  class: "dp__time_input"
}, nr = ["aria-label", "onKeydown", "onClick"], lr = /* @__PURE__ */ pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), rr = /* @__PURE__ */ pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), or = ["aria-label", "disabled", "onKeydown", "onClick"], sr = ["aria-label", "onKeydown", "onClick"], ur = /* @__PURE__ */ pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), ir = /* @__PURE__ */ pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), dr = { key: 0 }, cr = ["aria-label", "onKeydown"], fr = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...et
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = e, { setTimePickerElements: f, setTimePickerBackRef: r } = gt(), { defaultedAriaLabels: u, defaultedTransitions: P, defaultedFilters: $, defaultedConfig: h, defaultedRange: S } = Re(a), { transitionName: D, showTransition: L } = Kt(P), N = zt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), M = x("AM"), W = x(null), C = x([]);
    Ue(() => {
      n("mounted");
    });
    const E = (s) => Ae(/* @__PURE__ */ new Date(), {
      hours: s.hours,
      minutes: s.minutes,
      seconds: a.enableSeconds ? s.seconds : 0,
      milliseconds: 0
    }), I = G(
      () => (s) => V(s, a[s]) || F(s, a[s])
    ), R = G(() => ({ hours: a.hours, minutes: a.minutes, seconds: a.seconds })), F = (s, m) => S.value.enabled && !S.value.disableTimeRangeValidation ? !a.validateTime(s, m) : !1, H = (s, m) => {
      if (S.value.enabled && !S.value.disableTimeRangeValidation) {
        const de = m ? +a[`${s}Increment`] : -+a[`${s}Increment`], ne = a[s] + de;
        return !a.validateTime(s, ne);
      }
      return !1;
    }, q = G(() => (s) => !Z(+a[s] + +a[`${s}Increment`], s) || H(s, !0)), A = G(() => (s) => !Z(+a[s] - +a[`${s}Increment`], s) || H(s, !1)), se = (s, m) => cn(Ae(z(), s), m), le = (s, m) => Un(Ae(z(), s), m), te = G(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !a.timePickerInline,
        dp__time_col_reg_block: !a.enableSeconds && a.is24 && !a.timePickerInline,
        dp__time_col_reg_inline: !a.enableSeconds && a.is24 && a.timePickerInline,
        dp__time_col_reg_with_button: !a.enableSeconds && !a.is24,
        dp__time_col_sec: a.enableSeconds && a.is24,
        dp__time_col_sec_with_button: a.enableSeconds && !a.is24
      })
    ), _ = G(() => {
      const s = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return a.enableSeconds ? s.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : s;
    }), U = G(() => _.value.filter((s) => !s.separator)), ee = G(() => (s) => {
      if (s === "hours") {
        const m = i(+a.hours);
        return { text: m < 10 ? `0${m}` : `${m}`, value: m };
      }
      return { text: a[s] < 10 ? `0${a[s]}` : `${a[s]}`, value: a[s] };
    }), V = (s, m) => {
      var ne;
      if (!a.disabledTimesConfig)
        return !1;
      const de = a.disabledTimesConfig(a.order, s === "hours" ? m : void 0);
      return de[s] ? !!((ne = de[s]) != null && ne.includes(m)) : !0;
    }, c = (s) => {
      const m = a.is24 ? 24 : 12, de = s === "hours" ? m : 60, ne = +a[`${s}GridIncrement`], w = s === "hours" && !a.is24 ? ne : 0, K = [];
      for (let ve = w; ve < de; ve += ne)
        K.push({ value: ve, text: ve < 10 ? `0${ve}` : `${ve}` });
      return s === "hours" && !a.is24 && K.push({ value: 0, text: "12" }), _t(K, (ve) => ({ active: !1, disabled: $.value.times[s].includes(ve.value) || !Z(ve.value, s) || V(s, ve.value) || F(s, ve.value) }));
    }, b = (s) => s >= 0 ? s : 59, g = (s) => s >= 0 ? s : 23, Z = (s, m) => {
      const de = a.minTime ? E(ya(a.minTime)) : null, ne = a.maxTime ? E(ya(a.maxTime)) : null, w = E(
        ya(
          R.value,
          m,
          m === "minutes" || m === "seconds" ? b(s) : g(s)
        )
      );
      return de && ne ? (Ht(w, ne) || Pt(w, ne)) && (Lt(w, de) || Pt(w, de)) : de ? Lt(w, de) || Pt(w, de) : ne ? Ht(w, ne) || Pt(w, ne) : !0;
    }, O = (s) => a[`no${s[0].toUpperCase() + s.slice(1)}Overlay`], p = (s) => {
      O(s) || (N[s] = !N[s], N[s] || n("overlay-closed"));
    }, j = (s) => s === "hours" ? Ze : s === "minutes" ? rt : Ct, ae = (s, m = !0) => {
      const de = m ? se : le, ne = m ? +a[`${s}Increment`] : -+a[`${s}Increment`];
      Z(+a[s] + ne, s) && n(
        `update:${s}`,
        j(s)(de({ [s]: +a[s] }, { [s]: +a[`${s}Increment`] }))
      );
    }, i = (s) => a.is24 ? s : (s >= 12 ? M.value = "PM" : M.value = "AM", xn(s)), k = () => {
      M.value === "PM" ? (M.value = "AM", n("update:hours", a.hours - 12)) : (M.value = "PM", n("update:hours", a.hours + 12)), n("am-pm-change", M.value);
    }, v = (s) => {
      N[s] = !0;
    }, o = (s, m, de) => {
      if (s && a.arrowNavigation) {
        Array.isArray(C.value[m]) ? C.value[m][de] = s : C.value[m] = [s];
        const ne = C.value.reduce(
          (w, K) => K.map((ve, ue) => [...w[ue] || [], K[ue]]),
          []
        );
        r(a.closeTimePickerBtn), W.value && (ne[1] = ne[1].concat(W.value)), f(ne, a.order);
      }
    }, B = (s, m) => (p(s), s === "hours" && !a.is24 ? n(`update:${s}`, M.value === "PM" ? m + 12 : m) : n(`update:${s}`, m));
    return t({ openChildCmp: v }), (s, m) => {
      var de;
      return s.disabled ? J("", !0) : (T(), Q("div", ar, [
        (T(!0), Q(ke, null, Se(_.value, (ne, w) => {
          var K, ve, ue;
          return T(), Q("div", {
            key: w,
            class: Me(te.value)
          }, [
            ne.separator ? (T(), Q(ke, { key: 0 }, [
              dt(" : ")
            ], 64)) : (T(), Q(ke, { key: 1 }, [
              pe("button", {
                ref_for: !0,
                ref: (he) => o(he, w, 0),
                type: "button",
                class: Me({
                  dp__btn: !0,
                  dp__inc_dec_button: !s.timePickerInline,
                  dp__inc_dec_button_inline: s.timePickerInline,
                  dp__tp_inline_btn_top: s.timePickerInline,
                  dp__inc_dec_button_disabled: q.value(ne.type)
                }),
                "aria-label": (K = d(u)) == null ? void 0 : K.incrementValue(ne.type),
                tabindex: "0",
                onKeydown: [
                  me($e((he) => ae(ne.type), ["prevent"]), ["enter"]),
                  me($e((he) => ae(ne.type), ["prevent"]), ["space"])
                ],
                onClick: (he) => ae(ne.type)
              }, [
                a.timePickerInline ? (T(), Q(ke, { key: 1 }, [
                  lr,
                  rr
                ], 64)) : (T(), Q(ke, { key: 0 }, [
                  s.$slots["arrow-up"] ? ie(s.$slots, "arrow-up", { key: 0 }) : J("", !0),
                  s.$slots["arrow-up"] ? J("", !0) : (T(), De(d(Na), { key: 1 }))
                ], 64))
              ], 42, nr),
              pe("button", {
                ref_for: !0,
                ref: (he) => o(he, w, 1),
                type: "button",
                "aria-label": (ve = d(u)) == null ? void 0 : ve.openTpOverlay(ne.type),
                class: Me({
                  dp__time_display: !0,
                  dp__time_display_block: !s.timePickerInline,
                  dp__time_display_inline: s.timePickerInline,
                  "dp--time-invalid": I.value(ne.type),
                  "dp--time-overlay-btn": !I.value(ne.type)
                }),
                disabled: O(ne.type),
                tabindex: "0",
                onKeydown: [
                  me($e((he) => p(ne.type), ["prevent"]), ["enter"]),
                  me($e((he) => p(ne.type), ["prevent"]), ["space"])
                ],
                onClick: (he) => p(ne.type)
              }, [
                s.$slots[ne.type] ? ie(s.$slots, ne.type, {
                  key: 0,
                  text: ee.value(ne.type).text,
                  value: ee.value(ne.type).value
                }) : J("", !0),
                s.$slots[ne.type] ? J("", !0) : (T(), Q(ke, { key: 1 }, [
                  dt(We(ee.value(ne.type).text), 1)
                ], 64))
              ], 42, or),
              pe("button", {
                ref_for: !0,
                ref: (he) => o(he, w, 2),
                type: "button",
                class: Me({
                  dp__btn: !0,
                  dp__inc_dec_button: !s.timePickerInline,
                  dp__inc_dec_button_inline: s.timePickerInline,
                  dp__tp_inline_btn_bottom: s.timePickerInline,
                  dp__inc_dec_button_disabled: A.value(ne.type)
                }),
                "aria-label": (ue = d(u)) == null ? void 0 : ue.decrementValue(ne.type),
                tabindex: "0",
                onKeydown: [
                  me($e((he) => ae(ne.type, !1), ["prevent"]), ["enter"]),
                  me($e((he) => ae(ne.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (he) => ae(ne.type, !1)
              }, [
                a.timePickerInline ? (T(), Q(ke, { key: 1 }, [
                  ur,
                  ir
                ], 64)) : (T(), Q(ke, { key: 0 }, [
                  s.$slots["arrow-down"] ? ie(s.$slots, "arrow-down", { key: 0 }) : J("", !0),
                  s.$slots["arrow-down"] ? J("", !0) : (T(), De(d(Ia), { key: 1 }))
                ], 64))
              ], 42, sr)
            ], 64))
          ], 2);
        }), 128)),
        s.is24 ? J("", !0) : (T(), Q("div", dr, [
          s.$slots["am-pm-button"] ? ie(s.$slots, "am-pm-button", {
            key: 0,
            toggle: k,
            value: M.value
          }) : J("", !0),
          s.$slots["am-pm-button"] ? J("", !0) : (T(), Q("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: W,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (de = d(u)) == null ? void 0 : de.amPmButton,
            tabindex: "0",
            onClick: k,
            onKeydown: [
              me($e(k, ["prevent"]), ["enter"]),
              me($e(k, ["prevent"]), ["space"])
            ]
          }, We(M.value), 41, cr))
        ])),
        (T(!0), Q(ke, null, Se(U.value, (ne, w) => (T(), De(Bt, {
          key: w,
          name: d(D)(N[ne.type]),
          css: d(L)
        }, {
          default: ye(() => [
            N[ne.type] ? (T(), De(Gt, {
              key: 0,
              items: c(ne.type),
              "is-last": s.autoApply && !d(h).keepActionRow,
              "esc-close": s.escClose,
              type: ne.type,
              "text-input": s.textInput,
              config: s.config,
              "arrow-navigation": s.arrowNavigation,
              "aria-labels": s.ariaLabels,
              onSelected: (K) => B(ne.type, K),
              onToggle: (K) => p(ne.type),
              onResetFlow: m[0] || (m[0] = (K) => s.$emit("reset-flow"))
            }, ze({
              "button-icon": ye(() => [
                s.$slots["clock-icon"] ? ie(s.$slots, "clock-icon", { key: 0 }) : J("", !0),
                s.$slots["clock-icon"] ? J("", !0) : (T(), De(na(s.timePickerInline ? d(Ut) : d(Ya)), { key: 1 }))
              ]),
              _: 2
            }, [
              s.$slots[`${ne.type}-overlay-value`] ? {
                name: "item",
                fn: ye(({ item: K }) => [
                  ie(s.$slots, `${ne.type}-overlay-value`, {
                    text: K.text,
                    value: K.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : J("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), vr = { class: "dp--tp-wrap" }, mr = ["aria-label", "tabindex"], pr = ["tabindex"], gr = ["aria-label"], Pn = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...et
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = e, { buildMatrix: f, setTimePicker: r } = gt(), u = Tt(), { defaultedTransitions: P, defaultedAriaLabels: $, defaultedTextInput: h, defaultedConfig: S, defaultedRange: D } = Re(a), { transitionName: L, showTransition: N } = Kt(P), { hideNavigationButtons: M } = ra(), W = x(null), C = x(null), E = x([]), I = x(null);
    Ue(() => {
      n("mount"), !a.timePicker && a.arrowNavigation ? f([Ne(W.value)], "time") : r(!0, a.timePicker);
    });
    const R = G(() => D.value.enabled && a.modelAuto ? vn(a.internalModelValue) : !0), F = x(!1), H = (c) => ({
      hours: Array.isArray(a.hours) ? a.hours[c] : a.hours,
      minutes: Array.isArray(a.minutes) ? a.minutes[c] : a.minutes,
      seconds: Array.isArray(a.seconds) ? a.seconds[c] : a.seconds
    }), q = G(() => {
      const c = [];
      if (D.value.enabled)
        for (let b = 0; b < 2; b++)
          c.push(H(b));
      else
        c.push(H(0));
      return c;
    }), A = (c, b = !1, g = "") => {
      b || n("reset-flow"), F.value = c, n(c ? "overlay-opened" : "overlay-closed"), a.arrowNavigation && r(c), xe(() => {
        g !== "" && E.value[0] && E.value[0].openChildCmp(g);
      });
    }, se = G(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: a.autoApply && !S.value.keepActionRow
    })), le = Ke(u, "timePicker"), te = (c, b, g) => D.value.enabled ? b === 0 ? [c, q.value[1][g]] : [q.value[0][g], c] : c, _ = (c) => {
      n("update:hours", c);
    }, U = (c) => {
      n("update:minutes", c);
    }, ee = (c) => {
      n("update:seconds", c);
    }, V = () => {
      if (I.value && !h.value.enabled && !a.noOverlayFocus) {
        const c = mn(I.value);
        c && c.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: A }), (c, b) => {
      var g;
      return T(), Q("div", vr, [
        !c.timePicker && !c.timePickerInline ? Zt((T(), Q("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: W,
          type: "button",
          class: Me(se.value),
          "aria-label": (g = d($)) == null ? void 0 : g.openTimePicker,
          tabindex: c.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            b[0] || (b[0] = me((Z) => A(!0), ["enter"])),
            b[1] || (b[1] = me((Z) => A(!0), ["space"]))
          ],
          onClick: b[2] || (b[2] = (Z) => A(!0))
        }, [
          c.$slots["clock-icon"] ? ie(c.$slots, "clock-icon", { key: 0 }) : J("", !0),
          c.$slots["clock-icon"] ? J("", !0) : (T(), De(d(Ya), { key: 1 }))
        ], 42, mr)), [
          [xt, !d(M)(c.hideNavigation, "time")]
        ]) : J("", !0),
        Qe(Bt, {
          name: d(L)(F.value),
          css: d(N) && !c.timePickerInline
        }, {
          default: ye(() => {
            var Z;
            return [
              F.value || c.timePicker || c.timePickerInline ? (T(), Q("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: I,
                class: Me({
                  dp__overlay: !c.timePickerInline,
                  "dp--overlay-absolute": !a.timePicker && !c.timePickerInline,
                  "dp--overlay-relative": a.timePicker
                }),
                style: Je(c.timePicker ? { height: `${d(S).modeHeight}px` } : void 0),
                tabindex: c.timePickerInline ? void 0 : 0
              }, [
                pe("div", {
                  class: Me(
                    c.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  c.$slots["time-picker-overlay"] ? ie(c.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: _,
                    setMinutes: U,
                    setSeconds: ee
                  }) : J("", !0),
                  c.$slots["time-picker-overlay"] ? J("", !0) : (T(), Q("div", {
                    key: 1,
                    class: Me(c.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (T(!0), Q(ke, null, Se(q.value, (O, p) => Zt((T(), De(fr, Ie({ key: p }, {
                      ...c.$props,
                      order: p,
                      hours: O.hours,
                      minutes: O.minutes,
                      seconds: O.seconds,
                      closeTimePickerBtn: C.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: p === 0 ? c.fixedStart : c.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: E,
                      "validate-time": (j, ae) => e.validateTime(j, te(ae, p, j)),
                      "onUpdate:hours": (j) => _(te(j, p, "hours")),
                      "onUpdate:minutes": (j) => U(te(j, p, "minutes")),
                      "onUpdate:seconds": (j) => ee(te(j, p, "seconds")),
                      onMounted: V,
                      onOverlayClosed: V,
                      onAmPmChange: b[3] || (b[3] = (j) => c.$emit("am-pm-change", j))
                    }), ze({ _: 2 }, [
                      Se(d(le), (j, ae) => ({
                        name: j,
                        fn: ye((i) => [
                          ie(c.$slots, j, Be(Ve(i)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [xt, p === 0 ? !0 : R.value]
                    ])), 128))
                  ], 2)),
                  !c.timePicker && !c.timePickerInline ? Zt((T(), Q("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: C,
                    type: "button",
                    class: Me(se.value),
                    "aria-label": (Z = d($)) == null ? void 0 : Z.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      b[4] || (b[4] = me((O) => A(!1), ["enter"])),
                      b[5] || (b[5] = me((O) => A(!1), ["space"]))
                    ],
                    onClick: b[6] || (b[6] = (O) => A(!1))
                  }, [
                    c.$slots["calendar-icon"] ? ie(c.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                    c.$slots["calendar-icon"] ? J("", !0) : (T(), De(d(Ut), { key: 1 }))
                  ], 42, gr)), [
                    [xt, !d(M)(c.hideNavigation, "time")]
                  ]) : J("", !0)
                ], 2)
              ], 14, pr)) : J("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Cn = (e, t, l, n) => {
  const { defaultedRange: a } = Re(e), f = (I, R) => Array.isArray(t[I]) ? t[I][R] : t[I], r = (I) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[I] : t.seconds : 0, u = (I, R) => I ? R !== void 0 ? mt(I, f("hours", R), f("minutes", R), r(R)) : mt(I, t.hours, t.minutes, r()) : Ca(z(), r(R)), P = (I, R) => {
    t[I] = R;
  }, $ = G(() => e.modelAuto && a.value.enabled ? Array.isArray(l.value) ? l.value.length > 1 : !1 : a.value.enabled), h = (I, R) => {
    const F = Object.fromEntries(
      Object.keys(t).map((H) => H === I ? [H, R] : [H, t[H]].slice())
    );
    if ($.value && !a.value.disableTimeRangeValidation) {
      const H = (A) => l.value ? mt(
        l.value[A],
        F.hours[A],
        F.minutes[A],
        F.seconds[A]
      ) : null, q = (A) => _a(l.value[A], 0);
      return !(we(H(0), H(1)) && (Lt(H(0), q(1)) || Ht(H(1), q(0))));
    }
    return !0;
  }, S = (I, R) => {
    h(I, R) && (P(I, R), n && n());
  }, D = (I) => {
    S("hours", I);
  }, L = (I) => {
    S("minutes", I);
  }, N = (I) => {
    S("seconds", I);
  }, M = (I, R, F, H) => {
    R && D(I), !R && !F && L(I), F && N(I), l.value && H(l.value);
  }, W = (I) => {
    if (I) {
      const R = Array.isArray(I), F = R ? [+I[0].hours, +I[1].hours] : +I.hours, H = R ? [+I[0].minutes, +I[1].minutes] : +I.minutes, q = R ? [+I[0].seconds, +I[1].seconds] : +I.seconds;
      P("hours", F), P("minutes", H), e.enableSeconds && P("seconds", q);
    }
  }, C = (I, R) => {
    const F = {
      hours: Array.isArray(t.hours) ? t.hours[I] : t.hours,
      disabledArr: []
    };
    return (R || R === 0) && (F.hours = R), Array.isArray(e.disabledTimes) && (F.disabledArr = a.value.enabled && Array.isArray(e.disabledTimes[I]) ? e.disabledTimes[I] : e.disabledTimes), F;
  }, E = G(() => (I, R) => {
    var F;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: H, hours: q } = C(I, R), A = H.filter((se) => +se.hours === q);
      return ((F = A[0]) == null ? void 0 : F.minutes) === "*" ? { hours: [q], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (A == null ? void 0 : A.map((se) => +se.minutes)) ?? [],
        seconds: (A == null ? void 0 : A.map((se) => se.seconds ? +se.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: P,
    updateHours: D,
    updateMinutes: L,
    updateSeconds: N,
    getSetDateTime: u,
    updateTimeValues: M,
    getSecondsValue: r,
    assignStartTime: W,
    validateTime: h,
    disabledTimesConfig: E
  };
}, yr = (e, t) => {
  const { modelValue: l, time: n } = jt(e, t), { defaultedStartTime: a, defaultedRange: f } = Re(e), { updateTimeValues: r, getSetDateTime: u, setTime: P, assignStartTime: $, disabledTimesConfig: h, validateTime: S } = Cn(e, n, l), D = (R) => {
    const { hours: F, minutes: H, seconds: q } = R;
    return { hours: +F, minutes: +H, seconds: q ? +q : 0 };
  }, L = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const F = D(e.startTime[0]), H = D(e.startTime[1]);
        return [Ae(z(), F), Ae(z(), H)];
      }
      const R = D(e.startTime);
      return Ae(z(), R);
    }
    return f.value.enabled ? [null, null] : null;
  }, N = () => {
    if (f.value.enabled) {
      const [R, F] = L();
      l.value = [u(R, 0), u(F, 1)];
    } else
      l.value = u(L());
  }, M = (R) => Array.isArray(R) ? [$t(z(R[0])), $t(z(R[1]))] : [$t(R ?? z())], W = (R, F, H) => {
    P("hours", R), P("minutes", F), P("seconds", e.enableSeconds ? H : 0);
  }, C = () => {
    const [R, F] = M(l.value);
    return f.value.enabled ? W(
      [R.hours, F.hours],
      [R.minutes, F.minutes],
      [R.seconds, F.seconds]
    ) : W(R.hours, R.minutes, R.seconds);
  };
  Ue(() => {
    if (!e.shadow)
      return $(a.value), l.value ? C() : N();
  });
  const E = () => {
    Array.isArray(l.value) ? l.value = l.value.map((R, F) => R && u(R, F)) : l.value = u(l.value), t("time-update");
  };
  return {
    modelValue: l,
    time: n,
    disabledTimesConfig: h,
    updateTime: (R, F = !0, H = !1) => {
      r(R, F, H, E);
    },
    validateTime: S
  };
}, hr = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...et
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = e, f = Tt(), r = Ke(f, "timePicker"), { time: u, modelValue: P, disabledTimesConfig: $, updateTime: h, validateTime: S } = yr(a, n);
    return t({ getSidebarProps: () => ({
      modelValue: P,
      time: u,
      updateTime: h
    }) }), (L, N) => (T(), De(sa, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: ye(() => [
        Qe(Pn, Ie(L.$props, {
          hours: d(u).hours,
          minutes: d(u).minutes,
          seconds: d(u).seconds,
          "internal-model-value": L.internalModelValue,
          "disabled-times-config": d($),
          "validate-time": d(S),
          "onUpdate:hours": N[0] || (N[0] = (M) => d(h)(M)),
          "onUpdate:minutes": N[1] || (N[1] = (M) => d(h)(M, !1)),
          "onUpdate:seconds": N[2] || (N[2] = (M) => d(h)(M, !1, !0)),
          onAmPmChange: N[3] || (N[3] = (M) => L.$emit("am-pm-change", M))
        }), ze({ _: 2 }, [
          Se(d(r), (M, W) => ({
            name: M,
            fn: ye((C) => [
              ie(L.$slots, M, Be(Ve(C)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), br = { class: "dp__month_year_row" }, kr = ["aria-label", "onClick", "onKeydown"], wr = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...et
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = e, {
      defaultedTransitions: f,
      defaultedAriaLabels: r,
      defaultedMultiCalendars: u,
      defaultedFilters: P,
      defaultedConfig: $,
      defaultedHighlight: h,
      propDates: S
    } = Re(a), { transitionName: D, showTransition: L } = Kt(f), { buildMatrix: N } = gt(), { handleMonthYearChange: M, isDisabled: W, updateMonthYear: C } = Ol(a, n), { showLeftIcon: E, showRightIcon: I } = ra(), R = x(!1), F = x(!1), H = x([null, null, null, null]);
    Ue(() => {
      n("mount");
    });
    const q = (p) => ({
      get: () => a[p],
      set: (j) => {
        const ae = p === qe.month ? qe.year : qe.month;
        n("update-month-year", { [p]: j, [ae]: a[ae] }), p === qe.month ? V(!0) : c(!0);
      }
    }), A = G(q(qe.month)), se = G(q(qe.year)), le = G(() => (p) => ({
      month: a.month,
      year: a.year,
      items: p === qe.month ? a.months : a.years,
      instance: a.instance,
      updateMonthYear: C,
      toggle: p === qe.month ? V : c
    })), te = G(() => {
      const p = a.months.find((j) => j.value === a.month);
      return p || { text: "", value: 0 };
    }), _ = G(() => _t(a.months, (p) => {
      const j = a.month === p.value, ae = Vt(
        p.value,
        gn(a.year, S.value.minDate),
        yn(a.year, S.value.maxDate)
      ) || P.value.months.includes(p.value), i = Dn(h.value, p.value, a.year);
      return { active: j, disabled: ae, highlighted: i };
    })), U = G(() => _t(a.years, (p) => {
      const j = a.year === p.value, ae = Vt(
        p.value,
        Ot(S.value.minDate),
        Ot(S.value.maxDate)
      ) || P.value.years.includes(p.value), i = Wa(h.value, p.value);
      return { active: j, disabled: ae, highlighted: i };
    })), ee = (p, j) => {
      j !== void 0 ? p.value = j : p.value = !p.value, p.value || n("overlay-closed");
    }, V = (p = !1, j) => {
      b(p), ee(R, j);
    }, c = (p = !1, j) => {
      b(p), ee(F, j);
    }, b = (p) => {
      p || n("reset-flow");
    }, g = (p, j) => {
      a.arrowNavigation && (H.value[j] = Ne(p), N(H.value, "monthYear"));
    }, Z = G(() => {
      var p, j;
      return [
        {
          type: qe.month,
          index: 1,
          toggle: V,
          modelValue: A.value,
          updateModelValue: (ae) => A.value = ae,
          text: te.value.text,
          showSelectionGrid: R.value,
          items: _.value,
          ariaLabel: (p = r.value) == null ? void 0 : p.openMonthsOverlay
        },
        {
          type: qe.year,
          index: 2,
          toggle: c,
          modelValue: se.value,
          updateModelValue: (ae) => se.value = ae,
          text: pn(a.year, a.locale),
          showSelectionGrid: F.value,
          items: U.value,
          ariaLabel: (j = r.value) == null ? void 0 : j.openYearsOverlay
        }
      ];
    }), O = G(() => a.disableYearSelect ? [Z.value[0]] : a.yearFirst ? [...Z.value].reverse() : Z.value);
    return t({
      toggleMonthPicker: V,
      toggleYearPicker: c,
      handleMonthYearChange: M
    }), (p, j) => {
      var ae, i, k;
      return T(), Q("div", br, [
        p.$slots["month-year"] ? ie(p.$slots, "month-year", Be(Ie({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: d(C), handleMonthYearChange: d(M), instance: e.instance }))) : (T(), Q(ke, { key: 1 }, [
          d(E)(d(u), e.instance) && !p.vertical ? (T(), De(Et, {
            key: 0,
            "aria-label": (ae = d(r)) == null ? void 0 : ae.prevMonth,
            disabled: d(W)(!1),
            onActivate: j[0] || (j[0] = (v) => d(M)(!1, !0)),
            onSetRef: j[1] || (j[1] = (v) => g(v, 0))
          }, {
            default: ye(() => [
              p.$slots["arrow-left"] ? ie(p.$slots, "arrow-left", { key: 0 }) : J("", !0),
              p.$slots["arrow-left"] ? J("", !0) : (T(), De(d(Oa), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : J("", !0),
          pe("div", {
            class: Me(["dp__month_year_wrap", {
              dp__year_disable_select: p.disableYearSelect
            }])
          }, [
            (T(!0), Q(ke, null, Se(O.value, (v, o) => (T(), Q(ke, {
              key: v.type
            }, [
              pe("button", {
                ref_for: !0,
                ref: (B) => g(B, o + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": v.ariaLabel,
                onClick: v.toggle,
                onKeydown: [
                  me($e(v.toggle, ["prevent"]), ["enter"]),
                  me($e(v.toggle, ["prevent"]), ["space"])
                ]
              }, [
                p.$slots[v.type] ? ie(p.$slots, v.type, {
                  key: 0,
                  text: v.text,
                  value: a[v.type]
                }) : J("", !0),
                p.$slots[v.type] ? J("", !0) : (T(), Q(ke, { key: 1 }, [
                  dt(We(v.text), 1)
                ], 64))
              ], 40, kr),
              Qe(Bt, {
                name: d(D)(v.showSelectionGrid),
                css: d(L)
              }, {
                default: ye(() => [
                  v.showSelectionGrid ? (T(), De(Gt, {
                    key: 0,
                    items: v.items,
                    "arrow-navigation": p.arrowNavigation,
                    "hide-navigation": p.hideNavigation,
                    "is-last": p.autoApply && !d($).keepActionRow,
                    "skip-button-ref": !1,
                    config: p.config,
                    type: v.type,
                    "header-refs": [],
                    "esc-close": p.escClose,
                    "menu-wrap-ref": p.menuWrapRef,
                    "text-input": p.textInput,
                    "aria-labels": p.ariaLabels,
                    onSelected: v.updateModelValue,
                    onToggle: v.toggle
                  }, ze({
                    "button-icon": ye(() => [
                      p.$slots["calendar-icon"] ? ie(p.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                      p.$slots["calendar-icon"] ? J("", !0) : (T(), De(d(Ut), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    p.$slots[`${v.type}-overlay-value`] ? {
                      name: "item",
                      fn: ye(({ item: B }) => [
                        ie(p.$slots, `${v.type}-overlay-value`, {
                          text: B.text,
                          value: B.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    p.$slots[`${v.type}-overlay`] ? {
                      name: "overlay",
                      fn: ye(() => [
                        ie(p.$slots, `${v.type}-overlay`, Be(Ve(le.value(v.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    p.$slots[`${v.type}-overlay-header`] ? {
                      name: "header",
                      fn: ye(() => [
                        ie(p.$slots, `${v.type}-overlay-header`, {
                          toggle: v.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : J("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          d(E)(d(u), e.instance) && p.vertical ? (T(), De(Et, {
            key: 1,
            "aria-label": (i = d(r)) == null ? void 0 : i.prevMonth,
            disabled: d(W)(!1),
            onActivate: j[2] || (j[2] = (v) => d(M)(!1, !0))
          }, {
            default: ye(() => [
              p.$slots["arrow-up"] ? ie(p.$slots, "arrow-up", { key: 0 }) : J("", !0),
              p.$slots["arrow-up"] ? J("", !0) : (T(), De(d(Na), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : J("", !0),
          d(I)(d(u), e.instance) ? (T(), De(Et, {
            key: 2,
            ref: "rightIcon",
            disabled: d(W)(!0),
            "aria-label": (k = d(r)) == null ? void 0 : k.nextMonth,
            onActivate: j[3] || (j[3] = (v) => d(M)(!0, !0)),
            onSetRef: j[4] || (j[4] = (v) => g(v, p.disableYearSelect ? 2 : 3))
          }, {
            default: ye(() => [
              p.$slots[p.vertical ? "arrow-down" : "arrow-right"] ? ie(p.$slots, p.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : J("", !0),
              p.$slots[p.vertical ? "arrow-down" : "arrow-right"] ? J("", !0) : (T(), De(na(p.vertical ? d(Ia) : d(Ba)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : J("", !0)
        ], 64))
      ]);
    };
  }
}), Dr = ["aria-label"], Mr = {
  class: "dp__calendar_header",
  role: "row"
}, $r = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Ar = ["aria-label"], Tr = /* @__PURE__ */ pe("div", { class: "dp__calendar_header_separator" }, null, -1), Sr = ["aria-label"], Rr = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Pr = { class: "dp__cell_inner" }, Cr = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], _r = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...et
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = e, { buildMultiLevelMatrix: f } = gt(), {
      defaultedTransitions: r,
      defaultedConfig: u,
      defaultedAriaLabels: P,
      defaultedMultiCalendars: $,
      defaultedWeekNumbers: h,
      defaultedMultiDates: S
    } = Re(a), D = x(null), L = x({
      bottom: "",
      left: "",
      transform: ""
    }), N = x([]), M = x(null), W = x(!0), C = x(""), E = x({ startX: 0, endX: 0, startY: 0, endY: 0 }), I = x([]), R = x({ left: "50%" }), F = x(!1), H = G(() => a.calendar ? a.calendar(a.mappedDates) : a.mappedDates), q = G(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : Zn(a.formatLocale, a.locale, +a.weekStart));
    Ue(() => {
      n("mount", { cmp: "calendar", refs: N }), u.value.noSwipe || M.value && (M.value.addEventListener("touchstart", Z, { passive: !1 }), M.value.addEventListener("touchend", O, { passive: !1 }), M.value.addEventListener("touchmove", p, { passive: !1 })), a.monthChangeOnScroll && M.value && M.value.addEventListener("wheel", i, { passive: !1 });
    });
    const A = (m) => m ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", se = (m, de) => {
      if (a.transitions) {
        const ne = je(ut(z(), a.month, a.year));
        C.value = _e(je(ut(z(), m, de)), ne) ? r.value[A(!0)] : r.value[A(!1)], W.value = !1, xe(() => {
          W.value = !0;
        });
      }
    }, le = G(
      () => ({
        [a.calendarClassName]: !!a.calendarClassName
      })
    ), te = G(() => (m) => {
      const de = el(m);
      return {
        dp__marker_dot: de.type === "dot",
        dp__marker_line: de.type === "line"
      };
    }), _ = G(() => (m) => we(m, D.value)), U = G(() => ({
      dp__calendar: !0,
      dp__calendar_next: $.value.count > 0 && a.instance !== 0
    })), ee = G(() => (m) => a.hideOffsetDates ? m.current : !0), V = (m) => lt(m, "yyyy-MM-dd"), c = async (m, de, ne) => {
      const w = Ne(N.value[de][ne]);
      if (w) {
        const { width: K, height: ve } = w.getBoundingClientRect();
        D.value = m.value;
        let ue = { left: `${K / 2}px` }, he = -50;
        if (await xe(), I.value[0]) {
          const { left: oe, width: He } = I.value[0].getBoundingClientRect();
          oe < 0 && (ue = { left: "0" }, he = 0, R.value.left = `${K / 2}px`), window.innerWidth < oe + He && (ue = { right: "0" }, he = 0, R.value.left = `${He - K / 2}px`);
        }
        L.value = {
          bottom: `${ve}px`,
          ...ue,
          transform: `translateX(${he}%)`
        }, n("tooltip-open", m.marker);
      }
    }, b = async (m, de, ne) => {
      var w, K;
      if (F.value && S.value.enabled && S.value.dragSelect)
        return n("select-date", m);
      n("set-hover-date", m), (K = (w = m.marker) == null ? void 0 : w.tooltip) != null && K.length && await c(m, de, ne);
    }, g = (m) => {
      D.value && (D.value = null, L.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", m.marker));
    }, Z = (m) => {
      E.value.startX = m.changedTouches[0].screenX, E.value.startY = m.changedTouches[0].screenY;
    }, O = (m) => {
      E.value.endX = m.changedTouches[0].screenX, E.value.endY = m.changedTouches[0].screenY, j();
    }, p = (m) => {
      a.vertical && !a.inline && m.preventDefault();
    }, j = () => {
      const m = a.vertical ? "Y" : "X";
      Math.abs(E.value[`start${m}`] - E.value[`end${m}`]) > 10 && n("handle-swipe", E.value[`start${m}`] > E.value[`end${m}`] ? "right" : "left");
    }, ae = (m, de, ne) => {
      m && (Array.isArray(N.value[de]) ? N.value[de][ne] = m : N.value[de] = [m]), a.arrowNavigation && f(N.value, "calendar");
    }, i = (m) => {
      a.monthChangeOnScroll && (m.preventDefault(), n("handle-scroll", m));
    }, k = (m) => h.value.type === "local" ? Kn(m.value, { weekStartsOn: +a.weekStart }) : h.value.type === "iso" ? jn(m.value) : typeof h.value.type == "function" ? h.value.type(m.value) : "", v = (m) => {
      const de = m[0];
      return h.value.hideOnOffsetDates ? m.some((ne) => ne.current) ? k(de) : "" : k(de);
    }, o = (m, de) => {
      S.value.enabled || (vt(m, u.value), n("select-date", de));
    }, B = (m) => {
      vt(m, u.value);
    }, s = (m) => {
      S.value.enabled && S.value.dragSelect ? (F.value = !0, n("select-date", m)) : S.value.enabled && n("select-date", m);
    };
    return t({ triggerTransition: se }), (m, de) => {
      var ne;
      return T(), Q("div", {
        class: Me(U.value)
      }, [
        pe("div", {
          ref_key: "calendarWrapRef",
          ref: M,
          role: "grid",
          class: Me(le.value),
          "aria-label": (ne = d(P)) == null ? void 0 : ne.calendarWrap
        }, [
          pe("div", Mr, [
            m.weekNumbers ? (T(), Q("div", $r, We(m.weekNumName), 1)) : J("", !0),
            (T(!0), Q(ke, null, Se(q.value, (w, K) => {
              var ve, ue;
              return T(), Q("div", {
                key: K,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "aria-label": (ue = (ve = d(P)) == null ? void 0 : ve.weekDay) == null ? void 0 : ue.call(ve, K)
              }, [
                m.$slots["calendar-header"] ? ie(m.$slots, "calendar-header", {
                  key: 0,
                  day: w,
                  index: K
                }) : J("", !0),
                m.$slots["calendar-header"] ? J("", !0) : (T(), Q(ke, { key: 1 }, [
                  dt(We(w), 1)
                ], 64))
              ], 8, Ar);
            }), 128))
          ]),
          Tr,
          Qe(Bt, {
            name: C.value,
            css: !!m.transitions
          }, {
            default: ye(() => {
              var w;
              return [
                W.value ? (T(), Q("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((w = d(P)) == null ? void 0 : w.calendarDays) || void 0,
                  onMouseleave: de[1] || (de[1] = (K) => F.value = !1)
                }, [
                  (T(!0), Q(ke, null, Se(H.value, (K, ve) => (T(), Q("div", {
                    key: ve,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    m.weekNumbers ? (T(), Q("div", Rr, [
                      pe("div", Pr, We(v(K.days)), 1)
                    ])) : J("", !0),
                    (T(!0), Q(ke, null, Se(K.days, (ue, he) => {
                      var oe, He, Fe;
                      return T(), Q("div", {
                        id: V(ue.value),
                        ref_for: !0,
                        ref: (Ye) => ae(Ye, ve, he),
                        key: he + ve,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (ue.classData.dp__active_date || ue.classData.dp__range_start || ue.classData.dp__range_start) ?? void 0,
                        "aria-disabled": ue.classData.dp__cell_disabled || void 0,
                        "aria-label": (He = (oe = d(P)) == null ? void 0 : oe.day) == null ? void 0 : He.call(oe, ue),
                        tabindex: "0",
                        onClick: $e((Ye) => o(Ye, ue), ["prevent"]),
                        onKeydown: [
                          me((Ye) => m.$emit("select-date", ue), ["enter"]),
                          me((Ye) => m.$emit("handle-space", ue), ["space"])
                        ],
                        onMouseenter: (Ye) => b(ue, ve, he),
                        onMouseleave: (Ye) => g(ue),
                        onMousedown: (Ye) => s(ue),
                        onMouseup: de[0] || (de[0] = (Ye) => F.value = !1)
                      }, [
                        pe("div", {
                          class: Me(["dp__cell_inner", ue.classData])
                        }, [
                          m.$slots.day && ee.value(ue) ? ie(m.$slots, "day", {
                            key: 0,
                            day: +ue.text,
                            date: ue.value
                          }) : J("", !0),
                          m.$slots.day ? J("", !0) : (T(), Q(ke, { key: 1 }, [
                            dt(We(ue.text), 1)
                          ], 64)),
                          ue.marker && ee.value(ue) ? (T(), Q(ke, { key: 2 }, [
                            m.$slots.marker ? ie(m.$slots, "marker", {
                              key: 0,
                              marker: ue.marker,
                              day: +ue.text,
                              date: ue.value
                            }) : (T(), Q("div", {
                              key: 1,
                              class: Me(te.value(ue.marker)),
                              style: Je(ue.marker.color ? { backgroundColor: ue.marker.color } : {})
                            }, null, 6))
                          ], 64)) : J("", !0),
                          _.value(ue.value) ? (T(), Q("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: I,
                            class: "dp__marker_tooltip",
                            style: Je(L.value)
                          }, [
                            (Fe = ue.marker) != null && Fe.tooltip ? (T(), Q("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: B
                            }, [
                              (T(!0), Q(ke, null, Se(ue.marker.tooltip, (Ye, ht) => (T(), Q("div", {
                                key: ht,
                                class: "dp__tooltip_text"
                              }, [
                                m.$slots["marker-tooltip"] ? ie(m.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: Ye,
                                  day: ue.value
                                }) : J("", !0),
                                m.$slots["marker-tooltip"] ? J("", !0) : (T(), Q(ke, { key: 1 }, [
                                  pe("div", {
                                    class: "dp__tooltip_mark",
                                    style: Je(Ye.color ? { backgroundColor: Ye.color } : {})
                                  }, null, 4),
                                  pe("div", null, We(Ye.text), 1)
                                ], 64))
                              ]))), 128)),
                              pe("div", {
                                class: "dp__arrow_bottom_tp",
                                style: Je(R.value)
                              }, null, 4)
                            ])) : J("", !0)
                          ], 4)) : J("", !0)
                        ], 2)
                      ], 40, Cr);
                    }), 128))
                  ]))), 128))
                ], 40, Sr)) : J("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, Dr)
      ], 2);
    };
  }
}), an = (e) => Array.isArray(e), Or = (e, t, l, n) => {
  const a = x([]), f = x(/* @__PURE__ */ new Date()), { modelValue: r, calendars: u, time: P } = jt(e, t), { defaultedMultiCalendars: $, defaultedStartTime: h, defaultedRange: S, defaultedTz: D, propDates: L, defaultedMultiDates: N } = Re(e), { validateMonthYearInRange: M, isDisabled: W, isDateRangeAllowed: C, checkMinMaxRange: E } = yt(e), { updateTimeValues: I, getSetDateTime: R, setTime: F, assignStartTime: H, validateTime: q, disabledTimesConfig: A } = Cn(e, P, r, n), se = G(
    () => (y) => u.value[y] ? u.value[y].month : 0
  ), le = G(
    () => (y) => u.value[y] ? u.value[y].year : 0
  ), te = (y, X, ce) => {
    var Y, re;
    u.value[y] || (u.value[y] = { month: 0, year: 0 }), u.value[y].month = Ja(X) ? (Y = u.value[y]) == null ? void 0 : Y.month : X, u.value[y].year = Ja(ce) ? (re = u.value[y]) == null ? void 0 : re.year : ce;
  }, _ = () => {
    e.autoApply && t("select-date");
  };
  pt(
    r,
    (y, X) => {
      JSON.stringify(y) !== JSON.stringify(X) && V();
    },
    { deep: !0 }
  ), Ue(() => {
    e.shadow || (r.value || (v(), h.value && H(h.value)), V(!0), e.focusStartDate && e.startDate && v());
  });
  const U = G(() => {
    var y;
    return (y = e.flow) != null && y.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), ee = () => {
    e.autoApply && U.value && t("auto-apply");
  }, V = (y = !1) => {
    if (r.value)
      return Array.isArray(r.value) ? (a.value = r.value, j(y)) : g(r.value, y);
    if ($.value.count && y && !e.startDate)
      return b(z(), y);
  }, c = () => Array.isArray(r.value) && S.value.enabled ? be(r.value[0]) === be(r.value[1] ?? r.value[0]) : !1, b = (y, X = !1) => {
    if ((!$.value.count || !$.value.static || X) && te(0, be(y), ge(y)), $.value.count && (!$.value.solo || !r.value || c()))
      for (let ce = 1; ce < $.value.count; ce++) {
        const Y = Ae(z(), { month: se.value(ce - 1), year: le.value(ce - 1) }), re = cn(Y, { months: 1 });
        u.value[ce] = { month: be(re), year: ge(re) };
      }
  }, g = (y, X) => {
    b(y), F("hours", Ze(y)), F("minutes", rt(y)), F("seconds", Ct(y)), $.value.count && X && k();
  }, Z = (y) => {
    if ($.value.count) {
      if ($.value.solo)
        return 0;
      const X = be(y[0]), ce = be(y[1]);
      return Math.abs(ce - X) < $.value.count ? 0 : 1;
    }
    return 1;
  }, O = (y, X) => {
    y[1] && S.value.showLastInRange ? b(y[Z(y)], X) : b(y[0], X);
    const ce = (Y, re) => [
      Y(y[0]),
      y[1] ? Y(y[1]) : P[re][1]
    ];
    F("hours", ce(Ze, "hours")), F("minutes", ce(rt, "minutes")), F("seconds", ce(Ct, "seconds"));
  }, p = (y, X) => {
    if ((S.value.enabled || e.weekPicker) && !N.value.enabled)
      return O(y, X);
    if (N.value.enabled && X) {
      const ce = y[y.length - 1];
      return g(ce, X);
    }
  }, j = (y) => {
    const X = r.value;
    p(X, y), $.value.count && $.value.solo && k();
  }, ae = (y, X) => {
    const ce = Ae(z(), { month: se.value(X), year: le.value(X) }), Y = y < 0 ? Mt(ce, 1) : Wt(ce, 1);
    M(be(Y), ge(Y), y < 0, e.preventMinMaxNavigation) && (te(X, be(Y), ge(Y)), t("update-month-year", { instance: X, month: be(Y), year: ge(Y) }), $.value.count && !$.value.solo && i(X), l());
  }, i = (y) => {
    for (let X = y - 1; X >= 0; X--) {
      const ce = Wt(Ae(z(), { month: se.value(X + 1), year: le.value(X + 1) }), 1);
      te(X, be(ce), ge(ce));
    }
    for (let X = y + 1; X <= $.value.count - 1; X++) {
      const ce = Mt(Ae(z(), { month: se.value(X - 1), year: le.value(X - 1) }), 1);
      te(X, be(ce), ge(ce));
    }
  }, k = () => {
    if (Array.isArray(r.value) && r.value.length === 2) {
      const y = z(
        z(r.value[1] ? r.value[1] : Mt(r.value[0], 1))
      ), [X, ce] = [be(r.value[0]), ge(r.value[0])], [Y, re] = [be(r.value[1]), ge(r.value[1])];
      (X !== Y || X === Y && ce !== re) && $.value.solo && te(1, be(y), ge(y));
    } else
      r.value && !Array.isArray(r.value) && (te(0, be(r.value), ge(r.value)), b(z()));
  }, v = () => {
    e.startDate && (te(0, be(z(e.startDate)), ge(z(e.startDate))), $.value.count && i(0));
  }, o = (y, X) => {
    if (e.monthChangeOnScroll) {
      const ce = (/* @__PURE__ */ new Date()).getTime() - f.value.getTime(), Y = Math.abs(y.deltaY);
      let re = 500;
      Y > 1 && (re = 100), Y > 100 && (re = 0), ce > re && (f.value = /* @__PURE__ */ new Date(), ae(e.monthChangeOnScroll !== "inverse" ? -y.deltaY : y.deltaY, X));
    }
  }, B = (y, X, ce = !1) => {
    e.monthChangeOnArrows && e.vertical === ce && s(y, X);
  }, s = (y, X) => {
    ae(y === "right" ? -1 : 1, X);
  }, m = (y) => {
    if (L.value.markers)
      return ta(y.value, L.value.markers);
  }, de = (y, X) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [y == 0, !0];
      case "fair":
        return [y == 0 || X > y, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, ne = (y, X, ce, Y) => {
    if (e.sixWeeks && y.length < 6) {
      const re = 6 - y.length, fe = (X.getDay() + 7 - Y) % 7, tt = 6 - (ce.getDay() + 7 - Y) % 7, [bt, ma] = de(fe, tt);
      for (let kt = 1; kt <= re; kt++)
        if (ma ? !!(kt % 2) == bt : bt) {
          const qt = y[0].days[0], pa = w(Dt(qt.value, -7), be(X));
          y.unshift({ days: pa });
        } else {
          const qt = y[y.length - 1], pa = qt.days[qt.days.length - 1], On = w(Dt(pa.value, 1), be(X));
          y.push({ days: On });
        }
    }
    return y;
  }, w = (y, X) => {
    const ce = z(y), Y = [];
    for (let re = 0; re < 7; re++) {
      const fe = Dt(ce, re), ot = be(fe) !== X;
      Y.push({
        text: e.hideOffsetDates && ot ? "" : fe.getDate(),
        value: fe,
        current: !ot,
        classData: {}
      });
    }
    return Y;
  }, K = (y, X) => {
    const ce = [], Y = new Date(X, y), re = new Date(X, y + 1, 0), fe = e.weekStart, ot = sn(Y, { weekStartsOn: fe }), tt = (bt) => {
      const ma = w(bt, y);
      if (ce.push({ days: ma }), !ce[ce.length - 1].days.some(
        (kt) => we(je(kt.value), je(re))
      )) {
        const kt = Dt(bt, 7);
        tt(kt);
      }
    };
    return tt(ot), ne(ce, Y, re, fe);
  }, ve = (y) => {
    const X = mt(z(y.value), P.hours, P.minutes, ht());
    t("date-update", X), N.value.enabled ? Ha(X, r, N.value.limit) : r.value = X, n(), xe().then(() => {
      ee();
    });
  }, ue = (y) => S.value.noDisabledRange ? hn(a.value[0], y).some((ce) => W(ce)) : !1, he = () => {
    a.value = r.value ? r.value.slice() : [], a.value.length === 2 && !(S.value.fixedStart || S.value.fixedEnd) && (a.value = []);
  }, oe = (y, X) => {
    const ce = [
      z(y.value),
      Dt(z(y.value), +S.value.autoRange)
    ];
    C(ce) ? (X && He(y.value), a.value = ce) : t("invalid-date", y.value);
  }, He = (y) => {
    const X = be(z(y)), ce = ge(z(y));
    if (te(0, X, ce), $.value.count > 0)
      for (let Y = 1; Y < $.value.count; Y++) {
        const re = ul(
          Ae(z(y), { year: se.value(Y - 1), month: le.value(Y - 1) })
        );
        te(Y, re.month, re.year);
      }
  }, Fe = (y) => {
    if (ue(y.value) || !E(y.value, r.value, S.value.fixedStart ? 0 : 1))
      return t("invalid-date", y.value);
    a.value = Sn(z(y.value), r, t, S);
  }, Ye = (y, X) => {
    if (he(), S.value.autoRange)
      return oe(y, X);
    if (S.value.fixedStart || S.value.fixedEnd)
      return Fe(y);
    a.value[0] ? E(z(y.value), r.value) && !ue(y.value) ? Pe(z(y.value), z(a.value[0])) ? (a.value.unshift(z(y.value)), t("range-end", a.value[0])) : (a.value[1] = z(y.value), t("range-end", a.value[1])) : (e.autoApply && t("auto-apply-invalid", y.value), t("invalid-date", y.value)) : (a.value[0] = z(y.value), t("range-start", a.value[0]));
  }, ht = (y = !0) => e.enableSeconds ? Array.isArray(P.seconds) ? y ? P.seconds[0] : P.seconds[1] : P.seconds : 0, Yt = (y) => {
    a.value[y] = mt(
      a.value[y],
      P.hours[y],
      P.minutes[y],
      ht(y !== 1)
    );
  }, Nt = () => {
    var y, X;
    a.value[0] && a.value[1] && +((y = a.value) == null ? void 0 : y[0]) > +((X = a.value) == null ? void 0 : X[1]) && (a.value.reverse(), t("range-start", a.value[0]), t("range-end", a.value[1]));
  }, Ge = () => {
    a.value.length && (a.value[0] && !a.value[1] ? Yt(0) : (Yt(0), Yt(1), n()), Nt(), r.value = a.value.slice(), ua(a.value, t, e.autoApply, e.modelAuto));
  }, ia = (y, X = !1) => {
    if (W(y.value) || !y.current && e.hideOffsetDates)
      return t("invalid-date", y.value);
    if (!S.value.enabled)
      return ve(y);
    an(P.hours) && an(P.minutes) && !N.value.enabled && (Ye(y, X), Ge());
  }, da = (y, X) => {
    var Y;
    te(y, X.month, X.year), $.value.count && !$.value.solo && i(y), t("update-month-year", { instance: y, month: X.month, year: X.year }), l($.value.solo ? y : void 0);
    const ce = (Y = e.flow) != null && Y.length ? e.flow[e.flowStep] : void 0;
    !X.fromNav && (ce === at.month || ce === at.year) && n();
  }, Qt = (y, X) => {
    Tn({
      value: y,
      modelValue: r,
      range: S.value.enabled,
      timezone: X ? void 0 : D.value.timezone
    }), _(), e.multiCalendars && xe().then(() => V(!0));
  }, ca = () => {
    S.value.enabled ? r.value && Array.isArray(r.value) && r.value[0] ? r.value = Pe(z(), r.value[0]) ? [z(), r.value[0]] : [r.value[0], z()] : r.value = [z()] : r.value = z(), _();
  }, fa = () => {
    if (Array.isArray(r.value))
      if (N.value.enabled) {
        const y = va();
        r.value[r.value.length - 1] = R(y);
      } else
        r.value = r.value.map((y, X) => y && R(y, X));
    else
      r.value = R(r.value);
    t("time-update");
  }, va = () => Array.isArray(r.value) && r.value.length ? r.value[r.value.length - 1] : null;
  return {
    calendars: u,
    modelValue: r,
    month: se,
    year: le,
    time: P,
    disabledTimesConfig: A,
    validateTime: q,
    getCalendarDays: K,
    getMarker: m,
    handleScroll: o,
    handleSwipe: s,
    handleArrow: B,
    selectDate: ia,
    updateMonthYear: da,
    presetDate: Qt,
    selectCurrentDate: ca,
    updateTime: (y, X = !0, ce = !1) => {
      I(y, X, ce, fa);
    }
  };
}, Br = { key: 0 }, Yr = /* @__PURE__ */ Ee({
  __name: "DatePicker",
  props: {
    ...et
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = e, {
      calendars: f,
      month: r,
      year: u,
      modelValue: P,
      time: $,
      disabledTimesConfig: h,
      validateTime: S,
      getCalendarDays: D,
      getMarker: L,
      handleArrow: N,
      handleScroll: M,
      handleSwipe: W,
      selectDate: C,
      updateMonthYear: E,
      presetDate: I,
      selectCurrentDate: R,
      updateTime: F
    } = Or(a, n, Z, O), H = Tt(), { setHoverDate: q, getDayClassData: A, clearHoverDate: se } = Il(P, a), { defaultedMultiCalendars: le } = Re(a), te = x([]), _ = x([]), U = x(null), ee = Ke(H, "calendar"), V = Ke(H, "monthYear"), c = Ke(H, "timePicker"), b = (v) => {
      a.shadow || n("mount", v);
    };
    pt(
      f,
      () => {
        a.shadow || setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const g = G(() => (v) => D(r.value(v), u.value(v)).map((o) => ({
      ...o,
      days: o.days.map((B) => (B.marker = L(B), B.classData = A(B), B))
    })));
    function Z(v) {
      var o;
      v || v === 0 ? (o = _.value[v]) == null || o.triggerTransition(r.value(v), u.value(v)) : _.value.forEach((B, s) => B.triggerTransition(r.value(s), u.value(s)));
    }
    function O() {
      n("update-flow-step");
    }
    const p = (v, o = !1) => {
      C(v, o), a.spaceConfirm && n("select-date");
    };
    return t({
      clearHoverDate: se,
      presetDate: I,
      selectCurrentDate: R,
      toggleMonthPicker: (v, o, B = 0) => {
        var s;
        (s = te.value[B]) == null || s.toggleMonthPicker(v, o);
      },
      toggleYearPicker: (v, o, B = 0) => {
        var s;
        (s = te.value[B]) == null || s.toggleYearPicker(v, o);
      },
      toggleTimePicker: (v, o, B) => {
        var s;
        (s = U.value) == null || s.toggleTimePicker(v, o, B);
      },
      handleArrow: N,
      updateMonthYear: E,
      getSidebarProps: () => ({
        modelValue: P,
        month: r,
        year: u,
        time: $,
        updateTime: F,
        updateMonthYear: E,
        selectDate: C,
        presetDate: I
      })
    }), (v, o) => (T(), Q(ke, null, [
      Qe(sa, {
        "multi-calendars": d(le).count,
        collapse: v.collapse
      }, {
        default: ye(({ instance: B, index: s }) => [
          v.disableMonthYearSelect ? J("", !0) : (T(), De(wr, Ie({
            key: 0,
            ref: (m) => {
              m && (te.value[s] = m);
            },
            months: d(fn)(v.formatLocale, v.locale, v.monthNameFormat),
            years: d(Ea)(v.yearRange, v.locale, v.reverseYears),
            month: d(r)(B),
            year: d(u)(B),
            instance: B
          }, v.$props, {
            onMount: o[0] || (o[0] = (m) => b(d(At).header)),
            onResetFlow: o[1] || (o[1] = (m) => v.$emit("reset-flow")),
            onUpdateMonthYear: (m) => d(E)(B, m),
            onOverlayClosed: o[2] || (o[2] = (m) => v.$emit("focus-menu"))
          }), ze({ _: 2 }, [
            Se(d(V), (m, de) => ({
              name: m,
              fn: ye((ne) => [
                ie(v.$slots, m, Be(Ve(ne)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Qe(_r, Ie({
            ref: (m) => {
              m && (_.value[s] = m);
            },
            "mapped-dates": g.value(B),
            month: d(r)(B),
            year: d(u)(B),
            instance: B
          }, v.$props, {
            onSelectDate: (m) => d(C)(m, B !== 1),
            onHandleSpace: (m) => p(m, B !== 1),
            onSetHoverDate: o[3] || (o[3] = (m) => d(q)(m)),
            onHandleScroll: (m) => d(M)(m, B),
            onHandleSwipe: (m) => d(W)(m, B),
            onMount: o[4] || (o[4] = (m) => b(d(At).calendar)),
            onResetFlow: o[5] || (o[5] = (m) => v.$emit("reset-flow")),
            onTooltipOpen: o[6] || (o[6] = (m) => v.$emit("tooltip-open", m)),
            onTooltipClose: o[7] || (o[7] = (m) => v.$emit("tooltip-close", m))
          }), ze({ _: 2 }, [
            Se(d(ee), (m, de) => ({
              name: m,
              fn: ye((ne) => [
                ie(v.$slots, m, Be(Ve({ ...ne })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      v.enableTimePicker ? (T(), Q("div", Br, [
        v.$slots["time-picker"] ? ie(v.$slots, "time-picker", Be(Ie({ key: 0 }, { time: d($), updateTime: d(F) }))) : (T(), De(Pn, Ie({
          key: 1,
          ref_key: "timePickerRef",
          ref: U
        }, v.$props, {
          hours: d($).hours,
          minutes: d($).minutes,
          seconds: d($).seconds,
          "internal-model-value": v.internalModelValue,
          "disabled-times-config": d(h),
          "validate-time": d(S),
          onMount: o[8] || (o[8] = (B) => b(d(At).timePicker)),
          "onUpdate:hours": o[9] || (o[9] = (B) => d(F)(B)),
          "onUpdate:minutes": o[10] || (o[10] = (B) => d(F)(B, !1)),
          "onUpdate:seconds": o[11] || (o[11] = (B) => d(F)(B, !1, !0)),
          onResetFlow: o[12] || (o[12] = (B) => v.$emit("reset-flow")),
          onOverlayClosed: o[13] || (o[13] = (B) => v.$emit("time-picker-close")),
          onOverlayOpened: o[14] || (o[14] = (B) => v.$emit("time-picker-open", B)),
          onAmPmChange: o[15] || (o[15] = (B) => v.$emit("am-pm-change", B))
        }), ze({ _: 2 }, [
          Se(d(c), (B, s) => ({
            name: B,
            fn: ye((m) => [
              ie(v.$slots, B, Be(Ve(m)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : J("", !0)
    ], 64));
  }
}), Nr = (e, t) => {
  const l = x(), {
    defaultedMultiCalendars: n,
    defaultedConfig: a,
    defaultedHighlight: f,
    defaultedRange: r,
    propDates: u,
    defaultedFilters: P,
    defaultedMultiDates: $
  } = Re(e), { modelValue: h, year: S, month: D, calendars: L } = jt(e, t), { isDisabled: N } = yt(e), { selectYear: M, groupedYears: W, showYearPicker: C, isDisabled: E, toggleYearPicker: I, handleYearSelect: R, handleYear: F } = Rn({
    modelValue: h,
    multiCalendars: n,
    highlight: f,
    calendars: L,
    propDates: u,
    month: D,
    year: S,
    filters: P,
    props: e,
    emit: t
  }), H = (b, g) => [b, g].map((Z) => lt(Z, "MMMM", { locale: e.formatLocale })).join("-"), q = G(() => (b) => h.value ? Array.isArray(h.value) ? h.value.some((g) => ja(b, g)) : ja(h.value, b) : !1), A = (b) => {
    if (r.value.enabled) {
      if (Array.isArray(h.value)) {
        const g = we(b, h.value[0]) || we(b, h.value[1]);
        return la(h.value, l.value, b) && !g;
      }
      return !1;
    }
    return !1;
  }, se = (b, g) => b.quarter === Qa(g) && b.year === ge(g), le = (b) => typeof f.value == "function" ? f.value({ quarter: Qa(b), year: ge(b) }) : !!f.value.quarters.find((g) => se(g, b)), te = G(() => (b) => {
    const g = Ae(/* @__PURE__ */ new Date(), { year: S.value(b) });
    return Gn({
      start: Qn(g),
      end: qn(g)
    }).map((Z) => {
      const O = Xn(Z), p = Ga(Z), j = N(Z), ae = A(O), i = le(O);
      return {
        text: H(O, p),
        value: O,
        active: q.value(O),
        highlighted: i,
        disabled: j,
        isBetween: ae
      };
    });
  }), _ = (b) => {
    Ha(b, h, $.value.limit), t("auto-apply", !0);
  }, U = (b) => {
    h.value = Va(h, b, t), ua(h.value, t, e.autoApply, e.modelAuto);
  }, ee = (b) => {
    h.value = b, t("auto-apply");
  };
  return {
    defaultedConfig: a,
    defaultedMultiCalendars: n,
    groupedYears: W,
    year: S,
    isDisabled: E,
    quarters: te,
    showYearPicker: C,
    modelValue: h,
    setHoverDate: (b) => {
      l.value = b;
    },
    selectYear: M,
    selectQuarter: (b, g, Z) => {
      if (!Z)
        return L.value[g].month = be(Ga(b)), $.value.enabled ? _(b) : r.value.enabled ? U(b) : ee(b);
    },
    toggleYearPicker: I,
    handleYearSelect: R,
    handleYear: F
  };
}, Ir = { class: "dp--quarter-items" }, Er = ["disabled", "onClick", "onMouseover"], Fr = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...et
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end"
  ],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = e, f = Tt(), r = Ke(f, "yearMode"), {
      defaultedMultiCalendars: u,
      defaultedConfig: P,
      groupedYears: $,
      year: h,
      isDisabled: S,
      quarters: D,
      modelValue: L,
      showYearPicker: N,
      setHoverDate: M,
      selectQuarter: W,
      toggleYearPicker: C,
      handleYearSelect: E,
      handleYear: I
    } = Nr(a, n);
    return t({ getSidebarProps: () => ({
      modelValue: L,
      year: h,
      selectQuarter: W,
      handleYearSelect: E,
      handleYear: I
    }) }), (F, H) => (T(), De(sa, {
      "multi-calendars": d(u).count,
      collapse: F.collapse,
      stretch: ""
    }, {
      default: ye(({ instance: q }) => [
        pe("div", {
          class: "dp-quarter-picker-wrap",
          style: Je({ minHeight: `${d(P).modeHeight}px` })
        }, [
          pe("div", null, [
            Qe(An, Ie(F.$props, {
              items: d($)(q),
              instance: q,
              "show-year-picker": d(N)[q],
              year: d(h)(q),
              "is-disabled": (A) => d(S)(q, A),
              onHandleYear: (A) => d(I)(q, A),
              onYearSelect: (A) => d(E)(A, q),
              onToggleYearPicker: (A) => d(C)(q, A == null ? void 0 : A.flow, A == null ? void 0 : A.show)
            }), ze({ _: 2 }, [
              Se(d(r), (A, se) => ({
                name: A,
                fn: ye((le) => [
                  ie(F.$slots, A, Be(Ve(le)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          pe("div", Ir, [
            (T(!0), Q(ke, null, Se(d(D)(q), (A, se) => (T(), Q("div", { key: se }, [
              pe("button", {
                type: "button",
                class: Me(["dp--qr-btn", {
                  "dp--qr-btn-active": A.active,
                  "dp--qr-btn-between": A.isBetween,
                  "dp--qr-btn-disabled": A.disabled,
                  "dp--highlighted": A.highlighted
                }]),
                disabled: A.disabled,
                onClick: (le) => d(W)(A.value, q, A.disabled),
                onMouseover: (le) => d(M)(A.value)
              }, [
                F.$slots.quarter ? ie(F.$slots, "quarter", {
                  key: 0,
                  value: A.value,
                  text: A.text
                }) : (T(), Q(ke, { key: 1 }, [
                  dt(We(A.text), 1)
                ], 64))
              ], 42, Er)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Lr = ["id", "aria-label"], Wr = {
  key: 0,
  class: "dp--menu-load-container"
}, Hr = /* @__PURE__ */ pe("span", { class: "dp--menu-loader" }, null, -1), Vr = [
  Hr
], zr = {
  key: 0,
  class: "dp__sidebar_left"
}, Ur = ["onClick", "onKeydown"], Kr = {
  key: 2,
  class: "dp__sidebar_right"
}, jr = {
  key: 3,
  class: "dp__action_extra"
}, nn = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...oa,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = e, f = x(null), r = G(() => {
      const { openOnTop: w, ...K } = a;
      return {
        ...K,
        flowStep: A.value,
        collapse: a.collapse,
        noOverlayFocus: a.noOverlayFocus,
        menuWrapRef: f.value
      };
    }), { setMenuFocused: u, setShiftKey: P, control: $ } = Mn(), h = Tt(), { defaultedTextInput: S, defaultedInline: D, defaultedConfig: L } = Re(a), N = x(null), M = x(0), W = x(null), C = x(!1), E = x(null);
    Ue(() => {
      if (!a.shadow) {
        C.value = !0, I(), window.addEventListener("resize", I);
        const w = Ne(f);
        if (w && !S.value.enabled && !D.value.enabled && (u(!0), U()), w) {
          const K = (ve) => {
            L.value.allowPreventDefault && ve.preventDefault(), vt(ve, L.value, !0);
          };
          w.addEventListener("pointerdown", K), w.addEventListener("mousedown", K);
        }
      }
    }), aa(() => {
      window.removeEventListener("resize", I);
    });
    const I = () => {
      const w = Ne(W);
      w && (M.value = w.getBoundingClientRect().width);
    }, { arrowRight: R, arrowLeft: F, arrowDown: H, arrowUp: q } = gt(), { flowStep: A, updateFlowStep: se, childMount: le, resetFlow: te } = El(a, n, E), _ = G(() => a.monthPicker ? xl : a.yearPicker ? tr : a.timePicker ? hr : a.quarterPicker ? Fr : Yr), U = () => {
      const w = Ne(f);
      w && w.focus({ preventScroll: !0 });
    }, ee = G(() => {
      var w;
      return ((w = E.value) == null ? void 0 : w.getSidebarProps()) || {};
    }), V = () => {
      a.openOnTop && n("recalculate-position");
    }, c = Ke(h, "action"), b = G(() => a.monthPicker || a.yearPicker ? Ke(h, "monthYear") : a.timePicker ? Ke(h, "timePicker") : Ke(h, "shared")), g = G(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), Z = G(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly,
      "dp-menu-loading": a.loading
    })), O = G(
      () => ({
        dp__menu: !0,
        dp__menu_index: !D.value.enabled,
        dp__relative: D.value.enabled,
        [a.menuClassName]: !!a.menuClassName
      })
    ), p = (w) => {
      vt(w, L.value, !0);
    }, j = () => {
      a.escClose && n("close-picker");
    }, ae = (w) => {
      if (a.arrowNavigation) {
        if (w === "up")
          return q();
        if (w === "down")
          return H();
        if (w === "left")
          return F();
        if (w === "right")
          return R();
      } else
        w === "left" || w === "up" ? B("handleArrow", "left", 0, w === "up") : B("handleArrow", "right", 0, w === "down");
    }, i = (w) => {
      P(w.shiftKey), !a.disableMonthYearSelect && w.code === "Tab" && w.target.classList.contains("dp__menu") && $.value.shiftKeyInMenu && (w.preventDefault(), vt(w, L.value, !0), n("close-picker"));
    }, k = () => {
      U(), n("time-picker-close");
    }, v = (w) => {
      var K, ve, ue;
      (K = E.value) == null || K.toggleTimePicker(!1, !1), (ve = E.value) == null || ve.toggleMonthPicker(!1, !1, w), (ue = E.value) == null || ue.toggleYearPicker(!1, !1, w);
    }, o = (w, K = 0) => {
      var ve, ue, he;
      return w === "month" ? (ve = E.value) == null ? void 0 : ve.toggleMonthPicker(!1, !0, K) : w === "year" ? (ue = E.value) == null ? void 0 : ue.toggleYearPicker(!1, !0, K) : w === "time" ? (he = E.value) == null ? void 0 : he.toggleTimePicker(!0, !1) : v(K);
    }, B = (w, ...K) => {
      var ve, ue;
      (ve = E.value) != null && ve[w] && ((ue = E.value) == null || ue[w](...K));
    }, s = () => {
      B("selectCurrentDate");
    }, m = (w, K) => {
      B("presetDate", w, K);
    }, de = () => {
      B("clearHoverDate");
    };
    return t({
      updateMonthYear: (w, K) => {
        B("updateMonthYear", w, K);
      },
      switchView: o
    }), (w, K) => {
      var ve, ue, he;
      return T(), Q("div", {
        id: w.uid ? `dp-menu-${w.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: f,
        tabindex: "0",
        role: "dialog",
        "aria-label": (ve = w.ariaLabels) == null ? void 0 : ve.menu,
        class: Me(O.value),
        onMouseleave: de,
        onClick: p,
        onKeydown: [
          me(j, ["esc"]),
          K[18] || (K[18] = me($e((oe) => ae("left"), ["prevent"]), ["left"])),
          K[19] || (K[19] = me($e((oe) => ae("up"), ["prevent"]), ["up"])),
          K[20] || (K[20] = me($e((oe) => ae("down"), ["prevent"]), ["down"])),
          K[21] || (K[21] = me($e((oe) => ae("right"), ["prevent"]), ["right"])),
          i
        ]
      }, [
        (w.disabled || w.readonly) && d(D).enabled || w.loading ? (T(), Q("div", {
          key: 0,
          class: Me(Z.value)
        }, [
          w.loading ? (T(), Q("div", Wr, Vr)) : J("", !0)
        ], 2)) : J("", !0),
        !d(D).enabled && !w.teleportCenter ? (T(), Q("div", {
          key: 1,
          class: Me(g.value)
        }, null, 2)) : J("", !0),
        pe("div", {
          ref_key: "innerMenuRef",
          ref: W,
          class: Me({
            dp__menu_content_wrapper: ((ue = w.presetDates) == null ? void 0 : ue.length) || !!w.$slots["left-sidebar"] || !!w.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((he = w.presetDates) == null ? void 0 : he.length) || !!w.$slots["left-sidebar"] || !!w.$slots["right-sidebar"])
          }),
          style: Je({ "--dp-menu-width": `${M.value}px` })
        }, [
          w.$slots["left-sidebar"] ? (T(), Q("div", zr, [
            ie(w.$slots, "left-sidebar", Be(Ve(ee.value)))
          ])) : J("", !0),
          w.presetDates.length ? (T(), Q("div", {
            key: 1,
            class: Me({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (T(!0), Q(ke, null, Se(w.presetDates, (oe, He) => (T(), Q(ke, { key: He }, [
              oe.slot ? ie(w.$slots, oe.slot, {
                key: 0,
                presetDate: m,
                label: oe.label,
                value: oe.value
              }) : (T(), Q("button", {
                key: 1,
                type: "button",
                style: Je(oe.style || {}),
                class: Me(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: $e((Fe) => m(oe.value, oe.noTz), ["prevent"]),
                onKeydown: [
                  me($e((Fe) => m(oe.value, oe.noTz), ["prevent"]), ["enter"]),
                  me($e((Fe) => m(oe.value, oe.noTz), ["prevent"]), ["space"])
                ]
              }, We(oe.label), 47, Ur))
            ], 64))), 128))
          ], 2)) : J("", !0),
          pe("div", {
            ref_key: "calendarWrapperRef",
            ref: N,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (T(), De(na(_.value), Ie({
              ref_key: "dynCmpRef",
              ref: E
            }, r.value, {
              "flow-step": d(A),
              onMount: d(le),
              onUpdateFlowStep: d(se),
              onResetFlow: d(te),
              onFocusMenu: U,
              onSelectDate: K[0] || (K[0] = (oe) => w.$emit("select-date")),
              onDateUpdate: K[1] || (K[1] = (oe) => w.$emit("date-update", oe)),
              onTooltipOpen: K[2] || (K[2] = (oe) => w.$emit("tooltip-open", oe)),
              onTooltipClose: K[3] || (K[3] = (oe) => w.$emit("tooltip-close", oe)),
              onAutoApply: K[4] || (K[4] = (oe) => w.$emit("auto-apply", oe)),
              onRangeStart: K[5] || (K[5] = (oe) => w.$emit("range-start", oe)),
              onRangeEnd: K[6] || (K[6] = (oe) => w.$emit("range-end", oe)),
              onInvalidFixedRange: K[7] || (K[7] = (oe) => w.$emit("invalid-fixed-range", oe)),
              onTimeUpdate: K[8] || (K[8] = (oe) => w.$emit("time-update")),
              onAmPmChange: K[9] || (K[9] = (oe) => w.$emit("am-pm-change", oe)),
              onTimePickerOpen: K[10] || (K[10] = (oe) => w.$emit("time-picker-open", oe)),
              onTimePickerClose: k,
              onRecalculatePosition: V,
              onUpdateMonthYear: K[11] || (K[11] = (oe) => w.$emit("update-month-year", oe)),
              onAutoApplyInvalid: K[12] || (K[12] = (oe) => w.$emit("auto-apply-invalid", oe)),
              onInvalidDate: K[13] || (K[13] = (oe) => w.$emit("invalid-date", oe)),
              "onUpdate:internalModelValue": K[14] || (K[14] = (oe) => w.$emit("update:internal-model-value", oe))
            }), ze({ _: 2 }, [
              Se(b.value, (oe, He) => ({
                name: oe,
                fn: ye((Fe) => [
                  ie(w.$slots, oe, Be(Ve({ ...Fe })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          w.$slots["right-sidebar"] ? (T(), Q("div", Kr, [
            ie(w.$slots, "right-sidebar", Be(Ve(ee.value)))
          ])) : J("", !0),
          w.$slots["action-extra"] ? (T(), Q("div", jr, [
            w.$slots["action-extra"] ? ie(w.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: s
            }) : J("", !0)
          ])) : J("", !0)
        ], 6),
        !w.autoApply || d(L).keepActionRow ? (T(), De(Ul, Ie({
          key: 2,
          "menu-mount": C.value
        }, r.value, {
          "calendar-width": M.value,
          onClosePicker: K[15] || (K[15] = (oe) => w.$emit("close-picker")),
          onSelectDate: K[16] || (K[16] = (oe) => w.$emit("select-date")),
          onInvalidSelect: K[17] || (K[17] = (oe) => w.$emit("invalid-select")),
          onSelectNow: s
        }), ze({ _: 2 }, [
          Se(d(c), (oe, He) => ({
            name: oe,
            fn: ye((Fe) => [
              ie(w.$slots, oe, Be(Ve({ ...Fe })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : J("", !0)
      ], 42, Lr);
    };
  }
}), Gr = typeof window < "u" ? window : void 0, Ta = () => {
}, Qr = (e) => Nn() ? (In(e), !0) : !1, qr = (e, t, l, n) => {
  if (!e)
    return Ta;
  let a = Ta;
  const f = pt(
    () => d(e),
    (u) => {
      a(), u && (u.addEventListener(t, l, n), a = () => {
        u.removeEventListener(t, l, n), a = Ta;
      });
    },
    { immediate: !0, flush: "post" }
  ), r = () => {
    f(), a();
  };
  return Qr(r), r;
}, Xr = (e, t, l, n = {}) => {
  const { window: a = Gr, event: f = "pointerdown" } = n;
  return a ? qr(a, f, (u) => {
    const P = Ne(e), $ = Ne(t);
    !P || !$ || P === u.target || u.composedPath().includes(P) || u.composedPath().includes($) || l(u);
  }, { passive: !0 }) : void 0;
}, Jr = /* @__PURE__ */ Ee({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePickerModified",
  props: {
    ...oa
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: l }) {
    const n = l, a = e, f = Tt(), r = x(!1), u = Ft(a, "modelValue"), P = Ft(a, "timezone"), $ = x(null), h = x(null), S = x(null), D = x(!1), L = x(null), N = x(!1), M = x(!1), W = x(!1), { setMenuFocused: C, setShiftKey: E } = Mn(), { clearArrowNav: I } = gt(), { validateDate: R, isValidTime: F } = yt(a), {
      defaultedTransitions: H,
      defaultedTextInput: q,
      defaultedInline: A,
      defaultedConfig: se,
      defaultedRange: le,
      defaultedMultiDates: te
    } = Re(a), { menuTransition: _, showTransition: U } = Kt(H);
    Ue(() => {
      i(a.modelValue), xe().then(() => {
        if (!A.value.enabled) {
          const Y = O(L.value);
          Y == null || Y.addEventListener("scroll", w), window == null || window.addEventListener("resize", K);
        }
      }), A.value.enabled && (r.value = !0), window == null || window.addEventListener("keyup", ve), window == null || window.addEventListener("keydown", ue);
    }), aa(() => {
      if (!A.value.enabled) {
        const Y = O(L.value);
        Y == null || Y.removeEventListener("scroll", w), window == null || window.removeEventListener("resize", K);
      }
      window == null || window.removeEventListener("keyup", ve), window == null || window.removeEventListener("keydown", ue);
    });
    const ee = Ke(f, "all", a.presetDates), V = Ke(f, "input");
    pt(
      [u, P],
      () => {
        i(u.value);
      },
      { deep: !0 }
    );
    const { openOnTop: c, menuStyle: b, xCorrect: g, setMenuPosition: Z, getScrollableParent: O, shadowRender: p } = Bl({
      menuRef: $,
      menuRefInner: h,
      inputRef: S,
      pickerWrapperRef: L,
      inline: A,
      emit: n,
      props: a,
      slots: f
    }), {
      inputValue: j,
      internalModelValue: ae,
      parseExternalModelValue: i,
      emitModelValue: k,
      formatInputValue: v,
      checkBeforeEmit: o
    } = _l(n, a, D), B = G(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: A.value.enabled,
        "dp--flex-display-collapsed": W.value,
        dp__flex_display_with_input: A.value.input
      })
    ), s = G(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), m = G(() => ({
      to: typeof a.teleport == "boolean" ? "body" : a.teleport,
      disabled: !a.teleport || A.value.enabled
    })), de = G(() => ({ class: "dp__outer_menu_wrap" })), ne = G(() => A.value.enabled && (a.timePicker || a.monthPicker || a.yearPicker || a.quarterPicker)), w = () => {
      r.value && (se.value.closeOnScroll ? Ge() : Z());
    }, K = () => {
      var re;
      r.value && Z();
      const Y = (re = h.value) == null ? void 0 : re.$el.getBoundingClientRect().width;
      W.value = document.body.offsetWidth <= Y;
    }, ve = (Y) => {
      Y.key === "Tab" && !A.value.enabled && !a.teleport && se.value.tabOutClosesMenu && (L.value.contains(document.activeElement) || Ge()), M.value = Y.shiftKey;
    }, ue = (Y) => {
      M.value = Y.shiftKey;
    }, he = () => {
      !a.disabled && !a.readonly && (p(nn, a), Z(!1), r.value = !0, r.value && n("open"), r.value || Nt(), i(a.modelValue));
    }, oe = () => {
      var Y;
      j.value = "", Nt(), (Y = S.value) == null || Y.setParsedDate(null), n("update:model-value", null), n("update:model-timezone-value", null), n("cleared"), se.value.closeOnClearValue && Ge();
    }, He = () => {
      const Y = ae.value;
      return !Y || !Array.isArray(Y) && R(Y) ? !0 : Array.isArray(Y) ? te.value.enabled || Y.length === 2 && R(Y[0]) && R(Y[1]) ? !0 : le.value.partialRange && !a.timePicker ? R(Y[0]) : !1 : !1;
    }, Fe = () => {
      o() && He() ? (k(), Ge()) : n("invalid-select", ae.value);
    }, Ye = (Y) => {
      ht(), k(), se.value.closeOnAutoApply && !Y && Ge();
    }, ht = () => {
      S.value && q.value.enabled && S.value.setParsedDate(ae.value);
    }, Yt = (Y = !1) => {
      a.autoApply && F(ae.value) && He() && (le.value.enabled && Array.isArray(ae.value) ? (le.value.partialRange || ae.value.length === 2) && Ye(Y) : Ye(Y));
    }, Nt = () => {
      q.value.enabled || (ae.value = null);
    }, Ge = () => {
      A.value.enabled || (r.value && (r.value = !1, g.value = !1, C(!1), E(!1), I(), n("closed"), j.value && i(u.value)), Nt(), n("blur"));
    }, ia = (Y, re, fe = !1) => {
      if (!Y) {
        ae.value = null;
        return;
      }
      const ot = Array.isArray(Y) ? !Y.some((bt) => !R(bt)) : R(Y), tt = F(Y);
      ot && tt && (ae.value = Y, re && (N.value = fe, Fe(), n("text-submit")));
    }, da = () => {
      a.autoApply && F(ae.value) && k(), ht();
    }, Qt = () => r.value ? Ge() : he(), ca = (Y) => {
      ae.value = Y;
    }, fa = () => {
      q.value.enabled && (D.value = !0, v()), n("focus");
    }, va = () => {
      if (q.value.enabled && (D.value = !1, i(a.modelValue), N.value)) {
        const Y = nl(L.value, M.value);
        Y == null || Y.focus();
      }
      n("blur");
    }, za = (Y) => {
      h.value && h.value.updateMonthYear(0, {
        month: Xa(Y.month),
        year: Xa(Y.year)
      });
    }, y = (Y) => {
      i(Y ?? a.modelValue);
    }, X = (Y, re) => {
      var fe;
      (fe = h.value) == null || fe.switchView(Y, re);
    }, ce = (Y) => se.value.onClickOutside ? se.value.onClickOutside(Y) : Ge();
    return Xr($, S, () => ce(He)), t({
      closeMenu: Ge,
      selectDate: Fe,
      clearValue: oe,
      openMenu: he,
      onScroll: w,
      formatInputValue: v,
      // exposed for testing purposes
      updateInternalModelValue: ca,
      // modify internal modelValue
      setMonthYear: za,
      parseModel: y,
      switchView: X,
      toggleMenu: Qt
    }), (Y, re) => (T(), Q("div", {
      ref_key: "pickerWrapperRef",
      ref: L,
      class: Me(B.value),
      "data-datepicker-instance": ""
    }, [
      Qe(Hl, Ie({
        ref_key: "inputRef",
        ref: S,
        "input-value": d(j),
        "onUpdate:inputValue": re[0] || (re[0] = (fe) => Ka(j) ? j.value = fe : null),
        "is-menu-open": r.value
      }, Y.$props, {
        onClear: oe,
        onOpen: he,
        onSetInputDate: ia,
        onSetEmptyDate: d(k),
        onSelectDate: Fe,
        onToggle: Qt,
        onClose: Ge,
        onFocus: fa,
        onBlur: va,
        onRealBlur: re[1] || (re[1] = (fe) => D.value = !1)
      }), ze({ _: 2 }, [
        Se(d(V), (fe, ot) => ({
          name: fe,
          fn: ye((tt) => [
            ie(Y.$slots, fe, Be(Ve(tt)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (T(), De(na(Y.teleport ? En : "div"), Be(Ve(m.value)), {
        default: ye(() => [
          Qe(Bt, {
            name: d(_)(d(c)),
            css: d(U) && !d(A).enabled
          }, {
            default: ye(() => [
              r.value ? (T(), Q("div", Ie({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: $
              }, de.value, {
                class: { "dp--menu-wrapper": !d(A).enabled },
                style: d(A).enabled ? void 0 : d(b)
              }), [
                Qe(nn, Ie({
                  ref_key: "dpMenuRef",
                  ref: h
                }, Y.$props, {
                  "internal-model-value": d(ae),
                  "onUpdate:internalModelValue": re[2] || (re[2] = (fe) => Ka(ae) ? ae.value = fe : null),
                  class: { [s.value]: !0, "dp--menu-wrapper": Y.teleport },
                  "open-on-top": d(c),
                  "no-overlay-focus": ne.value,
                  collapse: W.value,
                  onClosePicker: Ge,
                  onSelectDate: Fe,
                  onAutoApply: Yt,
                  onTimeUpdate: da,
                  onFlowStep: re[3] || (re[3] = (fe) => Y.$emit("flow-step", fe)),
                  onUpdateMonthYear: re[4] || (re[4] = (fe) => Y.$emit("update-month-year", fe)),
                  onInvalidSelect: re[5] || (re[5] = (fe) => Y.$emit("invalid-select", d(ae))),
                  onAutoApplyInvalid: re[6] || (re[6] = (fe) => Y.$emit("invalid-select", fe)),
                  onInvalidFixedRange: re[7] || (re[7] = (fe) => Y.$emit("invalid-fixed-range", fe)),
                  onRecalculatePosition: d(Z),
                  onTooltipOpen: re[8] || (re[8] = (fe) => Y.$emit("tooltip-open", fe)),
                  onTooltipClose: re[9] || (re[9] = (fe) => Y.$emit("tooltip-close", fe)),
                  onTimePickerOpen: re[10] || (re[10] = (fe) => Y.$emit("time-picker-open", fe)),
                  onTimePickerClose: re[11] || (re[11] = (fe) => Y.$emit("time-picker-close", fe)),
                  onAmPmChange: re[12] || (re[12] = (fe) => Y.$emit("am-pm-change", fe)),
                  onRangeStart: re[13] || (re[13] = (fe) => Y.$emit("range-start", fe)),
                  onRangeEnd: re[14] || (re[14] = (fe) => Y.$emit("range-end", fe)),
                  onDateUpdate: re[15] || (re[15] = (fe) => Y.$emit("date-update", fe)),
                  onInvalidDate: re[16] || (re[16] = (fe) => Y.$emit("invalid-date", fe))
                }), ze({ _: 2 }, [
                  Se(d(ee), (fe, ot) => ({
                    name: fe,
                    fn: ye((tt) => [
                      ie(Y.$slots, fe, Be(Ve({ ...tt })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "onRecalculatePosition"])
              ], 16)) : J("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), _n = /* @__PURE__ */ (() => {
  const e = Jr;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _n
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Zr).forEach(([e, t]) => {
  e !== "default" && (_n[e] = t);
});
export {
  _n as default
};
