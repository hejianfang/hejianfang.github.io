(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{423:function(v,_,t){"use strict";t.r(_);var c=t(44),r=Object(c.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("JavaScript 是浏览器的内置脚本语言。也就是说，浏览器内置了 JavaScript 引擎，并且提供各种接口，让 JavaScript 脚本可以控制浏览器的各种功能。一旦网页内嵌了 JavaScript 脚本，浏览器加载网页，就会去执行脚本，从而达到操作浏览器的目的，实现网页的各种动态效果。")]),v._v(" "),t("p",[t("strong",[v._v("工作原理")])]),v._v(" "),t("p",[v._v("浏览器加载 JavaScript 脚本，主要通过"),t("code",[v._v("<script>")]),v._v("元素完成。正常的网页加载流程是这样的。")]),v._v(" "),t("ol",[t("li",[v._v("浏览器一边下载 HTML 网页，一边开始解析。也就是说，不等到下载完，就开始解析。")]),v._v(" "),t("li",[v._v("解析过程中，浏览器发现"),t("code",[v._v("<script>")]),v._v("元素，就暂停解析，把网页渲染的控制权转交给 JavaScript 引擎。")]),v._v(" "),t("li",[v._v("如果"),t("code",[v._v("<script>")]),v._v("元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。")]),v._v(" "),t("li",[v._v("JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页。")])]),v._v(" "),t("p",[v._v("加载外部脚本时，浏览器会暂停页面渲染，等待脚本下载并执行完成后，再继续渲染。原因是 JavaScript 代码可以修改 DOM，所以必须把控制权让给它，否则会导致复杂的线程竞赛的问题。")]),v._v(" "),t("p",[t("strong",[v._v("defer 属性")])]),v._v(" "),t("p",[v._v("为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对"),t("code",[v._v("<script>")]),v._v("元素加入defer属性。它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本。")]),v._v(" "),t("p",[t("strong",[v._v("async 属性")])]),v._v(" "),t("p",[v._v("async属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。")]),v._v(" "),t("ol",[t("li",[v._v("浏览器开始解析 HTML 网页。")]),v._v(" "),t("li",[v._v("解析过程中，发现带有async属性的script标签。")]),v._v(" "),t("li",[v._v("浏览器继续往下解析 HTML 网页，同时并行下载"),t("code",[v._v("<script>")]),v._v("标签中的外部脚本。")]),v._v(" "),t("li",[v._v("脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本。")]),v._v(" "),t("li",[v._v("脚本执行完毕，浏览器恢复解析 HTML 网页。")])]),v._v(" "),t("p",[v._v("async属性可以保证脚本下载的同时，浏览器继续渲染。需要注意的是，一旦采用这个属性，就无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本。另外，使用async属性的脚本文件里面的代码，不应该使用document.write方法。")]),v._v(" "),t("p",[v._v("一般来说，如果脚本之间没有依赖关系，就使用async属性，如果脚本之间有依赖关系，就使用defer属性。如果同时使用async和defer属性，后者不起作用，浏览器行为由async属性决定。")])])}),[],!1,null,null,null);_.default=r.exports}}]);