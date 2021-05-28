(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{379:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("一、JavaScript起源")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    技术的出现和应用场景密切相关的。JavaScript诞生于1995年。当时，它的主要目的是处理以前由服务器端语言（如Perl）负责的一些输入验证操作。在JavaScript问世之前，必须把表单数据发送到服务器端才能确定用户是否没有填写某个必填域，是否输入了无效的值。Netscape Navigator希望通过JavaScript来解决这个问题。起初名字为livescript，但是后来Netscape(网景)与Sun公司成立了一个开发联盟。Netscape为了搭上媒体热炒Java的顺风车，临时把LiveScript改名为JavaScript，所以从本质上来说JavaScript和Java没什么关系(蹭热度)。 如今，JavaScript的用途早已不再局限于简单的数据验证，而是具备了与浏览器窗口及其内容等几乎所有方面交互的能力。今天的JavaScript已经成为一门功能全面的编程语言。\n")])])]),a("p",[t._v("总结：js最初的用途是为来实现用户与浏览器的交互")]),t._v(" "),a("p",[a("strong",[t._v("二、JS为何是单线程的？")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？\n")])])]),a("p",[t._v("所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成这门语言的核心特征，将来也不会改变。")]),t._v(" "),a("p",[t._v("注：所谓单线程，是指在JS引擎中负责解释和执行JavaScript代码的线程只有一个。")]),t._v(" "),a("p",[a("strong",[t._v("三、计算机的同步与异步（重点）")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    平常人眼中的同步，是同时进行；异步，是一件一件来做。难到计算机里的同步和异步不是这样？确实不是。\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("计算机的同步")]),t._v("：同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去。\n可以理解为同步需要进行等待，在上一步跑完后下一步才能继续执行。\n一般用于流程性比较强的程序，比如用户登录，需要对用户验证完成后才能登录系统。")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("特点：")])]),t._v(" "),a("p",[t._v("同步是阻塞模式；")]),t._v(" "),a("p",[t._v("同步是按顺序执行，执行完一个再执行下一个，需要等待，协调运行。")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("计算机的异步")]),t._v("：异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。\n异步不需要进行等待，不管其他进程状态，直接就可以执行。比如加载页面。")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("特点：")])]),t._v(" "),a("p",[t._v("异步是非阻塞模式，无需等待；")]),t._v(" "),a("p",[t._v("异步是彼此独立，在等待某事件的过程中，继续做自己的事，不需要等待这一事件完成后再工作。线程是异步实现的一个方式。")])]),t._v(" "),a("p",[t._v("总结：计算机中的同步就是排队等待，假如你是第一百零一个备胎，那你只能等前面的一百个爆了之后才能‘处理’你。异步就是，尽管你是第一百零一个，她还是能照顾到你的感受。")]),t._v(" "),a("p",[a("strong",[t._v("四、js单线程为什么会有'异步'问题")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    看完前面的铺垫你是否会产生这些疑问，JS是单线程的，那么他是如何是实现异步操作的？AJAX异步发送和回调请求，还有setTimeout也看起来像是多线程的？不急慢慢来\n")])])]),a("ul",[a("li",[t._v("js是同步的？")])]),t._v(" "),a("p",[t._v("是的，单线程，那肯定只能同步(排队)执行")]),t._v(" "),a("ul",[a("li",[t._v("js单线程又是如何实现异步的呢?")])]),t._v(" "),a("p",[t._v("通过事件循环(event loop) 实现'异步'")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       1，3，2")]),t._v("\n")])])]),a("p",[t._v("也就是说,setTimeout里的函数并没有立即执行,而是延迟了一段时间,满足一定条件后,才去执行的,这类代码,我们叫异步代码。")]),t._v(" "),a("p",[a("strong",[t._v("JS里的一种分类方式,就是将任务分为: 同步任务和异步任务")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    虽然JS是单线程的但是浏览器的内核是多线程的，在浏览器的内核中不同的异步操作由不同的浏览器内核模块调度执行，异步操作会将相关回调添加到任务队列中。而不同的异步操作添加到任务队列的时机也不同，如 onclick, setTimeout, ajax 处理的方式都不同，这些异步操作是由浏览器内核的 webcore 来执行的，webcore 包含上图中的3种 webAPI，分别是 DOM Binding、network、timer模块。\n")])])]),a("p",[t._v("按照这种分类方式：JS的执行机制是")]),t._v(" "),a("ul",[a("li",[t._v("首先判断js代码是同步还是异步,同步就进入主进程,异步就进入event table(事件表格)")]),t._v(" "),a("li",[t._v("异步任务在event table中注册函数,当满足触发条件后,被推入event queue(事件队列)")]),t._v(" "),a("li",[t._v("同步任务进入主线程后一直执行,直到主线程空闲时,才会去event queue中查看是否有可执行的异步任务,如果有就推入主进程中 以上三步循环执行,这就是event loop")])]),t._v(" "),a("p",[t._v("Event Table 可以理解成一张**事件->回调函数 **对应表")]),t._v(" "),a("blockquote",[a("p",[t._v("它就是用来存储 Java 中的异步事件 (request, setTimeout, IO等) 及其对应的回调函数的列表")])]),t._v(" "),a("p",[t._v("Event Queue 简单理解就是 回调函数 队列，所以它也叫Callback Queue")]),t._v(" "),a("blockquote",[a("p",[t._v("当 Event Table 中的事件被触发，事件对应的 回调函数 就会被 push 进这个 Event Queue，然后等待被执行")])]),t._v(" "),a("p",[a("img",{attrs:{src:"attachment:e7fb278586a55a8700598a1d31d64b3c",alt:"截图"}})]),t._v(" "),a("p",[a("strong",[t._v("五、JS中的event loop(2)")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'定时器开始啦'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'马上执行for循环啦'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行then函数啦'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码执行结束'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("尝试按照，上文我们刚学到的JS执行机制去分析：")]),t._v(" "),a("ul",[a("li",[t._v("setTimeout 是异步任务，被放到event table")]),t._v(" "),a("li",[t._v("new Promise 是同步任务，被放到主进程里，直接执行打印 console.log('马上执行for循环啦')")]),t._v(" "),a("li",[t._v(".then 里的函数是异步任务，被放到event table")]),t._v(" "),a("li",[t._v("console.log('代码执行结束') 是同步代码，被放到主进程里，直接执行")])]),t._v(" "),a("p",[t._v("所以，结果是：马上执行for循环啦---代码执行结束---定时器开始啦---执行then函数啦吗?")]),t._v(" "),a("p",[t._v("亲自执行后，结果居然不是这样，而是：马上执行for循环啦---代码执行结束---执行then函数啦---定时器开始啦")]),t._v(" "),a("p",[t._v("那么，难道是异步任务的执行顺序，不是前后顺序，而是另有规定？事实上，按照异步和同步的划分方式，并不准确。")]),t._v(" "),a("p",[t._v("而准确的划分方式是：")]),t._v(" "),a("ul",[a("li",[t._v("macro-task(宏任务)：包括整体代码script，setTimeout，setInterval")]),t._v(" "),a("li",[t._v("micro-task(微任务)：Promise，process.nextTick")])]),t._v(" "),a("p",[a("img",{attrs:{src:"attachment:bb3640b249fcbb69f2ff951f001e999b",alt:"截图"}})]),t._v(" "),a("p",[t._v("按照这种分类方式，JS的执行机制是：")]),t._v(" "),a("ul",[a("li",[t._v("执行一个宏任务，过程中如果遇到微任务，就将其放到微任务的“事件队列”里")]),t._v(" "),a("li",[t._v("当前宏任务执行完成后，会查看微任务的“事件队列”，并将里面全部的微任务依次执行完")]),t._v(" "),a("li",[t._v("重复以上2步骤，结合event loop(1) event loop(2)，就是更为准确的JS执行机制了")])]),t._v(" "),a("p",[t._v("尝试按照刚学的执行机制，去分析例2：")]),t._v(" "),a("ul",[a("li",[t._v("首先执行script下的宏任务，遇到setTimeout,将其放到宏任务的“队列”里")]),t._v(" "),a("li",[t._v('遇到 new Promise直接执行，打印"马上执行for循环啦"')]),t._v(" "),a("li",[t._v("遇到then方法，是微任务，将其放到微任务的“队列”里。")]),t._v(" "),a("li",[t._v('打印 "代码执行结束"')]),t._v(" "),a("li",[t._v('本轮宏任务执行完毕，查看本轮的微任务，发现有一个then方法里的函数，打印"执行then函数啦"')]),t._v(" "),a("li",[t._v("到此,本轮的event loop 全部完成。")]),t._v(" "),a("li",[t._v('下一轮的循环里，先执行一个宏任务，发现宏任务的“队列”里有一个setTimeout里的函数,执行打印"定时器开始啦"')])]),t._v(" "),a("p",[t._v("所以最后的执行顺序是：马上执行for循环啦---代码执行结束---执行then函数啦---定时器开始啦")]),t._v(" "),a("p",[a("strong",[t._v("六、setTimeout")])]),t._v(" "),a("p",[t._v("这段setTimeout代码什么意思? 我们一般说: 3秒后,会执行setTimeout里的那个函数")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行了'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("但是这种说并不严谨，准确的解释是：3秒后，setTimeout里的函数被会推入event queue，而event queue(事件队列)里的任务，只有在主线程空闲时才会执行。")]),t._v(" "),a("p",[t._v("所以只有满足 (1)3秒后 (2)主线程空闲，同时满足时，才会3秒后执行该函数")]),t._v(" "),a("p",[t._v("如果主线程执行内容很多，执行时间超过3秒，比如执行了10秒，那么这个函数只能10秒后执行了。")])])}),[],!1,null,null,null);s.default=e.exports}}]);