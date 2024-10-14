"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15051],{58860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var i=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(t),u=a,m=g["".concat(s,".").concat(u)]||g[u]||c[u]||r;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68992:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>g});t(37953);var i=t(58860);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={title:"CSS Grid vs Flexbox - A brief guide",description:"In this brief guide, we compare some concepts of the two most popular CSS layout methods - Grid and Flexbox.",slug:"css-grid-vs-flexbox",authors:"muhammed_arslan",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/social-2.png",hide_table_of_contents:!1},s=void 0,d={permalink:"/blog/css-grid-vs-flexbox",source:"@site/blog/2024-06-13-flexbox-vs-grid.md",title:"CSS Grid vs Flexbox - A brief guide",description:"In this brief guide, we compare some concepts of the two most popular CSS layout methods - Grid and Flexbox.",date:"2024-06-13T00:00:00.000Z",formattedDate:"June 13, 2024",tags:[{label:"css",permalink:"/blog/tags/css"}],readingTime:8.225,hasTruncateMarker:!1,authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],frontMatter:{title:"CSS Grid vs Flexbox - A brief guide",description:"In this brief guide, we compare some concepts of the two most popular CSS layout methods - Grid and Flexbox.",slug:"css-grid-vs-flexbox",authors:"muhammed_arslan",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/social-2.png",hide_table_of_contents:!1},prevItem:{title:"Redirect in React Router V6 with Navigate Component",permalink:"/blog/navigate-react-router-redirect"},nextItem:{title:"Ref Forwarding with React forwardRef",permalink:"/blog/react-forwardref"},relatedPosts:[{title:"How do you wrap text content in CSS?",description:"We'll look at the CSS features that allow us to wrap overflowing text in containers.",permalink:"/blog/css-text-wrap",formattedDate:"March 5, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:7.6,date:"2024-03-05T00:00:00.000Z"},{title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",permalink:"/blog/framer-motion-react-animations",formattedDate:"September 1, 2022",authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],readingTime:8.235,date:"2022-09-01T00:00:00.000Z"},{title:"How to Use Two Dimensional Layouts with CSS Grid?",description:"We'll explore how to create two dimensional layouts using CSS Grid.",permalink:"/blog/css-grid",formattedDate:"July 17, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:41.51,date:"2024-07-17T00:00:00.000Z"}],authorPosts:[{title:"Creating a Responsive React Navbar with Tailwind CSS",description:"In this brief guide, we'll create a responsive navbar with Tailwind CSS and Bootstrap in React.",permalink:"/blog/react-navbar-responsive-tailwind",formattedDate:"October 7, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:8.4,date:"2022-10-07T00:00:00.000Z"},{title:"Temporal API - A new approach to managing Date and Time in JS",description:"Are we saying goodbye to the JavaScript Date object? Use the Temporal API to manipulate date and time objects in JavaScript.",permalink:"/blog/temporal-date-api",formattedDate:"June 21, 2024",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:9.665,date:"2024-06-21T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},g=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Control of Child Elements",id:"control-of-child-elements",level:2},{value:"Intrinsic and Extrinsic Sizing",id:"intrinsic-and-extrinsic-sizing",level:2},{value:"Box Alignment",id:"box-alignment",level:2},{value:"Behavior of Flexbox and Grid",id:"behavior-of-flexbox-and-grid",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Performance Considerations",id:"performance-considerations",level:2},{value:"Rendering Speed",id:"rendering-speed",level:3},{value:"Optimization Tips",id:"optimization-tips",level:3},{value:"CSS Grid Features",id:"css-grid-features",level:2},{value:"Grid Lines and Naming",id:"grid-lines-and-naming",level:3},{value:"Grid Areas",id:"grid-areas",level:3},{value:"Nested Grids",id:"nested-grids",level:3},{value:"Flexbox ordering",id:"flexbox-ordering",level:3},{value:"Browser Support",id:"browser-support",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:g},u="wrapper";function m(e){var{components:n}=e,t=o(e,["components"]);return(0,i.yg)(u,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){a(e,n,t[n])}))}return e}({},c,t),{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"This article was last updated on Jun 13, 2024, to add new examples and use cases for CSS Grid and Flexbox")),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"Flexbox helps in creating one-dimensional layouts through space distribution and alignment capabilities. Flexbox makes it easier to design responsive layouts without using float or positioning. It has made life much easier for people that use CSS."),(0,i.yg)("p",null,"Grid is a two-dimensional layout model that helps in creating a layout and aligning items in it. It offers a layout system with rows and columns, making it easier to design web pages without using floats and positioning."),(0,i.yg)("p",null,"Creating layouts with CSS can be tricky, and it's complicated by the fact that both Flexbox and Grid are used for designing the page layouts. This guide includes some differences between flexbox and grid. We'll see how to decide which one of these to use while designing a layout."),(0,i.yg)("p",null,"In this guide, we'll cover:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#control-of-child-elements"},"Control of Child Elements")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#intrinsic-and-extrinsic-sizing"},"Intrinsic and Extrinsic Sizing")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#box-alignment"},"Box Alignment")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#behavior-of-flexbox-and-grid"},"Behavior of Flexbox and Grid")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#use-cases"},"Use cases")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#performance-considerations"},"Performance Considerations")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#css-grid-features"},"CSS Grid Features"))),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Fundamentals of CSS layout"),(0,i.yg)("li",{parentName:"ul"},"Basic understanding of CSS Flexbox"),(0,i.yg)("li",{parentName:"ul"},"Basic understanding of CSS Grid")),(0,i.yg)("h2",{id:"control-of-child-elements"},"Control of Child Elements"),(0,i.yg)("p",null,"Flexbox gives children a lot of control. You have three child elements in the following example."),(0,i.yg)("p",null,"If you set ",(0,i.yg)("inlineCode",{parentName:"p"},"display: flex"),", it creates a flex layout. You'll notice that you don't have three equal columns. It comes as a default with Flexbox when things are calculated for sizing."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div class="parent">\n  <div class="child">\n    <h3>Lorem ipsum</h3>\n    <p>Lorem ipsum dolor sit.</p>\n  </div>\n  <div class="child">\n    <h3>Lorem ipsum</h3>\n    <p>\n      Aestiae voluptatum expedita minima doloribus nemo ipsa vel. Ducimus name,\n      vel rerum quisquam illum maxime cumque.\n    </p>\n  </div>\n  <div class="child">\n    <h3>Lorem ipsum</h3>\n    <p>\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae molestiae\n      voluptatum expedita minima doloribus nemo ipsa vel. Ducimus name,\n    </p>\n  </div>\n</div>\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".parent {\n  display: flex;\n  width: 100%;\n  max-width: 50rem;\n  margin: 0 auto;\n  padding: 1rem;\n  border: 3px solid lime;\n}\n\n.child {\n  padding: 1rem;\n  border: 3px dashed red;\n  background: white;\n}\n")),(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-1.png",alt:"Control of Child Elements"}),(0,i.yg)("br",null),(0,i.yg)("p",null,"If you want to make three equal columns, you can't do this in a parent element. You need to do this in the child element as ",(0,i.yg)("inlineCode",{parentName:"p"},"width:100%")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"flex:1"),". It will create three equal child elements in width."),(0,i.yg)("p",null,"Basically, child elements have control because the parent element delegates it to child elements in a flexbox. If child elements have equal content, they will be equal in size without doing ",(0,i.yg)("inlineCode",{parentName:"p"},"width:100%")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"flex:1"),"."),(0,i.yg)("p",null,"So, we need to be careful while using Flexbox."),(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-2.png",alt:"Control of Child Elements"}),(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Unlike Flexbox, a parent is completely in control of a grid. Let's create the above layout using a grid:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".parent {\n  display: grid;\n  width: 100%;\n  max-width: 50rem;\n  margin: 0 auto;\n  padding: 1rem;\n  border: 3px solid lime;\n}\n")),(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-3.png",alt:"Control of Child Elements"}),(0,i.yg)("br",null),(0,i.yg)("p",null,"Nothing will happen if we change ",(0,i.yg)("inlineCode",{parentName:"p"},"display: flex")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"display: grid")," You have to do something else to get things in the right place."),(0,i.yg)("p",null,"So, add this line ",(0,i.yg)("inlineCode",{parentName:"p"},"grid-template-columns: 1fr 1fr 1fr")," in the parent element. Then, the content will fit into those columns that are created. When you create a grid, children of the grid fit into those cells."),(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-4.png",alt:"Control of Child Elements"}),(0,i.yg)("br",null),(0,i.yg)("h2",{id:"intrinsic-and-extrinsic-sizing"},"Intrinsic and Extrinsic Sizing"),(0,i.yg)("p",null,"In CSS, you have intrinsic and extrinsic sizing, like:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".intrinsic-size {\n  width: auto;\n}\n.extrinsic-size {\n  width: 500px;\n}\n")),(0,i.yg)("p",null,"It's a really important part of how layouts work in CSS. In intrinsic sizing, the browser figures out the size of an element."),(0,i.yg)("p",null,"In extrinsic sizing, you declare a specific width. Flexbox relies heavily on the intrinsic sizing of elements while growing and shrinking."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div class="product">\n  <img src="https://assets.codepen.io/308367/betteroutreach-logo.avif" />\n  <div class="product__info">\n    <h2>Product One</h2>\n    <p>A collection of the best cold email templates ever sent</p>\n    <div class="product__meta">\n      <div>Free Options</div>\n      <div>Email</div>\n    </div>\n  </div>\n</div>\n\n<div class="product">\n  <img src="https://assets.codepen.io/308367/sliderule-logo.avif" />\n  <div class="product__info">\n    <h2>Product two</h2>\n    <p>The no-code rules engine for risk & fraud</p>\n    <div class="product__meta">\n      <div>Free</div>\n      <div>Social Network</div>\n    </div>\n  </div>\n</div>\n\n<div class="product">\n  <img src="https://assets.codepen.io/308367/warmy-logo.avif" />\n  <div class="product__info">\n    <h2>Product three</h2>\n    <p>Auto all-in-one tool to make your email channel reliable</p>\n    <div class="product__meta">\n      <div>Free Options</div>\n      <div>Email</div>\n    </div>\n  </div>\n</div>\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".product__meta {\n  font-size: 12px;\n  outline: 3px solid red;\n  display: flex;\n  gap: 1rem;\n}\n\n.product__meta > * {\n  border: 3px solid lime;\n}\n\nbody {\n  display: grid;\n  padding: var(--size-9);\n  align-content: start;\n  gap: var(--size-9);\n  background: white;\n}\n\n.product {\n  display: grid;\n  gap: var(--size-5);\n  grid-template-columns: 5rem 1fr;\n}\n\n.product__info {\n  display: grid;\n  grid-template-rows: min-content;\n}\n")),(0,i.yg)("p",null,"Flexbox figures out content size in the first place. When you do ",(0,i.yg)("inlineCode",{parentName:"p"},"display: flex"),", the element size is based completely on the size of the content."),(0,i.yg)("p",null,"If you display flex in the product meta, two columns will take width according to the content size. It will help in creating the desired layout. So, dynamic columns can fit into this layout."),(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-5.png",alt:"Control of Child Elements"}),(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("p",null,"Unlike grid, where each column will take full width, or you need to specify the size in the parent element."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".product__meta {\n  font-size: 12px;\n  outline: 3px solid red;\n  // highlight-next-line\n  display: grid;\n  gap: 1rem;\n}\n")),(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-6.png",alt:"Control of Child Elements"}),(0,i.yg)("br",null),(0,i.yg)("p",null,"Hence, flexbox will provide more flexibility in this case. The grid helps in creating a more controlled layout."),(0,i.yg)("h2",{id:"box-alignment"},"Box Alignment"),(0,i.yg)("p",null,"Let's not forget about box alignment. Because Flexbox holds the ability to align elements very easily. Before flexbox, it was very difficult to align items properly. Different hacks and tricks were used to align elements in the desired layout."),(0,i.yg)("p",null,"Flexbox can be used in a grid layout as well. Whenever you need to create a layout that has specific alignment or space distribution, you might want to go for a flexbox."),(0,i.yg)("h2",{id:"behavior-of-flexbox-and-grid"},"Behavior of Flexbox and Grid"),(0,i.yg)("p",null,"Grid is useful in creating more complex and organized layouts. When you design the layout of a page, you can use a grid for the combined layout. Whereas flexbox helps in creating individual elements."),(0,i.yg)("p",null,"Since flexbox is based on intrinsic sizing, you can use flexbox when the layout depends upon the content. On the other hand, the grid is useful when content depends upon the layout."),(0,i.yg)("h2",{id:"use-cases"},"Use cases"),(0,i.yg)("p",null,"Flexbox can be a great to help align content and move blocks around and a great option for app components and small-scale layouts, while grid can be more appropriate when you have large area layouts."),(0,i.yg)("p",null,"Flex directions allow you to vertically or horizontally align your content, which is useful when developing reverse rows or columns."),(0,i.yg)("p",null,"Use flexbox:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If you have items in a single dimension either in a row or a column."),(0,i.yg)("li",{parentName:"ul"},"If content shapes the layout, it takes a content-first approach."),(0,i.yg)("li",{parentName:"ul"},"If you want to keep container items independent of each other.")),(0,i.yg)("p",null,"Use grid:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When the items need to go into rows and columns."),(0,i.yg)("li",{parentName:"ul"},"When layout shapes the content, it takes a layout-first approach."),(0,i.yg)("li",{parentName:"ul"},"When you want to design the combined layout of the page.")),(0,i.yg)("h2",{id:"performance-considerations"},"Performance Considerations"),(0,i.yg)("h3",{id:"rendering-speed"},"Rendering Speed"),(0,i.yg)("p",null,"You should just ensure that the combination of both CSS Grid and Flexbox is not at the cost of web page loading or running performance. Grids can sometimes be complicated, requiring a bit more work from the rendering engine; when there are large layouts, it may take more time to render them. Flexbox should be faster than Grid for simple one-dimensional layouts."),(0,i.yg)("h3",{id:"optimization-tips"},"Optimization Tips"),(0,i.yg)("p",null,"The following will serve you to keep your web pages running smoothly:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Use Grid for complex, two-dimensional layouts. Avoid nesting lots of Grids inside one another.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},"/* Complex Grid Layout */\n.outer-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 10px;\n}\n\n.inner-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5px;\n}\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Use Flexbox to make one-dimensional layouts easier.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},"/* Simple Flexbox Layout */\n.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Control the number of elements in your layout in order not to slow down the rendering process.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},"/* Avoid overly complex structures */\n.container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.item {\n  flex: 1 1 200px;\n  margin: 10px;\n}\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Test your layout performance on a variety of devices and browsers so that it may work from everywhere without a hitch.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},"/* Media Queries for Responsive Design */\n.container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.item {\n  flex: 1 1 200px;\n  margin: 10px;\n}\n\n@media (max-width: 600px) {\n  .item {\n    flex: 1 1 100%;\n  }\n}\n")),(0,i.yg)("h2",{id:"css-grid-features"},"CSS Grid Features"),(0,i.yg)("h3",{id:"grid-lines-and-naming"},"Grid Lines and Naming"),(0,i.yg)("p",null,"Give your grid lines descriptive names so you can refer to them in your CSS later."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".parent {\n  display: grid;\n  grid-template-columns: [start] 1fr [middle] 1fr [end];\n}\n.child {\n  grid-column: start / middle;\n}\n")),(0,i.yg)("h3",{id:"grid-areas"},"Grid Areas"),(0,i.yg)("p",null,"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"grid-template-areas")," for a complicated layout using a grid while naming the various sections."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},'.parent {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n}\n.header {\n  grid-area: header;\n}\n.sidebar {\n  grid-area: sidebar;\n}\n.main {\n  grid-area: main;\n}\n.footer {\n  grid-area: footer;\n}\n')),(0,i.yg)("h3",{id:"nested-grids"},"Nested Grids"),(0,i.yg)("p",null,"We could also place the grid inside another grid."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".outer-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.inner-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n")),(0,i.yg)("h3",{id:"flexbox-ordering"},"Flexbox ordering"),(0,i.yg)("p",null,"Arrange the items using the order property."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".container {\n  display: flex;\n}\n.item1 {\n  order: 2;\n}\n.item2 {\n  order: 1;\n}\n")),(0,i.yg)("p",null,"###\xa0Flexbox Wrapping\nManage to wrap with ",(0,i.yg)("inlineCode",{parentName:"p"},"flex-wrap"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.item {\n  flex: 1 1 200px;\n}\n")),(0,i.yg)("h2",{id:"browser-support"},"Browser Support"),(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/grid.png",alt:"grid"}),(0,i.yg)("br",null),(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/flex.png",alt:"flex"}),(0,i.yg)("br",null),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"Grids can be your best friend when you need to create the outer layout of a webpage. With these, complex designs are not out-of-reach and responsive too!"))}m.isMDXComponent=!0}}]);