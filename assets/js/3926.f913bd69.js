"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3926],{57522:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return d},MDXProvider:function(){return s},mdx:function(){return v},useMDXComponents:function(){return f},withMDXComponents:function(){return c}});var l=a(29901);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n.apply(this,arguments)}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=l.createContext({}),c=function(e){return function(t){var a=f(t.components);return l.createElement(e,n({},t,{components:a}))}},f=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=f(e.components);return l.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=f(a),s=r,p=c["".concat(u,".").concat(s)]||c[s]||m[s]||n;return a?l.createElement(p,i(i({ref:t},d),{},{components:a})):l.createElement(p,i({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,u=new Array(n);u[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var d=2;d<n;d++)u[d]=a[d];return l.createElement.apply(null,u)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},84365:function(e,t,a){var l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(50264)),n=l(a(29901)),u=l(a(25789)),i=l(a(62210)),o=l(a(15030)),d=["sidebar","toc","children"];var c=function(e){var t=e.sidebar,a=e.toc,l=e.children,c=(0,r.default)(e,d),f=t&&t.items.length>0;return n.default.createElement(i.default,c,n.default.createElement("div",{className:"container margin-vert--lg"},n.default.createElement("div",{className:"row"},f&&n.default.createElement("aside",{className:"col col--3"},n.default.createElement(o.default,{sidebar:t})),n.default.createElement("main",{className:(0,u.default)("col",{"col--7":f,"col--9 col--offset-1":!f}),itemScope:!0,itemType:"http://schema.org/Blog"},l),a&&n.default.createElement("div",{className:"col col--2"},a))))};t.default=c},14413:function(e,t,a){var l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(29901)),n=l(a(79378)),u=l(a(86304));var i=function(e){var t=e.author,a=t.name,l=t.title,i=t.url,o=t.imageURL;return r.default.createElement("div",{className:"avatar margin-bottom--sm"},o&&r.default.createElement(n.default,{className:"avatar__photo-link avatar__photo",href:i},r.default.createElement("img",{className:u.default.image,src:o,alt:a})),a&&r.default.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.default.createElement("div",{className:"avatar__name"},r.default.createElement(n.default,{href:i,itemProp:"url"},r.default.createElement("span",{itemProp:"name"},a))),l&&r.default.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))};t.default=i},5461:function(e,t,a){var l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.authors,a=e.assets;if(0===t.length)return r.default.createElement(r.default.Fragment,null);return r.default.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.default.createElement("div",{className:(0,n.default)("col col--6",i.default.authorCol),key:t},r.default.createElement(u.default,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))};var r=l(a(29901)),n=l(a(25789)),u=l(a(14413)),i=l(a(43983))},22253:function(e,t,a){var l=a(32089).default,r=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(29901)),u=r(a(25789)),i=a(57522),o=l(a(39364)),d=r(a(79378)),c=a(23013),f=a(87918),s=r(a(29078)),m=r(a(40303)),p=r(a(71038)),v=r(a(89185)),g=r(a(5461));var h=function(e){var t,a,l,r,h=(l=(0,f.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return l(t,(0,o.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,c.useBaseUrlUtils)().withBaseUrl,E=e.children,y=e.frontMatter,_=e.assets,P=e.metadata,O=e.truncated,N=e.isBlogPostPage,T=void 0!==N&&N,k=P.date,j=P.formattedDate,C=P.permalink,M=P.tags,w=P.readingTime,x=P.title,D=P.editUrl,I=P.authors,S=null!=(t=_.image)?t:y.image,L=!T&&O,A=M.length>0;return n.default.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(r=T?"h1":"h2",n.default.createElement("header",null,n.default.createElement(r,{className:p.default.blogPostTitle,itemProp:"headline"},T?x:n.default.createElement(d.default,{itemProp:"url",to:C},x)),n.default.createElement("div",{className:(0,u.default)(p.default.blogPostData,"margin-vert--md")},n.default.createElement("time",{dateTime:k,itemProp:"datePublished"},j),void 0!==w&&n.default.createElement(n.default.Fragment,null," \xb7 ",h(w))),n.default.createElement(g.default,{authors:I,assets:_}))),S&&n.default.createElement("meta",{itemProp:"image",content:b(S,{absolute:!0})}),n.default.createElement("div",{className:"markdown",itemProp:"articleBody"},n.default.createElement(i.MDXProvider,{components:s.default},E)),(A||O)&&n.default.createElement("footer",{className:(0,u.default)("row docusaurus-mt-lg",(a={},a[p.default.blogPostDetailsFull]=T,a))},A&&n.default.createElement("div",{className:(0,u.default)("col",{"col--9":L})},n.default.createElement(v.default,{tags:M})),T&&D&&n.default.createElement("div",{className:"col margin-top--sm"},n.default.createElement(m.default,{editUrl:D})),L&&n.default.createElement("div",{className:(0,u.default)("col text--right",{"col--3":A})},n.default.createElement(d.default,{to:P.permalink,"aria-label":"Read more about "+x},n.default.createElement("b",null,n.default.createElement(o.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))};t.default=h},15030:function(e,t,a){var l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.sidebar;if(0===t.items.length)return null;return r.default.createElement("nav",{className:(0,n.default)(i.default.sidebar,"thin-scrollbar"),"aria-label":(0,o.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.default.createElement("div",{className:(0,n.default)(i.default.sidebarItemTitle,"margin-bottom--md")},t.title),r.default.createElement("ul",{className:i.default.sidebarItemList},t.items.map((function(e){return r.default.createElement("li",{key:e.permalink,className:i.default.sidebarItem},r.default.createElement(u.default,{isNavLink:!0,to:e.permalink,className:i.default.sidebarItemLink,activeClassName:i.default.sidebarItemLinkActive},e.title))}))))};var r=l(a(29901)),n=l(a(25789)),u=l(a(79378)),i=l(a(87099)),o=a(39364)},91538:function(e,t,a){var l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=Object.assign({},e);return n.default.createElement(i.Details,(0,r.default)({},t,{className:(0,u.default)("alert alert--info",o.default.details,t.className)}))};var r=l(a(3920)),n=l(a(29901)),u=l(a(25789)),i=a(87918),o=l(a(68442))},40303:function(e,t,a){var l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.editUrl;return r.default.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.ThemeClassNames.common.editThisPage},r.default.createElement(u.default,null),r.default.createElement(n.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))};var r=l(a(29901)),n=l(a(39364)),u=l(a(34669)),i=a(87918)},63791:function(e,t,a){var l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MainHeading=void 0;var r=l(a(50264)),n=l(a(3920)),u=l(a(29901)),i=l(a(25789)),o=a(39364),d=a(87918);a(24054);var c=l(a(84637)),f=["id"],s=function(e){var t=Object.assign({},e);return u.default.createElement("header",null,u.default.createElement("h1",(0,n.default)({},t,{id:void 0}),t.children))};t.MainHeading=s;var m=function(e){return"h1"===e?s:(t=e,function(e){var a,l=e.id,s=(0,r.default)(e,f),m=(0,d.useThemeConfig)().navbar.hideOnScroll;return l?u.default.createElement(t,(0,n.default)({},s,{className:(0,i.default)("anchor",(a={},a[c.default.anchorWithHideOnScrollNavbar]=m,a[c.default.anchorWithStickyNavbar]=!m,a)),id:l}),s.children,u.default.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+l,title:(0,o.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):u.default.createElement(t,s)});var t};t.default=m},34669:function(e,t,a){var l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(3920)),n=l(a(50264)),u=l(a(29901)),i=l(a(25789)),o=l(a(24967)),d=["className"],c=function(e){var t=e.className,a=(0,n.default)(e,d);return u.default.createElement("svg",(0,r.default)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.default)(o.default.iconEdit,t),"aria-hidden":"true"},a),u.default.createElement("g",null,u.default.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};t.default=c},23010:function(e,t,a){var l=a(66664).default,r=a(32089).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(3920)),u=l(a(50264)),i=r(a(29901)),o=l(a(90199)),d=l(a(79378)),c=l(a(20645)),f=l(a(63791)),s=l(a(91538));a(36927);var m=["mdxType","originalType"];var p={head:function(e){var t=i.default.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var l=e.props,r=(l.mdxType,l.originalType,(0,u.default)(l,m));return i.default.createElement(e.props.originalType,r)}return e}(e)}));return i.default.createElement(o.default,e,t)},code:function(e){var t=e.children;return(0,i.isValidElement)(t)?t:t.includes("\n")?i.default.createElement(c.default,e):i.default.createElement("code",e)},a:function(e){return i.default.createElement(d.default,e)},pre:function(e){var t,a=e.children;return(0,i.isValidElement)(a)&&(0,i.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:i.default.createElement(c.default,(0,i.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=i.default.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=i.default.createElement(i.default.Fragment,null,t.filter((function(e){return e!==a})));return i.default.createElement(s.default,(0,n.default)({},e,{summary:a}),l)},h1:(0,f.default)("h1"),h2:(0,f.default)("h2"),h3:(0,f.default)("h3"),h4:(0,f.default)("h4"),h5:(0,f.default)("h5"),h6:(0,f.default)("h6")};t.default=p},27955:function(e,t,a){var l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(29901)),n=l(a(25789)),u=l(a(79378)),i=l(a(63039));var o=function(e){var t,a=e.permalink,l=e.name,o=e.count;return r.default.createElement(u.default,{href:a,className:(0,n.default)(i.default.tag,(t={},t[i.default.tagRegular]=!o,t[i.default.tagWithCount]=o,t))},l,o&&r.default.createElement("span",null,o))};t.default=o},89185:function(e,t,a){var l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.tags;return r.default.createElement(r.default.Fragment,null,r.default.createElement("b",null,r.default.createElement(u.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.default.createElement("ul",{className:(0,n.default)(o.default.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.default.createElement("li",{key:a,className:o.default.tag},r.default.createElement(i.default,{name:t,permalink:a}))}))))};var r=l(a(29901)),n=l(a(25789)),u=l(a(39364)),i=l(a(27955)),o=l(a(77991))},35012:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.copyTextToClipboard=function(e,t){var a=(void 0===t?{}:t).target,l=void 0===a?document.body:a,r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var u=document.getSelection(),i=!1;u.rangeCount>0&&(i=u.getRangeAt(0));l.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var o=!1;try{o=document.execCommand("copy")}catch(d){}r.remove(),i&&(u.removeAllRanges(),u.addRange(i));n&&n.focus();return o}},20645:function(e,t,a){var l=a(66664).default,r=a(32089).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(3920)),u=l(a(50264));a(69877);var i=r(a(29901)),o=r(a(39364)),d=a(35012),c=["children"],f=function(e){var t=e.children,a=(0,u.default)(e,c),l=(0,i.useRef)(null),r=(0,i.useState)(!1),f=r[0],s=r[1];return i.default.createElement("pre",(0,n.default)({},a,{ref:l}),t,i.default.createElement("button",{type:"button","aria-label":(0,o.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:"copy-button",onClick:function(){l.current&&(0,d.copyTextToClipboard)(Array.from(l.current.querySelectorAll("code div.line")).map((function(e){return e.textContent})).join("\n")),s(!0),setTimeout((function(){return s(!1)}),2e3)}},f?i.default.createElement(o.default,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):i.default.createElement(o.default,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")))};t.default=f},29078:function(e,t,a){var l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(29901)),n=l(a(20645)),u=l(a(23010)),i=Object.assign({},u.default,{div:function(e){return"shiki-twoslash-fragment"===e.className?r.default.createElement(r.default.Fragment,null,e.children):r.default.createElement("div",e)},pre:function(e){return r.default.createElement(n.default,e)},code:function(e){return r.default.createElement("code",e)}});t.default=i},24054:function(e,t,a){a.r(t)},36927:function(e,t,a){a.r(t)},69877:function(e,t,a){a.r(t)},86304:function(e,t,a){a.r(t),t.default={image:"image_N15V"}},43983:function(e,t,a){a.r(t),t.default={authorCol:"authorCol_-klt"}},71038:function(e,t,a){a.r(t),t.default={blogPostTitle:"blogPostTitle_jycZ",blogPostData:"blogPostData_TihK",blogPostDetailsFull:"blogPostDetailsFull_3zOl"}},87099:function(e,t,a){a.r(t),t.default={sidebar:"sidebar_1DuY",sidebarItemTitle:"sidebarItemTitle_1IMI",sidebarItemList:"sidebarItemList_1Sdk",sidebarItem:"sidebarItem_2fz1",sidebarItemLink:"sidebarItemLink_nZyT",sidebarItemLinkActive:"sidebarItemLinkActive_cVZ7"}},68442:function(e,t,a){a.r(t),t.default={details:"details_2qmS"}},84637:function(e,t,a){a.r(t),t.default={anchorWithStickyNavbar:"anchorWithStickyNavbar_ecyb",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_3Eq7"}},24967:function(e,t,a){a.r(t),t.default={iconEdit:"iconEdit_Q5W8"}},63039:function(e,t,a){a.r(t),t.default={tag:"tag_3u9j",tagRegular:"tagRegular_2ex0",tagWithCount:"tagWithCount_Ecy6"}},77991:function(e,t,a){a.r(t),t.default={tags:"tags_rBON",tag:"tag_1DEx"}}}]);