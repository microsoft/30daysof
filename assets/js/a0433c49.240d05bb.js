"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6781],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,h=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const i={slug:"create-your-first-model",title:"\ud83d\udd0e Creating your first machine learning model.",authors:["bethany"],tags:["30DaysOfDataScience"],draft:!1},o=void 0,l={permalink:"/30daysof/blog/create-your-first-model",source:"@site/blog/data-science/2022-10-31.md",title:"\ud83d\udd0e Creating your first machine learning model.",description:"header",date:"2022-10-31T00:00:00.000Z",formattedDate:"October 31, 2022",tags:[{label:"30DaysOfDataScience",permalink:"/30daysof/blog/tags/30-days-of-data-science"}],readingTime:2.44,hasTruncateMarker:!1,authors:[{name:"Bethany Jep",title:"Cloud Advocate, Microsoft",url:"https://github.com/BethanyJep",imageURL:"https://github.com/BethanyJep.png",key:"bethany"}],frontMatter:{slug:"create-your-first-model",title:"\ud83d\udd0e Creating your first machine learning model.",authors:["bethany"],tags:["30DaysOfDataScience"],draft:!1},prevItem:{title:"\ud83d\udd0e Preparing our data for modelling.",permalink:"/30daysof/blog/prepare-data-for-modelling"},nextItem:{title:"\ud83d\udd0e How much salary do developers earn?",permalink:"/30daysof/blog/create-your-ml-models"}},s={authorsImageUrls:[void 0]},c=[{value:"Where to find us",id:"where-to-find-us",level:2},{value:"Week 3: self-study resources",id:"week-3-self-study-resources",level:2},{value:"Register and Attend Week 3 Live Sessions",id:"register-and-attend-week-3-live-sessions",level:2}],m={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/30daysof/docs/roadmaps/data-science"}),(0,r.kt)("meta",{name:"twitter:title",content:"30DaysOfDataScience-  Creating your first machine learning model."}),(0,r.kt)("meta",{name:"twitter:description",content:"Our goal is to guide you through understanding data and using the knowledge to make decisions such as fraud detection, customer segmentation and product pricing."}),(0,r.kt)("meta",{name:"twitter:image",content:"/img/twitter.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@bethanyjep"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://aka.ms/http://aka.ms/30DaysDataScience"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"header",src:a(3874).Z,width:"999",height:"562"})),(0,r.kt)("h2",{id:"where-to-find-us"},"Where to find us"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog"},"Blog")," - subscribe to the ",(0,r.kt)("a",{parentName:"li",href:"/blog/rss.xml"},"feed")," for announcements & updates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/roadmaps/data-science"},"Roadmap")," - Our 30 Day schedule"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-Discuss"},"Discussions")," - ask questions, interact with peers, show-and-tell!")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"machine-learning"},"Machine Learning"),(0,r.kt)("p",null,'Machine learning is often the foundation for an AI system and is the way we "teach" a computer model to make predictions and draw conclusions from data. It automates the process of pattern-discovery by finding meaningful insights from real-world or generated data.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Regression models:")," If you want to predict the probable height for a person of a given age, you'd use linear regression, as you're seeking a numeric value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Classification models:")," this is a form of supervised learning that bears a lot in common with regression techniques. If machine learning is all about predicting values or names to things by using datasets, then classification generally falls into two groups: binary classification and multiclass classification."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'In this week, we learn how we "teach" a computer model to make predictions and draw conclusions from data. ')),(0,r.kt)("h2",{id:"week-3-self-study-resources"},"Week 3: self-study resources"),(0,r.kt)("admonition",{title:"WEEK 3 RESOURCES",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"October 31: ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/introduction-to-data-for-machine-learning/?WT.mc_id=cloudskillschallenge_75cb74c9-2fa0-4ec0-93cd-0a696314c362&ns-enrollment-type=Collection&ns-enrollment-id=0168b62oz2k2"},"Introduction to Machine Learning")," and ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/use-automated-machine-learning/?WT.mc_id=cloudskillschallenge_75cb74c9-2fa0-4ec0-93cd-0a696314c362&ns-enrollment-type=Collection&ns-enrollment-id=0168b62oz2k2"},"Automated Machine Learning")),(0,r.kt)("li",{parentName:"ul"},"November 1:Building a stack overflow model - ",(0,r.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/reactor/events/17377/?WT.mc_id=academic-78742-bethanycheum"},"Lesson Resources")," | ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-session5"},"Live Session")),(0,r.kt)("li",{parentName:"ul"},"November 2: ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/ML-For-Beginners/#/2-Regression/3-Linear/README"},"Building linear, logistic and polinomial models")," - ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/train-evaluate-regression-models/?WT.mc_id=cloudskillschallenge_75cb74c9-2fa0-4ec0-93cd-0a696314c362&ns-enrollment-type=Collection&ns-enrollment-id=0168b62oz2k2"},"Learn Module")),(0,r.kt)("li",{parentName:"ul"},"November 3: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DL-deploymodels"},"Deploy your Machine Learning Model using Flask Framework")," - ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DL-ufodata"},"Lesson Dataset")),(0,r.kt)("li",{parentName:"ul"},"November 4: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-session6"},"Building a Fraud Detection Model")," - ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/train-evaluate-classification-models/?WT.mc_id=cloudskillschallenge_75cb74c9-2fa0-4ec0-93cd-0a696314c362&ns-enrollment-type=Collection&ns-enrollment-id=0168b62oz2k2"},"Learn Module")),(0,r.kt)("li",{parentName:"ul"},"November 5: ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/ML-For-Beginners/#/4-Classification/README"},"Building classification models")," - ",(0,r.kt)("a",{parentName:"li",href:"https://www.kaggle.com/datasets/kartik2112/fraud-detection?select=fraudTest.csv"},"Lesson Dataset")),(0,r.kt)("li",{parentName:"ul"},"November 6: ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/educator-developer-blog/data-science-and-machine-learning-using-regression-models/ba-p/3565558?WT.mc_id=academic-76398-bethanycheum"},"Catch up and reflect with the week's learning.")))),(0,r.kt)("h2",{id:"register-and-attend-week-3-live-sessions"},"Register and Attend Week 3 Live Sessions"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/8Y0RAE6N0xM",title:"Building a Product Regression Model.",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Time"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Session Title"),(0,r.kt)("th",{parentName:"tr",align:"left"},"RSVP"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Live Link"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1 November"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4pm GMT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Build a product regression model"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17377/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aka.ms/30DS-session5"},"LIVE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3 November"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1pm GMT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Build a fraud detecting model - classification"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17378/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aka.ms/30DS-session6"},"LIVE"))))),(0,r.kt)("admonition",{title:"Let's Go - Week 3 \ud83c\udf89",type:"success"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"If you are yet to ",(0,r.kt)("strong",{parentName:"li"},"Join the Challenge Today:")," Don't be left behind in the learning, this ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-challenge"},"Cloud Skills Challenge")," contains modules that will give you skills to successfully get started with Python and Azure.\n",(0,r.kt)("img",{alt:"Cloud Skills Challenge",src:a(8598).Z,width:"999",height:"222"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Share what you are learning with fellow learners:")," Learning alone can be daunting. Using GitHub discussions, we have made it easy for you to interact and learn with fellow particants. ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-Discuss"},"Drop in and say Hi!"),"  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Keep Learning!")))))}d.isMDXComponent=!0},8598:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CSC-30DS-8a6d1dc3319dca8dc7ba03daa1e54813.png"},3874:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/roadmap-92d474643d91ecba2dd82c1077888c3d.png"}}]);