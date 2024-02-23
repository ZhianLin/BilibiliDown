import{_ as s,o as a,c as t,a as l}from"./app.dd48e181.js";const o="/BilibiliDown/img/ClickPicToGetUrl.gif",n="/BilibiliDown/img/LongClickToChangePreview.gif",e="/BilibiliDown/img/doubleClick2CopyClipInfo.gif",y=JSON.parse('{"title":"\u8865\u5145\u8BF4\u660E","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basic/additional-remarks.md","lastUpdated":1663052851000}'),c={name:"guide/basic/additional-remarks.md"},i=l('<h1 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h1><details class="details custom-block"><summary>\u5982\u4F55\u83B7\u53D6\u5C01\u9762\u94FE\u63A5</summary><p>\u5355\u51FB\u5C01\u9762\u56FE\u7247\u83B7\u53D6URL <img src="'+o+'" alt=""></p></details><details class="details custom-block"><summary>\u5982\u4F55\u66F4\u6362\u9884\u89C8\u56FE</summary><p>\u957F\u6309\u4F5C\u54C1\u6587\u5B57\uFF0C\u7136\u540E\u5BF9\u5E94\u9884\u89C8\u56FE\u4F1A\u66F4\u65B0(\u7F51\u7EDC\u539F\u56E0\u53EF\u80FD\u4F1A\u6709\u5361\u987F\uFF0C\u6B63\u5E38) <img src="'+n+'" alt=""></p></details><details class="details custom-block"><summary>\u5982\u4F55\u83B7\u53D6\u4F5C\u54C1\u4FE1\u606F</summary><p>\u53CC\u51FB\u4F5C\u54C1\u6587\u5B57\uFF0C\u7136\u540E\u6587\u672C + <code>avId</code>\u5C06\u4F1A\u590D\u5236\u5230\u526A\u8D34\u677F <img src="'+e+`" alt=""></p></details><details class="details custom-block"><summary>\u5982\u4F55\u8BBE\u7F6E\u4EE3\u7406</summary><p>\u5728<code>config/app.config</code>\u4E2D\u914D\u7F6E\u76F8\u5E94\u4EE3\u7406\u7C7B\u578B\u7684\u5730\u5740\u548C\u7AEF\u53E3\uFF0C\u5173\u952E\u8BCD<code>proxy</code></p></details><details class="details custom-block"><summary>\u5173\u4E8E\u6E05\u6670\u5EA6\u7684\u8BF4\u660E</summary><p>\u5F53\u56E0\u6743\u9650\u4E0D\u8DB3\uFF0C\u6216\u89C6\u9891\u4E0D\u5B58\u5728\u8BE5\u6E05\u6670\u5EA6\u65F6\uFF0C\u5C06\u8FD4\u56DE\u4E0D\u5927\u4E8E\u8BE5qn\u503C\u7684\u5408\u6CD5\u6700\u5927qn\u503C\u5BF9\u5E94\u7684\u6E05\u6670\u5EA6\u3002(FLV\u683C\u5F0F\u53E6\u6709\u4F8B\u5916\uFF0C\u8BF7\u770B\u4E0B\u9762\u7684\u793A\u4F8B)</p><table><thead><tr><th>\u6E05\u6670\u5EA6</th><th>qn\u503C</th></tr></thead><tbody><tr><td>8K</td><td>127</td></tr><tr><td>HDR</td><td>125</td></tr><tr><td>4K</td><td>120</td></tr><tr><td>1080P60</td><td>116</td></tr><tr><td>1080P+</td><td>112</td></tr><tr><td>1080P</td><td>80</td></tr><tr><td>720P60</td><td>74</td></tr><tr><td>720P</td><td>64</td></tr><tr><td>480P</td><td>32</td></tr><tr><td>360P</td><td>16</td></tr></tbody></table><ul><li>\u4E3E\u4F8B</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">https://www.bilibili.com/video/av39405510</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;accept_description&quot;: [&quot;\u9AD8\u6E05 1080P60&quot;, &quot;\u9AD8\u6E05 720P60&quot;, &quot;\u9AD8\u6E05 1080P&quot;, &quot;\u9AD8\u6E05 720P&quot;, &quot;\u6E05\u6670 480P&quot;, &quot;\u6D41\u7545 360P&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;accept_quality&quot;: [116, 74, 80, 64, 32, 16]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">https://www.bilibili.com/bangumi/play/ep116157/</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;accept_description&quot;: [&quot;\u9AD8\u6E05 1080P+&quot;, &quot;\u9AD8\u6E05 1080P&quot;, &quot;\u9AD8\u6E05 720P&quot;, &quot;\u6E05\u6670 480P&quot;, &quot;\u6D41\u7545 360P&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;accept_quality&quot;: [112, 80, 64, 32, 16]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>\u4E3E\u4F8B\uFF0C\u5047\u8BBE\u67D0av\u5B58\u57281080P+/1080P/720P/480P/360P\uFF0C1080P+/1080P \u9700\u8981\u5927\u4F1A\u5458\u624D\u80FD\u89C2\u770B\uFF0C720P\u9700\u8981\u767B\u5F55\u624D\u80FD\u89C2\u770B\u3002</p><ul><li>\u65E0cookie \u53D1\u8D77 <code>1080P+</code> \u8BF7\u6C42 =====&gt; \u5F97\u5230<code>480P</code>\u94FE\u63A5</li><li>\u666E\u901Acookie \u53D1\u8D77 <code>1080P+</code> \u8BF7\u6C42 =====&gt; \u5F97\u5230<code>720P</code>\u94FE\u63A5</li><li>\u5927\u4F1A\u5458cookie \u53D1\u8D77 <code>1080P+</code> \u8BF7\u6C42 =====&gt; \u5F97\u5230<code>1080P+</code>\u94FE\u63A5</li><li>\u5927\u4F1A\u5458cookie \u53D1\u8D77 <code>720P60</code> \u8BF7\u6C42 =====&gt; \u5F97\u5230<code>720P</code>\u94FE\u63A5</li></ul></li><li><p>\u4E3E\u4F8B\uFF0C\u5047\u8BBE\u67D0av\u5B58\u57284K/1080P/720P/480P/360P</p><ul><li>\u5927\u4F1A\u5458cookie \u53D1\u8D77 <code>8K</code> <strong>FLV</strong>\u8BF7\u6C42 =====&gt; \u5F97\u5230<code>1080P</code>\u94FE\u63A5</li><li>\u5927\u4F1A\u5458cookie \u53D1\u8D77 <code>8K</code> <strong>M4S</strong>\u8BF7\u6C42 =====&gt; \u5F97\u5230<code>4K</code>\u94FE\u63A5</li><li>\u5927\u4F1A\u5458cookie \u53D1\u8D77 <code>4K</code> \u8BF7\u6C42 =====&gt; \u5F97\u5230<code>4K</code>\u94FE\u63A5</li><li>\u5927\u4F1A\u5458cookie \u53D1\u8D77 <code>1080P</code> \u8BF7\u6C42 =====&gt; \u5F97\u5230<code>1080P</code>\u94FE\u63A5</li><li>\u5927\u4F1A\u5458cookie \u53D1\u8D77 <code>720P60</code> \u8BF7\u6C42 =====&gt; \u5F97\u5230<code>720P</code>\u94FE\u63A5</li></ul></li></ul></details><details class="details custom-block"><summary>\u5173\u4E8E\u4E92\u52A8\u89C6\u9891\u7684\u8BF4\u660E</summary><ul><li><p>\u4EC5\u652F\u6301\u5355\u4E2A\u4E92\u52A8\u89C6\u9891\u4E0B\u8F7D\u3002<br> \u5F53\u4ECE\u6536\u85CF\u5939/UP\u4E3B\u94FE\u63A5\u67E5\u8BE2\u65F6\uFF0C\u4EC5\u4E0B\u8F7D\u4E92\u52A8\u89C6\u9891\u7684\u9996\u7247\u6BB5\u3002</p></li><li><p>\u8F93\u5165\u4E92\u52A8\u89C6\u9891av\u53F7\u67E5\u8BE2\u65F6\uFF0C\u5C06\u4F1A\u7F57\u5217\u6240\u6709\u4E16\u754C\u7EBF\u7684\u5168\u90E8\u89C6\u9891\u7247\u6BB5\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u8FD9\u4E9B\u7247\u6BB5\u7684\u4E0B\u8F7D\u3002<br> \u7247\u6BB5title\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A<br><code>i.j-\u4E0A\u6B21\u505A\u51FA\u7684\u9009\u62E9</code><br> \u5176\u4E2D\uFF0Ci\u4E3A\u7B2Ci\u6761\u4E16\u754C\u7EBF\uFF1Bj\u4E3A\u4E16\u754C\u7EBF\u7684\u7B2Cj+1\u4E2A\u89C6\u9891</p></li><li><p>\u4E3E\u4F8B av64006660</p></li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u3010\u4E92\u52A8\u5F0F\u89C6\u9891\u3011\u53F2\u8482\u592B\u7684\u6545\u4E8B\uFF0C\u4F60\u51B3\u5B9ASteve\u7684\u547D\u8FD0\u300A\u6211\u7684\u4E16\u754C\u300B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BE5\u4E92\u52A8\u89C6\u9891\u5305\u542B5\u4E2A\u7247\u6BB5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    pn0-\u8D77\u59CB</span></span>
<span class="line"><span style="color:#A6ACCD;">    pn1-0.1-A \u9020\u4E2A\u6728\u5251\u9632\u5FA1\u602A\u7269</span></span>
<span class="line"><span style="color:#A6ACCD;">    pn2-1.1-B \u9020\u4E2A\u6728\u9550\u5F00\u59CB\u6316\u77FF_2.1-B \u9020\u4E2A\u6728\u9550\u5F00\u59CB\u6316\u77FF</span></span>
<span class="line"><span style="color:#A6ACCD;">    pn3-1.2-A \u5148\u9020\u4E2A\u5E87\u62A4\u6240</span></span>
<span class="line"><span style="color:#A6ACCD;">    pn4-2.2-B \u5148\u79CD\u6811\u518D\u9020\u623F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4EE5\u4E0A\u67093\u6761\u4E16\u754C\u7EBF\uFF0C\u89C2\u770B\u987A\u5E8F\u4E3A\uFF1A  </span></span>
<span class="line"><span style="color:#A6ACCD;">    \u4E16\u754C\u7EBF0\uFF1A pn0 -&gt; pn1</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u4E16\u754C\u7EBF1\uFF1A pn0 -&gt; pn2 -&gt; pn3</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u4E16\u754C\u7EBF2\uFF1A pn0 -&gt; pn2 -&gt; pn4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details><details class="details custom-block"><summary>\u5173\u4E8E\u5B57\u5E55\u7684\u8BF4\u660E</summary><ul><li>\u672C\u7A0B\u5E8F\u7684\u903B\u8F91\u8BA4\u4E3A\u5B57\u5E55\u662F\u4E00\u79CD\u7279\u522B\u6E05\u6670\u5EA6\u7684\u89C6\u9891\uFF0C\u800C\u57FA\u4E8E\u7A0B\u5E8F<strong>\u4E0D\u4F1A\u540C\u65F6\u4E0B\u8F7D\u540C\u4E00\u89C6\u9891\u7684\u4E0D\u540C\u6E05\u6670\u5EA6\u7684\u94FE\u63A5\u7684Feature</strong>\uFF0C <ul><li>\u5F53\u4E0B\u8F7D\u9762\u677F\u5B58\u5728\u89C6\u9891\u4EFB\u52A1\u65F6\uFF0C\u5176\u5BF9\u5E94\u7684\u5B57\u5E55\u4E0B\u8F7D\u4EFB\u52A1\u4E0D\u4F1A\u88AB\u53D1\u8D77</li><li>\u5F53\u4E0B\u8F7D\u9762\u677F\u5B58\u5728\u5B57\u5E55\u4EFB\u52A1\u65F6\uFF0C\u5176\u5BF9\u5E94\u7684\u89C6\u9891\u4E0B\u8F7D\u4EFB\u52A1\u4E0D\u4F1A\u88AB\u53D1\u8D77</li><li>\u5982\u6709\u9700\u8981\uFF0C\u8BF7\u5728\u4E0B\u8F7D\u9762\u677F\u5220\u9664\u5BF9\u5E94\u4EFB\u52A1\u540E\u518D\u7EE7\u7EED\u5C1D\u8BD5</li></ul></li><li>\u5982\u679C\u5B58\u5728\u591A\u8BED\u79CD\uFF0C\u9ED8\u8BA4\u4F18\u5148\u4E0B\u8F7D\u4E2D\u6587\u7B80\u4F53<code>zh-CN</code></li><li>\u5982\u6709\u9700\u8981\uFF0C\u53EF\u5728<code>app.config</code>\u66F4\u6539\u914D\u7F6E\uFF0C\u5982\uFF1A</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">bilibili.cc.lang = en-US</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u5173\u4E8E\u8BED\u8A00\u7684\u914D\u7F6E\uFF0C\u8BE6\u89C1<a href="https://github.com/nICEnnnnnnnLee/BilibiliDown/tree/master/release/wiki/langs.txt" target="_blank" rel="noreferrer">\u6B64\u5904</a></li></ul></details>`,8),p=[i];function d(r,u,m,C,g,A){return a(),t("div",null,p)}const _=s(c,[["render",d]]);export{y as __pageData,_ as default};