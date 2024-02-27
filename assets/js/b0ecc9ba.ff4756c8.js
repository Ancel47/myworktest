"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?r.createElement(h,a(a({ref:t},m),{},{components:n})):r.createElement(h,a({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"antd-custom-theme",title:"Theme"},c=void 0,l={unversionedId:"api-reference/antd/customization/antd-custom-theme",id:"version-3.xx.xx/api-reference/antd/customization/antd-custom-theme",title:"Theme",description:"Ant Design allows you to customize design tokens to satisfy UI diversity from business or brand requirements, including primary color, border radius, border color, etc.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/customization/theme.md",sourceDirName:"api-reference/antd/customization",slug:"/api-reference/antd/customization/antd-custom-theme",permalink:"/docs/3.xx.xx/api-reference/antd/customization/antd-custom-theme",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/customization/theme.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1709039602,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{id:"antd-custom-theme",title:"Theme"},sidebar:"someSidebar",previous:{title:"Custom Inputs",permalink:"/docs/3.xx.xx/api-reference/antd/components/inputs/custom-inputs"},next:{title:"Layout",permalink:"/docs/3.xx.xx/api-reference/antd/customization/antd-custom-layout"}},m={},p=[{value:"Theme customization",id:"theme-customization",level:2},{value:"Overriding the themes",id:"overriding-the-themes",level:3},{value:"Use Preset Algorithms",id:"use-preset-algorithms",level:3},{value:"Switching to dark theme",id:"switching-to-dark-theme",level:4},{value:"Example",id:"example",level:2}],d=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const h={toc:p};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import React from "react";\nimport { IResourceComponentsProps, useShow } from "@pankod/refine-core";\n\nimport {\n  List,\n  Show,\n  Create,\n  Edit,\n  ShowButton,\n  EditButton,\n  Table,\n  useTable,\n  Space,\n  TextField,\n  Form,\n  Input,\n  useForm,\n  Typography,\n} from "@pankod/refine-antd";\n\nconst { Title, Text } = Typography;\n\nconst PostList: React.FC<IResourceComponentsProps> = () => {\n  const { tableProps } = useTable<IPost>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" />\n        <Table.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          render={(_, record) => (\n            <Space>\n              <EditButton hideText size="small" recordItemId={record.id} />\n              <ShowButton hideText size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n\nconst PostCreate: React.FC<IResourceComponentsProps> = () => {\n  const { formProps, saveButtonProps } = useForm<IPost>();\n\n  return (\n    <Create saveButtonProps={saveButtonProps}>\n      <Form {...formProps} layout="vertical">\n        <Form.Item\n          label="Title"\n          name="title"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n      </Form>\n    </Create>\n  );\n};\n\nconst PostShow: React.FC<IResourceComponentsProps> = () => {\n  const { queryResult } = useShow<IPost>();\n  const { data, isLoading } = queryResult;\n  const record = data?.data;\n\n  return (\n    <Show isLoading={isLoading}>\n      <Title level={5}>Id</Title>\n      <Text>{record?.id}</Text>\n\n      <Title level={5}>Title</Title>\n      <Text>{record?.title}</Text>\n    </Show>\n  );\n};\n\nconst PostEdit: React.FC<IResourceComponentsProps> = () => {\n  const { formProps, saveButtonProps } = useForm<IPost>();\n\n  return (\n    <Edit saveButtonProps={saveButtonProps}>\n      <Form {...formProps} layout="vertical">\n        <Form.Item\n          label="Title"\n          name="title"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n      </Form>\n    </Edit>\n  );\n};\n\nconst IconSun = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-sun"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    strokeWidth="2"\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <circle cx={12} cy={12} r={4}></circle>\n    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>\n  </svg>\n);\n\nconst IconMoonStars = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-moon-stars"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    strokeWidth={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>\n    <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>\n    <path d="M19 11h2m-1 -1v2"></path>\n  </svg>\n);\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft";\n  category: { id: number };\n}\n')),(0,r.kt)("p",null,"Ant Design allows you to customize design tokens to satisfy UI diversity from business or brand requirements, including primary color, border radius, border color, etc.\nDesign Tokens are the smallest element that affects the theme. By modifying the Design Token, we can present various themes or components."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/customize-theme"},"Refer to the Ant Design documentation for more information about customizing Ant Design theme. ","\u2192")),(0,r.kt)("h2",{id:"theme-customization"},"Theme customization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/config-provider/#components-config-provider-demo-theme"},(0,r.kt)("inlineCode",{parentName:"a"},"<ConfigProvider/>"))," component can be used to change theme. It is not required if you decide to use the default theme."),(0,r.kt)("h3",{id:"overriding-the-themes"},"Overriding the themes"),(0,r.kt)("p",null,"You can override or extend the default themes. You can also create your own theme. Let's see how to do this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts/create"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport {\n  useNotificationProvider,\n  Layout,\n  ErrorComponent,\n  ConfigProvider,\n} from "@pankod/refine-antd";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    // highlight-start\n    <ConfigProvider\n      theme={{\n        components: {\n          Button: {\n            borderRadius: 0,\n          },\n          Typography: {\n            colorTextHeading: "#1890ff",\n          },\n        },\n        token: {\n          colorPrimary: "#f0f",\n        },\n      }}\n    >\n      {/* highlight-end */}\n      <Refine\n        dataProvider={dataProvider(API_URL)}\n        routerProvider={routerProvider}\n        resources={[\n          {\n            name: "posts",\n            list: PostList,\n            create: PostCreate,\n            edit: PostEdit,\n            show: PostShow,\n          },\n        ]}\n        notificationProvider={useNotificationProvider}\n        Layout={Layout}\n        catchAll={<ErrorComponent />}\n      />\n      // highlight-next-line\n    </ConfigProvider>\n  );\n};\n\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("h3",{id:"use-preset-algorithms"},"Use Preset Algorithms"),(0,r.kt)("p",null,"Themes with different styles can be quickly generated by modifying algorithm. Ant Design 5.0 provides three sets of ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/customize-theme#theme-presets"},"preset algorithms by default"),", which are default algorithm ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.defaultAlgorithm"),", dark algorithm ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.darkAlgorithm")," and compact algorithm ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.compactAlgorithm"),". You can switch algorithms by modifying the algorithm property of theme in ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/config-provider/#components-config-provider-demo-theme"},(0,r.kt)("inlineCode",{parentName:"a"},"<ConfigProvider/>")),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/customize-theme#use-preset-algorithms"},"Refer to the Ant Design documentation for more information about customizing Ant Design theme. ","\u2192")),(0,r.kt)("h4",{id:"switching-to-dark-theme"},"Switching to dark theme"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { FC, useState } from "react";\nimport { Button } from "@pankod/refine-antd";\nimport { Refine } from "@pankod/refine-core";\nimport {\n  useNotificationProvider,\n  Layout,\n  ErrorComponent,\n  ConfigProvider,\n  // highlight-next-line\n  theme,\n} from "@pankod/refine-antd";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nimport "@pankod/refine-antd/dist/reset.min.css";\n\n// highlight-start\ninterface HeaderProps {\n  theme: "light" | "dark";\n  setTheme: (theme: "light" | "dark") => void;\n}\n\nconst Header: FC<HeaderProps> = (props) => {\n  return (\n    <Space\n      direction="vertical"\n      align="end"\n      style={{\n        padding: "1rem",\n      }}\n    >\n      <Button\n        onClick={() => {\n          props.setTheme(props.theme === "light" ? "dark" : "light");\n        }}\n        icon={props.theme === "light" ? <IconMoonStars /> : <IconSun />}\n      />\n    </Space>\n  );\n};\n// highlight-end\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  // highlight-next-line\n  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");\n\n  return (\n    <ConfigProvider\n      // highlight-next-line\n      theme={{\n        algorithm:\n          currentTheme === "light"\n            ? theme.defaultAlgorithm\n            : theme.darkAlgorithm,\n      }}\n    >\n      <Refine\n        dataProvider={dataProvider(API_URL)}\n        routerProvider={routerProvider}\n        // highlight-start\n        Header={() => (\n          <Header theme={currentTheme} setTheme={setCurrentTheme} />\n        )}\n        // highlight-end\n        resources={[\n          {\n            name: "posts",\n            list: PostList,\n            create: PostCreate,\n            edit: PostEdit,\n            show: PostShow,\n          },\n        ]}\n        notificationProvider={useNotificationProvider}\n        Layout={Layout}\n        catchAll={<ErrorComponent />}\n      />\n    </ConfigProvider>\n  );\n};\n\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(d,{path:"customization-theme-antd",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);