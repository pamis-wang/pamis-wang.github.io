import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as r,d as l,a as n,b as a,e as s,f as i}from"./app-26859401.js";const c={},p=i('<h1 id="在-windows-使用-runhiddenconsole" tabindex="-1"><a class="header-anchor" href="#在-windows-使用-runhiddenconsole" aria-hidden="true">#</a> 在 Windows 使用 RunHiddenConsole</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>當我們在 Windows 平台，<br> 要使用 PHP 和 Nginx 開發網頁應用，<br> 通常要先打啟動指令。</p><p>然後就會有個小黑窗要掛著，<br> 如果不小心關掉那服務也就停掉了。</p><p>本篇文章就是給不想看到小黑窗或是懶得手動打指令的人。</p>',5),u=n("h2",{id:"runhiddenconsole-工具教學",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#runhiddenconsole-工具教學","aria-hidden":"true"},"#"),a(" RunHiddenConsole 工具教學")],-1),h=n("br",null,null,-1),b={href:"https://github.com/wenshui2008/RunHiddenConsole",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),v=i(`<h2 id="撰寫-bat-檔案" tabindex="-1"><a class="header-anchor" href="#撰寫-bat-檔案" aria-hidden="true">#</a> 撰寫 BAT 檔案</h2><h3 id="開啟-nginx-與-php-start-nginx-php-bat" tabindex="-1"><a class="header-anchor" href="#開啟-nginx-與-php-start-nginx-php-bat" aria-hidden="true">#</a> 開啟 Nginx 與 PHP ( start_nginx_php.bat )</h3><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
echo Starting PHP FastCGI...
D:\\WNMP\\RunHiddenConsole.exe D:\\WNMP\\php-8.1.5-nts-Win32-vs16-x64\\php-cgi.exe -b 127.0.0.1:9000
echo Starting nginx...
D:\\WNMP\\RunHiddenConsole.exe D:\\WNMP\\nginx-1.20.2\\nginx.exe -p D:\\WNMP\\nginx-1.20.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="關閉-nginx-與-php-stop-nginx-php-bat" tabindex="-1"><a class="header-anchor" href="#關閉-nginx-與-php-stop-nginx-php-bat" aria-hidden="true">#</a> 關閉 Nginx 與 PHP ( stop_nginx_php.bat )</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@echo off
<span class="token builtin class-name">echo</span> Stopping PHP FastCGI<span class="token punctuation">..</span>.
taskkill /F /IM php-cgi.exe <span class="token operator">&gt;</span> nul
<span class="token builtin class-name">echo</span> Stopping nginx<span class="token punctuation">..</span>.
taskkill /F /IM nginx.exe <span class="token operator">&gt;</span> nul
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="開啟-mariadb-start-mariadb-bat" tabindex="-1"><a class="header-anchor" href="#開啟-mariadb-start-mariadb-bat" aria-hidden="true">#</a> 開啟 MariaDB ( start_mariadb.bat )</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@echo off
<span class="token builtin class-name">echo</span> Starting MariaDB <span class="token punctuation">..</span>.
D:<span class="token punctuation">\\</span>WNMP<span class="token punctuation">\\</span>RunHiddenConsole.exe D:<span class="token punctuation">\\</span>WNMP<span class="token punctuation">\\</span>mariadb-10.6.7-winx64<span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span>mysqld --defaults-file<span class="token operator">=</span>D:<span class="token punctuation">\\</span>WNMP<span class="token punctuation">\\</span>mariadb-10.6.7-winx64<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>my.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="關閉-mariadb-stop-mariadb-bat" tabindex="-1"><a class="header-anchor" href="#關閉-mariadb-stop-mariadb-bat" aria-hidden="true">#</a> 關閉 MariaDB ( stop_mariadb.bat )</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@echo off
<span class="token builtin class-name">echo</span> Stopping MariaDB <span class="token punctuation">..</span>.
D:<span class="token punctuation">\\</span>WNMP<span class="token punctuation">\\</span>RunHiddenConsole.exe D:<span class="token punctuation">\\</span>WNMP<span class="token punctuation">\\</span>mariadb-10.6.7-winx64<span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span>mysqladmin <span class="token parameter variable">-u</span> root <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="參考文章" tabindex="-1"><a class="header-anchor" href="#參考文章" aria-hidden="true">#</a> 參考文章</h2>`,10),x={href:"https://blog.tarswork.com/post/install-php-on-windows",target:"_blank",rel:"noopener noreferrer"};function g(k,_){const e=o("ExternalLinkIcon");return d(),r("div",null,[p,l(" more "),u,n("p",null,[a("下載 RunHiddenConsole 工具"),h,n("a",b,[a("GitHub 載點"),s(e)]),m,a(" 可在 D:\\WNMP 撰寫 BAT 檔案省去打字")]),v,n("p",null,[n("a",x,[a("安裝 Windows + Nginx + PHP + MariaDB 環境"),s(e)])])])}const N=t(c,[["render",g],["__file","index.html.vue"]]);export{N as default};
