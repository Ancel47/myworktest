"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51795],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>p});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(o),p=n,k=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return o?a.createElement(k,i(i({ref:t},m),{},{components:o})):a.createElement(k,i({ref:t},m))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},92628:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});o(67294);var a=o(3905);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const l={title:"A Detailed Guide on Docker Volumes",description:"We'll go over the fundamentals of Docker volumes, including what they are, why they're important, and how to use them.",slug:"docker-volumes",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/docker-volumes",source:"@site/blog/2023-07-11-docker-volume.md",title:"A Detailed Guide on Docker Volumes",description:"We'll go over the fundamentals of Docker volumes, including what they are, why they're important, and how to use them.",date:"2023-07-11T00:00:00.000Z",formattedDate:"July 11, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:10.64,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"A Detailed Guide on Docker Volumes",description:"We'll go over the fundamentals of Docker volumes, including what they are, why they're important, and how to use them.",slug:"docker-volumes",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/social.png",hide_table_of_contents:!1},prevItem:{title:"Zsh and Bash",permalink:"/blog/zsh-vs-bash"},nextItem:{title:"Beginner's Guide to React Query",permalink:"/blog/react-query-guide"},relatedPosts:[{title:"Why you should prefer using pnpm over npm and yarn?",description:"The advantages of pnpm and comparison guide.",permalink:"/blog/pnpm-vs-npm-and-yarn",formattedDate:"October 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.805,date:"2022-10-13T00:00:00.000Z"},{title:"How to Use Docker EntryPoint",description:"We'll discuss how to use Docker ENTRYPOINT instruction to configure the executables run after the container is initiated.",permalink:"/blog/docker-entrypoint",formattedDate:"January 10, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.1,date:"2023-01-10T00:00:00.000Z"},{title:"A Complete guide to pnpm",description:"We'll explore pnpm, an efficient alternative to npm.",permalink:"/blog/how-to-use-pnpm",formattedDate:"November 27, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:8.995,date:"2023-11-27T00:00:00.000Z"}],authorPosts:[{title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",description:"Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) are key tools for storing data in containerized environments.",permalink:"/blog/kubernetes-persistent-volumes",formattedDate:"December 14, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.32,date:"2023-12-14T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",description:"Explore an in-depth comparison between Docker and Kubernetes, focusing on their unique features, advantages, and ideal use scenarios.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:14.365,date:"2024-01-26T00:00:00.000Z"},{title:"Using kubectl logs - DevOps Guide",description:"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs.",permalink:"/blog/kubectl-logs",formattedDate:"December 28, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.435,date:"2023-12-28T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},u=[{value:"Brief introduction to Docker",id:"brief-introduction-to-docker",level:2},{value:"Why Docker Volumes are Important",id:"why-docker-volumes-are-important",level:2},{value:"Understanding Docker Volumes",id:"understanding-docker-volumes",level:2},{value:"Docker Volumes versus other storage options",id:"docker-volumes-versus-other-storage-options",level:3},{value:"Overview of Docker volume features",id:"overview-of-docker-volume-features",level:3},{value:"Working with Docker Volumes (Screenshots of commands)",id:"working-with-docker-volumes-screenshots-of-commands",level:2},{value:"The lifecycle of a Docker Volume",id:"the-lifecycle-of-a-docker-volume",level:3},{value:"Creating a Docker volume",id:"creating-a-docker-volume",level:3},{value:"Using a Docker volume",id:"using-a-docker-volume",level:3},{value:"Inspecting a Docker volume",id:"inspecting-a-docker-volume",level:3},{value:"Removing a Docker volume",id:"removing-a-docker-volume",level:3},{value:"A Glance at common docker volume commands",id:"a-glance-at-common-docker-volume-commands",level:2},{value:"Listing Docker Container",id:"listing-docker-container",level:3},{value:"<strong>Remove all unused Volumes</strong>",id:"remove-all-unused-volumes",level:3},{value:"Backup and Restore Docker Volumes (Screenshots of commands)",id:"backup-and-restore-docker-volumes-screenshots-of-commands",level:2},{value:"Why backing up Docker volumes is crucial",id:"why-backing-up-docker-volumes-is-crucial",level:2},{value:"Steps to back up a Docker volume",id:"steps-to-back-up-a-docker-volume",level:2},{value:"Steps to restore a Docker volume",id:"steps-to-restore-a-docker-volume",level:2},{value:"Best Practices for Docker Volumes",id:"best-practices-for-docker-volumes",level:2},{value:"Optimizing Docker volume usage",id:"optimizing-docker-volume-usage",level:3},{value:"Ensuring data consistency with volumes",id:"ensuring-data-consistency-with-volumes",level:2},{value:"Managing Docker volumes effectively",id:"managing-docker-volumes-effectively",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Summary of Docker volume usage",id:"summary-of-docker-volume-usage",level:2},{value:"Final thoughts on exploring Docker volumes",id:"final-thoughts-on-exploring-docker-volumes",level:2}],d={toc:u};function p(e){var{components:t}=e,o=i(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},a=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),a.forEach((function(t){n(e,t,o[t])}))}return e}({},d,o),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief-introduction-to-docker"},"Brief introduction to Docker"),(0,a.kt)("p",null,"Docker, also known as Docker Engine, has a major impact on the modern industry as it is an open-source\xa0platform for creating, distributing, and running applications. Applications are packaged and executed using Docker containers in a loosely isolated environment. You can execute applications without depending on what is already installed on the host because containers are lightweight and come up with everything you need to run them. Its containerization solution addresses major issues with application deployment, supporting microservices design, allowing CI/CD pipelines, enhancing scalability and resource efficiency, enabling hybrid and cloud-native settings, and encouraging DevOps collaboration."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-are-docker-volumes"},"What are Docker volumes?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#why-docker-volumes-are-important"},"Why Docker Volumes are Important")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#understanding-docker-volumes"},"Understanding Docker Volumes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#working-with-docker-volumes"},"Working with Docker Volumes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#backup-and-restore-docker-volumes"},"Backup and Restore Docker Volumes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#best-practices-for-docker-volumes"},"Best Practices for Docker Volumes"))),(0,a.kt)("h2",{id:"why-docker-volumes-are-important"},"Why Docker Volumes are Important"),(0,a.kt)("p",null,"Data created and utilized by Docker containers can be stored on Docker volumes. Docker volumes are important due to the following reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"They will enable you to store data outside the container's filesystem, ensuring it remains intact even if the container is updated or deleted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It is simpler to generate backups or snapshots of the volumes by detaching the data from the container itself, ensuring that crucial data can be restored in the case of system failures or disasters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"By allowing developers to exchange code, libraries, and other dependencies using shared volumes, Docker volumes encourage developer collaboration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Performance can be increased by using Docker volumes which make use of the resources of the host machine.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Data can be accessed directly from the host's file system or other external storage systems, minimizing the overhead associated with containerized file operations."))),(0,a.kt)("h2",{id:"understanding-docker-volumes"},"Understanding Docker Volumes"),(0,a.kt)("h3",{id:"docker-volumes-versus-other-storage-options"},"Docker Volumes versus other storage options"),(0,a.kt)("p",null,"The recommended method for storing data generated and utilized by Docker containers is through Docker volumes because bind mounts and tmpfs mounts are dependent on the directory structure and OS of the host system. Below are the areas where docker volume excels over other storage options."),(0,a.kt)("p",null,"Data Isolation and Portability"),(0,a.kt)("p",null,"Docker volume's data is kept separate from the host file system and other containers. Additionally, Docker volumes can be used across a variety of platforms and scenarios, making it simpler to deploy and consistently run applications."),(0,a.kt)("p",null,"Extensibility and Integration"),(0,a.kt)("p",null,"Unlike tmpfs mounts, Docker volumes can integrate drivers and plugins, making it possible to utilize network-attached storage (NAS), cloud storage, distributed file systems, or custom storage options."),(0,a.kt)("p",null,"Container Orchestration:"),(0,a.kt)("p",null,"Kubernetes and other container orchestration systems are easily integrated with Docker volumes. Data handling in dynamic or containerized environments is standardized, Simplified, and consistent due to Docker volumes."),(0,a.kt)("h3",{id:"overview-of-docker-volume-features"},"Overview of Docker volume features"),(0,a.kt)("p",null,"Data sharing across containers:"),(0,a.kt)("p",null,"Docker volumes make it possible for different containers to exchange and use the same data. This feature is quite helpful when microservices or multiple containers need to connect and work together by sharing common data."),(0,a.kt)("p",null,"Volume Snapshotting:"),(0,a.kt)("p",null,"Volume snapshotting is supported by a few storage drivers and plugins for Docker volumes. You can create a snapshot at a specific point in time that can be later used for backup, cloning, or versioning purposes."),(0,a.kt)("p",null,"Mount Options:"),(0,a.kt)("p",null,"Docker volumes provide flexible mount options so that the volume can be mounted inside containers in a way that works for you. Read-only mode, choosing the volume driver, configuring consistency parameters, and more are all included in the mount options."),(0,a.kt)("p",null,"Volume Security:"),(0,a.kt)("p",null,"Security features for Docker volumes include access control and permission management. You can specify who is allowed to read, write, or execute on a volume, ensuring that sensitive information is kept secure and that only authorized containers or users can access it."),(0,a.kt)("h2",{id:"working-with-docker-volumes-screenshots-of-commands"},"Working with Docker Volumes (Screenshots of commands)"),(0,a.kt)("h3",{id:"the-lifecycle-of-a-docker-volume"},"The lifecycle of a Docker Volume"),(0,a.kt)("p",null,"The four key stages of a docker volume's lifespan are creation, use, inspection, and removal."),(0,a.kt)("h3",{id:"creating-a-docker-volume"},"Creating a Docker volume"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker volume create")," command(i.e., docker volume create) can be used to build a docker volume. This command creates a volume with the local driver by default and a random name. The --name and --driver options additionally allow you to provide a name of your choice and a driver as well. Let's take an Example:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/image1.png",alt:"docker volume"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"using-a-docker-volume"},"Using a Docker volume"),(0,a.kt)("p",null,"With the options --mount or -v of the docker run command, you can attach a docker volume to one or more containers in order to use it. But, for that purpose, you need to specify the source (the volume's name), the target (the path on which the volume is mounted in the container), and the name(name of the container). Let's take an example of mounting volume(",(0,a.kt)("strong",{parentName:"p"},"source"),": sample-volume) with a WordPress container at path(",(0,a.kt)("strong",{parentName:"p"},"target"),": /var/www/html)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Command in Example:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run -d --name wordpress --mount source=sample-volume,target=/var/www/html wordpress")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/image2.png",alt:"docker volume"})),(0,a.kt)("br",null),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/image3.png",alt:"docker volume"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Alternatively, You can also use '-v' instead of '--mount', but for volume, '\u2014mount' is recommended, and '-v' is recommended for bind mounts."),(0,a.kt)("h3",{id:"inspecting-a-docker-volume"},"Inspecting a Docker volume"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker volume inspect")," command(i.e., docker volume inspect \\<name-of-volume",">",") can be used to examine a docker volume. The information displayed by this command includes the volume's name, driver, mountpoint, labels, and options. Let's take an example of inspecting 'sample-volume'."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/image4.png",alt:"docker volume"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"removing-a-docker-volume"},"Removing a Docker volume"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker volume rm")," command(i.e., docker volume rm \\<name-of-volume",">",") can delete a docker volume. By deleting the volume, the occupied disk space is released. In the example below, we will delete the '",(0,a.kt)("strong",{parentName:"p"},"sample-volume"),"' created earlier."),(0,a.kt)("blockquote",null),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/image5.png",alt:"docker volume"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Please note that volume you want to delete should not be in use by any container."),(0,a.kt)("h2",{id:"a-glance-at-common-docker-volume-commands"},"A Glance at common docker volume commands"),(0,a.kt)("h3",{id:"listing-docker-container"},"Listing Docker Container"),(0,a.kt)("p",null,"Lists every Docker volume on the system with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker volume ls"),". Through this command, You can have general information of all docker volumes, along with their names and related mountpoints."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/image6.png",alt:"docker volume"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"remove-all-unused-volumes"},(0,a.kt)("strong",{parentName:"h3"},"Remove all unused Volumes")),(0,a.kt)("p",null,"To eliminate all unused volumes, you can also use the docker volume prune command(i.e., docker volume prune). For example, we want to remove anonymous local volumes not used by at least one container. For that purpose, first, we have to list the unused volumes not referenced by any container by using the '-f dangling=true' option with the 'docker volume ls', and then we will run 'docker volume prune' to delete the volumes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Command in Example:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker volume rm sample-volume")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/image7.png",alt:"docker volume"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"backup-and-restore-docker-volumes-screenshots-of-commands"},"Backup and Restore Docker Volumes (Screenshots of commands)"),(0,a.kt)("h2",{id:"why-backing-up-docker-volumes-is-crucial"},"Why backing up Docker volumes is crucial"),(0,a.kt)("p",null,"Persistent data generated\xa0and consumed by Docker containers are stored on Docker volumes. You can containerize stateful workloads because data stored in a volume is available even after your containers have stopped running. However, disasters like disk failures, accidental deletions, or malicious attacks can still happen to volumes. For the safe side, you should periodically back up your volumes so that you can restore them in the case of data loss or corruption."),(0,a.kt)("h2",{id:"steps-to-back-up-a-docker-volume"},"Steps to back up a Docker volume"),(0,a.kt)("p",null,"There are multiple ways to backup the docker volume, but the most common way is to use a temporary container that mounts the volume and builds an archive of its contents. In order to achieve this, you need to use the docker run command with the '\u2014volume-from' option to mount the volume from another container and the '-v' option to bind mount a directory where you want to keep your backup on a host system. To compress the backup file, you can use tools like tar and gzip. Let's take an example of creating a backup of 'sample-volume'."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," We have created a container that stores data in 'sample-volume'"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Command in Example:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run -d --name sample-container -v sample-volume:/data ubuntu")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/image8.png",alt:"docker volume"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Now, we will create a backup file 'sample-backup' of 'sample-volume' at the path of our choice on the host system by starting a temporary container and removing it using the 'rm' option once the backup is created. We created the 'sample-backup' at ",(0,a.kt)("em",{parentName:"p"},"'C:\\Users","\\","my-username","]","\\Documents"),"'"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Command in Example:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run --rm --volumes-from sample-container -v C:\\Users\\\\*my-username*\\]\\Documents:/backup-dir ubuntu tar cvzf /backup-dir/sample-backup.tar.gz /data")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/image9.png",alt:"docker volume"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"steps-to-restore-a-docker-volume"},"Steps to restore a Docker volume"),(0,a.kt)("p",null,"A docker volume can be restored from a backup file using a method similar to the backup method. You have to first mount the volume and the backup file in another temporary container before extracting the content of the backup file into the volume. As an example, let's restore the 'sample-backup' into the newly created volume (known as the 'restored-volume')."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," We have created a temporary container to mount the volume and backup file(i.e., 'sample-backup') and then extract the backup content into the volume(i.e., 'restored-volume'."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Command in Example:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run --rm -v sample-volume:/data -v C:\\Users\\\\username\\]\\Documents:/backup-dir ubuntu tar xvzf /backup-dir/sample-backup.tar.gz -C /data")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-11-docker-volume/image10.png",alt:"docker volume"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," It is important to note that while restoring the volume, it should not be in use by any container."),(0,a.kt)("h2",{id:"best-practices-for-docker-volumes"},"Best Practices for Docker Volumes"),(0,a.kt)("h3",{id:"optimizing-docker-volume-usage"},"Optimizing Docker volume usage"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"It is better to restrict the number of volumes to only what is required for your application because each volume has some overhead.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Instead of a random name assigned by docker, naming the volume yourself will improve control and visibility, making managing and referencing volumes simpler.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Caching should be enabled for the volumes that are frequently accessing read-only data. Caching minimizes the need to continually read data from slower storage systems, enhancing the performance of containerized applications.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use read-only volumes if your applications only require read access to data, as it will prevent accidental changes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check volumes frequently to see whether they are storing too much data or if their capacity is being exceeded. Volumes may need to be resized or cleaned up as necessary to maintain optimal resource use."))),(0,a.kt)("h2",{id:"ensuring-data-consistency-with-volumes"},"Ensuring data consistency with volumes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Try to perform atomic operations while changing data within a volume. Atomic operations ensure that changes are applied in a single, unified phase and are indivisible.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow consistent and organized methods when attaching or detaching volumes from containers. A sudden or inappropriate volume removal might cause data loss.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If multiple containers change the same files, prevent them from writing to the same drive simultaneously. Corruption of data and conflicts can result from concurrent write access.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For your volume of data, implement a backup strategy to guarantee data availability and consistency. Back up the volumes regularly to a different storage system or an off-site location."))),(0,a.kt)("h2",{id:"managing-docker-volumes-effectively"},"Managing Docker volumes effectively"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When working with many containers and volumes, it is simpler to identify and manage volumes when naming conventions are clear and consistent.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To protect sensitive data stored in volumes, implement the necessary security procedures. Ensure that data integrity remains intact, volumes are correctly encrypted, and access restrictions are in place.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Automate the creation of the volumes that your application needs as part of the container deployment process. Use Docker Compose files or infrastructure-as-code tools to design and automatically provision the necessary volumes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Volume plugins can increase the functionality of Docker volumes, enabling you to use cutting-edge features like replication, snapshotting, or interaction with cloud storage providers."))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("h2",{id:"summary-of-docker-volume-usage"},"Summary of Docker volume usage"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In Docker containerized systems, persistent and controllable storage is made possible by the powerful feature known as Docker volumes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"They enable data sharing across containers, give a mechanism to isolate data from containers, and possible data persistence during container restarts and updates.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Regarding data isolation, flexibility, and compatibility with container orchestration platforms, Docker volumes outperform as an alternative storage solution.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Various Docker volume commands can be used to create, inspect, utilize, and remove Docker volumes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Limiting the number of volumes, utilizing descriptive naming, frequently cleaning up unused volumes, and regularly keeping data backup and security measures in place are all best practices for Docker volume utilization."))),(0,a.kt)("h2",{id:"final-thoughts-on-exploring-docker-volumes"},"Final thoughts on exploring Docker volumes"),(0,a.kt)("p",null,"In order to obtain a deeper understanding\xa0of docker volume, it is recommended to examine the Docker documentation and community resources and experiment with various use cases. You can effectively utilize Docker for your application deployments by understanding its use. Docker volumes provide significant flexibility and options for managing data within containers, but further exploring Docker volumes can assist you in weighing the advantages and disadvantages of various storage solutions and selecting the one that best matches your use case."))}p.isMDXComponent=!0}}]);