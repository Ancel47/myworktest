---
id: custom-layout
title: Custom Layout
sidebar_label: Custom Layout 🆙
---

**refine** supports any layout you want with no restrictions and also provides default layouts with its UI packages. You are free to use them or create your own with the help of **refine**'s hooks and components. You can also use the [`swizzle`][cli] command to customize the default layouts and adapt them to your needs.

You don't have to customize the whole layout and its sub components. You can customize only the parts you need and pass your customized components to [`Layout`][layout] components, such as [`Sider`][sider], [`Footer`][footer], [`Header`][header], and [`Title`][title].

## Example

Here's an example of a custom layout, made with help of **refine**'s hooks and components.

<CodeSandboxExample path="customization-top-menu-layout" />

[refine]: /docs/api-reference/core/components/refine-config
[cli]: /docs/packages/documentation/cli#swizzle
[layout]: /docs/api-reference/core/components/refine-config#layout
[sider]: /docs/api-reference/core/components/refine-config#sider
[footer]: /docs/api-reference/core/components/refine-config#footer
[header]: /docs/api-reference/core/components/refine-config#header
[offlayoutarea]: /docs/api-reference/core/components/refine-config#offlayoutarea
[title]: /docs/api-reference/core/components/refine-config#title
[custom page example]: /advanced-tutorials/custom-pages
[custom page example code]: /examples/customization/topMenuLayout
[antdlayout]: https://ant.design/components/layout/
[usemenu]: /docs/api-reference/core/hooks/ui/useMenu
