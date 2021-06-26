(self.webpackChunkgarfish_docs = self.webpackChunkgarfish_docs || []).push([
  [764],
  {
    4137: function (e, t, r) {
      'use strict';
      r.d(t, {
        Zo: function () {
          return f;
        },
        kt: function () {
          return d;
        },
      });
      var n = r(7294);
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var u = n.createContext({}),
        s = function (e) {
          var t = n.useContext(u),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : a(a({}, t), e)), r;
        },
        f = function (e) {
          var t = s(e.components);
          return n.createElement(u.Provider, { value: t }, e.children);
        },
        l = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        p = n.forwardRef(function (e, t) {
          var r = e.components,
            o = e.mdxType,
            i = e.originalType,
            u = e.parentName,
            f = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(r),
            d = o,
            m = p[''.concat(u, '.').concat(d)] || p[d] || l[d] || i;
          return r
            ? n.createElement(m, a(a({ ref: t }, f), {}, { components: r }))
            : n.createElement(m, a({ ref: t }, f));
        });
      function d(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ('string' == typeof e || o) {
          var i = r.length,
            a = new Array(i);
          a[0] = p;
          var c = {};
          for (var u in t) hasOwnProperty.call(t, u) && (c[u] = t[u]);
          (c.originalType = e),
            (c.mdxType = 'string' == typeof e ? e : o),
            (a[1] = c);
          for (var s = 2; s < i; s++) a[s] = r[s];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, r);
      }
      p.displayName = 'MDXCreateElement';
    },
    7453: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          frontMatter: function () {
            return c;
          },
          contentTitle: function () {
            return u;
          },
          metadata: function () {
            return s;
          },
          toc: function () {
            return f;
          },
          default: function () {
            return p;
          },
        });
      var n = r(2122),
        o = r(9756),
        i = (r(7294), r(4137)),
        a = ['components'],
        c = { title: 'Garfish \u4ecb\u7ecd', slug: '/guide', order: 1 },
        u = '\u4ecb\u7ecd',
        s = {
          unversionedId: 'guide/start/index',
          id: 'guide/start/index',
          isDocsHomePage: !1,
          title: 'Garfish \u4ecb\u7ecd',
          description: '\u4ec0\u4e48\u662f Garfish',
          source: '@site/docs/guide/start/index.md',
          sourceDirName: 'guide/start',
          slug: '/guide',
          permalink: '/guide',
          editUrl:
            'https://github.com/bytedance/garfish/docs/guide/start/index.md',
          version: 'current',
          lastUpdatedBy: 'zhoushaw',
          lastUpdatedAt: 1624615522,
          formattedLastUpdatedAt: '6/25/2021',
          frontMatter: {
            title: 'Garfish \u4ecb\u7ecd',
            slug: '/guide',
            order: 1,
          },
        },
        f = [
          {
            value: '\u4ec0\u4e48\u662f Garfish',
            id: '\u4ec0\u4e48\u662f-garfish',
            children: [],
          },
        ],
        l = { toc: f };
      function p(e) {
        var t = e.components,
          r = (0, o.Z)(e, a);
        return (0, i.kt)(
          'wrapper',
          (0, n.Z)({}, l, r, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h1', { id: '\u4ecb\u7ecd' }, '\u4ecb\u7ecd'),
          (0, i.kt)(
            'h2',
            { id: '\u4ec0\u4e48\u662f-garfish' },
            '\u4ec0\u4e48\u662f Garfish',
          ),
          (0, i.kt)('p', null, 'wip...'),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
