(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{396:function(t,s,e){"use strict";e.r(s);var n=e(44),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h5",{attrs:{id:"闭包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),e("p",[t._v("闭包就是有权访问一个函数内部变量的函数，也就是常说的函数内部嵌套函数，内部函数访问外部函数变量，从而导致垃圾回收机制没有将当前变量回收掉。这样的操作，有可能会带来内存泄漏。好处就是可以设计私有的方法和变量。")]),t._v(" "),e("p",[e("strong",[t._v("垃圾回收机制（闭包的延伸）")])]),t._v(" "),e("p",[t._v("js拥有特殊的垃圾回收机制，当一个变量在内存中失去引用，js会通过特殊的算法将其回收，并释放内存。\n分为以下两个阶段：")]),t._v(" "),e("ol",[e("li",[t._v("标记阶段：垃圾回收器，从根对象开始遍历，访问到的每一个对象都会被标示为可到达对象。")]),t._v(" "),e("li",[t._v("清除阶段：垃圾回收器在对内存当中进行线性遍历，如果发现该对象没有被标记为可到达对象，那么就会被垃圾回收机制回收。")])]),t._v(" "),e("p",[t._v("这里面牵扯到了引用计数法，每次引用都被会‘➕1’ 如果标记清零，那么就会被回收掉。")])])}),[],!1,null,null,null);s.default=r.exports}}]);