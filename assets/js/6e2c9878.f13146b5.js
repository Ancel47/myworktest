"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21455],{58860:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var a=t(37953);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(y,o(o({ref:n},g),{},{components:t})):a.createElement(y,o({ref:n},g))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>p});t(37953);var a=t(58860);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={title:"Using SVGs in React",description:"Let's talk about React SVG and how it makes the process of adding and handling images on modern websites more versatile and fun.",slug:"react-svg",authors:"chidume_nnamdi",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-17-react-svg/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/react-svg",source:"@site/blog/2023-11-17-react-svg.md",title:"Using SVGs in React",description:"Let's talk about React SVG and how it makes the process of adding and handling images on modern websites more versatile and fun.",date:"2023-11-17T00:00:00.000Z",formattedDate:"November 17, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:13.3,hasTruncateMarker:!1,authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],frontMatter:{title:"Using SVGs in React",description:"Let's talk about React SVG and how it makes the process of adding and handling images on modern websites more versatile and fun.",slug:"react-svg",authors:"chidume_nnamdi",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-17-react-svg/social.png",hide_table_of_contents:!1},prevItem:{title:"A Guide for Delete Pods from Kubernetes Nodes - kubectl delete",permalink:"/blog/kubectl-delete-pod"},nextItem:{title:"How to Use the TypeScript satisfies Operator",permalink:"/blog/typescript-satisfies-operator"},relatedPosts:[{title:"How to create React draggable components with react-dnd",description:"We'll be using the react-dnd library to create draggable components in React.",permalink:"/blog/react-draggable-components-with-react-dnd",formattedDate:"March 7, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:21.145,date:"2023-03-07T00:00:00.000Z"},{title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",permalink:"/blog/navigate-react-router-redirect",formattedDate:"June 14, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.735,date:"2024-06-14T00:00:00.000Z"},{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",permalink:"/blog/react-virtual-dom",formattedDate:"November 23, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:12.11,date:"2023-11-23T00:00:00.000Z"}],authorPosts:[{title:"A Guide on React Lazy Loading",description:"We will be looking at what lazy loading is, how it works, and how it can be used to improve the performance of React applications.",permalink:"/blog/react-lazy-loading",formattedDate:"July 12, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:16.045,date:"2024-07-12T00:00:00.000Z"},{title:"React Props Explained with Examples",description:"A detailed guide on React props with examples",permalink:"/blog/react-props",formattedDate:"July 10, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:13.79,date:"2024-07-10T00:00:00.000Z"},{title:"Error Boundaries in React -  Handling Errors Gracefully",description:"We'll see how to handle errors in React using Error Boundaries and how to use the react-error-boundary library to handle errors in React.",permalink:"/blog/react-error-boundaries",formattedDate:"November 9, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:11.66,date:"2023-11-09T00:00:00.000Z"}]},g={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is SVG?",id:"what-is-svg",level:2},{value:"Importing SVGs",id:"importing-svgs",level:2},{value:"Importing as a React Component:",id:"importing-as-a-react-component",level:2},{value:"Using an <code>&lt;img&gt;</code> Tag",id:"using-an-img-tag",level:2},{value:"Inline SVG",id:"inline-svg",level:2},{value:"Using <code>react-svg</code>",id:"using-react-svg",level:2},{value:"Styling SVGs in React",id:"styling-svgs-in-react",level:2},{value:"Inline Styles",id:"inline-styles",level:3},{value:"CSS Stylesheets",id:"css-stylesheets",level:3},{value:"CSS Modules (Scoped Styles)",id:"css-modules-scoped-styles",level:3},{value:"Styled Components (CSS-in-JS)",id:"styled-components-css-in-js",level:3},{value:"Emotion (CSS-in-JS) Another <code>CSS-in-JS</code> library that has similar functionality to Styled Components.",id:"emotion-css-in-js-another-css-in-js-library-that-has-similar-functionality-to-styled-components",level:3},{value:"Inline SVG as JSX",id:"inline-svg-as-jsx",level:3},{value:"Manipulating SVG Props",id:"manipulating-svg-props",level:3},{value:"Dynamic SVGs",id:"dynamic-svgs",level:3},{value:"Initializing State and Props",id:"initializing-state-and-props",level:3},{value:"Creating SVG Components",id:"creating-svg-components",level:3},{value:"Adding Interactivity",id:"adding-interactivity",level:3},{value:"Animating SVG Elements",id:"animating-svg-elements",level:3},{value:"Composing SVG Components",id:"composing-svg-components",level:3},{value:"Using Third-Party Libraries",id:"using-third-party-libraries",level:3},{value:"Animation with SVGs in React",id:"animation-with-svgs-in-react",level:3},{value:"Create or Import an SVG",id:"create-or-import-an-svg",level:3},{value:"Basic CSS Animations",id:"basic-css-animations",level:3},{value:"Animation Libraries",id:"animation-libraries",level:3},{value:"Interactivity",id:"interactivity",level:3}],m={toc:p},d="wrapper";function y(e){var{components:n}=e,t=o(e,["components"]);return(0,a.yg)(d,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"In the world of making websites look good, pictures, especially images, are super important. They make up a big part (60%!) of what you see online, making websites more interesting and helping to share information. Among the many tools that developers use, React SVG stands out. It's like a superhero for putting cool and scalable graphics, especially Scalable Vector Graphics (SVG), into websites."),(0,a.yg)("p",null,"When developers want to make websites that look awesome and do cool things, they need graphics that can change and fit well. React SVG, which is like a special tool in the React world, helps developers use Scalable Vector Graphics (SVG) really easily."),(0,a.yg)("p",null,"So, in this article, we'll talk about React SVG and how it makes the process of adding and handling images on modern websites more versatile and fun."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-svg"},"What is SVG?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#importing-svgs"},"Importing SVGs")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#importing-as-a-react-component"},"Importing as a React Component:")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#inline-svg"},"Inline SVG")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-react-svg"},"Using ",(0,a.yg)("inlineCode",{parentName:"a"},"react-svg"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#styling-svgs-in-react"},"Styling SVGs in React"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#inline-svg-as-jsx"},"Inline SVG as JSX")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#manipulating-svg-props"},"Manipulating SVG Props")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#dynamic-svgs"},"Dynamic SVGs")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#initializing-state-and-props"},"Initializing State and Props")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#creating-svg-components"},"Creating SVG Components")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#animating-svg-elements"},"Animating SVG Elements")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#composing-svg-components"},"Composing SVG Components")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-third-party-libraries"},"Using Third-Party Libraries")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#animation-with-svgs-in-react"},"Animation with SVGs in React")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#create-or-import-an-svg"},"Create or Import an SVG"))))),(0,a.yg)("h2",{id:"what-is-svg"},"What is SVG?"),(0,a.yg)("p",null,"The content or code of an SVG file is an HTML code, just like other image files like JPG, PNG, GIFS, etc have their encodings and format respectively. The whole code of an SVG is wrapped in a single ",(0,a.yg)("inlineCode",{parentName:"p"},"svg")," element. The content or code of the SVG are wide array of elements that are dedicated to the construction, drawing, and layout of vector images and diagrams."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"<svg>...</svg>\n")),(0,a.yg)("p",null,"We have seen that SVGs are HTML code, so they can be rendered on the browser. Now, they can be manipulated with CSS and JavaScript. We can get the instance of an ",(0,a.yg)("inlineCode",{parentName:"p"},"svg")," using the DOM APIs like ",(0,a.yg)("inlineCode",{parentName:"p"},"document.querySelector"),", and manipulate it with JavaScript. We can also style it with CSS."),(0,a.yg)("p",null,"The instance of an ",(0,a.yg)("inlineCode",{parentName:"p"},"svg")," is also available in the DOM, it is the ",(0,a.yg)("inlineCode",{parentName:"p"},"HTMLSVGElement"),". This is to further show you that the browser recognizes the ",(0,a.yg)("inlineCode",{parentName:"p"},"svg")," as an HTML element."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const svg = document.querySelector("svg");\nconsole.log(svg instanceof HTMLSVGElement); // true\n')),(0,a.yg)("p",null,"So basically, SVG images are HTML. So they can be rendered on the browser. Now, SVG array of elements can only be rendered inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"svg")," block, they can be rendered outside it but the browser will see it as a custom element. So it only has meaning within the ",(0,a.yg)("inlineCode",{parentName:"p"},"svg")," code. The use of SVG is quite versatile. SVGs can be used to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"draw text effects"),(0,a.yg)("li",{parentName:"ul"},"animations. Most animations on the browser are done with the use of SVG."),(0,a.yg)("li",{parentName:"ul"},"draw data visualization e.g. charts, and bars. Chartsjs uses SVG to draw charts."),(0,a.yg)("li",{parentName:"ul"},"render a UI design field. Figma uses SVG to render all those designs we do on it, and all those drag and drop are SVG designs."),(0,a.yg)("li",{parentName:"ul"},"3D graphics. This library called threejs uses SVG to render 3D graphics on the browser."),(0,a.yg)("li",{parentName:"ul"},"act as a stand-in image or placeholder for lazily-loaded images. This is because SVGs are very small in size and can be rendered on the browser very fast.")),(0,a.yg)("h2",{id:"importing-svgs"},"Importing SVGs"),(0,a.yg)("p",null,"In a React project, there are several approaches to importing SVG files, each with its advantages and use cases. Here are a few common methods."),(0,a.yg)("h2",{id:"importing-as-a-react-component"},"Importing as a React Component:"),(0,a.yg)("p",null,"In this approach, you can import SVG files directly as React components. SVG files have a ",(0,a.yg)("inlineCode",{parentName:"p"},".svg")," extension, so you can import them like any other JavaScript file. This method allows you to treat SVGs as React components, making them easy to manipulate and style using React's capabilities."),(0,a.yg)("p",null,"Let's say we have this svg code that we want to use in our React application:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">\n  <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />\n</svg>\n')),(0,a.yg)("p",null,"Now, we want to use this as a file in our React application. We can do this by creating a file called ",(0,a.yg)("inlineCode",{parentName:"p"},"MySvg.svg")," and pasting the code above in it."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/icons/circle.svg"',title:'"src/icons/circle.svg"'},'<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">\n  <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />\n</svg>\n')),(0,a.yg)("p",null,"Then we can import it into our React application like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { ReactComponent as CircleSvg } from "./icons/circle.svg";\n\n// Usage in JSX\nconst MyComponent = () => {\n  return <CircleSvg />;\n};\n')),(0,a.yg)("p",null,"Here, ",(0,a.yg)("inlineCode",{parentName:"p"},"CircleSvg")," is a special import syntax that comes with ",(0,a.yg)("inlineCode",{parentName:"p"},"Create React App")," and Webpack. It allows you to import SVG files as React components. Once, we import it, we can use it as a React component in our JSX. The code inside the SVG file is not a React component at all but once we import it using the ",(0,a.yg)("inlineCode",{parentName:"p"},"import")," it is automatically converted to a React component."),(0,a.yg)("h2",{id:"using-an-img-tag"},"Using an ",(0,a.yg)("inlineCode",{parentName:"h2"},"<img>")," Tag"),(0,a.yg)("p",null,"We can also use the traditional HTML ",(0,a.yg)("inlineCode",{parentName:"p"},"<img>")," tag to display SVGs. This approach is straightforward and suitable for simple use cases."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import CircleSvg from "./icons/circle.svg";\n\n// Usage in JSX\nconst MyComponent = () => {\n  return <img src={CircleSvg} alt="My SVG" />;\n};\n')),(0,a.yg)("p",null,"Here we are importing the SVG file and using it as the ",(0,a.yg)("inlineCode",{parentName:"p"},"src")," attribute of the ",(0,a.yg)("inlineCode",{parentName:"p"},"<img>")," tag.\nThe above will be converted to this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<img src="data:image/svg+xml,%3csvg..." alt="My SVG" />\n')),(0,a.yg)("p",null,"The cons of this approach is that the styling and manipulating of the SVG might be limited. For example, we cannot be able to change the color of the SVG using CSS. We can only change the color of the SVG using the ",(0,a.yg)("inlineCode",{parentName:"p"},"fill")," attribute of the ",(0,a.yg)("inlineCode",{parentName:"p"},"<img>")," tag."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import CircleSvg from "./icons/circle.svg";\n\n// Usage in JSX\nconst MyComponent = () => {\n  return <img src={CircleSvg} alt="My SVG" fill="red" />;\n};\n')),(0,a.yg)("p",null,"Here, we are using the ",(0,a.yg)("inlineCode",{parentName:"p"},"fill")," attribute of the ",(0,a.yg)("inlineCode",{parentName:"p"},"<img>")," tag to change the color of the SVG. This is the only way we can change the color of the SVG using the ",(0,a.yg)("inlineCode",{parentName:"p"},"<img>")," tag. We cannot use CSS to change the color of the SVG."),(0,a.yg)("h2",{id:"inline-svg"},"Inline SVG"),(0,a.yg)("p",null,"Inline SVG involves directly embedding the SVG markup within your React component. This approach provides more control over styling and manipulation directly within the component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\n// Usage in JSX\nconst MyComponent = () => {\n  return (\n    <div>\n      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">\n        <circle\n          cx="50"\n          cy="50"\n          r="40"\n          stroke="black"\n          strokeWidth="3"\n          fill="red"\n        />\n      </svg>\n    </div>\n  );\n};\n')),(0,a.yg)("p",null,"Here, we are directly embedding the SVG code in our React component. We just copied the contents of the SVG file and pasted it into our React component. It renders as an HTML element directly. Here, we have total control over the SVG. We can manipulate it with CSS and JavaScript. We can also use React to manipulate it."),(0,a.yg)("p",null,"This method is suitable for smaller, inline SVGs, and it gives you direct control over each element. The cons are that the svg code might be large and we will end up with a bloated component file size. Also, the svg becomes hard to maintain, we can mitigate against this if we use the ",(0,a.yg)("inlineCode",{parentName:"p"},"react-svg")," library."),(0,a.yg)("h2",{id:"using-react-svg"},"Using ",(0,a.yg)("inlineCode",{parentName:"h2"},"react-svg")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"[react-svg](https://www.npmjs.com/package/react-svg)")," library gives us the ability to embed inline SVGs while still able to manipulate the inline SVGs."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npm install react-svg\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"react-svg")," exports a ",(0,a.yg)("inlineCode",{parentName:"p"},"ReactSVG")," component. The component has a props ",(0,a.yg)("inlineCode",{parentName:"p"},"src")," that receives the inline SVG."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { ReactSVG } from "react-svg";\n\n<ReactSVG src="circle.svg" />;\n')),(0,a.yg)("p",null,"Here, import the ",(0,a.yg)("inlineCode",{parentName:"p"},"ReactSVG")," component and pass the URL of the ",(0,a.yg)("inlineCode",{parentName:"p"},"circle.svg")," file to the ",(0,a.yg)("inlineCode",{parentName:"p"},"src")," props. There are many useful props that we can pass to the ",(0,a.yg)("inlineCode",{parentName:"p"},"ReactSVG"),". We can request the component to cache the SVGs, we can attach a click handler to the SVG, and many ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-svg"},"more")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://gist.github.com/philipszdavido/b24ed3c87d0e3b5850a69de2e39f8469#using-react-svg-loader-or-svg-react-loader"},(0,a.yg)("strong",{parentName:"a"},"Using"))," ",(0,a.yg)("inlineCode",{parentName:"p"},"[**react-svg-loader**](https://gist.github.com/philipszdavido/b24ed3c87d0e3b5850a69de2e39f8469#using-react-svg-loader-or-svg-react-loader)")," ",(0,a.yg)("a",{parentName:"p",href:"https://gist.github.com/philipszdavido/b24ed3c87d0e3b5850a69de2e39f8469#using-react-svg-loader-or-svg-react-loader"},(0,a.yg)("strong",{parentName:"a"},"or"))," ",(0,a.yg)("inlineCode",{parentName:"p"},"**svg-react-loader**")),(0,a.yg)("p",null,"There are specific loaders like ",(0,a.yg)("inlineCode",{parentName:"p"},"react-svg-loader")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"svg-react-loader")," that allow you to import SVG files directly and use them as React components."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import CircleSvg from "svg-react-loader!./icons/circle.svg";\n\n// Usage in JSX\nconst MyComponent = () => {\n  return <CircleSvg />;\n};\n')),(0,a.yg)("p",null,"Ensure you have these loaders installed (",(0,a.yg)("inlineCode",{parentName:"p"},"npm install --save-dev react-svg-loader")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"npm install --save-dev svg-react-loader"),") and configured in your build setup."),(0,a.yg)("p",null,"Choose the method that best suits your project requirements and workflow. Each approach has its strengths, and the choice often depends on factors such as ease of use, scalability, and the specific needs of your application."),(0,a.yg)("h2",{id:"styling-svgs-in-react"},"Styling SVGs in React"),(0,a.yg)("p",null,"We have seen ways to import and use SVGs in React. Now, let's look at ways we can style SVGs in React."),(0,a.yg)("p",null,"Using SVGs in React components is common for adding scalable graphics. There are multiple methods to style SVGs to make them fit in with the rest of your UI. Here\u2019s a rundown of the options you have for styling SVGs in React:"),(0,a.yg)("h3",{id:"inline-styles"},"Inline Styles"),(0,a.yg)("p",null,"You can dynamically change the style of SVG elements by passing a style object directly to the SVG component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'const MySvgComponent = () => (\n    <svg style={{ fill: "blue", width: "50px", height: "50px" }}>\n      {/* paths, circles, etc. */}\n    </svg>\n);\n')),(0,a.yg)("h3",{id:"css-stylesheets"},"CSS Stylesheets"),(0,a.yg)("p",null,"Just like HTML elements, you can style SVGs using CSS classes or IDs."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'// styles.css\n.my-svg {\n  fill: blue;\n  width: 50px;\n  height: 50px;\n}\n\nimport "./styles.css";\n\nconst MySvgComponent = () => (\n  <svg className="my-svg">{/* paths, circles, etc. */}</svg>\n);\n')),(0,a.yg)("h3",{id:"css-modules-scoped-styles"},"CSS Modules (Scoped Styles)"),(0,a.yg)("p",null,"If you're using CSS Modules, you can import styles from a ",(0,a.yg)("inlineCode",{parentName:"p"},".module.css")," file which will automatically scope the class names to avoid conflicts."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MySvgComponent.module.css"',title:'"MySvgComponent.module.css"'},'.mySvg {\n  fill: blue;\n  width: 50px;\n  height: 50px;\n}\n\nimport styles from "./MySvgComponent.module.css";\n\nconst MySvgComponent = () => (\n  <svg className={styles.mySvg}>{/* paths, circles, etc. */}</svg>\n);\n')),(0,a.yg)("h3",{id:"styled-components-css-in-js"},"Styled Components (CSS-in-JS)"),(0,a.yg)("p",null,"This is a popular CSS-in-JS library that lets you use component-level styles."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import styled from "styled-components";\n\nconst StyledSvg = styled.svg`\n  fill: blue;\n  width: 50px;\n  height: 50px;\n`;\n\nconst MySvgComponent = () => (\n  <StyledSvg>{/_ paths, circles, etc. _/}</StyledSvg>\n);\n')),(0,a.yg)("h3",{id:"emotion-css-in-js-another-css-in-js-library-that-has-similar-functionality-to-styled-components"},"Emotion (CSS-in-JS) Another ",(0,a.yg)("inlineCode",{parentName:"h3"},"CSS-in-JS")," library that has similar functionality to Styled Components."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"/\\*_ @jsxImportSource @emotion/react _/\nimport { css } from '@emotion/react';\n\nconst style = css`  fill: blue;\n  width: 50px;\n  height: 50px;`;\n\nconst MySvgComponent = () => (\n<svg css={style}>\n{/* paths, circles, etc. */}\n</svg>\n);\n")),(0,a.yg)("h3",{id:"inline-svg-as-jsx"},"Inline SVG as JSX"),(0,a.yg)("p",null,"If you import your SVG as a React component (using a loader like ",(0,a.yg)("inlineCode",{parentName:"p"},"@svgr/webpack"),"), you can directly apply styles to its JSX."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { ReactComponent as MySvg } from "./mySvg.svg";\n\nconst MySvgComponent = () => (\n  <MySvg style={{ fill: "blue", width: "50px", height: "50px" }} />\n);\n')),(0,a.yg)("h3",{id:"manipulating-svg-props"},"Manipulating SVG Props"),(0,a.yg)("p",null,"SVG elements have specific properties (such as fill, stroke, width, height, etc.) that can be manipulated in JSX:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const MySvgComponent = ({ color }) => (\n  <svg width="50" height="50">\n    <circle cx="25" cy="25" r="20" fill={color} />\n  </svg>\n);\n')),(0,a.yg)("p",null,"Each of these methods has its use cases. Inline styles and manipulating SVG props are great for quick dynamic styling changes, while CSS stylesheets, CSS Modules, and CSS-in-JS libraries offer more power and flexibility, especially when you have complex styles or you want to keep your styles organized and modular."),(0,a.yg)("h3",{id:"dynamic-svgs"},"Dynamic SVGs"),(0,a.yg)("p",null,"Dynamic SVGs in React can provide a rich and interactive experience for users. SVG (Scalable Vector Graphics) is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation. When using React, you can create interactive SVG elements that respond to user input, changes in state, or props. Here's a conceptual guide on how to do this:"),(0,a.yg)("h3",{id:"initializing-state-and-props"},"Initializing State and Props"),(0,a.yg)("p",null,"Start by deciding what aspects of your SVG need to be dynamic. For instance, you might want to dynamically change the color, size, or position of an SVG element. You can use the useState hook to manage stateful values within your components, and you can pass down props to configure components from a parent."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const [color, setColor] = useState("blue");\n')),(0,a.yg)("h3",{id:"creating-svg-components"},"Creating SVG Components"),(0,a.yg)("p",null,"You can create a React component that returns SVG elements. These components can then take props or use state to determine how the SVG is rendered."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyCircle = ({ color }) => (\n  <svg width="100" height="100">\n    <circle\n      cx="50"\n      cy="50"\n      r="40"\n      stroke="black"\n      strokeWidth="3"\n      fill={color}\n    />\n  </svg>\n);\n')),(0,a.yg)("h3",{id:"adding-interactivity"},"Adding Interactivity"),(0,a.yg)("p",null,"Attach event handlers such as ",(0,a.yg)("inlineCode",{parentName:"p"},"onClick"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"onMouseOver"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"onMouseOut"),", etc., to SVG elements to make them interactive."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const InteractiveCircle = () => {\n  const [color, setColor] = useState("blue");\n\n  const changeColor = (newColor) => setColor(newColor);\n\n  return (\n    <svg width="100" height="100">\n      <circle\n        cx="50"\n        cy="50"\n        r="40"\n        stroke="black"\n        strokeWidth="3"\n        fill={color}\n        onMouseOver={() => changeColor("green")}\n        onMouseOut={() => changeColor("blue")}\n      />\n    </svg>\n  );\n};\n')),(0,a.yg)("h3",{id:"animating-svg-elements"},"Animating SVG Elements"),(0,a.yg)("p",null,"You could use CSS animations or the Web Animations API to animate SVG elements. React's useEffect hook can be used to trigger animations when certain states or props change."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  // Trigger animation logic when 'color' changes\n}, [color]);\n")),(0,a.yg)("h3",{id:"composing-svg-components"},"Composing SVG Components"),(0,a.yg)("p",null,"Larger SVG graphics can be composed of smaller SVG components, allowing you to reuse logic and simplify your codebase."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const App = () => (\n  <svg width="200" height="200">\n    <MyCircle color="blue" />\n    <MyCircle color="red" />\n  </svg>\n);\n')),(0,a.yg)("h3",{id:"using-third-party-libraries"},"Using Third-Party Libraries"),(0,a.yg)("p",null,"There are several libraries available that make working with SVGs in React easier. For instance, ",(0,a.yg)("inlineCode",{parentName:"p"},"d3-react-svg"),", combines the power of D3.js with React to create data visualizations."),(0,a.yg)("h3",{id:"animation-with-svgs-in-react"},"Animation with SVGs in React"),(0,a.yg)("p",null,"Animating SVGs in React can greatly enhance the user experience by providing a visually appealing way to convey changes or draw attention to certain parts of the UI. Let's look at some steps and some considerations for implementing SVG animations in React:"),(0,a.yg)("h3",{id:"create-or-import-an-svg"},"Create or Import an SVG"),(0,a.yg)("p",null,"You can create SVGs using graphic design software or write the SVG markup directly. SVGs can then be imported into a React component either as a React component using JSX or as a file if you're using tools like Create React App which supports SVG imports."),(0,a.yg)("p",null,"Example SVG as JSX in a React component:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const MySVG = () => (\n  <svg width="100" height="100">\n    <circle\n      cx="50"\n      cy="50"\n      r="40"\n      stroke="green"\n      strokeWidth="4"\n      fill="yellow"\n    />\n  </svg>\n);\n')),(0,a.yg)("p",null,"Importing SVG as a module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { ReactComponent as MySVG } from "./my-svg.svg";\n\nconst MyComponent = () => (\n  <div>\n    <MySVG />\n  </div>\n);\n')),(0,a.yg)("h3",{id:"basic-css-animations"},"Basic CSS Animations"),(0,a.yg)("p",null,"For simple animations, you might not need any additional libraries. CSS can be used to animate SVG properties such as opacity, transform, or stroke-related properties."),(0,a.yg)("p",null,"Example using CSS:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'    @keyframes fadeIn {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n\n    .my-svg {\n      animation: fadeIn 2s ease-in-out infinite;\n    }\n    const MySVG = () => (\n      <svg className="my-svg" width="100" height="100">\n        <circle\n          cx="50"\n          cy="50"\n          r="40"\n          stroke="green"\n          strokeWidth="4"\n          fill="yellow"\n        />\n      </svg>\n    );\n')),(0,a.yg)("h3",{id:"animation-libraries"},"Animation Libraries"),(0,a.yg)("p",null,"For more complex or interactive animations, you might want to use a library like ","[",(0,a.yg)("inlineCode",{parentName:"p"},"react-spring"),"]"," (",(0,a.yg)("a",{parentName:"p",href:"https://www.react-spring.dev/docs/getting-started"},"https://www.react-spring.dev/docs/getting-started"),"). React Spring is a library for building interactive, data-driven, and animated UI components. It can animate HTML, SVG, Native Elements, Three.js, and more."),(0,a.yg)("p",null,"To use ",(0,a.yg)("inlineCode",{parentName:"p"},"react-spring"),", you need to install it:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npm install react-spring\n")),(0,a.yg)("p",null,"Example with ",(0,a.yg)("inlineCode",{parentName:"p"},"react-spring"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useSpring, animated } from "react-spring";\n\nconst AnimatedSVG = () => {\n  const props = useSpring({\n    from: { opacity: 0 },\n    to: { opacity: 1 },\n    config: { duration: 1000 },\n  });\n\n  return (\n    <animated.svg style={props} width="100" height="100">\n      <circle\n        cx="50"\n        cy="50"\n        r="40"\n        stroke="green"\n        strokeWidth="4"\n        fill="yellow"\n      />\n    </animated.svg>\n  );\n};\n')),(0,a.yg)("h3",{id:"interactivity"},"Interactivity"),(0,a.yg)("p",null,"You can combine ",(0,a.yg)("inlineCode",{parentName:"p"},"react-spring")," with React's event handlers to create interactive animations. For example, you might want an SVG to animate when a user hovers over it or clicks on it."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useSpring, animated } from "react-spring";\n\nconst InteractiveSVG = () => {\n  const [animatedProps, set] = useSpring(() => ({\n    to: { opacity: 1, transform: "scale(1)" },\n    from: { opacity: 0.5, transform: "scale(0.5)" },\n  }));\n\n  return (\n    <animated.svg\n      onMouseEnter={() => set({ opacity: 1, transformText: "scale(1.2)" })}\n      onMouseLeave={() => set({ opacity: 1, transform: "scale(1)" })}\n      style={animatedProps}\n      width="100"\n      height="100"\n    >\n      <circle\n        cx="50"\n        cy="50"\n        r="40"\n        stroke="green"\n        strokeWidth="4"\n        fill="yellow"\n      />\n    </animated.svg>\n  );\n};\n\nexport default InteractiveSVG;\n')))}y.isMDXComponent=!0}}]);