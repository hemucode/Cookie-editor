// Cookie Editor for Google Chrome™ - HOTCLEANER.COM - Copyright (c) 2020 Vlad & Serge Strukoff. All Rights Reserved
// Minified by Google Closure Compiler 20200112
'use strict';
(function () {
  const d = 163104834E4 > Date.now() ? !0 : !1,
    c = function () {
      return chrome.runtime.lastError ? !0 : !1
    },
    e = function (a) {
      chrome.windows.create({
        url: a,
        incognito: !0,
        type: "normal",
        state: "maximized"
      }, function (b) {
        c() && chrome.tabs.create({
          url: a
        }, c)
      })
    },
    f = function (a) {
      a && a.isTrusted && !this.classList.contains("__nrm") && (a.preventDefault(), a.stopPropagation(), (a = this.href || "") && e(a))
    },
    g = function (a) {
      a && a.isTrusted && (a.preventDefault(), a.stopPropagation())
    },
    b = function () {
      d && navigator.sendBeacon("https://api64.com/kh21009",
        null);
      window.addEventListener("contextmenu", g, !0);
      document.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", f, !0)
      })
    };
  "complete" == document.readyState && b();
  window.addEventListener("DOMContentLoaded", b, !1)
})();