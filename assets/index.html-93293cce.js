const e=JSON.parse('{"key":"v-1c7ab0b3","path":"/posts/2022-08-26-config-mariadb-innodb-page-size/","title":"MariaDB 修改 innodb_page_size 設定問題","lang":"zh-TW","frontmatter":{"title":"MariaDB 修改 innodb_page_size 設定問題","description":"MariaDB 修改 innodb_page_size 設定問題","date":"2022-08-26T00:00:00.000Z","category":"資料庫","tag":["MariaDB","MariaDB 10.6"],"head":[["meta",{"property":"og:url","content":"https://pamiswang.github.io/posts/2022-08-26-config-mariadb-innodb-page-size/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"MariaDB 修改 innodb_page_size 設定問題"}],["meta",{"property":"og:description","content":"MariaDB 修改 innodb_page_size 設定問題"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2024-02-03T10:51:10.000Z"}],["meta",{"property":"article:author","content":"Pamis Wang"}],["meta",{"property":"article:tag","content":"MariaDB"}],["meta",{"property":"article:tag","content":"MariaDB 10.6"}],["meta",{"property":"article:published_time","content":"2022-08-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T10:51:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MariaDB 修改 innodb_page_size 設定問題\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T10:51:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamiswang.github.io\\",\\"email\\":\\"pamis1116@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"解決方式","slug":"解決方式","link":"#解決方式","children":[]},{"level":2,"title":"參考資料","slug":"參考資料","link":"#參考資料","children":[]}],"git":{"createdTime":1706957470000,"updatedTime":1706957470000,"contributors":[{"name":"Pamis Wang","email":"pamis1116@gmail.com","commits":1}]},"readingTime":{"minutes":0.58,"words":174},"filePathRelative":"posts/2022-08-26-config-mariadb-innodb-page-size/index.md","localizedDate":"2022年8月26日","excerpt":"<h1> MariaDB 修改 innodb_page_size 設定問題</h1>\\n<h2> 前言</h2>\\n<p>innodb_page_size 是 MySQL資料庫家族的一個系統設定，<br>\\n用於設定儲存引擎的分頁大小。</p>\\n<p>預設為 16K ，可用的設定為 4K、8K、16K、32K，<br>\\n較大的 innodb_page_size 可以減少 I/O 次數，提高查詢性能，<br>\\n但會占用較多的儲存空間，反之亦然。</p>\\n"}');export{e as data};
