import{_ as o,c as a,a1 as r,G as n,w as s,B as i,o as d,j as l}from"./chunks/framework.DKxAW9UU.js";const h="/badger-maths/images/oss.svg",y=JSON.parse(`{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Badger Maths","text":"It's One Preciser","tagline":"Precise Floating Point Maths","image":{"src":"images/badger3.svg","alt":"Badger"},"actions":[{"theme":"brand","text":"Getting Started","link":"/getting-started"},{"theme":"alt","text":"Examples","link":"/add"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1735214332000}`),p={name:"index.md"};function c(m,e,u,g,f,w){const t=i("center");return d(),a("div",null,[e[1]||(e[1]=r('<h2 id="who-ordered-this" tabindex="-1">Who Ordered This? <a class="header-anchor" href="#who-ordered-this" aria-label="Permalink to &quot;Who Ordered This?&quot;">​</a></h2><p>This library implements some basic mathematical functions that use a fixed floating point algorithm to work around the imprecision in the IEEE 754 standard which Javascript uses for floating point numbers.</p><p>For example, the expression <code>1.1 + 0.1</code> will usually return a value something like <code>1.20000000000002</code>, usually prompting the unwary developer to ask &quot;Excuse me, is this a joke?&quot;</p><p>If you use the <code>add()</code> function instead then the result will be <code>1.2</code>. It&#39;s one preciser.</p><p>For the theory behind this, see <a href="https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html" target="_blank" rel="noreferrer">https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html</a></p><p>These functions were originally adapted from the code in <a href="https://github.com/guipn/sinful.js" target="_blank" rel="noreferrer">Sinful.js</a>. They are now implemented as wrappers around <a href="https://github.com/MikeMcl/big.js/" target="_blank" rel="noreferrer">Big.js</a>.</p><h2 id="opinionated-and-selfish-software" tabindex="-1">Opinionated and Selfish Software <a class="header-anchor" href="#opinionated-and-selfish-software" aria-label="Permalink to &quot;Opinionated and Selfish Software&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING - People Who Share Their Source Code Do Not Owe You Anything!</p><p>This is OSS: <strong>Open Source Software</strong> that you can freely download, use and adapt if you want to. But here OSS also stands for <strong>Opinionated and Selfish Software</strong>.</p><p>It doesn&#39;t set out to please all the people, all the time. On the contrary, it is designed to please one person (me) most of the time. I wrote it to help me get my job done. If it helps you get your job done then great. But please don&#39;t complain if it doesn&#39;t do what you want. It&#39;s not my job to help you do your job.</p><p><a href="https://freeasinweekend.org/open-source-open-mind" target="_blank" rel="noreferrer">https://freeasinweekend.org/open-source-open-mind</a></p></div>',8)),n(t,null,{default:s(()=>e[0]||(e[0]=[l("img",{src:h,width:"150",height:"150",style:{"margin-top":"4rem"}},null,-1)])),_:1})])}const k=o(p,[["render",c]]);export{y as __pageData,k as default};