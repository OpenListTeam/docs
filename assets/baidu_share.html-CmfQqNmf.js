import{_ as s,a as e,b as a}from"./bd_share_test-A3O4U-u5.js";import{_ as i,g as t,j as l,o}from"./app-Bg1o9gTo.js";const p={};function r(d,n){return o(),t("div",null,n[0]||(n[0]=[l('<h1 id="baiduyun-share-link" tabindex="-1"><a class="header-anchor" href="#baiduyun-share-link"><span>BaiduYun Share Link</span></a></h1><p>Driver for BaiduYun share link, supports downloading but not uploading, using an unofficial api.</p><h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings"><span><strong>Settings</strong></span></a></h2><ol><li><p>You need to set <strong>surl</strong> and <strong>pwd</strong> to browse the directory, and you need to set BDUSS to download.</p></li><li><p><strong>surl</strong> is the part before <code>?</code> after the sharing address <code>pan.baidu.com/s/</code>, <strong>pwd</strong> fill in the 4-digit extraction code, and leave blank if there is no extraction code.</p></li><li><p><strong>surl</strong> and <strong>pwd</strong> can be filled in with any account, but the account of the <strong><code>BDUSS</code></strong> parameter must use <mark><strong>Baidu Super SVIP member</strong></mark></p></li></ol><p><img src="'+s+'" alt="" loading="lazy"></p><p>BDUSS is extracted from the cookie</p><ul><li><p>Method 1: <a href="http://pandownload.net/faq/cookie.html" target="_blank" rel="noopener noreferrer">Reference Tutorial</a> (the prefix <code>BDUSS=</code> is not required in this project).</p></li><li><p>Method 2<sup>recommended</sup>:</p><ul><li><img src="'+e+'" alt="1" style="zoom:30%;"></li></ul></li></ul><h2 id="root-folder-file-id" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id"><span><strong>Root folder file_id</strong></span></a></h2><p>The root folder to be mounted, the default is <code>/</code></p><p>If you want to mount other folders, please see the example below</p><p><img src="'+a+`" alt="" loading="lazy"></p><h2 id="qa" tabindex="-1"><a class="header-anchor" href="#qa"><span><strong>QA</strong></span></a></h2><table><thead><tr><th>setting</th><th>error message</th><th>tips</th></tr></thead><tbody><tr><td>surl</td><td><code>{&quot;errno&quot;:2,&quot;errtype&quot;:0}</code></td><td>invalid share link</td></tr><tr><td>pwd</td><td><code>{&quot;errno&quot;:-130,&quot;errtype&quot;:&quot;mispwd-9&quot;}</code></td><td>invalid password</td></tr><tr><td>BDUSS</td><td><code>{&quot;errno&quot;:9019,&quot;errmsg&quot;:&quot;need verify&quot;}</code></td><td>invalid BDUSS, get a new one</td></tr><tr><td>UA</td><td><code>{&quot;error_code&quot;:31326,&quot;error_msg&quot;:&quot;user is not authorized, hitcode:119&quot;}</code></td><td>invalid user-agent, set a non-browser UA(ex. netdisk) or use web proxy</td></tr><tr><td>down</td><td>Failed init storage: 200 OK; {&quot;errno&quot;:-130,&quot;</td><td>The content shared by this link may not be accessible because it involves infringement, pornography, vulgarity and other information!</td></tr></tbody></table><h2 id="developing" tabindex="-1"><a class="header-anchor" href="#developing"><span><strong>Developing</strong></span></a></h2><p>The api is from <a href="https://github.com/yuantuo666/baiduwp-php" target="_blank" rel="noopener noreferrer">github.com/yuantuo666/baiduwp-php</a>, an unofficial project.</p><p>We have developed the folder viewing and file downloading function, further developments are welcome.</p><p>Since we don&#39;t have an official document, there might be some compatible problems. You can give feedback on github.</p><p>We can&#39;t break those limits from Baidu and you should follow the official laws.</p><br><p>{<br> error_code: 31329,<br> error_msg: &quot;hit black userlist , hit illeage dlna&quot;,<br> request_id: 921111381111111100<br> }</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span></span></span>
<span class="line"><span>&lt;br/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## **Add &quot;User-Agent&quot; usage example**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::::danger If you don&#39;t know how to set &quot;User-Agent&quot; see here</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ==The following methods are limited to Baidu super member users== </span></span>
<span class="line"><span></span></span>
<span class="line"><span> ==Prompt again The following methods are limited to Baidu super member users== </span></span>
<span class="line"><span></span></span>
<span class="line"><span>It will only be useful if a member finishes modifying **\`&quot;User-Agent&quot;\`** (choose official and 302)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>If you don’t change **\`&quot;User-Agent&quot;\`**, you can enable ==Web Agent==, the disadvantage is that you need to build an Alist machine for transfer, that is to say, you need a large broadband to help you transfer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;p style=&quot;text-align: center;&quot;&gt;&lt;span&gt;Tutorial on how to modify UA in web page 302 mode: &lt;br/&gt;&lt;/span&gt;On the left is&lt;span style=&quot;color:red;font-weight: bold;font-size: xx-large;&quot;&gt;『Official』&lt;/span&gt;API，On the right is the&lt;span style=&quot;color:blue;font-weight: bold;font-size: xx-large;&quot;&gt;『Crack video』&lt;/span&gt;API&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;image-preview&quot;&gt;</span></span>
<span class="line"><span>        &lt;video width=&quot;360&quot; height=&quot;240&quot; controls&gt;</span></span>
<span class="line"><span>            &lt;source src=&quot;https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4&quot; type=&quot;video/mp4&quot;&gt;</span></span>
<span class="line"><span>        &lt;/video&gt;</span></span>
<span class="line"><span>        &lt;video width=&quot;360&quot; height=&quot;240&quot; controls&gt;</span></span>
<span class="line"><span>            &lt;source src=&quot;https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E9%9D%9E%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4&quot; type=&quot;video/mp4&quot;&gt;</span></span>
<span class="line"><span>        &lt;/video&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>:::tabs#ua</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@tab Web plugin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- The advantage of using a browser plug-in to modify is that it can be played directly online, of course, downloading is also possible.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Example &lt;Badge text=&quot;1&quot; type=&quot;info&quot; vertical=&quot;middle&quot; /&gt;: If you really don’t know it, you can take a look at an example on the web page: **https://www.bilibili.com/video/BV1UA4y1X7J8**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Example &lt;Badge text=&quot;2&quot; type=&quot;info&quot; vertical=&quot;middle&quot; /&gt;: Another plugin method covering 360, Chrome, Edge: **https://youtu.be/PP6b0WSzYMc**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>![alist](/img/drivers/baidu/bdUA.png)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@tab Aria2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. First follow the figure below to set the **\`user-agent&quot; \`**, and then click the button option in the lower right corner, click ** gear ** (local settings) to configure the parameters well </span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. Then open the third button option in the lower right corner (**Open the check box**), and then go to the list to select the file we want to download</span></span>
<span class="line"><span>3. Select the files we need to download. After selecting, there will be a row of buttons. Select the second option on the right. One is sent to Aria2.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>If you use the webpage to modify the **\`user-agent\`**, you do not need to configure the \`UA\` of ==**Aria2**==, and you can download it directly to Aria2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>![alist](/img/drivers/baidu/aria2-ua.png)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@tab Motrix</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. First follow the figure below to set the **\`user-agent&quot; \`**, and then click the button option in the lower right corner, click ** gear ** (local settings) to configure the parameters well </span></span>
<span class="line"><span>&lt;!-- #include-env-end --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### **The default download method used**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`mermaid</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>title: Which download method is used by default?</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>flowchart TB</span></span>
<span class="line"><span>    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff</span></span>
<span class="line"><span>    style a2 fill:#ff7575,stroke:#333,stroke-width:4px</span></span>
<span class="line"><span>    subgraph ide1 [ ]</span></span>
<span class="line"><span>    a1</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    a1[302]:::someclass====|default|a2[user equipment]</span></span>
<span class="line"><span>    classDef someclass fill:#f96</span></span>
<span class="line"><span>    c1[local proxy]-.alternative.-&gt;a2[user equipment]</span></span>
<span class="line"><span>    b1[Download proxy URL]-.alternative.-&gt;a2[user equipment]</span></span>
<span class="line"><span>    click a1 &quot;../drivers/common.html#webdav-policy&quot;</span></span>
<span class="line"><span>    click b1 &quot;../drivers/common.html#webdav-policy&quot;</span></span>
<span class="line"><span>    click c1 &quot;../drivers/common.html#webdav-policy&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)]))}const m=i(p,[["render",r],["__file","baidu_share.html.vue"]]),v=JSON.parse('{"path":"/guide/drivers/baidu_share.html","title":"BaiduYun Share Link","lang":"en-US","frontmatter":{"icon":"iconfont icon-state","order":71,"category":["Guide"],"tag":["Storage","Guide","302"],"sticky":true,"star":true},"git":{"createdTime":1662556125000,"updatedTime":1750319858000,"contributors":[{"name":"Noah Hsu","username":"","email":"i@nn.ci","commits":4},{"name":"anwen-anyi","username":"anwen-anyi","email":"56105412+anwen-anyi@users.noreply.github.com","commits":13,"url":"https://github.com/anwen-anyi"},{"name":"Andy Hsu","username":"","email":"i@nn.ci","commits":6},{"name":"Rektyfikowany","username":"Rektyfikowany","email":"126593039+Rektyfikowany@users.noreply.github.com","commits":3,"url":"https://github.com/Rektyfikowany"},{"name":"安稳","username":"","email":"anwen_anyi@foxmail.com","commits":5},{"name":"ljcbaby","username":"ljcbaby","email":"46277145+ljcbaby@users.noreply.github.com","commits":1,"url":"https://github.com/ljcbaby"},{"name":"anwen","username":"anwen","email":"anwen_anyi@foxmail.com","commits":1,"url":"https://github.com/anwen"},{"name":"Hantong Chen","username":"","email":"cxwdyx620@gmail.com","commits":1},{"name":"SenkjM","username":"SenkjM","email":"112735335+SenkjM@users.noreply.github.com","commits":1,"url":"https://github.com/SenkjM"},{"name":"cxw620","username":"cxw620","email":"70561268+cxw620@users.noreply.github.com","commits":1,"url":"https://github.com/cxw620"}]},"readingTime":{"minutes":1.45,"words":436},"filePathRelative":"guide/drivers/baidu_share.md"}');export{m as comp,v as data};
