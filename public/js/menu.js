/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(function(a, b) {
    function G(a) {
        var b = F[a] = {};
        return p.each(a.split(s), function(a, c) {
                b[c] = !0
            }
        ),
            b
    }
    function J(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(I, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null  : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d
                } catch (f) {}
                p.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }
    function K(a) {
        var b;
        for (b in a) {
            if (b === "data" && p.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }
    function ba() {
        return !1
    }
    function bb() {
        return !0
    }
    function bh(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function bi(a, b) {
        do {
            a = a[b]
        } while (a && a.nodeType !== 1);return a
    }
    function bj(a, b, c) {
        b = b || 0;
        if (p.isFunction(b)) {
            return p.grep(a, function(a, d) {
                    var e = !!b.call(a, d, a);
                    return e === c
                }
            )
        }
        if (b.nodeType) {
            return p.grep(a, function(a, d) {
                    return a === b === c
                }
            )
        }
        if (typeof b == "string") {
            var d = p.grep(a, function(a) {
                    return a.nodeType === 1
                }
            );
            if (be.test(b)) {
                return p.filter(b, d, !c)
            }
            b = p.filter(b, d)
        }
        return p.grep(a, function(a, d) {
                return p.inArray(a, b) >= 0 === c
            }
        )
    }
    function bk(a) {
        var b = bl.split("|")
            , c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }
    function bC(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }
    function bD(a, b) {
        if (b.nodeType !== 1 || !p.hasData(a)) {
            return
        }
        var c, d, e, f = p._data(a), g = p._data(b, f), h = f.events;
        if (h) {
            delete g.handle,
                g.events = {};
            for (c in h) {
                for (d = 0,
                         e = h[c].length; d < e; d++) {
                    p.event.add(b, c, h[c][d])
                }
            }
        }
        g.data && (g.data = p.extend({}, g.data))
    }
    function bE(a, b) {
        var c;
        if (b.nodeType !== 1) {
            return
        }
        b.clearAttributes && b.clearAttributes(),
            b.mergeAttributes && b.mergeAttributes(a),
            c = b.nodeName.toLowerCase(),
            c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML),
                p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
                b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text),
            b.removeAttribute(p.expando)
    }
    function bF(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bG(a) {
        bv.test(a.type) && (a.defaultChecked = a.checked)
    }
    function bX(a, b) {
        if (b in a) {
            return b
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1)
            , d = b
            , e = bV.length;
        while (e--) {
            b = bV[e] + c;
            if (b in a) {
                return b
            }
        }
        return d
    }
    function bY(a, b) {
        return a = b || a,
            p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    }
    function bZ(a, b) {
        var c, d, e = [], f = 0, g = a.length;
        for (; f < g; f++) {
            c = a[f];
            if (!c.style) {
                continue
            }
            e[f] = p._data(c, "olddisplay"),
                b ? (!e[f] && c.style.display === "none" && (c.style.display = ""),
                    c.style.display === "" && bY(c) && (e[f] = p._data(c, "olddisplay", cb(c.nodeName)))) : (d = bH(c, "display"),
                    !e[f] && d !== "none" && p._data(c, "olddisplay", d))
        }
        for (f = 0; f < g; f++) {
            c = a[f];
            if (!c.style) {
                continue
            }
            if (!b || c.style.display === "none" || c.style.display === "") {
                c.style.display = b ? e[f] || "" : "none"
            }
        }
        return a
    }
    function b$(a, b, c) {
        var d = bO.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function b_(a, b, c, d) {
        var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0
            , f = 0;
        for (; e < 4; e += 2) {
            c === "margin" && (f += p.css(a, c + bU[e], !0)),
                d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bU[e])) || 0),
                    c !== "margin" && (f -= parseFloat(bH(a, "border" + bU[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bU[e])) || 0,
                    c !== "padding" && (f += parseFloat(bH(a, "border" + bU[e] + "Width")) || 0))
        }
        return f
    }
    function ca(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight
            , e = !0
            , f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
        if (d <= 0) {
            d = bH(a, b);
            if (d < 0 || d == null ) {
                d = a.style[b]
            }
            if (bP.test(d)) {
                return d
            }
            e = f && (p.support.boxSizingReliable || d === a.style[b]),
                d = parseFloat(d) || 0
        }
        return d + b_(a, b, c || (f ? "border" : "content"), e) + "px"
    }
    function cb(a) {
        if (bR[a]) {
            return bR[a]
        }
        var b = p("<" + a + ">").appendTo(e.body)
            , c = b.css("display");
        b.remove();
        if (c === "none" || c === "") {
            bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!bJ || !bI.createElement) {
                bJ = (bI.contentWindow || bI.contentDocument).document,
                    bJ.write("<!doctype html><html><body>"),
                    bJ.close()
            }
            b = bJ.body.appendChild(bJ.createElement(a)),
                c = bH(b, "display"),
                e.body.removeChild(bI)
        }
        return bR[a] = c,
            c
    }
    function ch(a, b, c, d) {
        var e;
        if (p.isArray(b)) {
            p.each(b, function(b, e) {
                    c || cd.test(a) ? d(a, e) : ch(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
                }
            )
        } else {
            if (!c && p.type(b) === "object") {
                for (e in b) {
                    ch(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }
    function cy(a) {
        return function(b, c) {
            typeof b != "string" && (c = b,
                b = "*");
            var d, e, f, g = b.toLowerCase().split(s), h = 0, i = g.length;
            if (p.isFunction(c)) {
                for (; h < i; h++) {
                    d = g[h],
                        f = /^\+/.test(d),
                        f && (d = d.substr(1) || "*"),
                        e = a[d] = a[d] || [],
                        e[f ? "unshift" : "push"](c)
                }
            }
        }
    }
    function cz(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
            g = g || {},
            g[f] = !0;
        var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === cu;
        for (; j < k && (l || !h); j++) {
            h = i[j](c, d, e),
                typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h),
                    h = cz(a, c, d, e, h, g)))
        }
        return (l || !h) && !g["*"] && (h = cz(a, c, d, e, "*", g)),
            h
    }
    function cA(a, c) {
        var d, e, f = p.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && p.extend(!0, a, e)
    }
    function cB(a, c, d) {
        var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
        for (f in k) {
            f in d && (c[k[f]] = d[f])
        }
        while (j[0] === "*") {
            j.shift(),
                e === b && (e = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (e) {
            for (f in i) {
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
            }
        }
        if (j[0] in d) {
            g = j[0]
        } else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g) {
            return g !== j[0] && j.unshift(g),
                d[g]
        }
    }
    function cC(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(), h = g[0], i = {}, j = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1]) {
            for (c in a.converters) {
                i[c.toLowerCase()] = a.converters[c]
            }
        }
        for (; e = g[++j]; ) {
            if (e !== "*") {
                if (h !== "*" && h !== e) {
                    c = i[h + " " + e] || i["* " + e];
                    if (!c) {
                        for (d in i) {
                            f = d.split(" ");
                            if (f[1] === e) {
                                c = i[h + " " + f[0]] || i["* " + f[0]];
                                if (c) {
                                    c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0],
                                        g.splice(j--, 0, e));
                                    break
                                }
                            }
                        }
                    }
                    if (c !== !0) {
                        if (c && a["throws"]) {
                            b = c(b)
                        } else {
                            try {
                                b = c(b)
                            } catch (k) {
                                return {
                                    state: "parsererror",
                                    error: c ? k : "No conversion from " + h + " to " + e
                                }
                            }
                        }
                    }
                }
                h = e
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    function cK() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function cL() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function cT() {
        return setTimeout(function() {
                cM = b
            }
            , 0),
            cM = p.now()
    }
    function cU(a, b) {
        p.each(b, function(b, c) {
                var d = (cS[b] || []).concat(cS["*"])
                    , e = 0
                    , f = d.length;
                for (; e < f; e++) {
                    if (d[e].call(a, b, c)) {
                        return
                    }
                }
            }
        )
    }
    function cV(a, b, c) {
        var d, e = 0, f = 0, g = cR.length, h = p.Deferred().always(function() {
                    delete i.elem
                }
            ), i = function() {
                var b = cM || cT()
                    , c = Math.max(0, j.startTime + j.duration - b)
                    , d = 1 - (c / j.duration || 0)
                    , e = 0
                    , f = j.tweens.length;
                for (; e < f; e++) {
                    j.tweens[e].run(d)
                }
                return h.notifyWith(a, [j, d, c]),
                    d < 1 && f ? c : (h.resolveWith(a, [j]),
                        !1)
            }
            , j = h.promise({
                elem: a,
                props: p.extend({}, b),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: cM || cT(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c, d) {
                    var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(e),
                        e
                },
                stop: function(b) {
                    var c = 0
                        , d = b ? j.tweens.length : 0;
                    for (; c < d; c++) {
                        j.tweens[c].run(1)
                    }
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                        this
                }
            }), k = j.props;
        cW(k, j.opts.specialEasing);
        for (; e < g; e++) {
            d = cR[e].call(j, a, k, j.opts);
            if (d) {
                return d
            }
        }
        return cU(j, k),
            p.isFunction(j.opts.start) && j.opts.start.call(a, j),
            p.fx.timer(p.extend(i, {
                anim: j,
                queue: j.opts.queue,
                elem: a
            })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function cW(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = p.camelCase(c),
                e = b[d],
                f = a[c],
                p.isArray(f) && (e = f[1],
                    f = a[c] = f[0]),
                c !== d && (a[d] = f,
                    delete a[c]),
                g = p.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f),
                    delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c],
                        b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }
    function cX(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = a.style, n = {}, o = [], q = a.nodeType && bY(a);
        c.queue || (j = p._queueHooks(a, "fx"),
            j.unqueued == null  && (j.unqueued = 0,
                k = j.empty.fire,
                j.empty.fire = function() {
                    j.unqueued || k()
                }
                ),
            j.unqueued++,
            l.always(function() {
                    l.always(function() {
                            j.unqueued--,
                                p.queue(a, "fx").length || j.empty.fire()
                        }
                    )
                }
            )),
            a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY],
                p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cb(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)),
            c.overflow && (m.overflow = "hidden",
                p.support.shrinkWrapBlocks || l.done(function() {
                        m.overflow = c.overflow[0],
                            m.overflowX = c.overflow[1],
                            m.overflowY = c.overflow[2]
                    }
                ));
        for (d in b) {
            f = b[d];
            if (cO.exec(f)) {
                delete b[d];
                if (f === (q ? "hide" : "show")) {
                    continue
                }
                o.push(d)
            }
        }
        g = o.length;
        if (g) {
            h = p._data(a, "fxshow") || p._data(a, "fxshow", {}),
                q ? p(a).show() : l.done(function() {
                        p(a).hide()
                    }
                ),
                l.done(function() {
                        var b;
                        p.removeData(a, "fxshow", !0);
                        for (b in n) {
                            p.style(a, b, n[b])
                        }
                    }
                );
            for (d = 0; d < g; d++) {
                e = o[d],
                    i = l.createTween(e, q ? h[e] : 0),
                    n[e] = h[e] || p.style(a, e),
                    e in h || (h[e] = i.start,
                        q && (i.end = i.start,
                            i.start = e === "width" || e === "height" ? 1 : 0))
            }
        }
    }
    function cY(a, b, c, d, e) {
        return new cY.prototype.init(a,b,c,d,e)
    }
    function cZ(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (; e < 4; e += 2 - b) {
            c = bU[e],
                d["margin" + c] = d["padding" + c] = a
        }
        return b && (d.opacity = d.width = a),
            d
    }
    function c_(a) {
        return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    var c, d, e = a.document, f = a.location, g = a.navigator, h = a.jQuery, i = a.$, j = Array.prototype.push, k = Array.prototype.slice, l = Array.prototype.indexOf, m = Object.prototype.toString, n = Object.prototype.hasOwnProperty, o = String.prototype.trim, p = function(a, b) {
            return new p.fn.init(a,b,c)
        }
        , q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, r = /\S/, s = /\s+/, t = r.test(" ") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^[\],:{}\s]*$/, x = /(?:^|:|,)(?:\s*\[)+/g, y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, A = /^-ms-/, B = /-([\da-z])/gi, C = function(a, b) {
            return (b + "").toUpperCase()
        }
        , D = function() {
            e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1),
                p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D),
                p.ready())
        }
        , E = {};
    p.fn = p.prototype = {
        constructor: p,
        init: function(a, c, d) {
            var f, g, h, i;
            if (!a) {
                return this
            }
            if (a.nodeType) {
                return this.context = this[0] = a,
                    this.length = 1,
                    this
            }
            if (typeof a == "string") {
                a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null , a, null ] : f = u.exec(a);
                if (f && (f[1] || !c)) {
                    if (f[1]) {
                        return c = c instanceof p ? c[0] : c,
                            i = c && c.nodeType ? c.ownerDocument || c : e,
                            a = p.parseHTML(f[1], i, !0),
                            v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0),
                            p.merge(this, a)
                    }
                    g = e.getElementById(f[2]);
                    if (g && g.parentNode) {
                        if (g.id !== f[2]) {
                            return d.find(a)
                        }
                        this.length = 1,
                            this[0] = g
                    }
                    return this.context = e,
                        this.selector = a,
                        this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector,
                this.context = a.context),
                p.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.0",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return k.call(this)
        },
        get: function(a) {
            return a == null  ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, c) {
            var d = p.merge(this.constructor(), a);
            return d.prevObject = this,
                d.context = this.context,
                b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
                d
        },
        each: function(a, b) {
            return p.each(this, a, b)
        },
        ready: function(a) {
            return p.ready.promise().done(a),
                this
        },
        eq: function(a) {
            return a = +a,
                a === -1 ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack(p.map(this, function(b, c) {
                    return a.call(b, c, b)
                }
            ))
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: j,
        sort: [].sort,
        splice: [].splice
    },
        p.fn.init.prototype = p.fn,
        p.extend = p.fn.extend = function() {
            var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
            typeof h == "boolean" && (k = h,
                h = arguments[1] || {},
                i = 2),
                typeof h != "object" && !p.isFunction(h) && (h = {}),
                j === i && (h = this,
                    --i);
            for (; i < j; i++) {
                if ((a = arguments[i]) != null ) {
                    for (c in a) {
                        d = h[c],
                            e = a[c];
                        if (h === e) {
                            continue
                        }
                        k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1,
                            g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {},
                            h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
                    }
                }
            }
            return h
        }
        ,
        p.extend({
            noConflict: function(b) {
                return a.$ === p && (a.$ = i),
                    b && a.jQuery === p && (a.jQuery = h),
                    p
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? p.readyWait++ : p.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? --p.readyWait : p.isReady) {
                    return
                }
                if (!e.body) {
                    return setTimeout(p.ready, 1)
                }
                p.isReady = !0;
                if (a !== !0 && --p.readyWait > 0) {
                    return
                }
                d.resolveWith(e, [p]),
                    p.fn.trigger && p(e).trigger("ready").off("ready")
            },
            isFunction: function(a) {
                return p.type(a) === "function"
            },
            isArray: Array.isArray || function(a) {
                return p.type(a) === "array"
            }
            ,
            isWindow: function(a) {
                return a != null  && a == a.window
            },
            isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return a == null  ? String(a) : E[m.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) {
                    return !1
                }
                try {
                    if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) {
                        return !1
                    }
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a) {}
                return d === b || n.call(a, d)
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) {
                    return !1
                }
                return !0
            },
            error: function(a) {
                throw new Error(a)
            },
            parseHTML: function(a, b, c) {
                var d;
                return !a || typeof a != "string" ? null  : (typeof b == "boolean" && (c = b,
                    b = 0),
                    b = b || e,
                    (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null  : []),
                        p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
            },
            parseJSON: function(b) {
                if (!b || typeof b != "string") {
                    return null
                }
                b = p.trim(b);
                if (a.JSON && a.JSON.parse) {
                    return a.JSON.parse(b)
                }
                if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) {
                    return (new Function("return " + b))()
                }
                p.error("Invalid JSON: " + b)
            },
            parseXML: function(c) {
                var d, e;
                if (!c || typeof c != "string") {
                    return null
                }
                try {
                    a.DOMParser ? (e = new DOMParser,
                        d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),
                        d.async = "false",
                        d.loadXML(c))
                } catch (f) {
                    d = b
                }
                return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c),
                    d
            },
            noop: function() {},
            globalEval: function(b) {
                b && r.test(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                }
                    )(b)
            },
            camelCase: function(a) {
                return a.replace(A, "ms-").replace(B, C)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, c, d) {
                var e, f = 0, g = a.length, h = g === b || p.isFunction(a);
                if (d) {
                    if (h) {
                        for (e in a) {
                            if (c.apply(a[e], d) === !1) {
                                break
                            }
                        }
                    } else {
                        for (; f < g; ) {
                            if (c.apply(a[f++], d) === !1) {
                                break
                            }
                        }
                    }
                } else {
                    if (h) {
                        for (e in a) {
                            if (c.call(a[e], e, a[e]) === !1) {
                                break
                            }
                        }
                    } else {
                        for (; f < g; ) {
                            if (c.call(a[f], f, a[f++]) === !1) {
                                break
                            }
                        }
                    }
                }
                return a
            },
            trim: o ? function(a) {
                return a == null  ? "" : o.call(a)
            }
                : function(a) {
                return a == null  ? "" : a.toString().replace(t, "")
            }
            ,
            makeArray: function(a, b) {
                var c, d = b || [];
                return a != null  && (c = p.type(a),
                    a.length == null  || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)),
                    d
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (l) {
                        return l.call(b, a, c)
                    }
                    d = b.length,
                        c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                    for (; c < d; c++) {
                        if (c in b && b[c] === a) {
                            return c
                        }
                    }
                }
                return -1
            },
            merge: function(a, c) {
                var d = c.length
                    , e = a.length
                    , f = 0;
                if (typeof d == "number") {
                    for (; f < d; f++) {
                        a[e++] = c[f]
                    }
                } else {
                    while (c[f] !== b) {
                        a[e++] = c[f++]
                    }
                }
                return a.length = e,
                    a
            },
            grep: function(a, b, c) {
                var d, e = [], f = 0, g = a.length;
                c = !!c;
                for (; f < g; f++) {
                    d = !!b(a[f], f),
                        c !== d && e.push(a[f])
                }
                return e
            },
            map: function(a, c, d) {
                var e, f, g = [], h = 0, i = a.length, j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
                if (j) {
                    for (; h < i; h++) {
                        e = c(a[h], h, d),
                            e != null  && (g[g.length] = e)
                    }
                } else {
                    for (f in a) {
                        e = c(a[f], f, d),
                            e != null  && (g[g.length] = e)
                    }
                }
                return g.concat.apply([], g)
            },
            guid: 1,
            proxy: function(a, c) {
                var d, e, f;
                return typeof c == "string" && (d = a[c],
                    c = a,
                    a = d),
                    p.isFunction(a) ? (e = k.call(arguments, 2),
                        f = function() {
                            return a.apply(c, e.concat(k.call(arguments)))
                        }
                        ,
                        f.guid = a.guid = a.guid || f.guid || p.guid++,
                        f) : b
            },
            access: function(a, c, d, e, f, g, h) {
                var i, j = d == null , k = 0, l = a.length;
                if (d && typeof d == "object") {
                    for (k in d) {
                        p.access(a, c, k, d[k], 1, g, e)
                    }
                    f = 1
                } else {
                    if (e !== b) {
                        i = h === b && p.isFunction(e),
                            j && (i ? (i = c,
                                c = function(a, b, c) {
                                    return i.call(p(a), c)
                                }
                                ) : (c.call(a, e),
                                c = null ));
                        if (c) {
                            for (; k < l; k++) {
                                c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h)
                            }
                        }
                        f = 1
                    }
                }
                return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
            },
            now: function() {
                return (new Date).getTime()
            }
        }),
        p.ready.promise = function(b) {
            if (!d) {
                d = p.Deferred();
                if (e.readyState === "complete" || e.readyState !== "loading" && e.addEventListener) {
                    setTimeout(p.ready, 1)
                } else {
                    if (e.addEventListener) {
                        e.addEventListener("DOMContentLoaded", D, !1),
                            a.addEventListener("load", p.ready, !1)
                    } else {
                        e.attachEvent("onreadystatechange", D),
                            a.attachEvent("onload", p.ready);
                        var c = !1;
                        try {
                            c = a.frameElement == null  && e.documentElement
                        } catch (f) {}
                        c && c.doScroll && function g() {
                            if (!p.isReady) {
                                try {
                                    c.doScroll("left")
                                } catch (a) {
                                    return setTimeout(g, 50)
                                }
                                p.ready()
                            }
                        }
                            ()
                    }
                }
            }
            return d.promise(b)
        }
        ,
        p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                E["[object " + b + "]"] = b.toLowerCase()
            }
        ),
        c = p(e);
    var F = {};
    p.Callbacks = function(a) {
        a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
        var c, d, e, f, g, h, i = [], j = !a.once && [], k = function(b) {
                c = a.memory && b,
                    d = !0,
                    h = f || 0,
                    f = 0,
                    g = i.length,
                    e = !0;
                for (; i && h < g; h++) {
                    if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                }
                e = !1,
                    i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            }
            , l = {
                add: function() {
                    if (i) {
                        var b = i.length;
                        (function d(b) {
                            p.each(b, function(b, c) {
                                    p.isFunction(c) && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && d(c)
                                }
                            )
                        }
                            )(arguments),
                            e ? g = i.length : c && (f = b,
                                k(c))
                    }
                    return this
                },
                remove: function() {
                    return i && p.each(arguments, function(a, b) {
                            var c;
                            while ((c = p.inArray(b, i, c)) > -1) {
                                i.splice(c, 1),
                                    e && (c <= g && g--,
                                        c <= h && h--)
                            }
                        }
                    ),
                        this
                },
                has: function(a) {
                    return p.inArray(a, i) > -1
                },
                empty: function() {
                    return i = [],
                        this
                },
                disable: function() {
                    return i = j = c = b,
                        this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = b,
                        c || l.disable(),
                        this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return b = b || [],
                        b = [a, b.slice ? b.slice() : b],
                        i && (!d || j) && (e ? j.push(b) : k(b)),
                        this
                },
                fire: function() {
                    return l.fireWith(this, arguments),
                        this
                },
                fired: function() {
                    return !!d
                }
            };
        return l
    }
        ,
        p.extend({
            Deferred: function(a) {
                var b = [["resolve", "done", p.Callbacks("once memory"), "resolved"], ["reject", "fail", p.Callbacks("once memory"), "rejected"], ["notify", "progress", p.Callbacks("memory")]]
                    , c = "pending"
                    , d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments),
                                this
                        },
                        then: function() {
                            var a = arguments;
                            return p.Deferred(function(c) {
                                    p.each(b, function(b, d) {
                                            var f = d[0]
                                                , g = a[b];
                                            e[d[1]](p.isFunction(g) ? function() {
                                                var a = g.apply(this, arguments);
                                                a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                                            }
                                                : c[f])
                                        }
                                    ),
                                        a = null
                                }
                            ).promise()
                        },
                        promise: function(a) {
                            return typeof a == "object" ? p.extend(a, d) : d
                        }
                    }
                    , e = {};
                return d.pipe = d.then,
                    p.each(b, function(a, f) {
                            var g = f[2]
                                , h = f[3];
                            d[f[1]] = g.add,
                                h && g.add(function() {
                                        c = h
                                    }
                                    , b[a ^ 1][2].disable, b[2][2].lock),
                                e[f[0]] = g.fire,
                                e[f[0] + "With"] = g.fireWith
                        }
                    ),
                    d.promise(e),
                    a && a.call(e, e),
                    e
            },
            when: function(a) {
                var b = 0, c = k.call(arguments), d = c.length, e = d !== 1 || a && p.isFunction(a.promise) ? d : 0, f = e === 1 ? a : p.Deferred(), g = function(a, b, c) {
                        return function(d) {
                            b[a] = this,
                                c[a] = arguments.length > 1 ? k.call(arguments) : d,
                                c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                        }
                    }
                    , h, i, j;
                if (d > 1) {
                    h = new Array(d),
                        i = new Array(d),
                        j = new Array(d);
                    for (; b < d; b++) {
                        c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
                    }
                }
                return e || f.resolveWith(j, c),
                    f.promise()
            }
        }),
        p.support = function() {
            var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
            n.setAttribute("className", "t"),
                n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                c = n.getElementsByTagName("*"),
                d = n.getElementsByTagName("a")[0],
                d.style.cssText = "top:1px;float:left;opacity:.5";
            if (!c || !c.length || !d) {
                return {}
            }
            f = e.createElement("select"),
                g = f.appendChild(e.createElement("option")),
                h = n.getElementsByTagName("input")[0],
                b = {
                    leadingWhitespace: n.firstChild.nodeType === 3,
                    tbody: !n.getElementsByTagName("tbody").length,
                    htmlSerialize: !!n.getElementsByTagName("link").length,
                    style: /top/.test(d.getAttribute("style")),
                    hrefNormalized: d.getAttribute("href") === "/a",
                    opacity: /^0.5/.test(d.style.opacity),
                    cssFloat: !!d.style.cssFloat,
                    checkOn: h.value === "on",
                    optSelected: g.selected,
                    getSetAttribute: n.className !== "t",
                    enctype: !!e.createElement("form").enctype,
                    html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                    boxModel: e.compatMode === "CSS1Compat",
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    boxSizingReliable: !0,
                    pixelPosition: !1
                },
                h.checked = !0,
                b.noCloneChecked = h.cloneNode(!0).checked,
                f.disabled = !0,
                b.optDisabled = !g.disabled;
            try {
                delete n.test
            } catch (o) {
                b.deleteExpando = !1
            }
            !n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function() {
                b.noCloneEvent = !1
            }
            ),
                n.cloneNode(!0).fireEvent("onclick"),
                n.detachEvent("onclick", m)),
                h = e.createElement("input"),
                h.value = "t",
                h.setAttribute("type", "radio"),
                b.radioValue = h.value === "t",
                h.setAttribute("checked", "checked"),
                h.setAttribute("name", "t"),
                n.appendChild(h),
                i = e.createDocumentFragment(),
                i.appendChild(n.lastChild),
                b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked,
                b.appendChecked = h.checked,
                i.removeChild(h),
                i.appendChild(n);
            if (n.attachEvent) {
                for (k in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) {
                    j = "on" + k,
                        l = j in n,
                        l || (n.setAttribute(j, "return;"),
                            l = typeof n[j] == "function"),
                        b[k + "Bubbles"] = l
                }
            }
            return p(function() {
                    var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;", i = e.getElementsByTagName("body")[0];
                    if (!i) {
                        return
                    }
                    c = e.createElement("div"),
                        c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
                        i.insertBefore(c, i.firstChild),
                        d = e.createElement("div"),
                        c.appendChild(d),
                        d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        f = d.getElementsByTagName("td"),
                        f[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                        l = f[0].offsetHeight === 0,
                        f[0].style.display = "",
                        f[1].style.display = "none",
                        b.reliableHiddenOffsets = l && f[0].offsetHeight === 0,
                        d.innerHTML = "",
                        d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                        b.boxSizing = d.offsetWidth === 4,
                        b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1,
                        a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null ) || {}).top !== "1%",
                            b.boxSizingReliable = (a.getComputedStyle(d, null ) || {
                                width: "4px"
                            }).width === "4px",
                            g = e.createElement("div"),
                            g.style.cssText = d.style.cssText = h,
                            g.style.marginRight = g.style.width = "0",
                            d.style.width = "1px",
                            d.appendChild(g),
                            b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null ) || {}).marginRight)),
                        typeof d.style.zoom != "undefined" && (d.innerHTML = "",
                            d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1",
                            b.inlineBlockNeedsLayout = d.offsetWidth === 3,
                            d.style.display = "block",
                            d.style.overflow = "visible",
                            d.innerHTML = "<div></div>",
                            d.firstChild.style.width = "5px",
                            b.shrinkWrapBlocks = d.offsetWidth !== 3,
                            c.style.zoom = 1),
                        i.removeChild(c),
                        c = d = f = g = null
                }
            ),
                i.removeChild(n),
                c = d = f = g = h = i = n = null ,
                b
        }
            ();
    var H = /^(?:\{.*\}|\[.*\])$/
        , I = /([A-Z])/g;
    p.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando],
                !!a && !K(a)
        },
        data: function(a, c, d, e) {
            if (!p.acceptData(a)) {
                return
            }
            var f, g, h = p.expando, i = typeof c == "string", j = a.nodeType, k = j ? p.cache : a, l = j ? a[h] : a[h] && h;
            if ((!l || !k[l] || !e && !k[l].data) && i && d === b) {
                return
            }
            l || (j ? a[h] = l = p.deletedIds.pop() || ++p.uuid : l = h),
                k[l] || (k[l] = {},
                    j || (k[l].toJSON = p.noop));
            if (typeof c == "object" || typeof c == "function") {
                e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c)
            }
            return f = k[l],
                e || (f.data || (f.data = {}),
                    f = f.data),
                d !== b && (f[p.camelCase(c)] = d),
                i ? (g = f[c],
                    g == null  && (g = f[p.camelCase(c)])) : g = f,
                g
        },
        removeData: function(a, b, c) {
            if (!p.acceptData(a)) {
                return
            }
            var d, e, f, g = a.nodeType, h = g ? p.cache : a, i = g ? a[p.expando] : p.expando;
            if (!h[i]) {
                return
            }
            if (b) {
                d = c ? h[i] : h[i].data;
                if (d) {
                    p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b),
                        b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0,
                             f = b.length; e < f; e++) {
                        delete d[b[e]]
                    }
                    if (!(c ? K : p.isEmptyObject)(d)) {
                        return
                    }
                }
            }
            if (!c) {
                delete h[i].data;
                if (!K(h[i])) {
                    return
                }
            }
            g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null
        },
        _data: function(a, b, c) {
            return p.data(a, b, c, !0)
        },
        acceptData: function(a) {
            var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }),
        p.fn.extend({
            data: function(a, c) {
                var d, e, f, g, h, i = this[0], j = 0, k = null ;
                if (a === b) {
                    if (this.length) {
                        k = p.data(i);
                        if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
                            f = i.attributes;
                            for (h = f.length; j < h; j++) {
                                g = f[j].name,
                                    g.indexOf("data-") === 0 && (g = p.camelCase(g.substring(5)),
                                        J(i, g, k[g]))
                            }
                            p._data(i, "parsedAttrs", !0)
                        }
                    }
                    return k
                }
                return typeof a == "object" ? this.each(function() {
                        p.data(this, a)
                    }
                ) : (d = a.split(".", 2),
                    d[1] = d[1] ? "." + d[1] : "",
                    e = d[1] + "!",
                    p.access(this, function(c) {
                            if (c === b) {
                                return k = this.triggerHandler("getData" + e, [d[0]]),
                                    k === b && i && (k = p.data(i, a),
                                        k = J(i, a, k)),
                                    k === b && d[1] ? this.data(d[0]) : k
                            }
                            d[1] = c,
                                this.each(function() {
                                        var b = p(this);
                                        b.triggerHandler("setData" + e, d),
                                            p.data(this, a, c),
                                            b.triggerHandler("changeData" + e, d)
                                    }
                                )
                        }
                        , null , c, arguments.length > 1, null , !1))
            },
            removeData: function(a) {
                return this.each(function() {
                        p.removeData(this, a)
                    }
                )
            }
        }),
        p.extend({
            queue: function(a, b, c) {
                var d;
                if (a) {
                    return b = (b || "fx") + "queue",
                        d = p._data(a, b),
                        c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)),
                        d || []
                }
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = p.queue(a, b)
                    , d = c.shift()
                    , e = p._queueHooks(a, b)
                    , f = function() {
                        p.dequeue(a, b)
                    }
                    ;
                d === "inprogress" && (d = c.shift()),
                    d && (b === "fx" && c.unshift("inprogress"),
                        delete e.stop,
                        d.call(a, f, e)),
                    !c.length && e && e.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return p._data(a, c) || p._data(a, c, {
                    empty: p.Callbacks("once memory").add(function() {
                            p.removeData(a, b + "queue", !0),
                                p.removeData(a, c, !0)
                        }
                    )
                })
            }
        }),
        p.fn.extend({
            queue: function(a, c) {
                var d = 2;
                return typeof a != "string" && (c = a,
                    a = "fx",
                    d--),
                    arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function() {
                            var b = p.queue(this, a, c);
                            p._queueHooks(this, a),
                                a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
                        }
                    )
            },
            dequeue: function(a) {
                return this.each(function() {
                        p.dequeue(this, a)
                    }
                )
            },
            delay: function(a, b) {
                return a = p.fx ? p.fx.speeds[a] || a : a,
                    b = b || "fx",
                    this.queue(b, function(b, c) {
                            var d = setTimeout(b, a);
                            c.stop = function() {
                                clearTimeout(d)
                            }
                        }
                    )
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, c) {
                var d, e = 1, f = p.Deferred(), g = this, h = this.length, i = function() {
                        --e || f.resolveWith(g, [g])
                    }
                    ;
                typeof a != "string" && (c = a,
                    a = b),
                    a = a || "fx";
                while (h--) {
                    (d = p._data(g[h], a + "queueHooks")) && d.empty && (e++,
                        d.empty.add(i))
                }
                return i(),
                    f.promise(c)
            }
        });
    var L, M, N, O = /[\t\r\n]/g, P = /\r/g, Q = /^(?:button|input)$/i, R = /^(?:button|input|object|select|textarea)$/i, S = /^a(?:rea|)$/i, T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, U = p.support.getSetAttribute;
    p.fn.extend({
        attr: function(a, b) {
            return p.access(this, p.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                    p.removeAttr(this, a)
                }
            )
        },
        prop: function(a, b) {
            return p.access(this, p.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = p.propFix[a] || a,
                this.each(function() {
                        try {
                            this[a] = b,
                                delete this[a]
                        } catch (c) {}
                    }
                )
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (p.isFunction(a)) {
                return this.each(function(b) {
                        p(this).addClass(a.call(this, b, this.className))
                    }
                )
            }
            if (a && typeof a == "string") {
                b = a.split(s);
                for (c = 0,
                         d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) {
                        if (!e.className && b.length === 1) {
                            e.className = a
                        } else {
                            f = " " + e.className + " ";
                            for (g = 0,
                                     h = b.length; g < h; g++) {
                                ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ")
                            }
                            e.className = p.trim(f)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (p.isFunction(a)) {
                return this.each(function(b) {
                        p(this).removeClass(a.call(this, b, this.className))
                    }
                )
            }
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(s);
                for (h = 0,
                         i = this.length; h < i; h++) {
                    e = this[h];
                    if (e.nodeType === 1 && e.className) {
                        d = (" " + e.className + " ").replace(O, " ");
                        for (f = 0,
                                 g = c.length; f < g; f++) {
                            while (d.indexOf(" " + c[f] + " ") > -1) {
                                d = d.replace(" " + c[f] + " ", " ")
                            }
                        }
                        e.className = a ? p.trim(d) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a
                , d = typeof b == "boolean";
            return p.isFunction(a) ? this.each(function(c) {
                    p(this).toggleClass(a.call(this, c, this.className, b), b)
                }
            ) : this.each(function() {
                    if (c === "string") {
                        var e, f = 0, g = p(this), h = b, i = a.split(s);
                        while (e = i[f++]) {
                            h = d ? h : !g.hasClass(e),
                                g[h ? "addClass" : "removeClass"](e)
                        }
                    } else {
                        if (c === "undefined" || c === "boolean") {
                            this.className && p._data(this, "__className__", this.className),
                                this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || ""
                        }
                    }
                }
            )
        },
        hasClass: function(a) {
            var b = " " + a + " "
                , c = 0
                , d = this.length;
            for (; c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            if (!arguments.length) {
                if (f) {
                    return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()],
                        c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value,
                            typeof d == "string" ? d.replace(P, "") : d == null  ? "" : d)
                }
                return
            }
            return e = p.isFunction(a),
                this.each(function(d) {
                        var f, g = p(this);
                        if (this.nodeType !== 1) {
                            return
                        }
                        e ? f = a.call(this, d, g.val()) : f = a,
                            f == null  ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function(a) {
                                    return a == null  ? "" : a + ""
                                }
                            )),
                            c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                        if (!c || !("set" in c) || c.set(this, f, "value") === b) {
                            this.value = f
                        }
                    }
                )
        }
    }),
        p.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b, c, d, e, f = a.selectedIndex, g = [], h = a.options, i = a.type === "select-one";
                        if (f < 0) {
                            return null
                        }
                        c = i ? f : 0,
                            d = i ? f + 1 : h.length;
                        for (; c < d; c++) {
                            e = h[c];
                            if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null ) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
                                b = p(e).val();
                                if (i) {
                                    return b
                                }
                                g.push(b)
                            }
                        }
                        return i && !g.length && h.length ? p(h[f]).val() : g
                    },
                    set: function(a, b) {
                        var c = p.makeArray(b);
                        return p(a).find("option").each(function() {
                                this.selected = p.inArray(p(this).val(), c) >= 0
                            }
                        ),
                            c.length || (a.selectedIndex = -1),
                            c
                    }
                }
            },
            attrFn: {},
            attr: function(a, c, d, e) {
                var f, g, h, i = a.nodeType;
                if (!a || i === 3 || i === 8 || i === 2) {
                    return
                }
                if (e && p.isFunction(p.fn[c])) {
                    return p(a)[c](d)
                }
                if (typeof a.getAttribute == "undefined") {
                    return p.prop(a, c, d)
                }
                h = i !== 1 || !p.isXMLDoc(a),
                    h && (c = c.toLowerCase(),
                        g = p.attrHooks[c] || (T.test(c) ? M : L));
                if (d !== b) {
                    if (d === null ) {
                        p.removeAttr(a, c);
                        return
                    }
                    return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d),
                        d)
                }
                return g && "get" in g && h && (f = g.get(a, c)) !== null  ? f : (f = a.getAttribute(c),
                    f === null  ? b : f)
            },
            removeAttr: function(a, b) {
                var c, d, e, f, g = 0;
                if (b && a.nodeType === 1) {
                    d = b.split(s);
                    for (; g < d.length; g++) {
                        e = d[g],
                            e && (c = p.propFix[e] || e,
                                f = T.test(e),
                                f || p.attr(a, e, ""),
                                a.removeAttribute(U ? e : c),
                                f && c in a && (a[c] = !1))
                    }
                }
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (Q.test(a.nodeName) && a.parentNode) {
                            p.error("type property can't be changed")
                        } else {
                            if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b),
                                    c && (a.value = c),
                                    b
                            }
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
                    },
                    set: function(a, b, c) {
                        if (L && p.nodeName(a, "button")) {
                            return L.set(a, b, c)
                        }
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, c, d) {
                var e, f, g, h = a.nodeType;
                if (!a || h === 3 || h === 8 || h === 2) {
                    return
                }
                return g = h !== 1 || !p.isXMLDoc(a),
                    g && (c = p.propFix[c] || c,
                        f = p.propHooks[c]),
                    d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null  ? e : a[c]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
                    }
                }
            }
        }),
        M = {
            get: function(a, c) {
                var d, e = p.prop(a, c);
                return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
            },
            set: function(a, b, c) {
                var d;
                return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c,
                    d in a && (a[d] = !0),
                    a.setAttribute(c, c.toLowerCase())),
                    c
            }
        },
        U || (N = {
            name: !0,
            id: !0,
            coords: !0
        },
            L = p.valHooks.button = {
                get: function(a, c) {
                    var d;
                    return d = a.getAttributeNode(c),
                        d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
                },
                set: function(a, b, c) {
                    var d = a.getAttributeNode(c);
                    return d || (d = e.createAttribute(c),
                        a.setAttributeNode(d)),
                        d.value = b + ""
                }
            },
            p.each(["width", "height"], function(a, b) {
                    p.attrHooks[b] = p.extend(p.attrHooks[b], {
                        set: function(a, c) {
                            if (c === "") {
                                return a.setAttribute(b, "auto"),
                                    c
                            }
                        }
                    })
                }
            ),
            p.attrHooks.contenteditable = {
                get: L.get,
                set: function(a, b, c) {
                    b === "" && (b = "false"),
                        L.set(a, b, c)
                }
            }),
        p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function(a, c) {
                p.attrHooks[c] = p.extend(p.attrHooks[c], {
                    get: function(a) {
                        var d = a.getAttribute(c, 2);
                        return d === null  ? b : d
                    }
                })
            }
        ),
        p.support.style || (p.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || b
            },
            set: function(a, b) {
                return a.style.cssText = "" + b
            }
        }),
        p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex,
                    b.parentNode && b.parentNode.selectedIndex),
                    null
            }
        })),
        p.support.enctype || (p.propFix.enctype = "encoding"),
        p.support.checkOn || p.each(["radio", "checkbox"], function() {
                p.valHooks[this] = {
                    get: function(a) {
                        return a.getAttribute("value") === null  ? "on" : a.value
                    }
                }
            }
        ),
        p.each(["radio", "checkbox"], function() {
                p.valHooks[this] = p.extend(p.valHooks[this], {
                    set: function(a, b) {
                        if (p.isArray(b)) {
                            return a.checked = p.inArray(p(a).val(), b) >= 0
                        }
                    }
                })
            }
        );
    var V = /^(?:textarea|input|select)$/i
        , W = /^([^\.]*|)(?:\.(.+)|)$/
        , X = /(?:^|\s)hover(\.\S+|)\b/
        , Y = /^key/
        , Z = /^(?:mouse|contextmenu)|click/
        , $ = /^(?:focusinfocus|focusoutblur)$/
        , _ = function(a) {
            return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1")
        }
        ;
    p.event = {
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, q, r;
            if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) {
                return
            }
            d.handler && (o = d,
                d = o.handler,
                f = o.selector),
                d.guid || (d.guid = p.guid++),
                i = g.events,
                i || (g.events = i = {}),
                h = g.handle,
                h || (g.handle = h = function(a) {
                    return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b
                }
                    ,
                    h.elem = a),
                c = p.trim(_(c)).split(" ");
            for (j = 0; j < c.length; j++) {
                k = W.exec(c[j]) || [],
                    l = k[1],
                    m = (k[2] || "").split(".").sort(),
                    r = p.event.special[l] || {},
                    l = (f ? r.delegateType : r.bindType) || l,
                    r = p.event.special[l] || {},
                    n = p.extend({
                        type: l,
                        origType: k[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        namespace: m.join(".")
                    }, o),
                    q = i[l];
                if (!q) {
                    q = i[l] = [],
                        q.delegateCount = 0;
                    if (!r.setup || r.setup.call(a, e, m, h) === !1) {
                        a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
                    }
                }
                r.add && (r.add.call(a, n),
                    n.handler.guid || (n.handler.guid = d.guid)),
                    f ? q.splice(q.delegateCount++, 0, n) : q.push(n),
                    p.event.global[l] = !0
            }
            a = null
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
            if (!r || !(m = r.events)) {
                return
            }
            b = p.trim(_(b || "")).split(" ");
            for (f = 0; f < b.length; f++) {
                g = W.exec(b[f]) || [],
                    h = i = g[1],
                    j = g[2];
                if (!h) {
                    for (h in m) {
                        p.event.remove(a, h + b[f], c, d, !0)
                    }
                    continue
                }
                n = p.event.special[h] || {},
                    h = (d ? n.delegateType : n.bindType) || h,
                    o = m[h] || [],
                    k = o.length,
                    j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null ;
                for (l = 0; l < o.length; l++) {
                    q = o[l],
                        (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1),
                            q.selector && o.delegateCount--,
                            n.remove && n.remove.call(a, q))
                }
                o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle),
                    delete m[h])
            }
            p.isEmptyObject(m) && (delete r.handle,
                p.removeData(a, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, f, g) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var h, i, j, k, l, m, n, o, q, r, s = c.type || c, t = [];
                if ($.test(s + p.event.triggered)) {
                    return
                }
                s.indexOf("!") >= 0 && (s = s.slice(0, -1),
                    i = !0),
                    s.indexOf(".") >= 0 && (t = s.split("."),
                        s = t.shift(),
                        t.sort());
                if ((!f || p.event.customEvent[s]) && !p.event.global[s]) {
                    return
                }
                c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s,c) : new p.Event(s),
                    c.type = s,
                    c.isTrigger = !0,
                    c.exclusive = i,
                    c.namespace = t.join("."),
                    c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                    m = s.indexOf(":") < 0 ? "on" + s : "";
                if (!f) {
                    h = p.cache;
                    for (j in h) {
                        h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0)
                    }
                    return
                }
                c.result = b,
                    c.target || (c.target = f),
                    d = d != null  ? p.makeArray(d) : [],
                    d.unshift(c),
                    n = p.event.special[s] || {};
                if (n.trigger && n.trigger.apply(f, d) === !1) {
                    return
                }
                q = [[f, n.bindType || s]];
                if (!g && !n.noBubble && !p.isWindow(f)) {
                    r = n.delegateType || s,
                        k = $.test(r + s) ? f : f.parentNode;
                    for (l = f; k; k = k.parentNode) {
                        q.push([k, r]),
                            l = k
                    }
                    l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
                }
                for (j = 0; j < q.length && !c.isPropagationStopped(); j++) {
                    k = q[j][0],
                        c.type = q[j][1],
                        o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"),
                        o && o.apply(k, d),
                        o = m && k[m],
                        o && p.acceptData(k) && o.apply(k, d) === !1 && c.preventDefault()
                }
                return c.type = s,
                    !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m],
                        l && (f[m] = null ),
                        p.event.triggered = s,
                        f[s](),
                        p.event.triggered = b,
                        l && (f[m] = l)),
                    c.result
            }
            return
        },
        dispatch: function(c) {
            c = p.event.fix(c || a.event);
            var d, e, f, g, h, i, j, k, l, m, n, o = (p._data(this, "events") || {})[c.type] || [], q = o.delegateCount, r = [].slice.call(arguments), s = !c.exclusive && !c.namespace, t = p.event.special[c.type] || {}, u = [];
            r[0] = c,
                c.delegateTarget = this;
            if (t.preDispatch && t.preDispatch.call(this, c) === !1) {
                return
            }
            if (q && (!c.button || c.type !== "click")) {
                g = p(this),
                    g.context = this;
                for (f = c.target; f != this; f = f.parentNode || this) {
                    if (f.disabled !== !0 || c.type !== "click") {
                        i = {},
                            k = [],
                            g[0] = f;
                        for (d = 0; d < q; d++) {
                            l = o[d],
                                m = l.selector,
                                i[m] === b && (i[m] = g.is(m)),
                                i[m] && k.push(l)
                        }
                        k.length && u.push({
                            elem: f,
                            matches: k
                        })
                    }
                }
            }
            o.length > q && u.push({
                elem: this,
                matches: o.slice(q)
            });
            for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
                j = u[d],
                    c.currentTarget = j.elem;
                for (e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++) {
                    l = j.matches[e];
                    if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) {
                        c.data = l.data,
                            c.handleObj = l,
                            h = ((p.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, r),
                            h !== b && (c.result = h,
                                h === !1 && (c.preventDefault(),
                                    c.stopPropagation()))
                    }
                }
            }
            return t.postDispatch && t.postDispatch.call(this, c),
                c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return a.which == null  && (a.which = b.charCode != null  ? b.charCode : b.keyCode),
                    a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, f, g, h = c.button, i = c.fromElement;
                return a.pageX == null  && c.clientX != null  && (d = a.target.ownerDocument || e,
                    f = d.documentElement,
                    g = d.body,
                    a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0),
                    a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                    !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i),
                    !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0),
                    a
            }
        },
        fix: function(a) {
            if (a[p.expando]) {
                return a
            }
            var b, c, d = a, f = p.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props;
            a = p.Event(d);
            for (b = g.length; b; ) {
                c = g[--b],
                    a[c] = d[c]
            }
            return a.target || (a.target = d.srcElement || e),
                a.target.nodeType === 3 && (a.target = a.target.parentNode),
                a.metaKey = !!a.metaKey,
                f.filter ? f.filter(a, d) : a
        },
        special: {
            ready: {
                setup: p.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    p.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null )
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = p.extend(new p.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? p.event.trigger(e, null , b) : p.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault()
        }
    },
        p.event.handle = p.event.dispatch,
        p.removeEvent = e.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
            : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null ),
                a.detachEvent(d, c))
        }
        ,
        p.Event = function(a, b) {
            if (this instanceof p.Event) {
                a && a.type ? (this.originalEvent = a,
                    this.type = a.type,
                    this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a,
                    b && p.extend(this, b),
                    this.timeStamp = a && a.timeStamp || p.now(),
                    this[p.expando] = !0
            } else {
                return new p.Event(a,b)
            }
        }
        ,
        p.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = bb;
                var a = this.originalEvent;
                if (!a) {
                    return
                }
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            },
            stopPropagation: function() {
                this.isPropagationStopped = bb;
                var a = this.originalEvent;
                if (!a) {
                    return
                }
                a.stopPropagation && a.stopPropagation(),
                    a.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = bb,
                    this.stopPropagation()
            },
            isDefaultPrevented: ba,
            isPropagationStopped: ba,
            isImmediatePropagationStopped: ba
        },
        p.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(a, b) {
                p.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(a) {
                        var c, d = this, e = a.relatedTarget, f = a.handleObj, g = f.selector;
                        if (!e || e !== d && !p.contains(d, e)) {
                            a.type = f.origType,
                                c = f.handler.apply(this, arguments),
                                a.type = b
                        }
                        return c
                    }
                }
            }
        ),
        p.support.submitBubbles || (p.event.special.submit = {
            setup: function() {
                if (p.nodeName(this, "form")) {
                    return !1
                }
                p.event.add(this, "click._submit keypress._submit", function(a) {
                        var c = a.target
                            , d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
                        d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function(a) {
                                a._submit_bubble = !0
                            }
                        ),
                            p._data(d, "_submit_attached", !0))
                    }
                )
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble,
                    this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                if (p.nodeName(this, "form")) {
                    return !1
                }
                p.event.remove(this, "._submit")
            }
        }),
        p.support.changeBubbles || (p.event.special.change = {
            setup: function() {
                if (V.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        p.event.add(this, "propertychange._change", function(a) {
                                a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                            }
                        ),
                            p.event.add(this, "click._change", function(a) {
                                    this._just_changed && !a.isTrigger && (this._just_changed = !1),
                                        p.event.simulate("change", this, a, !0)
                                }
                            )
                    }
                    return !1
                }
                p.event.add(this, "beforeactivate._change", function(a) {
                        var b = a.target;
                        V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function(a) {
                                this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
                            }
                        ),
                            p._data(b, "_change_attached", !0))
                    }
                )
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
                    return a.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                return p.event.remove(this, "._change"),
                    V.test(this.nodeName)
            }
        }),
        p.support.focusinBubbles || p.each({
                focus: "focusin",
                blur: "focusout"
            }, function(a, b) {
                var c = 0
                    , d = function(a) {
                        p.event.simulate(b, a.target, p.event.fix(a), !0)
                    }
                    ;
                p.event.special[b] = {
                    setup: function() {
                        c++ === 0 && e.addEventListener(a, d, !0)
                    },
                    teardown: function() {
                        --c === 0 && e.removeEventListener(a, d, !0)
                    }
                }
            }
        ),
        p.fn.extend({
            on: function(a, c, d, e, f) {
                var g, h;
                if (typeof a == "object") {
                    typeof c != "string" && (d = d || c,
                        c = b);
                    for (h in a) {
                        this.on(h, c, d, a[h], f)
                    }
                    return this
                }
                d == null  && e == null  ? (e = c,
                    d = c = b) : e == null  && (typeof c == "string" ? (e = d,
                    d = b) : (e = d,
                    d = c,
                    c = b));
                if (e === !1) {
                    e = ba
                } else {
                    if (!e) {
                        return this
                    }
                }
                return f === 1 && (g = e,
                    e = function(a) {
                        return p().off(a),
                            g.apply(this, arguments)
                    }
                    ,
                    e.guid = g.guid || (g.guid = p.guid++)),
                    this.each(function() {
                            p.event.add(this, a, e, d, c)
                        }
                    )
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                var e, f;
                if (a && a.preventDefault && a.handleObj) {
                    return e = a.handleObj,
                        p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler),
                        this
                }
                if (typeof a == "object") {
                    for (f in a) {
                        this.off(f, c, a[f])
                    }
                    return this
                }
                if (c === !1 || typeof c == "function") {
                    d = c,
                        c = b
                }
                return d === !1 && (d = ba),
                    this.each(function() {
                            p.event.remove(this, a, d, c)
                        }
                    )
            },
            bind: function(a, b, c) {
                return this.on(a, null , b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null , b)
            },
            live: function(a, b, c) {
                return p(this.context).on(a, this.selector, b, c),
                    this
            },
            die: function(a, b) {
                return p(this.context).off(a, this.selector || "**", b),
                    this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                        p.event.trigger(a, b, this)
                    }
                )
            },
            triggerHandler: function(a, b) {
                if (this[0]) {
                    return p.event.trigger(a, b, this[0], !0)
                }
            },
            toggle: function(a) {
                var b = arguments
                    , c = a.guid || p.guid++
                    , d = 0
                    , e = function(c) {
                        var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
                        return p._data(this, "lastToggle" + a.guid, e + 1),
                            c.preventDefault(),
                            b[e].apply(this, arguments) || !1
                    }
                    ;
                e.guid = c;
                while (d < b.length) {
                    b[d++].guid = c
                }
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }),
        p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
                p.fn[b] = function(a, c) {
                    return c == null  && (c = a,
                        a = null ),
                        arguments.length > 0 ? this.on(b, null , a, c) : this.trigger(b)
                }
                    ,
                    Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks),
                    Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
            }
        ),
        function(a, b) {
            function bd(a, b, c, d) {
                var e = 0
                    , f = b.length;
                for (; e < f; e++) {
                    Z(a, b[e], c, d)
                }
            }
            function be(a, b, c, d, e, f) {
                var g, h = $.setFilters[b.toLowerCase()];
                return h || Z.error(b),
                    (a || !(g = e)) && bd(a || "*", d, g = [], e),
                    g.length > 0 ? h(g, c, f) : []
            }
            function bf(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, p = 0, q = f.length, s = L.POS, t = new RegExp("^" + s.source + "(?!" + r + ")","i"), u = function() {
                        var a = 1
                            , c = arguments.length - 2;
                        for (; a < c; a++) {
                            arguments[a] === b && (g[a] = b)
                        }
                    }
                    ;
                for (; p < q; p++) {
                    s.exec(""),
                        a = f[p],
                        j = [],
                        i = 0,
                        k = e;
                    while (g = s.exec(a)) {
                        n = s.lastIndex = g.index + g[0].length;
                        if (n > i) {
                            m = a.slice(i, g.index),
                                i = n,
                                l = [c],
                                B.test(m) && (k && (l = k),
                                    k = e);
                            if (h = H.test(m)) {
                                m = m.slice(0, -5).replace(B, "$&*")
                            }
                            g.length > 1 && g[0].replace(t, u),
                                k = be(m, g[1], g[2], l, k, h)
                        }
                    }
                    k ? (j = j.concat(k),
                        (m = a.slice(i)) && m !== ")" ? B.test(m) ? bd(m, j, d, e) : Z(m, c, d, e ? e.concat(k) : k) : o.apply(d, j)) : Z(a, c, d, e)
                }
                return q === 1 ? d : Z.uniqueSort(d)
            }
            function bg(a, b, c) {
                var d, e, f, g = [], i = 0, j = D.exec(a), k = !j.pop() && !j.pop(), l = k && a.match(C) || [""], m = $.preFilter, n = $.filter, o = !c && b !== h;
                for (; (e = l[i]) != null  && k; i++) {
                    g.push(d = []),
                        o && (e = " " + e);
                    while (e) {
                        k = !1;
                        if (j = B.exec(e)) {
                            e = e.slice(j[0].length),
                                k = d.push({
                                    part: j.pop().replace(A, " "),
                                    captures: j
                                })
                        }
                        for (f in n) {
                            (j = L[f].exec(e)) && (!m[f] || (j = m[f](j, b, c))) && (e = e.slice(j.shift().length),
                                k = d.push({
                                    part: f,
                                    captures: j
                                }))
                        }
                        if (!k) {
                            break
                        }
                    }
                }
                return k || Z.error(a),
                    g
            }
            function bh(a, b, e) {
                var f = b.dir
                    , g = m++;
                return a || (a = function(a) {
                    return a === e
                }
                    ),
                    b.first ? function(b, c) {
                        while (b = b[f]) {
                            if (b.nodeType === 1) {
                                return a(b, c) && b
                            }
                        }
                    }
                        : function(b, e) {
                        var h, i = g + "." + d, j = i + "." + c;
                        while (b = b[f]) {
                            if (b.nodeType === 1) {
                                if ((h = b[q]) === j) {
                                    return b.sizset
                                }
                                if (typeof h == "string" && h.indexOf(i) === 0) {
                                    if (b.sizset) {
                                        return b
                                    }
                                } else {
                                    b[q] = j;
                                    if (a(b, e)) {
                                        return b.sizset = !0,
                                            b
                                    }
                                    b.sizset = !1
                                }
                            }
                        }
                    }
            }
            function bi(a, b) {
                return a ? function(c, d) {
                    var e = b(c, d);
                    return e && a(e === !0 ? c : e, d)
                }
                    : b
            }
            function bj(a, b, c) {
                var d, e, f = 0;
                for (; d = a[f]; f++) {
                    $.relative[d.part] ? e = bh(e, $.relative[d.part], b) : (d.captures.push(b, c),
                        e = bi(e, $.filter[d.part].apply(null , d.captures)))
                }
                return e
            }
            function bk(a) {
                return function(b, c) {
                    var d, e = 0;
                    for (; d = a[e]; e++) {
                        if (d(b, c)) {
                            return !0
                        }
                    }
                    return !1
                }
            }
            var c, d, e, f, g, h = a.document, i = h.documentElement, j = "undefined", k = !1, l = !0, m = 0, n = [].slice, o = [].push, q = ("sizcache" + Math.random()).replace(".", ""), r = "[\\x20\\t\\r\\n\\f]", s = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", t = s.replace("w", "w#"), u = "([*^$|!~]?=)", v = "\\[" + r + "*(" + s + ")" + r + "*(?:" + u + r + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + t + ")|)|)" + r + "*\\]", w = ":(" + s + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)", x = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)", y = r + "*([\\x20\\t\\r\\n\\f>+~])" + r + "*", z = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" + v + "|" + w.replace(2, 7) + "|[^\\\\(),])+", A = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$","g"), B = new RegExp("^" + y), C = new RegExp(z + "?(?=" + r + "*,|$)","g"), D = new RegExp("^(?:(?!,)(?:(?:^|,)" + r + "*" + z + ")*?|" + r + "*(.*?))(\\)|$)"), E = new RegExp(z.slice(19, -6) + "\\x20\\t\\r\\n\\f>+~])+|" + y,"g"), F = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, G = /[\x20\t\r\n\f]*[+~]/, H = /:not\($/, I = /h\d/i, J = /input|select|textarea|button/i, K = /\\(?!\\)/g, L = {
                    ID: new RegExp("^#(" + s + ")"),
                    CLASS: new RegExp("^\\.(" + s + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + s + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + s.replace("[-", "[-\\*") + ")"),
                    ATTR: new RegExp("^" + v),
                    PSEUDO: new RegExp("^" + w),
                    CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)","i"),
                    POS: new RegExp(x,"ig"),
                    needsContext: new RegExp("^" + r + "*[>+~]|" + x,"i")
                }, M = {}, N = [], O = {}, P = [], Q = function(a) {
                    return a.sizzleFilter = !0,
                        a
                }
                , R = function(a) {
                    return function(b) {
                        return b.nodeName.toLowerCase() === "input" && b.type === a
                    }
                }
                , S = function(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return (c === "input" || c === "button") && b.type === a
                    }
                }
                , T = function(a) {
                    var b = !1
                        , c = h.createElement("div");
                    try {
                        b = a(c)
                    } catch (d) {}
                    return c = null ,
                        b
                }
                , U = T(function(a) {
                        a.innerHTML = "<select></select>";
                        var b = typeof a.lastChild.getAttribute("multiple");
                        return b !== "boolean" && b !== "string"
                    }
                ), V = T(function(a) {
                        a.id = q + 0,
                            a.innerHTML = "<a name='" + q + "'></a><div name='" + q + "'></div>",
                            i.insertBefore(a, i.firstChild);
                        var b = h.getElementsByName && h.getElementsByName(q).length === 2 + h.getElementsByName(q + 0).length;
                        return g = !h.getElementById(q),
                            i.removeChild(a),
                            b
                    }
                ), W = T(function(a) {
                        return a.appendChild(h.createComment("")),
                            a.getElementsByTagName("*").length === 0
                    }
                ), X = T(function(a) {
                        return a.innerHTML = "<a href='#'></a>",
                            a.firstChild && typeof a.firstChild.getAttribute !== j && a.firstChild.getAttribute("href") === "#"
                    }
                ), Y = T(function(a) {
                        return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                            !a.getElementsByClassName || a.getElementsByClassName("e").length === 0 ? !1 : (a.lastChild.className = "e",
                                a.getElementsByClassName("e").length !== 1)
                    }
                ), Z = function(a, b, c, d) {
                    c = c || [],
                        b = b || h;
                    var e, f, g, i, j = b.nodeType;
                    if (j !== 1 && j !== 9) {
                        return []
                    }
                    if (!a || typeof a != "string") {
                        return c
                    }
                    g = ba(b);
                    if (!g && !d) {
                        if (e = F.exec(a)) {
                            if (i = e[1]) {
                                if (j === 9) {
                                    f = b.getElementById(i);
                                    if (!f || !f.parentNode) {
                                        return c
                                    }
                                    if (f.id === i) {
                                        return c.push(f),
                                            c
                                    }
                                } else {
                                    if (b.ownerDocument && (f = b.ownerDocument.getElementById(i)) && bb(b, f) && f.id === i) {
                                        return c.push(f),
                                            c
                                    }
                                }
                            } else {
                                if (e[2]) {
                                    return o.apply(c, n.call(b.getElementsByTagName(a), 0)),
                                        c
                                }
                                if ((i = e[3]) && Y && b.getElementsByClassName) {
                                    return o.apply(c, n.call(b.getElementsByClassName(i), 0)),
                                        c
                                }
                            }
                        }
                    }
                    return bm(a, b, c, d, g)
                }
                , $ = Z.selectors = {
                    cacheLength: 50,
                    match: L,
                    order: ["ID", "TAG"],
                    attrHandle: {},
                    createPseudo: Q,
                    find: {
                        ID: g ? function(a, b, c) {
                            if (typeof b.getElementById !== j && !c) {
                                var d = b.getElementById(a);
                                return d && d.parentNode ? [d] : []
                            }
                        }
                            : function(a, c, d) {
                            if (typeof c.getElementById !== j && !d) {
                                var e = c.getElementById(a);
                                return e ? e.id === a || typeof e.getAttributeNode !== j && e.getAttributeNode("id").value === a ? [e] : b : []
                            }
                        }
                        ,
                        TAG: W ? function(a, b) {
                            if (typeof b.getElementsByTagName !== j) {
                                return b.getElementsByTagName(a)
                            }
                        }
                            : function(a, b) {
                            var c = b.getElementsByTagName(a);
                            if (a === "*") {
                                var d, e = [], f = 0;
                                for (; d = c[f]; f++) {
                                    d.nodeType === 1 && e.push(d)
                                }
                                return e
                            }
                            return c
                        }
                    },
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(a) {
                            return a[1] = a[1].replace(K, ""),
                                a[3] = (a[4] || a[5] || "").replace(K, ""),
                                a[2] === "~=" && (a[3] = " " + a[3] + " "),
                                a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(),
                                a[1] === "nth" ? (a[2] || Z.error(a[0]),
                                    a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")),
                                    a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && Z.error(a[0]),
                                a
                        },
                        PSEUDO: function(a) {
                            var b, c = a[4];
                            return L.CHILD.test(a[0]) ? null  : (c && (b = D.exec(c)) && b.pop() && (a[0] = a[0].slice(0, b[0].length - c.length - 1),
                                c = b[0].slice(0, -1)),
                                a.splice(2, 3, c || a[3]),
                                a)
                        }
                    },
                    filter: {
                        ID: g ? function(a) {
                            return a = a.replace(K, ""),
                                function(b) {
                                    return b.getAttribute("id") === a
                                }
                        }
                            : function(a) {
                            return a = a.replace(K, ""),
                                function(b) {
                                    var c = typeof b.getAttributeNode !== j && b.getAttributeNode("id");
                                    return c && c.value === a
                                }
                        }
                        ,
                        TAG: function(a) {
                            return a === "*" ? function() {
                                return !0
                            }
                                : (a = a.replace(K, "").toLowerCase(),
                                function(b) {
                                    return b.nodeName && b.nodeName.toLowerCase() === a
                                }
                                )
                        },
                        CLASS: function(a) {
                            var b = M[a];
                            return b || (b = M[a] = new RegExp("(^|" + r + ")" + a + "(" + r + "|$)"),
                                N.push(a),
                                N.length > $.cacheLength && delete M[N.shift()]),
                                function(a) {
                                    return b.test(a.className || typeof a.getAttribute !== j && a.getAttribute("class") || "")
                                }
                        },
                        ATTR: function(a, b, c) {
                            return b ? function(d) {
                                var e = Z.attr(d, a)
                                    , f = e + "";
                                if (e == null ) {
                                    return b === "!="
                                }
                                switch (b) {
                                    case "=":
                                        return f === c;
                                    case "!=":
                                        return f !== c;
                                    case "^=":
                                        return c && f.indexOf(c) === 0;
                                    case "*=":
                                        return c && f.indexOf(c) > -1;
                                    case "$=":
                                        return c && f.substr(f.length - c.length) === c;
                                    case "~=":
                                        return (" " + f + " ").indexOf(c) > -1;
                                    case "|=":
                                        return f === c || f.substr(0, c.length + 1) === c + "-"
                                }
                            }
                                : function(b) {
                                return Z.attr(b, a) != null
                            }
                        },
                        CHILD: function(a, b, c, d) {
                            if (a === "nth") {
                                var e = m++;
                                return function(a) {
                                    var b, f, g = 0, h = a;
                                    if (c === 1 && d === 0) {
                                        return !0
                                    }
                                    b = a.parentNode;
                                    if (b && (b[q] !== e || !a.sizset)) {
                                        for (h = b.firstChild; h; h = h.nextSibling) {
                                            if (h.nodeType === 1) {
                                                h.sizset = ++g;
                                                if (h === a) {
                                                    break
                                                }
                                            }
                                        }
                                        b[q] = e
                                    }
                                    return f = a.sizset - d,
                                        c === 0 ? f === 0 : f % c === 0 && f / c >= 0
                                }
                            }
                            return function(b) {
                                var c = b;
                                switch (a) {
                                    case "only":
                                    case "first":
                                        while (c = c.previousSibling) {
                                            if (c.nodeType === 1) {
                                                return !1
                                            }
                                        }
                                        if (a === "first") {
                                            return !0
                                        }
                                        c = b;
                                    case "last":
                                        while (c = c.nextSibling) {
                                            if (c.nodeType === 1) {
                                                return !1
                                            }
                                        }
                                        return !0
                                }
                            }
                        },
                        PSEUDO: function(a, b, c, d) {
                            var e = $.pseudos[a] || $.pseudos[a.toLowerCase()];
                            return e || Z.error("unsupported pseudo: " + a),
                                e.sizzleFilter ? e(b, c, d) : e
                        }
                    },
                    pseudos: {
                        not: Q(function(a, b, c) {
                                var d = bl(a.replace(A, "$1"), b, c);
                                return function(a) {
                                    return !d(a)
                                }
                            }
                        ),
                        enabled: function(a) {
                            return a.disabled === !1
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && !!a.checked || b === "option" && !!a.selected
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex,
                                a.selected === !0
                        },
                        parent: function(a) {
                            return !$.pseudos.empty(a)
                        },
                        empty: function(a) {
                            var b;
                            a = a.firstChild;
                            while (a) {
                                if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) {
                                    return !1
                                }
                                a = a.nextSibling
                            }
                            return !0
                        },
                        contains: Q(function(a) {
                                return function(b) {
                                    return (b.textContent || b.innerText || bc(b)).indexOf(a) > -1
                                }
                            }
                        ),
                        has: Q(function(a) {
                                return function(b) {
                                    return Z(a, b).length > 0
                                }
                            }
                        ),
                        header: function(a) {
                            return I.test(a.nodeName)
                        },
                        text: function(a) {
                            var b, c;
                            return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null  || c.toLowerCase() === b)
                        },
                        radio: R("radio"),
                        checkbox: R("checkbox"),
                        file: R("file"),
                        password: R("password"),
                        image: R("image"),
                        submit: S("submit"),
                        reset: S("reset"),
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && a.type === "button" || b === "button"
                        },
                        input: function(a) {
                            return J.test(a.nodeName)
                        },
                        focus: function(a) {
                            var b = a.ownerDocument;
                            return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
                        },
                        active: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b, c) {
                            return c ? a.slice(1) : [a[0]]
                        },
                        last: function(a, b, c) {
                            var d = a.pop();
                            return c ? a : [d]
                        },
                        even: function(a, b, c) {
                            var d = []
                                , e = c ? 1 : 0
                                , f = a.length;
                            for (; e < f; e = e + 2) {
                                d.push(a[e])
                            }
                            return d
                        },
                        odd: function(a, b, c) {
                            var d = []
                                , e = c ? 0 : 1
                                , f = a.length;
                            for (; e < f; e = e + 2) {
                                d.push(a[e])
                            }
                            return d
                        },
                        lt: function(a, b, c) {
                            return c ? a.slice(+b) : a.slice(0, +b)
                        },
                        gt: function(a, b, c) {
                            return c ? a.slice(0, +b + 1) : a.slice(+b + 1)
                        },
                        eq: function(a, b, c) {
                            var d = a.splice(+b, 1);
                            return c ? a : d
                        }
                    }
                };
            $.setFilters.nth = $.setFilters.eq,
                $.filters = $.pseudos,
                X || ($.attrHandle = {
                    href: function(a) {
                        return a.getAttribute("href", 2)
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                }),
                V && ($.order.push("NAME"),
                    $.find.NAME = function(a, b) {
                        if (typeof b.getElementsByName !== j) {
                            return b.getElementsByName(a)
                        }
                    }
                    ),
                Y && ($.order.splice(1, 0, "CLASS"),
                    $.find.CLASS = function(a, b, c) {
                        if (typeof b.getElementsByClassName !== j && !c) {
                            return b.getElementsByClassName(a)
                        }
                    }
                    );
            try {
                n.call(i.childNodes, 0)[0].nodeType
            } catch (_) {
                n = function(a) {
                    var b, c = [];
                    for (; b = this[a]; a++) {
                        c.push(b)
                    }
                    return c
                }
            }
            var ba = Z.isXML = function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                }
                , bb = Z.contains = i.compareDocumentPosition ? function(a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                }
                    : i.contains ? function(a, b) {
                    var c = a.nodeType === 9 ? a.documentElement : a
                        , d = b.parentNode;
                    return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
                }
                    : function(a, b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                    return !1
                }
                , bc = Z.getText = function(a) {
                    var b, c = "", d = 0, e = a.nodeType;
                    if (e) {
                        if (e === 1 || e === 9 || e === 11) {
                            if (typeof a.textContent == "string") {
                                return a.textContent
                            }
                            for (a = a.firstChild; a; a = a.nextSibling) {
                                c += bc(a)
                            }
                        } else {
                            if (e === 3 || e === 4) {
                                return a.nodeValue
                            }
                        }
                    } else {
                        for (; b = a[d]; d++) {
                            c += bc(b)
                        }
                    }
                    return c
                }
                ;
            Z.attr = function(a, b) {
                var c, d = ba(a);
                return d || (b = b.toLowerCase()),
                    $.attrHandle[b] ? $.attrHandle[b](a) : U || d ? a.getAttribute(b) : (c = a.getAttributeNode(b),
                        c ? typeof a[b] == "boolean" ? a[b] ? b : null  : c.specified ? c.value : null  : null )
            }
                ,
                Z.error = function(a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }
                ,
                [0, 0].sort(function() {
                        return l = 0
                    }
                ),
                i.compareDocumentPosition ? e = function(a, b) {
                    return a === b ? (k = !0,
                        0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
                }
                    : (e = function(a, b) {
                    if (a === b) {
                        return k = !0,
                            0
                    }
                    if (a.sourceIndex && b.sourceIndex) {
                        return a.sourceIndex - b.sourceIndex
                    }
                    var c, d, e = [], g = [], h = a.parentNode, i = b.parentNode, j = h;
                    if (h === i) {
                        return f(a, b)
                    }
                    if (!h) {
                        return -1
                    }
                    if (!i) {
                        return 1
                    }
                    while (j) {
                        e.unshift(j),
                            j = j.parentNode
                    }
                    j = i;
                    while (j) {
                        g.unshift(j),
                            j = j.parentNode
                    }
                    c = e.length,
                        d = g.length;
                    for (var l = 0; l < c && l < d; l++) {
                        if (e[l] !== g[l]) {
                            return f(e[l], g[l])
                        }
                    }
                    return l === c ? f(a, g[l], -1) : f(e[l], b, 1)
                }
                    ,
                    f = function(a, b, c) {
                        if (a === b) {
                            return c
                        }
                        var d = a.nextSibling;
                        while (d) {
                            if (d === b) {
                                return -1
                            }
                            d = d.nextSibling
                        }
                        return 1
                    }
                    ),
                Z.uniqueSort = function(a) {
                    var b, c = 1;
                    if (e) {
                        k = l,
                            a.sort(e);
                        if (k) {
                            for (; b = a[c]; c++) {
                                b === a[c - 1] && a.splice(c--, 1)
                            }
                        }
                    }
                    return a
                }
            ;
            var bl = Z.compile = function(a, b, c) {
                    var d, e, f, g = O[a];
                    if (g && g.context === b) {
                        return g
                    }
                    e = bg(a, b, c);
                    for (f = 0; d = e[f]; f++) {
                        e[f] = bj(d, b, c)
                    }
                    return g = O[a] = bk(e),
                        g.context = b,
                        g.runs = g.dirruns = 0,
                        P.push(a),
                        P.length > $.cacheLength && delete O[P.shift()],
                        g
                }
                ;
            Z.matches = function(a, b) {
                return Z(a, null , null , b)
            }
                ,
                Z.matchesSelector = function(a, b) {
                    return Z(b, null , null , [a]).length > 0
                }
            ;
            var bm = function(a, b, e, f, g) {
                    a = a.replace(A, "$1");
                    var h, i, j, k, l, m, p, q, r, s = a.match(C), t = a.match(E), u = b.nodeType;
                    if (L.POS.test(a)) {
                        return bf(a, b, e, f, s)
                    }
                    if (f) {
                        h = n.call(f, 0)
                    } else {
                        if (s && s.length === 1) {
                            if (t.length > 1 && u === 9 && !g && (s = L.ID.exec(t[0]))) {
                                b = $.find.ID(s[1], b, g)[0];
                                if (!b) {
                                    return e
                                }
                                a = a.slice(t.shift().length)
                            }
                            q = (s = G.exec(t[0])) && !s.index && b.parentNode || b,
                                r = t.pop(),
                                m = r.split(":not")[0];
                            for (j = 0,
                                     k = $.order.length; j < k; j++) {
                                p = $.order[j];
                                if (s = L[p].exec(m)) {
                                    h = $.find[p]((s[1] || "").replace(K, ""), q, g);
                                    if (h == null ) {
                                        continue
                                    }
                                    m === r && (a = a.slice(0, a.length - r.length) + m.replace(L[p], ""),
                                        a || o.apply(e, n.call(h, 0)));
                                    break
                                }
                            }
                        }
                    }
                    if (a) {
                        i = bl(a, b, g),
                            d = i.dirruns++,
                            h == null  && (h = $.find.TAG("*", G.test(a) && b.parentNode || b));
                        for (j = 0; l = h[j]; j++) {
                            c = i.runs++,
                                i(l, b) && e.push(l)
                        }
                    }
                    return e
                }
                ;
            h.querySelectorAll && function() {
                var a, b = bm, c = /'|\\/g, d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, e = [], f = [":active"], g = i.matchesSelector || i.mozMatchesSelector || i.webkitMatchesSelector || i.oMatchesSelector || i.msMatchesSelector;
                T(function(a) {
                        a.innerHTML = "<select><option selected></option></select>",
                            a.querySelectorAll("[selected]").length || e.push("\\[" + r + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                            a.querySelectorAll(":checked").length || e.push(":checked")
                    }
                ),
                    T(function(a) {
                            a.innerHTML = "<p test=''></p>",
                                a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + r + "*(?:\"\"|'')"),
                                a.innerHTML = "<input type='hidden'>",
                                a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
                        }
                    ),
                    e = e.length && new RegExp(e.join("|")),
                    bm = function(a, d, f, g, h) {
                        if (!g && !h && (!e || !e.test(a))) {
                            if (d.nodeType === 9) {
                                try {
                                    return o.apply(f, n.call(d.querySelectorAll(a), 0)),
                                        f
                                } catch (i) {}
                            } else {
                                if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                                    var j = d.getAttribute("id")
                                        , k = j || q
                                        , l = G.test(a) && d.parentNode || d;
                                    j ? k = k.replace(c, "\\$&") : d.setAttribute("id", k);
                                    try {
                                        return o.apply(f, n.call(l.querySelectorAll(a.replace(C, "[id='" + k + "'] $&")), 0)),
                                            f
                                    } catch (i) {} finally {
                                        j || d.removeAttribute("id")
                                    }
                                }
                            }
                        }
                        return b(a, d, f, g, h)
                    }
                    ,
                    g && (T(function(b) {
                            a = g.call(b, "div");
                            try {
                                g.call(b, "[test!='']:sizzle"),
                                    f.push($.match.PSEUDO)
                            } catch (c) {}
                        }
                    ),
                        f = new RegExp(f.join("|")),
                        Z.matchesSelector = function(b, c) {
                            c = c.replace(d, "='$1']");
                            if (!ba(b) && !f.test(c) && (!e || !e.test(c))) {
                                try {
                                    var h = g.call(b, c);
                                    if (h || a || b.document && b.document.nodeType !== 11) {
                                        return h
                                    }
                                } catch (i) {}
                            }
                            return Z(c, null , null , [b]).length > 0
                        }
                        )
            }
                (),
                Z.attr = p.attr,
                p.find = Z,
                p.expr = Z.selectors,
                p.expr[":"] = p.expr.pseudos,
                p.unique = Z.uniqueSort,
                p.text = Z.getText,
                p.isXMLDoc = Z.isXML,
                p.contains = Z.contains
        }
            (a);
    var bc = /Until$/
        , bd = /^(?:parents|prev(?:Until|All))/
        , be = /^.[^:#\[\.,]*$/
        , bf = p.expr.match.needsContext
        , bg = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.fn.extend({
        find: function(a) {
            var b, c, d, e, f, g, h = this;
            if (typeof a != "string") {
                return p(a).filter(function() {
                        for (b = 0,
                                 c = h.length; b < c; b++) {
                            if (p.contains(h[b], this)) {
                                return !0
                            }
                        }
                    }
                )
            }
            g = this.pushStack("", "find", a);
            for (b = 0,
                     c = this.length; b < c; b++) {
                d = g.length,
                    p.find(a, this[b], g);
                if (b > 0) {
                    for (e = d; e < g.length; e++) {
                        for (f = 0; f < d; f++) {
                            if (g[f] === g[e]) {
                                g.splice(e--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return g
        },
        has: function(a) {
            var b, c = p(a, this), d = c.length;
            return this.filter(function() {
                    for (b = 0; b < d; b++) {
                        if (p.contains(this, c[b])) {
                            return !0
                        }
                    }
                }
            )
        },
        not: function(a) {
            return this.pushStack(bj(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(bj(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
            for (; d < e; d++) {
                c = this[d];
                while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                    if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            }
            return f = f.length > 1 ? p.unique(f) : f,
                this.pushStack(f, "closest", a)
        },
        index: function(a) {
            return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, b) {
            var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a)
                , d = p.merge(this.get(), c);
            return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d))
        },
        addBack: function(a) {
            return this.add(a == null  ? this.prevObject : this.prevObject.filter(a))
        }
    }),
        p.fn.andSelf = p.fn.addBack,
        p.each({
                parent: function(a) {
                    var b = a.parentNode;
                    return b && b.nodeType !== 11 ? b : null
                },
                parents: function(a) {
                    return p.dir(a, "parentNode")
                },
                parentsUntil: function(a, b, c) {
                    return p.dir(a, "parentNode", c)
                },
                next: function(a) {
                    return bi(a, "nextSibling")
                },
                prev: function(a) {
                    return bi(a, "previousSibling")
                },
                nextAll: function(a) {
                    return p.dir(a, "nextSibling")
                },
                prevAll: function(a) {
                    return p.dir(a, "previousSibling")
                },
                nextUntil: function(a, b, c) {
                    return p.dir(a, "nextSibling", c)
                },
                prevUntil: function(a, b, c) {
                    return p.dir(a, "previousSibling", c)
                },
                siblings: function(a) {
                    return p.sibling((a.parentNode || {}).firstChild, a)
                },
                children: function(a) {
                    return p.sibling(a.firstChild)
                },
                contents: function(a) {
                    return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes)
                }
            }, function(a, b) {
                p.fn[a] = function(c, d) {
                    var e = p.map(this, b, c);
                    return bc.test(a) || (d = c),
                        d && typeof d == "string" && (e = p.filter(d, e)),
                        e = this.length > 1 && !bg[a] ? p.unique(e) : e,
                        this.length > 1 && bd.test(a) && (e = e.reverse()),
                        this.pushStack(e, a, k.call(arguments).join(","))
                }
            }
        ),
        p.extend({
            filter: function(a, b, c) {
                return c && (a = ":not(" + a + ")"),
                    b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
            },
            dir: function(a, c, d) {
                var e = []
                    , f = a[c];
                while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) {
                    f.nodeType === 1 && e.push(f),
                        f = f[c]
                }
                return e
            },
            sibling: function(a, b) {
                var c = [];
                for (; a; a = a.nextSibling) {
                    a.nodeType === 1 && a !== b && c.push(a)
                }
                return c
            }
        });
    var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , bm = / jQuery\d+="(?:null|\d+)"/g
        , bn = /^\s+/
        , bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , bp = /<([\w:]+)/
        , bq = /<tbody/i
        , br = /<|&#?\w+;/
        , bs = /<(?:script|style|link)/i
        , bt = /<(?:script|object|embed|option|style)/i
        , bu = new RegExp("<(?:" + bl + ")[\\s/>]","i")
        , bv = /^(?:checkbox|radio)$/
        , bw = /checked\s*(?:[^=]|=\s*.checked.)/i
        , bx = /\/(java|ecma)script/i
        , by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
        , bz = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }
        , bA = bk(e)
        , bB = bA.appendChild(e.createElement("div"));
    bz.optgroup = bz.option,
        bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead,
        bz.th = bz.td,
        p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]),
        p.fn.extend({
            text: function(a) {
                return p.access(this, function(a) {
                        return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
                    }
                    , null , a, arguments.length)
            },
            wrapAll: function(a) {
                if (p.isFunction(a)) {
                    return this.each(function(b) {
                            p(this).wrapAll(a.call(this, b))
                        }
                    )
                }
                if (this[0]) {
                    var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b.map(function() {
                                var a = this;
                                while (a.firstChild && a.firstChild.nodeType === 1) {
                                    a = a.firstChild
                                }
                                return a
                            }
                        ).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return p.isFunction(a) ? this.each(function(b) {
                        p(this).wrapInner(a.call(this, b))
                    }
                ) : this.each(function() {
                        var b = p(this)
                            , c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    }
                )
            },
            wrap: function(a) {
                var b = p.isFunction(a);
                return this.each(function(c) {
                        p(this).wrapAll(b ? a.call(this, c) : a)
                    }
                )
            },
            unwrap: function() {
                return this.parent().each(function() {
                        p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
                    }
                ).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                        (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
                    }
                )
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                        (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
                    }
                )
            },
            before: function() {
                if (!bh(this[0])) {
                    return this.domManip(arguments, !1, function(a) {
                            this.parentNode.insertBefore(a, this)
                        }
                    )
                }
                if (arguments.length) {
                    var a = p.clean(arguments);
                    return this.pushStack(p.merge(a, this), "before", this.selector)
                }
            },
            after: function() {
                if (!bh(this[0])) {
                    return this.domManip(arguments, !1, function(a) {
                            this.parentNode.insertBefore(a, this.nextSibling)
                        }
                    )
                }
                if (arguments.length) {
                    var a = p.clean(arguments);
                    return this.pushStack(p.merge(this, a), "after", this.selector)
                }
            },
            remove: function(a, b) {
                var c, d = 0;
                for (; (c = this[d]) != null ; d++) {
                    if (!a || p.filter(a, [c]).length) {
                        !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")),
                            p.cleanData([c])),
                            c.parentNode && c.parentNode.removeChild(c)
                    }
                }
                return this
            },
            empty: function() {
                var a, b = 0;
                for (; (a = this[b]) != null ; b++) {
                    a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
                    while (a.firstChild) {
                        a.removeChild(a.firstChild)
                    }
                }
                return this
            },
            clone: function(a, b) {
                return a = a == null  ? !1 : a,
                    b = b == null  ? a : b,
                    this.map(function() {
                            return p.clone(this, a, b)
                        }
                    )
            },
            html: function(a) {
                return p.access(this, function(a) {
                        var c = this[0] || {}
                            , d = 0
                            , e = this.length;
                        if (a === b) {
                            return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b
                        }
                        if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = a.replace(bo, "<$1></$2>");
                            try {
                                for (; d < e; d++) {
                                    c = this[d] || {},
                                        c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")),
                                            c.innerHTML = a)
                                }
                                c = 0
                            } catch (f) {}
                        }
                        c && this.empty().append(a)
                    }
                    , null , a, arguments.length)
            },
            replaceWith: function(a) {
                return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function(b) {
                        var c = p(this)
                            , d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    }
                ) : (typeof a != "string" && (a = p(a).detach()),
                    this.each(function() {
                            var b = this.nextSibling
                                , c = this.parentNode;
                            p(this).remove(),
                                b ? p(b).before(a) : p(c).append(a)
                        }
                    ))
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, c, d) {
                a = [].concat.apply([], a);
                var e, f, g, h, i = 0, j = a[0], k = [], l = this.length;
                if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) {
                    return this.each(function() {
                            p(this).domManip(a, c, d)
                        }
                    )
                }
                if (p.isFunction(j)) {
                    return this.each(function(e) {
                            var f = p(this);
                            a[0] = j.call(this, e, c ? f.html() : b),
                                f.domManip(a, c, d)
                        }
                    )
                }
                if (this[0]) {
                    e = p.buildFragment(a, this, k),
                        g = e.fragment,
                        f = g.firstChild,
                        g.childNodes.length === 1 && (g = f);
                    if (f) {
                        c = c && p.nodeName(f, "tr");
                        for (h = e.cacheable || l - 1; i < l; i++) {
                            d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0))
                        }
                    }
                    g = f = null ,
                        k.length && p.each(k, function(a, b) {
                                b.src ? p.ajax ? p.ajax({
                                    url: b.src,
                                    type: "GET",
                                    dataType: "script",
                                    async: !1,
                                    global: !1,
                                    "throws": !0
                                }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")),
                                    b.parentNode && b.parentNode.removeChild(b)
                            }
                        )
                }
                return this
            }
        }),
        p.buildFragment = function(a, c, d) {
            var f, g, h, i = a[0];
            return c = c || e,
                c = (c[0] || c).ownerDocument || c[0] || c,
                typeof c.createDocumentFragment == "undefined" && (c = e),
                a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0,
                    f = p.fragments[i],
                    h = f !== b),
                f || (f = c.createDocumentFragment(),
                    p.clean(a, c, f, d),
                    g && (p.fragments[i] = h && f)),
            {
                fragment: f,
                cacheable: g
            }
        }
        ,
        p.fragments = {},
        p.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(a, b) {
                p.fn[a] = function(c) {
                    var d, e = 0, f = [], g = p(c), h = g.length, i = this.length === 1 && this[0].parentNode;
                    if ((i == null  || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) {
                        return g[b](this[0]),
                            this
                    }
                    for (; e < h; e++) {
                        d = (e > 0 ? this.clone(!0) : this).get(),
                            p(g[e])[b](d),
                            f = f.concat(d)
                    }
                    return this.pushStack(f, a, g.selector)
                }
            }
        ),
        p.extend({
            clone: function(a, b, c) {
                var d, e, f, g;
                p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML,
                    bB.removeChild(g = bB.firstChild));
                if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
                    bE(a, g),
                        d = bF(a),
                        e = bF(g);
                    for (f = 0; d[f]; ++f) {
                        e[f] && bE(d[f], e[f])
                    }
                }
                if (b) {
                    bD(a, g);
                    if (c) {
                        d = bF(a),
                            e = bF(g);
                        for (f = 0; d[f]; ++f) {
                            bD(d[f], e[f])
                        }
                    }
                }
                return d = e = null ,
                    g
            },
            clean: function(a, b, c, d) {
                var f, g, h, i, j, k, l, m, n, o, q, r, s = 0, t = [];
                if (!b || typeof b.createDocumentFragment == "undefined") {
                    b = e
                }
                for (g = b === e && bA; (h = a[s]) != null ; s++) {
                    typeof h == "number" && (h += "");
                    if (!h) {
                        continue
                    }
                    if (typeof h == "string") {
                        if (!br.test(h)) {
                            h = b.createTextNode(h)
                        } else {
                            g = g || bk(b),
                                l = l || g.appendChild(b.createElement("div")),
                                h = h.replace(bo, "<$1></$2>"),
                                i = (bp.exec(h) || ["", ""])[1].toLowerCase(),
                                j = bz[i] || bz._default,
                                k = j[0],
                                l.innerHTML = j[1] + h + j[2];
                            while (k--) {
                                l = l.lastChild
                            }
                            if (!p.support.tbody) {
                                m = bq.test(h),
                                    n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
                                for (f = n.length - 1; f >= 0; --f) {
                                    p.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f])
                                }
                            }
                            !p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild),
                                h = l.childNodes,
                                l = g.lastChild
                        }
                    }
                    h.nodeType ? t.push(h) : t = p.merge(t, h)
                }
                l && (g.removeChild(l),
                    h = l = g = null );
                if (!p.support.appendChecked) {
                    for (s = 0; (h = t[s]) != null ; s++) {
                        p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG)
                    }
                }
                if (c) {
                    q = function(a) {
                        if (!a.type || bx.test(a.type)) {
                            return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
                        }
                    }
                    ;
                    for (s = 0; (h = t[s]) != null ; s++) {
                        if (!p.nodeName(h, "script") || !q(h)) {
                            c.appendChild(h),
                                typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q),
                                    t.splice.apply(t, [s + 1, 0].concat(r)),
                                    s += r.length)
                        }
                    }
                }
                return t
            },
            cleanData: function(a, b) {
                var c, d, e, f, g = 0, h = p.expando, i = p.cache, j = p.support.deleteExpando, k = p.event.special;
                for (; (e = a[g]) != null ; g++) {
                    if (b || p.acceptData(e)) {
                        d = e[h],
                            c = d && i[d];
                        if (c) {
                            if (c.events) {
                                for (f in c.events) {
                                    k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle)
                                }
                            }
                            i[d] && (delete i[d],
                                j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null ,
                                p.deletedIds.push(d))
                        }
                    }
                }
            }
        }),
        function() {
            var a, b;
            p.uaMatch = function(a) {
                a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            }
                ,
                a = p.uaMatch(g.userAgent),
                b = {},
                a.browser && (b[a.browser] = !0,
                    b.version = a.version),
                b.webkit && (b.safari = !0),
                p.browser = b,
                p.sub = function() {
                    function a(b, c) {
                        return new a.fn.init(b,c)
                    }
                    p.extend(!0, a, this),
                        a.superclass = this,
                        a.fn = a.prototype = this(),
                        a.fn.constructor = a,
                        a.sub = this.sub,
                        a.fn.init = function c(c, d) {
                            return d && d instanceof p && !(d instanceof a) && (d = a(d)),
                                p.fn.init.call(this, c, d, b)
                        }
                        ,
                        a.fn.init.prototype = a.fn;
                    var b = a(e);
                    return a
                }
        }
            ();
    var bH, bI, bJ, bK = /alpha\([^)]*\)/i, bL = /opacity=([^)]*)/, bM = /^(top|right|bottom|left)$/, bN = /^margin/, bO = new RegExp("^(" + q + ")(.*)$","i"), bP = new RegExp("^(" + q + ")(?!px)[a-z%]+$","i"), bQ = new RegExp("^([-+])=(" + q + ")","i"), bR = {}, bS = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bT = {
        letterSpacing: 0,
        fontWeight: 400,
        lineHeight: 1
    }, bU = ["Top", "Right", "Bottom", "Left"], bV = ["Webkit", "O", "Moz", "ms"], bW = p.fn.toggle;
    p.fn.extend({
        css: function(a, c) {
            return p.access(this, function(a, c, d) {
                    return d !== b ? p.style(a, c, d) : p.css(a, c)
                }
                , a, c, arguments.length > 1)
        },
        show: function() {
            return bZ(this, !0)
        },
        hide: function() {
            return bZ(this)
        },
        toggle: function(a, b) {
            var c = typeof a == "boolean";
            return p.isFunction(a) && p.isFunction(b) ? bW.apply(this, arguments) : this.each(function() {
                    (c ? a : bY(this)) ? p(this).show() : p(this).hide()
                }
            )
        }
    }),
        p.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = bH(a, "opacity");
                            return c === "" ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": p.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, c, d, e) {
                if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) {
                    return
                }
                var f, g, h, i = p.camelCase(c), j = a.style;
                c = p.cssProps[i] || (p.cssProps[i] = bX(j, i)),
                    h = p.cssHooks[c] || p.cssHooks[i];
                if (d === b) {
                    return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c]
                }
                g = typeof d,
                    g === "string" && (f = bQ.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)),
                        g = "number");
                if (d == null  || g === "number" && isNaN(d)) {
                    return
                }
                g === "number" && !p.cssNumber[i] && (d += "px");
                if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) {
                    try {
                        j[c] = d
                    } catch (k) {}
                }
            },
            css: function(a, c, d, e) {
                var f, g, h, i = p.camelCase(c);
                return c = p.cssProps[i] || (p.cssProps[i] = bX(a.style, i)),
                    h = p.cssHooks[c] || p.cssHooks[i],
                    h && "get" in h && (f = h.get(a, !0, e)),
                    f === b && (f = bH(a, c)),
                    f === "normal" && c in bT && (f = bT[c]),
                    d || e !== b ? (g = parseFloat(f),
                        d || p.isNumeric(g) ? g || 0 : f) : f
            },
            swap: function(a, b, c) {
                var d, e, f = {};
                for (e in b) {
                    f[e] = a.style[e],
                        a.style[e] = b[e]
                }
                d = c.call(a);
                for (e in b) {
                    a.style[e] = f[e]
                }
                return d
            }
        }),
        a.getComputedStyle ? bH = function(a, b) {
            var c, d, e, f, g = getComputedStyle(a, null ), h = a.style;
            return g && (c = g[b],
                c === "" && !p.contains(a.ownerDocument.documentElement, a) && (c = p.style(a, b)),
                bP.test(c) && bN.test(b) && (d = h.width,
                    e = h.minWidth,
                    f = h.maxWidth,
                    h.minWidth = h.maxWidth = h.width = c,
                    c = g.width,
                    h.width = d,
                    h.minWidth = e,
                    h.maxWidth = f)),
                c
        }
            : e.documentElement.currentStyle && (bH = function(a, b) {
            var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
            return e == null  && f && f[b] && (e = f[b]),
                bP.test(e) && !bM.test(b) && (c = f.left,
                    d = a.runtimeStyle && a.runtimeStyle.left,
                    d && (a.runtimeStyle.left = a.currentStyle.left),
                    f.left = b === "fontSize" ? "1em" : e,
                    e = f.pixelLeft + "px",
                    f.left = c,
                    d && (a.runtimeStyle.left = d)),
                e === "" ? "auto" : e
        }
            ),
        p.each(["height", "width"], function(a, b) {
                p.cssHooks[b] = {
                    get: function(a, c, d) {
                        if (c) {
                            return a.offsetWidth !== 0 || bH(a, "display") !== "none" ? ca(a, b, d) : p.swap(a, bS, function() {
                                    return ca(a, b, d)
                                }
                            )
                        }
                    },
                    set: function(a, c, d) {
                        return b$(a, c, d ? b_(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
                    }
                }
            }
        ),
        p.support.opacity || (p.cssHooks.opacity = {
            get: function(a, b) {
                return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style
                    , d = a.currentStyle
                    , e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : ""
                    , f = d && d.filter || c.filter || "";
                c.zoom = 1;
                if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
                    c.removeAttribute("filter");
                    if (d && !d.filter) {
                        return
                    }
                }
                c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e
            }
        }),
        p(function() {
                p.support.reliableMarginRight || (p.cssHooks.marginRight = {
                    get: function(a, b) {
                        return p.swap(a, {
                                display: "inline-block"
                            }, function() {
                                if (b) {
                                    return bH(a, "marginRight")
                                }
                            }
                        )
                    }
                }),
                    !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function(a, b) {
                            p.cssHooks[b] = {
                                get: function(a, c) {
                                    if (c) {
                                        var d = bH(a, b);
                                        return bP.test(d) ? p(a).position()[b] + "px" : d
                                    }
                                }
                            }
                        }
                    )
            }
        ),
        p.expr && p.expr.filters && (p.expr.filters.hidden = function(a) {
            return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none"
        }
            ,
            p.expr.filters.visible = function(a) {
                return !p.expr.filters.hidden(a)
            }
            ),
        p.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(a, b) {
                p.cssHooks[a + b] = {
                    expand: function(c) {
                        var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
                        for (d = 0; d < 4; d++) {
                            f[a + bU[d] + b] = e[d] || e[d - 2] || e[0]
                        }
                        return f
                    }
                },
                    bN.test(a) || (p.cssHooks[a + b].set = b$)
            }
        );
    var cc = /%20/g
        , cd = /\[\]$/
        , ce = /\r?\n/g
        , cf = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
        , cg = /^(?:select|textarea)/i;
    p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                    return this.elements ? p.makeArray(this.elements) : this
                }
            ).filter(function() {
                    return this.name && !this.disabled && (this.checked || cg.test(this.nodeName) || cf.test(this.type))
                }
            ).map(function(a, b) {
                    var c = p(this).val();
                    return c == null  ? null  : p.isArray(c) ? p.map(c, function(a, c) {
                            return {
                                name: b.name,
                                value: a.replace(ce, "\r\n")
                            }
                        }
                    ) : {
                        name: b.name,
                        value: c.replace(ce, "\r\n")
                    }
                }
            ).get()
        }
    }),
        p.param = function(a, c) {
            var d, e = [], f = function(a, b) {
                    b = p.isFunction(b) ? b() : b == null  ? "" : b,
                        e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                }
                ;
            c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
            if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) {
                p.each(a, function() {
                        f(this.name, this.value)
                    }
                )
            } else {
                for (d in a) {
                    ch(d, a[d], c, f)
                }
            }
            return e.join("&").replace(cc, "+")
        }
    ;
    var ci, cj, ck = /#.*$/, cl = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, cm = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, cn = /^(?:GET|HEAD)$/, co = /^\/\//, cp = /\?/, cq = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, cr = /([?&])_=[^&]*/, cs = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, ct = p.fn.load, cu = {}, cv = {}, cw = ["*/"] + ["*"];
    try {
        ci = f.href
    } catch (cx) {
        ci = e.createElement("a"),
            ci.href = "",
            ci = ci.href
    }
    cj = cs.exec(ci.toLowerCase()) || [],
        p.fn.load = function(a, c, d) {
            if (typeof a != "string" && ct) {
                return ct.apply(this, arguments)
            }
            if (!this.length) {
                return this
            }
            var e, f, g, h = this, i = a.indexOf(" ");
            return i >= 0 && (e = a.slice(i, a.length),
                a = a.slice(0, i)),
                p.isFunction(c) ? (d = c,
                    c = b) : typeof c == "object" && (f = "POST"),
                p.ajax({
                    url: a,
                    type: f,
                    dataType: "html",
                    data: c,
                    complete: function(a, b) {
                        d && h.each(d, g || [a.responseText, b, a])
                    }
                }).done(function(a) {
                        g = arguments,
                            h.html(e ? p("<div>").append(a.replace(cq, "")).find(e) : a)
                    }
                ),
                this
        }
        ,
        p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
                p.fn[b] = function(a) {
                    return this.on(b, a)
                }
            }
        ),
        p.each(["get", "post"], function(a, c) {
                p[c] = function(a, d, e, f) {
                    return p.isFunction(d) && (f = f || e,
                        e = d,
                        d = b),
                        p.ajax({
                            type: c,
                            url: a,
                            data: d,
                            success: e,
                            dataType: f
                        })
                }
            }
        ),
        p.extend({
            getScript: function(a, c) {
                return p.get(a, b, c, "script")
            },
            getJSON: function(a, b, c) {
                return p.get(a, b, c, "json")
            },
            ajaxSetup: function(a, b) {
                return b ? cA(a, p.ajaxSettings) : (b = a,
                    a = p.ajaxSettings),
                    cA(a, b),
                    a
            },
            ajaxSettings: {
                url: ci,
                isLocal: cm.test(cj[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": cw
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": p.parseJSON,
                    "text xml": p.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: cy(cu),
            ajaxTransport: cy(cv),
            ajax: function(a, c) {
                function y(a, c, f, i) {
                    var k, s, t, u, w, y = c;
                    if (v === 2) {
                        return
                    }
                    v = 2,
                        h && clearTimeout(h),
                        g = b,
                        e = i || "",
                        x.readyState = a > 0 ? 4 : 0,
                        f && (u = cB(l, x, f));
                    if (a >= 200 && a < 300 || a === 304) {
                        l.ifModified && (w = x.getResponseHeader("Last-Modified"),
                            w && (p.lastModified[d] = w),
                            w = x.getResponseHeader("Etag"),
                            w && (p.etag[d] = w)),
                            a === 304 ? (y = "notmodified",
                                k = !0) : (k = cC(l, u),
                                y = k.state,
                                s = k.data,
                                t = k.error,
                                k = !t)
                    } else {
                        t = y;
                        if (!y || a) {
                            y = "error",
                                a < 0 && (a = 0)
                        }
                    }
                    x.status = a,
                        x.statusText = "" + (c || y),
                        k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]),
                        x.statusCode(r),
                        r = b,
                        j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]),
                        q.fireWith(m, [x, y]),
                        j && (n.trigger("ajaxComplete", [x, l]),
                            --p.active || p.event.trigger("ajaxStop"))
                }
                typeof a == "object" && (c = a,
                    a = b),
                    c = c || {};
                var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c), m = l.context || l, n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event, o = p.Deferred(), q = p.Callbacks("once memory"), r = l.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!v) {
                            var c = a.toLowerCase();
                            a = u[c] = u[c] || a,
                                t[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return v === 2 ? e : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (v === 2) {
                            if (!f) {
                                f = {};
                                while (c = cl.exec(e)) {
                                    f[c[1].toLowerCase()] = c[2]
                                }
                            }
                            c = f[a.toLowerCase()]
                        }
                        return c === b ? null  : c
                    },
                    overrideMimeType: function(a) {
                        return v || (l.mimeType = a),
                            this
                    },
                    abort: function(a) {
                        return a = a || w,
                            g && g.abort(a),
                            y(0, a),
                            this
                    }
                };
                o.promise(x),
                    x.success = x.done,
                    x.error = x.fail,
                    x.complete = q.add,
                    x.statusCode = function(a) {
                        if (a) {
                            var b;
                            if (v < 2) {
                                for (b in a) {
                                    r[b] = [r[b], a[b]]
                                }
                            } else {
                                b = a[x.status],
                                    x.always(b)
                            }
                        }
                        return this
                    }
                    ,
                    l.url = ((a || l.url) + "").replace(ck, "").replace(co, cj[1] + "//"),
                    l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s),
                    l.crossDomain == null  && (i = cs.exec(l.url.toLowerCase()),
                        l.crossDomain = !(!i || i[1] == cj[1] && i[2] == cj[2] && (i[3] || (i[1] === "http:" ? 80 : 443)) == (cj[3] || (cj[1] === "http:" ? 80 : 443)))),
                    l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)),
                    cz(cu, l, c, x);
                if (v === 2) {
                    return x
                }
                j = l.global,
                    l.type = l.type.toUpperCase(),
                    l.hasContent = !cn.test(l.type),
                    j && p.active++ === 0 && p.event.trigger("ajaxStart");
                if (!l.hasContent) {
                    l.data && (l.url += (cp.test(l.url) ? "&" : "?") + l.data,
                        delete l.data),
                        d = l.url;
                    if (l.cache === !1) {
                        var z = p.now()
                            , A = l.url.replace(cr, "$1_=" + z);
                        l.url = A + (A === l.url ? (cp.test(l.url) ? "&" : "?") + "_=" + z : "")
                    }
                }
                (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType),
                    l.ifModified && (d = d || l.url,
                        p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]),
                        p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])),
                    x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cw + "; q=0.01" : "") : l.accepts["*"]);
                for (k in l.headers) {
                    x.setRequestHeader(k, l.headers[k])
                }
                if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
                    w = "abort";
                    for (k in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) {
                        x[k](l[k])
                    }
                    g = cz(cv, l, c, x);
                    if (!g) {
                        y(-1, "No Transport")
                    } else {
                        x.readyState = 1,
                            j && n.trigger("ajaxSend", [x, l]),
                            l.async && l.timeout > 0 && (h = setTimeout(function() {
                                    x.abort("timeout")
                                }
                                , l.timeout));
                        try {
                            v = 1,
                                g.send(t, y)
                        } catch (B) {
                            if (v < 2) {
                                y(-1, B)
                            } else {
                                throw B
                            }
                        }
                    }
                    return x
                }
                return x.abort()
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
    var cD = []
        , cE = /\?/
        , cF = /(=)\?(?=&|$)|\?\?/
        , cG = p.now();
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = cD.pop() || p.expando + "_" + cG++;
            return this[a] = !0,
                a
        }
    }),
        p.ajaxPrefilter("json jsonp", function(c, d, e) {
                var f, g, h, i = c.data, j = c.url, k = c.jsonp !== !1, l = k && cF.test(j), m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cF.test(i);
                if (c.dataTypes[0] === "jsonp" || l || m) {
                    return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback,
                        g = a[f],
                        l ? c.url = j.replace(cF, "$1" + f) : m ? c.data = i.replace(cF, "$1" + f) : k && (c.url += (cE.test(j) ? "&" : "?") + c.jsonp + "=" + f),
                        c.converters["script json"] = function() {
                            return h || p.error(f + " was not called"),
                                h[0]
                        }
                        ,
                        c.dataTypes[0] = "json",
                        a[f] = function() {
                            h = arguments
                        }
                        ,
                        e.always(function() {
                                a[f] = g,
                                    c[f] && (c.jsonpCallback = d.jsonpCallback,
                                        cD.push(f)),
                                    h && p.isFunction(g) && g(h[0]),
                                    h = g = b
                            }
                        ),
                        "script"
                }
            }
        ),
        p.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(a) {
                    return p.globalEval(a),
                        a
                }
            }
        }),
        p.ajaxPrefilter("script", function(a) {
                a.cache === b && (a.cache = !1),
                    a.crossDomain && (a.type = "GET",
                        a.global = !1)
            }
        ),
        p.ajaxTransport("script", function(a) {
                if (a.crossDomain) {
                    var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
                    return {
                        send: function(f, g) {
                            c = e.createElement("script"),
                                c.async = "async",
                                a.scriptCharset && (c.charset = a.scriptCharset),
                                c.src = a.url,
                                c.onload = c.onreadystatechange = function(a, e) {
                                    if (e || !c.readyState || /loaded|complete/.test(c.readyState)) {
                                        c.onload = c.onreadystatechange = null ,
                                            d && c.parentNode && d.removeChild(c),
                                            c = b,
                                            e || g(200, "success")
                                    }
                                }
                                ,
                                d.insertBefore(c, d.firstChild)
                        },
                        abort: function() {
                            c && c.onload(0, 1)
                        }
                    }
                }
            }
        );
    var cH, cI = a.ActiveXObject ? function() {
        for (var a in cH) {
            cH[a](0, 1)
        }
    }
        : !1, cJ = 0;
    p.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && cK() || cL()
    }
        : cK,
        function(a) {
            p.extend(p.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }
            (p.ajaxSettings.xhr()),
        p.support.ajax && p.ajaxTransport(function(c) {
                if (!c.crossDomain || p.support.cors) {
                    var d;
                    return {
                        send: function(e, f) {
                            var g, h, i = c.xhr();
                            c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                            if (c.xhrFields) {
                                for (h in c.xhrFields) {
                                    i[h] = c.xhrFields[h]
                                }
                            }
                            c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                                !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (h in e) {
                                    i.setRequestHeader(h, e[h])
                                }
                            } catch (j) {}
                            i.send(c.hasContent && c.data || null ),
                                d = function(a, e) {
                                    var h, j, k, l, m;
                                    try {
                                        if (d && (e || i.readyState === 4)) {
                                            d = b,
                                                g && (i.onreadystatechange = p.noop,
                                                    cI && delete cH[g]);
                                            if (e) {
                                                i.readyState !== 4 && i.abort()
                                            } else {
                                                h = i.status,
                                                    k = i.getAllResponseHeaders(),
                                                    l = {},
                                                    m = i.responseXML,
                                                    m && m.documentElement && (l.xml = m);
                                                try {
                                                    l.text = i.responseText
                                                } catch (a) {}
                                                try {
                                                    j = i.statusText
                                                } catch (n) {
                                                    j = ""
                                                }
                                                !h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
                                            }
                                        }
                                    } catch (o) {
                                        e || f(-1, o)
                                    }
                                    l && f(h, j, l, k)
                                }
                                ,
                                c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cJ,
                                    cI && (cH || (cH = {},
                                        p(a).unload(cI)),
                                        cH[g] = d),
                                    i.onreadystatechange = d) : d()
                        },
                        abort: function() {
                            d && d(0, 1)
                        }
                    }
                }
            }
        );
    var cM, cN, cO = /^(?:toggle|show|hide)$/, cP = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$","i"), cQ = /queueHooks$/, cR = [cX], cS = {
        "*": [function(a, b) {
            var c, d, e, f = this.createTween(a, b), g = cP.exec(b), h = f.cur(), i = +h || 0, j = 1;
            if (g) {
                c = +g[2],
                    d = g[3] || (p.cssNumber[a] ? "" : "px");
                if (d !== "px" && i) {
                    i = p.css(f.elem, a, !0) || c || 1;
                    do {
                        e = j = j || ".5",
                            i = i / j,
                            p.style(f.elem, a, i + d),
                            j = f.cur() / h
                    } while (j !== 1 && j !== e)
                }
                f.unit = d,
                    f.start = i,
                    f.end = g[1] ? i + (g[1] + 1) * c : c
            }
            return f
        }
        ]
    };
    p.Animation = p.extend(cV, {
        tweener: function(a, b) {
            p.isFunction(a) ? (b = a,
                a = ["*"]) : a = a.split(" ");
            var c, d = 0, e = a.length;
            for (; d < e; d++) {
                c = a[d],
                    cS[c] = cS[c] || [],
                    cS[c].unshift(b)
            }
        },
        prefilter: function(a, b) {
            b ? cR.unshift(a) : cR.push(a)
        }
    }),
        p.Tween = cY,
        cY.prototype = {
            constructor: cY,
            init: function(a, b, c, d, e, f) {
                this.elem = a,
                    this.prop = c,
                    this.easing = e || "swing",
                    this.options = b,
                    this.start = this.now = this.cur(),
                    this.end = d,
                    this.unit = f || (p.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = cY.propHooks[this.prop];
                return a && a.get ? a.get(this) : cY.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = cY.propHooks[this.prop];
                return this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration),
                    this.now = (this.end - this.start) * b + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : cY.propHooks._default.set(this),
                    this
            }
        },
        cY.prototype.init.prototype = cY.prototype,
        cY.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return a.elem[a.prop] == null  || !!a.elem.style && a.elem.style[a.prop] != null  ? (b = p.css(a.elem, a.prop, !1, ""),
                        !b || b === "auto" ? 0 : b) : a.elem[a.prop]
                },
                set: function(a) {
                    p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null  || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        },
        cY.propHooks.scrollTop = cY.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        },
        p.each(["toggle", "show", "hide"], function(a, b) {
                var c = p.fn[b];
                p.fn[b] = function(d, e, f) {
                    return d == null  || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(cZ(b, !0), d, e, f)
                }
            }
        ),
        p.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(bY).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = p.isEmptyObject(a)
                    , f = p.speed(b, c, d)
                    , g = function() {
                        var b = cV(this, p.extend({}, a), f);
                        e && b.stop(!0)
                    }
                    ;
                return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, c, d) {
                var e = function(a) {
                        var b = a.stop;
                        delete a.stop,
                            b(d)
                    }
                    ;
                return typeof a != "string" && (d = c,
                    c = a,
                    a = b),
                    c && a !== !1 && this.queue(a || "fx", []),
                    this.each(function() {
                            var b = !0
                                , c = a != null  && a + "queueHooks"
                                , f = p.timers
                                , g = p._data(this);
                            if (c) {
                                g[c] && g[c].stop && e(g[c])
                            } else {
                                for (c in g) {
                                    g[c] && g[c].stop && cQ.test(c) && e(g[c])
                                }
                            }
                            for (c = f.length; c--; ) {
                                f[c].elem === this && (a == null  || f[c].queue === a) && (f[c].anim.stop(d),
                                    b = !1,
                                    f.splice(c, 1))
                            }
                            (b || !d) && p.dequeue(this, a)
                        }
                    )
            }
        }),
        p.each({
                slideDown: cZ("show"),
                slideUp: cZ("hide"),
                slideToggle: cZ("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                p.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }
        ),
        p.speed = function(a, b, c) {
            var d = a && typeof a == "object" ? p.extend({}, a) : {
                complete: c || !c && b || p.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !p.isFunction(b) && b
            };
            d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
            if (d.queue == null  || d.queue === !0) {
                d.queue = "fx"
            }
            return d.old = d.complete,
                d.complete = function() {
                    p.isFunction(d.old) && d.old.call(this),
                        d.queue && p.dequeue(this, d.queue)
                }
                ,
                d
        }
        ,
        p.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return 0.5 - Math.cos(a * Math.PI) / 2
            }
        },
        p.timers = [],
        p.fx = cY.prototype.init,
        p.fx.tick = function() {
            var a, b = p.timers, c = 0;
            for (; c < b.length; c++) {
                a = b[c],
                    !a() && b[c] === a && b.splice(c--, 1)
            }
            b.length || p.fx.stop()
        }
        ,
        p.fx.timer = function(a) {
            a() && p.timers.push(a) && !cN && (cN = setInterval(p.fx.tick, p.fx.interval))
        }
        ,
        p.fx.interval = 13,
        p.fx.stop = function() {
            clearInterval(cN),
                cN = null
        }
        ,
        p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        p.fx.step = {},
        p.expr && p.expr.filters && (p.expr.filters.animated = function(a) {
            return p.grep(p.timers, function(b) {
                    return a === b.elem
                }
            ).length
        }
            );
    var c$ = /^(?:body|html)$/i;
    p.fn.offset = function(a) {
        if (arguments.length) {
            return a === b ? this : this.each(function(b) {
                    p.offset.setOffset(this, a, b)
                }
            )
        }
        var c, d, e, f, g, h, i, j, k, l, m = this[0], n = m && m.ownerDocument;
        if (!n) {
            return
        }
        return (e = n.body) === m ? p.offset.bodyOffset(m) : (d = n.documentElement,
            p.contains(d, m) ? (c = m.getBoundingClientRect(),
                f = c_(n),
                g = d.clientTop || e.clientTop || 0,
                h = d.clientLeft || e.clientLeft || 0,
                i = f.pageYOffset || d.scrollTop,
                j = f.pageXOffset || d.scrollLeft,
                k = c.top + i - g,
                l = c.left + j - h,
            {
                top: k,
                left: l
            }) : {
                top: 0,
                left: 0
            })
    }
        ,
        p.offset = {
            bodyOffset: function(a) {
                var b = a.offsetTop
                    , c = a.offsetLeft;
                return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0,
                    c += parseFloat(p.css(a, "marginLeft")) || 0),
                {
                    top: b,
                    left: c
                }
            },
            setOffset: function(a, b, c) {
                var d = p.css(a, "position");
                d === "static" && (a.style.position = "relative");
                var e = p(a), f = e.offset(), g = p.css(a, "top"), h = p.css(a, "left"), i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1, j = {}, k = {}, l, m;
                i ? (k = e.position(),
                    l = k.top,
                    m = k.left) : (l = parseFloat(g) || 0,
                    m = parseFloat(h) || 0),
                    p.isFunction(b) && (b = b.call(a, c, f)),
                    b.top != null  && (j.top = b.top - f.top + l),
                    b.left != null  && (j.left = b.left - f.left + m),
                    "using" in b ? b.using.call(a, j) : e.css(j)
            }
        },
        p.fn.extend({
            position: function() {
                if (!this[0]) {
                    return
                }
                var a = this[0]
                    , b = this.offsetParent()
                    , c = this.offset()
                    , d = c$.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                return c.top -= parseFloat(p.css(a, "marginTop")) || 0,
                    c.left -= parseFloat(p.css(a, "marginLeft")) || 0,
                    d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0,
                    d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0,
                {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                        var a = this.offsetParent || e.body;
                        while (a && !c$.test(a.nodeName) && p.css(a, "position") === "static") {
                            a = a.offsetParent
                        }
                        return a || e.body
                    }
                )
            }
        }),
        p.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(a, c) {
                var d = /Y/.test(c);
                p.fn[a] = function(e) {
                    return p.access(this, function(a, e, f) {
                            var g = c_(a);
                            if (f === b) {
                                return g ? c in g ? g[c] : g.document.documentElement[e] : a[e]
                            }
                            g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f
                        }
                        , a, e, arguments.length, null )
                }
            }
        ),
        p.each({
                Height: "height",
                Width: "width"
            }, function(a, c) {
                p.each({
                        padding: "inner" + a,
                        content: c,
                        "": "outer" + a
                    }, function(d, e) {
                        p.fn[e] = function(e, f) {
                            var g = arguments.length && (d || typeof e != "boolean")
                                , h = d || (e === !0 || f === !0 ? "margin" : "border");
                            return p.access(this, function(c, d, e) {
                                    var f;
                                    return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement,
                                        Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
                                }
                                , c, g ? e : b, g)
                        }
                    }
                )
            }
        ),
        a.jQuery = a.$ = p,
        typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
                return p
            }
        )
}
    )(window);
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(a, x, i, u) {
    var k = i("html")
        , g = i(a)
        , e = i(x)
        , j = i.fancybox = function() {
            j.open.apply(this, arguments)
        }
        , o = navigator.userAgent.match(/msie/i)
        , d = null
        , A = x.createTouch !== u
        , y = function(b) {
            return b && b.hasOwnProperty && b instanceof i
        }
        , c = function(b) {
            return b && "string" === i.type(b)
        }
        , z = function(b) {
            return c(b) && 0 < b.indexOf("%")
        }
        , h = function(b, l) {
            var f = parseInt(b, 10) || 0;
            l && z(b) && (f *= j.getViewport()[l] / 100);
            return Math.ceil(f)
        }
        , m = function(l, f) {
            return h(l, f) + "px"
        }
        ;
    i.extend(j, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !A,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3000,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null ,
            href: null ,
            content: null ,
            title: null ,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (o ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeChange: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop
        },
        group: {},
        opts: {},
        previous: null ,
        coming: null ,
        current: null ,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null ,
        skin: null ,
        outer: null ,
        inner: null ,
        player: {
            timer: null ,
            isActive: !1
        },
        ajaxLoad: null ,
        imgPreload: null ,
        transitions: {},
        helpers: {},
        open: function(b, f) {
            if (b && (i.isPlainObject(f) || (f = {}),
                !1 !== j.close(!0))) {
                return i.isArray(b) || (b = y(b) ? i(b).get() : [b]),
                    i.each(b, function(v, w) {
                            var q = {}, t, s, r, n, p;
                            "object" === i.type(w) && (w.nodeType && (w = i(w)),
                                y(w) ? (q = {
                                    href: w.data("fancybox-href") || w.attr("href"),
                                    title: w.data("fancybox-title") || w.attr("title"),
                                    isDom: !0,
                                    element: w
                                },
                                    i.metadata && i.extend(!0, q, w.metadata())) : q = w);
                            t = f.href || q.href || (c(w) ? w : null );
                            s = f.title !== u ? f.title : q.title || "";
                            n = (r = f.content || q.content) ? "html" : f.type || q.type;
                            !n && q.isDom && (n = w.data("fancybox-type"),
                                n || (n = (n = w.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null ));
                            c(t) && (n || (j.isImage(t) ? n = "image" : j.isSWF(t) ? n = "swf" : "#" === t.charAt(0) ? n = "inline" : c(w) && (n = "html",
                                r = w)),
                                "ajax" === n && (p = t.split(/\s+/, 2),
                                    t = p.shift(),
                                    p = p.shift()));
                            r || ("inline" === n ? t ? r = i(c(t) ? t.replace(/.*(?=#[^\s]+$)/, "") : t) : q.isDom && (r = w) : "html" === n ? r = t : !n && (!t && q.isDom) && (n = "inline",
                                r = w));
                            i.extend(q, {
                                href: t,
                                type: n,
                                content: r,
                                title: s,
                                selector: p
                            });
                            b[v] = q
                        }
                    ),
                    j.opts = i.extend(!0, {}, j.defaults, f),
                    f.keys !== u && (j.opts.keys = f.keys ? i.extend({}, j.defaults.keys, f.keys) : !1),
                    j.group = b,
                    j._start(j.opts.index)
            }
        },
        cancel: function() {
            var b = j.coming;
            b && !1 !== j.trigger("onCancel") && (j.hideLoading(),
                j.ajaxLoad && j.ajaxLoad.abort(),
                j.ajaxLoad = null ,
                j.imgPreload && (j.imgPreload.onload = j.imgPreload.onerror = null ),
                b.wrap && b.wrap.stop(!0, !0).trigger("onReset").remove(),
                j.coming = null ,
                j.current || j._afterZoomOut(b))
        },
        close: function(b) {
            j.cancel();
            !1 !== j.trigger("beforeClose") && (j.unbindEvents(),
                j.isActive && (!j.isOpen || !0 === b ? (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
                    j._afterZoomOut()) : (j.isOpen = j.isOpened = !1,
                    j.isClosing = !0,
                    i(".fancybox-item, .fancybox-nav").remove(),
                    j.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                    j.transitions[j.current.closeMethod]())))
        },
        play: function(b) {
            var l = function() {
                    clearTimeout(j.player.timer)
                }
                , f = function() {
                    l();
                    j.current && j.player.isActive && (j.player.timer = setTimeout(j.next, j.current.playSpeed))
                }
                , n = function() {
                    l();
                    e.unbind(".player");
                    j.player.isActive = !1;
                    j.trigger("onPlayEnd")
                }
                ;
            if (!0 === b || !j.player.isActive && !1 !== b) {
                if (j.current && (j.current.loop || j.current.index < j.group.length - 1)) {
                    j.player.isActive = !0,
                        e.bind({
                            "onCancel.player beforeClose.player": n,
                            "onUpdate.player": f,
                            "beforeLoad.player": l
                        }),
                        f(),
                        j.trigger("onPlayStart")
                }
            } else {
                n()
            }
        },
        next: function(b) {
            var f = j.current;
            f && (c(b) || (b = f.direction.next),
                j.jumpto(f.index + 1, b, "next"))
        },
        prev: function(b) {
            var f = j.current;
            f && (c(b) || (b = f.direction.prev),
                j.jumpto(f.index - 1, b, "prev"))
        },
        jumpto: function(b, l, f) {
            var n = j.current;
            n && (b = h(b),
                j.direction = l || n.direction[b >= n.index ? "next" : "prev"],
                j.router = f || "jumpto",
                n.loop && (0 > b && (b = n.group.length + b % n.group.length),
                    b %= n.group.length),
                n.group[b] !== u && (j.cancel(),
                    j._start(b)))
        },
        reposition: function(b, n) {
            var l = j.current, p = l ? l.wrap : null , f;
            p && (f = j._getPosition(n),
                b && "scroll" === b.type ? (delete f.position,
                    p.stop(!0, !0).animate(f, 200)) : (p.css(f),
                    l.pos = i.extend({}, l.dim, f)))
        },
        update: function(b) {
            var l = b && b.type
                , f = !l || "orientationchange" === l;
            f && (clearTimeout(d),
                d = null );
            j.isOpen && !d && (d = setTimeout(function() {
                    var n = j.current;
                    n && !j.isClosing && (j.wrap.removeClass("fancybox-tmp"),
                        (f || "load" === l || "resize" === l && n.autoResize) && j._setDimension(),
                        "scroll" === l && n.canShrink || j.reposition(b),
                        j.trigger("onUpdate"),
                        d = null )
                }
                , f && !A ? 0 : 300))
        },
        toggle: function(b) {
            j.isOpen && (j.current.fitToView = "boolean" === i.type(b) ? b : !j.current.fitToView,
                A && (j.wrap.removeAttr("style").addClass("fancybox-tmp"),
                    j.trigger("onUpdate")),
                j.update())
        },
        hideLoading: function() {
            e.unbind(".loading");
            i("#fancybox-loading").remove()
        },
        showLoading: function() {
            var b, f;
            j.hideLoading();
            b = i('<div id="fancybox-loading"><div></div></div>').click(j.cancel).appendTo("body");
            e.bind("keydown.loading", function(l) {
                    if (27 === (l.which || l.keyCode)) {
                        l.preventDefault(),
                            j.cancel()
                    }
                }
            );
            j.defaults.fixed || (f = j.getViewport(),
                b.css({
                    position: "absolute",
                    top: 0.5 * f.h + f.y,
                    left: 0.5 * f.w + f.x
                }))
        },
        getViewport: function() {
            var b = j.current && j.current.locked || !1
                , f = {
                    x: g.scrollLeft(),
                    y: g.scrollTop()
                };
            b ? (f.w = b[0].clientWidth,
                f.h = b[0].clientHeight) : (f.w = A && a.innerWidth ? a.innerWidth : g.width(),
                f.h = A && a.innerHeight ? a.innerHeight : g.height());
            return f
        },
        unbindEvents: function() {
            j.wrap && y(j.wrap) && j.wrap.unbind(".fb");
            e.unbind(".fb");
            g.unbind(".fb")
        },
        bindEvents: function() {
            var b = j.current, f;
            b && (g.bind("orientationchange.fb" + (A ? "" : " resize.fb") + (b.autoCenter && !b.locked ? " scroll.fb" : ""), j.update),
                (f = b.keys) && e.bind("keydown.fb", function(n) {
                        var p = n.which || n.keyCode
                            , l = n.target || n.srcElement;
                        if (27 === p && j.coming) {
                            return !1
                        }
                        !n.ctrlKey && (!n.altKey && !n.shiftKey && !n.metaKey && (!l || !l.type && !i(l).is("[contenteditable]"))) && i.each(f, function(r, q) {
                                if (1 < b.group.length && q[p] !== u) {
                                    return j[r](q[p]),
                                        n.preventDefault(),
                                        !1
                                }
                                if (-1 < i.inArray(p, q)) {
                                    return j[r](),
                                        n.preventDefault(),
                                        !1
                                }
                            }
                        )
                    }
                ),
                i.fn.mousewheel && b.mouseWheel && j.wrap.bind("mousewheel.fb", function(r, s, l, q) {
                        for (var p = i(r.target || null ), n = !1; p.length && !n && !p.is(".fancybox-skin") && !p.is(".fancybox-wrap"); ) {
                            n = p[0] && !(p[0].style.overflow && "hidden" === p[0].style.overflow) && (p[0].clientWidth && p[0].scrollWidth > p[0].clientWidth || p[0].clientHeight && p[0].scrollHeight > p[0].clientHeight),
                                p = i(p).parent()
                        }
                        if (0 !== s && !n && 1 < j.group.length && !b.canShrink) {
                            if (0 < q || 0 < l) {
                                j.prev(0 < q ? "down" : "left")
                            } else {
                                if (0 > q || 0 > l) {
                                    j.next(0 > q ? "up" : "right")
                                }
                            }
                            r.preventDefault()
                        }
                    }
                ))
        },
        trigger: function(b, l) {
            var f, n = l || j.coming || j.current;
            if (n) {
                i.isFunction(n[b]) && (f = n[b].apply(n, Array.prototype.slice.call(arguments, 1)));
                if (!1 === f) {
                    return !1
                }
                n.helpers && i.each(n.helpers, function(q, p) {
                        if (p && j.helpers[q] && i.isFunction(j.helpers[q][b])) {
                            j.helpers[q][b](i.extend(!0, {}, j.helpers[q].defaults, p), n)
                        }
                    }
                );
                e.trigger(b)
            }
        },
        isImage: function(b) {
            return c(b) && b.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(b) {
            return c(b) && b.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(b) {
            var l = {}, f, n;
            b = h(b);
            f = j.group[b] || null ;
            if (!f) {
                return !1
            }
            l = i.extend(!0, {}, j.opts, f);
            f = l.margin;
            n = l.padding;
            "number" === i.type(f) && (l.margin = [f, f, f, f]);
            "number" === i.type(n) && (l.padding = [n, n, n, n]);
            l.modal && i.extend(!0, l, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null ,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            });
            l.autoSize && (l.autoWidth = l.autoHeight = !0);
            "auto" === l.width && (l.autoWidth = !0);
            "auto" === l.height && (l.autoHeight = !0);
            l.group = j.group;
            l.index = b;
            j.coming = l;
            if (!1 === j.trigger("beforeLoad")) {
                j.coming = null
            } else {
                n = l.type;
                f = l.href;
                if (!n) {
                    return j.coming = null ,
                        j.current && j.router && "jumpto" !== j.router ? (j.current.index = b,
                            j[j.router](j.direction)) : !1
                }
                j.isActive = !0;
                if ("image" === n || "swf" === n) {
                    l.autoHeight = l.autoWidth = !1,
                        l.scrolling = "visible"
                }
                "image" === n && (l.aspectRatio = !0);
                "iframe" === n && A && (l.scrolling = "scroll");
                l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (A ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body");
                i.extend(l, {
                    skin: i(".fancybox-skin", l.wrap),
                    outer: i(".fancybox-outer", l.wrap),
                    inner: i(".fancybox-inner", l.wrap)
                });
                i.each(["Top", "Right", "Bottom", "Left"], function(q, p) {
                        l.skin.css("padding" + p, m(l.padding[q]))
                    }
                );
                j.trigger("onReady");
                if ("inline" === n || "html" === n) {
                    if (!l.content || !l.content.length) {
                        return j._error("content")
                    }
                } else {
                    if (!f) {
                        return j._error("href")
                    }
                }
                "image" === n ? j._loadImage() : "ajax" === n ? j._loadAjax() : "iframe" === n ? j._loadIframe() : j._afterLoad()
            }
        },
        _error: function(b) {
            i.extend(j.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: b,
                content: j.coming.tpl.error
            });
            j._afterLoad()
        },
        _loadImage: function() {
            var b = j.imgPreload = new Image;
            b.onload = function() {
                this.onload = this.onerror = null ;
                j.coming.width = this.width / j.opts.pixelRatio;
                j.coming.height = this.height / j.opts.pixelRatio;
                j._afterLoad()
            }
            ;
            b.onerror = function() {
                this.onload = this.onerror = null ;
                j._error("image")
            }
            ;
            b.src = j.coming.href;
            !0 !== b.complete && j.showLoading()
        },
        _loadAjax: function() {
            var b = j.coming;
            j.showLoading();
            j.ajaxLoad = i.ajax(i.extend({}, b.ajax, {
                url: b.href,
                error: function(f, l) {
                    j.coming && "abort" !== l ? j._error("ajax", f) : j.hideLoading()
                },
                success: function(l, f) {
                    "success" === f && (b.content = l,
                        j._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var b = j.coming
                , f = i(b.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", A ? "auto" : b.iframe.scrolling).attr("src", b.href);
            i(b.wrap).bind("onReset", function() {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (l) {}
                }
            );
            b.iframe.preload && (j.showLoading(),
                f.one("load", function() {
                        i(this).data("ready", 1);
                        A || i(this).bind("load.fb", j.update);
                        i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                        j._afterLoad()
                    }
                ));
            b.content = f.appendTo(b.inner);
            b.iframe.preload || j._afterLoad()
        },
        _preloadImages: function() {
            var b = j.group, q = j.current, p = b.length, r = q.preload ? Math.min(q.preload, p - 1) : 0, n, l;
            for (l = 1; l <= r; l += 1) {
                n = b[(q.index + l) % p],
                    "image" === n.type && n.href && ((new Image).src = n.href)
            }
        },
        _afterLoad: function() {
            var b = j.coming, q = j.current, p, r, f, n, l;
            j.hideLoading();
            if (b && !1 !== j.isActive) {
                if (!1 === j.trigger("afterLoad", b, q)) {
                    b.wrap.stop(!0).trigger("onReset").remove(),
                        j.coming = null
                } else {
                    q && (j.trigger("beforeChange", q),
                        q.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    j.unbindEvents();
                    p = b.content;
                    r = b.type;
                    f = b.scrolling;
                    i.extend(j, {
                        wrap: b.wrap,
                        skin: b.skin,
                        outer: b.outer,
                        inner: b.inner,
                        current: b,
                        previous: q
                    });
                    n = b.href;
                    switch (r) {
                        case "inline":
                        case "ajax":
                        case "html":
                            b.selector ? p = i("<div>").html(p).find(b.selector) : y(p) && (p.data("fancybox-placeholder") || p.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(p).hide()),
                                p = p.show().detach(),
                                b.wrap.bind("onReset", function() {
                                        i(this).find(p).length && p.hide().replaceAll(p.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                    }
                                ));
                            break;
                        case "image":
                            p = b.tpl.image.replace("{href}", n);
                            break;
                        case "swf":
                            p = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + n + '"></param>',
                                l = "",
                                i.each(b.swf, function(t, s) {
                                        p += '<param name="' + t + '" value="' + s + '"></param>';
                                        l += " " + t + '="' + s + '"'
                                    }
                                ),
                                p += '<embed src="' + n + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>"
                    }
                    (!y(p) || !p.parent().is(b.inner)) && b.inner.append(p);
                    j.trigger("beforeShow");
                    b.inner.css("overflow", "yes" === f ? "scroll" : "no" === f ? "hidden" : f);
                    j._setDimension();
                    j.reposition();
                    j.isOpen = !1;
                    j.coming = null ;
                    j.bindEvents();
                    if (j.isOpened) {
                        if (q.prevMethod) {
                            j.transitions[q.prevMethod]()
                        }
                    } else {
                        i(".fancybox-wrap").not(b.wrap).stop(!0).trigger("onReset").remove()
                    }
                    j.transitions[j.isOpened ? b.nextMethod : b.openMethod]();
                    j._preloadImages()
                }
            }
        },
        _setDimension: function() {
            var ad = j.getViewport(), ab = 0, aa = !1, ac = !1, aa = j.wrap, W = j.skin, Z = j.inner, Y = j.current, ac = Y.width, X = Y.height, V = Y.minWidth, K = Y.minHeight, U = Y.maxWidth, T = Y.maxHeight, N = Y.scrolling, R = Y.scrollOutside ? Y.scrollbarWidth : 0, l = Y.margin, f = h(l[1] + l[3]), P = h(l[0] + l[2]), I, b, L, O, S, J, Q, M, w;
            aa.add(W).add(Z).width("auto").height("auto").removeClass("fancybox-tmp");
            l = h(W.outerWidth(!0) - W.width());
            I = h(W.outerHeight(!0) - W.height());
            b = f + l;
            L = P + I;
            O = z(ac) ? (ad.w - b) * h(ac) / 100 : ac;
            S = z(X) ? (ad.h - L) * h(X) / 100 : X;
            if ("iframe" === Y.type) {
                if (w = Y.content,
                    Y.autoHeight && 1 === w.data("ready")) {
                    try {
                        w[0].contentWindow.document.location && (Z.width(O).height(9999),
                            J = w.contents().find("body"),
                            R && J.css("overflow-x", "hidden"),
                            S = J.outerHeight(!0))
                    } catch (E) {}
                }
            } else {
                if (Y.autoWidth || Y.autoHeight) {
                    Z.addClass("fancybox-tmp"),
                        Y.autoWidth || Z.width(O),
                        Y.autoHeight || Z.height(S),
                        Y.autoWidth && (O = Z.width()),
                        Y.autoHeight && (S = Z.height()),
                        Z.removeClass("fancybox-tmp")
                }
            }
            ac = h(O);
            X = h(S);
            M = O / S;
            V = h(z(V) ? h(V, "w") - b : V);
            U = h(z(U) ? h(U, "w") - b : U);
            K = h(z(K) ? h(K, "h") - L : K);
            T = h(z(T) ? h(T, "h") - L : T);
            J = U;
            Q = T;
            Y.fitToView && (U = Math.min(ad.w - b, U),
                T = Math.min(ad.h - L, T));
            b = ad.w - f;
            P = ad.h - P;
            Y.aspectRatio ? (ac > U && (ac = U,
                X = h(ac / M)),
                X > T && (X = T,
                    ac = h(X * M)),
                ac < V && (ac = V,
                    X = h(ac / M)),
                X < K && (X = K,
                    ac = h(X * M))) : (ac = Math.max(V, Math.min(ac, U)),
                Y.autoHeight && "iframe" !== Y.type && (Z.width(ac),
                    X = Z.height()),
                X = Math.max(K, Math.min(X, T)));
            if (Y.fitToView) {
                if (Z.width(ac).height(X),
                    aa.width(ac + l),
                    ad = aa.width(),
                    f = aa.height(),
                    Y.aspectRatio) {
                    for (; (ad > b || f > P) && (ac > V && X > K) && !(19 < ab++); ) {
                        X = Math.max(K, Math.min(T, X - 10)),
                            ac = h(X * M),
                            ac < V && (ac = V,
                                X = h(ac / M)),
                            ac > U && (ac = U,
                                X = h(ac / M)),
                            Z.width(ac).height(X),
                            aa.width(ac + l),
                            ad = aa.width(),
                            f = aa.height()
                    }
                } else {
                    ac = Math.max(V, Math.min(ac, ac - (ad - b))),
                        X = Math.max(K, Math.min(X, X - (f - P)))
                }
            }
            R && ("auto" === N && X < S && ac + l + R < b) && (ac += R);
            Z.width(ac).height(X);
            aa.width(ac + l);
            ad = aa.width();
            f = aa.height();
            aa = (ad > b || f > P) && ac > V && X > K;
            ac = Y.aspectRatio ? ac < J && X < Q && ac < O && X < S : (ac < J || X < Q) && (ac < O || X < S);
            i.extend(Y, {
                dim: {
                    width: m(ad),
                    height: m(f)
                },
                origWidth: O,
                origHeight: S,
                canShrink: aa,
                canExpand: ac,
                wPadding: l,
                hPadding: I,
                wrapSpace: f - W.outerHeight(!0),
                skinSpace: W.height() - X
            });
            !w && (Y.autoHeight && X > K && X < T && !ac) && Z.height("auto")
        },
        _getPosition: function(b) {
            var q = j.current
                , p = j.getViewport()
                , r = q.margin
                , n = j.wrap.width() + r[1] + r[3]
                , l = j.wrap.height() + r[0] + r[2]
                , r = {
                    position: "absolute",
                    top: r[0],
                    left: r[3]
                };
            q.autoCenter && q.fixed && !b && l <= p.h && n <= p.w ? r.position = "fixed" : q.locked || (r.top += p.y,
                r.left += p.x);
            r.top = m(Math.max(r.top, r.top + (p.h - l) * q.topRatio));
            r.left = m(Math.max(r.left, r.left + (p.w - n) * q.leftRatio));
            return r
        },
        _afterZoomIn: function() {
            var b = j.current;
            b && (j.isOpen = j.isOpened = !0,
                j.wrap.css("overflow", "visible").addClass("fancybox-opened"),
                j.update(),
                (b.closeClick || b.nextClick && 1 < j.group.length) && j.inner.css("cursor", "pointer").bind("click.fb", function(f) {
                        !i(f.target).is("a") && !i(f.target).parent().is("a") && (f.preventDefault(),
                            j[b.closeClick ? "close" : "next"]())
                    }
                ),
                b.closeBtn && i(b.tpl.closeBtn).appendTo(j.skin).bind("click.fb", function(f) {
                        f.preventDefault();
                        j.close()
                    }
                ),
                b.arrows && 1 < j.group.length && ((b.loop || 0 < b.index) && i(b.tpl.prev).appendTo(j.outer).bind("click.fb", j.prev),
                    (b.loop || b.index < j.group.length - 1) && i(b.tpl.next).appendTo(j.outer).bind("click.fb", j.next)),
                j.trigger("afterShow"),
                !b.loop && b.index === b.group.length - 1 ? j.play(!1) : j.opts.autoPlay && !j.player.isActive && (j.opts.autoPlay = !1,
                    j.play()))
        },
        _afterZoomOut: function(b) {
            b = b || j.current;
            i(".fancybox-wrap").trigger("onReset").remove();
            i.extend(j, {
                group: {},
                opts: {},
                router: !1,
                current: null ,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null ,
                skin: null ,
                outer: null ,
                inner: null
            });
            j.trigger("afterClose", b)
        }
    });
    j.transitions = {
        getOrigPosition: function() {
            var v = j.current
                , s = v.element
                , r = v.orig
                , t = {}
                , q = 50
                , p = 50
                , n = v.hPadding
                , l = v.wPadding
                , b = j.getViewport();
            !r && (v.isDom && s.is(":visible")) && (r = s.find("img:first"),
                r.length || (r = s));
            y(r) ? (t = r.offset(),
                r.is("img") && (q = r.outerWidth(),
                    p = r.outerHeight())) : (t.top = b.y + (b.h - p) * v.topRatio,
                t.left = b.x + (b.w - q) * v.leftRatio);
            if ("fixed" === j.wrap.css("position") || v.locked) {
                t.top -= b.y,
                    t.left -= b.x
            }
            return t = {
                top: m(t.top - n * v.topRatio),
                left: m(t.left - l * v.leftRatio),
                width: m(q + l),
                height: m(p + n)
            }
        },
        step: function(b, r) {
            var q, s, p = r.prop;
            s = j.current;
            var n = s.wrapSpace
                , l = s.skinSpace;
            if ("width" === p || "height" === p) {
                q = r.end === r.start ? 1 : (b - r.start) / (r.end - r.start),
                    j.isClosing && (q = 1 - q),
                    s = "width" === p ? s.wPadding : s.hPadding,
                    s = b - s,
                    j.skin[p](h("width" === p ? s : s - n * q)),
                    j.inner[p](h("width" === p ? s : s - n * q - l * q))
            }
        },
        zoomIn: function() {
            var b = j.current
                , n = b.pos
                , l = b.openEffect
                , p = "elastic" === l
                , f = i.extend({
                    opacity: 1
                }, n);
            delete f.position;
            p ? (n = this.getOrigPosition(),
                b.openOpacity && (n.opacity = 0.1)) : "fade" === l && (n.opacity = 0.1);
            j.wrap.css(n).animate(f, {
                duration: "none" === l ? 0 : b.openSpeed,
                easing: b.openEasing,
                step: p ? this.step : null ,
                complete: j._afterZoomIn
            })
        },
        zoomOut: function() {
            var b = j.current
                , l = b.closeEffect
                , f = "elastic" === l
                , n = {
                    opacity: 0.1
                };
            f && (n = this.getOrigPosition(),
                b.closeOpacity && (n.opacity = 0.1));
            j.wrap.animate(n, {
                duration: "none" === l ? 0 : b.closeSpeed,
                easing: b.closeEasing,
                step: f ? this.step : null ,
                complete: j._afterZoomOut
            })
        },
        changeIn: function() {
            var b = j.current, q = b.nextEffect, p = b.pos, r = {
                opacity: 1
            }, n = j.direction, l;
            p.opacity = 0.1;
            "elastic" === q && (l = "down" === n || "up" === n ? "top" : "left",
                "down" === n || "right" === n ? (p[l] = m(h(p[l]) - 200),
                    r[l] = "+=200px") : (p[l] = m(h(p[l]) + 200),
                    r[l] = "-=200px"));
            "none" === q ? j._afterZoomIn() : j.wrap.css(p).animate(r, {
                duration: b.nextSpeed,
                easing: b.nextEasing,
                complete: j._afterZoomIn
            })
        },
        changeOut: function() {
            var b = j.previous
                , l = b.prevEffect
                , f = {
                    opacity: 0.1
                }
                , n = j.direction;
            "elastic" === l && (f["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px");
            b.wrap.animate(f, {
                duration: "none" === l ? 0 : b.prevSpeed,
                easing: b.prevEasing,
                complete: function() {
                    i(this).trigger("onReset").remove()
                }
            })
        }
    };
    j.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !A,
            fixed: !0
        },
        overlay: null ,
        fixed: !1,
        el: i("html"),
        create: function(b) {
            b = i.extend({}, this.defaults, b);
            this.overlay && this.close();
            this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(j.coming ? j.coming.parent : b.parent);
            this.fixed = !1;
            b.fixed && j.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"),
                this.fixed = !0)
        },
        open: function(b) {
            var f = this;
            b = i.extend({}, this.defaults, b);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(b);
            this.fixed || (g.bind("resize.overlay", i.proxy(this.update, this)),
                this.update());
            b.closeClick && this.overlay.bind("click.overlay", function(l) {
                    if (i(l.target).hasClass("fancybox-overlay")) {
                        return j.isActive ? j.close() : f.close(),
                            !1
                    }
                }
            );
            this.overlay.css(b.css).show()
        },
        close: function() {
            var l, f;
            g.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"),
                l = g.scrollTop(),
                f = g.scrollLeft(),
                this.el.removeClass("fancybox-lock"),
                g.scrollTop(l).scrollLeft(f));
            i(".fancybox-overlay").remove().hide();
            i.extend(this, {
                overlay: null ,
                fixed: !1
            })
        },
        update: function() {
            var l = "100%", f;
            this.overlay.width(l).height("100%");
            o ? (f = Math.max(x.documentElement.offsetWidth, x.body.offsetWidth),
                e.width() > f && (l = e.width())) : e.width() > g.width() && (l = e.width());
            this.overlay.width(l).height(e.height())
        },
        onReady: function(l, f) {
            var n = this.overlay;
            i(".fancybox-overlay").stop(!0, !0);
            n || this.create(l);
            l.locked && (this.fixed && f.fixed) && (n || (this.margin = e.height() > g.height() ? i("html").css("margin-right").replace("px", "") : !1),
                f.locked = this.overlay.append(f.wrap),
                f.fixed = !1);
            !0 === l.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(l, f) {
            var n, p;
            f.locked && (!1 !== this.margin && (i("*").filter(function() {
                    return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                }
            ).addClass("fancybox-margin"),
                this.el.addClass("fancybox-margin")),
                n = g.scrollTop(),
                p = g.scrollLeft(),
                this.el.addClass("fancybox-lock"),
                g.scrollTop(n).scrollLeft(p));
            this.open(l)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(b) {
            this.overlay && !j.coming && this.overlay.fadeOut(b.speedOut, i.proxy(this.close, this))
        }
    };
    j.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(b) {
            var l = j.current
                , f = l.title
                , n = b.type;
            i.isFunction(f) && (f = f.call(l.element, l));
            if (c(f) && "" !== i.trim(f)) {
                l = i('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + f + "</div>");
                switch (n) {
                    case "inside":
                        n = j.skin;
                        break;
                    case "outside":
                        n = j.wrap;
                        break;
                    case "over":
                        n = j.inner;
                        break;
                    default:
                        n = j.skin,
                            l.appendTo("body"),
                            o && l.width(l.width()),
                            l.wrapInner('<span class="child"></span>'),
                            j.current.margin[2] += Math.abs(h(l.css("margin-bottom")))
                }
                l["top" === b.position ? "prependTo" : "appendTo"](n)
            }
        }
    };
    i.fn.fancybox = function(b) {
        var n, l = i(this), p = this.selector || "", f = function(v) {
                var t = i(this).blur(), s = n, r, q;
                !v.ctrlKey && (!v.altKey && !v.shiftKey && !v.metaKey) && !t.is(".fancybox-wrap") && (r = b.groupAttr || "data-fancybox-group",
                    q = t.attr(r),
                    q || (r = "rel",
                        q = t.get(0)[r]),
                    q && ("" !== q && "nofollow" !== q) && (t = p.length ? i(p) : l,
                        t = t.filter("[" + r + '="' + q + '"]'),
                        s = t.index(this)),
                    b.index = s,
                    !1 !== j.open(t, b) && v.preventDefault())
            }
            ;
        b = b || {};
        n = b.index || 0;
        !p || !1 === b.live ? l.unbind("click.fb-start").bind("click.fb-start", f) : e.undelegate(p, "click.fb-start").delegate(p + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", f);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    }
    ;
    e.ready(function() {
            var b, l;
            i.scrollbarWidth === u && (i.scrollbarWidth = function() {
                var p = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body")
                    , n = p.children()
                    , n = n.innerWidth() - n.height(99).innerWidth();
                p.remove();
                return n
            }
                );
            if (i.support.fixedPosition === u) {
                b = i.support;
                l = i('<div style="position:fixed;top:20px;"></div>').appendTo("body");
                var f = 20 === l[0].offsetTop || 15 === l[0].offsetTop;
                l.remove();
                b.fixedPosition = f
            }
            i.extend(j.defaults, {
                scrollbarWidth: i.scrollbarWidth(),
                fixed: i.support.fixedPosition,
                parent: i("body")
            });
            b = i(a).width();
            k.addClass("fancybox-lock-test");
            l = i(a).width();
            k.removeClass("fancybox-lock-test");
            i("<style type='text/css'>.fancybox-margin{margin-right:" + (l - b) + "px;}</style>").appendTo("head")
        }
    )
}
    )(window, document, jQuery);
(function(b) {
    function a(c) {
        this.init(c)
    }
    a.prototype = {
        value: 0,
        size: 100,
        startAngle: -Math.PI,
        thickness: "auto",
        fill: {
            gradient: ["#3aeabb", "#fdd250"]
        },
        emptyFill: "rgba(0, 0, 0, .1)",
        animation: {
            duration: 1200,
            easing: "circleProgressEasing"
        },
        animationStartValue: 0,
        reverse: false,
        lineCap: "butt",
        constructor: a,
        el: null ,
        canvas: null ,
        ctx: null ,
        radius: 0,
        arcFill: null ,
        lastFrameValue: 0,
        init: function(c) {
            b.extend(this, c);
            this.radius = this.size / 2;
            this.initWidget();
            this.initFill();
            this.draw()
        },
        initWidget: function() {
            var c = this.canvas = this.canvas || b("<canvas>").prependTo(this.el)[0];
            c.width = this.size;
            c.height = this.size;
            this.ctx = c.getContext("2d")
        },
        initFill: function() {
            var m = this
                , l = this.fill
                , o = this.ctx
                , p = this.size;
            if (!l) {
                throw Error("The fill is not specified!")
            }
            if (l.color) {
                this.arcFill = l.color
            }
            if (l.gradient) {
                var c = l.gradient;
                if (c.length == 1) {
                    this.arcFill = c[0]
                } else {
                    if (c.length > 1) {
                        var k = l.gradientAngle || 0
                            , j = l.gradientDirection || [p / 2 * (1 - Math.cos(k)), p / 2 * (1 + Math.sin(k)), p / 2 * (1 + Math.cos(k)), p / 2 * (1 - Math.sin(k))];
                        var n = o.createLinearGradient.apply(o, j);
                        for (var f = 0; f < c.length; f++) {
                            var d = c[f]
                                , g = f / (c.length - 1);
                            if (b.isArray(d)) {
                                g = d[1];
                                d = d[0]
                            }
                            n.addColorStop(g, d)
                        }
                        this.arcFill = n
                    }
                }
            }
            if (l.image) {
                var e;
                if (l.image instanceof Image) {
                    e = l.image
                } else {
                    e = new Image();
                    e.src = l.image
                }
                if (e.complete) {
                    h()
                } else {
                    e.onload = h
                }
            }
            function h() {
                var i = b("<canvas>")[0];
                i.width = m.size;
                i.height = m.size;
                i.getContext("2d").drawImage(e, 0, 0, p, p);
                m.arcFill = m.ctx.createPattern(i, "no-repeat");
                m.drawFrame(m.lastFrameValue)
            }
        },
        draw: function() {
            if (this.animation) {
                this.drawAnimated(this.value)
            } else {
                this.drawFrame(this.value)
            }
        },
        drawFrame: function(c) {
            this.lastFrameValue = c;
            this.ctx.clearRect(0, 0, this.size, this.size);
            this.drawEmptyArc(c);
            this.drawArc(c)
        },
        drawArc: function(e) {
            var d = this.ctx
                , g = this.radius
                , f = this.getThickness()
                , c = this.startAngle;
            d.save();
            d.beginPath();
            if (!this.reverse) {
                d.arc(g, g, g - f / 2, c, c + Math.PI * 2 * e)
            } else {
                d.arc(g, g, g - f / 2, c - Math.PI * 2 * e, c)
            }
            d.lineWidth = f;
            d.lineCap = this.lineCap;
            d.strokeStyle = this.arcFill;
            d.stroke();
            d.restore()
        },
        drawEmptyArc: function(e) {
            var d = this.ctx
                , g = this.radius
                , f = this.getThickness()
                , c = this.startAngle;
            if (e < 1) {
                d.save();
                d.beginPath();
                if (e <= 0) {
                    d.arc(g, g, g - f / 2, 0, Math.PI * 2)
                } else {
                    if (!this.reverse) {
                        d.arc(g, g, g - f / 2, c + Math.PI * 2 * e, c)
                    } else {
                        d.arc(g, g, g - f / 2, c, c - Math.PI * 2 * e)
                    }
                }
                d.lineWidth = f;
                d.strokeStyle = this.emptyFill;
                d.stroke();
                d.restore()
            }
        },
        drawAnimated: function(d) {
            var c = this
                , e = this.el;
            e.trigger("circle-animation-start");
            b(this.canvas).stop(true, true).css({
                animationProgress: 0
            }).animate({
                animationProgress: 1
            }, b.extend({}, this.animation, {
                step: function(g) {
                    var f = c.animationStartValue * (1 - g) + d * g;
                    c.drawFrame(f);
                    e.trigger("circle-animation-progress", [g, f])
                },
                complete: function() {
                    e.trigger("circle-animation-end")
                }
            }))
        },
        getThickness: function() {
            return b.isNumeric(this.thickness) ? this.thickness : this.size / 14
        }
    };
    b.circleProgress = {
        defaults: a.prototype
    };
    b.easing.circleProgressEasing = function(f, g, e, i, h) {
        if ((g /= h / 2) < 1) {
            return i / 2 * g * g * g + e
        }
        return i / 2 * ((g -= 2) * g * g + 2) + e
    }
    ;
    b.fn.circleProgress = function(d) {
        var c = "circle-progress";
        if (d == "widget") {
            var e = this.data(c);
            return e && e.canvas
        }
        return this.each(function() {
                var h = b(this)
                    , f = h.data(c)
                    , g = b.isPlainObject(d) ? d : {};
                if (f) {
                    f.init(g)
                } else {
                    g.el = h;
                    f = new a(g);
                    h.data(c, f)
                }
            }
        )
    }
}
    )(jQuery);
(function(f) {
    function b() {
        this.regional = [];
        this.regional[""] = {
            labels: ["Years", "Months", "Weeks", "Days", "Hours", "Mins", "Secs"],
            labels1: ["Year", "Month", "Week", "Day", "Hour", "Min", "Secs"],
            compactLabels: ["y", "m", "w", "d"],
            whichLabels: null ,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: false
        };
        this._defaults = {
            until: null ,
            since: null ,
            timezone: null ,
            serverSync: null ,
            format: "dHMS",
            layout: "",
            compact: false,
            significant: 0,
            description: "",
            expiryUrl: "",
            expiryText: "",
            alwaysExpire: false,
            onExpiry: null ,
            onTick: null ,
            tickInterval: 1
        };
        f.extend(this._defaults, this.regional[""]);
        this._serverSyncs = [];
        function n(p) {
            var q = (p < 1000000000000 ? (q = performance.now ? (performance.now() + performance.timing.navigationStart) : Date.now()) : p || new Date().getTime());
            if (q - m >= 1000) {
                g._updateTargets();
                m = q
            }
            o(n)
        }
        var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null ;
        var m = 0;
        if (!o || f.noRequestAnimationFrame) {
            f.noRequestAnimationFrame = null ;
            setInterval(function() {
                    g._updateTargets()
                }
                , 980)
        } else {
            m = window.mozAnimationStartTime || new Date().getTime();
            o(n)
        }
    }
    var c = 0;
    var h = 1;
    var d = 2;
    var a = 3;
    var l = 4;
    var i = 5;
    var e = 6;
    f.extend(b.prototype, {
        markerClassName: "hasCountdown",
        propertyName: "countdown",
        _rtlClass: "countdown_rtl",
        _sectionClass: "countdown_section",
        _amountClass: "countdown_amount",
        _rowClass: "countdown_row",
        _holdingClass: "countdown_holding",
        _showClass: "countdown_show",
        _descrClass: "countdown_descr",
        _timerTargets: [],
        setDefaults: function(m) {
            this._resetExtraLabels(this._defaults, m);
            f.extend(this._defaults, m || {})
        },
        UTCDate: function(o, s, q, t, u, n, p, m) {
            if (typeof s == "object" && s.constructor == Date) {
                m = s.getMilliseconds();
                p = s.getSeconds();
                n = s.getMinutes();
                u = s.getHours();
                t = s.getDate();
                q = s.getMonth();
                s = s.getFullYear()
            }
            var r = new Date();
            r.setUTCFullYear(s);
            r.setUTCDate(1);
            r.setUTCMonth(q || 0);
            r.setUTCDate(t || 1);
            r.setUTCHours(u || 0);
            r.setUTCMinutes((n || 0) - (Math.abs(o) < 30 ? o * 60 : o));
            r.setUTCSeconds(p || 0);
            r.setUTCMilliseconds(m || 0);
            return r
        },
        periodsToSeconds: function(m) {
            return m[0] * 31557600 + m[1] * 2629800 + m[2] * 604800 + m[3] * 86400 + m[4] * 3600 + m[5] * 60 + m[6]
        },
        _attachPlugin: function(o, m) {
            o = f(o);
            if (o.hasClass(this.markerClassName)) {
                return
            }
            var n = {
                options: f.extend({}, this._defaults),
                _periods: [0, 0, 0, 0, 0, 0, 0]
            };
            o.addClass(this.markerClassName).data(this.propertyName, n);
            this._optionPlugin(o, m)
        },
        _addTarget: function(m) {
            if (!this._hasTarget(m)) {
                this._timerTargets.push(m)
            }
        },
        _hasTarget: function(m) {
            return ( f.inArray(m, this._timerTargets) > -1)
        },
        _removeTarget: function(m) {
            this._timerTargets = f.map(this._timerTargets, function(n) {
                    return ( n == m ? null  : n)
                }
            )
        },
        _updateTargets: function() {
            for (var m = this._timerTargets.length - 1; m >= 0; m--) {
                this._updateCountdown(this._timerTargets[m])
            }
        },
        _optionPlugin: function(r, o, q) {
            r = f(r);
            var p = r.data(this.propertyName);
            if (!o || (typeof o == "string" && q == null )) {
                var n = o;
                o = (p || {}).options;
                return ( o && n ? o[n] : o)
            }
            if (!r.hasClass(this.markerClassName)) {
                return
            }
            o = o || {};
            if (typeof o == "string") {
                var n = o;
                o = {};
                o[n] = q
            }
            this._resetExtraLabels(p.options, o);
            f.extend(p.options, o);
            this._adjustSettings(r, p);
            var m = new Date();
            if ((p._since && p._since < m) || (p._until && p._until > m)) {
                this._addTarget(r)
            }
            this._updateCountdown(r, p)
        },
        _updateCountdown: function(r, q) {
            var m = f(r);
            q = q || m.data(this.propertyName);
            if (!q) {
                return
            }
            m.html(this._generateHTML(q)).toggleClass(this._rtlClass, q.options.isRTL);
            if (f.isFunction(q.options.onTick)) {
                var p = q._hold != "lap" ? q._periods : this._calculatePeriods(q, q._show, q.options.significant, new Date());
                if (q.options.tickInterval == 1 || this.periodsToSeconds(p) % q.options.tickInterval == 0) {
                    q.options.onTick.apply(r, [p])
                }
            }
            var n = q._hold != "pause" && (q._since ? q._now.getTime() < q._since.getTime() : q._now.getTime() >= q._until.getTime());
            if (n && !q._expiring) {
                q._expiring = true;
                if (this._hasTarget(r) || q.options.alwaysExpire) {
                    this._removeTarget(r);
                    if (f.isFunction(q.options.onExpiry)) {
                        q.options.onExpiry.apply(r, [])
                    }
                    if (q.options.expiryText) {
                        var o = q.options.layout;
                        q.options.layout = q.options.expiryText;
                        this._updateCountdown(r, q);
                        q.options.layout = o
                    }
                    if (q.options.expiryUrl) {
                        window.location = q.options.expiryUrl
                    }
                }
                q._expiring = false
            } else {
                if (q._hold == "pause") {
                    this._removeTarget(r)
                }
            }
            m.data(this.propertyName, q)
        },
        _resetExtraLabels: function(p, m) {
            var o = false;
            for (var q in m) {
                if (q != "whichLabels" && q.match(/[Ll]abels/)) {
                    o = true;
                    break
                }
            }
            if (o) {
                for (var q in p) {
                    if (q.match(/[Ll]abels[02-9]/)) {
                        p[q] = null
                    }
                }
            }
        },
        _adjustSettings: function(t, s) {
            var o;
            var n = 0;
            var m = null ;
            for (var q = 0; q < this._serverSyncs.length; q++) {
                if (this._serverSyncs[q][0] == s.options.serverSync) {
                    m = this._serverSyncs[q][1];
                    break
                }
            }
            if (m != null ) {
                n = (s.options.serverSync ? m : 0);
                o = new Date()
            } else {
                var p = (f.isFunction(s.options.serverSync) ? s.options.serverSync.apply(t, []) : null );
                o = new Date();
                n = (p ? o.getTime() - p.getTime() : 0);
                this._serverSyncs.push([s.options.serverSync, n])
            }
            var r = s.options.timezone;
            r = (r == null  ? -o.getTimezoneOffset() : r);
            s._since = s.options.since;
            if (s._since != null ) {
                s._since = this.UTCDate(r, this._determineTime(s._since, null ));
                if (s._since && n) {
                    s._since.setMilliseconds(s._since.getMilliseconds() + n)
                }
            }
            s._until = this.UTCDate(r, this._determineTime(s.options.until, o));
            if (n) {
                s._until.setMilliseconds(s._until.getMilliseconds() + n)
            }
            s._show = this._determineShow(s)
        },
        _destroyPlugin: function(m) {
            m = f(m);
            if (!m.hasClass(this.markerClassName)) {
                return
            }
            this._removeTarget(m[0]);
            m.removeClass(this.markerClassName).empty().removeData(this.propertyName)
        },
        _pausePlugin: function(m) {
            this._hold(m, "pause")
        },
        _lapPlugin: function(m) {
            this._hold(m, "lap")
        },
        _resumePlugin: function(m) {
            this._hold(m, null )
        },
        _hold: function(p, o) {
            var n = f.data(p, this.propertyName);
            if (n) {
                if (n._hold == "pause" && !o) {
                    n._periods = n._savePeriods;
                    var m = (n._since ? "-" : "+");
                    n[n._since ? "_since" : "_until"] = this._determineTime(m + n._periods[0] + "y" + m + n._periods[1] + "o" + m + n._periods[2] + "w" + m + n._periods[3] + "d" + m + n._periods[4] + "h" + m + n._periods[5] + "m" + m + n._periods[6] + "s");
                    this._addTarget(p)
                }
                n._hold = o;
                n._savePeriods = (o == "pause" ? n._periods : null );
                f.data(p, this.propertyName, n);
                this._updateCountdown(p, n)
            }
        },
        _getTimesPlugin: function(n) {
            var m = f.data(n, this.propertyName);
            return ( !m ? null  : (!m._hold ? m._periods : this._calculatePeriods(m, m._show, m.options.significant, new Date())))
        },
        _determineTime: function(p, m) {
            var o = function(s) {
                    var r = new Date();
                    r.setTime(r.getTime() + s * 1000);
                    return r
                }
                ;
            var n = function(v) {
                    v = v.toLowerCase();
                    var s = new Date();
                    var z = s.getFullYear();
                    var x = s.getMonth();
                    var A = s.getDate();
                    var u = s.getHours();
                    var t = s.getMinutes();
                    var r = s.getSeconds();
                    var y = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
                    var w = y.exec(v);
                    while (w) {
                        switch (w[2] || "s") {
                            case "s":
                                r += parseInt(w[1], 10);
                                break;
                            case "m":
                                t += parseInt(w[1], 10);
                                break;
                            case "h":
                                u += parseInt(w[1], 10);
                                break;
                            case "d":
                                A += parseInt(w[1], 10);
                                break;
                            case "w":
                                A += parseInt(w[1], 10) * 7;
                                break;
                            case "o":
                                x += parseInt(w[1], 10);
                                A = Math.min(A, g._getDaysInMonth(z, x));
                                break;
                            case "y":
                                z += parseInt(w[1], 10);
                                A = Math.min(A, g._getDaysInMonth(z, x));
                                break
                        }
                        w = y.exec(v)
                    }
                    return new Date(z,x,A,u,t,r,0)
                }
                ;
            var q = (p == null  ? m : (typeof p == "string" ? n(p) : (typeof p == "number" ? o(p) : p)));
            if (q) {
                q.setMilliseconds(0)
            }
            return q
        },
        _getDaysInMonth: function(m, n) {
            return 32 - new Date(m,n,32).getDate()
        },
        _normalLabels: function(m) {
            return m
        },
        _generateHTML: function(q) {
            var x = this;
            q._periods = (q._hold ? q._periods : this._calculatePeriods(q, q._show, q.options.significant, new Date()));
            var u = false;
            var n = 0;
            var p = q.options.significant;
            var w = f.extend({}, q._show);
            for (var t = c; t <= e; t++) {
                u |= (q._show[t] == "?" && q._periods[t] > 0);
                w[t] = (q._show[t] == "?" && !u ? null  : q._show[t]);
                n += (w[t] ? 1 : 0);
                p -= (q._periods[t] > 0 ? 1 : 0)
            }
            var v = [false, false, false, false, false, false, false];
            for (var t = e; t >= c; t--) {
                if (q._show[t]) {
                    if (q._periods[t]) {
                        v[t] = true
                    } else {
                        v[t] = p > 0;
                        p--
                    }
                }
            }
            var r = (q.options.compact ? q.options.compactLabels : q.options.labels);
            var m = q.options.whichLabels || this._normalLabels;
            var s = function(z) {
                    var y = q.options["compactLabels" + m(q._periods[z])];
                    return ( w[z] ? x._translateDigits(q, q._periods[z]) + (y ? y[z] : r[z]) + " " : "")
                }
                ;
            var o = function(A) {
                    var z = q.options["labels" + m(q._periods[A])];
                    var y = x._translateDigits(q, q._periods[A]);
                    if (y.length == 1) {
                        y = "0" + y
                    }
                    return ( (!q.options.significant && w[A]) || (q.options.significant && v[A]) ? '<span class="' + g._sectionClass + '"><em>' + (z ? z[A] : r[A]) + '</em><span class="' + g._amountClass + '">' + y + "</span></span>" : "")
                }
                ;
            return ( q.options.layout ? this._buildLayout(q, w, q.options.layout, q.options.compact, q.options.significant, v) : ((q.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (q._hold ? " " + this._holdingClass : "") + '">' + s(c) + s(h) + s(d) + s(a) + (w[l] ? this._minDigits(q, q._periods[l], 2) : "") + (w[i] ? (w[l] ? q.options.timeSeparator : "") + this._minDigits(q, q._periods[i], 2) : "") + (w[e] ? (w[l] || w[i] ? q.options.timeSeparator : "") + this._minDigits(q, q._periods[e], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (q.options.significant || n) + (q._hold ? " " + this._holdingClass : "") + '">' + o(c) + o(h) + o(d) + o(a) + o(l) + o(i) + o(e)) + "</span>" + (q.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + q.options.description + "</span>" : "")))
        },
        _buildLayout: function(r, y, t, v, z, x) {
            var s = r.options[v ? "compactLabels" : "labels"];
            var n = r.options.whichLabels || this._normalLabels;
            var m = function(B) {
                    return (r.options[(v ? "compactLabels" : "labels") + n(r._periods[B])] || s)[B]
                }
                ;
            var w = function(C, B) {
                    return r.options.digits[Math.floor(C / B) % 10]
                }
                ;
            var o = {
                desc: r.options.description,
                sep: r.options.timeSeparator,
                yl: m(c),
                yn: this._minDigits(r, r._periods[c], 1),
                ynn: this._minDigits(r, r._periods[c], 2),
                ynnn: this._minDigits(r, r._periods[c], 3),
                y1: w(r._periods[c], 1),
                y10: w(r._periods[c], 10),
                y100: w(r._periods[c], 100),
                y1000: w(r._periods[c], 1000),
                ol: m(h),
                on: this._minDigits(r, r._periods[h], 1),
                onn: this._minDigits(r, r._periods[h], 2),
                onnn: this._minDigits(r, r._periods[h], 3),
                o1: w(r._periods[h], 1),
                o10: w(r._periods[h], 10),
                o100: w(r._periods[h], 100),
                o1000: w(r._periods[h], 1000),
                wl: m(d),
                wn: this._minDigits(r, r._periods[d], 1),
                wnn: this._minDigits(r, r._periods[d], 2),
                wnnn: this._minDigits(r, r._periods[d], 3),
                w1: w(r._periods[d], 1),
                w10: w(r._periods[d], 10),
                w100: w(r._periods[d], 100),
                w1000: w(r._periods[d], 1000),
                dl: m(a),
                dn: this._minDigits(r, r._periods[a], 1),
                dnn: this._minDigits(r, r._periods[a], 2),
                dnnn: this._minDigits(r, r._periods[a], 3),
                d1: w(r._periods[a], 1),
                d10: w(r._periods[a], 10),
                d100: w(r._periods[a], 100),
                d1000: w(r._periods[a], 1000),
                hl: m(l),
                hn: this._minDigits(r, r._periods[l], 1),
                hnn: this._minDigits(r, r._periods[l], 2),
                hnnn: this._minDigits(r, r._periods[l], 3),
                h1: w(r._periods[l], 1),
                h10: w(r._periods[l], 10),
                h100: w(r._periods[l], 100),
                h1000: w(r._periods[l], 1000),
                ml: m(i),
                mn: this._minDigits(r, r._periods[i], 1),
                mnn: this._minDigits(r, r._periods[i], 2),
                mnnn: this._minDigits(r, r._periods[i], 3),
                m1: w(r._periods[i], 1),
                m10: w(r._periods[i], 10),
                m100: w(r._periods[i], 100),
                m1000: w(r._periods[i], 1000),
                sl: m(e),
                sn: this._minDigits(r, r._periods[e], 1),
                snn: this._minDigits(r, r._periods[e], 2),
                snnn: this._minDigits(r, r._periods[e], 3),
                s1: w(r._periods[e], 1),
                s10: w(r._periods[e], 10),
                s100: w(r._periods[e], 100),
                s1000: w(r._periods[e], 1000)
            };
            var q = t;
            for (var p = c; p <= e; p++) {
                var u = "yowdhms".charAt(p);
                var A = new RegExp("\\{" + u + "<\\}(.*)\\{" + u + ">\\}","g");
                q = q.replace(A, ((!z && y[p]) || (z && x[p]) ? "$1" : ""))
            }
            f.each(o, function(D, B) {
                    var C = new RegExp("\\{" + D + "\\}","g");
                    q = q.replace(C, B)
                }
            );
            return q
        },
        _minDigits: function(o, n, m) {
            n = "" + n;
            if (n.length >= m) {
                return this._translateDigits(o, n)
            }
            n = "0000000000" + n;
            return this._translateDigits(o, n.substr(n.length - m))
        },
        _translateDigits: function(n, m) {
            return ("" + m).replace(/[0-9]/g, function(o) {
                    return n.options.digits[o]
                }
            )
        },
        _determineShow: function(n) {
            var o = n.options.format;
            var m = [];
            m[c] = (o.match("y") ? "?" : (o.match("Y") ? "!" : null ));
            m[h] = (o.match("o") ? "?" : (o.match("O") ? "!" : null ));
            m[d] = (o.match("w") ? "?" : (o.match("W") ? "!" : null ));
            m[a] = (o.match("d") ? "?" : (o.match("D") ? "!" : null ));
            m[l] = (o.match("h") ? "?" : (o.match("H") ? "!" : null ));
            m[i] = (o.match("m") ? "?" : (o.match("M") ? "!" : null ));
            m[e] = (o.match("s") ? "?" : (o.match("S") ? "!" : null ));
            return m
        },
        _calculatePeriods: function(p, D, t, n) {
            p._now = n;
            p._now.setMilliseconds(0);
            var r = new Date(p._now.getTime());
            if (p._since) {
                if (n.getTime() < p._since.getTime()) {
                    p._now = n = r
                } else {
                    n = p._since
                }
            } else {
                r.setTime(p._until.getTime());
                if (n.getTime() > p._until.getTime()) {
                    p._now = n = r
                }
            }
            var m = [0, 0, 0, 0, 0, 0, 0];
            if (D[c] || D[h]) {
                var y = g._getDaysInMonth(n.getFullYear(), n.getMonth());
                var z = g._getDaysInMonth(r.getFullYear(), r.getMonth());
                var s = (r.getDate() == n.getDate() || (r.getDate() >= Math.min(y, z) && n.getDate() >= Math.min(y, z)));
                var C = function(F) {
                        return (F.getHours() * 60 + F.getMinutes()) * 60 + F.getSeconds()
                    }
                    ;
                var u = Math.max(0, (r.getFullYear() - n.getFullYear()) * 12 + r.getMonth() - n.getMonth() + ((r.getDate() < n.getDate() && !s) || (s && C(r) < C(n)) ? -1 : 0));
                m[c] = (D[c] ? Math.floor(u / 12) : 0);
                m[h] = (D[h] ? u - m[c] * 12 : 0);
                n = new Date(n.getTime());
                var E = (n.getDate() == y);
                var q = g._getDaysInMonth(n.getFullYear() + m[c], n.getMonth() + m[h]);
                if (n.getDate() > q) {
                    n.setDate(q)
                }
                n.setFullYear(n.getFullYear() + m[c]);
                n.setMonth(n.getMonth() + m[h]);
                if (E) {
                    n.setDate(q)
                }
            }
            var x = Math.floor((r.getTime() - n.getTime()) / 1000);
            var o = function(G, F) {
                    m[G] = (D[G] ? Math.floor(x / F) : 0);
                    x -= m[G] * F
                }
                ;
            o(d, 604800);
            o(a, 86400);
            o(l, 3600);
            o(i, 60);
            o(e, 1);
            if (x > 0 && !p._since) {
                var v = [1, 12, 4.3482, 7, 24, 60, 60];
                var w = e;
                var A = 1;
                for (var B = e; B >= c; B--) {
                    if (D[B]) {
                        if (m[w] >= A) {
                            m[w] = 0;
                            x = 1
                        }
                        if (x > 0) {
                            m[B]++;
                            x = 0;
                            w = B;
                            A = 1
                        }
                    }
                    A *= v[B]
                }
            }
            if (t) {
                for (var B = c; B <= e; B++) {
                    if (t && m[B]) {
                        t--
                    } else {
                        if (!t) {
                            m[B] = 0
                        }
                    }
                }
            }
            return m
        }
    });
    var j = ["getTimes"];
    function k(n, m) {
        if (n == "option" && (m.length == 0 || (m.length == 1 && typeof m[0] == "string"))) {
            return true
        }
        return f.inArray(n, j) > -1
    }
    f.fn.countdown = function(n) {
        var m = Array.prototype.slice.call(arguments, 1);
        if (k(n, m)) {
            return g["_" + n + "Plugin"].apply(g, [this[0]].concat(m))
        }
        return this.each(function() {
                if (typeof n == "string") {
                    if (!g["_" + n + "Plugin"]) {
                        throw "Unknown command: " + n
                    }
                    g["_" + n + "Plugin"].apply(g, [this].concat(m))
                } else {
                    g._attachPlugin(this, n || {})
                }
            }
        )
    }
    ;
    var g = f.countdown = new b()
}
    )(jQuery);
(function(a) {
    a.fn.popupWindow = function(b) {
        return this.each(function() {
                a(this).click(function() {
                        a.fn.popupWindow.defaultSettings = {
                            centerBrowser: 1,
                            centerScreen: 0,
                            height: 500,
                            left: 0,
                            location: 0,
                            menubar: 0,
                            resizable: 0,
                            scrollbars: 0,
                            status: 0,
                            width: 500,
                            windowName: null ,
                            windowURL: null ,
                            top: 0,
                            toolbar: 0
                        };
                        settings = a.extend({}, a.fn.popupWindow.defaultSettings, b || {});
                        var c = "height=" + settings.height + ",width=" + settings.width + ",toolbar=" + settings.toolbar + ",scrollbars=" + settings.scrollbars + ",status=" + settings.status + ",resizable=" + settings.resizable + ",location=" + settings.location + ",menuBar=" + settings.menubar;
                        settings.windowName = this.name || settings.windowName;
                        settings.windowURL = a(this).data("link") || settings.windowURL;
                        var d, e;
                        if (settings.centerBrowser) {
                            if (a.browser.msie) {
                                d = (window.screenTop - 120) + ((((document.documentElement.clientHeight + 120) / 2) - (settings.height / 2)));
                                e = window.screenLeft + ((((document.body.offsetWidth + 20) / 2) - (settings.width / 2)))
                            } else {
                                d = window.screenY + (((window.outerHeight / 2) - (settings.height / 2)));
                                e = window.screenX + (((window.outerWidth / 2) - (settings.width / 2)))
                            }
                            window.open(settings.windowURL, settings.windowName, c + ",left=" + e + ",top=" + d).focus()
                        } else {
                            if (settings.centerScreen) {
                                d = (screen.height - settings.height) / 2;
                                e = (screen.width - settings.width) / 2;
                                window.open(settings.windowURL, settings.windowName, c + ",left=" + e + ",top=" + d).focus()
                            } else {
                                window.open(settings.windowURL, settings.windowName, c + ",left=" + settings.left + ",top=" + settings.top).focus()
                            }
                        }
                        return false
                    }
                )
            }
        )
    }
}
    )(jQuery);
(function(a, b) {
    var c = {
        menuUrl: "",
        initialize: function() {
            if (b(".progressbar").length) {
                b(".progressbar").each(function() {
                        var h = b(this).find(".circle");
                        var m = h.data("note");
                        var k = (parseFloat(m) / 10).toFixed(3);
                        var o = h.data("red");
                        var n = h.data("green");
                        var g = h.data("blue");
                        var l = h.find(".int");
                        var j = h.find(".dec");
                        h.circleProgress({
                            startAngle: -Math.PI / 2,
                            value: k,
                            thickness: 7,
                            size: 70,
                            fill: {
                                color: "rgb(" + o + ", " + n + ", " + g + ")"
                            },
                            emptyFill: "rgba(" + o + ", " + n + ", " + g + ", .3)"
                        }).on("circle-animation-progress", function(t, q, p) {
                                var s = (p * 10).toFixed(2).toString().split(".");
                                var r = s[0];
                                var u = s[1];
                                l.text(r);
                                j.text("." + u)
                            }
                        ).stop()
                    }
                )
            }
            var d = a.location.hash;
            if (d) {
                b(".box-tab").hide();
                b(d).show("slow");
                b(".tab-link").removeClass("active");
                b(".tab-link[href$=" + d + "]").addClass("active")
            }
            b(".tab-link").on("click", function(h) {
                    h.preventDefault();
                    var g = this.hash;
                    b(g).fadeIn(400).siblings().hide();
                    b(".tab-link").removeClass("active");
                    b(this).addClass("active");
                    b("html, body").animate({
                            scrollTop: 0
                        }, 0, function() {
                            a.location.hash = g
                        }
                    )
                }
            );
            b(".play-video").on("click", function(h) {
                    var g = b(".box-video");
                    g.prepend('<iframe src="//player.vimeo.com/video/88883554?title=0&amp;byline=0&amp;portrait=0&amp;color=3c948b&amp;autoplay=1" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                    g.fadeIn(300);
                    h.preventDefault()
                }
            );
            b(".close-video").on("click", function(g) {
                    b(".box-video").fadeOut(400, function() {
                            b("iframe", this).remove().fadeOut(300)
                        }
                    )
                }
            );
            b(".bt-search").click(function() {
                    if (b(".search-text").hasClass("visible")) {
                        b(".search-text").removeClass("visible")
                    } else {
                        b(".search-text").addClass("visible")
                    }
                    setTimeout(function() {
                            b(".search-text .text").trigger("focus")
                        }
                        , 200);
                    setTimeout(function() {
                            b(".search-text").removeClass("visible")
                        }
                        , 10000)
                }
            );
            b("#search-text input").on("click", function() {
                    var g = b(this);
                    g.closest("form").attr("action", g.data("url"))
                }
            );
            b(".js-open-menu-user").on("click", function(g) {
                    g.stopPropagation();
                    b("#nav-user").toggleClass("open");
                    b(".box-overlay").addClass("open")
                }
            );
            b(".nav-sidebar").on("click", function(g) {
                    g.stopPropagation()
                }
            );
            b(document).on("click", function() {
                    b(".nav-sidebar").removeClass("open");
                    b(".box-overlay").removeClass("open")
                }
            );
            b(".js-close-nav").on("click", function() {
                    b(".nav-sidebar").removeClass("open");
                    b(".box-overlay").removeClass("open")
                }
            );
            b("nav.search .dropdown").click(function() {
                    var g = b(this).data("filter");
                    if (b(this).hasClass("open")) {
                        b(this).removeClass("open");
                        b("#nav-filters").removeClass("open");
                        b("#nav-filters").slideToggle("normal");
                        setTimeout(function() {
                                b("#nav-filters .filter").hide()
                            }
                            , 500)
                    } else {
                        b("nav.search .dropdown").removeClass("open");
                        b(this).addClass("open");
                        if (b("#nav-filters").hasClass("open")) {
                            b("#nav-filters .filter").hide();
                            b("#nav-filters .filter-" + g).fadeIn()
                        } else {
                            b("#nav-filters").addClass("open");
                            b("#nav-filters .filter-" + g).fadeIn();
                            b("#nav-filters").slideToggle("fast")
                        }
                    }
                }
            );
            b(".js-order-az").click(function() {
                    var j = b(this).data("list");
                    var g = b("." + j + " ul");
                    g.addClass("open");
                    var h = g.children("li").get();
                    h.sort(function(l, k) {
                            var n = b(l).text().toUpperCase();
                            var m = b(k).text().toUpperCase();
                            return (n < m) ? -1 : (n > m) ? 1 : 0
                        }
                    );
                    b.each(h, function(k, l) {
                            g.append(l)
                        }
                    )
                }
            );
            b(a).scroll(function() {
                    var g = b(a).scrollTop();
                    if (g > 48 && !b("#header").hasClass("style2")) {
                        b("nav.search").removeClass("open");
                        b("body").addClass("header-fixed");
                        b(".menu2 li .box-scroll").removeClass("open");
                        b(".menu2 li span").removeClass("active");
                        b(".nav-filters").addClass("hide")
                    } else {
                        if (b("nav.search").hasClass("visible")) {
                            b("nav.search").addClass("open")
                        }
                        if (b(".nav-filters").hasClass("hide")) {
                            b(".nav-filters").removeClass("hide")
                        }
                        b("body").removeClass("header-fixed")
                    }
                    if (g > 300) {
                        b(".bt-pag.fixed").addClass("hide")
                    } else {
                        b(".bt-pag.fixed").removeClass("hide")
                    }
                }
            );
            b(".s_like").live("click", function(g) {
                    f(g, this)
                }
            );
            function f(k, g) {
                k.preventDefault();
                var j = b(g);
                var l = j.find(".total");
                var h = parseInt(j.find(".total").text());
                if (j.hasClass("active")) {
                    h--
                } else {
                    h++
                }
                j.addClass("processing");
                j.find(".total").text(h);
                var m = j;
                b(".s_like").die("click");
                b.ajax({
                    type: "post",
                    url: m.attr("data-url"),
                    success: function(o) {
                        if (m.hasClass("active")) {
                            var n = m.attr("data-url").replace("unlike", "like");
                            m.attr("data-url", n);
                            m.addClass("add_like");
                            m.removeClass("remove_like active")
                        } else {
                            var n = m.attr("data-url").replace("like", "unlike");
                            m.attr("data-url", n);
                            m.removeClass("add_like");
                            m.addClass("remove_like active")
                        }
                        m.removeClass("processing");
                        b(".s_like").live("click", function(p) {
                                f(p, this)
                            }
                        )
                    }
                })
            }
            b("#menu-mobile").load(this.menuUrl);
            b("#menu-mobile").on("click", ".bt-menu", function() {
                    if (b("#menu-mobile").hasClass("open")) {
                        b("#menu-mobile").removeClass("open")
                    } else {
                        b("#menu-mobile").addClass("open")
                    }
                }
            );
            b("#menu-mobile").on("click", ".dropdown", function() {
                    b(this).addClass("open");
                    b(this).find("ul").slideToggle()
                }
            );
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                b("#menu-mobile").addClass("is-mobile")
            }
            b("#subscription_form").live("submit", function(g) {
                    g.preventDefault();
                    b.ajax({
                        type: "POST",
                        url: b(this).attr("action"),
                        data: b(this).serialize(),
                        success: function(h) {
                            b(".subscription_form").html(h)
                        }
                    });
                    return false
                }
            )
        },
        addFancyBox: function() {
            b(".fancybox").fancybox()
        },
        submitFilterForm: function() {
            var g = b(".searchitems input:hidden");
            var d = b(".box_search .actions input");
            var f = b("#temp_form_search").append(g).append(d.clone());
            f.submit();
            b(".box_search .filter li").unbind("click");
            b("nav.menu .searchitems").off("click", "span", c.removeTag);
            b(".box_search .actions").off("change", "input:checkbox", c.submitFilterForm)
        },
        removeTag: function() {
            b(this).remove();
            c.submitFilterForm()
        },
        showHideTips: function() {
            b(".js-forms").on("click", "li", function() {
                    b(".js-forms .tip").hide();
                    var d = b(this).find(".tip");
                    if (d.length) {
                        if (d.hasClass("error")) {
                            d.filter(".error").fadeIn("fast")
                        } else {
                            d.addClass("visible").fadeIn("fast")
                        }
                    }
                }
            )
        },
        addDiscountLetter: function() {
            b(".discount_letter").live("keydown", function() {
                    var d = b(this).attr("rel") - b(this).val().length;
                    if (d < 0 && e.keyCode != 46 && e.keyCode != 8) {
                        return false
                    }
                    b(this).parent().find(".tip").text(d + " characters remaining")
                }
            )
        },
        addItemForm: function(f) {
            var d = f.attr("data-prototype");
            var h = f.children().length;
            var g = d.replace(/\__name__/g, h);
            f.append(g);
            return h
        },
        addCountdownNominee: function() {
            b(".countdown_nominee").each(function() {
                    var g = b(this);
                    var f = Number(g.data("time")) * 1000;
                    var d = new Date(f);
                    g.countdown({
                        until: d,
                        format: "DHMS"
                    })
                }
            )
        }
    };
    b(document).ready(function() {
            c.initialize();
            b(".popup").popupWindow()
        }
    );
    a.AW = a.AW || {};
    a.AW = c
}
    )(window, window.jQuery);
(function(b, c) {
    var a = {
        initialize: function(d) {
            a.addHeart();
            this.getIds(d)
        },
        openLogin: function() {
            c(".open_login").click(function(f) {
                    f.preventDefault();
                    var d = c(this);
                    c.fancybox.showLoading();
                    c.ajax({
                        type: "get",
                        url: d.data("url"),
                        success: function(g) {
                            c.fancybox(g, {
                                minWidth: 650,
                                height: "autoSize",
                                padding: 50
                            })
                        }
                    })
                }
            )
        },
        addVotesToSubmits: function(d) {
            for (i = 0; i < d.length; i++) {
                c("#nom_" + d[i]).text("VOTED");
                c("#nom_" + d[i]).addClass("voted")
            }
        },
        addHeartToSubmits: function(f) {
            for (i = 0; i < f.length; i++) {
                c("#like_" + f[i]).removeClass("add_like");
                c("#like_" + f[i]).addClass("remove_like active");
                var d = c("#like_" + f[i]).attr("data-vote").replace("like", "unlike");
                c("#like_" + f[i]).attr("data-url", d)
            }
        },
        getIds: function(f) {
            var g = [];
            c(".new").each(function() {
                    g.push(c(this).attr("data-id"));
                    c(this).removeClass("new")
                }
            );
            if (g.length > 0) {
                var d = "submission_ids=" + g + "&user_id=" + f;
                var h = url_ajax + "?" + d;
                this.callAjaxButtons(h)
            }
        },
        callAjaxButtons: function(d) {
            c.ajax({
                url: d,
                success: function(f) {
                    a.initialize();
                    if (f.hasLike != null ) {
                        a.addHeartToSubmits(f.hasLike)
                    }
                    if (f.hasVote != null ) {
                        a.addHeart(f.hasVote)
                    }
                }
            })
        },
        addHeart: function() {
            c(".add-like").each(function() {
                    c(this).removeClass("open_login");
                    c(this).addClass("add_like s_like");
                    c(this).attr("data-url", c(this).attr("data-vote"))
                }
            )
        }
    };
    b.AWB = b.AWB || {};
    b.AWB = a
}
    )(window, window.jQuery);
$(document).ready(ScrollMenuMobile);
$(window).resize(ScrollMenuMobile);
function ScrollMenuMobile() {
    setTimeout(function() {
            $(".wrapper-nav").css("height", $(window).height() + "px")
        }
        , 500)
}
function checkAdBlock() {
    var a = false;
    if ($.isAdblockOn === undefined) {
        a = true
    }
    return a
}
;