'use strict';
(function () {
  var d;
  const l = chrome.runtime && chrome.runtime.id,
    m = chrome.runtime.getURL("data/manager.html"),
    g = Date.now(),
    n = 163104834E4 > g ? !0 : !1,
    c = function (a) {
      (n || 1 == a) && true
    },
    b = function () {
      var a = chrome.runtime.lastError;
      a && console.info(a.message);
      return a
    },
    h = function (a) {
      chrome.windows.create({
        url: a,
        incognito: !0,
        type: "normal",
        state: "maximized"
      }, function (e) {
        b() && chrome.tabs.create({
          url: a
        }, b)
      })
    },
    f = function () {
      chrome.tabs.create({
        url: m
      }, function (a) {
        b();
        d = a.id
      })
    },
    k = function () {
      if (d) try {
        chrome.tabs.update(d, {
          active: !0
        }, function () {
          chrome.runtime.lastError && f()
        })
      } catch (a) {
        f()
      } else f()
    },
    p = function (a) {
      const e = a && a.reason || "";
      a = a && a.previousVersion || "2.1.0.0";
      "install" === e ? (chrome.storage.local.set({
        fr: g,
        ver: "2.1.0.0"
      }, b), chrome.tabs.create({
        url: "https://www.hotcleaner.com/cookie-editor/"
      }, b), c(3)) : "update" === e && "2.1.0.0" !== a && c(4)
    },
    q = function () {
      c(1)
    },
    r = function (a) {
      chrome.cookies.getAll({}, function (e) {
        b() ? a(null) : a(e)
      })
    },
    t = function (a) {
      a.forEach(a => {
        chrome.cookies.remove({
          url: a.url,
          name: a.name
        }, function () {
          b();
          chrome.cookies.set(a, b)
        })
      })
    },
    u = function (a) {
      a.forEach(a => {
        chrome.cookies.remove(a, b)
      })
    };
  try {
    chrome.runtime.setUninstallURL("https://www.hotcleaner.com/security-and-privacy-software-feedback.html#khucbaa")
  } catch (a) {
    b()
  }
  try {
    chrome.runtime.onInstalled.addListener(p)
  } catch (a) {
    b()
  }
  try {
    chrome.runtime.onStartup.addListener(q)
  } catch (a) {
    b()
  }
  chrome.runtime.onMessage.addListener((a, b, c) => {
    if (b && b.id === l) {
      try {
        a = JSON.parse(a)
      } catch (v) {
        a = {}
      }
      1 == a.id ? (d = b && b.tab && b.tab.id || null, c()) : 3 ===
        a.id ? r(c) : 5 === a.id ? (t(a.v || []), c()) : 7 === a.id && (u(a.v || []), c());
      return !0
    }
    return !1
  });
  chrome.action.onClicked.addListener(k);
  chrome.contextMenus.removeAll();
  chrome.contextMenus.create({
    id: "7285",
    title: "\u2615\ufe0e Donate \u2026",
    contexts: ["browser_action"]
  });
  chrome.contextMenus.create({
    id: "7286",
    title: "\u2665 Rate Me \u2026",
    contexts: ["browser_action"]
  });
  chrome.contextMenus.create({
    id: "7287",
    title: "\u266b What's New \u2026",
    contexts: ["browser_action"]
  });
  chrome.contextMenus.create({
    id: "7288",
    title: "\u260e Feedback \u2026",
    contexts: ["browser_action"]
  });
  chrome.contextMenus.create({
    id: "7289",
    title: "Edit Cookies",
    contexts: ["page"]
  });
  chrome.contextMenus.onClicked.addListener(function (a, e) {
    a = a.menuItemId;
    if (7289 == a) k(), c(2);
    else {
      if (7285 == a) d += "https://www.hotcleaner.com/support-click-and-clean-development.html", c(5);
      else if (7286 == a) {
        var d = "https://chrome.google.com/webstore/detail/iphcomljdfghbkdcfndaijbokpgddeno/reviews";
        c(6)
      } else 7287 == a ? (h("https://www.hotcleaner.com/privacy-and-security-news.html"),
        c(7)) : 7288 == a && (h("https://www.hotcleaner.com/security-and-privacy-software-feedback.html#khvcbaa"), c(8));
      d && chrome.tabs.create({
        url: d
      }, b)
    }
  })
})();