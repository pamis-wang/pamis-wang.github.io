const t=JSON.parse('{"key":"v-c1b3baf6","path":"/posts/2022-08-06-install-ubuntu-php-7/","title":"在 Ubuntu 安裝 PHP 7","lang":"zh-TW","frontmatter":{"title":"在 Ubuntu 安裝 PHP 7","description":"在 Ubuntu 安裝 PHP 7","date":"2022-08-06T00:00:00.000Z","category":"後端","tag":["PHP","PHP 7","Ubuntu","Ubuntu 22.04"],"head":[["meta",{"property":"og:url","content":"https://pamiswang.github.io/posts/2022-08-06-install-ubuntu-php-7/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"在 Ubuntu 安裝 PHP 7"}],["meta",{"property":"og:description","content":"在 Ubuntu 安裝 PHP 7"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2024-02-25T10:12:13.000Z"}],["meta",{"property":"article:author","content":"Pamis Wang"}],["meta",{"property":"article:tag","content":"PHP"}],["meta",{"property":"article:tag","content":"PHP 7"}],["meta",{"property":"article:tag","content":"Ubuntu"}],["meta",{"property":"article:tag","content":"Ubuntu 22.04"}],["meta",{"property":"article:published_time","content":"2022-08-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-25T10:12:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 Ubuntu 安裝 PHP 7\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-25T10:12:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamiswang.github.io\\",\\"email\\":\\"pamis1116@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"下載安裝","slug":"下載安裝","link":"#下載安裝","children":[{"level":3,"title":"使用第三方套件庫","slug":"使用第三方套件庫","link":"#使用第三方套件庫","children":[]},{"level":3,"title":"下載指令","slug":"下載指令","link":"#下載指令","children":[]},{"level":3,"title":"安裝 PHP 7.4 FPM for Nginx","slug":"安裝-php-7-4-fpm-for-nginx","link":"#安裝-php-7-4-fpm-for-nginx","children":[]},{"level":3,"title":"安裝 PHP 7.4 擴充模組","slug":"安裝-php-7-4-擴充模組","link":"#安裝-php-7-4-擴充模組","children":[]},{"level":3,"title":"常用的擴充","slug":"常用的擴充","link":"#常用的擴充","children":[]}]},{"level":2,"title":"修改設定","slug":"修改設定","link":"#修改設定","children":[{"level":3,"title":"檔案路徑","slug":"檔案路徑","link":"#檔案路徑","children":[]},{"level":3,"title":"常用設定","slug":"常用設定","link":"#常用設定","children":[]},{"level":3,"title":"執行測試","slug":"執行測試","link":"#執行測試","children":[]},{"level":3,"title":"重新啟動","slug":"重新啟動","link":"#重新啟動","children":[]}]},{"level":2,"title":"權限設定","slug":"權限設定","link":"#權限設定","children":[]}],"git":{"createdTime":1690378716000,"updatedTime":1708855933000,"contributors":[{"name":"pamis","email":"pamis1116@gmail.com","commits":2},{"name":"Pamis Wang","email":"pamis1116@gmail.com","commits":1}]},"readingTime":{"minutes":2.22,"words":665},"filePathRelative":"posts/2022-08-06-install-ubuntu-php-7/index.md","localizedDate":"2022年8月6日","excerpt":"<h1> 在 Ubuntu 安裝 PHP 7</h1>\\n<h2> 前言</h2>\\n<p>由於 Ubuntu 每個版本的作業系統對應的套件版本都不一樣，<br>\\n可以從命令列來查詢，也可以官網查詢。</p>\\n<p>Ubuntu 20.04 對應的版本是 <a href=\\"https://packages.ubuntu.com/focal/php\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PHP 7.4</a>，<br>\\nUbuntu 22.04 對應的版本是 <a href=\\"https://packages.ubuntu.com/jammy/php\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PHP 8.1</a>，</p>\\n<p>但如果為了要安裝 PHP 7.4，<br>\\n而選擇使用舊版的作業系統，<br>\\n那麼代價也太大了。</p>\\n<p>本文會記錄在 Ubuntu 22.04 安裝 PHP 7.4 的過程。</p>\\n"}');export{t as data};
