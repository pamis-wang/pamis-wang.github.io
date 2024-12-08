import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as r,d as o,a as n,b as e,e as s,f as i}from"./app-26859401.js";const c="/assets/2023-08-01-01-e8f89bd9.png",u="/assets/meme-01-6a0aa122.png",h={},p=n("h1",{id:"在-ubuntu-安裝-nginx-伺服器-使用-apt-安裝",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在-ubuntu-安裝-nginx-伺服器-使用-apt-安裝","aria-hidden":"true"},"#"),e(" 在 Ubuntu 安裝 Nginx 伺服器（使用 APT 安裝）")],-1),b=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1),g=n("p",null,[e("Linux 主機上廣泛被使用的網頁伺服器有 Apache 或 Nginx ，"),n("br"),e(" 兩者有不同的適用情境與長處。")],-1),m=n("p",null,[e("本文章會在 Ubuntu 22.04 透過官方的 APT 套件庫安裝 Nginx 伺服器，"),n("br"),e(" 並簡單介紹使用設定說明。")],-1),v=i(`<h2 id="安裝-nginx" tabindex="-1"><a class="header-anchor" href="#安裝-nginx" aria-hidden="true">#</a> 安裝 Nginx</h2><h3 id="查詢版本" tabindex="-1"><a class="header-anchor" href="#查詢版本" aria-hidden="true">#</a> 查詢版本</h3><p>輸入以下指令可查詢該作業系統對應的官方套件版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-cache</span> madison nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在文章時間的當下 Ubuntu 22.04 對應的 Nginx 版本是 1.18.0</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token operator">|</span> <span class="token number">1.18</span>.0-6ubuntu14.3 <span class="token operator">|</span> http://tw.archive.ubuntu.com/ubuntu jammy-updates/main amd64 Packages
nginx <span class="token operator">|</span> <span class="token number">1.18</span>.0-6ubuntu14.3 <span class="token operator">|</span> http://security.ubuntu.com/ubuntu jammy-security/main amd64 Packages
nginx <span class="token operator">|</span> <span class="token number">1.18</span>.0-6ubuntu14 <span class="token operator">|</span> http://tw.archive.ubuntu.com/ubuntu jammy/main amd64 Packages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),x={class:"hint-container info"},f=n("p",{class:"hint-container-title"},"冷知識",-1),_=n("br",null,null,-1),k=n("br",null,null,-1),w=n("br",null,null,-1),N={href:"https://zh.wikipedia.org/zh-tw/Ubuntu#%E6%96%B0%E7%89%88%E7%99%BC%E4%BD%88%E9%80%B1%E6%9C%9F",target:"_blank",rel:"noopener noreferrer"},y=i(`<h3 id="安裝指令" tabindex="-1"><a class="header-anchor" href="#安裝指令" aria-hidden="true">#</a> 安裝指令</h3><p>使用官方 APT 套件庫直接進行安裝。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="測試結果" tabindex="-1"><a class="header-anchor" href="#測試結果" aria-hidden="true">#</a> 測試結果</h3><p>安裝完畢後可以執行以下指令來確認是否安裝成功。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nginx <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果安裝成功就會出現如下的版本號訊息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx version: nginx/1.18.0 <span class="token punctuation">(</span>Ubuntu<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果在虛擬機做測試就輸入 <code>127.0.0.1</code>，<br> 或是在瀏覽器輸入虛擬機的 IP。</p><figure><img src="`+c+'" alt="IP因人而異僅供參考" tabindex="0" loading="lazy"><figcaption style="font-size:1rem;">IP因人而異僅供參考</figcaption></figure><h2 id="介紹-nginx" tabindex="-1"><a class="header-anchor" href="#介紹-nginx" aria-hidden="true">#</a> 介紹 Nginx</h2><h3 id="預設路徑" tabindex="-1"><a class="header-anchor" href="#預設路徑" aria-hidden="true">#</a> 預設路徑</h3><ul><li><code>/usr/sbin/nginx</code>：主程式</li><li><code>/etc/nginx</code>：設定文件</li><li><code>/usr/share/nginx</code>：靜態文件</li><li><code>/var/log/nginx</code>：日誌</li><li><code>/var/www/html</code>：歡迎畫面的靜態網頁</li></ul><h3 id="設定文件目錄結構" tabindex="-1"><a class="header-anchor" href="#設定文件目錄結構" aria-hidden="true">#</a> 設定文件目錄結構</h3><p>進入 <code>/etc/nginx</code> 會看到許多資料夾目錄和檔案，這邊列出部分比較重要的來介紹。</p>',15),P=n("thead",null,[n("tr",null,[n("th",null,"名稱"),n("th",null,"說明")])],-1),z=n("tr",null,[n("td",null,"nginx.conf"),n("td",null,[e("主要的設定文件，會引用其他 "),n("code",null,"conf.d"),e("、"),n("code",null,"modules-enabled"),e("、"),n("code",null,"sites-enabled"),e(" 內的設定")])],-1),E=n("tr",null,[n("td",null,"conf.d"),n("td",null,"額外的設定文件")],-1),U=n("tr",null,[n("td",null,"modules-available"),n("td",null,"可用的模組")],-1),B=n("tr",null,[n("td",null,"modules-enabled"),n("td",null,"啟用的模組")],-1),C=n("tr",null,[n("td",null,"sites-available"),n("td",null,"可用的網站設定")],-1),I=n("tr",null,[n("td",null,"sites-enabled"),n("td",null,"啟用的網站設定")],-1),T=n("tr",null,[n("td",null,"snippets"),n("td",null,"裡面有一些憑證和 PHP 的設定片段")],-1),V=n("td",null,"mime.types",-1),A={href:"https://www.iana.org/assignments/media-types/media-types.xhtml",target:"_blank",rel:"noopener noreferrer"},L=i('<h2 id="設定-nginx" tabindex="-1"><a class="header-anchor" href="#設定-nginx" aria-hidden="true">#</a> 設定 Nginx</h2><p>Nginx 設定可以至 <code>/etc/nginx/site-available/</code> 這個資料夾內的 <code>default</code> 進行設定，<br> 通常一台機器內若有架設多個網站，可以利用多個設定檔方便區分不同網域或服務。</p><p>這裡以預設的 <code>default</code> 設定檔案來測試，<br> 建議不熟悉的人可以先行備份，避免改壞了救不回來。</p><figure><img src="'+u+`" alt="沒了！" tabindex="0" loading="lazy"><figcaption style="font-size:1rem;">沒了！</figcaption></figure><h3 id="預設設定檔的路徑" tabindex="-1"><a class="header-anchor" href="#預設設定檔的路徑" aria-hidden="true">#</a> 預設設定檔的路徑</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/nginx/sites-available/default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根目錄指向<code>/var/www/html</code>，<br> 也就是上面的歡迎畫面的靜態 HTML 檔案。</p><h4 id="複製預設設定檔的路徑" tabindex="-1"><a class="header-anchor" href="#複製預設設定檔的路徑" aria-hidden="true">#</a> 複製預設設定檔的路徑</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> /etc/nginx/sites-available/default /etc/nginx/sites-available/webname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="設定完成後-需要將這個設定檔連結至-site-enabled" tabindex="-1"><a class="header-anchor" href="#設定完成後-需要將這個設定檔連結至-site-enabled" aria-hidden="true">#</a> 設定完成後，需要將這個設定檔連結至 site-enabled</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /etc/nginx/sites-available/webname /etc/nginx/sites-enabled/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="確認-nginx-是否連接成功" tabindex="-1"><a class="header-anchor" href="#確認-nginx-是否連接成功" aria-hidden="true">#</a> 確認 Nginx 是否連接成功</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nginx <span class="token parameter variable">-t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="得到這個消息後便可重啟-nginx" tabindex="-1"><a class="header-anchor" href="#得到這個消息後便可重啟-nginx" aria-hidden="true">#</a> 得到這個消息後便可重啟 Nginx</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	nginx: the configuration <span class="token function">file</span> /etc/nginx/nginx.conf syntax is ok
	nginx: configuration <span class="token function">file</span> /etc/nginx/nginx.conf <span class="token builtin class-name">test</span> is successful
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重新讀取-nginx-設定文件" tabindex="-1"><a class="header-anchor" href="#重新讀取-nginx-設定文件" aria-hidden="true">#</a> 重新讀取 Nginx 設定文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> nginx reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重啟-nginx-伺服器" tabindex="-1"><a class="header-anchor" href="#重啟-nginx-伺服器" aria-hidden="true">#</a> 重啟 Nginx 伺服器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> nginx restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="權限問題" tabindex="-1"><a class="header-anchor" href="#權限問題" aria-hidden="true">#</a> 權限問題</h3><p>如果 <code>/var/log/nginx/error.log</code> 出現 <code>stat() failed (13: permission denied)</code> 的錯誤訊息<br> 代表 Nginx 無法正常 cd 至專案目錄<br> 解決方法參考如下：</p><p>根據 <code>/etc/nginx/nginx.conf</code> 設定，<br> Nginx 預設使用者為 <code>www-data</code>，<br> 故需要將指定使用者加入 <code>www-data</code> 群組。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># username 自己替換成指定使用者</span>
<span class="token function">sudo</span> gpasswd <span class="token parameter variable">-a</span> www-data username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>並確保用戶群組可以進入路徑中的所有目錄</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> g+x /home/pamis <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> g+x /home/pamis/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>設定完畢後重啟伺服器</p><h2 id="工具介紹" tabindex="-1"><a class="header-anchor" href="#工具介紹" aria-hidden="true">#</a> 工具介紹</h2><p>對新手而言自己寫伺服器設定有一定門檻，<br> 這邊介紹個不錯的網站可以幫助撰寫設定。<br> 有精美的 GUI 介面，有許多常見的應用情境可選，<br> 只要選項選好就可以產生參考的設定檔。</p>`,28),j={href:"https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhTW",target:"_blank",rel:"noopener noreferrer"},F=n("h2",{id:"參考資料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#參考資料","aria-hidden":"true"},"#"),e(" 參考資料")],-1),G={href:"https://gist.github.com/windsting/038858d2c41f442a00669f901c550b5c",target:"_blank",rel:"noopener noreferrer"},H=n("br",null,null,-1),J={href:"https://zh.wikipedia.org/zh-tw/Chmod",target:"_blank",rel:"noopener noreferrer"};function D(M,S){const a=t("ExternalLinkIcon");return l(),r("div",null,[p,b,g,m,o(" more "),v,n("div",x,[f,n("p",null,[e("Ubuntu 每個版本的作業系統都有一個以「形容詞+動物」系統代號。"),_,e(" Ubuntu 22.04 是 Jammy Jellyfish"),k,e(" Ubuntu 20.04 是 Focal Fossa 　"),w,n("a",N,[e("維基百科有各版本的代號中文"),s(a)])])]),y,n("table",null,[P,n("tbody",null,[z,E,U,B,C,I,T,n("tr",null,[V,n("td",null,[n("a",A,[e("詳見媒體類型對應表"),s(a)])])])])]),L,n("p",null,[n("a",j,[e("NGINXConfig"),s(a)])]),F,n("p",null,[n("a",G,[e("Nginx: stat() failed (13: permission denied)"),s(a)]),H,n("a",J,[e("Chmod 指令補充"),s(a)])])])}const q=d(h,[["render",D],["__file","index.html.vue"]]);export{q as default};
