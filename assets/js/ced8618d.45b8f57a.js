"use strict";(self.webpackChunkpudding_bot_docs=self.webpackChunkpudding_bot_docs||[]).push([[317],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9870:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={slug:"why-not-cerberus",title:"Cerberus Considered Harmful",authors:["happy-ferret"],tags:["telegram","cerberus"]},l=void 0,u={permalink:"/blog/why-not-cerberus",editUrl:"https://github.com/PuddingBot/pudding-bot-docs/tree/master/blog/2022-01-23-Why-not-Cerberus/index.md",source:"@site/blog/2022-01-23-Why-not-Cerberus/index.md",title:"Cerberus Considered Harmful",description:"The following blog post outlines some of the reasons I generally advise against choosing Cerberus as your Telegram group management bot.",date:"2022-01-23T00:00:00.000Z",formattedDate:"January 23, 2022",tags:[{label:"telegram",permalink:"/blog/tags/telegram"},{label:"cerberus",permalink:"/blog/tags/cerberus"}],readingTime:4.405,truncated:!0,authors:[{name:'Mark "Happy-Ferret" Bauermeister',title:"Father of @PuddingBot",url:"https://github.com/happy-ferret",imageURL:"https://github.com/happy-ferret.png",key:"happy-ferret"}],nextItem:{title:"Coming Soon",permalink:"/blog/coming-soon"}},p={authorsImageUrls:[void 0]},d=[{value:"Trust",id:"trust",children:[],level:3},{value:"Incomplete documentation",id:"incomplete-documentation",children:[],level:3},{value:"Architectural choices",id:"architectural-choices",children:[],level:3},{value:"Uncertain status",id:"uncertain-status",children:[],level:3},{value:"Closed source",id:"closed-source",children:[],level:3}],c={toc:d};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following blog post outlines some of the reasons I generally advise against choosing ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/cerberus_protection_bot"},"Cerberus")," as your Telegram group management bot."),(0,a.kt)("p",null,"This article is based on version ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"0.3.0"))," of ",(0,a.kt)("em",{parentName:"p"},"Cerberus Protection Bot"),"."),(0,a.kt)("h3",{id:"trust"},"Trust"),(0,a.kt)("p",null,"The Cerberus maintainer is a rather sketchy figure. ",(0,a.kt)("br",null),"\nNot only does he refuse any type of code audit, he has also previously been caught attempting to subvert a rival Telegram group (oh the joys of ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki//pol/"},(0,a.kt)("strong",{parentName:"a"},"/pol/"))," Telegram clones) by trying to pit their admins against each other and slowly banning users from these groups. A practice generally known as ",(0,a.kt)("strong",{parentName:"p"},"nuking"),"."),(0,a.kt)("p",null,"Since the development process is entirely closed and everything happens in private ",(0,a.kt)("br",null)," (as opposed to ",(0,a.kt)("a",{parentName:"p",href:"https://missrose.org/"},"Rose"),", which is closed source but has a documented development process, a ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/s/MarieNews"},"changelog")," and a ",(0,a.kt)("a",{parentName:"p",href:"https://pnvlarsen.me/projects/"},"blog"),"), nobody but its sole developer can be sure what direction is being taken, what design principles are being followed, redefined or outright ignored, or if any exploits are known."),(0,a.kt)("p",null,"Furthermore, I've personally witnessed the author of Cerberus write FROM his bot.",(0,a.kt)("br",null),"\nThis is not well known \u2014 nor communicated, for obvious reasons \u2014 but possible through the use of a 3rd party Telegram client like ",(0,a.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=org.telegram.BifToGram&hl=en&gl=US"},"BGram"),".",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"(link provided solely for research purposes. I do NOT endorse the use of this product.)")),(0,a.kt)("p",null,"Lastly, his general attitude towards end users means that anybody using Cerberus is left to their own devices.",(0,a.kt)("br",null),"\nNo public support channels exist, and the documentation itself is rather sparse, technical and geared towards programmers rather\nthan the average Joe."),(0,a.kt)("p",null,"The bot is linking to the author's personal Telegram channel, which provides no valuable insights but instead promotes his Omegle."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Screenshot"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Omegle",src:n(2028).Z}))),(0,a.kt)("h3",{id:"incomplete-documentation"},"Incomplete documentation"),(0,a.kt)("p",null,"As already outlined in the previous paragraph, Cerberus' documentation is overall shoddy and incomplete."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"/help")," commands (there are several, since the author has chosen to separate them based on user scope) display a long, monotone list.",(0,a.kt)("br",null),"\nThere is no way to query help files for specific commands. Instead everything is presented vertically."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"/start")," command doesn't limit itself to the bare essentials of using and exploring the bot, instead bludgeoning the user with a wall of text."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"/ownerhelp")," command doesn't appear to work, at all. ",(0,a.kt)("br",null),"\nNeither in groups nor direct DMs to the bot have I nor others ever managed to coax the bot into returning any information."),(0,a.kt)("p",null,"Documentation for some of the more useful commands is wholly missing.",(0,a.kt)("br",null),"\nThe bot supports ",(0,a.kt)("em",{parentName:"p"},"ads")," which are displayed every n-hours.",(0,a.kt)("br",null),"\nAside of the developer himself, nobody seems to be aware of its usage.",(0,a.kt)("br",null),"\nMaybe there is no command and the ads are entered directly into a database\nby the sole maintainer?"),(0,a.kt)("p",null,"The UI is cluttered and doesn't take advantage of basic Telegram bot features. ",(0,a.kt)("br",null),"\nInline buttons are wholly missing and a (very basic) command list was only added after my outspoken criticism."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"/start"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"/start",src:n(6665).Z}))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"/help"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"/help",src:n(9036).Z}))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"/modhelp"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"/modhelp",src:n(8805).Z}))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"/smodhelp"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"/smodhelp",src:n(9314).Z}))),(0,a.kt)("h3",{id:"architectural-choices"},"Architectural choices"),(0,a.kt)("p",null,"One of the things (the author of Cerberus names this as one of its outstanding features) that separates the bot from its contenders\nis that it doesn't follow the tried and proved Telegram permission model, instead opting for an internal permission model of the author's own design."),(0,a.kt)("p",null,"The sparse documentation prompts the group owner to give Cerberus full permission and only promote other admins through Cerberus' ",(0,a.kt)("strong",{parentName:"p"},"/promote")," and ",(0,a.kt)("strong",{parentName:"p"},"/superpromote")," commands.",(0,a.kt)("br",null),"\nOn closer examination, this leads to all admin permissions being managed internally by Cerberus."),(0,a.kt)("p",null,"As far as Telegram is concerned, ",(0,a.kt)("br",null),'\nall admins promoted by Cerberus (admins or "superadmins" \u2014 as Cerberus defines admins that can demote and, consequently, ban other admins) have the same two basic permissions set in the Telegram UI. "Change group info" and "Pin messages". ',(0,a.kt)("br",null),"\nIt is thus clear that Cerberus violates the existing permission model and instead opts to implement its own, largely undocumented, cruft."),(0,a.kt)("p",null,"With the aforementioned in mind, I've also been informed by multiple sources that they're unable to remove group members that are not even clearly identified as admins."),(0,a.kt)("h3",{id:"uncertain-status"},"Uncertain status"),(0,a.kt)("p",null,"The author of Cerberus failed to enclose what stage of the software development life cycle his bot is actually in.",(0,a.kt)("br",null),"\nNothing suggests that the bot is production ready, but nothing suggests that it's still in alpha or beta either."),(0,a.kt)("p",null,"Features are added in secret, at random intervals. Often without even incrementing the version number.\nThe bot is taken offline for maintenance or due to an issue without prior notice."),(0,a.kt)("p",null,"Combined with the lack of support, this leaves the user wondering whether Cerberus has not already reached\nEnd-of-life or, at best, a maintenance stage."),(0,a.kt)("h3",{id:"closed-source"},"Closed source"),(0,a.kt)("p",null,"As a major proponent of ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Free_and_open-source_software"},"FOSS")," software,",(0,a.kt)("br",null)," I generally advise against the use of closed source or proprietary software products."),(0,a.kt)("p",null,"Closed source software, especially when produced by a small group of people or a single developer, seldom provides a coherent support experience.",(0,a.kt)("br",null),"\nOne of the strengths of free- and open-source software lies in its inherent capability to create communities and produce coherent documentation and other forms of community service."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://t.me/puddingbot"},"@PuddingBot")," is and will remain completely free (as in freedom AND free beer) and open-source.",(0,a.kt)("br",null),"\nAs the author and maintainer of @PuddingBot I pledge to keep sensible data safe and handled with utmost care."),(0,a.kt)("p",null,"The full and unabridged ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PuddingBot/pudding-bot"},"@PuddingBot source code can be found on GitHub"),"."))}m.isMDXComponent=!0},2028:function(e,t,n){t.Z=n.p+"assets/images/cerberus-91bff56c27ddade6623a9ee9d3f2ed47.png"},6665:function(e,t,n){t.Z=n.p+"assets/images/cerberus2-fd906ae7ea33de5674df673cfbf06c0c.png"},9036:function(e,t,n){t.Z=n.p+"assets/images/cerberus3-9eaefd888fbf915b0da319a6ed107245.png"},8805:function(e,t,n){t.Z=n.p+"assets/images/cerberus4-374d29026fbaf82347f510e7fcf91af6.png"},9314:function(e,t,n){t.Z=n.p+"assets/images/cerberus5-08114636ef382e4bc8e55a02e64ff606.png"}}]);