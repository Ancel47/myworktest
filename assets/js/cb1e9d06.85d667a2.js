"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97971],{58860:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>d});var o=t(37953);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),m=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=m(e.components);return o.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(t),f=n,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return t?o.createElement(d,i(i({ref:r},c),{},{components:t})):o.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var m=2;m<a;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},55171:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>u});t(37953);var o=t(58860);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const s={id:"useDrawerForm",title:"useDrawerForm","example-tags":["form","mantine"]},l=void 0,m={unversionedId:"examples/form/mantine/useDrawerForm",id:"version-3.xx.xx/examples/form/mantine/useDrawerForm",title:"useDrawerForm",description:"useModalForm hook allows you to manage a form within a modal as well as a drawer. It provides some useful methods to handle the form modal or form drawer. You can view the live example or review the source code to see how it's used with Material UI.",source:"@site/versioned_docs/version-3.xx.xx/examples/form/mantine/useDrawerForm.md",sourceDirName:"examples/form/mantine",slug:"/examples/form/mantine/useDrawerForm",permalink:"/docs/3.xx.xx/examples/form/mantine/useDrawerForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/form/mantine/useDrawerForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716553540,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{id:"useDrawerForm",title:"useDrawerForm","example-tags":["form","mantine"]},sidebar:"someSidebar",previous:{title:"Save and Continue",permalink:"/docs/3.xx.xx/examples/form/headless/save-and-continue"},next:{title:"useForm",permalink:"/docs/3.xx.xx/examples/form/mantine/useForm"}},c={},u=[],p=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var f;const d={toc:u},y="wrapper";function b(e){var{components:r}=e,t=i(e,["components"]);return(0,o.yg)(y,a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"useModalForm")," hook allows you to manage a form within a modal as well as a drawer. It provides some useful methods to handle the form modal or form drawer. You can view the live example or review the source code to see how it's used with Material UI."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useModalForm"},"Refer to the useModalForm hook documentation for more information. \u2192")),(0,o.yg)(p,{path:"form-mantine-use-drawer-form",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);