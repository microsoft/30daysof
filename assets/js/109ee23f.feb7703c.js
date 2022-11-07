"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[822],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},864:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const i={sidebar_position:5,title:"\ud83d\udd0e Data Science"},o=void 0,l={unversionedId:"roadmaps/data-science",id:"roadmaps/data-science",title:"\ud83d\udd0e Data Science",description:"Banner Placeholder",source:"@site/docs/roadmaps/05-data-science.md",sourceDirName:"roadmaps",slug:"/roadmaps/data-science",permalink:"/30daysof/docs/roadmaps/data-science",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\ud83d\udd0e Data Science"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0c Fusion - Connectors",permalink:"/30daysof/docs/roadmaps/fusion"},next:{title:"\ud83d\udcc8 Data Analytics",permalink:"/30daysof/docs/roadmaps/data-analytics"}},s={},c=[{value:"Kickoff",id:"kickoff",level:2},{value:"Week 1: Getting Started with Python",id:"week-1-getting-started-with-python",level:2},{value:"Week 2: Data Preparation and Visualization",id:"week-2-data-preparation-and-visualization",level:2},{value:"Week 3: Getting Started in Machine Learning",id:"week-3-getting-started-in-machine-learning",level:2},{value:"Week 4: Building your Data Science Projects",id:"week-4-building-your-data-science-projects",level:2},{value:"Capstone Project: Building a recommender System",id:"capstone-project-building-a-recommender-system",level:2}],m={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Banner Placeholder",src:a(4525).Z,width:"1600",height:"672"})," "),(0,r.kt)("h1",{id:"roadmap"},"Roadmap"),(0,r.kt)("admonition",{title:"#30DaysOf - Data Science",type:"success"},(0,r.kt)("p",{parentName:"admonition"},"This 30Days Skilling content provides a guided tour of Data Science and Machine Learning in Python and Azure in four themed weeks."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"#kickoff"},"'Kickoff'")," section for more details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-Discuss"},"Discussions")," - ask questions, interact with peers, show-and-tell!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Join the Challenge Today:")," the ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-challenge"},"Cloud Skills Challenge")," contains modules that will give you skills to successfully get started with Python and Azure."),(0,r.kt)("li",{parentName:"ul"},"Explore the linked resources each week to skill up!"))),(0,r.kt)("h2",{id:"kickoff"},"Kickoff"),(0,r.kt)("p",null,"In the #30DaysOfDataScience we will go from understanding the Python language to working with real life data and finally creating Machine Learning models both on Azure and in Python. The main role is understanding our data and using the knowledge to make decisions such as clustering Nigerian music based on their 'danceability' score, 'acousticness', loudness, 'speechiness', popularity and energy."),(0,r.kt)("h2",{id:"week-1-getting-started-with-python"},"Week 1: Getting Started with Python"),(0,r.kt)("p",null,"Python is one of the main programming languages used in Data Science. A major advantage of the language is its abundance of libraries which enable you to analyze your data with ease."),(0,r.kt)("admonition",{title:"WEEK 1 RESOURCES",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"October 17: ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/6pMvovj7KbE"},"Setting up your local environment")),(0,r.kt)("li",{parentName:"ul"},"October 18: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/py4beginners"},"Python basics: operators | data types")),(0,r.kt)("li",{parentName:"ul"},"October 19: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/py4beginners"},"Python basics: loops | dictionaries")),(0,r.kt)("li",{parentName:"ul"},"October 20: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/py4beginners"},"Python basics: functions")),(0,r.kt)("li",{parentName:"ul"},"October 21: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-session2"},"Build a Rock Paper Scissors Game")),(0,r.kt)("li",{parentName:"ul"},"October 22: ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/Zxs1eK2acLk"},"Move your project from Visual Studio to Github")),(0,r.kt)("li",{parentName:"ul"},"October 23: Catch up and reflect with the week's learning."))),(0,r.kt)("h2",{id:"week-2-data-preparation-and-visualization"},"Week 2: Data Preparation and Visualization"),(0,r.kt)("p",null,"Data Science is an intersection of domain knowledge, technical expertise, and statistics. It gives us the power to evaluate existing data, perform various functions such as visualization and manipulation which in turn help us in decision making. "),(0,r.kt)("admonition",{title:"WEEK 2 RESOURCES",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"October 24: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/analyseData"},"Introduction to Data Science and Data Preparation")," - ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/pumpkinsDataset"},"Lesson Dataset")),(0,r.kt)("li",{parentName:"ul"},"October 25: ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/collect-manipulate-data-python-nasa/?WT.mc_id=cloudskillschallenge_75cb74c9-2fa0-4ec0-93cd-0a696314c362"},"Data cleaning and transformation techniques")," | ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-session3"},"Live Session")),(0,r.kt)("li",{parentName:"ul"},"October 26: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-viz"},"Data visualization with Matplotlib")),(0,r.kt)("li",{parentName:"ul"},"October 27: ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Data-Science-For-Beginners/#/3-Data-Visualization/README"},"Advanced Data Visualization")),(0,r.kt)("li",{parentName:"ul"},"October 28: ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Data-Science-For-Beginners/#/4-Data-Science-Lifecycle/15-analyzing/README"},"Task: Analyzing your data")," - ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/spamdataset"},"Task Dataset")),(0,r.kt)("li",{parentName:"ul"},"October 29: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DL-dscloud"},"Data Science in the Cloud")),(0,r.kt)("li",{parentName:"ul"},"October 30: ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/educator-developer-blog/setting-up-python-for-data-science-environments/ba-p/3557884?WT.mc_id=academic-76398-bethanycheum"},"Catch up and reflect with the week's learning.")))),(0,r.kt)("h2",{id:"week-3-getting-started-in-machine-learning"},"Week 3: Getting Started in Machine Learning"),(0,r.kt)("p",null,'Machine learning is often the foundation for an AI system and is the way we "teach" a computer model to make predictions and draw conclusions from data. It automates the process of pattern-discovery by finding meaningful insights from real-world or generated data.'),(0,r.kt)("admonition",{title:"WEEK 3 RESOURCES",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"October 31: ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/introduction-to-data-for-machine-learning/?WT.mc_id=cloudskillschallenge_75cb74c9-2fa0-4ec0-93cd-0a696314c362&ns-enrollment-type=Collection&ns-enrollment-id=0168b62oz2k2"},"Introduction to Machine Learning")," and ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/use-automated-machine-learning/?WT.mc_id=cloudskillschallenge_75cb74c9-2fa0-4ec0-93cd-0a696314c362&ns-enrollment-type=Collection&ns-enrollment-id=0168b62oz2k2"},"Automated Machine Learning")),(0,r.kt)("li",{parentName:"ul"},"November 1:Building a stack overflow model - ",(0,r.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/reactor/events/17377/?WT.mc_id=academic-78742-bethanycheum"},"Lesson Resources")," | ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-session5"},"Live Session")),(0,r.kt)("li",{parentName:"ul"},"November 2: ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/ML-For-Beginners/#/2-Regression/3-Linear/README"},"Building linear, logistic and polinomial models")," - ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/train-evaluate-regression-models/?WT.mc_id=cloudskillschallenge_75cb74c9-2fa0-4ec0-93cd-0a696314c362&ns-enrollment-type=Collection&ns-enrollment-id=0168b62oz2k2"},"Learn Module")),(0,r.kt)("li",{parentName:"ul"},"November 3: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DL-deploymodels"},"Deploy your Machine Learning Model using Flask Framework")," - ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DL-ufodata"},"Lesson Dataset")),(0,r.kt)("li",{parentName:"ul"},"November 4: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-session6"},"Building a Fraud Detection Model")," - ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/train-evaluate-classification-models/?WT.mc_id=cloudskillschallenge_75cb74c9-2fa0-4ec0-93cd-0a696314c362&ns-enrollment-type=Collection&ns-enrollment-id=0168b62oz2k2"},"Learn Module")),(0,r.kt)("li",{parentName:"ul"},"November 5: ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/ML-For-Beginners/#/4-Classification/README"},"Building classification models")," - ",(0,r.kt)("a",{parentName:"li",href:"https://www.kaggle.com/datasets/kartik2112/fraud-detection?select=fraudTest.csv"},"Lesson Dataset")),(0,r.kt)("li",{parentName:"ul"},"November 6: ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/educator-developer-blog/data-science-and-machine-learning-using-regression-models/ba-p/3565558?WT.mc_id=academic-76398-bethanycheum"},"Catch up and reflect with the week's learning.")))),(0,r.kt)("h2",{id:"week-4-building-your-data-science-projects"},"Week 4: Building your Data Science Projects"),(0,r.kt)("p",null,"Week four covers the remaining techniques that will help you forge ahead with your final project as well as finalizing on a few more machine learning techniques."),(0,r.kt)("admonition",{title:"WEEK 4 RESOURCES",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"November 7: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DL-Clustering"},"Unsupervised machine learning: clustering")," - ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/train-evaluate-cluster-models/?WT.mc_id=cloudskillschallenge_75cb74c9-2fa0-4ec0-93cd-0a696314c362&ns-enrollment-type=Collection&ns-enrollment-id=0168b62oz2k2"},"Learn Module")),(0,r.kt)("li",{parentName:"ul"},"November 8: ",(0,r.kt)("a",{parentName:"li",href:"https://www.kaggle.com/datasets/vetrirah/customer/download?datasetVersionNumber=1"},"Building a Customer Segmentation Model.")," | ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DS-session7"},"Live Session")),(0,r.kt)("li",{parentName:"ul"},"November 9: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DL-MLSumProject"},"Deploying computer vision models with Custom Vision AI")),(0,r.kt)("li",{parentName:"ul"},"November 10: ",(0,r.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/reactor/events/17381/?WT.mc_id=academic-78742-bethanycheum"},"Curating your Data Science Portfolio")," "),(0,r.kt)("li",{parentName:"ul"},"November 11 - 17: Build an end to end Data Science project: recommender system!"))),(0,r.kt)("h2",{id:"capstone-project-building-a-recommender-system"},"Capstone Project: Building a recommender System"),(0,r.kt)("admonition",{title:"IDEA: RECOMMENDER SYSTEM",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Data: Netflix or any other streaming platform"),(0,r.kt)("li",{parentName:"ul"},"Where to find the data: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DL-NetflixData"},"30 Days of Learning Netflix Data")),(0,r.kt)("li",{parentName:"ul"},"Need more resources to upskill: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30DL-RecommenderSys"},"Find the resources here")))),(0,r.kt)("h1",{id:"live-sessions"},"Live Sessions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Time"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Session Title"),(0,r.kt)("th",{parentName:"tr",align:"left"},"RSVP"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Live Link"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"18 October"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1pm GMT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Setting up your Local Python Environment"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17357/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aka.ms/30DaysofDataScienceLIVE"},"Watch Recording"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"20 October"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1pm GMT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Create your first program with Python"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17358/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aka.ms/30DS-session2"},"Watch Recording"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"25 October"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1pm GMT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data Wrangling and Manipulation"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17359/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aka.ms/30DS-session3"},"Watch Recording"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"27 October"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1pm GMT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data Visualization"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17376/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aka.ms/30DS-viz"},"Watch Recording"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1 November"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4pm GMT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Build a product regression model"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17377/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aka.ms/30DS-session5"},"Watch Recording"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3 November"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1pm GMT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Build a fraud detecting model - classification"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17378/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aka.ms/30DS-session6"},"LIVE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"8 November"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1pm GMT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Build a customer segmentation model - clustering"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17379/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aka.ms/30DS-session7"},"LIVE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"9 November"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1pm GMT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Curate your Data Science Portfolio"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/reactor/events/17381/?WT.mc_id=academic-78742-bethanycheum"},"RSVP")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aka.ms/30DS-session8"},"LIVE"))))))}p.isMDXComponent=!0},4525:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-science-44fa33bfc1565c0ea08a5b15463aeb6e.png"}}]);