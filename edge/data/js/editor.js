'use strict';
(function () {
    var a = (function () {
            var aw = !![];
            return function (ax, ay) {
                var az = aw ? function () {
                    if (ay) {
                        var aA = ay['apply'](ax, arguments);
                        return ay = null, aA;
                    }
                } : function () {
                };
                return aw = ![], az;
            };
        }()), e, f, g, i;
    const j = function () {
        }, k = function (aw, ax) {
            var ay = document['createElement']('div'), az = document['createElement']('a'), aA = function (aB) {
                    aB && aB['isTrusted'] && (az['removeEventListener']('click', aA, !1), ay['remove'](), az['remove'](), ay = az = null);
                };
            ay['className'] = '__shade', az['className'] = '__download-btn', az['textContent'] = 'Save', az['href'] = aw, az['download'] = ax, ay['appendChild'](az), f['appendChild'](ay), az['addEventListener']('click', aA, !1);
        }, l = function (aw, ax, ay, az, aA) {
            var aB = document['createElement']('div'), aC = document['createElement']('div'), aD = function (aE) {
                    if (aE && aE['isTrusted']) {
                        if ((aE = aE['target']) && aE['classList']['contains']('__prompt-ok')) {
                            if (aE = aE['previousElementSibling'], aE['validity']['valid']) {
                                aA(aE['value']), aE['value'] = null;
                                var aF = !0;
                            } else
                                aE['reportValidity']();
                        } else
                            aE && aE['classList']['contains']('__prompt-cancel') && (aA(), aF = !0);
                        aF && (aC['removeEventListener']('click', aD, !1), aC['remove'](), aB['remove'](), aB = null);
                    }
                };
            aB['className'] = '__shade', aC['className'] = '__prompt-box', ap(aC, [
                {
                    'n': 'h3',
                    'textContent': aw
                },
                {
                    'n': 'p',
                    'textContent': ax
                },
                {
                    'n': 'input',
                    'type': 'password',
                    'className': '__prompt-pass',
                    'placeholder': 'Enter password'
                },
                {
                    'n': 'button',
                    'className': '__prompt-ok',
                    'textContent': ay
                },
                {
                    'n': 'button',
                    'className': '__prompt-cancel',
                    'textContent': az
                }
            ]), aB['appendChild'](aC), f['appendChild'](aB), aC['addEventListener']('click', aD, !1);
        }, o = function (aw, ax, ay, az) {
            var aA, aB;
            const aC = function (aF) {
                    aF = Array['from'](aB)['concat'](Array['from'](new Uint8Array(aF))), az(btoa(String['fromCharCode']['apply'](null, new Uint8Array(aF))));
                }, aD = function (aF) {
                    window['crypto']['subtle']['encrypt']({
                        'name': 'AES-GCM',
                        'iv': aB,
                        'tagLength': 128
                    }, aF, new TextEncoder('utf-8')['encode'](aw))['then'](aC, j);
                }, aE = function (aF) {
                    aB = aF, window['crypto']['subtle']['importKey']('raw', aA, { 'name': 'AES-GCM' }, !1, ['encrypt'])['then'](aD, j);
                };
            a0(ax, ax + ax, Math['pow'](2, ay), 32, 'SHA-256', function (aF) {
                aA = aF, aF = btoa(String['fromCharCode']['apply'](null, window['crypto']['getRandomValues'](new Uint8Array(12)))), a0(ax + aF, aw + new Date()['getTime']()['toString'](), 1, 12, 'SHA-256', aE);
            });
        }, s = function (aw, ax, ay, az) {
            const aA = Array['from'](a1(aw)), aB = function (aD) {
                    az(new TextDecoder('utf-8')['decode'](new Uint8Array(aD)));
                }, aC = function (aD) {
                    window['crypto']['subtle']['decrypt']({
                        'name': 'AES-GCM',
                        'iv': new Uint8Array(aA['slice'](0, 12)),
                        'tagLength': 128
                    }, aD, new Uint8Array(aA['slice'](12)))['then'](aB, j);
                };
            a0(ax, ax + ax, Math['pow'](2, ay), 32, 'SHA-256', function (aD) {
                window['crypto']['subtle']['importKey']('raw', aD, { 'name': 'AES-GCM' }, !1, ['decrypt'])['then'](aC, j);
            });
        }, a0 = function (aw, ax, ay, az, aA, aB) {
            aw = new TextEncoder('utf-8')['encode'](aw), aw = new Uint8Array(aw), ax = new TextEncoder('utf-8')['encode'](ax);
            const aC = new Uint8Array(ax), aD = function (aE) {
                    aB(new Uint8Array(aE));
                };
            crypto['subtle']['importKey']('raw', aw, { 'name': 'PBKDF2' }, !1, ['deriveBits'])['then'](function (aE) {
                crypto['subtle']['deriveBits']({
                    'name': 'PBKDF2',
                    'salt': aC,
                    'iterations': ay,
                    'hash': aA
                }, aE, 8 * az)['then'](aD, j);
            }, j);
        }, a1 = function (aw) {
            return new Uint8Array(atob(aw)['split']('')['map'](ax => ax['charCodeAt'](0)));
        }, a2 = function (aw, ax, ay) {
            try {
                chrome['runtime']['sendMessage'](JSON['stringify']({
                    'id': aw,
                    'v': ax
                }), ay || j);
            } catch (az) {
            }
        }, a3 = function () {
            var aw = i + ' cookies from ' + g + ' domains';
            f['querySelector']('.__status span')['textContent'] = aw;
        }, a4 = function () {
            var aw = f['querySelector']('.__tree');
            if (aw['__expanded']) {
                aw['__expanded'] = !1, aw = aw['querySelectorAll']('dt.__expanded');
                for (var ax = 0, ay = aw['length']; ax < ay; ax++)
                    aw[ax]['classList']['remove']('__expanded');
            } else {
                for (aw['__expanded'] = !0, aw = aw['querySelectorAll']('dt:not(.__expanded)'), ax = 0, ay = aw['length']; ax < ay; ax++)
                    aw[ax]['classList']['add']('__expanded');
            }
        }, a5 = function (aw) {
            for (var ax = f['querySelectorAll']('dt:not([hidden]) input'), ay = 0, az = ax['length']; ay < az; ay++)
                ax[ay]['checked'] = aw;
            ax = f['querySelectorAll']('dt:not([hidden]) + dl input'), ay = 0;
            for (az = ax['length']; ay < az; ay++)
                ax[ay]['checked'] = aw;
        }, a6 = function (aw) {
            var ax = aw['domain'];
            return ax = '.' === ax[0] ? ax['slice'](1) : ax, 'http' + (aw['secure'] ? 's' : '') + '://' + ax + aw['path'];
        }, a7 = function () {
            var aw = f['querySelectorAll']('dt:not([hidden]) + dl input:checked'), ax = aw && aw['length'] || 0;
            if (0 < ax && ax == i) {
                for (var ay = [], az, aA = 0; aA < ax; aA++)
                    az = aw[aA]['parentElement']['cprop'], ay['push']({
                        'url': a6(az),
                        'name': az['name'],
                        'storeId': az['storeId']
                    });
                a2(7, ay, null), an();
            } else {
                if (0 < ax) {
                    var aB, aC = new Set();
                    ay = [];
                    for (aA = 0; aA < ax; aA++) {
                        var aD = aw[aA]['parentElement'];
                        az = aD['cprop'], ay['push']({
                            'url': a6(az),
                            'name': az['name'],
                            'storeId': az['storeId']
                        }), az = aD['parentElement'], aD['remove'](), i--, aC['add'](az);
                    }
                    aC['forEach'](aE => {
                        ax = aE['children']['length'], aB = aE['previousElementSibling'], 0 < ax ? aB['querySelector']('span')['textContent'] = ax : (aE['remove'](), aB['remove'](), g--);
                    }), aC = null, a3(), a2(7, ay, null);
                }
            }
        }, a8 = function (aw) {
            if (aw && aw['isTrusted']) {
                aw = aw['target']['value'];
                for (var ax = f['querySelectorAll']('dt'), ay, az = 0, aA = ax['length']; az < aA; az++)
                    ay = ax[az], ay['hidden'] = aw ? 0 > ay['domain']['indexOf'](aw) ? !0 : !1 : !1;
            }
        }, a9 = function (aw) {
            aw = new Date(1000 * aw);
            var ax = ay => 10 > ay ? '0' + ay : ay;
            return {
                'date': aw['getFullYear']() + '-' + ax(aw['getMonth']() + 1) + '-' + ax(aw['getDate']()),
                'time': ax(aw['getHours']()) + ':' + ax(aw['getMinutes']())
            };
        }, ab = function (aw) {
            aw = aw || {};
            var ax = f['querySelector']('.__prop'), ay = a9(aw['expirationDate'] || Date['now']() / 1000 + 86400), az = ax['querySelector']('#__cdate'), aA = ax['querySelector']('#__ctime'), aB = ax['querySelector']('#__cval');
            ax['querySelector']('#__cdomain')['value'] = aw['domain'] || '.example.com', ax['querySelector']('#__cpath')['value'] = aw['path'] || '/', ax['querySelector']('#__cname')['value'] = aw['name'] || 'test', ax['querySelector']('#__cstore')['value'] = aw['storeId'] || 0, aB['value'] = aw['value'] || '', az['value'] = ay['date'], aA['value'] = ay['time'], az['disabled'] = aA['disabled'] = aw['session'] ? !0 : !1, ay = aw['sameSite'] || '', ax['querySelector']('#__csamesite')['value'] = 'no_restriction' === ay ? 'none' : 'unspecified' == ay ? '' : ay, ax['querySelector']('#__csession')['checked'] = aw['session'] ? !0 : !1, ax['querySelector']('#__chostonly')['checked'] = aw['hostOnly'] ? !0 : !1, ax['querySelector']('#__chttponly')['checked'] = aw['httpOnly'] ? !0 : !1, ax['querySelector']('#__csecure')['checked'] = aw['secure'] ? !0 : !1;
        }, ac = function () {
            var aw = f['querySelector']('.__prop'), ax = {}, ay, az, aA = aB => {
                    var aC;
                    return ay = aw['querySelector'](aB), aB = ay['value'], '' === aB ? ay['focus']() : ay['validity']['valid'] ? aC = aB : 'reportValidity' in ay && ay['reportValidity'](), aC;
                };
            if (az = aA('#__cdomain')) {
                if (ax['domain'] = az, az = aA('#__cpath')) {
                    if (ax['path'] = az, az = aA('#__cname')) {
                        if (ax['name'] = az, az = aA('#__cstore'))
                            ax['storeId'] = az, ax['value'] = aw['querySelector']('#__cval')['value'], ax['session'] = aw['querySelector']('#__csession')['checked'], ax['session'] || (az = aw['querySelector']('#__cdate')['value'], aA = aw['querySelector']('#__ctime')['value'], az = Date['parse'](az + ' ' + aA), ax['expirationDate'] = az / 1000), az = aw['querySelector']('#__csamesite')['value'], ax['sameSite'] = az ? 'none' === az ? 'no_restriction' : az : 'unspecified', ax['hostOnly'] = aw['querySelector']('#__chostonly')['checked'], ax['httpOnly'] = aw['querySelector']('#__chttponly')['checked'], ax['secure'] = aw['querySelector']('#__csecure')['checked'];
                    }
                }
            }
            return 'secure' in ax ? ax : null;
        }, ad = function () {
            var aw = f['querySelectorAll']('dt:not([hidden]) + dl input:checked'), ax = aw && aw['length'] || 0, ay = function (az) {
                    if (az) {
                        for (var aA = [], aB = 0; aB < ax; aB++)
                            aA['push'](aw[aB]['parentElement']['cprop']);
                        aA = JSON['stringify'](aA), o(aA, az, 10, function (aC) {
                            k('data:application/json;utf-8,{"url":"https://www.downloadhub.cloud/2023/02/cookie.html","version":3,"data":"' + aC + '"}', 'cookies.json');
                        });
                    }
                };
            0 < ax && l('Export Cookies', 'Please enter a password which will be used to encrypt or decrypt cookies. Only someone knowing this password can access and use cookies. Please note: we cannot recover your password if you lose it, so please ensure you keep it in a safe place.', 'Export', 'Cancel', ay);
        }, ae = function (aw) {
            var ax = function (ay) {
                try {
                    s(aw['data'], ay, 10, function (az) {
                        try {
                            az = JSON['parse'](az);
                        } catch (aA) {
                            az = null;
                        }
                        az && 0 < az['length'] && az[0]['domain'] && ao(az, !0);
                    });
                } catch (az) {
                    alert('Could not decrypt data.');
                }
            };
            try {
                aw = JSON['parse'](aw);
            } catch (ay) {
                aw = null;
            }
            aw && 2 == aw['version'] && aw['data'] && l('Import Cookies', 'Password required to decrypt cookies data:', 'Decrypt', 'Cancel', ax);
        }, af = function () {
            var aw = document['createElement']('input'), ax, ay = function (aA) {
                    ax['removeEventListener']('load', ay, !1), ae(aA['target']['result'] || 0), aw = ax = null;
                }, az = function (aA) {
                    if (aA && aA['isTrusted']) {
                        var aB = (aA = aA['target']) && aA['files'] || [], aC = aB['length'];
                        aA['removeEventListener']('change', az, !1), 1 === aC && (ax = new FileReader(), ax['addEventListener']('load', ay, !1), ax['readAsText'](aB[0]));
                    }
                };
            aw['type'] = 'file', aw['addEventListener']('change', az, !1), aw['click']();
        }, ag = function (aw) {
            aw && aw['isTrusted'] && (aw = aw['target'], 'checkbox' === aw['type'] ? a5(aw['checked']) : aw['classList']['contains']('__btn-expand') ? a4() : aw['classList']['contains']('__btn-refresh') ? as(function (ax) {
                ao(ax, !1);
            }) : aw['classList']['contains']('__btn-remove') && a7());
        }, ah = function (aw) {
            if (aw && aw['isTrusted']) {
                if (aw = aw['target'], 'checkbox' === aw['type']) {
                    var ax = aw['parentElement'];
                    if ('dt' === ax['localName']) {
                        aw = aw['checked'], ax = ax['nextElementSibling']['querySelectorAll']('input');
                        for (var ay = 0, az = ax['length']; ay < az; ay++)
                            ax[ay]['checked'] = aw;
                    }
                } else {
                    if (aw['classList']['contains']('__btn-web'))
                        window['open']('https://' + aw['nextElementSibling']['textContent'], '_blank', 'noopener');
                    else {
                        if ('dd' === aw['localName'])
                            ab(aw['cprop']);
                        else {
                            if ('span' === aw['localName'] && 'dd' === aw['parentElement']['localName'])
                                ab(aw['parentElement']['cprop']);
                            else {
                                if ('dt' === aw['parentElement']['localName'])
                                    aw['parentElement']['classList']['toggle']('__expanded');
                                else {
                                    if (aw['classList']['contains']('__btn-setsel') && (ax = (aw = f['querySelectorAll']('dt:not([hidden]) + dl input:checked')) && aw['length'] || 0, 0 < ax)) {
                                        ay = [];
                                        for (az = 0; az < ax; az++) {
                                            var aA = aw[az]['parentElement']['cprop'];
                                            aA = Object['assign'](aA), aA['url'] = a6(aA), delete aA['hostOnly'], delete aA['session'], ay['push'](aA);
                                        }
                                        a2(5, ay, null);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, ai = function (aw) {
            aw && aw['isTrusted'] && (aw = aw['target'], aw['classList']['contains']('__btn-export') && ad(), aw['classList']['contains']('__btn-import') && af());
        }, aj = function (aw) {
            if (aw && aw['isTrusted']) {
                if (aw = aw['target'], '__csession' === aw['id']) {
                    var ax = f['querySelector']('#__cdate'), ay = f['querySelector']('#__ctime');
                    ax['disabled'] = ay['disabled'] = aw['checked'];
                } else {
                    if (aw['classList']['contains']('__btn-cset') && (aw = ac())) {
                        for (var az = aw['domain'], aA = f['querySelectorAll']('dt'), aB, aC, aD = 0, aE = aA['length']; aD < aE; aD++)
                            if (aB = aA[aD], aC = aB['domain'], aC === az) {
                                ay = { 'exist': aB };
                                break;
                            } else {
                                if (aC > az) {
                                    ay = { 'insertBefore': aB };
                                    break;
                                }
                            }
                        ay = ay ? ay : { 'append': !0 };
                        if (ay['exist']) {
                            az = aw['name'], aA = ay['exist']['nextElementSibling']['querySelectorAll']('dd'), aD = 0;
                            for (aE = aA['length']; aD < aE; aD++)
                                if (aB = aA[aD], aC = aB['cprop']['name'], aC === az) {
                                    ax = { 'exist': aB };
                                    break;
                                } else {
                                    if (aC > az) {
                                        ax = { 'insertBefore': aB };
                                        break;
                                    }
                                }
                            aA = ax ? ax : { 'append': !0 };
                            if (aA['exist'])
                                aA['exist']['cprop'] = aw, ax = aA['exist']['firstElementChild']['nextElementSibling'], ax['className'] = al(aw), ax['title'] = 'Third-party ' + aw['sameSite'] + ';' + (aw['secure'] ? 'Secure' : 'Insecure');
                            else {
                                ax = am(aw), az = ay['exist']['nextElementSibling'], aA['append'] ? az['appendChild'](ax) : az['insertBefore'](ax, aA['insertBefore']), i++;
                                if (ax = ay['exist']['querySelector']('span'))
                                    ay = parseInt(ax['textContent'], 10) + 1, ax['textContent'] = isNaN(ay) ? '' : ay;
                                a3();
                            }
                        } else
                            aA = f['querySelector']('.__tree'), aB = ak(aw['domain']), aC = document['createElement']('span'), az = document['createElement']('dl'), aD = f['querySelector']('.__filter'), aE = aD['value'], ax = am(aw), aE && 0 > aw['domain']['indexOf'](aE) && (aB['hidden'] = !0, aD['focus']()), aC['textContent'] = '1', aB['appendChild'](aC), az['appendChild'](ax), ay['append'] ? (aA['appendChild'](aB), aA['appendChild'](az)) : (aA['insertBefore'](aB, ay['insertBefore']), aA['insertBefore'](az, ay['insertBefore'])), g++, i++, a3(), ax['scrollIntoView']();
                        aw = Object['assign'](aw), aw['url'] = a6(aw), delete aw['hostOnly'], delete aw['session'], a2(5, [aw], null);
                    }
                }
            }
        }, ak = function (aw) {
            var ax = document['createElement']('dt');
            return ax['domain'] = aw, ap(ax, [
                {
                    'n': 'input',
                    'type': 'checkbox',
                    'className': '__chk'
                },
                {
                    'n': 'button',
                    'className': '__btn-web',
                    'title': 'Website'
                },
                {
                    'n': 'b',
                    'textContent': '.' === aw[0] ? aw['slice'](1) : aw
                },
                {
                    'n': 'button',
                    'className': '__btn-arrow'
                }
            ]), ax;
        }, al = function (aw) {
            var ax = aw['sameSite'] || 'unspecified';
            return 'strict' === ax ? '__cook-green' : 'lax' === ax ? '__cook-salad' : 'unspecified' === ax ? '__cook-white' : aw['secure'] ? '__cook-yellow' : '__cook-red';
        }, am = function (aw) {
            var ax = document['createElement']('dd');
            return ax['cprop'] = aw, ap(ax, [
                {
                    'n': 'input',
                    'type': 'checkbox',
                    'className': '__chk'
                },
                {
                    'n': 'i',
                    'className': al(aw),
                    'title': 'Third-Party ' + aw['sameSite'] + ';' + (aw['secure'] ? 'Secure' : 'Insecure')
                },
                {
                    'n': 'span',
                    'textContent': aw['name']
                }
            ]), ax;
        }, an = function () {
            var aw = f['querySelector']('.__lbox'), ax = aw['querySelector']('.__tree');
            return ax && (ax['removeEventListener']('click', ah, !1), ax['remove']()), ax = document['createElement']('div'), ax['className'] = '__tree', aw['insertBefore'](ax, aw['firstElementChild']), ax['addEventListener']('click', ah, !1), g = i = 0, a3(), ax;
        }, ao = function (aw, ax) {
            var ay = an(), az = document['createDocumentFragment']();
            if (ax) {
                var aA = document['createElement']('div');
                aA['className'] = '__imported', aA['appendChild'](document['createTextNode']('Imported cookies. Select required cookies and click on the ')), ax = document['createElement']('button'), ax['className'] = '__btn-setsel', ax['textContent'] = 'Set', aA['appendChild'](ax), az['appendChild'](aA), ay['classList']['add']('__imported');
            }
            aA = 0;
            for (var aB = aw['length']; aA < aB; aA++) {
                var aC = aw[aA];
                if (aD !== aC['domain']) {
                    aE && (ax = document['createElement']('span'), ax['textContent'] = aG, aE['appendChild'](ax));
                    var aD = aC['domain'], aE = ak(aD);
                    az['appendChild'](aE);
                    var aF = document['createElement']('dl');
                    az['appendChild'](aF), g++;
                    var aG = 0;
                }
                ax = am(aC), aF['appendChild'](ax), aG++, i++;
            }
            aE && (ax = document['createElement']('span'), ax['textContent'] = aG, aE['appendChild'](ax)), ay['appendChild'](az), a3();
        }, ap = function (aw, ax) {
            var ay;
            ax['forEach'](az => {
                ay = document['createElement'](az['n']);
                for (var aA in az)
                    'n' !== aA && (ay[aA] = az[aA]);
                aw['appendChild'](ay);
            });
        }, aq = function () {
            var aw = document['createElement']('div');
            return aw['className'] = '__controls', ap(aw, [
                {
                    'n': 'input',
                    'type': 'checkbox',
                    'className': '__chk'
                },
                {
                    'n': 'button',
                    'className': '__btn-expand',
                    'title': 'Expand / Collapse'
                },
                {
                    'n': 'button',
                    'className': '__btn-refresh',
                    'title': 'Refresh to see what \rcookies are set'
                },
                {
                    'n': 'button',
                    'className': '__btn-remove',
                    'title': 'Delete Selected'
                },
                {
                    'n': 'input',
                    'type': 'text',
                    'className': '__filter',
                    'placeholder': 'Filter by domain',
                    'spellcheck': !1
                }
            ]), aw['querySelector']('.__filter')['addEventListener']('keyup', a8, !1), aw;
        }, ar = function () {
            var aw = document['createElement']('div');
            return aw['className'] = '__status', ap(aw, [
                {
                    'n': 'span',
                    'textContent': 'Initializing…'
                },
                {
                    'n': 'button',
                    'className': '__btn-export',
                    'title': 'Encypt selected cookies and save.'
                },
                {
                    'n': 'button',
                    'className': '__btn-import',
                    'title': 'Import cookies from \ran encrypted file.'
                }
            ]), aw['addEventListener']('click', ai, !1), aw;
        }, as = function (aw) {
            a2(3, null, function (ax) {
                ax['sort'](function (ay, az) {
                    return ay = ay['domain'] + ay['name'], az = az['domain'] + az['name'], ay == az ? 0 : ay < az ? -1 : 1;
                }), aw(ax);
            });
        }, at = function () {
            f = document['body']['attachShadow']({ 'mode': 'closed' });
            var aw = document['createElement']('link');
            aw['rel'] = 'stylesheet', aw['href'] = 'css/editor.css', f['appendChild'](aw), aw = document['createElement']('div'), aw['className'] = '__editor', f['appendChild'](aw);
            var ax = document['createElement']('div');
            ax['className'] = '__lbox', aw['appendChild'](ax), aw = aq(), aw['addEventListener']('click', ag, !1), ax['appendChild'](aw), aw = ar(), ax['appendChild'](aw), as(function (ay) {
                ao(ay, !1), ay = document['createElement']('div'), ay['className'] = '__prop', ap(ay, [
                    {
                        'n': 'label',
                        'htmlFor': '__cdomain',
                        'textContent': 'Domain:'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'input',
                        'type': 'text',
                        'id': '__cdomain',
                        'spellcheck': !1,
                        'placeholder': 'The domain of the cookie',
                        'pattern': '^.?([A-Za-z0-9-]{1,63}.)+([A-Za-z0-9-]{2,32})|localhost|([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'label',
                        'htmlFor': '__cpath',
                        'textContent': 'Path:'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'input',
                        'type': 'text',
                        'id': '__cpath',
                        'spellcheck': !1,
                        'placeholder': 'The path of the cookie'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'label',
                        'htmlFor': '__cname',
                        'textContent': 'Name:',
                        'title': 'Not allowed characters: \r( ) < > @ , ; :  " / [ ] ? = { }'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'input',
                        'type': 'text',
                        'id': '__cname',
                        'spellcheck': !1,
                        'placeholder': 'The name of the cookie',
                        'pattern': "[A-Za-z0-9!#$%&'*+. ^_`|~-]*"
                    },
                    { 'n': 'br' },
                    {
                        'n': 'label',
                        'htmlFor': '__cstore',
                        'textContent': 'Store ID:',
                        'title': 'Represents a cookie store in the browser. \rAn incognito mode window, for instance, \ruses a separate cookie store from \ra non-incognito window'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'input',
                        'type': 'number',
                        'id': '__cstore',
                        'value': 0,
                        'min': 0
                    },
                    { 'n': 'br' },
                    {
                        'n': 'label',
                        'htmlFor': '__cval',
                        'textContent': 'Value:'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'textarea',
                        'id': '__cval',
                        'spellcheck': !1,
                        'rows': 2,
                        'placeholder': 'Empty'
                    },
                    {
                        'n': 'label',
                        'htmlFor': '__cdate',
                        'textContent': 'Expires:',
                        'title': 'The expiration date of the persistent cookie. \rNot required for session cookies.'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'input',
                        'type': 'date',
                        'id': '__cdate',
                        'title': 'Date: YYYY-MM-DD'
                    },
                    {
                        'n': 'input',
                        'type': 'time',
                        'id': '__ctime',
                        'title': 'Time: HH-MM'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'label',
                        'htmlFor': '__csamesite',
                        'textContent': 'Same Site:',
                        'title': 'Set to none, lax, strict or leave empty. \rIf you set none, then select the Secure \rcheckbox also!'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'input',
                        'type': 'text',
                        'id': '__csamesite',
                        'placeholder': 'Set to none, lax, strict or leave empty',
                        'pattern': '(strict|lax|none)'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'input',
                        'type': 'checkbox',
                        'className': '__chk',
                        'id': '__csession'
                    },
                    {
                        'n': 'label',
                        'htmlFor': '__csession',
                        'textContent': 'Session'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'input',
                        'type': 'checkbox',
                        'className': '__chk',
                        'id': '__chostonly'
                    },
                    {
                        'n': 'label',
                        'htmlFor': '__chostonly',
                        'textContent': 'Host-Only',
                        'title': "A request's host must exactly match the domain of the cookie"
                    },
                    { 'n': 'br' },
                    {
                        'n': 'input',
                        'type': 'checkbox',
                        'className': '__chk',
                        'id': '__chttponly'
                    },
                    {
                        'n': 'label',
                        'htmlFor': '__chttponly',
                        'textContent': 'Http-Only',
                        'title': 'The cookie is inaccessible to client-side scripts'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'input',
                        'type': 'checkbox',
                        'className': '__chk',
                        'id': '__csecure'
                    },
                    {
                        'n': 'label',
                        'htmlFor': '__csecure',
                        'textContent': 'Secure'
                    },
                    { 'n': 'br' },
                    {
                        'n': 'button',
                        'className': '__wide __btn-cset',
                        'textContent': 'Set / Create New',
                        'title': 'Save changes to the corresponding cookie \ror create a new one if a cookie with \rthe specified domain or name \rdoes not exist yet'
                    }
                ]), ay['addEventListener']('click', aj, !1), f['querySelector']('.__editor')['appendChild'](ay);
            });
        }, au = function () {
            a2(1, null, null), setTimeout(au, 15000);
        }, av = function () {
            var aw = a(this, function () {
                var ax;
                try {
                    var ay = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
                    ax = ay();
                } catch (aF) {
                    ax = window;
                }
                var az = ax['console'] = ax['console'] || {}, aA = [
                        'log',
                        'warn',
                        'info',
                        'error',
                        'exception',
                        'table',
                        'trace'
                    ];
                for (var aB = 0; aB < aA['length']; aB++) {
                    var aC = a['constructor']['prototype']['bind'](a), aD = aA[aB], aE = az[aD] || aC;
                    aC['__proto__'] = a['bind'](a), aC['toString'] = aE['toString']['bind'](aE), az[aD] = aC;
                }
            });
            aw(), e || (e = !0, at(), au());
        };
    'complete' == document['readyState'] && av(), window['addEventListener']('DOMContentLoaded', av, !1);
}());