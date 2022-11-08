"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8445],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const o={slug:"deploy-models",title:"\ud83d\udd0e Deploying your models",authors:["bethany"],tags:["30DaysOfDataScience"],draft:!1},i=void 0,l={permalink:"/30daysof/blog/deploy-models",source:"@site/blog/data-science/2022-11-07.md",title:"\ud83d\udd0e Deploying your models",description:"header",date:"2022-11-07T00:00:00.000Z",formattedDate:"November 7, 2022",tags:[{label:"30DaysOfDataScience",permalink:"/30daysof/blog/tags/30-days-of-data-science"}],readingTime:2.305,hasTruncateMarker:!1,authors:[{name:"Bethany Jep",title:"Cloud Advocate, Microsoft",url:"https://github.com/BethanyJep",imageURL:"https://github.com/BethanyJep.png",key:"bethany"}],frontMatter:{slug:"deploy-models",title:"\ud83d\udd0e Deploying your models",authors:["bethany"],tags:["30DaysOfDataScience"],draft:!1},prevItem:{title:"\ud83d\udd0e How much salary do developers earn?",permalink:"/30daysof/blog/create-your-ml-models"},nextItem:{title:"\ud83d\udcc8 Hello, 30DaysOf Data Analytics!",permalink:"/30daysof/blog/hello-data-analytics"}},s={authorsImageUrls:[void 0]},c=[{value:"Where to find us",id:"where-to-find-us",level:2},{value:"Curating your Data Science Portfolio",id:"curating-your-data-science-portfolio",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Week 4: self-study resources",id:"week-4-self-study-resources",level:2},{value:"Register for Week 4 Live Sessions",id:"register-for-week-4-live-sessions",level:2}],m={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/30daysof/docs/roadmaps/data-science"}),(0,n.kt)("meta",{name:"twitter:title",content:"30DaysOfDataScience-deploy-your ML-models"}),(0,n.kt)("meta",{name:"twitter:description",content:"Our goal is to guide you through understanding data and using the knowledge to make decisions such as fraud detection, customer segmentation and product pricing."}),(0,n.kt)("meta",{name:"twitter:image",content:"/img/twitter.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@bethanyjep"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://aka.ms/http://aka.ms/30DaysDataScience"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"header",src:a(3874).Z,width:"999",height:"562"})),(0,n.kt)("h2",{id:"where-to-find-us"},"Where to find us"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/blog"},"Blog")," - subscribe to the ",(0,n.kt)("a",{parentName:"li",href:"/blog/rss.xml"},"feed")," for announcements & updates"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/roadmaps/data-science"},"Roadmap")," - Our 30 Day schedule"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-Discuss"},"Discussions")," - ask questions, interact with peers, show-and-tell!")),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"machine-learning"},"Machine Learning"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SRr0tlUJjcw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Clustering models:")," they help you make sense of chaos and is part of unsupervised learning. In a professional setting, clustering can be used to determine things like market segmentation, determining what age groups buy what items, for example."),(0,n.kt)("h2",{id:"curating-your-data-science-portfolio"},"Curating your Data Science Portfolio"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/i6ejjNh-Enw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"> In this week, we will finalize on Machine Learning, learn how we can curate our portfolio and you get to work on your own capstone project.",(0,n.kt)("p",null,"Do you have any questions for the panel? Share them with us ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/30daysof/discussions/144"},"here")),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pulse Check",src:a(5134).Z,width:"5760",height:"3240"})),(0,n.kt)("p",null,"We always want to hear from you! How is your learning going? Is there any thing we need to change? ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/pulse-30DS"},"Share with us!")),(0,n.kt)("h2",{id:"week-4-self-study-resources"},"Week 4: self-study resources"),(0,n.kt)("admonition",{title:"WEEK 4 RESOURCES",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"November 7: ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30DL-Clustering"},"Unsupervised machine learning: clustering")," - ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/train-evaluate-cluster-models/?WT.mc_id=cloudskillschallenge_75cb74c9-2fa0-4ec0-93cd-0a696314c362&ns-enrollment-type=Collection&ns-enrollment-id=0168b62oz2k2"},"Learn Module")),(0,n.kt)("li",{parentName:"ul"},"November 8: ",(0,n.kt)("a",{parentName:"li",href:"https://www.kaggle.com/datasets/vetrirah/customer/download?datasetVersionNumber=1"},"Building a Customer Segmentation Model.")," | ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-session7"},"Live Session")),(0,n.kt)("li",{parentName:"ul"},"November 9: ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30DL-MLSumProject"},"Deploying computer vision models with Custom Vision AI")),(0,n.kt)("li",{parentName:"ul"},"November 10: ",(0,n.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/reactor/events/17381/?WT.mc_id=academic-78742-bethanycheum"},"Curating your Data Science Portfolio")," "),(0,n.kt)("li",{parentName:"ul"},"November 11 - 17: Build an end to end Data Science project: recommender system!"))),(0,n.kt)("h2",{id:"register-for-week-4-live-sessions"},"Register for Week 4 Live Sessions"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SRr0tlUJjcw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Time"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Session Title"),(0,n.kt)("th",{parentName:"tr",align:"left"},"RSVP"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Live Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1 November"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4pm GMT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Build a customer segmentation model - clustering"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17379/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://aka.ms/30DS-session7"},"LIVE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3 November"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1pm GMT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Curate your Data Science Portfolio"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17381/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://aka.ms/30DS-session8"},"LIVE"))))),(0,n.kt)("admonition",{title:"Let's Go - Week 4 \ud83c\udf89",type:"success"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"If you are yet to ",(0,n.kt)("strong",{parentName:"li"},"Join the Challenge Today:")," Don't be left behind in the learning, this ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-challenge"},"Cloud Skills Challenge")," contains modules that will give you skills to successfully get started with Python and Azure.\n",(0,n.kt)("img",{alt:"Cloud Skills Challenge",src:a(8598).Z,width:"999",height:"222"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Share what you are learning with fellow learners:")," Learning alone can be daunting. Using GitHub discussions, we have made it easy for you to interact and learn with fellow particants. ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-Discuss"},"Drop in and say Hi!"),"  "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Keep Learning!")))))}p.isMDXComponent=!0},8598:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CSC-30DS-8a6d1dc3319dca8dc7ba03daa1e54813.png"},5134:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulse check-27423dc8712b6a224f26bc41b557b072.png"},3874:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/roadmap-92d474643d91ecba2dd82c1077888c3d.png"}}]);