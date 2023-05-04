var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (t) {
    var e,
      i,
      s,
      n,
      o,
      r,
      a,
      h = "",
      l = 0;
    for (t = Base64._utf8_encode(t); l < t.length; )
      (e = t.charCodeAt(l++)),
        (i = t.charCodeAt(l++)),
        (s = t.charCodeAt(l++)),
        (n = e >> 2),
        (o = ((3 & e) << 4) | (i >> 4)),
        (r = ((15 & i) << 2) | (s >> 6)),
        (a = 63 & s),
        isNaN(i) ? (r = a = 64) : isNaN(s) && (a = 64),
        (h =
          h +
          this._keyStr.charAt(n) +
          this._keyStr.charAt(o) +
          this._keyStr.charAt(r) +
          this._keyStr.charAt(a));
    return h;
  },
  decode: function (t) {
    var e,
      i,
      s,
      n,
      o,
      r,
      a,
      h = "",
      l = 0;
    for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < t.length; )
      (n = this._keyStr.indexOf(t.charAt(l++))),
        (o = this._keyStr.indexOf(t.charAt(l++))),
        (r = this._keyStr.indexOf(t.charAt(l++))),
        (a = this._keyStr.indexOf(t.charAt(l++))),
        (e = (n << 2) | (o >> 4)),
        (i = ((15 & o) << 4) | (r >> 2)),
        (s = ((3 & r) << 6) | a),
        (h += String.fromCharCode(e)),
        64 != r && (h += String.fromCharCode(i)),
        64 != a && (h += String.fromCharCode(s));
    return (h = Base64._utf8_decode(h));
  },
  _utf8_encode: function (t) {
    t = t.replace(/\r\n/g, "\n");
    for (var e = "", i = 0; i < t.length; i++) {
      var s = t.charCodeAt(i);
      s < 128
        ? (e += String.fromCharCode(s))
        : s > 127 && s < 2048
        ? ((e += String.fromCharCode((s >> 6) | 192)),
          (e += String.fromCharCode((63 & s) | 128)))
        : ((e += String.fromCharCode((s >> 12) | 224)),
          (e += String.fromCharCode(((s >> 6) & 63) | 128)),
          (e += String.fromCharCode((63 & s) | 128)));
    }
    return e;
  },
  _utf8_decode: function (t) {
    for (var e = "", i = 0, s = (c1 = c2 = 0); i < t.length; )
      (s = t.charCodeAt(i)),
        s < 128
          ? ((e += String.fromCharCode(s)), i++)
          : s > 191 && s < 224
          ? ((c2 = t.charCodeAt(i + 1)),
            (e += String.fromCharCode(((31 & s) << 6) | (63 & c2))),
            (i += 2))
          : ((c2 = t.charCodeAt(i + 1)),
            (c3 = t.charCodeAt(i + 2)),
            (e += String.fromCharCode(
              ((15 & s) << 12) | ((63 & c2) << 6) | (63 & c3)
            )),
            (i += 3));
    return e;
  },
};
!(function (t) {
  function e(t, e) {
    if (!(t.originalEvent.touches.length > 1)) {
      t.preventDefault();
      var i = t.originalEvent.changedTouches[0],
        s = document.createEvent("MouseEvents");
      s.initMouseEvent(
        e,
        !0,
        !0,
        window,
        1,
        i.screenX,
        i.screenY,
        i.clientX,
        i.clientY,
        !1,
        !1,
        !1,
        !1,
        0,
        null
      ),
        t.target.dispatchEvent(s);
    }
  }
  if (((t.support.touch = "ontouchend" in document), t.support.touch)) {
    var i,
      s = t.ui.mouse.prototype,
      n = s._mouseInit,
      o = s._mouseDestroy;
    (s._touchStart = function (t) {
      var s = this;
      !i &&
        s._mouseCapture(t.originalEvent.changedTouches[0]) &&
        ((i = !0),
        (s._touchMoved = !1),
        e(t, "mouseover"),
        e(t, "mousemove"),
        e(t, "mousedown"));
    }),
      (s._touchMove = function (t) {
        i && ((this._touchMoved = !0), e(t, "mousemove"));
      }),
      (s._touchEnd = function (t) {
        i &&
          (e(t, "mouseup"),
          e(t, "mouseout"),
          this._touchMoved || e(t, "click"),
          (i = !1));
      }),
      (s._mouseInit = function () {
        var e = this;
        e.element.bind({
          touchstart: t.proxy(e, "_touchStart"),
          touchmove: t.proxy(e, "_touchMove"),
          touchend: t.proxy(e, "_touchEnd"),
        }),
          n.call(e);
      }),
      (s._mouseDestroy = function () {
        var e = this;
        e.element.unbind({
          touchstart: t.proxy(e, "_touchStart"),
          touchmove: t.proxy(e, "_touchMove"),
          touchend: t.proxy(e, "_touchEnd"),
        }),
          o.call(e);
      });
  }
})(jQuery),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t("object" == typeof exports ? require("jquery") : jQuery);
  })(function (t, e) {
    function i() {
      return new Date(Date.UTC.apply(Date, arguments));
    }
    function s() {
      var t = new Date();
      return i(t.getFullYear(), t.getMonth(), t.getDate());
    }
    function n(t, e) {
      return (
        t.getUTCFullYear() === e.getUTCFullYear() &&
        t.getUTCMonth() === e.getUTCMonth() &&
        t.getUTCDate() === e.getUTCDate()
      );
    }
    function o(i, s) {
      return function () {
        return (
          s !== e && t.fn.datepicker.deprecated(s),
          this[i].apply(this, arguments)
        );
      };
    }
    function r(t) {
      return t && !isNaN(t.getTime());
    }
    function a(e, i) {
      function s(t, e) {
        return e.toLowerCase();
      }
      var n,
        o = t(e).data(),
        r = {},
        a = new RegExp("^" + i.toLowerCase() + "([A-Z])");
      i = new RegExp("^" + i.toLowerCase());
      for (var h in o) i.test(h) && ((n = h.replace(a, s)), (r[n] = o[h]));
      return r;
    }
    function h(e) {
      var i = {};
      if (m[e] || ((e = e.split("-")[0]), m[e])) {
        var s = m[e];
        return (
          t.each(g, function (t, e) {
            e in s && (i[e] = s[e]);
          }),
          i
        );
      }
    }
    var l = (function () {
        var e = {
          get: function (t) {
            return this.slice(t)[0];
          },
          contains: function (t) {
            for (var e = t && t.valueOf(), i = 0, s = this.length; i < s; i++)
              if (0 <= this[i].valueOf() - e && this[i].valueOf() - e < 864e5)
                return i;
            return -1;
          },
          remove: function (t) {
            this.splice(t, 1);
          },
          replace: function (e) {
            e &&
              (t.isArray(e) || (e = [e]),
              this.clear(),
              this.push.apply(this, e));
          },
          clear: function () {
            this.length = 0;
          },
          copy: function () {
            var t = new l();
            return t.replace(this), t;
          },
        };
        return function () {
          var i = [];
          return i.push.apply(i, arguments), t.extend(i, e), i;
        };
      })(),
      c = function (e, i) {
        t.data(e, "datepicker", this),
          (this._events = []),
          (this._secondaryEvents = []),
          this._process_options(i),
          (this.dates = new l()),
          (this.viewDate = this.o.defaultViewDate),
          (this.focusDate = null),
          (this.element = t(e)),
          (this.isInput = this.element.is("input")),
          (this.inputField = this.isInput
            ? this.element
            : this.element.find("input")),
          (this.component =
            !!this.element.hasClass("date") &&
            this.element.find(
              ".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"
            )),
          this.component &&
            0 === this.component.length &&
            (this.component = !1),
          (this.isInline = !this.component && this.element.is("div")),
          (this.picker = t(v.template)),
          this._check_template(this.o.templates.leftArrow) &&
            this.picker.find(".prev").html(this.o.templates.leftArrow),
          this._check_template(this.o.templates.rightArrow) &&
            this.picker.find(".next").html(this.o.templates.rightArrow),
          this._buildEvents(),
          this._attachEvents(),
          this.isInline
            ? this.picker.addClass("datepicker-inline").appendTo(this.element)
            : this.picker.addClass("datepicker-dropdown dropdown-menu"),
          this.o.rtl && this.picker.addClass("datepicker-rtl"),
          this.o.calendarWeeks &&
            this.picker
              .find(
                ".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear"
              )
              .attr("colspan", function (t, e) {
                return Number(e) + 1;
              }),
          this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled,
          }),
          (this._allow_update = !1),
          this.setViewMode(this.o.startView),
          (this._allow_update = !0),
          this.fillDow(),
          this.fillMonths(),
          this.update(),
          this.isInline && this.show();
      };
    c.prototype = {
      constructor: c,
      _resolveViewName: function (e) {
        return (
          t.each(v.viewModes, function (i, s) {
            if (e === i || -1 !== t.inArray(e, s.names)) return (e = i), !1;
          }),
          e
        );
      },
      _resolveDaysOfWeek: function (e) {
        return t.isArray(e) || (e = e.split(/[,\s]*/)), t.map(e, Number);
      },
      _check_template: function (i) {
        try {
          return (
            i !== e &&
            "" !== i &&
            ((i.match(/[<>]/g) || []).length <= 0 || t(i).length > 0)
          );
        } catch (t) {
          return !1;
        }
      },
      _process_options: function (e) {
        this._o = t.extend({}, this._o, e);
        var n = (this.o = t.extend({}, this._o)),
          o = n.language;
        m[o] || ((o = o.split("-")[0]), m[o] || (o = f.language)),
          (n.language = o),
          (n.startView = this._resolveViewName(n.startView)),
          (n.minViewMode = this._resolveViewName(n.minViewMode)),
          (n.maxViewMode = this._resolveViewName(n.maxViewMode)),
          (n.startView = Math.max(
            this.o.minViewMode,
            Math.min(this.o.maxViewMode, n.startView)
          )),
          !0 !== n.multidate &&
            ((n.multidate = Number(n.multidate) || !1),
            !1 !== n.multidate && (n.multidate = Math.max(0, n.multidate))),
          (n.multidateSeparator = String(n.multidateSeparator)),
          (n.weekStart %= 7),
          (n.weekEnd = (n.weekStart + 6) % 7);
        var r = v.parseFormat(n.format);
        n.startDate !== -1 / 0 &&
          (n.startDate
            ? n.startDate instanceof Date
              ? (n.startDate = this._local_to_utc(this._zero_time(n.startDate)))
              : (n.startDate = v.parseDate(
                  n.startDate,
                  r,
                  n.language,
                  n.assumeNearbyYear
                ))
            : (n.startDate = -1 / 0)),
          n.endDate !== 1 / 0 &&
            (n.endDate
              ? n.endDate instanceof Date
                ? (n.endDate = this._local_to_utc(this._zero_time(n.endDate)))
                : (n.endDate = v.parseDate(
                    n.endDate,
                    r,
                    n.language,
                    n.assumeNearbyYear
                  ))
              : (n.endDate = 1 / 0)),
          (n.daysOfWeekDisabled = this._resolveDaysOfWeek(
            n.daysOfWeekDisabled || []
          )),
          (n.daysOfWeekHighlighted = this._resolveDaysOfWeek(
            n.daysOfWeekHighlighted || []
          )),
          (n.datesDisabled = n.datesDisabled || []),
          t.isArray(n.datesDisabled) ||
            (n.datesDisabled = n.datesDisabled.split(",")),
          (n.datesDisabled = t.map(n.datesDisabled, function (t) {
            return v.parseDate(t, r, n.language, n.assumeNearbyYear);
          }));
        var a = String(n.orientation).toLowerCase().split(/\s+/g),
          h = n.orientation.toLowerCase();
        if (
          ((a = t.grep(a, function (t) {
            return /^auto|left|right|top|bottom$/.test(t);
          })),
          (n.orientation = { x: "auto", y: "auto" }),
          h && "auto" !== h)
        )
          if (1 === a.length)
            switch (a[0]) {
              case "top":
              case "bottom":
                n.orientation.y = a[0];
                break;
              case "left":
              case "right":
                n.orientation.x = a[0];
            }
          else
            (h = t.grep(a, function (t) {
              return /^left|right$/.test(t);
            })),
              (n.orientation.x = h[0] || "auto"),
              (h = t.grep(a, function (t) {
                return /^top|bottom$/.test(t);
              })),
              (n.orientation.y = h[0] || "auto");
        if (
          n.defaultViewDate instanceof Date ||
          "string" == typeof n.defaultViewDate
        )
          n.defaultViewDate = v.parseDate(
            n.defaultViewDate,
            r,
            n.language,
            n.assumeNearbyYear
          );
        else if (n.defaultViewDate) {
          var l = n.defaultViewDate.year || new Date().getFullYear(),
            c = n.defaultViewDate.month || 0,
            d = n.defaultViewDate.day || 1;
          n.defaultViewDate = i(l, c, d);
        } else n.defaultViewDate = s();
      },
      _applyEvents: function (t) {
        for (var i, s, n, o = 0; o < t.length; o++)
          (i = t[o][0]),
            2 === t[o].length
              ? ((s = e), (n = t[o][1]))
              : 3 === t[o].length && ((s = t[o][1]), (n = t[o][2])),
            i.on(n, s);
      },
      _unapplyEvents: function (t) {
        for (var i, s, n, o = 0; o < t.length; o++)
          (i = t[o][0]),
            2 === t[o].length
              ? ((n = e), (s = t[o][1]))
              : 3 === t[o].length && ((n = t[o][1]), (s = t[o][2])),
            i.off(s, n);
      },
      _buildEvents: function () {
        var e = {
          keyup: t.proxy(function (e) {
            -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
              this.update();
          }, this),
          keydown: t.proxy(this.keydown, this),
          paste: t.proxy(this.paste, this),
        };
        !0 === this.o.showOnFocus && (e.focus = t.proxy(this.show, this)),
          this.isInput
            ? (this._events = [[this.element, e]])
            : this.component && this.inputField.length
            ? (this._events = [
                [this.inputField, e],
                [this.component, { click: t.proxy(this.show, this) }],
              ])
            : (this._events = [
                [
                  this.element,
                  {
                    click: t.proxy(this.show, this),
                    keydown: t.proxy(this.keydown, this),
                  },
                ],
              ]),
          this._events.push(
            [
              this.element,
              "*",
              {
                blur: t.proxy(function (t) {
                  this._focused_from = t.target;
                }, this),
              },
            ],
            [
              this.element,
              {
                blur: t.proxy(function (t) {
                  this._focused_from = t.target;
                }, this),
              },
            ]
          ),
          this.o.immediateUpdates &&
            this._events.push([
              this.element,
              {
                "changeYear changeMonth": t.proxy(function (t) {
                  this.update(t.date);
                }, this),
              },
            ]),
          (this._secondaryEvents = [
            [this.picker, { click: t.proxy(this.click, this) }],
            [
              this.picker,
              ".prev, .next",
              { click: t.proxy(this.navArrowsClick, this) },
            ],
            [
              this.picker,
              ".day:not(.disabled)",
              { click: t.proxy(this.dayCellClick, this) },
            ],
            [t(window), { resize: t.proxy(this.place, this) }],
            [
              t(document),
              {
                "mousedown touchstart": t.proxy(function (t) {
                  this.element.is(t.target) ||
                    this.element.find(t.target).length ||
                    this.picker.is(t.target) ||
                    this.picker.find(t.target).length ||
                    this.isInline ||
                    this.hide();
                }, this),
              },
            ],
          ]);
      },
      _attachEvents: function () {
        this._detachEvents(), this._applyEvents(this._events);
      },
      _detachEvents: function () {
        this._unapplyEvents(this._events);
      },
      _attachSecondaryEvents: function () {
        this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
      },
      _detachSecondaryEvents: function () {
        this._unapplyEvents(this._secondaryEvents);
      },
      _trigger: function (e, i) {
        var s = i || this.dates.get(-1),
          n = this._utc_to_local(s);
        this.element.trigger({
          type: e,
          date: n,
          viewMode: this.viewMode,
          dates: t.map(this.dates, this._utc_to_local),
          format: t.proxy(function (t, e) {
            0 === arguments.length
              ? ((t = this.dates.length - 1), (e = this.o.format))
              : "string" == typeof t && ((e = t), (t = this.dates.length - 1)),
              (e = e || this.o.format);
            var i = this.dates.get(t);
            return v.formatDate(i, e, this.o.language);
          }, this),
        });
      },
      show: function () {
        if (
          !(
            this.inputField.is(":disabled") ||
            (this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)
          )
        )
          return (
            this.isInline || this.picker.appendTo(this.o.container),
            this.place(),
            this.picker.show(),
            this._attachSecondaryEvents(),
            this._trigger("show"),
            (window.navigator.msMaxTouchPoints || "ontouchstart" in document) &&
              this.o.disableTouchKeyboard &&
              t(this.element).blur(),
            this
          );
      },
      hide: function () {
        return this.isInline || !this.picker.is(":visible")
          ? this
          : ((this.focusDate = null),
            this.picker.hide().detach(),
            this._detachSecondaryEvents(),
            this.setViewMode(this.o.startView),
            this.o.forceParse && this.inputField.val() && this.setValue(),
            this._trigger("hide"),
            this);
      },
      destroy: function () {
        return (
          this.hide(),
          this._detachEvents(),
          this._detachSecondaryEvents(),
          this.picker.remove(),
          delete this.element.data().datepicker,
          this.isInput || delete this.element.data().date,
          this
        );
      },
      paste: function (e) {
        var i;
        if (
          e.originalEvent.clipboardData &&
          e.originalEvent.clipboardData.types &&
          -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types)
        )
          i = e.originalEvent.clipboardData.getData("text/plain");
        else {
          if (!window.clipboardData) return;
          i = window.clipboardData.getData("Text");
        }
        this.setDate(i), this.update(), e.preventDefault();
      },
      _utc_to_local: function (t) {
        if (!t) return t;
        var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
        return (
          e.getTimezoneOffset() !== t.getTimezoneOffset() &&
            (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())),
          e
        );
      },
      _local_to_utc: function (t) {
        return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset());
      },
      _zero_time: function (t) {
        return t && new Date(t.getFullYear(), t.getMonth(), t.getDate());
      },
      _zero_utc_time: function (t) {
        return t && i(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
      },
      getDates: function () {
        return t.map(this.dates, this._utc_to_local);
      },
      getUTCDates: function () {
        return t.map(this.dates, function (t) {
          return new Date(t);
        });
      },
      getDate: function () {
        return this._utc_to_local(this.getUTCDate());
      },
      getUTCDate: function () {
        var t = this.dates.get(-1);
        return t !== e ? new Date(t) : null;
      },
      clearDates: function () {
        this.inputField.val(""),
          this.update(),
          this._trigger("changeDate"),
          this.o.autoclose && this.hide();
      },
      setDates: function () {
        var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
        return (
          this.update.apply(this, e),
          this._trigger("changeDate"),
          this.setValue(),
          this
        );
      },
      setUTCDates: function () {
        var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
        return this.setDates.apply(this, t.map(e, this._utc_to_local)), this;
      },
      setDate: o("setDates"),
      setUTCDate: o("setUTCDates"),
      remove: o(
        "destroy",
        "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
      ),
      setValue: function () {
        var t = this.getFormattedDate();
        return this.inputField.val(t), this;
      },
      getFormattedDate: function (i) {
        i === e && (i = this.o.format);
        var s = this.o.language;
        return t
          .map(this.dates, function (t) {
            return v.formatDate(t, i, s);
          })
          .join(this.o.multidateSeparator);
      },
      getStartDate: function () {
        return this.o.startDate;
      },
      setStartDate: function (t) {
        return (
          this._process_options({ startDate: t }),
          this.update(),
          this.updateNavArrows(),
          this
        );
      },
      getEndDate: function () {
        return this.o.endDate;
      },
      setEndDate: function (t) {
        return (
          this._process_options({ endDate: t }),
          this.update(),
          this.updateNavArrows(),
          this
        );
      },
      setDaysOfWeekDisabled: function (t) {
        return (
          this._process_options({ daysOfWeekDisabled: t }), this.update(), this
        );
      },
      setDaysOfWeekHighlighted: function (t) {
        return (
          this._process_options({ daysOfWeekHighlighted: t }),
          this.update(),
          this
        );
      },
      setDatesDisabled: function (t) {
        return this._process_options({ datesDisabled: t }), this.update(), this;
      },
      place: function () {
        if (this.isInline) return this;
        var e = this.picker.outerWidth(),
          i = this.picker.outerHeight(),
          s = t(this.o.container),
          n = s.width(),
          o =
            "body" === this.o.container
              ? t(document).scrollTop()
              : s.scrollTop(),
          r = s.offset(),
          a = [0];
        this.element.parents().each(function () {
          var e = t(this).css("z-index");
          "auto" !== e && 0 !== Number(e) && a.push(Number(e));
        });
        var h = Math.max.apply(Math, a) + this.o.zIndexOffset,
          l = this.component
            ? this.component.parent().offset()
            : this.element.offset(),
          c = this.component
            ? this.component.outerHeight(!0)
            : this.element.outerHeight(!1),
          d = this.component
            ? this.component.outerWidth(!0)
            : this.element.outerWidth(!1),
          p = l.left - r.left,
          u = l.top - r.top;
        "body" !== this.o.container && (u += o),
          this.picker.removeClass(
            "datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"
          ),
          "auto" !== this.o.orientation.x
            ? (this.picker.addClass(
                "datepicker-orient-" + this.o.orientation.x
              ),
              "right" === this.o.orientation.x && (p -= e - d))
            : l.left < 0
            ? (this.picker.addClass("datepicker-orient-left"),
              (p -= l.left - 10))
            : p + e > n
            ? (this.picker.addClass("datepicker-orient-right"), (p += d - e))
            : this.o.rtl
            ? this.picker.addClass("datepicker-orient-right")
            : this.picker.addClass("datepicker-orient-left");
        var f,
          g = this.o.orientation.y;
        if (
          ("auto" === g && ((f = -o + u - i), (g = f < 0 ? "bottom" : "top")),
          this.picker.addClass("datepicker-orient-" + g),
          "top" === g
            ? (u -= i + parseInt(this.picker.css("padding-top")))
            : (u += c),
          this.o.rtl)
        ) {
          var m = n - (p + d);
          this.picker.css({ top: u, right: m, zIndex: h });
        } else this.picker.css({ top: u, left: p, zIndex: h });
        return this;
      },
      _allow_update: !0,
      update: function () {
        if (!this._allow_update) return this;
        var e = this.dates.copy(),
          i = [],
          s = !1;
        return (
          arguments.length
            ? (t.each(
                arguments,
                t.proxy(function (t, e) {
                  e instanceof Date && (e = this._local_to_utc(e)), i.push(e);
                }, this)
              ),
              (s = !0))
            : ((i = this.isInput
                ? this.element.val()
                : this.element.data("date") || this.inputField.val()),
              (i =
                i && this.o.multidate
                  ? i.split(this.o.multidateSeparator)
                  : [i]),
              delete this.element.data().date),
          (i = t.map(
            i,
            t.proxy(function (t) {
              return v.parseDate(
                t,
                this.o.format,
                this.o.language,
                this.o.assumeNearbyYear
              );
            }, this)
          )),
          (i = t.grep(
            i,
            t.proxy(function (t) {
              return !this.dateWithinRange(t) || !t;
            }, this),
            !0
          )),
          this.dates.replace(i),
          this.o.updateViewDate &&
            (this.dates.length
              ? (this.viewDate = new Date(this.dates.get(-1)))
              : this.viewDate < this.o.startDate
              ? (this.viewDate = new Date(this.o.startDate))
              : this.viewDate > this.o.endDate
              ? (this.viewDate = new Date(this.o.endDate))
              : (this.viewDate = this.o.defaultViewDate)),
          s
            ? (this.setValue(), this.element.change())
            : this.dates.length &&
              String(e) !== String(this.dates) &&
              s &&
              (this._trigger("changeDate"), this.element.change()),
          !this.dates.length &&
            e.length &&
            (this._trigger("clearDate"), this.element.change()),
          this.fill(),
          this
        );
      },
      fillDow: function () {
        if (this.o.showWeekDays) {
          var e = this.o.weekStart,
            i = "<tr>";
          for (
            this.o.calendarWeeks && (i += '<th class="cw">&#160;</th>');
            e < this.o.weekStart + 7;

          )
            (i += '<th class="dow'),
              -1 !== t.inArray(e, this.o.daysOfWeekDisabled) &&
                (i += " disabled"),
              (i += '">' + m[this.o.language].daysMin[e++ % 7] + "</th>");
          (i += "</tr>"), this.picker.find(".datepicker-days thead").append(i);
        }
      },
      fillMonths: function () {
        for (
          var t, e = this._utc_to_local(this.viewDate), i = "", s = 0;
          s < 12;
          s++
        )
          (t = e && e.getMonth() === s ? " focused" : ""),
            (i +=
              '<span class="month' +
              t +
              '">' +
              m[this.o.language].monthsShort[s] +
              "</span>");
        this.picker.find(".datepicker-months td").html(i);
      },
      setRange: function (e) {
        e && e.length
          ? (this.range = t.map(e, function (t) {
              return t.valueOf();
            }))
          : delete this.range,
          this.fill();
      },
      getClassNames: function (e) {
        var i = [],
          o = this.viewDate.getUTCFullYear(),
          r = this.viewDate.getUTCMonth(),
          a = s();
        return (
          e.getUTCFullYear() < o ||
          (e.getUTCFullYear() === o && e.getUTCMonth() < r)
            ? i.push("old")
            : (e.getUTCFullYear() > o ||
                (e.getUTCFullYear() === o && e.getUTCMonth() > r)) &&
              i.push("new"),
          this.focusDate &&
            e.valueOf() === this.focusDate.valueOf() &&
            i.push("focused"),
          this.o.todayHighlight && n(e, a) && i.push("today"),
          -1 !== this.dates.contains(e) && i.push("active"),
          this.dateWithinRange(e) || i.push("disabled"),
          this.dateIsDisabled(e) && i.push("disabled", "disabled-date"),
          -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) &&
            i.push("highlighted"),
          this.range &&
            (e > this.range[0] &&
              e < this.range[this.range.length - 1] &&
              i.push("range"),
            -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected"),
            e.valueOf() === this.range[0] && i.push("range-start"),
            e.valueOf() === this.range[this.range.length - 1] &&
              i.push("range-end")),
          i
        );
      },
      _fill_yearsView: function (i, s, n, o, r, a, h) {
        for (
          var l,
            c,
            d,
            p = "",
            u = n / 10,
            f = this.picker.find(i),
            g = Math.floor(o / n) * n,
            m = g + 9 * u,
            v = Math.floor(this.viewDate.getFullYear() / u) * u,
            y = t.map(this.dates, function (t) {
              return Math.floor(t.getUTCFullYear() / u) * u;
            }),
            x = g - u;
          x <= m + u;
          x += u
        )
          (l = [s]),
            (c = null),
            x === g - u ? l.push("old") : x === m + u && l.push("new"),
            -1 !== t.inArray(x, y) && l.push("active"),
            (x < r || x > a) && l.push("disabled"),
            x === v && l.push("focused"),
            h !== t.noop &&
              ((d = h(new Date(x, 0, 1))),
              d === e
                ? (d = {})
                : "boolean" == typeof d
                ? (d = { enabled: d })
                : "string" == typeof d && (d = { classes: d }),
              !1 === d.enabled && l.push("disabled"),
              d.classes && (l = l.concat(d.classes.split(/\s+/))),
              d.tooltip && (c = d.tooltip)),
            (p +=
              '<span class="' +
              l.join(" ") +
              '"' +
              (c ? ' title="' + c + '"' : "") +
              ">" +
              x +
              "</span>");
        f.find(".datepicker-switch").text(g + "-" + m), f.find("td").html(p);
      },
      fill: function () {
        var n,
          o,
          r = new Date(this.viewDate),
          a = r.getUTCFullYear(),
          h = r.getUTCMonth(),
          l =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCFullYear()
              : -1 / 0,
          c =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCMonth()
              : -1 / 0,
          d =
            this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          p = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          u = m[this.o.language].today || m.en.today || "",
          f = m[this.o.language].clear || m.en.clear || "",
          g = m[this.o.language].titleFormat || m.en.titleFormat,
          y = s(),
          x =
            (!0 === this.o.todayBtn || "linked" === this.o.todayBtn) &&
            y >= this.o.startDate &&
            y <= this.o.endDate &&
            !this.weekOfDateIsDisabled(y);
        if (!isNaN(a) && !isNaN(h)) {
          this.picker
            .find(".datepicker-days .datepicker-switch")
            .text(v.formatDate(r, g, this.o.language)),
            this.picker
              .find("tfoot .today")
              .text(u)
              .css("display", x ? "table-cell" : "none"),
            this.picker
              .find("tfoot .clear")
              .text(f)
              .css("display", !0 === this.o.clearBtn ? "table-cell" : "none"),
            this.picker
              .find("thead .datepicker-title")
              .text(this.o.title)
              .css(
                "display",
                "string" == typeof this.o.title && "" !== this.o.title
                  ? "table-cell"
                  : "none"
              ),
            this.updateNavArrows(),
            this.fillMonths();
          var b = i(a, h, 0),
            k = b.getUTCDate();
          b.setUTCDate(k - ((b.getUTCDay() - this.o.weekStart + 7) % 7));
          var w = new Date(b);
          b.getUTCFullYear() < 100 && w.setUTCFullYear(b.getUTCFullYear()),
            w.setUTCDate(w.getUTCDate() + 42),
            (w = w.valueOf());
          for (var M, S, T = []; b.valueOf() < w; ) {
            if (
              (M = b.getUTCDay()) === this.o.weekStart &&
              (T.push("<tr>"), this.o.calendarWeeks)
            ) {
              var C = new Date(+b + ((this.o.weekStart - M - 7) % 7) * 864e5),
                A = new Date(Number(C) + ((11 - C.getUTCDay()) % 7) * 864e5),
                D = new Date(
                  Number((D = i(A.getUTCFullYear(), 0, 1))) +
                    ((11 - D.getUTCDay()) % 7) * 864e5
                ),
                E = (A - D) / 864e5 / 7 + 1;
              T.push('<td class="cw">' + E + "</td>");
            }
            (S = this.getClassNames(b)), S.push("day");
            var O = b.getUTCDate();
            this.o.beforeShowDay !== t.noop &&
              ((o = this.o.beforeShowDay(this._utc_to_local(b))),
              o === e
                ? (o = {})
                : "boolean" == typeof o
                ? (o = { enabled: o })
                : "string" == typeof o && (o = { classes: o }),
              !1 === o.enabled && S.push("disabled"),
              o.classes && (S = S.concat(o.classes.split(/\s+/))),
              o.tooltip && (n = o.tooltip),
              o.content && (O = o.content)),
              (S = t.isFunction(t.uniqueSort) ? t.uniqueSort(S) : t.unique(S)),
              T.push(
                '<td class="' +
                  S.join(" ") +
                  '"' +
                  (n ? ' title="' + n + '"' : "") +
                  ' data-date="' +
                  b.getTime().toString() +
                  '">' +
                  O +
                  "</td>"
              ),
              (n = null),
              M === this.o.weekEnd && T.push("</tr>"),
              b.setUTCDate(b.getUTCDate() + 1);
          }
          this.picker.find(".datepicker-days tbody").html(T.join(""));
          var L =
              m[this.o.language].monthsTitle || m.en.monthsTitle || "Months",
            P = this.picker
              .find(".datepicker-months")
              .find(".datepicker-switch")
              .text(this.o.maxViewMode < 2 ? L : a)
              .end()
              .find("tbody span")
              .removeClass("active");
          if (
            (t.each(this.dates, function (t, e) {
              e.getUTCFullYear() === a &&
                P.eq(e.getUTCMonth()).addClass("active");
            }),
            (a < l || a > d) && P.addClass("disabled"),
            a === l && P.slice(0, c).addClass("disabled"),
            a === d && P.slice(p + 1).addClass("disabled"),
            this.o.beforeShowMonth !== t.noop)
          ) {
            var I = this;
            t.each(P, function (i, s) {
              var n = new Date(a, i, 1),
                o = I.o.beforeShowMonth(n);
              o === e
                ? (o = {})
                : "boolean" == typeof o
                ? (o = { enabled: o })
                : "string" == typeof o && (o = { classes: o }),
                !1 !== o.enabled ||
                  t(s).hasClass("disabled") ||
                  t(s).addClass("disabled"),
                o.classes && t(s).addClass(o.classes),
                o.tooltip && t(s).prop("title", o.tooltip);
            });
          }
          this._fill_yearsView(
            ".datepicker-years",
            "year",
            10,
            a,
            l,
            d,
            this.o.beforeShowYear
          ),
            this._fill_yearsView(
              ".datepicker-decades",
              "decade",
              100,
              a,
              l,
              d,
              this.o.beforeShowDecade
            ),
            this._fill_yearsView(
              ".datepicker-centuries",
              "century",
              1e3,
              a,
              l,
              d,
              this.o.beforeShowCentury
            );
        }
      },
      updateNavArrows: function () {
        if (this._allow_update) {
          var t,
            e,
            i = new Date(this.viewDate),
            s = i.getUTCFullYear(),
            n = i.getUTCMonth(),
            o =
              this.o.startDate !== -1 / 0
                ? this.o.startDate.getUTCFullYear()
                : -1 / 0,
            r =
              this.o.startDate !== -1 / 0
                ? this.o.startDate.getUTCMonth()
                : -1 / 0,
            a =
              this.o.endDate !== 1 / 0
                ? this.o.endDate.getUTCFullYear()
                : 1 / 0,
            h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
            l = 1;
          switch (this.viewMode) {
            case 4:
              l *= 10;
            case 3:
              l *= 10;
            case 2:
              l *= 10;
            case 1:
              (t = Math.floor(s / l) * l <= o),
                (e = Math.floor(s / l) * l + l > a);
              break;
            case 0:
              (t = s <= o && n <= r), (e = s >= a && n >= h);
          }
          this.picker.find(".prev").toggleClass("disabled", t),
            this.picker.find(".next").toggleClass("disabled", e);
        }
      },
      click: function (e) {
        e.preventDefault(), e.stopPropagation();
        var n, o, r, a;
        (n = t(e.target)),
          n.hasClass("datepicker-switch") &&
            this.viewMode !== this.o.maxViewMode &&
            this.setViewMode(this.viewMode + 1),
          n.hasClass("today") &&
            !n.hasClass("day") &&
            (this.setViewMode(0),
            this._setDate(s(), "linked" === this.o.todayBtn ? null : "view")),
          n.hasClass("clear") && this.clearDates(),
          n.hasClass("disabled") ||
            ((n.hasClass("month") ||
              n.hasClass("year") ||
              n.hasClass("decade") ||
              n.hasClass("century")) &&
              (this.viewDate.setUTCDate(1),
              (o = 1),
              1 === this.viewMode
                ? ((a = n.parent().find("span").index(n)),
                  (r = this.viewDate.getUTCFullYear()),
                  this.viewDate.setUTCMonth(a))
                : ((a = 0),
                  (r = Number(n.text())),
                  this.viewDate.setUTCFullYear(r)),
              this._trigger(v.viewModes[this.viewMode - 1].e, this.viewDate),
              this.viewMode === this.o.minViewMode
                ? this._setDate(i(r, a, o))
                : (this.setViewMode(this.viewMode - 1), this.fill()))),
          this.picker.is(":visible") &&
            this._focused_from &&
            this._focused_from.focus(),
          delete this._focused_from;
      },
      dayCellClick: function (e) {
        var i = t(e.currentTarget),
          s = i.data("date"),
          n = new Date(s);
        this.o.updateViewDate &&
          (n.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
            this._trigger("changeYear", this.viewDate),
          n.getUTCMonth() !== this.viewDate.getUTCMonth() &&
            this._trigger("changeMonth", this.viewDate)),
          this._setDate(n);
      },
      navArrowsClick: function (e) {
        var i = t(e.currentTarget),
          s = i.hasClass("prev") ? -1 : 1;
        0 !== this.viewMode && (s *= 12 * v.viewModes[this.viewMode].navStep),
          (this.viewDate = this.moveMonth(this.viewDate, s)),
          this._trigger(v.viewModes[this.viewMode].e, this.viewDate),
          this.fill();
      },
      _toggle_multidate: function (t) {
        var e = this.dates.contains(t);
        if (
          (t || this.dates.clear(),
          -1 !== e
            ? (!0 === this.o.multidate ||
                this.o.multidate > 1 ||
                this.o.toggleActive) &&
              this.dates.remove(e)
            : !1 === this.o.multidate
            ? (this.dates.clear(), this.dates.push(t))
            : this.dates.push(t),
          "number" == typeof this.o.multidate)
        )
          for (; this.dates.length > this.o.multidate; ) this.dates.remove(0);
      },
      _setDate: function (t, e) {
        (e && "date" !== e) || this._toggle_multidate(t && new Date(t)),
          ((!e && this.o.updateViewDate) || "view" === e) &&
            (this.viewDate = t && new Date(t)),
          this.fill(),
          this.setValue(),
          (e && "view" === e) || this._trigger("changeDate"),
          this.inputField.trigger("change"),
          !this.o.autoclose || (e && "date" !== e) || this.hide();
      },
      moveDay: function (t, e) {
        var i = new Date(t);
        return i.setUTCDate(t.getUTCDate() + e), i;
      },
      moveWeek: function (t, e) {
        return this.moveDay(t, 7 * e);
      },
      moveMonth: function (t, e) {
        if (!r(t)) return this.o.defaultViewDate;
        if (!e) return t;
        var i,
          s,
          n = new Date(t.valueOf()),
          o = n.getUTCDate(),
          a = n.getUTCMonth(),
          h = Math.abs(e);
        if (((e = e > 0 ? 1 : -1), 1 === h))
          (s =
            -1 === e
              ? function () {
                  return n.getUTCMonth() === a;
                }
              : function () {
                  return n.getUTCMonth() !== i;
                }),
            (i = a + e),
            n.setUTCMonth(i),
            (i = (i + 12) % 12);
        else {
          for (var l = 0; l < h; l++) n = this.moveMonth(n, e);
          (i = n.getUTCMonth()),
            n.setUTCDate(o),
            (s = function () {
              return i !== n.getUTCMonth();
            });
        }
        for (; s(); ) n.setUTCDate(--o), n.setUTCMonth(i);
        return n;
      },
      moveYear: function (t, e) {
        return this.moveMonth(t, 12 * e);
      },
      moveAvailableDate: function (t, e, i) {
        do {
          if (((t = this[i](t, e)), !this.dateWithinRange(t))) return !1;
          i = "moveDay";
        } while (this.dateIsDisabled(t));
        return t;
      },
      weekOfDateIsDisabled: function (e) {
        return -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled);
      },
      dateIsDisabled: function (e) {
        return (
          this.weekOfDateIsDisabled(e) ||
          t.grep(this.o.datesDisabled, function (t) {
            return n(e, t);
          }).length > 0
        );
      },
      dateWithinRange: function (t) {
        return t >= this.o.startDate && t <= this.o.endDate;
      },
      keydown: function (t) {
        if (!this.picker.is(":visible"))
          return void (
            (40 !== t.keyCode && 27 !== t.keyCode) ||
            (this.show(), t.stopPropagation())
          );
        var e,
          i,
          s = !1,
          n = this.focusDate || this.viewDate;
        switch (t.keyCode) {
          case 27:
            this.focusDate
              ? ((this.focusDate = null),
                (this.viewDate = this.dates.get(-1) || this.viewDate),
                this.fill())
              : this.hide(),
              t.preventDefault(),
              t.stopPropagation();
            break;
          case 37:
          case 38:
          case 39:
          case 40:
            if (
              !this.o.keyboardNavigation ||
              7 === this.o.daysOfWeekDisabled.length
            )
              break;
            (e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1),
              0 === this.viewMode
                ? t.ctrlKey
                  ? (i = this.moveAvailableDate(n, e, "moveYear")) &&
                    this._trigger("changeYear", this.viewDate)
                  : t.shiftKey
                  ? (i = this.moveAvailableDate(n, e, "moveMonth")) &&
                    this._trigger("changeMonth", this.viewDate)
                  : 37 === t.keyCode || 39 === t.keyCode
                  ? (i = this.moveAvailableDate(n, e, "moveDay"))
                  : this.weekOfDateIsDisabled(n) ||
                    (i = this.moveAvailableDate(n, e, "moveWeek"))
                : 1 === this.viewMode
                ? ((38 !== t.keyCode && 40 !== t.keyCode) || (e *= 4),
                  (i = this.moveAvailableDate(n, e, "moveMonth")))
                : 2 === this.viewMode &&
                  ((38 !== t.keyCode && 40 !== t.keyCode) || (e *= 4),
                  (i = this.moveAvailableDate(n, e, "moveYear"))),
              i &&
                ((this.focusDate = this.viewDate = i),
                this.setValue(),
                this.fill(),
                t.preventDefault());
            break;
          case 13:
            if (!this.o.forceParse) break;
            (n = this.focusDate || this.dates.get(-1) || this.viewDate),
              this.o.keyboardNavigation &&
                (this._toggle_multidate(n), (s = !0)),
              (this.focusDate = null),
              (this.viewDate = this.dates.get(-1) || this.viewDate),
              this.setValue(),
              this.fill(),
              this.picker.is(":visible") &&
                (t.preventDefault(),
                t.stopPropagation(),
                this.o.autoclose && this.hide());
            break;
          case 9:
            (this.focusDate = null),
              (this.viewDate = this.dates.get(-1) || this.viewDate),
              this.fill(),
              this.hide();
        }
        s &&
          (this.dates.length
            ? this._trigger("changeDate")
            : this._trigger("clearDate"),
          this.inputField.trigger("change"));
      },
      setViewMode: function (t) {
        (this.viewMode = t),
          this.picker
            .children("div")
            .hide()
            .filter(".datepicker-" + v.viewModes[this.viewMode].clsName)
            .show(),
          this.updateNavArrows(),
          this._trigger("changeViewMode", new Date(this.viewDate));
      },
    };
    var d = function (e, i) {
      t.data(e, "datepicker", this),
        (this.element = t(e)),
        (this.inputs = t.map(i.inputs, function (t) {
          return t.jquery ? t[0] : t;
        })),
        delete i.inputs,
        (this.keepEmptyValues = i.keepEmptyValues),
        delete i.keepEmptyValues,
        u
          .call(t(this.inputs), i)
          .on("changeDate", t.proxy(this.dateUpdated, this)),
        (this.pickers = t.map(this.inputs, function (e) {
          return t.data(e, "datepicker");
        })),
        this.updateDates();
    };
    d.prototype = {
      updateDates: function () {
        (this.dates = t.map(this.pickers, function (t) {
          return t.getUTCDate();
        })),
          this.updateRanges();
      },
      updateRanges: function () {
        var e = t.map(this.dates, function (t) {
          return t.valueOf();
        });
        t.each(this.pickers, function (t, i) {
          i.setRange(e);
        });
      },
      clearDates: function () {
        t.each(this.pickers, function (t, e) {
          e.clearDates();
        });
      },
      dateUpdated: function (i) {
        if (!this.updating) {
          this.updating = !0;
          var s = t.data(i.target, "datepicker");
          if (s !== e) {
            var n = s.getUTCDate(),
              o = this.keepEmptyValues,
              r = t.inArray(i.target, this.inputs),
              a = r - 1,
              h = r + 1,
              l = this.inputs.length;
            if (-1 !== r) {
              if (
                (t.each(this.pickers, function (t, e) {
                  e.getUTCDate() || (e !== s && o) || e.setUTCDate(n);
                }),
                n < this.dates[a])
              )
                for (; a >= 0 && n < this.dates[a]; )
                  this.pickers[a--].setUTCDate(n);
              else if (n > this.dates[h])
                for (; h < l && n > this.dates[h]; )
                  this.pickers[h++].setUTCDate(n);
              this.updateDates(), delete this.updating;
            }
          }
        }
      },
      destroy: function () {
        t.map(this.pickers, function (t) {
          t.destroy();
        }),
          t(this.inputs).off("changeDate", this.dateUpdated),
          delete this.element.data().datepicker;
      },
      remove: o(
        "destroy",
        "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
      ),
    };
    var p = t.fn.datepicker,
      u = function (i) {
        var s = Array.apply(null, arguments);
        s.shift();
        var n;
        if (
          (this.each(function () {
            var e = t(this),
              o = e.data("datepicker"),
              r = "object" == typeof i && i;
            if (!o) {
              var l = a(this, "date"),
                p = t.extend({}, f, l, r),
                u = h(p.language),
                g = t.extend({}, f, u, l, r);
              e.hasClass("input-daterange") || g.inputs
                ? (t.extend(g, {
                    inputs: g.inputs || e.find("input").toArray(),
                  }),
                  (o = new d(this, g)))
                : (o = new c(this, g)),
                e.data("datepicker", o);
            }
            "string" == typeof i &&
              "function" == typeof o[i] &&
              (n = o[i].apply(o, s));
          }),
          n === e || n instanceof c || n instanceof d)
        )
          return this;
        if (this.length > 1)
          throw new Error(
            "Using only allowed for the collection of a single element (" +
              i +
              " function)"
          );
        return n;
      };
    t.fn.datepicker = u;
    var f = (t.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: t.noop,
        beforeShowMonth: t.noop,
        beforeShowYear: t.noop,
        beforeShowDecade: t.noop,
        beforeShowCentury: t.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" },
        showWeekDays: !0,
      }),
      g = (t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"]);
    t.fn.datepicker.Constructor = c;
    var m = (t.fn.datepicker.dates = {
        en: {
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthsShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          today: "Today",
          clear: "Clear",
          titleFormat: "MM yyyy",
        },
      }),
      v = {
        viewModes: [
          { names: ["days", "month"], clsName: "days", e: "changeMonth" },
          {
            names: ["months", "year"],
            clsName: "months",
            e: "changeYear",
            navStep: 1,
          },
          {
            names: ["years", "decade"],
            clsName: "years",
            e: "changeDecade",
            navStep: 10,
          },
          {
            names: ["decades", "century"],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100,
          },
          {
            names: ["centuries", "millennium"],
            clsName: "centuries",
            e: "changeMillennium",
            navStep: 1e3,
          },
        ],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function (t) {
          if (
            "function" == typeof t.toValue &&
            "function" == typeof t.toDisplay
          )
            return t;
          var e = t.replace(this.validParts, "\0").split("\0"),
            i = t.match(this.validParts);
          if (!e || !e.length || !i || 0 === i.length)
            throw new Error("Invalid date format.");
          return { separators: e, parts: i };
        },
        parseDate: function (i, n, o, r) {
          function a(t, e) {
            return (
              !0 === e && (e = 10),
              t < 100 &&
                (t += 2e3) > new Date().getFullYear() + e &&
                (t -= 100),
              t
            );
          }
          function h() {
            var t = this.slice(0, l[u].length),
              e = l[u].slice(0, t.length);
            return t.toLowerCase() === e.toLowerCase();
          }
          if (!i) return e;
          if (i instanceof Date) return i;
          if (("string" == typeof n && (n = v.parseFormat(n)), n.toValue))
            return n.toValue(i, n, o);
          var l,
            d,
            p,
            u,
            f,
            g = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
            y = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" };
          if (
            (i in y && (i = y[i]),
            /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(i))
          ) {
            for (
              l = i.match(/([\-+]\d+)([dmwy])/gi), i = new Date(), u = 0;
              u < l.length;
              u++
            )
              (d = l[u].match(/([\-+]\d+)([dmwy])/i)),
                (p = Number(d[1])),
                (f = g[d[2].toLowerCase()]),
                (i = c.prototype[f](i, p));
            return c.prototype._zero_utc_time(i);
          }
          l = (i && i.match(this.nonpunctuation)) || [];
          var x,
            b,
            k = {},
            w = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
            M = {
              yyyy: function (t, e) {
                return t.setUTCFullYear(r ? a(e, r) : e);
              },
              m: function (t, e) {
                if (isNaN(t)) return t;
                for (e -= 1; e < 0; ) e += 12;
                for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e; )
                  t.setUTCDate(t.getUTCDate() - 1);
                return t;
              },
              d: function (t, e) {
                return t.setUTCDate(e);
              },
            };
          (M.yy = M.yyyy), (M.M = M.MM = M.mm = M.m), (M.dd = M.d), (i = s());
          var S = n.parts.slice();
          if (
            (l.length !== S.length &&
              (S = t(S)
                .filter(function (e, i) {
                  return -1 !== t.inArray(i, w);
                })
                .toArray()),
            l.length === S.length)
          ) {
            var T;
            for (u = 0, T = S.length; u < T; u++) {
              if (((x = parseInt(l[u], 10)), (d = S[u]), isNaN(x)))
                switch (d) {
                  case "MM":
                    (b = t(m[o].months).filter(h)),
                      (x = t.inArray(b[0], m[o].months) + 1);
                    break;
                  case "M":
                    (b = t(m[o].monthsShort).filter(h)),
                      (x = t.inArray(b[0], m[o].monthsShort) + 1);
                }
              k[d] = x;
            }
            var C, A;
            for (u = 0; u < w.length; u++)
              (A = w[u]) in k &&
                !isNaN(k[A]) &&
                ((C = new Date(i)), M[A](C, k[A]), isNaN(C) || (i = C));
          }
          return i;
        },
        formatDate: function (e, i, s) {
          if (!e) return "";
          if (("string" == typeof i && (i = v.parseFormat(i)), i.toDisplay))
            return i.toDisplay(e, i, s);
          var n = {
            d: e.getUTCDate(),
            D: m[s].daysShort[e.getUTCDay()],
            DD: m[s].days[e.getUTCDay()],
            m: e.getUTCMonth() + 1,
            M: m[s].monthsShort[e.getUTCMonth()],
            MM: m[s].months[e.getUTCMonth()],
            yy: e.getUTCFullYear().toString().substring(2),
            yyyy: e.getUTCFullYear(),
          };
          (n.dd = (n.d < 10 ? "0" : "") + n.d),
            (n.mm = (n.m < 10 ? "0" : "") + n.m),
            (e = []);
          for (
            var o = t.extend([], i.separators), r = 0, a = i.parts.length;
            r <= a;
            r++
          )
            o.length && e.push(o.shift()), e.push(n[i.parts[r]]);
          return e.join("");
        },
        headTemplate:
          '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
          f.templates.leftArrow +
          '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
          f.templates.rightArrow +
          "</th></tr></thead>",
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate:
          '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
      };
    (v.template =
      '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
      v.headTemplate +
      "<tbody></tbody>" +
      v.footTemplate +
      '</table></div><div class="datepicker-months"><table class="table-condensed">' +
      v.headTemplate +
      v.contTemplate +
      v.footTemplate +
      '</table></div><div class="datepicker-years"><table class="table-condensed">' +
      v.headTemplate +
      v.contTemplate +
      v.footTemplate +
      '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
      v.headTemplate +
      v.contTemplate +
      v.footTemplate +
      '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
      v.headTemplate +
      v.contTemplate +
      v.footTemplate +
      "</table></div></div>"),
      (t.fn.datepicker.DPGlobal = v),
      (t.fn.datepicker.noConflict = function () {
        return (t.fn.datepicker = p), this;
      }),
      (t.fn.datepicker.version = "1.9.0"),
      (t.fn.datepicker.deprecated = function (t) {
        var e = window.console;
        e && e.warn && e.warn("DEPRECATED: " + t);
      }),
      t(document).on(
        "focus.datepicker.data-api click.datepicker.data-api",
        '[data-provide="datepicker"]',
        function (e) {
          var i = t(this);
          i.data("datepicker") || (e.preventDefault(), u.call(i, "show"));
        }
      ),
      t(function () {
        u.call(t('[data-provide="datepicker-inline"]'));
      });
  }),
  (function (t, e) {
    void 0 === t && void 0 !== window && (t = window),
      "function" == typeof define && define.amd
        ? define(["jquery"], function (t) {
            return e(t);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e(require("jquery")))
        : e(t.jQuery);
  })(this, function (t) {
    !(function (t) {
      "use strict";
      function e(e, i) {
        var s = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(s, i))
          return (
            -1 === t.inArray(s, c) ||
            Boolean(e.nodeValue.match(p) || e.nodeValue.match(u))
          );
        for (
          var n = t(i).filter(function (t, e) {
              return e instanceof RegExp;
            }),
            o = 0,
            r = n.length;
          o < r;
          o++
        )
          if (s.match(n[o])) return !0;
        return !1;
      }
      function i(t, i, s) {
        if (s && "function" == typeof s) return s(t);
        for (var n = Object.keys(i), o = 0, r = t.length; o < r; o++)
          for (
            var a = t[o].querySelectorAll("*"), h = 0, l = a.length;
            h < l;
            h++
          ) {
            var c = a[h],
              d = c.nodeName.toLowerCase();
            if (-1 !== n.indexOf(d))
              for (
                var p = [].slice.call(c.attributes),
                  u = [].concat(i["*"] || [], i[d] || []),
                  f = 0,
                  g = p.length;
                f < g;
                f++
              ) {
                var m = p[f];
                e(m, u) || c.removeAttribute(m.nodeName);
              }
            else c.parentNode.removeChild(c);
          }
      }
      function s(t, e) {
        for (
          var i, s = [], n = e || t.selectedOptions, o = 0, r = n.length;
          o < r;
          o++
        )
          (i = n[o]).disabled ||
            ("OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled) ||
            s.push(i.value || i.text);
        return t.multiple ? s : s.length ? s[0] : null;
      }
      function n(t, e, i, s) {
        for (
          var n = ["display", "subtext", "tokens"], o = !1, r = 0;
          r < n.length;
          r++
        ) {
          var h = n[r],
            l = t[h];
          if (
            l &&
            ((l = l.toString()),
            "display" === h && (l = l.replace(/<[^>]+>/g, "")),
            s && (l = a(l)),
            (l = l.toUpperCase()),
            (o = "contains" === i ? 0 <= l.indexOf(e) : l.startsWith(e)))
          )
            break;
        }
        return o;
      }
      function o(t) {
        return parseInt(t, 10) || 0;
      }
      function r(t) {
        return E[t];
      }
      function a(t) {
        return (t = t.toString()) && t.replace(O, r).replace(L, "");
      }
      function h(e) {
        var i,
          s = arguments,
          n = e;
        if (([].shift.apply(s), !z.success)) {
          try {
            z.full = (t.fn.dropdown.Constructor.VERSION || "")
              .split(" ")[0]
              .split(".");
          } catch (e) {
            $.BootstrapVersion
              ? (z.full = $.BootstrapVersion.split(" ")[0].split("."))
              : ((z.full = [z.major, "0", "0"]),
                console.warn(
                  "There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",
                  e
                ));
          }
          (z.major = z.full[0]), (z.success = !0);
        }
        if ("4" === z.major) {
          var o = [];
          $.DEFAULTS.style === B.BUTTONCLASS &&
            o.push({ name: "style", className: "BUTTONCLASS" }),
            $.DEFAULTS.iconBase === B.ICONBASE &&
              o.push({ name: "iconBase", className: "ICONBASE" }),
            $.DEFAULTS.tickIcon === B.TICKICON &&
              o.push({ name: "tickIcon", className: "TICKICON" }),
            (B.DIVIDER = "dropdown-divider"),
            (B.SHOW = "show"),
            (B.BUTTONCLASS = "btn-light"),
            (B.POPOVERHEADER = "popover-header"),
            (B.ICONBASE = ""),
            (B.TICKICON = "bs-ok-default");
          for (var r = 0; r < o.length; r++)
            (e = o[r]), ($.DEFAULTS[e.name] = B[e.className]);
        }
        var a = this.each(function () {
          var e = t(this);
          if (e.is("select")) {
            var o = e.data("selectpicker"),
              r = "object" == typeof n && n;
            if (o) {
              if (r)
                for (var a in r) r.hasOwnProperty(a) && (o.options[a] = r[a]);
            } else {
              var h = e.data();
              for (var c in h)
                h.hasOwnProperty(c) && -1 !== t.inArray(c, l) && delete h[c];
              var d = t.extend(
                {},
                $.DEFAULTS,
                t.fn.selectpicker.defaults || {},
                h,
                r
              );
              (d.template = t.extend(
                {},
                $.DEFAULTS.template,
                t.fn.selectpicker.defaults
                  ? t.fn.selectpicker.defaults.template
                  : {},
                h.template,
                r.template
              )),
                e.data("selectpicker", (o = new $(this, d)));
            }
            "string" == typeof n &&
              (i = o[n] instanceof Function ? o[n].apply(o, s) : o.options[n]);
          }
        });
        return void 0 !== i ? i : a;
      }
      var l = ["sanitize", "whiteList", "sanitizeFn"],
        c = [
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ],
        d = {
          "*": [
            "class",
            "dir",
            "id",
            "lang",
            "role",
            "tabindex",
            "style",
            /^aria-[\w-]*$/i,
          ],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        p = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        u =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      "classList" in document.createElement("_") ||
        (function (e) {
          if ("Element" in e) {
            var i = "classList",
              s = "prototype",
              n = e.Element[s],
              o = Object,
              r = function () {
                var e = t(this);
                return {
                  add: function (t) {
                    return (
                      (t = Array.prototype.slice.call(arguments).join(" ")),
                      e.addClass(t)
                    );
                  },
                  remove: function (t) {
                    return (
                      (t = Array.prototype.slice.call(arguments).join(" ")),
                      e.removeClass(t)
                    );
                  },
                  toggle: function (t, i) {
                    return e.toggleClass(t, i);
                  },
                  contains: function (t) {
                    return e.hasClass(t);
                  },
                };
              };
            if (o.defineProperty) {
              var a = { get: r, enumerable: !0, configurable: !0 };
              try {
                o.defineProperty(n, i, a);
              } catch (e) {
                (void 0 !== e.number && -2146823252 !== e.number) ||
                  ((a.enumerable = !1), o.defineProperty(n, i, a));
              }
            } else o[s].__defineGetter__ && n.__defineGetter__(i, r);
          }
        })(window);
      var f,
        g,
        m,
        v = document.createElement("_");
      if ((v.classList.add("c1", "c2"), !v.classList.contains("c2"))) {
        var y = DOMTokenList.prototype.add,
          x = DOMTokenList.prototype.remove;
        (DOMTokenList.prototype.add = function () {
          Array.prototype.forEach.call(arguments, y.bind(this));
        }),
          (DOMTokenList.prototype.remove = function () {
            Array.prototype.forEach.call(arguments, x.bind(this));
          });
      }
      if ((v.classList.toggle("c3", !1), v.classList.contains("c3"))) {
        var b = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function (t, e) {
          return 1 in arguments && !this.contains(t) == !e
            ? e
            : b.call(this, t);
        };
      }
      (v = null),
        String.prototype.startsWith ||
          ((f = (function () {
            try {
              var t = {},
                e = Object.defineProperty,
                i = e(t, t, t) && e;
            } catch (t) {}
            return i;
          })()),
          (g = {}.toString),
          (m = function (t) {
            if (null == this) throw new TypeError();
            var e = String(this);
            if (t && "[object RegExp]" == g.call(t)) throw new TypeError();
            var i = e.length,
              s = String(t),
              n = s.length,
              o = 1 < arguments.length ? arguments[1] : void 0,
              r = o ? Number(o) : 0;
            r != r && (r = 0);
            var a = Math.min(Math.max(r, 0), i);
            if (i < n + a) return !1;
            for (var h = -1; ++h < n; )
              if (e.charCodeAt(a + h) != s.charCodeAt(h)) return !1;
            return !0;
          }),
          f
            ? f(String.prototype, "startsWith", {
                value: m,
                configurable: !0,
                writable: !0,
              })
            : (String.prototype.startsWith = m)),
        Object.keys ||
          (Object.keys = function (t, e, i) {
            for (e in ((i = []), t)) i.hasOwnProperty.call(t, e) && i.push(e);
            return i;
          }),
        HTMLSelectElement &&
          !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") &&
          Object.defineProperty(
            HTMLSelectElement.prototype,
            "selectedOptions",
            {
              get: function () {
                return this.querySelectorAll(":checked");
              },
            }
          );
      var k = { useDefault: !1, _set: t.valHooks.select.set };
      t.valHooks.select.set = function (e, i) {
        return (
          i && !k.useDefault && t(e).data("selected", !0),
          k._set.apply(this, arguments)
        );
      };
      var w = null,
        M = (function () {
          try {
            return new Event("change"), !0;
          } catch (t) {
            return !1;
          }
        })();
      t.fn.triggerNative = function (t) {
        var e,
          i = this[0];
        i.dispatchEvent
          ? (M
              ? (e = new Event(t, { bubbles: !0 }))
              : (e = document.createEvent("Event")).initEvent(t, !0, !1),
            i.dispatchEvent(e))
          : i.fireEvent
          ? (((e = document.createEventObject()).eventType = t),
            i.fireEvent("on" + t, e))
          : this.trigger(t);
      };
      var S,
        T,
        C,
        A,
        D,
        E = {
          "Ã€": "A",
          "Ã": "A",
          "Ã‚": "A",
          Ãƒ: "A",
          "Ã„": "A",
          "Ã…": "A",
          "Ã ": "a",
          "Ã¡": "a",
          "Ã¢": "a",
          "Ã£": "a",
          "Ã¤": "a",
          "Ã¥": "a",
          "Ã‡": "C",
          "Ã§": "c",
          "Ã": "D",
          "Ã°": "d",
          Ãˆ: "E",
          "Ã‰": "E",
          ÃŠ: "E",
          "Ã‹": "E",
          "Ã¨": "e",
          "Ã©": "e",
          Ãª: "e",
          "Ã«": "e",
          ÃŒ: "I",
          "Ã": "I",
          ÃŽ: "I",
          "Ã": "I",
          "Ã¬": "i",
          "Ã­": "i",
          "Ã®": "i",
          "Ã¯": "i",
          "Ã‘": "N",
          "Ã±": "n",
          "Ã’": "O",
          "Ã“": "O",
          "Ã”": "O",
          "Ã•": "O",
          "Ã–": "O",
          "Ã˜": "O",
          "Ã²": "o",
          "Ã³": "o",
          "Ã´": "o",
          Ãµ: "o",
          "Ã¶": "o",
          "Ã¸": "o",
          "Ã™": "U",
          Ãš: "U",
          "Ã›": "U",
          Ãœ: "U",
          "Ã¹": "u",
          Ãº: "u",
          "Ã»": "u",
          "Ã¼": "u",
          "Ã": "Y",
          "Ã½": "y",
          "Ã¿": "y",
          "Ã†": "Ae",
          "Ã¦": "ae",
          Ãž: "Th",
          "Ã¾": "th",
          ÃŸ: "ss",
          "Ä€": "A",
          "Ä‚": "A",
          "Ä„": "A",
          "Ä": "a",
          Äƒ: "a",
          "Ä…": "a",
          "Ä†": "C",
          Äˆ: "C",
          ÄŠ: "C",
          ÄŒ: "C",
          "Ä‡": "c",
          "Ä‰": "c",
          "Ä‹": "c",
          "Ä": "c",
          ÄŽ: "D",
          "Ä": "D",
          "Ä": "d",
          "Ä‘": "d",
          "Ä’": "E",
          "Ä”": "E",
          "Ä–": "E",
          "Ä˜": "E",
          Äš: "E",
          "Ä“": "e",
          "Ä•": "e",
          "Ä—": "e",
          "Ä™": "e",
          "Ä›": "e",
          Äœ: "G",
          Äž: "G",
          "Ä ": "G",
          "Ä¢": "G",
          "Ä": "g",
          ÄŸ: "g",
          "Ä¡": "g",
          "Ä£": "g",
          "Ä¤": "H",
          "Ä¦": "H",
          "Ä¥": "h",
          "Ä§": "h",
          "Ä¨": "I",
          Äª: "I",
          "Ä¬": "I",
          "Ä®": "I",
          "Ä°": "I",
          "Ä©": "i",
          "Ä«": "i",
          "Ä­": "i",
          "Ä¯": "i",
          "Ä±": "i",
          "Ä´": "J",
          Äµ: "j",
          "Ä¶": "K",
          "Ä·": "k",
          "Ä¸": "k",
          "Ä¹": "L",
          "Ä»": "L",
          "Ä½": "L",
          "Ä¿": "L",
          "Å": "L",
          Äº: "l",
          "Ä¼": "l",
          "Ä¾": "l",
          "Å€": "l",
          "Å‚": "l",
          Åƒ: "N",
          "Å…": "N",
          "Å‡": "N",
          ÅŠ: "N",
          "Å„": "n",
          "Å†": "n",
          Åˆ: "n",
          "Å‹": "n",
          ÅŒ: "O",
          ÅŽ: "O",
          "Å": "O",
          "Å": "o",
          "Å": "o",
          "Å‘": "o",
          "Å”": "R",
          "Å–": "R",
          "Å˜": "R",
          "Å•": "r",
          "Å—": "r",
          "Å™": "r",
          Åš: "S",
          Åœ: "S",
          Åž: "S",
          "Å ": "S",
          "Å›": "s",
          "Å": "s",
          ÅŸ: "s",
          "Å¡": "s",
          "Å¢": "T",
          "Å¤": "T",
          "Å¦": "T",
          "Å£": "t",
          "Å¥": "t",
          "Å§": "t",
          "Å¨": "U",
          Åª: "U",
          "Å¬": "U",
          "Å®": "U",
          "Å°": "U",
          "Å²": "U",
          "Å©": "u",
          "Å«": "u",
          "Å­": "u",
          "Å¯": "u",
          "Å±": "u",
          "Å³": "u",
          "Å´": "W",
          Åµ: "w",
          "Å¶": "Y",
          "Å·": "y",
          "Å¸": "Y",
          "Å¹": "Z",
          "Å»": "Z",
          "Å½": "Z",
          Åº: "z",
          "Å¼": "z",
          "Å¾": "z",
          "Ä²": "IJ",
          "Ä³": "ij",
          "Å’": "Oe",
          "Å“": "oe",
          "Å‰": "'n",
          "Å¿": "s",
        },
        O = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        L = RegExp(
          "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]",
          "g"
        ),
        P =
          ((S = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
          }),
          (T = function (t) {
            return S[t];
          }),
          (C = "(?:" + Object.keys(S).join("|") + ")"),
          (A = RegExp(C)),
          (D = RegExp(C, "g")),
          function (t) {
            return (
              (t = null == t ? "" : "" + t), A.test(t) ? t.replace(D, T) : t
            );
          }),
        I = {
          32: " ",
          48: "0",
          49: "1",
          50: "2",
          51: "3",
          52: "4",
          53: "5",
          54: "6",
          55: "7",
          56: "8",
          57: "9",
          59: ";",
          65: "A",
          66: "B",
          67: "C",
          68: "D",
          69: "E",
          70: "F",
          71: "G",
          72: "H",
          73: "I",
          74: "J",
          75: "K",
          76: "L",
          77: "M",
          78: "N",
          79: "O",
          80: "P",
          81: "Q",
          82: "R",
          83: "S",
          84: "T",
          85: "U",
          86: "V",
          87: "W",
          88: "X",
          89: "Y",
          90: "Z",
          96: "0",
          97: "1",
          98: "2",
          99: "3",
          100: "4",
          101: "5",
          102: "6",
          103: "7",
          104: "8",
          105: "9",
        },
        z = { success: !1, major: "3" };
      try {
        (z.full = (t.fn.dropdown.Constructor.VERSION || "")
          .split(" ")[0]
          .split(".")),
          (z.major = z.full[0]),
          (z.success = !0);
      } catch (d) {}
      var N = 0,
        H = ".bs.select",
        B = {
          DISABLED: "disabled",
          DIVIDER: "divider",
          SHOW: "open",
          DROPUP: "dropup",
          MENU: "dropdown-menu",
          MENURIGHT: "dropdown-menu-right",
          MENULEFT: "dropdown-menu-left",
          BUTTONCLASS: "btn-default",
          POPOVERHEADER: "popover-title",
          ICONBASE: "glyphicon",
          TICKICON: "glyphicon-ok",
        },
        W = { MENU: "." + B.MENU },
        R = {
          span: document.createElement("span"),
          i: document.createElement("i"),
          subtext: document.createElement("small"),
          a: document.createElement("a"),
          li: document.createElement("li"),
          whitespace: document.createTextNode("Â "),
          fragment: document.createDocumentFragment(),
        };
      R.a.setAttribute("role", "option"),
        (R.subtext.className = "text-muted"),
        (R.text = R.span.cloneNode(!1)),
        (R.text.className = "text"),
        (R.checkMark = R.span.cloneNode(!1));
      var j = new RegExp("38|40"),
        _ = new RegExp("^9$|27"),
        F = function (t, e, i) {
          var s = R.li.cloneNode(!1);
          return (
            t &&
              (1 === t.nodeType || 11 === t.nodeType
                ? s.appendChild(t)
                : (s.innerHTML = t)),
            void 0 !== e && "" !== e && (s.className = e),
            null != i && s.classList.add("optgroup-" + i),
            s
          );
        },
        G = function (t, e, i) {
          var s = R.a.cloneNode(!0);
          return (
            t &&
              (11 === t.nodeType
                ? s.appendChild(t)
                : s.insertAdjacentHTML("beforeend", t)),
            void 0 !== e && "" !== e && (s.className = e),
            "4" === z.major && s.classList.add("dropdown-item"),
            i && s.setAttribute("style", i),
            s
          );
        },
        U = function (t, e) {
          var i,
            s,
            n = R.text.cloneNode(!1);
          if (t.content) n.innerHTML = t.content;
          else {
            if (((n.textContent = t.text), t.icon)) {
              var o = R.whitespace.cloneNode(!1);
              ((s = (!0 === e ? R.i : R.span).cloneNode(!1)).className =
                t.iconBase + " " + t.icon),
                R.fragment.appendChild(s),
                R.fragment.appendChild(o);
            }
            t.subtext &&
              (((i = R.subtext.cloneNode(!1)).textContent = t.subtext),
              n.appendChild(i));
          }
          if (!0 === e)
            for (; 0 < n.childNodes.length; )
              R.fragment.appendChild(n.childNodes[0]);
          else R.fragment.appendChild(n);
          return R.fragment;
        },
        Y = function (t) {
          var e,
            i,
            s = R.text.cloneNode(!1);
          if (((s.innerHTML = t.label), t.icon)) {
            var n = R.whitespace.cloneNode(!1);
            ((i = R.span.cloneNode(!1)).className = t.iconBase + " " + t.icon),
              R.fragment.appendChild(i),
              R.fragment.appendChild(n);
          }
          return (
            t.subtext &&
              (((e = R.subtext.cloneNode(!1)).textContent = t.subtext),
              s.appendChild(e)),
            R.fragment.appendChild(s),
            R.fragment
          );
        },
        $ = function (e, i) {
          var s = this;
          k.useDefault ||
            ((t.valHooks.select.set = k._set), (k.useDefault = !0)),
            (this.$element = t(e)),
            (this.$newElement = null),
            (this.$button = null),
            (this.$menu = null),
            (this.options = i),
            (this.selectpicker = {
              main: {},
              search: {},
              current: {},
              view: {},
              keydown: {
                keyHistory: "",
                resetKeyHistory: {
                  start: function () {
                    return setTimeout(function () {
                      s.selectpicker.keydown.keyHistory = "";
                    }, 800);
                  },
                },
              },
            }),
            null === this.options.title &&
              (this.options.title = this.$element.attr("title"));
          var n = this.options.windowPadding;
          "number" == typeof n && (this.options.windowPadding = [n, n, n, n]),
            (this.val = $.prototype.val),
            (this.render = $.prototype.render),
            (this.refresh = $.prototype.refresh),
            (this.setStyle = $.prototype.setStyle),
            (this.selectAll = $.prototype.selectAll),
            (this.deselectAll = $.prototype.deselectAll),
            (this.destroy = $.prototype.destroy),
            (this.remove = $.prototype.remove),
            (this.show = $.prototype.show),
            (this.hide = $.prototype.hide),
            this.init();
        };
      ($.VERSION = "1.13.10"),
        ($.DEFAULTS = {
          noneSelectedText: "Nothing selected",
          noneResultsText: "No results matched {0}",
          countSelectedText: function (t, e) {
            return 1 == t ? "{0} item selected" : "{0} items selected";
          },
          maxOptionsText: function (t, e) {
            return [
              1 == t
                ? "Limit reached ({n} item max)"
                : "Limit reached ({n} items max)",
              1 == e
                ? "Group limit reached ({n} item max)"
                : "Group limit reached ({n} items max)",
            ];
          },
          selectAllText: "Select All",
          deselectAllText: "Deselect All",
          doneButton: !1,
          doneButtonText: "Close",
          multipleSeparator: ", ",
          styleBase: "btn",
          style: B.BUTTONCLASS,
          size: "auto",
          title: null,
          selectedTextFormat: "values",
          width: !1,
          container: !1,
          hideDisabled: !1,
          showSubtext: !1,
          showIcon: !0,
          showContent: !0,
          dropupAuto: !0,
          header: !1,
          liveSearch: !1,
          liveSearchPlaceholder: null,
          liveSearchNormalize: !1,
          liveSearchStyle: "contains",
          actionsBox: !1,
          iconBase: B.ICONBASE,
          tickIcon: B.TICKICON,
          showTick: !1,
          template: { caret: '<span class="caret"></span>' },
          maxOptions: !1,
          mobile: !1,
          selectOnTab: !1,
          dropdownAlignRight: !1,
          windowPadding: 0,
          virtualScroll: 600,
          display: !1,
          sanitize: !0,
          sanitizeFn: null,
          whiteList: d,
        }),
        ($.prototype = {
          constructor: $,
          init: function () {
            var t = this,
              e = this.$element.attr("id");
            N++,
              (this.selectId = "bs-select-" + N),
              this.$element[0].classList.add("bs-select-hidden"),
              (this.multiple = this.$element.prop("multiple")),
              (this.autofocus = this.$element.prop("autofocus")),
              this.$element[0].classList.contains("show-tick") &&
                (this.options.showTick = !0),
              (this.$newElement = this.createDropdown()),
              this.$element.after(this.$newElement).prependTo(this.$newElement),
              (this.$button = this.$newElement.children("button")),
              (this.$menu = this.$newElement.children(W.MENU)),
              (this.$menuInner = this.$menu.children(".inner")),
              (this.$searchbox = this.$menu.find("input")),
              this.$element[0].classList.remove("bs-select-hidden"),
              !0 === this.options.dropdownAlignRight &&
                this.$menu[0].classList.add(B.MENURIGHT),
              void 0 !== e && this.$button.attr("data-id", e),
              this.checkDisabled(),
              this.clickListener(),
              this.options.liveSearch
                ? (this.liveSearchListener(),
                  (this.focusedParent = this.$searchbox[0]))
                : (this.focusedParent = this.$menuInner[0]),
              this.setStyle(),
              this.render(),
              this.setWidth(),
              this.options.container
                ? this.selectPosition()
                : this.$element.on("hide" + H, function () {
                    if (t.isVirtual()) {
                      var e = t.$menuInner[0],
                        i = e.firstChild.cloneNode(!1);
                      e.replaceChild(i, e.firstChild), (e.scrollTop = 0);
                    }
                  }),
              this.$menu.data("this", this),
              this.$newElement.data("this", this),
              this.options.mobile && this.mobile(),
              this.$newElement.on({
                "hide.bs.dropdown": function (e) {
                  t.$element.trigger("hide" + H, e);
                },
                "hidden.bs.dropdown": function (e) {
                  t.$element.trigger("hidden" + H, e);
                },
                "show.bs.dropdown": function (e) {
                  t.$element.trigger("show" + H, e);
                },
                "shown.bs.dropdown": function (e) {
                  t.$element.trigger("shown" + H, e);
                },
              }),
              t.$element[0].hasAttribute("required") &&
                this.$element.on("invalid" + H, function () {
                  t.$button[0].classList.add("bs-invalid"),
                    t.$element
                      .on("shown" + H + ".invalid", function () {
                        t.$element
                          .val(t.$element.val())
                          .off("shown" + H + ".invalid");
                      })
                      .on("rendered" + H, function () {
                        this.validity.valid &&
                          t.$button[0].classList.remove("bs-invalid"),
                          t.$element.off("rendered" + H);
                      }),
                    t.$button.on("blur" + H, function () {
                      t.$element.trigger("focus").trigger("blur"),
                        t.$button.off("blur" + H);
                    });
                }),
              setTimeout(function () {
                t.createLi(), t.$element.trigger("loaded" + H);
              });
          },
          createDropdown: function () {
            var e = this.multiple || this.options.showTick ? " show-tick" : "",
              i = this.multiple ? ' aria-multiselectable="true"' : "",
              s = "",
              n = this.autofocus ? " autofocus" : "";
            z.major < 4 &&
              this.$element.parent().hasClass("input-group") &&
              (s = " input-group-btn");
            var o,
              r = "",
              a = "",
              h = "",
              l = "";
            return (
              this.options.header &&
                (r =
                  '<div class="' +
                  B.POPOVERHEADER +
                  '"><button type="button" class="close" aria-hidden="true">&times;</button>' +
                  this.options.header +
                  "</div>"),
              this.options.liveSearch &&
                (a =
                  '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' +
                  (null === this.options.liveSearchPlaceholder
                    ? ""
                    : ' placeholder="' +
                      P(this.options.liveSearchPlaceholder) +
                      '"') +
                  ' role="combobox" aria-label="Search" aria-controls="' +
                  this.selectId +
                  '" aria-autocomplete="list"></div>'),
              this.multiple &&
                this.options.actionsBox &&
                (h =
                  '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' +
                  B.BUTTONCLASS +
                  '">' +
                  this.options.selectAllText +
                  '</button><button type="button" class="actions-btn bs-deselect-all btn ' +
                  B.BUTTONCLASS +
                  '">' +
                  this.options.deselectAllText +
                  "</button></div></div>"),
              this.multiple &&
                this.options.doneButton &&
                (l =
                  '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' +
                  B.BUTTONCLASS +
                  '">' +
                  this.options.doneButtonText +
                  "</button></div></div>"),
              (o =
                '<div class="dropdown bootstrap-select' +
                e +
                s +
                '"><button type="button" class="' +
                this.options.styleBase +
                ' dropdown-toggle" ' +
                ("static" === this.options.display
                  ? 'data-display="static"'
                  : "") +
                'data-toggle="dropdown"' +
                n +
                ' role="combobox" aria-owns="' +
                this.selectId +
                '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' +
                ("4" === z.major
                  ? ""
                  : '<span class="bs-caret">' +
                    this.options.template.caret +
                    "</span>") +
                '</button><div class="' +
                B.MENU +
                " " +
                ("4" === z.major ? "" : B.SHOW) +
                '">' +
                r +
                a +
                h +
                '<div class="inner ' +
                B.SHOW +
                '" role="listbox" id="' +
                this.selectId +
                '" tabindex="-1" ' +
                i +
                '><ul class="' +
                B.MENU +
                " inner " +
                ("4" === z.major ? B.SHOW : "") +
                '" role="presentation"></ul></div>' +
                l +
                "</div></div>"),
              t(o)
            );
          },
          setPositionData: function () {
            this.selectpicker.view.canHighlight = [];
            for (
              var t = (this.selectpicker.view.size = 0);
              t < this.selectpicker.current.data.length;
              t++
            ) {
              var e = this.selectpicker.current.data[t],
                i = !0;
              "divider" === e.type
                ? ((i = !1), (e.height = this.sizeInfo.dividerHeight))
                : "optgroup-label" === e.type
                ? ((i = !1), (e.height = this.sizeInfo.dropdownHeaderHeight))
                : (e.height = this.sizeInfo.liHeight),
                e.disabled && (i = !1),
                this.selectpicker.view.canHighlight.push(i),
                i &&
                  (this.selectpicker.view.size++,
                  (e.posinset = this.selectpicker.view.size)),
                (e.position =
                  (0 === t
                    ? 0
                    : this.selectpicker.current.data[t - 1].position) +
                  e.height);
            }
          },
          isVirtual: function () {
            return (
              (!1 !== this.options.virtualScroll &&
                this.selectpicker.main.elements.length >=
                  this.options.virtualScroll) ||
              !0 === this.options.virtualScroll
            );
          },
          createView: function (e, s, n) {
            function o(t, s) {
              var n,
                o,
                l,
                d,
                p,
                u,
                f,
                g,
                m,
                v,
                y = h.selectpicker.current.elements.length,
                x = [],
                b = !0,
                k = h.isVirtual();
              (h.selectpicker.view.scrollTop = t),
                !0 === k &&
                  h.sizeInfo.hasScrollBar &&
                  h.$menu[0].offsetWidth > h.sizeInfo.totalMenuWidth &&
                  ((h.sizeInfo.menuWidth = h.$menu[0].offsetWidth),
                  (h.sizeInfo.totalMenuWidth =
                    h.sizeInfo.menuWidth + h.sizeInfo.scrollBarWidth),
                  h.$menu.css("min-width", h.sizeInfo.menuWidth)),
                (n = Math.ceil(
                  (h.sizeInfo.menuInnerHeight / h.sizeInfo.liHeight) * 1.5
                )),
                (o = Math.round(y / n) || 1);
              for (var w = 0; w < o; w++) {
                var M = (w + 1) * n;
                if (
                  (w === o - 1 && (M = y),
                  (x[w] = [w * n + (w ? 1 : 0), M]),
                  !y)
                )
                  break;
                void 0 === p &&
                  t <=
                    h.selectpicker.current.data[M - 1].position -
                      h.sizeInfo.menuInnerHeight &&
                  (p = w);
              }
              if (
                (void 0 === p && (p = 0),
                (u = [
                  h.selectpicker.view.position0,
                  h.selectpicker.view.position1,
                ]),
                (l = Math.max(0, p - 1)),
                (d = Math.min(o - 1, p + 1)),
                (h.selectpicker.view.position0 =
                  !1 === k ? 0 : Math.max(0, x[l][0]) || 0),
                (h.selectpicker.view.position1 =
                  !1 === k ? y : Math.min(y, x[d][1]) || 0),
                (f =
                  u[0] !== h.selectpicker.view.position0 ||
                  u[1] !== h.selectpicker.view.position1),
                void 0 !== h.activeIndex &&
                  ((a = h.selectpicker.main.elements[h.prevActiveIndex]),
                  (c = h.selectpicker.main.elements[h.activeIndex]),
                  (r = h.selectpicker.main.elements[h.selectedIndex]),
                  s &&
                    (h.activeIndex !== h.selectedIndex && h.defocusItem(c),
                    (h.activeIndex = void 0)),
                  h.activeIndex &&
                    h.activeIndex !== h.selectedIndex &&
                    h.defocusItem(r)),
                void 0 !== h.prevActiveIndex &&
                  h.prevActiveIndex !== h.activeIndex &&
                  h.prevActiveIndex !== h.selectedIndex &&
                  h.defocusItem(a),
                (s || f) &&
                  ((g = h.selectpicker.view.visibleElements
                    ? h.selectpicker.view.visibleElements.slice()
                    : []),
                  (h.selectpicker.view.visibleElements =
                    !1 === k
                      ? h.selectpicker.current.elements
                      : h.selectpicker.current.elements.slice(
                          h.selectpicker.view.position0,
                          h.selectpicker.view.position1
                        )),
                  h.setOptionStatus(),
                  (e || (!1 === k && s)) &&
                    ((m = g),
                    (v = h.selectpicker.view.visibleElements),
                    (b = !(
                      m.length === v.length &&
                      m.every(function (t, e) {
                        return t === v[e];
                      })
                    ))),
                  (s || !0 === k) && b))
              ) {
                var S,
                  T,
                  C = h.$menuInner[0],
                  A = document.createDocumentFragment(),
                  D = C.firstChild.cloneNode(!1),
                  E = h.selectpicker.view.visibleElements,
                  O = [];
                C.replaceChild(D, C.firstChild), (w = 0);
                for (var L = E.length; w < L; w++) {
                  var P,
                    I,
                    z = E[w];
                  h.options.sanitize &&
                    (P = z.lastChild) &&
                    (I =
                      h.selectpicker.current.data[
                        w + h.selectpicker.view.position0
                      ]) &&
                    I.content &&
                    !I.sanitized &&
                    (O.push(P), (I.sanitized = !0)),
                    A.appendChild(z);
                }
                h.options.sanitize &&
                  O.length &&
                  i(O, h.options.whiteList, h.options.sanitizeFn),
                  (C.firstChild.style.marginBottom =
                    !0 === k
                      ? ((S =
                          0 === h.selectpicker.view.position0
                            ? 0
                            : h.selectpicker.current.data[
                                h.selectpicker.view.position0 - 1
                              ].position),
                        (T =
                          h.selectpicker.view.position1 > y - 1
                            ? 0
                            : h.selectpicker.current.data[y - 1].position -
                              h.selectpicker.current.data[
                                h.selectpicker.view.position1 - 1
                              ].position),
                        (C.firstChild.style.marginTop = S + "px"),
                        T + "px")
                      : (C.firstChild.style.marginTop = 0)),
                  C.firstChild.appendChild(A);
              }
              if (((h.prevActiveIndex = h.activeIndex), h.options.liveSearch)) {
                if (e && s) {
                  var N,
                    H = 0;
                  h.selectpicker.view.canHighlight[H] ||
                    (H =
                      1 +
                      h.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                    (N = h.selectpicker.view.visibleElements[H]),
                    h.defocusItem(h.selectpicker.view.currentActive),
                    (h.activeIndex = (
                      h.selectpicker.current.data[H] || {}
                    ).index),
                    h.focusItem(N);
                }
              } else h.$menuInner.trigger("focus");
            }
            var r,
              a,
              h = this,
              l = 0,
              c = [];
            if (
              ((this.selectpicker.current = e
                ? this.selectpicker.search
                : this.selectpicker.main),
              this.setPositionData(),
              s)
            )
              if (n) l = this.$menuInner[0].scrollTop;
              else if (!h.multiple) {
                var d = h.$element[0],
                  p = (d.options[d.selectedIndex] || {}).liIndex;
                if ("number" == typeof p && !1 !== h.options.size) {
                  var u = h.selectpicker.main.data[p],
                    f = u && u.position;
                  f &&
                    (l =
                      f -
                      (h.sizeInfo.menuInnerHeight + h.sizeInfo.liHeight) / 2);
                }
              }
            o(l, !0),
              this.$menuInner
                .off("scroll.createView")
                .on("scroll.createView", function (t, e) {
                  h.noScroll || o(this.scrollTop, e), (h.noScroll = !1);
                }),
              t(window)
                .off("resize" + H + "." + this.selectId + ".createView")
                .on(
                  "resize" + H + "." + this.selectId + ".createView",
                  function () {
                    h.$newElement.hasClass(B.SHOW) &&
                      o(h.$menuInner[0].scrollTop);
                  }
                );
          },
          focusItem: function (t, e, i) {
            if (t) {
              e = e || this.selectpicker.main.data[this.activeIndex];
              var s = t.firstChild;
              s &&
                (s.setAttribute("aria-setsize", this.selectpicker.view.size),
                s.setAttribute("aria-posinset", e.posinset),
                !0 !== i &&
                  (this.focusedParent.setAttribute(
                    "aria-activedescendant",
                    s.id
                  ),
                  t.classList.add("active"),
                  s.classList.add("active")));
            }
          },
          defocusItem: function (t) {
            t &&
              (t.classList.remove("active"),
              t.firstChild && t.firstChild.classList.remove("active"));
          },
          setPlaceholder: function () {
            var e = !1;
            if (this.options.title && !this.multiple) {
              this.selectpicker.view.titleOption ||
                (this.selectpicker.view.titleOption =
                  document.createElement("option")),
                (e = !0);
              var i = this.$element[0],
                s = !1,
                n = !this.selectpicker.view.titleOption.parentNode;
              n &&
                ((this.selectpicker.view.titleOption.className =
                  "bs-title-option"),
                (this.selectpicker.view.titleOption.value = ""),
                (s =
                  void 0 === t(i.options[i.selectedIndex]).attr("selected") &&
                  void 0 === this.$element.data("selected"))),
                (n || 0 !== this.selectpicker.view.titleOption.index) &&
                  i.insertBefore(
                    this.selectpicker.view.titleOption,
                    i.firstChild
                  ),
                s && (i.selectedIndex = 0);
            }
            return e;
          },
          createLi: function () {
            function t(t) {
              var e = r[r.length - 1];
              (e && "divider" === e.type && (e.optID || t.optID)) ||
                (((t = t || {}).type = "divider"),
                o.push(F(!1, B.DIVIDER, t.optID ? t.optID + "div" : void 0)),
                r.push(t));
            }
            function e(e, n) {
              if (
                (((n = n || {}).divider =
                  "true" === e.getAttribute("data-divider")),
                n.divider)
              )
                t({ optID: n.optID });
              else {
                var h = r.length,
                  l = e.style.cssText,
                  c = l ? P(l) : "",
                  d = (e.className || "") + (n.optgroupClass || "");
                n.optID && (d = "opt " + d),
                  (n.text = e.textContent),
                  (n.content = e.getAttribute("data-content")),
                  (n.tokens = e.getAttribute("data-tokens")),
                  (n.subtext = e.getAttribute("data-subtext")),
                  (n.icon = e.getAttribute("data-icon")),
                  (n.iconBase = s);
                var p = U(n),
                  u = F(G(p, d, c), "", n.optID);
                u.firstChild && (u.firstChild.id = i.selectId + "-" + h),
                  o.push(u),
                  (e.liIndex = h),
                  (n.display = n.content || n.text),
                  (n.type = "option"),
                  (n.index = h),
                  (n.option = e),
                  (n.disabled = n.disabled || e.disabled),
                  r.push(n);
                var f = 0;
                n.display && (f += n.display.length),
                  n.subtext && (f += n.subtext.length),
                  n.icon && (f += 1),
                  a < f &&
                    ((a = f),
                    (i.selectpicker.view.widestOption = o[o.length - 1]));
              }
            }
            var i = this,
              s = this.options.iconBase,
              n = ':not([hidden]):not([data-hidden="true"])',
              o = [],
              r = [],
              a = 0,
              h = 0,
              l = this.setPlaceholder() ? 1 : 0;
            this.options.hideDisabled && (n += ":not(:disabled)"),
              (!i.options.showTick && !i.multiple) ||
                R.checkMark.parentNode ||
                ((R.checkMark.className =
                  s + " " + i.options.tickIcon + " check-mark"),
                R.a.appendChild(R.checkMark));
            for (
              var c = this.$element[0].querySelectorAll("select > *" + n),
                d = c.length;
              l < d;
              l++
            ) {
              var p = c[l];
              "OPTGROUP" !== p.tagName
                ? e(p, {})
                : (function (i, a) {
                    var l = a[i],
                      c = a[i - 1],
                      d = a[i + 1],
                      p = l.querySelectorAll("option" + n);
                    if (p.length) {
                      var u,
                        f,
                        g = {
                          label: P(l.label),
                          subtext: l.getAttribute("data-subtext"),
                          icon: l.getAttribute("data-icon"),
                          iconBase: s,
                        },
                        m = " " + (l.className || "");
                      h++, c && t({ optID: h });
                      var v = Y(g);
                      o.push(F(v, "dropdown-header" + m, h)),
                        r.push({
                          display: g.label,
                          subtext: g.subtext,
                          type: "optgroup-label",
                          optID: h,
                        });
                      for (var y = 0, x = p.length; y < x; y++) {
                        var b = p[y];
                        0 === y && (f = (u = r.length - 1) + x),
                          e(b, {
                            headerIndex: u,
                            lastIndex: f,
                            optID: h,
                            optgroupClass: m,
                            disabled: l.disabled,
                          });
                      }
                      d && t({ optID: h });
                    }
                  })(l, c);
            }
            (this.selectpicker.main.elements = o),
              (this.selectpicker.main.data = r),
              (this.selectpicker.current = this.selectpicker.main);
          },
          findLis: function () {
            return this.$menuInner.find(".inner > li");
          },
          render: function () {
            this.setPlaceholder();
            var t,
              e,
              n = this,
              o = this.$element[0],
              r = (function (t, e) {
                var i,
                  s = t.selectedOptions,
                  n = [];
                if (e) {
                  for (var o = 0, r = s.length; o < r; o++)
                    (i = s[o]).disabled ||
                      ("OPTGROUP" === i.parentNode.tagName &&
                        i.parentNode.disabled) ||
                      n.push(i);
                  return n;
                }
                return s;
              })(o, this.options.hideDisabled),
              a = r.length,
              h = this.$button[0],
              l = h.querySelector(".filter-option-inner-inner"),
              c = document.createTextNode(this.options.multipleSeparator),
              d = R.fragment.cloneNode(!1),
              p = !1;
            if (
              (h.classList.toggle("bs-placeholder", n.multiple ? !a : !s(o, r)),
              this.tabIndex(),
              "static" === this.options.selectedTextFormat)
            )
              d = U({ text: this.options.title }, !0);
            else if (
              ((t =
                this.multiple &&
                -1 !== this.options.selectedTextFormat.indexOf("count") &&
                1 < a) &&
                (t =
                  (1 <
                    (e = this.options.selectedTextFormat.split(">")).length &&
                    a > e[1]) ||
                  (1 === e.length && 2 <= a)),
              !1 === t)
            ) {
              for (var u = 0; u < a && u < 50; u++) {
                var f = r[u],
                  g = {},
                  m = {
                    content: f.getAttribute("data-content"),
                    subtext: f.getAttribute("data-subtext"),
                    icon: f.getAttribute("data-icon"),
                  };
                this.multiple && 0 < u && d.appendChild(c.cloneNode(!1)),
                  f.title
                    ? (g.text = f.title)
                    : m.content && n.options.showContent
                    ? ((g.content = m.content.toString()), (p = !0))
                    : (n.options.showIcon &&
                        ((g.icon = m.icon),
                        (g.iconBase = this.options.iconBase)),
                      n.options.showSubtext &&
                        !n.multiple &&
                        m.subtext &&
                        (g.subtext = " " + m.subtext),
                      (g.text = f.textContent.trim())),
                  d.appendChild(U(g, !0));
              }
              49 < a && d.appendChild(document.createTextNode("..."));
            } else {
              var v =
                ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
              this.options.hideDisabled && (v += ":not(:disabled)");
              var y = this.$element[0].querySelectorAll(
                  "select > option" + v + ", optgroup" + v + " option" + v
                ).length,
                x =
                  "function" == typeof this.options.countSelectedText
                    ? this.options.countSelectedText(a, y)
                    : this.options.countSelectedText;
              d = U(
                {
                  text: x
                    .replace("{0}", a.toString())
                    .replace("{1}", y.toString()),
                },
                !0
              );
            }
            if (
              (null == this.options.title &&
                (this.options.title = this.$element.attr("title")),
              d.childNodes.length ||
                (d = U(
                  {
                    text:
                      void 0 !== this.options.title
                        ? this.options.title
                        : this.options.noneSelectedText,
                  },
                  !0
                )),
              (h.title = d.textContent.replace(/<[^>]*>?/g, "").trim()),
              this.options.sanitize &&
                p &&
                i([d], n.options.whiteList, n.options.sanitizeFn),
              (l.innerHTML = ""),
              l.appendChild(d),
              z.major < 4 &&
                this.$newElement[0].classList.contains("bs3-has-addon"))
            ) {
              var b = h.querySelector(".filter-expand"),
                k = l.cloneNode(!0);
              (k.className = "filter-expand"),
                b ? h.replaceChild(k, b) : h.appendChild(k);
            }
            this.$element.trigger("rendered" + H);
          },
          setStyle: function (t, e) {
            var i,
              s = this.$button[0],
              n = this.$newElement[0],
              o = this.options.style.trim();
            this.$element.attr("class") &&
              this.$newElement.addClass(
                this.$element
                  .attr("class")
                  .replace(
                    /selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,
                    ""
                  )
              ),
              z.major < 4 &&
                (n.classList.add("bs3"),
                n.parentNode.classList.contains("input-group") &&
                  (n.previousElementSibling || n.nextElementSibling) &&
                  (
                    n.previousElementSibling || n.nextElementSibling
                  ).classList.contains("input-group-addon") &&
                  n.classList.add("bs3-has-addon")),
              (i = t ? t.trim() : o),
              "add" == e
                ? i && s.classList.add.apply(s.classList, i.split(" "))
                : "remove" == e
                ? i && s.classList.remove.apply(s.classList, i.split(" "))
                : (o && s.classList.remove.apply(s.classList, o.split(" ")),
                  i && s.classList.add.apply(s.classList, i.split(" ")));
          },
          liHeight: function (e) {
            if (e || (!1 !== this.options.size && !this.sizeInfo)) {
              this.sizeInfo || (this.sizeInfo = {});
              var i = document.createElement("div"),
                s = document.createElement("div"),
                n = document.createElement("div"),
                r = document.createElement("ul"),
                a = document.createElement("li"),
                h = document.createElement("li"),
                l = document.createElement("li"),
                c = document.createElement("a"),
                d = document.createElement("span"),
                p =
                  this.options.header &&
                  0 < this.$menu.find("." + B.POPOVERHEADER).length
                    ? this.$menu.find("." + B.POPOVERHEADER)[0].cloneNode(!0)
                    : null,
                u = this.options.liveSearch
                  ? document.createElement("div")
                  : null,
                f =
                  this.options.actionsBox &&
                  this.multiple &&
                  0 < this.$menu.find(".bs-actionsbox").length
                    ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0)
                    : null,
                g =
                  this.options.doneButton &&
                  this.multiple &&
                  0 < this.$menu.find(".bs-donebutton").length
                    ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0)
                    : null,
                m = this.$element.find("option")[0];
              if (
                ((this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth),
                (d.className = "text"),
                (c.className = "dropdown-item " + (m ? m.className : "")),
                (i.className =
                  this.$menu[0].parentNode.className + " " + B.SHOW),
                (i.style.width = this.sizeInfo.selectWidth + "px"),
                "auto" === this.options.width && (s.style.minWidth = 0),
                (s.className = B.MENU + " " + B.SHOW),
                (n.className = "inner " + B.SHOW),
                (r.className =
                  B.MENU + " inner " + ("4" === z.major ? B.SHOW : "")),
                (a.className = B.DIVIDER),
                (h.className = "dropdown-header"),
                d.appendChild(document.createTextNode("â€‹")),
                c.appendChild(d),
                l.appendChild(c),
                h.appendChild(d.cloneNode(!0)),
                this.selectpicker.view.widestOption &&
                  r.appendChild(
                    this.selectpicker.view.widestOption.cloneNode(!0)
                  ),
                r.appendChild(l),
                r.appendChild(a),
                r.appendChild(h),
                p && s.appendChild(p),
                u)
              ) {
                var v = document.createElement("input");
                (u.className = "bs-searchbox"),
                  (v.className = "form-control"),
                  u.appendChild(v),
                  s.appendChild(u);
              }
              f && s.appendChild(f),
                n.appendChild(r),
                s.appendChild(n),
                g && s.appendChild(g),
                i.appendChild(s),
                document.body.appendChild(i);
              var y,
                x = l.offsetHeight,
                b = h ? h.offsetHeight : 0,
                k = p ? p.offsetHeight : 0,
                w = u ? u.offsetHeight : 0,
                M = f ? f.offsetHeight : 0,
                S = g ? g.offsetHeight : 0,
                T = t(a).outerHeight(!0),
                C = !!window.getComputedStyle && window.getComputedStyle(s),
                A = s.offsetWidth,
                D = C ? null : t(s),
                E = {
                  vert:
                    o(C ? C.paddingTop : D.css("paddingTop")) +
                    o(C ? C.paddingBottom : D.css("paddingBottom")) +
                    o(C ? C.borderTopWidth : D.css("borderTopWidth")) +
                    o(C ? C.borderBottomWidth : D.css("borderBottomWidth")),
                  horiz:
                    o(C ? C.paddingLeft : D.css("paddingLeft")) +
                    o(C ? C.paddingRight : D.css("paddingRight")) +
                    o(C ? C.borderLeftWidth : D.css("borderLeftWidth")) +
                    o(C ? C.borderRightWidth : D.css("borderRightWidth")),
                },
                O = {
                  vert:
                    E.vert +
                    o(C ? C.marginTop : D.css("marginTop")) +
                    o(C ? C.marginBottom : D.css("marginBottom")) +
                    2,
                  horiz:
                    E.horiz +
                    o(C ? C.marginLeft : D.css("marginLeft")) +
                    o(C ? C.marginRight : D.css("marginRight")) +
                    2,
                };
              (n.style.overflowY = "scroll"),
                (y = s.offsetWidth - A),
                document.body.removeChild(i),
                (this.sizeInfo.liHeight = x),
                (this.sizeInfo.dropdownHeaderHeight = b),
                (this.sizeInfo.headerHeight = k),
                (this.sizeInfo.searchHeight = w),
                (this.sizeInfo.actionsHeight = M),
                (this.sizeInfo.doneButtonHeight = S),
                (this.sizeInfo.dividerHeight = T),
                (this.sizeInfo.menuPadding = E),
                (this.sizeInfo.menuExtras = O),
                (this.sizeInfo.menuWidth = A),
                (this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth),
                (this.sizeInfo.scrollBarWidth = y),
                (this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight),
                this.setPositionData();
            }
          },
          getSelectPosition: function () {
            var e,
              i = t(window),
              s = this.$newElement.offset(),
              n = t(this.options.container);
            this.options.container && n.length && !n.is("body")
              ? (((e = n.offset()).top += parseInt(n.css("borderTopWidth"))),
                (e.left += parseInt(n.css("borderLeftWidth"))))
              : (e = { top: 0, left: 0 });
            var o = this.options.windowPadding;
            (this.sizeInfo.selectOffsetTop = s.top - e.top - i.scrollTop()),
              (this.sizeInfo.selectOffsetBot =
                i.height() -
                this.sizeInfo.selectOffsetTop -
                this.sizeInfo.selectHeight -
                e.top -
                o[2]),
              (this.sizeInfo.selectOffsetLeft =
                s.left - e.left - i.scrollLeft()),
              (this.sizeInfo.selectOffsetRight =
                i.width() -
                this.sizeInfo.selectOffsetLeft -
                this.sizeInfo.selectWidth -
                e.left -
                o[1]),
              (this.sizeInfo.selectOffsetTop -= o[0]),
              (this.sizeInfo.selectOffsetLeft -= o[3]);
          },
          setMenuSize: function (t) {
            this.getSelectPosition();
            var e,
              i,
              s,
              n,
              o,
              r,
              a,
              h = this.sizeInfo.selectWidth,
              l = this.sizeInfo.liHeight,
              c = this.sizeInfo.headerHeight,
              d = this.sizeInfo.searchHeight,
              p = this.sizeInfo.actionsHeight,
              u = this.sizeInfo.doneButtonHeight,
              f = this.sizeInfo.dividerHeight,
              g = this.sizeInfo.menuPadding,
              m = 0;
            if (
              (this.options.dropupAuto &&
                ((a = l * this.selectpicker.current.elements.length + g.vert),
                this.$newElement.toggleClass(
                  B.DROPUP,
                  this.sizeInfo.selectOffsetTop -
                    this.sizeInfo.selectOffsetBot >
                    this.sizeInfo.menuExtras.vert &&
                    a + this.sizeInfo.menuExtras.vert + 50 >
                      this.sizeInfo.selectOffsetBot
                )),
              "auto" === this.options.size)
            )
              (n =
                3 < this.selectpicker.current.elements.length
                  ? 3 * this.sizeInfo.liHeight +
                    this.sizeInfo.menuExtras.vert -
                    2
                  : 0),
                (i =
                  this.sizeInfo.selectOffsetBot -
                  this.sizeInfo.menuExtras.vert),
                (s = n + c + d + p + u),
                (r = Math.max(n - g.vert, 0)),
                this.$newElement.hasClass(B.DROPUP) &&
                  (i =
                    this.sizeInfo.selectOffsetTop -
                    this.sizeInfo.menuExtras.vert),
                (e = (o = i) - c - d - p - u - g.vert);
            else if (
              this.options.size &&
              "auto" != this.options.size &&
              this.selectpicker.current.elements.length > this.options.size
            ) {
              for (var v = 0; v < this.options.size; v++)
                "divider" === this.selectpicker.current.data[v].type && m++;
              (e = (i = l * this.options.size + m * f + g.vert) - g.vert),
                (o = i + c + d + p + u),
                (s = r = "");
            }
            "auto" === this.options.dropdownAlignRight &&
              this.$menu.toggleClass(
                B.MENURIGHT,
                this.sizeInfo.selectOffsetLeft >
                  this.sizeInfo.selectOffsetRight &&
                  this.sizeInfo.selectOffsetRight <
                    this.sizeInfo.totalMenuWidth - h
              ),
              this.$menu.css({
                "max-height": o + "px",
                overflow: "hidden",
                "min-height": s + "px",
              }),
              this.$menuInner.css({
                "max-height": e + "px",
                "overflow-y": "auto",
                "min-height": r + "px",
              }),
              (this.sizeInfo.menuInnerHeight = Math.max(e, 1)),
              this.selectpicker.current.data.length &&
                this.selectpicker.current.data[
                  this.selectpicker.current.data.length - 1
                ].position > this.sizeInfo.menuInnerHeight &&
                ((this.sizeInfo.hasScrollBar = !0),
                (this.sizeInfo.totalMenuWidth =
                  this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth),
                this.$menu.css("min-width", this.sizeInfo.totalMenuWidth)),
              this.dropdown &&
                this.dropdown._popper &&
                this.dropdown._popper.update();
          },
          setSize: function (e) {
            if (
              (this.liHeight(e),
              this.options.header && this.$menu.css("padding-top", 0),
              !1 !== this.options.size)
            ) {
              var i = this,
                s = t(window);
              this.setMenuSize(),
                this.options.liveSearch &&
                  this.$searchbox
                    .off("input.setMenuSize propertychange.setMenuSize")
                    .on(
                      "input.setMenuSize propertychange.setMenuSize",
                      function () {
                        return i.setMenuSize();
                      }
                    ),
                "auto" === this.options.size
                  ? s
                      .off(
                        "resize" +
                          H +
                          "." +
                          this.selectId +
                          ".setMenuSize scroll" +
                          H +
                          "." +
                          this.selectId +
                          ".setMenuSize"
                      )
                      .on(
                        "resize" +
                          H +
                          "." +
                          this.selectId +
                          ".setMenuSize scroll" +
                          H +
                          "." +
                          this.selectId +
                          ".setMenuSize",
                        function () {
                          return i.setMenuSize();
                        }
                      )
                  : this.options.size &&
                    "auto" != this.options.size &&
                    this.selectpicker.current.elements.length >
                      this.options.size &&
                    s.off(
                      "resize" +
                        H +
                        "." +
                        this.selectId +
                        ".setMenuSize scroll" +
                        H +
                        "." +
                        this.selectId +
                        ".setMenuSize"
                    ),
                i.createView(!1, !0, e);
            }
          },
          setWidth: function () {
            var t = this;
            "auto" === this.options.width
              ? requestAnimationFrame(function () {
                  t.$menu.css("min-width", "0"),
                    t.$element.on("loaded" + H, function () {
                      t.liHeight(), t.setMenuSize();
                      var e = t.$newElement.clone().appendTo("body"),
                        i = e
                          .css("width", "auto")
                          .children("button")
                          .outerWidth();
                      e.remove(),
                        (t.sizeInfo.selectWidth = Math.max(
                          t.sizeInfo.totalMenuWidth,
                          i
                        )),
                        t.$newElement.css(
                          "width",
                          t.sizeInfo.selectWidth + "px"
                        );
                    });
                })
              : "fit" === this.options.width
              ? (this.$menu.css("min-width", ""),
                this.$newElement.css("width", "").addClass("fit-width"))
              : this.options.width
              ? (this.$menu.css("min-width", ""),
                this.$newElement.css("width", this.options.width))
              : (this.$menu.css("min-width", ""),
                this.$newElement.css("width", "")),
              this.$newElement.hasClass("fit-width") &&
                "fit" !== this.options.width &&
                this.$newElement[0].classList.remove("fit-width");
          },
          selectPosition: function () {
            this.$bsContainer = t('<div class="bs-container" />');
            var e,
              i,
              s,
              n = this,
              o = t(this.options.container),
              r = function (r) {
                var a = {},
                  h =
                    n.options.display ||
                    (!!t.fn.dropdown.Constructor.Default &&
                      t.fn.dropdown.Constructor.Default.display);
                n.$bsContainer
                  .addClass(
                    r.attr("class").replace(/form-control|fit-width/gi, "")
                  )
                  .toggleClass(B.DROPUP, r.hasClass(B.DROPUP)),
                  (e = r.offset()),
                  o.is("body")
                    ? (i = { top: 0, left: 0 })
                    : (((i = o.offset()).top +=
                        parseInt(o.css("borderTopWidth")) - o.scrollTop()),
                      (i.left +=
                        parseInt(o.css("borderLeftWidth")) - o.scrollLeft())),
                  (s = r.hasClass(B.DROPUP) ? 0 : r[0].offsetHeight),
                  (z.major < 4 || "static" === h) &&
                    ((a.top = e.top - i.top + s), (a.left = e.left - i.left)),
                  (a.width = r[0].offsetWidth),
                  n.$bsContainer.css(a);
              };
            this.$button.on("click.bs.dropdown.data-api", function () {
              n.isDisabled() ||
                (r(n.$newElement),
                n.$bsContainer
                  .appendTo(n.options.container)
                  .toggleClass(B.SHOW, !n.$button.hasClass(B.SHOW))
                  .append(n.$menu));
            }),
              t(window)
                .off(
                  "resize" +
                    H +
                    "." +
                    this.selectId +
                    " scroll" +
                    H +
                    "." +
                    this.selectId
                )
                .on(
                  "resize" +
                    H +
                    "." +
                    this.selectId +
                    " scroll" +
                    H +
                    "." +
                    this.selectId,
                  function () {
                    n.$newElement.hasClass(B.SHOW) && r(n.$newElement);
                  }
                ),
              this.$element.on("hide" + H, function () {
                n.$menu.data("height", n.$menu.height()),
                  n.$bsContainer.detach();
              });
          },
          setOptionStatus: function (t) {
            var e = this;
            if (
              ((e.noScroll = !1),
              e.selectpicker.view.visibleElements &&
                e.selectpicker.view.visibleElements.length)
            )
              for (
                var i = 0;
                i < e.selectpicker.view.visibleElements.length;
                i++
              ) {
                var s =
                    e.selectpicker.current.data[
                      i + e.selectpicker.view.position0
                    ],
                  n = s.option;
                n &&
                  (!0 !== t && e.setDisabled(s.index, s.disabled),
                  e.setSelected(s.index, n.selected));
              }
          },
          setSelected: function (t, e) {
            var i,
              s,
              n = this.selectpicker.main.elements[t],
              o = this.selectpicker.main.data[t],
              r = void 0 !== this.activeIndex,
              a = this.activeIndex === t || (e && !this.multiple && !r);
            (o.selected = e),
              (s = n.firstChild),
              e && (this.selectedIndex = t),
              n.classList.toggle("selected", e),
              a
                ? (this.focusItem(n, o),
                  (this.selectpicker.view.currentActive = n),
                  (this.activeIndex = t))
                : this.defocusItem(n),
              s &&
                (s.classList.toggle("selected", e),
                e
                  ? s.setAttribute("aria-selected", !0)
                  : this.multiple
                  ? s.setAttribute("aria-selected", !1)
                  : s.removeAttribute("aria-selected")),
              a ||
                r ||
                !e ||
                void 0 === this.prevActiveIndex ||
                ((i = this.selectpicker.main.elements[this.prevActiveIndex]),
                this.defocusItem(i));
          },
          setDisabled: function (t, e) {
            var i,
              s = this.selectpicker.main.elements[t];
            (this.selectpicker.main.data[t].disabled = e),
              (i = s.firstChild),
              s.classList.toggle(B.DISABLED, e),
              i &&
                ("4" === z.major && i.classList.toggle(B.DISABLED, e),
                e
                  ? (i.setAttribute("aria-disabled", e),
                    i.setAttribute("tabindex", -1))
                  : (i.removeAttribute("aria-disabled"),
                    i.setAttribute("tabindex", 0)));
          },
          isDisabled: function () {
            return this.$element[0].disabled;
          },
          checkDisabled: function () {
            var t = this;
            this.isDisabled()
              ? (this.$newElement[0].classList.add(B.DISABLED),
                this.$button
                  .addClass(B.DISABLED)
                  .attr("tabindex", -1)
                  .attr("aria-disabled", !0))
              : (this.$button[0].classList.contains(B.DISABLED) &&
                  (this.$newElement[0].classList.remove(B.DISABLED),
                  this.$button
                    .removeClass(B.DISABLED)
                    .attr("aria-disabled", !1)),
                -1 != this.$button.attr("tabindex") ||
                  this.$element.data("tabindex") ||
                  this.$button.removeAttr("tabindex")),
              this.$button.on("click", function () {
                return !t.isDisabled();
              });
          },
          tabIndex: function () {
            this.$element.data("tabindex") !== this.$element.attr("tabindex") &&
              -98 !== this.$element.attr("tabindex") &&
              "-98" !== this.$element.attr("tabindex") &&
              (this.$element.data("tabindex", this.$element.attr("tabindex")),
              this.$button.attr("tabindex", this.$element.data("tabindex"))),
              this.$element.attr("tabindex", -98);
          },
          clickListener: function () {
            function e() {
              n.options.liveSearch
                ? n.$searchbox.trigger("focus")
                : n.$menuInner.trigger("focus");
            }
            function i() {
              n.dropdown &&
              n.dropdown._popper &&
              n.dropdown._popper.state.isCreated
                ? e()
                : requestAnimationFrame(i);
            }
            var n = this,
              o = t(document);
            o.data("spaceSelect", !1),
              this.$button.on("keyup", function (t) {
                /(32)/.test(t.keyCode.toString(10)) &&
                  o.data("spaceSelect") &&
                  (t.preventDefault(), o.data("spaceSelect", !1));
              }),
              this.$newElement.on("show.bs.dropdown", function () {
                3 < z.major &&
                  !n.dropdown &&
                  ((n.dropdown = n.$button.data("bs.dropdown")),
                  (n.dropdown._menu = n.$menu[0]));
              }),
              this.$button.on("click.bs.dropdown.data-api", function () {
                n.$newElement.hasClass(B.SHOW) || n.setSize();
              }),
              this.$element.on("shown" + H, function () {
                n.$menuInner[0].scrollTop !== n.selectpicker.view.scrollTop &&
                  (n.$menuInner[0].scrollTop = n.selectpicker.view.scrollTop),
                  3 < z.major ? requestAnimationFrame(i) : e();
              }),
              this.$menuInner.on("mouseenter", "li a", function (t) {
                var e = this.parentElement,
                  i = n.isVirtual() ? n.selectpicker.view.position0 : 0,
                  s = Array.prototype.indexOf.call(e.parentElement.children, e),
                  o = n.selectpicker.current.data[s + i];
                n.focusItem(e, o, !0);
              }),
              this.$menuInner.on("click", "li a", function (e, i) {
                var o = t(this),
                  r = n.$element[0],
                  a = n.isVirtual() ? n.selectpicker.view.position0 : 0,
                  h = n.selectpicker.current.data[o.parent().index() + a],
                  l = h.index,
                  c = s(r),
                  d = r.selectedIndex,
                  p = r.options[d],
                  u = !0;
                if (
                  (n.multiple &&
                    1 !== n.options.maxOptions &&
                    e.stopPropagation(),
                  e.preventDefault(),
                  !n.isDisabled() && !o.parent().hasClass(B.DISABLED))
                ) {
                  var f = n.$element.find("option"),
                    g = h.option,
                    m = t(g),
                    v = g.selected,
                    y = m.parent("optgroup"),
                    x = y.find("option"),
                    b = n.options.maxOptions,
                    k = y.data("maxOptions") || !1;
                  if (
                    (l === n.activeIndex && (i = !0),
                    i ||
                      ((n.prevActiveIndex = n.activeIndex),
                      (n.activeIndex = void 0)),
                    n.multiple)
                  ) {
                    if (
                      ((g.selected = !v),
                      n.setSelected(l, !v),
                      o.trigger("blur"),
                      !1 !== b || !1 !== k)
                    ) {
                      var M = b < f.filter(":selected").length,
                        S = k < y.find("option:selected").length;
                      if ((b && M) || (k && S))
                        if (b && 1 == b) {
                          f.prop("selected", !1), m.prop("selected", !0);
                          for (var T = 0; T < f.length; T++)
                            n.setSelected(T, !1);
                          n.setSelected(l, !0);
                        } else if (k && 1 == k) {
                          for (
                            y.find("option:selected").prop("selected", !1),
                              m.prop("selected", !0),
                              T = 0;
                            T < x.length;
                            T++
                          )
                            (g = x[T]), n.setSelected(f.index(g), !1);
                          n.setSelected(l, !0);
                        } else {
                          var C =
                              "string" == typeof n.options.maxOptionsText
                                ? [
                                    n.options.maxOptionsText,
                                    n.options.maxOptionsText,
                                  ]
                                : n.options.maxOptionsText,
                            A = "function" == typeof C ? C(b, k) : C,
                            D = A[0].replace("{n}", b),
                            E = A[1].replace("{n}", k),
                            O = t('<div class="notify"></div>');
                          A[2] &&
                            ((D = D.replace("{var}", A[2][1 < b ? 0 : 1])),
                            (E = E.replace("{var}", A[2][1 < k ? 0 : 1]))),
                            m.prop("selected", !1),
                            n.$menu.append(O),
                            b &&
                              M &&
                              (O.append(t("<div>" + D + "</div>")),
                              (u = !1),
                              n.$element.trigger("maxReached" + H)),
                            k &&
                              S &&
                              (O.append(t("<div>" + E + "</div>")),
                              (u = !1),
                              n.$element.trigger("maxReachedGrp" + H)),
                            setTimeout(function () {
                              n.setSelected(l, !1);
                            }, 10),
                            O.delay(750).fadeOut(300, function () {
                              t(this).remove();
                            });
                        }
                    }
                  } else
                    (p.selected = !1), (g.selected = !0), n.setSelected(l, !0);
                  !n.multiple || (n.multiple && 1 === n.options.maxOptions)
                    ? n.$button.trigger("focus")
                    : n.options.liveSearch && n.$searchbox.trigger("focus"),
                    u &&
                      (n.multiple || d !== r.selectedIndex) &&
                      ((w = [g.index, m.prop("selected"), c]),
                      n.$element.triggerNative("change"));
                }
              }),
              this.$menu.on(
                "click",
                "li." +
                  B.DISABLED +
                  " a, ." +
                  B.POPOVERHEADER +
                  ", ." +
                  B.POPOVERHEADER +
                  " :not(.close)",
                function (e) {
                  e.currentTarget == this &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    n.options.liveSearch && !t(e.target).hasClass("close")
                      ? n.$searchbox.trigger("focus")
                      : n.$button.trigger("focus"));
                }
              ),
              this.$menuInner.on(
                "click",
                ".divider, .dropdown-header",
                function (t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    n.options.liveSearch
                      ? n.$searchbox.trigger("focus")
                      : n.$button.trigger("focus");
                }
              ),
              this.$menu.on(
                "click",
                "." + B.POPOVERHEADER + " .close",
                function () {
                  n.$button.trigger("click");
                }
              ),
              this.$searchbox.on("click", function (t) {
                t.stopPropagation();
              }),
              this.$menu.on("click", ".actions-btn", function (e) {
                n.options.liveSearch
                  ? n.$searchbox.trigger("focus")
                  : n.$button.trigger("focus"),
                  e.preventDefault(),
                  e.stopPropagation(),
                  t(this).hasClass("bs-select-all")
                    ? n.selectAll()
                    : n.deselectAll();
              }),
              this.$element
                .on("change" + H, function () {
                  n.render(), n.$element.trigger("changed" + H, w), (w = null);
                })
                .on("focus" + H, function () {
                  n.options.mobile || n.$button.trigger("focus");
                });
          },
          liveSearchListener: function () {
            var t = this,
              e = document.createElement("li");
            this.$button.on("click.bs.dropdown.data-api", function () {
              t.$searchbox.val() && t.$searchbox.val("");
            }),
              this.$searchbox.on(
                "click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",
                function (t) {
                  t.stopPropagation();
                }
              ),
              this.$searchbox.on("input propertychange", function () {
                var i = t.$searchbox.val();
                if (
                  ((t.selectpicker.search.elements = []),
                  (t.selectpicker.search.data = []),
                  i)
                ) {
                  var s = [],
                    o = i.toUpperCase(),
                    r = {},
                    h = [],
                    l = t._searchStyle(),
                    c = t.options.liveSearchNormalize;
                  c && (o = a(o)),
                    (t._$lisSelected = t.$menuInner.find(".selected"));
                  for (var d = 0; d < t.selectpicker.main.data.length; d++) {
                    var p = t.selectpicker.main.data[d];
                    r[d] || (r[d] = n(p, o, l, c)),
                      r[d] &&
                        void 0 !== p.headerIndex &&
                        -1 === h.indexOf(p.headerIndex) &&
                        (0 < p.headerIndex &&
                          ((r[p.headerIndex - 1] = !0),
                          h.push(p.headerIndex - 1)),
                        (r[p.headerIndex] = !0),
                        h.push(p.headerIndex),
                        (r[p.lastIndex + 1] = !0)),
                      r[d] && "optgroup-label" !== p.type && h.push(d);
                  }
                  d = 0;
                  for (var u = h.length; d < u; d++) {
                    var f = h[d],
                      g = h[d - 1],
                      m =
                        ((p = t.selectpicker.main.data[f]),
                        t.selectpicker.main.data[g]);
                    ("divider" !== p.type ||
                      ("divider" === p.type &&
                        m &&
                        "divider" !== m.type &&
                        u - 1 !== d)) &&
                      (t.selectpicker.search.data.push(p),
                      s.push(t.selectpicker.main.elements[f]));
                  }
                  (t.activeIndex = void 0),
                    (t.noScroll = !0),
                    t.$menuInner.scrollTop(0),
                    (t.selectpicker.search.elements = s),
                    t.createView(!0),
                    s.length ||
                      ((e.className = "no-results"),
                      (e.innerHTML = t.options.noneResultsText.replace(
                        "{0}",
                        '"' + P(i) + '"'
                      )),
                      t.$menuInner[0].firstChild.appendChild(e));
                } else t.$menuInner.scrollTop(0), t.createView(!1);
              });
          },
          _searchStyle: function () {
            return this.options.liveSearchStyle || "contains";
          },
          val: function (t) {
            var e = this.$element[0];
            if (void 0 === t) return this.$element.val();
            var i = s(e);
            if (
              ((w = [null, null, i]),
              this.$element.val(t).trigger("changed" + H, w),
              this.$newElement.hasClass(B.SHOW))
            )
              if (this.multiple) this.setOptionStatus(!0);
              else {
                var n = (e.options[e.selectedIndex] || {}).liIndex;
                "number" == typeof n &&
                  (this.setSelected(this.selectedIndex, !1),
                  this.setSelected(n, !0));
              }
            return this.render(), (w = null), this.$element;
          },
          changeAll: function (t) {
            if (this.multiple) {
              void 0 === t && (t = !0);
              var e = this.$element[0],
                i = 0,
                n = 0,
                o = s(e);
              e.classList.add("bs-select-hidden");
              for (
                var r = 0, a = this.selectpicker.current.elements.length;
                r < a;
                r++
              ) {
                var h = this.selectpicker.current.data[r],
                  l = h.option;
                l &&
                  !h.disabled &&
                  "divider" !== h.type &&
                  (h.selected && i++, (l.selected = t) && n++);
              }
              e.classList.remove("bs-select-hidden"),
                i !== n &&
                  (this.setOptionStatus(),
                  (w = [null, null, o]),
                  this.$element.triggerNative("change"));
            }
          },
          selectAll: function () {
            return this.changeAll(!0);
          },
          deselectAll: function () {
            return this.changeAll(!1);
          },
          toggle: function (t) {
            (t = t || window.event) && t.stopPropagation(),
              this.$button.trigger("click.bs.dropdown.data-api");
          },
          keydown: function (e) {
            var i,
              s,
              o,
              r,
              a,
              h = t(this),
              l = h.hasClass("dropdown-toggle"),
              c = (l ? h.closest(".dropdown") : h.closest(W.MENU)).data("this"),
              d = c.findLis(),
              p = !1,
              u = 9 === e.which && !l && !c.options.selectOnTab,
              f = j.test(e.which) || u,
              g = c.$menuInner[0].scrollTop,
              m = !0 === c.isVirtual() ? c.selectpicker.view.position0 : 0;
            if (
              !(s = c.$newElement.hasClass(B.SHOW)) &&
              (f ||
                (48 <= e.which && e.which <= 57) ||
                (96 <= e.which && e.which <= 105) ||
                (65 <= e.which && e.which <= 90)) &&
              (c.$button.trigger("click.bs.dropdown.data-api"),
              c.options.liveSearch)
            )
              c.$searchbox.trigger("focus");
            else {
              if (
                (27 === e.which &&
                  s &&
                  (e.preventDefault(),
                  c.$button
                    .trigger("click.bs.dropdown.data-api")
                    .trigger("focus")),
                f)
              ) {
                if (!d.length) return;
                -1 !==
                  (i = (o = c.selectpicker.main.elements[c.activeIndex])
                    ? Array.prototype.indexOf.call(o.parentElement.children, o)
                    : -1) && c.defocusItem(o),
                  38 === e.which
                    ? (-1 !== i && i--,
                      i + m < 0 && (i += d.length),
                      c.selectpicker.view.canHighlight[i + m] ||
                        (-1 ==
                          (i =
                            c.selectpicker.view.canHighlight
                              .slice(0, i + m)
                              .lastIndexOf(!0) - m) &&
                          (i = d.length - 1)))
                    : (40 === e.which || u) &&
                      (++i + m >= c.selectpicker.view.canHighlight.length &&
                        (i = 0),
                      c.selectpicker.view.canHighlight[i + m] ||
                        (i =
                          i +
                          1 +
                          c.selectpicker.view.canHighlight
                            .slice(i + m + 1)
                            .indexOf(!0))),
                  e.preventDefault();
                var v = m + i;
                38 === e.which
                  ? 0 === m && i === d.length - 1
                    ? ((c.$menuInner[0].scrollTop =
                        c.$menuInner[0].scrollHeight),
                      (v = c.selectpicker.current.elements.length - 1))
                    : (p =
                        (a =
                          (r = c.selectpicker.current.data[v]).position -
                          r.height) < g)
                  : (40 === e.which || u) &&
                    (0 === i
                      ? (v = c.$menuInner[0].scrollTop = 0)
                      : (p =
                          g <
                          (a =
                            (r = c.selectpicker.current.data[v]).position -
                            c.sizeInfo.menuInnerHeight))),
                  (o = c.selectpicker.current.elements[v]),
                  (c.activeIndex = c.selectpicker.current.data[v].index),
                  c.focusItem(o),
                  (c.selectpicker.view.currentActive = o),
                  p && (c.$menuInner[0].scrollTop = a),
                  c.options.liveSearch
                    ? c.$searchbox.trigger("focus")
                    : h.trigger("focus");
              } else if (
                (!h.is("input") && !_.test(e.which)) ||
                (32 === e.which && c.selectpicker.keydown.keyHistory)
              ) {
                var y,
                  x,
                  b = [];
                e.preventDefault(),
                  (c.selectpicker.keydown.keyHistory += I[e.which]),
                  c.selectpicker.keydown.resetKeyHistory.cancel &&
                    clearTimeout(c.selectpicker.keydown.resetKeyHistory.cancel),
                  (c.selectpicker.keydown.resetKeyHistory.cancel =
                    c.selectpicker.keydown.resetKeyHistory.start()),
                  (x = c.selectpicker.keydown.keyHistory),
                  /^(.)\1+$/.test(x) && (x = x.charAt(0));
                for (var k = 0; k < c.selectpicker.current.data.length; k++) {
                  var w = c.selectpicker.current.data[k];
                  n(w, x, "startsWith", !0) &&
                    c.selectpicker.view.canHighlight[k] &&
                    b.push(w.index);
                }
                if (b.length) {
                  var M = 0;
                  d.removeClass("active").find("a").removeClass("active"),
                    1 === x.length &&
                      (-1 === (M = b.indexOf(c.activeIndex)) ||
                      M === b.length - 1
                        ? (M = 0)
                        : M++),
                    (y = b[M]),
                    (p =
                      0 < g - (r = c.selectpicker.main.data[y]).position
                        ? ((a = r.position - r.height), !0)
                        : ((a = r.position - c.sizeInfo.menuInnerHeight),
                          r.position > g + c.sizeInfo.menuInnerHeight)),
                    (o = c.selectpicker.main.elements[y]),
                    (c.activeIndex = b[M]),
                    c.focusItem(o),
                    o && o.firstChild.focus(),
                    p && (c.$menuInner[0].scrollTop = a),
                    h.trigger("focus");
                }
              }
              s &&
                ((32 === e.which && !c.selectpicker.keydown.keyHistory) ||
                  13 === e.which ||
                  (9 === e.which && c.options.selectOnTab)) &&
                (32 !== e.which && e.preventDefault(),
                (c.options.liveSearch && 32 === e.which) ||
                  (c.$menuInner.find(".active a").trigger("click", !0),
                  h.trigger("focus"),
                  c.options.liveSearch ||
                    (e.preventDefault(), t(document).data("spaceSelect", !0))));
            }
          },
          mobile: function () {
            this.$element[0].classList.add("mobile-device");
          },
          refresh: function () {
            var e = t.extend({}, this.options, this.$element.data());
            (this.options = e),
              this.checkDisabled(),
              this.setStyle(),
              this.render(),
              this.createLi(),
              this.setWidth(),
              this.setSize(!0),
              this.$element.trigger("refreshed" + H);
          },
          hide: function () {
            this.$newElement.hide();
          },
          show: function () {
            this.$newElement.show();
          },
          remove: function () {
            this.$newElement.remove(), this.$element.remove();
          },
          destroy: function () {
            this.$newElement.before(this.$element).remove(),
              this.$bsContainer
                ? this.$bsContainer.remove()
                : this.$menu.remove(),
              this.$element
                .off(H)
                .removeData("selectpicker")
                .removeClass("bs-select-hidden selectpicker"),
              t(window).off(H + "." + this.selectId);
          },
        });
      var X = t.fn.selectpicker;
      (t.fn.selectpicker = h),
        (t.fn.selectpicker.Constructor = $),
        (t.fn.selectpicker.noConflict = function () {
          return (t.fn.selectpicker = X), this;
        }),
        t(document)
          .off("keydown.bs.dropdown.data-api")
          .on(
            "keydown" + H,
            '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
            $.prototype.keydown
          )
          .on(
            "focusin.modal",
            '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
            function (t) {
              t.stopPropagation();
            }
          ),
        t(window).on("load" + H + ".data-api", function () {
          t(".selectpicker").each(function () {
            var e = t(this);
            h.call(e, e.data());
          });
        });
    })(t);
  }),
  (function (t) {
    (t.fn.mask = function (e, i) {
      t(this).each(function () {
        if (void 0 !== i && i > 0) {
          var s = t(this);
          s.data(
            "_mask_timeout",
            setTimeout(function () {
              t.maskElement(s, e);
            }, i)
          );
        } else t.maskElement(t(this), e);
      });
    }),
      (t.fn.unmask = function () {
        t(this).each(function () {
          t.unmaskElement(t(this));
        });
      }),
      (t.fn.isMasked = function () {
        return this.hasClass("masked");
      }),
      (t.maskElement = function (e, i) {
        void 0 !== e.data("_mask_timeout") &&
          (clearTimeout(e.data("_mask_timeout")),
          e.removeData("_mask_timeout")),
          e.isMasked() && t.unmaskElement(e),
          "static" == e.css("position") && e.addClass("masked-relative"),
          e.addClass("masked");
        var s = t('<div class="loadmask"></div>');
        if (
          (navigator.userAgent.toLowerCase().indexOf("msie") > -1 &&
            (s.height(
              e.height() +
                parseInt(e.css("padding-top")) +
                parseInt(e.css("padding-bottom"))
            ),
            s.width(
              e.width() +
                parseInt(e.css("padding-left")) +
                parseInt(e.css("padding-right"))
            )),
          navigator.userAgent.toLowerCase().indexOf("msie 6") > -1 &&
            e.find("select").addClass("masked-hidden"),
          e.append(s),
          void 0 !== i)
        ) {
          var n = t('<div class="loadmask-msg" style="display:none;"></div>');
          n.append("<div>" + i + "</div>"),
            e.append(n),
            n.css(
              "top",
              Math.round(
                e.height() / 2 -
                  (n.height() -
                    parseInt(n.css("padding-top")) -
                    parseInt(n.css("padding-bottom"))) /
                    2
              ) + "px"
            ),
            n.css(
              "left",
              Math.round(
                e.width() / 2 -
                  (n.width() -
                    parseInt(n.css("padding-left")) -
                    parseInt(n.css("padding-right"))) /
                    2
              ) + "px"
            ),
            n.show();
        }
      }),
      (t.unmaskElement = function (t) {
        void 0 !== t.data("_mask_timeout") &&
          (clearTimeout(t.data("_mask_timeout")),
          t.removeData("_mask_timeout")),
          t.find(".loadmask-msg,.loadmask").remove(),
          t.removeClass("masked"),
          t.removeClass("masked-relative"),
          t.find("select").removeClass("masked-hidden");
      });
  })(jQuery),
  (function (t) {
    t.fn.bindWithDelay = function (e, i, s, n, o) {
      return (
        t.isFunction(i) && ((o = n), (n = s), (s = i), (i = void 0)),
        (s.guid = s.guid || (t.guid && t.guid++)),
        this.each(function () {
          function r() {
            var e = t.extend(!0, {}, arguments[0]),
              i = this,
              r = function () {
                (a = null), s.apply(i, [e]);
              };
            o || (clearTimeout(a), (a = null)), a || (a = setTimeout(r, n));
          }
          var a = null;
          (r.guid = s.guid), t(this).bind(e, i, r);
        })
      );
    };
  })(jQuery),
  (function (t, e) {
    var i, s, n, o, r, a, h, l, c, d, p, u, f, g, m, v, y, x, b, k, w, M, S, T;
    (i = function (t) {
      return new i.prototype.init(t);
    }),
      "undefined" != typeof require &&
      "undefined" != typeof exports &&
      "undefined" != typeof module
        ? (module.exports = i)
        : (t.Globalize = i),
      (i.cultures = {}),
      (i.prototype = {
        constructor: i,
        init: function (t) {
          return (this.cultures = i.cultures), (this.cultureSelector = t), this;
        },
      }),
      (i.prototype.init.prototype = i.prototype),
      (i.cultures.default = {
        name: "en",
        englishName: "English",
        nativeName: "English",
        isRTL: !1,
        language: "en",
        numberFormat: {
          pattern: ["-n"],
          decimals: 0,
          ",": ",",
          ".": ".",
          groupSizes: [3],
          "+": "+",
          "-": "-",
          NaN: "NaN",
          negativeInfinity: "-Infinity",
          positiveInfinity: "Infinity",
          percent: {
            pattern: ["-n %", "n %"],
            decimals: 2,
            groupSizes: [3],
            ",": ",",
            ".": ".",
            symbol: "%",
          },
          currency: {
            pattern: ["($n)", "$n"],
            decimals: 2,
            groupSizes: [3],
            ",": ",",
            ".": ".",
            symbol: "$",
          },
        },
        calendars: {
          standard: {
            name: "Gregorian_USEnglish",
            "/": "/",
            ":": ":",
            firstDay: 0,
            days: {
              names:
                "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                  " "
                ),
              namesAbbr: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
              namesShort: "Su Mo Tu We Th Fr Sa".split(" "),
            },
            months: {
              names:
                "January February March April May June July August September October November December ".split(
                  " "
                ),
              namesAbbr:
                "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec ".split(" "),
            },
            AM: ["AM", "am", "AM"],
            PM: ["PM", "pm", "PM"],
            eras: [{ name: "A.D.", start: null, offset: 0 }],
            twoDigitYearMax: 2029,
            patterns: {
              d: "M/d/yyyy",
              D: "dddd, MMMM dd, yyyy",
              t: "h:mm tt",
              T: "h:mm:ss tt",
              f: "dddd, MMMM dd, yyyy h:mm tt",
              F: "dddd, MMMM dd, yyyy h:mm:ss tt",
              M: "MMMM dd",
              Y: "yyyy MMMM",
              S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            },
          },
        },
        messages: {},
      }),
      (i.cultures.default.calendar = i.cultures.default.calendars.standard),
      (i.cultures.en = i.cultures.default),
      (i.cultureSelector = "en"),
      (s = /^0x[a-f0-9]+$/i),
      (n = /^[+\-]?infinity$/i),
      (o = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/),
      (r = /^\s+|\s+$/g),
      (a = function (t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var i = 0, s = t.length; i < s; i++) if (t[i] === e) return i;
        return -1;
      }),
      (h = function (t, e) {
        return t.substr(t.length - e.length) === e;
      }),
      (l = function () {
        var t,
          e,
          i,
          s,
          n,
          o = arguments[0] || {},
          r = 1,
          a = arguments.length,
          h = !1;
        for (
          "boolean" == typeof o && ((h = o), (o = arguments[1] || {}), (r = 2)),
            "object" != typeof o && !d(o) && (o = {});
          r < a;
          r++
        )
          if (null != (t = arguments[r]))
            for (e in t)
              (i = o[e]),
                (s = t[e]),
                o !== s &&
                  (h && s && (p(s) || (n = c(s)))
                    ? (n
                        ? ((n = !1), (i = i && c(i) ? i : []))
                        : (i = i && p(i) ? i : {}),
                      (o[e] = l(h, i, s)))
                    : void 0 !== s && (o[e] = s));
        return o;
      }),
      (c =
        Array.isArray ||
        function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }),
      (d = function (t) {
        return "[object Function]" === Object.prototype.toString.call(t);
      }),
      (p = function (t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }),
      (u = function (t, e) {
        return 0 === t.indexOf(e);
      }),
      (f = function (t) {
        return (t + "").replace(r, "");
      }),
      (g = function (t) {
        return isNaN(t) ? NaN : Math[0 > t ? "ceil" : "floor"](t);
      }),
      (m = function (t, e, i) {
        var s;
        for (s = t.length; s < e; s += 1) t = i ? "0" + t : t + "0";
        return t;
      }),
      (v = function (t, e) {
        for (var i = 0, s = !1, n = 0, o = t.length; n < o; n++) {
          var r = t.charAt(n);
          switch (r) {
            case "'":
              s ? e.push("'") : i++, (s = !1);
              break;
            case "\\":
              s && e.push("\\"), (s = !s);
              break;
            default:
              e.push(r), (s = !1);
          }
        }
        return i;
      }),
      (y = function (t, e) {
        e = e || "F";
        var i;
        i = t.patterns;
        var s = e.length;
        if (1 === s) {
          if (!(i = i[e])) throw "Invalid date format string '" + e + "'.";
          e = i;
        } else 2 === s && "%" === e.charAt(0) && (e = e.charAt(1));
        return e;
      }),
      (x = function (t, e, i) {
        function s(t, e) {
          var i;
          return (
            (i = t + ""),
            1 < e && i.length < e
              ? ((i = u[e - 2] + i), i.substr(i.length - e, e))
              : i
          );
        }
        function n(t, e) {
          if (p) return p[e];
          switch (e) {
            case 0:
              return t.getFullYear();
            case 1:
              return t.getMonth();
            case 2:
              return t.getDate();
            default:
              throw "Invalid part value " + e;
          }
        }
        var o = i.calendar,
          r = o.convert;
        if (!e || !e.length || "i" === e) {
          if (i && i.name.length)
            if (r) i = x(t, o.patterns.F, i);
            else {
              i = new Date(t.getTime());
              var a = w(t, o.eras);
              i.setFullYear(M(t, o, a)), (i = i.toLocaleString());
            }
          else i = t.toString();
          return i;
        }
        var a = o.eras,
          h = "s" === e;
        (e = y(o, e)), (i = []);
        var l,
          c,
          d,
          p,
          u = ["0", "00", "000"],
          f = /([^d]|^)(d|dd)([^d]|$)/g,
          g = 0,
          m = k();
        for (
          !h && r && (p = r.fromGregorian(t));
          (l = m.lastIndex),
            (r = m.exec(e)),
            (l = e.slice(l, r ? r.index : e.length)),
            (g += v(l, i)),
            r;

        )
          if (g % 2) i.push(r[0]);
          else
            switch (((l = r[0]), (r = l.length), l)) {
              case "ddd":
              case "dddd":
                i.push((3 === r ? o.days.namesAbbr : o.days.names)[t.getDay()]);
                break;
              case "d":
              case "dd":
                (c = !0), i.push(s(n(t, 2), r));
                break;
              case "MMM":
              case "MMMM":
                (l = n(t, 1)),
                  i.push(
                    o.monthsGenitive &&
                      (function () {
                        return c || d ? c : ((c = f.test(e)), (d = !0), c);
                      })()
                      ? o.monthsGenitive[3 === r ? "namesAbbr" : "names"][l]
                      : o.months[3 === r ? "namesAbbr" : "names"][l]
                  );
                break;
              case "M":
              case "MM":
                i.push(s(n(t, 1) + 1, r));
                break;
              case "y":
              case "yy":
              case "yyyy":
                (l = p ? p[0] : M(t, o, w(t, a), h)),
                  4 > r && (l %= 100),
                  i.push(s(l, r));
                break;
              case "h":
              case "hh":
                (l = t.getHours() % 12), 0 === l && (l = 12), i.push(s(l, r));
                break;
              case "H":
              case "HH":
                i.push(s(t.getHours(), r));
                break;
              case "m":
              case "mm":
                i.push(s(t.getMinutes(), r));
                break;
              case "s":
              case "ss":
                i.push(s(t.getSeconds(), r));
                break;
              case "t":
              case "tt":
                (l =
                  12 > t.getHours()
                    ? o.AM
                      ? o.AM[0]
                      : " "
                    : o.PM
                    ? o.PM[0]
                    : " "),
                  i.push(1 === r ? l.charAt(0) : l);
                break;
              case "f":
              case "ff":
              case "fff":
                i.push(s(t.getMilliseconds(), 3).substr(0, r));
                break;
              case "z":
              case "zz":
                (l = t.getTimezoneOffset() / 60),
                  i.push((0 >= l ? "+" : "-") + s(Math.floor(Math.abs(l)), r));
                break;
              case "zzz":
                (l = t.getTimezoneOffset() / 60),
                  i.push(
                    (0 >= l ? "+" : "-") +
                      s(Math.floor(Math.abs(l)), 2) +
                      ":" +
                      s(Math.abs(t.getTimezoneOffset() % 60), 2)
                  );
                break;
              case "g":
              case "gg":
                o.eras && i.push(o.eras[w(t, a)].name);
                break;
              case "/":
                i.push(o["/"]);
                break;
              default:
                throw "Invalid date format pattern '" + l + "'.";
            }
        return i.join("");
      });
    var C;
    (C = function (t, e, i) {
      var s = i.groupSizes,
        n = s[0],
        o = 1,
        r = Math.pow(10, e),
        r = Math.round(t * r) / r;
      isFinite(r) || (r = t), (t = r + "");
      var r = "",
        r = t.split(/e/i),
        a = 1 < r.length ? parseInt(r[1], 10) : 0;
      for (
        t = r[0],
          r = t.split("."),
          t = r[0],
          r = 1 < r.length ? r[1] : "",
          0 < a
            ? ((r = m(r, a, !1)), (t += r.slice(0, a)), (r = r.substr(a)))
            : 0 > a &&
              ((a = -a),
              (t = m(t, a + 1, !0)),
              (r = t.slice(-a, t.length) + r),
              (t = t.slice(0, -a))),
          r = 0 < e ? i["."] + (r.length > e ? r.slice(0, e) : m(r, e)) : "",
          e = t.length - 1,
          i = i[","],
          a = "";
        0 <= e;

      ) {
        if (0 === n || n > e)
          return t.slice(0, e + 1) + (a.length ? i + a + r : r);
        (a = t.slice(e - n + 1, e + 1) + (a.length ? i + a : "")),
          (e -= n),
          o < s.length && ((n = s[o]), o++);
      }
      return t.slice(0, e + 1) + i + a + r;
    }),
      (b = function (t, e, i) {
        if (!isFinite(t))
          return 1 / 0 === t
            ? i.numberFormat.positiveInfinity
            : -1 / 0 === t
            ? i.numberFormat.negativeInfinity
            : i.numberFormat.NaN;
        if (!e || "i" === e)
          return i.name.length ? t.toLocaleString() : t.toString();
        (e = e || "D"), (i = i.numberFormat);
        var s = Math.abs(t),
          n = -1;
        1 < e.length && (n = parseInt(e.slice(1), 10));
        var o,
          r = e.charAt(0).toUpperCase();
        switch (r) {
          case "D":
            (e = "n"),
              (s = g(s)),
              -1 !== n && (s = m("" + s, n, !0)),
              0 > t && (s = "-" + s);
            break;
          case "N":
            o = i;
          case "C":
            o = o || i.currency;
          case "P":
            (o = o || i.percent),
              (e = 0 > t ? o.pattern[0] : o.pattern[1] || "n"),
              -1 === n && (n = o.decimals),
              (s = C(s * ("P" === r ? 100 : 1), n, o));
            break;
          default:
            throw "Bad number format specifier: " + r;
        }
        for (
          t = /n|\$|-|%/g, o = "";
          (n = t.lastIndex),
            (r = t.exec(e)),
            (o += e.slice(n, r ? r.index : e.length)),
            r;

        )
          switch (r[0]) {
            case "n":
              o += s;
              break;
            case "$":
              o += i.currency.symbol;
              break;
            case "-":
              /[1-9]/.test(s) && (o += i["-"]);
              break;
            case "%":
              o += i.percent.symbol;
          }
        return o;
      }),
      (k = function () {
        return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g;
      }),
      (w = function (t, e) {
        if (!e) return 0;
        for (var i, s = t.getTime(), n = 0, o = e.length; n < o; n++)
          if (null === (i = e[n].start) || s >= i) return n;
        return 0;
      }),
      (M = function (t, e, i, s) {
        return (
          (t = t.getFullYear()), !s && e.eras && (t -= e.eras[i].offset), t
        );
      });
    var A, D, E, O, L, P, I;
    (A = function (t, e) {
      if (100 > e) {
        var i = new Date(),
          s = w(i),
          i = M(i, t, s),
          s = t.twoDigitYearMax,
          s =
            "string" == typeof s
              ? (new Date().getFullYear() % 100) + parseInt(s, 10)
              : s;
        (e += i - (i % 100)), e > s && (e -= 100);
      }
      return e;
    }),
      (D = function (t, e, i) {
        var s = t.days,
          n = t._upperDays;
        return (
          n ||
            (t._upperDays = n = [I(s.names), I(s.namesAbbr), I(s.namesShort)]),
          (e = P(e)),
          i ? -1 === (t = a(n[1], e)) && (t = a(n[2], e)) : (t = a(n[0], e)),
          t
        );
      }),
      (E = function (t, e, i) {
        var s = t.months,
          n = t.monthsGenitive || t.months,
          o = t._upperMonths,
          r = t._upperMonthsGen;
        return (
          o ||
            ((t._upperMonths = o = [I(s.names), I(s.namesAbbr)]),
            (t._upperMonthsGen = r = [I(n.names), I(n.namesAbbr)])),
          (e = P(e)),
          (t = a(i ? o[1] : o[0], e)),
          0 > t && (t = a(i ? r[1] : r[0], e)),
          t
        );
      }),
      (O = function (t, e) {
        var i = t._parseRegExp;
        if (i) {
          var s = i[e];
          if (s) return s;
        } else t._parseRegExp = i = {};
        for (
          var n,
            s = y(t, e).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"),
            o = ["^"],
            r = [],
            a = 0,
            h = 0,
            l = k();
          null !== (n = l.exec(s));

        ) {
          var c = s.slice(a, n.index),
            a = l.lastIndex,
            h = h + v(c, o);
          if (h % 2) o.push(n[0]);
          else {
            var c = n[0],
              d = c.length;
            switch (c) {
              case "dddd":
              case "ddd":
              case "MMMM":
              case "MMM":
              case "gg":
              case "g":
                c = "(\\D+)";
                break;
              case "tt":
              case "t":
                c = "(\\D*)";
                break;
              case "yyyy":
              case "fff":
              case "ff":
              case "f":
                c = "(\\d{" + d + "})";
                break;
              case "dd":
              case "d":
              case "MM":
              case "M":
              case "yy":
              case "y":
              case "HH":
              case "H":
              case "hh":
              case "h":
              case "mm":
              case "m":
              case "ss":
              case "s":
                c = "(\\d\\d?)";
                break;
              case "zzz":
                c = "([+-]?\\d\\d?:\\d{2})";
                break;
              case "zz":
              case "z":
                c = "([+-]?\\d\\d?)";
                break;
              case "/":
                c = "(\\/)";
                break;
              default:
                throw "Invalid date format pattern '" + c + "'.";
            }
            c && o.push(c), r.push(n[0]);
          }
        }
        return (
          v(s.slice(a), o),
          o.push("$"),
          (s = { regExp: o.join("").replace(/\s+/g, "\\s+"), groups: r }),
          (i[e] = s)
        );
      }),
      (L = function (t, e, i) {
        return t < e || t > i;
      }),
      (P = function (t) {
        return t.split("Â ").join(" ").toUpperCase();
      }),
      (I = function (t) {
        for (var e = [], i = 0, s = t.length; i < s; i++) e[i] = P(t[i]);
        return e;
      }),
      (S = function (t, e, i) {
        (t = f(t)), (i = i.calendar), (e = O(i, e));
        var s = RegExp(e.regExp).exec(t);
        if (null === s) return null;
        var n,
          o = e.groups,
          r = (e = t = null),
          a = null,
          h = null,
          l = 0,
          c = 0,
          d = 0,
          p = 0;
        n = null;
        for (var g = !1, m = 0, v = o.length; m < v; m++) {
          var y = s[m + 1];
          if (y) {
            var x = o[m],
              b = x.length,
              k = parseInt(y, 10);
            switch (x) {
              case "dd":
              case "d":
                if (((a = k), L(a, 1, 31))) return null;
                break;
              case "MMM":
              case "MMMM":
                if (((r = E(i, y, 3 === b)), L(r, 0, 11))) return null;
                break;
              case "M":
              case "MM":
                if (((r = k - 1), L(r, 0, 11))) return null;
                break;
              case "y":
              case "yy":
              case "yyyy":
                if (((e = 4 > b ? A(i, k) : k), L(e, 0, 9999))) return null;
                break;
              case "h":
              case "hh":
                if (((l = k), 12 === l && (l = 0), L(l, 0, 11))) return null;
                break;
              case "H":
              case "HH":
                if (((l = k), L(l, 0, 23))) return null;
                break;
              case "m":
              case "mm":
                if (((c = k), L(c, 0, 59))) return null;
                break;
              case "s":
              case "ss":
                if (((d = k), L(d, 0, 59))) return null;
                break;
              case "tt":
              case "t":
                if (
                  !(g =
                    i.PM &&
                    (y === i.PM[0] || y === i.PM[1] || y === i.PM[2])) &&
                  (!i.AM || (y !== i.AM[0] && y !== i.AM[1] && y !== i.AM[2]))
                )
                  return null;
                break;
              case "f":
              case "ff":
              case "fff":
                if (((p = k * Math.pow(10, 3 - b)), L(p, 0, 999))) return null;
                break;
              case "ddd":
              case "dddd":
                if (((h = D(i, y, 3 === b)), L(h, 0, 6))) return null;
                break;
              case "zzz":
                if (((x = y.split(/:/)), 2 !== x.length)) return null;
                if (((n = parseInt(x[0], 10)), L(n, -12, 13))) return null;
                if (((x = parseInt(x[1], 10)), L(x, 0, 59))) return null;
                n = 60 * n + (u(y, "-") ? -x : x);
                break;
              case "z":
              case "zz":
                if (((n = k), L(n, -12, 13))) return null;
                n *= 60;
                break;
              case "g":
              case "gg":
                if (!y || !i.eras) return null;
                for (
                  y = f(y.toLowerCase()), x = 0, b = i.eras.length;
                  x < b;
                  x++
                )
                  if (y === i.eras[x].name.toLowerCase()) {
                    t = x;
                    break;
                  }
                if (null === t) return null;
            }
          }
        }
        if (
          ((s = new Date()),
          (o = (m = i.convert) ? m.fromGregorian(s)[0] : s.getFullYear()),
          null === e ? (e = o) : i.eras && (e += i.eras[t || 0].offset),
          null === r && (r = 0),
          null === a && (a = 1),
          m)
        ) {
          if (null === (s = m.toGregorian(e, r, a))) return null;
        } else if (
          (s.setFullYear(e, r, a),
          s.getDate() !== a || (null !== h && s.getDay() !== h))
        )
          return null;
        return (
          g && 12 > l && (l += 12),
          s.setHours(l, c, d, p),
          null !== n &&
            ((i = s.getMinutes() - (n + s.getTimezoneOffset())),
            s.setHours(s.getHours() + parseInt(i / 60, 10), i % 60)),
          s
        );
      }),
      (T = function (t, e, i) {
        var s = e["-"];
        e = e["+"];
        var n;
        switch (i) {
          case "n -":
            (s = " " + s), (e = " " + e);
          case "n-":
            h(t, s)
              ? (n = ["-", t.substr(0, t.length - s.length)])
              : h(t, e) && (n = ["+", t.substr(0, t.length - e.length)]);
            break;
          case "- n":
            (s += " "), (e += " ");
          case "-n":
            u(t, s)
              ? (n = ["-", t.substr(s.length)])
              : u(t, e) && (n = ["+", t.substr(e.length)]);
            break;
          case "(n)":
            u(t, "(") && h(t, ")") && (n = ["-", t.substr(1, t.length - 2)]);
        }
        return n || ["", t];
      }),
      (i.prototype.findClosestCulture = function (t) {
        return i.findClosestCulture.call(this, t);
      }),
      (i.prototype.format = function (t, e, s) {
        return i.format.call(this, t, e, s);
      }),
      (i.prototype.localize = function (t, e) {
        return i.localize.call(this, t, e);
      }),
      (i.prototype.parseInt = function (t, e, s) {
        return i.parseInt.call(this, t, e, s);
      }),
      (i.prototype.parseFloat = function (t, e, s) {
        return i.parseFloat.call(this, t, e, s);
      }),
      (i.prototype.culture = function (t) {
        return i.culture.call(this, t);
      }),
      (i.addCultureInfo = function (t, e, i) {
        var s = {},
          n = !1;
        "string" != typeof t
          ? ((i = t), (t = this.culture().name), (s = this.cultures[t]))
          : "string" != typeof e
          ? ((i = e),
            (n = null == this.cultures[t]),
            (s = this.cultures[t] || this.cultures.default))
          : ((n = !0), (s = this.cultures[e])),
          (this.cultures[t] = l(!0, {}, s, i)),
          n &&
            (this.cultures[t].calendar = this.cultures[t].calendars.standard);
      }),
      (i.findClosestCulture = function (t) {
        var e;
        if (!t)
          return (
            this.findClosestCulture(this.cultureSelector) ||
            this.cultures.default
          );
        if (("string" == typeof t && (t = t.split(",")), c(t))) {
          var i,
            s,
            n = this.cultures,
            o = t,
            r = o.length,
            a = [];
          for (s = 0; s < r; s++)
            (t = f(o[s])),
              (t = t.split(";")),
              (i = f(t[0])),
              1 === t.length
                ? (t = 1)
                : ((t = f(t[1])),
                  0 === t.indexOf("q=")
                    ? ((t = t.substr(2)),
                      (t = parseFloat(t)),
                      (t = isNaN(t) ? 0 : t))
                    : (t = 1)),
              a.push({ lang: i, pri: t });
          for (
            a.sort(function (t, e) {
              return t.pri < e.pri ? 1 : t.pri > e.pri ? -1 : 0;
            }),
              s = 0;
            s < r;
            s++
          )
            if (((i = a[s].lang), (e = n[i]))) return e;
          for (s = 0; s < r; s++)
            for (i = a[s].lang; ; ) {
              if (-1 === (o = i.lastIndexOf("-"))) break;
              if (((i = i.substr(0, o)), (e = n[i]))) return e;
            }
          for (s = 0; s < r; s++) {
            i = a[s].lang;
            for (var h in n) if (((o = n[h]), o.language === i)) return o;
          }
        } else if ("object" == typeof t) return t;
        return e || null;
      }),
      (i.format = function (t, e, i) {
        return (
          (i = this.findClosestCulture(i)),
          t instanceof Date
            ? (t = x(t, e, i))
            : "number" == typeof t && (t = b(t, e, i)),
          t
        );
      }),
      (i.localize = function (t, e) {
        return (
          this.findClosestCulture(e).messages[t] ||
          this.cultures.default.messages[t]
        );
      }),
      (i.parseDate = function (t, e, i) {
        i = this.findClosestCulture(i);
        var s, n;
        if (e) {
          if (("string" == typeof e && (e = [e]), e.length)) {
            n = 0;
            for (var o = e.length; n < o; n++) {
              var r = e[n];
              if (r && (s = S(t, r, i))) break;
            }
          }
        } else
          for (n in (e = i.calendar.patterns)) if ((s = S(t, e[n], i))) break;
        return s || null;
      }),
      (i.parseInt = function (t, e, s) {
        return g(i.parseFloat(t, e, s));
      }),
      (i.parseFloat = function (t, e, i) {
        "number" != typeof e && ((i = e), (e = 10));
        var r = this.findClosestCulture(i);
        i = NaN;
        var a = r.numberFormat;
        if (
          (-1 < t.indexOf(r.numberFormat.currency.symbol) &&
            ((t = t.replace(r.numberFormat.currency.symbol, "")),
            (t = t.replace(r.numberFormat.currency["."], r.numberFormat["."]))),
          -1 < t.indexOf(r.numberFormat.percent.symbol) &&
            (t = t.replace(r.numberFormat.percent.symbol, "")),
          (t = t.replace(/ /g, "")),
          n.test(t))
        )
          i = parseFloat(t);
        else if (!e && s.test(t)) i = parseInt(t, 16);
        else {
          (r = T(t, a, a.pattern[0])),
            (e = r[0]),
            (r = r[1]),
            "" === e &&
              "(n)" !== a.pattern[0] &&
              ((r = T(t, a, "(n)")), (e = r[0]), (r = r[1])),
            "" === e &&
              "-n" !== a.pattern[0] &&
              ((r = T(t, a, "-n")), (e = r[0]), (r = r[1])),
            (e = e || "+");
          var h;
          (t = r.indexOf("e")),
            0 > t && (t = r.indexOf("E")),
            0 > t
              ? ((h = r), (t = null))
              : ((h = r.substr(0, t)), (t = r.substr(t + 1)));
          var l = a["."],
            c = h.indexOf(l);
          0 > c
            ? ((r = h), (h = null))
            : ((r = h.substr(0, c)), (h = h.substr(c + l.length))),
            (l = a[","]),
            (r = r.split(l).join("")),
            (c = l.replace(/\u00A0/g, " ")),
            l !== c && (r = r.split(c).join("")),
            (e += r),
            null !== h && (e += "." + h),
            null !== t &&
              ((a = T(t, a, "-n")), (e += "e" + (a[0] || "+") + a[1])),
            o.test(e) && (i = parseFloat(e));
        }
        return i;
      }),
      (i.culture = function (t) {
        return (
          void 0 !== t && (this.cultureSelector = t),
          this.findClosestCulture(t) || this.cultures.default
        );
      });
  })(this),
  (function (t, e) {
    var i;
    (i =
      "undefined" != typeof require &&
      "undefined" != typeof exports &&
      "undefined" != typeof module
        ? require("globalize")
        : t.Globalize),
      i.addCultureInfo("en-IN", "default", {
        name: "en-IN",
        englishName: "English (India)",
        nativeName: "English (India)",
        numberFormat: {
          groupSizes: [3, 2],
          percent: { groupSizes: [3, 2] },
          currency: {
            pattern: ["$ -n", "$ n"],
            groupSizes: [3, 2],
            symbol: "Rs.",
          },
        },
        calendars: {
          standard: {
            "/": "-",
            firstDay: 1,
            patterns: {
              d: "dd-MM-yyyy",
              D: "dd MMMM yyyy",
              t: "HH:mm",
              T: "HH:mm:ss",
              f: "dd MMMM yyyy HH:mm",
              F: "dd MMMM yyyy HH:mm:ss",
              M: "dd MMMM",
            },
          },
        },
      });
  })(this),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? ((e.default = e), (module.exports = t.document ? e(t) : e))
      : "function" == typeof define && define.amd
      ? define("highcharts/highcharts", function () {
          return e(t);
        })
      : (t.Highcharts && t.Highcharts.error(16, !0), (t.Highcharts = e(t)));
  })("undefined" != typeof window ? window : this, function (t) {
    function e(t, e, i, s) {
      t.hasOwnProperty(e) || (t[e] = s.apply(null, i));
    }
    var i = {};
    return (
      e(i, "parts/Globals.js", [], function () {
        var e = void 0 !== t ? t : "undefined" != typeof window ? window : {},
          i = e.document,
          s = (e.navigator && e.navigator.userAgent) || "",
          n =
            i &&
            i.createElementNS &&
            !!i.createElementNS("http://www.w3.org/2000/svg", "svg")
              .createSVGRect,
          o = /(edge|msie|trident)/i.test(s) && !e.opera,
          r = -1 !== s.indexOf("Firefox"),
          a = -1 !== s.indexOf("Chrome"),
          h = r && 4 > parseInt(s.split("Firefox/")[1], 10);
        return {
          product: "Highcharts",
          version: "8.1.0",
          deg2rad: (2 * Math.PI) / 360,
          doc: i,
          hasBidiBug: h,
          hasTouch: !!e.TouchEvent,
          isMS: o,
          isWebKit: -1 !== s.indexOf("AppleWebKit"),
          isFirefox: r,
          isChrome: a,
          isSafari: !a && -1 !== s.indexOf("Safari"),
          isTouchDevice: /(Mobile|Android|Windows Phone)/.test(s),
          SVG_NS: "http://www.w3.org/2000/svg",
          chartCount: 0,
          seriesTypes: {},
          symbolSizes: {},
          svg: n,
          win: e,
          marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
          noop: function () {},
          charts: [],
          dateFormats: {},
        };
      }),
      e(i, "parts/Utilities.js", [i["parts/Globals.js"]], function (t) {
        function e() {
          var t,
            e = arguments,
            s = {},
            n = function (t, e) {
              return (
                "object" != typeof t && (t = {}),
                X(e, function (s, o) {
                  !i(s, !0) || g(s) || f(s)
                    ? (t[o] = e[o])
                    : (t[o] = n(t[o] || {}, s));
                }),
                t
              );
            };
          !0 === e[0] && ((s = e[1]), (e = Array.prototype.slice.call(e, 2)));
          var o = e.length;
          for (t = 0; t < o; t++) s = n(s, e[t]);
          return s;
        }
        function i(t, e) {
          return !(!t || "object" != typeof t || (e && u(t)));
        }
        function s(t, e, i) {
          var s;
          return (
            p(e)
              ? y(i)
                ? t.setAttribute(e, i)
                : t &&
                  t.getAttribute &&
                  ((s = t.getAttribute(e)) ||
                    "class" !== e ||
                    (s = t.getAttribute(e + "Name")))
              : X(e, function (e, i) {
                  t.setAttribute(i, e);
                }),
            s
          );
        }
        function n() {
          for (var t = arguments, e = t.length, i = 0; i < e; i++) {
            var s = t[i];
            if (void 0 !== s && null !== s) return s;
          }
        }
        function o(t, e) {
          if (!t) return e;
          var i = t.split(".").reverse();
          if (1 === i.length) return e[t];
          for (t = i.pop(); void 0 !== t && void 0 !== e && null !== e; )
            (e = e[t]), (t = i.pop());
          return e;
        }
        t.timers = [];
        var r = t.charts,
          a = t.doc,
          h = t.win,
          l = (t.error = function (t, e, i, s) {
            var n = m(t),
              o = n
                ? "Highcharts error #" +
                  t +
                  ": www.highcharts.com/errors/" +
                  t +
                  "/"
                : t.toString(),
              r = function () {
                if (e) throw Error(o);
                h.console && console.log(o);
              };
            if (void 0 !== s) {
              var a = "";
              n && (o += "?"),
                X(s, function (t, e) {
                  (a += "\n" + e + ": " + t),
                    n && (o += encodeURI(e) + "=" + encodeURI(t));
                }),
                (o += a);
            }
            i
              ? K(i, "displayError", { code: t, message: o, params: s }, r)
              : r();
          }),
          c = (function () {
            function e(t, e, i) {
              (this.options = e), (this.elem = t), (this.prop = i);
            }
            return (
              (e.prototype.dSetter = function () {
                var t = this.paths,
                  e = t && t[0];
                t = t && t[1];
                var i = [],
                  s = this.now || 0;
                if (1 !== s && e && t)
                  if (e.length === t.length && 1 > s)
                    for (var n = 0; n < t.length; n++) {
                      for (
                        var o = e[n], r = t[n], a = [], h = 0;
                        h < r.length;
                        h++
                      ) {
                        var l = o[h],
                          c = r[h];
                        a[h] =
                          "number" == typeof l &&
                          "number" == typeof c &&
                          ("A" !== r[0] || (4 !== h && 5 !== h))
                            ? l + s * (c - l)
                            : c;
                      }
                      i.push(a);
                    }
                  else i = t;
                else i = this.toD || [];
                this.elem.attr("d", i, void 0, !0);
              }),
              (e.prototype.update = function () {
                var t = this.elem,
                  e = this.prop,
                  i = this.now,
                  s = this.options.step;
                this[e + "Setter"]
                  ? this[e + "Setter"]()
                  : t.attr
                  ? t.element && t.attr(e, i, null, !0)
                  : (t.style[e] = i + this.unit),
                  s && s.call(t, i, this);
              }),
              (e.prototype.run = function (e, i, s) {
                var n = this,
                  o = n.options,
                  r = function (t) {
                    return !r.stopped && n.step(t);
                  },
                  a =
                    h.requestAnimationFrame ||
                    function (t) {
                      setTimeout(t, 13);
                    },
                  l = function () {
                    for (var e = 0; e < t.timers.length; e++)
                      t.timers[e]() || t.timers.splice(e--, 1);
                    t.timers.length && a(l);
                  };
                e !== i || this.elem["forceAnimate:" + this.prop]
                  ? ((this.startTime = +new Date()),
                    (this.start = e),
                    (this.end = i),
                    (this.unit = s),
                    (this.now = this.start),
                    (this.pos = 0),
                    (r.elem = this.elem),
                    (r.prop = this.prop),
                    r() && 1 === t.timers.push(r) && a(l))
                  : (delete o.curAnim[this.prop],
                    o.complete &&
                      0 === Object.keys(o.curAnim).length &&
                      o.complete.call(this.elem));
              }),
              (e.prototype.step = function (t) {
                var e = +new Date(),
                  i = this.options,
                  s = this.elem,
                  n = i.complete,
                  o = i.duration,
                  r = i.curAnim;
                if (s.attr && !s.element) t = !1;
                else if (t || e >= o + this.startTime) {
                  (this.now = this.end), (this.pos = 1), this.update();
                  var a = (r[this.prop] = !0);
                  X(r, function (t) {
                    !0 !== t && (a = !1);
                  }),
                    a && n && n.call(s),
                    (t = !1);
                } else
                  (this.pos = i.easing((e - this.startTime) / o)),
                    (this.now =
                      this.start + (this.end - this.start) * this.pos),
                    this.update(),
                    (t = !0);
                return t;
              }),
              (e.prototype.initPath = function (t, e, i) {
                function s(t, e) {
                  for (; t.length < d; ) {
                    var i = t[0],
                      s = e[d - t.length];
                    s &&
                      "M" === i[0] &&
                      (t[0] =
                        "C" === s[0]
                          ? ["C", i[1], i[2], i[1], i[2], i[1], i[2]]
                          : ["L", i[1], i[2]]),
                      t.unshift(i),
                      a && t.push(t[t.length - 1]);
                  }
                }
                function n(t, e) {
                  for (; t.length < d; )
                    if (
                      ((e = t[t.length / h - 1].slice()),
                      "C" === e[0] && ((e[1] = e[5]), (e[2] = e[6])),
                      a)
                    ) {
                      var i = t[t.length / h].slice();
                      t.splice(t.length / 2, 0, e, i);
                    } else t.push(e);
                }
                var o = t.startX,
                  r = t.endX;
                (e = e && e.slice()), (i = i.slice());
                var a = t.isArea,
                  h = a ? 2 : 1;
                if (!e) return [i, i];
                if (o && r) {
                  for (t = 0; t < o.length; t++) {
                    if (o[t] === r[0]) {
                      var l = t;
                      break;
                    }
                    if (o[0] === r[r.length - o.length + t]) {
                      l = t;
                      var c = !0;
                      break;
                    }
                    if (o[o.length - 1] === r[r.length - o.length + t]) {
                      l = o.length - t;
                      break;
                    }
                  }
                  void 0 === l && (e = []);
                }
                if (e.length && m(l)) {
                  var d = i.length + l * h;
                  c ? (s(e, i), n(i, e)) : (s(i, e), n(e, i));
                }
                return [e, i];
              }),
              (e.prototype.fillSetter = function () {
                e.prototype.strokeSetter.apply(this, arguments);
              }),
              (e.prototype.strokeSetter = function () {
                this.elem.attr(
                  this.prop,
                  t.color(this.start).tweenTo(t.color(this.end), this.pos),
                  null,
                  !0
                );
              }),
              e
            );
          })();
        (t.Fx = c), (t.merge = e);
        var d = (t.pInt = function (t, e) {
            return parseInt(t, e || 10);
          }),
          p = (t.isString = function (t) {
            return "string" == typeof t;
          }),
          u = (t.isArray = function (t) {
            return (
              "[object Array]" === (t = Object.prototype.toString.call(t)) ||
              "[object Array Iterator]" === t
            );
          });
        t.isObject = i;
        var f = (t.isDOMElement = function (t) {
            return i(t) && "number" == typeof t.nodeType;
          }),
          g = (t.isClass = function (t) {
            var e = t && t.constructor;
            return !(!i(t, !0) || f(t) || !e || !e.name || "Object" === e.name);
          }),
          m = (t.isNumber = function (t) {
            return "number" == typeof t && !isNaN(t) && 1 / 0 > t && -1 / 0 < t;
          }),
          v = (t.erase = function (t, e) {
            for (var i = t.length; i--; )
              if (t[i] === e) {
                t.splice(i, 1);
                break;
              }
          }),
          y = (t.defined = function (t) {
            return void 0 !== t && null !== t;
          });
        t.attr = s;
        var x = (t.splat = function (t) {
            return u(t) ? t : [t];
          }),
          b = (t.syncTimeout = function (t, e, i) {
            return 0 < e ? setTimeout(t, e, i) : (t.call(0, i), -1);
          }),
          k = (t.clearTimeout = function (t) {
            y(t) && clearTimeout(t);
          }),
          w = (t.extend = function (t, e) {
            var i;
            t || (t = {});
            for (i in e) t[i] = e[i];
            return t;
          });
        t.pick = n;
        var M = (t.css = function (e, i) {
            t.isMS &&
              !t.svg &&
              i &&
              void 0 !== i.opacity &&
              (i.filter = "alpha(opacity=" + 100 * i.opacity + ")"),
              w(e.style, i);
          }),
          S = (t.createElement = function (t, e, i, s, n) {
            return (
              (t = a.createElement(t)),
              e && w(t, e),
              n && M(t, { padding: "0", border: "none", margin: "0" }),
              i && M(t, i),
              s && s.appendChild(t),
              t
            );
          }),
          T = (t.extendClass = function (t, e) {
            var i = function () {};
            return (i.prototype = new t()), w(i.prototype, e), i;
          }),
          C = (t.pad = function (t, e, i) {
            return (
              Array((e || 2) + 1 - String(t).replace("-", "").length).join(
                i || "0"
              ) + t
            );
          }),
          A = (t.relativeLength = function (t, e, i) {
            return /%$/.test(t)
              ? (e * parseFloat(t)) / 100 + (i || 0)
              : parseFloat(t);
          }),
          D = (t.wrap = function (t, e, i) {
            var s = t[e];
            t[e] = function () {
              var t = Array.prototype.slice.call(arguments),
                e = arguments,
                n = this;
              return (
                (n.proceed = function () {
                  s.apply(n, arguments.length ? arguments : e);
                }),
                t.unshift(s),
                (t = i.apply(this, t)),
                (n.proceed = null),
                t
              );
            };
          }),
          E = (t.format = function (e, i, s) {
            var n = "{",
              r = !1,
              a = [],
              h = /f$/,
              l = /\.([0-9])/,
              c = t.defaultOptions.lang,
              d = (s && s.time) || t.time;
            for (s = (s && s.numberFormatter) || _; e; ) {
              var p = e.indexOf(n);
              if (-1 === p) break;
              var u = e.slice(0, p);
              if (r) {
                if (
                  ((u = u.split(":")),
                  (n = o(u.shift() || "", i)),
                  u.length && "number" == typeof n)
                )
                  if (((u = u.join(":")), h.test(u))) {
                    var f = parseInt((u.match(l) || ["", "-1"])[1], 10);
                    null !== n &&
                      (n = s(
                        n,
                        f,
                        c.decimalPoint,
                        -1 < u.indexOf(",") ? c.thousandsSep : ""
                      ));
                  } else n = d.dateFormat(u, n);
                a.push(n);
              } else a.push(u);
              (e = e.slice(p + 1)), (n = (r = !r) ? "}" : "{");
            }
            return a.push(e), a.join("");
          }),
          O = (t.getMagnitude = function (t) {
            return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
          }),
          L = (t.normalizeTickInterval = function (t, e, i, s, o) {
            var r = t;
            i = n(i, 1);
            var a = t / i;
            for (
              e ||
                ((e = o
                  ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
                  : [1, 2, 2.5, 5, 10]),
                !1 === s &&
                  (1 === i
                    ? (e = e.filter(function (t) {
                        return 0 == t % 1;
                      }))
                    : 0.1 >= i && (e = [1 / i]))),
                s = 0;
              s < e.length &&
              ((r = e[s]),
              !(
                (o && r * i >= t) ||
                (!o && a <= (e[s] + (e[s + 1] || e[s])) / 2)
              ));
              s++
            );
            return (r = B(r * i, -Math.round(Math.log(0.001) / Math.LN10)));
          }),
          P = (t.stableSort = function (t, e) {
            var i,
              s,
              n = t.length;
            for (s = 0; s < n; s++) t[s].safeI = s;
            for (
              t.sort(function (t, s) {
                return (i = e(t, s)), 0 === i ? t.safeI - s.safeI : i;
              }),
                s = 0;
              s < n;
              s++
            )
              delete t[s].safeI;
          }),
          I = (t.arrayMin = function (t) {
            for (var e = t.length, i = t[0]; e--; ) t[e] < i && (i = t[e]);
            return i;
          }),
          z = (t.arrayMax = function (t) {
            for (var e = t.length, i = t[0]; e--; ) t[e] > i && (i = t[e]);
            return i;
          }),
          N = (t.destroyObjectProperties = function (t, e) {
            X(t, function (i, s) {
              i && i !== e && i.destroy && i.destroy(), delete t[s];
            });
          }),
          H = (t.discardElement = function (e) {
            var i = t.garbageBin;
            i || (i = S("div")), e && i.appendChild(e), (i.innerHTML = "");
          }),
          B = (t.correctFloat = function (t, e) {
            return parseFloat(t.toPrecision(e || 14));
          }),
          W = (t.setAnimation = function (t, e) {
            e.renderer.globalAnimation = n(t, e.options.chart.animation, !0);
          }),
          R = (t.animObject = function (t) {
            return i(t) ? e(t) : { duration: t ? 500 : 0 };
          }),
          j = (t.timeUnits = {
            millisecond: 1,
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            week: 6048e5,
            month: 24192e5,
            year: 314496e5,
          }),
          _ = (t.numberFormat = function (e, i, s, o) {
            (e = +e || 0), (i = +i);
            var r = t.defaultOptions.lang,
              a = (e.toString().split(".")[1] || "").split("e")[0].length,
              h = e.toString().split("e");
            if (-1 === i) i = Math.min(a, 20);
            else if (m(i)) {
              if (i && h[1] && 0 > h[1]) {
                var l = i + +h[1];
                0 <= l
                  ? ((h[0] = (+h[0]).toExponential(l).split("e")[0]), (i = l))
                  : ((h[0] = h[0].split(".")[0] || 0),
                    (e = 20 > i ? (h[0] * Math.pow(10, h[1])).toFixed(i) : 0),
                    (h[1] = 0));
              }
            } else i = 2;
            var c = (
              Math.abs(h[1] ? h[0] : e) + Math.pow(10, -Math.max(i, a) - 1)
            ).toFixed(i);
            return (
              (a = String(d(c))),
              (l = 3 < a.length ? a.length % 3 : 0),
              (s = n(s, r.decimalPoint)),
              (o = n(o, r.thousandsSep)),
              (e = (0 > e ? "-" : "") + (l ? a.substr(0, l) + o : "")),
              (e += a.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + o)),
              i && (e += s + c.slice(-i)),
              h[1] && 0 != +e && (e += "e" + h[1]),
              e
            );
          });
        Math.easeInOutSine = function (t) {
          return -0.5 * (Math.cos(Math.PI * t) - 1);
        };
        var F = (t.getStyle = function (e, i, s) {
            return "width" === i
              ? ((i = Math.min(e.offsetWidth, e.scrollWidth)),
                (s =
                  e.getBoundingClientRect && e.getBoundingClientRect().width),
                s < i && s >= i - 1 && (i = Math.floor(s)),
                Math.max(
                  0,
                  i -
                    t.getStyle(e, "padding-left") -
                    t.getStyle(e, "padding-right")
                ))
              : "height" === i
              ? Math.max(
                  0,
                  Math.min(e.offsetHeight, e.scrollHeight) -
                    t.getStyle(e, "padding-top") -
                    t.getStyle(e, "padding-bottom")
                )
              : (h.getComputedStyle || l(27, !0),
                (e = h.getComputedStyle(e, void 0)) &&
                  ((e = e.getPropertyValue(i)),
                  n(s, "opacity" !== i) && (e = d(e))),
                e);
          }),
          G = (t.inArray = function (t, e, i) {
            return e.indexOf(t, i);
          }),
          U = (t.find = Array.prototype.find
            ? function (t, e) {
                return t.find(e);
              }
            : function (t, e) {
                var i,
                  s = t.length;
                for (i = 0; i < s; i++) if (e(t[i], i)) return t[i];
              });
        t.keys = Object.keys;
        var Y = (t.offset = function (t) {
            var e = a.documentElement;
            return (
              (t =
                t.parentElement || t.parentNode
                  ? t.getBoundingClientRect()
                  : { top: 0, left: 0 }),
              {
                top:
                  t.top + (h.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left:
                  t.left +
                  (h.pageXOffset || e.scrollLeft) -
                  (e.clientLeft || 0),
              }
            );
          }),
          $ = (t.stop = function (e, i) {
            for (var s = t.timers.length; s--; )
              t.timers[s].elem !== e ||
                (i && i !== t.timers[s].prop) ||
                (t.timers[s].stopped = !0);
          }),
          X = (t.objectEach = function (t, e, i) {
            for (var s in t)
              Object.hasOwnProperty.call(t, s) && e.call(i || t[s], t[s], s, t);
          });
        X(
          {
            map: "map",
            each: "forEach",
            grep: "filter",
            reduce: "reduce",
            some: "some",
          },
          function (e, i) {
            t[i] = function (t) {
              return Array.prototype[e].apply(t, [].slice.call(arguments, 1));
            };
          }
        );
        var V = (t.addEvent = function (e, i, s, n) {
            void 0 === n && (n = {});
            var o = e.addEventListener || t.addEventListenerPolyfill,
              r =
                "function" == typeof e && e.prototype
                  ? (e.prototype.protoEvents = e.prototype.protoEvents || {})
                  : (e.hcEvents = e.hcEvents || {});
            return (
              t.Point &&
                e instanceof t.Point &&
                e.series &&
                e.series.chart &&
                (e.series.chart.runTrackerClick = !0),
              o && o.call(e, i, s, !1),
              r[i] || (r[i] = []),
              r[i].push({
                fn: s,
                order: "number" == typeof n.order ? n.order : 1 / 0,
              }),
              r[i].sort(function (t, e) {
                return t.order - e.order;
              }),
              function () {
                q(e, i, s);
              }
            );
          }),
          q = (t.removeEvent = function (e, i, s) {
            function n(i, s) {
              var n = e.removeEventListener || t.removeEventListenerPolyfill;
              n && n.call(e, i, s, !1);
            }
            function o(t) {
              var s;
              if (e.nodeName) {
                if (i) {
                  var o = {};
                  o[i] = !0;
                } else o = t;
                X(o, function (e, i) {
                  if (t[i]) for (s = t[i].length; s--; ) n(i, t[i][s].fn);
                });
              }
            }
            var r;
            ["protoEvents", "hcEvents"].forEach(function (t, a) {
              var h = (a = a ? e : e.prototype) && a[t];
              h &&
                (i
                  ? ((r = h[i] || []),
                    s
                      ? ((h[i] = r.filter(function (t) {
                          return s !== t.fn;
                        })),
                        n(i, s))
                      : (o(h), (h[i] = [])))
                  : (o(h), (a[t] = {})));
            });
          }),
          K = (t.fireEvent = function (t, e, i, s) {
            var n;
            if (
              ((i = i || {}), a.createEvent && (t.dispatchEvent || t.fireEvent))
            ) {
              var o = a.createEvent("Events");
              o.initEvent(e, !0, !0),
                w(o, i),
                t.dispatchEvent ? t.dispatchEvent(o) : t.fireEvent(e, o);
            } else
              i.target ||
                w(i, {
                  preventDefault: function () {
                    i.defaultPrevented = !0;
                  },
                  target: t,
                  type: e,
                }),
                (function (e, s) {
                  void 0 === e && (e = []), void 0 === s && (s = []);
                  var o = 0,
                    r = 0,
                    a = e.length + s.length;
                  for (n = 0; n < a; n++)
                    !1 ===
                      (e[o]
                        ? s[r]
                          ? e[o].order <= s[r].order
                            ? e[o++]
                            : s[r++]
                          : e[o++]
                        : s[r++]
                      ).fn.call(t, i) && i.preventDefault();
                })(
                  t.protoEvents && t.protoEvents[e],
                  t.hcEvents && t.hcEvents[e]
                );
            s && !i.defaultPrevented && s.call(t, i);
          }),
          Z = (t.animate = function (t, s, n) {
            var o,
              r,
              a,
              h = "";
            if (!i(n)) {
              var l = arguments;
              n = { duration: l[2], easing: l[3], complete: l[4] };
            }
            m(n.duration) || (n.duration = 400),
              (n.easing =
                "function" == typeof n.easing
                  ? n.easing
                  : Math[n.easing] || Math.easeInOutSine),
              (n.curAnim = e(s)),
              X(s, function (e, i) {
                $(t, i),
                  (a = new c(t, n, i)),
                  (r = null),
                  "d" === i && u(s.d)
                    ? ((a.paths = a.initPath(t, t.pathArray, s.d)),
                      (a.toD = s.d),
                      (o = 0),
                      (r = 1))
                    : t.attr
                    ? (o = t.attr(i))
                    : ((o = parseFloat(F(t, i)) || 0),
                      "opacity" !== i && (h = "px")),
                  r || (r = e),
                  r && r.match && r.match("px") && (r = r.replace(/px/g, "")),
                  a.run(o, r, h);
              });
          }),
          J = (t.seriesType = function (i, s, n, o, r) {
            var a = t.getOptions(),
              h = t.seriesTypes;
            return (
              (a.plotOptions[i] = e(a.plotOptions[s], n)),
              (h[i] = T(h[s] || function () {}, o)),
              (h[i].prototype.type = i),
              r && (h[i].prototype.pointClass = T(t.Point, r)),
              h[i]
            );
          }),
          Q = (t.uniqueKey = (function () {
            var t = Math.random().toString(36).substring(2, 9),
              e = 0;
            return function () {
              return "highcharts-" + t + "-" + e++;
            };
          })()),
          tt = (t.isFunction = function (t) {
            return "function" == typeof t;
          });
        return (
          h.jQuery &&
            (h.jQuery.fn.highcharts = function () {
              var e = [].slice.call(arguments);
              if (this[0])
                return e[0]
                  ? (new t[p(e[0]) ? e.shift() : "Chart"](this[0], e[0], e[1]),
                    this)
                  : r[s(this[0], "data-highcharts-chart")];
            }),
          {
            Fx: t.Fx,
            addEvent: V,
            animate: Z,
            animObject: R,
            arrayMax: z,
            arrayMin: I,
            attr: s,
            clamp: function (t, e, i) {
              return t > e ? (t < i ? t : i) : e;
            },
            clearTimeout: k,
            correctFloat: B,
            createElement: S,
            css: M,
            defined: y,
            destroyObjectProperties: N,
            discardElement: H,
            erase: v,
            error: l,
            extend: w,
            extendClass: T,
            find: U,
            fireEvent: K,
            format: E,
            getMagnitude: O,
            getNestedProperty: o,
            getStyle: F,
            inArray: G,
            isArray: u,
            isClass: g,
            isDOMElement: f,
            isFunction: tt,
            isNumber: m,
            isObject: i,
            isString: p,
            merge: e,
            normalizeTickInterval: L,
            numberFormat: _,
            objectEach: X,
            offset: Y,
            pad: C,
            pick: n,
            pInt: d,
            relativeLength: A,
            removeEvent: q,
            seriesType: J,
            setAnimation: W,
            splat: x,
            stableSort: P,
            stop: $,
            syncTimeout: b,
            timeUnits: j,
            uniqueKey: Q,
            wrap: D,
          }
        );
      }),
      e(
        i,
        "parts/Color.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.isNumber,
            s = e.merge,
            n = e.pInt;
          return (
            (e = (function () {
              function t(e) {
                if (
                  ((this.parsers = [
                    {
                      regex:
                        /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                      parse: function (t) {
                        return [
                          n(t[1]),
                          n(t[2]),
                          n(t[3]),
                          parseFloat(t[4], 10),
                        ];
                      },
                    },
                    {
                      regex:
                        /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                      parse: function (t) {
                        return [n(t[1]), n(t[2]), n(t[3]), 1];
                      },
                    },
                  ]),
                  (this.rgba = []),
                  !(this instanceof t))
                )
                  return new t(e);
                this.init(e);
              }
              return (
                (t.parse = function (e) {
                  return new t(e);
                }),
                (t.prototype.init = function (e) {
                  var i, s;
                  if (
                    (this.input = e =
                      t.names[e && e.toLowerCase ? e.toLowerCase() : ""] ||
                      e) &&
                    e.stops
                  )
                    this.stops = e.stops.map(function (e) {
                      return new t(e[1]);
                    });
                  else {
                    if (e && e.charAt && "#" === e.charAt()) {
                      var n = e.length;
                      (e = parseInt(e.substr(1), 16)),
                        7 === n
                          ? (i = [
                              (16711680 & e) >> 16,
                              (65280 & e) >> 8,
                              255 & e,
                              1,
                            ])
                          : 4 === n &&
                            (i = [
                              ((3840 & e) >> 4) | ((3840 & e) >> 8),
                              ((240 & e) >> 4) | (240 & e),
                              ((15 & e) << 4) | (15 & e),
                              1,
                            ]);
                    }
                    if (!i)
                      for (s = this.parsers.length; s-- && !i; ) {
                        var o = this.parsers[s];
                        (n = o.regex.exec(e)) && (i = o.parse(n));
                      }
                  }
                  this.rgba = i || [];
                }),
                (t.prototype.get = function (t) {
                  var e = this.input,
                    n = this.rgba;
                  if (void 0 !== this.stops) {
                    var o = s(e);
                    (o.stops = [].concat(o.stops)),
                      this.stops.forEach(function (e, i) {
                        o.stops[i] = [o.stops[i][0], e.get(t)];
                      });
                  } else
                    o =
                      n && i(n[0])
                        ? "rgb" === t || (!t && 1 === n[3])
                          ? "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")"
                          : "a" === t
                          ? n[3]
                          : "rgba(" + n.join(",") + ")"
                        : e;
                  return o;
                }),
                (t.prototype.brighten = function (t) {
                  var e,
                    s = this.rgba;
                  if (this.stops)
                    this.stops.forEach(function (e) {
                      e.brighten(t);
                    });
                  else if (i(t) && 0 !== t)
                    for (e = 0; 3 > e; e++)
                      (s[e] += n(255 * t)),
                        0 > s[e] && (s[e] = 0),
                        255 < s[e] && (s[e] = 255);
                  return this;
                }),
                (t.prototype.setOpacity = function (t) {
                  return (this.rgba[3] = t), this;
                }),
                (t.prototype.tweenTo = function (t, e) {
                  var i = this.rgba,
                    s = t.rgba;
                  return (
                    s.length && i && i.length
                      ? ((t = 1 !== s[3] || 1 !== i[3]),
                        (e =
                          (t ? "rgba(" : "rgb(") +
                          Math.round(s[0] + (i[0] - s[0]) * (1 - e)) +
                          "," +
                          Math.round(s[1] + (i[1] - s[1]) * (1 - e)) +
                          "," +
                          Math.round(s[2] + (i[2] - s[2]) * (1 - e)) +
                          (t ? "," + (s[3] + (i[3] - s[3]) * (1 - e)) : "") +
                          ")"))
                      : (e = t.input || "none"),
                    e
                  );
                }),
                (t.names = { white: "#ffffff", black: "#000000" }),
                t
              );
            })()),
            (t.Color = e),
            (t.color = e.parse),
            t.Color
          );
        }
      ),
      e(
        i,
        "parts/SVGElement.js",
        [i["parts/Color.js"], i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e, i) {
          var s = e.deg2rad,
            n = e.doc,
            o = e.hasTouch,
            r = e.isFirefox,
            a = e.noop,
            h = e.svg,
            l = e.SVG_NS,
            c = e.win,
            d = i.animate,
            p = i.animObject,
            u = i.attr,
            f = i.createElement,
            g = i.css,
            m = i.defined,
            v = i.erase,
            y = i.extend,
            x = i.fireEvent,
            b = i.inArray,
            k = i.isArray,
            w = i.isFunction,
            M = i.isNumber,
            S = i.isString,
            T = i.merge,
            C = i.objectEach,
            A = i.pick,
            D = i.pInt,
            E = i.stop,
            O = i.uniqueKey;
          return (
            (i = (function () {
              function i() {
                (this.height = this.element = void 0),
                  (this.opacity = 1),
                  (this.renderer = void 0),
                  (this.SVG_NS = l),
                  (this.symbolCustomAttribs =
                    "x y width height r start end innerR anchorX anchorY rounded".split(
                      " "
                    )),
                  (this.textProps =
                    "color cursor direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(
                      " "
                    )),
                  (this.width = void 0);
              }
              return (
                (i.prototype._defaultGetter = function (t) {
                  return (
                    (t = A(
                      this[t + "Value"],
                      this[t],
                      this.element ? this.element.getAttribute(t) : null,
                      0
                    )),
                    /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)),
                    t
                  );
                }),
                (i.prototype._defaultSetter = function (t, e, i) {
                  i.setAttribute(e, t);
                }),
                (i.prototype.add = function (t) {
                  var e = this.renderer,
                    i = this.element;
                  if (
                    (t && (this.parentGroup = t),
                    (this.parentInverted = t && t.inverted),
                    void 0 !== this.textStr && e.buildText(this),
                    (this.added = !0),
                    !t || t.handleZ || this.zIndex)
                  )
                    var s = this.zIndexSetter();
                  return (
                    s || (t ? t.element : e.box).appendChild(i),
                    this.onAdd && this.onAdd(),
                    this
                  );
                }),
                (i.prototype.addClass = function (t, e) {
                  var i = e ? "" : this.attr("class") || "";
                  return (
                    (t = (t || "")
                      .split(/ /g)
                      .reduce(
                        function (t, e) {
                          return -1 === i.indexOf(e) && t.push(e), t;
                        },
                        i ? [i] : []
                      )
                      .join(" ")),
                    t !== i && this.attr("class", t),
                    this
                  );
                }),
                (i.prototype.afterSetters = function () {
                  this.doTransform &&
                    (this.updateTransform(), (this.doTransform = !1));
                }),
                (i.prototype.align = function (t, e, i) {
                  var s,
                    n,
                    o,
                    r = {},
                    a = this.renderer,
                    h = a.alignedObjects;
                  t
                    ? ((this.alignOptions = t),
                      (this.alignByTranslate = e),
                      (!i || S(i)) &&
                        ((this.alignTo = s = i || "renderer"),
                        v(h, this),
                        h.push(this),
                        (i = void 0)))
                    : ((t = this.alignOptions),
                      (e = this.alignByTranslate),
                      (s = this.alignTo)),
                    (i = A(i, a[s], a)),
                    (s = t.align),
                    (a = t.verticalAlign),
                    (h = (i.x || 0) + (t.x || 0));
                  var l = (i.y || 0) + (t.y || 0);
                  return (
                    "right" === s ? (n = 1) : "center" === s && (n = 2),
                    n && (h += (i.width - (t.width || 0)) / n),
                    (r[e ? "translateX" : "x"] = Math.round(h)),
                    "bottom" === a ? (o = 1) : "middle" === a && (o = 2),
                    o && (l += (i.height - (t.height || 0)) / o),
                    (r[e ? "translateY" : "y"] = Math.round(l)),
                    this[this.placed ? "animate" : "attr"](r),
                    (this.placed = !0),
                    (this.alignAttr = r),
                    this
                  );
                }),
                (i.prototype.alignSetter = function (t) {
                  var e = { left: "start", center: "middle", right: "end" };
                  e[t] &&
                    ((this.alignValue = t),
                    this.element.setAttribute("text-anchor", e[t]));
                }),
                (i.prototype.animate = function (t, e, i) {
                  var s = p(A(e, this.renderer.globalAnimation, !0));
                  return (
                    A(n.hidden, n.msHidden, n.webkitHidden, !1) &&
                      (s.duration = 0),
                    0 !== s.duration
                      ? (i && (s.complete = i), d(this, t, s))
                      : (this.attr(t, void 0, i),
                        C(
                          t,
                          function (t, e) {
                            s.step && s.step.call(this, t, { prop: e, pos: 1 });
                          },
                          this
                        )),
                    this
                  );
                }),
                (i.prototype.applyTextOutline = function (t) {
                  var i,
                    s = this.element;
                  -1 !== t.indexOf("contrast") &&
                    (t = t.replace(
                      /contrast/g,
                      this.renderer.getContrast(s.style.fill)
                    )),
                    (t = t.split(" "));
                  var n = t[t.length - 1];
                  if ((i = t[0]) && "none" !== i && e.svg) {
                    (this.fakeTS = !0),
                      (t = [].slice.call(s.getElementsByTagName("tspan"))),
                      (this.ySetter = this.xSetter),
                      (i = i.replace(/(^[\d\.]+)(.*?)$/g, function (t, e, i) {
                        return 2 * e + i;
                      })),
                      this.removeTextOutline(t);
                    var o =
                        !!s.textContent &&
                        /^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(
                          s.textContent
                        ),
                      a = s.firstChild;
                    t.forEach(function (t, e) {
                      0 === e &&
                        (t.setAttribute("x", s.getAttribute("x")),
                        (e = s.getAttribute("y")),
                        t.setAttribute("y", e || 0),
                        null === e && s.setAttribute("y", 0)),
                        (e = t.cloneNode(!0)),
                        u(o && !r ? t : e, {
                          class: "highcharts-text-outline",
                          fill: n,
                          stroke: n,
                          "stroke-width": i,
                          "stroke-linejoin": "round",
                        }),
                        s.insertBefore(e, a);
                    }),
                      o &&
                        r &&
                        t[0] &&
                        ((t = t[0].cloneNode(!0)),
                        (t.textContent = " "),
                        s.insertBefore(t, a));
                  }
                }),
                (i.prototype.attr = function (t, e, i, s) {
                  var n,
                    o,
                    r,
                    a = this.element,
                    h = this,
                    l = this.symbolCustomAttribs;
                  if ("string" == typeof t && void 0 !== e) {
                    var c = t;
                    (t = {}), (t[c] = e);
                  }
                  return (
                    "string" == typeof t
                      ? (h = (this[t + "Getter"] || this._defaultGetter).call(
                          this,
                          t,
                          a
                        ))
                      : (C(
                          t,
                          function (e, i) {
                            (o = !1),
                              s || E(this, i),
                              this.symbolName &&
                                -1 !== b(i, l) &&
                                (n || (this.symbolAttr(t), (n = !0)), (o = !0)),
                              !this.rotation ||
                                ("x" !== i && "y" !== i) ||
                                (this.doTransform = !0),
                              o ||
                                ((r =
                                  this[i + "Setter"] || this._defaultSetter),
                                r.call(this, e, i, a),
                                !this.styledMode &&
                                  this.shadows &&
                                  /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(
                                    i
                                  ) &&
                                  this.updateShadows(i, e, r));
                          },
                          this
                        ),
                        this.afterSetters()),
                    i && i.call(this),
                    h
                  );
                }),
                (i.prototype.clip = function (t) {
                  return this.attr(
                    "clip-path",
                    t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none"
                  );
                }),
                (i.prototype.crisp = function (t, e) {
                  e = e || t.strokeWidth || 0;
                  var i = (Math.round(e) % 2) / 2;
                  return (
                    (t.x = Math.floor(t.x || this.x || 0) + i),
                    (t.y = Math.floor(t.y || this.y || 0) + i),
                    (t.width = Math.floor(
                      (t.width || this.width || 0) - 2 * i
                    )),
                    (t.height = Math.floor(
                      (t.height || this.height || 0) - 2 * i
                    )),
                    m(t.strokeWidth) && (t.strokeWidth = e),
                    t
                  );
                }),
                (i.prototype.complexColor = function (e, i, s) {
                  var n,
                    o,
                    r,
                    a,
                    h,
                    l,
                    c,
                    d,
                    p,
                    u,
                    f,
                    g = this.renderer,
                    v = [];
                  x(
                    this.renderer,
                    "complexColor",
                    { args: arguments },
                    function () {
                      if (
                        (e.radialGradient
                          ? (o = "radialGradient")
                          : e.linearGradient && (o = "linearGradient"),
                        o)
                      ) {
                        if (
                          ((r = e[o]),
                          (h = g.gradients),
                          (l = e.stops),
                          (p = s.radialReference),
                          k(r) &&
                            (e[o] = r =
                              {
                                x1: r[0],
                                y1: r[1],
                                x2: r[2],
                                y2: r[3],
                                gradientUnits: "userSpaceOnUse",
                              }),
                          "radialGradient" === o &&
                            p &&
                            !m(r.gradientUnits) &&
                            ((a = r),
                            (r = T(r, g.getRadialAttr(p, a), {
                              gradientUnits: "userSpaceOnUse",
                            }))),
                          C(r, function (t, e) {
                            "id" !== e && v.push(e, t);
                          }),
                          C(l, function (t) {
                            v.push(t);
                          }),
                          (v = v.join(",")),
                          h[v])
                        )
                          u = h[v].attr("id");
                        else {
                          r.id = u = O();
                          var y = (h[v] = g
                            .createElement(o)
                            .attr(r)
                            .add(g.defs));
                          (y.radAttr = a),
                            (y.stops = []),
                            l.forEach(function (e) {
                              0 === e[1].indexOf("rgba")
                                ? ((n = t.parse(e[1])),
                                  (c = n.get("rgb")),
                                  (d = n.get("a")))
                                : ((c = e[1]), (d = 1)),
                                (e = g
                                  .createElement("stop")
                                  .attr({
                                    offset: e[0],
                                    "stop-color": c,
                                    "stop-opacity": d,
                                  })
                                  .add(y)),
                                y.stops.push(e);
                            });
                        }
                        (f = "url(" + g.url + "#" + u + ")"),
                          s.setAttribute(i, f),
                          (s.gradient = v),
                          (e.toString = function () {
                            return f;
                          });
                      }
                    }
                  );
                }),
                (i.prototype.css = function (t) {
                  var e = this.styles,
                    i = {},
                    s = this.element,
                    n = "",
                    o = !e,
                    r = ["textOutline", "textOverflow", "width"];
                  if (
                    (t && t.color && (t.fill = t.color),
                    e &&
                      C(t, function (t, s) {
                        e && e[s] !== t && ((i[s] = t), (o = !0));
                      }),
                    o)
                  ) {
                    if ((e && (t = y(e, i)), t))
                      if (null === t.width || "auto" === t.width)
                        delete this.textWidth;
                      else if ("text" === s.nodeName.toLowerCase() && t.width)
                        var a = (this.textWidth = D(t.width));
                    if (
                      ((this.styles = t),
                      a && !h && this.renderer.forExport && delete t.width,
                      s.namespaceURI === this.SVG_NS)
                    ) {
                      var l = function (t, e) {
                        return "-" + e.toLowerCase();
                      };
                      C(t, function (t, e) {
                        -1 === r.indexOf(e) &&
                          (n += e.replace(/([A-Z])/g, l) + ":" + t + ";");
                      }),
                        n && u(s, "style", n);
                    } else g(s, t);
                    this.added &&
                      ("text" === this.element.nodeName &&
                        this.renderer.buildText(this),
                      t &&
                        t.textOutline &&
                        this.applyTextOutline(t.textOutline));
                  }
                  return this;
                }),
                (i.prototype.dashstyleSetter = function (t) {
                  var e = this["stroke-width"];
                  if (
                    ("inherit" === e && (e = 1), (t = t && t.toLowerCase()))
                  ) {
                    var i = t
                      .replace("shortdashdotdot", "3,1,1,1,1,1,")
                      .replace("shortdashdot", "3,1,1,1")
                      .replace("shortdot", "1,1,")
                      .replace("shortdash", "3,1,")
                      .replace("longdash", "8,3,")
                      .replace(/dot/g, "1,3,")
                      .replace("dash", "4,3,")
                      .replace(/,$/, "")
                      .split(",");
                    for (t = i.length; t--; ) i[t] = "" + D(i[t]) * A(e, NaN);
                    (t = i.join(",").replace(/NaN/g, "none")),
                      this.element.setAttribute("stroke-dasharray", t);
                  }
                }),
                (i.prototype.destroy = function () {
                  var t = this,
                    e = t.element || {},
                    i = t.renderer,
                    s =
                      (i.isSVG && "SPAN" === e.nodeName && t.parentGroup) ||
                      void 0,
                    n = e.ownerSVGElement;
                  if (
                    ((e.onclick =
                      e.onmouseout =
                      e.onmouseover =
                      e.onmousemove =
                      e.point =
                        null),
                    E(t),
                    t.clipPath && n)
                  ) {
                    var o = t.clipPath;
                    [].forEach.call(
                      n.querySelectorAll("[clip-path],[CLIP-PATH]"),
                      function (t) {
                        -1 <
                          t.getAttribute("clip-path").indexOf(o.element.id) &&
                          t.removeAttribute("clip-path");
                      }
                    ),
                      (t.clipPath = o.destroy());
                  }
                  if (t.stops) {
                    for (n = 0; n < t.stops.length; n++) t.stops[n].destroy();
                    (t.stops.length = 0), (t.stops = void 0);
                  }
                  for (
                    t.safeRemoveChild(e), i.styledMode || t.destroyShadows();
                    s && s.div && 0 === s.div.childNodes.length;

                  )
                    (e = s.parentGroup),
                      t.safeRemoveChild(s.div),
                      delete s.div,
                      (s = e);
                  t.alignTo && v(i.alignedObjects, t),
                    C(t, function (e, i) {
                      t[i] &&
                        t[i].parentGroup === t &&
                        t[i].destroy &&
                        t[i].destroy(),
                        delete t[i];
                    });
                }),
                (i.prototype.destroyShadows = function () {
                  (this.shadows || []).forEach(function (t) {
                    this.safeRemoveChild(t);
                  }, this),
                    (this.shadows = void 0);
                }),
                (i.prototype.destroyTextPath = function (t, e) {
                  var i = t.getElementsByTagName("text")[0];
                  if (i) {
                    if (
                      (i.removeAttribute("dx"),
                      i.removeAttribute("dy"),
                      e.element.setAttribute("id", ""),
                      this.textPathWrapper &&
                        i.getElementsByTagName("textPath").length)
                    ) {
                      for (
                        t = this.textPathWrapper.element.childNodes;
                        t.length;

                      )
                        i.appendChild(t[0]);
                      i.removeChild(this.textPathWrapper.element);
                    }
                  } else
                    (t.getAttribute("dx") || t.getAttribute("dy")) &&
                      (t.removeAttribute("dx"), t.removeAttribute("dy"));
                  this.textPathWrapper &&
                    (this.textPathWrapper = this.textPathWrapper.destroy());
                }),
                (i.prototype.dSetter = function (t, e, i) {
                  k(t) &&
                    ("string" == typeof t[0] &&
                      (t = this.renderer.pathToSegments(t)),
                    (this.pathArray = t),
                    (t = t.reduce(function (t, e, i) {
                      return e && e.join
                        ? (i ? t + " " : "") + e.join(" ")
                        : (e || "").toString();
                    }, ""))),
                    /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"),
                    this[e] !== t && (i.setAttribute(e, t), (this[e] = t));
                }),
                (i.prototype.fadeOut = function (t) {
                  var e = this;
                  e.animate(
                    { opacity: 0 },
                    {
                      duration: A(t, 150),
                      complete: function () {
                        e.attr({ y: -9999 }).hide();
                      },
                    }
                  );
                }),
                (i.prototype.fillSetter = function (t, e, i) {
                  "string" == typeof t
                    ? i.setAttribute(e, t)
                    : t && this.complexColor(t, e, i);
                }),
                (i.prototype.getBBox = function (t, e) {
                  var n,
                    o = this.renderer,
                    r = this.element,
                    a = this.styles,
                    h = this.textStr,
                    l = o.cache,
                    c = o.cacheKeys,
                    d = r.namespaceURI === this.SVG_NS;
                  e = A(e, this.rotation, 0);
                  var p = o.styledMode
                    ? r && i.prototype.getStyle.call(r, "font-size")
                    : a && a.fontSize;
                  if (m(h)) {
                    var u = h.toString();
                    -1 === u.indexOf("<") && (u = u.replace(/[0-9]/g, "0")),
                      (u += [
                        "",
                        e,
                        p,
                        this.textWidth,
                        a && a.textOverflow,
                        a && a.fontWeight,
                      ].join());
                  }
                  if ((u && !t && (n = l[u]), !n)) {
                    if (d || o.forExport) {
                      try {
                        var f =
                          this.fakeTS &&
                          function (t) {
                            [].forEach.call(
                              r.querySelectorAll(".highcharts-text-outline"),
                              function (e) {
                                e.style.display = t;
                              }
                            );
                          };
                        w(f) && f("none"),
                          (n = r.getBBox
                            ? y({}, r.getBBox())
                            : { width: r.offsetWidth, height: r.offsetHeight }),
                          w(f) && f("");
                      } catch (t) {}
                      (!n || 0 > n.width) && (n = { width: 0, height: 0 });
                    } else n = this.htmlGetBBox();
                    if (
                      (o.isSVG &&
                        ((t = n.width),
                        (o = n.height),
                        d &&
                          (n.height = o =
                            { "11px,17": 14, "13px,20": 16 }[
                              a && a.fontSize + "," + Math.round(o)
                            ] || o),
                        e &&
                          ((a = e * s),
                          (n.width =
                            Math.abs(o * Math.sin(a)) +
                            Math.abs(t * Math.cos(a))),
                          (n.height =
                            Math.abs(o * Math.cos(a)) +
                            Math.abs(t * Math.sin(a))))),
                      u && 0 < n.height)
                    ) {
                      for (; 250 < c.length; ) delete l[c.shift()];
                      l[u] || c.push(u), (l[u] = n);
                    }
                  }
                  return n;
                }),
                (i.prototype.getStyle = function (t) {
                  return c
                    .getComputedStyle(this.element || this, "")
                    .getPropertyValue(t);
                }),
                (i.prototype.hasClass = function (t) {
                  return -1 !== ("" + this.attr("class")).split(" ").indexOf(t);
                }),
                (i.prototype.hide = function (t) {
                  return (
                    t
                      ? this.attr({ y: -9999 })
                      : this.attr({ visibility: "hidden" }),
                    this
                  );
                }),
                (i.prototype.htmlGetBBox = function () {
                  return { height: 0, width: 0, x: 0, y: 0 };
                }),
                (i.prototype.init = function (t, e) {
                  (this.element =
                    "span" === e ? f(e) : n.createElementNS(this.SVG_NS, e)),
                    (this.renderer = t),
                    x(this, "afterInit");
                }),
                (i.prototype.invert = function (t) {
                  return (this.inverted = t), this.updateTransform(), this;
                }),
                (i.prototype.on = function (t, e) {
                  var i,
                    s,
                    n,
                    r = this.element;
                  return (
                    o && "click" === t
                      ? ((r.ontouchstart = function (t) {
                          (i = t.touches[0].clientX),
                            (s = t.touches[0].clientY);
                        }),
                        (r.ontouchend = function (t) {
                          (i &&
                            4 <=
                              Math.sqrt(
                                Math.pow(i - t.changedTouches[0].clientX, 2) +
                                  Math.pow(s - t.changedTouches[0].clientY, 2)
                              )) ||
                            e.call(r, t),
                            (n = !0),
                            t.preventDefault();
                        }),
                        (r.onclick = function (t) {
                          n || e.call(r, t);
                        }))
                      : (r["on" + t] = e),
                    this
                  );
                }),
                (i.prototype.opacitySetter = function (t, e, i) {
                  (this[e] = t), i.setAttribute(e, t);
                }),
                (i.prototype.removeClass = function (t) {
                  return this.attr(
                    "class",
                    ("" + this.attr("class")).replace(
                      S(t) ? new RegExp(" ?" + t + " ?") : t,
                      ""
                    )
                  );
                }),
                (i.prototype.removeTextOutline = function (t) {
                  for (var e, i = t.length; i--; )
                    (e = t[i]),
                      "highcharts-text-outline" === e.getAttribute("class") &&
                        v(t, this.element.removeChild(e));
                }),
                (i.prototype.safeRemoveChild = function (t) {
                  var e = t.parentNode;
                  e && e.removeChild(t);
                }),
                (i.prototype.setRadialReference = function (t) {
                  var e =
                    this.element.gradient &&
                    this.renderer.gradients[this.element.gradient];
                  return (
                    (this.element.radialReference = t),
                    e &&
                      e.radAttr &&
                      e.animate(this.renderer.getRadialAttr(t, e.radAttr)),
                    this
                  );
                }),
                (i.prototype.setTextPath = function (t, e) {
                  var i = this.element,
                    s = { textAnchor: "text-anchor" },
                    n = !1,
                    o = this.textPathWrapper,
                    r = !o;
                  e = T(
                    !0,
                    {
                      enabled: !0,
                      attributes: {
                        dy: -5,
                        startOffset: "50%",
                        textAnchor: "middle",
                      },
                    },
                    e
                  );
                  var h = e.attributes;
                  if (t && e && e.enabled) {
                    o && null === o.element.parentNode
                      ? ((r = !0), (o = o.destroy()))
                      : o &&
                        this.removeTextOutline.call(
                          o.parentGroup,
                          [].slice.call(i.getElementsByTagName("tspan"))
                        ),
                      this.options &&
                        this.options.padding &&
                        (h.dx = -this.options.padding),
                      o ||
                        ((this.textPathWrapper = o =
                          this.renderer.createElement("textPath")),
                        (n = !0));
                    var l = o.element;
                    if (
                      ((e = t.element.getAttribute("id")) ||
                        t.element.setAttribute("id", (e = O())),
                      r)
                    )
                      for (t = i.getElementsByTagName("tspan"); t.length; )
                        t[0].setAttribute("y", 0),
                          M(h.dx) && t[0].setAttribute("x", -h.dx),
                          l.appendChild(t[0]);
                    n &&
                      o &&
                      o.add({ element: this.text ? this.text.element : i }),
                      l.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        "href",
                        this.renderer.url + "#" + e
                      ),
                      m(h.dy) &&
                        (l.parentNode.setAttribute("dy", h.dy), delete h.dy),
                      m(h.dx) &&
                        (l.parentNode.setAttribute("dx", h.dx), delete h.dx),
                      C(h, function (t, e) {
                        l.setAttribute(s[e] || e, t);
                      }),
                      i.removeAttribute("transform"),
                      this.removeTextOutline.call(
                        o,
                        [].slice.call(i.getElementsByTagName("tspan"))
                      ),
                      this.text &&
                        !this.renderer.styledMode &&
                        this.attr({ fill: "none", "stroke-width": 0 }),
                      (this.applyTextOutline = this.updateTransform = a);
                  } else
                    o &&
                      (delete this.updateTransform,
                      delete this.applyTextOutline,
                      this.destroyTextPath(i, t),
                      this.updateTransform(),
                      this.options &&
                        this.options.rotation &&
                        this.applyTextOutline(this.options.style.textOutline));
                  return this;
                }),
                (i.prototype.shadow = function (t, e, i) {
                  var s,
                    n = [],
                    o = this.element,
                    r = !1,
                    a = this.oldShadowOptions,
                    h = {
                      color: "#000000",
                      offsetX: 1,
                      offsetY: 1,
                      opacity: 0.15,
                      width: 3,
                    };
                  if (
                    (!0 === t ? (s = h) : "object" == typeof t && (s = y(h, t)),
                    s &&
                      (s &&
                        a &&
                        C(s, function (t, e) {
                          t !== a[e] && (r = !0);
                        }),
                      r && this.destroyShadows(),
                      (this.oldShadowOptions = s)),
                    s)
                  ) {
                    if (!this.shadows) {
                      var l = s.opacity / s.width,
                        c = this.parentInverted
                          ? "translate(-1,-1)"
                          : "translate(" + s.offsetX + ", " + s.offsetY + ")";
                      for (h = 1; h <= s.width; h++) {
                        var d = o.cloneNode(!1),
                          p = 2 * s.width + 1 - 2 * h;
                        u(d, {
                          stroke: t.color || "#000000",
                          "stroke-opacity": l * h,
                          "stroke-width": p,
                          transform: c,
                          fill: "none",
                        }),
                          d.setAttribute(
                            "class",
                            (d.getAttribute("class") || "") +
                              " highcharts-shadow"
                          ),
                          i &&
                            (u(d, "height", Math.max(u(d, "height") - p, 0)),
                            (d.cutHeight = p)),
                          e
                            ? e.element.appendChild(d)
                            : o.parentNode && o.parentNode.insertBefore(d, o),
                          n.push(d);
                      }
                      this.shadows = n;
                    }
                  } else this.destroyShadows();
                  return this;
                }),
                (i.prototype.show = function (t) {
                  return this.attr({ visibility: t ? "inherit" : "visible" });
                }),
                (i.prototype.strokeSetter = function (t, e, s) {
                  (this[e] = t),
                    this.stroke && this["stroke-width"]
                      ? (i.prototype.fillSetter.call(
                          this,
                          this.stroke,
                          "stroke",
                          s
                        ),
                        s.setAttribute("stroke-width", this["stroke-width"]),
                        (this.hasStroke = !0))
                      : "stroke-width" === e && 0 === t && this.hasStroke
                      ? (s.removeAttribute("stroke"), (this.hasStroke = !1))
                      : this.renderer.styledMode &&
                        this["stroke-width"] &&
                        (s.setAttribute("stroke-width", this["stroke-width"]),
                        (this.hasStroke = !0));
                }),
                (i.prototype.strokeWidth = function () {
                  if (!this.renderer.styledMode)
                    return this["stroke-width"] || 0;
                  var t = this.getStyle("stroke-width"),
                    e = 0;
                  if (t.indexOf("px") === t.length - 2) e = D(t);
                  else if ("" !== t) {
                    var i = n.createElementNS(l, "rect");
                    u(i, { width: t, "stroke-width": 0 }),
                      this.element.parentNode.appendChild(i),
                      (e = i.getBBox().width),
                      i.parentNode.removeChild(i);
                  }
                  return e;
                }),
                (i.prototype.symbolAttr = function (t) {
                  var e = this;
                  "x y r start end width height innerR anchorX anchorY clockwise"
                    .split(" ")
                    .forEach(function (i) {
                      e[i] = A(t[i], e[i]);
                    }),
                    e.attr({
                      d: e.renderer.symbols[e.symbolName](
                        e.x,
                        e.y,
                        e.width,
                        e.height,
                        e
                      ),
                    });
                }),
                (i.prototype.textSetter = function (t) {
                  t !== this.textStr &&
                    (delete this.textPxLength,
                    (this.textStr = t),
                    this.added && this.renderer.buildText(this));
                }),
                (i.prototype.titleSetter = function (t) {
                  var e = this.element.getElementsByTagName("title")[0];
                  e ||
                    ((e = n.createElementNS(this.SVG_NS, "title")),
                    this.element.appendChild(e)),
                    e.firstChild && e.removeChild(e.firstChild),
                    e.appendChild(
                      n.createTextNode(
                        String(A(t, ""))
                          .replace(/<[^>]*>/g, "")
                          .replace(/&lt;/g, "<")
                          .replace(/&gt;/g, ">")
                      )
                    );
                }),
                (i.prototype.toFront = function () {
                  var t = this.element;
                  return t.parentNode.appendChild(t), this;
                }),
                (i.prototype.translate = function (t, e) {
                  return this.attr({ translateX: t, translateY: e });
                }),
                (i.prototype.updateShadows = function (t, e, i) {
                  var s = this.shadows;
                  if (s)
                    for (var n = s.length; n--; )
                      i.call(
                        s[n],
                        "height" === t
                          ? Math.max(e - (s[n].cutHeight || 0), 0)
                          : "d" === t
                          ? this.d
                          : e,
                        t,
                        s[n]
                      );
                }),
                (i.prototype.updateTransform = function () {
                  var t = this.translateX || 0,
                    e = this.translateY || 0,
                    i = this.scaleX,
                    s = this.scaleY,
                    n = this.inverted,
                    o = this.rotation,
                    r = this.matrix,
                    a = this.element;
                  n && ((t += this.width), (e += this.height)),
                    (t = ["translate(" + t + "," + e + ")"]),
                    m(r) && t.push("matrix(" + r.join(",") + ")"),
                    n
                      ? t.push("rotate(90) scale(-1,1)")
                      : o &&
                        t.push(
                          "rotate(" +
                            o +
                            " " +
                            A(this.rotationOriginX, a.getAttribute("x"), 0) +
                            " " +
                            A(this.rotationOriginY, a.getAttribute("y") || 0) +
                            ")"
                        ),
                    (m(i) || m(s)) &&
                      t.push("scale(" + A(i, 1) + " " + A(s, 1) + ")"),
                    t.length && a.setAttribute("transform", t.join(" "));
                }),
                (i.prototype.visibilitySetter = function (t, e, i) {
                  "inherit" === t
                    ? i.removeAttribute(e)
                    : this[e] !== t && i.setAttribute(e, t),
                    (this[e] = t);
                }),
                (i.prototype.xGetter = function (t) {
                  return (
                    "circle" === this.element.nodeName &&
                      ("x" === t ? (t = "cx") : "y" === t && (t = "cy")),
                    this._defaultGetter(t)
                  );
                }),
                (i.prototype.zIndexSetter = function (t, e) {
                  var i = this.renderer,
                    s = this.parentGroup,
                    n = (s || i).element || i.box,
                    o = this.element,
                    r = !1;
                  i = n === i.box;
                  var a,
                    h = this.added;
                  if (
                    (m(t)
                      ? (o.setAttribute("data-z-index", t),
                        (t = +t),
                        this[e] === t && (h = !1))
                      : m(this[e]) && o.removeAttribute("data-z-index"),
                    (this[e] = t),
                    h)
                  ) {
                    for (
                      (t = this.zIndex) && s && (s.handleZ = !0),
                        e = n.childNodes,
                        a = e.length - 1;
                      0 <= a && !r;
                      a--
                    ) {
                      (s = e[a]), (h = s.getAttribute("data-z-index"));
                      var l = !m(h);
                      s !== o &&
                        (0 > t && l && !i && !a
                          ? (n.insertBefore(o, e[a]), (r = !0))
                          : (D(h) <= t || (l && (!m(t) || 0 <= t))) &&
                            (n.insertBefore(o, e[a + 1] || null), (r = !0)));
                    }
                    r || (n.insertBefore(o, e[i ? 3 : 0] || null), (r = !0));
                  }
                  return r;
                }),
                i
              );
            })()),
            (i.prototype["stroke-widthSetter"] = i.prototype.strokeSetter),
            (i.prototype.yGetter = i.prototype.xGetter),
            (i.prototype.matrixSetter =
              i.prototype.rotationOriginXSetter =
              i.prototype.rotationOriginYSetter =
              i.prototype.rotationSetter =
              i.prototype.scaleXSetter =
              i.prototype.scaleYSetter =
              i.prototype.translateXSetter =
              i.prototype.translateYSetter =
              i.prototype.verticalAlignSetter =
                function (t, e) {
                  (this[e] = t), (this.doTransform = !0);
                }),
            (e.SVGElement = i),
            e.SVGElement
          );
        }
      ),
      e(
        i,
        "parts/SvgRenderer.js",
        [
          i["parts/Color.js"],
          i["parts/Globals.js"],
          i["parts/SVGElement.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i, s) {
          var n = t.parse,
            o = s.addEvent,
            r = s.attr,
            a = s.createElement,
            h = s.css,
            l = s.defined,
            c = s.destroyObjectProperties,
            d = s.extend,
            p = s.isArray,
            u = s.isNumber,
            f = s.isObject,
            g = s.isString,
            m = s.merge,
            v = s.objectEach,
            y = s.pick,
            x = s.pInt,
            b = s.removeEvent,
            k = s.splat,
            w = s.uniqueKey,
            M = e.charts,
            S = e.deg2rad,
            T = e.doc,
            C = e.isFirefox,
            A = e.isMS,
            D = e.isWebKit;
          s = e.noop;
          var E = e.svg,
            O = e.SVG_NS,
            L = e.symbolSizes,
            P = e.win;
          (t = e.SVGRenderer =
            function () {
              this.init.apply(this, arguments);
            }),
            d(t.prototype, {
              Element: i,
              SVG_NS: O,
              init: function (t, e, i, s, n, a, l) {
                var c = this.createElement("svg").attr({
                  version: "1.1",
                  class: "highcharts-root",
                });
                l || c.css(this.getStyle(s)),
                  (s = c.element),
                  t.appendChild(s),
                  r(t, "dir", "ltr"),
                  -1 === t.innerHTML.indexOf("xmlns") &&
                    r(s, "xmlns", this.SVG_NS),
                  (this.isSVG = !0),
                  (this.box = s),
                  (this.boxWrapper = c),
                  (this.alignedObjects = []),
                  (this.url =
                    (C || D) && T.getElementsByTagName("base").length
                      ? P.location.href
                          .split("#")[0]
                          .replace(/<[^>]*>/g, "")
                          .replace(/([\('\)])/g, "\\$1")
                          .replace(/ /g, "%20")
                      : ""),
                  this.createElement("desc")
                    .add()
                    .element.appendChild(
                      T.createTextNode("Created with Highcharts 8.1.0")
                    ),
                  (this.defs = this.createElement("defs").add()),
                  (this.allowHTML = a),
                  (this.forExport = n),
                  (this.styledMode = l),
                  (this.gradients = {}),
                  (this.cache = {}),
                  (this.cacheKeys = []),
                  (this.imgCount = 0),
                  this.setSize(e, i, !1);
                var d;
                C &&
                  t.getBoundingClientRect &&
                  ((e = function () {
                    h(t, { left: 0, top: 0 }),
                      (d = t.getBoundingClientRect()),
                      h(t, {
                        left: Math.ceil(d.left) - d.left + "px",
                        top: Math.ceil(d.top) - d.top + "px",
                      });
                  }),
                  e(),
                  (this.unSubPixelFix = o(P, "resize", e)));
              },
              definition: function (t) {
                function e(t, s) {
                  var n;
                  return (
                    k(t).forEach(function (t) {
                      var o = i.createElement(t.tagName),
                        r = {};
                      v(t, function (t, e) {
                        "tagName" !== e &&
                          "children" !== e &&
                          "textContent" !== e &&
                          (r[e] = t);
                      }),
                        o.attr(r),
                        o.add(s || i.defs),
                        t.textContent &&
                          o.element.appendChild(
                            T.createTextNode(t.textContent)
                          ),
                        e(t.children || [], o),
                        (n = o);
                    }),
                    n
                  );
                }
                var i = this;
                return e(t);
              },
              getStyle: function (t) {
                return (this.style = d(
                  {
                    fontFamily:
                      '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                    fontSize: "12px",
                  },
                  t
                ));
              },
              setStyle: function (t) {
                this.boxWrapper.css(this.getStyle(t));
              },
              isHidden: function () {
                return !this.boxWrapper.getBBox().width;
              },
              destroy: function () {
                var t = this.defs;
                return (
                  (this.box = null),
                  (this.boxWrapper = this.boxWrapper.destroy()),
                  c(this.gradients || {}),
                  (this.gradients = null),
                  t && (this.defs = t.destroy()),
                  this.unSubPixelFix && this.unSubPixelFix(),
                  (this.alignedObjects = null)
                );
              },
              createElement: function (t) {
                var e = new this.Element();
                return e.init(this, t), e;
              },
              draw: s,
              getRadialAttr: function (t, e) {
                return {
                  cx: t[0] - t[2] / 2 + e.cx * t[2],
                  cy: t[1] - t[2] / 2 + e.cy * t[2],
                  r: e.r * t[2],
                };
              },
              truncate: function (t, e, i, s, n, o, r) {
                var a,
                  h,
                  l = this,
                  c = t.rotation,
                  d = s ? 1 : 0,
                  p = (i || s).length,
                  u = p,
                  f = [],
                  g = function (t) {
                    e.firstChild && e.removeChild(e.firstChild),
                      t && e.appendChild(T.createTextNode(t));
                  },
                  m = function (o, a) {
                    if (((a = a || o), void 0 === f[a]))
                      if (e.getSubStringLength)
                        try {
                          f[a] = n + e.getSubStringLength(0, s ? a + 1 : a);
                        } catch (t) {}
                      else
                        l.getSpanWidth &&
                          (g(r(i || s, o)), (f[a] = n + l.getSpanWidth(t, e)));
                    return f[a];
                  };
                t.rotation = 0;
                var v = m(e.textContent.length);
                if ((h = n + v > o)) {
                  for (; d <= p; )
                    (u = Math.ceil((d + p) / 2)),
                      s && (a = r(s, u)),
                      (v = m(u, a && a.length - 1)),
                      d === p ? (d = p + 1) : v > o ? (p = u - 1) : (d = u);
                  0 === p
                    ? g("")
                    : (i && p === i.length - 1) || g(a || r(i || s, u));
                }
                return (
                  s && s.splice(0, u), (t.actualWidth = v), (t.rotation = c), h
                );
              },
              escapes: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;",
              },
              buildText: function (t) {
                var e,
                  i,
                  s = t.element,
                  n = this,
                  o = n.forExport,
                  a = y(t.textStr, "").toString(),
                  l = -1 !== a.indexOf("<"),
                  c = s.childNodes,
                  d = r(s, "x"),
                  p = t.styles,
                  u = t.textWidth,
                  f = p && p.lineHeight,
                  g = p && p.textOutline,
                  m = p && "ellipsis" === p.textOverflow,
                  b = p && "nowrap" === p.whiteSpace,
                  k = p && p.fontSize,
                  w = c.length;
                p = u && !t.added && this.box;
                var M = function (t) {
                    var e;
                    return (
                      n.styledMode ||
                        (e = /(px|em)$/.test(t && t.style.fontSize)
                          ? t.style.fontSize
                          : k || n.style.fontSize || 12),
                      f
                        ? x(f)
                        : n.fontMetrics(e, t.getAttribute("style") ? t : s).h
                    );
                  },
                  S = function (t, e) {
                    return (
                      v(n.escapes, function (i, s) {
                        (e && -1 !== e.indexOf(i)) ||
                          (t = t.toString().replace(new RegExp(i, "g"), s));
                      }),
                      t
                    );
                  },
                  C = function (t, e) {
                    var i = t.indexOf("<");
                    if (
                      ((t = t.substring(i, t.indexOf(">") - i)),
                      -1 !== (i = t.indexOf(e + "=")) &&
                        ((i = i + e.length + 1),
                        '"' === (e = t.charAt(i)) || "'" === e))
                    )
                      return (
                        (t = t.substring(i + 1)), t.substring(0, t.indexOf(e))
                      );
                  },
                  A = /<br.*?>/g,
                  D = [a, m, b, f, g, k, u].join();
                if (D !== t.textCache) {
                  for (t.textCache = D; w--; ) s.removeChild(c[w]);
                  l ||
                  g ||
                  m ||
                  u ||
                  (-1 !== a.indexOf(" ") && (!b || A.test(a)))
                    ? (p && p.appendChild(s),
                      l
                        ? ((a = n.styledMode
                            ? a
                                .replace(
                                  /<(b|strong)>/g,
                                  '<span class="highcharts-strong">'
                                )
                                .replace(
                                  /<(i|em)>/g,
                                  '<span class="highcharts-emphasized">'
                                )
                            : a
                                .replace(
                                  /<(b|strong)>/g,
                                  '<span style="font-weight:bold">'
                                )
                                .replace(
                                  /<(i|em)>/g,
                                  '<span style="font-style:italic">'
                                )),
                          (a = a
                            .replace(/<a/g, "<span")
                            .replace(/<\/(b|strong|i|em|a)>/g, "</span>")
                            .split(A)))
                        : (a = [a]),
                      (a = a.filter(function (t) {
                        return "" !== t;
                      })),
                      a.forEach(function (a, l) {
                        var c = 0,
                          p = 0;
                        a = a
                          .replace(/^\s+|\s+$/g, "")
                          .replace(/<span/g, "|||<span")
                          .replace(/<\/span>/g, "</span>|||");
                        var f = a.split("|||");
                        f.forEach(function (a) {
                          if ("" !== a || 1 === f.length) {
                            var g,
                              v,
                              y = {},
                              x = T.createElementNS(n.SVG_NS, "tspan");
                            if (
                              ((g = C(a, "class")) && r(x, "class", g),
                              (g = C(a, "style")) &&
                                ((g = g.replace(
                                  /(;| |^)color([ :])/,
                                  "$1fill$2"
                                )),
                                r(x, "style", g)),
                              (v = C(a, "href")) &&
                                !o &&
                                (r(x, "onclick", 'location.href="' + v + '"'),
                                r(x, "class", "highcharts-anchor"),
                                n.styledMode || h(x, { cursor: "pointer" })),
                              " " !==
                                (a = S(
                                  a.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " "
                                )))
                            ) {
                              if (
                                (x.appendChild(T.createTextNode(a)),
                                c ? (y.dx = 0) : l && null !== d && (y.x = d),
                                r(x, y),
                                s.appendChild(x),
                                !c &&
                                  i &&
                                  (!E && o && h(x, { display: "block" }),
                                  r(x, "dy", M(x))),
                                u)
                              ) {
                                var w = a
                                  .replace(/([^\^])-/g, "$1- ")
                                  .split(" ");
                                (y = !b && (1 < f.length || l || 1 < w.length)),
                                  (v = 0);
                                var A = M(x);
                                if (m)
                                  e = n.truncate(
                                    t,
                                    x,
                                    a,
                                    void 0,
                                    0,
                                    Math.max(0, u - parseInt(k || 12, 10)),
                                    function (t, e) {
                                      return t.substring(0, e) + "â€¦";
                                    }
                                  );
                                else if (y)
                                  for (; w.length; )
                                    w.length &&
                                      !b &&
                                      0 < v &&
                                      ((x = T.createElementNS(O, "tspan")),
                                      r(x, { dy: A, x: d }),
                                      g && r(x, "style", g),
                                      x.appendChild(
                                        T.createTextNode(
                                          w.join(" ").replace(/- /g, "-")
                                        )
                                      ),
                                      s.appendChild(x)),
                                      n.truncate(
                                        t,
                                        x,
                                        null,
                                        w,
                                        0 === v ? p : 0,
                                        u,
                                        function (t, e) {
                                          return w
                                            .slice(0, e)
                                            .join(" ")
                                            .replace(/- /g, "-");
                                        }
                                      ),
                                      (p = t.actualWidth),
                                      v++;
                              }
                              c++;
                            }
                          }
                        }),
                          (i = i || s.childNodes.length);
                      }),
                      m && e && t.attr("title", S(t.textStr, ["&lt;", "&gt;"])),
                      p && p.removeChild(s),
                      g && t.applyTextOutline && t.applyTextOutline(g))
                    : s.appendChild(T.createTextNode(S(a)));
                }
              },
              getContrast: function (t) {
                return (
                  (t = n(t).rgba),
                  (t[0] *= 1),
                  (t[1] *= 1.2),
                  (t[2] *= 0.5),
                  459 < t[0] + t[1] + t[2] ? "#000000" : "#FFFFFF"
                );
              },
              button: function (t, e, i, s, n, r, a, h, l, c) {
                var p = this.label(
                    t,
                    e,
                    i,
                    l,
                    void 0,
                    void 0,
                    c,
                    void 0,
                    "button"
                  ),
                  u = 0,
                  f = this.styledMode;
                if ((p.attr(m({ padding: 8, r: 2 }, n)), !f)) {
                  n = m(
                    {
                      fill: "#f7f7f7",
                      stroke: "#cccccc",
                      "stroke-width": 1,
                      style: {
                        color: "#333333",
                        cursor: "pointer",
                        fontWeight: "normal",
                      },
                    },
                    n
                  );
                  var g = n.style;
                  delete n.style, (r = m(n, { fill: "#e6e6e6" }, r));
                  var v = r.style;
                  delete r.style,
                    (a = m(
                      n,
                      {
                        fill: "#e6ebf5",
                        style: { color: "#000000", fontWeight: "bold" },
                      },
                      a
                    ));
                  var y = a.style;
                  delete a.style,
                    (h = m(n, { style: { color: "#cccccc" } }, h));
                  var x = h.style;
                  delete h.style;
                }
                return (
                  o(p.element, A ? "mouseover" : "mouseenter", function () {
                    3 !== u && p.setState(1);
                  }),
                  o(p.element, A ? "mouseout" : "mouseleave", function () {
                    3 !== u && p.setState(u);
                  }),
                  (p.setState = function (t) {
                    1 !== t && (p.state = u = t),
                      p
                        .removeClass(
                          /highcharts-button-(normal|hover|pressed|disabled)/
                        )
                        .addClass(
                          "highcharts-button-" +
                            ["normal", "hover", "pressed", "disabled"][t || 0]
                        ),
                      f ||
                        p.attr([n, r, a, h][t || 0]).css([g, v, y, x][t || 0]);
                  }),
                  f || p.attr(n).css(d({ cursor: "default" }, g)),
                  p.on("click", function (t) {
                    3 !== u && s.call(p, t);
                  })
                );
              },
              crispLine: function (t, e, i) {
                void 0 === i && (i = "round");
                var s = t[0],
                  n = t[1];
                return (
                  s[1] === n[1] && (s[1] = n[1] = Math[i](s[1]) - (e % 2) / 2),
                  s[2] === n[2] && (s[2] = n[2] = Math[i](s[2]) + (e % 2) / 2),
                  t
                );
              },
              path: function (t) {
                var e = this.styledMode ? {} : { fill: "none" };
                return (
                  p(t) ? (e.d = t) : f(t) && d(e, t),
                  this.createElement("path").attr(e)
                );
              },
              circle: function (t, e, i) {
                return (
                  (t = f(t) ? t : void 0 === t ? {} : { x: t, y: e, r: i }),
                  (e = this.createElement("circle")),
                  (e.xSetter = e.ySetter =
                    function (t, e, i) {
                      i.setAttribute("c" + e, t);
                    }),
                  e.attr(t)
                );
              },
              arc: function (t, e, i, s, n, o) {
                return (
                  f(t)
                    ? ((s = t), (e = s.y), (i = s.r), (t = s.x))
                    : (s = { innerR: s, start: n, end: o }),
                  (t = this.symbol("arc", t, e, i, i, s)),
                  (t.r = i),
                  t
                );
              },
              rect: function (t, e, i, s, n, o) {
                n = f(t) ? t.r : n;
                var a = this.createElement("rect");
                return (
                  (t = f(t)
                    ? t
                    : void 0 === t
                    ? {}
                    : {
                        x: t,
                        y: e,
                        width: Math.max(i, 0),
                        height: Math.max(s, 0),
                      }),
                  this.styledMode ||
                    (void 0 !== o && ((t.strokeWidth = o), (t = a.crisp(t))),
                    (t.fill = "none")),
                  n && (t.r = n),
                  (a.rSetter = function (t, e, i) {
                    (a.r = t), r(i, { rx: t, ry: t });
                  }),
                  (a.rGetter = function () {
                    return a.r;
                  }),
                  a.attr(t)
                );
              },
              setSize: function (t, e, i) {
                var s = this.alignedObjects,
                  n = s.length;
                for (
                  this.width = t,
                    this.height = e,
                    this.boxWrapper.animate(
                      { width: t, height: e },
                      {
                        step: function () {
                          this.attr({
                            viewBox:
                              "0 0 " +
                              this.attr("width") +
                              " " +
                              this.attr("height"),
                          });
                        },
                        duration: y(i, !0) ? void 0 : 0,
                      }
                    );
                  n--;

                )
                  s[n].align();
              },
              g: function (t) {
                var e = this.createElement("g");
                return t ? e.attr({ class: "highcharts-" + t }) : e;
              },
              image: function (t, e, i, s, n, r) {
                var a = { preserveAspectRatio: "none" },
                  h = function (t, e) {
                    t.setAttributeNS
                      ? t.setAttributeNS(
                          "http://www.w3.org/1999/xlink",
                          "href",
                          e
                        )
                      : t.setAttribute("hc-svg-href", e);
                  },
                  l = function (e) {
                    h(c.element, t), r.call(c, e);
                  };
                1 < arguments.length &&
                  d(a, { x: e, y: i, width: s, height: n });
                var c = this.createElement("image").attr(a);
                return (
                  r
                    ? (h(
                        c.element,
                        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      ),
                      (a = new P.Image()),
                      o(a, "load", l),
                      (a.src = t),
                      a.complete && l({}))
                    : h(c.element, t),
                  c
                );
              },
              symbol: function (t, e, i, s, n, o) {
                var r,
                  c = this,
                  p = /^url\((.*?)\)$/,
                  u = p.test(t),
                  f = !u && (this.symbols[t] ? t : "circle"),
                  g = f && this.symbols[f];
                if (g) {
                  "number" == typeof e &&
                    (r = g.call(
                      this.symbols,
                      Math.round(e || 0),
                      Math.round(i || 0),
                      s,
                      n,
                      o
                    ));
                  var m = this.path(r);
                  c.styledMode || m.attr("fill", "none"),
                    d(m, { symbolName: f, x: e, y: i, width: s, height: n }),
                    o && d(m, o);
                } else if (u) {
                  var v = t.match(p)[1];
                  (m = this.image(v)),
                    (m.imgwidth = y(L[v] && L[v].width, o && o.width)),
                    (m.imgheight = y(L[v] && L[v].height, o && o.height));
                  var x = function () {
                    m.attr({ width: m.width, height: m.height });
                  };
                  ["width", "height"].forEach(function (t) {
                    m[t + "Setter"] = function (t, e) {
                      var i = {},
                        s = this["img" + e],
                        n = "width" === e ? "translateX" : "translateY";
                      (this[e] = t),
                        l(s) &&
                          (o &&
                            "within" === o.backgroundSize &&
                            this.width &&
                            this.height &&
                            (s = Math.round(
                              s *
                                Math.min(
                                  this.width / this.imgwidth,
                                  this.height / this.imgheight
                                )
                            )),
                          this.element && this.element.setAttribute(e, s),
                          this.alignByTranslate ||
                            ((i[n] = ((this[e] || 0) - s) / 2), this.attr(i)));
                    };
                  }),
                    l(e) && m.attr({ x: e, y: i }),
                    (m.isImg = !0),
                    l(m.imgwidth) && l(m.imgheight)
                      ? x()
                      : (m.attr({ width: 0, height: 0 }),
                        a("img", {
                          onload: function () {
                            var t = M[c.chartIndex];
                            0 === this.width &&
                              (h(this, { position: "absolute", top: "-999em" }),
                              T.body.appendChild(this)),
                              (L[v] = {
                                width: this.width,
                                height: this.height,
                              }),
                              (m.imgwidth = this.width),
                              (m.imgheight = this.height),
                              m.element && x(),
                              this.parentNode &&
                                this.parentNode.removeChild(this),
                              --c.imgCount || !t || t.hasLoaded || t.onload();
                          },
                          src: v,
                        }),
                        this.imgCount++);
                }
                return m;
              },
              symbols: {
                circle: function (t, e, i, s) {
                  return this.arc(t + i / 2, e + s / 2, i / 2, s / 2, {
                    start: 0.5 * Math.PI,
                    end: 2.5 * Math.PI,
                    open: !1,
                  });
                },
                square: function (t, e, i, s) {
                  return [
                    ["M", t, e],
                    ["L", t + i, e],
                    ["L", t + i, e + s],
                    ["L", t, e + s],
                    ["Z"],
                  ];
                },
                triangle: function (t, e, i, s) {
                  return [
                    ["M", t + i / 2, e],
                    ["L", t + i, e + s],
                    ["L", t, e + s],
                    ["Z"],
                  ];
                },
                "triangle-down": function (t, e, i, s) {
                  return [
                    ["M", t, e],
                    ["L", t + i, e],
                    ["L", t + i / 2, e + s],
                    ["Z"],
                  ];
                },
                diamond: function (t, e, i, s) {
                  return [
                    ["M", t + i / 2, e],
                    ["L", t + i, e + s / 2],
                    ["L", t + i / 2, e + s],
                    ["L", t, e + s / 2],
                    ["Z"],
                  ];
                },
                arc: function (t, e, i, s, n) {
                  var o = n.start,
                    r = n.r || i,
                    a = n.r || s || i,
                    h = n.end - 0.001;
                  (i = n.innerR),
                    (s = y(
                      n.open,
                      0.001 > Math.abs(n.end - n.start - 2 * Math.PI)
                    ));
                  var c = Math.cos(o),
                    d = Math.sin(o),
                    p = Math.cos(h);
                  return (
                    (h = Math.sin(h)),
                    (o = y(n.longArc, 0.001 > n.end - o - Math.PI ? 0 : 1)),
                    (r = [
                      ["M", t + r * c, e + a * d],
                      [
                        "A",
                        r,
                        a,
                        0,
                        o,
                        y(n.clockwise, 1),
                        t + r * p,
                        e + a * h,
                      ],
                    ]),
                    l(i) &&
                      r.push(
                        s
                          ? ["M", t + i * p, e + i * h]
                          : ["L", t + i * p, e + i * h],
                        [
                          "A",
                          i,
                          i,
                          0,
                          o,
                          l(n.clockwise) ? 1 - n.clockwise : 0,
                          t + i * c,
                          e + i * d,
                        ]
                      ),
                    s || r.push(["Z"]),
                    r
                  );
                },
                callout: function (t, e, i, s, n) {
                  var o = Math.min((n && n.r) || 0, i, s),
                    r = o + 6,
                    a = n && n.anchorX;
                  n = n && n.anchorY;
                  var h = [
                    ["M", t + o, e],
                    ["L", t + i - o, e],
                    ["C", t + i, e, t + i, e, t + i, e + o],
                    ["L", t + i, e + s - o],
                    ["C", t + i, e + s, t + i, e + s, t + i - o, e + s],
                    ["L", t + o, e + s],
                    ["C", t, e + s, t, e + s, t, e + s - o],
                    ["L", t, e + o],
                    ["C", t, e, t, e, t + o, e],
                  ];
                  return (
                    a && a > i
                      ? n > e + r && n < e + s - r
                        ? h.splice(
                            3,
                            1,
                            ["L", t + i, n - 6],
                            ["L", t + i + 6, n],
                            ["L", t + i, n + 6],
                            ["L", t + i, e + s - o]
                          )
                        : h.splice(
                            3,
                            1,
                            ["L", t + i, s / 2],
                            ["L", a, n],
                            ["L", t + i, s / 2],
                            ["L", t + i, e + s - o]
                          )
                      : a && 0 > a
                      ? n > e + r && n < e + s - r
                        ? h.splice(
                            7,
                            1,
                            ["L", t, n + 6],
                            ["L", t - 6, n],
                            ["L", t, n - 6],
                            ["L", t, e + o]
                          )
                        : h.splice(
                            7,
                            1,
                            ["L", t, s / 2],
                            ["L", a, n],
                            ["L", t, s / 2],
                            ["L", t, e + o]
                          )
                      : n && n > s && a > t + r && a < t + i - r
                      ? h.splice(
                          5,
                          1,
                          ["L", a + 6, e + s],
                          ["L", a, e + s + 6],
                          ["L", a - 6, e + s],
                          ["L", t + o, e + s]
                        )
                      : n &&
                        0 > n &&
                        a > t + r &&
                        a < t + i - r &&
                        h.splice(
                          1,
                          1,
                          ["L", a - 6, e],
                          ["L", a, e - 6],
                          ["L", a + 6, e],
                          ["L", i - o, e]
                        ),
                    h
                  );
                },
              },
              clipRect: function (t, e, i, s) {
                var n = w() + "-",
                  o = this.createElement("clipPath")
                    .attr({ id: n })
                    .add(this.defs);
                return (
                  (t = this.rect(t, e, i, s, 0).add(o)),
                  (t.id = n),
                  (t.clipPath = o),
                  (t.count = 0),
                  t
                );
              },
              text: function (t, e, i, s) {
                var n = {};
                return !s || (!this.allowHTML && this.forExport)
                  ? ((n.x = Math.round(e || 0)),
                    i && (n.y = Math.round(i)),
                    l(t) && (n.text = t),
                    (t = this.createElement("text").attr(n)),
                    s ||
                      (t.xSetter = function (t, e, i) {
                        var s,
                          n = i.getElementsByTagName("tspan"),
                          o = i.getAttribute(e);
                        for (s = 0; s < n.length; s++) {
                          var r = n[s];
                          r.getAttribute(e) === o && r.setAttribute(e, t);
                        }
                        i.setAttribute(e, t);
                      }),
                    t)
                  : this.html(t, e, i);
              },
              fontMetrics: function (t, e) {
                return (
                  (t =
                    (!this.styledMode && /px/.test(t)) || !P.getComputedStyle
                      ? t ||
                        (e && e.style && e.style.fontSize) ||
                        (this.style && this.style.fontSize)
                      : e && i.prototype.getStyle.call(e, "font-size")),
                  (t = /px/.test(t) ? x(t) : 12),
                  (e = 24 > t ? t + 3 : Math.round(1.2 * t)),
                  { h: e, b: Math.round(0.8 * e), f: t }
                );
              },
              rotCorr: function (t, e, i) {
                var s = t;
                return (
                  e && i && (s = Math.max(s * Math.cos(e * S), 4)),
                  { x: (-t / 3) * Math.sin(e * S), y: s }
                );
              },
              pathToSegments: function (t) {
                for (
                  var e = [],
                    i = [],
                    s = {
                      A: 8,
                      C: 7,
                      H: 2,
                      L: 3,
                      M: 3,
                      Q: 5,
                      S: 5,
                      T: 3,
                      V: 2,
                    },
                    n = 0;
                  n < t.length;
                  n++
                )
                  g(i[0]) &&
                    u(t[n]) &&
                    i.length === s[i[0].toUpperCase()] &&
                    t.splice(n, 0, i[0].replace("M", "L").replace("m", "l")),
                    "string" == typeof t[n] &&
                      (i.length && e.push(i.slice(0)), (i.length = 0)),
                    i.push(t[n]);
                return e.push(i.slice(0)), e;
              },
              label: function (t, e, s, n, o, r, a, h, c) {
                var p,
                  f,
                  g,
                  v,
                  y,
                  x,
                  k,
                  w,
                  M = this,
                  S = M.styledMode,
                  T = M.g("button" !== c && "label"),
                  C = (T.text = M.text("", 0, 0, a).attr({ zIndex: 1 })),
                  A = { width: 0, height: 0, x: 0, y: 0 },
                  D = A,
                  E = 0,
                  O = 3,
                  L = 0,
                  P = {},
                  I = /^url\((.*?)\)$/.test(n),
                  z = S || I,
                  N = function () {
                    return S
                      ? (p.strokeWidth() % 2) / 2
                      : ((k ? parseInt(k, 10) : 0) % 2) / 2;
                  };
                c && T.addClass("highcharts-" + c);
                var H = function () {
                    var t = C.element.style,
                      e = {};
                    (D =
                      (u(f) && u(g) && !x) || !l(C.textStr) ? A : C.getBBox()),
                      (T.width = (f || D.width || 0) + 2 * O + L),
                      (T.height = (g || D.height || 0) + 2 * O),
                      (w =
                        O +
                        Math.min(
                          M.fontMetrics(t && t.fontSize, C).b,
                          D.height || 1 / 0
                        )),
                      z &&
                        (p ||
                          ((T.box = p =
                            M.symbols[n] || I ? M.symbol(n) : M.rect()),
                          p.addClass(
                            ("button" === c ? "" : "highcharts-label-box") +
                              (c ? " highcharts-" + c + "-box" : "")
                          ),
                          p.add(T),
                          (t = N()),
                          (e.x = t),
                          (e.y = (h ? -w : 0) + t)),
                        (e.width = Math.round(T.width)),
                        (e.height = Math.round(T.height)),
                        p.attr(d(e, P)),
                        (P = {}));
                  },
                  B = function () {
                    var t = L + O,
                      e = h ? 0 : w;
                    l(f) &&
                      D &&
                      ("center" === x || "right" === x) &&
                      (t += { center: 0.5, right: 1 }[x] * (f - D.width)),
                      (t === C.x && e === C.y) ||
                        (C.attr("x", t),
                        C.hasBoxWidthChanged && ((D = C.getBBox(!0)), H()),
                        void 0 !== e && C.attr("y", e)),
                      (C.x = t),
                      (C.y = e);
                  },
                  W = function (t, e) {
                    p ? p.attr(t, e) : (P[t] = e);
                  };
                (T.onAdd = function () {
                  C.add(T),
                    T.attr({ text: t || 0 === t ? t : "", x: e, y: s }),
                    p && l(o) && T.attr({ anchorX: o, anchorY: r });
                }),
                  (T.widthSetter = function (t) {
                    f = u(t) ? t : null;
                  }),
                  (T.heightSetter = function (t) {
                    g = t;
                  }),
                  (T["text-alignSetter"] = function (t) {
                    x = t;
                  }),
                  (T.paddingSetter = function (t) {
                    l(t) && t !== O && ((O = T.padding = t), B());
                  }),
                  (T.paddingLeftSetter = function (t) {
                    l(t) && t !== L && ((L = t), B());
                  }),
                  (T.alignSetter = function (t) {
                    (t = { left: 0, center: 0.5, right: 1 }[t]) !== E &&
                      ((E = t), D && T.attr({ x: v }));
                  }),
                  (T.textSetter = function (t) {
                    void 0 !== t && C.attr({ text: t }), H(), B();
                  }),
                  (T["stroke-widthSetter"] = function (t, e) {
                    t && (z = !0), (k = this["stroke-width"] = t), W(e, t);
                  }),
                  S
                    ? (T.rSetter = function (t, e) {
                        W(e, t);
                      })
                    : (T.strokeSetter =
                        T.fillSetter =
                        T.rSetter =
                          function (t, e) {
                            "r" !== e &&
                              ("fill" === e && t && (z = !0), (T[e] = t)),
                              W(e, t);
                          }),
                  (T.anchorXSetter = function (t, e) {
                    (o = T.anchorX = t), W(e, Math.round(t) - N() - v);
                  }),
                  (T.anchorYSetter = function (t, e) {
                    (r = T.anchorY = t), W(e, t - y);
                  }),
                  (T.xSetter = function (t) {
                    (T.x = t),
                      E &&
                        ((t -= E * ((f || D.width) + 2 * O)),
                        (T["forceAnimate:x"] = !0)),
                      (v = Math.round(t)),
                      T.attr("translateX", v);
                  }),
                  (T.ySetter = function (t) {
                    (y = T.y = Math.round(t)), T.attr("translateY", y);
                  }),
                  (T.isLabel = !0);
                var R = T.css;
                return (
                  (a = {
                    css: function (t) {
                      if (t) {
                        var e = {};
                        (t = m(t)),
                          T.textProps.forEach(function (i) {
                            void 0 !== t[i] && ((e[i] = t[i]), delete t[i]);
                          }),
                          C.css(e);
                        var i = "fontSize" in e || "fontWeight" in e;
                        ("width" in e || i) && (H(), i && B());
                      }
                      return R.call(T, t);
                    },
                    getBBox: function () {
                      return {
                        width: D.width + 2 * O,
                        height: D.height + 2 * O,
                        x: D.x - O,
                        y: D.y - O,
                      };
                    },
                    destroy: function () {
                      b(T.element, "mouseenter"),
                        b(T.element, "mouseleave"),
                        C && C.destroy(),
                        p && (p = p.destroy()),
                        i.prototype.destroy.call(T),
                        (T = M = C = H = B = W = null);
                    },
                  }),
                  (T.on = function (t, e) {
                    var s = C && "SPAN" === C.element.tagName ? C : void 0;
                    if (s) {
                      var n = function (i) {
                        (("mouseenter" === t || "mouseleave" === t) &&
                          i.relatedTarget instanceof Element &&
                          (T.element.contains(i.relatedTarget) ||
                            s.element.contains(i.relatedTarget))) ||
                          e.call(T.element, i);
                      };
                      s.on(t, n);
                    }
                    return i.prototype.on.call(T, t, n || e), T;
                  }),
                  S ||
                    (a.shadow = function (t) {
                      return t && (H(), p && p.shadow(t)), T;
                    }),
                  d(T, a)
                );
              },
            }),
            (e.Renderer = t);
        }
      ),
      e(
        i,
        "parts/Html.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.attr,
            s = e.createElement,
            n = e.css,
            o = e.defined,
            r = e.extend,
            a = e.pick,
            h = e.pInt,
            l = t.isFirefox,
            c = t.isMS,
            d = t.isWebKit,
            p = t.SVGElement;
          e = t.SVGRenderer;
          var u = t.win;
          r(p.prototype, {
            htmlCss: function (t) {
              var e = "SPAN" === this.element.tagName && t && "width" in t,
                i = a(e && t.width, void 0);
              if (e) {
                delete t.width, (this.textWidth = i);
                var s = !0;
              }
              return (
                t &&
                  "ellipsis" === t.textOverflow &&
                  ((t.whiteSpace = "nowrap"), (t.overflow = "hidden")),
                (this.styles = r(this.styles, t)),
                n(this.element, t),
                s && this.htmlUpdateTransform(),
                this
              );
            },
            htmlGetBBox: function () {
              var t = this.element;
              return {
                x: t.offsetLeft,
                y: t.offsetTop,
                width: t.offsetWidth,
                height: t.offsetHeight,
              };
            },
            htmlUpdateTransform: function () {
              if (this.added) {
                var t = this.renderer,
                  e = this.element,
                  i = this.translateX || 0,
                  s = this.translateY || 0,
                  r = this.x || 0,
                  a = this.y || 0,
                  l = this.textAlign || "left",
                  c = { left: 0, center: 0.5, right: 1 }[l],
                  d = this.styles,
                  p = d && d.whiteSpace;
                if (
                  (n(e, { marginLeft: i, marginTop: s }),
                  !t.styledMode &&
                    this.shadows &&
                    this.shadows.forEach(function (t) {
                      n(t, { marginLeft: i + 1, marginTop: s + 1 });
                    }),
                  this.inverted &&
                    [].forEach.call(e.childNodes, function (i) {
                      t.invertChild(i, e);
                    }),
                  "SPAN" === e.tagName)
                ) {
                  d = this.rotation;
                  var u,
                    f = this.textWidth && h(this.textWidth),
                    g = [
                      d,
                      l,
                      e.innerHTML,
                      this.textWidth,
                      this.textAlign,
                    ].join();
                  (u = f !== this.oldTextWidth) &&
                    !(u = f > this.oldTextWidth) &&
                    ((u = this.textPxLength) ||
                      (n(e, { width: "", whiteSpace: p || "nowrap" }),
                      (u = e.offsetWidth)),
                    (u = u > f)),
                    u &&
                    (/[ \-]/.test(e.textContent || e.innerText) ||
                      "ellipsis" === e.style.textOverflow)
                      ? (n(e, {
                          width: f + "px",
                          display: "block",
                          whiteSpace: p || "normal",
                        }),
                        (this.oldTextWidth = f),
                        (this.hasBoxWidthChanged = !0))
                      : (this.hasBoxWidthChanged = !1),
                    g !== this.cTT &&
                      ((p = t.fontMetrics(e.style.fontSize, e).b),
                      !o(d) ||
                        (d === (this.oldRotation || 0) &&
                          l === this.oldAlign) ||
                        this.setSpanRotation(d, c, p),
                      this.getSpanCorrection(
                        (!o(d) && this.textPxLength) || e.offsetWidth,
                        p,
                        c,
                        d,
                        l
                      )),
                    n(e, {
                      left: r + (this.xCorr || 0) + "px",
                      top: a + (this.yCorr || 0) + "px",
                    }),
                    (this.cTT = g),
                    (this.oldRotation = d),
                    (this.oldAlign = l);
                }
              } else this.alignOnAdd = !0;
            },
            setSpanRotation: function (t, e, i) {
              var s = {},
                o = this.renderer.getTransformKey();
              (s[o] = s.transform = "rotate(" + t + "deg)"),
                (s[o + (l ? "Origin" : "-origin")] = s.transformOrigin =
                  100 * e + "% " + i + "px"),
                n(this.element, s);
            },
            getSpanCorrection: function (t, e, i) {
              (this.xCorr = -t * i), (this.yCorr = -e);
            },
          }),
            r(e.prototype, {
              getTransformKey: function () {
                return c && !/Edge/.test(u.navigator.userAgent)
                  ? "-ms-transform"
                  : d
                  ? "-webkit-transform"
                  : l
                  ? "MozTransform"
                  : u.opera
                  ? "-o-transform"
                  : "";
              },
              html: function (t, e, n) {
                var o = this.createElement("span"),
                  h = o.element,
                  l = o.renderer,
                  c = l.isSVG,
                  d = function (t, e) {
                    ["opacity", "visibility"].forEach(function (i) {
                      t[i + "Setter"] = function (s, n, o) {
                        var r = t.div ? t.div.style : e;
                        p.prototype[i + "Setter"].call(this, s, n, o),
                          r && (r[n] = s);
                      };
                    }),
                      (t.addedSetters = !0);
                  };
                return (
                  (o.textSetter = function (t) {
                    t !== h.innerHTML &&
                      (delete this.bBox, delete this.oldTextWidth),
                      (this.textStr = t),
                      (h.innerHTML = a(t, "")),
                      (o.doTransform = !0);
                  }),
                  c && d(o, o.element.style),
                  (o.xSetter =
                    o.ySetter =
                    o.alignSetter =
                    o.rotationSetter =
                      function (t, e) {
                        "align" === e && (e = "textAlign"),
                          (o[e] = t),
                          (o.doTransform = !0);
                      }),
                  (o.afterSetters = function () {
                    this.doTransform &&
                      (this.htmlUpdateTransform(), (this.doTransform = !1));
                  }),
                  o
                    .attr({ text: t, x: Math.round(e), y: Math.round(n) })
                    .css({ position: "absolute" }),
                  l.styledMode ||
                    o.css({
                      fontFamily: this.style.fontFamily,
                      fontSize: this.style.fontSize,
                    }),
                  (h.style.whiteSpace = "nowrap"),
                  (o.css = o.htmlCss),
                  c &&
                    (o.add = function (t) {
                      var e = l.box.parentNode,
                        n = [];
                      if ((this.parentGroup = t)) {
                        var a = t.div;
                        if (!a) {
                          for (; t; ) n.push(t), (t = t.parentGroup);
                          n.reverse().forEach(function (t) {
                            function h(e, i) {
                              (t[i] = e),
                                "translateX" === i
                                  ? (c.left = e + "px")
                                  : (c.top = e + "px"),
                                (t.doTransform = !0);
                            }
                            var l = i(t.element, "class");
                            a = t.div =
                              t.div ||
                              s(
                                "div",
                                l ? { className: l } : void 0,
                                {
                                  position: "absolute",
                                  left: (t.translateX || 0) + "px",
                                  top: (t.translateY || 0) + "px",
                                  display: t.display,
                                  opacity: t.opacity,
                                  pointerEvents:
                                    t.styles && t.styles.pointerEvents,
                                },
                                a || e
                              );
                            var c = a.style;
                            r(t, {
                              classSetter: (function (t) {
                                return function (e) {
                                  this.element.setAttribute("class", e),
                                    (t.className = e);
                                };
                              })(a),
                              on: function () {
                                return (
                                  n[0].div &&
                                    o.on.apply(
                                      { element: n[0].div },
                                      arguments
                                    ),
                                  t
                                );
                              },
                              translateXSetter: h,
                              translateYSetter: h,
                            }),
                              t.addedSetters || d(t);
                          });
                        }
                      } else a = e;
                      return (
                        a.appendChild(h),
                        (o.added = !0),
                        o.alignOnAdd && o.htmlUpdateTransform(),
                        o
                      );
                    }),
                  o
                );
              },
            });
        }
      ),
      e(
        i,
        "parts/Tick.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.clamp,
            s = e.correctFloat,
            n = e.defined,
            o = e.destroyObjectProperties,
            r = e.extend,
            a = e.fireEvent,
            h = e.isNumber,
            l = e.merge,
            c = e.objectEach,
            d = e.pick,
            p = t.deg2rad;
          return (
            (e = (function () {
              function t(t, e, i, s, n) {
                (this.isNewLabel = this.isNew = !0),
                  (this.axis = t),
                  (this.pos = e),
                  (this.type = i || ""),
                  (this.parameters = n || {}),
                  (this.tickmarkOffset = this.parameters.tickmarkOffset),
                  (this.options = this.parameters.options),
                  a(this, "init"),
                  i || s || this.addLabel();
              }
              return (
                (t.prototype.addLabel = function () {
                  var t = this,
                    e = t.axis,
                    i = e.options,
                    o = e.chart,
                    a = e.categories,
                    h = e.logarithmic,
                    l = e.names,
                    c = t.pos,
                    p = d(t.options && t.options.labels, i.labels),
                    u = e.tickPositions,
                    f = c === u[0],
                    g = c === u[u.length - 1];
                  l = this.parameters.category || (a ? d(a[c], l[c], c) : c);
                  var m = t.label;
                  (a = (!p.step || 1 === p.step) && 1 === e.tickInterval),
                    (u = u.info);
                  var v, y;
                  if (e.dateTime && u)
                    var x = o.time.resolveDTLFormat(
                        i.dateTimeLabelFormats[
                          (!i.grid && u.higherRanks[c]) || u.unitName
                        ]
                      ),
                      b = x.main;
                  (t.isFirst = f),
                    (t.isLast = g),
                    (t.formatCtx = {
                      axis: e,
                      chart: o,
                      isFirst: f,
                      isLast: g,
                      dateTimeLabelFormat: b,
                      tickPositionInfo: u,
                      value: h ? s(h.lin2log(l)) : l,
                      pos: c,
                    }),
                    (i = e.labelFormatter.call(t.formatCtx, this.formatCtx)),
                    (y = x && x.list) &&
                      (t.shortenLabel = function () {
                        for (v = 0; v < y.length; v++)
                          if (
                            (m.attr({
                              text: e.labelFormatter.call(
                                r(t.formatCtx, { dateTimeLabelFormat: y[v] })
                              ),
                            }),
                            m.getBBox().width <
                              e.getSlotWidth(t) - 2 * d(p.padding, 5))
                          )
                            return;
                        m.attr({ text: "" });
                      }),
                    a && e._addedPlotLB && e.isXAxis && t.moveLabel(i, p),
                    n(m) || t.movedLabel
                      ? m &&
                        m.textStr !== i &&
                        !a &&
                        (!m.textWidth ||
                          (p.style && p.style.width) ||
                          m.styles.width ||
                          m.css({ width: null }),
                        m.attr({ text: i }),
                        (m.textPxLength = m.getBBox().width))
                      : ((t.label = m = t.createLabel({ x: 0, y: 0 }, i, p)),
                        (t.rotation = 0));
                }),
                (t.prototype.createLabel = function (t, e, i) {
                  var s = this.axis,
                    o = s.chart;
                  return (
                    (t =
                      n(e) && i.enabled
                        ? o.renderer
                            .text(e, t.x, t.y, i.useHTML)
                            .add(s.labelGroup)
                        : null) &&
                      (o.styledMode || t.css(l(i.style)),
                      (t.textPxLength = t.getBBox().width)),
                    t
                  );
                }),
                (t.prototype.destroy = function () {
                  o(this, this.axis);
                }),
                (t.prototype.getPosition = function (t, e, n, o) {
                  var r = this.axis,
                    h = r.chart,
                    l = (o && h.oldChartHeight) || h.chartHeight;
                  return (
                    (t = {
                      x: t
                        ? s(r.translate(e + n, null, null, o) + r.transB)
                        : r.left +
                          r.offset +
                          (r.opposite
                            ? ((o && h.oldChartWidth) || h.chartWidth) -
                              r.right -
                              r.left
                            : 0),
                      y: t
                        ? l - r.bottom + r.offset - (r.opposite ? r.height : 0)
                        : s(l - r.translate(e + n, null, null, o) - r.transB),
                    }),
                    (t.y = i(t.y, -1e5, 1e5)),
                    a(this, "afterGetPosition", { pos: t }),
                    t
                  );
                }),
                (t.prototype.getLabelPosition = function (
                  t,
                  e,
                  i,
                  s,
                  o,
                  r,
                  h,
                  l
                ) {
                  var c = this.axis,
                    d = c.transA,
                    u =
                      c.isLinked && c.linkedParent
                        ? c.linkedParent.reversed
                        : c.reversed,
                    f = c.staggerLines,
                    g = c.tickRotCorr || { x: 0, y: 0 },
                    m = o.y,
                    v =
                      s || c.reserveSpaceDefault
                        ? 0
                        : -c.labelOffset *
                          ("center" === c.labelAlign ? 0.5 : 1),
                    y = {};
                  return (
                    n(m) ||
                      (m =
                        0 === c.side
                          ? i.rotation
                            ? -8
                            : -i.getBBox().height
                          : 2 === c.side
                          ? g.y + 8
                          : Math.cos(i.rotation * p) *
                            (g.y - i.getBBox(!1, 0).height / 2)),
                    (t =
                      t + o.x + v + g.x - (r && s ? r * d * (u ? -1 : 1) : 0)),
                    (e = e + m - (r && !s ? r * d * (u ? 1 : -1) : 0)),
                    f &&
                      ((i = (h / (l || 1)) % f),
                      c.opposite && (i = f - i - 1),
                      (e += (c.labelOffset / f) * i)),
                    (y.x = t),
                    (y.y = Math.round(e)),
                    a(this, "afterGetLabelPosition", {
                      pos: y,
                      tickmarkOffset: r,
                      index: h,
                    }),
                    y
                  );
                }),
                (t.prototype.getLabelSize = function () {
                  return this.label
                    ? this.label.getBBox()[this.axis.horiz ? "height" : "width"]
                    : 0;
                }),
                (t.prototype.getMarkPath = function (t, e, i, s, n, o) {
                  return o.crispLine(
                    [
                      ["M", t, e],
                      ["L", t + (n ? 0 : -i), e + (n ? i : 0)],
                    ],
                    s
                  );
                }),
                (t.prototype.handleOverflow = function (t) {
                  var e = this.axis,
                    i = e.options.labels,
                    s = t.x,
                    n = e.chart.chartWidth,
                    o = e.chart.spacing,
                    r = d(e.labelLeft, Math.min(e.pos, o[3]));
                  o = d(
                    e.labelRight,
                    Math.max(e.isRadial ? 0 : e.pos + e.len, n - o[1])
                  );
                  var a,
                    h = this.label,
                    l = this.rotation,
                    c = { left: 0, center: 0.5, right: 1 }[
                      e.labelAlign || h.attr("align")
                    ],
                    u = h.getBBox().width,
                    f = e.getSlotWidth(this),
                    g = f,
                    m = 1,
                    v = {};
                  l || "justify" !== d(i.overflow, "justify")
                    ? 0 > l && s - c * u < r
                      ? (a = Math.round(s / Math.cos(l * p) - r))
                      : 0 < l &&
                        s + c * u > o &&
                        (a = Math.round((n - s) / Math.cos(l * p)))
                    : ((n = s + (1 - c) * u),
                      s - c * u < r
                        ? (g = t.x + g * (1 - c) - r)
                        : n > o && ((g = o - t.x + g * c), (m = -1)),
                      (g = Math.min(f, g)),
                      g < f &&
                        "center" === e.labelAlign &&
                        (t.x += m * (f - g - c * (f - Math.min(u, g)))),
                      (u > g || (e.autoRotation && (h.styles || {}).width)) &&
                        (a = g)),
                    a &&
                      (this.shortenLabel
                        ? this.shortenLabel()
                        : ((v.width = Math.floor(a) + "px"),
                          (i.style || {}).textOverflow ||
                            (v.textOverflow = "ellipsis"),
                          h.css(v)));
                }),
                (t.prototype.moveLabel = function (t, e) {
                  var i = this,
                    s = i.label,
                    n = !1,
                    o = i.axis,
                    r = o.reversed,
                    a = o.chart.inverted;
                  if (
                    (s && s.textStr === t
                      ? ((i.movedLabel = s), (n = !0), delete i.label)
                      : c(o.ticks, function (e) {
                          n ||
                            e.isNew ||
                            e === i ||
                            !e.label ||
                            e.label.textStr !== t ||
                            ((i.movedLabel = e.label),
                            (n = !0),
                            (e.labelPos = i.movedLabel.xy),
                            delete e.label);
                        }),
                    !n && (i.labelPos || s))
                  ) {
                    var h = i.labelPos || s.xy;
                    (s = a ? h.x : r ? 0 : o.width + o.left),
                      (o = a ? (r ? o.width + o.left : 0) : h.y),
                      (i.movedLabel = i.createLabel({ x: s, y: o }, t, e)),
                      i.movedLabel && i.movedLabel.attr({ opacity: 0 });
                  }
                }),
                (t.prototype.render = function (t, e, i) {
                  var s = this.axis,
                    n = s.horiz,
                    o = this.pos,
                    r = d(this.tickmarkOffset, s.tickmarkOffset);
                  (o = this.getPosition(n, o, r, e)), (r = o.x);
                  var h = o.y;
                  (s =
                    (n && r === s.pos + s.len) || (!n && h === s.pos) ? -1 : 1),
                    (i = d(i, 1)),
                    (this.isActive = !0),
                    this.renderGridLine(e, i, s),
                    this.renderMark(o, i, s),
                    this.renderLabel(o, e, i, t),
                    (this.isNew = !1),
                    a(this, "afterRender");
                }),
                (t.prototype.renderGridLine = function (t, e, i) {
                  var s = this.axis,
                    n = s.options,
                    o = this.gridLine,
                    r = {},
                    a = this.pos,
                    h = this.type,
                    l = d(this.tickmarkOffset, s.tickmarkOffset),
                    c = s.chart.renderer,
                    p = h ? h + "Grid" : "grid",
                    u = n[p + "LineWidth"],
                    f = n[p + "LineColor"];
                  (n = n[p + "LineDashStyle"]),
                    o ||
                      (s.chart.styledMode ||
                        ((r.stroke = f),
                        (r["stroke-width"] = u),
                        n && (r.dashstyle = n)),
                      h || (r.zIndex = 1),
                      t && (e = 0),
                      (this.gridLine = o =
                        c
                          .path()
                          .attr(r)
                          .addClass(
                            "highcharts-" + (h ? h + "-" : "") + "grid-line"
                          )
                          .add(s.gridGroup))),
                    o &&
                      (i = s.getPlotLinePath({
                        value: a + l,
                        lineWidth: o.strokeWidth() * i,
                        force: "pass",
                        old: t,
                      })) &&
                      o[t || this.isNew ? "attr" : "animate"]({
                        d: i,
                        opacity: e,
                      });
                }),
                (t.prototype.renderMark = function (t, e, i) {
                  var s = this.axis,
                    n = s.options,
                    o = s.chart.renderer,
                    r = this.type,
                    a = r ? r + "Tick" : "tick",
                    h = s.tickSize(a),
                    l = this.mark,
                    c = !l,
                    p = t.x;
                  t = t.y;
                  var u = d(n[a + "Width"], !r && s.isXAxis ? 1 : 0);
                  (n = n[a + "Color"]),
                    h &&
                      (s.opposite && (h[0] = -h[0]),
                      c &&
                        ((this.mark = l =
                          o
                            .path()
                            .addClass(
                              "highcharts-" + (r ? r + "-" : "") + "tick"
                            )
                            .add(s.axisGroup)),
                        s.chart.styledMode ||
                          l.attr({ stroke: n, "stroke-width": u })),
                      l[c ? "attr" : "animate"]({
                        d: this.getMarkPath(
                          p,
                          t,
                          h[0],
                          l.strokeWidth() * i,
                          s.horiz,
                          o
                        ),
                        opacity: e,
                      }));
                }),
                (t.prototype.renderLabel = function (t, e, i, s) {
                  var n = this.axis,
                    o = n.horiz,
                    r = n.options,
                    a = this.label,
                    l = r.labels,
                    c = l.step;
                  n = d(this.tickmarkOffset, n.tickmarkOffset);
                  var p = !0,
                    u = t.x;
                  (t = t.y),
                    a &&
                      h(u) &&
                      ((a.xy = t =
                        this.getLabelPosition(u, t, a, o, l, n, s, c)),
                      (this.isFirst &&
                        !this.isLast &&
                        !d(r.showFirstLabel, 1)) ||
                      (this.isLast && !this.isFirst && !d(r.showLastLabel, 1))
                        ? (p = !1)
                        : !o ||
                          l.step ||
                          l.rotation ||
                          e ||
                          0 === i ||
                          this.handleOverflow(t),
                      c && s % c && (p = !1),
                      p && h(t.y)
                        ? ((t.opacity = i),
                          a[this.isNewLabel ? "attr" : "animate"](t),
                          (this.isNewLabel = !1))
                        : (a.attr("y", -9999), (this.isNewLabel = !0)));
                }),
                (t.prototype.replaceMovedLabel = function () {
                  var t = this.label,
                    e = this.axis,
                    i = e.reversed,
                    s = this.axis.chart.inverted;
                  if (t && !this.isNew) {
                    var n = s ? t.xy.x : i ? e.left : e.width + e.left;
                    (i = s ? (i ? e.width + e.top : e.top) : t.xy.y),
                      t.animate({ x: n, y: i, opacity: 0 }, void 0, t.destroy),
                      delete this.label;
                  }
                  (e.isDirty = !0),
                    (this.label = this.movedLabel),
                    delete this.movedLabel;
                }),
                t
              );
            })()),
            (t.Tick = e),
            t.Tick
          );
        }
      ),
      e(
        i,
        "parts/Time.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.defined,
            s = e.error,
            n = e.extend,
            o = e.isObject,
            r = e.merge,
            a = e.objectEach,
            h = e.pad,
            l = e.pick,
            c = e.splat,
            d = e.timeUnits,
            p = t.win;
          return (
            (e = (function () {
              function e(t) {
                (this.options = {}),
                  (this.variableTimezone = this.useUTC = !1),
                  (this.Date = p.Date),
                  (this.getTimezoneOffset = this.timezoneOffsetFunction()),
                  this.update(t);
              }
              return (
                (e.prototype.get = function (t, e) {
                  if (this.variableTimezone || this.timezoneOffset) {
                    var i = e.getTime(),
                      s = i - this.getTimezoneOffset(e);
                    return (
                      e.setTime(s), (t = e["getUTC" + t]()), e.setTime(i), t
                    );
                  }
                  return this.useUTC ? e["getUTC" + t]() : e["get" + t]();
                }),
                (e.prototype.set = function (t, e, i) {
                  if (this.variableTimezone || this.timezoneOffset) {
                    if (
                      "Milliseconds" === t ||
                      "Seconds" === t ||
                      "Minutes" === t
                    )
                      return e["setUTC" + t](i);
                    var s = this.getTimezoneOffset(e);
                    return (
                      (s = e.getTime() - s),
                      e.setTime(s),
                      e["setUTC" + t](i),
                      (t = this.getTimezoneOffset(e)),
                      (s = e.getTime() + t),
                      e.setTime(s)
                    );
                  }
                  return this.useUTC ? e["setUTC" + t](i) : e["set" + t](i);
                }),
                (e.prototype.update = function (t) {
                  var e = l(t && t.useUTC, !0);
                  (this.options = t = r(!0, this.options || {}, t)),
                    (this.Date = t.Date || p.Date || Date),
                    (this.timezoneOffset =
                      (this.useUTC = e) && t.timezoneOffset),
                    (this.getTimezoneOffset = this.timezoneOffsetFunction()),
                    (this.variableTimezone = !(
                      e &&
                      !t.getTimezoneOffset &&
                      !t.timezone
                    ));
                }),
                (e.prototype.makeTime = function (e, i, s, n, o, r) {
                  if (this.useUTC) {
                    var a = this.Date.UTC.apply(0, arguments),
                      h = this.getTimezoneOffset(a);
                    a += h;
                    var c = this.getTimezoneOffset(a);
                    h !== c
                      ? (a += c - h)
                      : h - 36e5 !== this.getTimezoneOffset(a - 36e5) ||
                        t.isSafari ||
                        (a -= 36e5);
                  } else
                    a = new this.Date(
                      e,
                      i,
                      l(s, 1),
                      l(n, 0),
                      l(o, 0),
                      l(r, 0)
                    ).getTime();
                  return a;
                }),
                (e.prototype.timezoneOffsetFunction = function () {
                  var t = this,
                    e = this.options,
                    i = p.moment;
                  if (!this.useUTC)
                    return function (t) {
                      return 6e4 * new Date(t.toString()).getTimezoneOffset();
                    };
                  if (e.timezone) {
                    if (i)
                      return function (t) {
                        return 6e4 * -i.tz(t, e.timezone).utcOffset();
                      };
                    s(25);
                  }
                  return this.useUTC && e.getTimezoneOffset
                    ? function (t) {
                        return 6e4 * e.getTimezoneOffset(t.valueOf());
                      }
                    : function () {
                        return 6e4 * (t.timezoneOffset || 0);
                      };
                }),
                (e.prototype.dateFormat = function (e, s, o) {
                  var r;
                  if (!i(s) || isNaN(s))
                    return (
                      (null === (r = t.defaultOptions.lang) || void 0 === r
                        ? void 0
                        : r.invalidDate) || ""
                    );
                  e = l(e, "%Y-%m-%d %H:%M:%S");
                  var c = this;
                  r = new this.Date(s);
                  var d = this.get("Hours", r),
                    p = this.get("Day", r),
                    u = this.get("Date", r),
                    f = this.get("Month", r),
                    g = this.get("FullYear", r),
                    m = t.defaultOptions.lang,
                    v = null === m || void 0 === m ? void 0 : m.weekdays,
                    y = null === m || void 0 === m ? void 0 : m.shortWeekdays;
                  return (
                    (r = n(
                      {
                        a: y ? y[p] : v[p].substr(0, 3),
                        A: v[p],
                        d: h(u),
                        e: h(u, 2, " "),
                        w: p,
                        b: m.shortMonths[f],
                        B: m.months[f],
                        m: h(f + 1),
                        o: f + 1,
                        y: g.toString().substr(2, 2),
                        Y: g,
                        H: h(d),
                        k: d,
                        I: h(d % 12 || 12),
                        l: d % 12 || 12,
                        M: h(this.get("Minutes", r)),
                        p: 12 > d ? "AM" : "PM",
                        P: 12 > d ? "am" : "pm",
                        S: h(r.getSeconds()),
                        L: h(Math.floor(s % 1e3), 3),
                      },
                      t.dateFormats
                    )),
                    a(r, function (t, i) {
                      for (; -1 !== e.indexOf("%" + i); )
                        e = e.replace(
                          "%" + i,
                          "function" == typeof t ? t.call(c, s) : t
                        );
                    }),
                    o ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                  );
                }),
                (e.prototype.resolveDTLFormat = function (t) {
                  return o(t, !0)
                    ? t
                    : ((t = c(t)), { main: t[0], from: t[1], to: t[2] });
                }),
                (e.prototype.getTimeTicks = function (t, e, s, o) {
                  var r,
                    a = this,
                    h = [],
                    c = {},
                    p = new a.Date(e),
                    u = t.unitRange,
                    f = t.count || 1;
                  if (((o = l(o, 1)), i(e))) {
                    if (
                      (a.set(
                        "Milliseconds",
                        p,
                        u >= d.second
                          ? 0
                          : f * Math.floor(a.get("Milliseconds", p) / f)
                      ),
                      u >= d.second &&
                        a.set(
                          "Seconds",
                          p,
                          u >= d.minute
                            ? 0
                            : f * Math.floor(a.get("Seconds", p) / f)
                        ),
                      u >= d.minute &&
                        a.set(
                          "Minutes",
                          p,
                          u >= d.hour
                            ? 0
                            : f * Math.floor(a.get("Minutes", p) / f)
                        ),
                      u >= d.hour &&
                        a.set(
                          "Hours",
                          p,
                          u >= d.day ? 0 : f * Math.floor(a.get("Hours", p) / f)
                        ),
                      u >= d.day &&
                        a.set(
                          "Date",
                          p,
                          u >= d.month
                            ? 1
                            : Math.max(1, f * Math.floor(a.get("Date", p) / f))
                        ),
                      u >= d.month)
                    ) {
                      a.set(
                        "Month",
                        p,
                        u >= d.year ? 0 : f * Math.floor(a.get("Month", p) / f)
                      );
                      var g = a.get("FullYear", p);
                    }
                    u >= d.year && a.set("FullYear", p, g - (g % f)),
                      u === d.week &&
                        ((g = a.get("Day", p)),
                        a.set(
                          "Date",
                          p,
                          a.get("Date", p) - g + o + (g < o ? -7 : 0)
                        )),
                      (g = a.get("FullYear", p)),
                      (o = a.get("Month", p));
                    var m = a.get("Date", p),
                      v = a.get("Hours", p);
                    for (
                      e = p.getTime(),
                        a.variableTimezone &&
                          (r =
                            s - e > 4 * d.month ||
                            a.getTimezoneOffset(e) !== a.getTimezoneOffset(s)),
                        e = p.getTime(),
                        p = 1;
                      e < s;

                    )
                      h.push(e),
                        (e =
                          u === d.year
                            ? a.makeTime(g + p * f, 0)
                            : u === d.month
                            ? a.makeTime(g, o + p * f)
                            : !r || (u !== d.day && u !== d.week)
                            ? r && u === d.hour && 1 < f
                              ? a.makeTime(g, o, m, v + p * f)
                              : e + u * f
                            : a.makeTime(
                                g,
                                o,
                                m + p * f * (u === d.day ? 1 : 7)
                              )),
                        p++;
                    h.push(e),
                      u <= d.hour &&
                        1e4 > h.length &&
                        h.forEach(function (t) {
                          0 == t % 18e5 &&
                            "000000000" === a.dateFormat("%H%M%S%L", t) &&
                            (c[t] = "day");
                        });
                  }
                  return (
                    (h.info = n(t, { higherRanks: c, totalRange: u * f })), h
                  );
                }),
                (e.defaultOptions = {
                  Date: void 0,
                  getTimezoneOffset: void 0,
                  timezone: void 0,
                  timezoneOffset: 0,
                  useUTC: !0,
                }),
                e
              );
            })()),
            (t.Time = e),
            t.Time
          );
        }
      ),
      e(
        i,
        "parts/Options.js",
        [
          i["parts/Globals.js"],
          i["parts/Time.js"],
          i["parts/Color.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i, s) {
          i = i.parse;
          var n = s.merge;
          (t.defaultOptions = {
            colors:
              "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(
                " "
              ),
            symbols: [
              "circle",
              "diamond",
              "square",
              "triangle",
              "triangle-down",
            ],
            lang: {
              loading: "Loading...",
              months:
                "January February March April May June July August September October November December".split(
                  " "
                ),
              shortMonths:
                "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
              weekdays:
                "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                  " "
                ),
              decimalPoint: ".",
              numericSymbols: "kMGTPE".split(""),
              resetZoom: "Reset zoom",
              resetZoomTitle: "Reset zoom level 1:1",
              thousandsSep: " ",
            },
            global: {},
            time: e.defaultOptions,
            chart: {
              styledMode: !1,
              borderRadius: 0,
              colorCount: 10,
              defaultSeriesType: "line",
              ignoreHiddenSeries: !0,
              spacing: [10, 10, 15, 10],
              resetZoomButton: {
                theme: { zIndex: 6 },
                position: { align: "right", x: -10, y: 10 },
              },
              width: null,
              height: null,
              borderColor: "#335cad",
              backgroundColor: "#ffffff",
              plotBorderColor: "#cccccc",
            },
            title: {
              text: "Chart title",
              align: "center",
              margin: 15,
              widthAdjust: -44,
            },
            subtitle: { text: "", align: "center", widthAdjust: -44 },
            caption: {
              margin: 15,
              text: "",
              align: "left",
              verticalAlign: "bottom",
            },
            plotOptions: {},
            labels: { style: { position: "absolute", color: "#333333" } },
            legend: {
              enabled: !0,
              align: "center",
              alignColumns: !0,
              layout: "horizontal",
              labelFormatter: function () {
                return this.name;
              },
              borderColor: "#999999",
              borderRadius: 0,
              navigation: { activeColor: "#003399", inactiveColor: "#cccccc" },
              itemStyle: {
                color: "#333333",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "bold",
                textOverflow: "ellipsis",
              },
              itemHoverStyle: { color: "#000000" },
              itemHiddenStyle: { color: "#cccccc" },
              shadow: !1,
              itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px",
              },
              squareSymbol: !0,
              symbolPadding: 5,
              verticalAlign: "bottom",
              x: 0,
              y: 0,
              title: { style: { fontWeight: "bold" } },
            },
            loading: {
              labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%",
              },
              style: {
                position: "absolute",
                backgroundColor: "#ffffff",
                opacity: 0.5,
                textAlign: "center",
              },
            },
            tooltip: {
              enabled: !0,
              animation: t.svg,
              borderRadius: 3,
              dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y",
              },
              footerFormat: "",
              padding: 8,
              snap: t.isTouchDevice ? 25 : 10,
              headerFormat:
                '<span style="font-size: 10px">{point.key}</span><br/>',
              pointFormat:
                '<span style="color:{point.color}">â—</span> {series.name}: <b>{point.y}</b><br/>',
              backgroundColor: i("#f7f7f7").setOpacity(0.85).get(),
              borderWidth: 1,
              shadow: !0,
              style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                whiteSpace: "nowrap",
              },
            },
            credits: {
              enabled: !0,
              href: "https://www.highcharts.com?credits",
              position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5,
              },
              style: { cursor: "pointer", color: "#999999", fontSize: "9px" },
              text: "Highcharts.com",
            },
          }),
            (t.setOptions = function (e) {
              return (
                (t.defaultOptions = n(!0, t.defaultOptions, e)),
                (e.time || e.global) &&
                  t.time.update(
                    n(
                      t.defaultOptions.global,
                      t.defaultOptions.time,
                      e.global,
                      e.time
                    )
                  ),
                t.defaultOptions
              );
            }),
            (t.getOptions = function () {
              return t.defaultOptions;
            }),
            (t.defaultPlotOptions = t.defaultOptions.plotOptions),
            (t.time = new e(n(t.defaultOptions.global, t.defaultOptions.time))),
            (t.dateFormat = function (e, i, s) {
              return t.time.dateFormat(e, i, s);
            });
        }
      ),
      e(
        i,
        "parts/Axis.js",
        [
          i["parts/Color.js"],
          i["parts/Globals.js"],
          i["parts/Tick.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i, s) {
          var n = s.addEvent,
            o = s.animObject,
            r = s.arrayMax,
            a = s.arrayMin,
            h = s.clamp,
            l = s.correctFloat,
            c = s.defined,
            d = s.destroyObjectProperties,
            p = s.error,
            u = s.extend,
            f = s.fireEvent,
            g = s.format,
            m = s.getMagnitude,
            v = s.isArray,
            y = s.isFunction,
            x = s.isNumber,
            b = s.isString,
            k = s.merge,
            w = s.normalizeTickInterval,
            M = s.objectEach,
            S = s.pick,
            T = s.relativeLength,
            C = s.removeEvent,
            A = s.splat,
            D = s.syncTimeout,
            E = e.defaultOptions,
            O = e.deg2rad;
          return (
            (s = (function () {
              function s(t, e) {
                (this.zoomEnabled =
                  this.width =
                  this.visible =
                  this.userOptions =
                  this.translationSlope =
                  this.transB =
                  this.transA =
                  this.top =
                  this.ticks =
                  this.tickRotCorr =
                  this.tickPositions =
                  this.tickmarkOffset =
                  this.tickInterval =
                  this.tickAmount =
                  this.side =
                  this.series =
                  this.right =
                  this.positiveValuesOnly =
                  this.pos =
                  this.pointRangePadding =
                  this.pointRange =
                  this.plotLinesAndBandsGroups =
                  this.plotLinesAndBands =
                  this.paddedTicks =
                  this.overlap =
                  this.options =
                  this.oldMin =
                  this.oldMax =
                  this.offset =
                  this.names =
                  this.minPixelPadding =
                  this.minorTicks =
                  this.minorTickInterval =
                  this.min =
                  this.maxLabelLength =
                  this.max =
                  this.len =
                  this.left =
                  this.labelFormatter =
                  this.labelEdge =
                  this.isLinked =
                  this.height =
                  this.hasVisibleSeries =
                  this.hasNames =
                  this.coll =
                  this.closestPointRange =
                  this.chart =
                  this.categories =
                  this.bottom =
                  this.alternateBands =
                    void 0),
                  this.init(t, e);
              }
              return (
                (s.prototype.init = function (t, e) {
                  var i = e.isX,
                    s = this;
                  (s.chart = t),
                    (s.horiz = t.inverted && !s.isZAxis ? !i : i),
                    (s.isXAxis = i),
                    (s.coll = s.coll || (i ? "xAxis" : "yAxis")),
                    f(this, "init", { userOptions: e }),
                    (s.opposite = e.opposite),
                    (s.side =
                      e.side ||
                      (s.horiz ? (s.opposite ? 0 : 2) : s.opposite ? 1 : 3)),
                    s.setOptions(e);
                  var o = this.options,
                    r = o.type;
                  (s.labelFormatter =
                    o.labels.formatter || s.defaultLabelFormatter),
                    (s.userOptions = e),
                    (s.minPixelPadding = 0),
                    (s.reversed = o.reversed),
                    (s.visible = !1 !== o.visible),
                    (s.zoomEnabled = !1 !== o.zoomEnabled),
                    (s.hasNames = "category" === r || !0 === o.categories),
                    (s.categories = o.categories || s.hasNames),
                    s.names || ((s.names = []), (s.names.keys = {})),
                    (s.plotLinesAndBandsGroups = {}),
                    (s.positiveValuesOnly = !(
                      !s.logarithmic || o.allowNegativeLog
                    )),
                    (s.isLinked = c(o.linkedTo)),
                    (s.ticks = {}),
                    (s.labelEdge = []),
                    (s.minorTicks = {}),
                    (s.plotLinesAndBands = []),
                    (s.alternateBands = {}),
                    (s.len = 0),
                    (s.minRange = s.userMinRange = o.minRange || o.maxZoom),
                    (s.range = o.range),
                    (s.offset = o.offset || 0),
                    (s.max = null),
                    (s.min = null),
                    (s.crosshair = S(
                      o.crosshair,
                      A(t.options.tooltip.crosshairs)[i ? 0 : 1],
                      !1
                    )),
                    (e = s.options.events),
                    -1 === t.axes.indexOf(s) &&
                      (i ? t.axes.splice(t.xAxis.length, 0, s) : t.axes.push(s),
                      t[s.coll].push(s)),
                    (s.series = s.series || []),
                    t.inverted &&
                      !s.isZAxis &&
                      i &&
                      void 0 === s.reversed &&
                      (s.reversed = !0),
                    (s.labelRotation = s.options.labels.rotation),
                    M(e, function (t, e) {
                      y(t) && n(s, e, t);
                    }),
                    f(this, "afterInit");
                }),
                (s.prototype.setOptions = function (t) {
                  (this.options = k(
                    s.defaultOptions,
                    "yAxis" === this.coll && s.defaultYAxisOptions,
                    [
                      s.defaultTopAxisOptions,
                      s.defaultRightAxisOptions,
                      s.defaultBottomAxisOptions,
                      s.defaultLeftAxisOptions,
                    ][this.side],
                    k(E[this.coll], t)
                  )),
                    f(this, "afterSetOptions", { userOptions: t });
                }),
                (s.prototype.defaultLabelFormatter = function () {
                  var t = this.axis,
                    e = this.value,
                    i = t.chart.time,
                    s = t.categories,
                    n = this.dateTimeLabelFormat,
                    o = E.lang,
                    r = o.numericSymbols;
                  o = o.numericSymbolMagnitude || 1e3;
                  var a = r && r.length,
                    h = t.options.labels.format;
                  t = t.logarithmic ? Math.abs(e) : t.tickInterval;
                  var l = this.chart,
                    c = l.numberFormatter;
                  if (h) var d = g(h, this, l);
                  else if (s) d = e;
                  else if (n) d = i.dateFormat(n, e);
                  else if (a && 1e3 <= t)
                    for (; a-- && void 0 === d; )
                      (i = Math.pow(o, a + 1)),
                        t >= i &&
                          0 == (10 * e) % i &&
                          null !== r[a] &&
                          0 !== e &&
                          (d = c(e / i, -1) + r[a]);
                  return (
                    void 0 === d &&
                      (d =
                        1e4 <= Math.abs(e) ? c(e, -1) : c(e, -1, void 0, "")),
                    d
                  );
                }),
                (s.prototype.getSeriesExtremes = function () {
                  var t,
                    e = this,
                    i = e.chart;
                  f(this, "getSeriesExtremes", null, function () {
                    (e.hasVisibleSeries = !1),
                      (e.dataMin = e.dataMax = e.threshold = null),
                      (e.softThreshold = !e.isXAxis),
                      e.stacking && e.stacking.buildStacks(),
                      e.series.forEach(function (s) {
                        if (s.visible || !i.options.chart.ignoreHiddenSeries) {
                          var n = s.options,
                            o = n.threshold;
                          if (
                            ((e.hasVisibleSeries = !0),
                            e.positiveValuesOnly && 0 >= o && (o = null),
                            e.isXAxis)
                          ) {
                            if (((n = s.xData), n.length)) {
                              t = s.getXExtremes(n);
                              var r = t.min,
                                a = t.max;
                              x(r) ||
                                r instanceof Date ||
                                ((n = n.filter(x)),
                                (t = s.getXExtremes(n)),
                                (r = t.min),
                                (a = t.max)),
                                n.length &&
                                  ((e.dataMin = Math.min(S(e.dataMin, r), r)),
                                  (e.dataMax = Math.max(S(e.dataMax, a), a)));
                            }
                          } else
                            (s = s.applyExtremes()),
                              x(s.dataMin) &&
                                ((r = s.dataMin),
                                (e.dataMin = Math.min(S(e.dataMin, r), r))),
                              x(s.dataMax) &&
                                ((a = s.dataMax),
                                (e.dataMax = Math.max(S(e.dataMax, a), a))),
                              c(o) && (e.threshold = o),
                              (!n.softThreshold || e.positiveValuesOnly) &&
                                (e.softThreshold = !1);
                        }
                      });
                  }),
                    f(this, "afterGetSeriesExtremes");
                }),
                (s.prototype.translate = function (t, e, i, s, n, o) {
                  var r = this.linkedParent || this,
                    a = 1,
                    h = 0,
                    l = s ? r.oldTransA : r.transA;
                  s = s ? r.oldMin : r.min;
                  var c = r.minPixelPadding;
                  return (
                    (n =
                      (r.isOrdinal ||
                        (r.brokenAxis && r.brokenAxis.hasBreaks) ||
                        (r.logarithmic && n)) &&
                      r.lin2val),
                    l || (l = r.transA),
                    i && ((a *= -1), (h = r.len)),
                    r.reversed && ((a *= -1), (h -= a * (r.sector || r.len))),
                    e
                      ? ((t = (t * a + h - c) / l + s), n && (t = r.lin2val(t)))
                      : (n && (t = r.val2lin(t)),
                        (t = x(s)
                          ? a * (t - s) * l + h + a * c + (x(o) ? l * o : 0)
                          : void 0)),
                    t
                  );
                }),
                (s.prototype.toPixels = function (t, e) {
                  return (
                    this.translate(t, !1, !this.horiz, null, !0) +
                    (e ? 0 : this.pos)
                  );
                }),
                (s.prototype.toValue = function (t, e) {
                  return this.translate(
                    t - (e ? 0 : this.pos),
                    !0,
                    !this.horiz,
                    null,
                    !0
                  );
                }),
                (s.prototype.getPlotLinePath = function (t) {
                  function e(t, e, i) {
                    return (
                      (("pass" !== v && t < e) || t > i) &&
                        (v ? (t = h(t, e, i)) : (r = !0)),
                      t
                    );
                  }
                  var i,
                    s,
                    n,
                    o,
                    r,
                    a = this,
                    l = a.chart,
                    c = a.left,
                    d = a.top,
                    p = t.old,
                    u = t.value,
                    g = t.translatedValue,
                    m = t.lineWidth,
                    v = t.force,
                    y = (p && l.oldChartHeight) || l.chartHeight,
                    b = (p && l.oldChartWidth) || l.chartWidth,
                    k = a.transB;
                  return (
                    (t = {
                      value: u,
                      lineWidth: m,
                      old: p,
                      force: v,
                      acrossPanes: t.acrossPanes,
                      translatedValue: g,
                    }),
                    f(this, "getPlotLinePath", t, function (t) {
                      (g = S(g, a.translate(u, null, null, p))),
                        (g = h(g, -1e5, 1e5)),
                        (i = n = Math.round(g + k)),
                        (s = o = Math.round(y - g - k)),
                        x(g)
                          ? a.horiz
                            ? ((s = d),
                              (o = y - a.bottom),
                              (i = n = e(i, c, c + a.width)))
                            : ((i = c),
                              (n = b - a.right),
                              (s = o = e(s, d, d + a.height)))
                          : ((r = !0), (v = !1)),
                        (t.path =
                          r && !v
                            ? null
                            : l.renderer.crispLine(
                                [
                                  ["M", i, s],
                                  ["L", n, o],
                                ],
                                m || 1
                              ));
                    }),
                    t.path
                  );
                }),
                (s.prototype.getLinearTickPositions = function (t, e, i) {
                  var s = l(Math.floor(e / t) * t);
                  i = l(Math.ceil(i / t) * t);
                  var n,
                    o = [];
                  if ((l(s + t) === s && (n = 20), this.single)) return [e];
                  for (e = s; e <= i && (o.push(e), (e = l(e + t, n)) !== r); )
                    var r = e;
                  return o;
                }),
                (s.prototype.getMinorTickInterval = function () {
                  var t = this.options;
                  return !0 === t.minorTicks
                    ? S(t.minorTickInterval, "auto")
                    : !1 === t.minorTicks
                    ? null
                    : t.minorTickInterval;
                }),
                (s.prototype.getMinorTickPositions = function () {
                  var t = this.options,
                    e = this.tickPositions,
                    i = this.minorTickInterval,
                    s = [],
                    n = this.pointRangePadding || 0,
                    o = this.min - n;
                  n = this.max + n;
                  var r = n - o;
                  if (r && r / i < this.len / 3) {
                    var a = this.logarithmic;
                    if (a)
                      this.paddedTicks.forEach(function (t, e, n) {
                        e &&
                          s.push.apply(
                            s,
                            a.getLogTickPositions(i, n[e - 1], n[e], !0)
                          );
                      });
                    else if (
                      this.dateTime &&
                      "auto" === this.getMinorTickInterval()
                    )
                      s = s.concat(
                        this.getTimeTicks(
                          this.dateTime.normalizeTimeTickInterval(i),
                          o,
                          n,
                          t.startOfWeek
                        )
                      );
                    else
                      for (
                        t = o + ((e[0] - o) % i);
                        t <= n && t !== s[0];
                        t += i
                      )
                        s.push(t);
                  }
                  return 0 !== s.length && this.trimTicks(s), s;
                }),
                (s.prototype.adjustForMinRange = function () {
                  var t,
                    e,
                    i,
                    s,
                    n,
                    o = this.options,
                    h = this.min,
                    l = this.max,
                    d = this.logarithmic;
                  if (
                    (this.isXAxis &&
                      void 0 === this.minRange &&
                      !d &&
                      (c(o.min) || c(o.max)
                        ? (this.minRange = null)
                        : (this.series.forEach(function (o) {
                            for (
                              s = o.xData,
                                e = n = o.xIncrement ? 1 : s.length - 1;
                              0 < e;
                              e--
                            )
                              (i = s[e] - s[e - 1]),
                                (void 0 === t || i < t) && (t = i);
                          }),
                          (this.minRange = Math.min(
                            5 * t,
                            this.dataMax - this.dataMin
                          )))),
                    l - h < this.minRange)
                  ) {
                    var p = this.dataMax - this.dataMin >= this.minRange,
                      u = this.minRange,
                      f = (u - l + h) / 2;
                    (f = [h - f, S(o.min, h - f)]),
                      p &&
                        (f[2] = this.logarithmic
                          ? this.logarithmic.log2lin(this.dataMin)
                          : this.dataMin),
                      (h = r(f)),
                      (l = [h + u, S(o.max, h + u)]),
                      p && (l[2] = d ? d.log2lin(this.dataMax) : this.dataMax),
                      (l = a(l)),
                      l - h < u &&
                        ((f[0] = l - u), (f[1] = S(o.min, l - u)), (h = r(f)));
                  }
                  (this.min = h), (this.max = l);
                }),
                (s.prototype.getClosest = function () {
                  var t;
                  return (
                    this.categories
                      ? (t = 1)
                      : this.series.forEach(function (e) {
                          var i = e.closestPointRange,
                            s =
                              e.visible ||
                              !e.chart.options.chart.ignoreHiddenSeries;
                          !e.noSharedTooltip &&
                            c(i) &&
                            s &&
                            (t = c(t) ? Math.min(t, i) : i);
                        }),
                    t
                  );
                }),
                (s.prototype.nameToX = function (t) {
                  var e = v(this.categories),
                    i = e ? this.categories : this.names,
                    s = t.options.x;
                  if (
                    ((t.series.requireSorting = !1),
                    c(s) ||
                      (s =
                        !1 === this.options.uniqueNames
                          ? t.series.autoIncrement()
                          : e
                          ? i.indexOf(t.name)
                          : S(i.keys[t.name], -1)),
                    -1 === s)
                  ) {
                    if (!e) var n = i.length;
                  } else n = s;
                  return (
                    void 0 !== n &&
                      ((this.names[n] = t.name), (this.names.keys[t.name] = n)),
                    n
                  );
                }),
                (s.prototype.updateNames = function () {
                  var t = this,
                    e = this.names;
                  0 < e.length &&
                    (Object.keys(e.keys).forEach(function (t) {
                      delete e.keys[t];
                    }),
                    (e.length = 0),
                    (this.minRange = this.userMinRange),
                    (this.series || []).forEach(function (e) {
                      (e.xIncrement = null),
                        (e.points && !e.isDirtyData) ||
                          ((t.max = Math.max(t.max, e.xData.length - 1)),
                          e.processData(),
                          e.generatePoints()),
                        e.data.forEach(function (i, s) {
                          if (i && i.options && void 0 !== i.name) {
                            var n = t.nameToX(i);
                            void 0 !== n &&
                              n !== i.x &&
                              ((i.x = n), (e.xData[s] = n));
                          }
                        });
                    }));
                }),
                (s.prototype.setAxisTranslation = function (t) {
                  var e = this,
                    i = e.max - e.min,
                    s = e.axisPointRange || 0,
                    n = 0,
                    o = 0,
                    r = e.linkedParent,
                    a = !!e.categories,
                    h = e.transA,
                    l = e.isXAxis;
                  if (l || a || s) {
                    var c = e.getClosest();
                    r
                      ? ((n = r.minPointOffset), (o = r.pointRangePadding))
                      : e.series.forEach(function (t) {
                          var i = a
                              ? 1
                              : l
                              ? S(t.options.pointRange, c, 0)
                              : e.axisPointRange || 0,
                            r = t.options.pointPlacement;
                          (s = Math.max(s, i)),
                            (e.single && !a) ||
                              ((t = t.is("xrange") ? !l : l),
                              (n = Math.max(n, t && b(r) ? 0 : i / 2)),
                              (o = Math.max(o, t && "on" === r ? 0 : i)));
                        }),
                      (r =
                        e.ordinal && e.ordinal.slope && c
                          ? e.ordinal.slope / c
                          : 1),
                      (e.minPointOffset = n *= r),
                      (e.pointRangePadding = o *= r),
                      (e.pointRange = Math.min(s, e.single && a ? 1 : i)),
                      l && (e.closestPointRange = c);
                  }
                  t && (e.oldTransA = h),
                    (e.translationSlope =
                      e.transA =
                      h =
                        e.staticScale || e.len / (i + o || 1)),
                    (e.transB = e.horiz ? e.left : e.bottom),
                    (e.minPixelPadding = h * n),
                    f(this, "afterSetAxisTranslation");
                }),
                (s.prototype.minFromRange = function () {
                  return this.max - this.range;
                }),
                (s.prototype.setTickInterval = function (t) {
                  var e = this,
                    i = e.chart,
                    s = e.logarithmic,
                    n = e.options,
                    o = e.isXAxis,
                    r = e.isLinked,
                    a = n.maxPadding,
                    h = n.minPadding,
                    d = n.tickInterval,
                    u = n.tickPixelInterval,
                    g = e.categories,
                    v = x(e.threshold) ? e.threshold : null,
                    y = e.softThreshold;
                  e.dateTime || g || r || this.getTickAmount();
                  var b = S(e.userMin, n.min),
                    k = S(e.userMax, n.max);
                  if (r) {
                    e.linkedParent = i[e.coll][n.linkedTo];
                    var M = e.linkedParent.getExtremes();
                    (e.min = S(M.min, M.dataMin)),
                      (e.max = S(M.max, M.dataMax)),
                      n.type !== e.linkedParent.options.type && p(11, 1, i);
                  } else {
                    if (!y && c(v))
                      if (e.dataMin >= v) (M = v), (h = 0);
                      else if (e.dataMax <= v) {
                        var T = v;
                        a = 0;
                      }
                    (e.min = S(b, M, e.dataMin)), (e.max = S(k, T, e.dataMax));
                  }
                  s &&
                    (e.positiveValuesOnly &&
                      !t &&
                      0 >= Math.min(e.min, S(e.dataMin, e.min)) &&
                      p(10, 1, i),
                    (e.min = l(s.log2lin(e.min), 16)),
                    (e.max = l(s.log2lin(e.max), 16))),
                    e.range &&
                      c(e.max) &&
                      ((e.userMin =
                        e.min =
                        b =
                          Math.max(e.dataMin, e.minFromRange())),
                      (e.userMax = k = e.max),
                      (e.range = null)),
                    f(e, "foundExtremes"),
                    e.beforePadding && e.beforePadding(),
                    e.adjustForMinRange(),
                    !(
                      g ||
                      e.axisPointRange ||
                      (e.stacking && e.stacking.usePercentage) ||
                      r
                    ) &&
                      c(e.min) &&
                      c(e.max) &&
                      (i = e.max - e.min) &&
                      (!c(b) && h && (e.min -= i * h),
                      !c(k) && a && (e.max += i * a)),
                    x(e.userMin) ||
                      (x(n.softMin) &&
                        n.softMin < e.min &&
                        (e.min = b = n.softMin),
                      x(n.floor) && (e.min = Math.max(e.min, n.floor))),
                    x(e.userMax) ||
                      (x(n.softMax) &&
                        n.softMax > e.max &&
                        (e.max = k = n.softMax),
                      x(n.ceiling) && (e.max = Math.min(e.max, n.ceiling))),
                    y &&
                      c(e.dataMin) &&
                      ((v = v || 0),
                      !c(b) && e.min < v && e.dataMin >= v
                        ? (e.min = e.options.minRange
                            ? Math.min(v, e.max - e.minRange)
                            : v)
                        : !c(k) &&
                          e.max > v &&
                          e.dataMax <= v &&
                          (e.max = e.options.minRange
                            ? Math.max(v, e.min + e.minRange)
                            : v)),
                    (e.tickInterval =
                      e.min === e.max || void 0 === e.min || void 0 === e.max
                        ? 1
                        : r &&
                          !d &&
                          u === e.linkedParent.options.tickPixelInterval
                        ? (d = e.linkedParent.tickInterval)
                        : S(
                            d,
                            this.tickAmount
                              ? (e.max - e.min) /
                                  Math.max(this.tickAmount - 1, 1)
                              : void 0,
                            g ? 1 : ((e.max - e.min) * u) / Math.max(e.len, u)
                          )),
                    o &&
                      !t &&
                      e.series.forEach(function (t) {
                        t.processData(e.min !== e.oldMin || e.max !== e.oldMax);
                      }),
                    e.setAxisTranslation(!0),
                    e.beforeSetTickPositions && e.beforeSetTickPositions(),
                    e.ordinal &&
                      (e.tickInterval = e.ordinal.postProcessTickInterval(
                        e.tickInterval
                      )),
                    e.pointRange &&
                      !d &&
                      (e.tickInterval = Math.max(e.pointRange, e.tickInterval)),
                    (t = S(
                      n.minTickInterval,
                      e.dateTime && e.closestPointRange
                    )),
                    !d && e.tickInterval < t && (e.tickInterval = t),
                    e.dateTime ||
                      e.logarithmic ||
                      d ||
                      (e.tickInterval = w(
                        e.tickInterval,
                        void 0,
                        m(e.tickInterval),
                        S(
                          n.allowDecimals,
                          0.5 > e.tickInterval || void 0 !== this.tickAmount
                        ),
                        !!this.tickAmount
                      )),
                    this.tickAmount || (e.tickInterval = e.unsquish()),
                    this.setTickPositions();
                }),
                (s.prototype.setTickPositions = function () {
                  var t = this.options,
                    e = t.tickPositions,
                    i = this.getMinorTickInterval(),
                    s = t.tickPositioner,
                    n = this.hasVerticalPanning(),
                    o = "colorAxis" === this.coll,
                    r = (o || !n) && t.startOnTick;
                  (n = (o || !n) && t.endOnTick),
                    (this.tickmarkOffset =
                      this.categories &&
                      "between" === t.tickmarkPlacement &&
                      1 === this.tickInterval
                        ? 0.5
                        : 0),
                    (this.minorTickInterval =
                      "auto" === i && this.tickInterval
                        ? this.tickInterval / 5
                        : i),
                    (this.single =
                      this.min === this.max &&
                      c(this.min) &&
                      !this.tickAmount &&
                      (parseInt(this.min, 10) === this.min ||
                        !1 !== t.allowDecimals)),
                    (this.tickPositions = i = e && e.slice()),
                    !i &&
                      ((this.ordinal && this.ordinal.positions) ||
                      !(
                        (this.max - this.min) / this.tickInterval >
                        Math.max(2 * this.len, 200)
                      )
                        ? (i = this.dateTime
                            ? this.getTimeTicks(
                                this.dateTime.normalizeTimeTickInterval(
                                  this.tickInterval,
                                  t.units
                                ),
                                this.min,
                                this.max,
                                t.startOfWeek,
                                this.ordinal && this.ordinal.positions,
                                this.closestPointRange,
                                !0
                              )
                            : this.logarithmic
                            ? this.logarithmic.getLogTickPositions(
                                this.tickInterval,
                                this.min,
                                this.max
                              )
                            : this.getLinearTickPositions(
                                this.tickInterval,
                                this.min,
                                this.max
                              ))
                        : ((i = [this.min, this.max]), p(19, !1, this.chart)),
                      i.length > this.len &&
                        ((i = [i[0], i.pop()]),
                        i[0] === i[1] && (i.length = 1)),
                      (this.tickPositions = i),
                      s && (s = s.apply(this, [this.min, this.max]))) &&
                      (this.tickPositions = i = s),
                    (this.paddedTicks = i.slice(0)),
                    this.trimTicks(i, r, n),
                    this.isLinked ||
                      (this.single &&
                        2 > i.length &&
                        !this.categories &&
                        !this.series.some(function (t) {
                          return (
                            t.is("heatmap") &&
                            "between" === t.options.pointPlacement
                          );
                        }) &&
                        ((this.min -= 0.5), (this.max += 0.5)),
                      e || s || this.adjustTickAmount()),
                    f(this, "afterSetTickPositions");
                }),
                (s.prototype.trimTicks = function (t, e, i) {
                  var s = t[0],
                    n = t[t.length - 1],
                    o = (!this.isOrdinal && this.minPointOffset) || 0;
                  if ((f(this, "trimTicks"), !this.isLinked)) {
                    if (e && -1 / 0 !== s) this.min = s;
                    else for (; this.min - o > t[0]; ) t.shift();
                    if (i) this.max = n;
                    else for (; this.max + o < t[t.length - 1]; ) t.pop();
                    0 === t.length &&
                      c(s) &&
                      !this.options.tickPositions &&
                      t.push((n + s) / 2);
                  }
                }),
                (s.prototype.alignToOthers = function () {
                  var t,
                    e = {},
                    i = this.options;
                  return (
                    !1 === this.chart.options.chart.alignTicks ||
                      !1 === i.alignTicks ||
                      !1 === i.startOnTick ||
                      !1 === i.endOnTick ||
                      this.logarithmic ||
                      this.chart[this.coll].forEach(function (i) {
                        var s = i.options;
                        (s = [
                          i.horiz ? s.left : s.top,
                          s.width,
                          s.height,
                          s.pane,
                        ].join()),
                          i.series.length && (e[s] ? (t = !0) : (e[s] = 1));
                      }),
                    t
                  );
                }),
                (s.prototype.getTickAmount = function () {
                  var t = this.options,
                    e = t.tickAmount,
                    i = t.tickPixelInterval;
                  !c(t.tickInterval) &&
                    !e &&
                    this.len < i &&
                    !this.isRadial &&
                    !this.logarithmic &&
                    t.startOnTick &&
                    t.endOnTick &&
                    (e = 2),
                    !e &&
                      this.alignToOthers() &&
                      (e = Math.ceil(this.len / i) + 1),
                    4 > e && ((this.finalTickAmt = e), (e = 5)),
                    (this.tickAmount = e);
                }),
                (s.prototype.adjustTickAmount = function () {
                  var t,
                    e = this.options,
                    i = this.tickInterval,
                    s = this.tickPositions,
                    n = this.tickAmount,
                    o = this.finalTickAmt,
                    r = s && s.length,
                    a = S(this.threshold, this.softThreshold ? 0 : null);
                  if (this.hasData()) {
                    if (r < n) {
                      for (t = this.min; s.length < n; )
                        s.length % 2 || t === a
                          ? s.push(l(s[s.length - 1] + i))
                          : s.unshift(l(s[0] - i));
                      (this.transA *= (r - 1) / (n - 1)),
                        (this.min = e.startOnTick
                          ? s[0]
                          : Math.min(this.min, s[0])),
                        (this.max = e.endOnTick
                          ? s[s.length - 1]
                          : Math.max(this.max, s[s.length - 1]));
                    } else
                      r > n &&
                        ((this.tickInterval *= 2), this.setTickPositions());
                    if (c(o)) {
                      for (i = e = s.length; i--; )
                        ((3 === o && 1 == i % 2) ||
                          (2 >= o && 0 < i && i < e - 1)) &&
                          s.splice(i, 1);
                      this.finalTickAmt = void 0;
                    }
                  }
                }),
                (s.prototype.setScale = function () {
                  var t,
                    e = !1,
                    i = !1;
                  this.series.forEach(function (t) {
                    var s;
                    (e = e || t.isDirtyData || t.isDirty),
                      (i =
                        i ||
                        (null === (s = t.xAxis) || void 0 === s
                          ? void 0
                          : s.isDirty) ||
                        !1);
                  }),
                    (this.oldMin = this.min),
                    (this.oldMax = this.max),
                    (this.oldAxisLength = this.len),
                    this.setAxisSize(),
                    (t = this.len !== this.oldAxisLength) ||
                    e ||
                    i ||
                    this.isLinked ||
                    this.forceRedraw ||
                    this.userMin !== this.oldUserMin ||
                    this.userMax !== this.oldUserMax ||
                    this.alignToOthers()
                      ? (this.stacking && this.stacking.resetStacks(),
                        (this.forceRedraw = !1),
                        this.getSeriesExtremes(),
                        this.setTickInterval(),
                        (this.oldUserMin = this.userMin),
                        (this.oldUserMax = this.userMax),
                        this.isDirty ||
                          (this.isDirty =
                            t ||
                            this.min !== this.oldMin ||
                            this.max !== this.oldMax))
                      : this.stacking && this.stacking.cleanStacks(),
                    e && this.panningState && (this.panningState.isDirty = !0),
                    f(this, "afterSetScale");
                }),
                (s.prototype.setExtremes = function (t, e, i, s, n) {
                  var o = this,
                    r = o.chart;
                  (i = S(i, !0)),
                    o.series.forEach(function (t) {
                      delete t.kdTree;
                    }),
                    (n = u(n, { min: t, max: e })),
                    f(o, "setExtremes", n, function () {
                      (o.userMin = t),
                        (o.userMax = e),
                        (o.eventArgs = n),
                        i && r.redraw(s);
                    });
                }),
                (s.prototype.zoom = function (t, e) {
                  var i = this,
                    s = this.dataMin,
                    n = this.dataMax,
                    o = this.options,
                    r = Math.min(s, S(o.min, s)),
                    a = Math.max(n, S(o.max, n));
                  return (
                    (t = { newMin: t, newMax: e }),
                    f(this, "zoom", t, function (t) {
                      var e = t.newMin,
                        o = t.newMax;
                      (e === i.min && o === i.max) ||
                        (i.allowZoomOutside ||
                          (c(s) && (e < r && (e = r), e > a && (e = a)),
                          c(n) && (o < r && (o = r), o > a && (o = a))),
                        (i.displayBtn = void 0 !== e || void 0 !== o),
                        i.setExtremes(e, o, !1, void 0, { trigger: "zoom" })),
                        (t.zoomed = !0);
                    }),
                    t.zoomed
                  );
                }),
                (s.prototype.setAxisSize = function () {
                  var t = this.chart,
                    e = this.options,
                    i = e.offsets || [0, 0, 0, 0],
                    s = this.horiz,
                    n = (this.width = Math.round(
                      T(S(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)
                    )),
                    o = (this.height = Math.round(
                      T(S(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)
                    )),
                    r = (this.top = Math.round(
                      T(S(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)
                    ));
                  (e = this.left =
                    Math.round(
                      T(S(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft)
                    )),
                    (this.bottom = t.chartHeight - o - r),
                    (this.right = t.chartWidth - n - e),
                    (this.len = Math.max(s ? n : o, 0)),
                    (this.pos = s ? e : r);
                }),
                (s.prototype.getExtremes = function () {
                  var t = this.logarithmic;
                  return {
                    min: t ? l(t.lin2log(this.min)) : this.min,
                    max: t ? l(t.lin2log(this.max)) : this.max,
                    dataMin: this.dataMin,
                    dataMax: this.dataMax,
                    userMin: this.userMin,
                    userMax: this.userMax,
                  };
                }),
                (s.prototype.getThreshold = function (t) {
                  var e = this.logarithmic,
                    i = e ? e.lin2log(this.min) : this.min;
                  return (
                    (e = e ? e.lin2log(this.max) : this.max),
                    null === t || -1 / 0 === t
                      ? (t = i)
                      : 1 / 0 === t
                      ? (t = e)
                      : i > t
                      ? (t = i)
                      : e < t && (t = e),
                    this.translate(t, 0, 1, 0, 1)
                  );
                }),
                (s.prototype.autoLabelAlign = function (t) {
                  var e = (S(t, 0) - 90 * this.side + 720) % 360;
                  return (
                    (t = { align: "center" }),
                    f(this, "autoLabelAlign", t, function (t) {
                      15 < e && 165 > e
                        ? (t.align = "right")
                        : 195 < e && 345 > e && (t.align = "left");
                    }),
                    t.align
                  );
                }),
                (s.prototype.tickSize = function (t) {
                  var e = this.options,
                    i = e["tick" === t ? "tickLength" : "minorTickLength"],
                    s = S(
                      e["tick" === t ? "tickWidth" : "minorTickWidth"],
                      "tick" === t && this.isXAxis && !this.categories ? 1 : 0
                    );
                  if (s && i) {
                    "inside" === e[t + "Position"] && (i = -i);
                    var n = [i, s];
                  }
                  return (
                    (t = { tickSize: n }),
                    f(this, "afterTickSize", t),
                    t.tickSize
                  );
                }),
                (s.prototype.labelMetrics = function () {
                  var t = (this.tickPositions && this.tickPositions[0]) || 0;
                  return this.chart.renderer.fontMetrics(
                    this.options.labels.style &&
                      this.options.labels.style.fontSize,
                    this.ticks[t] && this.ticks[t].label
                  );
                }),
                (s.prototype.unsquish = function () {
                  var t,
                    e,
                    i,
                    s = this.options.labels,
                    n = this.horiz,
                    o = this.tickInterval,
                    r = o,
                    a =
                      this.len /
                      (((this.categories ? 1 : 0) + this.max - this.min) / o),
                    h = s.rotation,
                    d = this.labelMetrics(),
                    p = Number.MAX_VALUE,
                    u = this.max - this.min,
                    f = function (t) {
                      var e = t / (a || 1);
                      return (
                        (e = 1 < e ? Math.ceil(e) : 1),
                        e * o > u &&
                          1 / 0 !== t &&
                          1 / 0 !== a &&
                          u &&
                          (e = Math.ceil(u / o)),
                        l(e * o)
                      );
                    };
                  return (
                    n
                      ? (i =
                          !s.staggerLines &&
                          !s.step &&
                          (c(h)
                            ? [h]
                            : a < S(s.autoRotationLimit, 80) &&
                              s.autoRotation)) &&
                        i.forEach(function (i) {
                          if (i === h || (i && -90 <= i && 90 >= i)) {
                            e = f(Math.abs(d.h / Math.sin(O * i)));
                            var s = e + Math.abs(i / 360);
                            s < p && ((p = s), (t = i), (r = e));
                          }
                        })
                      : s.step || (r = f(d.h)),
                    (this.autoRotation = i),
                    (this.labelRotation = S(t, h)),
                    r
                  );
                }),
                (s.prototype.getSlotWidth = function (t) {
                  var e,
                    i = this.chart,
                    s = this.horiz,
                    n = this.options.labels,
                    o = Math.max(
                      this.tickPositions.length - (this.categories ? 0 : 1),
                      1
                    ),
                    r = i.margin[3];
                  if (t && x(t.slotWidth)) return t.slotWidth;
                  if (s && n && 2 > (n.step || 0))
                    return n.rotation
                      ? 0
                      : ((this.staggerLines || 1) * this.len) / o;
                  if (!s) {
                    if (
                      void 0 !==
                      (t =
                        null ===
                          (e = null === n || void 0 === n ? void 0 : n.style) ||
                        void 0 === e
                          ? void 0
                          : e.width)
                    )
                      return parseInt(t, 10);
                    if (r) return r - i.spacing[3];
                  }
                  return 0.33 * i.chartWidth;
                }),
                (s.prototype.renderUnsquish = function () {
                  var t = this.chart,
                    e = t.renderer,
                    i = this.tickPositions,
                    s = this.ticks,
                    n = this.options.labels,
                    o = (n && n.style) || {},
                    r = this.horiz,
                    a = this.getSlotWidth(),
                    h = Math.max(1, Math.round(a - 2 * (n.padding || 5))),
                    l = {},
                    c = this.labelMetrics(),
                    d = n.style && n.style.textOverflow,
                    p = 0;
                  if (
                    (b(n.rotation) || (l.rotation = n.rotation || 0),
                    i.forEach(function (t) {
                      (t = s[t]),
                        t.movedLabel && t.replaceMovedLabel(),
                        t &&
                          t.label &&
                          t.label.textPxLength > p &&
                          (p = t.label.textPxLength);
                    }),
                    (this.maxLabelLength = p),
                    this.autoRotation)
                  )
                    p > h && p > c.h
                      ? (l.rotation = this.labelRotation)
                      : (this.labelRotation = 0);
                  else if (a) {
                    var u = h;
                    if (!d) {
                      var f = "clip";
                      for (h = i.length; !r && h--; ) {
                        var g = i[h];
                        (g = s[g].label) &&
                          (g.styles && "ellipsis" === g.styles.textOverflow
                            ? g.css({ textOverflow: "clip" })
                            : g.textPxLength > a && g.css({ width: a + "px" }),
                          g.getBBox().height >
                            this.len / i.length - (c.h - c.f) &&
                            (g.specificTextOverflow = "ellipsis"));
                      }
                    }
                  }
                  l.rotation &&
                    ((u = p > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : p),
                    d || (f = "ellipsis")),
                    (this.labelAlign =
                      n.align || this.autoLabelAlign(this.labelRotation)) &&
                      (l.align = this.labelAlign),
                    i.forEach(function (t) {
                      var e = (t = s[t]) && t.label,
                        i = o.width,
                        n = {};
                      e &&
                        (e.attr(l),
                        t.shortenLabel
                          ? t.shortenLabel()
                          : u &&
                            !i &&
                            "nowrap" !== o.whiteSpace &&
                            (u < e.textPxLength || "SPAN" === e.element.tagName)
                          ? ((n.width = u + "px"),
                            d || (n.textOverflow = e.specificTextOverflow || f),
                            e.css(n))
                          : e.styles &&
                            e.styles.width &&
                            !n.width &&
                            !i &&
                            e.css({ width: null }),
                        delete e.specificTextOverflow,
                        (t.rotation = l.rotation));
                    }, this),
                    (this.tickRotCorr = e.rotCorr(
                      c.b,
                      this.labelRotation || 0,
                      0 !== this.side
                    ));
                }),
                (s.prototype.hasData = function () {
                  return (
                    this.series.some(function (t) {
                      return t.hasData();
                    }) ||
                    (this.options.showEmpty && c(this.min) && c(this.max))
                  );
                }),
                (s.prototype.addTitle = function (t) {
                  var e,
                    i = this.chart.renderer,
                    s = this.horiz,
                    n = this.opposite,
                    o = this.options.title,
                    r = this.chart.styledMode;
                  this.axisTitle ||
                    ((e = o.textAlign) ||
                      (e = (
                        s
                          ? { low: "left", middle: "center", high: "right" }
                          : {
                              low: n ? "right" : "left",
                              middle: "center",
                              high: n ? "left" : "right",
                            }
                      )[o.align]),
                    (this.axisTitle = i
                      .text(o.text, 0, 0, o.useHTML)
                      .attr({ zIndex: 7, rotation: o.rotation || 0, align: e })
                      .addClass("highcharts-axis-title")),
                    r || this.axisTitle.css(k(o.style)),
                    this.axisTitle.add(this.axisGroup),
                    (this.axisTitle.isNew = !0)),
                    r ||
                      o.style.width ||
                      this.isRadial ||
                      this.axisTitle.css({ width: this.len + "px" }),
                    this.axisTitle[t ? "show" : "hide"](t);
                }),
                (s.prototype.generateTick = function (t) {
                  var e = this.ticks;
                  e[t] ? e[t].addLabel() : (e[t] = new i(this, t));
                }),
                (s.prototype.getOffset = function () {
                  var t,
                    e = this,
                    i = e.chart,
                    s = i.renderer,
                    n = e.options,
                    o = e.tickPositions,
                    r = e.ticks,
                    a = e.horiz,
                    h = e.side,
                    l = i.inverted && !e.isZAxis ? [1, 0, 3, 2][h] : h,
                    d = 0,
                    p = 0,
                    u = n.title,
                    g = n.labels,
                    m = 0,
                    v = i.axisOffset;
                  i = i.clipOffset;
                  var y = [-1, 1, 1, -1][h],
                    x = n.className,
                    b = e.axisParent,
                    k = e.hasData();
                  if (
                    ((e.showAxis = t = k || S(n.showEmpty, !0)),
                    (e.staggerLines = e.horiz && g.staggerLines),
                    e.axisGroup ||
                      ((e.gridGroup = s
                        .g("grid")
                        .attr({ zIndex: n.gridZIndex || 1 })
                        .addClass(
                          "highcharts-" +
                            this.coll.toLowerCase() +
                            "-grid " +
                            (x || "")
                        )
                        .add(b)),
                      (e.axisGroup = s
                        .g("axis")
                        .attr({ zIndex: n.zIndex || 2 })
                        .addClass(
                          "highcharts-" +
                            this.coll.toLowerCase() +
                            " " +
                            (x || "")
                        )
                        .add(b)),
                      (e.labelGroup = s
                        .g("axis-labels")
                        .attr({ zIndex: g.zIndex || 7 })
                        .addClass(
                          "highcharts-" +
                            e.coll.toLowerCase() +
                            "-labels " +
                            (x || "")
                        )
                        .add(b))),
                    k || e.isLinked
                      ? (o.forEach(function (t, i) {
                          e.generateTick(t, i);
                        }),
                        e.renderUnsquish(),
                        (e.reserveSpaceDefault =
                          0 === h ||
                          2 === h ||
                          { 1: "left", 3: "right" }[h] === e.labelAlign),
                        S(
                          g.reserveSpace,
                          "center" === e.labelAlign || null,
                          e.reserveSpaceDefault
                        ) &&
                          o.forEach(function (t) {
                            m = Math.max(r[t].getLabelSize(), m);
                          }),
                        e.staggerLines && (m *= e.staggerLines),
                        (e.labelOffset = m * (e.opposite ? -1 : 1)))
                      : M(r, function (t, e) {
                          t.destroy(), delete r[e];
                        }),
                    u &&
                      u.text &&
                      !1 !== u.enabled &&
                      (e.addTitle(t), t && !1 !== u.reserveSpace))
                  ) {
                    e.titleOffset = d =
                      e.axisTitle.getBBox()[a ? "height" : "width"];
                    var w = u.offset;
                    p = c(w) ? 0 : S(u.margin, a ? 5 : 10);
                  }
                  e.renderLine(),
                    (e.offset =
                      y * S(n.offset, v[h] ? v[h] + (n.margin || 0) : 0)),
                    (e.tickRotCorr = e.tickRotCorr || { x: 0, y: 0 }),
                    (s =
                      0 === h
                        ? -e.labelMetrics().h
                        : 2 === h
                        ? e.tickRotCorr.y
                        : 0),
                    (p = Math.abs(m) + p),
                    m &&
                      (p =
                        p -
                        s +
                        y * (a ? S(g.y, e.tickRotCorr.y + 8 * y) : g.x)),
                    (e.axisTitleMargin = S(w, p)),
                    e.getMaxLabelDimensions &&
                      (e.maxLabelDimensions = e.getMaxLabelDimensions(r, o)),
                    (a = this.tickSize("tick")),
                    (v[h] = Math.max(
                      v[h],
                      e.axisTitleMargin + d + y * e.offset,
                      p,
                      o && o.length && a ? a[0] + y * e.offset : 0
                    )),
                    (n = n.offset
                      ? 0
                      : 2 * Math.floor(e.axisLine.strokeWidth() / 2)),
                    (i[l] = Math.max(i[l], n)),
                    f(this, "afterGetOffset");
                }),
                (s.prototype.getLinePath = function (t) {
                  var e = this.chart,
                    i = this.opposite,
                    s = this.offset,
                    n = this.horiz,
                    o = this.left + (i ? this.width : 0) + s;
                  return (
                    (s =
                      e.chartHeight - this.bottom - (i ? this.height : 0) + s),
                    i && (t *= -1),
                    e.renderer.crispLine(
                      [
                        ["M", n ? this.left : o, n ? s : this.top],
                        [
                          "L",
                          n ? e.chartWidth - this.right : o,
                          n ? s : e.chartHeight - this.bottom,
                        ],
                      ],
                      t
                    )
                  );
                }),
                (s.prototype.renderLine = function () {
                  this.axisLine ||
                    ((this.axisLine = this.chart.renderer
                      .path()
                      .addClass("highcharts-axis-line")
                      .add(this.axisGroup)),
                    this.chart.styledMode ||
                      this.axisLine.attr({
                        stroke: this.options.lineColor,
                        "stroke-width": this.options.lineWidth,
                        zIndex: 7,
                      }));
                }),
                (s.prototype.getTitlePosition = function () {
                  var t = this.horiz,
                    e = this.left,
                    i = this.top,
                    s = this.len,
                    n = this.options.title,
                    o = t ? e : i,
                    r = this.opposite,
                    a = this.offset,
                    h = n.x || 0,
                    l = n.y || 0,
                    c = this.axisTitle,
                    d = this.chart.renderer.fontMetrics(
                      n.style && n.style.fontSize,
                      c
                    );
                  return (
                    (c = Math.max(c.getBBox(null, 0).height - d.h - 1, 0)),
                    (s = {
                      low: o + (t ? 0 : s),
                      middle: o + s / 2,
                      high: o + (t ? s : 0),
                    }[n.align]),
                    (e =
                      (t ? i + this.height : e) +
                      (t ? 1 : -1) * (r ? -1 : 1) * this.axisTitleMargin +
                      [-c, c, d.f, -c][this.side]),
                    (t = {
                      x: t ? s + h : e + (r ? this.width : 0) + a + h,
                      y: t ? e + l - (r ? this.height : 0) + a : s + l,
                    }),
                    f(this, "afterGetTitlePosition", { titlePosition: t }),
                    t
                  );
                }),
                (s.prototype.renderMinorTick = function (t) {
                  var e = this.chart.hasRendered && x(this.oldMin),
                    s = this.minorTicks;
                  s[t] || (s[t] = new i(this, t, "minor")),
                    e && s[t].isNew && s[t].render(null, !0),
                    s[t].render(null, !1, 1);
                }),
                (s.prototype.renderTick = function (t, e) {
                  var s = this.isLinked,
                    n = this.ticks,
                    o = this.chart.hasRendered && x(this.oldMin);
                  (!s || (t >= this.min && t <= this.max)) &&
                    (n[t] || (n[t] = new i(this, t)),
                    o && n[t].isNew && n[t].render(e, !0, -1),
                    n[t].render(e));
                }),
                (s.prototype.render = function () {
                  var t,
                    s,
                    n = this,
                    r = n.chart,
                    a = n.logarithmic,
                    h = n.options,
                    l = n.isLinked,
                    c = n.tickPositions,
                    d = n.axisTitle,
                    p = n.ticks,
                    u = n.minorTicks,
                    g = n.alternateBands,
                    m = h.stackLabels,
                    v = h.alternateGridColor,
                    y = n.tickmarkOffset,
                    b = n.axisLine,
                    k = n.showAxis,
                    w = o(r.renderer.globalAnimation);
                  (n.labelEdge.length = 0),
                    (n.overlap = !1),
                    [p, u, g].forEach(function (t) {
                      M(t, function (t) {
                        t.isActive = !1;
                      });
                    }),
                    (n.hasData() || l) &&
                      (n.minorTickInterval &&
                        !n.categories &&
                        n.getMinorTickPositions().forEach(function (t) {
                          n.renderMinorTick(t);
                        }),
                      c.length &&
                        (c.forEach(function (t, e) {
                          n.renderTick(t, e);
                        }),
                        y &&
                          (0 === n.min || n.single) &&
                          (p[-1] || (p[-1] = new i(n, -1, null, !0)),
                          p[-1].render(-1))),
                      v &&
                        c.forEach(function (i, o) {
                          (s = void 0 !== c[o + 1] ? c[o + 1] + y : n.max - y),
                            0 == o % 2 &&
                              i < n.max &&
                              s <= n.max + (r.polar ? -y : y) &&
                              (g[i] || (g[i] = new e.PlotLineOrBand(n)),
                              (t = i + y),
                              (g[i].options = {
                                from: a ? a.lin2log(t) : t,
                                to: a ? a.lin2log(s) : s,
                                color: v,
                              }),
                              g[i].render(),
                              (g[i].isActive = !0));
                        }),
                      n._addedPlotLB ||
                        ((h.plotLines || [])
                          .concat(h.plotBands || [])
                          .forEach(function (t) {
                            n.addPlotBandOrLine(t);
                          }),
                        (n._addedPlotLB = !0))),
                    [p, u, g].forEach(function (t) {
                      var e,
                        i = [],
                        s = w.duration;
                      M(t, function (t, e) {
                        t.isActive ||
                          (t.render(e, !1, 0), (t.isActive = !1), i.push(e));
                      }),
                        D(
                          function () {
                            for (e = i.length; e--; )
                              t[i[e]] &&
                                !t[i[e]].isActive &&
                                (t[i[e]].destroy(), delete t[i[e]]);
                          },
                          t !== g && r.hasRendered && s ? s : 0
                        );
                    }),
                    b &&
                      (b[b.isPlaced ? "animate" : "attr"]({
                        d: this.getLinePath(b.strokeWidth()),
                      }),
                      (b.isPlaced = !0),
                      b[k ? "show" : "hide"](k)),
                    d &&
                      k &&
                      ((h = n.getTitlePosition()),
                      x(h.y)
                        ? (d[d.isNew ? "attr" : "animate"](h), (d.isNew = !1))
                        : (d.attr("y", -9999), (d.isNew = !0))),
                    m &&
                      m.enabled &&
                      n.stacking &&
                      n.stacking.renderStackTotals(),
                    (n.isDirty = !1),
                    f(this, "afterRender");
                }),
                (s.prototype.redraw = function () {
                  this.visible &&
                    (this.render(),
                    this.plotLinesAndBands.forEach(function (t) {
                      t.render();
                    })),
                    this.series.forEach(function (t) {
                      t.isDirty = !0;
                    });
                }),
                (s.prototype.getKeepProps = function () {
                  return this.keepProps || s.keepProps;
                }),
                (s.prototype.destroy = function (t) {
                  var e,
                    i = this,
                    s = i.plotLinesAndBands;
                  if (
                    (f(this, "destroy", { keepEvents: t }),
                    t || C(i),
                    [i.ticks, i.minorTicks, i.alternateBands].forEach(function (
                      t
                    ) {
                      d(t);
                    }),
                    s)
                  )
                    for (t = s.length; t--; ) s[t].destroy();
                  "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar"
                    .split(" ")
                    .forEach(function (t) {
                      i[t] && (i[t] = i[t].destroy());
                    });
                  for (e in i.plotLinesAndBandsGroups)
                    i.plotLinesAndBandsGroups[e] =
                      i.plotLinesAndBandsGroups[e].destroy();
                  M(i, function (t, e) {
                    -1 === i.getKeepProps().indexOf(e) && delete i[e];
                  });
                }),
                (s.prototype.drawCrosshair = function (e, i) {
                  var s,
                    n = this.crosshair,
                    o = S(n.snap, !0),
                    r = this.cross,
                    a = this.chart;
                  if (
                    (f(this, "drawCrosshair", { e: e, point: i }),
                    e || (e = this.cross && this.cross.e),
                    this.crosshair && !1 !== (c(i) || !o))
                  ) {
                    if (
                      (o
                        ? c(i) &&
                          (s = S(
                            "colorAxis" !== this.coll ? i.crosshairPos : null,
                            this.isXAxis ? i.plotX : this.len - i.plotY
                          ))
                        : (s =
                            e &&
                            (this.horiz
                              ? e.chartX - this.pos
                              : this.len - e.chartY + this.pos)),
                      c(s))
                    ) {
                      var h = {
                        value: i && (this.isXAxis ? i.x : S(i.stackY, i.y)),
                        translatedValue: s,
                      };
                      a.polar &&
                        u(h, {
                          isCrosshair: !0,
                          chartX: e && e.chartX,
                          chartY: e && e.chartY,
                          point: i,
                        }),
                        (h = this.getPlotLinePath(h) || null);
                    }
                    if (!c(h)) return void this.hideCrosshair();
                    (o = this.categories && !this.isRadial),
                      r ||
                        ((this.cross = r =
                          a.renderer
                            .path()
                            .addClass(
                              "highcharts-crosshair highcharts-crosshair-" +
                                (o ? "category " : "thin ") +
                                n.className
                            )
                            .attr({ zIndex: S(n.zIndex, 2) })
                            .add()),
                        a.styledMode ||
                          (r
                            .attr({
                              stroke:
                                n.color ||
                                (o
                                  ? t.parse("#ccd6eb").setOpacity(0.25).get()
                                  : "#cccccc"),
                              "stroke-width": S(n.width, 1),
                            })
                            .css({ "pointer-events": "none" }),
                          n.dashStyle && r.attr({ dashstyle: n.dashStyle }))),
                      r.show().attr({ d: h }),
                      o && !n.width && r.attr({ "stroke-width": this.transA }),
                      (this.cross.e = e);
                  } else this.hideCrosshair();
                  f(this, "afterDrawCrosshair", { e: e, point: i });
                }),
                (s.prototype.hideCrosshair = function () {
                  this.cross && this.cross.hide(),
                    f(this, "afterHideCrosshair");
                }),
                (s.prototype.hasVerticalPanning = function () {
                  var t, e;
                  return /y/.test(
                    (null ===
                      (e =
                        null === (t = this.chart.options.chart) || void 0 === t
                          ? void 0
                          : t.panning) || void 0 === e
                      ? void 0
                      : e.type) || ""
                  );
                }),
                (s.defaultOptions = {
                  dateTimeLabelFormats: {
                    millisecond: { main: "%H:%M:%S.%L", range: !1 },
                    second: { main: "%H:%M:%S", range: !1 },
                    minute: { main: "%H:%M", range: !1 },
                    hour: { main: "%H:%M", range: !1 },
                    day: { main: "%e. %b" },
                    week: { main: "%e. %b" },
                    month: { main: "%b '%y" },
                    year: { main: "%Y" },
                  },
                  endOnTick: !1,
                  labels: {
                    enabled: !0,
                    indentation: 10,
                    x: 0,
                    style: {
                      color: "#666666",
                      cursor: "default",
                      fontSize: "11px",
                    },
                  },
                  maxPadding: 0.01,
                  minorTickLength: 2,
                  minorTickPosition: "outside",
                  minPadding: 0.01,
                  showEmpty: !0,
                  startOfWeek: 1,
                  startOnTick: !1,
                  tickLength: 10,
                  tickPixelInterval: 100,
                  tickmarkPlacement: "between",
                  tickPosition: "outside",
                  title: { align: "middle", style: { color: "#666666" } },
                  type: "linear",
                  minorGridLineColor: "#f2f2f2",
                  minorGridLineWidth: 1,
                  minorTickColor: "#999999",
                  lineColor: "#ccd6eb",
                  lineWidth: 1,
                  gridLineColor: "#e6e6e6",
                  tickColor: "#ccd6eb",
                }),
                (s.defaultYAxisOptions = {
                  endOnTick: !0,
                  maxPadding: 0.05,
                  minPadding: 0.05,
                  tickPixelInterval: 72,
                  showLastLabel: !0,
                  labels: { x: -8 },
                  startOnTick: !0,
                  title: { rotation: 270, text: "Values" },
                  stackLabels: {
                    allowOverlap: !1,
                    enabled: !1,
                    crop: !0,
                    overflow: "justify",
                    formatter: function () {
                      return (0, this.axis.chart.numberFormatter)(
                        this.total,
                        -1
                      );
                    },
                    style: {
                      color: "#000000",
                      fontSize: "11px",
                      fontWeight: "bold",
                      textOutline: "1px contrast",
                    },
                  },
                  gridLineWidth: 1,
                  lineWidth: 0,
                }),
                (s.defaultLeftAxisOptions = {
                  labels: { x: -15 },
                  title: { rotation: 270 },
                }),
                (s.defaultRightAxisOptions = {
                  labels: { x: 15 },
                  title: { rotation: 90 },
                }),
                (s.defaultBottomAxisOptions = {
                  labels: { autoRotation: [-45], x: 0 },
                  margin: 15,
                  title: { rotation: 0 },
                }),
                (s.defaultTopAxisOptions = {
                  labels: { autoRotation: [-45], x: 0 },
                  margin: 15,
                  title: { rotation: 0 },
                }),
                (s.keepProps =
                  "extKey hcEvents names series userMax userMin".split(" ")),
                s
              );
            })()),
            (e.Axis = s),
            e.Axis
          );
        }
      ),
      e(
        i,
        "parts/DateTimeAxis.js",
        [i["parts/Axis.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.addEvent,
            s = e.getMagnitude,
            n = e.normalizeTickInterval,
            o = e.timeUnits,
            r = (function () {
              function t(t) {
                this.axis = t;
              }
              return (
                (t.prototype.normalizeTimeTickInterval = function (t, e) {
                  var i = e || [
                    ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                    ["second", [1, 2, 5, 10, 15, 30]],
                    ["minute", [1, 2, 5, 10, 15, 30]],
                    ["hour", [1, 2, 3, 4, 6, 8, 12]],
                    ["day", [1, 2]],
                    ["week", [1, 2]],
                    ["month", [1, 2, 3, 4, 6]],
                    ["year", null],
                  ];
                  e = i[i.length - 1];
                  var r,
                    a = o[e[0]],
                    h = e[1];
                  for (
                    r = 0;
                    r < i.length &&
                    ((e = i[r]),
                    (a = o[e[0]]),
                    (h = e[1]),
                    !(
                      i[r + 1] &&
                      t <= (a * h[h.length - 1] + o[i[r + 1][0]]) / 2
                    ));
                    r++
                  );
                  return (
                    a === o.year && t < 5 * a && (h = [1, 2, 5]),
                    (t = n(
                      t / a,
                      h,
                      "year" === e[0] ? Math.max(s(t / a), 1) : 1
                    )),
                    { unitRange: a, count: t, unitName: e[0] }
                  );
                }),
                t
              );
            })();
          return (
            (e = (function () {
              function t() {}
              return (
                (t.compose = function (t) {
                  t.keepProps.push("dateTime"),
                    (t.prototype.getTimeTicks = function () {
                      return this.chart.time.getTimeTicks.apply(
                        this.chart.time,
                        arguments
                      );
                    }),
                    i(t, "init", function (t) {
                      "datetime" !== t.userOptions.type
                        ? (this.dateTime = void 0)
                        : this.dateTime || (this.dateTime = new r(this));
                    });
                }),
                (t.AdditionsClass = r),
                t
              );
            })()),
            e.compose(t),
            e
          );
        }
      ),
      e(
        i,
        "parts/LogarithmicAxis.js",
        [i["parts/Axis.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.addEvent,
            s = e.getMagnitude,
            n = e.normalizeTickInterval,
            o = e.pick,
            r = (function () {
              function t(t) {
                this.axis = t;
              }
              return (
                (t.prototype.getLogTickPositions = function (t, e, i, r) {
                  var a = this.axis,
                    h = a.len,
                    l = a.options,
                    c = [];
                  if ((r || (this.minorAutoInterval = void 0), 0.5 <= t))
                    (t = Math.round(t)),
                      (c = a.getLinearTickPositions(t, e, i));
                  else if (0.08 <= t) {
                    l = Math.floor(e);
                    var d, p;
                    for (
                      h =
                        0.3 < t
                          ? [1, 2, 4]
                          : 0.15 < t
                          ? [1, 2, 4, 6, 8]
                          : [1, 2, 3, 4, 5, 6, 7, 8, 9];
                      l < i + 1 && !p;
                      l++
                    ) {
                      var u = h.length;
                      for (d = 0; d < u && !p; d++) {
                        var f = this.log2lin(this.lin2log(l) * h[d]);
                        f > e && (!r || g <= i) && void 0 !== g && c.push(g),
                          g > i && (p = !0);
                        var g = f;
                      }
                    }
                  } else
                    (e = this.lin2log(e)),
                      (i = this.lin2log(i)),
                      (t = r ? a.getMinorTickInterval() : l.tickInterval),
                      (t = o(
                        "auto" === t ? null : t,
                        this.minorAutoInterval,
                        ((l.tickPixelInterval / (r ? 5 : 1)) * (i - e)) /
                          ((r ? h / a.tickPositions.length : h) || 1)
                      )),
                      (t = n(t, void 0, s(t))),
                      (c = a.getLinearTickPositions(t, e, i).map(this.log2lin)),
                      r || (this.minorAutoInterval = t / 5);
                  return r || (a.tickInterval = t), c;
                }),
                (t.prototype.lin2log = function (t) {
                  return Math.pow(10, t);
                }),
                (t.prototype.log2lin = function (t) {
                  return Math.log(t) / Math.LN10;
                }),
                t
              );
            })();
          return (
            (e = (function () {
              function t() {}
              return (
                (t.compose = function (t) {
                  t.keepProps.push("logarithmic");
                  var e = t.prototype,
                    s = r.prototype;
                  (e.log2lin = s.log2lin),
                    (e.lin2log = s.lin2log),
                    i(t, "init", function (t) {
                      var e = this.logarithmic;
                      "logarithmic" !== t.userOptions.type
                        ? (this.logarithmic = void 0)
                        : (e || (e = this.logarithmic = new r(this)),
                          this.log2lin !== e.log2lin &&
                            (e.log2lin = this.log2lin.bind(this)),
                          this.lin2log !== e.lin2log &&
                            (e.lin2log = this.lin2log.bind(this)));
                    }),
                    i(t, "afterInit", function () {
                      var t = this.logarithmic;
                      t &&
                        ((this.lin2val = function (e) {
                          return t.lin2log(e);
                        }),
                        (this.val2lin = function (e) {
                          return t.log2lin(e);
                        }));
                    });
                }),
                t
              );
            })()),
            e.compose(t),
            e
          );
        }
      ),
      e(
        i,
        "parts/PlotLineOrBand.js",
        [i["parts/Globals.js"], i["parts/Axis.js"], i["parts/Utilities.js"]],
        function (t, e, i) {
          var s = i.arrayMax,
            n = i.arrayMin,
            o = i.defined,
            r = i.destroyObjectProperties,
            a = i.erase,
            h = i.extend,
            l = i.merge,
            c = i.objectEach,
            d = i.pick,
            p = (function () {
              function e(t, e) {
                (this.axis = t), e && ((this.options = e), (this.id = e.id));
              }
              return (
                (e.prototype.render = function () {
                  t.fireEvent(this, "render");
                  var e = this,
                    i = e.axis,
                    s = i.horiz,
                    n = i.logarithmic,
                    r = e.options,
                    a = r.label,
                    h = e.label,
                    p = r.to,
                    u = r.from,
                    f = r.value,
                    g = o(u) && o(p),
                    m = o(f),
                    v = e.svgElem,
                    y = !v,
                    x = [],
                    b = r.color,
                    k = d(r.zIndex, 0),
                    w = r.events;
                  x = {
                    class:
                      "highcharts-plot-" +
                      (g ? "band " : "line ") +
                      (r.className || ""),
                  };
                  var M = {},
                    S = i.chart.renderer,
                    T = g ? "bands" : "lines";
                  if (
                    (n &&
                      ((u = n.log2lin(u)),
                      (p = n.log2lin(p)),
                      (f = n.log2lin(f))),
                    i.chart.styledMode ||
                      (m
                        ? ((x.stroke = b || "#999999"),
                          (x["stroke-width"] = d(r.width, 1)),
                          r.dashStyle && (x.dashstyle = r.dashStyle))
                        : g &&
                          ((x.fill = b || "#e6ebf5"),
                          r.borderWidth &&
                            ((x.stroke = r.borderColor),
                            (x["stroke-width"] = r.borderWidth)))),
                    (M.zIndex = k),
                    (T += "-" + k),
                    (n = i.plotLinesAndBandsGroups[T]) ||
                      (i.plotLinesAndBandsGroups[T] = n =
                        S.g("plot-" + T)
                          .attr(M)
                          .add()),
                    y && (e.svgElem = v = S.path().attr(x).add(n)),
                    m)
                  )
                    x = i.getPlotLinePath({
                      value: f,
                      lineWidth: v.strokeWidth(),
                      acrossPanes: r.acrossPanes,
                    });
                  else {
                    if (!g) return;
                    x = i.getPlotBandPath(u, p, r);
                  }
                  return (
                    (y || !v.d) && x && x.length
                      ? (v.attr({ d: x }),
                        w &&
                          c(w, function (t, i) {
                            v.on(i, function (t) {
                              w[i].apply(e, [t]);
                            });
                          }))
                      : v &&
                        (x
                          ? (v.show(!0), v.animate({ d: x }))
                          : v.d &&
                            (v.hide(), h && (e.label = h = h.destroy()))),
                    a &&
                    (o(a.text) || o(a.formatter)) &&
                    x &&
                    x.length &&
                    0 < i.width &&
                    0 < i.height &&
                    !x.isFlat
                      ? ((a = l(
                          {
                            align: s && g && "center",
                            x: s ? !g && 4 : 10,
                            verticalAlign: !s && g && "middle",
                            y: s ? (g ? 16 : 10) : g ? 6 : -4,
                            rotation: s && !g && 90,
                          },
                          a
                        )),
                        this.renderLabel(a, x, g, k))
                      : h && h.hide(),
                    e
                  );
                }),
                (e.prototype.renderLabel = function (t, e, i, o) {
                  var r = this.label,
                    a = this.axis.chart.renderer;
                  r ||
                    ((r = {
                      align: t.textAlign || t.align,
                      rotation: t.rotation,
                      class:
                        "highcharts-plot-" +
                        (i ? "band" : "line") +
                        "-label " +
                        (t.className || ""),
                    }),
                    (r.zIndex = o),
                    (o = this.getLabelText(t)),
                    (this.label = r = a.text(o, 0, 0, t.useHTML).attr(r).add()),
                    this.axis.chart.styledMode || r.css(t.style)),
                    (a = e.xBounds || [
                      e[0][1],
                      e[1][1],
                      i ? e[2][1] : e[0][1],
                    ]),
                    (e = e.yBounds || [
                      e[0][2],
                      e[1][2],
                      i ? e[2][2] : e[0][2],
                    ]),
                    (i = n(a)),
                    (o = n(e)),
                    r.align(t, !1, {
                      x: i,
                      y: o,
                      width: s(a) - i,
                      height: s(e) - o,
                    }),
                    r.show(!0);
                }),
                (e.prototype.getLabelText = function (t) {
                  return o(t.formatter) ? t.formatter.call(this) : t.text;
                }),
                (e.prototype.destroy = function () {
                  a(this.axis.plotLinesAndBands, this),
                    delete this.axis,
                    r(this);
                }),
                e
              );
            })();
          return (
            h(e.prototype, {
              getPlotBandPath: function (t, e) {
                var i = this.getPlotLinePath({
                    value: e,
                    force: !0,
                    acrossPanes: this.options.acrossPanes,
                  }),
                  s = this.getPlotLinePath({
                    value: t,
                    force: !0,
                    acrossPanes: this.options.acrossPanes,
                  }),
                  n = [],
                  o = this.horiz,
                  r = 1;
                if (
                  ((t =
                    (t < this.min && e < this.min) ||
                    (t > this.max && e > this.max)),
                  s && i)
                ) {
                  if (t) {
                    var a = s.toString() === i.toString();
                    r = 0;
                  }
                  for (t = 0; t < s.length; t += 2) {
                    e = s[t];
                    var h = s[t + 1],
                      l = i[t],
                      c = i[t + 1];
                    ("M" !== e[0] && "L" !== e[0]) ||
                      ("M" !== h[0] && "L" !== h[0]) ||
                      ("M" !== l[0] && "L" !== l[0]) ||
                      ("M" !== c[0] && "L" !== c[0]) ||
                      (o && l[1] === e[1]
                        ? ((l[1] += r), (c[1] += r))
                        : o || l[2] !== e[2] || ((l[2] += r), (c[2] += r)),
                      n.push(
                        ["M", e[1], e[2]],
                        ["L", h[1], h[2]],
                        ["L", c[1], c[2]],
                        ["L", l[1], l[2]],
                        ["Z"]
                      )),
                      (n.isFlat = a);
                  }
                }
                return n;
              },
              addPlotBand: function (t) {
                return this.addPlotBandOrLine(t, "plotBands");
              },
              addPlotLine: function (t) {
                return this.addPlotBandOrLine(t, "plotLines");
              },
              addPlotBandOrLine: function (t, e) {
                var i = new p(this, t).render(),
                  s = this.userOptions;
                if (i) {
                  if (e) {
                    var n = s[e] || [];
                    n.push(t), (s[e] = n);
                  }
                  this.plotLinesAndBands.push(i);
                }
                return i;
              },
              removePlotBandOrLine: function (t) {
                for (
                  var e = this.plotLinesAndBands,
                    i = this.options,
                    s = this.userOptions,
                    n = e.length;
                  n--;

                )
                  e[n].id === t && e[n].destroy();
                [
                  i.plotLines || [],
                  s.plotLines || [],
                  i.plotBands || [],
                  s.plotBands || [],
                ].forEach(function (e) {
                  for (n = e.length; n--; ) (e[n] || {}).id === t && a(e, e[n]);
                });
              },
              removePlotBand: function (t) {
                this.removePlotBandOrLine(t);
              },
              removePlotLine: function (t) {
                this.removePlotBandOrLine(t);
              },
            }),
            (t.PlotLineOrBand = p),
            t.PlotLineOrBand
          );
        }
      ),
      e(
        i,
        "parts/Tooltip.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.clamp,
            s = e.css,
            n = e.defined,
            o = e.discardElement,
            r = e.extend,
            a = e.fireEvent,
            h = e.format,
            l = e.isNumber,
            c = e.isString,
            d = e.merge,
            p = e.pick,
            u = e.splat,
            f = e.syncTimeout,
            g = e.timeUnits,
            m = t.doc,
            v = (function () {
              function v(t, e) {
                (this.crosshairs = []),
                  (this.distance = 0),
                  (this.isHidden = !0),
                  (this.isSticky = !1),
                  (this.now = {}),
                  (this.options = {}),
                  (this.outside = !1),
                  (this.chart = t),
                  this.init(t, e);
              }
              return (
                (v.prototype.applyFilter = function () {
                  var t = this.chart;
                  t.renderer.definition({
                    tagName: "filter",
                    id: "drop-shadow-" + t.index,
                    opacity: 0.5,
                    children: [
                      {
                        tagName: "feGaussianBlur",
                        in: "SourceAlpha",
                        stdDeviation: 1,
                      },
                      { tagName: "feOffset", dx: 1, dy: 1 },
                      {
                        tagName: "feComponentTransfer",
                        children: [
                          { tagName: "feFuncA", type: "linear", slope: 0.3 },
                        ],
                      },
                      {
                        tagName: "feMerge",
                        children: [
                          { tagName: "feMergeNode" },
                          { tagName: "feMergeNode", in: "SourceGraphic" },
                        ],
                      },
                    ],
                  }),
                    t.renderer.definition({
                      tagName: "style",
                      textContent:
                        ".highcharts-tooltip-" +
                        t.index +
                        "{filter:url(#drop-shadow-" +
                        t.index +
                        ")}",
                    });
                }),
                (v.prototype.bodyFormatter = function (t) {
                  return t.map(function (t) {
                    var e = t.series.tooltipOptions;
                    return (
                      e[(t.point.formatPrefix || "point") + "Formatter"] ||
                      t.point.tooltipFormatter
                    ).call(
                      t.point,
                      e[(t.point.formatPrefix || "point") + "Format"] || ""
                    );
                  });
                }),
                (v.prototype.cleanSplit = function (t) {
                  this.chart.series.forEach(function (e) {
                    var i = e && e.tt;
                    i &&
                      (!i.isActive || t
                        ? (e.tt = i.destroy())
                        : (i.isActive = !1));
                  });
                }),
                (v.prototype.defaultFormatter = function (t) {
                  var e = this.points || u(this),
                    i = [t.tooltipFooterHeaderFormatter(e[0])];
                  return (
                    (i = i.concat(t.bodyFormatter(e))),
                    i.push(t.tooltipFooterHeaderFormatter(e[0], !0)),
                    i
                  );
                }),
                (v.prototype.destroy = function () {
                  this.label && (this.label = this.label.destroy()),
                    this.split &&
                      this.tt &&
                      (this.cleanSplit(this.chart, !0),
                      (this.tt = this.tt.destroy())),
                    this.renderer &&
                      ((this.renderer = this.renderer.destroy()),
                      o(this.container)),
                    e.clearTimeout(this.hideTimer),
                    e.clearTimeout(this.tooltipTimeout);
                }),
                (v.prototype.getAnchor = function (t, e) {
                  var i,
                    s,
                    n = this.chart,
                    o = n.pointer,
                    r = n.inverted,
                    a = n.plotTop,
                    h = n.plotLeft,
                    l = 0,
                    c = 0;
                  return (
                    (t = u(t)),
                    this.followPointer && e
                      ? (void 0 === e.chartX && (e = o.normalize(e)),
                        (t = [e.chartX - h, e.chartY - a]))
                      : t[0].tooltipPos
                      ? (t = t[0].tooltipPos)
                      : (t.forEach(function (t) {
                          (i = t.series.yAxis),
                            (s = t.series.xAxis),
                            (l += t.plotX + (!r && s ? s.left - h : 0)),
                            (c +=
                              (t.plotLow
                                ? (t.plotLow + t.plotHigh) / 2
                                : t.plotY) + (!r && i ? i.top - a : 0));
                        }),
                        (l /= t.length),
                        (c /= t.length),
                        (t = [
                          r ? n.plotWidth - c : l,
                          this.shared && !r && 1 < t.length && e
                            ? e.chartY - a
                            : r
                            ? n.plotHeight - l
                            : c,
                        ])),
                    t.map(Math.round)
                  );
                }),
                (v.prototype.getDateFormat = function (t, e, i, s) {
                  var n = this.chart.time,
                    o = n.dateFormat("%m-%d %H:%M:%S.%L", e),
                    r = {
                      millisecond: 15,
                      second: 12,
                      minute: 9,
                      hour: 6,
                      day: 3,
                    },
                    a = "millisecond";
                  for (h in g) {
                    if (
                      t === g.week &&
                      +n.dateFormat("%w", e) === i &&
                      "00:00:00.000" === o.substr(6)
                    ) {
                      var h = "week";
                      break;
                    }
                    if (g[h] > t) {
                      h = a;
                      break;
                    }
                    if (
                      r[h] &&
                      o.substr(r[h]) !== "01-01 00:00:00.000".substr(r[h])
                    )
                      break;
                    "week" !== h && (a = h);
                  }
                  if (h) var l = n.resolveDTLFormat(s[h]).main;
                  return l;
                }),
                (v.prototype.getLabel = function () {
                  var e,
                    i,
                    o,
                    r = this,
                    a = this.chart.renderer,
                    h = this.chart.styledMode,
                    l = this.options,
                    c = "tooltip" + (n(l.className) ? " " + l.className : ""),
                    d =
                      (null === (e = l.style) || void 0 === e
                        ? void 0
                        : e.pointerEvents) ||
                      (!this.followPointer && l.stickOnContact
                        ? "auto"
                        : "none");
                  e = function () {
                    r.inContact = !0;
                  };
                  var p = function () {
                    var t = r.chart.hoverSeries;
                    (r.inContact = !1), t && t.onMouseOut && t.onMouseOut();
                  };
                  if (!this.label) {
                    if (
                      (this.outside &&
                        ((this.container = o = t.doc.createElement("div")),
                        (o.className = "highcharts-tooltip-container"),
                        s(o, {
                          position: "absolute",
                          top: "1px",
                          pointerEvents: d,
                          zIndex: 3,
                        }),
                        t.doc.body.appendChild(o),
                        (this.renderer = a =
                          new t.Renderer(
                            o,
                            0,
                            0,
                            null === (i = this.chart.options.chart) ||
                            void 0 === i
                              ? void 0
                              : i.style,
                            void 0,
                            void 0,
                            a.styledMode
                          ))),
                      this.split
                        ? (this.label = a.g(c))
                        : ((this.label = a
                            .label(
                              "",
                              0,
                              0,
                              l.shape || "callout",
                              null,
                              null,
                              l.useHTML,
                              null,
                              c
                            )
                            .attr({ padding: l.padding, r: l.borderRadius })),
                          h ||
                            this.label
                              .attr({
                                fill: l.backgroundColor,
                                "stroke-width": l.borderWidth,
                              })
                              .css(l.style)
                              .css({ pointerEvents: d })
                              .shadow(l.shadow)),
                      h &&
                        (this.applyFilter(),
                        this.label.addClass(
                          "highcharts-tooltip-" + this.chart.index
                        )),
                      r.outside && !r.split)
                    ) {
                      var u = { x: this.label.xSetter, y: this.label.ySetter };
                      (this.label.xSetter = function (t, e) {
                        u[e].call(this.label, r.distance),
                          (o.style.left = t + "px");
                      }),
                        (this.label.ySetter = function (t, e) {
                          u[e].call(this.label, r.distance),
                            (o.style.top = t + "px");
                        });
                    }
                    this.label
                      .on("mouseenter", e)
                      .on("mouseleave", p)
                      .attr({ zIndex: 8 })
                      .add();
                  }
                  return this.label;
                }),
                (v.prototype.getPosition = function (t, e, i) {
                  var s,
                    n = this.chart,
                    o = this.distance,
                    r = {},
                    a = (n.inverted && i.h) || 0,
                    h = this.outside,
                    l = h
                      ? m.documentElement.clientWidth - 2 * o
                      : n.chartWidth,
                    c = h
                      ? Math.max(
                          m.body.scrollHeight,
                          m.documentElement.scrollHeight,
                          m.body.offsetHeight,
                          m.documentElement.offsetHeight,
                          m.documentElement.clientHeight
                        )
                      : n.chartHeight,
                    d = n.pointer.getChartPosition(),
                    u = n.containerScaling,
                    f = function (t) {
                      return u ? t * u.scaleX : t;
                    },
                    g = function (t) {
                      return u ? t * u.scaleY : t;
                    },
                    v = function (s) {
                      var r = "x" === s;
                      return [s, r ? l : c, r ? t : e].concat(
                        h
                          ? [
                              r ? f(t) : g(e),
                              r
                                ? d.left - o + f(i.plotX + n.plotLeft)
                                : d.top - o + g(i.plotY + n.plotTop),
                              0,
                              r ? l : c,
                            ]
                          : [
                              r ? t : e,
                              r ? i.plotX + n.plotLeft : i.plotY + n.plotTop,
                              r ? n.plotLeft : n.plotTop,
                              r
                                ? n.plotLeft + n.plotWidth
                                : n.plotTop + n.plotHeight,
                            ]
                      );
                    },
                    y = v("y"),
                    x = v("x"),
                    b =
                      !this.followPointer &&
                      p(i.ttBelow, !n.inverted == !!i.negative),
                    k = function (t, e, i, s, n, h, l) {
                      var c = "y" === t ? g(o) : f(o),
                        d = (i - s) / 2,
                        p = s < n - o,
                        u = n + o + s < e,
                        m = n - c - i + d;
                      if (((n = n + c - d), b && u)) r[t] = n;
                      else if (!b && p) r[t] = m;
                      else if (p) r[t] = Math.min(l - s, 0 > m - a ? m : m - a);
                      else {
                        if (!u) return !1;
                        r[t] = Math.max(h, n + a + i > e ? n : n + a);
                      }
                    },
                    w = function (t, e, i, s, n) {
                      var a;
                      return (
                        n < o || n > e - o
                          ? (a = !1)
                          : (r[t] =
                              n < i / 2
                                ? 1
                                : n > e - s / 2
                                ? e - s - 2
                                : n - i / 2),
                        a
                      );
                    },
                    M = function (t) {
                      var e = y;
                      (y = x), (x = e), (s = t);
                    },
                    S = function () {
                      !1 !== k.apply(0, y)
                        ? !1 !== w.apply(0, x) || s || (M(!0), S())
                        : s
                        ? (r.x = r.y = 0)
                        : (M(!0), S());
                    };
                  return (n.inverted || 1 < this.len) && M(), S(), r;
                }),
                (v.prototype.getXDateFormat = function (t, e, i) {
                  e = e.dateTimeLabelFormats;
                  var s = i && i.closestPointRange;
                  return (
                    (s
                      ? this.getDateFormat(s, t.x, i.options.startOfWeek, e)
                      : e.day) || e.year
                  );
                }),
                (v.prototype.hide = function (t) {
                  var i = this;
                  e.clearTimeout(this.hideTimer),
                    (t = p(t, this.options.hideDelay, 500)),
                    this.isHidden ||
                      (this.hideTimer = f(function () {
                        i.getLabel().fadeOut(t ? void 0 : t), (i.isHidden = !0);
                      }, t));
                }),
                (v.prototype.init = function (t, e) {
                  (this.chart = t),
                    (this.options = e),
                    (this.crosshairs = []),
                    (this.now = { x: 0, y: 0 }),
                    (this.isHidden = !0),
                    (this.split = e.split && !t.inverted && !t.polar),
                    (this.shared = e.shared || this.split),
                    (this.outside = p(
                      e.outside,
                      !(!t.scrollablePixelsX && !t.scrollablePixelsY)
                    ));
                }),
                (v.prototype.isStickyOnContact = function () {
                  return !(
                    this.followPointer ||
                    !this.options.stickOnContact ||
                    !this.inContact
                  );
                }),
                (v.prototype.move = function (t, i, s, n) {
                  var o = this,
                    a = o.now,
                    h =
                      !1 !== o.options.animation &&
                      !o.isHidden &&
                      (1 < Math.abs(t - a.x) || 1 < Math.abs(i - a.y)),
                    l = o.followPointer || 1 < o.len;
                  r(a, {
                    x: h ? (2 * a.x + t) / 3 : t,
                    y: h ? (a.y + i) / 2 : i,
                    anchorX: l ? void 0 : h ? (2 * a.anchorX + s) / 3 : s,
                    anchorY: l ? void 0 : h ? (a.anchorY + n) / 2 : n,
                  }),
                    o.getLabel().attr(a),
                    o.drawTracker(),
                    h &&
                      (e.clearTimeout(this.tooltipTimeout),
                      (this.tooltipTimeout = setTimeout(function () {
                        o && o.move(t, i, s, n);
                      }, 32)));
                }),
                (v.prototype.refresh = function (t, i) {
                  var s = this.chart,
                    n = this.options,
                    o = t,
                    r = {},
                    h = [],
                    l = n.formatter || this.defaultFormatter;
                  r = this.shared;
                  var c = s.styledMode;
                  if (n.enabled) {
                    e.clearTimeout(this.hideTimer),
                      (this.followPointer =
                        u(o)[0].series.tooltipOptions.followPointer);
                    var d = this.getAnchor(o, i);
                    i = d[0];
                    var f = d[1];
                    !r || (o.series && o.series.noSharedTooltip)
                      ? (r = o.getLabelConfig())
                      : (s.pointer.applyInactiveState(o),
                        o.forEach(function (t) {
                          t.setState("hover"), h.push(t.getLabelConfig());
                        }),
                        (r = { x: o[0].category, y: o[0].y }),
                        (r.points = h),
                        (o = o[0])),
                      (this.len = h.length),
                      (s = l.call(r, this)),
                      (l = o.series),
                      (this.distance = p(l.tooltipOptions.distance, 16)),
                      !1 === s
                        ? this.hide()
                        : (this.split
                            ? this.renderSplit(s, u(t))
                            : ((t = this.getLabel()),
                              (n.style.width && !c) ||
                                t.css({
                                  width: this.chart.spacingBox.width + "px",
                                }),
                              t.attr({ text: s && s.join ? s.join("") : s }),
                              t
                                .removeClass(/highcharts-color-[\d]+/g)
                                .addClass(
                                  "highcharts-color-" +
                                    p(o.colorIndex, l.colorIndex)
                                ),
                              c ||
                                t.attr({
                                  stroke:
                                    n.borderColor ||
                                    o.color ||
                                    l.color ||
                                    "#666666",
                                }),
                              this.updatePosition({
                                plotX: i,
                                plotY: f,
                                negative: o.negative,
                                ttBelow: o.ttBelow,
                                h: d[2] || 0,
                              })),
                          this.isHidden &&
                            this.label &&
                            this.label.attr({ opacity: 1 }).show(),
                          (this.isHidden = !1)),
                      a(this, "refresh");
                  }
                }),
                (v.prototype.renderSplit = function (e, s) {
                  function n(t, e, s, n, o) {
                    return (
                      void 0 === o && (o = !0),
                      s
                        ? ((e = C ? 0 : E),
                          (t = i(t - n / 2, S.left, S.right - n)))
                        : ((e -= A),
                          (t = o ? t - n - k : t + k),
                          (t = i(t, o ? t : S.left, S.right))),
                      { x: t, y: e }
                    );
                  }
                  var o = this,
                    a = o.chart,
                    h = o.chart,
                    l = h.plotHeight,
                    d = h.plotLeft,
                    u = h.plotTop,
                    f = h.pointer,
                    g = h.renderer,
                    m = h.scrollablePixelsY,
                    v = void 0 === m ? 0 : m;
                  (m = h.scrollingContainer),
                    (m = void 0 === m ? { scrollLeft: 0, scrollTop: 0 } : m);
                  var y = m.scrollLeft,
                    x = m.scrollTop,
                    b = h.styledMode,
                    k = o.distance,
                    w = o.options,
                    M = o.options.positioner,
                    S = {
                      left: y,
                      right: y + h.chartWidth,
                      top: x,
                      bottom: x + h.chartHeight,
                    },
                    T = o.getLabel(),
                    C = !(!a.xAxis[0] || !a.xAxis[0].opposite),
                    A = u + x,
                    D = 0,
                    E = l - v;
                  c(e) && (e = [!1, e]),
                    (e = e.slice(0, s.length + 1).reduce(function (t, e, r) {
                      if (!1 !== e && "" !== e) {
                        r = s[r - 1] || {
                          isHeader: !0,
                          plotX: s[0].plotX,
                          plotY: l,
                          series: {},
                        };
                        var a = r.isHeader,
                          h = a ? o : r.series,
                          c = h.tt,
                          f = r.isHeader,
                          m = r.series,
                          y =
                            "highcharts-color-" +
                            p(r.colorIndex, m.colorIndex, "none");
                        c ||
                          ((c = { padding: w.padding, r: w.borderRadius }),
                          b ||
                            ((c.fill = w.backgroundColor),
                            (c["stroke-width"] = w.borderWidth)),
                          (c = g
                            .label(
                              "",
                              0,
                              0,
                              w[f ? "headerShape" : "shape"] || "callout",
                              void 0,
                              void 0,
                              w.useHTML
                            )
                            .addClass(
                              (f ? "highcharts-tooltip-header " : "") +
                                "highcharts-tooltip-box " +
                                y
                            )
                            .attr(c)
                            .add(T))),
                          (c.isActive = !0),
                          c.attr({ text: e }),
                          b ||
                            c
                              .css(w.style)
                              .shadow(w.shadow)
                              .attr({
                                stroke:
                                  w.borderColor ||
                                  r.color ||
                                  m.color ||
                                  "#333333",
                              }),
                          (e = h.tt = c),
                          (f = e.getBBox()),
                          (h = f.width + e.strokeWidth()),
                          a && ((D = f.height), (E += D), C && (A -= D)),
                          (m = r.plotX),
                          (m = void 0 === m ? 0 : m),
                          (y = r.plotY),
                          (y = void 0 === y ? 0 : y);
                        var O = r.series;
                        if (r.isHeader) {
                          m = d + m;
                          var L = u + l / 2;
                        } else
                          (c = O.xAxis),
                            (O = O.yAxis),
                            (m = c.pos + i(m, -k, c.len + k)),
                            O.pos + y >= x + u &&
                              O.pos + y <= x + u + l - v &&
                              (L = O.pos + y);
                        (m = i(m, S.left - k, S.right + k)),
                          "number" == typeof L
                            ? ((f = f.height + 1),
                              (y = M ? M.call(o, h, f, r) : n(m, L, a, h)),
                              t.push({
                                align: M ? 0 : void 0,
                                anchorX: m,
                                anchorY: L,
                                boxWidth: h,
                                point: r,
                                rank: p(y.rank, a ? 1 : 0),
                                size: f,
                                target: y.y,
                                tt: e,
                                x: y.x,
                              }))
                            : (e.isActive = !1);
                      }
                      return t;
                    }, [])),
                    !M &&
                      e.some(function (t) {
                        return t.x < S.left;
                      }) &&
                      (e = e.map(function (t) {
                        var e = n(
                          t.anchorX,
                          t.anchorY,
                          t.point.isHeader,
                          t.boxWidth,
                          !1
                        );
                        return r(t, { target: e.y, x: e.x });
                      })),
                    o.cleanSplit(),
                    t.distribute(e, E),
                    e.forEach(function (t) {
                      var e = t.pos;
                      t.tt.attr({
                        visibility: void 0 === e ? "hidden" : "inherit",
                        x: t.x,
                        y: e + A,
                        anchorX: t.anchorX,
                        anchorY: t.anchorY,
                      });
                    }),
                    (e = o.container),
                    (a = o.renderer),
                    o.outside &&
                      e &&
                      a &&
                      ((h = T.getBBox()),
                      a.setSize(h.width + h.x, h.height + h.y, !1),
                      (f = f.getChartPosition()),
                      (e.style.left = f.left + "px"),
                      (e.style.top = f.top + "px"));
                }),
                (v.prototype.drawTracker = function () {
                  if (this.followPointer || !this.options.stickOnContact)
                    this.tracker && this.tracker.destroy();
                  else {
                    var t = this.chart,
                      e = this.label,
                      i = t.hoverPoint;
                    if (e && i) {
                      var s = { x: 0, y: 0, width: 0, height: 0 };
                      i = this.getAnchor(i);
                      var n = e.getBBox();
                      (i[0] += t.plotLeft - e.translateX),
                        (i[1] += t.plotTop - e.translateY),
                        (s.x = Math.min(0, i[0])),
                        (s.y = Math.min(0, i[1])),
                        (s.width =
                          0 > i[0]
                            ? Math.max(Math.abs(i[0]), n.width - i[0])
                            : Math.max(Math.abs(i[0]), n.width)),
                        (s.height =
                          0 > i[1]
                            ? Math.max(
                                Math.abs(i[1]),
                                n.height - Math.abs(i[1])
                              )
                            : Math.max(Math.abs(i[1]), n.height)),
                        this.tracker
                          ? this.tracker.attr(s)
                          : ((this.tracker = e.renderer
                              .rect(s)
                              .addClass("highcharts-tracker")
                              .add(e)),
                            t.styledMode ||
                              this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
                    }
                  }
                }),
                (v.prototype.styledModeFormat = function (t) {
                  return t
                    .replace(
                      'style="font-size: 10px"',
                      'class="highcharts-header"'
                    )
                    .replace(
                      /style="color:{(point|series)\.color}"/g,
                      'class="highcharts-color-{$1.colorIndex}"'
                    );
                }),
                (v.prototype.tooltipFooterHeaderFormatter = function (t, e) {
                  var i = e ? "footer" : "header",
                    s = t.series,
                    n = s.tooltipOptions,
                    o = n.xDateFormat,
                    r = s.xAxis,
                    c = r && "datetime" === r.options.type && l(t.key),
                    d = n[i + "Format"];
                  return (
                    (e = { isFooter: e, labelConfig: t }),
                    a(this, "headerFormatter", e, function (e) {
                      c && !o && (o = this.getXDateFormat(t, n, r)),
                        c &&
                          o &&
                          (
                            (t.point && t.point.tooltipDateKeys) || ["key"]
                          ).forEach(function (t) {
                            d = d.replace(
                              "{point." + t + "}",
                              "{point." + t + ":" + o + "}"
                            );
                          }),
                        s.chart.styledMode && (d = this.styledModeFormat(d)),
                        (e.text = h(d, { point: t, series: s }, this.chart));
                    }),
                    e.text
                  );
                }),
                (v.prototype.update = function (t) {
                  this.destroy(),
                    d(!0, this.chart.options.tooltip.userOptions, t),
                    this.init(this.chart, d(!0, this.options, t));
                }),
                (v.prototype.updatePosition = function (t) {
                  var e = this.chart,
                    i = e.pointer,
                    n = this.getLabel(),
                    o = t.plotX + e.plotLeft,
                    r = t.plotY + e.plotTop;
                  if (
                    ((i = i.getChartPosition()),
                    (t = (this.options.positioner || this.getPosition).call(
                      this,
                      n.width,
                      n.height,
                      t
                    )),
                    this.outside)
                  ) {
                    var a = (this.options.borderWidth || 0) + 2 * this.distance;
                    this.renderer.setSize(n.width + a, n.height + a, !1),
                      (e = e.containerScaling) &&
                        (s(this.container, {
                          transform:
                            "scale(" + e.scaleX + ", " + e.scaleY + ")",
                        }),
                        (o *= e.scaleX),
                        (r *= e.scaleY)),
                      (o += i.left - t.x),
                      (r += i.top - t.y);
                  }
                  this.move(Math.round(t.x), Math.round(t.y || 0), o, r);
                }),
                v
              );
            })();
          return (t.Tooltip = v), t.Tooltip;
        }
      ),
      e(
        i,
        "parts/Pointer.js",
        [
          i["parts/Globals.js"],
          i["parts/Utilities.js"],
          i["parts/Tooltip.js"],
          i["parts/Color.js"],
        ],
        function (t, e, i, s) {
          var n = e.addEvent,
            o = e.attr,
            r = e.css,
            a = e.defined,
            h = e.extend,
            l = e.find,
            c = e.fireEvent,
            d = e.isNumber,
            p = e.isObject,
            u = e.objectEach,
            f = e.offset,
            g = e.pick,
            m = e.splat,
            v = s.parse,
            y = t.charts,
            x = t.noop;
          return (
            (e = (function () {
              function e(t, e) {
                (this.lastValidTouch = {}),
                  (this.pinchDown = []),
                  (this.runChartClick = !1),
                  (this.chart = t),
                  (this.hasDragged = !1),
                  (this.options = e),
                  (this.unbindContainerMouseLeave = function () {}),
                  this.init(t, e);
              }
              return (
                (e.prototype.applyInactiveState = function (t) {
                  var e,
                    i = [];
                  (t || []).forEach(function (t) {
                    (e = t.series),
                      i.push(e),
                      e.linkedParent && i.push(e.linkedParent),
                      e.linkedSeries && (i = i.concat(e.linkedSeries)),
                      e.navigatorSeries && i.push(e.navigatorSeries);
                  }),
                    this.chart.series.forEach(function (t) {
                      -1 === i.indexOf(t)
                        ? t.setState("inactive", !0)
                        : t.options.inactiveOtherPoints &&
                          t.setAllPointsToState("inactive");
                    });
                }),
                (e.prototype.destroy = function () {
                  var e = this;
                  void 0 !== e.unDocMouseMove && e.unDocMouseMove(),
                    this.unbindContainerMouseLeave(),
                    t.chartCount ||
                      (t.unbindDocumentMouseUp &&
                        (t.unbindDocumentMouseUp = t.unbindDocumentMouseUp()),
                      t.unbindDocumentTouchEnd &&
                        (t.unbindDocumentTouchEnd =
                          t.unbindDocumentTouchEnd())),
                    clearInterval(e.tooltipTimeout),
                    u(e, function (t, i) {
                      e[i] = null;
                    });
                }),
                (e.prototype.drag = function (t) {
                  var e = this.chart,
                    i = e.options.chart,
                    s = t.chartX,
                    n = t.chartY,
                    o = this.zoomHor,
                    r = this.zoomVert,
                    a = e.plotLeft,
                    h = e.plotTop,
                    l = e.plotWidth,
                    c = e.plotHeight,
                    d = this.selectionMarker,
                    u = this.mouseDownX || 0,
                    f = this.mouseDownY || 0,
                    g = p(i.panning)
                      ? i.panning && i.panning.enabled
                      : i.panning,
                    m = i.panKey && t[i.panKey + "Key"];
                  if (
                    (!d || !d.touch) &&
                    (s < a ? (s = a) : s > a + l && (s = a + l),
                    n < h ? (n = h) : n > h + c && (n = h + c),
                    (this.hasDragged = Math.sqrt(
                      Math.pow(u - s, 2) + Math.pow(f - n, 2)
                    )),
                    10 < this.hasDragged)
                  ) {
                    var y = e.isInsidePlot(u - a, f - h);
                    e.hasCartesianSeries &&
                      (this.zoomX || this.zoomY) &&
                      y &&
                      !m &&
                      !d &&
                      ((this.selectionMarker = d =
                        e.renderer
                          .rect(a, h, o ? 1 : l, r ? 1 : c, 0)
                          .attr({
                            class: "highcharts-selection-marker",
                            zIndex: 7,
                          })
                          .add()),
                      e.styledMode ||
                        d.attr({
                          fill:
                            i.selectionMarkerFill ||
                            v("#335cad").setOpacity(0.25).get(),
                        })),
                      d &&
                        o &&
                        ((s -= u),
                        d.attr({ width: Math.abs(s), x: (0 < s ? 0 : s) + u })),
                      d &&
                        r &&
                        ((s = n - f),
                        d.attr({
                          height: Math.abs(s),
                          y: (0 < s ? 0 : s) + f,
                        })),
                      y && !d && g && e.pan(t, i.panning);
                  }
                }),
                (e.prototype.dragStart = function (t) {
                  var e = this.chart;
                  (e.mouseIsDown = t.type),
                    (e.cancelClick = !1),
                    (e.mouseDownX = this.mouseDownX = t.chartX),
                    (e.mouseDownY = this.mouseDownY = t.chartY);
                }),
                (e.prototype.drop = function (t) {
                  var e = this,
                    i = this.chart,
                    s = this.hasPinched;
                  if (this.selectionMarker) {
                    var n,
                      o = { originalEvent: t, xAxis: [], yAxis: [] },
                      l = this.selectionMarker,
                      p = l.attr ? l.attr("x") : l.x,
                      u = l.attr ? l.attr("y") : l.y,
                      f = l.attr ? l.attr("width") : l.width,
                      g = l.attr ? l.attr("height") : l.height;
                    (this.hasDragged || s) &&
                      (i.axes.forEach(function (i) {
                        if (
                          i.zoomEnabled &&
                          a(i.min) &&
                          (s || e[{ xAxis: "zoomX", yAxis: "zoomY" }[i.coll]])
                        ) {
                          var r = i.horiz,
                            h = "touchend" === t.type ? i.minPixelPadding : 0,
                            l = i.toValue((r ? p : u) + h);
                          (r = i.toValue((r ? p + f : u + g) - h)),
                            o[i.coll].push({
                              axis: i,
                              min: Math.min(l, r),
                              max: Math.max(l, r),
                            }),
                            (n = !0);
                        }
                      }),
                      n &&
                        c(i, "selection", o, function (t) {
                          i.zoom(h(t, s ? { animation: !1 } : null));
                        })),
                      d(i.index) &&
                        (this.selectionMarker = this.selectionMarker.destroy()),
                      s && this.scaleGroups();
                  }
                  i &&
                    d(i.index) &&
                    (r(i.container, { cursor: i._cursor }),
                    (i.cancelClick = 10 < this.hasDragged),
                    (i.mouseIsDown = this.hasDragged = this.hasPinched = !1),
                    (this.pinchDown = []));
                }),
                (e.prototype.findNearestKDPoint = function (t, e, i) {
                  var s = this.chart,
                    n = s.hoverPoint;
                  if (((s = s.tooltip), n && s && s.isStickyOnContact()))
                    return n;
                  var o;
                  return (
                    t.forEach(function (t) {
                      var s =
                        !(t.noSharedTooltip && e) &&
                        0 > t.options.findNearestPointBy.indexOf("y");
                      if (
                        ((t = t.searchPoint(i, s)),
                        (s = p(t, !0)) && !(s = !p(o, !0)))
                      ) {
                        s = o.distX - t.distX;
                        var n = o.dist - t.dist,
                          r =
                            (t.series.group && t.series.group.zIndex) -
                            (o.series.group && o.series.group.zIndex);
                        s =
                          0 <
                          (0 !== s && e
                            ? s
                            : 0 !== n
                            ? n
                            : 0 !== r
                            ? r
                            : o.series.index > t.series.index
                            ? -1
                            : 1);
                      }
                      s && (o = t);
                    }),
                    o
                  );
                }),
                (e.prototype.getChartCoordinatesFromPoint = function (t, e) {
                  var i = t.series,
                    s = i.xAxis;
                  i = i.yAxis;
                  var n = g(t.clientX, t.plotX),
                    o = t.shapeArgs;
                  return s && i
                    ? e
                      ? {
                          chartX: s.len + s.pos - n,
                          chartY: i.len + i.pos - t.plotY,
                        }
                      : { chartX: n + s.pos, chartY: t.plotY + i.pos }
                    : o && o.x && o.y
                    ? { chartX: o.x, chartY: o.y }
                    : void 0;
                }),
                (e.prototype.getChartPosition = function () {
                  return (
                    this.chartPosition ||
                    (this.chartPosition = f(this.chart.container))
                  );
                }),
                (e.prototype.getCoordinates = function (t) {
                  var e = { xAxis: [], yAxis: [] };
                  return (
                    this.chart.axes.forEach(function (i) {
                      e[i.isXAxis ? "xAxis" : "yAxis"].push({
                        axis: i,
                        value: i.toValue(t[i.horiz ? "chartX" : "chartY"]),
                      });
                    }),
                    e
                  );
                }),
                (e.prototype.getHoverData = function (t, e, i, s, n, o) {
                  var r,
                    a = [];
                  s = !(!s || !t);
                  var h = e && !e.stickyTracking,
                    d = {
                      chartX: o ? o.chartX : void 0,
                      chartY: o ? o.chartY : void 0,
                      shared: n,
                    };
                  return (
                    c(this, "beforeGetHoverData", d),
                    (h = h
                      ? [e]
                      : i.filter(function (t) {
                          return d.filter
                            ? d.filter(t)
                            : t.visible &&
                                !(!n && t.directTouch) &&
                                g(t.options.enableMouseTracking, !0) &&
                                t.stickyTracking;
                        })),
                    (e =
                      (r = s || !o ? t : this.findNearestKDPoint(h, n, o)) &&
                      r.series),
                    r &&
                      (n && !e.noSharedTooltip
                        ? ((h = i.filter(function (t) {
                            return d.filter
                              ? d.filter(t)
                              : t.visible &&
                                  !(!n && t.directTouch) &&
                                  g(t.options.enableMouseTracking, !0) &&
                                  !t.noSharedTooltip;
                          })),
                          h.forEach(function (t) {
                            var e = l(t.points, function (t) {
                              return t.x === r.x && !t.isNull;
                            });
                            p(e) &&
                              (t.chart.isBoosting && (e = t.getPoint(e)),
                              a.push(e));
                          }))
                        : a.push(r)),
                    (d = { hoverPoint: r }),
                    c(this, "afterGetHoverData", d),
                    { hoverPoint: d.hoverPoint, hoverSeries: e, hoverPoints: a }
                  );
                }),
                (e.prototype.getPointFromEvent = function (t) {
                  t = t.target;
                  for (var e; t && !e; ) (e = t.point), (t = t.parentNode);
                  return e;
                }),
                (e.prototype.onTrackerMouseOut = function (t) {
                  t = t.relatedTarget || t.toElement;
                  var e = this.chart.hoverSeries;
                  (this.isDirectTouch = !1),
                    !e ||
                      !t ||
                      e.stickyTracking ||
                      this.inClass(t, "highcharts-tooltip") ||
                      (this.inClass(t, "highcharts-series-" + e.index) &&
                        this.inClass(t, "highcharts-tracker")) ||
                      e.onMouseOut();
                }),
                (e.prototype.inClass = function (t, e) {
                  for (var i; t; ) {
                    if ((i = o(t, "class"))) {
                      if (-1 !== i.indexOf(e)) return !0;
                      if (-1 !== i.indexOf("highcharts-container")) return !1;
                    }
                    t = t.parentNode;
                  }
                }),
                (e.prototype.init = function (t, e) {
                  (this.options = e),
                    (this.chart = t),
                    (this.runChartClick =
                      e.chart.events && !!e.chart.events.click),
                    (this.pinchDown = []),
                    (this.lastValidTouch = {}),
                    i &&
                      ((t.tooltip = new i(t, e.tooltip)),
                      (this.followTouchMove = g(
                        e.tooltip.followTouchMove,
                        !0
                      ))),
                    this.setDOMEvents();
                }),
                (e.prototype.normalize = function (t, e) {
                  var i = t.touches,
                    s = i ? (i.length ? i.item(0) : i.changedTouches[0]) : t;
                  return (
                    e || (e = this.getChartPosition()),
                    (i = s.pageX - e.left),
                    (e = s.pageY - e.top),
                    (s = this.chart.containerScaling) &&
                      ((i /= s.scaleX), (e /= s.scaleY)),
                    h(t, { chartX: Math.round(i), chartY: Math.round(e) })
                  );
                }),
                (e.prototype.onContainerClick = function (t) {
                  var e = this.chart,
                    i = e.hoverPoint;
                  t = this.normalize(t);
                  var s = e.plotLeft,
                    n = e.plotTop;
                  e.cancelClick ||
                    (i && this.inClass(t.target, "highcharts-tracker")
                      ? (c(i.series, "click", h(t, { point: i })),
                        e.hoverPoint && i.firePointEvent("click", t))
                      : (h(t, this.getCoordinates(t)),
                        e.isInsidePlot(t.chartX - s, t.chartY - n) &&
                          c(e, "click", t)));
                }),
                (e.prototype.onContainerMouseDown = function (e) {
                  (e = this.normalize(e)),
                    t.isFirefox &&
                      0 !== e.button &&
                      this.onContainerMouseMove(e),
                    (void 0 !== e.button &&
                      1 != (1 & (e.buttons || e.button))) ||
                      (this.zoomOption(e), this.dragStart(e));
                }),
                (e.prototype.onContainerMouseLeave = function (e) {
                  var i = y[g(t.hoverChartIndex, -1)],
                    s = this.chart.tooltip;
                  (e = this.normalize(e)),
                    i &&
                      (e.relatedTarget || e.toElement) &&
                      (i.pointer.reset(), (i.pointer.chartPosition = void 0)),
                    s && !s.isHidden && this.reset();
                }),
                (e.prototype.onContainerMouseMove = function (t) {
                  var e = this.chart;
                  (t = this.normalize(t)),
                    this.setHoverChartIndex(),
                    t.preventDefault || (t.returnValue = !1),
                    "mousedown" === e.mouseIsDown && this.drag(t),
                    e.openMenu ||
                      (!this.inClass(t.target, "highcharts-tracker") &&
                        !e.isInsidePlot(
                          t.chartX - e.plotLeft,
                          t.chartY - e.plotTop
                        )) ||
                      this.runPointActions(t);
                }),
                (e.prototype.onDocumentTouchEnd = function (e) {
                  y[t.hoverChartIndex] && y[t.hoverChartIndex].pointer.drop(e);
                }),
                (e.prototype.onContainerTouchMove = function (t) {
                  this.touch(t);
                }),
                (e.prototype.onContainerTouchStart = function (t) {
                  this.zoomOption(t), this.touch(t, !0);
                }),
                (e.prototype.onDocumentMouseMove = function (t) {
                  var e = this.chart,
                    i = this.chartPosition;
                  t = this.normalize(t, i);
                  var s = e.tooltip;
                  !i ||
                    (s && s.isStickyOnContact()) ||
                    e.isInsidePlot(
                      t.chartX - e.plotLeft,
                      t.chartY - e.plotTop
                    ) ||
                    this.inClass(t.target, "highcharts-tracker") ||
                    this.reset();
                }),
                (e.prototype.onDocumentMouseUp = function (e) {
                  var i = y[g(t.hoverChartIndex, -1)];
                  i && i.pointer.drop(e);
                }),
                (e.prototype.pinch = function (t) {
                  var e = this,
                    i = e.chart,
                    s = e.pinchDown,
                    n = t.touches || [],
                    o = n.length,
                    r = e.lastValidTouch,
                    a = e.hasZoom,
                    l = e.selectionMarker,
                    c = {},
                    d =
                      1 === o &&
                      ((e.inClass(t.target, "highcharts-tracker") &&
                        i.runTrackerClick) ||
                        e.runChartClick),
                    p = {};
                  1 < o && (e.initiated = !0),
                    a && e.initiated && !d && t.preventDefault(),
                    [].map.call(n, function (t) {
                      return e.normalize(t);
                    }),
                    "touchstart" === t.type
                      ? ([].forEach.call(n, function (t, e) {
                          s[e] = { chartX: t.chartX, chartY: t.chartY };
                        }),
                        (r.x = [s[0].chartX, s[1] && s[1].chartX]),
                        (r.y = [s[0].chartY, s[1] && s[1].chartY]),
                        i.axes.forEach(function (t) {
                          if (t.zoomEnabled) {
                            var e = i.bounds[t.horiz ? "h" : "v"],
                              s = t.minPixelPadding,
                              n = t.toPixels(
                                Math.min(g(t.options.min, t.dataMin), t.dataMin)
                              ),
                              o = t.toPixels(
                                Math.max(g(t.options.max, t.dataMax), t.dataMax)
                              ),
                              r = Math.max(n, o);
                            (e.min = Math.min(t.pos, Math.min(n, o) - s)),
                              (e.max = Math.max(t.pos + t.len, r + s));
                          }
                        }),
                        (e.res = !0))
                      : e.followTouchMove && 1 === o
                      ? this.runPointActions(e.normalize(t))
                      : s.length &&
                        (l ||
                          (e.selectionMarker = l =
                            h({ destroy: x, touch: !0 }, i.plotBox)),
                        e.pinchTranslate(s, n, c, l, p, r),
                        (e.hasPinched = a),
                        e.scaleGroups(c, p),
                        e.res && ((e.res = !1), this.reset(!1, 0)));
                }),
                (e.prototype.pinchTranslate = function (t, e, i, s, n, o) {
                  this.zoomHor &&
                    this.pinchTranslateDirection(!0, t, e, i, s, n, o),
                    this.zoomVert &&
                      this.pinchTranslateDirection(!1, t, e, i, s, n, o);
                }),
                (e.prototype.pinchTranslateDirection = function (
                  t,
                  e,
                  i,
                  s,
                  n,
                  o,
                  r,
                  a
                ) {
                  var h,
                    l,
                    c = this.chart,
                    d = t ? "x" : "y",
                    p = t ? "X" : "Y",
                    u = "chart" + p,
                    f = t ? "width" : "height",
                    g = c["plot" + (t ? "Left" : "Top")],
                    m = a || 1,
                    v = c.inverted,
                    y = c.bounds[t ? "h" : "v"],
                    x = 1 === e.length,
                    b = e[0][u],
                    k = i[0][u],
                    w = !x && e[1][u],
                    M = !x && i[1][u];
                  if (
                    ((i = function () {
                      "number" == typeof M &&
                        20 < Math.abs(b - w) &&
                        (m = a || Math.abs(k - M) / Math.abs(b - w)),
                        (l = (g - k) / m + b),
                        (h = c["plot" + (t ? "Width" : "Height")] / m);
                    }),
                    i(),
                    (e = l) < y.min)
                  ) {
                    e = y.min;
                    var S = !0;
                  } else e + h > y.max && ((e = y.max - h), (S = !0));
                  S
                    ? ((k -= 0.8 * (k - r[d][0])),
                      "number" == typeof M && (M -= 0.8 * (M - r[d][1])),
                      i())
                    : (r[d] = [k, M]),
                    v || ((o[d] = l - g), (o[f] = h)),
                    (o = v ? 1 / m : m),
                    (n[f] = h),
                    (n[d] = e),
                    (s[v ? (t ? "scaleY" : "scaleX") : "scale" + p] = m),
                    (s["translate" + p] = o * g + (k - o * b));
                }),
                (e.prototype.reset = function (t, e) {
                  var i = this.chart,
                    s = i.hoverSeries,
                    n = i.hoverPoint,
                    o = i.hoverPoints,
                    r = i.tooltip,
                    a = r && r.shared ? o : n;
                  t &&
                    a &&
                    m(a).forEach(function (e) {
                      e.series.isCartesian && void 0 === e.plotX && (t = !1);
                    }),
                    t
                      ? r &&
                        a &&
                        m(a).length &&
                        (r.refresh(a),
                        r.shared && o
                          ? o.forEach(function (t) {
                              t.setState(t.state, !0),
                                t.series.isCartesian &&
                                  (t.series.xAxis.crosshair &&
                                    t.series.xAxis.drawCrosshair(null, t),
                                  t.series.yAxis.crosshair &&
                                    t.series.yAxis.drawCrosshair(null, t));
                            })
                          : n &&
                            (n.setState(n.state, !0),
                            i.axes.forEach(function (t) {
                              t.crosshair &&
                                n.series[t.coll] === t &&
                                t.drawCrosshair(null, n);
                            })))
                      : (n && n.onMouseOut(),
                        o &&
                          o.forEach(function (t) {
                            t.setState();
                          }),
                        s && s.onMouseOut(),
                        r && r.hide(e),
                        this.unDocMouseMove &&
                          (this.unDocMouseMove = this.unDocMouseMove()),
                        i.axes.forEach(function (t) {
                          t.hideCrosshair();
                        }),
                        (this.hoverX = i.hoverPoints = i.hoverPoint = null));
                }),
                (e.prototype.runPointActions = function (e, i) {
                  var s = this.chart,
                    o =
                      s.tooltip && s.tooltip.options.enabled
                        ? s.tooltip
                        : void 0,
                    r = !!o && o.shared,
                    a = i || s.hoverPoint,
                    h = (a && a.series) || s.hoverSeries;
                  (h = this.getHoverData(
                    a,
                    h,
                    s.series,
                    (!e || "touchmove" !== e.type) &&
                      (!!i || (h && h.directTouch && this.isDirectTouch)),
                    r,
                    e
                  )),
                    (a = h.hoverPoint);
                  var c = h.hoverPoints;
                  if (
                    ((i =
                      (h = h.hoverSeries) && h.tooltipOptions.followPointer),
                    (r = r && h && !h.noSharedTooltip),
                    a && (a !== s.hoverPoint || (o && o.isHidden)))
                  ) {
                    if (
                      ((s.hoverPoints || []).forEach(function (t) {
                        -1 === c.indexOf(t) && t.setState();
                      }),
                      s.hoverSeries !== h && h.onMouseOver(),
                      this.applyInactiveState(c),
                      (c || []).forEach(function (t) {
                        t.setState("hover");
                      }),
                      s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"),
                      !a.series)
                    )
                      return;
                    a.firePointEvent("mouseOver"),
                      (s.hoverPoints = c),
                      (s.hoverPoint = a),
                      o && o.refresh(r ? c : a, e);
                  } else
                    i &&
                      o &&
                      !o.isHidden &&
                      ((a = o.getAnchor([{}], e)),
                      o.updatePosition({ plotX: a[0], plotY: a[1] }));
                  this.unDocMouseMove ||
                    (this.unDocMouseMove = n(
                      s.container.ownerDocument,
                      "mousemove",
                      function (e) {
                        var i = y[t.hoverChartIndex];
                        i && i.pointer.onDocumentMouseMove(e);
                      }
                    )),
                    s.axes.forEach(function (t) {
                      var i,
                        n = g((t.crosshair || {}).snap, !0);
                      n &&
                        (((i = s.hoverPoint) && i.series[t.coll] === t) ||
                          (i = l(c, function (e) {
                            return e.series[t.coll] === t;
                          }))),
                        i || !n ? t.drawCrosshair(e, i) : t.hideCrosshair();
                    });
                }),
                (e.prototype.scaleGroups = function (t, e) {
                  var i,
                    s = this.chart;
                  s.series.forEach(function (n) {
                    (i = t || n.getPlotBox()),
                      n.xAxis &&
                        n.xAxis.zoomEnabled &&
                        n.group &&
                        (n.group.attr(i),
                        n.markerGroup &&
                          (n.markerGroup.attr(i),
                          n.markerGroup.clip(e ? s.clipRect : null)),
                        n.dataLabelsGroup && n.dataLabelsGroup.attr(i));
                  }),
                    s.clipRect.attr(e || s.clipBox);
                }),
                (e.prototype.setDOMEvents = function () {
                  var e = this.chart.container,
                    i = e.ownerDocument;
                  (e.onmousedown = this.onContainerMouseDown.bind(this)),
                    (e.onmousemove = this.onContainerMouseMove.bind(this)),
                    (e.onclick = this.onContainerClick.bind(this)),
                    (this.unbindContainerMouseLeave = n(
                      e,
                      "mouseleave",
                      this.onContainerMouseLeave.bind(this)
                    )),
                    t.unbindDocumentMouseUp ||
                      (t.unbindDocumentMouseUp = n(
                        i,
                        "mouseup",
                        this.onDocumentMouseUp.bind(this)
                      )),
                    t.hasTouch &&
                      (n(
                        e,
                        "touchstart",
                        this.onContainerTouchStart.bind(this)
                      ),
                      n(e, "touchmove", this.onContainerTouchMove.bind(this)),
                      t.unbindDocumentTouchEnd ||
                        (t.unbindDocumentTouchEnd = n(
                          i,
                          "touchend",
                          this.onDocumentTouchEnd.bind(this)
                        )));
                }),
                (e.prototype.setHoverChartIndex = function () {
                  var e = this.chart,
                    i = t.charts[g(t.hoverChartIndex, -1)];
                  i &&
                    i !== e &&
                    i.pointer.onContainerMouseLeave({ relatedTarget: !0 }),
                    (i && i.mouseIsDown) || (t.hoverChartIndex = e.index);
                }),
                (e.prototype.touch = function (t, e) {
                  var i = this.chart;
                  if ((this.setHoverChartIndex(), 1 === t.touches.length))
                    if (
                      ((t = this.normalize(t)),
                      i.isInsidePlot(
                        t.chartX - i.plotLeft,
                        t.chartY - i.plotTop
                      ) && !i.openMenu)
                    ) {
                      if (
                        (e && this.runPointActions(t), "touchmove" === t.type)
                      ) {
                        e = this.pinchDown;
                        var s =
                          !!e[0] &&
                          4 <=
                            Math.sqrt(
                              Math.pow(e[0].chartX - t.chartX, 2) +
                                Math.pow(e[0].chartY - t.chartY, 2)
                            );
                      }
                      g(s, !0) && this.pinch(t);
                    } else e && this.reset();
                  else 2 === t.touches.length && this.pinch(t);
                }),
                (e.prototype.zoomOption = function (t) {
                  var e = this.chart,
                    i = e.options.chart,
                    s = i.zoomType || "";
                  (e = e.inverted),
                    /touch/.test(t.type) && (s = g(i.pinchType, s)),
                    (this.zoomX = t = /x/.test(s)),
                    (this.zoomY = s = /y/.test(s)),
                    (this.zoomHor = (t && !e) || (s && e)),
                    (this.zoomVert = (s && !e) || (t && e)),
                    (this.hasZoom = t || s);
                }),
                e
              );
            })()),
            (t.Pointer = e),
            t.Pointer
          );
        }
      ),
      e(
        i,
        "parts/MSPointer.js",
        [i["parts/Globals.js"], i["parts/Pointer.js"], i["parts/Utilities.js"]],
        function (t, e, i) {
          function s() {
            var t = [];
            return (
              (t.item = function (t) {
                return this[t];
              }),
              h(u, function (e) {
                t.push({ pageX: e.pageX, pageY: e.pageY, target: e.target });
              }),
              t
            );
          }
          function n(e, i, n, o) {
            ("touch" !== e.pointerType &&
              e.pointerType !== e.MSPOINTER_TYPE_TOUCH) ||
              !c[t.hoverChartIndex] ||
              (o(e),
              (o = c[t.hoverChartIndex].pointer),
              o[i]({
                type: n,
                target: e.currentTarget,
                preventDefault: p,
                touches: s(),
              }));
          }
          var o =
              (this && this.__extends) ||
              (function () {
                var t = function (e, i) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                    })(e, i);
                };
                return function (e, i) {
                  function s() {
                    this.constructor = e;
                  }
                  t(e, i),
                    (e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((s.prototype = i.prototype), new s()));
                };
              })(),
            r = i.addEvent,
            a = i.css,
            h = i.objectEach,
            l = i.removeEvent,
            c = t.charts,
            d = t.doc,
            p = t.noop,
            u = {},
            f = !!t.win.PointerEvent;
          return (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              o(e, t),
              (e.prototype.batchMSEvents = function (t) {
                t(
                  this.chart.container,
                  f ? "pointerdown" : "MSPointerDown",
                  this.onContainerPointerDown
                ),
                  t(
                    this.chart.container,
                    f ? "pointermove" : "MSPointerMove",
                    this.onContainerPointerMove
                  ),
                  t(
                    d,
                    f ? "pointerup" : "MSPointerUp",
                    this.onDocumentPointerUp
                  );
              }),
              (e.prototype.destroy = function () {
                this.batchMSEvents(l), t.prototype.destroy.call(this);
              }),
              (e.prototype.init = function (e, i) {
                t.prototype.init.call(this, e, i),
                  this.hasZoom &&
                    a(e.container, {
                      "-ms-touch-action": "none",
                      "touch-action": "none",
                    });
              }),
              (e.prototype.onContainerPointerDown = function (t) {
                n(t, "onContainerTouchStart", "touchstart", function (t) {
                  u[t.pointerId] = {
                    pageX: t.pageX,
                    pageY: t.pageY,
                    target: t.currentTarget,
                  };
                });
              }),
              (e.prototype.onContainerPointerMove = function (t) {
                n(t, "onContainerTouchMove", "touchmove", function (t) {
                  (u[t.pointerId] = { pageX: t.pageX, pageY: t.pageY }),
                    u[t.pointerId].target ||
                      (u[t.pointerId].target = t.currentTarget);
                });
              }),
              (e.prototype.onDocumentPointerUp = function (t) {
                n(t, "onDocumentTouchEnd", "touchend", function (t) {
                  delete u[t.pointerId];
                });
              }),
              (e.prototype.setDOMEvents = function () {
                t.prototype.setDOMEvents.call(this),
                  (this.hasZoom || this.followTouchMove) &&
                    this.batchMSEvents(r);
              }),
              e
            );
          })(e);
        }
      ),
      e(
        i,
        "parts/Legend.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.addEvent,
            s = e.animObject,
            n = e.css,
            o = e.defined,
            r = e.discardElement,
            a = e.find,
            h = e.fireEvent,
            l = e.format,
            c = e.isNumber,
            d = e.merge,
            p = e.pick,
            u = e.relativeLength,
            f = e.setAnimation,
            g = e.stableSort,
            m = e.syncTimeout;
          e = e.wrap;
          var v = t.isFirefox,
            y = t.marginNames,
            x = t.win,
            b = (function () {
              function e(t, e) {
                (this.allItems = []),
                  (this.contentGroup = this.box = void 0),
                  (this.display = !1),
                  (this.group = void 0),
                  (this.offsetWidth =
                    this.maxLegendWidth =
                    this.maxItemWidth =
                    this.legendWidth =
                    this.legendHeight =
                    this.lastLineHeight =
                    this.lastItemY =
                    this.itemY =
                    this.itemX =
                    this.itemMarginTop =
                    this.itemMarginBottom =
                    this.itemHeight =
                    this.initialItemY =
                      0),
                  (this.options = {}),
                  (this.padding = 0),
                  (this.pages = []),
                  (this.proximate = !1),
                  (this.scrollGroup = void 0),
                  (this.widthOption =
                    this.totalItemWidth =
                    this.titleHeight =
                    this.symbolWidth =
                    this.symbolHeight =
                      0),
                  (this.chart = t),
                  this.init(t, e);
              }
              return (
                (e.prototype.init = function (t, e) {
                  (this.chart = t),
                    this.setOptions(e),
                    e.enabled &&
                      (this.render(),
                      i(this.chart, "endResize", function () {
                        this.legend.positionCheckboxes();
                      }),
                      this.proximate
                        ? (this.unchartrender = i(
                            this.chart,
                            "render",
                            function () {
                              this.legend.proximatePositions(),
                                this.legend.positionItems();
                            }
                          ))
                        : this.unchartrender && this.unchartrender());
                }),
                (e.prototype.setOptions = function (t) {
                  var e = p(t.padding, 8);
                  (this.options = t),
                    this.chart.styledMode ||
                      ((this.itemStyle = t.itemStyle),
                      (this.itemHiddenStyle = d(
                        this.itemStyle,
                        t.itemHiddenStyle
                      ))),
                    (this.itemMarginTop = t.itemMarginTop || 0),
                    (this.itemMarginBottom = t.itemMarginBottom || 0),
                    (this.padding = e),
                    (this.initialItemY = e - 5),
                    (this.symbolWidth = p(t.symbolWidth, 16)),
                    (this.pages = []),
                    (this.proximate =
                      "proximate" === t.layout && !this.chart.inverted),
                    (this.baseline = void 0);
                }),
                (e.prototype.update = function (t, e) {
                  var i = this.chart;
                  this.setOptions(d(!0, this.options, t)),
                    this.destroy(),
                    (i.isDirtyLegend = i.isDirtyBox = !0),
                    p(e, !0) && i.redraw(),
                    h(this, "afterUpdate");
                }),
                (e.prototype.colorizeItem = function (t, e) {
                  if (
                    (t.legendGroup[e ? "removeClass" : "addClass"](
                      "highcharts-legend-item-hidden"
                    ),
                    !this.chart.styledMode)
                  ) {
                    var i = this.options,
                      s = t.legendItem,
                      n = t.legendLine,
                      o = t.legendSymbol,
                      r = this.itemHiddenStyle.color;
                    i = e ? i.itemStyle.color : r;
                    var a = e ? t.color || r : r,
                      l = t.options && t.options.marker,
                      c = { fill: a };
                    s && s.css({ fill: i, color: i }),
                      n && n.attr({ stroke: a }),
                      o &&
                        (l &&
                          o.isMarker &&
                          ((c = t.pointAttribs()),
                          e || (c.stroke = c.fill = r)),
                        o.attr(c));
                  }
                  h(this, "afterColorizeItem", { item: t, visible: e });
                }),
                (e.prototype.positionItems = function () {
                  this.allItems.forEach(this.positionItem, this),
                    this.chart.isResizing || this.positionCheckboxes();
                }),
                (e.prototype.positionItem = function (t) {
                  var e = this.options,
                    i = e.symbolPadding;
                  e = !e.rtl;
                  var s = t._legendItemPos,
                    n = s[0];
                  s = s[1];
                  var r = t.checkbox;
                  (t = t.legendGroup) &&
                    t.element &&
                    t[o(t.translateY) ? "animate" : "attr"]({
                      translateX: e ? n : this.legendWidth - n - 2 * i - 4,
                      translateY: s,
                    }),
                    r && ((r.x = n), (r.y = s));
                }),
                (e.prototype.destroyItem = function (t) {
                  var e = t.checkbox;
                  [
                    "legendItem",
                    "legendLine",
                    "legendSymbol",
                    "legendGroup",
                  ].forEach(function (e) {
                    t[e] && (t[e] = t[e].destroy());
                  }),
                    e && r(t.checkbox);
                }),
                (e.prototype.destroy = function () {
                  function t(t) {
                    this[t] && (this[t] = this[t].destroy());
                  }
                  this.getAllItems().forEach(function (e) {
                    ["legendItem", "legendGroup"].forEach(t, e);
                  }),
                    "clipRect up down pager nav box title group"
                      .split(" ")
                      .forEach(t, this),
                    (this.display = null);
                }),
                (e.prototype.positionCheckboxes = function () {
                  var t = this.group && this.group.alignAttr,
                    e = this.clipHeight || this.legendHeight,
                    i = this.titleHeight;
                  if (t) {
                    var s = t.translateY;
                    this.allItems.forEach(function (o) {
                      var r = o.checkbox;
                      if (r) {
                        var a = s + i + r.y + (this.scrollOffset || 0) + 3;
                        n(r, {
                          left:
                            t.translateX + o.checkboxOffset + r.x - 20 + "px",
                          top: a + "px",
                          display:
                            this.proximate || (a > s - 6 && a < s + e - 6)
                              ? ""
                              : "none",
                        });
                      }
                    }, this);
                  }
                }),
                (e.prototype.renderTitle = function () {
                  var t = this.options,
                    e = this.padding,
                    i = t.title,
                    s = 0;
                  i.text &&
                    (this.title ||
                      ((this.title = this.chart.renderer
                        .label(
                          i.text,
                          e - 3,
                          e - 4,
                          null,
                          null,
                          null,
                          t.useHTML,
                          null,
                          "legend-title"
                        )
                        .attr({ zIndex: 1 })),
                      this.chart.styledMode || this.title.css(i.style),
                      this.title.add(this.group)),
                    i.width ||
                      this.title.css({ width: this.maxLegendWidth + "px" }),
                    (t = this.title.getBBox()),
                    (s = t.height),
                    (this.offsetWidth = t.width),
                    this.contentGroup.attr({ translateY: s })),
                    (this.titleHeight = s);
                }),
                (e.prototype.setText = function (t) {
                  var e = this.options;
                  t.legendItem.attr({
                    text: e.labelFormat
                      ? l(e.labelFormat, t, this.chart)
                      : e.labelFormatter.call(t),
                  });
                }),
                (e.prototype.renderItem = function (t) {
                  var e = this.chart,
                    i = e.renderer,
                    s = this.options,
                    n = this.symbolWidth,
                    o = s.symbolPadding,
                    r = this.itemStyle,
                    a = this.itemHiddenStyle,
                    h = "horizontal" === s.layout ? p(s.itemDistance, 20) : 0,
                    l = !s.rtl,
                    c = t.legendItem,
                    u = !t.series,
                    f = !u && t.series.drawLegendSymbol ? t.series : t,
                    g = f.options;
                  (g = this.createCheckboxForItem && g && g.showCheckbox),
                    (h = n + o + h + (g ? 20 : 0));
                  var m = s.useHTML,
                    v = t.options.className;
                  c ||
                    ((t.legendGroup = i
                      .g("legend-item")
                      .addClass(
                        "highcharts-" +
                          f.type +
                          "-series highcharts-color-" +
                          t.colorIndex +
                          (v ? " " + v : "") +
                          (u ? " highcharts-series-" + t.index : "")
                      )
                      .attr({ zIndex: 1 })
                      .add(this.scrollGroup)),
                    (t.legendItem = c =
                      i.text("", l ? n + o : -o, this.baseline || 0, m)),
                    e.styledMode || c.css(d(t.visible ? r : a)),
                    c
                      .attr({ align: l ? "left" : "right", zIndex: 2 })
                      .add(t.legendGroup),
                    this.baseline ||
                      ((this.fontMetrics = i.fontMetrics(
                        e.styledMode ? 12 : r.fontSize,
                        c
                      )),
                      (this.baseline =
                        this.fontMetrics.f + 3 + this.itemMarginTop),
                      c.attr("y", this.baseline)),
                    (this.symbolHeight = s.symbolHeight || this.fontMetrics.f),
                    f.drawLegendSymbol(this, t),
                    this.setItemEvents && this.setItemEvents(t, c, m)),
                    g &&
                      !t.checkbox &&
                      this.createCheckboxForItem &&
                      this.createCheckboxForItem(t),
                    this.colorizeItem(t, t.visible),
                    (!e.styledMode && r.width) ||
                      c.css({
                        width:
                          (s.itemWidth ||
                            this.widthOption ||
                            e.spacingBox.width) -
                          h +
                          "px",
                      }),
                    this.setText(t),
                    (e = c.getBBox()),
                    (t.itemWidth = t.checkboxOffset =
                      s.itemWidth || t.legendItemWidth || e.width + h),
                    (this.maxItemWidth = Math.max(
                      this.maxItemWidth,
                      t.itemWidth
                    )),
                    (this.totalItemWidth += t.itemWidth),
                    (this.itemHeight = t.itemHeight =
                      Math.round(
                        t.legendItemHeight || e.height || this.symbolHeight
                      ));
                }),
                (e.prototype.layoutItem = function (t) {
                  var e = this.options,
                    i = this.padding,
                    s = "horizontal" === e.layout,
                    n = t.itemHeight,
                    o = this.itemMarginBottom,
                    r = this.itemMarginTop,
                    a = s ? p(e.itemDistance, 20) : 0,
                    h = this.maxLegendWidth;
                  (e =
                    e.alignColumns && this.totalItemWidth > h
                      ? this.maxItemWidth
                      : t.itemWidth),
                    s &&
                      this.itemX - i + e > h &&
                      ((this.itemX = i),
                      this.lastLineHeight &&
                        (this.itemY += r + this.lastLineHeight + o),
                      (this.lastLineHeight = 0)),
                    (this.lastItemY = r + this.itemY + o),
                    (this.lastLineHeight = Math.max(n, this.lastLineHeight)),
                    (t._legendItemPos = [this.itemX, this.itemY]),
                    s
                      ? (this.itemX += e)
                      : ((this.itemY += r + n + o), (this.lastLineHeight = n)),
                    (this.offsetWidth =
                      this.widthOption ||
                      Math.max(
                        (s ? this.itemX - i - (t.checkbox ? 0 : a) : e) + i,
                        this.offsetWidth
                      ));
                }),
                (e.prototype.getAllItems = function () {
                  var t = [];
                  return (
                    this.chart.series.forEach(function (e) {
                      var i = e && e.options;
                      e &&
                        p(i.showInLegend, !o(i.linkedTo) && void 0, !0) &&
                        (t = t.concat(
                          e.legendItems ||
                            ("point" === i.legendType ? e.data : e)
                        ));
                    }),
                    h(this, "afterGetAllItems", { allItems: t }),
                    t
                  );
                }),
                (e.prototype.getAlignment = function () {
                  var t = this.options;
                  return this.proximate
                    ? t.align.charAt(0) + "tv"
                    : t.floating
                    ? ""
                    : t.align.charAt(0) +
                      t.verticalAlign.charAt(0) +
                      t.layout.charAt(0);
                }),
                (e.prototype.adjustMargins = function (t, e) {
                  var i = this.chart,
                    s = this.options,
                    n = this.getAlignment();
                  n &&
                    [
                      /(lth|ct|rth)/,
                      /(rtv|rm|rbv)/,
                      /(rbh|cb|lbh)/,
                      /(lbv|lm|ltv)/,
                    ].forEach(function (r, a) {
                      r.test(n) &&
                        !o(t[a]) &&
                        (i[y[a]] = Math.max(
                          i[y[a]],
                          i.legend[
                            (a + 1) % 2 ? "legendHeight" : "legendWidth"
                          ] +
                            [1, -1, -1, 1][a] * s[a % 2 ? "x" : "y"] +
                            p(s.margin, 12) +
                            e[a] +
                            (i.titleOffset[a] || 0)
                        ));
                    });
                }),
                (e.prototype.proximatePositions = function () {
                  var e = this.chart,
                    i = [],
                    s = "left" === this.options.align;
                  this.allItems.forEach(function (t) {
                    var n = s;
                    if (t.yAxis && t.points) {
                      t.xAxis.options.reversed && (n = !n);
                      var o = a(
                        n ? t.points : t.points.slice(0).reverse(),
                        function (t) {
                          return c(t.plotY);
                        }
                      );
                      n =
                        this.itemMarginTop +
                        t.legendItem.getBBox().height +
                        this.itemMarginBottom;
                      var r = t.yAxis.top - e.plotTop;
                      t.visible
                        ? ((o = o ? o.plotY : t.yAxis.height),
                          (o += r - 0.3 * n))
                        : (o = r + t.yAxis.height),
                        i.push({ target: o, size: n, item: t });
                    }
                  }, this),
                    t.distribute(i, e.plotHeight),
                    i.forEach(function (t) {
                      t.item._legendItemPos[1] =
                        e.plotTop - e.spacing[0] + t.pos;
                    });
                }),
                (e.prototype.render = function () {
                  var t = this.chart,
                    e = t.renderer,
                    i = this.group,
                    s = this.box,
                    n = this.options,
                    o = this.padding;
                  (this.itemX = o),
                    (this.itemY = this.initialItemY),
                    (this.lastItemY = this.offsetWidth = 0),
                    (this.widthOption = u(n.width, t.spacingBox.width - o));
                  var r = t.spacingBox.width - 2 * o - n.x;
                  -1 <
                    ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) &&
                    (r /= 2),
                    (this.maxLegendWidth = this.widthOption || r),
                    i ||
                      ((this.group = i =
                        e.g("legend").attr({ zIndex: 7 }).add()),
                      (this.contentGroup = e.g().attr({ zIndex: 1 }).add(i)),
                      (this.scrollGroup = e.g().add(this.contentGroup))),
                    this.renderTitle();
                  var a = this.getAllItems();
                  g(a, function (t, e) {
                    return (
                      ((t.options && t.options.legendIndex) || 0) -
                      ((e.options && e.options.legendIndex) || 0)
                    );
                  }),
                    n.reversed && a.reverse(),
                    (this.allItems = a),
                    (this.display = r = !!a.length),
                    (this.itemHeight =
                      this.totalItemWidth =
                      this.maxItemWidth =
                      this.lastLineHeight =
                        0),
                    a.forEach(this.renderItem, this),
                    a.forEach(this.layoutItem, this),
                    (a = (this.widthOption || this.offsetWidth) + o);
                  var l =
                    this.lastItemY + this.lastLineHeight + this.titleHeight;
                  (l = this.handleOverflow(l)),
                    (l += o),
                    s ||
                      ((this.box = s =
                        e
                          .rect()
                          .addClass("highcharts-legend-box")
                          .attr({ r: n.borderRadius })
                          .add(i)),
                      (s.isNew = !0)),
                    t.styledMode ||
                      s
                        .attr({
                          stroke: n.borderColor,
                          "stroke-width": n.borderWidth || 0,
                          fill: n.backgroundColor || "none",
                        })
                        .shadow(n.shadow),
                    0 < a &&
                      0 < l &&
                      (s[s.isNew ? "attr" : "animate"](
                        s.crisp.call(
                          {},
                          { x: 0, y: 0, width: a, height: l },
                          s.strokeWidth()
                        )
                      ),
                      (s.isNew = !1)),
                    s[r ? "show" : "hide"](),
                    t.styledMode &&
                      "none" === i.getStyle("display") &&
                      (a = l = 0),
                    (this.legendWidth = a),
                    (this.legendHeight = l),
                    r && this.align(),
                    this.proximate || this.positionItems(),
                    h(this, "afterRender");
                }),
                (e.prototype.align = function (t) {
                  void 0 === t && (t = this.chart.spacingBox);
                  var e = this.chart,
                    i = this.options,
                    s = t.y;
                  /(lth|ct|rth)/.test(this.getAlignment()) &&
                  0 < e.titleOffset[0]
                    ? (s += e.titleOffset[0])
                    : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
                      0 < e.titleOffset[2] &&
                      (s -= e.titleOffset[2]),
                    s !== t.y && (t = d(t, { y: s })),
                    this.group.align(
                      d(i, {
                        width: this.legendWidth,
                        height: this.legendHeight,
                        verticalAlign: this.proximate ? "top" : i.verticalAlign,
                      }),
                      !0,
                      t
                    );
                }),
                (e.prototype.handleOverflow = function (t) {
                  var e = this,
                    i = this.chart,
                    s = i.renderer,
                    n = this.options,
                    o = n.y,
                    r = this.padding;
                  o =
                    i.spacingBox.height +
                    ("top" === n.verticalAlign ? -o : o) -
                    r;
                  var a,
                    h,
                    l = n.maxHeight,
                    c = this.clipRect,
                    d = n.navigation,
                    u = p(d.animation, !0),
                    f = d.arrowSize || 12,
                    g = this.nav,
                    m = this.pages,
                    v = this.allItems,
                    y = function (t) {
                      "number" == typeof t
                        ? c.attr({ height: t })
                        : c &&
                          ((e.clipRect = c.destroy()), e.contentGroup.clip()),
                        e.contentGroup.div &&
                          (e.contentGroup.div.style.clip = t
                            ? "rect(" + r + "px,9999px," + (r + t) + "px,0)"
                            : "auto");
                    },
                    x = function (t) {
                      return (
                        (e[t] = s
                          .circle(0, 0, 1.3 * f)
                          .translate(f / 2, f / 2)
                          .add(g)),
                        i.styledMode || e[t].attr("fill", "rgba(0,0,0,0.0001)"),
                        e[t]
                      );
                    };
                  return (
                    "horizontal" !== n.layout ||
                      "middle" === n.verticalAlign ||
                      n.floating ||
                      (o /= 2),
                    l && (o = Math.min(o, l)),
                    (m.length = 0),
                    t > o && !1 !== d.enabled
                      ? ((this.clipHeight = a =
                          Math.max(o - 20 - this.titleHeight - r, 0)),
                        (this.currentPage = p(this.currentPage, 1)),
                        (this.fullHeight = t),
                        v.forEach(function (t, e) {
                          var i = t._legendItemPos[1],
                            s = Math.round(t.legendItem.getBBox().height),
                            n = m.length;
                          (!n || (i - m[n - 1] > a && (h || i) !== m[n - 1])) &&
                            (m.push(h || i), n++),
                            (t.pageIx = n - 1),
                            h && (v[e - 1].pageIx = n - 1),
                            e === v.length - 1 &&
                              i + s - m[n - 1] > a &&
                              i !== h &&
                              (m.push(i), (t.pageIx = n)),
                            i !== h && (h = i);
                        }),
                        c ||
                          ((c = e.clipRect = s.clipRect(0, r, 9999, 0)),
                          e.contentGroup.clip(c)),
                        y(a),
                        g ||
                          ((this.nav = g =
                            s.g().attr({ zIndex: 1 }).add(this.group)),
                          (this.up = s.symbol("triangle", 0, 0, f, f).add(g)),
                          x("upTracker").on("click", function () {
                            e.scroll(-1, u);
                          }),
                          (this.pager = s
                            .text("", 15, 10)
                            .addClass("highcharts-legend-navigation")),
                          i.styledMode || this.pager.css(d.style),
                          this.pager.add(g),
                          (this.down = s
                            .symbol("triangle-down", 0, 0, f, f)
                            .add(g)),
                          x("downTracker").on("click", function () {
                            e.scroll(1, u);
                          })),
                        e.scroll(0),
                        (t = o))
                      : g &&
                        (y(),
                        (this.nav = g.destroy()),
                        this.scrollGroup.attr({ translateY: 1 }),
                        (this.clipHeight = 0)),
                    t
                  );
                }),
                (e.prototype.scroll = function (t, e) {
                  var i = this,
                    n = this.chart,
                    o = this.pages,
                    r = o.length,
                    a = this.currentPage + t;
                  t = this.clipHeight;
                  var l = this.options.navigation,
                    c = this.pager,
                    d = this.padding;
                  a > r && (a = r),
                    0 < a &&
                      (void 0 !== e && f(e, n),
                      this.nav.attr({
                        translateX: d,
                        translateY: t + this.padding + 7 + this.titleHeight,
                        visibility: "visible",
                      }),
                      [this.up, this.upTracker].forEach(function (t) {
                        t.attr({
                          class:
                            1 === a
                              ? "highcharts-legend-nav-inactive"
                              : "highcharts-legend-nav-active",
                        });
                      }),
                      c.attr({ text: a + "/" + r }),
                      [this.down, this.downTracker].forEach(function (t) {
                        t.attr({
                          x: 18 + this.pager.getBBox().width,
                          class:
                            a === r
                              ? "highcharts-legend-nav-inactive"
                              : "highcharts-legend-nav-active",
                        });
                      }, this),
                      n.styledMode ||
                        (this.up.attr({
                          fill: 1 === a ? l.inactiveColor : l.activeColor,
                        }),
                        this.upTracker.css({
                          cursor: 1 === a ? "default" : "pointer",
                        }),
                        this.down.attr({
                          fill: a === r ? l.inactiveColor : l.activeColor,
                        }),
                        this.downTracker.css({
                          cursor: a === r ? "default" : "pointer",
                        })),
                      (this.scrollOffset = -o[a - 1] + this.initialItemY),
                      this.scrollGroup.animate({
                        translateY: this.scrollOffset,
                      }),
                      (this.currentPage = a),
                      this.positionCheckboxes(),
                      (e = s(p(e, n.renderer.globalAnimation, !0))),
                      m(function () {
                        h(i, "afterScroll", { currentPage: a });
                      }, e.duration || 0));
                }),
                e
              );
            })();
          return (
            (/Trident\/7\.0/.test(x.navigator && x.navigator.userAgent) || v) &&
              e(b.prototype, "positionItem", function (t, e) {
                var i = this,
                  s = function () {
                    e._legendItemPos && t.call(i, e);
                  };
                s(), i.bubbleLegend || setTimeout(s);
              }),
            (t.Legend = b),
            t.Legend
          );
        }
      ),
      e(
        i,
        "parts/Chart.js",
        [
          i["parts/Globals.js"],
          i["parts/Legend.js"],
          i["parts/MSPointer.js"],
          i["parts/Pointer.js"],
          i["parts/Time.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i, s, n, o) {
          var r = o.addEvent,
            a = o.animate,
            h = o.animObject,
            l = o.attr,
            c = o.createElement,
            d = o.css,
            p = o.defined,
            u = o.discardElement,
            f = o.erase,
            g = o.error,
            m = o.extend,
            v = o.find,
            y = o.fireEvent,
            x = o.getStyle,
            b = o.isArray,
            k = o.isFunction,
            w = o.isNumber,
            M = o.isObject,
            S = o.isString,
            T = o.merge,
            C = o.numberFormat,
            A = o.objectEach,
            D = o.pick,
            E = o.pInt,
            O = o.relativeLength,
            L = o.removeEvent,
            P = o.setAnimation,
            I = o.splat,
            z = o.syncTimeout,
            N = o.uniqueKey,
            H = t.doc,
            B = t.Axis,
            W = t.defaultOptions,
            R = t.charts,
            j = t.marginNames,
            _ = t.seriesTypes,
            F = t.win,
            G = (t.Chart = function () {
              this.getArgs.apply(this, arguments);
            });
          (t.chart = function (t, e, i) {
            return new G(t, e, i);
          }),
            m(G.prototype, {
              callbacks: [],
              getArgs: function () {
                var t = [].slice.call(arguments);
                (S(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()),
                  this.init(t[0], t[1]);
              },
              init: function (e, i) {
                var s,
                  o = e.series,
                  a = e.plotOptions || {};
                y(this, "init", { args: arguments }, function () {
                  (e.series = null), (s = T(W, e));
                  var h = s.chart || {};
                  A(s.plotOptions, function (t, e) {
                    M(t) && (t.tooltip = (a[e] && T(a[e].tooltip)) || void 0);
                  }),
                    (s.tooltip.userOptions =
                      (e.chart && e.chart.forExport && e.tooltip.userOptions) ||
                      e.tooltip),
                    (s.series = e.series = o),
                    (this.userOptions = e);
                  var l = h.events;
                  (this.margin = []),
                    (this.spacing = []),
                    (this.bounds = { h: {}, v: {} }),
                    (this.labelCollectors = []),
                    (this.callback = i),
                    (this.isResizing = 0),
                    (this.options = s),
                    (this.axes = []),
                    (this.series = []),
                    (this.time =
                      e.time && Object.keys(e.time).length
                        ? new n(e.time)
                        : t.time),
                    (this.numberFormatter = h.numberFormatter || C),
                    (this.styledMode = h.styledMode),
                    (this.hasCartesianSeries = h.showAxes);
                  var c = this;
                  (c.index = R.length),
                    R.push(c),
                    t.chartCount++,
                    l &&
                      A(l, function (t, e) {
                        k(t) && r(c, e, t);
                      }),
                    (c.xAxis = []),
                    (c.yAxis = []),
                    (c.pointCount = c.colorCounter = c.symbolCounter = 0),
                    y(c, "afterInit"),
                    c.firstRender();
                });
              },
              initSeries: function (t) {
                var e = this.options.chart;
                e = t.type || e.type || e.defaultSeriesType;
                var i = _[e];
                return (
                  i || g(17, !0, this, { missingModuleFor: e }),
                  (e = new i()),
                  e.init(this, t),
                  e
                );
              },
              setSeriesData: function () {
                this.getSeriesOrderByLinks().forEach(function (t) {
                  t.points ||
                    t.data ||
                    !t.enabledDataSorting ||
                    t.setData(t.options.data, !1);
                });
              },
              getSeriesOrderByLinks: function () {
                return this.series.concat().sort(function (t, e) {
                  return t.linkedSeries.length || e.linkedSeries.length
                    ? e.linkedSeries.length - t.linkedSeries.length
                    : 0;
                });
              },
              orderSeries: function (t) {
                var e = this.series;
                for (t = t || 0; t < e.length; t++)
                  e[t] && ((e[t].index = t), (e[t].name = e[t].getName()));
              },
              isInsidePlot: function (t, e, i) {
                var s = i ? e : t;
                return (
                  (t = i ? t : e),
                  (s = {
                    x: s,
                    y: t,
                    isInsidePlot:
                      0 <= s &&
                      s <= this.plotWidth &&
                      0 <= t &&
                      t <= this.plotHeight,
                  }),
                  y(this, "afterIsInsidePlot", s),
                  s.isInsidePlot
                );
              },
              redraw: function (t) {
                y(this, "beforeRedraw");
                var e = this.axes,
                  i = this.series,
                  s = this.pointer,
                  n = this.legend,
                  o = this.userOptions.legend,
                  r = this.isDirtyLegend,
                  a = this.hasCartesianSeries,
                  h = this.isDirtyBox,
                  l = this.renderer,
                  c = l.isHidden(),
                  d = [];
                for (
                  this.setResponsive && this.setResponsive(!1),
                    P(!!this.hasRendered && t, this),
                    c && this.temporaryDisplay(),
                    this.layOutTitles(),
                    t = i.length;
                  t--;

                ) {
                  var p = i[t];
                  if (p.options.stacking) {
                    var u = !0;
                    if (p.isDirty) {
                      var f = !0;
                      break;
                    }
                  }
                }
                if (f)
                  for (t = i.length; t--; )
                    (p = i[t]), p.options.stacking && (p.isDirty = !0);
                i.forEach(function (t) {
                  t.isDirty &&
                    ("point" === t.options.legendType
                      ? (t.updateTotals && t.updateTotals(), (r = !0))
                      : o && (o.labelFormatter || o.labelFormat) && (r = !0)),
                    t.isDirtyData && y(t, "updatedData");
                }),
                  r &&
                    n &&
                    n.options.enabled &&
                    (n.render(), (this.isDirtyLegend = !1)),
                  u && this.getStacks(),
                  a &&
                    e.forEach(function (t) {
                      t.updateNames(), t.setScale();
                    }),
                  this.getMargins(),
                  a &&
                    (e.forEach(function (t) {
                      t.isDirty && (h = !0);
                    }),
                    e.forEach(function (t) {
                      var e = t.min + "," + t.max;
                      t.extKey !== e &&
                        ((t.extKey = e),
                        d.push(function () {
                          y(
                            t,
                            "afterSetExtremes",
                            m(t.eventArgs, t.getExtremes())
                          ),
                            delete t.eventArgs;
                        })),
                        (h || u) && t.redraw();
                    })),
                  h && this.drawChartBox(),
                  y(this, "predraw"),
                  i.forEach(function (t) {
                    (h || t.isDirty) && t.visible && t.redraw(),
                      (t.isDirtyData = !1);
                  }),
                  s && s.reset(!0),
                  l.draw(),
                  y(this, "redraw"),
                  y(this, "render"),
                  c && this.temporaryDisplay(!0),
                  d.forEach(function (t) {
                    t.call();
                  });
              },
              get: function (t) {
                function e(e) {
                  return e.id === t || (e.options && e.options.id === t);
                }
                var i,
                  s = this.series,
                  n = v(this.axes, e) || v(this.series, e);
                for (i = 0; !n && i < s.length; i++)
                  n = v(s[i].points || [], e);
                return n;
              },
              getAxes: function () {
                var t = this,
                  e = this.options,
                  i = (e.xAxis = I(e.xAxis || {}));
                (e = e.yAxis = I(e.yAxis || {})),
                  y(this, "getAxes"),
                  i.forEach(function (t, e) {
                    (t.index = e), (t.isX = !0);
                  }),
                  e.forEach(function (t, e) {
                    t.index = e;
                  }),
                  i.concat(e).forEach(function (e) {
                    new B(t, e);
                  }),
                  y(this, "afterGetAxes");
              },
              getSelectedPoints: function () {
                var t = [];
                return (
                  this.series.forEach(function (e) {
                    t = t.concat(
                      e.getPointsCollection().filter(function (t) {
                        return D(t.selectedStaging, t.selected);
                      })
                    );
                  }),
                  t
                );
              },
              getSelectedSeries: function () {
                return this.series.filter(function (t) {
                  return t.selected;
                });
              },
              setTitle: function (t, e, i) {
                this.applyDescription("title", t),
                  this.applyDescription("subtitle", e),
                  this.applyDescription("caption", void 0),
                  this.layOutTitles(i);
              },
              applyDescription: function (t, e) {
                var i = this,
                  s =
                    "title" === t
                      ? {
                          color: "#333333",
                          fontSize: this.options.isStock ? "16px" : "18px",
                        }
                      : { color: "#666666" };
                s = this.options[t] = T(
                  !this.styledMode && { style: s },
                  this.options[t],
                  e
                );
                var n = this[t];
                n && e && (this[t] = n = n.destroy()),
                  s &&
                    !n &&
                    ((n = this.renderer
                      .text(s.text, 0, 0, s.useHTML)
                      .attr({
                        align: s.align,
                        class: "highcharts-" + t,
                        zIndex: s.zIndex || 4,
                      })
                      .add()),
                    (n.update = function (e) {
                      i[
                        {
                          title: "setTitle",
                          subtitle: "setSubtitle",
                          caption: "setCaption",
                        }[t]
                      ](e);
                    }),
                    this.styledMode || n.css(s.style),
                    (this[t] = n));
              },
              layOutTitles: function (t) {
                var e = [0, 0, 0],
                  i = this.renderer,
                  s = this.spacingBox;
                ["title", "subtitle", "caption"].forEach(function (t) {
                  var n = this[t],
                    o = this.options[t],
                    r = o.verticalAlign || "top";
                  if (
                    ((t = "title" === t ? -3 : "top" === r ? e[0] + 2 : 0), n)
                  ) {
                    if (!this.styledMode) var a = o.style.fontSize;
                    (a = i.fontMetrics(a, n).b),
                      n.css({
                        width:
                          (o.width || s.width + (o.widthAdjust || 0)) + "px",
                      });
                    var h = Math.round(n.getBBox(o.useHTML).height);
                    n.align(
                      m({ y: "bottom" === r ? a : t + a, height: h }, o),
                      !1,
                      "spacingBox"
                    ),
                      o.floating ||
                        ("top" === r
                          ? (e[0] = Math.ceil(e[0] + h))
                          : "bottom" === r && (e[2] = Math.ceil(e[2] + h)));
                  }
                }, this),
                  e[0] &&
                    "top" === (this.options.title.verticalAlign || "top") &&
                    (e[0] += this.options.title.margin),
                  e[2] &&
                    "bottom" === this.options.caption.verticalAlign &&
                    (e[2] += this.options.caption.margin);
                var n =
                  !this.titleOffset ||
                  this.titleOffset.join(",") !== e.join(",");
                (this.titleOffset = e),
                  y(this, "afterLayOutTitles"),
                  !this.isDirtyBox &&
                    n &&
                    ((this.isDirtyBox = this.isDirtyLegend = n),
                    this.hasRendered &&
                      D(t, !0) &&
                      this.isDirtyBox &&
                      this.redraw());
              },
              getChartSize: function () {
                var t = this.options.chart,
                  e = t.width;
                t = t.height;
                var i = this.renderTo;
                p(e) || (this.containerWidth = x(i, "width")),
                  p(t) || (this.containerHeight = x(i, "height")),
                  (this.chartWidth = Math.max(
                    0,
                    e || this.containerWidth || 600
                  )),
                  (this.chartHeight = Math.max(
                    0,
                    O(t, this.chartWidth) ||
                      (1 < this.containerHeight ? this.containerHeight : 400)
                  ));
              },
              temporaryDisplay: function (t) {
                var e = this.renderTo;
                if (t)
                  for (; e && e.style; )
                    e.hcOrigStyle &&
                      (d(e, e.hcOrigStyle), delete e.hcOrigStyle),
                      e.hcOrigDetached &&
                        (H.body.removeChild(e), (e.hcOrigDetached = !1)),
                      (e = e.parentNode);
                else
                  for (
                    ;
                    e &&
                    e.style &&
                    (H.body.contains(e) ||
                      e.parentNode ||
                      ((e.hcOrigDetached = !0), H.body.appendChild(e)),
                    ("none" === x(e, "display", !1) || e.hcOricDetached) &&
                      ((e.hcOrigStyle = {
                        display: e.style.display,
                        height: e.style.height,
                        overflow: e.style.overflow,
                      }),
                      (t = { display: "block", overflow: "hidden" }),
                      e !== this.renderTo && (t.height = 0),
                      d(e, t),
                      e.offsetWidth ||
                        e.style.setProperty("display", "block", "important")),
                    (e = e.parentNode) !== H.body);

                  );
              },
              setClassName: function (t) {
                this.container.className = "highcharts-container " + (t || "");
              },
              getContainer: function () {
                var e,
                  i,
                  s = this.options,
                  n = s.chart,
                  o = this.renderTo,
                  r = N();
                o || (this.renderTo = o = n.renderTo),
                  S(o) && (this.renderTo = o = H.getElementById(o)),
                  o || g(13, !0, this);
                var a = E(l(o, "data-highcharts-chart"));
                w(a) && R[a] && R[a].hasRendered && R[a].destroy(),
                  l(o, "data-highcharts-chart", this.index),
                  (o.innerHTML = ""),
                  n.skipClone || o.offsetWidth || this.temporaryDisplay(),
                  this.getChartSize(),
                  (a = this.chartWidth);
                var h = this.chartHeight;
                if (
                  (d(o, { overflow: "hidden" }),
                  this.styledMode ||
                    (e = m(
                      {
                        position: "relative",
                        overflow: "hidden",
                        width: a + "px",
                        height: h + "px",
                        textAlign: "left",
                        lineHeight: "normal",
                        zIndex: 0,
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                      },
                      n.style
                    )),
                  (this.container = o = c("div", { id: r }, e, o)),
                  (this._cursor = o.style.cursor),
                  (this.renderer = new (t[n.renderer] || t.Renderer)(
                    o,
                    a,
                    h,
                    null,
                    n.forExport,
                    s.exporting && s.exporting.allowHTML,
                    this.styledMode
                  )),
                  P(void 0, this),
                  this.setClassName(n.className),
                  this.styledMode)
                )
                  for (i in s.defs) this.renderer.definition(s.defs[i]);
                else this.renderer.setStyle(n.style);
                (this.renderer.chartIndex = this.index),
                  y(this, "afterGetContainer");
              },
              getMargins: function (t) {
                var e = this.spacing,
                  i = this.margin,
                  s = this.titleOffset;
                this.resetMargins(),
                  s[0] &&
                    !p(i[0]) &&
                    (this.plotTop = Math.max(this.plotTop, s[0] + e[0])),
                  s[2] &&
                    !p(i[2]) &&
                    (this.marginBottom = Math.max(
                      this.marginBottom,
                      s[2] + e[2]
                    )),
                  this.legend &&
                    this.legend.display &&
                    this.legend.adjustMargins(i, e),
                  y(this, "getMargins"),
                  t || this.getAxisMargins();
              },
              getAxisMargins: function () {
                var t = this,
                  e = (t.axisOffset = [0, 0, 0, 0]),
                  i = t.colorAxis,
                  s = t.margin,
                  n = function (t) {
                    t.forEach(function (t) {
                      t.visible && t.getOffset();
                    });
                  };
                t.hasCartesianSeries ? n(t.axes) : i && i.length && n(i),
                  j.forEach(function (i, n) {
                    p(s[n]) || (t[i] += e[n]);
                  }),
                  t.setChartSize();
              },
              reflow: function (t) {
                var e = this,
                  i = e.options.chart,
                  s = e.renderTo,
                  n = p(i.width) && p(i.height),
                  r = i.width || x(s, "width");
                (i = i.height || x(s, "height")),
                  (s = t ? t.target : F),
                  n ||
                    e.isPrinting ||
                    !r ||
                    !i ||
                    (s !== F && s !== H) ||
                    ((r === e.containerWidth && i === e.containerHeight) ||
                      (o.clearTimeout(e.reflowTimeout),
                      (e.reflowTimeout = z(
                        function () {
                          e.container && e.setSize(void 0, void 0, !1);
                        },
                        t ? 100 : 0
                      ))),
                    (e.containerWidth = r),
                    (e.containerHeight = i));
              },
              setReflow: function (t) {
                var e = this;
                !1 === t || this.unbindReflow
                  ? !1 === t &&
                    this.unbindReflow &&
                    (this.unbindReflow = this.unbindReflow())
                  : ((this.unbindReflow = r(F, "resize", function (t) {
                      e.options && e.reflow(t);
                    })),
                    r(this, "destroy", this.unbindReflow));
              },
              setSize: function (t, e, i) {
                var s = this,
                  n = s.renderer;
                (s.isResizing += 1),
                  P(i, s),
                  (i = n.globalAnimation),
                  (s.oldChartHeight = s.chartHeight),
                  (s.oldChartWidth = s.chartWidth),
                  void 0 !== t && (s.options.chart.width = t),
                  void 0 !== e && (s.options.chart.height = e),
                  s.getChartSize(),
                  s.styledMode ||
                    (i ? a : d)(
                      s.container,
                      {
                        width: s.chartWidth + "px",
                        height: s.chartHeight + "px",
                      },
                      i
                    ),
                  s.setChartSize(!0),
                  n.setSize(s.chartWidth, s.chartHeight, i),
                  s.axes.forEach(function (t) {
                    (t.isDirty = !0), t.setScale();
                  }),
                  (s.isDirtyLegend = !0),
                  (s.isDirtyBox = !0),
                  s.layOutTitles(),
                  s.getMargins(),
                  s.redraw(i),
                  (s.oldChartHeight = null),
                  y(s, "resize"),
                  z(function () {
                    s &&
                      y(s, "endResize", null, function () {
                        --s.isResizing;
                      });
                  }, h(i).duration || 0);
              },
              setChartSize: function (t) {
                var e,
                  i,
                  s,
                  n,
                  o = this.inverted,
                  r = this.renderer,
                  a = this.chartWidth,
                  h = this.chartHeight,
                  l = this.options.chart,
                  c = this.spacing,
                  d = this.clipOffset;
                (this.plotLeft = e = Math.round(this.plotLeft)),
                  (this.plotTop = i = Math.round(this.plotTop)),
                  (this.plotWidth = s =
                    Math.max(0, Math.round(a - e - this.marginRight))),
                  (this.plotHeight = n =
                    Math.max(0, Math.round(h - i - this.marginBottom))),
                  (this.plotSizeX = o ? n : s),
                  (this.plotSizeY = o ? s : n),
                  (this.plotBorderWidth = l.plotBorderWidth || 0),
                  (this.spacingBox = r.spacingBox =
                    {
                      x: c[3],
                      y: c[0],
                      width: a - c[3] - c[1],
                      height: h - c[0] - c[2],
                    }),
                  (this.plotBox = r.plotBox =
                    { x: e, y: i, width: s, height: n }),
                  (a = 2 * Math.floor(this.plotBorderWidth / 2)),
                  (o = Math.ceil(Math.max(a, d[3]) / 2)),
                  (r = Math.ceil(Math.max(a, d[0]) / 2)),
                  (this.clipBox = {
                    x: o,
                    y: r,
                    width: Math.floor(
                      this.plotSizeX - Math.max(a, d[1]) / 2 - o
                    ),
                    height: Math.max(
                      0,
                      Math.floor(this.plotSizeY - Math.max(a, d[2]) / 2 - r)
                    ),
                  }),
                  t ||
                    this.axes.forEach(function (t) {
                      t.setAxisSize(), t.setAxisTranslation();
                    }),
                  y(this, "afterSetChartSize", { skipAxes: t });
              },
              resetMargins: function () {
                y(this, "resetMargins");
                var t = this,
                  e = t.options.chart;
                ["margin", "spacing"].forEach(function (i) {
                  var s = e[i],
                    n = M(s) ? s : [s, s, s, s];
                  ["Top", "Right", "Bottom", "Left"].forEach(function (s, o) {
                    t[i][o] = D(e[i + s], n[o]);
                  });
                }),
                  j.forEach(function (e, i) {
                    t[e] = D(t.margin[i], t.spacing[i]);
                  }),
                  (t.axisOffset = [0, 0, 0, 0]),
                  (t.clipOffset = [0, 0, 0, 0]);
              },
              drawChartBox: function () {
                var t,
                  e = this.options.chart,
                  i = this.renderer,
                  s = this.chartWidth,
                  n = this.chartHeight,
                  o = this.chartBackground,
                  r = this.plotBackground,
                  a = this.plotBorder,
                  h = this.styledMode,
                  l = this.plotBGImage,
                  c = e.backgroundColor,
                  d = e.plotBackgroundColor,
                  p = e.plotBackgroundImage,
                  u = this.plotLeft,
                  f = this.plotTop,
                  g = this.plotWidth,
                  m = this.plotHeight,
                  v = this.plotBox,
                  x = this.clipRect,
                  b = this.clipBox,
                  k = "animate";
                if (
                  (o ||
                    ((this.chartBackground = o =
                      i.rect().addClass("highcharts-background").add()),
                    (k = "attr")),
                  h)
                )
                  var w = (t = o.strokeWidth());
                else
                  (w = e.borderWidth || 0),
                    (t = w + (e.shadow ? 8 : 0)),
                    (c = { fill: c || "none" }),
                    (w || o["stroke-width"]) &&
                      ((c.stroke = e.borderColor), (c["stroke-width"] = w)),
                    o.attr(c).shadow(e.shadow);
                o[k]({
                  x: t / 2,
                  y: t / 2,
                  width: s - t - (w % 2),
                  height: n - t - (w % 2),
                  r: e.borderRadius,
                }),
                  (k = "animate"),
                  r ||
                    ((k = "attr"),
                    (this.plotBackground = r =
                      i.rect().addClass("highcharts-plot-background").add())),
                  r[k](v),
                  h ||
                    (r.attr({ fill: d || "none" }).shadow(e.plotShadow),
                    p &&
                      (l
                        ? (p !== l.attr("href") && l.attr("href", p),
                          l.animate(v))
                        : (this.plotBGImage = i.image(p, u, f, g, m).add()))),
                  x
                    ? x.animate({ width: b.width, height: b.height })
                    : (this.clipRect = i.clipRect(b)),
                  (k = "animate"),
                  a ||
                    ((k = "attr"),
                    (this.plotBorder = a =
                      i
                        .rect()
                        .addClass("highcharts-plot-border")
                        .attr({ zIndex: 1 })
                        .add())),
                  h ||
                    a.attr({
                      stroke: e.plotBorderColor,
                      "stroke-width": e.plotBorderWidth || 0,
                      fill: "none",
                    }),
                  a[k](
                    a.crisp(
                      { x: u, y: f, width: g, height: m },
                      -a.strokeWidth()
                    )
                  ),
                  (this.isDirtyBox = !1),
                  y(this, "afterDrawChartBox");
              },
              propFromSeries: function () {
                var t,
                  e,
                  i,
                  s = this,
                  n = s.options.chart,
                  o = s.options.series;
                ["inverted", "angular", "polar"].forEach(function (r) {
                  for (
                    t = _[n.type || n.defaultSeriesType],
                      i = n[r] || (t && t.prototype[r]),
                      e = o && o.length;
                    !i && e--;

                  )
                    (t = _[o[e].type]) && t.prototype[r] && (i = !0);
                  s[r] = i;
                });
              },
              linkSeries: function () {
                var t = this,
                  e = t.series;
                e.forEach(function (t) {
                  t.linkedSeries.length = 0;
                }),
                  e.forEach(function (e) {
                    var i = e.options.linkedTo;
                    S(i) &&
                      (i =
                        ":previous" === i ? t.series[e.index - 1] : t.get(i)) &&
                      i.linkedParent !== e &&
                      (i.linkedSeries.push(e),
                      (e.linkedParent = i),
                      i.enabledDataSorting && e.setDataSortingOptions(),
                      (e.visible = D(
                        e.options.visible,
                        i.options.visible,
                        e.visible
                      )));
                  }),
                  y(this, "afterLinkSeries");
              },
              renderSeries: function () {
                this.series.forEach(function (t) {
                  t.translate(), t.render();
                });
              },
              renderLabels: function () {
                var t = this,
                  e = t.options.labels;
                e.items &&
                  e.items.forEach(function (i) {
                    var s = m(e.style, i.style),
                      n = E(s.left) + t.plotLeft,
                      o = E(s.top) + t.plotTop + 12;
                    delete s.left,
                      delete s.top,
                      t.renderer
                        .text(i.html, n, o)
                        .attr({ zIndex: 2 })
                        .css(s)
                        .add();
                  });
              },
              render: function () {
                var t = this.axes,
                  i = this.colorAxis,
                  s = this.renderer,
                  n = this.options,
                  o = 0,
                  r = function (t) {
                    t.forEach(function (t) {
                      t.visible && t.render();
                    });
                  };
                this.setTitle(),
                  (this.legend = new e(this, n.legend)),
                  this.getStacks && this.getStacks(),
                  this.getMargins(!0),
                  this.setChartSize(),
                  (n = this.plotWidth),
                  t.some(function (t) {
                    if (
                      t.horiz &&
                      t.visible &&
                      t.options.labels.enabled &&
                      t.series.length
                    )
                      return (o = 21), !0;
                  });
                var a = (this.plotHeight = Math.max(this.plotHeight - o, 0));
                t.forEach(function (t) {
                  t.setScale();
                }),
                  this.getAxisMargins();
                var h = 1.1 < n / this.plotWidth,
                  l = 1.05 < a / this.plotHeight;
                (h || l) &&
                  (t.forEach(function (t) {
                    ((t.horiz && h) || (!t.horiz && l)) &&
                      t.setTickInterval(!0);
                  }),
                  this.getMargins()),
                  this.drawChartBox(),
                  this.hasCartesianSeries ? r(t) : i && i.length && r(i),
                  this.seriesGroup ||
                    (this.seriesGroup = s
                      .g("series-group")
                      .attr({ zIndex: 3 })
                      .add()),
                  this.renderSeries(),
                  this.renderLabels(),
                  this.addCredits(),
                  this.setResponsive && this.setResponsive(),
                  this.updateContainerScaling(),
                  (this.hasRendered = !0);
              },
              addCredits: function (t) {
                var e = this;
                (t = T(!0, this.options.credits, t)),
                  t.enabled &&
                    !this.credits &&
                    ((this.credits = this.renderer
                      .text(t.text + (this.mapCredits || ""), 0, 0)
                      .addClass("highcharts-credits")
                      .on("click", function () {
                        t.href && (F.location.href = t.href);
                      })
                      .attr({ align: t.position.align, zIndex: 8 })),
                    e.styledMode || this.credits.css(t.style),
                    this.credits.add().align(t.position),
                    (this.credits.update = function (t) {
                      (e.credits = e.credits.destroy()), e.addCredits(t);
                    }));
              },
              updateContainerScaling: function () {
                var t = this.container;
                if (
                  t.offsetWidth &&
                  t.offsetHeight &&
                  t.getBoundingClientRect
                ) {
                  var e = t.getBoundingClientRect(),
                    i = e.width / t.offsetWidth;
                  (t = e.height / t.offsetHeight),
                    1 !== i || 1 !== t
                      ? (this.containerScaling = { scaleX: i, scaleY: t })
                      : delete this.containerScaling;
                }
              },
              destroy: function () {
                var e,
                  i = this,
                  s = i.axes,
                  n = i.series,
                  o = i.container,
                  r = o && o.parentNode;
                for (
                  y(i, "destroy"),
                    i.renderer.forExport ? f(R, i) : (R[i.index] = void 0),
                    t.chartCount--,
                    i.renderTo.removeAttribute("data-highcharts-chart"),
                    L(i),
                    e = s.length;
                  e--;

                )
                  s[e] = s[e].destroy();
                for (
                  this.scroller &&
                    this.scroller.destroy &&
                    this.scroller.destroy(),
                    e = n.length;
                  e--;

                )
                  n[e] = n[e].destroy();
                "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer"
                  .split(" ")
                  .forEach(function (t) {
                    var e = i[t];
                    e && e.destroy && (i[t] = e.destroy());
                  }),
                  o && ((o.innerHTML = ""), L(o), r && u(o)),
                  A(i, function (t, e) {
                    delete i[e];
                  });
              },
              firstRender: function () {
                var e = this,
                  n = e.options;
                (e.isReadyToRender && !e.isReadyToRender()) ||
                  (e.getContainer(),
                  e.resetMargins(),
                  e.setChartSize(),
                  e.propFromSeries(),
                  e.getAxes(),
                  (b(n.series) ? n.series : []).forEach(function (t) {
                    e.initSeries(t);
                  }),
                  e.linkSeries(),
                  e.setSeriesData(),
                  y(e, "beforeRender"),
                  s &&
                    (e.pointer =
                      t.hasTouch || (!F.PointerEvent && !F.MSPointerEvent)
                        ? new s(e, n)
                        : new i(e, n)),
                  e.render(),
                  e.renderer.imgCount || e.hasLoaded || e.onload(),
                  e.temporaryDisplay(!0));
              },
              onload: function () {
                this.callbacks.concat([this.callback]).forEach(function (t) {
                  t && void 0 !== this.index && t.apply(this, [this]);
                }, this),
                  y(this, "load"),
                  y(this, "render"),
                  p(this.index) && this.setReflow(this.options.chart.reflow),
                  (this.hasLoaded = !0);
              },
            });
        }
      ),
      e(
        i,
        "parts/ScrollablePlotArea.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.addEvent,
            s = e.createElement,
            n = e.pick,
            o = e.stop;
          (e = t.Chart),
            i(e, "afterSetChartSize", function (e) {
              var i = this.options.chart.scrollablePlotArea,
                s = i && i.minWidth;
              if (((i = i && i.minHeight), !this.renderer.forExport)) {
                if (s) {
                  if (
                    (this.scrollablePixelsX = s =
                      Math.max(0, s - this.chartWidth))
                  ) {
                    (this.plotWidth += s),
                      this.inverted
                        ? ((this.clipBox.height += s),
                          (this.plotBox.height += s))
                        : ((this.clipBox.width += s),
                          (this.plotBox.width += s));
                    var n = { 1: { name: "right", value: s } };
                  }
                } else
                  i &&
                    (this.scrollablePixelsY = s =
                      Math.max(0, i - this.chartHeight)) &&
                    ((this.plotHeight += s),
                    this.inverted
                      ? ((this.clipBox.width += s), (this.plotBox.width += s))
                      : ((this.clipBox.height += s),
                        (this.plotBox.height += s)),
                    (n = { 2: { name: "bottom", value: s } }));
                n &&
                  !e.skipAxes &&
                  this.axes.forEach(function (e) {
                    n[e.side]
                      ? (e.getPlotLinePath = function () {
                          var i = n[e.side].name,
                            s = this[i];
                          this[i] = s - n[e.side].value;
                          var o = t.Axis.prototype.getPlotLinePath.apply(
                            this,
                            arguments
                          );
                          return (this[i] = s), o;
                        })
                      : (e.setAxisSize(), e.setAxisTranslation());
                  });
              }
            }),
            i(e, "render", function () {
              this.scrollablePixelsX || this.scrollablePixelsY
                ? (this.setUpScrolling && this.setUpScrolling(),
                  this.applyFixed())
                : this.fixedDiv && this.applyFixed();
            }),
            (e.prototype.setUpScrolling = function () {
              var t = this,
                e = {
                  WebkitOverflowScrolling: "touch",
                  overflowX: "hidden",
                  overflowY: "hidden",
                };
              this.scrollablePixelsX && (e.overflowX = "auto"),
                this.scrollablePixelsY && (e.overflowY = "auto"),
                (this.scrollingContainer = s(
                  "div",
                  { className: "highcharts-scrolling" },
                  e,
                  this.renderTo
                )),
                i(this.scrollingContainer, "scroll", function () {
                  t.pointer && delete t.pointer.chartPosition;
                }),
                (this.innerContainer = s(
                  "div",
                  { className: "highcharts-inner-container" },
                  null,
                  this.scrollingContainer
                )),
                this.innerContainer.appendChild(this.container),
                (this.setUpScrolling = null);
            }),
            (e.prototype.moveFixedElements = function () {
              var t,
                e = this.container,
                i = this.fixedRenderer,
                s =
                  ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(
                    " "
                  );
              this.scrollablePixelsX && !this.inverted
                ? (t = ".highcharts-yaxis")
                : this.scrollablePixelsX && this.inverted
                ? (t = ".highcharts-xaxis")
                : this.scrollablePixelsY && !this.inverted
                ? (t = ".highcharts-xaxis")
                : this.scrollablePixelsY &&
                  this.inverted &&
                  (t = ".highcharts-yaxis"),
                s.push(t, t + "-labels"),
                s.forEach(function (t) {
                  [].forEach.call(e.querySelectorAll(t), function (t) {
                    (t.namespaceURI === i.SVG_NS
                      ? i.box
                      : i.box.parentNode
                    ).appendChild(t),
                      (t.style.pointerEvents = "auto");
                  });
                });
            }),
            (e.prototype.applyFixed = function () {
              var e,
                r,
                a = !this.fixedDiv,
                h = this.options.chart.scrollablePlotArea;
              a
                ? ((this.fixedDiv = s(
                    "div",
                    { className: "highcharts-fixed" },
                    {
                      position: "absolute",
                      overflow: "hidden",
                      pointerEvents: "none",
                      zIndex: 2,
                    },
                    null,
                    !0
                  )),
                  this.renderTo.insertBefore(
                    this.fixedDiv,
                    this.renderTo.firstChild
                  ),
                  (this.renderTo.style.overflow = "visible"),
                  (this.fixedRenderer = r =
                    new t.Renderer(
                      this.fixedDiv,
                      this.chartWidth,
                      this.chartHeight,
                      null === (e = this.options.chart) || void 0 === e
                        ? void 0
                        : e.style
                    )),
                  (this.scrollableMask = r
                    .path()
                    .attr({
                      fill: this.options.chart.backgroundColor || "#fff",
                      "fill-opacity": n(h.opacity, 0.85),
                      zIndex: -1,
                    })
                    .addClass("highcharts-scrollable-mask")
                    .add()),
                  this.moveFixedElements(),
                  i(this, "afterShowResetZoom", this.moveFixedElements),
                  i(this, "afterLayOutTitles", this.moveFixedElements))
                : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight),
                (e = this.chartWidth + (this.scrollablePixelsX || 0)),
                (r = this.chartHeight + (this.scrollablePixelsY || 0)),
                o(this.container),
                (this.container.style.width = e + "px"),
                (this.container.style.height = r + "px"),
                this.renderer.boxWrapper.attr({
                  width: e,
                  height: r,
                  viewBox: [0, 0, e, r].join(" "),
                }),
                this.chartBackground.attr({ width: e, height: r }),
                (this.scrollingContainer.style.height =
                  this.chartHeight + "px"),
                a &&
                  (h.scrollPositionX &&
                    (this.scrollingContainer.scrollLeft =
                      this.scrollablePixelsX * h.scrollPositionX),
                  h.scrollPositionY &&
                    (this.scrollingContainer.scrollTop =
                      this.scrollablePixelsY * h.scrollPositionY)),
                (r = this.axisOffset),
                (a = this.plotTop - r[0] - 1),
                (h = this.plotLeft - r[3] - 1),
                (e = this.plotTop + this.plotHeight + r[2] + 1),
                (r = this.plotLeft + this.plotWidth + r[1] + 1);
              var l =
                  this.plotLeft +
                  this.plotWidth -
                  (this.scrollablePixelsX || 0),
                c =
                  this.plotTop +
                  this.plotHeight -
                  (this.scrollablePixelsY || 0);
              (a = this.scrollablePixelsX
                ? [
                    ["M", 0, a],
                    ["L", this.plotLeft - 1, a],
                    ["L", this.plotLeft - 1, e],
                    ["L", 0, e],
                    ["Z"],
                    ["M", l, a],
                    ["L", this.chartWidth, a],
                    ["L", this.chartWidth, e],
                    ["L", l, e],
                    ["Z"],
                  ]
                : this.scrollablePixelsY
                ? [
                    ["M", h, 0],
                    ["L", h, this.plotTop - 1],
                    ["L", r, this.plotTop - 1],
                    ["L", r, 0],
                    ["Z"],
                    ["M", h, c],
                    ["L", h, this.chartHeight],
                    ["L", r, this.chartHeight],
                    ["L", r, c],
                    ["Z"],
                  ]
                : [["M", 0, 0]]),
                "adjustHeight" !== this.redrawTrigger &&
                  this.scrollableMask.attr({ d: a });
            });
        }
      ),
      e(i, "parts/StackingAxis.js", [i["parts/Utilities.js"]], function (t) {
        var e = t.addEvent,
          i = t.destroyObjectProperties,
          s = t.fireEvent,
          n = t.objectEach,
          o = t.pick,
          r = (function () {
            function t(t) {
              (this.oldStacks = {}),
                (this.stacks = {}),
                (this.stacksTouched = 0),
                (this.axis = t);
            }
            return (
              (t.prototype.buildStacks = function () {
                var t,
                  e = this.axis,
                  i = e.series,
                  n = o(e.options.reversedStacks, !0),
                  r = i.length;
                if (!e.isXAxis) {
                  for (this.usePercentage = !1, t = r; t--; ) {
                    i[n ? t : r - t - 1].setStackedPoints();
                  }
                  for (t = 0; t < r; t++) i[t].modifyStacks();
                  s(e, "afterBuildStacks");
                }
              }),
              (t.prototype.cleanStacks = function () {
                if (!this.axis.isXAxis) {
                  if (this.oldStacks) var t = (this.stacks = this.oldStacks);
                  n(t, function (t) {
                    n(t, function (t) {
                      t.cumulative = t.total;
                    });
                  });
                }
              }),
              (t.prototype.resetStacks = function () {
                var t = this,
                  e = t.stacks;
                t.axis.isXAxis ||
                  n(e, function (e) {
                    n(e, function (i, s) {
                      i.touched < t.stacksTouched
                        ? (i.destroy(), delete e[s])
                        : ((i.total = null), (i.cumulative = null));
                    });
                  });
              }),
              (t.prototype.renderStackTotals = function () {
                var t = this.axis.chart,
                  e = t.renderer,
                  i = this.stacks,
                  s = (this.stackTotalGroup =
                    this.stackTotalGroup ||
                    e
                      .g("stack-labels")
                      .attr({ visibility: "visible", zIndex: 6 })
                      .add());
                s.translate(t.plotLeft, t.plotTop),
                  n(i, function (t) {
                    n(t, function (t) {
                      t.render(s);
                    });
                  });
              }),
              t
            );
          })();
        return (function () {
          function t() {}
          return (
            (t.compose = function (i) {
              e(i, "init", t.onInit), e(i, "destroy", t.onDestroy);
            }),
            (t.onDestroy = function () {
              var t = this.stacking;
              if (t) {
                var e = t.stacks;
                n(e, function (t, s) {
                  i(t), (e[s] = null);
                }),
                  t && t.stackTotalGroup && t.stackTotalGroup.destroy();
              }
            }),
            (t.onInit = function () {
              this.stacking || (this.stacking = new r(this));
            }),
            t
          );
        })();
      }),
      e(
        i,
        "mixins/legend-symbol.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.merge,
            s = e.pick;
          return (
            (t.LegendSymbolMixin = {
              drawRectangle: function (t, e) {
                var i = t.symbolHeight,
                  n = t.options.squareSymbol;
                e.legendSymbol = this.chart.renderer
                  .rect(
                    n ? (t.symbolWidth - i) / 2 : 0,
                    t.baseline - i + 1,
                    n ? i : t.symbolWidth,
                    i,
                    s(t.options.symbolRadius, i / 2)
                  )
                  .addClass("highcharts-point")
                  .attr({ zIndex: 3 })
                  .add(e.legendGroup);
              },
              drawLineMarker: function (t) {
                var e = this.options,
                  n = e.marker,
                  o = t.symbolWidth,
                  r = t.symbolHeight,
                  a = r / 2,
                  h = this.chart.renderer,
                  l = this.legendGroup;
                t = t.baseline - Math.round(0.3 * t.fontMetrics.b);
                var c = {};
                this.chart.styledMode ||
                  ((c = { "stroke-width": e.lineWidth || 0 }),
                  e.dashStyle && (c.dashstyle = e.dashStyle)),
                  (this.legendLine = h
                    .path(["M", 0, t, "L", o, t])
                    .addClass("highcharts-graph")
                    .attr(c)
                    .add(l)),
                  n &&
                    !1 !== n.enabled &&
                    o &&
                    ((e = Math.min(s(n.radius, a), a)),
                    0 === this.symbol.indexOf("url") &&
                      ((n = i(n, { width: r, height: r })), (e = 0)),
                    (this.legendSymbol = n =
                      h
                        .symbol(this.symbol, o / 2 - e, t - e, 2 * e, 2 * e, n)
                        .addClass("highcharts-point")
                        .add(l)),
                    (n.isMarker = !0));
              },
            }),
            t.LegendSymbolMixin
          );
        }
      ),
      e(
        i,
        "parts/Point.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          "";
          var i = e.animObject,
            s = e.defined,
            n = e.erase,
            o = e.extend,
            r = e.fireEvent,
            a = e.format,
            h = e.getNestedProperty,
            l = e.isArray,
            c = e.isNumber,
            d = e.isObject,
            p = e.syncTimeout,
            u = e.pick,
            f = e.removeEvent,
            g = e.uniqueKey;
          return (
            (e = (function () {
              function t() {
                (this.colorIndex = this.category = void 0),
                  (this.formatPrefix = "point"),
                  (this.id = void 0),
                  (this.isNull = !1),
                  (this.percentage = this.options = this.name = void 0),
                  (this.selected = !1),
                  (this.total = this.series = void 0),
                  (this.visible = !0),
                  (this.x = void 0);
              }
              return (
                (t.prototype.animateBeforeDestroy = function () {
                  var t,
                    e = this,
                    i = { x: e.startXPos, opacity: 0 },
                    s = e.getGraphicalProps();
                  s.singular.forEach(function (s) {
                    (t = "dataLabel" === s),
                      (e[s] = e[s].animate(
                        t
                          ? { x: e[s].startXPos, y: e[s].startYPos, opacity: 0 }
                          : i
                      ));
                  }),
                    s.plural.forEach(function (t) {
                      e[t].forEach(function (t) {
                        t.element &&
                          t.animate(
                            o(
                              { x: e.startXPos },
                              t.startYPos
                                ? { x: t.startXPos, y: t.startYPos }
                                : {}
                            )
                          );
                      });
                    });
                }),
                (t.prototype.applyOptions = function (e, i) {
                  var s = this.series,
                    n = s.options.pointValKey || s.pointValKey;
                  return (
                    (e = t.prototype.optionsToObject.call(this, e)),
                    o(this, e),
                    (this.options = this.options ? o(this.options, e) : e),
                    e.group && delete this.group,
                    e.dataLabels && delete this.dataLabels,
                    n && (this.y = t.prototype.getNestedProperty.call(this, n)),
                    (this.formatPrefix = (this.isNull = u(
                      this.isValid && !this.isValid(),
                      null === this.x || !c(this.y)
                    ))
                      ? "null"
                      : "point"),
                    this.selected && (this.state = "select"),
                    "name" in this &&
                      void 0 === i &&
                      s.xAxis &&
                      s.xAxis.hasNames &&
                      (this.x = s.xAxis.nameToX(this)),
                    void 0 === this.x &&
                      s &&
                      (this.x = void 0 === i ? s.autoIncrement(this) : i),
                    this
                  );
                }),
                (t.prototype.destroy = function () {
                  function t() {
                    (e.graphic || e.dataLabel || e.dataLabels) &&
                      (f(e), e.destroyElements());
                    for (r in e) e[r] = null;
                  }
                  var e = this,
                    s = e.series,
                    o = s.chart;
                  s = s.options.dataSorting;
                  var r,
                    a = o.hoverPoints,
                    h = i(e.series.chart.renderer.globalAnimation);
                  e.legendItem && o.legend.destroyItem(e),
                    a &&
                      (e.setState(),
                      n(a, e),
                      a.length || (o.hoverPoints = null)),
                    e === o.hoverPoint && e.onMouseOut(),
                    s && s.enabled
                      ? (this.animateBeforeDestroy(), p(t, h.duration))
                      : t(),
                    o.pointCount--;
                }),
                (t.prototype.destroyElements = function (t) {
                  var e = this;
                  (t = e.getGraphicalProps(t)),
                    t.singular.forEach(function (t) {
                      e[t] = e[t].destroy();
                    }),
                    t.plural.forEach(function (t) {
                      e[t].forEach(function (t) {
                        t.element && t.destroy();
                      }),
                        delete e[t];
                    });
                }),
                (t.prototype.firePointEvent = function (t, e, i) {
                  var s = this,
                    n = this.series.options;
                  (n.point.events[t] ||
                    (s.options && s.options.events && s.options.events[t])) &&
                    s.importEvents(),
                    "click" === t &&
                      n.allowPointSelect &&
                      (i = function (t) {
                        s.select &&
                          s.select(null, t.ctrlKey || t.metaKey || t.shiftKey);
                      }),
                    r(s, t, e, i);
                }),
                (t.prototype.getClassName = function () {
                  return (
                    "highcharts-point" +
                    (this.selected ? " highcharts-point-select" : "") +
                    (this.negative ? " highcharts-negative" : "") +
                    (this.isNull ? " highcharts-null-point" : "") +
                    (void 0 !== this.colorIndex
                      ? " highcharts-color-" + this.colorIndex
                      : "") +
                    (this.options.className
                      ? " " + this.options.className
                      : "") +
                    (this.zone && this.zone.className
                      ? " " +
                        this.zone.className.replace("highcharts-negative", "")
                      : "")
                  );
                }),
                (t.prototype.getGraphicalProps = function (t) {
                  var e,
                    i = this,
                    s = [],
                    n = { singular: [], plural: [] };
                  for (
                    t = t || { graphic: 1, dataLabel: 1 },
                      t.graphic && s.push("graphic", "shadowGroup"),
                      t.dataLabel &&
                        s.push("dataLabel", "dataLabelUpper", "connector"),
                      e = s.length;
                    e--;

                  ) {
                    var o = s[e];
                    i[o] && n.singular.push(o);
                  }
                  return (
                    ["dataLabel", "connector"].forEach(function (e) {
                      var s = e + "s";
                      t[e] && i[s] && n.plural.push(s);
                    }),
                    n
                  );
                }),
                (t.prototype.getLabelConfig = function () {
                  return {
                    x: this.category,
                    y: this.y,
                    color: this.color,
                    colorIndex: this.colorIndex,
                    key: this.name || this.category,
                    series: this.series,
                    point: this,
                    percentage: this.percentage,
                    total: this.total || this.stackTotal,
                  };
                }),
                (t.prototype.getNestedProperty = function (t) {
                  if (t)
                    return 0 === t.indexOf("custom.")
                      ? h(t, this.options)
                      : this[t];
                }),
                (t.prototype.getZone = function () {
                  var t = this.series,
                    e = t.zones;
                  t = t.zoneAxis || "y";
                  var i,
                    s = 0;
                  for (i = e[s]; this[t] >= i.value; ) i = e[++s];
                  return (
                    this.nonZonedColor || (this.nonZonedColor = this.color),
                    (this.color =
                      i && i.color && !this.options.color
                        ? i.color
                        : this.nonZonedColor),
                    i
                  );
                }),
                (t.prototype.hasNewShapeType = function () {
                  return (
                    (this.graphic &&
                      (this.graphic.symbolName ||
                        this.graphic.element.nodeName)) !== this.shapeType
                  );
                }),
                (t.prototype.init = function (t, e, i) {
                  return (
                    (this.series = t),
                    this.applyOptions(e, i),
                    (this.id = s(this.id) ? this.id : g()),
                    this.resolveColor(),
                    t.chart.pointCount++,
                    r(this, "afterInit"),
                    this
                  );
                }),
                (t.prototype.optionsToObject = function (e) {
                  var i = {},
                    s = this.series,
                    n = s.options.keys,
                    o = n || s.pointArrayMap || ["y"],
                    r = o.length,
                    a = 0,
                    h = 0;
                  if (c(e) || null === e) i[o[0]] = e;
                  else if (l(e))
                    for (
                      !n &&
                      e.length > r &&
                      ((s = typeof e[0]),
                      "string" === s
                        ? (i.name = e[0])
                        : "number" === s && (i.x = e[0]),
                      a++);
                      h < r;

                    )
                      (n && void 0 === e[a]) ||
                        (0 < o[h].indexOf(".")
                          ? t.prototype.setNestedProperty(i, e[a], o[h])
                          : (i[o[h]] = e[a])),
                        a++,
                        h++;
                  else
                    "object" == typeof e &&
                      ((i = e),
                      e.dataLabels && (s._hasPointLabels = !0),
                      e.marker && (s._hasPointMarkers = !0));
                  return i;
                }),
                (t.prototype.resolveColor = function () {
                  var t = this.series,
                    e = t.chart.options.chart.colorCount,
                    i = t.chart.styledMode;
                  delete this.nonZonedColor,
                    i || this.options.color || (this.color = t.color),
                    t.options.colorByPoint
                      ? (i ||
                          ((e = t.options.colors || t.chart.options.colors),
                          (this.color = this.color || e[t.colorCounter]),
                          (e = e.length)),
                        (i = t.colorCounter),
                        ++t.colorCounter === e && (t.colorCounter = 0))
                      : (i = t.colorIndex),
                    (this.colorIndex = u(this.colorIndex, i));
                }),
                (t.prototype.setNestedProperty = function (t, e, i) {
                  return (
                    i.split(".").reduce(function (t, i, s, n) {
                      return (
                        (t[i] =
                          n.length - 1 === s ? e : d(t[i], !0) ? t[i] : {}),
                        t[i]
                      );
                    }, t),
                    t
                  );
                }),
                (t.prototype.tooltipFormatter = function (t) {
                  var e = this.series,
                    i = e.tooltipOptions,
                    s = u(i.valueDecimals, ""),
                    n = i.valuePrefix || "",
                    o = i.valueSuffix || "";
                  return (
                    e.chart.styledMode &&
                      (t = e.chart.tooltip.styledModeFormat(t)),
                    (e.pointArrayMap || ["y"]).forEach(function (e) {
                      (e = "{point." + e),
                        (n || o) &&
                          (t = t.replace(
                            RegExp(e + "}", "g"),
                            n + e + "}" + o
                          )),
                        (t = t.replace(
                          RegExp(e + "}", "g"),
                          e + ":,." + s + "f}"
                        ));
                    }),
                    a(t, { point: this, series: this.series }, e.chart)
                  );
                }),
                t
              );
            })()),
            (t.Point = e),
            t.Point
          );
        }
      ),
      e(
        i,
        "parts/Series.js",
        [
          i["mixins/legend-symbol.js"],
          i["parts/Globals.js"],
          i["parts/Point.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i, s) {
          "";
          var n = s.addEvent,
            o = s.animObject,
            r = s.arrayMax,
            a = s.arrayMin,
            h = s.clamp,
            l = s.correctFloat,
            c = s.defined,
            d = s.erase,
            p = s.error,
            u = s.extend,
            f = s.find,
            g = s.fireEvent,
            m = s.getNestedProperty,
            v = s.isArray,
            y = s.isFunction,
            x = s.isNumber,
            b = s.isString,
            k = s.merge,
            w = s.objectEach,
            M = s.pick,
            S = s.removeEvent,
            T = s.seriesType,
            C = s.splat,
            A = s.syncTimeout,
            D = e.defaultOptions,
            E = e.defaultPlotOptions,
            O = e.seriesTypes,
            L = e.SVGElement,
            P = e.win;
          e.Series = T(
            "line",
            null,
            {
              lineWidth: 2,
              allowPointSelect: !1,
              crisp: !0,
              showCheckbox: !1,
              animation: { duration: 1e3 },
              events: {},
              marker: {
                enabledThreshold: 2,
                lineColor: "#ffffff",
                lineWidth: 0,
                radius: 4,
                states: {
                  normal: { animation: !0 },
                  hover: {
                    animation: { duration: 50 },
                    enabled: !0,
                    radiusPlus: 2,
                    lineWidthPlus: 1,
                  },
                  select: {
                    fillColor: "#cccccc",
                    lineColor: "#000000",
                    lineWidth: 2,
                  },
                },
              },
              point: { events: {} },
              dataLabels: {
                align: "center",
                formatter: function () {
                  var t = this.series.chart.numberFormatter;
                  return "number" != typeof this.y ? "" : t(this.y, -1);
                },
                padding: 5,
                style: {
                  fontSize: "11px",
                  fontWeight: "bold",
                  color: "contrast",
                  textOutline: "1px contrast",
                },
                verticalAlign: "bottom",
                x: 0,
                y: 0,
              },
              cropThreshold: 300,
              opacity: 1,
              pointRange: 0,
              softThreshold: !0,
              states: {
                normal: { animation: !0 },
                hover: {
                  animation: { duration: 50 },
                  lineWidthPlus: 1,
                  marker: {},
                  halo: { size: 10, opacity: 0.25 },
                },
                select: { animation: { duration: 0 } },
                inactive: { animation: { duration: 50 }, opacity: 0.2 },
              },
              stickyTracking: !0,
              turboThreshold: 1e3,
              findNearestPointBy: "x",
            },
            {
              axisTypes: ["xAxis", "yAxis"],
              coll: "series",
              colorCounter: 0,
              cropShoulder: 1,
              directTouch: !1,
              eventsToUnbind: [],
              isCartesian: !0,
              parallelArrays: ["x", "y"],
              pointClass: i,
              requireSorting: !0,
              sorted: !0,
              init: function (t, e) {
                g(this, "init", { options: e });
                var i,
                  s = this,
                  o = t.series;
                (this.eventOptions = this.eventOptions || {}),
                  (s.chart = t),
                  (s.options = e = s.setOptions(e)),
                  (s.linkedSeries = []),
                  s.bindAxes(),
                  u(s, {
                    name: e.name,
                    state: "",
                    visible: !1 !== e.visible,
                    selected: !0 === e.selected,
                  });
                var r = e.events;
                w(r, function (t, e) {
                  y(t) &&
                    s.eventOptions[e] !== t &&
                    (y(s.eventOptions[e]) && S(s, e, s.eventOptions[e]),
                    (s.eventOptions[e] = t),
                    n(s, e, t));
                }),
                  ((r && r.click) ||
                    (e.point && e.point.events && e.point.events.click) ||
                    e.allowPointSelect) &&
                    (t.runTrackerClick = !0),
                  s.getColor(),
                  s.getSymbol(),
                  s.parallelArrays.forEach(function (t) {
                    s[t + "Data"] || (s[t + "Data"] = []);
                  }),
                  s.isCartesian && (t.hasCartesianSeries = !0),
                  o.length && (i = o[o.length - 1]),
                  (s._i = M(i && i._i, -1) + 1),
                  t.orderSeries(this.insert(o)),
                  e.dataSorting && e.dataSorting.enabled
                    ? s.setDataSortingOptions()
                    : s.points || s.data || s.setData(e.data, !1),
                  g(this, "afterInit");
              },
              is: function (t) {
                return O[t] && this instanceof O[t];
              },
              insert: function (t) {
                var e,
                  i = this.options.index;
                if (x(i)) {
                  for (e = t.length; e--; )
                    if (i >= M(t[e].options.index, t[e]._i)) {
                      t.splice(e + 1, 0, this);
                      break;
                    }
                  -1 === e && t.unshift(this), (e += 1);
                } else t.push(this);
                return M(e, t.length - 1);
              },
              bindAxes: function () {
                var t,
                  e = this,
                  i = e.options,
                  s = e.chart;
                g(this, "bindAxes", null, function () {
                  (e.axisTypes || []).forEach(function (n) {
                    s[n].forEach(function (s) {
                      (t = s.options),
                        (i[n] === t.index ||
                          (void 0 !== i[n] && i[n] === t.id) ||
                          (void 0 === i[n] && 0 === t.index)) &&
                          (e.insert(s.series), (e[n] = s), (s.isDirty = !0));
                    }),
                      e[n] || e.optionalAxis === n || p(18, !0, s);
                  });
                }),
                  g(this, "afterBindAxes");
              },
              updateParallelArrays: function (t, e) {
                var i = t.series,
                  s = arguments,
                  n = x(e)
                    ? function (s) {
                        var n = "y" === s && i.toYData ? i.toYData(t) : t[s];
                        i[s + "Data"][e] = n;
                      }
                    : function (t) {
                        Array.prototype[e].apply(
                          i[t + "Data"],
                          Array.prototype.slice.call(s, 2)
                        );
                      };
                i.parallelArrays.forEach(n);
              },
              hasData: function () {
                return (
                  (this.visible &&
                    void 0 !== this.dataMax &&
                    void 0 !== this.dataMin) ||
                  (this.visible && this.yData && 0 < this.yData.length)
                );
              },
              autoIncrement: function () {
                var t,
                  e = this.options,
                  i = this.xIncrement,
                  s = e.pointIntervalUnit,
                  n = this.chart.time;
                return (
                  (i = M(i, e.pointStart, 0)),
                  (this.pointInterval = t =
                    M(this.pointInterval, e.pointInterval, 1)),
                  s &&
                    ((e = new n.Date(i)),
                    "day" === s
                      ? n.set("Date", e, n.get("Date", e) + t)
                      : "month" === s
                      ? n.set("Month", e, n.get("Month", e) + t)
                      : "year" === s &&
                        n.set("FullYear", e, n.get("FullYear", e) + t),
                    (t = e.getTime() - i)),
                  (this.xIncrement = i + t),
                  i
                );
              },
              setDataSortingOptions: function () {
                var t = this.options;
                u(this, {
                  requireSorting: !1,
                  sorted: !1,
                  enabledDataSorting: !0,
                  allowDG: !1,
                }),
                  c(t.pointRange) || (t.pointRange = 1);
              },
              setOptions: function (t) {
                var e = this.chart,
                  i = e.options,
                  s = i.plotOptions,
                  n = e.userOptions || {};
                (t = k(t)), (e = e.styledMode);
                var o = { plotOptions: s, userOptions: t };
                g(this, "setOptions", o);
                var r = o.plotOptions[this.type],
                  a = n.plotOptions || {};
                return (
                  (this.userOptions = o.userOptions),
                  (n = k(
                    r,
                    s.series,
                    n.plotOptions && n.plotOptions[this.type],
                    t
                  )),
                  (this.tooltipOptions = k(
                    D.tooltip,
                    D.plotOptions.series && D.plotOptions.series.tooltip,
                    D.plotOptions[this.type].tooltip,
                    i.tooltip.userOptions,
                    s.series && s.series.tooltip,
                    s[this.type].tooltip,
                    t.tooltip
                  )),
                  (this.stickyTracking = M(
                    t.stickyTracking,
                    a[this.type] && a[this.type].stickyTracking,
                    a.series && a.series.stickyTracking,
                    !(!this.tooltipOptions.shared || this.noSharedTooltip) ||
                      n.stickyTracking
                  )),
                  null === r.marker && delete n.marker,
                  (this.zoneAxis = n.zoneAxis),
                  (i = this.zones = (n.zones || []).slice()),
                  (!n.negativeColor && !n.negativeFillColor) ||
                    n.zones ||
                    ((s = {
                      value: n[this.zoneAxis + "Threshold"] || n.threshold || 0,
                      className: "highcharts-negative",
                    }),
                    e ||
                      ((s.color = n.negativeColor),
                      (s.fillColor = n.negativeFillColor)),
                    i.push(s)),
                  i.length &&
                    c(i[i.length - 1].value) &&
                    i.push(
                      e ? {} : { color: this.color, fillColor: this.fillColor }
                    ),
                  g(this, "afterSetOptions", { options: n }),
                  n
                );
              },
              getName: function () {
                return M(this.options.name, "Series " + (this.index + 1));
              },
              getCyclic: function (t, e, i) {
                var s = this.chart,
                  n = this.userOptions,
                  o = t + "Index",
                  r = t + "Counter",
                  a = i
                    ? i.length
                    : M(s.options.chart[t + "Count"], s[t + "Count"]);
                if (!e) {
                  var h = M(n[o], n["_" + o]);
                  c(h) ||
                    (s.series.length || (s[r] = 0),
                    (n["_" + o] = h = s[r] % a),
                    (s[r] += 1)),
                    i && (e = i[h]);
                }
                void 0 !== h && (this[o] = h), (this[t] = e);
              },
              getColor: function () {
                this.chart.styledMode
                  ? this.getCyclic("color")
                  : this.options.colorByPoint
                  ? (this.options.color = null)
                  : this.getCyclic(
                      "color",
                      this.options.color || E[this.type].color,
                      this.chart.options.colors
                    );
              },
              getPointsCollection: function () {
                return (this.hasGroupedData ? this.points : this.data) || [];
              },
              getSymbol: function () {
                this.getCyclic(
                  "symbol",
                  this.options.marker.symbol,
                  this.chart.options.symbols
                );
              },
              findPointIndex: function (t, e) {
                var i,
                  s = t.id,
                  n = t.x,
                  o = this.points,
                  r = this.options.dataSorting;
                if (s) var a = this.chart.get(s);
                else if (this.linkedParent || this.enabledDataSorting) {
                  var h = r && r.matchByName ? "name" : "index";
                  if (
                    !(a = f(o, function (e) {
                      return !e.touched && e[h] === t[h];
                    }))
                  )
                    return;
                }
                if (a) {
                  var l = a && a.index;
                  void 0 !== l && (i = !0);
                }
                return (
                  void 0 === l && x(n) && (l = this.xData.indexOf(n, e)),
                  -1 !== l &&
                    void 0 !== l &&
                    this.cropped &&
                    (l = l >= this.cropStart ? l - this.cropStart : l),
                  !i && o[l] && o[l].touched && (l = void 0),
                  l
                );
              },
              drawLegendSymbol: t.drawLineMarker,
              updateData: function (t, e) {
                var i,
                  s,
                  n,
                  o = this.options,
                  a = o.dataSorting,
                  h = this.points,
                  l = [],
                  d = this.requireSorting,
                  p = t.length === h.length,
                  u = !0;
                if (
                  ((this.xIncrement = null),
                  t.forEach(function (t, e) {
                    var s =
                        (c(t) &&
                          this.pointClass.prototype.optionsToObject.call(
                            { series: this },
                            t
                          )) ||
                        {},
                      r = s.x;
                    s.id || x(r)
                      ? ((r = this.findPointIndex(s, n)),
                        -1 === r || void 0 === r
                          ? l.push(t)
                          : h[r] && t !== o.data[r]
                          ? (h[r].update(t, !1, null, !1),
                            (h[r].touched = !0),
                            d && (n = r + 1))
                          : h[r] && (h[r].touched = !0),
                        (!p ||
                          e !== r ||
                          (a && a.enabled) ||
                          this.hasDerivedData) &&
                          (i = !0))
                      : l.push(t);
                  }, this),
                  i)
                )
                  for (t = h.length; t--; )
                    (s = h[t]) && !s.touched && s.remove && s.remove(!1, e);
                else
                  !p || (a && a.enabled)
                    ? (u = !1)
                    : (t.forEach(function (t, e) {
                        h[e].update &&
                          t !== h[e].y &&
                          h[e].update(t, !1, null, !1);
                      }),
                      (l.length = 0));
                return (
                  h.forEach(function (t) {
                    t && (t.touched = !1);
                  }),
                  !!u &&
                    (l.forEach(function (t) {
                      this.addPoint(t, !1, null, null, !1);
                    }, this),
                    null === this.xIncrement &&
                      this.xData &&
                      this.xData.length &&
                      ((this.xIncrement = r(this.xData)), this.autoIncrement()),
                    !0)
                );
              },
              setData: function (t, e, i, s) {
                var n,
                  o = this,
                  r = o.points,
                  a = (r && r.length) || 0,
                  h = o.options,
                  l = o.chart,
                  c = h.dataSorting,
                  d = null,
                  u = o.xAxis;
                d = h.turboThreshold;
                var f,
                  g = this.xData,
                  m = this.yData,
                  y = (n = o.pointArrayMap) && n.length,
                  k = h.keys,
                  w = 0,
                  S = 1;
                if (
                  ((t = t || []),
                  (n = t.length),
                  (e = M(e, !0)),
                  c && c.enabled && (t = this.sortData(t)),
                  !1 !== s &&
                    n &&
                    a &&
                    !o.cropped &&
                    !o.hasGroupedData &&
                    o.visible &&
                    !o.isSeriesBoosting &&
                    (f = this.updateData(t, i)),
                  !f)
                ) {
                  if (
                    ((o.xIncrement = null),
                    (o.colorCounter = 0),
                    this.parallelArrays.forEach(function (t) {
                      o[t + "Data"].length = 0;
                    }),
                    d && n > d)
                  )
                    if (((d = o.getFirstValidPoint(t)), x(d)))
                      for (i = 0; i < n; i++)
                        (g[i] = this.autoIncrement()), (m[i] = t[i]);
                    else if (v(d))
                      if (y)
                        for (i = 0; i < n; i++)
                          (s = t[i]), (g[i] = s[0]), (m[i] = s.slice(1, y + 1));
                      else
                        for (
                          k &&
                            ((w = k.indexOf("x")),
                            (S = k.indexOf("y")),
                            (w = 0 <= w ? w : 0),
                            (S = 0 <= S ? S : 1)),
                            i = 0;
                          i < n;
                          i++
                        )
                          (s = t[i]), (g[i] = s[w]), (m[i] = s[S]);
                    else p(12, !1, l);
                  else
                    for (i = 0; i < n; i++)
                      void 0 !== t[i] &&
                        ((s = { series: o }),
                        o.pointClass.prototype.applyOptions.apply(s, [t[i]]),
                        o.updateParallelArrays(s, i));
                  for (
                    m && b(m[0]) && p(14, !0, l),
                      o.data = [],
                      o.options.data = o.userOptions.data = t,
                      i = a;
                    i--;

                  )
                    r[i] && r[i].destroy && r[i].destroy();
                  u && (u.minRange = u.userMinRange),
                    (o.isDirty = l.isDirtyBox = !0),
                    (o.isDirtyData = !!r),
                    (i = !1);
                }
                "point" === h.legendType &&
                  (this.processData(), this.generatePoints()),
                  e && l.redraw(i);
              },
              sortData: function (t) {
                var e = this,
                  i = e.options.dataSorting.sortKey || "y",
                  s = function (t, e) {
                    return (
                      (c(e) &&
                        t.pointClass.prototype.optionsToObject.call(
                          { series: t },
                          e
                        )) ||
                      {}
                    );
                  };
                return (
                  t.forEach(function (i, n) {
                    (t[n] = s(e, i)), (t[n].index = n);
                  }, this),
                  t
                    .concat()
                    .sort(function (t, e) {
                      return (
                        (t = m(i, t)), (e = m(i, e)), e < t ? -1 : e > t ? 1 : 0
                      );
                    })
                    .forEach(function (t, e) {
                      t.x = e;
                    }, this),
                  e.linkedSeries &&
                    e.linkedSeries.forEach(function (e) {
                      var i = e.options,
                        n = i.data;
                      (i.dataSorting && i.dataSorting.enabled) ||
                        !n ||
                        (n.forEach(function (i, o) {
                          (n[o] = s(e, i)),
                            t[o] && ((n[o].x = t[o].x), (n[o].index = o));
                        }),
                        e.setData(n, !1));
                    }),
                  t
                );
              },
              getProcessedData: function (t) {
                var e = this.xData,
                  i = this.yData,
                  s = e.length,
                  n = 0,
                  o = this.xAxis,
                  r = this.options,
                  a = r.cropThreshold,
                  h = t || this.getExtremesFromAll || r.getExtremesFromAll,
                  l = this.isCartesian;
                (t = o && o.val2lin), (r = !(!o || !o.logarithmic));
                var c = this.requireSorting;
                if (o) {
                  o = o.getExtremes();
                  var d = o.min,
                    u = o.max;
                }
                if (l && this.sorted && !h && (!a || s > a || this.forceCrop))
                  if (e[s - 1] < d || e[0] > u) (e = []), (i = []);
                  else if (this.yData && (e[0] < d || e[s - 1] > u)) {
                    (n = this.cropData(this.xData, this.yData, d, u)),
                      (e = n.xData),
                      (i = n.yData),
                      (n = n.start);
                    var f = !0;
                  }
                for (a = e.length || 1; --a; )
                  if (
                    0 < (s = r ? t(e[a]) - t(e[a - 1]) : e[a] - e[a - 1]) &&
                    (void 0 === g || s < g)
                  )
                    var g = s;
                  else 0 > s && c && (p(15, !1, this.chart), (c = !1));
                return {
                  xData: e,
                  yData: i,
                  cropped: f,
                  cropStart: n,
                  closestPointRange: g,
                };
              },
              processData: function (t) {
                var e = this.xAxis;
                if (
                  this.isCartesian &&
                  !this.isDirty &&
                  !e.isDirty &&
                  !this.yAxis.isDirty &&
                  !t
                )
                  return !1;
                (t = this.getProcessedData()),
                  (this.cropped = t.cropped),
                  (this.cropStart = t.cropStart),
                  (this.processedXData = t.xData),
                  (this.processedYData = t.yData),
                  (this.closestPointRange = this.basePointRange =
                    t.closestPointRange);
              },
              cropData: function (t, e, i, s, n) {
                var o,
                  r = t.length,
                  a = 0,
                  h = r;
                for (n = M(n, this.cropShoulder), o = 0; o < r; o++)
                  if (t[o] >= i) {
                    a = Math.max(0, o - n);
                    break;
                  }
                for (i = o; i < r; i++)
                  if (t[i] > s) {
                    h = i + n;
                    break;
                  }
                return {
                  xData: t.slice(a, h),
                  yData: e.slice(a, h),
                  start: a,
                  end: h,
                };
              },
              generatePoints: function () {
                var t,
                  e = this.options,
                  i = e.data,
                  s = this.data,
                  n = this.processedXData,
                  o = this.processedYData,
                  r = this.pointClass,
                  a = n.length,
                  h = this.cropStart || 0,
                  l = this.hasGroupedData;
                e = e.keys;
                var c,
                  d = [];
                for (
                  s ||
                    l ||
                    ((s = []), (s.length = i.length), (s = this.data = s)),
                    e && l && (this.options.keys = !1),
                    c = 0;
                  c < a;
                  c++
                ) {
                  var p = h + c;
                  if (l) {
                    var f = new r().init(this, [n[c]].concat(C(o[c])));
                    (f.dataGroup = this.groupMap[c]),
                      f.dataGroup.options &&
                        ((f.options = f.dataGroup.options),
                        u(f, f.dataGroup.options),
                        delete f.dataLabels);
                  } else
                    (f = s[p]) ||
                      void 0 === i[p] ||
                      (s[p] = f = new r().init(this, i[p], n[c]));
                  f && ((f.index = p), (d[c] = f));
                }
                if (((this.options.keys = e), s && (a !== (t = s.length) || l)))
                  for (c = 0; c < t; c++)
                    c !== h || l || (c += a),
                      s[c] && (s[c].destroyElements(), (s[c].plotX = void 0));
                (this.data = s),
                  (this.points = d),
                  g(this, "afterGeneratePoints");
              },
              getXExtremes: function (t) {
                return { min: a(t), max: r(t) };
              },
              getExtremes: function (t, e) {
                var i,
                  s = this.xAxis,
                  n = this.yAxis,
                  o = this.processedXData || this.xData,
                  h = [],
                  l = 0,
                  c = 0,
                  d = 0,
                  p = this.requireSorting ? this.cropShoulder : 0,
                  u = !!n && n.positiveValuesOnly;
                for (
                  t = t || this.stackedYData || this.processedYData || [],
                    n = t.length,
                    s && ((d = s.getExtremes()), (c = d.min), (d = d.max)),
                    i = 0;
                  i < n;
                  i++
                ) {
                  var f = o[i],
                    m = t[i],
                    y = (x(m) || v(m)) && (m.length || 0 < m || !u);
                  if (
                    ((f =
                      e ||
                      this.getExtremesFromAll ||
                      this.options.getExtremesFromAll ||
                      this.cropped ||
                      !s ||
                      ((o[i + p] || f) >= c && (o[i - p] || f) <= d)),
                    y && f)
                  )
                    if ((y = m.length))
                      for (; y--; ) x(m[y]) && (h[l++] = m[y]);
                    else h[l++] = m;
                }
                return (
                  (t = { dataMin: a(h), dataMax: r(h) }),
                  g(this, "afterGetExtremes", { dataExtremes: t }),
                  t
                );
              },
              applyExtremes: function () {
                var t = this.getExtremes();
                return (
                  (this.dataMin = t.dataMin), (this.dataMax = t.dataMax), t
                );
              },
              getFirstValidPoint: function (t) {
                for (var e = null, i = t.length, s = 0; null === e && s < i; )
                  (e = t[s]), s++;
                return e;
              },
              translate: function () {
                this.processedXData || this.processData(),
                  this.generatePoints();
                var t,
                  e,
                  i = this.options,
                  s = i.stacking,
                  n = this.xAxis,
                  o = n.categories,
                  r = this.enabledDataSorting,
                  a = this.yAxis,
                  d = this.points,
                  p = d.length,
                  u = !!this.modifyValue,
                  f = this.pointPlacementToXValue(),
                  m = !!f,
                  y = i.threshold,
                  b = i.startFromThreshold ? y : 0,
                  k = this.zoneAxis || "y",
                  w = Number.MAX_VALUE;
                for (t = 0; t < p; t++) {
                  var S = d[t],
                    T = S.x,
                    C = S.y,
                    A = S.low,
                    D =
                      s &&
                      a.stacking &&
                      a.stacking.stacks[
                        (this.negStacks && C < (b ? 0 : y) ? "-" : "") +
                          this.stackKey
                      ];
                  if (
                    (a.positiveValuesOnly &&
                      null !== C &&
                      0 >= C &&
                      (S.isNull = !0),
                    (S.plotX = e =
                      l(
                        h(
                          n.translate(T, 0, 0, 0, 1, f, "flags" === this.type),
                          -1e5,
                          1e5
                        )
                      )),
                    s && this.visible && D && D[T])
                  ) {
                    var E = this.getStackIndicator(E, T, this.index);
                    if (!S.isNull)
                      var O = D[T],
                        L = O.points[E.key];
                  }
                  if (
                    (v(L) &&
                      ((A = L[0]),
                      (C = L[1]),
                      A === b &&
                        E.key === D[T].base &&
                        (A = M(x(y) && y, a.min)),
                      a.positiveValuesOnly && 0 >= A && (A = null),
                      (S.total = S.stackTotal = O.total),
                      (S.percentage = O.total && (S.y / O.total) * 100),
                      (S.stackY = C),
                      this.irregularWidths ||
                        O.setOffset(this.pointXOffset || 0, this.barW || 0)),
                    (S.yBottom = c(A)
                      ? h(a.translate(A, 0, 1, 0, 1), -1e5, 1e5)
                      : null),
                    u && (C = this.modifyValue(C, S)),
                    (S.plotY =
                      "number" == typeof C && 1 / 0 !== C
                        ? h(a.translate(C, 0, 1, 0, 1), -1e5, 1e5)
                        : void 0),
                    (S.isInside = this.isPointInside(S)),
                    (S.clientX = m ? l(n.translate(T, 0, 0, 0, 1, f)) : e),
                    (S.negative = S[k] < (i[k + "Threshold"] || y || 0)),
                    (S.category = o && void 0 !== o[S.x] ? o[S.x] : S.x),
                    !S.isNull && !1 !== S.visible)
                  ) {
                    void 0 !== P && (w = Math.min(w, Math.abs(e - P)));
                    var P = e;
                  }
                  (S.zone = this.zones.length && S.getZone()),
                    !S.graphic && this.group && r && (S.isNew = !0);
                }
                (this.closestPointRangePx = w), g(this, "afterTranslate");
              },
              getValidPoints: function (t, e, i) {
                var s = this.chart;
                return (t || this.points || []).filter(function (t) {
                  return (
                    !(e && !s.isInsidePlot(t.plotX, t.plotY, s.inverted)) &&
                    !1 !== t.visible &&
                    (i || !t.isNull)
                  );
                });
              },
              getClipBox: function (t, e) {
                var i = this.options,
                  s = this.chart,
                  n = s.inverted,
                  o = this.xAxis,
                  r = o && this.yAxis;
                return (
                  t && !1 === i.clip && r
                    ? (t = n
                        ? {
                            y: -s.chartWidth + r.len + r.pos,
                            height: s.chartWidth,
                            width: s.chartHeight,
                            x: -s.chartHeight + o.len + o.pos,
                          }
                        : {
                            y: -r.pos,
                            height: s.chartHeight,
                            width: s.chartWidth,
                            x: -o.pos,
                          })
                    : ((t = this.clipBox || s.clipBox),
                      e && ((t.width = s.plotSizeX), (t.x = 0))),
                  e ? { width: t.width, x: t.x } : t
                );
              },
              setClip: function (t) {
                var e = this.chart,
                  i = this.options,
                  s = e.renderer,
                  n = e.inverted,
                  o = this.clipBox,
                  r = this.getClipBox(t),
                  a =
                    this.sharedClipKey ||
                    [
                      "_sharedClip",
                      t && t.duration,
                      t && t.easing,
                      r.height,
                      i.xAxis,
                      i.yAxis,
                    ].join(),
                  h = e[a],
                  l = e[a + "m"];
                t &&
                  ((r.width = 0),
                  n && (r.x = e.plotHeight + (!1 !== i.clip ? 0 : e.plotTop))),
                  h
                    ? e.hasLoaded || h.attr(r)
                    : (t &&
                        (e[a + "m"] = l =
                          s.clipRect(
                            n ? e.plotSizeX + 99 : -99,
                            n ? -e.plotLeft : -e.plotTop,
                            99,
                            n ? e.chartWidth : e.chartHeight
                          )),
                      (e[a] = h = s.clipRect(r)),
                      (h.count = { length: 0 })),
                  t &&
                    !h.count[this.index] &&
                    ((h.count[this.index] = !0), (h.count.length += 1)),
                  (!1 !== i.clip || t) &&
                    (this.group.clip(t || o ? h : e.clipRect),
                    this.markerGroup.clip(l),
                    (this.sharedClipKey = a)),
                  t ||
                    (h.count[this.index] &&
                      (delete h.count[this.index], --h.count.length),
                    0 === h.count.length &&
                      a &&
                      e[a] &&
                      (o || (e[a] = e[a].destroy()),
                      e[a + "m"] && (e[a + "m"] = e[a + "m"].destroy())));
              },
              animate: function (t) {
                var e = this.chart,
                  i = o(this.options.animation);
                if (!e.hasRendered)
                  if (t) this.setClip(i);
                  else {
                    var s = this.sharedClipKey;
                    t = e[s];
                    var n = this.getClipBox(i, !0);
                    t && t.animate(n, i),
                      e[s + "m"] &&
                        e[s + "m"].animate(
                          {
                            width: n.width + 99,
                            x: n.x - (e.inverted ? 0 : 99),
                          },
                          i
                        );
                  }
              },
              afterAnimate: function () {
                this.setClip(),
                  g(this, "afterAnimate"),
                  (this.finishedAnimating = !0);
              },
              drawPoints: function () {
                var t,
                  e,
                  i = this.points,
                  s = this.chart,
                  n = this.options.marker,
                  o = this[this.specialGroup] || this.markerGroup,
                  r = this.xAxis,
                  a = M(
                    n.enabled,
                    !(r && !r.isRadial) || null,
                    this.closestPointRangePx >= n.enabledThreshold * n.radius
                  );
                if (!1 !== n.enabled || this._hasPointMarkers)
                  for (t = 0; t < i.length; t++) {
                    var h = i[t],
                      l = (e = h.graphic) ? "animate" : "attr",
                      c = h.marker || {},
                      d = !!h.marker;
                    if (
                      ((a && void 0 === c.enabled) || c.enabled) &&
                      !h.isNull &&
                      !1 !== h.visible
                    ) {
                      var p = M(c.symbol, this.symbol),
                        u = this.markerAttribs(h, h.selected && "select");
                      this.enabledDataSorting &&
                        (h.startXPos = r.reversed ? -u.width : r.width);
                      var f = !1 !== h.isInside;
                      e
                        ? e[f ? "show" : "hide"](f).animate(u)
                        : f &&
                          (0 < u.width || h.hasImage) &&
                          ((h.graphic = e =
                            s.renderer
                              .symbol(p, u.x, u.y, u.width, u.height, d ? c : n)
                              .add(o)),
                          this.enabledDataSorting &&
                            s.hasRendered &&
                            (e.attr({ x: h.startXPos }), (l = "animate"))),
                        e &&
                          "animate" === l &&
                          e[f ? "show" : "hide"](f).animate(u),
                        e &&
                          !s.styledMode &&
                          e[l](this.pointAttribs(h, h.selected && "select")),
                        e && e.addClass(h.getClassName(), !0);
                    } else e && (h.graphic = e.destroy());
                  }
              },
              markerAttribs: function (t, e) {
                var i = this.options,
                  s = i.marker,
                  n = t.marker || {},
                  o = n.symbol || s.symbol,
                  r = M(n.radius, s.radius);
                return (
                  e &&
                    ((s = s.states[e]),
                    (e = n.states && n.states[e]),
                    (r = M(
                      e && e.radius,
                      s && s.radius,
                      r + ((s && s.radiusPlus) || 0)
                    ))),
                  (t.hasImage = o && 0 === o.indexOf("url")),
                  t.hasImage && (r = 0),
                  (t = {
                    x: i.crisp ? Math.floor(t.plotX) - r : t.plotX - r,
                    y: t.plotY - r,
                  }),
                  r && (t.width = t.height = 2 * r),
                  t
                );
              },
              pointAttribs: function (t, e) {
                var i = this.options.marker,
                  s = t && t.options,
                  n = (s && s.marker) || {},
                  o = this.color,
                  r = s && s.color,
                  a = t && t.color;
                s = M(n.lineWidth, i.lineWidth);
                var h = t && t.zone && t.zone.color;
                return (
                  (t = 1),
                  (o = r || h || a || o),
                  (r = n.fillColor || i.fillColor || o),
                  (o = n.lineColor || i.lineColor || o),
                  (e = e || "normal"),
                  (i = i.states[e]),
                  (e = (n.states && n.states[e]) || {}),
                  (s = M(
                    e.lineWidth,
                    i.lineWidth,
                    s + M(e.lineWidthPlus, i.lineWidthPlus, 0)
                  )),
                  (r = e.fillColor || i.fillColor || r),
                  (o = e.lineColor || i.lineColor || o),
                  (t = M(e.opacity, i.opacity, t)),
                  { stroke: o, "stroke-width": s, fill: r, opacity: t }
                );
              },
              destroy: function (t) {
                var e,
                  i,
                  n,
                  o,
                  r = this,
                  a = r.chart,
                  h = /AppleWebKit\/533/.test(P.navigator.userAgent),
                  l = r.data || [];
                for (
                  g(r, "destroy"),
                    this.removeEvents(t),
                    (r.axisTypes || []).forEach(function (t) {
                      (o = r[t]) &&
                        o.series &&
                        (d(o.series, r), (o.isDirty = o.forceRedraw = !0));
                    }),
                    r.legendItem && r.chart.legend.destroyItem(r),
                    i = l.length;
                  i--;

                )
                  (n = l[i]) && n.destroy && n.destroy();
                (r.points = null),
                  s.clearTimeout(r.animationTimeout),
                  w(r, function (t, i) {
                    t instanceof L &&
                      !t.survive &&
                      ((e = h && "group" === i ? "hide" : "destroy"), t[e]());
                  }),
                  a.hoverSeries === r && (a.hoverSeries = null),
                  d(a.series, r),
                  a.orderSeries(),
                  w(r, function (e, i) {
                    (t && "hcEvents" === i) || delete r[i];
                  });
              },
              getGraphPath: function (t, e, i) {
                var s,
                  n,
                  o = this,
                  r = o.options,
                  a = r.step,
                  h = [],
                  l = [];
                return (
                  (t = t || o.points),
                  (s = t.reversed) && t.reverse(),
                  (a = { right: 1, center: 2 }[a] || (a && 3)) &&
                    s &&
                    (a = 4 - a),
                  (t = this.getValidPoints(
                    t,
                    !1,
                    !(r.connectNulls && !e && !i)
                  )),
                  t.forEach(function (s, d) {
                    var p = s.plotX,
                      u = s.plotY,
                      f = t[d - 1];
                    (s.leftCliff || (f && f.rightCliff)) && !i && (n = !0),
                      s.isNull && !c(e) && 0 < d
                        ? (n = !r.connectNulls)
                        : s.isNull && !e
                        ? (n = !0)
                        : (0 === d || n
                            ? (d = [["M", s.plotX, s.plotY]])
                            : o.getPointSpline
                            ? (d = [o.getPointSpline(t, s, d)])
                            : a
                            ? ((d =
                                1 === a
                                  ? [["L", f.plotX, u]]
                                  : 2 === a
                                  ? [
                                      ["L", (f.plotX + p) / 2, f.plotY],
                                      ["L", (f.plotX + p) / 2, u],
                                    ]
                                  : [["L", p, f.plotY]]),
                              d.push(["L", p, u]))
                            : (d = [["L", p, u]]),
                          l.push(s.x),
                          a && (l.push(s.x), 2 === a && l.push(s.x)),
                          h.push.apply(h, d),
                          (n = !1));
                  }),
                  (h.xMap = l),
                  (o.graphPath = h)
                );
              },
              drawGraph: function () {
                var t = this,
                  e = this.options,
                  i = (this.gappedPath || this.getGraphPath).call(this),
                  s = this.chart.styledMode,
                  n = [["graph", "highcharts-graph"]];
                s ||
                  n[0].push(
                    e.lineColor || this.color || "#cccccc",
                    e.dashStyle
                  ),
                  (n = t.getZonesGraphs(n)),
                  n.forEach(function (n, o) {
                    var r = n[0],
                      a = t[r],
                      h = a ? "animate" : "attr";
                    a
                      ? ((a.endX = t.preventGraphAnimation ? null : i.xMap),
                        a.animate({ d: i }))
                      : i.length &&
                        (t[r] = a =
                          t.chart.renderer
                            .path(i)
                            .addClass(n[1])
                            .attr({ zIndex: 1 })
                            .add(t.group)),
                      a &&
                        !s &&
                        ((r = {
                          stroke: n[2],
                          "stroke-width": e.lineWidth,
                          fill: (t.fillGraph && t.color) || "none",
                        }),
                        n[3]
                          ? (r.dashstyle = n[3])
                          : "square" !== e.linecap &&
                            (r["stroke-linecap"] = r["stroke-linejoin"] =
                              "round"),
                        a[h](r).shadow(2 > o && e.shadow)),
                      a && ((a.startX = i.xMap), (a.isArea = i.isArea));
                  });
              },
              getZonesGraphs: function (t) {
                return (
                  this.zones.forEach(function (e, i) {
                    (i = [
                      "zone-graph-" + i,
                      "highcharts-graph highcharts-zone-graph-" +
                        i +
                        " " +
                        (e.className || ""),
                    ]),
                      this.chart.styledMode ||
                        i.push(
                          e.color || this.color,
                          e.dashStyle || this.options.dashStyle
                        ),
                      t.push(i);
                  }, this),
                  t
                );
              },
              applyZones: function () {
                var t,
                  e,
                  i,
                  s,
                  n,
                  o,
                  r,
                  a,
                  l = this,
                  c = this.chart,
                  d = c.renderer,
                  p = this.zones,
                  u = this.clips || [],
                  f = this.graph,
                  g = this.area,
                  m = Math.max(c.chartWidth, c.chartHeight),
                  v = this[(this.zoneAxis || "y") + "Axis"],
                  y = c.inverted,
                  x = !1;
                if (p.length && (f || g) && v && void 0 !== v.min) {
                  var b = v.reversed,
                    k = v.horiz;
                  f && !this.showLine && f.hide(), g && g.hide();
                  var w = v.getExtremes();
                  p.forEach(function (p, S) {
                    (t = b
                      ? k
                        ? c.plotWidth
                        : 0
                      : k
                      ? 0
                      : v.toPixels(w.min) || 0),
                      (t = h(M(e, t), 0, m)),
                      (e = h(
                        Math.round(v.toPixels(M(p.value, w.max), !0) || 0),
                        0,
                        m
                      )),
                      x && (t = e = v.toPixels(w.max)),
                      (s = Math.abs(t - e)),
                      (n = Math.min(t, e)),
                      (o = Math.max(t, e)),
                      v.isXAxis
                        ? ((i = { x: y ? o : n, y: 0, width: s, height: m }),
                          k || (i.x = c.plotHeight - i.x))
                        : ((i = { x: 0, y: y ? o : n, width: m, height: s }),
                          k && (i.y = c.plotWidth - i.y)),
                      y &&
                        d.isVML &&
                        (i = v.isXAxis
                          ? {
                              x: 0,
                              y: b ? n : o,
                              height: i.width,
                              width: c.chartWidth,
                            }
                          : {
                              x: i.y - c.plotLeft - c.spacingBox.x,
                              y: 0,
                              width: i.height,
                              height: c.chartHeight,
                            }),
                      u[S] ? u[S].animate(i) : (u[S] = d.clipRect(i)),
                      (r = l["zone-area-" + S]),
                      (a = l["zone-graph-" + S]),
                      f && a && a.clip(u[S]),
                      g && r && r.clip(u[S]),
                      (x = p.value > w.max),
                      l.resetZones && 0 === e && (e = void 0);
                  }),
                    (this.clips = u);
                } else l.visible && (f && f.show(!0), g && g.show(!0));
              },
              invertGroups: function (t) {
                function e() {
                  ["group", "markerGroup"].forEach(function (e) {
                    i[e] &&
                      (s.renderer.isVML &&
                        i[e].attr({ width: i.yAxis.len, height: i.xAxis.len }),
                      (i[e].width = i.yAxis.len),
                      (i[e].height = i.xAxis.len),
                      i[e].invert(!i.isRadialSeries && t));
                  });
                }
                var i = this,
                  s = i.chart;
                i.xAxis &&
                  (i.eventsToUnbind.push(n(s, "resize", e)),
                  e(),
                  (i.invertGroups = e));
              },
              plotGroup: function (t, e, i, s, n) {
                var o = this[t],
                  r = !o;
                return (
                  r &&
                    (this[t] = o =
                      this.chart.renderer
                        .g()
                        .attr({ zIndex: s || 0.1 })
                        .add(n)),
                  o.addClass(
                    "highcharts-" +
                      e +
                      " highcharts-series-" +
                      this.index +
                      " highcharts-" +
                      this.type +
                      "-series " +
                      (c(this.colorIndex)
                        ? "highcharts-color-" + this.colorIndex + " "
                        : "") +
                      (this.options.className || "") +
                      (o.hasClass("highcharts-tracker")
                        ? " highcharts-tracker"
                        : ""),
                    !0
                  ),
                  o
                    .attr({ visibility: i })
                    [r ? "attr" : "animate"](this.getPlotBox()),
                  o
                );
              },
              getPlotBox: function () {
                var t = this.chart,
                  e = this.xAxis,
                  i = this.yAxis;
                return (
                  t.inverted && ((e = i), (i = this.xAxis)),
                  {
                    translateX: e ? e.left : t.plotLeft,
                    translateY: i ? i.top : t.plotTop,
                    scaleX: 1,
                    scaleY: 1,
                  }
                );
              },
              removeEvents: function (t) {
                t
                  ? this.eventsToUnbind.length &&
                    (this.eventsToUnbind.forEach(function (t) {
                      t();
                    }),
                    (this.eventsToUnbind.length = 0))
                  : S(this);
              },
              render: function () {
                var t = this,
                  e = t.chart,
                  i = t.options,
                  s =
                    !t.finishedAnimating &&
                    e.renderer.isSVG &&
                    o(i.animation).duration,
                  n = t.visible ? "inherit" : "hidden",
                  r = i.zIndex,
                  a = t.hasRendered,
                  h = e.seriesGroup,
                  l = e.inverted;
                g(this, "render");
                var c = t.plotGroup("group", "series", n, r, h);
                (t.markerGroup = t.plotGroup(
                  "markerGroup",
                  "markers",
                  n,
                  r,
                  h
                )),
                  s && t.animate && t.animate(!0),
                  (c.inverted = !(!t.isCartesian && !t.invertable) && l),
                  t.drawGraph && (t.drawGraph(), t.applyZones()),
                  t.visible && t.drawPoints(),
                  t.drawDataLabels && t.drawDataLabels(),
                  t.redrawPoints && t.redrawPoints(),
                  t.drawTracker &&
                    !1 !== t.options.enableMouseTracking &&
                    t.drawTracker(),
                  t.invertGroups(l),
                  !1 === i.clip || t.sharedClipKey || a || c.clip(e.clipRect),
                  s && t.animate && t.animate(),
                  a ||
                    (t.animationTimeout = A(function () {
                      t.afterAnimate();
                    }, s || 0)),
                  (t.isDirty = !1),
                  (t.hasRendered = !0),
                  g(t, "afterRender");
              },
              redraw: function () {
                var t = this.chart,
                  e = this.isDirty || this.isDirtyData,
                  i = this.group,
                  s = this.xAxis,
                  n = this.yAxis;
                i &&
                  (t.inverted &&
                    i.attr({ width: t.plotWidth, height: t.plotHeight }),
                  i.animate({
                    translateX: M(s && s.left, t.plotLeft),
                    translateY: M(n && n.top, t.plotTop),
                  })),
                  this.translate(),
                  this.render(),
                  e && delete this.kdTree;
              },
              kdAxisArray: ["clientX", "plotY"],
              searchPoint: function (t, e) {
                var i = this.xAxis,
                  s = this.yAxis,
                  n = this.chart.inverted;
                return this.searchKDTree(
                  {
                    clientX: n ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                    plotY: n ? s.len - t.chartX + s.pos : t.chartY - s.pos,
                  },
                  e,
                  t
                );
              },
              buildKDTree: function (t) {
                function e(t, s, n) {
                  var o;
                  if ((o = t && t.length)) {
                    var r = i.kdAxisArray[s % n];
                    return (
                      t.sort(function (t, e) {
                        return t[r] - e[r];
                      }),
                      (o = Math.floor(o / 2)),
                      {
                        point: t[o],
                        left: e(t.slice(0, o), s + 1, n),
                        right: e(t.slice(o + 1), s + 1, n),
                      }
                    );
                  }
                }
                this.buildingKdTree = !0;
                var i = this,
                  s = -1 < i.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                delete i.kdTree,
                  A(
                    function () {
                      (i.kdTree = e(
                        i.getValidPoints(null, !i.directTouch),
                        s,
                        s
                      )),
                        (i.buildingKdTree = !1);
                    },
                    i.options.kdNow || (t && "touchstart" === t.type) ? 0 : 1
                  );
              },
              searchKDTree: function (t, e, i) {
                function s(t, e, i, h) {
                  var l = e.point,
                    d = n.kdAxisArray[i % h],
                    p = l,
                    u = c(t[o]) && c(l[o]) ? Math.pow(t[o] - l[o], 2) : null,
                    f = c(t[r]) && c(l[r]) ? Math.pow(t[r] - l[r], 2) : null;
                  return (
                    (f = (u || 0) + (f || 0)),
                    (l.dist = c(f) ? Math.sqrt(f) : Number.MAX_VALUE),
                    (l.distX = c(u) ? Math.sqrt(u) : Number.MAX_VALUE),
                    (d = t[d] - l[d]),
                    (f = 0 > d ? "left" : "right"),
                    (u = 0 > d ? "right" : "left"),
                    e[f] &&
                      ((f = s(t, e[f], i + 1, h)), (p = f[a] < p[a] ? f : l)),
                    e[u] &&
                      Math.sqrt(d * d) < p[a] &&
                      ((t = s(t, e[u], i + 1, h)), (p = t[a] < p[a] ? t : p)),
                    p
                  );
                }
                var n = this,
                  o = this.kdAxisArray[0],
                  r = this.kdAxisArray[1],
                  a = e ? "distX" : "dist";
                if (
                  ((e = -1 < n.options.findNearestPointBy.indexOf("y") ? 2 : 1),
                  this.kdTree || this.buildingKdTree || this.buildKDTree(i),
                  this.kdTree)
                )
                  return s(t, this.kdTree, e, e);
              },
              pointPlacementToXValue: function () {
                var t = this.options,
                  e = t.pointRange,
                  i = this.xAxis;
                return (
                  (t = t.pointPlacement),
                  "between" === t && (t = i.reversed ? -0.5 : 0.5),
                  x(t) ? t * M(e, i.pointRange) : 0
                );
              },
              isPointInside: function (t) {
                return (
                  void 0 !== t.plotY &&
                  void 0 !== t.plotX &&
                  0 <= t.plotY &&
                  t.plotY <= this.yAxis.len &&
                  0 <= t.plotX &&
                  t.plotX <= this.xAxis.len
                );
              },
            }
          );
        }
      ),
      e(
        i,
        "parts/Stacking.js",
        [
          i["parts/Axis.js"],
          i["parts/Globals.js"],
          i["parts/StackingAxis.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i, s) {
          var n = s.correctFloat,
            o = s.defined,
            r = s.destroyObjectProperties,
            a = s.format,
            h = s.pick;
          s = e.Chart;
          var l = e.Series,
            c = (function () {
              function t(t, e, i, s, n) {
                var o = t.chart.inverted;
                (this.axis = t),
                  (this.isNegative = i),
                  (this.options = e = e || {}),
                  (this.x = s),
                  (this.total = null),
                  (this.points = {}),
                  (this.stack = n),
                  (this.rightCliff = this.leftCliff = 0),
                  (this.alignOptions = {
                    align: e.align || (o ? (i ? "left" : "right") : "center"),
                    verticalAlign:
                      e.verticalAlign || (o ? "middle" : i ? "bottom" : "top"),
                    y: e.y,
                    x: e.x,
                  }),
                  (this.textAlign =
                    e.textAlign || (o ? (i ? "right" : "left") : "center"));
              }
              return (
                (t.prototype.destroy = function () {
                  r(this, this.axis);
                }),
                (t.prototype.render = function (t) {
                  var e = this.axis.chart,
                    i = this.options,
                    s = i.format;
                  (s = s ? a(s, this, e) : i.formatter.call(this)),
                    this.label
                      ? this.label.attr({ text: s, visibility: "hidden" })
                      : ((this.label = e.renderer.label(
                          s,
                          null,
                          null,
                          i.shape,
                          null,
                          null,
                          i.useHTML,
                          !1,
                          "stack-labels"
                        )),
                        (s = {
                          r: i.borderRadius || 0,
                          text: s,
                          rotation: i.rotation,
                          padding: h(i.padding, 5),
                          visibility: "hidden",
                        }),
                        e.styledMode ||
                          ((s.fill = i.backgroundColor),
                          (s.stroke = i.borderColor),
                          (s["stroke-width"] = i.borderWidth),
                          this.label.css(i.style)),
                        this.label.attr(s),
                        this.label.added || this.label.add(t)),
                    (this.label.labelrank = e.plotHeight);
                }),
                (t.prototype.setOffset = function (t, e, i, s, n) {
                  var r = this.axis,
                    a = r.chart;
                  (s = r.translate(
                    r.stacking.usePercentage ? 100 : s || this.total,
                    0,
                    0,
                    0,
                    1
                  )),
                    (i = r.translate(i || 0)),
                    (i = o(s) && Math.abs(s - i)),
                    (t = h(n, a.xAxis[0].translate(this.x)) + t),
                    (r = o(s) && this.getStackBox(a, this, t, s, e, i, r)),
                    (e = this.label),
                    (i = this.isNegative),
                    (t = "justify" === h(this.options.overflow, "justify"));
                  var c = this.textAlign;
                  e &&
                    r &&
                    ((n = e.getBBox()),
                    (s = e.padding),
                    (c =
                      "left" === c
                        ? a.inverted
                          ? -s
                          : s
                        : "right" === c
                        ? n.width
                        : a.inverted && "center" === c
                        ? n.width / 2
                        : a.inverted
                        ? i
                          ? n.width + s
                          : -s
                        : n.width / 2),
                    (i = a.inverted ? n.height / 2 : i ? -s : n.height),
                    (this.alignOptions.x = h(this.options.x, 0)),
                    (this.alignOptions.y = h(this.options.y, 0)),
                    (r.x -= c),
                    (r.y -= i),
                    e.align(this.alignOptions, null, r),
                    a.isInsidePlot(
                      e.alignAttr.x + c - this.alignOptions.x,
                      e.alignAttr.y + i - this.alignOptions.y
                    )
                      ? e.show()
                      : ((e.alignAttr.y = -9999), (t = !1)),
                    t &&
                      l.prototype.justifyDataLabel.call(
                        this.axis,
                        e,
                        this.alignOptions,
                        e.alignAttr,
                        n,
                        r
                      ),
                    e.attr({ x: e.alignAttr.x, y: e.alignAttr.y }),
                    h(!t && this.options.crop, !0) &&
                      ((a =
                        a.isInsidePlot(e.x - s + e.width, e.y) &&
                        a.isInsidePlot(e.x + s, e.y)) ||
                        e.hide()));
                }),
                (t.prototype.getStackBox = function (t, e, i, s, n, o, r) {
                  var a = e.axis.reversed,
                    h = t.inverted,
                    l = r.height + r.pos - (h ? t.plotLeft : t.plotTop);
                  return (
                    (e = (e.isNegative && !a) || (!e.isNegative && a)),
                    {
                      x: h
                        ? e
                          ? s - r.right
                          : s - o + r.pos - t.plotLeft
                        : i + t.xAxis[0].transB - t.plotLeft,
                      y: h ? r.height - i - n : e ? l - s - o : l - s,
                      width: h ? o : n,
                      height: h ? n : o,
                    }
                  );
                }),
                t
              );
            })();
          return (
            (s.prototype.getStacks = function () {
              var t = this,
                e = t.inverted;
              t.yAxis.forEach(function (t) {
                t.stacking &&
                  t.stacking.stacks &&
                  t.hasVisibleSeries &&
                  (t.stacking.oldStacks = t.stacking.stacks);
              }),
                t.series.forEach(function (i) {
                  var s = (i.xAxis && i.xAxis.options) || {};
                  !i.options.stacking ||
                    (!0 !== i.visible &&
                      !1 !== t.options.chart.ignoreHiddenSeries) ||
                    (i.stackKey = [
                      i.type,
                      h(i.options.stack, ""),
                      e ? s.top : s.left,
                      e ? s.height : s.width,
                    ].join());
                });
            }),
            i.compose(t),
            (l.prototype.setStackedPoints = function () {
              if (
                this.options.stacking &&
                (!0 === this.visible ||
                  !1 === this.chart.options.chart.ignoreHiddenSeries)
              ) {
                var t = this.processedXData,
                  e = this.processedYData,
                  i = [],
                  s = e.length,
                  r = this.options,
                  a = r.threshold,
                  l = h(r.startFromThreshold && a, 0),
                  d = r.stack;
                r = r.stacking;
                var p,
                  u,
                  f = this.stackKey,
                  g = "-" + f,
                  m = this.negStacks,
                  v = this.yAxis,
                  y = v.stacking.stacks,
                  x = v.stacking.oldStacks;
                for (v.stacking.stacksTouched += 1, u = 0; u < s; u++) {
                  var b = t[u],
                    k = e[u],
                    w = this.getStackIndicator(w, b, this.index),
                    M = w.key,
                    S = (p = m && k < (l ? 0 : a)) ? g : f;
                  y[S] || (y[S] = {}),
                    y[S][b] ||
                      (x[S] && x[S][b]
                        ? ((y[S][b] = x[S][b]), (y[S][b].total = null))
                        : (y[S][b] = new c(v, v.options.stackLabels, p, b, d))),
                    (S = y[S][b]),
                    null !== k
                      ? ((S.points[M] = S.points[this.index] =
                          [h(S.cumulative, l)]),
                        o(S.cumulative) || (S.base = M),
                        (S.touched = v.stacking.stacksTouched),
                        0 < w.index &&
                          !1 === this.singleStacks &&
                          (S.points[M][0] =
                            S.points[this.index + "," + b + ",0"][0]))
                      : (S.points[M] = S.points[this.index] = null),
                    "percent" === r
                      ? ((p = p ? f : g),
                        m && y[p] && y[p][b]
                          ? ((p = y[p][b]),
                            (S.total = p.total =
                              Math.max(p.total, S.total) + Math.abs(k) || 0))
                          : (S.total = n(S.total + (Math.abs(k) || 0))))
                      : (S.total = n(S.total + (k || 0))),
                    (S.cumulative = h(S.cumulative, l) + (k || 0)),
                    null !== k &&
                      (S.points[M].push(S.cumulative), (i[u] = S.cumulative));
                }
                "percent" === r && (v.stacking.usePercentage = !0),
                  (this.stackedYData = i),
                  (v.stacking.oldStacks = {});
              }
            }),
            (l.prototype.modifyStacks = function () {
              var t,
                e = this,
                i = e.stackKey,
                s = e.yAxis.stacking.stacks,
                n = e.processedXData,
                o = e.options.stacking;
              e[o + "Stacker"] &&
                [i, "-" + i].forEach(function (i) {
                  for (var r, a, h = n.length; h--; )
                    (r = n[h]),
                      (t = e.getStackIndicator(t, r, e.index, i)),
                      (a = (r = s[i] && s[i][r]) && r.points[t.key]) &&
                        e[o + "Stacker"](a, r, h);
                });
            }),
            (l.prototype.percentStacker = function (t, e, i) {
              (e = e.total ? 100 / e.total : 0),
                (t[0] = n(t[0] * e)),
                (t[1] = n(t[1] * e)),
                (this.stackedYData[i] = t[1]);
            }),
            (l.prototype.getStackIndicator = function (t, e, i, s) {
              return (
                !o(t) || t.x !== e || (s && t.key !== s)
                  ? (t = { x: e, index: 0, key: s })
                  : t.index++,
                (t.key = [i, e, t.index].join()),
                t
              );
            }),
            (e.StackItem = c),
            e.StackItem
          );
        }
      ),
      e(
        i,
        "parts/Dynamics.js",
        [
          i["parts/Globals.js"],
          i["parts/Point.js"],
          i["parts/Time.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i, s) {
          var n = s.addEvent,
            o = s.animate,
            r = s.createElement,
            a = s.css,
            h = s.defined,
            l = s.erase,
            c = s.error,
            d = s.extend,
            p = s.fireEvent,
            u = s.isArray,
            f = s.isNumber,
            g = s.isObject,
            m = s.isString,
            v = s.merge,
            y = s.objectEach,
            x = s.pick,
            b = s.relativeLength,
            k = s.setAnimation,
            w = s.splat,
            M = t.Axis;
          s = t.Chart;
          var S = t.Series,
            T = t.seriesTypes;
          (t.cleanRecursively = function (e, i) {
            var s = {};
            return (
              y(e, function (n, o) {
                g(e[o], !0) && !e.nodeType && i[o]
                  ? ((n = t.cleanRecursively(e[o], i[o])),
                    Object.keys(n).length && (s[o] = n))
                  : (g(e[o]) || e[o] !== i[o]) && (s[o] = e[o]);
              }),
              s
            );
          }),
            d(s.prototype, {
              addSeries: function (t, e, i) {
                var s,
                  n = this;
                return (
                  t &&
                    ((e = x(e, !0)),
                    p(n, "addSeries", { options: t }, function () {
                      (s = n.initSeries(t)),
                        (n.isDirtyLegend = !0),
                        n.linkSeries(),
                        s.enabledDataSorting && s.setData(t.data, !1),
                        p(n, "afterAddSeries", { series: s }),
                        e && n.redraw(i);
                    })),
                  s
                );
              },
              addAxis: function (t, e, i, s) {
                return this.createAxis(e ? "xAxis" : "yAxis", {
                  axis: t,
                  redraw: i,
                  animation: s,
                });
              },
              addColorAxis: function (t, e, i) {
                return this.createAxis("colorAxis", {
                  axis: t,
                  redraw: e,
                  animation: i,
                });
              },
              createAxis: function (e, i) {
                var s = this.options,
                  n = "colorAxis" === e,
                  o = i.redraw,
                  r = i.animation;
                i = v(i.axis, { index: this[e].length, isX: "xAxis" === e });
                var a = n ? new t.ColorAxis(this, i) : new M(this, i);
                return (
                  (s[e] = w(s[e] || {})),
                  s[e].push(i),
                  n &&
                    ((this.isDirtyLegend = !0),
                    this.axes.forEach(function (t) {
                      t.series = [];
                    }),
                    this.series.forEach(function (t) {
                      t.bindAxes(), (t.isDirtyData = !0);
                    })),
                  x(o, !0) && this.redraw(r),
                  a
                );
              },
              showLoading: function (t) {
                var e = this,
                  i = e.options,
                  s = e.loadingDiv,
                  h = i.loading,
                  l = function () {
                    s &&
                      a(s, {
                        left: e.plotLeft + "px",
                        top: e.plotTop + "px",
                        width: e.plotWidth + "px",
                        height: e.plotHeight + "px",
                      });
                  };
                s ||
                  ((e.loadingDiv = s =
                    r(
                      "div",
                      {
                        className:
                          "highcharts-loading highcharts-loading-hidden",
                      },
                      null,
                      e.container
                    )),
                  (e.loadingSpan = r(
                    "span",
                    { className: "highcharts-loading-inner" },
                    null,
                    s
                  )),
                  n(e, "redraw", l)),
                  (s.className = "highcharts-loading"),
                  (e.loadingSpan.innerHTML = x(t, i.lang.loading, "")),
                  e.styledMode ||
                    (a(s, d(h.style, { zIndex: 10 })),
                    a(e.loadingSpan, h.labelStyle),
                    e.loadingShown ||
                      (a(s, { opacity: 0, display: "" }),
                      o(
                        s,
                        { opacity: h.style.opacity || 0.5 },
                        { duration: h.showDuration || 0 }
                      ))),
                  (e.loadingShown = !0),
                  l();
              },
              hideLoading: function () {
                var t = this.options,
                  e = this.loadingDiv;
                e &&
                  ((e.className =
                    "highcharts-loading highcharts-loading-hidden"),
                  this.styledMode ||
                    o(
                      e,
                      { opacity: 0 },
                      {
                        duration: t.loading.hideDuration || 100,
                        complete: function () {
                          a(e, { display: "none" });
                        },
                      }
                    )),
                  (this.loadingShown = !1);
              },
              propsRequireDirtyBox:
                "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(
                  " "
                ),
              propsRequireReflow:
                "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(
                  " "
                ),
              propsRequireUpdateSeries:
                "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(
                  " "
                ),
              collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"],
              update: function (e, s, n, o) {
                var r,
                  a,
                  l,
                  c = this,
                  d = {
                    credits: "addCredits",
                    title: "setTitle",
                    subtitle: "setSubtitle",
                    caption: "setCaption",
                  },
                  u = e.isResponsiveOptions,
                  g = [];
                if (
                  (p(c, "update", { options: e }),
                  u || c.setResponsive(!1, !0),
                  (e = t.cleanRecursively(e, c.options)),
                  v(!0, c.userOptions, e),
                  (r = e.chart))
                ) {
                  if (
                    (v(!0, c.options.chart, r),
                    "className" in r && c.setClassName(r.className),
                    "reflow" in r && c.setReflow(r.reflow),
                    "inverted" in r || "polar" in r || "type" in r)
                  ) {
                    c.propFromSeries();
                    var k = !0;
                  }
                  "alignTicks" in r && (k = !0),
                    y(r, function (t, e) {
                      -1 !== c.propsRequireUpdateSeries.indexOf("chart." + e) &&
                        (a = !0),
                        -1 !== c.propsRequireDirtyBox.indexOf(e) &&
                          (c.isDirtyBox = !0),
                        u || -1 === c.propsRequireReflow.indexOf(e) || (l = !0);
                    }),
                    !c.styledMode &&
                      "style" in r &&
                      c.renderer.setStyle(r.style);
                }
                !c.styledMode && e.colors && (this.options.colors = e.colors),
                  e.plotOptions &&
                    v(!0, this.options.plotOptions, e.plotOptions),
                  e.time && this.time === t.time && (this.time = new i(e.time)),
                  y(e, function (t, e) {
                    c[e] && "function" == typeof c[e].update
                      ? c[e].update(t, !1)
                      : "function" == typeof c[d[e]] && c[d[e]](t),
                      "chart" !== e &&
                        -1 !== c.propsRequireUpdateSeries.indexOf(e) &&
                        (a = !0);
                  }),
                  this.collectionsWithUpdate.forEach(function (t) {
                    if (e[t]) {
                      if ("series" === t) {
                        var i = [];
                        c[t].forEach(function (t, e) {
                          t.options.isInternal || i.push(x(t.options.index, e));
                        });
                      }
                      w(e[t]).forEach(function (e, s) {
                        (s = (h(e.id) && c.get(e.id)) || c[t][i ? i[s] : s]) &&
                          s.coll === t &&
                          (s.update(e, !1), n && (s.touched = !0)),
                          !s &&
                            n &&
                            c.collectionsWithInit[t] &&
                            (c.collectionsWithInit[t][0].apply(
                              c,
                              [e]
                                .concat(c.collectionsWithInit[t][1] || [])
                                .concat([!1])
                            ).touched = !0);
                      }),
                        n &&
                          c[t].forEach(function (t) {
                            t.touched || t.options.isInternal
                              ? delete t.touched
                              : g.push(t);
                          });
                    }
                  }),
                  g.forEach(function (t) {
                    t.remove && t.remove(!1);
                  }),
                  k &&
                    c.axes.forEach(function (t) {
                      t.update({}, !1);
                    }),
                  a &&
                    c.getSeriesOrderByLinks().forEach(function (t) {
                      t.chart && t.update({}, !1);
                    }, this),
                  e.loading && v(!0, c.options.loading, e.loading),
                  (k = r && r.width),
                  (r = r && r.height),
                  m(r) && (r = b(r, k || c.chartWidth)),
                  l ||
                  (f(k) && k !== c.chartWidth) ||
                  (f(r) && r !== c.chartHeight)
                    ? c.setSize(k, r, o)
                    : x(s, !0) && c.redraw(o),
                  p(c, "afterUpdate", { options: e, redraw: s, animation: o });
              },
              setSubtitle: function (t, e) {
                this.applyDescription("subtitle", t), this.layOutTitles(e);
              },
              setCaption: function (t, e) {
                this.applyDescription("caption", t), this.layOutTitles(e);
              },
            }),
            (s.prototype.collectionsWithInit = {
              xAxis: [s.prototype.addAxis, [!0]],
              yAxis: [s.prototype.addAxis, [!1]],
              series: [s.prototype.addSeries],
            }),
            d(e.prototype, {
              update: function (t, e, i, s) {
                function n() {
                  r.applyOptions(t);
                  var s = h && r.hasDummyGraphic;
                  (s = null === r.y ? !s : s),
                    h &&
                      s &&
                      ((r.graphic = h.destroy()), delete r.hasDummyGraphic),
                    g(t, !0) &&
                      (h &&
                        h.element &&
                        t &&
                        t.marker &&
                        void 0 !== t.marker.symbol &&
                        (r.graphic = h.destroy()),
                      t &&
                        t.dataLabels &&
                        r.dataLabel &&
                        (r.dataLabel = r.dataLabel.destroy()),
                      r.connector && (r.connector = r.connector.destroy())),
                    (o = r.index),
                    a.updateParallelArrays(r, o),
                    (c.data[o] =
                      g(c.data[o], !0) || g(t, !0)
                        ? r.options
                        : x(t, c.data[o])),
                    (a.isDirty = a.isDirtyData = !0),
                    !a.fixedBox && a.hasCartesianSeries && (l.isDirtyBox = !0),
                    "point" === c.legendType && (l.isDirtyLegend = !0),
                    e && l.redraw(i);
                }
                var o,
                  r = this,
                  a = r.series,
                  h = r.graphic,
                  l = a.chart,
                  c = a.options;
                (e = x(e, !0)),
                  !1 === s
                    ? n()
                    : r.firePointEvent("update", { options: t }, n);
              },
              remove: function (t, e) {
                this.series.removePoint(this.series.data.indexOf(this), t, e);
              },
            }),
            d(S.prototype, {
              addPoint: function (t, e, i, s, n) {
                var o = this.options,
                  r = this.data,
                  a = this.chart,
                  h = this.xAxis;
                h = h && h.hasNames && h.names;
                var l,
                  c = o.data,
                  d = this.xData;
                e = x(e, !0);
                var u = { series: this };
                this.pointClass.prototype.applyOptions.apply(u, [t]);
                var f = u.x,
                  g = d.length;
                if (this.requireSorting && f < d[g - 1])
                  for (l = !0; g && d[g - 1] > f; ) g--;
                this.updateParallelArrays(u, "splice", g, 0, 0),
                  this.updateParallelArrays(u, g),
                  h && u.name && (h[f] = u.name),
                  c.splice(g, 0, t),
                  l && (this.data.splice(g, 0, null), this.processData()),
                  "point" === o.legendType && this.generatePoints(),
                  i &&
                    (r[0] && r[0].remove
                      ? r[0].remove(!1)
                      : (r.shift(),
                        this.updateParallelArrays(u, "shift"),
                        c.shift())),
                  !1 !== n && p(this, "addPoint", { point: u }),
                  (this.isDirtyData = this.isDirty = !0),
                  e && a.redraw(s);
              },
              removePoint: function (t, e, i) {
                var s = this,
                  n = s.data,
                  o = n[t],
                  r = s.points,
                  a = s.chart,
                  h = function () {
                    r && r.length === n.length && r.splice(t, 1),
                      n.splice(t, 1),
                      s.options.data.splice(t, 1),
                      s.updateParallelArrays(
                        o || { series: s },
                        "splice",
                        t,
                        1
                      ),
                      o && o.destroy(),
                      (s.isDirty = !0),
                      (s.isDirtyData = !0),
                      e && a.redraw();
                  };
                k(i, a),
                  (e = x(e, !0)),
                  o ? o.firePointEvent("remove", null, h) : h();
              },
              remove: function (t, e, i, s) {
                function n() {
                  o.destroy(s),
                    (o.remove = null),
                    (r.isDirtyLegend = r.isDirtyBox = !0),
                    r.linkSeries(),
                    x(t, !0) && r.redraw(e);
                }
                var o = this,
                  r = o.chart;
                !1 !== i ? p(o, "remove", null, n) : n();
              },
              update: function (e, i) {
                (e = t.cleanRecursively(e, this.userOptions)),
                  p(this, "update", { options: e });
                var s,
                  n = this,
                  o = n.chart,
                  r = n.userOptions,
                  a = n.initialType || n.type,
                  h = e.type || r.type || o.options.chart.type,
                  l = !(
                    this.hasDerivedData ||
                    e.dataGrouping ||
                    (h && h !== this.type) ||
                    void 0 !== e.pointStart ||
                    e.pointInterval ||
                    e.pointIntervalUnit ||
                    e.keys
                  ),
                  u = T[a].prototype,
                  f = [
                    "group",
                    "markerGroup",
                    "dataLabelsGroup",
                    "transformGroup",
                  ],
                  g = ["eventOptions", "navigatorSeries", "baseSeries"],
                  m = n.finishedAnimating && { animation: !1 },
                  y = {};
                l &&
                  (g.push(
                    "data",
                    "isDirtyData",
                    "points",
                    "processedXData",
                    "processedYData",
                    "xIncrement",
                    "_hasPointMarkers",
                    "_hasPointLabels",
                    "mapMap",
                    "mapData",
                    "minY",
                    "maxY",
                    "minX",
                    "maxX"
                  ),
                  !1 !== e.visible && g.push("area", "graph"),
                  n.parallelArrays.forEach(function (t) {
                    g.push(t + "Data");
                  }),
                  e.data &&
                    (e.dataSorting && d(n.options.dataSorting, e.dataSorting),
                    this.setData(e.data, !1))),
                  (e = v(
                    r,
                    m,
                    {
                      index: void 0 === r.index ? n.index : r.index,
                      pointStart: x(r.pointStart, n.xData[0]),
                    },
                    !l && { data: n.options.data },
                    e
                  )),
                  l && e.data && (e.data = n.options.data),
                  (g = f.concat(g)),
                  g.forEach(function (t) {
                    (g[t] = n[t]), delete n[t];
                  }),
                  n.remove(!1, null, !1, !0);
                for (s in u) n[s] = void 0;
                if (
                  (T[h || a]
                    ? d(n, T[h || a].prototype)
                    : c(17, !0, o, { missingModuleFor: h || a }),
                  g.forEach(function (t) {
                    n[t] = g[t];
                  }),
                  n.init(o, e),
                  l && this.points)
                ) {
                  var b = n.options;
                  !1 === b.visible
                    ? ((y.graphic = 1), (y.dataLabel = 1))
                    : n._hasPointLabels ||
                      ((h = b.marker),
                      (u = b.dataLabels),
                      h &&
                        (!1 === h.enabled || "symbol" in h) &&
                        (y.graphic = 1),
                      u && !1 === u.enabled && (y.dataLabel = 1)),
                    this.points.forEach(function (t) {
                      t &&
                        t.series &&
                        (t.resolveColor(),
                        Object.keys(y).length && t.destroyElements(y),
                        !1 === b.showInLegend &&
                          t.legendItem &&
                          o.legend.destroyItem(t));
                    }, this);
                }
                e.zIndex !== r.zIndex &&
                  f.forEach(function (t) {
                    n[t] && n[t].attr({ zIndex: e.zIndex });
                  }),
                  (n.initialType = a),
                  o.linkSeries(),
                  p(this, "afterUpdate"),
                  x(i, !0) && o.redraw(!!l && void 0);
              },
              setName: function (t) {
                (this.name = this.options.name = this.userOptions.name = t),
                  (this.chart.isDirtyLegend = !0);
              },
            }),
            d(M.prototype, {
              update: function (t, e) {
                var i = this.chart,
                  s = (t && t.events) || {};
                (t = v(this.userOptions, t)),
                  i.options[this.coll].indexOf &&
                    (i.options[this.coll][
                      i.options[this.coll].indexOf(this.userOptions)
                    ] = t),
                  y(i.options[this.coll].events, function (t, e) {
                    void 0 === s[e] && (s[e] = void 0);
                  }),
                  this.destroy(!0),
                  this.init(i, d(t, { events: s })),
                  (i.isDirtyBox = !0),
                  x(e, !0) && i.redraw();
              },
              remove: function (t) {
                for (
                  var e = this.chart,
                    i = this.coll,
                    s = this.series,
                    n = s.length;
                  n--;

                )
                  s[n] && s[n].remove(!1);
                l(e.axes, this),
                  l(e[i], this),
                  u(e.options[i])
                    ? e.options[i].splice(this.options.index, 1)
                    : delete e.options[i],
                  e[i].forEach(function (t, e) {
                    t.options.index = t.userOptions.index = e;
                  }),
                  this.destroy(),
                  (e.isDirtyBox = !0),
                  x(t, !0) && e.redraw();
              },
              setTitle: function (t, e) {
                this.update({ title: t }, e);
              },
              setCategories: function (t, e) {
                this.update({ categories: t }, e);
              },
            });
        }
      ),
      e(
        i,
        "parts/AreaSeries.js",
        [
          i["parts/Globals.js"],
          i["parts/Color.js"],
          i["mixins/legend-symbol.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i, s) {
          var n = e.parse,
            o = s.objectEach,
            r = s.pick;
          e = s.seriesType;
          var a = t.Series;
          e(
            "area",
            "line",
            { softThreshold: !1, threshold: 0 },
            {
              singleStacks: !1,
              getStackPoints: function (t) {
                var e,
                  i = [],
                  s = [],
                  n = this.xAxis,
                  a = this.yAxis,
                  h = a.stacking.stacks[this.stackKey],
                  l = {},
                  c = this.index,
                  d = a.series,
                  p = d.length,
                  u = r(a.options.reversedStacks, !0) ? 1 : -1;
                if (((t = t || this.points), this.options.stacking)) {
                  for (e = 0; e < t.length; e++)
                    (t[e].leftNull = t[e].rightNull = void 0),
                      (l[t[e].x] = t[e]);
                  o(h, function (t, e) {
                    null !== t.total && s.push(e);
                  }),
                    s.sort(function (t, e) {
                      return t - e;
                    });
                  var f = d.map(function (t) {
                    return t.visible;
                  });
                  s.forEach(function (t, o) {
                    var r,
                      d,
                      g = 0;
                    if (l[t] && !l[t].isNull)
                      i.push(l[t]),
                        [-1, 1].forEach(function (i) {
                          var n = 1 === i ? "rightNull" : "leftNull",
                            a = 0,
                            g = h[s[o + i]];
                          if (g)
                            for (e = c; 0 <= e && e < p; )
                              (r = g.points[e]),
                                r ||
                                  (e === c
                                    ? (l[t][n] = !0)
                                    : f[e] &&
                                      (d = h[t].points[e]) &&
                                      (a -= d[1] - d[0])),
                                (e += u);
                          l[t][1 === i ? "rightCliff" : "leftCliff"] = a;
                        });
                    else {
                      for (e = c; 0 <= e && e < p; ) {
                        if ((r = h[t].points[e])) {
                          g = r[1];
                          break;
                        }
                        e += u;
                      }
                      (g = a.translate(g, 0, 1, 0, 1)),
                        i.push({
                          isNull: !0,
                          plotX: n.translate(t, 0, 0, 0, 1),
                          x: t,
                          plotY: g,
                          yBottom: g,
                        });
                    }
                  });
                }
                return i;
              },
              getGraphPath: function (t) {
                var e,
                  i = a.prototype.getGraphPath,
                  s = this.options,
                  n = s.stacking,
                  o = this.yAxis,
                  h = [],
                  l = [],
                  c = this.index,
                  d = o.stacking.stacks[this.stackKey],
                  p = s.threshold,
                  u = Math.round(o.getThreshold(s.threshold));
                s = r(s.connectNulls, "percent" === n);
                var f = function (e, i, s) {
                  var r = t[e];
                  e = n && d[r.x].points[c];
                  var a = r[s + "Null"] || 0;
                  if (((s = r[s + "Cliff"] || 0), (r = !0), s || a)) {
                    var f = (a ? e[0] : e[1]) + s,
                      g = e[0] + s;
                    r = !!a;
                  } else !n && t[i] && t[i].isNull && (f = g = p);
                  void 0 !== f &&
                    (l.push({
                      plotX: m,
                      plotY: null === f ? u : o.getThreshold(f),
                      isNull: r,
                      isCliff: !0,
                    }),
                    h.push({
                      plotX: m,
                      plotY: null === g ? u : o.getThreshold(g),
                      doCurve: !1,
                    }));
                };
                for (
                  t = t || this.points,
                    n && (t = this.getStackPoints(t)),
                    e = 0;
                  e < t.length;
                  e++
                ) {
                  n ||
                    (t[e].leftCliff =
                      t[e].rightCliff =
                      t[e].leftNull =
                      t[e].rightNull =
                        void 0);
                  var g = t[e].isNull,
                    m = r(t[e].rectPlotX, t[e].plotX),
                    v = r(t[e].yBottom, u);
                  (g && !s) ||
                    (s || f(e, e - 1, "left"),
                    (g && !n && s) ||
                      (l.push(t[e]), h.push({ x: e, plotX: m, plotY: v })),
                    s || f(e, e + 1, "right"));
                }
                return (
                  (e = i.call(this, l, !0, !0)),
                  (h.reversed = !0),
                  (g = i.call(this, h, !0, !0)),
                  (v = g[0]) && "M" === v[0] && (g[0] = ["L", v[1], v[2]]),
                  (g = e.concat(g)),
                  (i = i.call(this, l, !1, s)),
                  (g.xMap = e.xMap),
                  (this.areaPath = g),
                  i
                );
              },
              drawGraph: function () {
                (this.areaPath = []), a.prototype.drawGraph.apply(this);
                var t = this,
                  e = this.areaPath,
                  i = this.options,
                  s = [["area", "highcharts-area", this.color, i.fillColor]];
                this.zones.forEach(function (e, n) {
                  s.push([
                    "zone-area-" + n,
                    "highcharts-area highcharts-zone-area-" +
                      n +
                      " " +
                      e.className,
                    e.color || t.color,
                    e.fillColor || i.fillColor,
                  ]);
                }),
                  s.forEach(function (s) {
                    var o = s[0],
                      a = t[o],
                      h = a ? "animate" : "attr",
                      l = {};
                    a
                      ? ((a.endX = t.preventGraphAnimation ? null : e.xMap),
                        a.animate({ d: e }))
                      : ((l.zIndex = 0),
                        (a = t[o] =
                          t.chart.renderer.path(e).addClass(s[1]).add(t.group)),
                        (a.isArea = !0)),
                      t.chart.styledMode ||
                        (l.fill = r(
                          s[3],
                          n(s[2]).setOpacity(r(i.fillOpacity, 0.75)).get()
                        )),
                      a[h](l),
                      (a.startX = e.xMap),
                      (a.shiftUnit = i.step ? 2 : 1);
                  });
              },
              drawLegendSymbol: i.drawRectangle,
            }
          );
        }
      ),
      e(i, "parts/SplineSeries.js", [i["parts/Utilities.js"]], function (t) {
        var e = t.pick;
        (t = t.seriesType)(
          "spline",
          "line",
          {},
          {
            getPointSpline: function (t, i, s) {
              var n = i.plotX || 0,
                o = i.plotY || 0,
                r = t[s - 1];
              if (
                ((s = t[s + 1]),
                r &&
                  !r.isNull &&
                  !1 !== r.doCurve &&
                  !i.isCliff &&
                  s &&
                  !s.isNull &&
                  !1 !== s.doCurve &&
                  !i.isCliff)
              ) {
                t = r.plotY || 0;
                var a = s.plotX || 0;
                s = s.plotY || 0;
                var h = 0,
                  l = (1.5 * n + (r.plotX || 0)) / 2.5,
                  c = (1.5 * o + t) / 2.5;
                a = (1.5 * n + a) / 2.5;
                var d = (1.5 * o + s) / 2.5;
                a !== l && (h = ((d - c) * (a - n)) / (a - l) + o - d),
                  (c += h),
                  (d += h),
                  c > t && c > o
                    ? ((c = Math.max(t, o)), (d = 2 * o - c))
                    : c < t && c < o && ((c = Math.min(t, o)), (d = 2 * o - c)),
                  d > s && d > o
                    ? ((d = Math.max(s, o)), (c = 2 * o - d))
                    : d < s && d < o && ((d = Math.min(s, o)), (c = 2 * o - d)),
                  (i.rightContX = a),
                  (i.rightContY = d);
              }
              return (
                (i = [
                  "C",
                  e(r.rightContX, r.plotX, 0),
                  e(r.rightContY, r.plotY, 0),
                  e(l, n, 0),
                  e(c, o, 0),
                  n,
                  o,
                ]),
                (r.rightContX = r.rightContY = void 0),
                i
              );
            },
          }
        );
      }),
      e(
        i,
        "parts/AreaSplineSeries.js",
        [
          i["parts/Globals.js"],
          i["mixins/legend-symbol.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i) {
          i = i.seriesType;
          var s = t.seriesTypes.area.prototype;
          i("areaspline", "spline", t.defaultPlotOptions.area, {
            getStackPoints: s.getStackPoints,
            getGraphPath: s.getGraphPath,
            drawGraph: s.drawGraph,
            drawLegendSymbol: e.drawRectangle,
          });
        }
      ),
      e(
        i,
        "parts/ColumnSeries.js",
        [
          i["parts/Globals.js"],
          i["parts/Color.js"],
          i["mixins/legend-symbol.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i, s) {
          "";
          var n = e.parse,
            o = s.animObject,
            r = s.clamp,
            a = s.defined,
            h = s.extend,
            l = s.isNumber,
            c = s.merge,
            d = s.pick;
          e = s.seriesType;
          var p = t.Series;
          e(
            "column",
            "line",
            {
              borderRadius: 0,
              groupPadding: 0.2,
              marker: null,
              pointPadding: 0.1,
              minPointLength: 0,
              cropThreshold: 50,
              pointRange: null,
              states: {
                hover: { halo: !1, brightness: 0.1 },
                select: { color: "#cccccc", borderColor: "#000000" },
              },
              dataLabels: { align: null, verticalAlign: null, y: null },
              softThreshold: !1,
              startFromThreshold: !0,
              stickyTracking: !1,
              tooltip: { distance: 6 },
              threshold: 0,
              borderColor: "#ffffff",
            },
            {
              cropShoulder: 0,
              directTouch: !0,
              trackerGroups: ["group", "dataLabelsGroup"],
              negStacks: !0,
              init: function () {
                p.prototype.init.apply(this, arguments);
                var t = this,
                  e = t.chart;
                e.hasRendered &&
                  e.series.forEach(function (e) {
                    e.type === t.type && (e.isDirty = !0);
                  });
              },
              getColumnMetrics: function () {
                var t = this,
                  e = t.options,
                  i = t.xAxis,
                  s = t.yAxis,
                  n = i.options.reversedStacks;
                n = (i.reversed && !n) || (!i.reversed && n);
                var o,
                  r = {},
                  a = 0;
                !1 === e.grouping
                  ? (a = 1)
                  : t.chart.series.forEach(function (e) {
                      var i = e.yAxis,
                        n = e.options;
                      if (
                        e.type === t.type &&
                        (e.visible ||
                          !t.chart.options.chart.ignoreHiddenSeries) &&
                        s.len === i.len &&
                        s.pos === i.pos
                      ) {
                        if (n.stacking) {
                          (o = e.stackKey), void 0 === r[o] && (r[o] = a++);
                          var h = r[o];
                        } else !1 !== n.grouping && (h = a++);
                        e.columnIndex = h;
                      }
                    });
                var h = Math.min(
                    Math.abs(i.transA) *
                      ((i.ordinal && i.ordinal.slope) ||
                        e.pointRange ||
                        i.closestPointRange ||
                        i.tickInterval ||
                        1),
                    i.len
                  ),
                  l = h * e.groupPadding,
                  c = (h - 2 * l) / (a || 1);
                return (
                  (e = Math.min(
                    e.maxPointWidth || i.len,
                    d(e.pointWidth, c * (1 - 2 * e.pointPadding))
                  )),
                  (t.columnMetrics = {
                    width: e,
                    offset:
                      (c - e) / 2 +
                      (l + ((t.columnIndex || 0) + (n ? 1 : 0)) * c - h / 2) *
                        (n ? -1 : 1),
                  }),
                  t.columnMetrics
                );
              },
              crispCol: function (t, e, i, s) {
                var n = this.chart,
                  o = this.borderWidth,
                  r = -(o % 2 ? 0.5 : 0);
                return (
                  (o = o % 2 ? 0.5 : 1),
                  n.inverted && n.renderer.isVML && (o += 1),
                  this.options.crisp &&
                    ((i = Math.round(t + i) + r),
                    (t = Math.round(t) + r),
                    (i -= t)),
                  (s = Math.round(e + s) + o),
                  (r = 0.5 >= Math.abs(e) && 0.5 < s),
                  (e = Math.round(e) + o),
                  (s -= e),
                  r && s && (--e, (s += 1)),
                  { x: t, y: e, width: i, height: s }
                );
              },
              translate: function () {
                var t = this,
                  e = t.chart,
                  i = t.options,
                  s = (t.dense = 2 > t.closestPointRange * t.xAxis.transA);
                s = t.borderWidth = d(i.borderWidth, s ? 0 : 1);
                var n = t.xAxis,
                  o = t.yAxis,
                  h = i.threshold,
                  c = (t.translatedThreshold = o.getThreshold(h)),
                  u = d(i.minPointLength, 5),
                  f = t.getColumnMetrics(),
                  g = f.width,
                  m = (t.barW = Math.max(g, 1 + 2 * s)),
                  v = (t.pointXOffset = f.offset),
                  y = t.dataMin,
                  x = t.dataMax;
                e.inverted && (c -= 0.5),
                  i.pointPadding && (m = Math.ceil(m)),
                  p.prototype.translate.apply(t),
                  t.points.forEach(function (i) {
                    var s = d(i.yBottom, c),
                      p = 999 + Math.abs(s),
                      f = g,
                      b = i.plotX;
                    p = r(i.plotY, -p, o.len + p);
                    var k = i.plotX + v,
                      w = m,
                      M = Math.min(p, s),
                      S = Math.max(p, s) - M;
                    if (u && Math.abs(S) < u) {
                      S = u;
                      var T =
                        (!o.reversed && !i.negative) ||
                        (o.reversed && i.negative);
                      l(h) &&
                        l(x) &&
                        i.y === h &&
                        x <= h &&
                        (o.min || 0) < h &&
                        y !== x &&
                        (T = !T),
                        (M = Math.abs(M - c) > u ? s - u : c - (T ? u : 0));
                    }
                    a(i.options.pointWidth) &&
                      ((f = w = Math.ceil(i.options.pointWidth)),
                      (k -= Math.round((f - g) / 2))),
                      (i.barX = k),
                      (i.pointWidth = f),
                      (i.tooltipPos = e.inverted
                        ? [
                            o.len + o.pos - e.plotLeft - p,
                            n.len + n.pos - e.plotTop - (b || 0) - v - w / 2,
                            S,
                          ]
                        : [k + w / 2, p + o.pos - e.plotTop, S]),
                      (i.shapeType =
                        t.pointClass.prototype.shapeType || "rect"),
                      (i.shapeArgs = t.crispCol.apply(
                        t,
                        i.isNull ? [k, c, w, 0] : [k, M, w, S]
                      ));
                  });
              },
              getSymbol: t.noop,
              drawLegendSymbol: i.drawRectangle,
              drawGraph: function () {
                this.group[this.dense ? "addClass" : "removeClass"](
                  "highcharts-dense-data"
                );
              },
              pointAttribs: function (t, e) {
                var i = this.options,
                  s = this.pointAttrToOptions || {},
                  o = s.stroke || "borderColor",
                  r = s["stroke-width"] || "borderWidth",
                  a = (t && t.color) || this.color,
                  h = (t && t[o]) || i[o] || this.color || a,
                  l = (t && t[r]) || i[r] || this[r] || 0;
                s = (t && t.options.dashStyle) || i.dashStyle;
                var p = d(t && t.opacity, i.opacity, 1);
                if (t && this.zones.length) {
                  var u = t.getZone();
                  (a =
                    t.options.color ||
                    (u && (u.color || t.nonZonedColor)) ||
                    this.color),
                    u &&
                      ((h = u.borderColor || h),
                      (s = u.dashStyle || s),
                      (l = u.borderWidth || l));
                }
                return (
                  e &&
                    t &&
                    ((t = c(
                      i.states[e],
                      (t.options.states && t.options.states[e]) || {}
                    )),
                    (e = t.brightness),
                    (a =
                      t.color ||
                      (void 0 !== e && n(a).brighten(t.brightness).get()) ||
                      a),
                    (h = t[o] || h),
                    (l = t[r] || l),
                    (s = t.dashStyle || s),
                    (p = d(t.opacity, p))),
                  (o = { fill: a, stroke: h, "stroke-width": l, opacity: p }),
                  s && (o.dashstyle = s),
                  o
                );
              },
              drawPoints: function () {
                var t,
                  e = this,
                  i = this.chart,
                  s = e.options,
                  n = i.renderer,
                  o = s.animationLimit || 250;
                e.points.forEach(function (r) {
                  var a = r.graphic,
                    h = !!a,
                    d = a && i.pointCount < o ? "animate" : "attr";
                  l(r.plotY) && null !== r.y
                    ? ((t = r.shapeArgs),
                      a && r.hasNewShapeType() && (a = a.destroy()),
                      e.enabledDataSorting &&
                        (r.startXPos = e.xAxis.reversed
                          ? -(t ? t.width : 0)
                          : e.xAxis.width),
                      a ||
                        ((r.graphic = a =
                          n[r.shapeType](t).add(r.group || e.group)) &&
                          e.enabledDataSorting &&
                          i.hasRendered &&
                          i.pointCount < o &&
                          (a.attr({ x: r.startXPos }),
                          (h = !0),
                          (d = "animate"))),
                      a && h && a[d](c(t)),
                      s.borderRadius && a[d]({ r: s.borderRadius }),
                      i.styledMode ||
                        a[d](e.pointAttribs(r, r.selected && "select")).shadow(
                          !1 !== r.allowShadow && s.shadow,
                          null,
                          s.stacking && !s.borderRadius
                        ),
                      a.addClass(r.getClassName(), !0))
                    : a && (r.graphic = a.destroy());
                });
              },
              animate: function (t) {
                var e = this,
                  i = this.yAxis,
                  s = e.options,
                  n = this.chart.inverted,
                  a = {},
                  l = n ? "translateX" : "translateY";
                if (t)
                  (a.scaleY = 0.001),
                    (t = r(i.toPixels(s.threshold), i.pos, i.pos + i.len)),
                    n ? (a.translateX = t - i.len) : (a.translateY = t),
                    e.clipBox && e.setClip(),
                    e.group.attr(a);
                else {
                  var c = e.group.attr(l);
                  e.group.animate(
                    { scaleY: 1 },
                    h(o(e.options.animation), {
                      step: function (t, s) {
                        e.group &&
                          ((a[l] = c + s.pos * (i.pos - c)), e.group.attr(a));
                      },
                    })
                  );
                }
              },
              remove: function () {
                var t = this,
                  e = t.chart;
                e.hasRendered &&
                  e.series.forEach(function (e) {
                    e.type === t.type && (e.isDirty = !0);
                  }),
                  p.prototype.remove.apply(t, arguments);
              },
            }
          );
        }
      ),
      e(i, "parts/BarSeries.js", [i["parts/Utilities.js"]], function (t) {
        (t = t.seriesType)("bar", "column", null, { inverted: !0 });
      }),
      e(
        i,
        "parts/ScatterSeries.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.addEvent;
          e = e.seriesType;
          var s = t.Series;
          e(
            "scatter",
            "line",
            {
              lineWidth: 0,
              findNearestPointBy: "xy",
              jitter: { x: 0, y: 0 },
              marker: { enabled: !0 },
              tooltip: {
                headerFormat:
                  '<span style="color:{point.color}">â—</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
              },
            },
            {
              sorted: !1,
              requireSorting: !1,
              noSharedTooltip: !0,
              trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
              takeOrdinalPosition: !1,
              drawGraph: function () {
                this.options.lineWidth && s.prototype.drawGraph.call(this);
              },
              applyJitter: function () {
                var t = this,
                  e = this.options.jitter,
                  i = this.points.length;
                e &&
                  this.points.forEach(function (s, n) {
                    ["x", "y"].forEach(function (o, r) {
                      var a = "plot" + o.toUpperCase();
                      if (e[o] && !s.isNull) {
                        var h = t[o + "Axis"],
                          l = e[o] * h.transA;
                        if (h && !h.isLog) {
                          var c = Math.max(0, s[a] - l);
                          (h = Math.min(h.len, s[a] + l)),
                            (r = 1e4 * Math.sin(n + r * i)),
                            (s[a] = c + (h - c) * (r - Math.floor(r))),
                            "x" === o && (s.clientX = s.plotX);
                        }
                      }
                    });
                  });
              },
            }
          ),
            i(s, "afterTranslate", function () {
              this.applyJitter && this.applyJitter();
            });
        }
      ),
      e(
        i,
        "mixins/centered-series.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.isNumber,
            s = e.pick,
            n = e.relativeLength,
            o = t.deg2rad;
          t.CenteredSeriesMixin = {
            getCenter: function () {
              var t = this.options,
                e = this.chart,
                i = 2 * (t.slicedOffset || 0),
                o = e.plotWidth - 2 * i,
                r = e.plotHeight - 2 * i,
                a = t.center,
                h = Math.min(o, r),
                l = t.size,
                c = t.innerSize || 0;
              for (
                "string" == typeof l && (l = parseFloat(l)),
                  "string" == typeof c && (c = parseFloat(c)),
                  t = [
                    s(a[0], "50%"),
                    s(a[1], "50%"),
                    s(l && 0 > l ? void 0 : t.size, "100%"),
                    s(c && 0 > c ? void 0 : t.innerSize || 0, "0%"),
                  ],
                  e.angular && (t[3] = 0),
                  a = 0;
                4 > a;
                ++a
              )
                (l = t[a]),
                  (e = 2 > a || (2 === a && /%$/.test(l))),
                  (t[a] = n(l, [o, r, h, t[2]][a]) + (e ? i : 0));
              return t[3] > t[2] && (t[3] = t[2]), t;
            },
            getStartAndEndRadians: function (t, e) {
              return (
                (t = i(t) ? t : 0),
                (e = i(e) && e > t && 360 > e - t ? e : t + 360),
                { start: o * (t + -90), end: o * (e + -90) }
              );
            },
          };
        }
      ),
      e(
        i,
        "parts/PieSeries.js",
        [
          i["parts/Globals.js"],
          i["mixins/legend-symbol.js"],
          i["parts/Point.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i, s) {
          var n = s.addEvent,
            o = s.clamp,
            r = s.defined,
            a = s.fireEvent,
            h = s.isNumber,
            l = s.merge,
            c = s.pick,
            d = s.relativeLength,
            p = s.seriesType,
            u = s.setAnimation;
          s = t.CenteredSeriesMixin;
          var f = s.getStartAndEndRadians,
            g = t.noop,
            m = t.Series;
          p(
            "pie",
            "line",
            {
              center: [null, null],
              clip: !1,
              colorByPoint: !0,
              dataLabels: {
                allowOverlap: !0,
                connectorPadding: 5,
                connectorShape: "fixedOffset",
                crookDistance: "70%",
                distance: 30,
                enabled: !0,
                formatter: function () {
                  return this.point.isNull ? void 0 : this.point.name;
                },
                softConnector: !0,
                x: 0,
              },
              fillColor: void 0,
              ignoreHiddenPoint: !0,
              inactiveOtherPoints: !0,
              legendType: "point",
              marker: null,
              size: null,
              showInLegend: !1,
              slicedOffset: 10,
              stickyTracking: !1,
              tooltip: { followPointer: !0 },
              borderColor: "#ffffff",
              borderWidth: 1,
              lineWidth: void 0,
              states: { hover: { brightness: 0.1 } },
            },
            {
              isCartesian: !1,
              requireSorting: !1,
              directTouch: !0,
              noSharedTooltip: !0,
              trackerGroups: ["group", "dataLabelsGroup"],
              axisTypes: [],
              pointAttribs: t.seriesTypes.column.prototype.pointAttribs,
              animate: function (t) {
                var e = this,
                  i = e.points,
                  s = e.startAngleRad;
                t ||
                  i.forEach(function (t) {
                    var i = t.graphic,
                      n = t.shapeArgs;
                    i &&
                      n &&
                      (i.attr({
                        r: c(t.startR, e.center && e.center[3] / 2),
                        start: s,
                        end: s,
                      }),
                      i.animate(
                        { r: n.r, start: n.start, end: n.end },
                        e.options.animation
                      ));
                  });
              },
              hasData: function () {
                return !!this.processedXData.length;
              },
              updateTotals: function () {
                var t,
                  e = 0,
                  i = this.points,
                  s = i.length,
                  n = this.options.ignoreHiddenPoint;
                for (t = 0; t < s; t++) {
                  var o = i[t];
                  e += n && !o.visible ? 0 : o.isNull ? 0 : o.y;
                }
                for (this.total = e, t = 0; t < s; t++)
                  (o = i[t]),
                    (o.percentage =
                      0 < e && (o.visible || !n) ? (o.y / e) * 100 : 0),
                    (o.total = e);
              },
              generatePoints: function () {
                m.prototype.generatePoints.call(this), this.updateTotals();
              },
              getX: function (t, e, i) {
                var s = this.center,
                  n = this.radii ? this.radii[i.index] : s[2] / 2;
                return (
                  (t = Math.asin(o((t - s[1]) / (n + i.labelDistance), -1, 1))),
                  s[0] +
                    (e ? -1 : 1) * Math.cos(t) * (n + i.labelDistance) +
                    (0 < i.labelDistance
                      ? (e ? -1 : 1) * this.options.dataLabels.padding
                      : 0)
                );
              },
              translate: function (t) {
                this.generatePoints();
                var e = 0,
                  i = this.options,
                  s = i.slicedOffset,
                  n = s + (i.borderWidth || 0),
                  o = f(i.startAngle, i.endAngle),
                  r = (this.startAngleRad = o.start);
                o = (this.endAngleRad = o.end) - r;
                var h = this.points,
                  l = i.dataLabels.distance;
                i = i.ignoreHiddenPoint;
                var p,
                  u = h.length;
                for (
                  t || (this.center = t = this.getCenter()), p = 0;
                  p < u;
                  p++
                ) {
                  var g = h[p],
                    m = r + e * o;
                  (i && !g.visible) || (e += g.percentage / 100);
                  var v = r + e * o;
                  (g.shapeType = "arc"),
                    (g.shapeArgs = {
                      x: t[0],
                      y: t[1],
                      r: t[2] / 2,
                      innerR: t[3] / 2,
                      start: Math.round(1e3 * m) / 1e3,
                      end: Math.round(1e3 * v) / 1e3,
                    }),
                    (g.labelDistance = c(
                      g.options.dataLabels && g.options.dataLabels.distance,
                      l
                    )),
                    (g.labelDistance = d(g.labelDistance, g.shapeArgs.r)),
                    (this.maxLabelDistance = Math.max(
                      this.maxLabelDistance || 0,
                      g.labelDistance
                    )),
                    (v = (v + m) / 2),
                    v > 1.5 * Math.PI
                      ? (v -= 2 * Math.PI)
                      : v < -Math.PI / 2 && (v += 2 * Math.PI),
                    (g.slicedTranslation = {
                      translateX: Math.round(Math.cos(v) * s),
                      translateY: Math.round(Math.sin(v) * s),
                    });
                  var y = (Math.cos(v) * t[2]) / 2,
                    x = (Math.sin(v) * t[2]) / 2;
                  (g.tooltipPos = [t[0] + 0.7 * y, t[1] + 0.7 * x]),
                    (g.half = v < -Math.PI / 2 || v > Math.PI / 2 ? 1 : 0),
                    (g.angle = v),
                    (m = Math.min(n, g.labelDistance / 5)),
                    (g.labelPosition = {
                      natural: {
                        x: t[0] + y + Math.cos(v) * g.labelDistance,
                        y: t[1] + x + Math.sin(v) * g.labelDistance,
                      },
                      final: {},
                      alignment:
                        0 > g.labelDistance
                          ? "center"
                          : g.half
                          ? "right"
                          : "left",
                      connectorPosition: {
                        breakAt: {
                          x: t[0] + y + Math.cos(v) * m,
                          y: t[1] + x + Math.sin(v) * m,
                        },
                        touchingSliceAt: { x: t[0] + y, y: t[1] + x },
                      },
                    });
                }
                a(this, "afterTranslate");
              },
              drawEmpty: function () {
                var t = this.options;
                if (0 === this.total) {
                  var e = this.center[0],
                    i = this.center[1];
                  this.graph ||
                    (this.graph = this.chart.renderer
                      .circle(e, i, 0)
                      .addClass("highcharts-graph")
                      .add(this.group)),
                    this.graph.animate(
                      {
                        "stroke-width": t.borderWidth,
                        cx: e,
                        cy: i,
                        r: this.center[2] / 2,
                        fill: t.fillColor || "none",
                        stroke: t.color || "#cccccc",
                      },
                      this.options.animation
                    );
                } else this.graph && (this.graph = this.graph.destroy());
              },
              redrawPoints: function () {
                var t,
                  e,
                  i,
                  s,
                  n = this,
                  o = n.chart,
                  r = o.renderer,
                  a = n.options.shadow;
                this.drawEmpty(),
                  !a ||
                    n.shadowGroup ||
                    o.styledMode ||
                    (n.shadowGroup = r
                      .g("shadow")
                      .attr({ zIndex: -1 })
                      .add(n.group)),
                  n.points.forEach(function (h) {
                    var c = {};
                    if (((e = h.graphic), !h.isNull && e)) {
                      if (
                        ((s = h.shapeArgs),
                        (t = h.getTranslate()),
                        !o.styledMode)
                      ) {
                        var d = h.shadowGroup;
                        a &&
                          !d &&
                          (d = h.shadowGroup =
                            r.g("shadow").add(n.shadowGroup)),
                          d && d.attr(t),
                          (i = n.pointAttribs(h, h.selected && "select"));
                      }
                      h.delayedRendering
                        ? (e.setRadialReference(n.center).attr(s).attr(t),
                          o.styledMode ||
                            e
                              .attr(i)
                              .attr({ "stroke-linejoin": "round" })
                              .shadow(a, d),
                          (h.delayedRendering = !1))
                        : (e.setRadialReference(n.center),
                          o.styledMode || l(!0, c, i),
                          l(!0, c, s, t),
                          e.animate(c)),
                        e.attr({
                          visibility: h.visible ? "inherit" : "hidden",
                        }),
                        e.addClass(h.getClassName());
                    } else e && (h.graphic = e.destroy());
                  });
              },
              drawPoints: function () {
                var t = this.chart.renderer;
                this.points.forEach(function (e) {
                  e.graphic &&
                    e.hasNewShapeType() &&
                    (e.graphic = e.graphic.destroy()),
                    e.graphic ||
                      ((e.graphic = t[e.shapeType](e.shapeArgs).add(
                        e.series.group
                      )),
                      (e.delayedRendering = !0));
                });
              },
              searchPoint: g,
              sortByAngle: function (t, e) {
                t.sort(function (t, i) {
                  return void 0 !== t.angle && (i.angle - t.angle) * e;
                });
              },
              drawLegendSymbol: e.drawRectangle,
              getCenter: s.getCenter,
              getSymbol: g,
              drawGraph: null,
            },
            {
              init: function () {
                i.prototype.init.apply(this, arguments);
                var t = this;
                t.name = c(t.name, "Slice");
                var e = function (e) {
                  t.slice("select" === e.type);
                };
                return n(t, "select", e), n(t, "unselect", e), t;
              },
              isValid: function () {
                return h(this.y) && 0 <= this.y;
              },
              setVisible: function (t, e) {
                var i = this,
                  s = i.series,
                  n = s.chart,
                  o = s.options.ignoreHiddenPoint;
                (e = c(e, o)),
                  t !== i.visible &&
                    ((i.visible =
                      i.options.visible =
                      t =
                        void 0 === t ? !i.visible : t),
                    (s.options.data[s.data.indexOf(i)] = i.options),
                    [
                      "graphic",
                      "dataLabel",
                      "connector",
                      "shadowGroup",
                    ].forEach(function (e) {
                      i[e] && i[e][t ? "show" : "hide"](!0);
                    }),
                    i.legendItem && n.legend.colorizeItem(i, t),
                    t || "hover" !== i.state || i.setState(""),
                    o && (s.isDirty = !0),
                    e && n.redraw());
              },
              slice: function (t, e, i) {
                var s = this.series;
                u(i, s.chart),
                  c(e, !0),
                  (this.sliced = this.options.sliced = r(t) ? t : !this.sliced),
                  (s.options.data[s.data.indexOf(this)] = this.options),
                  this.graphic && this.graphic.animate(this.getTranslate()),
                  this.shadowGroup &&
                    this.shadowGroup.animate(this.getTranslate());
              },
              getTranslate: function () {
                return this.sliced
                  ? this.slicedTranslation
                  : { translateX: 0, translateY: 0 };
              },
              haloPath: function (t) {
                var e = this.shapeArgs;
                return this.sliced || !this.visible
                  ? []
                  : this.series.chart.renderer.symbols.arc(
                      e.x,
                      e.y,
                      e.r + t,
                      e.r + t,
                      { innerR: e.r - 1, start: e.start, end: e.end }
                    );
              },
              connectorShapes: {
                fixedOffset: function (t, e, i) {
                  var s = e.breakAt;
                  return (
                    (e = e.touchingSliceAt),
                    [
                      ["M", t.x, t.y],
                      i.softConnector
                        ? [
                            "C",
                            t.x + ("left" === t.alignment ? -5 : 5),
                            t.y,
                            2 * s.x - e.x,
                            2 * s.y - e.y,
                            s.x,
                            s.y,
                          ]
                        : ["L", s.x, s.y],
                      ["L", e.x, e.y],
                    ]
                  );
                },
                straight: function (t, e) {
                  return (
                    (e = e.touchingSliceAt),
                    [
                      ["M", t.x, t.y],
                      ["L", e.x, e.y],
                    ]
                  );
                },
                crookedLine: function (t, e, i) {
                  e = e.touchingSliceAt;
                  var s = this.series,
                    n = s.center[0],
                    o = s.chart.plotWidth,
                    r = s.chart.plotLeft;
                  s = t.alignment;
                  var a = this.shapeArgs.r;
                  return (
                    (i = d(i.crookDistance, 1)),
                    (o =
                      "left" === s
                        ? n + a + (o + r - n - a) * (1 - i)
                        : r + (n - a) * i),
                    (i = ["L", o, t.y]),
                    (n = !0),
                    ("left" === s ? o > t.x || o < e.x : o < t.x || o > e.x) &&
                      (n = !1),
                    (t = [["M", t.x, t.y]]),
                    n && t.push(i),
                    t.push(["L", e.x, e.y]),
                    t
                  );
                },
              },
              getConnectorPath: function () {
                var t = this.labelPosition,
                  e = this.series.options.dataLabels,
                  i = e.connectorShape,
                  s = this.connectorShapes;
                return (
                  s[i] && (i = s[i]),
                  i.call(
                    this,
                    { x: t.final.x, y: t.final.y, alignment: t.alignment },
                    t.connectorPosition,
                    e
                  )
                );
              },
            }
          );
        }
      ),
      e(
        i,
        "parts/DataLabels.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.animObject,
            s = e.arrayMax,
            n = e.clamp,
            o = e.defined,
            r = e.extend,
            a = e.fireEvent,
            h = e.format,
            l = e.isArray,
            c = e.merge,
            d = e.objectEach,
            p = e.pick,
            u = e.relativeLength,
            f = e.splat,
            g = e.stableSort;
          e = t.noop;
          var m = t.Series,
            v = t.seriesTypes;
          (t.distribute = function (e, i, s) {
            function o(t, e) {
              return t.target - e.target;
            }
            var r,
              a = !0,
              h = e,
              l = [],
              c = 0,
              d = h.reducedLen || i;
            for (r = e.length; r--; ) c += e[r].size;
            if (c > d) {
              for (
                g(e, function (t, e) {
                  return (e.rank || 0) - (t.rank || 0);
                }),
                  c = r = 0;
                c <= d;

              )
                (c += e[r].size), r++;
              l = e.splice(r - 1, e.length);
            }
            for (
              g(e, o),
                e = e.map(function (t) {
                  return {
                    size: t.size,
                    targets: [t.target],
                    align: p(t.align, 0.5),
                  };
                });
              a;

            ) {
              for (r = e.length; r--; )
                (a = e[r]),
                  (c =
                    (Math.min.apply(0, a.targets) +
                      Math.max.apply(0, a.targets)) /
                    2),
                  (a.pos = n(c - a.size * a.align, 0, i - a.size));
              for (r = e.length, a = !1; r--; )
                0 < r &&
                  e[r - 1].pos + e[r - 1].size > e[r].pos &&
                  ((e[r - 1].size += e[r].size),
                  (e[r - 1].targets = e[r - 1].targets.concat(e[r].targets)),
                  (e[r - 1].align = 0.5),
                  e[r - 1].pos + e[r - 1].size > i &&
                    (e[r - 1].pos = i - e[r - 1].size),
                  e.splice(r, 1),
                  (a = !0));
            }
            h.push.apply(h, l),
              (r = 0),
              e.some(function (e) {
                var n = 0;
                if (
                  e.targets.some(function () {
                    if (
                      ((h[r].pos = e.pos + n),
                      void 0 !== s && Math.abs(h[r].pos - h[r].target) > s)
                    )
                      return (
                        h.slice(0, r + 1).forEach(function (t) {
                          delete t.pos;
                        }),
                        (h.reducedLen = (h.reducedLen || i) - 0.1 * i),
                        h.reducedLen > 0.1 * i && t.distribute(h, i, s),
                        !0
                      );
                    (n += h[r].size), r++;
                  })
                )
                  return !0;
              }),
              g(h, o);
          }),
            (m.prototype.drawDataLabels = function () {
              function t(t, e) {
                var i = e.filter;
                return (
                  !i ||
                  ((e = i.operator),
                  (t = t[i.property]),
                  (i = i.value),
                  (">" === e && t > i) ||
                    ("<" === e && t < i) ||
                    (">=" === e && t >= i) ||
                    ("<=" === e && t <= i) ||
                    ("==" === e && t == i) ||
                    ("===" === e && t === i))
                );
              }
              function e(t, e) {
                var i,
                  s = [];
                if (l(t) && !l(e))
                  s = t.map(function (t) {
                    return c(t, e);
                  });
                else if (l(e) && !l(t))
                  s = e.map(function (e) {
                    return c(t, e);
                  });
                else if (l(t) || l(e))
                  for (i = Math.max(t.length, e.length); i--; )
                    s[i] = c(t[i], e[i]);
                else s = c(t, e);
                return s;
              }
              var s,
                n = this,
                r = n.chart,
                u = n.options,
                g = u.dataLabels,
                m = n.points,
                v = n.hasRendered || 0,
                y = i(u.animation).duration,
                x = Math.min(y, 200),
                b = !r.renderer.forExport && p(g.defer, 0 < x),
                k = r.renderer;
              if (
                ((g = e(
                  e(
                    r.options.plotOptions &&
                      r.options.plotOptions.series &&
                      r.options.plotOptions.series.dataLabels,
                    r.options.plotOptions &&
                      r.options.plotOptions[n.type] &&
                      r.options.plotOptions[n.type].dataLabels
                  ),
                  g
                )),
                a(this, "drawDataLabels"),
                l(g) || g.enabled || n._hasPointLabels)
              ) {
                var w = n.plotGroup(
                  "dataLabelsGroup",
                  "data-labels",
                  b && !v ? "hidden" : "inherit",
                  g.zIndex || 6
                );
                b &&
                  (w.attr({ opacity: +v }),
                  v ||
                    setTimeout(function () {
                      var t = n.dataLabelsGroup;
                      t &&
                        (n.visible && w.show(!0),
                        t[u.animation ? "animate" : "attr"](
                          { opacity: 1 },
                          { duration: x }
                        ));
                    }, y - x)),
                  m.forEach(function (i) {
                    (s = f(
                      e(g, i.dlOptions || (i.options && i.options.dataLabels))
                    )),
                      s.forEach(function (e, s) {
                        var a =
                            e.enabled &&
                            (!i.isNull || i.dataLabelOnNull) &&
                            t(i, e),
                          l = i.dataLabels ? i.dataLabels[s] : i.dataLabel,
                          c = i.connectors ? i.connectors[s] : i.connector,
                          f = p(e.distance, i.labelDistance),
                          g = !l;
                        if (a) {
                          var m = i.getLabelConfig(),
                            v = p(e[i.formatPrefix + "Format"], e.format);
                          (m = o(v)
                            ? h(v, m, r)
                            : (
                                e[i.formatPrefix + "Formatter"] || e.formatter
                              ).call(m, e)),
                            (v = e.style);
                          var y = e.rotation;
                          r.styledMode ||
                            ((v.color = p(
                              e.color,
                              v.color,
                              n.color,
                              "#000000"
                            )),
                            "contrast" === v.color
                              ? ((i.contrastColor = k.getContrast(
                                  i.color || n.color
                                )),
                                (v.color =
                                  (!o(f) && e.inside) || 0 > f || u.stacking
                                    ? i.contrastColor
                                    : "#000000"))
                              : delete i.contrastColor,
                            u.cursor && (v.cursor = u.cursor));
                          var x = {
                            r: e.borderRadius || 0,
                            rotation: y,
                            padding: e.padding,
                            zIndex: 1,
                          };
                          r.styledMode ||
                            ((x.fill = e.backgroundColor),
                            (x.stroke = e.borderColor),
                            (x["stroke-width"] = e.borderWidth)),
                            d(x, function (t, e) {
                              void 0 === t && delete x[e];
                            });
                        }
                        !l || (a && o(m))
                          ? a &&
                            o(m) &&
                            (l
                              ? (x.text = m)
                              : ((i.dataLabels = i.dataLabels || []),
                                (l = i.dataLabels[s] =
                                  y
                                    ? k
                                        .text(m, 0, -9999, e.useHTML)
                                        .addClass("highcharts-data-label")
                                    : k.label(
                                        m,
                                        0,
                                        -9999,
                                        e.shape,
                                        null,
                                        null,
                                        e.useHTML,
                                        null,
                                        "data-label"
                                      )),
                                s || (i.dataLabel = l),
                                l.addClass(
                                  " highcharts-data-label-color-" +
                                    i.colorIndex +
                                    " " +
                                    (e.className || "") +
                                    (e.useHTML ? " highcharts-tracker" : "")
                                )),
                            (l.options = e),
                            l.attr(x),
                            r.styledMode || l.css(v).shadow(e.shadow),
                            l.added || l.add(w),
                            e.textPath &&
                              !e.useHTML &&
                              (l.setTextPath(
                                (i.getDataLabelPath && i.getDataLabelPath(l)) ||
                                  i.graphic,
                                e.textPath
                              ),
                              i.dataLabelPath &&
                                !e.textPath.enabled &&
                                (i.dataLabelPath = i.dataLabelPath.destroy())),
                            n.alignDataLabel(i, l, e, null, g))
                          : ((i.dataLabel =
                              i.dataLabel && i.dataLabel.destroy()),
                            i.dataLabels &&
                              (1 === i.dataLabels.length
                                ? delete i.dataLabels
                                : delete i.dataLabels[s]),
                            s || delete i.dataLabel,
                            c &&
                              ((i.connector = i.connector.destroy()),
                              i.connectors &&
                                (1 === i.connectors.length
                                  ? delete i.connectors
                                  : delete i.connectors[s])));
                      });
                  });
              }
              a(this, "afterDrawDataLabels");
            }),
            (m.prototype.alignDataLabel = function (t, e, i, s, n) {
              var o = this,
                a = this.chart,
                h = this.isCartesian && a.inverted,
                l = this.enabledDataSorting,
                c = p(t.dlBox && t.dlBox.centerX, t.plotX, -9999),
                d = p(t.plotY, -9999),
                u = e.getBBox(),
                f = i.rotation,
                g = i.align,
                m = a.isInsidePlot(c, Math.round(d), h),
                v = "justify" === p(i.overflow, l ? "none" : "justify"),
                y =
                  this.visible &&
                  !1 !== t.visible &&
                  (t.series.forceDL ||
                    (l && !v) ||
                    m ||
                    (i.inside &&
                      s &&
                      a.isInsidePlot(c, h ? s.x + 1 : s.y + s.height - 1, h))),
                x = function (i) {
                  l && o.xAxis && !v && o.setDataLabelStartPos(t, e, n, m, i);
                };
              if (y) {
                var b = a.renderer.fontMetrics(
                  a.styledMode ? void 0 : i.style.fontSize,
                  e
                ).b;
                (s = r(
                  {
                    x: h ? this.yAxis.len - d : c,
                    y: Math.round(h ? this.xAxis.len - c : d),
                    width: 0,
                    height: 0,
                  },
                  s
                )),
                  r(i, { width: u.width, height: u.height }),
                  f
                    ? ((v = !1),
                      (c = a.renderer.rotCorr(b, f)),
                      (c = {
                        x: s.x + i.x + s.width / 2 + c.x,
                        y:
                          s.y +
                          i.y +
                          { top: 0, middle: 0.5, bottom: 1 }[i.verticalAlign] *
                            s.height,
                      }),
                      x(c),
                      e[n ? "attr" : "animate"](c).attr({ align: g }),
                      (x = (f + 720) % 360),
                      (x = 180 < x && 360 > x),
                      "left" === g
                        ? (c.y -= x ? u.height : 0)
                        : "center" === g
                        ? ((c.x -= u.width / 2), (c.y -= u.height / 2))
                        : "right" === g &&
                          ((c.x -= u.width), (c.y -= x ? 0 : u.height)),
                      (e.placed = !0),
                      (e.alignAttr = c))
                    : (x(s), e.align(i, null, s), (c = e.alignAttr)),
                  v && 0 <= s.height
                    ? this.justifyDataLabel(e, i, c, u, s, n)
                    : p(i.crop, !0) &&
                      (y =
                        a.isInsidePlot(c.x, c.y) &&
                        a.isInsidePlot(c.x + u.width, c.y + u.height)),
                  i.shape &&
                    !f &&
                    e[n ? "attr" : "animate"]({
                      anchorX: h ? a.plotWidth - t.plotY : t.plotX,
                      anchorY: h ? a.plotHeight - t.plotX : t.plotY,
                    });
              }
              n && l && (e.placed = !1),
                y || (l && !v) || (e.hide(!0), (e.placed = !1));
            }),
            (m.prototype.setDataLabelStartPos = function (t, e, i, s, n) {
              var o = this.chart,
                r = o.inverted,
                a = this.xAxis,
                h = a.reversed,
                l = r ? e.height / 2 : e.width / 2;
              (t = (t = t.pointWidth) ? t / 2 : 0),
                (a = r ? n.x : h ? -l - t : a.width - l + t),
                (n = r ? (h ? this.yAxis.height - l + t : -l - t) : n.y),
                (e.startXPos = a),
                (e.startYPos = n),
                s
                  ? "hidden" === e.visibility &&
                    (e.show(), e.attr({ opacity: 0 }).animate({ opacity: 1 }))
                  : e
                      .attr({ opacity: 1 })
                      .animate({ opacity: 0 }, void 0, e.hide),
                o.hasRendered &&
                  (i && e.attr({ x: e.startXPos, y: e.startYPos }),
                  (e.placed = !0));
            }),
            (m.prototype.justifyDataLabel = function (t, e, i, s, n, o) {
              var r = this.chart,
                a = e.align,
                h = e.verticalAlign,
                l = t.box ? 0 : t.padding || 0,
                c = i.x + l;
              if (0 > c) {
                "right" === a
                  ? ((e.align = "left"), (e.inside = !0))
                  : (e.x = -c);
                var d = !0;
              }
              return (
                (c = i.x + s.width - l),
                c > r.plotWidth &&
                  ("left" === a
                    ? ((e.align = "right"), (e.inside = !0))
                    : (e.x = r.plotWidth - c),
                  (d = !0)),
                (c = i.y + l),
                0 > c &&
                  ("bottom" === h
                    ? ((e.verticalAlign = "top"), (e.inside = !0))
                    : (e.y = -c),
                  (d = !0)),
                (c = i.y + s.height - l),
                c > r.plotHeight &&
                  ("top" === h
                    ? ((e.verticalAlign = "bottom"), (e.inside = !0))
                    : (e.y = r.plotHeight - c),
                  (d = !0)),
                d && ((t.placed = !o), t.align(e, null, n)),
                d
              );
            }),
            v.pie &&
              ((v.pie.prototype.dataLabelPositioners = {
                radialDistributionY: function (t) {
                  return t.top + t.distributeBox.pos;
                },
                radialDistributionX: function (t, e, i, s) {
                  return t.getX(
                    i < e.top + 2 || i > e.bottom - 2 ? s : i,
                    e.half,
                    e
                  );
                },
                justify: function (t, e, i) {
                  return i[0] + (t.half ? -1 : 1) * (e + t.labelDistance);
                },
                alignToPlotEdges: function (t, e, i, s) {
                  return (t = t.getBBox().width), e ? t + s : i - t - s;
                },
                alignToConnectors: function (t, e, i, s) {
                  var n,
                    o = 0;
                  return (
                    t.forEach(function (t) {
                      (n = t.dataLabel.getBBox().width) > o && (o = n);
                    }),
                    e ? o + s : i - o - s
                  );
                },
              }),
              (v.pie.prototype.drawDataLabels = function () {
                var e,
                  i,
                  n,
                  r,
                  a,
                  h,
                  l,
                  d,
                  u,
                  f,
                  g,
                  v,
                  y = this,
                  x = y.data,
                  b = y.chart,
                  k = y.options.dataLabels || {},
                  w = k.connectorPadding,
                  M = b.plotWidth,
                  S = b.plotHeight,
                  T = b.plotLeft,
                  C = Math.round(b.chartWidth / 3),
                  A = y.center,
                  D = A[2] / 2,
                  E = A[1],
                  O = [[], []],
                  L = [0, 0, 0, 0],
                  P = y.dataLabelPositioners;
                y.visible &&
                  (k.enabled || y._hasPointLabels) &&
                  (x.forEach(function (t) {
                    t.dataLabel &&
                      t.visible &&
                      t.dataLabel.shortened &&
                      (t.dataLabel
                        .attr({ width: "auto" })
                        .css({ width: "auto", textOverflow: "clip" }),
                      (t.dataLabel.shortened = !1));
                  }),
                  m.prototype.drawDataLabels.apply(y),
                  x.forEach(function (t) {
                    t.dataLabel &&
                      (t.visible
                        ? (O[t.half].push(t),
                          (t.dataLabel._pos = null),
                          !o(k.style.width) &&
                            !o(
                              t.options.dataLabels &&
                                t.options.dataLabels.style &&
                                t.options.dataLabels.style.width
                            ) &&
                            t.dataLabel.getBBox().width > C &&
                            (t.dataLabel.css({
                              width: Math.round(0.7 * C) + "px",
                            }),
                            (t.dataLabel.shortened = !0)))
                        : ((t.dataLabel = t.dataLabel.destroy()),
                          t.dataLabels &&
                            1 === t.dataLabels.length &&
                            delete t.dataLabels));
                  }),
                  O.forEach(function (i, s) {
                    var n,
                      c = i.length,
                      m = [];
                    if (c) {
                      if ((y.sortByAngle(i, s - 0.5), 0 < y.maxLabelDistance)) {
                        var x = Math.max(0, E - D - y.maxLabelDistance),
                          C = Math.min(
                            E + D + y.maxLabelDistance,
                            b.plotHeight
                          );
                        i.forEach(function (t) {
                          0 < t.labelDistance &&
                            t.dataLabel &&
                            ((t.top = Math.max(0, E - D - t.labelDistance)),
                            (t.bottom = Math.min(
                              E + D + t.labelDistance,
                              b.plotHeight
                            )),
                            (n = t.dataLabel.getBBox().height || 21),
                            (t.distributeBox = {
                              target: t.labelPosition.natural.y - t.top + n / 2,
                              size: n,
                              rank: t.y,
                            }),
                            m.push(t.distributeBox));
                        }),
                          (x = C + n - x),
                          t.distribute(m, x, x / 5);
                      }
                      for (g = 0; g < c; g++) {
                        if (
                          ((e = i[g]),
                          (h = e.labelPosition),
                          (r = e.dataLabel),
                          (f = !1 === e.visible ? "hidden" : "inherit"),
                          (u = x = h.natural.y),
                          m &&
                            o(e.distributeBox) &&
                            (void 0 === e.distributeBox.pos
                              ? (f = "hidden")
                              : ((l = e.distributeBox.size),
                                (u = P.radialDistributionY(e)))),
                          delete e.positionIndex,
                          k.justify)
                        )
                          d = P.justify(e, D, A);
                        else
                          switch (k.alignTo) {
                            case "connectors":
                              d = P.alignToConnectors(i, s, M, T);
                              break;
                            case "plotEdges":
                              d = P.alignToPlotEdges(r, s, M, T);
                              break;
                            default:
                              d = P.radialDistributionX(y, e, u, x);
                          }
                        (r._attr = { visibility: f, align: h.alignment }),
                          (v = e.options.dataLabels || {}),
                          (r._pos = {
                            x:
                              d +
                              p(v.x, k.x) +
                              ({ left: w, right: -w }[h.alignment] || 0),
                            y: u + p(v.y, k.y) - 10,
                          }),
                          (h.final.x = d),
                          (h.final.y = u),
                          p(k.crop, !0) &&
                            ((a = r.getBBox().width),
                            (x = null),
                            d - a < w && 1 === s
                              ? ((x = Math.round(a - d + w)),
                                (L[3] = Math.max(x, L[3])))
                              : d + a > M - w &&
                                0 === s &&
                                ((x = Math.round(d + a - M + w)),
                                (L[1] = Math.max(x, L[1]))),
                            0 > u - l / 2
                              ? (L[0] = Math.max(Math.round(l / 2 - u), L[0]))
                              : u + l / 2 > S &&
                                (L[2] = Math.max(
                                  Math.round(u + l / 2 - S),
                                  L[2]
                                )),
                            (r.sideOverflow = x));
                      }
                    }
                  }),
                  0 === s(L) || this.verifyDataLabelOverflow(L)) &&
                  (this.placeDataLabels(),
                  this.points.forEach(function (t) {
                    if (
                      ((v = c(k, t.options.dataLabels)),
                      (i = p(v.connectorWidth, 1)))
                    ) {
                      var e;
                      (n = t.connector),
                        (r = t.dataLabel) &&
                        r._pos &&
                        t.visible &&
                        0 < t.labelDistance
                          ? ((f = r._attr.visibility),
                            (e = !n) &&
                              ((t.connector = n =
                                b.renderer
                                  .path()
                                  .addClass(
                                    "highcharts-data-label-connector  highcharts-color-" +
                                      t.colorIndex +
                                      (t.className ? " " + t.className : "")
                                  )
                                  .add(y.dataLabelsGroup)),
                              b.styledMode ||
                                n.attr({
                                  "stroke-width": i,
                                  stroke:
                                    v.connectorColor || t.color || "#666666",
                                })),
                            n[e ? "attr" : "animate"]({
                              d: t.getConnectorPath(),
                            }),
                            n.attr("visibility", f))
                          : n && (t.connector = n.destroy());
                    }
                  }));
              }),
              (v.pie.prototype.placeDataLabels = function () {
                this.points.forEach(function (t) {
                  var e,
                    i = t.dataLabel;
                  i &&
                    t.visible &&
                    ((e = i._pos)
                      ? (i.sideOverflow &&
                          ((i._attr.width = Math.max(
                            i.getBBox().width - i.sideOverflow,
                            0
                          )),
                          i.css({
                            width: i._attr.width + "px",
                            textOverflow:
                              (this.options.dataLabels.style || {})
                                .textOverflow || "ellipsis",
                          }),
                          (i.shortened = !0)),
                        i.attr(i._attr),
                        i[i.moved ? "animate" : "attr"](e),
                        (i.moved = !0))
                      : i && i.attr({ y: -9999 })),
                    delete t.distributeBox;
                }, this);
              }),
              (v.pie.prototype.alignDataLabel = e),
              (v.pie.prototype.verifyDataLabelOverflow = function (t) {
                var e = this.center,
                  i = this.options,
                  s = i.center,
                  o = i.minSize || 80,
                  r = null !== i.size;
                if (!r) {
                  if (null !== s[0])
                    var a = Math.max(e[2] - Math.max(t[1], t[3]), o);
                  else
                    (a = Math.max(e[2] - t[1] - t[3], o)),
                      (e[0] += (t[3] - t[1]) / 2);
                  null !== s[1]
                    ? (a = n(a, o, e[2] - Math.max(t[0], t[2])))
                    : ((a = n(a, o, e[2] - t[0] - t[2])),
                      (e[1] += (t[0] - t[2]) / 2)),
                    a < e[2]
                      ? ((e[2] = a),
                        (e[3] = Math.min(u(i.innerSize || 0, a), a)),
                        this.translate(e),
                        this.drawDataLabels && this.drawDataLabels())
                      : (r = !0);
                }
                return r;
              })),
            v.column &&
              (v.column.prototype.alignDataLabel = function (t, e, i, s, n) {
                var o = this.chart.inverted,
                  r = t.series,
                  a = t.dlBox || t.shapeArgs,
                  h = p(
                    t.below,
                    t.plotY > p(this.translatedThreshold, r.yAxis.len)
                  ),
                  l = p(i.inside, !!this.options.stacking);
                a &&
                  ((s = c(a)),
                  0 > s.y && ((s.height += s.y), (s.y = 0)),
                  (a = s.y + s.height - r.yAxis.len),
                  0 < a && a < s.height && (s.height -= a),
                  o &&
                    (s = {
                      x: r.yAxis.len - s.y - s.height,
                      y: r.xAxis.len - s.x - s.width,
                      width: s.height,
                      height: s.width,
                    }),
                  l ||
                    (o
                      ? ((s.x += h ? 0 : s.width), (s.width = 0))
                      : ((s.y += h ? s.height : 0), (s.height = 0)))),
                  (i.align = p(
                    i.align,
                    !o || l ? "center" : h ? "right" : "left"
                  )),
                  (i.verticalAlign = p(
                    i.verticalAlign,
                    o || l ? "middle" : h ? "top" : "bottom"
                  )),
                  m.prototype.alignDataLabel.call(this, t, e, i, s, n),
                  i.inside &&
                    t.contrastColor &&
                    e.css({ color: t.contrastColor });
              });
        }
      ),
      e(
        i,
        "modules/overlapping-datalabels.src.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.addEvent,
            s = e.fireEvent,
            n = e.isArray,
            o = e.objectEach,
            r = e.pick;
          (t = t.Chart),
            i(t, "render", function () {
              var t = [];
              (this.labelCollectors || []).forEach(function (e) {
                t = t.concat(e());
              }),
                (this.yAxis || []).forEach(function (e) {
                  e.stacking &&
                    e.options.stackLabels &&
                    !e.options.stackLabels.allowOverlap &&
                    o(e.stacking.stacks, function (e) {
                      o(e, function (e) {
                        t.push(e.label);
                      });
                    });
                }),
                (this.series || []).forEach(function (e) {
                  var i = e.options.dataLabels;
                  e.visible &&
                    (!1 !== i.enabled || e._hasPointLabels) &&
                    (e.nodes || e.points).forEach(function (e) {
                      e.visible &&
                        (n(e.dataLabels)
                          ? e.dataLabels
                          : e.dataLabel
                          ? [e.dataLabel]
                          : []
                        ).forEach(function (i) {
                          var s = i.options;
                          (i.labelrank = r(
                            s.labelrank,
                            e.labelrank,
                            e.shapeArgs && e.shapeArgs.height
                          )),
                            s.allowOverlap || t.push(i);
                        });
                    });
                }),
                this.hideOverlappingLabels(t);
            }),
            (t.prototype.hideOverlappingLabels = function (t) {
              var e,
                i,
                n,
                o = this,
                r = t.length,
                a = o.renderer,
                h = !1,
                l = function (t) {
                  var e,
                    i,
                    s = t.box ? 0 : t.padding || 0,
                    n = (e = 0);
                  if (t && (!t.alignAttr || t.placed)) {
                    var o = t.alignAttr || { x: t.attr("x"), y: t.attr("y") },
                      r = t.parentGroup;
                    t.width ||
                      ((e = t.getBBox()),
                      (t.width = e.width),
                      (t.height = e.height),
                      (e = a.fontMetrics(null, t.element).h));
                    var h = t.width - 2 * s;
                    return (
                      (i = { left: "0", center: "0.5", right: "1" }[
                        t.alignValue
                      ])
                        ? (n = +i * h)
                        : Math.round(t.x) !== t.translateX &&
                          (n = t.x - t.translateX),
                      {
                        x: o.x + (r.translateX || 0) + s - n,
                        y: o.y + (r.translateY || 0) + s - e,
                        width: t.width - 2 * s,
                        height: t.height - 2 * s,
                      }
                    );
                  }
                };
              for (i = 0; i < r; i++)
                (e = t[i]) &&
                  ((e.oldOpacity = e.opacity),
                  (e.newOpacity = 1),
                  (e.absoluteBox = l(e)));
              for (
                t.sort(function (t, e) {
                  return (e.labelrank || 0) - (t.labelrank || 0);
                }),
                  i = 0;
                i < r;
                i++
              ) {
                var c = (l = t[i]) && l.absoluteBox;
                for (e = i + 1; e < r; ++e) {
                  var d = (n = t[e]) && n.absoluteBox;
                  !c ||
                    !d ||
                    l === n ||
                    0 === l.newOpacity ||
                    0 === n.newOpacity ||
                    d.x > c.x + c.width ||
                    d.x + d.width < c.x ||
                    d.y > c.y + c.height ||
                    d.y + d.height < c.y ||
                    ((l.labelrank < n.labelrank ? l : n).newOpacity = 0);
                }
              }
              t.forEach(function (t) {
                if (t) {
                  var e = t.newOpacity;
                  t.oldOpacity !== e &&
                    (t.alignAttr && t.placed
                      ? (t[e ? "removeClass" : "addClass"](
                          "highcharts-data-label-hidden"
                        ),
                        (h = !0),
                        (t.alignAttr.opacity = e),
                        t[t.isOld ? "animate" : "attr"](
                          t.alignAttr,
                          null,
                          function () {
                            o.styledMode ||
                              t.css({ pointerEvents: e ? "auto" : "none" }),
                              (t.visibility = e ? "inherit" : "hidden"),
                              (t.placed = !!e);
                          }
                        ),
                        s(o, "afterHideOverlappingLabel"))
                      : t.attr({ opacity: e })),
                    (t.isOld = !0);
                }
              }),
                h && s(o, "afterHideAllOverlappingLabels");
            });
        }
      ),
      e(
        i,
        "parts/Interaction.js",
        [
          i["parts/Globals.js"],
          i["parts/Legend.js"],
          i["parts/Point.js"],
          i["parts/Utilities.js"],
        ],
        function (t, e, i, s) {
          var n = s.addEvent,
            o = s.createElement,
            r = s.css,
            a = s.defined,
            h = s.extend,
            l = s.fireEvent,
            c = s.isArray,
            d = s.isFunction,
            p = s.isNumber,
            u = s.isObject,
            f = s.merge,
            g = s.objectEach,
            m = s.pick;
          s = t.Chart;
          var v = t.defaultOptions,
            y = t.defaultPlotOptions,
            x = t.hasTouch,
            b = t.Series,
            k = t.seriesTypes,
            w = t.svg,
            M = (t.TrackerMixin = {
              drawTrackerPoint: function () {
                var t,
                  e = this,
                  i = e.chart,
                  s = i.pointer,
                  n = function (t) {
                    var e = s.getPointFromEvent(t);
                    void 0 !== e && ((s.isDirectTouch = !0), e.onMouseOver(t));
                  };
                e.points.forEach(function (e) {
                  (t = c(e.dataLabels)
                    ? e.dataLabels
                    : e.dataLabel
                    ? [e.dataLabel]
                    : []),
                    e.graphic && (e.graphic.element.point = e),
                    t.forEach(function (t) {
                      t.div ? (t.div.point = e) : (t.element.point = e);
                    });
                }),
                  e._hasTracking ||
                    (e.trackerGroups.forEach(function (t) {
                      e[t] &&
                        (e[t]
                          .addClass("highcharts-tracker")
                          .on("mouseover", n)
                          .on("mouseout", function (t) {
                            s.onTrackerMouseOut(t);
                          }),
                        x && e[t].on("touchstart", n),
                        !i.styledMode &&
                          e.options.cursor &&
                          e[t].css(r).css({ cursor: e.options.cursor }));
                    }),
                    (e._hasTracking = !0)),
                  l(this, "afterDrawTracker");
              },
              drawTrackerGraph: function () {
                var t = this,
                  e = t.options,
                  i = e.trackByArea,
                  s = [].concat(i ? t.areaPath : t.graphPath),
                  n = t.chart,
                  o = n.pointer,
                  r = n.renderer,
                  a = n.options.tooltip.snap,
                  h = t.tracker,
                  c = function (e) {
                    n.hoverSeries !== t && t.onMouseOver();
                  },
                  d = "rgba(192,192,192," + (w ? 1e-4 : 0.002) + ")";
                h
                  ? h.attr({ d: s })
                  : t.graph &&
                    ((t.tracker = r
                      .path(s)
                      .attr({
                        visibility: t.visible ? "visible" : "hidden",
                        zIndex: 2,
                      })
                      .addClass(
                        i
                          ? "highcharts-tracker-area"
                          : "highcharts-tracker-line"
                      )
                      .add(t.group)),
                    n.styledMode ||
                      t.tracker.attr({
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        stroke: d,
                        fill: i ? d : "none",
                        "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * a),
                      }),
                    [t.tracker, t.markerGroup].forEach(function (t) {
                      t
                        .addClass("highcharts-tracker")
                        .on("mouseover", c)
                        .on("mouseout", function (t) {
                          o.onTrackerMouseOut(t);
                        }),
                        e.cursor &&
                          !n.styledMode &&
                          t.css({ cursor: e.cursor }),
                        x && t.on("touchstart", c);
                    })),
                  l(this, "afterDrawTracker");
              },
            });
          k.column && (k.column.prototype.drawTracker = M.drawTrackerPoint),
            k.pie && (k.pie.prototype.drawTracker = M.drawTrackerPoint),
            k.scatter && (k.scatter.prototype.drawTracker = M.drawTrackerPoint),
            h(e.prototype, {
              setItemEvents: function (t, e, s) {
                var n = this,
                  o = n.chart.renderer.boxWrapper,
                  r = t instanceof i,
                  a =
                    "highcharts-legend-" + (r ? "point" : "series") + "-active",
                  h = n.chart.styledMode;
                (s ? [e, t.legendSymbol] : [t.legendGroup]).forEach(function (
                  i
                ) {
                  i &&
                    i
                      .on("mouseover", function () {
                        t.visible &&
                          n.allItems.forEach(function (e) {
                            t !== e && e.setState("inactive", !r);
                          }),
                          t.setState("hover"),
                          t.visible && o.addClass(a),
                          h || e.css(n.options.itemHoverStyle);
                      })
                      .on("mouseout", function () {
                        n.chart.styledMode ||
                          e.css(f(t.visible ? n.itemStyle : n.itemHiddenStyle)),
                          n.allItems.forEach(function (e) {
                            t !== e && e.setState("", !r);
                          }),
                          o.removeClass(a),
                          t.setState();
                      })
                      .on("click", function (e) {
                        var i = function () {
                          t.setVisible && t.setVisible(),
                            n.allItems.forEach(function (e) {
                              t !== e &&
                                e.setState(t.visible ? "inactive" : "", !r);
                            });
                        };
                        o.removeClass(a),
                          (e = { browserEvent: e }),
                          t.firePointEvent
                            ? t.firePointEvent("legendItemClick", e, i)
                            : l(t, "legendItemClick", e, i);
                      });
                });
              },
              createCheckboxForItem: function (t) {
                (t.checkbox = o(
                  "input",
                  {
                    type: "checkbox",
                    className: "highcharts-legend-checkbox",
                    checked: t.selected,
                    defaultChecked: t.selected,
                  },
                  this.options.itemCheckboxStyle,
                  this.chart.container
                )),
                  n(t.checkbox, "click", function (e) {
                    l(
                      t.series || t,
                      "checkboxClick",
                      { checked: e.target.checked, item: t },
                      function () {
                        t.select();
                      }
                    );
                  });
              },
            }),
            h(s.prototype, {
              showResetZoom: function () {
                function t() {
                  e.zoomOut();
                }
                var e = this,
                  i = v.lang,
                  s = e.options.chart.resetZoomButton,
                  n = s.theme,
                  o = n.states,
                  r =
                    "chart" === s.relativeTo || "spaceBox" === s.relativeTo
                      ? null
                      : "plotBox";
                l(this, "beforeShowResetZoom", null, function () {
                  e.resetZoomButton = e.renderer
                    .button(i.resetZoom, null, null, t, n, o && o.hover)
                    .attr({ align: s.position.align, title: i.resetZoomTitle })
                    .addClass("highcharts-reset-zoom")
                    .add()
                    .align(s.position, !1, r);
                }),
                  l(this, "afterShowResetZoom");
              },
              zoomOut: function () {
                l(this, "selection", { resetSelection: !0 }, this.zoom);
              },
              zoom: function (t) {
                var e,
                  i = this,
                  s = i.pointer,
                  n = !1,
                  o = i.inverted ? s.mouseDownX : s.mouseDownY;
                !t || t.resetSelection
                  ? (i.axes.forEach(function (t) {
                      e = t.zoom();
                    }),
                    (s.initiated = !1))
                  : t.xAxis.concat(t.yAxis).forEach(function (t) {
                      var r = t.axis,
                        h = i.inverted ? r.left : r.top,
                        l = i.inverted ? h + r.width : h + r.height,
                        c = r.isXAxis,
                        d = !1;
                      ((!c && o >= h && o <= l) || c || !a(o)) && (d = !0),
                        s[c ? "zoomX" : "zoomY"] &&
                          d &&
                          ((e = r.zoom(t.min, t.max)),
                          r.displayBtn && (n = !0));
                    });
                var r = i.resetZoomButton;
                n && !r
                  ? i.showResetZoom()
                  : !n && u(r) && (i.resetZoomButton = r.destroy()),
                  e &&
                    i.redraw(
                      m(
                        i.options.chart.animation,
                        t && t.animation,
                        100 > i.pointCount
                      )
                    );
              },
              pan: function (e, i) {
                var s,
                  n = this,
                  o = n.hoverPoints,
                  a = n.options.chart,
                  h =
                    n.options.mapNavigation && n.options.mapNavigation.enabled;
                (i = "object" == typeof i ? i : { enabled: i, type: "x" }),
                  a && a.panning && (a.panning = i);
                var c = i.type;
                l(this, "pan", { originalEvent: e }, function () {
                  o &&
                    o.forEach(function (t) {
                      t.setState();
                    });
                  var i = [1];
                  "xy" === c ? (i = [1, 0]) : "y" === c && (i = [0]),
                    i.forEach(function (i) {
                      var o = n[i ? "xAxis" : "yAxis"][0],
                        r = o.options,
                        a = o.horiz,
                        l = e[a ? "chartX" : "chartY"];
                      a = a ? "mouseDownX" : "mouseDownY";
                      var d = n[a],
                        u = (o.pointRange || 0) / 2,
                        f =
                          (o.reversed && !n.inverted) ||
                          (!o.reversed && n.inverted)
                            ? -1
                            : 1,
                        g = o.getExtremes(),
                        m = o.toValue(d - l, !0) + u * f;
                      f = o.toValue(d + o.len - l, !0) - u * f;
                      var v = f < m;
                      (d = v ? f : m), (m = v ? m : f);
                      var y = o.hasVerticalPanning(),
                        x = o.panningState;
                      o.series.forEach(function (t) {
                        if (y && !i && (!x || x.isDirty)) {
                          var e = t.getProcessedData(!0);
                          (t = t.getExtremes(e.yData, !0)),
                            x ||
                              (x = {
                                startMin: Number.MAX_VALUE,
                                startMax: -Number.MAX_VALUE,
                              }),
                            p(t.dataMin) &&
                              p(t.dataMax) &&
                              ((x.startMin = Math.min(t.dataMin, x.startMin)),
                              (x.startMax = Math.max(t.dataMax, x.startMax)));
                        }
                      }),
                        (f = Math.min(
                          t.pick(
                            null === x || void 0 === x ? void 0 : x.startMin,
                            g.dataMin
                          ),
                          u
                            ? g.min
                            : o.toValue(o.toPixels(g.min) - o.minPixelPadding)
                        )),
                        (u = Math.max(
                          t.pick(
                            null === x || void 0 === x ? void 0 : x.startMax,
                            g.dataMax
                          ),
                          u
                            ? g.max
                            : o.toValue(o.toPixels(g.max) + o.minPixelPadding)
                        )),
                        (o.panningState = x),
                        r.ordinal ||
                          ((r = f - d),
                          0 < r && ((m += r), (d = f)),
                          (r = m - u),
                          0 < r && ((m = u), (d -= r)),
                          ((o.series.length &&
                            d !== g.min &&
                            m !== g.max &&
                            i) ||
                            (x && d >= f && m <= u)) &&
                            (o.setExtremes(d, m, !1, !1, { trigger: "pan" }),
                            n.resetZoomButton ||
                              h ||
                              !c.match("y") ||
                              (n.showResetZoom(), (o.displayBtn = !1)),
                            (s = !0)),
                          (n[a] = l));
                    }),
                    s && n.redraw(!1),
                    r(n.container, { cursor: "move" });
                });
              },
            }),
            h(i.prototype, {
              select: function (t, e) {
                var i = this,
                  s = i.series,
                  n = s.chart;
                (this.selectedStaging = t = m(t, !i.selected)),
                  i.firePointEvent(
                    t ? "select" : "unselect",
                    { accumulate: e },
                    function () {
                      (i.selected = i.options.selected = t),
                        (s.options.data[s.data.indexOf(i)] = i.options),
                        i.setState(t && "select"),
                        e ||
                          n.getSelectedPoints().forEach(function (t) {
                            var e = t.series;
                            t.selected &&
                              t !== i &&
                              ((t.selected = t.options.selected = !1),
                              (e.options.data[e.data.indexOf(t)] = t.options),
                              t.setState(
                                n.hoverPoints && e.options.inactiveOtherPoints
                                  ? "inactive"
                                  : ""
                              ),
                              t.firePointEvent("unselect"));
                          });
                    }
                  ),
                  delete this.selectedStaging;
              },
              onMouseOver: function (t) {
                var e = this.series.chart,
                  i = e.pointer;
                (t = t
                  ? i.normalize(t)
                  : i.getChartCoordinatesFromPoint(this, e.inverted)),
                  i.runPointActions(t, this);
              },
              onMouseOut: function () {
                var t = this.series.chart;
                this.firePointEvent("mouseOut"),
                  this.series.options.inactiveOtherPoints ||
                    (t.hoverPoints || []).forEach(function (t) {
                      t.setState();
                    }),
                  (t.hoverPoints = t.hoverPoint = null);
              },
              importEvents: function () {
                if (!this.hasImportedEvents) {
                  var t = this,
                    e = f(t.series.options.point, t.options).events;
                  (t.events = e),
                    g(e, function (e, i) {
                      d(e) && n(t, i, e);
                    }),
                    (this.hasImportedEvents = !0);
                }
              },
              setState: function (t, e) {
                var i,
                  s = this.series,
                  n = this.state,
                  o = s.options.states[t || "normal"] || {},
                  r = y[s.type].marker && s.options.marker,
                  a = r && !1 === r.enabled,
                  c = (r && r.states && r.states[t || "normal"]) || {},
                  d = !1 === c.enabled,
                  p = s.stateMarkerGraphic,
                  u = this.marker || {},
                  f = s.chart,
                  g = s.halo,
                  v = r && s.markerAttribs;
                if (
                  !(
                    ((t = t || "") === this.state && !e) ||
                    (this.selected && "select" !== t) ||
                    !1 === o.enabled ||
                    (t && (d || (a && !1 === c.enabled))) ||
                    (t && u.states && u.states[t] && !1 === u.states[t].enabled)
                  )
                ) {
                  if (
                    ((this.state = t),
                    v && (i = s.markerAttribs(this, t)),
                    this.graphic)
                  ) {
                    if (
                      (n && this.graphic.removeClass("highcharts-point-" + n),
                      t && this.graphic.addClass("highcharts-point-" + t),
                      !f.styledMode)
                    ) {
                      var x = s.pointAttribs(this, t),
                        b = m(f.options.chart.animation, o.animation);
                      s.options.inactiveOtherPoints &&
                        x.opacity &&
                        ((this.dataLabels || []).forEach(function (t) {
                          t && t.animate({ opacity: x.opacity }, b);
                        }),
                        this.connector &&
                          this.connector.animate({ opacity: x.opacity }, b)),
                        this.graphic.animate(x, b);
                    }
                    i &&
                      this.graphic.animate(
                        i,
                        m(f.options.chart.animation, c.animation, r.animation)
                      ),
                      p && p.hide();
                  } else
                    t &&
                      c &&
                      ((n = u.symbol || s.symbol),
                      p && p.currentSymbol !== n && (p = p.destroy()),
                      i &&
                        (p
                          ? p[e ? "animate" : "attr"]({ x: i.x, y: i.y })
                          : n &&
                            ((s.stateMarkerGraphic = p =
                              f.renderer
                                .symbol(n, i.x, i.y, i.width, i.height)
                                .add(s.markerGroup)),
                            (p.currentSymbol = n))),
                      !f.styledMode && p && p.attr(s.pointAttribs(this, t))),
                      p &&
                        (p[t && this.isInside ? "show" : "hide"](),
                        (p.element.point = this));
                  (t = o.halo),
                    (o =
                      ((p = this.graphic || p) && p.visibility) || "inherit"),
                    t && t.size && p && "hidden" !== o && !this.isCluster
                      ? (g ||
                          (s.halo = g = f.renderer.path().add(p.parentGroup)),
                        g
                          .show()
                          [e ? "animate" : "attr"]({
                            d: this.haloPath(t.size),
                          }),
                        g.attr({
                          class:
                            "highcharts-halo highcharts-color-" +
                            m(this.colorIndex, s.colorIndex) +
                            (this.className ? " " + this.className : ""),
                          visibility: o,
                          zIndex: -1,
                        }),
                        (g.point = this),
                        f.styledMode ||
                          g.attr(
                            h(
                              {
                                fill: this.color || s.color,
                                "fill-opacity": t.opacity,
                              },
                              t.attributes
                            )
                          ))
                      : g &&
                        g.point &&
                        g.point.haloPath &&
                        g.animate({ d: g.point.haloPath(0) }, null, g.hide),
                    l(this, "afterSetState");
                }
              },
              haloPath: function (t) {
                return this.series.chart.renderer.symbols.circle(
                  Math.floor(this.plotX) - t,
                  this.plotY - t,
                  2 * t,
                  2 * t
                );
              },
            }),
            h(b.prototype, {
              onMouseOver: function () {
                var t = this.chart,
                  e = t.hoverSeries;
                t.pointer.setHoverChartIndex(),
                  e && e !== this && e.onMouseOut(),
                  this.options.events.mouseOver && l(this, "mouseOver"),
                  this.setState("hover"),
                  (t.hoverSeries = this);
              },
              onMouseOut: function () {
                var t = this.options,
                  e = this.chart,
                  i = e.tooltip,
                  s = e.hoverPoint;
                (e.hoverSeries = null),
                  s && s.onMouseOut(),
                  this && t.events.mouseOut && l(this, "mouseOut"),
                  !i ||
                    this.stickyTracking ||
                    (i.shared && !this.noSharedTooltip) ||
                    i.hide(),
                  e.series.forEach(function (t) {
                    t.setState("", !0);
                  });
              },
              setState: function (t, e) {
                var i = this,
                  s = i.options,
                  n = i.graph,
                  o = s.inactiveOtherPoints,
                  r = s.states,
                  a = s.lineWidth,
                  h = s.opacity,
                  l = m(
                    r[t || "normal"] && r[t || "normal"].animation,
                    i.chart.options.chart.animation
                  );
                if (
                  ((s = 0),
                  (t = t || ""),
                  i.state !== t &&
                    ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(
                      function (e) {
                        e &&
                          (i.state &&
                            e.removeClass("highcharts-series-" + i.state),
                          t && e.addClass("highcharts-series-" + t));
                      }
                    ),
                    (i.state = t),
                    !i.chart.styledMode))
                ) {
                  if (r[t] && !1 === r[t].enabled) return;
                  if (
                    (t &&
                      ((a = r[t].lineWidth || a + (r[t].lineWidthPlus || 0)),
                      (h = m(r[t].opacity, h))),
                    n && !n.dashstyle)
                  )
                    for (
                      r = { "stroke-width": a }, n.animate(r, l);
                      i["zone-graph-" + s];

                    )
                      i["zone-graph-" + s].attr(r), (s += 1);
                  o ||
                    [
                      i.group,
                      i.markerGroup,
                      i.dataLabelsGroup,
                      i.labelBySeries,
                    ].forEach(function (t) {
                      t && t.animate({ opacity: h }, l);
                    });
                }
                e && o && i.points && i.setAllPointsToState(t);
              },
              setAllPointsToState: function (t) {
                this.points.forEach(function (e) {
                  e.setState && e.setState(t);
                });
              },
              setVisible: function (t, e) {
                var i = this,
                  s = i.chart,
                  n = i.legendItem,
                  o = s.options.chart.ignoreHiddenSeries,
                  r = i.visible,
                  a = (i.visible =
                    t =
                    i.options.visible =
                    i.userOptions.visible =
                      void 0 === t ? !r : t)
                    ? "show"
                    : "hide";
                [
                  "group",
                  "dataLabelsGroup",
                  "markerGroup",
                  "tracker",
                  "tt",
                ].forEach(function (t) {
                  i[t] && i[t][a]();
                }),
                  (s.hoverSeries !== i &&
                    (s.hoverPoint && s.hoverPoint.series) !== i) ||
                    i.onMouseOut(),
                  n && s.legend.colorizeItem(i, t),
                  (i.isDirty = !0),
                  i.options.stacking &&
                    s.series.forEach(function (t) {
                      t.options.stacking && t.visible && (t.isDirty = !0);
                    }),
                  i.linkedSeries.forEach(function (e) {
                    e.setVisible(t, !1);
                  }),
                  o && (s.isDirtyBox = !0),
                  l(i, a),
                  !1 !== e && s.redraw();
              },
              show: function () {
                this.setVisible(!0);
              },
              hide: function () {
                this.setVisible(!1);
              },
              select: function (t) {
                (this.selected =
                  t =
                  this.options.selected =
                    void 0 === t ? !this.selected : t),
                  this.checkbox && (this.checkbox.checked = t),
                  l(this, t ? "select" : "unselect");
              },
              drawTracker: M.drawTrackerGraph,
            });
        }
      ),
      e(
        i,
        "parts/Responsive.js",
        [i["parts/Globals.js"], i["parts/Utilities.js"]],
        function (t, e) {
          var i = e.find,
            s = e.isArray,
            n = e.isObject,
            o = e.merge,
            r = e.objectEach,
            a = e.pick,
            h = e.splat,
            l = e.uniqueKey;
          (t = t.Chart),
            (t.prototype.setResponsive = function (t, e) {
              var s = this.options.responsive,
                n = [],
                r = this.currentResponsive;
              !e &&
                s &&
                s.rules &&
                s.rules.forEach(function (t) {
                  void 0 === t._id && (t._id = l()),
                    this.matchResponsiveRule(t, n);
                }, this),
                (e = o.apply(
                  0,
                  n.map(function (t) {
                    return i(s.rules, function (e) {
                      return e._id === t;
                    }).chartOptions;
                  })
                )),
                (e.isResponsiveOptions = !0),
                (n = n.toString() || void 0) !== (r && r.ruleIds) &&
                  (r && this.update(r.undoOptions, t, !0),
                  n
                    ? ((r = this.currentOptions(e)),
                      (r.isResponsiveOptions = !0),
                      (this.currentResponsive = {
                        ruleIds: n,
                        mergedOptions: e,
                        undoOptions: r,
                      }),
                      this.update(e, t, !0))
                    : (this.currentResponsive = void 0));
            }),
            (t.prototype.matchResponsiveRule = function (t, e) {
              var i = t.condition;
              (
                i.callback ||
                function () {
                  return (
                    this.chartWidth <= a(i.maxWidth, Number.MAX_VALUE) &&
                    this.chartHeight <= a(i.maxHeight, Number.MAX_VALUE) &&
                    this.chartWidth >= a(i.minWidth, 0) &&
                    this.chartHeight >= a(i.minHeight, 0)
                  );
                }
              ).call(this) && e.push(t._id);
            }),
            (t.prototype.currentOptions = function (t) {
              function e(t, o, a, l) {
                var c;
                r(t, function (t, r) {
                  if (!l && -1 < i.collectionsWithUpdate.indexOf(r))
                    for (t = h(t), a[r] = [], c = 0; c < t.length; c++)
                      o[r][c] &&
                        ((a[r][c] = {}), e(t[c], o[r][c], a[r][c], l + 1));
                  else
                    n(t)
                      ? ((a[r] = s(t) ? [] : {}), e(t, o[r] || {}, a[r], l + 1))
                      : (a[r] = void 0 === o[r] ? null : o[r]);
                });
              }
              var i = this,
                o = {};
              return e(t, this.options, o, 0), o;
            });
        }
      ),
      e(i, "masters/highcharts.src.js", [i["parts/Globals.js"]], function (t) {
        return t;
      }),
      (i["masters/highcharts.src.js"]._modules = i),
      i["masters/highcharts.src.js"]
    );
  }),
  (Highcharts.c = {
    colors:
      "#ED8C2B #88A825 #CF4A30 #5E3969 #914611 #DB843D #92A8CD #A47D7C #1E2C93".split(
        " "
      ),
    chart: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "#CCCCCC",
      borderRadius: 0,
      plotBackgroundColor: "transparent",
      plotShadow: !1,
      plotBorderWidth: 1,
      style: {
        fontFamily: "Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: "12px",
        fontWeight: "bold",
        color: "#333333",
      },
    },
    tooltip: {
      style: {
        color: "#333333",
        font: "14px Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
      },
    },
    title: {
      style: {
        color: "#333333",
        font: "bold 14px Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
      },
    },
    subtitle: {
      style: { 
        color: "#333333",
        font: "12px Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
      },
    },
    xAxis: {
      gridLineWidth: 0,
      lineColor: "#000",
      tickColor: "#000",
      labels: {
        style: {
          color: "#000",
          font: "11px Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
        },
      },
      title: {
        style: {
          color: "#333333",
          fontWeight: "bold",
          fontSize: "12px",
          fontFamily: "Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
        },
      },
    },
    yAxis: {
      gridLineWidth: 1,
      lineColor: "#000",
      lineWidth: 1,
      tickWidth: 1,
      tickColor: "#000",
      labels: {
        style: {
          color: "#333333",
          font: "12px Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
        },
      },
      title: {
        style: {
          color: "#333333",
          fontWeight: "bold",
          fontSize: "12px",
          fontFamily: "Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
        },
      },
    },
    credits: { enabled: !1 },
    legend: {
      borderColor: "#DDDDDD",
      borderWidth: 1,
      style: {
        color: "#333333",
        fontWeight: "bold",
        fontSize: "12px",
        fontFamily: "Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
      },
      itemStyle: {
        color: "#333333",
        fontWeight: "bold",
        fontSize: "12px",
        fontFamily: "Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
      },
      itemHoverStyle: {
        color: "#333333",
        fontWeight: "bold",
        fontSize: "12px",
        fontFamily: "Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
      },
      itemHiddenStyle: {
        color: "gray",
        fontWeight: "bold",
        fontSize: "12px",
        fontFamily: "Lato, Helvetica Neue, Helvetica, Arial, sans-serif",
      },
    },
    labels: { style: { color: "#333333" } },
  }),
  Highcharts.setOptions(Highcharts.c);
//# sourceMappingURL=commoncalculator.js.map
