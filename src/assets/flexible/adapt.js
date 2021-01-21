// !function (a, b) { function c() { var b = f.getBoundingClientRect().width; b / i > 540 && (b = 540 * i); var c = b / 10; f.style.fontSize = c + "px", k.rem = a.rem = c } var d, e = a.document, f = e.documentElement, g = e.querySelector('meta[name="viewport"]'), h = e.querySelector('meta[name="flexible"]'), i = 0, j = 0, k = b.flexible || (b.flexible = {}); if (g) { console.warn("将根据已有的meta标签来设置缩放比例"); var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/); l && (j = parseFloat(l[1]), i = parseInt(1 / j)) } else if (h) { var m = h.getAttribute("content"); if (m) { var n = m.match(/initial\-dpr=([\d\.]+)/), o = m.match(/maximum\-dpr=([\d\.]+)/); n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2))) } } if (!i && !j) { var p = a.navigator.userAgent, q = (!!p.match(/android/gi), !!p.match(/iphone/gi)), r = q && !!p.match(/OS 9_3/), s = a.devicePixelRatio; i = q && !r ? s >= 3 && (!i || i >= 3) ? 3 : s >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i } if (f.setAttribute("data-dpr", i), !g) if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g); else { var t = e.createElement("div"); t.appendChild(g), e.write(t.innerHTML) } a.addEventListener("resize", function () { clearTimeout(d), d = setTimeout(c, 300) }, !1), a.addEventListener("pageshow", function (a) { a.persisted && (clearTimeout(d), d = setTimeout(c, 300)) }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () { e.body.style.fontSize = 12 * i + "px" }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) { var b = parseFloat(a) * this.rem; return "string" == typeof a && a.match(/rem$/) && (b += "px"), b }, k.px2rem = function (a) { var b = parseFloat(a) / this.rem; return "string" == typeof a && a.match(/px$/) && (b += "rem"), b } }(window, window.lib || (window.lib = {}));

; (function (win, lib) {

  var isAndroid = win.navigator.appVersion.match(/android/gi);
  var isIPhone = win.navigator.appVersion.match(/iphone/gi);

  if (isAndroid || isIPhone) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});

    if (metaEl) {
      console.warn('将根据已有的meta标签来设置缩放比例');
      var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
      if (match) {
        scale = parseFloat(match[1]);
        dpr = parseInt(1 / scale);
      }
    } else if (flexibleEl) {
      var content = flexibleEl.getAttribute('content');
      if (content) {
        var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
        var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
        if (initialDpr) {
          dpr = parseFloat(initialDpr[1]);
          scale = parseFloat((1 / dpr).toFixed(2));
        }
        if (maximumDpr) {
          dpr = parseFloat(maximumDpr[1]);
          scale = parseFloat((1 / dpr).toFixed(2));
        }
      }
    }

    if (!dpr && !scale) {
      var devicePixelRatio = win.devicePixelRatio;
      if (isIPhone) {
        // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
        if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
          dpr = 3;
        } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
          dpr = 2;
        } else {
          dpr = 1;
        }
      } else {
        // 其他设备下，仍旧使用1倍的方案
        dpr = 1;
      }
      scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
      metaEl = doc.createElement('meta');
      metaEl.setAttribute('name', 'viewport');
      metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
      if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(metaEl);
      } else {
        var wrap = doc.createElement('div');
        wrap.appendChild(metaEl);
        doc.write(wrap.innerHTML);
      }
    }

    function refreshRem() {
      var width = docEl.getBoundingClientRect().width;
      if (width / dpr > 540) {
        width = 540 * dpr;
      }
      var rem = width / 10;
      docEl.style.fontSize = rem + 'px';
      flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function () {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    }, false);

    if (doc.readyState === 'complete') {
      doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
      doc.addEventListener('DOMContentLoaded', function (e) {
        doc.body.style.fontSize = 12 * dpr + 'px';
      }, false);
    }


    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function (d) {
      var val = parseFloat(d) * this.rem;
      if (typeof d === 'string' && d.match(/rem$/)) {
        val += 'px';
      }
      return val;
    }
    flexible.px2rem = function (d) {
      var val = parseFloat(d) / this.rem;
      if (typeof d === 'string' && d.match(/px$/)) {
        val += 'rem';
      }
      return val;
    }
  }
})(window, window['lib'] || (window['lib'] = {}));