---
id: quickstart
title: Quick Start Guide
---


The fastest way to get started with **refine** is using the [superplate](https://github.com/pankod/superplate) project starter tool.  With your app requirements in mind, you can install third-party libraries and packages that have built-in support by **refine**.

The CLI interface for installing and managing refine packages is really straightforward. 

First, you need to select the desired frameworks from a list of available options on CLI by running the following command:

```
npx superplate-cli -p refine my-project
```


Once you have selected the desired frameworks and packages, complete setup.

Then navigate to the project folder and start your project with:

```
npm run dev
```

<br/>


You can now view  **refine** application at [http://localhost:3000](http://localhost:3000):


## Quick Start Example

We will show how you can use the CLI to bootstrap a **refine** app with [Ant Design](https://ant.design/) and [React](https://reactjs.org/).

```
npx superplate-cli -p refine my-antd-project
```

<br/>

Select the following options to complete CLI wizard:

```
? Select your project type: 
❯ refine-react

? Do you want to use a UI Framework?:
❯ Ant Design

? Do you want a customized theme?:
❯ Default theme

? Router Provider:
❯ React Router v6

? Data Provider:
❯ REST API

? Auth Provider:
❯ None

? Do you want to add example pages? 
❯ Yes

? Do you want a customized layout?
❯ No
```


:::info
 We only show important options for this example. You can prefer to select other options like [Kbar](https://github.com/timc1/kbar) and [i18n](https://www.i18next.com/). Different options selections may be result in a different project structure.
:::


<br/>

Once the setup is complete, navigate to the project folder and start your project with:

```
npm run dev
```


<br/>



You can now view **refine** application at [http://localhost:3000](http://localhost:3000) and you should see the output as a table populated with `post` & `category` data with filter, sort, and pagination features



![First example result](https://github.com/refinedev/refine/blob/master/documentation/static/img/first-example-result.png?raw=true)


:::tip
Since we selected the `Do you want to add example pages?` option as `Yes` during the CLI project creation phase, refine adds example CRUD pages and the `resources` to the app. You can navigate to the example pages and try out the CRUD operations features.

We always recommend to add example pages to your project to get a better understanding of how **refine** works.
:::






## Next Steps

👉 Jump to [Tutorials](https://refine.dev/docs/) to continue your work and turn the example into a full-blown CRUD application.

👉 Read more on [Advanced Tutorials](https://refine.dev/docs/advanced-tutorials/) for different usage scenarios.

👉 See the [real-life examples](https://refine.dev/examples/) built using refine

