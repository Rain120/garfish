(self.webpackChunkgarfish_docs = self.webpackChunkgarfish_docs || []).push([
  [514, 177],
  {
    4137: function (e, t, n) {
      'use strict';
      n.d(t, {
        Zo: function () {
          return u;
        },
        kt: function () {
          return m;
        },
      });
      var r = n(7294);
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var c = r.createContext({}),
        s = function (e) {
          var t = r.useContext(c),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        u = function (e) {
          var t = s(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        d = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        p = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            o = e.originalType,
            c = e.parentName,
            u = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(n),
            m = a,
            h = p[''.concat(c, '.').concat(m)] || p[m] || d[m] || o;
          return n
            ? r.createElement(h, i(i({ ref: t }, u), {}, { components: n }))
            : r.createElement(h, i({ ref: t }, u));
        });
      function m(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var o = n.length,
            i = new Array(o);
          i[0] = p;
          var l = {};
          for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
          (l.originalType = e),
            (l.mdxType = 'string' == typeof e ? e : a),
            (i[1] = l);
          for (var s = 2; s < o; s++) i[s] = n[s];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, n);
      }
      p.displayName = 'MDXCreateElement';
    },
    8147: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return Se;
          },
        });
      var r = n(7294),
        a = n(4137),
        o = n(9962),
        i = n(7401),
        l = n(462),
        c = n(2122),
        s = n(9756),
        u = n(6010),
        d = n(4395),
        p = n(50),
        m = n(9729),
        h = n(3301),
        f = n(5717),
        b = n(2511),
        y = n(2735),
        g = n(2827),
        v = function (e) {
          return r.createElement(
            'svg',
            (0, c.Z)({ width: '20', height: '20', 'aria-hidden': 'true' }, e),
            r.createElement(
              'g',
              { fill: '#7a7a7a' },
              r.createElement('path', {
                d:
                  'M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0',
              }),
              r.createElement('path', {
                d:
                  'M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0',
              }),
            ),
          );
        },
        k = n(6416),
        E = n(6681),
        N = n(7130),
        C = 'sidebar_15mo',
        Z = 'sidebarWithHideableNavbar_267A',
        _ = 'sidebarHidden_2kNb',
        T = 'sidebarLogo_3h0W',
        j = 'menu_Bmed',
        O = 'menuLinkText_2aKo',
        x = 'menuWithAnnouncementBar_2WvA',
        S = 'collapseSidebarButton_1CGd',
        P = 'collapseSidebarButtonIcon_3E-R',
        I = 'sidebarMenuIcon_fgN0',
        w = 'sidebarMenuCloseIcon_1lpH',
        L = ['items'],
        A = ['item', 'onItemClick', 'collapsible', 'activePath'],
        B = ['item', 'onItemClick', 'activePath', 'collapsible'];
      var R = function e(t, n) {
          return 'link' === t.type
            ? (0, d.Mg)(t.href, n)
            : 'category' === t.type &&
                t.items.some(function (t) {
                  return e(t, n);
                });
        },
        D = (0, r.memo)(function (e) {
          var t = e.items,
            n = (0, s.Z)(e, L);
          return t.map(function (e, t) {
            return r.createElement(M, (0, c.Z)({ key: t, item: e }, n));
          });
        });
      function M(e) {
        switch (e.item.type) {
          case 'category':
            return r.createElement(F, e);
          case 'link':
          default:
            return r.createElement(W, e);
        }
      }
      function F(e) {
        var t,
          n,
          a,
          o = e.item,
          i = e.onItemClick,
          l = e.collapsible,
          d = e.activePath,
          p = (0, s.Z)(e, A),
          m = o.items,
          h = o.label,
          f = R(o, d),
          b =
            ((n = f),
            (a = (0, r.useRef)(n)),
            (0, r.useEffect)(
              function () {
                a.current = n;
              },
              [n],
            ),
            a.current),
          y = (0, r.useState)(function () {
            return !!l && !f && o.collapsed;
          }),
          g = y[0],
          v = y[1],
          k = (0, r.useRef)(null),
          E = (0, r.useState)(void 0),
          N = E[0],
          C = E[1],
          Z = function (e) {
            var t;
            void 0 === e && (e = !0),
              C(
                e
                  ? (null == (t = k.current) ? void 0 : t.scrollHeight) + 'px'
                  : void 0,
              );
          };
        (0, r.useEffect)(
          function () {
            f && !b && g && v(!1);
          },
          [f, b, g],
        );
        var _ = (0, r.useCallback)(
          function (e) {
            e.preventDefault(),
              N || Z(),
              setTimeout(function () {
                return v(function (e) {
                  return !e;
                });
              }, 100);
          },
          [N],
        );
        return 0 === m.length
          ? null
          : r.createElement(
              'li',
              {
                className: (0, u.Z)('menu__list-item', {
                  'menu__list-item--collapsed': g,
                }),
              },
              r.createElement(
                'a',
                (0, c.Z)(
                  {
                    className: (0, u.Z)(
                      'menu__link',
                      ((t = {
                        'menu__link--sublist': l,
                        'menu__link--active': l && f,
                      }),
                      (t[O] = !l),
                      t),
                    ),
                    onClick: l ? _ : void 0,
                    href: l ? '#!' : void 0,
                  },
                  p,
                ),
                h,
              ),
              r.createElement(
                'ul',
                {
                  className: 'menu__list',
                  ref: k,
                  style: { height: N },
                  onTransitionEnd: function () {
                    g || Z(!1);
                  },
                },
                r.createElement(D, {
                  items: m,
                  tabIndex: g ? '-1' : '0',
                  onItemClick: i,
                  collapsible: l,
                  activePath: d,
                }),
              ),
            );
      }
      function W(e) {
        var t = e.item,
          n = e.onItemClick,
          a = e.activePath,
          o = (e.collapsible, (0, s.Z)(e, B)),
          i = t.href,
          l = t.label,
          d = R(t, a);
        return r.createElement(
          'li',
          { className: 'menu__list-item', key: l },
          r.createElement(
            b.Z,
            (0, c.Z)(
              {
                className: (0, u.Z)('menu__link', { 'menu__link--active': d }),
                to: i,
              },
              (0, y.Z)(i) && { isNavLink: !0, exact: !0, onClick: n },
              o,
            ),
            (0, y.Z)(i)
              ? l
              : r.createElement('span', null, l, r.createElement(E.Z, null)),
          ),
        );
      }
      function H(e) {
        var t = e.onClick;
        return r.createElement(
          'button',
          {
            type: 'button',
            title: (0, N.I)({
              id: 'theme.docs.sidebar.collapseButtonTitle',
              message: 'Collapse sidebar',
              description:
                'The title attribute for collapse button of doc sidebar',
            }),
            'aria-label': (0, N.I)({
              id: 'theme.docs.sidebar.collapseButtonAriaLabel',
              message: 'Collapse sidebar',
              description:
                'The title attribute for collapse button of doc sidebar',
            }),
            className: (0, u.Z)('button button--secondary button--outline', S),
            onClick: t,
          },
          r.createElement(v, { className: P }),
        );
      }
      function z(e) {
        var t = e.responsiveSidebarOpened,
          n = e.onClick;
        return r.createElement(
          'button',
          {
            'aria-label': t
              ? (0, N.I)({
                  id: 'theme.docs.sidebar.responsiveCloseButtonLabel',
                  message: 'Close menu',
                  description:
                    'The ARIA label for close button of mobile doc sidebar',
                })
              : (0, N.I)({
                  id: 'theme.docs.sidebar.responsiveOpenButtonLabel',
                  message: 'Open menu',
                  description:
                    'The ARIA label for open button of mobile doc sidebar',
                }),
            'aria-haspopup': 'true',
            className: 'button button--secondary button--sm menu__button',
            type: 'button',
            onClick: n,
          },
          t
            ? r.createElement('span', { className: (0, u.Z)(I, w) }, '\xd7')
            : r.createElement(k.Z, { className: I, height: 24, width: 24 }),
        );
      }
      var U = function (e) {
          var t,
            n,
            a = e.path,
            o = e.sidebar,
            i = e.sidebarCollapsible,
            l = void 0 === i || i,
            c = e.onCollapse,
            s = e.isHidden,
            b = (function () {
              var e = (0, p.Z)().isAnnouncementBarClosed,
                t = (0, r.useState)(!e),
                n = t[0],
                a = t[1];
              return (
                (0, f.Z)(function (t) {
                  var n = t.scrollY;
                  e || a(0 === n);
                }),
                n
              );
            })(),
            y = (0, d.LU)(),
            v = y.navbar.hideOnScroll,
            k = y.hideableSidebar,
            E = (0, p.Z)().isAnnouncementBarClosed,
            O = (function () {
              var e = (0, r.useState)(!1),
                t = e[0],
                n = e[1];
              (0, m.Z)(t);
              var a = (0, h.Z)();
              return (
                (0, r.useEffect)(
                  function () {
                    a === h.D.desktop && n(!1);
                  },
                  [a],
                ),
                {
                  showResponsiveSidebar: t,
                  closeResponsiveSidebar: (0, r.useCallback)(
                    function (e) {
                      e.target.blur(), n(!1);
                    },
                    [n],
                  ),
                  toggleResponsiveSidebar: (0, r.useCallback)(
                    function () {
                      n(function (e) {
                        return !e;
                      });
                    },
                    [n],
                  ),
                }
              );
            })(),
            S = O.showResponsiveSidebar,
            P = O.closeResponsiveSidebar,
            I = O.toggleResponsiveSidebar;
          return r.createElement(
            'div',
            { className: (0, u.Z)(C, ((t = {}), (t[Z] = v), (t[_] = s), t)) },
            v && r.createElement(g.Z, { tabIndex: -1, className: T }),
            r.createElement(
              'nav',
              {
                className: (0, u.Z)(
                  'menu',
                  'menu--responsive',
                  'thin-scrollbar',
                  j,
                  ((n = { 'menu--show': S }), (n[x] = !E && b), n),
                ),
                'aria-label': (0, N.I)({
                  id: 'theme.docs.sidebar.navAriaLabel',
                  message: 'Sidebar navigation',
                  description: 'The ARIA label for documentation menu',
                }),
              },
              r.createElement(z, { responsiveSidebarOpened: S, onClick: I }),
              r.createElement(
                'ul',
                { className: 'menu__list' },
                r.createElement(D, {
                  items: o,
                  onItemClick: P,
                  collapsible: l,
                  activePath: a,
                }),
              ),
            ),
            k && r.createElement(H, { onClick: c }),
          );
        },
        $ = {
          plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
          styles: [
            {
              types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
              style: { color: '#6c6783' },
            },
            { types: ['namespace'], style: { opacity: 0.7 } },
            {
              types: ['tag', 'operator', 'number'],
              style: { color: '#e09142' },
            },
            { types: ['property', 'function'], style: { color: '#9a86fd' } },
            {
              types: ['tag-id', 'selector', 'atrule-id'],
              style: { color: '#eeebff' },
            },
            { types: ['attr-name'], style: { color: '#c4b9fe' } },
            {
              types: [
                'boolean',
                'string',
                'entity',
                'url',
                'attr-value',
                'keyword',
                'control',
                'directive',
                'unit',
                'statement',
                'regex',
                'at-rule',
                'placeholder',
                'variable',
              ],
              style: { color: '#ffcc99' },
            },
            {
              types: ['deleted'],
              style: { textDecorationLine: 'line-through' },
            },
            { types: ['inserted'], style: { textDecorationLine: 'underline' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['important'], style: { color: '#c4b9fe' } },
          ],
        },
        K = { Prism: n(7410).Z, theme: $ };
      function J(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function V() {
        return (V =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Y = /\r\n|\r|\n/,
        G = function (e) {
          0 === e.length
            ? e.push({ types: ['plain'], content: '\n', empty: !0 })
            : 1 === e.length &&
              '' === e[0].content &&
              ((e[0].content = '\n'), (e[0].empty = !0));
        },
        X = function (e, t) {
          var n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        q = function (e, t) {
          var n = e.plain,
            r = Object.create(null),
            a = e.styles.reduce(function (e, n) {
              var r = n.languages,
                a = n.style;
              return (
                (r && !r.includes(t)) ||
                  n.types.forEach(function (t) {
                    var n = V({}, e[t], a);
                    e[t] = n;
                  }),
                e
              );
            }, r);
          return (
            (a.root = n), (a.plain = V({}, n, { backgroundColor: null })), a
          );
        };
      function Q(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            -1 === t.indexOf(r) &&
            (n[r] = e[r]);
        return n;
      }
      var ee = (function (e) {
        function t() {
          for (var t = this, n = [], r = arguments.length; r--; )
            n[r] = arguments[r];
          e.apply(this, n),
            J(this, 'getThemeDict', function (e) {
              if (
                void 0 !== t.themeDict &&
                e.theme === t.prevTheme &&
                e.language === t.prevLanguage
              )
                return t.themeDict;
              (t.prevTheme = e.theme), (t.prevLanguage = e.language);
              var n = e.theme ? q(e.theme, e.language) : void 0;
              return (t.themeDict = n);
            }),
            J(this, 'getLineProps', function (e) {
              var n = e.key,
                r = e.className,
                a = e.style,
                o = V({}, Q(e, ['key', 'className', 'style', 'line']), {
                  className: 'token-line',
                  style: void 0,
                  key: void 0,
                }),
                i = t.getThemeDict(t.props);
              return (
                void 0 !== i && (o.style = i.plain),
                void 0 !== a &&
                  (o.style = void 0 !== o.style ? V({}, o.style, a) : a),
                void 0 !== n && (o.key = n),
                r && (o.className += ' ' + r),
                o
              );
            }),
            J(this, 'getStyleForToken', function (e) {
              var n = e.types,
                r = e.empty,
                a = n.length,
                o = t.getThemeDict(t.props);
              if (void 0 !== o) {
                if (1 === a && 'plain' === n[0])
                  return r ? { display: 'inline-block' } : void 0;
                if (1 === a && !r) return o[n[0]];
                var i = r ? { display: 'inline-block' } : {},
                  l = n.map(function (e) {
                    return o[e];
                  });
                return Object.assign.apply(Object, [i].concat(l));
              }
            }),
            J(this, 'getTokenProps', function (e) {
              var n = e.key,
                r = e.className,
                a = e.style,
                o = e.token,
                i = V({}, Q(e, ['key', 'className', 'style', 'token']), {
                  className: 'token ' + o.types.join(' '),
                  children: o.content,
                  style: t.getStyleForToken(o),
                  key: void 0,
                });
              return (
                void 0 !== a &&
                  (i.style = void 0 !== i.style ? V({}, i.style, a) : a),
                void 0 !== n && (i.key = n),
                r && (i.className += ' ' + r),
                i
              );
            }),
            J(this, 'tokenize', function (e, t, n, r) {
              var a = { code: t, grammar: n, language: r, tokens: [] };
              e.hooks.run('before-tokenize', a);
              var o = (a.tokens = e.tokenize(a.code, a.grammar, a.language));
              return e.hooks.run('after-tokenize', a), o;
            });
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.Prism,
              n = e.language,
              r = e.code,
              a = e.children,
              o = this.getThemeDict(this.props),
              i = t.languages[n];
            return a({
              tokens: (function (e) {
                for (
                  var t = [[]],
                    n = [e],
                    r = [0],
                    a = [e.length],
                    o = 0,
                    i = 0,
                    l = [],
                    c = [l];
                  i > -1;

                ) {
                  for (; (o = r[i]++) < a[i]; ) {
                    var s = void 0,
                      u = t[i],
                      d = n[i][o];
                    if (
                      ('string' == typeof d
                        ? ((u = i > 0 ? u : ['plain']), (s = d))
                        : ((u = X(u, d.type)),
                          d.alias && (u = X(u, d.alias)),
                          (s = d.content)),
                      'string' == typeof s)
                    ) {
                      var p = s.split(Y),
                        m = p.length;
                      l.push({ types: u, content: p[0] });
                      for (var h = 1; h < m; h++)
                        G(l),
                          c.push((l = [])),
                          l.push({ types: u, content: p[h] });
                    } else
                      i++, t.push(u), n.push(s), r.push(0), a.push(s.length);
                  }
                  i--, t.pop(), n.pop(), r.pop(), a.pop();
                }
                return G(l), c;
              })(void 0 !== i ? this.tokenize(t, r, i, n) : [r]),
              className: 'prism-code language-' + n,
              style: void 0 !== o ? o.root : {},
              getLineProps: this.getLineProps,
              getTokenProps: this.getTokenProps,
            });
          }),
          t
        );
      })(r.Component);
      var te = n(7594),
        ne = n.n(te),
        re = {
          plain: { color: '#bfc7d5', backgroundColor: '#292d3e' },
          styles: [
            {
              types: ['comment'],
              style: { color: 'rgb(105, 112, 152)', fontStyle: 'italic' },
            },
            {
              types: ['string', 'inserted'],
              style: { color: 'rgb(195, 232, 141)' },
            },
            { types: ['number'], style: { color: 'rgb(247, 140, 108)' } },
            {
              types: ['builtin', 'char', 'constant', 'function'],
              style: { color: 'rgb(130, 170, 255)' },
            },
            {
              types: ['punctuation', 'selector'],
              style: { color: 'rgb(199, 146, 234)' },
            },
            { types: ['variable'], style: { color: 'rgb(191, 199, 213)' } },
            {
              types: ['class-name', 'attr-name'],
              style: { color: 'rgb(255, 203, 107)' },
            },
            {
              types: ['tag', 'deleted'],
              style: { color: 'rgb(255, 85, 114)' },
            },
            { types: ['operator'], style: { color: 'rgb(137, 221, 255)' } },
            { types: ['boolean'], style: { color: 'rgb(255, 88, 116)' } },
            { types: ['keyword'], style: { fontStyle: 'italic' } },
            {
              types: ['doctype'],
              style: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' },
            },
            { types: ['namespace'], style: { color: 'rgb(178, 204, 214)' } },
            { types: ['url'], style: { color: 'rgb(221, 221, 221)' } },
          ],
        },
        ae = n(8002),
        oe = function () {
          var e = (0, d.LU)().prism,
            t = (0, ae.Z)().isDarkTheme,
            n = e.theme || re,
            r = e.darkTheme || n;
          return t ? r : n;
        },
        ie = 'codeBlockContainer_K1bP',
        le = 'codeBlockContent_hGly',
        ce = 'codeBlockTitle_eoMF',
        se = 'codeBlock_23N8',
        ue = 'codeBlockWithTitle_2JqI',
        de = 'copyButton_Ue-o',
        pe = 'codeBlockLines_39YC',
        me = /{([\d,-]+)}/,
        he = function (e) {
          void 0 === e && (e = ['js', 'jsBlock', 'jsx', 'python', 'html']);
          var t = {
              js: { start: '\\/\\/', end: '' },
              jsBlock: { start: '\\/\\*', end: '\\*\\/' },
              jsx: { start: '\\{\\s*\\/\\*', end: '\\*\\/\\s*\\}' },
              python: { start: '#', end: '' },
              html: { start: '\x3c!--', end: '--\x3e' },
            },
            n = [
              'highlight-next-line',
              'highlight-start',
              'highlight-end',
            ].join('|'),
            r = e
              .map(function (e) {
                return (
                  '(?:' + t[e].start + '\\s*(' + n + ')\\s*' + t[e].end + ')'
                );
              })
              .join('|');
          return new RegExp('^\\s*(?:' + r + ')\\s*$');
        };
      function fe(e) {
        var t = e.children,
          n = e.className,
          a = e.metastring,
          o = e.title,
          i = (0, d.LU)().prism,
          l = (0, r.useState)(!1),
          s = l[0],
          p = l[1],
          m = (0, r.useState)(!1),
          h = m[0],
          f = m[1];
        (0, r.useEffect)(function () {
          f(!0);
        }, []);
        var b = (0, d.bc)(a) || o,
          y = (0, r.useRef)(null),
          g = [],
          v = oe(),
          k = Array.isArray(t) ? t.join('') : t;
        if (a && me.test(a)) {
          var E = a.match(me)[1];
          g = ne()(E).filter(function (e) {
            return e > 0;
          });
        }
        var C = n && n.replace(/language-/, '');
        !C && i.defaultLanguage && (C = i.defaultLanguage);
        var Z = k.replace(/\n$/, '');
        if (0 === g.length && void 0 !== C) {
          for (
            var _,
              T = '',
              j = (function (e) {
                switch (e) {
                  case 'js':
                  case 'javascript':
                  case 'ts':
                  case 'typescript':
                    return he(['js', 'jsBlock']);
                  case 'jsx':
                  case 'tsx':
                    return he(['js', 'jsBlock', 'jsx']);
                  case 'html':
                    return he(['js', 'jsBlock', 'html']);
                  case 'python':
                  case 'py':
                    return he(['python']);
                  default:
                    return he();
                }
              })(C),
              O = k.replace(/\n$/, '').split('\n'),
              x = 0;
            x < O.length;

          ) {
            var S = x + 1,
              P = O[x].match(j);
            if (null !== P) {
              switch (
                P.slice(1).reduce(function (e, t) {
                  return e || t;
                }, void 0)
              ) {
                case 'highlight-next-line':
                  T += S + ',';
                  break;
                case 'highlight-start':
                  _ = S;
                  break;
                case 'highlight-end':
                  T += _ + '-' + (S - 1) + ',';
              }
              O.splice(x, 1);
            } else x += 1;
          }
          (g = ne()(T)), (Z = O.join('\n'));
        }
        var I = function () {
          !(function (e, t) {
            var n = (void 0 === t ? {} : t).target,
              r = void 0 === n ? document.body : n,
              a = document.createElement('textarea'),
              o = document.activeElement;
            (a.value = e),
              a.setAttribute('readonly', ''),
              (a.style.contain = 'strict'),
              (a.style.position = 'absolute'),
              (a.style.left = '-9999px'),
              (a.style.fontSize = '12pt');
            var i = document.getSelection(),
              l = !1;
            i.rangeCount > 0 && (l = i.getRangeAt(0)),
              r.append(a),
              a.select(),
              (a.selectionStart = 0),
              (a.selectionEnd = e.length);
            var c = !1;
            try {
              c = document.execCommand('copy');
            } catch (s) {}
            a.remove(),
              l && (i.removeAllRanges(), i.addRange(l)),
              o && o.focus();
          })(Z),
            p(!0),
            setTimeout(function () {
              return p(!1);
            }, 2e3);
        };
        return r.createElement(
          ee,
          (0, c.Z)({}, K, { key: String(h), theme: v, code: Z, language: C }),
          function (e) {
            var t,
              n = e.className,
              a = e.style,
              o = e.tokens,
              i = e.getLineProps,
              l = e.getTokenProps;
            return r.createElement(
              'div',
              { className: ie },
              b && r.createElement('div', { style: a, className: ce }, b),
              r.createElement(
                'div',
                { className: (0, u.Z)(le, C) },
                r.createElement(
                  'pre',
                  {
                    tabIndex: 0,
                    className: (0, u.Z)(
                      n,
                      se,
                      'thin-scrollbar',
                      ((t = {}), (t[ue] = b), t),
                    ),
                    style: a,
                  },
                  r.createElement(
                    'code',
                    { className: pe },
                    o.map(function (e, t) {
                      1 === e.length &&
                        '' === e[0].content &&
                        (e[0].content = '\n');
                      var n = i({ line: e, key: t });
                      return (
                        g.includes(t + 1) &&
                          (n.className += ' docusaurus-highlight-code-line'),
                        r.createElement(
                          'span',
                          (0, c.Z)({ key: t }, n),
                          e.map(function (e, t) {
                            return r.createElement(
                              'span',
                              (0, c.Z)({ key: t }, l({ token: e, key: t })),
                            );
                          }),
                        )
                      );
                    }),
                  ),
                ),
                r.createElement(
                  'button',
                  {
                    ref: y,
                    type: 'button',
                    'aria-label': (0, N.I)({
                      id: 'theme.CodeBlock.copyButtonAriaLabel',
                      message: 'Copy code to clipboard',
                      description: 'The ARIA label for copy code blocks button',
                    }),
                    className: (0, u.Z)(de, 'clean-btn'),
                    onClick: I,
                  },
                  s
                    ? r.createElement(
                        N.Z,
                        {
                          id: 'theme.CodeBlock.copied',
                          description: 'The copied button label on code blocks',
                        },
                        'Copied',
                      )
                    : r.createElement(
                        N.Z,
                        {
                          id: 'theme.CodeBlock.copy',
                          description: 'The copy button label on code blocks',
                        },
                        'Copy',
                      ),
                ),
              ),
            );
          },
        );
      }
      var be = n(5607),
        ye = {
          code: function (e) {
            var t = e.children;
            return (0, r.isValidElement)(t)
              ? t
              : t.includes('\n')
              ? r.createElement(fe, e)
              : r.createElement('code', e);
          },
          a: function (e) {
            return r.createElement(b.Z, e);
          },
          pre: function (e) {
            var t,
              n = e.children;
            return (0, r.isValidElement)(
              null == n || null == (t = n.props) ? void 0 : t.children,
            )
              ? null == n
                ? void 0
                : n.props.children
              : r.createElement(
                  fe,
                  (0, r.isValidElement)(n)
                    ? null == n
                      ? void 0
                      : n.props
                    : { children: n },
                );
          },
          h1: (0, be.Z)('h1'),
          h2: (0, be.Z)('h2'),
          h3: (0, be.Z)('h3'),
          h4: (0, be.Z)('h4'),
          h5: (0, be.Z)('h5'),
          h6: (0, be.Z)('h6'),
        },
        ge = n(8177),
        ve = n(5977),
        ke = 'docPage_31aa',
        Ee = 'docMainContainer_3ufF',
        Ne = 'docMainContainerEnhanced_3NYZ',
        Ce = 'docSidebarContainer_3Kbt',
        Ze = 'docSidebarContainerHidden_3pA8',
        _e = 'collapsedDocSidebar_2JMH',
        Te = 'expandSidebarButtonIcon_1naQ',
        je = 'docItemWrapperEnhanced_2vyJ',
        Oe = 'docItemWrapper_3FMP';
      function xe(e) {
        var t,
          n,
          i,
          c,
          s,
          p = e.currentDocRoute,
          m = e.versionMetadata,
          h = e.children,
          f = (0, o.Z)(),
          b = f.siteConfig,
          y = f.isClient,
          g = m.pluginId,
          k = m.version,
          E = (function (e) {
            var t,
              n = e.versionMetadata,
              r = e.currentDocRoute,
              a = n.permalinkToSidebar,
              o = n.docsSidebars,
              i =
                a[r.path] ||
                a[((t = r.path), t.endsWith('/') ? t : t + '/')] ||
                a[
                  (function (e) {
                    return e.endsWith('/') ? e.slice(0, -1) : e;
                  })(r.path)
                ];
            return { sidebar: o[i], sidebarName: i };
          })({ versionMetadata: m, currentDocRoute: p }),
          C = E.sidebarName,
          Z = E.sidebar,
          _ = (0, r.useState)(!1),
          T = _[0],
          j = _[1],
          O = (0, r.useState)(!1),
          x = O[0],
          S = O[1],
          P = (0, r.useCallback)(
            function () {
              x && S(!1), j(!T);
            },
            [x],
          );
        return r.createElement(
          l.Z,
          {
            key: y,
            wrapperClassName: d.kM.wrapper.docPages,
            pageClassName: d.kM.page.docPage,
            searchMetadatas: { version: k, tag: (0, d.os)(g, k) },
          },
          r.createElement(
            'div',
            { className: ke },
            Z &&
              r.createElement(
                'aside',
                {
                  className: (0, u.Z)(Ce, ((t = {}), (t[Ze] = T), t)),
                  onTransitionEnd: function (e) {
                    e.currentTarget.classList.contains(Ce) && T && S(!0);
                  },
                },
                r.createElement(U, {
                  key: C,
                  sidebar: Z,
                  path: p.path,
                  sidebarCollapsible:
                    null ==
                      (n =
                        null == (i = b.themeConfig)
                          ? void 0
                          : i.sidebarCollapsible) || n,
                  onCollapse: P,
                  isHidden: x,
                }),
                x &&
                  r.createElement(
                    'div',
                    {
                      className: _e,
                      title: (0, N.I)({
                        id: 'theme.docs.sidebar.expandButtonTitle',
                        message: 'Expand sidebar',
                        description:
                          'The ARIA label and title attribute for expand button of doc sidebar',
                      }),
                      'aria-label': (0, N.I)({
                        id: 'theme.docs.sidebar.expandButtonAriaLabel',
                        message: 'Expand sidebar',
                        description:
                          'The ARIA label and title attribute for expand button of doc sidebar',
                      }),
                      tabIndex: 0,
                      role: 'button',
                      onKeyDown: P,
                      onClick: P,
                    },
                    r.createElement(v, { className: Te }),
                  ),
              ),
            r.createElement(
              'main',
              { className: (0, u.Z)(Ee, ((c = {}), (c[Ne] = T || !Z), c)) },
              r.createElement(
                'div',
                {
                  className: (0, u.Z)(
                    'container padding-top--md padding-bottom--lg',
                    Oe,
                    ((s = {}), (s[je] = T), s),
                  ),
                },
                r.createElement(a.Zo, { components: ye }, h),
              ),
            ),
          ),
        );
      }
      var Se = function (e) {
        var t = e.route.routes,
          n = e.versionMetadata,
          a = e.location,
          o = t.find(function (e) {
            return (0, ve.LX)(a.pathname, e);
          });
        return o
          ? r.createElement(
              xe,
              { currentDocRoute: o, versionMetadata: n },
              (0, i.Z)(t),
            )
          : r.createElement(ge.default, e);
      };
    },
    5607: function (e, t, n) {
      'use strict';
      n.d(t, {
        N: function () {
          return p;
        },
        Z: function () {
          return m;
        },
      });
      var r = n(9756),
        a = n(2122),
        o = n(7294),
        i = n(6010),
        l = n(7130),
        c = n(4395),
        s = 'enhancedAnchor_2LWZ',
        u = 'h1Heading_27L5',
        d = ['id'],
        p = function (e) {
          var t = Object.assign({}, e);
          return o.createElement(
            'header',
            null,
            o.createElement(
              'h1',
              (0, a.Z)({}, t, { id: void 0, className: u }),
              t.children,
            ),
          );
        },
        m = function (e) {
          return 'h1' === e
            ? p
            : ((t = e),
              function (e) {
                var n,
                  a = e.id,
                  u = (0, r.Z)(e, d),
                  p = (0, c.LU)().navbar.hideOnScroll;
                return a
                  ? o.createElement(
                      t,
                      u,
                      o.createElement('a', {
                        'aria-hidden': 'true',
                        tabIndex: -1,
                        className: (0, i.Z)(
                          'anchor',
                          ((n = {}), (n[s] = !p), n),
                        ),
                        id: a,
                      }),
                      u.children,
                      o.createElement(
                        'a',
                        {
                          className: 'hash-link',
                          href: '#' + a,
                          title: (0, l.I)({
                            id: 'theme.common.headingLinkTitle',
                            message: 'Direct link to heading',
                            description: 'Title for link to heading',
                          }),
                        },
                        '#',
                      ),
                    )
                  : o.createElement(t, u);
              });
          var t;
        };
    },
    8177: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(7294),
        a = n(462),
        o = n(7130);
      t.default = function () {
        return r.createElement(
          a.Z,
          {
            title: (0, o.I)({
              id: 'theme.NotFound.title',
              message: 'Page Not Found',
            }),
          },
          r.createElement(
            'main',
            { className: 'container margin-vert--xl' },
            r.createElement(
              'div',
              { className: 'row' },
              r.createElement(
                'div',
                { className: 'col col--6 col--offset-3' },
                r.createElement(
                  'h1',
                  { className: 'hero__title' },
                  r.createElement(
                    o.Z,
                    {
                      id: 'theme.NotFound.title',
                      description: 'The title of the 404 page',
                    },
                    'Page Not Found',
                  ),
                ),
                r.createElement(
                  'p',
                  null,
                  r.createElement(
                    o.Z,
                    {
                      id: 'theme.NotFound.p1',
                      description: 'The first paragraph of the 404 page',
                    },
                    'We could not find what you were looking for.',
                  ),
                ),
                r.createElement(
                  'p',
                  null,
                  r.createElement(
                    o.Z,
                    {
                      id: 'theme.NotFound.p2',
                      description: 'The 2nd paragraph of the 404 page',
                    },
                    'Please contact the owner of the site that linked you to the original URL and let them know their link is broken.',
                  ),
                ),
              ),
            ),
          ),
        );
      };
    },
    7594: function (e, t) {
      function n(e) {
        let t,
          n = [];
        for (let r of e.split(',').map((e) => e.trim()))
          if (/^-?\d+$/.test(r)) n.push(parseInt(r, 10));
          else if (
            (t = r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
          ) {
            let [e, r, a, o] = t;
            if (r && o) {
              (r = parseInt(r)), (o = parseInt(o));
              const e = r < o ? 1 : -1;
              ('-' !== a && '..' !== a && '\u2025' !== a) || (o += e);
              for (let t = r; t !== o; t += e) n.push(t);
            }
          }
        return n;
      }
      (t.default = n), (e.exports = n);
    },
  },
]);
