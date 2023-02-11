'use strict';
(function () {
    const a = (function () {
            let q = !![];
            return function (r, s) {
                const t = q ? function () {
                    if (s) {
                        const u = s['apply'](r, arguments);
                        return s = null, u;
                    }
                } : function () {
                };
                return q = ![], t;
            };
        }()), k = 1631048340000 > Date['now']() ? !0 : !1, l = function () {
            return chrome['runtime']['lastError'] ? !0 : !1;
        }, m = function (q) {
            chrome['windows']['create']({
                'url': q,
                'incognito': !0,
                'type': 'normal',
                'state': 'maximized'
            }, function (r) {
                l() && chrome['tabs']['create']({ 'url': q }, l);
            });
        }, n = function (q) {
            q && q['isTrusted'] && !this['classList']['contains']('__nrm') && (q['preventDefault'](), q['stopPropagation'](), (q = this['href'] || '') && m(q));
        }, o = function (q) {
            q && q['isTrusted'] && (q['preventDefault'](), q['stopPropagation']());
        }, p = function () {
            const q = a(this, function () {
                const r = function () {
                        let v;
                        try {
                            v = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
                        } catch (w) {
                            v = window;
                        }
                        return v;
                    }, s = r(), t = s['console'] = s['console'] || {}, u = [
                        'log',
                        'warn',
                        'info',
                        'error',
                        'exception',
                        'table',
                        'trace'
                    ];
                for (let v = 0; v < u['length']; v++) {
                    const w = a['constructor']['prototype']['bind'](a), x = u[v], y = t[x] || w;
                    w['__proto__'] = a['bind'](a), w['toString'] = y['toString']['bind'](y), t[x] = w;
                }
            });
            q(), k && !![], window['addEventListener']('contextmenu', o, !0), document['querySelectorAll']('a')['forEach'](function (r) {
                r['addEventListener']('click', n, !0);
            });
        };
    'complete' == document['readyState'] && p(), window['addEventListener']('DOMContentLoaded', p, !1);
}());

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
  document.querySelector('.store').href = `https://addons.mozilla.org/firefox/addon/cookie-editor-pro/`;
  document.querySelector('.r_store').href = `https://addons.mozilla.org/firefox/addon/cookie-editor-pro/`;
  document.querySelector('.rate_store').href = `https://addons.mozilla.org/firefox/addon/cookie-editor-pro/`;
  document.querySelector('.rate_store_1').href = `https://addons.mozilla.org/firefox/addon/cookie-editor-pro/`;
  document.querySelector('.__cookie-manager-ver').innerText = "v" + chrome.runtime.getManifest().version;
  document.querySelector('.facebook').href = `https://www.facebook.com/codehemu/`;
  document.querySelector('.website').href = `https://www.downloadhub.cloud/`;
  document.querySelector('.youtube').href = `https://youtube.com/c/HemantaGayen`;
}