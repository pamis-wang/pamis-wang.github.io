import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as l,a as n,e,w as p,b as s,f as o}from"./app-26859401.js";const d="/assets/dot_net_6_docker_3-ec6e8111.jpg",u={},k=n("h1",{id:"docker-安裝",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-安裝","aria-hidden":"true"},"#"),s(" Docker 安裝")],-1),m=n("h1",{id:"參考官方文件選定版本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#參考官方文件選定版本","aria-hidden":"true"},"#"),s(" 參考官方文件選定版本")],-1),h={href:"https://github.com/dotnet/dotnet-docker",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),b=n("br",null,null,-1),_=n("img",{src:d,alt:"參考官方文件選定版本",loading:"lazy"},null,-1),f=o('<h2 id="選定正確版本" tabindex="-1"><a class="header-anchor" href="#選定正確版本" aria-hidden="true">#</a> 選定正確版本</h2><p>這裡有個方法幫助辨識選定正確的版本<br> 開啟 Visual Studio 2022 ，選擇要建置的專案類型後，勾選 Docker 選項<br> ![[dot_net_6_docker_4.jpg]]<br> 專案建立之後進去看 <code>Dockerfile</code> 的內容，可以看到使用的映像檔是 aspnet<br> ![[dot_net_6_docker_5.jpg]]</p><h1 id="取得-dockerfile" tabindex="-1"><a class="header-anchor" href="#取得-dockerfile" aria-hidden="true">#</a> 取得 Dockerfile</h1><h2 id="到-dockerhub-取得官方提供的映像檔案" tabindex="-1"><a class="header-anchor" href="#到-dockerhub-取得官方提供的映像檔案" aria-hidden="true">#</a> 到 dockerhub 取得官方提供的映像檔案</h2>',4),g={href:"https://hub.docker.com/_/microsoft-dotnet-sdk",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"![[dot_net_6_docker_1.jpg]]",-1),x=n("h2",{id:"選擇對應的版本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#選擇對應的版本","aria-hidden":"true"},"#"),s(" 選擇對應的版本")],-1),w=n("p",null,[s("本次安裝的是 .Net Core 6 所以選擇反白的選項"),n("br"),s(" ![[dot_net_6_docker_2.jpg]]")],-1),N=n("h2",{id:"建立-dockerfile",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#建立-dockerfile","aria-hidden":"true"},"#"),s(" 建立 Dockerfile")],-1),D={href:"https://github.com/dotnet/dotnet-docker/blob/main/samples/aspnetapp/Dockerfile.ubuntu",target:"_blank",rel:"noopener noreferrer"},R=o(`<div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 建置編譯階段 Image, from dotnet/sdk, 並指定工作目錄為 /source</span>
<span class="token instruction"><span class="token keyword">FROM</span> mcr.microsoft.com/dotnet/sdk:6.0 <span class="token keyword">AS</span> build</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /source</span>

<span class="token comment"># COPY 本機的所有檔案到 build image source 目錄下, 並執行套件還原指令, 此步驟需連網</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet restore</span>

<span class="token comment"># 執行 dotnet build 指令</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet build</span>

<span class="token comment"># 執行 dotnet 發佈指令, 並指定為 Release 版本</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet publish -c release --no-restore -o /app</span>

<span class="token comment"># 建置執行階段 Image, from dotnet/aspnet image, 並指定工作目錄為 /app</span>
<span class="token instruction"><span class="token keyword">FROM</span> mcr.microsoft.com/dotnet/aspnet:6.0 <span class="token keyword">AS</span> base</span>
<span class="token instruction"><span class="token keyword">ENV</span> TZ=<span class="token string">&quot;Asia/Taipei&quot;</span></span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># COPY 編譯階段已產生的發佈檔至 /app 下</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">build</span></span> /app .</span>

<span class="token comment"># 透過 Kestrel 啟動專案服務</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;dotnet&quot;</span>, <span class="token string">&quot;test.dll&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="執行映像檔建立指令" tabindex="-1"><a class="header-anchor" href="#執行映像檔建立指令" aria-hidden="true">#</a> 執行映像檔建立指令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> build <span class="token parameter variable">-t</span> pamis/asp-net-core-6-api <span class="token parameter variable">-f</span> Dockerfile <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker Compose</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># sudo docker compose up -d</span>
<span class="token comment"># 使用 3.8 版的設定檔，通常新版本會有新的功能，並支援新的設定參數</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  asp<span class="token punctuation">-</span><span class="token key atrule">net-core-6-api</span><span class="token punctuation">:</span>
    image<span class="token punctuation">:</span> <span class="token string">&#39;pamis/asp-net-core-6-api:latest&#39;</span>
    container_name<span class="token punctuation">:</span> asp<span class="token punctuation">-</span>net<span class="token punctuation">-</span>core<span class="token punctuation">-</span>6<span class="token punctuation">-</span>api
    restart<span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    ports<span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;8080:80&#39;</span> <span class="token comment"># Public HTTP Port</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;8081:443&#39;</span> <span class="token comment"># Public HTTPS Port</span>
    volumes<span class="token punctuation">:</span>
      <span class="token punctuation">-</span> aspnet_app<span class="token punctuation">:</span>/app
      <span class="token punctuation">-</span> aspnet_https<span class="token punctuation">:</span>/https
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  aspnet_app<span class="token punctuation">:</span>
    name<span class="token punctuation">:</span> <span class="token string">&quot;aspnet_app&quot;</span>
  aspnet_https<span class="token punctuation">:</span>
    name<span class="token punctuation">:</span> <span class="token string">&quot;aspnet_https&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h1>`,6),P={href:"https://dotblogs.com.tw/supergary/2023/05/10/Net6_Container",target:"_blank",rel:"noopener noreferrer"},T=n("br",null,null,-1),C={href:"https://dotblogs.com.tw/fire/2022/10/27/225738",target:"_blank",rel:"noopener noreferrer"},q=n("br",null,null,-1),O={href:"https://blog.darkthread.net/blog/aspnetcore-docker-with-cli/",target:"_blank",rel:"noopener noreferrer"};function E(I,S){const i=t("RouterLink"),a=t("ExternalLinkIcon");return r(),l("div",null,[k,n("p",null,[e(i,{to:"/posts/2022-12-20-install-ubuntu-docker/"},{default:p(()=>[s("在 Ubuntu 上安裝 Docker")]),_:1})]),m,n("p",null,[n("a",h,[s("官方的 dotnet-docker github"),e(a)]),v,s(" 這裡非常重要！！！ 千萬不要選錯版本！！！"),b,_]),f,n("p",null,[n("a",g,[s("https://hub.docker.com/_/microsoft-dotnet-sdk"),e(a)])]),y,x,w,N,n("p",null,[n("a",D,[s("參考官方的範例來改"),e(a)])]),R,n("p",null,[n("a",P,[s("使用 Docker 建立.NET 6 容器"),e(a)]),T,n("a",C,[s(".NET Core 的 Dockerfile 指令詳解"),e(a)]),q,n("a",O,[s("ASP.NET Core Docker 單兵徒手基本教練"),e(a)])])])}const Y=c(u,[["render",E],["__file","index.html.vue"]]);export{Y as default};
