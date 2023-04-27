(function () {
  function a(a) {
    (L = a),
      jQuery("#loanproduct").val(L),
      "active" != jQuery("li#" + L).attr("class") &&
        jQuery("li#" + L)
          .addClass("active")
          .siblings()
          .removeClass("active"),
      jQuery("ul.loanproduct-nav li").click(function () {
        return (
          "active" != jQuery(this).attr("class") &&
            (jQuery(this).addClass("active").siblings().removeClass("active"),
            (L = jQuery(this).attr("id")),
            jQuery("#loanproduct").val(L),
            "home-loan" == L
              ? o("Home Loan Amount", 2e7, 1e5, 5e6, 20, 9, 30, 0.5, 240)
              : "personal-loan" == L
              ? o("Personal Loan Amount", 3e6, 1e4, 75e4, 25, 11, 5, 0.25, 36)
              : "car-loan" == L &&
                o("Car Loan Amount", 2e6, 1e4, 4e5, 20, 8.5, 7, 0.25, 60),
            m()),
          !1
        );
      });
  }
  function e() {
    jQuery("#loanamount").blur(function () {
      jQuery("#loanamount").val(
        Globalize.format(
          Math.round(
            jQuery("#loanamount")
              .val()
              .replace(/[^\d\.]/g, "")
          ),
          "n",
          "en-IN"
        )
      );
    }),
      jQuery("#loaninterest").blur(function () {
        jQuery("#loaninterest").val(
          Math.round(
            1e3 *
              jQuery("#loaninterest")
                .val()
                .replace(/[^\d\.]/g, "")
          ) / 1e3
        );
      }),
      jQuery("#loanterm").blur(function () {
        jQuery("#emicalculatorform input[name='loantenure']")[0].checked
          ? jQuery("#loanterm").val(
              Math.round(
                (Math.round(
                  12 *
                    jQuery("#loanterm")
                      .val()
                      .replace(/[^\d\.]/g, "")
                ) /
                  12) *
                  100
              ) / 100
            )
          : jQuery("#loanterm").val(
              Math.round(
                jQuery("#loanterm")
                  .val()
                  .replace(/[^\d\.]/g, "")
              )
            );
      });
  }
  function t(a) {
    var e = jQuery("#emicalculatorform").find(":input").get();
    return "object" != typeof a
      ? ((a = {}),
        jQuery.each(e, function () {
          this.name &&
            (this.checked ||
              /select|textarea/i.test(this.nodeName) ||
              /text|hidden|password/i.test(this.type)) &&
            "loandata" != this.name &&
            (a[this.name] = jQuery(this).val());
        }),
        a)
      : (jQuery.each(e, function () {
          this.name && a[this.name]
            ? "checkbox" == this.type || "radio" == this.type
              ? (jQuery(this).prop(
                  "checked",
                  a[this.name] == jQuery(this).val()
                ),
                a[this.name] == jQuery(this).val()
                  ? (jQuery(this).parent(".btn").addClass("active"),
                    jQuery(this)
                      .parent(".btn")
                      .siblings("input[name=" + this.name + "]")
                      .removeClass("active"))
                  : (jQuery(this).parent(".btn").removeClass("active"),
                    jQuery(this)
                      .parent(".btn")
                      .siblings("input[name=" + this.name + "]")
                      .addClass("active")))
              : jQuery(this).val(a[this.name])
            : "checkbox" == this.type && jQuery(this).prop("checked", !1);
        }),
        jQuery(this));
  }
  function s() {
    jQuery("#startmonthyear").attr("readonly", !0),
      jQuery("#startmonthyear")
        .datepicker({ format: "M yyyy", minViewMode: 1, autoclose: !0 })
        .on("changeDate", function () {
          jQuery(this).datepicker("getDate").toDateString() !=
            A.g.toDateString() &&
            ((A.g = jQuery(this).datepicker("getDate")), m());
        })
        .on("hide", function () {
          jQuery("#startmonthyear").blur();
        }),
      (A.g = new Date()),
      jQuery("#startmonthyear").datepicker("setDate", A.g);
  }
  function n() {
    jQuery("#loanamount").unbind("change"),
      jQuery("#loaninterest").unbind("change"),
      jQuery("#loanterm").unbind("change"),
      jQuery("#emicalculatorform input[name='loantenure']").unbind("change"),
      jQuery("#emicalculatorform input[name='emischeme']").unbind("change");
  }
  function l(a, e, t, s, n) {
    (w = jQuery("#loanamountslider").slider({
      range: "min",
      value: parseInt(
        jQuery("#loanamount")
          .val()
          .replace(/[^\d\.]/g, "")
      ),
      min: 0,
      max: a,
      step: e,
      slide: function (a, e) {
        jQuery("#loanamount").val(
          Globalize.format(Math.round(e.value), "n", "en-IN")
        );
      },
      change: function (a) {
        a.originalEvent && m();
      },
    })),
      w.slider("value", w.slider("value")),
      (C = jQuery("#loaninterestslider").slider({
        range: "min",
        value: parseFloat(jQuery("#loaninterest").val()),
        min: 5,
        max: t,
        step: 0.25,
        slide: function (a, e) {
          jQuery("#loaninterest").val(e.value);
        },
        change: function (a) {
          a.originalEvent && m();
        },
      })),
      C.slider("value", C.slider("value")),
      (a = parseInt(jQuery("#loanterm").val())),
      jQuery("#emicalculatorform input[name='loantenure']")[1].checked &&
        (a = parseInt(jQuery("#loanterm").val()) / 12),
      (N = jQuery("#loantermslider").slider({
        range: "min",
        value: a,
        min: 0,
        max: s,
        step: n,
        slide: function (a, e) {
          jQuery("#emicalculatorform input[name='loantenure']")[0].checked
            ? jQuery("#loanterm").val(e.value)
            : jQuery("#loanterm").val(12 * e.value);
        },
        change: function (a) {
          a.originalEvent && m();
        },
      })),
      N.slider("value", N.slider("value"));
  }
  function r() {
    jQuery("#loanamount").change(function () {
      w.slider("value", this.value.replace(/[^\d\.]/g, "")), m();
    }),
      jQuery("#loaninterest").change(function () {
        C.slider("value", this.value), m();
      }),
      jQuery("#loanterm").change(function () {
        jQuery("#emicalculatorform input[name='loantenure']")[0].checked
          ? N.slider("value", this.value)
          : N.slider("value", this.value / 12),
          m();
      }),
      jQuery("#emicalculatorform input[name='loantenure']").change(function () {
        jQuery("#emicalculatorform input[name='loantenure']")[0].checked
          ? jQuery("#loanterm").val(
              Math.round(
                (jQuery("#loanterm")
                  .val()
                  .replace(/[^\d\.]/g, "") /
                  12) *
                  100
              ) / 100
            )
          : jQuery("#loanterm").val(
              Math.round(
                12 *
                  jQuery("#loanterm")
                    .val()
                    .replace(/[^\d\.]/g, "")
              )
            ),
          c();
      }),
      jQuery("#emicalculatorform input[name='emischeme']").change(function () {
        m();
      }),
      jQuery("#yearformat").change(function () {
        (J = jQuery("#yearformat").val()),
          jQuery("#loanyearformat").val(J),
          m();
      });
  }
  function o(a, e, t, s, o, i, p, m, u) {
    n(),
      jQuery("label[for=loanamount]").html(a),
      jQuery("#loanamount").val(Globalize.format(s, "n", "en-IN")),
      jQuery("#loaninterest").val((1e3 * i) / 1e3),
      jQuery("#emicalculatorform input[name='loantenure']")[0].checked
        ? jQuery("#loanterm").val(u / 12)
        : jQuery("#loanterm").val(u),
      l(e, t, o, p, m),
      r(),
      c(),
      "car-loan" == L
        ? jQuery(".toggle-hidden")
            .removeClass("toggle-hidden")
            .addClass("toggle-visible")
        : jQuery(".toggle-visible")
            .removeClass("toggle-visible")
            .addClass("toggle-hidden");
  }
  function c() {
    "home-loan" == L
      ? (jQuery("#loanamountsteps").html(
          '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick d-none d-sm-table-cell" style="left: 12.5%;">|<br/><span class="marker">25L</span></span><span class="tick" style="left: 25%;">|<br/><span class="marker">50L</span></span><span class="tick d-none d-sm-table-cell" style="left: 37.5%;">|<br/><span class="marker">75L</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">100L</span></span><span class="tick d-none d-sm-table-cell" style="left: 62.5%;">|<br/><span class="marker">125L</span></span><span class="tick" style="left: 75%;">|<br/><span class="marker">150L</span></span><span class="tick d-none d-sm-table-cell" style="left: 87.5%;">|<br/><span class="marker">175L</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">200L</span></span>'
        ),
        jQuery("#loanintereststeps").html(
          '<span class="tick" style="left: 0%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">7.5</span></span><span class="tick" style="left: 33.34%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">12.5</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 83.34%;">|<br/><span class="marker">17.5</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">20</span></span>'
        ),
        jQuery("#emicalculatorform input[name='loantenure']")[0].checked
          ? jQuery("#loantermsteps").html(
              '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 33.33%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">20</span></span><span class="tick" style="left: 83.33%;">|<br/><span class="marker">25</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">30</span></span>'
            )
          : jQuery("#loantermsteps").html(
              '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">60</span></span><span class="tick" style="left: 33.33%;">|<br/><span class="marker">120</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">180</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">240</span></span><span class="tick" style="left: 83.33%;">|<br/><span class="marker">300</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">360</span></span>'
            ))
      : "personal-loan" == L
      ? (jQuery("#loanamountsteps").html(
          '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">5L</span></span><span class="tick" style="left: 33.34%;">|<br/><span class="marker">10L</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">15L</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">20L</span></span><span class="tick" style="left: 83.34%;">|<br/><span class="marker">25L</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">30L</span></span>'
        ),
        jQuery("#loanintereststeps").html(
          '<span class="tick" style="left: 0%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 12.5%;">|<br/><span class="marker">7.5</span></span><span class="tick" style="left: 25%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 37.5%;">|<br/><span class="marker">12.5</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 62.5%;">|<br/><span class="marker">17.5</span></span><span class="tick" style="left: 75%;">|<br/><span class="marker">20</span></span><span class="tick" style="left: 87.5%;">|<br/><span class="marker">22.5</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">25</span></span>'
        ),
        jQuery("#emicalculatorform input[name='loantenure']")[0].checked
          ? jQuery("#loantermsteps").html(
              '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 20%;">|<br/><span class="marker">1</span></span><span class="tick" style="left: 40%;">|<br/><span class="marker">2</span></span><span class="tick" style="left: 60%;">|<br/><span class="marker">3</span></span><span class="tick" style="left: 80%;">|<br/><span class="marker">4</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">5</span>'
            )
          : jQuery("#loantermsteps").html(
              '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 20%;">|<br/><span class="marker">12</span></span><span class="tick" style="left: 40%;">|<br/><span class="marker">24</span></span><span class="tick" style="left: 60%;">|<br/><span class="marker">36</span></span><span class="tick" style="left: 80%;">|<br/><span class="marker">48</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">60</span>'
            ))
      : "car-loan" == L &&
        (jQuery("#loanamountsteps").html(
          '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 25%;">|<br/><span class="marker">5L</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">10L</span></span><span class="tick" style="left: 75%;">|<br/><span class="marker">15L</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">20L</span></span>'
        ),
        jQuery("#loanintereststeps").html(
          '<span class="tick" style="left: 0%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">7.5</span></span><span class="tick" style="left: 33.34%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">12.5</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 83.34%;">|<br/><span class="marker">17.5</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">20</span></span>'
        ),
        jQuery("#emicalculatorform input[name='loantenure']")[0].checked
          ? jQuery("#loantermsteps").html(
              '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 14.29%;">|<br/><span class="marker">1</span></span><span class="tick" style="left: 28.57%;">|<br/><span class="marker">2</span></span><span class="tick" style="left: 42.86%;">|<br/><span class="marker">3</span></span><span class="tick" style="left: 57.14%;">|<br/><span class="marker">4</span></span><span class="tick" style="left: 71.43%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 85.71%;">|<br/><span class="marker">6</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">7</span></span>'
            )
          : jQuery("#loantermsteps").html(
              '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 14.29%;">|<br/><span class="marker">12</span></span><span class="tick" style="left: 28.57%;">|<br/><span class="marker">24</span></span><span class="tick" style="left: 42.86%;">|<br/><span class="marker">36</span></span><span class="tick" style="left: 57.14%;">|<br/><span class="marker">48</span></span><span class="tick" style="left: 71.43%;">|<br/><span class="marker">60</span></span><span class="tick" style="left: 85.71%;">|<br/><span class="marker">72</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">84</span></span>'
            ));
  }
  function i() {
    jQuery(".ecalprint").click(function () {
      return window.print(), !1;
    });
  }
  function p() {
    jQuery(".ecalshare").click(function () {
      jQuery("#loader").toggle();
      var a = t();
      return (
        (a = Base64.encode(unescape(encodeURIComponent(JSON.stringify(a))))),
        jQuery.get(
          "https://emicalculator.net/shortly/?longURL=https://emicalculator.net/?ecdata=" +
            a,
          function (a) {
            jQuery("#sharelink").val(a),
              jQuery("#ecalsharelink").slideDown(),
              jQuery("#loader").toggle();
          }
        ),
        !1
      );
    }),
      jQuery("#sharelink").click(function () {
        jQuery(this).focus().select();
      });
  }
  function m() {
    jQuery("#emicalculatorform").mask("Calculating EMI..."), setTimeout(u, 10);
  }
  function u() {
    if (
      (jQuery("#ecalsharelink").hide(),
      (j = Math.abs(
        jQuery("#loanamount")
          .val()
          .replace(/[^\d\.]/g, "")
      )),
      (v = Math.abs(jQuery("#loaninterest").val() / 12 / 100)),
      (Q = jQuery("#emicalculatorform input[name='loantenure']")[0].checked
        ? Math.abs(Math.round(12 * jQuery("#loanterm").val()))
        : Math.abs(jQuery("#loanterm").val())),
      0 == v &&
        (jQuery("#loaninterest").val(9), (v = 0.0075), C.slider("value", 9)),
      0 == Q &&
        (jQuery("#emicalculatorform input[name='loantenure']")[0].checked
          ? jQuery("#loanterm").val(1)
          : jQuery("#loanterm").val(12),
        N.slider("value", 1),
        (Q = 12)),
      (x = 0),
      "emiadvance" ==
        jQuery("#emicalculatorform input[name='emischeme']:checked").val() &&
        (x = 1),
      jQuery("#loanstartdate").val(jQuery("#startmonthyear").val()),
      jQuery("#loanyearformat").val(jQuery("#yearformat").val()),
      (I =
        "car-loan" == L && 1 == x
          ? (Math.pow(1 + v, Q - 1) / (Math.pow(1 + v, Q) - 1)) * v * j
          : (Math.pow(1 + v, Q) / (Math.pow(1 + v, Q) - 1)) * v * j),
      jQuery("#emiamount span").text(
        Globalize.format(Math.round(I), "n", "en-IN")
      ),
      jQuery("#emitotalinterest span").text(
        Globalize.format(Math.round(I * Q - j), "n", "en-IN")
      ),
      jQuery("#emitotalamount span").text(
        Globalize.format(Math.round(I * Q), "n", "en-IN")
      ),
      "calendaryear" == J)
    ) {
      (T = []),
        (B = []),
        (P = []),
        (D = []),
        (E = []),
        (H = []),
        (F = []),
        (Y = []),
        (S = []),
        (W = []),
        (H[0] = new Date(A.g.getTime())),
        "car-loan" == L && 1 == x
          ? ((Y[0] = 0), (F[0] = I))
          : ((Y[0] = j * v), (F[0] = I - Y[0])),
        (S[0] = j - F[0]),
        (W[0] = ((j - S[0]) / j) * 100);
      var a = H[0].getFullYear(),
        e = 0;
      (T[e++] = a), (B[a] = F[0]), (P[a] = Y[0]), (D[a] = S[0]), (E[a] = W[0]);
      for (var t = 1; t < Q; t++)
        (H[t] = new Date(H[t - 1].getTime())),
          H[t].setMonth(H[t].getMonth() + 1, 1),
          (Y[t] = S[t - 1] * v),
          (F[t] = I - Y[t]),
          (S[t] = S[t - 1] - F[t]),
          (W[t] = ((j - S[t]) / j) * 100),
          H[t].getFullYear() != a &&
            ((a = H[t].getFullYear()),
            (T[e++] = a),
            (B[a] = 0),
            (P[a] = 0),
            (D[a] = 0),
            (E[a] = 0)),
          (B[a] += F[t]),
          (P[a] += Y[t]),
          (D[a] = S[t]),
          (E[a] = W[t]);
      (S[Q - 1] = 0), (D[a] = 0), (W[Q - 1] = 100), (E[a] = 100);
    } else {
      for (
        T = [],
          B = [],
          P = [],
          D = [],
          E = [],
          H = [],
          F = [],
          Y = [],
          S = [],
          W = [],
          H[0] = new Date(A.g.getTime()),
          "car-loan" == L && 1 == x
            ? ((Y[0] = 0), (F[0] = I))
            : ((Y[0] = j * v), (F[0] = I - Y[0])),
          S[0] = j - F[0],
          W[0] = ((j - S[0]) / j) * 100,
          a = parseInt(H[0].getFullYear().toString().slice(-2), 10),
          2 < H[0].getMonth() && (a += 1),
          e = 0,
          T[e++] = a,
          B[a] = F[0],
          P[a] = Y[0],
          D[a] = S[0],
          E[a] = W[0],
          t = 1;
        t < Q;
        t++
      )
        (H[t] = new Date(H[t - 1].getTime())),
          H[t].setMonth(H[t].getMonth() + 1, 1),
          (Y[t] = S[t - 1] * v),
          (F[t] = I - Y[t]),
          (S[t] = S[t - 1] - F[t]),
          (W[t] = ((j - S[t]) / j) * 100),
          3 == H[t].getMonth() &&
            ((a = parseInt(H[t].getFullYear().toString().slice(-2), 10) + 1),
            (T[e++] = a),
            (B[a] = 0),
            (P[a] = 0),
            (D[a] = 0),
            (E[a] = 0)),
          (B[a] += F[t]),
          (P[a] += Y[t]),
          (D[a] = S[t]),
          (E[a] = W[t]);
      (S[Q - 1] = 0), (D[a] = 0), (W[Q - 1] = 100), (E[a] = 100);
    }
    f(),
      "calendaryear" == J ? (d(), h()) : (y(), b()),
      jQuery("#emicalculatorform").unmask();
  }
  function d() {
    for (var a = [], e = [], t = [], s = [], n = 0, l = T.length; n < l; n++) {
      var r = T[n];
      (a[n] = r), (e[n] = B[r]), (t[n] = P[r]), (s[n] = D[r]);
    }
    new Highcharts.Chart({
      chart: {
        renderTo: "emibarchart",
        backgroundColor: "transparent",
        plotBackgroundColor: "transparent",
        defaultSeriesType: "column",
        borderWidth: 0,
        spacingLeft: 0,
        spacingRight: 0,
      },
      title: { text: "" },
      xAxis: {
        categories: a,
        minorTickInterval: "auto",
        tickmarkPlacement: "on",
        labels: {
          rotation: -45,
          align: "right",
          step: 8 < T.length ? 2 : 1,
          style: { font: "normal 9px Verdana, sans-serif" },
          formatter: function () {
            return this.value;
          },
        },
      },
      yAxis: [
        {
          min: 0,
          title: { text: "EMI Payment / year" },
          stackLabels: {
            enabled: !1,
            style: {
              fontWeight: "bold",
              color: (Highcharts.theme && Highcharts.theme.textColor) || "gray",
            },
          },
          opposite: !0,
          labels: {
            formatter: function () {
              return "₹ " + Globalize.format(this.value, "n", "en-IN");
            },
          },
        },
        {
          min: 0,
          title: { text: "Balance" },
          stackLabels: {
            enabled: !1,
            style: {
              fontWeight: "bold",
              color: (Highcharts.theme && Highcharts.theme.textColor) || "gray",
            },
          },
          labels: {
            formatter: function () {
              return "₹ " + Globalize.format(this.value, "n", "en-IN");
            },
          },
        },
      ],
      legend: {
        align: "center",
        itemMarginBottom: 2,
        itemMarginTop: 2,
        verticalAlign: "bottom",
        floating: !1,
        backgroundColor: "#EEEEEE",
        shadow: !1,
      },
      tooltip: {
        formatter: function () {
          return "Balance" == this.series.name
            ? "<b>Year : " +
                this.x +
                "</b><br/>" +
                this.series.name +
                " : ₹ " +
                Globalize.format(this.y, "n", "en-IN") +
                "<br/>Loan Paid To Date : " +
                Globalize.format(((j - this.y) / j) * 100, "n2", "en-IN") +
                "%"
            : "<b>Year : " +
                this.x +
                "</b><br/>" +
                this.series.name +
                " : ₹ " +
                Globalize.format(this.y, "n", "en-IN") +
                "<br/>Total Payment : ₹ " +
                Globalize.format(this.point.stackTotal, "n", "en-IN");
        },
      },
      plotOptions: {
        column: {
          borderWidth: 0,
          stacking: "normal",
          dataLabels: {
            enabled: !1,
            color:
              (Highcharts.theme && Highcharts.theme.dataLabelsColor) || "white",
          },
        },
      },
      series: [
        {
          name: "Interest",
          data: t,
          yAxis: 0,
          legendIndex: 2,
          color: "#2bb3ed",
        },
        {
          name: "Principal",
          data: e,
          yAxis: 0,
          legendIndex: 1,
          color: "#0E314C",
        },
        {
          name: "Balance",
          data: s,
          type: "spline",
          yAxis: 1,
          legendIndex: 3,
          color: "#F78ACB",
        },
      ],
    });
  }
  function y() {
    for (var a = [], e = [], t = [], s = [], n = 0, l = T.length; n < l; n++) {
      var r = T[n];
      (a[n] = "FY" + r), (e[n] = B[r]), (t[n] = P[r]), (s[n] = D[r]);
    }
    new Highcharts.Chart({
      chart: {
        renderTo: "emibarchart",
        backgroundColor: "transparent",
        plotBackgroundColor: "transparent",
        defaultSeriesType: "column",
        borderWidth: 0,
        spacingLeft: 0,
        spacingRight: 0,
      },
      title: { text: "" },
      xAxis: {
        categories: a,
        minorTickInterval: "auto",
        tickmarkPlacement: "on",
        labels: {
          rotation: -45,
          align: "right",
          step: 8 < T.length ? 2 : 1,
          style: { font: "normal 9px Verdana, sans-serif" },
          formatter: function () {
            return this.value;
          },
        },
      },
      yAxis: [
        {
          min: 0,
          title: { text: "EMI Payment / year" },
          stackLabels: {
            enabled: !1,
            style: {
              fontWeight: "bold",
              color: (Highcharts.theme && Highcharts.theme.textColor) || "gray",
            },
          },
          opposite: !0,
          labels: {
            formatter: function () {
              return "₹ " + Globalize.format(this.value, "n", "en-IN");
            },
          },
        },
        {
          min: 0,
          title: { text: "Balance" },
          stackLabels: {
            enabled: !1,
            style: {
              fontWeight: "bold",
              color: (Highcharts.theme && Highcharts.theme.textColor) || "white",
            },
          },
          labels: {
            formatter: function () {
              return "₹ " + Globalize.format(this.value, "n", "en-IN");
            },
          },
        },
      ],
      legend: {
        align: "center",
        itemMarginBottom: 2,
        itemMarginTop: 2,
        verticalAlign: "bottom",
        floating: !1,
        backgroundColor: "white",
        shadow: !1,
      },
      tooltip: {
        formatter: function () {
          return "Balance" == this.series.name
            ? "<b>Year : " +
                this.x +
                "</b><br/>" +
                this.series.name +
                " : ₹ " +
                Globalize.format(this.y, "n", "en-IN") +
                "<br/>Loan Paid To Date : " +
                Globalize.format(((j - this.y) / j) * 100, "n2", "en-IN") +
                "%"
            : "<b>Year : " +
                this.x +
                "</b><br/>" +
                this.series.name +
                " : ₹ " +
                Globalize.format(this.y, "n", "en-IN") +
                "<br/>Total Payment : ₹ " +
                Globalize.format(this.point.stackTotal, "n", "en-IN");
        },
      },
      plotOptions: {
        column: {
          borderWidth: 0,
          stacking: "normal",
          dataLabels: {
            enabled: !1,
            color:
              (Highcharts.theme && Highcharts.theme.dataLabelsColor) || "white",
          },
        },
      },
      series: [
        {
          name: "Interest",
          data: t,
          yAxis: 0,
          legendIndex: 2,
          color: "#2bb3ed",
        },
        {
          name: "Principal",
          data: e,
          yAxis: 0,
          legendIndex: 1,
          color: "#0E314C",
        },
        {
          name: "Balance",
          data: s,
          type: "spline",
          yAxis: 1,
          legendIndex: 3,
          color: "#F78ACB",
        },
      ],
    });
  }
  function h() {
    M =
      '<table><tr class="row no-margin"><th class="col-2 col-lg-1" id="yearheader">Year</th><th class="col-sm-2 d-none d-sm-table-cell" id="principalheader">Principal<br/>(A)</th><th class="col-3 d-table-cell d-sm-none" id="principalheader">Principal</th><th class="col-sm-2 d-none d-sm-table-cell" id="interestheader">Interest<br/>(B)</th><th class="col-3 d-table-cell d-sm-none" id="interestheader">Interest</th><th class="col-sm-3 d-none d-sm-table-cell" id="totalheader">Total Payment<br/>(A + B)</th><th class="col-4 col-sm-3" id="balanceheader">Balance</th><th class="col-lg-1 d-none d-lg-table-cell" id="paidtodateheader">Loan Paid To Date</th></tr>';
    for (var a = 0, e = 0, t = T.length; e < t; e++) {
      var s = T[e];
      (M +=
        '<tr class="row no-margin yearlypaymentdetails"><td id="year' +
        s +
        '" class="col-2 col-lg-1 paymentyear toggle">' +
        s +
        '</td><td class="col-3 col-sm-2 currency">₹ ' +
        Globalize.format(B[s], "n", "en-IN") +
        '</td><td class="col-3 col-sm-2 currency">₹ ' +
        Globalize.format(P[s], "n", "en-IN") +
        '</td><td class="col-sm-3 d-none d-sm-table-cell currency">₹ ' +
        Globalize.format(B[s] + P[s], "n", "en-IN") +
        '</td><td class="col-4 col-sm-3 currency">₹ ' +
        Globalize.format(D[s], "n", "en-IN") +
        '</td><td class="col-lg-1 d-none d-lg-table-cell paidtodateyear">' +
        Globalize.format(E[s], "n2", "en-IN") +
        "%</td></tr>"),
        (M +=
          '<tr id="monthyear' +
          s +
          '" class="row no-margin monthlypaymentdetails"><td class="col-12 monthyearwrapper" colspan="6"><div class="monthlypaymentcontainer"><table>');
      for (var n = H.length; a < n && H[a].getFullYear() == s; )
        M +=
          '<tr class="row no-margin"><td class="col-2 col-lg-1 paymentmonthyear">' +
          O[H[a].getMonth()] +
          '</td><td class="col-3 col-sm-2 currency">₹ ' +
          Globalize.format(F[a], "n", "en-IN") +
          '</td><td class="col-3 col-sm-2 currency">₹ ' +
          Globalize.format(Y[a], "n", "en-IN") +
          '</td><td class="col-sm-3 d-none d-sm-table-cell currency">₹ ' +
          Globalize.format(F[a] + Y[a], "n", "en-IN") +
          '</td><td class="col-4 col-sm-3 currency">₹ ' +
          Globalize.format(S[a], "n", "en-IN") +
          '</td><td class="col-lg-1 d-none d-lg-table-cell paidtodatemonthyear">' +
          Globalize.format(W[a++], "n2", "en-IN") +
          "%</td></tr>";
      M += "</table></div></td></tr>";
    }
    (M += "</table>"),
      jQuery("#emipaymenttable").html(M),
      jQuery("#emipaymenttable tr.monthlypaymentdetails").find("div").hide(),
      jQuery("#emipaymenttable td.toggle").click(function () {
        var a = jQuery(this).attr("id");
        jQuery(this).toggleClass("toggle-open"),
          jQuery("tr#month" + a)
            .find("div")
            .slideToggle();
      });
  }
  function b() {
    M =
      '<table><tr class="row no-margin"><th class="col-2 col-lg-1" id="yearheader">Year</th><th class="col-sm-2 d-none d-sm-table-cell" id="principalheader">Principal<br/>(A)</th><th class="col-3 d-table-cell d-sm-none" id="principalheader">Principal</th><th class="col-sm-2 d-none d-sm-table-cell" id="interestheader">Interest<br/>(B)</th><th class="col-3 d-table-cell d-sm-none" id="interestheader">Interest</th><th class="col-sm-3 d-none d-sm-table-cell" id="totalheader">Total Payment<br/>(A + B)</th><th class="col-4 col-sm-3" id="balanceheader">Balance</th><th class="col-lg-1 d-none d-lg-table-cell" id="paidtodateheader">Loan Paid To Date</th></tr>';
    for (var a = 0, e = 0, t = T.length; e < t; e++) {
      var s = T[e];
      (M +=
        '<tr class="row no-margin yearlypaymentdetails"><td id="year' +
        s +
        '" class="col-2 col-lg-1 paymentyear toggle">FY' +
        s +
        '</td><td class="col-3 col-sm-2 currency">₹ ' +
        Globalize.format(B[s], "n", "en-IN") +
        '</td><td class="col-3 col-sm-2 currency">₹ ' +
        Globalize.format(P[s], "n", "en-IN") +
        '</td><td class="col-sm-3 d-none d-sm-table-cell currency">₹ ' +
        Globalize.format(B[s] + P[s], "n", "en-IN") +
        '</td><td class="col-4 col-sm-3 currency">₹ ' +
        Globalize.format(D[s], "n", "en-IN") +
        '</td><td class="col-lg-1 d-none d-lg-table-cell paidtodateyear">' +
        Globalize.format(E[s], "n2", "en-IN") +
        "%</td></tr>"),
        (M +=
          '<tr id="monthyear' +
          s +
          '" class="row no-margin monthlypaymentdetails"><td class="col-12 monthyearwrapper" colspan="6"><div class="monthlypaymentcontainer"><table>'),
        (s = H.length);
      do {
        M +=
          '<tr class="row no-margin"><td class="col-2 col-lg-1 paymentmonthyear">' +
          O[H[a].getMonth()] +
          '</td><td class="col-3 col-sm-2 currency">₹ ' +
          Globalize.format(F[a], "n", "en-IN") +
          '</td><td class="col-3 col-sm-2 currency">₹ ' +
          Globalize.format(Y[a], "n", "en-IN") +
          '</td><td class="col-sm-3 d-none d-sm-table-cell currency">₹ ' +
          Globalize.format(F[a] + Y[a], "n", "en-IN") +
          '</td><td class="col-4 col-sm-3 currency">₹ ' +
          Globalize.format(S[a], "n", "en-IN") +
          '</td><td class="col-lg-1 d-none d-lg-table-cell paidtodatemonthyear">' +
          Globalize.format(W[a++], "n2", "en-IN") +
          "%</td></tr>";
      } while (a < s && 3 != H[a].getMonth());
      M += "</table></div></td></tr>";
    }
    (M += "</table>"),
      jQuery("#emipaymenttable").html(M),
      jQuery("#emipaymenttable tr.monthlypaymentdetails").find("div").hide(),
      jQuery("#emipaymenttable td.toggle").click(function () {
        var a = jQuery(this).attr("id");
        jQuery(this).toggleClass("toggle-open"),
          jQuery("tr#month" + a)
            .find("div")
            .slideToggle();
      });
  }
  function f() {
    new Highcharts.Chart({
      chart: {
        renderTo: "emipiechart",
        backgroundColor: "transparent",
        plotBackgroundColor: "transparent",
        borderWidth: null,
        plotBorderWidth: null,
        plotShadow: !1,
      },
      title: { text: "Break-up of Total Payment" },
      tooltip: {
        formatter: function () {
          return (
            "<b>" +
            this.point.name +
            ": " +
            Math.round(10 * this.percentage) / 10 +
            "%</b>"
          );
        },
      },
      plotOptions: {
        pie: {
          borderWidth: 0,
          startAngle: 0,
          allowPointSelect: !0,
          cursor: "pointer",
          dataLabels: {
            style: { textOutline: !1 },
            enabled: !0,
            distance: -30,
            color: "#FFFFFF",
            formatter: function () {
              return "<b>" + Math.round(10 * this.percentage) / 10 + "%</b>";
            },
          },
          showInLegend: !0,
        },
      },
      series: [
        {
          type: "pie",
          name: "Principal Loan Amount vs. Total Interest",
          data: [
            { name: "Principal Loan Amount", y: j, color: "#0E314C" },
            {
              name: "Total Interest",
              y: I * Q - j,
              sliced: !0,
              selected: !0,
              color: "#2bb3ed",
            },
          ],
        },
      ],
    });
  }
  var k =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, e, t) {
            return a == Array.prototype || a == Object.prototype
              ? a
              : ((a[e] = t.value), a);
          },
    g = (function (a) {
      a = [
        "object" == typeof globalThis && globalThis,
        a,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var e = 0; e < a.length; ++e) {
        var t = a[e];
        if (t && t.Math == Math) return t;
      }
      throw Error("Cannot find global object");
    })(this);
  !(function (a, e) {
    if (e)
      a: {
        var t = g;
        a = a.split(".");
        for (var s = 0; s < a.length - 1; s++) {
          var n = a[s];
          if (!(n in t)) break a;
          t = t[n];
        }
        (a = a[a.length - 1]),
          (s = t[a]),
          (e = e(s)) != s &&
            null != e &&
            k(t, a, { configurable: !0, writable: !0, value: e });
      }
  })("Array.prototype.find", function (a) {
    return (
      a ||
      function (a, e) {
        a: {
          var t = this;
          t instanceof String && (t = String(t));
          for (var s = t.length, n = 0; n < s; n++) {
            var l = t[n];
            if (a.call(e, l, n, t)) {
              a = l;
              break a;
            }
          }
          a = void 0;
        }
        return a;
      }
    );
  });
  var j,
    v,
    Q,
    I,
    x,
    M,
    L,
    w,
    C,
    N,
    z,
    G,
    A = { dateText: new Date() },
    T = [],
    B = [],
    P = [],
    D = [],
    E = [],
    H = [],
    F = [],
    Y = [],
    S = [],
    W = [],
    O = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    J = "calendaryear";
  jQuery(document).ready(function () {
    a("home-loan"), s(), jQuery("#yearformat").val("calendaryear");
    var l = jQuery("#loandata").val();
    if ("" != l) {
      jQuery(".loanproduct-nav").hide(),
        (l = jQuery.parseJSON(decodeURIComponent(escape(Base64.decode(l))))),
        (L = l.loanproduct),
        a(L),
        n(),
        t(l),
        r();
      var c = Math.abs(
          jQuery("#loanamount")
            .val()
            .replace(/[^\d\.]/g, "")
        ),
        u = jQuery("#loaninterest").val(),
        d = jQuery("#loanterm").val();
      "loanyears" == l.loantenure && (d *= 12),
        jQuery("#emicalculatorform input[name='emischeme']:checked").val(),
        "home-loan" == L
          ? o("Home Loan Amount", 2e7, 1e5, c, 20, u, 30, 0.5, d)
          : "personal-loan" == L
          ? o("Personal Loan Amount", 3e6, 1e4, c, 25, u, 5, 0.25, d)
          : "car-loan" == L &&
            o("Car Loan Amount", 2e6, 1e4, c, 20, u, 7, 0.25, d),
        (c = l.loanstartdate),
        0 < c.length &&
          ((G = c.substring(c.length - 4, c.length)),
          (z = jQuery.inArray(c.substring(0, c.length - 5), O)),
          jQuery("#startmonthyear").datepicker("setDate", new Date(G, z, 1))),
        jQuery("#yearformat").val(l.loanyearformat),
        (J = jQuery("#yearformat").val());
    } else o("Home Loan Amount", 2e7, 1e5, 5e6, 20, 9, 30, 0.5, 240);
    e(), i(), p(), m();
  });
}.call(this));
//# sourceMappingURL=emicalculator.js.map
