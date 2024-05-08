"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34255],{8591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>N,frontMatter:()=>p,metadata:()=>u,toc:()=>c});n(96540);var a=n(15680),r=n(5063),o=n(15947);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"strapi-v4",title:"Strapi-v4"},d=void 0,u={unversionedId:"advanced-tutorials/data-provider/strapi-v4",id:"version-3.xx.xx/advanced-tutorials/data-provider/strapi-v4",title:"Strapi-v4",description:"refine supports the features that come with Strapi-v4.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/data-provider/strapi-v4.md",sourceDirName:"advanced-tutorials/data-provider",slug:"/advanced-tutorials/data-provider/strapi-v4",permalink:"/docs/3.xx.xx/advanced-tutorials/data-provider/strapi-v4",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/data-provider/strapi-v4.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1715167205,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{id:"strapi-v4",title:"Strapi-v4"},sidebar:"someSidebar",previous:{title:"Handling Filters",permalink:"/docs/3.xx.xx/advanced-tutorials/data-provider/handling-filters"},next:{title:"Supabase",permalink:"/docs/3.xx.xx/advanced-tutorials/data-provider/supabase"}},g={},c=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"API Parameters",id:"api-parameters",level:2},{value:"Create Collections",id:"create-collections",level:3},{value:"Fields Selection",id:"fields-selection",level:3},{value:"Relations Population",id:"relations-population",level:3},{value:"Relations Population for <code>/me</code> request",id:"relations-population-for-me-request",level:5},{value:"Publication State",id:"publication-state",level:3},{value:"Locale",id:"locale",level:3},{value:"<code>metaData</code> Usages",id:"metadata-usages",level:2},{value:"Example",id:"example",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},y=m("DocThumbsUpDownFeedbackWidget"),h=m("InstallPackagesCommand"),f=m("CodeSandboxExample"),b={toc:c},x="wrapper";function N(e){var{components:t}=e,n=s(e,["components"]);return(0,a.yg)(x,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"refine")," supports the features that come with ",(0,a.yg)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html"},"Strapi-v4"),"."),(0,a.yg)("p",null,"A few of the Strapi-v4 API features are as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fields Selection"),(0,a.yg)("li",{parentName:"ul"},"Relations Population"),(0,a.yg)("li",{parentName:"ul"},"Publication State"),(0,a.yg)("li",{parentName:"ul"},"Locale")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"metaData")," allows us to use the above features in hooks. Thus, we can fetch the data according to the parameters we want."),(0,a.yg)("p",null,"Hooks and components that support ",(0,a.yg)("inlineCode",{parentName:"p"},"metaData"),":"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Supported data hooks"),(0,a.yg)("th",{parentName:"tr",align:null},"Supported other hooks"),(0,a.yg)("th",{parentName:"tr",align:null},"Supported components"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdate/"},(0,a.yg)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useForm")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/delete-button"},(0,a.yg)("inlineCode",{parentName:"a"},"DeleteButton")," ","\u2192"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdateMany/"},(0,a.yg)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useModalForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useModalForm")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/refresh-button"},(0,a.yg)("inlineCode",{parentName:"a"},"RefreshButton")," ","\u2192"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},(0,a.yg)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useDrawerForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useDrawerForm")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDeleteMany/"},(0,a.yg)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useStepsForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useStepsForm")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"},(0,a.yg)("inlineCode",{parentName:"a"},"useCreate")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useTable"},(0,a.yg)("inlineCode",{parentName:"a"},"useTable")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreateMany/"},(0,a.yg)("inlineCode",{parentName:"a"},"useCreateMany")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useEditableTable"},(0,a.yg)("inlineCode",{parentName:"a"},"useEditableTable")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useList/"},(0,a.yg)("inlineCode",{parentName:"a"},"useList")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/list/useSimpleList"},(0,a.yg)("inlineCode",{parentName:"a"},"useSimpleList")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useOne/"},(0,a.yg)("inlineCode",{parentName:"a"},"useOne")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/show/useShow"},(0,a.yg)("inlineCode",{parentName:"a"},"useShow")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useMany/"},(0,a.yg)("inlineCode",{parentName:"a"},"useMany")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useExport"},(0,a.yg)("inlineCode",{parentName:"a"},"useExport")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustom/"},(0,a.yg)("inlineCode",{parentName:"a"},"useCustom")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/field/useCheckboxGroup"},(0,a.yg)("inlineCode",{parentName:"a"},"useCheckboxGroup")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useSelect/"},(0,a.yg)("inlineCode",{parentName:"a"},"useSelect")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/field/useRadioGroup"},(0,a.yg)("inlineCode",{parentName:"a"},"useRadioGroup")," ","\u2192")),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"There is no need to use ",(0,a.yg)("inlineCode",{parentName:"p"},"metaData")," for sorting, pagination, and, filters. Sorting, pagination, and, filters will be handled automatically by the strapi-v4 dataProvider.")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Normally, strapi-v4 backend returns data in the following format:"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "attributes": {\n        "title": "My title",\n        "content": "Long content...",\n}\n')),(0,a.yg)("p",{parentName:"admonition"},"However, we can use ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/27a55320ada61a0624ed2f5b29331946334f7727/packages/strapi-v4/src/dataProvider.ts#L80"},"normalizeData")," to customize the data returned by the backend. So, our data will look like:"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "title": "My title",\n  "content": "Long content..."\n}\n'))),(0,a.yg)("h2",{id:"setup"},"Setup"),(0,a.yg)(y,{id:"setup",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(h,{args:"@pankod/refine-strapi-v4",mdxType:"InstallPackagesCommand"}),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package."))),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(y,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, AuthProvider } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n//highlight-next-line\nimport { DataProvider } from "@pankod/refine-strapi-v4";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      authProvider={authProvider}\n      //highlight-next-line\n      dataProvider={DataProvider("API_URL")}\n      routerProvider={routerProvider}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n    />\n  );\n};\n'))),(0,a.yg)("h2",{id:"api-parameters"},"API Parameters"),(0,a.yg)(y,{id:"api-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Let's examine how API parameters that come with Strapi-v4 are used with ",(0,a.yg)("inlineCode",{parentName:"p"},"metaData"),". Then, let's see how it is used in the application.")),(0,a.yg)("h3",{id:"create-collections"},"Create Collections"),(0,a.yg)(y,{id:"create-collections",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We created two collections on ",(0,a.yg)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," as ",(0,a.yg)("inlineCode",{parentName:"p"},"posts")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"categories")," and added a relation between them. For detailed information on how to create a collection, you can check ",(0,a.yg)("a",{parentName:"p",href:"https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html"},"here"),"."),(0,a.yg)(r.A,{defaultValue:"posts",values:[{label:"posts",value:"posts"},{label:"categories",value:"categories"}],mdxType:"Tabs"},(0,a.yg)(o.A,{value:"posts",mdxType:"TabItem"},(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"posts")," has the following fields:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"id")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"title")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"content")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"category")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"createdAt")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"locale")))),(0,a.yg)(o.A,{value:"categories",mdxType:"TabItem"},(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"categories")," has the following fields:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"id")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"title")))))),(0,a.yg)("h3",{id:"fields-selection"},"Fields Selection"),(0,a.yg)(y,{id:"fields-selection",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"To select only some fields, we must specify these fields with `metaData``."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#fields-selection"},"Refer to the Fields Selection documentation for detailed information. \u2192")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Get only id and title of all posts"',title:!0,only:!0,id:!0,and:!0,of:!0,all:!0,'posts"':!0},'const { tableProps } = useTable<IPost>({\n  metaData: {\n    fields: ["id", "title"],\n  },\n});\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Get all fields of all posts(id, title, category, content ...)"',title:'"Get',all:!0,fields:!0,of:!0,"posts(id,":!0,"title,":!0,"category,":!0,content:!0,'...)"':!0},'const { tableProps } = useTable<IPost>({\n  metaData: {\n    fields: "*",\n  },\n});\n')),(0,a.yg)("p",null,"When sending the request, we can specify which fields will come, so we send ",(0,a.yg)("inlineCode",{parentName:"p"},"fields")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"metaData")," to hooks that we will fetch data from. In this way, you can perform the queries of only the fields you want."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PostList.tsx"',title:'"PostList.tsx"'},'import { useState } from "react";\nimport { IResourceComponentsProps } from "@pankod/core";\nimport {\n  List,\n  Table,\n  useTable,\n  getDefaultSortOrder,\n  FilterDropdown,\n  Select,\n  useSelect,\n  Space,\n  EditButton,\n  DeleteButton,\n} from "@pankod/refine-antd";\n\nimport { IPost } from "interfaces";\n\nimport { API_URL } from "../../constants";\n\nexport const PostList: React.FC<IResourceComponentsProps> = () => {\n  const { tableProps, sorter } = useTable<IPost>({\n    metaData: {\n      // highlight-start\n      fields: ["id", "title"],\n      // highlight-end\n    },\n  });\n\n  return (\n    <List>\n      <Table\n        {...tableProps}\n        rowKey="id"\n        pagination={{\n          ...tableProps.pagination,\n          showSizeChanger: true,\n        }}\n      >\n        <Table.Column\n          dataIndex="id"\n          title="ID"\n          defaultSortOrder={getDefaultSortOrder("id", sorter)}\n          sorter={{ multiple: 3 }}\n        />\n        <Table.Column\n          dataIndex="title"\n          title="Title"\n          defaultSortOrder={getDefaultSortOrder("title", sorter)}\n          sorter={{ multiple: 2 }}\n        />\n\n        <Table.Column<{ id: string }>\n          title="Actions"\n          render={(_, record) => (\n            <Space>\n              <EditButton hideText size="small" recordItemId={record.id} />\n              <DeleteButton hideText size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n')),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/strapi-v4/selection.png",alt:"Fields Selection Metadata"})),(0,a.yg)("h3",{id:"relations-population"},"Relations Population"),(0,a.yg)(y,{id:"relations-population",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"By default, relations are not populated when fetching entries."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"populate")," parameter is used to define which fields will be populated."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#population"},"Refer to the Relations Population documentation for detailed information. \u2192")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Get all the posts and populate the selected relations"',title:'"Get',all:!0,the:!0,posts:!0,and:!0,populate:!0,selected:!0,'relations"':!0},'const { tableProps } = useTable<IPost>({\n  metaData: {\n    populate: ["category", "cover"],\n  },\n});\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Get all posts and populate all their first-level relations"',title:'"Get',all:!0,posts:!0,and:!0,populate:!0,their:!0,"first-level":!0,'relations"':!0},'const { tableProps } = useTable<IPost>({\n  metaData: {\n    populate: "*",\n  },\n});\n')),(0,a.yg)("p",null,"It should be noted that Strapi-V4 allows populating relations more than 1 level."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Get all posts and populate one second-level relation and first-level relation"',title:'"Get',all:!0,posts:!0,and:!0,populate:!0,one:!0,"second-level":!0,relation:!0,"first-level":!0,'relation"':!0},'const { tableProps } = useTable<IPost>({\n  metaData: {\n    populate: {\n      category: {\n        populate: ["cover"],\n      },\n      cover: {\n        populate: [""],\n      },\n    },\n  },\n});\n')),(0,a.yg)("p",null,"In order to pull the ",(0,a.yg)("inlineCode",{parentName:"p"},"categories")," related to the posts, we can now show the categories in our list by defining the ",(0,a.yg)("inlineCode",{parentName:"p"},"metaData")," ",(0,a.yg)("inlineCode",{parentName:"p"},"populate")," parameter."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PostList.tsx"',title:'"PostList.tsx"'},'import { IResourceComponentsProps } from "@pankod/refine-core";\nimport {\n  List,\n  Table,\n  useTable,\n  getDefaultSortOrder,\n  FilterDropdown,\n  Select,\n  useSelect,\n  Space,\n  EditButton,\n  DeleteButton,\n} from "@pankod/refine-antd";\n\nimport { IPost } from "interfaces";\n\nimport { API_URL } from "../../constants";\n\nexport const PostList: React.FC<IResourceComponentsProps> = () => {\n  const { tableProps, sorter } = useTable<IPost>({\n    metaData: {\n      fields: ["id", "title"],\n      // highlight-start\n      populate: ["category"],\n      // highlight-end\n    },\n  });\n\n  // highlight-start\n  const { selectProps } = useSelect({\n    resource: "categories",\n    optionLabel: "title",\n    optionValue: "id",\n  });\n  // highlight-end\n\n  return (\n    <List>\n      <Table\n        {...tableProps}\n        rowKey="id"\n        pagination={{\n          ...tableProps.pagination,\n          showSizeChanger: true,\n        }}\n      >\n        <Table.Column\n          dataIndex="id"\n          title="ID"\n          defaultSortOrder={getDefaultSortOrder("id", sorter)}\n          sorter={{ multiple: 3 }}\n        />\n        <Table.Column\n          dataIndex="title"\n          title="Title"\n          defaultSortOrder={getDefaultSortOrder("title", sorter)}\n          sorter={{ multiple: 2 }}\n        />\n        //highlight-start\n        <Table.Column\n          dataIndex={["category", "title"]}\n          title="Category"\n          filterDropdown={(props) => (\n            <FilterDropdown {...props}>\n              <Select\n                style={{ minWidth: 200 }}\n                mode="multiple"\n                placeholder="Select Category"\n                {...selectProps}\n              />\n            </FilterDropdown>\n          )}\n        />\n        //highlight-end\n        <Table.Column<{ id: string }>\n          title="Actions"\n          render={(_, record) => (\n            <Space>\n              <EditButton hideText size="small" recordItemId={record.id} />\n              <DeleteButton hideText size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n')),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/strapi-v4/category.png",alt:"category"})),(0,a.yg)("h5",{id:"relations-population-for-me-request"},"Relations Population for ",(0,a.yg)("inlineCode",{parentName:"h5"},"/me")," request"),(0,a.yg)(y,{id:"relations-population-for-me-request",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If you need to the population for the ",(0,a.yg)("inlineCode",{parentName:"p"},"/me")," request you can use it like this in your ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const strapiAuthHelper = AuthHelper(API_URL + "/api");\n\nstrapiAuthHelper.me("token", {\n  metaData: {\n    populate: ["role"],\n  },\n});\n'))),(0,a.yg)("h3",{id:"publication-state"},"Publication State"),(0,a.yg)(y,{id:"publication-state",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The Draft & Publish feature should be enabled on Strapi.")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#publication-state"},"Refer to the Publication State documentation for detailed information. \u2192")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"live"),": returns only published entries"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"preview"),": returns draft and published entries"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { tableProps } = useTable<IPost>({\n  metaData: {\n    publicationState: "preview",\n  },\n});\n')),(0,a.yg)("p",null,"We can list the posts separately according to the ",(0,a.yg)("inlineCode",{parentName:"p"},"published")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"draft")," information."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PostList"',title:'"PostList"'},'// highlight-next-line\nimport { useState } from "react";\n\nimport { IResourceComponentsProps } from "@pankod/refine-core";\nimport {\n  List,\n  Table,\n  useTable,\n  getDefaultSortOrder,\n  FilterDropdown,\n  Select,\n  useSelect,\n  DateField,\n  Space,\n  EditButton,\n  DeleteButton,\n  // highlight-start\n  Form,\n  Radio,\n  Tag,\n  // highlight-end\n} from "@pankod/refine-antd";\n\nimport { IPost } from "interfaces";\n\nimport { API_URL } from "../../constants";\n\nexport const PostList: React.FC<IResourceComponentsProps> = () => {\n  // highlight-start\n  const [publicationState, setPublicationState] = useState("live");\n  // highlight-end\n\n  const { tableProps, sorter } = useTable<IPost>({\n    metaData: {\n      fields: ["id", "title"],\n      populate: ["category"],\n      // highlight-start\n      publicationState,\n      // highlight-end\n    },\n  });\n\n  const { selectProps } = useSelect({\n    resource: "categories",\n    optionLabel: "title",\n    optionValue: "id",\n  });\n\n  return (\n    <List>\n      //highlight-start\n      <Form\n        layout="inline"\n        initialValues={{\n          publicationState,\n        }}\n      >\n        <Form.Item label="Publication State" name="publicationState">\n          <Radio.Group onChange={(e) => setPublicationState(e.target.value)}>\n            <Radio.Button value="live">Published</Radio.Button>\n            <Radio.Button value="preview">Draft and Published</Radio.Button>\n          </Radio.Group>\n        </Form.Item>\n      </Form>\n      //highlight-end\n      <br />\n      <Table\n        {...tableProps}\n        rowKey="id"\n        pagination={{\n          ...tableProps.pagination,\n          showSizeChanger: true,\n        }}\n      >\n        <Table.Column\n          dataIndex="id"\n          title="ID"\n          defaultSortOrder={getDefaultSortOrder("id", sorter)}\n          sorter={{ multiple: 3 }}\n        />\n        <Table.Column\n          dataIndex="title"\n          title="Title"\n          defaultSortOrder={getDefaultSortOrder("title", sorter)}\n          sorter={{ multiple: 2 }}\n        />\n        <Table.Column\n          dataIndex={["category", "title"]}\n          title="Category"\n          filterDropdown={(props) => (\n            <FilterDropdown {...props}>\n              <Select\n                style={{ minWidth: 200 }}\n                mode="multiple"\n                placeholder="Select Category"\n                {...selectProps}\n              />\n            </FilterDropdown>\n          )}\n        />\n        //highlight-start\n        <Table.Column\n          dataIndex="publishedAt"\n          title="Status"\n          render={(value) => {\n            return (\n              <Tag color={value ? "green" : "blue"}>\n                {value ? "Published" : "Draft"}\n              </Tag>\n            );\n          }}\n        />\n        //highlight-end\n        <Table.Column<{ id: string }>\n          title="Actions"\n          render={(_, record) => (\n            <Space>\n              <EditButton hideText size="small" recordItemId={record.id} />\n              <DeleteButton hideText size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n')),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/strapi-v4/publication.gif",alt:"publication"}),(0,a.yg)("br",null)),(0,a.yg)("h3",{id:"locale"},"Locale"),(0,a.yg)(y,{id:"locale",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"To fetch content for a locale, make sure it has been already ",(0,a.yg)("a",{parentName:"p",href:"https://docs.strapi.io/user-docs/latest/settings/managing-global-settings.html#configuring-internationalization-locales"},"added to Strapi in the admin panel"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#locale"},"Refer to the Locale documentation for detailed information. \u2192")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { tableProps } = useTable<IPost>({\n  metaData: {\n    locale: "de",\n  },\n});\n')),(0,a.yg)("p",null,"With the local parameter feature, we can fetch posts and categories created according to different languages."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\n\nimport { IResourceComponentsProps } from "@pankod/refine-core";\nimport {\n  List,\n  Table,\n  useTable,\n  getDefaultSortOrder,\n  FilterDropdown,\n  Select,\n  useSelect,\n  Space,\n  EditButton,\n  DeleteButton,\n  Form,\n  Radio,\n  Tag,\n} from "@pankod/refine-antd";\n\nimport { IPost } from "interfaces";\n\nimport { API_URL } from "../../constants";\n\nexport const PostList: React.FC<IResourceComponentsProps> = () => {\n  //highlight-start\n  const [locale, setLocale] = useState("en");\n  //highlight-end\n  const [publicationState, setPublicationState] = useState("live");\n\n  const { tableProps, sorter } = useTable<IPost>({\n    metaData: {\n      populate: ["category", "cover"],\n      //highlight-start\n      locale,\n      //highlight-end\n      publicationState,\n    },\n  });\n\n  const { selectProps } = useSelect({\n    resource: "categories",\n    optionLabel: "title",\n    optionValue: "id",\n    //highlight-start\n    metaData: { locale },\n    //highlight-end\n  });\n\n  return (\n    <List>\n      <Form\n        layout="inline"\n        //highlight-start\n        initialValues={{\n          locale,\n          publicationState,\n        }}\n        //highlight-end\n      >\n        //highlight-start\n        <Form.Item label="Locale" name="locale">\n          <Radio.Group onChange={(e) => setLocale(e.target.value)}>\n            <Radio.Button value="en">English</Radio.Button>\n            <Radio.Button value="de">Deutsch</Radio.Button>\n          </Radio.Group>\n        </Form.Item>\n        //highlight-end\n        <Form.Item label="Publication State" name="publicationState">\n          <Radio.Group onChange={(e) => setPublicationState(e.target.value)}>\n            <Radio.Button value="live">Published</Radio.Button>\n            <Radio.Button value="preview">Draft and Published</Radio.Button>\n          </Radio.Group>\n        </Form.Item>\n      </Form>\n      <br />\n      <Table\n        {...tableProps}\n        rowKey="id"\n        pagination={{\n          ...tableProps.pagination,\n          showSizeChanger: true,\n        }}\n      >\n        <Table.Column\n          dataIndex="id"\n          title="ID"\n          defaultSortOrder={getDefaultSortOrder("id", sorter)}\n          sorter={{ multiple: 3 }}\n        />\n        <Table.Column\n          dataIndex="title"\n          title="Title"\n          defaultSortOrder={getDefaultSortOrder("title", sorter)}\n          sorter={{ multiple: 2 }}\n        />\n        <Table.Column\n          dataIndex={["category", "title"]}\n          title="Category"\n          filterDropdown={(props) => (\n            <FilterDropdown {...props}>\n              <Select\n                style={{ minWidth: 200 }}\n                mode="multiple"\n                placeholder="Select Category"\n                {...selectProps}\n              />\n            </FilterDropdown>\n          )}\n        />\n        <Table.Column\n          dataIndex="publishedAt"\n          title="Status"\n          render={(value) => {\n            return (\n              <Tag color={value ? "green" : "blue"}>\n                {value ? "Published" : "Draft"}\n              </Tag>\n            );\n          }}\n        />\n        <Table.Column<{ id: string }>\n          title="Actions"\n          render={(_, record) => (\n            <Space>\n              <EditButton hideText size="small" recordItemId={record.id} />\n              <DeleteButton hideText size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n')),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/strapi-v4/locale.gif",alt:"locale"}),(0,a.yg)("br",null)),(0,a.yg)("h2",{id:"metadata-usages"},(0,a.yg)("inlineCode",{parentName:"h2"},"metaData")," Usages"),(0,a.yg)(y,{id:"metadata-usages",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"When creating and editing posts you can use these API parameters in ",(0,a.yg)("inlineCode",{parentName:"p"},"metaData"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { formProps, saveButtonProps, queryResult } = useForm<IPost>({\n  metaData: { publicationState: "preview" },\n});\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="EditList.tsx"',title:'"EditList.tsx"'},'const { formProps, saveButtonProps, queryResult } = useForm<IPost>({\n  metaData: { populate: ["category", "cover"] },\n});\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="CreateList.tsx"',title:'"CreateList.tsx"'},'const { selectProps } = useSelect({\n  metaData: { locale: "en" },\n});\n'))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(y,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("admonition",{title:"Demo Credentials",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Username: ",(0,a.yg)("a",{parentName:"p",href:"mailto:demo@refine.dev"},"demo@refine.dev")),(0,a.yg)("p",{parentName:"admonition"},"Password: demodemo")),(0,a.yg)(f,{path:"data-provider-strapi-v4",mdxType:"CodeSandboxExample"})))}N.isMDXComponent=!0}}]);