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
      d && true;
      window.addEventListener("contextmenu", g, !0);
      document.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", f, !0)
      })
    };
  "complete" == document.readyState && b();
  window.addEventListener("DOMContentLoaded", b, !1)
})();

domReady(() => {
  linkButton()
  credityear()
})

function domReady (callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
}

function credityear() {
  document.querySelector("#year").innerText =  new Date().getFullYear();
}

function linkButton() {
  document.querySelector('.store').href = `https://addons.opera.com/extensions/details/cookie-editor-pro/`;
  document.querySelector('.r_store').href = `https://addons.opera.com/extensions/details/cookie-editor-pro/`;
  document.querySelector('.rate_store').href = `https://addons.opera.com/extensions/details/cookie-editor-pro/`;
  document.querySelector('.rate_store_1').href = `https://addons.opera.com/extensions/details/cookie-editor-pro/`;
  document.querySelector('.__cookie-manager-ver').innerText = "v" + chrome.runtime.getManifest().version;
  document.querySelector('.facebook').href = `https://www.facebook.com/codehemu/`;
  document.querySelector('.website').href = `https://www.downloadhub.cloud/`;
  document.querySelector('.youtube').href = `https://youtube.com/c/HemantaGayen`;
}