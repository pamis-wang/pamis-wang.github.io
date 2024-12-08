import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c,a as n,b as a,e as s,d as r,w as d,f as i}from"./app-26859401.js";const u="/assets/meme-01-d765d97e.png",h={},v=n("h1",{id:"在-ubuntu-安裝-php-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在-ubuntu-安裝-php-8","aria-hidden":"true"},"#"),a(" 在 Ubuntu 安裝 PHP 8")],-1),m=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),a(" 前言")],-1),b=n("p",null,[a("由於 Ubuntu 每個版本的作業系統對應的套件版本都不一樣，"),n("br"),a(" 可以從命令列來查詢，也可以官網查詢。")],-1),f={href:"https://packages.ubuntu.com/focal/php",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),g={href:"https://packages.ubuntu.com/jammy/php",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,[a("本文會記錄在 Ubuntu 22.04 安裝 PHP 8.1 的過程，"),n("br"),a(" 包含官方套件列表的安裝方式，"),n("br"),a(" 也會補充第三方套件的安裝方式。")],-1),x=n("h2",{id:"使用官方套件庫",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用官方套件庫","aria-hidden":"true"},"#"),a(" 使用官方套件庫")],-1),y={href:"https://packages.ubuntu.com/jammy/php",target:"_blank",rel:"noopener noreferrer"},P=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1      <span class="token comment"># 要用 apache 裝這個</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-fpm  <span class="token comment"># 要用 nginx  裝這個</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果沒有執著安裝最新的 PHP 8.x 版本，<br> 可以直接安裝目前的版本，然後就可以收工了 XD</p><figure><img src="`+u+'" alt="還沒那麼快，還要改設定檔阿！！" tabindex="0" loading="lazy"><figcaption style="font-size:1rem;">還沒那麼快，還要改設定檔阿！！</figcaption></figure><h2 id="使用第三方套件庫" tabindex="-1"><a class="header-anchor" href="#使用第三方套件庫" aria-hidden="true">#</a> 使用第三方套件庫</h2><p>如果執著於一定要安裝最新版的，<br> 那就要用第三方的套件庫了。</p><p>老話一句：「安裝一定有風險，三方套件有賺有賠，使用前應詳閱公開說明書。」</p>',6),w={href:"https://launchpad.net/~ondrej/+archive/ubuntu/php",target:"_blank",rel:"noopener noreferrer"},H=i(`<h3 id="下載指令" tabindex="-1"><a class="header-anchor" href="#下載指令" aria-hidden="true">#</a> 下載指令</h3><p>跟著該套件庫的教學將套件庫列表加入系統。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> software-properties-common
<span class="token function">sudo</span> add-apt-repository ppa:ondrej/php
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安裝-php-8-1-fpm-for-nginx" tabindex="-1"><a class="header-anchor" href="#安裝-php-8-1-fpm-for-nginx" aria-hidden="true">#</a> 安裝 PHP 8.1 FPM for Nginx</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-fpm
php-fpm8.1 <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安裝-php-8-1-擴充模組" tabindex="-1"><a class="header-anchor" href="#安裝-php-8-1-擴充模組" aria-hidden="true">#</a> 安裝 PHP 8.1 擴充模組</h3><p>指令參考如下，<code>extension_name</code> 要替換成擴充的名字。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-extension_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查詢可安裝的擴充列表" tabindex="-1"><a class="header-anchor" href="#查詢可安裝的擴充列表" aria-hidden="true">#</a> 查詢可安裝的擴充列表</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-cache</span> pkgnames php8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="常用的擴充" tabindex="-1"><a class="header-anchor" href="#常用的擴充" aria-hidden="true">#</a> 常用的擴充</h3>`,11),L={href:"https://laravel.com/docs/9.x/deployment",target:"_blank",rel:"noopener noreferrer"},N=n("br",null,null,-1),U=i(`<p>懶得打就整串丟進去跑吧。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-bcmath <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-bz2 <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-curl <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-dev <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-gd <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-imagick <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-imap <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-intl <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-mbstring <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-mysql <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-pgsql <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-redis <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-soap <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-xmlrpc <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.1-zip <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改設定" tabindex="-1"><a class="header-anchor" href="#修改設定" aria-hidden="true">#</a> 修改設定</h2><h3 id="檔案路徑" tabindex="-1"><a class="header-anchor" href="#檔案路徑" aria-hidden="true">#</a> 檔案路徑</h3><p>預設安裝的設定檔路徑就是這個。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/php/8.1/fpm/php.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="常用設定" tabindex="-1"><a class="header-anchor" href="#常用設定" aria-hidden="true">#</a> 常用設定</h4>`,7),V=i(`<h3 id="執行測試" tabindex="-1"><a class="header-anchor" href="#執行測試" aria-hidden="true">#</a> 執行測試</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> php-fpm8.1 <span class="token parameter variable">-t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重新啟動" tabindex="-1"><a class="header-anchor" href="#重新啟動" aria-hidden="true">#</a> 重新啟動</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> php8.1-fpm restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="權限設定" tabindex="-1"><a class="header-anchor" href="#權限設定" aria-hidden="true">#</a> 權限設定</h2><p>如果 <code>/var/log/nginx/error.log</code><br> 出現  <code>connect() to unix:/var/run/php/php8.1-fpm.sock failed (13: Permission denied)</code><br> 代表 php-fpm 的權限設定有問題<br> 由於預設用戶名稱為  <code>www-data</code><br> 但因為新版本的 nginx 的使用者名稱從  <code>www-data</code>  改成  <code>nginx</code><br> 所以  <code>/etc/php/8.1/fpm/pool.d/www.conf</code>  內要修改預設值</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>; Unix user/group of processes
; Note: The user is mandatory. If the group is not set, the default user&#39;s group
;       will be used.
user = nginx
group = nginx

; Set permissions for unix socket, if one is used. In Linux, read/write
; permissions must be set in order to allow connections from a web server. Many
; BSD-derived systems allow connections regardless of permissions. The owner
; and group can be specified either by name or by their numeric IDs.
; Default Values: user and group are set as the running user
;                 mode is set to 0660
listen.owner = nginx
listen.group = nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function j(I,z){const e=t("ExternalLinkIcon"),p=t("RouterLink");return l(),c("div",null,[v,m,b,n("p",null,[a("Ubuntu 20.04 對應的版本是 "),n("a",f,[a("PHP 7.4"),s(e)]),a("，"),k,a(" Ubuntu 22.04 對應的版本是 "),n("a",g,[a("PHP 8.1"),s(e)]),a("，")]),_,r(" more "),x,n("p",null,[a("目前 Ubuntu 22.04 對應的版本是 "),n("a",y,[a("PHP 8.1"),s(e)])]),P,n("p",null,[n("a",w,[a("https://launchpad.net/~ondrej/+archive/ubuntu/php"),s(e)])]),H,n("p",null,[a("根據 "),n("a",L,[a("Laravel 9 系統要求"),s(e)]),N,a(" 開發會用到，如果是使用 Laravel 就會要求要安裝。")]),U,n("p",null,[a("常用設定可參照這篇文章 "),s(p,{to:"/posts/2022-08-28-config-php/"},{default:d(()=>[a("PHP 常用設定")]),_:1})]),V])}const C=o(h,[["render",j],["__file","index.html.vue"]]);export{C as default};
