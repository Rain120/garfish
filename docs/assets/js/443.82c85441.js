/*! For license information please see 443.82c85441.js.LICENSE.txt */
(self.webpackChunkgarfish_docs = self.webpackChunkgarfish_docs || []).push([
  [443],
  {
    8443: function (t, e, n) {
      'use strict';
      t.exports = n(295);
    },
    1228: function (t, e, n) {
      'use strict';
      var i = n(2856),
        s = {
          wrapper: { position: 'relative', display: 'inline-block' },
          hint: {
            position: 'absolute',
            top: '0',
            left: '0',
            borderColor: 'transparent',
            boxShadow: 'none',
            opacity: '1',
          },
          input: {
            position: 'relative',
            verticalAlign: 'top',
            backgroundColor: 'transparent',
          },
          inputWithNoHint: { position: 'relative', verticalAlign: 'top' },
          dropdown: {
            position: 'absolute',
            top: '100%',
            left: '0',
            zIndex: '100',
            display: 'none',
          },
          suggestions: { display: 'block' },
          suggestion: { whiteSpace: 'nowrap', cursor: 'pointer' },
          suggestionChild: { whiteSpace: 'normal' },
          ltr: { left: '0', right: 'auto' },
          rtl: { left: 'auto', right: '0' },
          defaultClasses: {
            root: 'algolia-autocomplete',
            prefix: 'aa',
            noPrefix: !1,
            dropdownMenu: 'dropdown-menu',
            input: 'input',
            hint: 'hint',
            suggestions: 'suggestions',
            suggestion: 'suggestion',
            cursor: 'cursor',
            dataset: 'dataset',
            empty: 'empty',
          },
          appendTo: {
            wrapper: { position: 'absolute', zIndex: '100', display: 'none' },
            input: {},
            inputWithNoHint: {},
            dropdown: { display: 'block' },
          },
        };
      i.isMsie() &&
        i.mixin(s.input, {
          backgroundImage:
            'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
        }),
        i.isMsie() &&
          i.isMsie() <= 7 &&
          i.mixin(s.input, { marginTop: '-1px' }),
        (t.exports = s);
    },
    9050: function (t, e, n) {
      'use strict';
      var i = 'aaDataset',
        s = 'aaValue',
        r = 'aaDatum',
        o = n(2856),
        a = n(4910),
        u = n(3561),
        c = n(1228),
        l = n(3109);
      function h(t) {
        var e;
        ((t = t || {}).templates = t.templates || {}),
          t.source || o.error('missing source'),
          t.name &&
            ((e = t.name), !/^[_a-zA-Z0-9-]+$/.test(e)) &&
            o.error('invalid dataset name: ' + t.name),
          (this.query = null),
          (this._isEmpty = !0),
          (this.highlight = !!t.highlight),
          (this.name =
            void 0 === t.name || null === t.name ? o.getUniqueId() : t.name),
          (this.source = t.source),
          (this.displayFn = (function (t) {
            return (t = t || 'value'), o.isFunction(t) ? t : e;
            function e(e) {
              return e[t];
            }
          })(t.display || t.displayKey)),
          (this.debounce = t.debounce),
          (this.cache = !1 !== t.cache),
          (this.templates = (function (t, e) {
            return {
              empty: t.empty && o.templatify(t.empty),
              header: t.header && o.templatify(t.header),
              footer: t.footer && o.templatify(t.footer),
              suggestion: t.suggestion || n,
            };
            function n(t) {
              return '<p>' + e(t) + '</p>';
            }
          })(t.templates, this.displayFn)),
          (this.css = o.mixin({}, c, t.appendTo ? c.appendTo : {})),
          (this.cssClasses = t.cssClasses = o.mixin(
            {},
            c.defaultClasses,
            t.cssClasses || {},
          )),
          (this.cssClasses.prefix =
            t.cssClasses.formattedPrefix ||
            o.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix));
        var n = o.className(this.cssClasses.prefix, this.cssClasses.dataset);
        (this.$el =
          t.$menu && t.$menu.find(n + '-' + this.name).length > 0
            ? a.element(t.$menu.find(n + '-' + this.name)[0])
            : a.element(
                u.dataset
                  .replace('%CLASS%', this.name)
                  .replace('%PREFIX%', this.cssClasses.prefix)
                  .replace('%DATASET%', this.cssClasses.dataset),
              )),
          (this.$menu = t.$menu),
          this.clearCachedSuggestions();
      }
      (h.extractDatasetName = function (t) {
        return a.element(t).data(i);
      }),
        (h.extractValue = function (t) {
          return a.element(t).data(s);
        }),
        (h.extractDatum = function (t) {
          var e = a.element(t).data(r);
          return 'string' == typeof e && (e = JSON.parse(e)), e;
        }),
        o.mixin(h.prototype, l, {
          _render: function (t, e) {
            if (this.$el) {
              var n,
                c = this,
                l = [].slice.call(arguments, 2);
              if (
                (this.$el.empty(),
                (n = e && e.length),
                (this._isEmpty = !n),
                !n && this.templates.empty)
              )
                this.$el
                  .html(h.apply(this, l))
                  .prepend(c.templates.header ? f.apply(this, l) : null)
                  .append(c.templates.footer ? d.apply(this, l) : null);
              else if (n)
                this.$el
                  .html(p.apply(this, l))
                  .prepend(c.templates.header ? f.apply(this, l) : null)
                  .append(c.templates.footer ? d.apply(this, l) : null);
              else if (e && !Array.isArray(e))
                throw new TypeError('suggestions must be an array');
              this.$menu &&
                this.$menu
                  .addClass(
                    this.cssClasses.prefix +
                      (n ? 'with' : 'without') +
                      '-' +
                      this.name,
                  )
                  .removeClass(
                    this.cssClasses.prefix +
                      (n ? 'without' : 'with') +
                      '-' +
                      this.name,
                  ),
                this.trigger('rendered', t);
            }
            function h() {
              var e = [].slice.call(arguments, 0);
              return (
                (e = [{ query: t, isEmpty: !0 }].concat(e)),
                c.templates.empty.apply(this, e)
              );
            }
            function p() {
              var t,
                n,
                l = [].slice.call(arguments, 0),
                h = this,
                p = u.suggestions
                  .replace('%PREFIX%', this.cssClasses.prefix)
                  .replace('%SUGGESTIONS%', this.cssClasses.suggestions);
              return (
                (t = a.element(p).css(this.css.suggestions)),
                (n = o.map(e, f)),
                t.append.apply(t, n),
                t
              );
              function f(t) {
                var e,
                  n = u.suggestion
                    .replace('%PREFIX%', h.cssClasses.prefix)
                    .replace('%SUGGESTION%', h.cssClasses.suggestion);
                return (
                  (e = a
                    .element(n)
                    .attr({
                      role: 'option',
                      id: ['option', Math.floor(1e8 * Math.random())].join('-'),
                    })
                    .append(
                      c.templates.suggestion.apply(this, [t].concat(l)),
                    )).data(i, c.name),
                  e.data(s, c.displayFn(t) || void 0),
                  e.data(r, JSON.stringify(t)),
                  e.children().each(function () {
                    a.element(this).css(h.css.suggestionChild);
                  }),
                  e
                );
              }
            }
            function f() {
              var e = [].slice.call(arguments, 0);
              return (
                (e = [{ query: t, isEmpty: !n }].concat(e)),
                c.templates.header.apply(this, e)
              );
            }
            function d() {
              var e = [].slice.call(arguments, 0);
              return (
                (e = [{ query: t, isEmpty: !n }].concat(e)),
                c.templates.footer.apply(this, e)
              );
            }
          },
          getRoot: function () {
            return this.$el;
          },
          update: function (t) {
            function e(e) {
              if (!this.canceled && t === this.query) {
                var n = [].slice.call(arguments, 1);
                this.cacheSuggestions(t, e, n),
                  this._render.apply(this, [t, e].concat(n));
              }
            }
            if (
              ((this.query = t),
              (this.canceled = !1),
              this.shouldFetchFromCache(t))
            )
              e.apply(
                this,
                [this.cachedSuggestions].concat(this.cachedRenderExtraArgs),
              );
            else {
              var n = this,
                i = function () {
                  n.canceled || n.source(t, e.bind(n));
                };
              if (this.debounce) {
                clearTimeout(this.debounceTimeout),
                  (this.debounceTimeout = setTimeout(function () {
                    (n.debounceTimeout = null), i();
                  }, this.debounce));
              } else i();
            }
          },
          cacheSuggestions: function (t, e, n) {
            (this.cachedQuery = t),
              (this.cachedSuggestions = e),
              (this.cachedRenderExtraArgs = n);
          },
          shouldFetchFromCache: function (t) {
            return (
              this.cache &&
              this.cachedQuery === t &&
              this.cachedSuggestions &&
              this.cachedSuggestions.length
            );
          },
          clearCachedSuggestions: function () {
            delete this.cachedQuery,
              delete this.cachedSuggestions,
              delete this.cachedRenderExtraArgs;
          },
          cancel: function () {
            this.canceled = !0;
          },
          clear: function () {
            this.$el &&
              (this.cancel(), this.$el.empty(), this.trigger('rendered', ''));
          },
          isEmpty: function () {
            return this._isEmpty;
          },
          destroy: function () {
            this.clearCachedSuggestions(), (this.$el = null);
          },
        }),
        (t.exports = h);
    },
    3354: function (t, e, n) {
      'use strict';
      var i = n(2856),
        s = n(4910),
        r = n(3109),
        o = n(9050),
        a = n(1228);
      function u(t) {
        var e,
          n,
          r,
          o = this;
        (t = t || {}).menu || i.error('menu is required'),
          i.isArray(t.datasets) ||
            i.isObject(t.datasets) ||
            i.error('1 or more datasets required'),
          t.datasets || i.error('datasets is required'),
          (this.isOpen = !1),
          (this.isEmpty = !0),
          (this.minLength = t.minLength || 0),
          (this.templates = {}),
          (this.appendTo = t.appendTo || !1),
          (this.css = i.mixin({}, a, t.appendTo ? a.appendTo : {})),
          (this.cssClasses = t.cssClasses = i.mixin(
            {},
            a.defaultClasses,
            t.cssClasses || {},
          )),
          (this.cssClasses.prefix =
            t.cssClasses.formattedPrefix ||
            i.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix)),
          (e = i.bind(this._onSuggestionClick, this)),
          (n = i.bind(this._onSuggestionMouseEnter, this)),
          (r = i.bind(this._onSuggestionMouseLeave, this));
        var c = i.className(this.cssClasses.prefix, this.cssClasses.suggestion);
        (this.$menu = s
          .element(t.menu)
          .on('mouseenter.aa', c, n)
          .on('mouseleave.aa', c, r)
          .on('click.aa', c, e)),
          (this.$container = t.appendTo ? t.wrapper : this.$menu),
          t.templates &&
            t.templates.header &&
            ((this.templates.header = i.templatify(t.templates.header)),
            this.$menu.prepend(this.templates.header())),
          t.templates &&
            t.templates.empty &&
            ((this.templates.empty = i.templatify(t.templates.empty)),
            (this.$empty = s.element(
              '<div class="' +
                i.className(this.cssClasses.prefix, this.cssClasses.empty, !0) +
                '"></div>',
            )),
            this.$menu.append(this.$empty),
            this.$empty.hide()),
          (this.datasets = i.map(t.datasets, function (e) {
            return (function (t, e, n) {
              return new u.Dataset(i.mixin({ $menu: t, cssClasses: n }, e));
            })(o.$menu, e, t.cssClasses);
          })),
          i.each(this.datasets, function (t) {
            var e = t.getRoot();
            e && 0 === e.parent().length && o.$menu.append(e),
              t.onSync('rendered', o._onRendered, o);
          }),
          t.templates &&
            t.templates.footer &&
            ((this.templates.footer = i.templatify(t.templates.footer)),
            this.$menu.append(this.templates.footer()));
        var l = this;
        s.element(window).resize(function () {
          l._redraw();
        });
      }
      i.mixin(u.prototype, r, {
        _onSuggestionClick: function (t) {
          this.trigger('suggestionClicked', s.element(t.currentTarget));
        },
        _onSuggestionMouseEnter: function (t) {
          var e = s.element(t.currentTarget);
          if (
            !e.hasClass(
              i.className(this.cssClasses.prefix, this.cssClasses.cursor, !0),
            )
          ) {
            this._removeCursor();
            var n = this;
            setTimeout(function () {
              n._setCursor(e, !1);
            }, 0);
          }
        },
        _onSuggestionMouseLeave: function (t) {
          if (
            t.relatedTarget &&
            s
              .element(t.relatedTarget)
              .closest(
                '.' +
                  i.className(
                    this.cssClasses.prefix,
                    this.cssClasses.cursor,
                    !0,
                  ),
              ).length > 0
          )
            return;
          this._removeCursor(), this.trigger('cursorRemoved');
        },
        _onRendered: function (t, e) {
          if (
            ((this.isEmpty = i.every(this.datasets, function (t) {
              return t.isEmpty();
            })),
            this.isEmpty)
          )
            if (
              (e.length >= this.minLength && this.trigger('empty'), this.$empty)
            )
              if (e.length < this.minLength) this._hide();
              else {
                var n = this.templates.empty({
                  query: this.datasets[0] && this.datasets[0].query,
                });
                this.$empty.html(n), this.$empty.show(), this._show();
              }
            else
              i.any(this.datasets, function (t) {
                return t.templates && t.templates.empty;
              })
                ? e.length < this.minLength
                  ? this._hide()
                  : this._show()
                : this._hide();
          else
            this.isOpen &&
              (this.$empty && (this.$empty.empty(), this.$empty.hide()),
              e.length >= this.minLength ? this._show() : this._hide());
          this.trigger('datasetRendered');
        },
        _hide: function () {
          this.$container.hide();
        },
        _show: function () {
          this.$container.css('display', 'block'),
            this._redraw(),
            this.trigger('shown');
        },
        _redraw: function () {
          this.isOpen && this.appendTo && this.trigger('redrawn');
        },
        _getSuggestions: function () {
          return this.$menu.find(
            i.className(this.cssClasses.prefix, this.cssClasses.suggestion),
          );
        },
        _getCursor: function () {
          return this.$menu
            .find(i.className(this.cssClasses.prefix, this.cssClasses.cursor))
            .first();
        },
        _setCursor: function (t, e) {
          t
            .first()
            .addClass(
              i.className(this.cssClasses.prefix, this.cssClasses.cursor, !0),
            )
            .attr('aria-selected', 'true'),
            this.trigger('cursorMoved', e);
        },
        _removeCursor: function () {
          this._getCursor()
            .removeClass(
              i.className(this.cssClasses.prefix, this.cssClasses.cursor, !0),
            )
            .removeAttr('aria-selected');
        },
        _moveCursor: function (t) {
          var e, n, i, s;
          this.isOpen &&
            ((n = this._getCursor()),
            (e = this._getSuggestions()),
            this._removeCursor(),
            -1 !== (i = (((i = e.index(n) + t) + 1) % (e.length + 1)) - 1)
              ? (i < -1 && (i = e.length - 1),
                this._setCursor((s = e.eq(i)), !0),
                this._ensureVisible(s))
              : this.trigger('cursorRemoved'));
        },
        _ensureVisible: function (t) {
          var e, n, i, s;
          (n =
            (e = t.position().top) +
            t.height() +
            parseInt(t.css('margin-top'), 10) +
            parseInt(t.css('margin-bottom'), 10)),
            (i = this.$menu.scrollTop()),
            (s =
              this.$menu.height() +
              parseInt(this.$menu.css('padding-top'), 10) +
              parseInt(this.$menu.css('padding-bottom'), 10)),
            e < 0
              ? this.$menu.scrollTop(i + e)
              : s < n && this.$menu.scrollTop(i + (n - s));
        },
        close: function () {
          this.isOpen &&
            ((this.isOpen = !1),
            this._removeCursor(),
            this._hide(),
            this.trigger('closed'));
        },
        open: function () {
          this.isOpen ||
            ((this.isOpen = !0),
            this.isEmpty || this._show(),
            this.trigger('opened'));
        },
        setLanguageDirection: function (t) {
          this.$menu.css('ltr' === t ? this.css.ltr : this.css.rtl);
        },
        moveCursorUp: function () {
          this._moveCursor(-1);
        },
        moveCursorDown: function () {
          this._moveCursor(1);
        },
        getDatumForSuggestion: function (t) {
          var e = null;
          return (
            t.length &&
              (e = {
                raw: o.extractDatum(t),
                value: o.extractValue(t),
                datasetName: o.extractDatasetName(t),
              }),
            e
          );
        },
        getCurrentCursor: function () {
          return this._getCursor().first();
        },
        getDatumForCursor: function () {
          return this.getDatumForSuggestion(this._getCursor().first());
        },
        getDatumForTopSuggestion: function () {
          return this.getDatumForSuggestion(this._getSuggestions().first());
        },
        cursorTopSuggestion: function () {
          this._setCursor(this._getSuggestions().first(), !1);
        },
        update: function (t) {
          i.each(this.datasets, function (e) {
            e.update(t);
          });
        },
        empty: function () {
          i.each(this.datasets, function (t) {
            t.clear();
          }),
            (this.isEmpty = !0);
        },
        isVisible: function () {
          return this.isOpen && !this.isEmpty;
        },
        destroy: function () {
          this.$menu.off('.aa'),
            (this.$menu = null),
            i.each(this.datasets, function (t) {
              t.destroy();
            });
        },
      }),
        (u.Dataset = o),
        (t.exports = u);
    },
    3117: function (t, e, n) {
      'use strict';
      var i = n(2856),
        s = n(4910);
      function r(t) {
        (t && t.el) || i.error('EventBus initialized without el'),
          (this.$el = s.element(t.el));
      }
      i.mixin(r.prototype, {
        trigger: function (t, e, n, s) {
          var r = i.Event('autocomplete:' + t);
          return this.$el.trigger(r, [e, n, s]), r;
        },
      }),
        (t.exports = r);
    },
    3109: function (t, e, n) {
      'use strict';
      var i = n(624),
        s = /\s+/;
      function r(t, e, n, i) {
        var r;
        if (!n) return this;
        for (
          e = e.split(s),
            n = i
              ? (function (t, e) {
                  return t.bind
                    ? t.bind(e)
                    : function () {
                        t.apply(e, [].slice.call(arguments, 0));
                      };
                })(n, i)
              : n,
            this._callbacks = this._callbacks || {};
          (r = e.shift());

        )
          (this._callbacks[r] = this._callbacks[r] || { sync: [], async: [] }),
            this._callbacks[r][t].push(n);
        return this;
      }
      function o(t, e, n) {
        return function () {
          for (var i, s = 0, r = t.length; !i && s < r; s += 1)
            i = !1 === t[s].apply(e, n);
          return !i;
        };
      }
      t.exports = {
        onSync: function (t, e, n) {
          return r.call(this, 'sync', t, e, n);
        },
        onAsync: function (t, e, n) {
          return r.call(this, 'async', t, e, n);
        },
        off: function (t) {
          var e;
          if (!this._callbacks) return this;
          t = t.split(s);
          for (; (e = t.shift()); ) delete this._callbacks[e];
          return this;
        },
        trigger: function (t) {
          var e, n, r, a, u;
          if (!this._callbacks) return this;
          (t = t.split(s)), (r = [].slice.call(arguments, 1));
          for (; (e = t.shift()) && (n = this._callbacks[e]); )
            (a = o(n.sync, this, [e].concat(r))),
              (u = o(n.async, this, [e].concat(r))),
              a() && i(u);
          return this;
        },
      };
    },
    3561: function (t) {
      'use strict';
      t.exports = {
        wrapper: '<span class="%ROOT%"></span>',
        dropdown: '<span class="%PREFIX%%DROPDOWN_MENU%"></span>',
        dataset: '<div class="%PREFIX%%DATASET%-%CLASS%"></div>',
        suggestions: '<span class="%PREFIX%%SUGGESTIONS%"></span>',
        suggestion: '<div class="%PREFIX%%SUGGESTION%"></div>',
      };
    },
    2534: function (t, e, n) {
      'use strict';
      var i;
      i = {
        9: 'tab',
        27: 'esc',
        37: 'left',
        39: 'right',
        13: 'enter',
        38: 'up',
        40: 'down',
      };
      var s = n(2856),
        r = n(4910),
        o = n(3109);
      function a(t) {
        var e,
          n,
          o,
          a,
          u,
          c = this;
        (t = t || {}).input || s.error('input is missing'),
          (e = s.bind(this._onBlur, this)),
          (n = s.bind(this._onFocus, this)),
          (o = s.bind(this._onKeydown, this)),
          (a = s.bind(this._onInput, this)),
          (this.$hint = r.element(t.hint)),
          (this.$input = r
            .element(t.input)
            .on('blur.aa', e)
            .on('focus.aa', n)
            .on('keydown.aa', o)),
          0 === this.$hint.length &&
            (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid =
              s.noop),
          s.isMsie()
            ? this.$input.on(
                'keydown.aa keypress.aa cut.aa paste.aa',
                function (t) {
                  i[t.which || t.keyCode] || s.defer(s.bind(c._onInput, c, t));
                },
              )
            : this.$input.on('input.aa', a),
          (this.query = this.$input.val()),
          (this.$overflowHelper =
            ((u = this.$input),
            r
              .element('<pre aria-hidden="true"></pre>')
              .css({
                position: 'absolute',
                visibility: 'hidden',
                whiteSpace: 'pre',
                fontFamily: u.css('font-family'),
                fontSize: u.css('font-size'),
                fontStyle: u.css('font-style'),
                fontVariant: u.css('font-variant'),
                fontWeight: u.css('font-weight'),
                wordSpacing: u.css('word-spacing'),
                letterSpacing: u.css('letter-spacing'),
                textIndent: u.css('text-indent'),
                textRendering: u.css('text-rendering'),
                textTransform: u.css('text-transform'),
              })
              .insertAfter(u)));
      }
      function u(t) {
        return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
      }
      (a.normalizeQuery = function (t) {
        return (t || '').replace(/^\s*/g, '').replace(/\s{2,}/g, ' ');
      }),
        s.mixin(a.prototype, o, {
          _onBlur: function () {
            this.resetInputValue(),
              this.$input.removeAttr('aria-activedescendant'),
              this.trigger('blurred');
          },
          _onFocus: function () {
            this.trigger('focused');
          },
          _onKeydown: function (t) {
            var e = i[t.which || t.keyCode];
            this._managePreventDefault(e, t),
              e && this._shouldTrigger(e, t) && this.trigger(e + 'Keyed', t);
          },
          _onInput: function () {
            this._checkInputValue();
          },
          _managePreventDefault: function (t, e) {
            var n, i, s;
            switch (t) {
              case 'tab':
                (i = this.getHint()),
                  (s = this.getInputValue()),
                  (n = i && i !== s && !u(e));
                break;
              case 'up':
              case 'down':
                n = !u(e);
                break;
              default:
                n = !1;
            }
            n && e.preventDefault();
          },
          _shouldTrigger: function (t, e) {
            var n;
            switch (t) {
              case 'tab':
                n = !u(e);
                break;
              default:
                n = !0;
            }
            return n;
          },
          _checkInputValue: function () {
            var t, e, n, i, s;
            (t = this.getInputValue()),
              (i = t),
              (s = this.query),
              (n =
                !(
                  !(e = a.normalizeQuery(i) === a.normalizeQuery(s)) ||
                  !this.query
                ) && this.query.length !== t.length),
              (this.query = t),
              e
                ? n && this.trigger('whitespaceChanged', this.query)
                : this.trigger('queryChanged', this.query);
          },
          focus: function () {
            this.$input.focus();
          },
          blur: function () {
            this.$input.blur();
          },
          getQuery: function () {
            return this.query;
          },
          setQuery: function (t) {
            this.query = t;
          },
          getInputValue: function () {
            return this.$input.val();
          },
          setInputValue: function (t, e) {
            void 0 === t && (t = this.query),
              this.$input.val(t),
              e ? this.clearHint() : this._checkInputValue();
          },
          expand: function () {
            this.$input.attr('aria-expanded', 'true');
          },
          collapse: function () {
            this.$input.attr('aria-expanded', 'false');
          },
          setActiveDescendant: function (t) {
            this.$input.attr('aria-activedescendant', t);
          },
          removeActiveDescendant: function () {
            this.$input.removeAttr('aria-activedescendant');
          },
          resetInputValue: function () {
            this.setInputValue(this.query, !0);
          },
          getHint: function () {
            return this.$hint.val();
          },
          setHint: function (t) {
            this.$hint.val(t);
          },
          clearHint: function () {
            this.setHint('');
          },
          clearHintIfInvalid: function () {
            var t, e, n;
            (n =
              (t = this.getInputValue()) !== (e = this.getHint()) &&
              0 === e.indexOf(t)),
              ('' !== t && n && !this.hasOverflow()) || this.clearHint();
          },
          getLanguageDirection: function () {
            return (this.$input.css('direction') || 'ltr').toLowerCase();
          },
          hasOverflow: function () {
            var t = this.$input.width() - 2;
            return (
              this.$overflowHelper.text(this.getInputValue()),
              this.$overflowHelper.width() >= t
            );
          },
          isCursorAtEnd: function () {
            var t, e, n;
            return (
              (t = this.$input.val().length),
              (e = this.$input[0].selectionStart),
              s.isNumber(e)
                ? e === t
                : !document.selection ||
                  ((n = document.selection.createRange()).moveStart(
                    'character',
                    -t,
                  ),
                  t === n.text.length)
            );
          },
          destroy: function () {
            this.$hint.off('.aa'),
              this.$input.off('.aa'),
              (this.$hint = this.$input = this.$overflowHelper = null);
          },
        }),
        (t.exports = a);
    },
    6549: function (t, e, n) {
      'use strict';
      var i = 'aaAttrs',
        s = n(2856),
        r = n(4910),
        o = n(3117),
        a = n(2534),
        u = n(3354),
        c = n(3561),
        l = n(1228);
      function h(t) {
        var e, n;
        if (
          ((t = t || {}).input || s.error('missing input'),
          (this.isActivated = !1),
          (this.debug = !!t.debug),
          (this.autoselect = !!t.autoselect),
          (this.autoselectOnBlur = !!t.autoselectOnBlur),
          (this.openOnFocus = !!t.openOnFocus),
          (this.minLength = s.isNumber(t.minLength) ? t.minLength : 1),
          (this.autoWidth = void 0 === t.autoWidth || !!t.autoWidth),
          (this.clearOnSelected = !!t.clearOnSelected),
          (this.tabAutocomplete =
            void 0 === t.tabAutocomplete || !!t.tabAutocomplete),
          (t.hint = !!t.hint),
          t.hint && t.appendTo)
        )
          throw new Error(
            "[autocomplete.js] hint and appendTo options can't be used at the same time",
          );
        (this.css = t.css = s.mixin({}, l, t.appendTo ? l.appendTo : {})),
          (this.cssClasses = t.cssClasses = s.mixin(
            {},
            l.defaultClasses,
            t.cssClasses || {},
          )),
          (this.cssClasses.prefix = t.cssClasses.formattedPrefix = s.formatPrefix(
            this.cssClasses.prefix,
            this.cssClasses.noPrefix,
          )),
          (this.listboxId = t.listboxId = [
            this.cssClasses.root,
            'listbox',
            s.getUniqueId(),
          ].join('-'));
        var a = (function (t) {
          var e, n, o, a;
          (e = r.element(t.input)),
            (n = r
              .element(c.wrapper.replace('%ROOT%', t.cssClasses.root))
              .css(t.css.wrapper)),
            t.appendTo ||
              'block' !== e.css('display') ||
              'table' !== e.parent().css('display') ||
              n.css('display', 'table-cell');
          var u = c.dropdown
            .replace('%PREFIX%', t.cssClasses.prefix)
            .replace('%DROPDOWN_MENU%', t.cssClasses.dropdownMenu);
          (o = r
            .element(u)
            .css(t.css.dropdown)
            .attr({ role: 'listbox', id: t.listboxId })),
            t.templates &&
              t.templates.dropdownMenu &&
              o.html(s.templatify(t.templates.dropdownMenu)());
          (a = e
            .clone()
            .css(t.css.hint)
            .css(
              (function (t) {
                return {
                  backgroundAttachment: t.css('background-attachment'),
                  backgroundClip: t.css('background-clip'),
                  backgroundColor: t.css('background-color'),
                  backgroundImage: t.css('background-image'),
                  backgroundOrigin: t.css('background-origin'),
                  backgroundPosition: t.css('background-position'),
                  backgroundRepeat: t.css('background-repeat'),
                  backgroundSize: t.css('background-size'),
                };
              })(e),
            ))
            .val('')
            .addClass(s.className(t.cssClasses.prefix, t.cssClasses.hint, !0))
            .removeAttr('id name placeholder required')
            .prop('readonly', !0)
            .attr({
              'aria-hidden': 'true',
              autocomplete: 'off',
              spellcheck: 'false',
              tabindex: -1,
            }),
            a.removeData && a.removeData();
          e.data(i, {
            'aria-autocomplete': e.attr('aria-autocomplete'),
            'aria-expanded': e.attr('aria-expanded'),
            'aria-owns': e.attr('aria-owns'),
            autocomplete: e.attr('autocomplete'),
            dir: e.attr('dir'),
            role: e.attr('role'),
            spellcheck: e.attr('spellcheck'),
            style: e.attr('style'),
            type: e.attr('type'),
          }),
            e
              .addClass(
                s.className(t.cssClasses.prefix, t.cssClasses.input, !0),
              )
              .attr({
                autocomplete: 'off',
                spellcheck: !1,
                role: 'combobox',
                'aria-autocomplete':
                  t.datasets && t.datasets[0] && t.datasets[0].displayKey
                    ? 'both'
                    : 'list',
                'aria-expanded': 'false',
                'aria-label': t.ariaLabel,
                'aria-owns': t.listboxId,
              })
              .css(t.hint ? t.css.input : t.css.inputWithNoHint);
          try {
            e.attr('dir') || e.attr('dir', 'auto');
          } catch (l) {}
          return (
            (n = t.appendTo
              ? n.appendTo(r.element(t.appendTo).eq(0)).eq(0)
              : e.wrap(n).parent())
              .prepend(t.hint ? a : null)
              .append(o),
            { wrapper: n, input: e, hint: a, menu: o }
          );
        })(t);
        this.$node = a.wrapper;
        var u = (this.$input = a.input);
        (e = a.menu),
          (n = a.hint),
          t.dropdownMenuContainer &&
            r
              .element(t.dropdownMenuContainer)
              .css('position', 'relative')
              .append(e.css('top', '0')),
          u.on('blur.aa', function (t) {
            var n = document.activeElement;
            s.isMsie() &&
              (e[0] === n || e[0].contains(n)) &&
              (t.preventDefault(),
              t.stopImmediatePropagation(),
              s.defer(function () {
                u.focus();
              }));
          }),
          e.on('mousedown.aa', function (t) {
            t.preventDefault();
          }),
          (this.eventBus = t.eventBus || new o({ el: u })),
          (this.dropdown = new h.Dropdown({
            appendTo: t.appendTo,
            wrapper: this.$node,
            menu: e,
            datasets: t.datasets,
            templates: t.templates,
            cssClasses: t.cssClasses,
            minLength: this.minLength,
          })
            .onSync('suggestionClicked', this._onSuggestionClicked, this)
            .onSync('cursorMoved', this._onCursorMoved, this)
            .onSync('cursorRemoved', this._onCursorRemoved, this)
            .onSync('opened', this._onOpened, this)
            .onSync('closed', this._onClosed, this)
            .onSync('shown', this._onShown, this)
            .onSync('empty', this._onEmpty, this)
            .onSync('redrawn', this._onRedrawn, this)
            .onAsync('datasetRendered', this._onDatasetRendered, this)),
          (this.input = new h.Input({ input: u, hint: n })
            .onSync('focused', this._onFocused, this)
            .onSync('blurred', this._onBlurred, this)
            .onSync('enterKeyed', this._onEnterKeyed, this)
            .onSync('tabKeyed', this._onTabKeyed, this)
            .onSync('escKeyed', this._onEscKeyed, this)
            .onSync('upKeyed', this._onUpKeyed, this)
            .onSync('downKeyed', this._onDownKeyed, this)
            .onSync('leftKeyed', this._onLeftKeyed, this)
            .onSync('rightKeyed', this._onRightKeyed, this)
            .onSync('queryChanged', this._onQueryChanged, this)
            .onSync('whitespaceChanged', this._onWhitespaceChanged, this)),
          this._bindKeyboardShortcuts(t),
          this._setLanguageDirection();
      }
      s.mixin(h.prototype, {
        _bindKeyboardShortcuts: function (t) {
          if (t.keyboardShortcuts) {
            var e = this.$input,
              n = [];
            s.each(t.keyboardShortcuts, function (t) {
              'string' == typeof t && (t = t.toUpperCase().charCodeAt(0)),
                n.push(t);
            }),
              r.element(document).keydown(function (t) {
                var i = t.target || t.srcElement,
                  s = i.tagName;
                if (
                  !i.isContentEditable &&
                  'INPUT' !== s &&
                  'SELECT' !== s &&
                  'TEXTAREA' !== s
                ) {
                  var r = t.which || t.keyCode;
                  -1 !== n.indexOf(r) &&
                    (e.focus(), t.stopPropagation(), t.preventDefault());
                }
              });
          }
        },
        _onSuggestionClicked: function (t, e) {
          var n;
          (n = this.dropdown.getDatumForSuggestion(e)) &&
            this._select(n, { selectionMethod: 'click' });
        },
        _onCursorMoved: function (t, e) {
          var n = this.dropdown.getDatumForCursor(),
            i = this.dropdown.getCurrentCursor().attr('id');
          this.input.setActiveDescendant(i),
            n &&
              (e && this.input.setInputValue(n.value, !0),
              this.eventBus.trigger('cursorchanged', n.raw, n.datasetName));
        },
        _onCursorRemoved: function () {
          this.input.resetInputValue(),
            this._updateHint(),
            this.eventBus.trigger('cursorremoved');
        },
        _onDatasetRendered: function () {
          this._updateHint(), this.eventBus.trigger('updated');
        },
        _onOpened: function () {
          this._updateHint(),
            this.input.expand(),
            this.eventBus.trigger('opened');
        },
        _onEmpty: function () {
          this.eventBus.trigger('empty');
        },
        _onRedrawn: function () {
          this.$node.css('top', '0px'), this.$node.css('left', '0px');
          var t = this.$input[0].getBoundingClientRect();
          this.autoWidth && this.$node.css('width', t.width + 'px');
          var e = this.$node[0].getBoundingClientRect(),
            n = t.bottom - e.top;
          this.$node.css('top', n + 'px');
          var i = t.left - e.left;
          this.$node.css('left', i + 'px'), this.eventBus.trigger('redrawn');
        },
        _onShown: function () {
          this.eventBus.trigger('shown'),
            this.autoselect && this.dropdown.cursorTopSuggestion();
        },
        _onClosed: function () {
          this.input.clearHint(),
            this.input.removeActiveDescendant(),
            this.input.collapse(),
            this.eventBus.trigger('closed');
        },
        _onFocused: function () {
          if (((this.isActivated = !0), this.openOnFocus)) {
            var t = this.input.getQuery();
            t.length >= this.minLength
              ? this.dropdown.update(t)
              : this.dropdown.empty(),
              this.dropdown.open();
          }
        },
        _onBlurred: function () {
          var t, e;
          (t = this.dropdown.getDatumForCursor()),
            (e = this.dropdown.getDatumForTopSuggestion());
          var n = { selectionMethod: 'blur' };
          this.debug ||
            (this.autoselectOnBlur && t
              ? this._select(t, n)
              : this.autoselectOnBlur && e
              ? this._select(e, n)
              : ((this.isActivated = !1),
                this.dropdown.empty(),
                this.dropdown.close()));
        },
        _onEnterKeyed: function (t, e) {
          var n, i;
          (n = this.dropdown.getDatumForCursor()),
            (i = this.dropdown.getDatumForTopSuggestion());
          var s = { selectionMethod: 'enterKey' };
          n
            ? (this._select(n, s), e.preventDefault())
            : this.autoselect && i && (this._select(i, s), e.preventDefault());
        },
        _onTabKeyed: function (t, e) {
          if (this.tabAutocomplete) {
            var n;
            (n = this.dropdown.getDatumForCursor())
              ? (this._select(n, { selectionMethod: 'tabKey' }),
                e.preventDefault())
              : this._autocomplete(!0);
          } else this.dropdown.close();
        },
        _onEscKeyed: function () {
          this.dropdown.close(), this.input.resetInputValue();
        },
        _onUpKeyed: function () {
          var t = this.input.getQuery();
          this.dropdown.isEmpty && t.length >= this.minLength
            ? this.dropdown.update(t)
            : this.dropdown.moveCursorUp(),
            this.dropdown.open();
        },
        _onDownKeyed: function () {
          var t = this.input.getQuery();
          this.dropdown.isEmpty && t.length >= this.minLength
            ? this.dropdown.update(t)
            : this.dropdown.moveCursorDown(),
            this.dropdown.open();
        },
        _onLeftKeyed: function () {
          'rtl' === this.dir && this._autocomplete();
        },
        _onRightKeyed: function () {
          'ltr' === this.dir && this._autocomplete();
        },
        _onQueryChanged: function (t, e) {
          this.input.clearHintIfInvalid(),
            e.length >= this.minLength
              ? this.dropdown.update(e)
              : this.dropdown.empty(),
            this.dropdown.open(),
            this._setLanguageDirection();
        },
        _onWhitespaceChanged: function () {
          this._updateHint(), this.dropdown.open();
        },
        _setLanguageDirection: function () {
          var t = this.input.getLanguageDirection();
          this.dir !== t &&
            ((this.dir = t),
            this.$node.css('direction', t),
            this.dropdown.setLanguageDirection(t));
        },
        _updateHint: function () {
          var t, e, n, i, r;
          (t = this.dropdown.getDatumForTopSuggestion()) &&
          this.dropdown.isVisible() &&
          !this.input.hasOverflow()
            ? ((e = this.input.getInputValue()),
              (n = a.normalizeQuery(e)),
              (i = s.escapeRegExChars(n)),
              (r = new RegExp('^(?:' + i + ')(.+$)', 'i').exec(t.value))
                ? this.input.setHint(e + r[1])
                : this.input.clearHint())
            : this.input.clearHint();
        },
        _autocomplete: function (t) {
          var e, n, i, s;
          (e = this.input.getHint()),
            (n = this.input.getQuery()),
            (i = t || this.input.isCursorAtEnd()),
            e &&
              n !== e &&
              i &&
              ((s = this.dropdown.getDatumForTopSuggestion()) &&
                this.input.setInputValue(s.value),
              this.eventBus.trigger('autocompleted', s.raw, s.datasetName));
        },
        _select: function (t, e) {
          void 0 !== t.value && this.input.setQuery(t.value),
            this.clearOnSelected
              ? this.setVal('')
              : this.input.setInputValue(t.value, !0),
            this._setLanguageDirection(),
            !1 ===
              this.eventBus
                .trigger('selected', t.raw, t.datasetName, e)
                .isDefaultPrevented() &&
              (this.dropdown.close(),
              s.defer(s.bind(this.dropdown.empty, this.dropdown)));
        },
        open: function () {
          if (!this.isActivated) {
            var t = this.input.getInputValue();
            t.length >= this.minLength
              ? this.dropdown.update(t)
              : this.dropdown.empty();
          }
          this.dropdown.open();
        },
        close: function () {
          this.dropdown.close();
        },
        setVal: function (t) {
          (t = s.toStr(t)),
            this.isActivated
              ? this.input.setInputValue(t)
              : (this.input.setQuery(t), this.input.setInputValue(t, !0)),
            this._setLanguageDirection();
        },
        getVal: function () {
          return this.input.getQuery();
        },
        destroy: function () {
          this.input.destroy(),
            this.dropdown.destroy(),
            (function (t, e) {
              var n = t.find(s.className(e.prefix, e.input));
              s.each(n.data(i), function (t, e) {
                void 0 === t ? n.removeAttr(e) : n.attr(e, t);
              }),
                n
                  .detach()
                  .removeClass(s.className(e.prefix, e.input, !0))
                  .insertAfter(t),
                n.removeData && n.removeData(i);
              t.remove();
            })(this.$node, this.cssClasses),
            (this.$node = null);
        },
        getWrapper: function () {
          return this.dropdown.$container[0];
        },
      }),
        (h.Dropdown = u),
        (h.Input = a),
        (h.sources = n(8840)),
        (t.exports = h);
    },
    4910: function (t) {
      'use strict';
      t.exports = { element: null };
    },
    6177: function (t) {
      'use strict';
      t.exports = function (t) {
        var e =
          t.match(/Algolia for JavaScript \((\d+\.)(\d+\.)(\d+)\)/) ||
          t.match(/Algolia for vanilla JavaScript (\d+\.)(\d+\.)(\d+)/);
        if (e) return [e[1], e[2], e[3]];
      };
    },
    2856: function (t, e, n) {
      'use strict';
      var i,
        s = n(8820),
        r = n(4910);
      function o(t) {
        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      }
      t.exports = {
        isArray: null,
        isFunction: null,
        isObject: null,
        bind: null,
        each: null,
        map: null,
        mixin: null,
        isMsie: function (t) {
          if (
            (void 0 === t && (t = navigator.userAgent),
            /(msie|trident)/i.test(t))
          ) {
            var e = t.match(/(msie |rv:)(\d+(.\d+)?)/i);
            if (e) return e[2];
          }
          return !1;
        },
        escapeRegExChars: function (t) {
          return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        },
        isNumber: function (t) {
          return 'number' == typeof t;
        },
        toStr: function (t) {
          return null == t ? '' : t + '';
        },
        cloneDeep: function (t) {
          var e = this.mixin({}, t),
            n = this;
          return (
            this.each(e, function (t, i) {
              t &&
                (n.isArray(t)
                  ? (e[i] = [].concat(t))
                  : n.isObject(t) && (e[i] = n.cloneDeep(t)));
            }),
            e
          );
        },
        error: function (t) {
          throw new Error(t);
        },
        every: function (t, e) {
          var n = !0;
          return t
            ? (this.each(t, function (i, s) {
                n && (n = e.call(null, i, s, t) && n);
              }),
              !!n)
            : n;
        },
        any: function (t, e) {
          var n = !1;
          return t
            ? (this.each(t, function (i, s) {
                if (e.call(null, i, s, t)) return (n = !0), !1;
              }),
              n)
            : n;
        },
        getUniqueId:
          ((i = 0),
          function () {
            return i++;
          }),
        templatify: function (t) {
          if (this.isFunction(t)) return t;
          var e = r.element(t);
          return 'SCRIPT' === e.prop('tagName')
            ? function () {
                return e.text();
              }
            : function () {
                return String(t);
              };
        },
        defer: function (t) {
          setTimeout(t, 0);
        },
        noop: function () {},
        formatPrefix: function (t, e) {
          return e ? '' : t + '-';
        },
        className: function (t, e, n) {
          return n ? t + e : '.' + s(t + e, { isIdentifier: !0 });
        },
        escapeHighlightedString: function (t, e, n) {
          e = e || '<em>';
          var i = document.createElement('div');
          i.appendChild(document.createTextNode(e)), (n = n || '</em>');
          var s = document.createElement('div');
          s.appendChild(document.createTextNode(n));
          var r = document.createElement('div');
          return (
            r.appendChild(document.createTextNode(t)),
            r.innerHTML
              .replace(RegExp(o(i.innerHTML), 'g'), e)
              .replace(RegExp(o(s.innerHTML), 'g'), n)
          );
        },
      };
    },
    9983: function (t, e, n) {
      'use strict';
      var i = n(2856),
        s = n(533),
        r = n(6177);
      var o,
        a,
        u =
          ((o = []),
          (a = window.Promise.resolve()),
          function (t, e) {
            return function (n, s) {
              (function (t, e) {
                return window.Promise.resolve()
                  .then(function () {
                    return o.length && ((a = t.search(o)), (o = [])), a;
                  })
                  .then(function (t) {
                    if (t) return t.results[e];
                  });
              })(
                t.as,
                o.push({ indexName: t.indexName, query: n, params: e }) - 1,
              )
                .then(function (t) {
                  t && s(t.hits, t);
                })
                .catch(function (t) {
                  i.error(t.message);
                });
            };
          });
      t.exports = function (t, e) {
        var n = r(t.as._ua);
        if (n && n[0] >= 3 && n[1] > 20) {
          var i = 'autocomplete.js ' + s;
          -1 === t.as._ua.indexOf(i) && (t.as._ua += '; ' + i);
        }
        return u(t, e);
      };
    },
    8840: function (t, e, n) {
      'use strict';
      t.exports = { hits: n(9983), popularIn: n(4445) };
    },
    4445: function (t, e, n) {
      'use strict';
      var i = n(2856),
        s = n(533),
        r = n(6177);
      t.exports = function (t, e, n, o) {
        var a = r(t.as._ua);
        if (
          (a &&
            a[0] >= 3 &&
            a[1] > 20 &&
            ((e = e || {}).additionalUA = 'autocomplete.js ' + s),
          !n.source)
        )
          return i.error("Missing 'source' key");
        var u = i.isFunction(n.source)
          ? n.source
          : function (t) {
              return t[n.source];
            };
        if (!n.index) return i.error("Missing 'index' key");
        var c = n.index;
        return (
          (o = o || {}),
          function (a, l) {
            t.search(a, e, function (t, a) {
              if (t) i.error(t.message);
              else {
                if (a.hits.length > 0) {
                  var h = a.hits[0],
                    p = i.mixin({ hitsPerPage: 0 }, n);
                  delete p.source, delete p.index;
                  var f = r(c.as._ua);
                  return (
                    f &&
                      f[0] >= 3 &&
                      f[1] > 20 &&
                      (e.additionalUA = 'autocomplete.js ' + s),
                    void c.search(u(h), p, function (t, e) {
                      if (t) i.error(t.message);
                      else {
                        var n = [];
                        if (o.includeAll) {
                          var s = o.allTitle || 'All departments';
                          n.push(
                            i.mixin(
                              { facet: { value: s, count: e.nbHits } },
                              i.cloneDeep(h),
                            ),
                          );
                        }
                        i.each(e.facets, function (t, e) {
                          i.each(t, function (t, s) {
                            n.push(
                              i.mixin(
                                { facet: { facet: e, value: s, count: t } },
                                i.cloneDeep(h),
                              ),
                            );
                          });
                        });
                        for (var r = 1; r < a.hits.length; ++r)
                          n.push(a.hits[r]);
                        l(n, a);
                      }
                    })
                  );
                }
                l([]);
              }
            });
          }
        );
      };
    },
    295: function (t, e, n) {
      'use strict';
      var i = n(6990);
      n(4910).element = i;
      var s = n(2856);
      (s.isArray = i.isArray),
        (s.isFunction = i.isFunction),
        (s.isObject = i.isPlainObject),
        (s.bind = i.proxy),
        (s.each = function (t, e) {
          i.each(t, function (t, n) {
            return e(n, t);
          });
        }),
        (s.map = i.map),
        (s.mixin = i.extend),
        (s.Event = i.Event);
      var r = 'aaAutocomplete',
        o = n(6549),
        a = n(3117);
      function u(t, e, n, u) {
        n = s.isArray(n) ? n : [].slice.call(arguments, 2);
        var c = i(t).each(function (t, s) {
          var c = i(s),
            l = new a({ el: c }),
            h =
              u ||
              new o({
                input: c,
                eventBus: l,
                dropdownMenuContainer: e.dropdownMenuContainer,
                hint: void 0 === e.hint || !!e.hint,
                minLength: e.minLength,
                autoselect: e.autoselect,
                autoselectOnBlur: e.autoselectOnBlur,
                tabAutocomplete: e.tabAutocomplete,
                openOnFocus: e.openOnFocus,
                templates: e.templates,
                debug: e.debug,
                clearOnSelected: e.clearOnSelected,
                cssClasses: e.cssClasses,
                datasets: n,
                keyboardShortcuts: e.keyboardShortcuts,
                appendTo: e.appendTo,
                autoWidth: e.autoWidth,
                ariaLabel: e.ariaLabel || s.getAttribute('aria-label'),
              });
          c.data(r, h);
        });
        return (
          (c.autocomplete = {}),
          s.each(
            ['open', 'close', 'getVal', 'setVal', 'destroy', 'getWrapper'],
            function (t) {
              c.autocomplete[t] = function () {
                var e,
                  n = arguments;
                return (
                  c.each(function (s, o) {
                    var a = i(o).data(r);
                    e = a[t].apply(a, n);
                  }),
                  e
                );
              };
            },
          ),
          c
        );
      }
      (u.sources = o.sources),
        (u.escapeHighlightedString = s.escapeHighlightedString);
      var c = 'autocomplete' in window,
        l = window.autocomplete;
      (u.noConflict = function () {
        return c ? (window.autocomplete = l) : delete window.autocomplete, u;
      }),
        (t.exports = u);
    },
    533: function (t) {
      t.exports = '0.38.1';
    },
    6990: function (t) {
      var e;
      (e = window),
        (t.exports = (function (t) {
          var e,
            n,
            i = (function () {
              var e,
                n,
                i,
                s,
                r,
                o,
                a = [],
                u = a.concat,
                c = a.filter,
                l = a.slice,
                h = t.document,
                p = {},
                f = {},
                d = {
                  'column-count': 1,
                  columns: 1,
                  'font-weight': 1,
                  'line-height': 1,
                  opacity: 1,
                  'z-index': 1,
                  zoom: 1,
                },
                g = /^\s*<(\w+|!)[^>]*>/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                v = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                y = /^(?:body|html)$/i,
                w = /([A-Z])/g,
                b = [
                  'val',
                  'css',
                  'html',
                  'text',
                  'data',
                  'width',
                  'height',
                  'offset',
                ],
                C = ['after', 'prepend', 'before', 'append'],
                x = h.createElement('table'),
                _ = h.createElement('tr'),
                S = {
                  tr: h.createElement('tbody'),
                  tbody: x,
                  thead: x,
                  tfoot: x,
                  td: _,
                  th: _,
                  '*': h.createElement('div'),
                },
                E = /complete|loaded|interactive/,
                A = /^[\w-]*$/,
                $ = {},
                T = $.toString,
                O = {},
                D = h.createElement('div'),
                N = {
                  tabindex: 'tabIndex',
                  readonly: 'readOnly',
                  for: 'htmlFor',
                  class: 'className',
                  maxlength: 'maxLength',
                  cellspacing: 'cellSpacing',
                  cellpadding: 'cellPadding',
                  rowspan: 'rowSpan',
                  colspan: 'colSpan',
                  usemap: 'useMap',
                  frameborder: 'frameBorder',
                  contenteditable: 'contentEditable',
                },
                k =
                  Array.isArray ||
                  function (t) {
                    return t instanceof Array;
                  };
              function I(t) {
                return null == t ? String(t) : $[T.call(t)] || 'object';
              }
              function P(t) {
                return 'function' == I(t);
              }
              function L(t) {
                return null != t && t == t.window;
              }
              function M(t) {
                return null != t && t.nodeType == t.DOCUMENT_NODE;
              }
              function F(t) {
                return 'object' == I(t);
              }
              function R(t) {
                return (
                  F(t) && !L(t) && Object.getPrototypeOf(t) == Object.prototype
                );
              }
              function q(t) {
                var e = !!t && 'length' in t && t.length,
                  n = i.type(t);
                return (
                  'function' != n &&
                  !L(t) &&
                  ('array' == n ||
                    0 === e ||
                    ('number' == typeof e && e > 0 && e - 1 in t))
                );
              }
              function V(t) {
                return c.call(t, function (t) {
                  return null != t;
                });
              }
              function H(t) {
                return t.length > 0 ? i.fn.concat.apply([], t) : t;
              }
              function B(t) {
                return t
                  .replace(/::/g, '/')
                  .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
                  .replace(/([a-z\d])([A-Z])/g, '$1_$2')
                  .replace(/_/g, '-')
                  .toLowerCase();
              }
              function K(t) {
                return t in f
                  ? f[t]
                  : (f[t] = new RegExp('(^|\\s)' + t + '(\\s|$)'));
              }
              function j(t, e) {
                return 'number' != typeof e || d[B(t)] ? e : e + 'px';
              }
              function z(t) {
                var e, n;
                return (
                  p[t] ||
                    ((e = h.createElement(t)),
                    h.body.appendChild(e),
                    (n = getComputedStyle(e, '').getPropertyValue('display')),
                    e.parentNode.removeChild(e),
                    'none' == n && (n = 'block'),
                    (p[t] = n)),
                  p[t]
                );
              }
              function U(t) {
                return 'children' in t
                  ? l.call(t.children)
                  : i.map(t.childNodes, function (t) {
                      if (1 == t.nodeType) return t;
                    });
              }
              function Q(t, e) {
                var n,
                  i = t ? t.length : 0;
                for (n = 0; n < i; n++) this[n] = t[n];
                (this.length = i), (this.selector = e || '');
              }
              function W(t, i, s) {
                for (n in i)
                  s && (R(i[n]) || k(i[n]))
                    ? (R(i[n]) && !R(t[n]) && (t[n] = {}),
                      k(i[n]) && !k(t[n]) && (t[n] = []),
                      W(t[n], i[n], s))
                    : i[n] !== e && (t[n] = i[n]);
              }
              function Z(t, e) {
                return null == e ? i(t) : i(t).filter(e);
              }
              function X(t, e, n, i) {
                return P(e) ? e.call(t, n, i) : e;
              }
              function G(t, e, n) {
                null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
              }
              function J(t, n) {
                var i = t.className || '',
                  s = i && i.baseVal !== e;
                if (n === e) return s ? i.baseVal : i;
                s ? (i.baseVal = n) : (t.className = n);
              }
              function Y(t) {
                try {
                  return t
                    ? 'true' == t ||
                        ('false' != t &&
                          ('null' == t
                            ? null
                            : +t + '' == t
                            ? +t
                            : /^[\[\{]/.test(t)
                            ? i.parseJSON(t)
                            : t))
                    : t;
                } catch (e) {
                  return t;
                }
              }
              function tt(t, e) {
                e(t);
                for (var n = 0, i = t.childNodes.length; n < i; n++)
                  tt(t.childNodes[n], e);
              }
              return (
                (O.matches = function (t, e) {
                  if (!e || !t || 1 !== t.nodeType) return !1;
                  var n =
                    t.matches ||
                    t.webkitMatchesSelector ||
                    t.mozMatchesSelector ||
                    t.oMatchesSelector ||
                    t.matchesSelector;
                  if (n) return n.call(t, e);
                  var i,
                    s = t.parentNode,
                    r = !s;
                  return (
                    r && (s = D).appendChild(t),
                    (i = ~O.qsa(s, e).indexOf(t)),
                    r && D.removeChild(t),
                    i
                  );
                }),
                (r = function (t) {
                  return t.replace(/-+(.)?/g, function (t, e) {
                    return e ? e.toUpperCase() : '';
                  });
                }),
                (o = function (t) {
                  return c.call(t, function (e, n) {
                    return t.indexOf(e) == n;
                  });
                }),
                (O.fragment = function (t, n, s) {
                  var r, o, a;
                  return (
                    m.test(t) && (r = i(h.createElement(RegExp.$1))),
                    r ||
                      (t.replace && (t = t.replace(v, '<$1></$2>')),
                      n === e && (n = g.test(t) && RegExp.$1),
                      n in S || (n = '*'),
                      ((a = S[n]).innerHTML = '' + t),
                      (r = i.each(l.call(a.childNodes), function () {
                        a.removeChild(this);
                      }))),
                    R(s) &&
                      ((o = i(r)),
                      i.each(s, function (t, e) {
                        b.indexOf(t) > -1 ? o[t](e) : o.attr(t, e);
                      })),
                    r
                  );
                }),
                (O.Z = function (t, e) {
                  return new Q(t, e);
                }),
                (O.isZ = function (t) {
                  return t instanceof O.Z;
                }),
                (O.init = function (t, n) {
                  var s;
                  if (!t) return O.Z();
                  if ('string' == typeof t)
                    if ('<' == (t = t.trim())[0] && g.test(t))
                      (s = O.fragment(t, RegExp.$1, n)), (t = null);
                    else {
                      if (n !== e) return i(n).find(t);
                      s = O.qsa(h, t);
                    }
                  else {
                    if (P(t)) return i(h).ready(t);
                    if (O.isZ(t)) return t;
                    if (k(t)) s = V(t);
                    else if (F(t)) (s = [t]), (t = null);
                    else if (g.test(t))
                      (s = O.fragment(t.trim(), RegExp.$1, n)), (t = null);
                    else {
                      if (n !== e) return i(n).find(t);
                      s = O.qsa(h, t);
                    }
                  }
                  return O.Z(s, t);
                }),
                ((i = function (t, e) {
                  return O.init(t, e);
                }).extend = function (t) {
                  var e,
                    n = l.call(arguments, 1);
                  return (
                    'boolean' == typeof t && ((e = t), (t = n.shift())),
                    n.forEach(function (n) {
                      W(t, n, e);
                    }),
                    t
                  );
                }),
                (O.qsa = function (t, e) {
                  var n,
                    i = '#' == e[0],
                    s = !i && '.' == e[0],
                    r = i || s ? e.slice(1) : e,
                    o = A.test(r);
                  return t.getElementById && o && i
                    ? (n = t.getElementById(r))
                      ? [n]
                      : []
                    : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType
                    ? []
                    : l.call(
                        o && !i && t.getElementsByClassName
                          ? s
                            ? t.getElementsByClassName(r)
                            : t.getElementsByTagName(e)
                          : t.querySelectorAll(e),
                      );
                }),
                (i.contains = h.documentElement.contains
                  ? function (t, e) {
                      return t !== e && t.contains(e);
                    }
                  : function (t, e) {
                      for (; e && (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
                (i.type = I),
                (i.isFunction = P),
                (i.isWindow = L),
                (i.isArray = k),
                (i.isPlainObject = R),
                (i.isEmptyObject = function (t) {
                  var e;
                  for (e in t) return !1;
                  return !0;
                }),
                (i.isNumeric = function (t) {
                  var e = Number(t),
                    n = typeof t;
                  return (
                    (null != t &&
                      'boolean' != n &&
                      ('string' != n || t.length) &&
                      !isNaN(e) &&
                      isFinite(e)) ||
                    !1
                  );
                }),
                (i.inArray = function (t, e, n) {
                  return a.indexOf.call(e, t, n);
                }),
                (i.camelCase = r),
                (i.trim = function (t) {
                  return null == t ? '' : String.prototype.trim.call(t);
                }),
                (i.uuid = 0),
                (i.support = {}),
                (i.expr = {}),
                (i.noop = function () {}),
                (i.map = function (t, e) {
                  var n,
                    i,
                    s,
                    r = [];
                  if (q(t))
                    for (i = 0; i < t.length; i++)
                      null != (n = e(t[i], i)) && r.push(n);
                  else for (s in t) null != (n = e(t[s], s)) && r.push(n);
                  return H(r);
                }),
                (i.each = function (t, e) {
                  var n, i;
                  if (q(t)) {
                    for (n = 0; n < t.length; n++)
                      if (!1 === e.call(t[n], n, t[n])) return t;
                  } else
                    for (i in t) if (!1 === e.call(t[i], i, t[i])) return t;
                  return t;
                }),
                (i.grep = function (t, e) {
                  return c.call(t, e);
                }),
                t.JSON && (i.parseJSON = JSON.parse),
                i.each(
                  'Boolean Number String Function Array Date RegExp Object Error'.split(
                    ' ',
                  ),
                  function (t, e) {
                    $['[object ' + e + ']'] = e.toLowerCase();
                  },
                ),
                (i.fn = {
                  constructor: O.Z,
                  length: 0,
                  forEach: a.forEach,
                  reduce: a.reduce,
                  push: a.push,
                  sort: a.sort,
                  splice: a.splice,
                  indexOf: a.indexOf,
                  concat: function () {
                    var t,
                      e,
                      n = [];
                    for (t = 0; t < arguments.length; t++)
                      (e = arguments[t]), (n[t] = O.isZ(e) ? e.toArray() : e);
                    return u.apply(O.isZ(this) ? this.toArray() : this, n);
                  },
                  map: function (t) {
                    return i(
                      i.map(this, function (e, n) {
                        return t.call(e, n, e);
                      }),
                    );
                  },
                  slice: function () {
                    return i(l.apply(this, arguments));
                  },
                  ready: function (t) {
                    return (
                      E.test(h.readyState) && h.body
                        ? t(i)
                        : h.addEventListener(
                            'DOMContentLoaded',
                            function () {
                              t(i);
                            },
                            !1,
                          ),
                      this
                    );
                  },
                  get: function (t) {
                    return t === e
                      ? l.call(this)
                      : this[t >= 0 ? t : t + this.length];
                  },
                  toArray: function () {
                    return this.get();
                  },
                  size: function () {
                    return this.length;
                  },
                  remove: function () {
                    return this.each(function () {
                      null != this.parentNode &&
                        this.parentNode.removeChild(this);
                    });
                  },
                  each: function (t) {
                    return (
                      a.every.call(this, function (e, n) {
                        return !1 !== t.call(e, n, e);
                      }),
                      this
                    );
                  },
                  filter: function (t) {
                    return P(t)
                      ? this.not(this.not(t))
                      : i(
                          c.call(this, function (e) {
                            return O.matches(e, t);
                          }),
                        );
                  },
                  add: function (t, e) {
                    return i(o(this.concat(i(t, e))));
                  },
                  is: function (t) {
                    return this.length > 0 && O.matches(this[0], t);
                  },
                  not: function (t) {
                    var n = [];
                    if (P(t) && t.call !== e)
                      this.each(function (e) {
                        t.call(this, e) || n.push(this);
                      });
                    else {
                      var s =
                        'string' == typeof t
                          ? this.filter(t)
                          : q(t) && P(t.item)
                          ? l.call(t)
                          : i(t);
                      this.forEach(function (t) {
                        s.indexOf(t) < 0 && n.push(t);
                      });
                    }
                    return i(n);
                  },
                  has: function (t) {
                    return this.filter(function () {
                      return F(t)
                        ? i.contains(this, t)
                        : i(this).find(t).size();
                    });
                  },
                  eq: function (t) {
                    return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
                  },
                  first: function () {
                    var t = this[0];
                    return t && !F(t) ? t : i(t);
                  },
                  last: function () {
                    var t = this[this.length - 1];
                    return t && !F(t) ? t : i(t);
                  },
                  find: function (t) {
                    var e = this;
                    return t
                      ? 'object' == typeof t
                        ? i(t).filter(function () {
                            var t = this;
                            return a.some.call(e, function (e) {
                              return i.contains(e, t);
                            });
                          })
                        : 1 == this.length
                        ? i(O.qsa(this[0], t))
                        : this.map(function () {
                            return O.qsa(this, t);
                          })
                      : i();
                  },
                  closest: function (t, e) {
                    var n = [],
                      s = 'object' == typeof t && i(t);
                    return (
                      this.each(function (i, r) {
                        for (
                          ;
                          r && !(s ? s.indexOf(r) >= 0 : O.matches(r, t));

                        )
                          r = r !== e && !M(r) && r.parentNode;
                        r && n.indexOf(r) < 0 && n.push(r);
                      }),
                      i(n)
                    );
                  },
                  parents: function (t) {
                    for (var e = [], n = this; n.length > 0; )
                      n = i.map(n, function (t) {
                        if ((t = t.parentNode) && !M(t) && e.indexOf(t) < 0)
                          return e.push(t), t;
                      });
                    return Z(e, t);
                  },
                  parent: function (t) {
                    return Z(o(this.pluck('parentNode')), t);
                  },
                  children: function (t) {
                    return Z(
                      this.map(function () {
                        return U(this);
                      }),
                      t,
                    );
                  },
                  contents: function () {
                    return this.map(function () {
                      return this.contentDocument || l.call(this.childNodes);
                    });
                  },
                  siblings: function (t) {
                    return Z(
                      this.map(function (t, e) {
                        return c.call(U(e.parentNode), function (t) {
                          return t !== e;
                        });
                      }),
                      t,
                    );
                  },
                  empty: function () {
                    return this.each(function () {
                      this.innerHTML = '';
                    });
                  },
                  pluck: function (t) {
                    return i.map(this, function (e) {
                      return e[t];
                    });
                  },
                  show: function () {
                    return this.each(function () {
                      'none' == this.style.display && (this.style.display = ''),
                        'none' ==
                          getComputedStyle(this, '').getPropertyValue(
                            'display',
                          ) && (this.style.display = z(this.nodeName));
                    });
                  },
                  replaceWith: function (t) {
                    return this.before(t).remove();
                  },
                  wrap: function (t) {
                    var e = P(t);
                    if (this[0] && !e)
                      var n = i(t).get(0),
                        s = n.parentNode || this.length > 1;
                    return this.each(function (r) {
                      i(this).wrapAll(
                        e ? t.call(this, r) : s ? n.cloneNode(!0) : n,
                      );
                    });
                  },
                  wrapAll: function (t) {
                    if (this[0]) {
                      var e;
                      for (
                        i(this[0]).before((t = i(t)));
                        (e = t.children()).length;

                      )
                        t = e.first();
                      i(t).append(this);
                    }
                    return this;
                  },
                  wrapInner: function (t) {
                    var e = P(t);
                    return this.each(function (n) {
                      var s = i(this),
                        r = s.contents(),
                        o = e ? t.call(this, n) : t;
                      r.length ? r.wrapAll(o) : s.append(o);
                    });
                  },
                  unwrap: function () {
                    return (
                      this.parent().each(function () {
                        i(this).replaceWith(i(this).children());
                      }),
                      this
                    );
                  },
                  clone: function () {
                    return this.map(function () {
                      return this.cloneNode(!0);
                    });
                  },
                  hide: function () {
                    return this.css('display', 'none');
                  },
                  toggle: function (t) {
                    return this.each(function () {
                      var n = i(this);
                      (t === e ? 'none' == n.css('display') : t)
                        ? n.show()
                        : n.hide();
                    });
                  },
                  prev: function (t) {
                    return i(this.pluck('previousElementSibling')).filter(
                      t || '*',
                    );
                  },
                  next: function (t) {
                    return i(this.pluck('nextElementSibling')).filter(t || '*');
                  },
                  html: function (t) {
                    return 0 in arguments
                      ? this.each(function (e) {
                          var n = this.innerHTML;
                          i(this).empty().append(X(this, t, e, n));
                        })
                      : 0 in this
                      ? this[0].innerHTML
                      : null;
                  },
                  text: function (t) {
                    return 0 in arguments
                      ? this.each(function (e) {
                          var n = X(this, t, e, this.textContent);
                          this.textContent = null == n ? '' : '' + n;
                        })
                      : 0 in this
                      ? this.pluck('textContent').join('')
                      : null;
                  },
                  attr: function (t, i) {
                    var s;
                    return 'string' != typeof t || 1 in arguments
                      ? this.each(function (e) {
                          if (1 === this.nodeType)
                            if (F(t)) for (n in t) G(this, n, t[n]);
                            else
                              G(this, t, X(this, i, e, this.getAttribute(t)));
                        })
                      : 0 in this &&
                        1 == this[0].nodeType &&
                        null != (s = this[0].getAttribute(t))
                      ? s
                      : e;
                  },
                  removeAttr: function (t) {
                    return this.each(function () {
                      1 === this.nodeType &&
                        t.split(' ').forEach(function (t) {
                          G(this, t);
                        }, this);
                    });
                  },
                  prop: function (t, e) {
                    return (
                      (t = N[t] || t),
                      1 in arguments
                        ? this.each(function (n) {
                            this[t] = X(this, e, n, this[t]);
                          })
                        : this[0] && this[0][t]
                    );
                  },
                  removeProp: function (t) {
                    return (
                      (t = N[t] || t),
                      this.each(function () {
                        delete this[t];
                      })
                    );
                  },
                  data: function (t, n) {
                    var i = 'data-' + t.replace(w, '-$1').toLowerCase(),
                      s = 1 in arguments ? this.attr(i, n) : this.attr(i);
                    return null !== s ? Y(s) : e;
                  },
                  val: function (t) {
                    return 0 in arguments
                      ? (null == t && (t = ''),
                        this.each(function (e) {
                          this.value = X(this, t, e, this.value);
                        }))
                      : this[0] &&
                          (this[0].multiple
                            ? i(this[0])
                                .find('option')
                                .filter(function () {
                                  return this.selected;
                                })
                                .pluck('value')
                            : this[0].value);
                  },
                  offset: function (e) {
                    if (e)
                      return this.each(function (t) {
                        var n = i(this),
                          s = X(this, e, t, n.offset()),
                          r = n.offsetParent().offset(),
                          o = { top: s.top - r.top, left: s.left - r.left };
                        'static' == n.css('position') &&
                          (o.position = 'relative'),
                          n.css(o);
                      });
                    if (!this.length) return null;
                    if (
                      h.documentElement !== this[0] &&
                      !i.contains(h.documentElement, this[0])
                    )
                      return { top: 0, left: 0 };
                    var n = this[0].getBoundingClientRect();
                    return {
                      left: n.left + t.pageXOffset,
                      top: n.top + t.pageYOffset,
                      width: Math.round(n.width),
                      height: Math.round(n.height),
                    };
                  },
                  css: function (t, e) {
                    if (arguments.length < 2) {
                      var s = this[0];
                      if ('string' == typeof t) {
                        if (!s) return;
                        return (
                          s.style[r(t)] ||
                          getComputedStyle(s, '').getPropertyValue(t)
                        );
                      }
                      if (k(t)) {
                        if (!s) return;
                        var o = {},
                          a = getComputedStyle(s, '');
                        return (
                          i.each(t, function (t, e) {
                            o[e] = s.style[r(e)] || a.getPropertyValue(e);
                          }),
                          o
                        );
                      }
                    }
                    var u = '';
                    if ('string' == I(t))
                      e || 0 === e
                        ? (u = B(t) + ':' + j(t, e))
                        : this.each(function () {
                            this.style.removeProperty(B(t));
                          });
                    else
                      for (n in t)
                        t[n] || 0 === t[n]
                          ? (u += B(n) + ':' + j(n, t[n]) + ';')
                          : this.each(function () {
                              this.style.removeProperty(B(n));
                            });
                    return this.each(function () {
                      this.style.cssText += ';' + u;
                    });
                  },
                  index: function (t) {
                    return t
                      ? this.indexOf(i(t)[0])
                      : this.parent().children().indexOf(this[0]);
                  },
                  hasClass: function (t) {
                    return (
                      !!t &&
                      a.some.call(
                        this,
                        function (t) {
                          return this.test(J(t));
                        },
                        K(t),
                      )
                    );
                  },
                  addClass: function (t) {
                    return t
                      ? this.each(function (e) {
                          if ('className' in this) {
                            s = [];
                            var n = J(this);
                            X(this, t, e, n)
                              .split(/\s+/g)
                              .forEach(function (t) {
                                i(this).hasClass(t) || s.push(t);
                              }, this),
                              s.length &&
                                J(this, n + (n ? ' ' : '') + s.join(' '));
                          }
                        })
                      : this;
                  },
                  removeClass: function (t) {
                    return this.each(function (n) {
                      if ('className' in this) {
                        if (t === e) return J(this, '');
                        (s = J(this)),
                          X(this, t, n, s)
                            .split(/\s+/g)
                            .forEach(function (t) {
                              s = s.replace(K(t), ' ');
                            }),
                          J(this, s.trim());
                      }
                    });
                  },
                  toggleClass: function (t, n) {
                    return t
                      ? this.each(function (s) {
                          var r = i(this);
                          X(this, t, s, J(this))
                            .split(/\s+/g)
                            .forEach(function (t) {
                              (n === e ? !r.hasClass(t) : n)
                                ? r.addClass(t)
                                : r.removeClass(t);
                            });
                        })
                      : this;
                  },
                  scrollTop: function (t) {
                    if (this.length) {
                      var n = 'scrollTop' in this[0];
                      return t === e
                        ? n
                          ? this[0].scrollTop
                          : this[0].pageYOffset
                        : this.each(
                            n
                              ? function () {
                                  this.scrollTop = t;
                                }
                              : function () {
                                  this.scrollTo(this.scrollX, t);
                                },
                          );
                    }
                  },
                  scrollLeft: function (t) {
                    if (this.length) {
                      var n = 'scrollLeft' in this[0];
                      return t === e
                        ? n
                          ? this[0].scrollLeft
                          : this[0].pageXOffset
                        : this.each(
                            n
                              ? function () {
                                  this.scrollLeft = t;
                                }
                              : function () {
                                  this.scrollTo(t, this.scrollY);
                                },
                          );
                    }
                  },
                  position: function () {
                    if (this.length) {
                      var t = this[0],
                        e = this.offsetParent(),
                        n = this.offset(),
                        s = y.test(e[0].nodeName)
                          ? { top: 0, left: 0 }
                          : e.offset();
                      return (
                        (n.top -= parseFloat(i(t).css('margin-top')) || 0),
                        (n.left -= parseFloat(i(t).css('margin-left')) || 0),
                        (s.top +=
                          parseFloat(i(e[0]).css('border-top-width')) || 0),
                        (s.left +=
                          parseFloat(i(e[0]).css('border-left-width')) || 0),
                        { top: n.top - s.top, left: n.left - s.left }
                      );
                    }
                  },
                  offsetParent: function () {
                    return this.map(function () {
                      for (
                        var t = this.offsetParent || h.body;
                        t &&
                        !y.test(t.nodeName) &&
                        'static' == i(t).css('position');

                      )
                        t = t.offsetParent;
                      return t;
                    });
                  },
                }),
                (i.fn.detach = i.fn.remove),
                ['width', 'height'].forEach(function (t) {
                  var n = t.replace(/./, function (t) {
                    return t[0].toUpperCase();
                  });
                  i.fn[t] = function (s) {
                    var r,
                      o = this[0];
                    return s === e
                      ? L(o)
                        ? o['inner' + n]
                        : M(o)
                        ? o.documentElement['scroll' + n]
                        : (r = this.offset()) && r[t]
                      : this.each(function (e) {
                          (o = i(this)).css(t, X(this, s, e, o[t]()));
                        });
                  };
                }),
                C.forEach(function (n, s) {
                  var r = s % 2;
                  (i.fn[n] = function () {
                    var n,
                      o,
                      a = i.map(arguments, function (t) {
                        var s = [];
                        return 'array' == (n = I(t))
                          ? (t.forEach(function (t) {
                              return t.nodeType !== e
                                ? s.push(t)
                                : i.zepto.isZ(t)
                                ? (s = s.concat(t.get()))
                                : void (s = s.concat(O.fragment(t)));
                            }),
                            s)
                          : 'object' == n || null == t
                          ? t
                          : O.fragment(t);
                      }),
                      u = this.length > 1;
                    return a.length < 1
                      ? this
                      : this.each(function (e, n) {
                          (o = r ? n : n.parentNode),
                            (n =
                              0 == s
                                ? n.nextSibling
                                : 1 == s
                                ? n.firstChild
                                : 2 == s
                                ? n
                                : null);
                          var c = i.contains(h.documentElement, o);
                          a.forEach(function (e) {
                            if (u) e = e.cloneNode(!0);
                            else if (!o) return i(e).remove();
                            o.insertBefore(e, n),
                              c &&
                                tt(e, function (e) {
                                  if (
                                    !(
                                      null == e.nodeName ||
                                      'SCRIPT' !== e.nodeName.toUpperCase() ||
                                      (e.type &&
                                        'text/javascript' !== e.type) ||
                                      e.src
                                    )
                                  ) {
                                    var n = e.ownerDocument
                                      ? e.ownerDocument.defaultView
                                      : t;
                                    n.eval.call(n, e.innerHTML);
                                  }
                                });
                          });
                        });
                  }),
                    (i.fn[
                      r ? n + 'To' : 'insert' + (s ? 'Before' : 'After')
                    ] = function (t) {
                      return i(t)[n](this), this;
                    });
                }),
                (O.Z.prototype = Q.prototype = i.fn),
                (O.uniq = o),
                (O.deserializeValue = Y),
                (i.zepto = O),
                i
              );
            })();
          return (
            (function (e) {
              var n,
                i = 1,
                s = Array.prototype.slice,
                r = e.isFunction,
                o = function (t) {
                  return 'string' == typeof t;
                },
                a = {},
                u = {},
                c = 'onfocusin' in t,
                l = { focus: 'focusin', blur: 'focusout' },
                h = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
              function p(t) {
                return t._zid || (t._zid = i++);
              }
              function f(t, e, n, i) {
                if ((e = d(e)).ns) var s = g(e.ns);
                return (a[p(t)] || []).filter(function (t) {
                  return (
                    t &&
                    (!e.e || t.e == e.e) &&
                    (!e.ns || s.test(t.ns)) &&
                    (!n || p(t.fn) === p(n)) &&
                    (!i || t.sel == i)
                  );
                });
              }
              function d(t) {
                var e = ('' + t).split('.');
                return { e: e[0], ns: e.slice(1).sort().join(' ') };
              }
              function g(t) {
                return new RegExp(
                  '(?:^| )' + t.replace(' ', ' .* ?') + '(?: |$)',
                );
              }
              function m(t, e) {
                return (t.del && !c && t.e in l) || !!e;
              }
              function v(t) {
                return h[t] || (c && l[t]) || t;
              }
              function y(t, i, s, r, o, u, c) {
                var l = p(t),
                  f = a[l] || (a[l] = []);
                i.split(/\s/).forEach(function (i) {
                  if ('ready' == i) return e(document).ready(s);
                  var a = d(i);
                  (a.fn = s),
                    (a.sel = o),
                    a.e in h &&
                      (s = function (t) {
                        var n = t.relatedTarget;
                        if (!n || (n !== this && !e.contains(this, n)))
                          return a.fn.apply(this, arguments);
                      }),
                    (a.del = u);
                  var l = u || s;
                  (a.proxy = function (e) {
                    if (!(e = S(e)).isImmediatePropagationStopped()) {
                      try {
                        var i = Object.getOwnPropertyDescriptor(e, 'data');
                        (i && !i.writable) || (e.data = r);
                      } catch (e) {}
                      var s = l.apply(
                        t,
                        e._args == n ? [e] : [e].concat(e._args),
                      );
                      return (
                        !1 === s && (e.preventDefault(), e.stopPropagation()), s
                      );
                    }
                  }),
                    (a.i = f.length),
                    f.push(a),
                    'addEventListener' in t &&
                      t.addEventListener(v(a.e), a.proxy, m(a, c));
                });
              }
              function w(t, e, n, i, s) {
                var r = p(t);
                (e || '').split(/\s/).forEach(function (e) {
                  f(t, e, n, i).forEach(function (e) {
                    delete a[r][e.i],
                      'removeEventListener' in t &&
                        t.removeEventListener(v(e.e), e.proxy, m(e, s));
                  });
                });
              }
              (u.click = u.mousedown = u.mouseup = u.mousemove = 'MouseEvents'),
                (e.event = { add: y, remove: w }),
                (e.proxy = function (t, n) {
                  var i = 2 in arguments && s.call(arguments, 2);
                  if (r(t)) {
                    var a = function () {
                      return t.apply(
                        n,
                        i ? i.concat(s.call(arguments)) : arguments,
                      );
                    };
                    return (a._zid = p(t)), a;
                  }
                  if (o(n))
                    return i
                      ? (i.unshift(t[n], t), e.proxy.apply(null, i))
                      : e.proxy(t[n], t);
                  throw new TypeError('expected function');
                }),
                (e.fn.bind = function (t, e, n) {
                  return this.on(t, e, n);
                }),
                (e.fn.unbind = function (t, e) {
                  return this.off(t, e);
                }),
                (e.fn.one = function (t, e, n, i) {
                  return this.on(t, e, n, i, 1);
                });
              var b = function () {
                  return !0;
                },
                C = function () {
                  return !1;
                },
                x = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                _ = {
                  preventDefault: 'isDefaultPrevented',
                  stopImmediatePropagation: 'isImmediatePropagationStopped',
                  stopPropagation: 'isPropagationStopped',
                };
              function S(t, i) {
                if (i || !t.isDefaultPrevented) {
                  i || (i = t),
                    e.each(_, function (e, n) {
                      var s = i[e];
                      (t[e] = function () {
                        return (this[n] = b), s && s.apply(i, arguments);
                      }),
                        (t[n] = C);
                    });
                  try {
                    t.timeStamp || (t.timeStamp = Date.now());
                  } catch (s) {}
                  (i.defaultPrevented !== n
                    ? i.defaultPrevented
                    : 'returnValue' in i
                    ? !1 === i.returnValue
                    : i.getPreventDefault && i.getPreventDefault()) &&
                    (t.isDefaultPrevented = b);
                }
                return t;
              }
              function E(t) {
                var e,
                  i = { originalEvent: t };
                for (e in t) x.test(e) || t[e] === n || (i[e] = t[e]);
                return S(i, t);
              }
              (e.fn.delegate = function (t, e, n) {
                return this.on(e, t, n);
              }),
                (e.fn.undelegate = function (t, e, n) {
                  return this.off(e, t, n);
                }),
                (e.fn.live = function (t, n) {
                  return e(document.body).delegate(this.selector, t, n), this;
                }),
                (e.fn.die = function (t, n) {
                  return e(document.body).undelegate(this.selector, t, n), this;
                }),
                (e.fn.on = function (t, i, a, u, c) {
                  var l,
                    h,
                    p = this;
                  return t && !o(t)
                    ? (e.each(t, function (t, e) {
                        p.on(t, i, a, e, c);
                      }),
                      p)
                    : (o(i) || r(u) || !1 === u || ((u = a), (a = i), (i = n)),
                      (u !== n && !1 !== a) || ((u = a), (a = n)),
                      !1 === u && (u = C),
                      p.each(function (n, r) {
                        c &&
                          (l = function (t) {
                            return w(r, t.type, u), u.apply(this, arguments);
                          }),
                          i &&
                            (h = function (t) {
                              var n,
                                o = e(t.target).closest(i, r).get(0);
                              if (o && o !== r)
                                return (
                                  (n = e.extend(E(t), {
                                    currentTarget: o,
                                    liveFired: r,
                                  })),
                                  (l || u).apply(
                                    o,
                                    [n].concat(s.call(arguments, 1)),
                                  )
                                );
                            }),
                          y(r, t, u, a, i, h || l);
                      }));
                }),
                (e.fn.off = function (t, i, s) {
                  var a = this;
                  return t && !o(t)
                    ? (e.each(t, function (t, e) {
                        a.off(t, i, e);
                      }),
                      a)
                    : (o(i) || r(s) || !1 === s || ((s = i), (i = n)),
                      !1 === s && (s = C),
                      a.each(function () {
                        w(this, t, s, i);
                      }));
                }),
                (e.fn.trigger = function (t, n) {
                  return (
                    ((t =
                      o(t) || e.isPlainObject(t)
                        ? e.Event(t)
                        : S(t))._args = n),
                    this.each(function () {
                      t.type in l && 'function' == typeof this[t.type]
                        ? this[t.type]()
                        : 'dispatchEvent' in this
                        ? this.dispatchEvent(t)
                        : e(this).triggerHandler(t, n);
                    })
                  );
                }),
                (e.fn.triggerHandler = function (t, n) {
                  var i, s;
                  return (
                    this.each(function (r, a) {
                      ((i = E(o(t) ? e.Event(t) : t))._args = n),
                        (i.target = a),
                        e.each(f(a, t.type || t), function (t, e) {
                          if (
                            ((s = e.proxy(i)),
                            i.isImmediatePropagationStopped())
                          )
                            return !1;
                        });
                    }),
                    s
                  );
                }),
                'focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error'
                  .split(' ')
                  .forEach(function (t) {
                    e.fn[t] = function (e) {
                      return 0 in arguments ? this.bind(t, e) : this.trigger(t);
                    };
                  }),
                (e.Event = function (t, e) {
                  o(t) || (t = (e = t).type);
                  var n = document.createEvent(u[t] || 'Events'),
                    i = !0;
                  if (e)
                    for (var s in e)
                      'bubbles' == s ? (i = !!e[s]) : (n[s] = e[s]);
                  return n.initEvent(t, i, !0), S(n);
                });
            })(i),
            (n = []),
            (i.fn.remove = function () {
              return this.each(function () {
                this.parentNode &&
                  ('IMG' === this.tagName &&
                    (n.push(this),
                    (this.src =
                      'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='),
                    e && clearTimeout(e),
                    (e = setTimeout(function () {
                      n = [];
                    }, 6e4))),
                  this.parentNode.removeChild(this));
              });
            }),
            (function (t) {
              var e = {},
                n = t.fn.data,
                i = t.camelCase,
                s = (t.expando = 'Zepto' + +new Date()),
                r = [];
              function o(r, o) {
                var u = r[s],
                  c = u && e[u];
                if (void 0 === o) return c || a(r);
                if (c) {
                  if (o in c) return c[o];
                  var l = i(o);
                  if (l in c) return c[l];
                }
                return n.call(t(r), o);
              }
              function a(n, r, o) {
                var a = n[s] || (n[s] = ++t.uuid),
                  c = e[a] || (e[a] = u(n));
                return void 0 !== r && (c[i(r)] = o), c;
              }
              function u(e) {
                var n = {};
                return (
                  t.each(e.attributes || r, function (e, s) {
                    0 == s.name.indexOf('data-') &&
                      (n[
                        i(s.name.replace('data-', ''))
                      ] = t.zepto.deserializeValue(s.value));
                  }),
                  n
                );
              }
              (t.fn.data = function (e, n) {
                return void 0 === n
                  ? t.isPlainObject(e)
                    ? this.each(function (n, i) {
                        t.each(e, function (t, e) {
                          a(i, t, e);
                        });
                      })
                    : 0 in this
                    ? o(this[0], e)
                    : void 0
                  : this.each(function () {
                      a(this, e, n);
                    });
              }),
                (t.data = function (e, n, i) {
                  return t(e).data(n, i);
                }),
                (t.hasData = function (n) {
                  var i = n[s],
                    r = i && e[i];
                  return !!r && !t.isEmptyObject(r);
                }),
                (t.fn.removeData = function (n) {
                  return (
                    'string' == typeof n && (n = n.split(/\s+/)),
                    this.each(function () {
                      var r = this[s],
                        o = r && e[r];
                      o &&
                        t.each(n || o, function (t) {
                          delete o[n ? i(this) : t];
                        });
                    })
                  );
                }),
                ['remove', 'empty'].forEach(function (e) {
                  var n = t.fn[e];
                  t.fn[e] = function () {
                    var t = this.find('*');
                    return (
                      'remove' === e && (t = t.add(this)),
                      t.removeData(),
                      n.call(this)
                    );
                  };
                });
            })(i),
            i
          );
        })(e));
    },
    8820: function (t) {
      'use strict';
      var e = {}.hasOwnProperty,
        n = /[ -,\.\/:-@\[-\^`\{-~]/,
        i = /[ -,\.\/:-@\[\]\^`\{-~]/,
        s = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        r = function t(r, o) {
          'single' !=
            (o = (function (t, n) {
              if (!t) return n;
              var i = {};
              for (var s in n) i[s] = e.call(t, s) ? t[s] : n[s];
              return i;
            })(o, t.options)).quotes &&
            'double' != o.quotes &&
            (o.quotes = 'single');
          for (
            var a = 'double' == o.quotes ? '"' : "'",
              u = o.isIdentifier,
              c = r.charAt(0),
              l = '',
              h = 0,
              p = r.length;
            h < p;

          ) {
            var f = r.charAt(h++),
              d = f.charCodeAt(),
              g = void 0;
            if (d < 32 || d > 126) {
              if (d >= 55296 && d <= 56319 && h < p) {
                var m = r.charCodeAt(h++);
                56320 == (64512 & m)
                  ? (d = ((1023 & d) << 10) + (1023 & m) + 65536)
                  : h--;
              }
              g = '\\' + d.toString(16).toUpperCase() + ' ';
            } else
              g = o.escapeEverything
                ? n.test(f)
                  ? '\\' + f
                  : '\\' + d.toString(16).toUpperCase() + ' '
                : /[\t\n\f\r\x0B]/.test(f)
                ? '\\' + d.toString(16).toUpperCase() + ' '
                : '\\' == f ||
                  (!u && (('"' == f && a == f) || ("'" == f && a == f))) ||
                  (u && i.test(f))
                ? '\\' + f
                : f;
            l += g;
          }
          return (
            u &&
              (/^-[-\d]/.test(l)
                ? (l = '\\-' + l.slice(1))
                : /\d/.test(c) && (l = '\\3' + c + ' ' + l.slice(1))),
            (l = l.replace(s, function (t, e, n) {
              return e && e.length % 2 ? t : (e || '') + n;
            })),
            !u && o.wrap ? a + l + a : l
          );
        };
      (r.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: 'single',
        wrap: !1,
      }),
        (r.version = '3.0.0'),
        (t.exports = r);
    },
    624: function (t, e, n) {
      'use strict';
      var i,
        s,
        r,
        o = [n(5525), n(4785), n(8291), n(2709), n(2506), n(9176)],
        a = -1,
        u = [],
        c = !1;
      function l() {
        i &&
          s &&
          ((i = !1), s.length ? (u = s.concat(u)) : (a = -1), u.length && h());
      }
      function h() {
        if (!i) {
          (c = !1), (i = !0);
          for (var t = u.length, e = setTimeout(l); t; ) {
            for (s = u, u = []; s && ++a < t; ) s[a].run();
            (a = -1), (t = u.length);
          }
          (s = null), (a = -1), (i = !1), clearTimeout(e);
        }
      }
      for (var p = -1, f = o.length; ++p < f; )
        if (o[p] && o[p].test && o[p].test()) {
          r = o[p].install(h);
          break;
        }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      (d.prototype.run = function () {
        var t = this.fun,
          e = this.array;
        switch (e.length) {
          case 0:
            return t();
          case 1:
            return t(e[0]);
          case 2:
            return t(e[0], e[1]);
          case 3:
            return t(e[0], e[1], e[2]);
          default:
            return t.apply(null, e);
        }
      }),
        (t.exports = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          u.push(new d(t, e)), c || i || ((c = !0), r());
        });
    },
    2709: function (t, e, n) {
      'use strict';
      (e.test = function () {
        return !n.g.setImmediate && void 0 !== n.g.MessageChannel;
      }),
        (e.install = function (t) {
          var e = new n.g.MessageChannel();
          return (
            (e.port1.onmessage = t),
            function () {
              e.port2.postMessage(0);
            }
          );
        });
    },
    8291: function (t, e, n) {
      'use strict';
      var i = n.g.MutationObserver || n.g.WebKitMutationObserver;
      (e.test = function () {
        return i;
      }),
        (e.install = function (t) {
          var e = 0,
            s = new i(t),
            r = n.g.document.createTextNode('');
          return (
            s.observe(r, { characterData: !0 }),
            function () {
              r.data = e = ++e % 2;
            }
          );
        });
    },
    4785: function (t, e, n) {
      'use strict';
      (e.test = function () {
        return 'function' == typeof n.g.queueMicrotask;
      }),
        (e.install = function (t) {
          return function () {
            n.g.queueMicrotask(t);
          };
        });
    },
    2506: function (t, e, n) {
      'use strict';
      (e.test = function () {
        return (
          'document' in n.g &&
          'onreadystatechange' in n.g.document.createElement('script')
        );
      }),
        (e.install = function (t) {
          return function () {
            var e = n.g.document.createElement('script');
            return (
              (e.onreadystatechange = function () {
                t(),
                  (e.onreadystatechange = null),
                  e.parentNode.removeChild(e),
                  (e = null);
              }),
              n.g.document.documentElement.appendChild(e),
              t
            );
          };
        });
    },
    9176: function (t, e) {
      'use strict';
      (e.test = function () {
        return !0;
      }),
        (e.install = function (t) {
          return function () {
            setTimeout(t, 0);
          };
        });
    },
  },
]);
