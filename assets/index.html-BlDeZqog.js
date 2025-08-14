import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,e as a,o as r}from"./app-Cfgedju3.js";const s={};function o(p,e){return r(),t("div",null,e[0]||(e[0]=[a(`<h1 id="作業系統安裝" tabindex="-1"><a class="header-anchor" href="#作業系統安裝"><span>作業系統安裝</span></a></h1><p>[[install_ubuntu_22.04]]</p><h1 id="開發環境安裝" tabindex="-1"><a class="header-anchor" href="#開發環境安裝"><span>開發環境安裝</span></a></h1><p>盡量照順序做</p><h2 id="安裝-網頁伺服器-nginx" tabindex="-1"><a class="header-anchor" href="#安裝-網頁伺服器-nginx"><span>[ 安裝 網頁伺服器 Nginx ]</span></a></h2><pre><code>sudo apt update
sudo apt install nginx
</code></pre><h2 id="安裝-net-6-sdk" tabindex="-1"><a class="header-anchor" href="#安裝-net-6-sdk"><span>[ 安裝 .NET 6 SDK ]</span></a></h2><pre><code>sudo apt-get update
sudo apt-get install -y dotnet-sdk-6.0
</code></pre><h1 id="透過-kestrel-啟動專案服務" tabindex="-1"><a class="header-anchor" href="#透過-kestrel-啟動專案服務"><span>透過 Kestrel 啟動專案服務</span></a></h1><p>指定專案發佈目錄並輸入指令</p><pre><code>dotnet [project_name].dll
</code></pre><p>預設會以 <a href="http://localhost:5000" target="_blank" rel="noopener noreferrer">http://localhost:5000</a> 開啟</p><h2 id="nginx-設定" tabindex="-1"><a class="header-anchor" href="#nginx-設定"><span>[ Nginx 設定 ]</span></a></h2><p>以 Nginx 設定反向代理 將 HTTP 要求轉送至您的 <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core 應用程式</p><p>Nginx 設定可以至 /etc/nginx/site-available/ 這個資料夾內的 default 進行設定，<br> 通常一台機器內若有架設多個網站，可以利用多個設定檔方便區分不同網域或服務。</p><h3 id="設定檔的路徑-建議先將-default-另存一個-default-old" tabindex="-1"><a class="header-anchor" href="#設定檔的路徑-建議先將-default-另存一個-default-old"><span>設定檔的路徑，建議先將 default 另存一個 default_old</span></a></h3><pre><code>/etc/nginx/sites-available/default
</code></pre><h3 id="參考-msdn-官方的設定檔" tabindex="-1"><a class="header-anchor" href="#參考-msdn-官方的設定檔"><span>參考 MSDN 官方的設定檔</span></a></h3><pre><code>server {
    listen        80;
    server_name   example.com *.example.com;
    location / {
        proxy_pass         http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
</code></pre><h3 id="設定完成後-需要將這個設定檔連結至-site-enabled" tabindex="-1"><a class="header-anchor" href="#設定完成後-需要將這個設定檔連結至-site-enabled"><span>設定完成後，需要將這個設定檔連結至 site-enabled</span></a></h3><pre><code>sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
</code></pre><h3 id="確認-nginx-是否連接成功" tabindex="-1"><a class="header-anchor" href="#確認-nginx-是否連接成功"><span>確認 Nginx 是否連接成功</span></a></h3><pre><code>sudo nginx -t
</code></pre><h3 id="得到這個消息後便可重啟-nginx" tabindex="-1"><a class="header-anchor" href="#得到這個消息後便可重啟-nginx"><span>得到這個消息後便可重啟 Nginx</span></a></h3><pre><code>nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
</code></pre><h3 id="重啟-nginx" tabindex="-1"><a class="header-anchor" href="#重啟-nginx"><span>重啟 Nginx</span></a></h3><pre><code>sudo service nginx restart
</code></pre><h2 id="kestrel-建立服務" tabindex="-1"><a class="header-anchor" href="#kestrel-建立服務"><span>[ Kestrel 建立服務 ]</span></a></h2><h3 id="建立服務定義檔" tabindex="-1"><a class="header-anchor" href="#建立服務定義檔"><span>建立服務定義檔</span></a></h3><pre><code>sudo nano /etc/systemd/system/kestrel.service
</code></pre><h3 id="服務定義檔內容" tabindex="-1"><a class="header-anchor" href="#服務定義檔內容"><span>服務定義檔內容</span></a></h3><pre><code>[Unit]
Description=Example .NET Web API App running on Ubuntu

[Service]
# 指向專案目錄
WorkingDirectory=/home/pamis/DEV_API
# 指向專案執行檔案
ExecStart=/usr/bin/dotnet /home/pamis/DEV_API/DEV_API.dll
# 指向專案執行檔案 並指定 位址與埠號
# ExecStart=/usr/bin/dotnet /home/pamis/DEV_API/DEV_API.dll --url http://0.0.0.0:5000
Restart=always
# Restart service after 10 seconds if the dotnet service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=dotnet-example
# 管理服務的使用者
User=root
# User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
</code></pre><h3 id="設好服務後註冊並啟動服務" tabindex="-1"><a class="header-anchor" href="#設好服務後註冊並啟動服務"><span>設好服務後註冊並啟動服務</span></a></h3><p>設好 kestrel.service 後註冊並啟動服務</p><pre><code>sudo systemctl enable kestrel.service
sudo systemctl start kestrel.service
sudo systemctl status kestrel.service
</code></pre><h1 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料"><span>參考資料</span></a></h1><p>[ 在 Linux 上使用 Nginx 裝載 <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core ]</p><p><a href="https://docs.microsoft.com/zh-tw/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-6.0" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/zh-tw/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-6.0</a></p><p>[ 在 Ubuntu 上安裝 .NET SDK ]</p><p><a href="https://docs.microsoft.com/zh-tw/dotnet/core/install/linux-ubuntu" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/zh-tw/dotnet/core/install/linux-ubuntu</a></p><p>[<a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core + Nginx on CentOS 安裝筆記]</p><p><a href="https://blog.darkthread.net/blog/aspnetcore-with-nginx/" target="_blank" rel="noopener noreferrer">https://blog.darkthread.net/blog/aspnetcore-with-nginx/</a></p>`,42)]))}const l=n(s,[["render",o]]),c=JSON.parse('{"path":"/posts/2023-07-05-install-ubuntu-asp-net-6/","title":"在 Ubuntu 建構 ASP.NET Core 6 開發環境","lang":"zh-TW","frontmatter":{"title":"在 Ubuntu 建構 ASP.NET Core 6 開發環境","date":"2023-07-05T00:00:00.000Z","category":"後端","tag":["ASP.NET Core","ASP.NET Core 6","API","Nginx","Kestrel"],"description":"作業系統安裝 [[install_ubuntu_22.04]] 開發環境安裝 盡量照順序做 [ 安裝 網頁伺服器 Nginx ] [ 安裝 .NET 6 SDK ] 透過 Kestrel 啟動專案服務 指定專案發佈目錄並輸入指令 預設會以 http://localhost:5000 開啟 [ Nginx 設定 ] 以 Nginx 設定反向代理 將 HT...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 Ubuntu 建構 ASP.NET Core 6 開發環境\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T10:33:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamis.dev\\",\\"email\\":\\"pamis.wang@gmail.com\\"}]}"],["meta",{"property":"og:url","content":"https://pamis.dev/posts/2023-07-05-install-ubuntu-asp-net-6/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"在 Ubuntu 建構 ASP.NET Core 6 開發環境"}],["meta",{"property":"og:description","content":"作業系統安裝 [[install_ubuntu_22.04]] 開發環境安裝 盡量照順序做 [ 安裝 網頁伺服器 Nginx ] [ 安裝 .NET 6 SDK ] 透過 Kestrel 啟動專案服務 指定專案發佈目錄並輸入指令 預設會以 http://localhost:5000 開啟 [ Nginx 設定 ] 以 Nginx 設定反向代理 將 HT..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2024-02-03T10:33:35.000Z"}],["meta",{"property":"article:tag","content":"Kestrel"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:tag","content":"API"}],["meta",{"property":"article:tag","content":"ASP.NET Core 6"}],["meta",{"property":"article:tag","content":"ASP.NET Core"}],["meta",{"property":"article:published_time","content":"2023-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T10:33:35.000Z"}]]},"git":{"createdTime":1689521396000,"updatedTime":1706956415000,"contributors":[{"name":"pamis","username":"pamis","email":"pamis1116@gmail.com","commits":4,"url":"https://github.com/pamis"},{"name":"Pamis Wang","username":"","email":"pamis1116@gmail.com","commits":1}]},"readingTime":{"minutes":1.76,"words":527},"filePathRelative":"posts/2023-07-05-install-ubuntu-asp-net-6/index.md","excerpt":"\\n<p>[[install_ubuntu_22.04]]</p>\\n<h1>開發環境安裝</h1>\\n<p>盡量照順序做</p>\\n<h2>[ 安裝 網頁伺服器 Nginx ]</h2>\\n<pre><code>sudo apt update\\nsudo apt install nginx\\n</code></pre>\\n<h2>[ 安裝 .NET 6 SDK ]</h2>\\n<pre><code>sudo apt-get update\\nsudo apt-get install -y dotnet-sdk-6.0\\n</code></pre>\\n<h1>透過 Kestrel 啟動專案服務</h1>\\n<p>指定專案發佈目錄並輸入指令</p>","autoDesc":true}');export{l as comp,c as data};
