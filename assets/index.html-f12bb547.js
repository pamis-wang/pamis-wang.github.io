import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as l,a as n,b as e,e as a,f as t}from"./app-26859401.js";const p={},d=t(`<h1 id="安裝-pgadmin-4" tabindex="-1"><a class="header-anchor" href="#安裝-pgadmin-4" aria-hidden="true">#</a> 安裝 pgAdmin 4</h1><p>建議安裝桌面版本方便設定就好</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#</span>
<span class="token comment"># 設定軟體庫</span>
<span class="token comment">#</span>
<span class="token comment"># 為軟體庫安裝公鑰（如果之前沒有安裝）：</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsS</span> https://www.pgadmin.org/static/packages_pgadmin_org.pub <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /usr/share/keyrings/packages-pgadmin-org.gpg

<span class="token comment"># 建立軟體庫設定文件：</span>
<span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo &quot;deb [signed-by=/usr/share/keyrings/packages-pgadmin-org.gpg] https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main&quot; &gt; /etc/apt/sources.list.d/pgadmin4.list &amp;&amp; apt update&#39;</span>

<span class="token comment">#</span>
<span class="token comment"># 安裝 pgAdmin</span>
<span class="token comment">#</span>

<span class="token comment"># 安裝桌面模式與網頁模式</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> pgadmin4

<span class="token comment"># 只安裝桌面模式</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> pgadmin4-desktop

<span class="token comment"># 只安裝網頁模式</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> pgadmin4-web

<span class="token comment"># 設定網絡服務器，如果安裝 pgadmin4-web</span>
<span class="token function">sudo</span> /usr/pgadmin4/bin/setup-web.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c={href:"https://www.pgadmin.org/download/pgadmin-4-apt/",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),u=n("br",null,null,-1),g=n("strong",null,"pgAdmin",-1),b=n("h1",{id:"取消密碼設定",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#取消密碼設定","aria-hidden":"true"},"#"),e(" 取消密碼設定")],-1),h=n("br",null,null,-1),_={href:"https://www.pgadmin.org/docs/pgadmin4/development/master_password.html",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),k={href:"https://www.pgadmin.org/docs/pgadmin4/development/config_py.html",target:"_blank",rel:"noopener noreferrer"},f=t('<p><code>config.py</code><br> 在 Windows 預設安裝路徑<code>C:\\Program Files\\pgAdmin 4\\v7\\web\\config.py</code><br> 在 Ubuntu 22.04 預設安裝路徑 <code>/usr/pgadmin4/web/config.py</code><br> 打開後將參數修改為<code>MASTER_PASSWORD_REQUIRED = False</code><br> 重開 pgAdmin 4 就生效了</p><h1 id="資料庫備份" tabindex="-1"><a class="header-anchor" href="#資料庫備份" aria-hidden="true">#</a> 資料庫備份</h1><p>針對單一資料庫選擇備份，選擇後點右鍵跳出選單。<br> ![[pgadmin_backup_1.jpg]]<br> 有三種格式可供選擇。</p><ul><li>Tar：包成一個壓縮檔案。</li><li>Plain：產出文字格式的 SQL 檔案。</li><li>Directory：產出目錄結構的檔案。<br> ![[pgadmin_backup_2.jpg]]<br> 可以選擇要匯出結構或是資料或兩者都要。<br> ![[pgadmin_backup_3.jpg]]<br> 如果是選擇 <code>Plain</code> 格式，建議把 <code>Use Column Inserts</code> 打勾，方便做資料的移轉。<br> ![[pgadmin_backup_4.jpg]]</li></ul><h1 id="資料庫還原" tabindex="-1"><a class="header-anchor" href="#資料庫還原" aria-hidden="true">#</a> 資料庫還原</h1><p>針對單一資料庫選擇還原，選擇後點右鍵跳出選單。<br> ![[pgadmin_restore_1.jpg]]<br> 只有 Tar 與 Directory 可以用這還原功能，Plain 要自己複製指令執行。<br> ![[pgadmin_restore_2.jpg]]<br> 如果還原檔內的資料表已經存在，會發生衝突錯誤，需要手動刪除或是勾選清空選項，沒有在還原檔內的。<br> ![[pgadmin_restore_3.jpg]]</p><h1 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h1>',7),w={href:"https://www.pgadmin.org/download/pgadmin-4-apt/",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),y={href:"https://jonny-huang.github.io/projects/05_postgresql_00/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.twblogs.net/a/5c9e6330bd9eee73ef4b6004",target:"_blank",rel:"noopener noreferrer"},P=n("br",null,null,-1),S={href:"https://ithelp.ithome.com.tw/articles/10297869",target:"_blank",rel:"noopener noreferrer"};function A(E,L){const s=r("ExternalLinkIcon");return o(),l("div",null,[d,n("p",null,[n("a",c,[e("官方下載教學"),a(s)]),m,e(" 第一次開啟會要求設定密碼，此處的密碼不是資料庫的連線密碼，"),u,e(" 而是"),g,e("這個管理工具的使用密碼。")]),b,n("p",null,[e("如果不想要設定可以取消，文件內有取消連線工具密碼的代償機制說明。"),h,n("a",_,[e("Master Password"),a(s)]),v,n("a",k,[e("The config.py File"),a(s)])]),f,n("p",null,[n("a",w,[e("官方下載教學"),a(s)]),x,n("a",y,[e("PostgreSQL 安裝、備份、還原"),a(s)])]),n("p",null,[n("a",j,[e("PostgreSQL 從入門到出門 第 8 篇 備份與恢復"),a(s)]),P,n("a",S,[e("PostgreSQL 資料庫備份還原"),a(s)])])])}const q=i(p,[["render",A],["__file","index.html.vue"]]);export{q as default};
