(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const NAV = [
    {
        id: 'hero',
        href: '#hero',
        label: 'Home'
    },
    {
        id: 'services',
        href: '#services',
        label: 'Services'
    },
    {
        id: 'about',
        href: '#about',
        label: 'About'
    },
    {
        id: 'stack',
        href: '#stack',
        label: 'Tech Stack'
    },
    {
        id: 'work',
        href: '#work',
        label: 'Projects'
    },
    {
        id: 'contact',
        href: '#contact',
        label: 'Contact'
    }
];
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "1ce757cdca1012cec752e8d366a61e110932cb775d7cdedd43b2dc5b203edefe") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1ce757cdca1012cec752e8d366a61e110932cb775d7cdedd43b2dc5b203edefe";
    }
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hero");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = NAV.map(_HeaderNAVMap);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const ids = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Header[useEffect()]": ()=>{
                const sections = ids.map(_HeaderUseEffectIdsMap).filter(Boolean);
                if (!sections.length) {
                    return;
                }
                const io = new IntersectionObserver((entries)=>{
                    const topMost = entries.filter(_HeaderUseEffectAnonymousEntriesFilter).sort(_HeaderUseEffectAnonymousAnonymous)[0];
                    if (topMost?.target?.id) {
                        setActive(topMost.target.id);
                    }
                }, {
                    rootMargin: "-20% 0px -60% 0px",
                    threshold: [
                        0.15,
                        0.35,
                        0.65
                    ]
                });
                sections.forEach({
                    "Header[useEffect() > sections.forEach()]": (s)=>io.observe(s)
                }["Header[useEffect() > sections.forEach()]"]);
                return ()=>io.disconnect();
            }
        })["Header[useEffect()]"];
        t2 = [
            ids
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Header[go]": (e_0, href)=>{
                if (!href.startsWith("#")) {
                    return;
                }
                e_0.preventDefault();
                const el = document.querySelector(href);
                if (el) {
                    el.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
                setOpen(false);
            }
        })["Header[go]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const go = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    "aria-label": "Go to home page",
                    className: "flex items-center gap-2 font-semibold tracking-tight hover:text-cyan-300 transition",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 106,
                            columnNumber: 191
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Cybernith"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 106,
                            columnNumber: 305
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 106,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white/50 hidden sm:inline",
                    children: "— Full-Stack Developer"
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 106,
                    columnNumber: 334
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== active) {
        t5 = NAV.map({
            "Header[NAV.map()]": (item)=>{
                const isActive = active === item.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: item.href,
                    onClick: {
                        "Header[NAV.map() > <a>.onClick]": (e_1)=>go(e_1, item.href)
                    }["Header[NAV.map() > <a>.onClick]"],
                    className: `relative py-1 hover:text-white transition-colors ${isActive ? "text-white" : ""}`,
                    "aria-current": isActive ? "page" : undefined,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `relative z-10 ${isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300" : ""}`,
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 118,
                            columnNumber: 187
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            className: `absolute left-0 right-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                  ${isActive ? "opacity-100 scale-100 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400" : "opacity-0 scale-50"}`
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 118,
                            columnNumber: 352
                        }, this),
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            className: "absolute inset-x-0 -bottom-1 h-[6px] blur-[6px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-30"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 119,
                            columnNumber: 158
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 116,
                    columnNumber: 16
                }, this);
            }
        }["Header[NAV.map()]"]);
        $[6] = active;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden md:flex items-center gap-6 text-sm text-white/80",
            "aria-label": "Main navigation",
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/sorooshmorshedi.pdf",
            download: true,
            className: "hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-medium text-sm hover:shadow-[0_0_22px_rgba(168,85,247,.45)] transition",
            "aria-label": "Download resume PDF",
            children: "Resume"
        }, void 0, false, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "Header[<button>.onClick]": ()=>setOpen(_HeaderButtonOnClickSetOpen)
        })["Header[<button>.onClick]"];
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== open) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: t8,
                    className: "md:hidden ml-2 p-2 text-white/80 hover:text-white focus:outline-none",
                    "aria-label": "Toggle navigation menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 153,
                            columnNumber: 329
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M4 6h16M4 12h16M4 18h16"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 153,
                            columnNumber: 426
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 153,
                        columnNumber: 207
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 153,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[12] = open;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t6 || $[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container h-16 flex items-center justify-between",
            children: [
                t4,
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[14] = t6;
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== active || $[18] !== open) {
        t11 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl px-6 pb-4 text-white/80 text-sm",
            "aria-label": "Mobile navigation",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-col gap-3 pt-4",
                children: NAV.map({
                    "Header[NAV.map()]": (item_0)=>{
                        const isActive_0 = active === item_0.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item_0.href,
                                onClick: {
                                    "Header[NAV.map() > <a>.onClick]": (e_2)=>go(e_2, item_0.href)
                                }["Header[NAV.map() > <a>.onClick]"],
                                className: `block py-1 hover:text-white ${isActive_0 ? "text-white" : ""}`,
                                "aria-current": isActive_0 ? "page" : undefined,
                                children: item_0.label
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 173,
                                columnNumber: 40
                            }, this)
                        }, item_0.id, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 173,
                            columnNumber: 20
                        }, this);
                    }
                }["Header[NAV.map()]"])
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 170,
                columnNumber: 163
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 170,
            columnNumber: 19
        }, this);
        $[17] = active;
        $[18] = open;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t10 || $[21] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-[0_0_24px_rgba(0,0,0,0.25)]",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t11;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    return t12;
}
_s(Header, "Gx0pJFbXdNt1PL7FK/iXMOb8dB8=");
_c = Header;
function _HeaderButtonOnClickSetOpen(v) {
    return !v;
}
function _HeaderUseEffectAnonymousAnonymous(a, b) {
    return b.intersectionRatio - a.intersectionRatio;
}
function _HeaderUseEffectAnonymousEntriesFilter(e) {
    return e.isIntersecting;
}
function _HeaderUseEffectIdsMap(id) {
    return document.getElementById(id);
}
function _HeaderNAVMap(n) {
    return n.id;
}
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Services() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "66c9922f7eb7af4594d6b6d2a5720021bb61d94e355be99d7231c8af1d9527b2") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "66c9922f7eb7af4594d6b6d2a5720021bb61d94e355be99d7231c8af1d9527b2";
    }
    const services = [
        {
            id: "corporate-ecommerce-websites",
            title: "Corporate & E-commerce Website Design",
            desc: "High-end corporate and online store websites with clean UX, SEO-ready structure, and fast performance."
        },
        {
            id: "software-design-development",
            title: "Software Design & Development",
            desc: "End-to-end architecture and engineering \u2014 from clean design to production-grade implementation."
        },
        {
            id: "debugging-testing-quality",
            title: "Debugging, Testing & Quality",
            desc: "Systematic debugging, unit/integration testing (Pytest/Jest), CI pipelines, and release hardening."
        },
        {
            id: "ecommerce-architecture",
            title: "E-commerce Architecture",
            desc: "Modular, scalable, and observable architectures designed for high traffic and reliability."
        },
        {
            id: "backend-apis",
            title: "Backend APIs (Django/DRF, FastAPI, Go)",
            desc: "Secure REST & GraphQL APIs, versioning, authentication (JWT/OAuth2), performance tuned."
        },
        {
            id: "frontend-experience",
            title: "Frontend Experience (Vue, Nuxt, React, Next)",
            desc: "Modern SPAs/SSRs with accessible UI, mobile-first performance, and strong SEO."
        },
        {
            id: "databases",
            title: "Databases & Data Layer",
            desc: "PostgreSQL, MongoDB, Redis \u2014 schema design, indexing, query optimization, and caching."
        },
        {
            id: "devops-cicd",
            title: "DevOps & CI/CD",
            desc: "Docker, Compose, Dokku, GitHub Actions, Nginx; automated deploys and observability."
        },
        {
            id: "cloud-infra",
            title: "Cloud & Infrastructure",
            desc: "AWS, DigitalOcean, Hetzner \u2014 hardening (SSL/TLS/Firewall), backups, monitoring."
        },
        {
            id: "microservices",
            title: "Microservices & Event-Driven Systems",
            desc: "Celery/Redis/RabbitMQ, distributed systems, HA/scale, audit logging, wallet flows."
        },
        {
            id: "web3-integrations",
            title: "Web3 & Secure Integrations",
            desc: "Crypto/Web3 backends, secure financial operations and integrations."
        }
    ];
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Professional Services",
        itemListElement: services.map(_ServicesServicesMap)
    };
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Services[useEffect()]": ()=>{
                const el = trackRef.current;
                if (!el) {
                    return;
                }
                let idx = 0;
                const tick = {
                    "Services[useEffect() > tick]": ()=>{
                        const cards = Array.from(el.querySelectorAll("li"));
                        if (!cards.length) {
                            return;
                        }
                        idx = (idx + 1) % cards.length;
                        const target = cards[idx];
                        const left = target.offsetLeft - (el.offsetLeft || 0);
                        el.scrollTo({
                            left,
                            behavior: "smooth"
                        });
                    }
                }["Services[useEffect() > tick]"];
                const t = setInterval(tick, 2000);
                return ()=>clearInterval(t);
            }
        })["Services[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = "application/ld+json";
    const t3 = JSON.stringify(jsonLd);
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
            type: t2,
            dangerouslySetInnerHTML: {
                __html: t3
            }
        }, void 0, false, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "services-title",
                    className: "text-3xl md:text-4xl font-extrabold tracking-tight inline-block relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative z-10 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",
                            children: "Core Services"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 116,
                            columnNumber: 154
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            className: "absolute -inset-x-10 -bottom-2 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-full blur-[1px] opacity-70"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 116,
                            columnNumber: 297
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 116,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/70 text-sm md:text-base mt-3 max-w-xl mx-auto",
                    children: "Strategic engineering expertise for scalable, secure, and elegant software - crafted by Soroosh Morshedi."
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 116,
                    columnNumber: 476
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            scrollbarWidth: "none"
        };
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n                [data-slider]::-webkit-scrollbar { display: none; width: 0; height: 0; }\n            "
        }, void 0, false, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "container py-16 md:py-24",
        "aria-labelledby": "services-title",
        children: [
            t4,
            t5,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                ref: trackRef,
                "data-slider": true,
                className: "flex gap-6 overflow-x-auto snap-x snap-mandatory [-webkit-overflow-scrolling:touch] scroll-px-4 md:scroll-px-6 pb-2",
                style: t6,
                "aria-label": "Professional services list",
                children: services.map(_ServicesServicesMap2)
            }, void 0, false, {
                fileName: "[project]/components/Services.tsx",
                lineNumber: 137,
                columnNumber: 111
            }, this),
            t7
        ]
    }, void 0, true, {
        fileName: "[project]/components/Services.tsx",
        lineNumber: 137,
        columnNumber: 10
    }, this);
}
_s(Services, "25ZDZIuc2yxXMsah1kdnpaf+Fmo=");
_c = Services;
function _ServicesServicesMap2(s_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "snap-start shrink-0 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[24%]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "glass relative p-6 md:p-7 rounded-2xl overflow-hidden h-full transition hover:bg-white/10 hover:shadow-[0_0_36px_rgba(139,92,246,0.25)] border border-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": true,
                    className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-t-2xl"
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 140,
                    columnNumber: 296
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg md:text-xl font-semibold text-white leading-snug",
                        children: s_0.title
                    }, void 0, false, {
                        fileName: "[project]/components/Services.tsx",
                        lineNumber: 140,
                        columnNumber: 472
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 140,
                    columnNumber: 447
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/80 text-sm leading-relaxed",
                    children: s_0.desc
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 140,
                    columnNumber: 570
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 140,
            columnNumber: 116
        }, this)
    }, s_0.id, false, {
        fileName: "[project]/components/Services.tsx",
        lineNumber: 140,
        columnNumber: 10
    }, this);
}
function _ServicesServicesMap(s, i) {
    return {
        "@type": "Service",
        position: i + 1,
        name: s.title,
        description: s.desc,
        areaServed: "Global / Remote",
        serviceType: s.title
    };
}
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_d0c5c4eb._.js.map