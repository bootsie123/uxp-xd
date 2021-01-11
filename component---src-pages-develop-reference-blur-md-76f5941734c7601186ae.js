(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"H7/v":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return o}));var a=n("wx14"),r=n("zLVn"),b=(n("q1tI"),n("7ljp")),m=n("ndZU"),d=(n("qKvR"),{}),l={_frontmatter:d},c=m.a;function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.mdx)(c,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.mdx)("h1",{id:"blur"},"Blur"),Object(b.mdx)("p",null,Object(b.mdx)("strong",{parentName:"p"},"Kind"),": class"),Object(b.mdx)("h2",{id:"blur-1"},"Blur()"),Object(b.mdx)("p",null,"Creates an object blur or background blur effect object with the given properties."),Object(b.mdx)("table",null,Object(b.mdx)("thead",{parentName:"table"},Object(b.mdx)("tr",{parentName:"thead"},Object(b.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Param"),Object(b.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.mdx)("tbody",{parentName:"table"},Object(b.mdx)("tr",{parentName:"tbody"},Object(b.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"blurAmount"),Object(b.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"number"))),Object(b.mdx)("tr",{parentName:"tbody"},Object(b.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"brightnessAmount"),Object(b.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"number"))),Object(b.mdx)("tr",{parentName:"tbody"},Object(b.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"fillOpacity"),Object(b.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"number"))),Object(b.mdx)("tr",{parentName:"tbody"},Object(b.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"[visible]"),Object(b.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"boolean"))),Object(b.mdx)("tr",{parentName:"tbody"},Object(b.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"[isBackgroundEffect]"),Object(b.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"boolean"))))),Object(b.mdx)("h3",{id:"blurbluramount--number-0---50"},Object(b.mdx)("em",{parentName:"h3"},"blur.blurAmount : ",Object(b.mdx)("inlineCode",{parentName:"em"},"number"))," 0 - 50"),Object(b.mdx)("p",null,Object(b.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",Object(b.mdx)("a",Object(a.a)({parentName:"p"},{href:"#Blur"}),Object(b.mdx)("inlineCode",{parentName:"a"},"Blur"))),Object(b.mdx)("h3",{id:"blurbrightnessamount--number--50---50"},Object(b.mdx)("em",{parentName:"h3"},"blur.brightnessAmount : ",Object(b.mdx)("inlineCode",{parentName:"em"},"number"))," -50 - 50"),Object(b.mdx)("p",null,"For background blur effects, the amount to increase or decrease the brightness of the background. Ignored for object blur effects."),Object(b.mdx)("p",null,Object(b.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",Object(b.mdx)("a",Object(a.a)({parentName:"p"},{href:"#Blur"}),Object(b.mdx)("inlineCode",{parentName:"a"},"Blur"))),Object(b.mdx)("h3",{id:"blurfillopacity--number-00---10"},Object(b.mdx)("em",{parentName:"h3"},"blur.fillOpacity : ",Object(b.mdx)("inlineCode",{parentName:"em"},"number"))," 0.0 - 1.0"),Object(b.mdx)("p",null,"For background blur effects, the a multiplier on the opacity of the object's fill drawn over top of the blurred background. Useful to create a color tint on top of the blurred background. Does ",Object(b.mdx)("em",{parentName:"p"},"not")," affect stroke opacity."),Object(b.mdx)("p",null,"Ignored for object blur effects."),Object(b.mdx)("p",null,Object(b.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",Object(b.mdx)("a",Object(a.a)({parentName:"p"},{href:"#Blur"}),Object(b.mdx)("inlineCode",{parentName:"a"},"Blur"))),Object(b.mdx)("h3",{id:"blurisbackgroundeffect--boolean"},Object(b.mdx)("em",{parentName:"h3"},"blur.isBackgroundEffect : ",Object(b.mdx)("inlineCode",{parentName:"em"},"boolean"))),Object(b.mdx)("p",null,"If true, renders a background blur effect: all objects beneath the shape are blurred (modulated by ",Object(b.mdx)("inlineCode",{parentName:"p"},"brightnessAmount"),"), but the shape itself is still rendered with crisp edges (with its fill modulated by ",Object(b.mdx)("inlineCode",{parentName:"p"},"fillOpacity"),")."),Object(b.mdx)("p",null,"If false, renders an object blur effect: the shape itself is blurred, and objects beneath it are unaffected."),Object(b.mdx)("p",null,Object(b.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",Object(b.mdx)("a",Object(a.a)({parentName:"p"},{href:"#Blur"}),Object(b.mdx)("inlineCode",{parentName:"a"},"Blur"))),Object(b.mdx)("h3",{id:"blurvisible--boolean"},Object(b.mdx)("em",{parentName:"h3"},"blur.visible : ",Object(b.mdx)("inlineCode",{parentName:"em"},"boolean"))),Object(b.mdx)("p",null,"If false, the blur effect is not rendered. The user can toggle this via a checkbox in the Properties panel."),Object(b.mdx)("p",null,Object(b.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",Object(b.mdx)("a",Object(a.a)({parentName:"p"},{href:"#Blur"}),Object(b.mdx)("inlineCode",{parentName:"a"},"Blur"))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-blur-md-76f5941734c7601186ae.js.map