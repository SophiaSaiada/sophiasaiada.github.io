(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),d=a(r("pVnL")),c=a(r("q1tI")),l=a(r("17x9")),u=function(e){var t=(0,d.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return m(t||r).src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),r=p(t);return g[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,O=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function j(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function x(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(O.has(e.target)){var t=O.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),O.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),O.set(e,t)),function(){r.unobserve(e),O.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+c+o+s+r+a+t+i+n+d+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},T=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,n=e.spreadProps,i=e.ariaHidden,o=c.default.createElement(N,(0,d.default)({src:t},n,{ariaHidden:i}));return r.length>1?c.default.createElement("picture",null,a(r),o):o},N=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,l=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:r,srcSet:a,src:n},m,{onLoad:o,onError:l,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));N.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var M=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=p(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,O=e.itemProp,w=e.loading,x=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,M=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,d.default)({opacity:L?1:0,transition:M?"opacity "+y+"ms":"none"},s),P="boolean"==typeof b?"lightgray":b,C={transitionDelay:y+"ms"},W=(0,d.default)({opacity:this.state.imgLoaded?0:1},M&&C,{},s,{},f),k={title:t,alt:this.state.isVisible?"":r,style:W,className:p,itemProp:O};if(g){var R=g,V=m(g);return c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),P&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},M&&C)}),V.base64&&c.default.createElement(T,{ariaHidden:!0,src:V.base64,spreadProps:k,imageVariants:R,generateSources:I}),V.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,src:V.tracedSVG,spreadProps:k,imageVariants:R,generateSources:j}),this.state.isVisible&&c.default.createElement("picture",null,S(R),c.default.createElement(N,{alt:r,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:w,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,d.default)({alt:r,title:t,loading:w},V,{imageVariants:R}))}}))}if(h){var D=h,G=m(h),H=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},i);return"inherit"===i.display&&delete H.display,c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},P&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:P,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},M&&C)}),G.base64&&c.default.createElement(T,{ariaHidden:!0,src:G.base64,spreadProps:k,imageVariants:D,generateSources:I}),G.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,src:G.tracedSVG,spreadProps:k,imageVariants:D,generateSources:j}),this.state.isVisible&&c.default.createElement("picture",null,S(D),c.default.createElement(N,{alt:r,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:w,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,d.default)({alt:r,title:t,loading:w},G,{imageVariants:D}))}}))}return null},t}(c.default.Component);M.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),P=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});M.propTypes={resolutions:z,sizes:P,fixed:l.default.oneOfType([z,l.default.arrayOf(z)]),fluid:l.default.oneOfType([P,l.default.arrayOf(P)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var C=M;t.default=C},INYr:function(e,t,r){"use strict";var a=r("XKFU"),n=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},P9Of:function(e,t,r){"use strict";r("f3/d");var a=r("txSG"),n=r("q1tI");var i=r("+yNS"),o=r("9eSz"),s=r.n(o),d=r("Wbzz"),c=r("izhR"),l=r("n/Q7"),u=(r("LVxi"),r("lvm7"));t.a=function(e){var t,r,o,f=e.posts,p=e.className,m=e.limitPostWhenSingleColumn,g=void 0!==m&&m,h=(t=Object(n.useState)([0,0]),r=t[0],o=t[1],Object(n.useLayoutEffect)((function(){function e(){o([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),r),b=h[0],y=(h[1],Object(i.a)()),v=y.basePath,O=y.tagsPath,S=b>=980?3:b>=700?2:1,w=S>1,j=!w&&g?f.slice(0,5):f;return Object(a.h)("section",{sx:{mb:[2,3,4]},className:p},Object(a.h)(c.c,{gap:20,className:"post-grid",columns:[S]},j.map((function(e){var t=e.tags.map((function(t){return Object(a.h)(a.d.a,{as:d.Link,key:t.slug,to:Object(l.a)("/"+v+"/"+O+"/"+t.slug),className:"post-grid--item--tag",style:{color:"white",marginLeft:e.lang==u.a.he?"0.5em":"none",marginRight:e.lang==u.a.he?"none":"0.5em"}},t.name)}));return Object(a.h)(c.a,{as:"a",href:e.slug,key:e.slug,style:{direction:e.lang==u.a.he?"rtl":"ltr"},className:"post-grid--item "+(w?"with-image":"without-image")},w&&Object(a.h)(s.a,{fluid:e.banner.childImageSharp.fluid,className:"post-grid--item--image"}),Object(a.h)("div",{className:"post-grid--item--content"},w&&t,Object(a.h)(c.e,{sx:{fontFamily:"heading",fontSize:2}},e.title),w||t,Object(a.h)(c.e,null,e.date)))}))))}},T6W1:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTIwIDhsLTggNS04LTV2MTBoMTZ6bTAtMkg0bDggNC45OXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNCAyMGgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0ySDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJ6TTIwIDZsLTggNC45OUw0IDZoMTZ6TTQgOGw4IDUgOC01djEwSDRWOHoiICBmaWxsPSIjZmZmIi8+PC9zdmc+"},W27q:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=r("txSG"),o=r("Wbzz"),s=r("bz+c"),d=(r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("91GP"),r("7ljp"));r("jm62"),r("ioFf"),r("KKXr"),r("pIFo"),r("Bs6F");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).state={prefix:t.prefix.replace(/ /g," "),words:t.words.map((function(e){var t=e.word;return{opacity:0,color:e.color,letters:r.fixRTL(t).replace(/ /g," ").split("").map((function(e){return{content:e,mode:"out"}}))}})),currentWordIndex:0},r.setLetterMode=r.setLetterMode.bind(f(r)),r.animateLetterMode=r.animateLetterMode.bind(f(r)),r.changeWord=r.changeWord.bind(f(r)),r.prepareWord=r.prepareWord.bind(f(r)),r}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=a.prototype;return i.componentDidMount=function(){this.changeWord(),this.changeWordInterval=setInterval(this.changeWord,3e3)},i.componentWillUnmount=function(){this.changeWordInterval&&clearInterval(this.changeWordInterval)},i.animateLetterMode=function(e,t,r){var a=this;setTimeout((function(){a.setLetterMode(e,t,r)}),80*t)},i.prepareWord=function(e){this.setState({words:this.state.words.map((function(t,r){return l({},t,{opacity:1,letters:r===e?t.letters.map((function(e){return l({},e,{mode:"behind"})})):t.letters})}))})},i.setLetterMode=function(e,t,r){this.setState({words:this.state.words.map((function(a,n){return l({},a,{letters:n===e?a.letters.map((function(e,a){return l({},e,{mode:a===t?r:e.mode})})):a.letters})}))})},i.changeWord=function(){var e=this,t=this.state.currentWordIndex,r=t===this.state.words.length-1?0:t+1;this.state.words[t].letters.forEach((function(r,a){e.animateLetterMode(t,a,"out")})),this.prepareWord(r),setTimeout((function(){e.state.words[r].letters.forEach((function(t,a){e.animateLetterMode(r,a,"in")})),e.setState({words:e.state.words.map((function(e,t){return l({},e,{opacity:t===r?1:e.opacity})})),currentWordIndex:r})}),300)},i.fixRTL=function(e){return e.replace(/[a-zA-Z-]+/g,(function(e){return e.split("").reverse().join("")}))},i.render=function(){return n.a.createElement("div",{className:"word-changer--container"},n.a.createElement("div",{className:"word-changer--prefix"},this.state.prefix),n.a.createElement("div",{className:"word-changer--word-container"},this.state.words.map((function(e,t){return n.a.createElement("div",{className:"word-changer--word",style:{opacity:e.opacity,color:e.color},key:"word-"+t},e.letters.map((function(e,r){var a=e.content,i=e.mode;return n.a.createElement("div",{className:"word-changer--letter "+i,key:"letter-"+t+"-"+r},a)})))}))))},a}(n.a.Component),m=(r("2UVK"),r("T6W1")),g=r.n(m);var h,b=(h="Text",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),Object(d.mdx)("div",e)}),y={_frontmatter:{}};function v(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(d.mdx)("wrapper",Object.assign({},y,r,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)(b,{sx:{fontFamily:"heading",fontSize:[4,5,6],color:"heading"},mdxType:"Text"},Object(d.mdx)(b,{sx:{mb:-4},mdxType:"Text"},"היי, אני סופיה,"),Object(d.mdx)(p,{prefix:"מפתחת ",words:[{color:"#29b1d6",word:"React"},{color:"#9c27b0",word:"Full-Stack"},{color:"#1976d2",word:"iOS"},{color:"#d19600",word:"Python"},{color:"#689f38",word:"Android"}],mdxType:"WordChanger"})),Object(d.mdx)("p",null,"מפתחת Full-Stack במובייל וב-Web עם ניסיון של שנה וחצי.",Object(d.mdx)("br",null),"ב-2019 סיימתי תואר ראשון במדעי המחשב ומתמטיקה בהצטיינות.",Object(d.mdx)("br",null),"חובבת גרפים ואלגוריתמים, אבל לא יצא לי לעסוק בזה באופן מקצועי.",Object(d.mdx)("br",null)),Object(d.mdx)(o.Link,{to:"/contact/",className:"cta-button",mdxType:"Link"},Object(d.mdx)("img",{src:g.a,className:"cta-button--icon"}),"צרו קשר"))}v.isMDXComponent=!0;var O={_frontmatter:{}};function S(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(d.mdx)("wrapper",Object.assign({},O,r,{components:t,mdxType:"MDXLayout"}))}S.isMDXComponent=!0;var w=r("oymC"),j=function(e){var t=e.children;return Object(i.h)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3},a:{variant:"links.listItem"}}},t)},I=r("+yNS"),x=r("n/Q7"),L=r("P9Of"),E=(r("f3/d"),r("izhR")),T=(r("SCpI"),function(e){var t=e.projects;return Object(i.h)("section",{sx:{mb:[3,4,5]}},t.map((function(e){return Object(i.h)(E.a,{mb:4,className:"project",key:e.url},Object(i.h)(i.d.a,{as:"a",href:e.url,sx:{fontWeight:"semibold",fontSize:[2,2,3],color:"text"}},e.name),e.stars&&Object(i.h)("div",{className:"project--stars",sx:{display:["none","block"]}},e.stars," GitHub Stars"),Object(i.h)("div",{className:"project--description",dangerouslySetInnerHTML:{__html:e.description}}),Object(i.h)("div",{sx:{color:"secondary",mt:1,mb:0,a:{color:"secondary"},fontSize:[1,1,2]}},e.tags&&Object(i.h)(n.a.Fragment,null,e.tags.map((function(e,t){return Object(i.h)("div",{className:"project--tag",key:e},e)}))),e.stars&&Object(i.h)("div",{className:"project--tag",sx:{display:["inline-block","none"],direction:"ltr"}},e.stars," GitHub Stars")))})))}),N=function(e){var t=e.posts,r=Object(I.a)(),a=r.basePath,n=r.blogPath,d=r.projects;return Object(i.h)(s.a,null,Object(i.h)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2}}},Object(i.h)(v,null)),Object(i.h)(w.a,{text:"פוסטים אחרונים"},Object(i.h)(o.Link,{to:Object(x.a)("/"+a+"/"+n)},"לכל הפוסטים")),Object(i.h)(L.a,{posts:t,showTags:!1,limitPostWhenSingleColumn:!0}),Object(i.h)(j,null,Object(i.h)(S,null)),Object(i.h)(w.a,{text:"פרויקטים"},Object(i.h)("a",{href:"https://github.com/SophiaSaiada"},"ל-GitHub")),Object(i.h)(T,{projects:d}),Object(i.h)(j,null,Object(i.h)(S,null)))};r.d(t,"query",(function(){return M}));t.default=function(e){var t=e.data.allPost;return n.a.createElement(N,{posts:t.nodes})};var M="2636610257"}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-56c13dceaf989d720710.js.map