"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97214],{99546:(e,t,n)=>{n.d(t,{O:()=>m});var r=n(20053),o=n(96540),a=n(59047),i=n(7363),s=n(33257);const d=({horizontalSize:e,onMouseDown:t})=>o.createElement("div",{className:(0,r.A)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:t,style:{left:`calc(${e}% - 5px)`}});function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m=e=>"nextjs"===(null==e?void 0:e.template)?o.createElement(g,e):o.createElement(h,e),h=e=>{var t,n,l,m,h,g,{startRoute:f,showNavigator:y,showLineNumbers:b,showOpenInCodeSandbox:v,initialPercentage:w=50,dependencies:x,showReadOnly:P,options:O={showTabs:!0,initMode:"lazy",classes:{"sp-bridge-frame":"!hidden","sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,r.A)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-file-explorer":"border-r !border-r-gray-300 dark:!border-r-gray-700","sp-console":(0,r.A)("not-prose","!border-t-0 !border !border-solid !border-t-none","!border-gray-300 dark:!border-gray-700","!rounded-bl-lg !rounded-br-lg","!bg-refine-react-light-code","dark:!bg-refine-react-dark-code"),"sp-console-header":(0,r.A)("!bg-gray-0 dark:!bg-gray-800","border-b border-solid !border-b-gray-300 dark:!border-b-gray-700","!h-[32px] !min-h-[32px]"),"sp-console-header-actions":(0,r.A)("h-full","!gap-0"),"sp-console-header-button":(0,r.A)("!bg-transparent","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link","h-full","!text-gray-800 dark:!text-gray-100","!rounded-none","-ml-px"),"sp-console-list":(0,r.A)("!bg-refine-react-light-code","dark:!bg-refine-react-dark-code","[&>code]:!bg-transparent"),"sp-tab-button":(0,r.A)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:R="react-ts",customSetup:k,files:I,previewOnly:E,layout:S,height:L=420,wrapperClassName:T,className:C,showFiles:N=!1,showConsole:D=!1,hidePreview:j=!1}=e,A=p(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[F,M]=o.useState(!1);o.useEffect((()=>{M(!0)}),[]);const{colorMode:U}=(0,s.G)();var W,z;null!=O||(O={}),null!==(W=(h=O).resizablePanels)&&void 0!==W||(h.resizablePanels=!0),null!==(z=(g=O).editorWidthPercentage)&&void 0!==z||(g.editorWidthPercentage=null!=w?w:50);const $={showTabs:O.showTabs,showLineNumbers:O.showLineNumbers,showInlineErrors:O.showInlineErrors,wrapContent:O.wrapContent,closableTabs:O.closableTabs,initMode:O.initMode,extensions:null===(t=O.codeEditor)||void 0===t?void 0:t.extensions,extensionsKeymap:null===(n=O.codeEditor)||void 0===n?void 0:n.extensionsKeymap,readOnly:O.readOnly,showReadOnly:null!=P?P:O.showReadOnly,additionalLanguages:null===(l=O.codeEditor)||void 0===l?void 0:l.additionalLanguages},q={activeFile:O.activeFile,visibleFiles:O.visibleFiles,recompileMode:O.recompileMode,recompileDelay:O.recompileDelay,autorun:O.autorun,autoReload:O.autoReload,bundlerURL:O.bundlerURL,startRoute:O.startRoute,skipEval:O.skipEval,fileResolver:O.fileResolver,initMode:O.initMode,initModeObserverOptions:O.initModeObserverOptions,externalResources:O.externalResources,logLevel:O.logLevel,classes:O.classes},[H,_]=o.useState(!1),{onHandleMouseDown:G,horizontalSize:B}=(({initialSize:e=50})=>{const[t,n]=o.useState(e),r=o.useRef(null),a=e=>{if(!r.current)return;const t=r.current.parentElement;if(!t)return;const{left:o,width:a}=t.getBoundingClientRect(),i=(e.clientX-o)/a*100,s=Math.min(Math.max(i,25),75);n(s),t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},i=()=>{var e;const t=null===(e=r.current)||void 0===e?void 0:e.parentElement;t&&(t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),r.current=null)};return o.useEffect((()=>(document.body.addEventListener("mousemove",a),document.body.addEventListener("mouseup",i),()=>{document.body.removeEventListener("mousemove",a),document.body.removeEventListener("mouseup",i)})),[]),{horizontalSize:t,onHandleMouseDown:o.useCallback((e=>{r.current=e.target}),[])}})({initialSize:O.editorWidthPercentage}),X=!E&&!(null==S?void 0:S.includes("col"));var Y,V,K,Z,J;return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,r.A)("pb-6",T)},o.createElement("div",{className:(0,r.A)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",C)},o.createElement(i.l5,c({key:`${R}-${U}-${F}`,customSetup:c({dependencies:x},k),files:I,options:u(c({},q),{classes:u(c({},q.classes),{"sp-layout":(0,r.A)(null===(m=q.classes)||void 0===m?void 0:m["sp-layout"],D&&"!rounded-bl-none !rounded-br-none")})}),template:R,theme:"light"===U?u(c({},a.Zw),{colors:u(c({},a.Zw.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):u(c({},a.hc),{colors:u(c({},a.hc.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,r.A)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},A),o.createElement(i.am,{className:(0,r.A)("col"===S&&"!flex-col","col-reverse"===S&&"!flex-col-reverse")},N&&o.createElement(i.Lm,{autoHiddenFiles:!0,style:{height:null!==(Y=O.editorHeight)&&void 0!==Y?Y:L}}),!E&&o.createElement(i.cW,u(c({},$),{showLineNumbers:b,closableTabs:N,initMode:"lazy",style:u(c({height:null!==(V=O.editorHeight)&&void 0!==V?V:L},(null==S?void 0:S.includes("col"))?{flex:"initial"}:{flexGrow:B,flexShrink:B,flexBasis:0}),{overflow:"hidden"})})),X?o.createElement(d,{onMouseDown:G,horizontalSize:B}):null,j?null:o.createElement(o.Fragment,null,o.createElement(i.G5,{showOpenInCodeSandbox:v,startRoute:f,showNavigator:null!=y?y:O.showNavigator,showRefreshButton:O.showRefreshButton,style:u(c({display:j?"none":"flex"},(null==S?void 0:S.includes("col"))?{flex:"initial",width:"100%"}:{flexGrow:100-B,flexShrink:100-B,flexBasis:0,width:E?"100%":100-B+"%"}),{gap:0,height:null!==(K=O.editorHeight)&&void 0!==K?K:L})},o.createElement("div",{className:"sp-custom-loading"},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,r.A)("w-12","h-12","rounded-full")}))))),D?o.createElement(i.X2,{style:u(c({height:200},(null==S?void 0:S.includes("col"))?{flex:"initial"}:{flexGrow:B,flexShrink:B,flexBasis:0}),{overflow:"hidden"})}):null)),o.createElement("div",{className:(0,r.A)(""),style:{height:Number(null!==(Z=O.editorHeight)&&void 0!==Z?Z:L)+2}}),o.createElement("div",{className:(0,r.A)((null==S?void 0:S.includes("col"))?"block":"block md:hidden"),style:{height:Number(null!==(J=O.editorHeight)&&void 0!==J?J:L)+2}}),o.createElement("div",{className:(0,r.A)(D?"block":"hidden","h-[200px]")})),o.createElement("section",{className:"hidden max-w-0 max-h-0"},o.createElement("p",null,`Dependencies: ${Object.keys(null!=x?x:{}).map((e=>`${e}@${x[e]}`))}`),o.createElement("h3",null,"Code Files"),Object.keys(null!=I?I:{}).map((e=>o.createElement("div",{key:e},o.createElement("div",null,`File: ${e}`),o.createElement("div",null,`Content: ${"code"in I[e]?I[e].code:I[e]}`))))))},g=e=>{const t={hidePreview:!0,showConsole:!1};return o.createElement(h,u(c({},t,e),{template:"react-ts"}))}},62747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>I,default:()=>M,frontMatter:()=>k,metadata:()=>E,toc:()=>L});var r=n(96540),o=n(15680),a=n(99546);function i(){return r.createElement(a.O,{hidePreview:!0,showFiles:!1,showOpenInCodeSandbox:!1,showReadOnly:!1,template:"react-ts",dependencies:{"@refinedev/core":"latest"},files:{"App.tsx":{code:s,readOnly:!0}}})}const s='\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";\n\nimport { ProductsList, ProductsCreate, ProductsShow, ProductsEdit } from "./products";\n\nexport const App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        dataProvider={dataProvider("<API_URL>")}\n        routerProvider={routerProvider}\n        resources={[\n          {\n            name: "products",\n            // We\'re prefixing the routes with `/:tenantId` to make them tenant-aware.\n            list: "/:tenantId/products",\n            show: "/:tenantId/products/:id",\n            edit: "/:tenantId/products/:id/edit",\n            create: "/:tenantId/products/create",\n          },\n        ]}\n      >\n        <Routes>\n          {/* We\'re defining the `tenantId` as a route parameter. */}\n          <Route path="/:tenantId" element={<Outlet />}>\n            <Route path="products" element={<ProductsList />} />\n            <Route path="products/create" element={<ProductsCreate />} />\n            <Route path="products/:id" element={<ProductsShow />} />\n            <Route path="products/:id/edit" element={<ProductsEdit />} />\n          </Route>\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n'.trim();function d(){return r.createElement(a.O,{hidePreview:!0,showFiles:!0,showOpenInCodeSandbox:!1,showReadOnly:!1,template:"react-ts",dependencies:{"@refinedev/core":"latest"},files:{"/pages/_app.tsx":{code:l,active:!0,readOnly:!0},"/pages/[tenantId]/products/index.tsx":{code:c,readOnly:!0},"/pages/[tenantId]/products/create.tsx":{code:u,readOnly:!0},"/pages/[tenantId]/products/[id]/index.tsx":{code:p,readOnly:!0},"/pages/[tenantId]/products/[id]/edit.tsx":{code:m,readOnly:!0}}})}const l='\nimport React from "react";\n\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/nextjs-router/pages";\nimport dataProvider from "@refinedev/simple-rest";\nimport type { AppProps } from "next/app";\n\nfunction App({ Component, pageProps }: AppProps) {\n    return (\n      <Refine\n          dataProvider={dataProvider("<API_URL>")}\n          routerProvider={routerProvider}\n          resources={[\n            {\n              name: "products",\n              // We\'re prefixing the routes with `/:tenantId` to make them tenant-aware.\n              list: "/:tenantId/products",\n              show: "/:tenantId/products/:id",\n              edit: "/:tenantId/products/:id/edit",\n              create: "/:tenantId/products/create",\n            },\n          ]}\n      >\n          <Component {...pageProps} />\n      </Refine>\n    );\n}\n\nexport default App;\n'.trim(),c='\nimport React from "react";\n\nimport { useList } from "@refinedev/core";\n\nexport default function ProductsList() {\n  const { data, isLoading } = useList();\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Products</h1>\n      <ul>\n        {data?.data.map((record) => (\n          <li key={record.id}>{record.name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n'.trim(),u='\nimport React from "react";\n\nimport { useCreate } from "@refinedev/core";\n\nexport default function ProductsCreate() {\n  const { onFinish } = useForm();\n\n  return (\n    <div>\n      <h1>Create Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" />\n        <button type="submit">Create</button>\n      </form>\n    </div>\n  );\n}\n'.trim(),p='\nimport React from "react";\n\nimport { useShow } from "@refinedev/core";\n\nexport default function ProductsShow() {\n  const { data, isLoading } = useShow();\n  const record = data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>{record?.name}</h1>\n      <p>{record?.description}</p>\n    </div>\n  );\n}\n'.trim(),m='\nimport React from "react";\n\nimport { useForm } from "@refinedev/core";\n\nexport default function ProductsEdit() {\n  const { onFinish, queryResult, formLoading } = useForm();\n  const record = queryResult?.data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Edit Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" defaultValue={record?.name} />\n        <button type="submit">Save</button>\n      </form>\n    </div>\n  );\n}\n'.trim();function h(){return r.createElement(a.O,{hidePreview:!0,showFiles:!0,showOpenInCodeSandbox:!1,showReadOnly:!1,template:"react-ts",dependencies:{"@refinedev/core":"latest"},files:{"/app/root.tsx":{code:g,active:!0,readOnly:!0},"/app/routes/$tenantId.products._index.tsx":{code:f,readOnly:!0},"/app/routes/$tenantId.products.create.tsx":{code:y,readOnly:!0},"/app/routes/$tenantId.products.$id._index.tsx":{code:b,readOnly:!0},"/app/routes/$tenantId.products.$id.edit.tsx":{code:v,readOnly:!0}}})}const g='\nimport React from "react";\n\nimport {\n  Links,\n  LiveReload,\n  Meta,\n  Outlet,\n  Scripts,\n  ScrollRestoration,\n} from "@remix-run/react";\n\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/remix-router";\nimport dataProvider from "@refinedev/simple-rest";\n\nexport default function App() {\n  return (\n    <html lang="en">\n      <head>\n        <Meta />\n        <Links />\n      </head>\n      <body>\n        <Refine\n        dataProvider={dataProvider("<API_URL>")}\n          routerProvider={routerProvider}\n          resources={[\n            {\n              name: "products",\n              // We\'re prefixing the routes with `/:tenantId` to make them tenant-aware.\n              list: "/:tenantId/products",\n              show: "/:tenantId/products/:id",\n              edit: "/:tenantId/products/:id/edit",\n              create: "/:tenantId/products/create",\n            },\n          ]}\n        >\n          <Outlet />\n        </Refine>\n        <ScrollRestoration />\n        <Scripts />\n        <LiveReload />\n      </body>\n    </html>\n  );\n}\n'.trim(),f='\nimport React from "react";\n\nimport { useList } from "@refinedev/core";\n\nexport default function ProductsList() {\n  const { data, isLoading } = useList();\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Products</h1>\n      <ul>\n        {data?.data.map((record) => (\n          <li key={record.id}>{record.name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n'.trim(),y='\nimport React from "react";\n\nimport { useCreate } from "@refinedev/core";\n\nexport default function ProductsCreate() {\n  const { onFinish } = useForm();\n\n  return (\n    <div>\n      <h1>Create Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" />\n        <button type="submit">Create</button>\n      </form>\n    </div>\n  );\n}\n'.trim(),b='\nimport React from "react";\n\nimport { useShow } from "@refinedev/core";\n\nexport default function ProductsShow() {\n  const { data, isLoading } = useShow();\n  const record = data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>{record?.name}</h1>\n      <p>{record?.description}</p>\n    </div>\n  );\n}\n'.trim(),v='\nimport React from "react";\n\nimport { useForm } from "@refinedev/core";\n\nexport default function ProductsEdit() {\n  const { onFinish, queryResult, formLoading } = useForm();\n  const record = queryResult?.data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Edit Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" defaultValue={record?.name} />\n        <button type="submit">Save</button>\n      </form>\n    </div>\n  );\n}\n'.trim();function w(){return r.createElement(a.O,{hidePreview:!0,showFiles:!1,showOpenInCodeSandbox:!1,showReadOnly:!1,template:"react-ts",dependencies:{"@refinedev/core":"latest"},files:{"/components/tenant-selector.tsx":{code:x,active:!0,readOnly:!0},"App.tsx":{code:"",hidden:!0}}})}const x='\nimport React from "react";\nimport { useSelect, useParsed, useGo, useGetToPath } from "@refinedev/core";\n\nexport const TenantSelector = () => {\n  const {\n    options,\n    queryResult: { isLoading },\n  } = useSelect({\n    // We\'re using the `tenants` resource to get the list of tenants\n    // Your API may have a different way to access the list of tenants\n    // or you may have a specific set of tenants that you want to show\n    resource: "tenants",\n    optionLabel: "name",\n    optionValue: "id",\n  });\n\n  // We\'ll use the useGo and useGetToPath hooks to navigate to the selected tenant\n  const go = useGo();\n  const getToPath = useGetToPath();\n  // We\'re using the useParsed hook to get the current route information and params (tenantId)\n  const {\n    resource,\n    action,\n    id,\n    params: { tenantId },\n  } = useParsed();\n\n  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {\n    const selectedTenantId = event.target.value;\n\n    go({\n      to: getToPath({\n        resource,\n        action: action ?? "list",\n        id,\n        meta: {\n          // We\'re passing the selected tenantId to the meta object\n          // Refine will use `meta` to decorate the additional parameters when constructing the route to navigate to\n          tenantId: selectedTenantId,\n        },\n      }),\n      type: "replace",\n    });\n  };\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <select onChange={onChange}>\n      {options.map(({ label, value }) => (\n        <option key={value} value={value} selected={value === tenantId}>\n          {label}\n        </option>\n      ))}\n    </select>\n  );\n};\n'.trim();function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function R(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const k={title:"Multitenancy"},I=void 0,E={unversionedId:"guides-concepts/multi-tenancy/index",id:"guides-concepts/multi-tenancy/index",title:"Multitenancy",description:"Refine's architecture allows you to customize your app's data providers, access control and routing to support multi tenant features easily. This guide will provide you with a high level overview of the concepts and how to implement them. To see multi tenant app examples, check out the Examples section.",source:"@site/docs/guides-concepts/multi-tenancy/index.md",sourceDirName:"guides-concepts/multi-tenancy",slug:"/guides-concepts/multi-tenancy/",permalink:"/docs/guides-concepts/multi-tenancy/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/multi-tenancy/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1715167205,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{title:"Multitenancy"},sidebar:"mainSidebar",previous:{title:"Audit Logs",permalink:"/docs/guides-concepts/audit-logs/"},next:{title:"Import - Export",permalink:"/docs/guides-concepts/import-export/"}},S={},L=[{value:"What is Multitenancy?",id:"what-is-multitenancy",level:2},{value:"Implementing Multitenancy in Refine",id:"implementing-multitenancy-in-refine",level:2},{value:"Configuring Multi-tenant Routes",id:"configuring-multi-tenant-routes",level:3},{value:"Handling Multi-tenant Requests in Data Providers",id:"handling-multi-tenant-requests-in-data-providers",level:3},{value:"Adding a Tenant Selector to the UI",id:"adding-a-tenant-selector-to-the-ui",level:3},{value:"Examples",id:"examples",level:2},{value:"Strapi",id:"strapi",level:3},{value:"Appwrite",id:"appwrite",level:3}],T=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",t)},C=T("DocThumbsUpDownFeedbackWidget"),N=T("Tabs"),D=T("TabItem"),j=T("CodeSandboxExample"),A={toc:L},F="wrapper";function M(e){var{components:t}=e,n=R(e,["components"]);return(0,o.yg)(F,O(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){P(e,t,n[t])}))}return e}({},A,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Refine's architecture allows you to customize your app's data providers, access control and routing to support multi tenant features easily. This guide will provide you with a high level overview of the concepts and how to implement them. To see multi tenant app examples, check out the ",(0,o.yg)("a",{parentName:"p",href:"#examples"},"Examples")," section."),(0,o.yg)("h2",{id:"what-is-multitenancy"},"What is Multitenancy?"),(0,o.yg)(C,{id:"what-is-multitenancy",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Multitenancy refers to a kind of architecture where a single instance of software runs on a server and serves multiple customers. In a multi-tenant environment, separate customers tap into the same hardware and data storage, creating a dedicated instance for each customer. Each tenant\u2019s data is isolated and remains invisible to others, but is running on the same server.")),(0,o.yg)("h2",{id:"implementing-multitenancy-in-refine"},"Implementing Multitenancy in Refine"),(0,o.yg)(C,{id:"implementing-multitenancy-in-refine",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"While there are many ways to implement multi tenant features, we'll implement a route based approach in the following sections. While your m implementation may differ, the concepts will be similar and the approach will be tweakable to your needs.")),(0,o.yg)("h3",{id:"configuring-multi-tenant-routes"},"Configuring Multi-tenant Routes"),(0,o.yg)(C,{id:"configuring-multi-tenant-routes",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"We'll be using routes to determine which tenant is being accessed. To do this, we'll need to configure our routes to include the tenant information. For example, a ",(0,o.yg)("inlineCode",{parentName:"p"},"products")," resource will have the route definition for ",(0,o.yg)("inlineCode",{parentName:"p"},"list")," as ",(0,o.yg)("inlineCode",{parentName:"p"},"/:tenantId/products"),"."),(0,o.yg)("p",null,"In the examples below, we are only showing the route definitions. You may need additional code to implement styling and layout depending on your choice of UI library. Regardless of the UI library you choose, the routing implementation will be similar to the examples above."),(0,o.yg)(N,{wrapContent:!1,mdxType:"Tabs"},(0,o.yg)(D,{value:"React Router Dom",mdxType:"TabItem"},(0,o.yg)(i,{mdxType:"ReactRouterRouteDefinitions"})),(0,o.yg)(D,{value:"Next.js",mdxType:"TabItem"},(0,o.yg)(d,{mdxType:"NextjsRouteDefinitions"})),(0,o.yg)(D,{value:"Remix",mdxType:"TabItem"},(0,o.yg)(h,{mdxType:"RemixRouteDefinitions"})))),(0,o.yg)("h3",{id:"handling-multi-tenant-requests-in-data-providers"},"Handling Multi-tenant Requests in Data Providers"),(0,o.yg)(C,{id:"handling-multi-tenant-requests-in-data-providers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"We'll be using the ",(0,o.yg)("inlineCode",{parentName:"p"},"tenantId")," from the route to determine which tenant is being accessed. Refine will infer the ",(0,o.yg)("inlineCode",{parentName:"p"},"tenantId")," from the current route and pass it to the data provider in ",(0,o.yg)("inlineCode",{parentName:"p"},"meta"),". You can access the ",(0,o.yg)("inlineCode",{parentName:"p"},"tenantId")," from the ",(0,o.yg)("inlineCode",{parentName:"p"},"meta")," object in your data provider and use it in your API calls."),(0,o.yg)("p",null,"To customize the data providers, you can override each method in the data provider instance or use the ",(0,o.yg)("inlineCode",{parentName:"p"},"swizzle")," command to be fully able to customize the data provider for your needs."),(0,o.yg)("p",null,"An example implementation of a custom ",(0,o.yg)("inlineCode",{parentName:"p"},"getList")," method is shown below."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import dataProvider from "@refinedev/simple-rest";\n\nconst API_URL = "<API_URL>";\nconst baseDataProvider = dataProvider(API_URL);\n\nconst customDataProvider = {\n  ...baseDataProvider,\n  getList: async ({ resource, pagination, filters, sorters, meta }) => {\n    const { tenantId } = meta;\n\n    // We\'re prefixing the tenantId to the resource name\n    // Your API may have a different way of handling this\n    const response = await fetch(\n      `${API_URL}/${tenantId}/${resource}?${stringify({\n        /* ... */\n      })}`,\n    );\n\n    const data = await response.json();\n\n    const total = parseInt(response.headers.get("x-total-count") || "0");\n\n    return { data, total };\n  },\n};\n')),(0,o.yg)("admonition",{title:"Implementation Tips",type:"simple"},(0,o.yg)("p",{parentName:"admonition"},"Check out the ",(0,o.yg)("a",{parentName:"p",href:"#examples"},"Examples")," below to see a full implementation of a data provider for a multi tenant app."))),(0,o.yg)("h3",{id:"adding-a-tenant-selector-to-the-ui"},"Adding a Tenant Selector to the UI"),(0,o.yg)(C,{id:"adding-a-tenant-selector-to-the-ui",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Now we've defined our routes and data providers to use ",(0,o.yg)("inlineCode",{parentName:"p"},"tenantId")," to determine which tenant is being accessed. We'll need to add a tenant selector to the UI to allow users to switch between tenants."),(0,o.yg)("admonition",{title:"Implementation Tips",type:"simple"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The implementation of the component may differ depending on your choice of UI library. Regardless of the UI library you choose, the implementation will be similar to the example below.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"It's best to place the tenant selector in a layout component that wraps the routes. This way, the tenant selector will be available in all pages. If you're using Refine's layout components, it's recommended to place the tenant selector in the header or sider components.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Check out the ",(0,o.yg)("a",{parentName:"p",href:"#examples"},"Examples")," below to see an example implementation of a tenant selector.")))),(0,o.yg)(w,{mdxType:"Selector"})),(0,o.yg)("h2",{id:"examples"},"Examples"),(0,o.yg)(C,{id:"examples",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Here are two examples of multi tenant apps built with Refine. You can view the source code and run the apps in your local to understand how multi tenant features are implemented.")),(0,o.yg)("h3",{id:"strapi"},"Strapi"),(0,o.yg)(C,{id:"strapi",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(j,{hideSandbox:!0,path:"multi-tenancy-strapi",mdxType:"CodeSandboxExample"})),(0,o.yg)("h3",{id:"appwrite"},"Appwrite"),(0,o.yg)(C,{id:"appwrite",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(j,{hideSandbox:!0,path:"multi-tenancy-appwrite",mdxType:"CodeSandboxExample"})))}M.isMDXComponent=!0}}]);