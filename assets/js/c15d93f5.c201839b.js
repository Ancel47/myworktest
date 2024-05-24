"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50167],{58860:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),c=r,g=p["".concat(u,".").concat(c)]||p[c]||m[c]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},80934:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});a(37953);var n=a(58860);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"useCustomMutation",siderbar_label:"useCustomMutation",source:"packages/core/src/hooks/data/useCustomMutation.ts"},u=void 0,l={unversionedId:"api-reference/core/hooks/data/useCustomMutation/index",id:"version-3.xx.xx/api-reference/core/hooks/data/useCustomMutation/index",title:"useCustomMutation",description:"useCustomMutation is an extended version of TanStack Query's useMutation. It supports all the features of useMutation and adds some extra features.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useCustomMutation/index.md",sourceDirName:"api-reference/core/hooks/data/useCustomMutation",slug:"/api-reference/core/hooks/data/useCustomMutation/",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustomMutation/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useCustomMutation/index.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716553540,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{title:"useCustomMutation",siderbar_label:"useCustomMutation",source:"packages/core/src/hooks/data/useCustomMutation.ts"},sidebar:"someSidebar",previous:{title:"useCustom",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustom/"},next:{title:"useDataProvider",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useDataProvider"}},d={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>mutationOptions</code>",id:"mutationoptions",level:3},{value:"Mutation Parameters",id:"mutation-parameters",level:2},{value:"<code>url</code> <PropTag required />",id:"url-",level:3},{value:"<code>method</code> <PropTag required />",id:"method-",level:3},{value:"<code>values</code> <PropTag required />",id:"values-",level:3},{value:"<code>config.headers</code>",id:"configheaders",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"<code>metaData</code>",id:"metadata",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"Return Values",id:"return-values",level:2},{value:"API",id:"api",level:2},{value:"Mutation Parameters",id:"mutation-parameters-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},c=m("DocThumbsUpDownFeedbackWidget"),g=m("PropTag"),y={toc:p},f="wrapper";function h(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(f,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},y,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation")," is an extended version of TanStack Query's ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.yg)("inlineCode",{parentName:"a"},"useMutation")),". It supports all the features of ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," and adds some extra features."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"It uses the ",(0,n.yg)("inlineCode",{parentName:"li"},"custom")," method as the ",(0,n.yg)("strong",{parentName:"li"},"mutation function")," from the ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,n.yg)("inlineCode",{parentName:"li"},"<Refine>"),".")),(0,n.yg)("p",null,"It is useful when you want to send a custom mutation request using the TanStack Query advantages."),(0,n.yg)("admonition",{title:"attention",type:"danger"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation")," should ",(0,n.yg)("strong",{parentName:"p"},"not")," be used when creating, updating, or deleting a resource. To do these; ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"},"useCreate"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdate/"},"useUpdate")," or ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},"useDelete")," hooks should be used instead."),(0,n.yg)("p",{parentName:"admonition"},"This is because ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation"),", unlike other data hooks, does not ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/query-invalidation"},"invalidate queries")," and therefore will not update the application state either."),(0,n.yg)("p",{parentName:"admonition"},"If you need to custom query request, use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustomMutation/"},"useCustom")," hook.")),(0,n.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.yg)(c,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation")," hook returns many useful properties and methods. One of them is the ",(0,n.yg)("inlineCode",{parentName:"p"},"mutate")," method which expects ",(0,n.yg)("inlineCode",{parentName:"p"},"values"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"method"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"url")," as parameters. These parameters will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as parameters."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useCustomMutation, useApiUrl } from "@pankod/refine-core";\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\nconst apiUrl = useApiUrl();\n\nconst { mutate } = useCustomMutation<ICategory>();\n\nmutate({\n  url: `${API_URL}/categories`,\n  method: "post",\n  values: {\n    title: "New Category",\n  },\n});\n'))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"mutationoptions"},(0,n.yg)("inlineCode",{parentName:"h3"},"mutationOptions")),(0,n.yg)(c,{id:"mutationoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"mutationOptions")," is used to pass options to the ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," hook. It is useful when you want to pass additional options to the ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," hook."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"useCustomMutation({\n  mutationOptions: {\n    retry: 3,\n  },\n});\n")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"mutationOptions")," does not support ",(0,n.yg)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"onError")," props because they override the default ",(0,n.yg)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"onError")," functions. If you want to use these props, you can pass them to mutate functions like this:"),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate(\n  {\n    url: `${API_URL}/categories`,\n    method: "post",\n    values: {\n      title: "New Category",\n    },\n  },\n  {\n    onError: (error, variables, context) => {\n      // An error occurred!\n    },\n    onSuccess: (data, variables, context) => {\n      // Let\'s celebrate!\n    },\n  },\n);\n')))),(0,n.yg)("h2",{id:"mutation-parameters"},"Mutation Parameters"),(0,n.yg)("h3",{id:"url-"},(0,n.yg)("inlineCode",{parentName:"h3"},"url")," ",(0,n.yg)(g,{required:!0,mdxType:"PropTag"})),(0,n.yg)(c,{id:"url-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the endpoint of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  url: "www.example.com/api/update-products",\n});\n'))),(0,n.yg)("h3",{id:"method-"},(0,n.yg)("inlineCode",{parentName:"h3"},"method")," ",(0,n.yg)(g,{required:!0,mdxType:"PropTag"})),(0,n.yg)(c,{id:"method-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the HTTP method of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  method: "post",\n});\n'))),(0,n.yg)("h3",{id:"values-"},(0,n.yg)("inlineCode",{parentName:"h3"},"values")," ",(0,n.yg)(g,{required:!0,mdxType:"PropTag"})),(0,n.yg)(c,{id:"values-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. The parameter is usually used as the data to be sent with the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  values: {\n    name: "New Category",\n    description: "New Category Description",\n  },\n});\n'))),(0,n.yg)("h3",{id:"configheaders"},(0,n.yg)("inlineCode",{parentName:"h3"},"config.headers")),(0,n.yg)(c,{id:"configheaders",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the headers of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  config: {\n    headers: {\n      "x-custom-header": "foo-bar",\n    },\n  },\n});\n'))),(0,n.yg)("h3",{id:"successnotification"},(0,n.yg)("inlineCode",{parentName:"h3"},"successNotification")),(0,n.yg)(c,{id:"successnotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.yg)("p",null,"After data is fetched successfully, ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation")," can call ",(0,n.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.yg)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  successNotification: (data, values, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n'))),(0,n.yg)("h3",{id:"errornotification"},(0,n.yg)("inlineCode",{parentName:"h3"},"errorNotification")),(0,n.yg)(c,{id:"errornotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.yg)("p",null,"After data fetching is failed, ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation")," will call ",(0,n.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.yg)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  errorNotification: (data, values, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n'))),(0,n.yg)("h3",{id:"metadata"},(0,n.yg)("inlineCode",{parentName:"h3"},"metaData")),(0,n.yg)(c,{id:"metadata",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/general-concepts/#metadata"},(0,n.yg)("inlineCode",{parentName:"a"},"metaData"))," is used following two purposes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To pass additional information to data provider methods."),(0,n.yg)("li",{parentName:"ul"},"Generate GraphQL queries using plain JavaScript Objects (JSON). Please refer ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/advanced-tutorials/data-provider/graphql/#edit-page"},"GraphQL")," for more information.")),(0,n.yg)("p",null,"In the following example, ",(0,n.yg)("inlineCode",{parentName:"p"},"metaData")," is passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  metaData: {\n    foo: "bar",\n  },\n});\n\nconst myDataProvider = {\n  //...\n  custom: async ({\n    url,\n    method,\n    sort,\n    filters,\n    payload,\n    query,\n    headers,\n    metaData,\n  }) => {\n    const foo = metaData?.foo;\n\n    console.log(foo); // "bar"\n\n    //...\n  },\n  //...\n};\n'))),(0,n.yg)("h3",{id:"dataprovidername"},(0,n.yg)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,n.yg)(c,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If there is more than one ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  dataProviderName: "second-data-provider",\n});\n'))),(0,n.yg)("h2",{id:"return-values"},"Return Values"),(0,n.yg)(c,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Returns an object with TanStack Query's ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," return values."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192"))),(0,n.yg)("h2",{id:"api"},"API"),(0,n.yg)("h3",{id:"mutation-parameters-1"},"Mutation Parameters"),(0,n.yg)(c,{id:"mutation-parameters-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"url ",(0,n.yg)("div",{className:"required"},"Required")),(0,n.yg)("td",{parentName:"tr",align:null},"URL"),(0,n.yg)("td",{parentName:"tr",align:null},"string")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"method ",(0,n.yg)("div",{className:"required"},"Required")),(0,n.yg)("td",{parentName:"tr",align:null},"Method"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"post"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"put"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"patch"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"delete"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"values ",(0,n.yg)("div",{className:" required"},"Required")),(0,n.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"TVariables"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"config"),(0,n.yg)("td",{parentName:"tr",align:null},"The config of your request. You can send ",(0,n.yg)("inlineCode",{parentName:"td"},"headers")," using this field."),(0,n.yg)("td",{parentName:"tr",align:null},"{ headers?: {}; }")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"successNotification"),(0,n.yg)("td",{parentName:"tr",align:null},"Successful mutation notification"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#successerrornotification"},(0,n.yg)("inlineCode",{parentName:"a"},"SuccessErrorNotification")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"errorNotification"),(0,n.yg)("td",{parentName:"tr",align:null},"Unsuccessful mutation notification"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#successerrornotification"},(0,n.yg)("inlineCode",{parentName:"a"},"SuccessErrorNotification")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"metaData"),(0,n.yg)("td",{parentName:"tr",align:null},"Metadata query for ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProvider")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#metadataquery"},(0,n.yg)("inlineCode",{parentName:"a"},"MetaDataQuery")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"dataProviderName"),(0,n.yg)("td",{parentName:"tr",align:null},"If there is more than one ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")))))),(0,n.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.yg)(c,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Desription"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TData"),(0,n.yg)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TError"),(0,n.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TQuery"),(0,n.yg)("td",{parentName:"tr",align:null},"Values for query params."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"TQuery")),(0,n.yg)("td",{parentName:"tr",align:null},"unknown")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TPayload"),(0,n.yg)("td",{parentName:"tr",align:null},"Values for params."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"TPayload")),(0,n.yg)("td",{parentName:"tr",align:null},"unknown"))))),(0,n.yg)("h3",{id:"return-value"},"Return value"),(0,n.yg)(c,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useMutation"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.yg)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"},"TError,"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables; },"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"}," unknown>"))))))))}h.isMDXComponent=!0}}]);