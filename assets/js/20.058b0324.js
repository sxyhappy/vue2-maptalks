(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{384:function(t,a,s){"use strict";s.r(a);var n,v=s(52),_={name:"component-doc",components:{"render-demo-0":(n={data:function(){return{zoom:12,center:[-.113049,51.498568],mapOptions:{minZoom:10,maxZoom:20,attribution:!1,maxPitch:0,pitch:0,dragPitch:!1,dragRotate:!1}}},methods:{handleMapClick:function(t){console.log(t)}}},Object(v.a)({render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("div",{staticClass:"p-b-8"},[t._v("\n    center: "+t._s(t.center)+" zoom: "+t._s(t.zoom)+"\n    "),s("mt-button",{on:{click:function(a){t.center=[115.7,40.4]}}},[t._v("设置中心 [115.70, 40.40]")]),t._v(" "),s("mt-button",{on:{click:function(a){t.zoom=11}}},[t._v("设置缩放级别 11")])],1),t._v(" "),s("div",{staticClass:"map"},[s("mt-map",{attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions},on:{"update:zoom":function(a){t.zoom=a},"update:center":function(a){t.center=a},click:t.handleMapClick}},[s("mt-tile-layer",{attrs:{id:"tile","url-template":"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",subdomains:["a","b","c","d"]}})],1)],1)]],2)},staticRenderFns:[]},n))}},e=s(0),r=Object(e.a)(_,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mt-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mt-map"}},[t._v("#")]),t._v(" mt-map")]),t._v(" "),s("p",[t._v("Maptalks Map")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("所有组件的父组件,如果其他组件不在 map 容器之下,会报错")])]),t._v(" "),s("h2",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),s("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[s("template",{slot:"demo"},[[s("render-demo-0")]],2),t._v(" "),s("template",{slot:"source"},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("p-b-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    center: {{center}} zoom: {{ zoom }}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mt-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("center = [115.70, 40.40]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("设置中心 [115.70, 40.40]"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mt-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mt-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zoom = 11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("设置缩放级别 11"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mt-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mt-map")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":zoom.sync")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zoom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":center.sync")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":options")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mapOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleMapClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mt-tile-layer")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url-template")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":subdomains")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mt-tile-layer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mt-map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      zoom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      center"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.113049")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.498568")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      mapOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        minZoom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        maxZoom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        attribution"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        maxPitch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        pitch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        dragPitch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        dragRotate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleMapClick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),s("h4",{attrs:{id:"options-支持-mt-map-的全部属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options-支持-mt-map-的全部属性"}},[t._v("#")]),t._v(" options 支持 mt-map 的全部属性")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("属性优先级: defaultProps < options < 实际传入的 props")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("center")]),t._v(" "),s("td",[t._v("地图中心")]),t._v(" "),s("td",[t._v("object | array")]),t._v(" "),s("td",[t._v("[0, 0]")]),t._v(" "),s("td",[t._v("支持 .sync 修饰符")])]),t._v(" "),s("tr",[s("td",[t._v("zoom")]),t._v(" "),s("td",[t._v("缩放级别")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("支持 .sync 修饰符")])]),t._v(" "),s("tr",[s("td",[t._v("baseLayer")]),t._v(" "),s("td",[t._v("layer")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("overview 依赖baseLayer")])]),t._v(" "),s("tr",[s("td",[t._v("minZoom")]),t._v(" "),s("td",[t._v("最小缩放级别")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("maxZoom")]),t._v(" "),s("td",[t._v("最大缩放级别")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("spatialReference")]),t._v(" "),s("td",[t._v("地图的坐标系")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("maptalks 默认采用 EPSG:3857")])]),t._v(" "),s("tr",[s("td",[t._v("maxExtent")]),t._v(" "),s("td",[t._v("地图边界")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("centerCross")]),t._v(" "),s("td",[t._v("地图是否显示红x")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("seamlessZoom")]),t._v(" "),s("td",[t._v("是否使用无缝缩放模式")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("zoomInCenter")]),t._v(" "),s("td",[t._v("缩放时是否固定在中央")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("zoomOrigin")]),t._v(" "),s("td",[t._v("缩放容器点中的原点")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("zoomAnimation")]),t._v(" "),s("td",[t._v("是否启用缩放动画")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("zoomAnimationDuration")]),t._v(" "),s("td",[t._v("缩放动画持续时间")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("330")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("panAnimation")]),t._v(" "),s("td",[t._v("是否启用平移动画")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("panAnimationDuration")]),t._v(" "),s("td",[t._v("平移动画持续时长")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("600")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("zoomable")]),t._v(" "),s("td",[t._v("是否启用地图缩放")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("enableInfoWindow")]),t._v(" "),s("td",[t._v("是否启用InfoWindow")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("hitDetect")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("hitDetectLimit")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fpsOnInteracting")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("25")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("layerCanvasLimitOnInteracting")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("-1")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fixCenterOnResize")]),t._v(" "),s("td",[t._v("当地图缩放时地图中心是否固定")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("maxPitch")]),t._v(" "),s("td",[t._v("最大角度")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("80")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("maxVisualPitch")]),t._v(" "),s("td",[t._v("视觉最大角度")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("70")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("viewHistory")]),t._v(" "),s("td",[t._v("视图历史")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("viewHistoryCount")]),t._v(" "),s("td",[t._v("视图历史数量")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("10")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("draggable")]),t._v(" "),s("td",[t._v("地图是否拖拽")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("dragPan")]),t._v(" "),s("td",[t._v("地图是否拖拽平移")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("dragRotate")]),t._v(" "),s("td",[t._v("地图是否拖拽旋转")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("右键/左键+left")])]),t._v(" "),s("tr",[s("td",[t._v("dragPitch")]),t._v(" "),s("td",[t._v("地图是否拖拽倾斜")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("右键/左键+left")])]),t._v(" "),s("tr",[s("td",[t._v("dragRotatePitch")]),t._v(" "),s("td",[t._v("地图是否拖拽旋转倾斜")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("touchGesture")]),t._v(" "),s("td",[t._v("支持手势")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("touchZoom")]),t._v(" "),s("td",[t._v("支持手势缩放")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("touchRotate")]),t._v(" "),s("td",[t._v("支持手势旋转")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("touchPitch")]),t._v(" "),s("td",[t._v("支持手势倾斜")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("touchZoomRotate")]),t._v(" "),s("td",[t._v("支持手势缩放旋转")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("doubleClickZoom")]),t._v(" "),s("td",[t._v("双击缩放")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("scrollWheelZoom")]),t._v(" "),s("td",[t._v("滚轮缩放")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("geometryEvents")]),t._v(" "),s("td",[t._v("geometry 事件")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("control")]),t._v(" "),s("td",[t._v("control ui")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("attribution")]),t._v(" "),s("td",[t._v("control ui")]),t._v(" "),s("td",[t._v("Object | Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("zoomControl")]),t._v(" "),s("td",[t._v("control ui")]),t._v(" "),s("td",[t._v("Object | Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("scaleControl")]),t._v(" "),s("td",[t._v("control ui")]),t._v(" "),s("td",[t._v("Object | Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("overviewControl")]),t._v(" "),s("td",[t._v("control ui")]),t._v(" "),s("td",[t._v("Object | Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fog")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fogColor")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("[233, 233, 233]")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("renderer")]),t._v(" "),s("td",[t._v("地图渲染引擎")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("canvas")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("devicePixelRatio")]),t._v(" "),s("td",[t._v("设备像素比率用来覆盖设备的默认像素比率")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("options")]),t._v(" "),s("td",[t._v("map 属性")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("{}")]),t._v(" "),s("td")])])]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事件名")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ready")]),t._v(" "),s("td",[t._v("mapInstance")]),t._v(" "),s("td",[t._v("地图已准备好,可以获取地图实例")])]),t._v(" "),s("tr",[s("td",[t._v("update:center")]),t._v(" "),s("td",[t._v("center")]),t._v(" "),s("td",[t._v("地图中心变化")])]),t._v(" "),s("tr",[s("td",[t._v("update:zoom")]),t._v(" "),s("td",[t._v("zoom")]),t._v(" "),s("td",[t._v("地图缩放变化")])])])]),t._v(" "),s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法名")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("返回值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("getMap")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("map")]),t._v(" "),s("td",[t._v("获取地图实例")])])])]),t._v(" "),s("h2",{attrs:{id:"slot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("#")]),t._v(" Slot")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("slot名字")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("default")]),t._v(" "),s("td",[t._v("-")])])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);