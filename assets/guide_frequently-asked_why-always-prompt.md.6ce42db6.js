import{_ as i,o as l,c as e,a as o}from"./app.23442468.js";const u=JSON.parse('{"title":"\u4E3A\u4EC0\u4E48\u603B\u662F\u5F39\u51FA\u5DF2\u7ECF\u4E0B\u8F7D\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"bilibili.repo","slug":"bilibili-repo","link":"#bilibili-repo","children":[]},{"level":2,"title":"bilibili.repo.save","slug":"bilibili-repo-save","link":"#bilibili-repo-save","children":[]},{"level":2,"title":"bilibili.repo.definitionStrictMode","slug":"bilibili-repo-definitionstrictmode","link":"#bilibili-repo-definitionstrictmode","children":[]},{"level":2,"title":"bilibili.alert.isAlertIfDownloded","slug":"bilibili-alert-isalertifdownloded","link":"#bilibili-alert-isalertifdownloded","children":[]},{"level":2,"title":"bilibili.alert.maxAlertPrompt","slug":"bilibili-alert-maxalertprompt","link":"#bilibili-alert-maxalertprompt","children":[]}],"relativePath":"guide/frequently-asked/why-always-prompt.md","lastUpdated":1701402509000}'),d={name:"guide/frequently-asked/why-always-prompt.md"},r=o('<h1 id="\u4E3A\u4EC0\u4E48\u603B\u662F\u5F39\u51FA\u5DF2\u7ECF\u4E0B\u8F7D\uFF1F" tabindex="-1">\u4E3A\u4EC0\u4E48\u603B\u662F\u5F39\u51FA\u5DF2\u7ECF\u4E0B\u8F7D\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u603B\u662F\u5F39\u51FA\u5DF2\u7ECF\u4E0B\u8F7D\uFF1F" aria-hidden="true">#</a></h1><p>\u65B9\u6CD50\uFF1A</p><ul><li>\u53F3\u4E0A\u89D2\u83DC\u5355 -&gt; <code>\u914D\u7F6E</code> -&gt; <code>\u4E0B\u8F7D\u524D\u5148\u67E5\u8BE2\u8BB0\u5F55\uFF1F</code></li><li>\u9009\u62E9<code>\u4E0D\u67E5\u8BE2</code>\uFF08\u4EC5\u5728\u672C\u6B21\u7A0B\u5E8F\u8FD0\u884C\u751F\u6548\uFF09</li></ul><p>\u65B9\u6CD51\uFF1A</p><ul><li>\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00<code>config/repo.config</code></li><li>\u5220\u9664\u63D0\u793A\u5DF2\u7ECF\u4E0B\u8F7D\u7684\u8BB0\u5F55</li></ul><p>\u65B9\u6CD52\uFF1A</p><ul><li><p>\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00<code>config/app.config</code></p></li><li><p>\u627E\u5230<code>bilibili.repo</code>\u548C<code>bilibili.alert.isAlertIfDownloded</code>\uFF0C\u914C\u60C5\u4FEE\u6539\u5B83\u4EEC\u7684\u503C</p></li></ul><h2 id="bilibili-repo" tabindex="-1">bilibili.repo <a class="header-anchor" href="#bilibili-repo" aria-hidden="true">#</a></h2><ul><li>\u53D6\u503C\u8303\u56F4: <code>on | off</code></li><li>\u9ED8\u8BA4\u503C: <code>on</code></li><li>\u91CA\u4E49: <ul><li>\u5F53\u503C\u4E3A<code>on</code>\u65F6, \u6BCF\u6B21\u4E0B\u8F7D\u524D\u90FD\u4F1A\u5148\u4ECE\u4ED3\u5E93\u67E5\u8BE2\u8BB0\u5F55\u3002 \u82E5\u5B58\u5728\uFF0C\u5219\u4E0D\u5F00\u59CB\u4EFB\u52A1</li><li>\u5F53\u503C\u4E3A<code>off</code>\u65F6, \u6BCF\u6B21\u76F4\u63A5\u4E0B\u8F7D</li></ul></li></ul><h2 id="bilibili-repo-save" tabindex="-1">bilibili.repo.save <a class="header-anchor" href="#bilibili-repo-save" aria-hidden="true">#</a></h2><ul><li>\u53D6\u503C\u8303\u56F4: <code>on | off</code></li><li>\u9ED8\u8BA4\u503C: <code>on</code></li><li>\u91CA\u4E49: <ul><li>\u5F53\u503C\u4E3A<code>on</code>\u65F6, \u5373\u4F7F\u4ED3\u5E93\u529F\u80FD\u5173\u95ED\uFF0C\u4ECD\u4FDD\u5B58\u4E0B\u8F7D\u6210\u529F\u7684\u8BB0\u5F55</li><li>\u5F53\u503C\u4E3A<code>off</code>\u65F6, \u5728\u4ED3\u5E93\u529F\u80FD\u5173\u95ED\u65F6\uFF0C\u4E0D\u518D\u4FDD\u5B58\u4E0B\u8F7D\u6210\u529F\u7684\u8BB0\u5F55</li></ul></li></ul><h2 id="bilibili-repo-definitionstrictmode" tabindex="-1">bilibili.repo.definitionStrictMode <a class="header-anchor" href="#bilibili-repo-definitionstrictmode" aria-hidden="true">#</a></h2><ul><li>\u53D6\u503C\u8303\u56F4: <code>on | off</code></li><li>\u9ED8\u8BA4\u503C: <code>off</code></li><li>\u91CA\u4E49: <ul><li>\u5F53\u503C\u4E3A<code>on</code>\u65F6, \u540C\u4E00\u89C6\u9891\u4E24\u79CD\u6E05\u6670\u5EA6\u7B97\u4E0D\u540C\u8BB0\u5F55</li><li>\u5F53\u503C\u4E3A<code>off</code>\u65F6, \u540C\u4E00\u89C6\u9891\u4E24\u79CD\u6E05\u6670\u5EA6\u7B97\u76F8\u540C\u8BB0\u5F55</li></ul></li></ul><h2 id="bilibili-alert-isalertifdownloded" tabindex="-1">bilibili.alert.isAlertIfDownloded <a class="header-anchor" href="#bilibili-alert-isalertifdownloded" aria-hidden="true">#</a></h2><ul><li>\u53D6\u503C\u8303\u56F4: <code>true | false</code></li><li>\u9ED8\u8BA4\u503C: <code>true</code></li><li>\u91CA\u4E49: <ul><li>\u5F53\u503C\u4E3A<code>true</code>\u65F6, \u5728<code>bilibili.repo=on</code>\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0B\u8F7D\u5DF2\u5B8C\u6210\u7684\u89C6\u9891\u65F6\uFF0C\u5F39\u51FA\u63D0\u793A</li><li>\u5F53\u503C\u4E3A<code>false</code>\u65F6, \u4E0B\u8F7D\u5DF2\u5B8C\u6210\u7684\u89C6\u9891\u65F6\uFF0C\u59CB\u7EC8\u4E0D\u5F39\u51FA\u63D0\u793A</li></ul></li></ul><h2 id="bilibili-alert-maxalertprompt" tabindex="-1">bilibili.alert.maxAlertPrompt <a class="header-anchor" href="#bilibili-alert-maxalertprompt" aria-hidden="true">#</a></h2><ul><li>\u53D6\u503C\u8303\u56F4: \u6570\u5B57</li><li>\u9ED8\u8BA4\u503C: <code>5</code></li><li>\u91CA\u4E49:<br> \u6279\u91CF\u4E0B\u8F7D\u65F6\uFF0C\u6700\u5927\u63D0\u793A\u6846\u5F39\u51FA\u6570</li></ul>',17),a=[r];function t(c,n,b,s,p,h){return l(),e("div",null,a)}const m=i(d,[["render",t]]);export{u as __pageData,m as default};
