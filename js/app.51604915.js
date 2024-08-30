(function(){"use strict";var e={8246:function(e,t,r){var o=r(5130),a=r(6768);const n={id:"app"};function s(e,t,r,o,s,i){const l=(0,a.g2)("Navbar"),u=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",n,[(0,a.bF)(l),(0,a.bF)(u)])}var i=r(4232);function l(e,t,r,o,n,s){const l=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("nav",{class:(0,i.C4)(n.$style.nav)},[(0,a.Lk)("ul",{class:(0,i.C4)(n.$style.ul)},[(0,a.Lk)("li",{class:(0,i.C4)([n.$style.li,n.$style.homeLink])},[(0,a.bF)(l,{class:(0,i.C4)(n.$style.a),to:"/"},{default:(0,a.k6)((()=>[(0,a.eW)("Home")])),_:1},8,["class"])],2),(0,a.Lk)("li",{class:(0,i.C4)(n.$style.li)},[(0,a.bF)(l,{class:(0,i.C4)(n.$style.a),to:"/about"},{default:(0,a.k6)((()=>[(0,a.eW)("About")])),_:1},8,["class"])],2),(0,a.Lk)("li",{class:(0,i.C4)(n.$style.li)},[(0,a.bF)(l,{class:(0,i.C4)(n.$style.a),to:"/gitRepo"},{default:(0,a.k6)((()=>[(0,a.eW)("GitHub Repositories")])),_:1},8,["class"])],2),(0,a.Lk)("li",{class:(0,i.C4)(n.$style.li)},[(0,a.bF)(l,{class:(0,i.C4)(n.$style.a),to:"/createRepo"},{default:(0,a.k6)((()=>[(0,a.eW)("Create New Repo")])),_:1},8,["class"])],2)],2)],2)}var u={li:"j4s0uhpWrgMFcRdHY7tQ",active:"zOIiw1oPTgGSCIFsgUSn",homeLink:"DhHmDNmGLgbmACS4_HTo",nav:"jybI7CrntLwwTAJqHYcx",ul:"Vi9foweksqQyHnnGtNIo",a:"sIxa7ylxDNEDsDvwF9gG"},c={name:"NavBar",data(){return{$style:u}}},p=r(1241);const d=(0,p.A)(c,[["render",l]]);var g=d,h={components:{Navbar:g}};const f=(0,p.A)(h,[["render",s]]);var v=f,y=r(1387);const m=e=>((0,a.Qi)("data-v-0f4d976a"),e=e(),(0,a.jt)(),e),b=m((()=>(0,a.Lk)("h2",null,"My GitHub Repositories",-1))),C={key:0},k={key:1},P=["href"],L={key:2,class:"error"};function R(e,t,r,n,s,l){const u=(0,a.g2)("PaginationComponent");return(0,a.uX)(),(0,a.CE)("div",null,[b,(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.searchTerm=e),placeholder:"Search Repositories...",onInput:t[1]||(t[1]=(...e)=>l.debouncedFilterRepositories&&l.debouncedFilterRepositories(...e))},null,544),[[o.Jo,s.searchTerm]]),(0,a.bF)(u,{currentPage:s.currentPage,totalPages:s.totalPages,hasMorePages:s.hasMorePages,onChangePage:l.handlePageChange},null,8,["currentPage","totalPages","hasMorePages","onChangePage"]),s.loading?((0,a.uX)(),(0,a.CE)("div",C,"Loading repositories...")):(0,a.Q3)("",!0),s.loading||s.error?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("ul",k,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.filteredRepos,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e.id},[(0,a.Lk)("a",{href:e.html_url,target:"_blank"},(0,i.v_)(e.name),9,P)])))),128))])),s.error?((0,a.uX)(),(0,a.CE)("div",L,(0,i.v_)(s.error),1)):(0,a.Q3)("",!0)])}var _=r(4373),w=r(896),E=r.n(w);const M={class:"pagination-controls"},A=["disabled"],S=["disabled"];function $(e,t,r,o,n,s){return(0,a.uX)(),(0,a.CE)("div",M,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>s.prevPage&&s.prevPage(...e)),disabled:r.currentPage<=1},"Previous",8,A),(0,a.Lk)("span",null,"Page "+(0,i.v_)(r.currentPage)+" of "+(0,i.v_)(r.totalPages),1),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>s.nextPage&&s.nextPage(...e)),disabled:!r.hasMorePages},"Next",8,S)])}var O={name:"paginationComponent",props:{currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0},hasMorePages:{type:Boolean,required:!0}},methods:{prevPage(){this.$emit("change-page",this.currentPage-1)},nextPage(){this.$emit("change-page",this.currentPage+1)}}};const N=(0,p.A)(O,[["render",$],["__scopeId","data-v-69567ed0"]]);var F=N,j={components:{PaginationComponent:F},data(){return{repos:[],filteredRepos:[],searchTerm:"",loading:!0,error:null,currentPage:1,perPage:10,totalPages:1,hasMorePages:!0}},created(){this.fetchRepositories()},methods:{async fetchRepositories(){this.loading=!0,this.error=null;const e="nofisat2023",t=this.currentPage;try{const r=await _.A.get(`https://api.github.com/users/${e}/repos`,{params:{page:t,per_page:this.perPage},headers:{Accept:"application/vnd.github.v3+json"}});this.repos=r.data,this.filteredRepos=this.repos,this.totalPages=Math.ceil(r.data.length/this.perPage),this.hasMorePages=this.currentPage<this.totalPages}catch(r){this.error="Failed to load repositories",console.error(r)}finally{this.loading=!1}},filterRepositories(){const e=this.searchTerm.toLowerCase();this.filteredRepos=this.repos.filter((t=>t.name.toLowerCase().includes(e)))},debouncedFilterRepositories:E()((function(){this.filterRepositories()}),300),handlePageChange(e){this.currentPage=e,this.fetchRepositories()}}};const x=(0,p.A)(j,[["render",R],["__scopeId","data-v-0f4d976a"]]);var X=x;const H=e=>((0,a.Qi)("data-v-495acf07"),e=e(),(0,a.jt)(),e),T=H((()=>(0,a.Lk)("h1",null,"About Us",-1))),I=H((()=>(0,a.Lk)("p",null,"This is the about page.",-1))),G=[T,I];function Q(e,t,r,o,n,s){return(0,a.uX)(),(0,a.CE)("div",null,G)}var W={name:"AboutComponent"};const q=(0,p.A)(W,[["render",Q],["__scopeId","data-v-495acf07"]]);var D=q;const U=(0,a.Lk)("h1",null,"Welcome to SCISSORS",-1),V=(0,a.Lk)("p",null,"Your ultimate tool for managing GitHub repositories efficiently. Whether you’re searching, creating, or analyzing your repositories, SCISSORS provides a seamless and powerful interface to enhance your productivity.",-1),Y=(0,a.Lk)("p",null,"Explore our features:",-1),z=(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,"Search and filter your GitHub repositories"),(0,a.Lk)("li",null,"Create new repositories effortlessly"),(0,a.Lk)("li",null,"View detailed repository information"),(0,a.Lk)("li",null,"Access comprehensive analytics")],-1),J=(0,a.Lk)("p",null,"Get started now and make the most out of your GitHub experience!",-1),B=[U,V,Y,z,J];function K(e,t,r,o,n,s){return(0,a.uX)(),(0,a.CE)("div",{class:(0,i.C4)(n.$style.container)},[(0,a.Lk)("div",{class:(0,i.C4)(n.$style.note)},B,2)],2)}var Z={},ee={name:"HomeComponent",data(){return{$style:Z}}};const te=(0,p.A)(ee,[["render",K]]);var re=te;const oe=(0,a.Lk)("h2",null,"Create a New GitHub Repository",-1),ae=(0,a.Lk)("button",{type:"submit",class:"button"},"Create Repository",-1),ne={key:0},se={key:1,class:"success"},ie={key:2,class:"error"};function le(e,t,r,n,s,l){return(0,a.uX)(),(0,a.CE)("div",null,[oe,(0,a.Lk)("form",{onSubmit:t[1]||(t[1]=(0,o.D$)(((...e)=>l.createRepository&&l.createRepository(...e)),["prevent"]))},[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.repoName=e),placeholder:"Enter repository name",required:""},null,512),[[o.Jo,s.repoName]]),ae],32),s.loading?((0,a.uX)(),(0,a.CE)("div",ne,"Creating repository...")):(0,a.Q3)("",!0),s.successMessage?((0,a.uX)(),(0,a.CE)("div",se,(0,i.v_)(s.successMessage),1)):(0,a.Q3)("",!0),s.errorMessage?((0,a.uX)(),(0,a.CE)("div",ie,(0,i.v_)(s.errorMessage),1)):(0,a.Q3)("",!0)])}var ue={data(){return{repoName:"",loading:!1,successMessage:"",errorMessage:""}},methods:{async createRepository(){this.loading=!0,this.successMessage="",this.errorMessage="";const e="YOUR_PERSONAL_ACCESS_TOKEN";try{const t=await _.A.post("https://api.github.com/user/repos",{name:this.repoName},{headers:{Authorization:`token ${e}`,Accept:"application/vnd.github.v3+json"}});this.successMessage=`Repository "${t.data.name}" created successfully!`,this.repoName=""}catch(t){this.errorMessage="Failed to create repository. Please try again.",console.error(t)}finally{this.loading=!1}}}};const ce=(0,p.A)(ue,[["render",le]]);var pe=ce;const de=[{path:"/",name:"Home",component:re},{path:"/about",name:"About",component:D},{path:"/gitRepo",name:"gitRepo",component:X},{path:"/createRepo",name:"createRepo",component:pe}],ge=(0,y.aE)({history:(0,y.LA)(),routes:de});var he=ge;(0,o.Ef)(v).use(he).mount("#app")}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,o,a,n){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],n=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(r.O).every((function(e){return r.O[e](o[l])}))?o.splice(l--,1):(i=!1,n<s&&(s=n));if(i){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,a,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,n,s=o[0],i=o[1],l=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var c=l(r)}for(t&&t(o);u<s.length;u++)n=s[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},o=self["webpackChunkmy_vue_project"]=self["webpackChunkmy_vue_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(8246)}));o=r.O(o)})();
//# sourceMappingURL=app.51604915.js.map