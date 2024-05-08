import{_ as s,o as n,c as a,a as l}from"./app.2c70880b.js";const y=JSON.parse('{"title":"\u6587\u4EF6\u7ED3\u6784\u8BF4\u660E","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/dir-list.md","lastUpdated":1677390099000}'),p={name:"guide/advanced/dir-list.md"},e=l(`<h1 id="\u6587\u4EF6\u7ED3\u6784\u8BF4\u660E" tabindex="-1">\u6587\u4EF6\u7ED3\u6784\u8BF4\u660E <a class="header-anchor" href="#\u6587\u4EF6\u7ED3\u6784\u8BF4\u660E" aria-hidden="true">#</a></h1><p>\u4EE5\u4E0B\u4E3A\u7A0B\u5E8F\u7684\u5168\u91CF\u7684\u5DE5\u4F5C\u76EE\u5F55\u7ED3\u6784\uFF0C\u628A\u53EF\u80FD\u51FA\u73B0\u7684\u6587\u4EF6\u57FA\u672C\u4E0A\u90FD\u5217\u4E86\u51FA\u6765</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">-</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- BilibiliDown.desktop                     Linux\u4E0B\u521B\u5EFA\u7684\u5FEB\u6377\u65B9\u5F0F\u6A21\u677F(\u4E0D\u5B58\u5728\u7684\u8BDD\u4F1A\u7531\u811A\u672C\u521B\u5EFA)</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- Create-Shortcut-on-Desktop-for-Linux.sh  Linux\u4E0B\u521B\u5EFA\u5FEB\u6377\u65B9\u5F0F\u7684\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- Create-Shortcut-on-Desktop-for-Mac.sh    MacOS\u4E0B\u521B\u5EFA\u5FEB\u6377\u65B9\u5F0F\u7684\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- Create-Shortcut-on-Desktop-for-Win.vbs   Windows\u4E0B\u521B\u5EFA\u5FEB\u6377\u65B9\u5F0F\u7684\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- Double-Click-to-Run-for-Mac.command      MacOS\u4E0B\u53CC\u51FB\u5373\u53EF\u8FD0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- Double-Click-to-Run-for-Win-debug.bat    Windows\u4E0B\u53CC\u51FB\u5373\u53EF\u8FD0\u884C(\u5E26\u547D\u4EE4\u884C\u8F93\u51FA)</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- Double-Click-to-Run-for-Win.bat          Windows\u4E0B\u53CC\u51FB\u5373\u53EF\u8FD0\u884C(\u7EAF\u89C6\u56FE)</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- Run-for-Linux.sh                         Linux\u4E0B\u7684\u8FD0\u884C\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- ffmpeg.exe                               Windows\u4E0B\u7684ffmpeg</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- INeedBiliAV.jar                          \u4E3B\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- launch.jar                               \u542F\u52A8\u7A0B\u5E8F, \u76EE\u7684\u662F\u80FD\u591F\u4E0D\u501F\u52A9\u811A\u672C\u5B9E\u73B0jar\u5305\u81EA\u5347\u7EA7</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- uninstall.bat                            Windows\u4E0B\u5378\u8F7D\u811A\u672C(\u5176\u5B9E\u5C31\u662F\u5220\u9664\u6240\u5728\u6587\u4EF6\u5939)</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- update.bat                               Windows\u4E0B\u66F4\u65B0\u811A\u672C(\u7A0B\u5E8F\u8C03\u7528+\u53CC\u51FB\u7686\u53EF)</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- update.sh                                Linux/Mac\u4E0B\u7684\u66F4\u65B0\u811A\u672C(\u4E0D\u5B58\u5728\u7684\u8BDD\u4F1A\u7531\u7A0B\u5E8F\u521B\u5EFA)</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- config                                   \u914D\u7F6E\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- app.config                           \u4E3B\u8981\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- background.jpg                       \u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247(jpg\u3001png\u5747\u53EF)</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- batchDownload.config                 \u4E00\u952E\u4E0B\u8F7D\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- cookies.config                       \u767B\u5F55\u51ED\u8BC1(\u660E\u6587\u4FDD\u5B58Cookies)</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- favicon.ico                          \u5FEB\u6377\u65B9\u5F0F\u663E\u793A\u7684\u7A0B\u5E8F\u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- fingerprint.config                   \u767B\u5F55\u65F6\u968F\u673A\u751F\u6210\u7684\u6307\u7EB9</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- notice.wav                           \u81EA\u5B9A\u4E49\u4E0B\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u97F3</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- repo.config                          \u5B8C\u6210\u7684\u4E0B\u8F7D\u4EFB\u52A1\u8BB0\u5F55(\u4EC5\u8BB0\u5F55ID,\u4E00\u884C\u4E00\u4E2A)</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- tasks.config                         \u4FDD\u5B58\u7684\u6B63\u5728\u4E0B\u8F7D\u4E2D\u7684\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- download                                 \u9ED8\u8BA4\u7684\u89C6\u9891\u4FDD\u5B58\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- LICENSE                                  LICENSE\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- minimal-bilibilidown-jre                 Windows\u4E0B\u7684\u7CBE\u7B80JRE 11</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- parsers                                  \u81EA\u5B9A\u4E49\u89E3\u6790\u5668\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- EPParser.class                       .class\u662F\u7A0B\u5E8F\u81EA\u52A8\u7F16\u8BD1\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- EPParser.java                        .java\u9700\u8981\u81EA\u5DF1\u5199, \u53EF\u4EE5\u53C2\u8003\u4E00\u4E0B\u540C\u540D\u6E90\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- MdParser.class</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- MdParser.java</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- parsers.ini                          \u5982\u679C\u5B58\u5728\uFF0C\u53EF\u4EE5\u6307\u5B9AClassLoader\u7684\u52A0\u8F7D\u5185\u5BB9\u548C\u987A\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- SSParser.class</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- SSParser.java</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- update                                   \u4E00\u952E\u66F4\u65B0\u7684\u4E0B\u8F7D\u5185\u5BB9\uFF0C\u770B\u540D\u5B57\u61C2\u610F\u601D</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- BilibiliDown.v6.8.release.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- BilibiliDown.v6.9.release.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- INeedBiliAV.update.jar               \u4E00\u952E\u66F4\u65B0\u811A\u672C\u4F1A\u628A\u8FD9\u4E2A\u66FF\u6362\u6389\u65E7\u7248\u672C\u7684\u4E3B\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[e];function c(i,t,r,C,A,d){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{y as __pageData,u as default};
