(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Bs6F:function(t,e,r){},SCpI:function(t,e,r){},T6W1:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTIwIDhsLTggNS04LTV2MTBoMTZ6bTAtMkg0bDggNC45OXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNCAyMGgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0ySDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJ6TTIwIDZsLTggNC45OUw0IDZoMTZ6TTQgOGw4IDUgOC01djEwSDRWOHoiICBmaWxsPSIjZmZmIi8+PC9zdmc+"},W27q:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),a=r("txSG"),c=r("Wbzz"),i=r("bz+c"),s=r("zLVn"),d=r("7ljp"),l=r("rePB"),u=r("JX7q"),m=r("dI71");r("Bs6F");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(l.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h,j=function(t){function e(e){var r;return(r=t.call(this,e)||this).state={prefix:e.prefix.replace(/ /g," "),words:e.words.map((function(t){var e=t.word;return{opacity:0,color:t.color,letters:r.fixRTL(e).replace(/ /g," ").split("").map((function(t){return{content:t,mode:"out"}}))}})),currentWordIndex:0},r.setLetterMode=r.setLetterMode.bind(Object(u.a)(r)),r.animateLetterMode=r.animateLetterMode.bind(Object(u.a)(r)),r.changeWord=r.changeWord.bind(Object(u.a)(r)),r.prepareWord=r.prepareWord.bind(Object(u.a)(r)),r}Object(m.a)(e,t);var r=e.prototype;return r.componentDidMount=function(){this.changeWord(),this.changeWordInterval=setInterval(this.changeWord,3e3)},r.componentWillUnmount=function(){this.changeWordInterval&&clearInterval(this.changeWordInterval)},r.animateLetterMode=function(t,e,r){var n=this;setTimeout((function(){n.setLetterMode(t,e,r)}),80*e)},r.prepareWord=function(t){this.setState({words:this.state.words.map((function(e,r){return b(b({},e),{},{opacity:1,letters:r===t?e.letters.map((function(t){return b(b({},t),{},{mode:"behind"})})):e.letters})}))})},r.setLetterMode=function(t,e,r){this.setState({words:this.state.words.map((function(n,o){return b(b({},n),{},{letters:o===t?n.letters.map((function(t,n){return b(b({},t),{},{mode:n===e?r:t.mode})})):n.letters})}))})},r.changeWord=function(){var t=this,e=this.state.currentWordIndex,r=e===this.state.words.length-1?0:e+1;this.state.words[e].letters.forEach((function(r,n){t.animateLetterMode(e,n,"out")})),this.prepareWord(r),setTimeout((function(){t.state.words[r].letters.forEach((function(e,n){t.animateLetterMode(r,n,"in")})),t.setState({words:t.state.words.map((function(t,e){return b(b({},t),{},{opacity:e===r?1:t.opacity})})),currentWordIndex:r})}),300)},r.fixRTL=function(t){return t.replace(/[a-zA-Z-]+/g,(function(t){return t.split("").reverse().join("")}))},r.render=function(){return o.a.createElement("div",{className:"word-changer--container"},o.a.createElement("div",{className:"word-changer--prefix"},this.state.prefix),o.a.createElement("div",{className:"word-changer--word-container"},this.state.words.map((function(t,e){return o.a.createElement("div",{className:"word-changer--word",style:{opacity:t.opacity,color:t.color},key:"word-"+e},t.letters.map((function(t,r){var n=t.content,a=t.mode;return o.a.createElement("div",{className:"word-changer--letter "+a,key:"letter-"+e+"-"+r},n)})))}))))},e}(o.a.Component),O=(r("KF5G"),r("T6W1")),f=r.n(O),g=["components"],w=(h="Text",function(t){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),Object(d.mdx)("div",t)}),x={_frontmatter:{}};function y(t){var e=t.components,r=Object(s.a)(t,g);return Object(d.mdx)("wrapper",Object.assign({},x,r,{components:e,mdxType:"MDXLayout"}),Object(d.mdx)(w,{sx:{fontFamily:"heading",fontSize:[4,5,6],color:"heading"},mdxType:"Text"},Object(d.mdx)(w,{sx:{mb:-4},mdxType:"Text"},"היי, אני סופי,"),Object(d.mdx)(j,{prefix:"מפתחת ",words:[{color:"#29b1d6",word:"React"},{color:"#9c27b0",word:"Full-Stack"},{color:"#1976d2",word:"iOS"},{color:"#d19600",word:"Python"},{color:"#689f38",word:"Android"}],mdxType:"WordChanger"})),Object(d.mdx)("p",null,"מפתחת Full-Stack ב-iOS, Android וב-Web עם ניסיון של שנתיים.",Object(d.mdx)("br",null),"ב-2019 סיימתי תואר ראשון במדעי המחשב ומתמטיקה בהצטיינות (96.77).",Object(d.mdx)("br",null),"חובבת גרפים ואלגוריתמים מאז 2017 ✨",Object(d.mdx)("br",null)),Object(d.mdx)(c.Link,{to:"/contact/",className:"cta-button",mdxType:"Link"},Object(d.mdx)("img",{src:f.a,className:"cta-button--icon"}),"צרו קשר"))}y.isMDXComponent=!0;var v=["components"],I={_frontmatter:{}};function S(t){var e=t.components,r=Object(s.a)(t,v);return Object(d.mdx)("wrapper",Object.assign({},I,r,{components:e,mdxType:"MDXLayout"}))}S.isMDXComponent=!0;var M=r("oymC"),T=function(t){var e=t.children;return Object(a.h)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3},a:{variant:"links.listItem"}}},e)},L=r("+yNS"),W=r("n/Q7"),D=r("P9Of"),P=r("izhR"),C=(r("SCpI"),function(t){var e=t.projects;return Object(a.h)("section",{sx:{mb:[3,4,5]}},e.map((function(t){return Object(a.h)(P.a,{mb:4,className:"project",key:t.url},Object(a.h)(a.d.a,{as:"a",href:t.url,sx:{fontWeight:"semibold",fontSize:[2,2,3],color:"text"}},t.name),t.stars&&Object(a.h)("div",{className:"project--stars",sx:{display:["none","block"]}},t.stars," GitHub Stars"),Object(a.h)("div",{className:"project--description",dangerouslySetInnerHTML:{__html:t.description}}),Object(a.h)("div",{sx:{color:"secondary",mt:1,mb:0,a:{color:"secondary"},fontSize:[1,1,2]}},t.tags&&Object(a.h)(o.a.Fragment,null,t.tags.map((function(t,e){return Object(a.h)("div",{className:"project--tag",key:t},t)}))),t.stars&&Object(a.h)("div",{className:"project--tag",sx:{display:["inline-block","none"],direction:"ltr"}},t.stars," GitHub Stars")))})))}),N=function(t){var e=t.posts,r=Object(L.a)(),n=r.basePath,o=r.blogPath,s=r.projects;return Object(a.h)(i.a,null,Object(a.h)("section",{sx:{mb:[5,6],p:{fontSize:[1,2,3],mt:2}}},Object(a.h)(y,null)),Object(a.h)(M.a,{text:"פוסטים אחרונים"},Object(a.h)(c.Link,{to:Object(W.a)("/"+n+"/"+o)},"לכל הפוסטים")),Object(a.h)(D.a,{posts:e,showTags:!1,limitPostWhenSingleColumn:!0}),Object(a.h)(T,null,Object(a.h)(S,null)),Object(a.h)(M.a,{text:"פרויקטים"},Object(a.h)("a",{href:"https://github.com/SophiaSaiada"},"ל-GitHub")),Object(a.h)(C,{projects:s}),Object(a.h)(T,null,Object(a.h)(S,null)))};e.default=function(t){var e=t.data.allPost;return o.a.createElement(N,{posts:e.nodes})}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-878931687ceb596ad570.js.map