const e=JSON.parse('{"key":"v-e1262d10","path":"/posts/2022-12-20-install-ubuntu-docker/","title":"在 Ubuntu 上安裝 Docker","lang":"zh-TW","frontmatter":{"title":"在 Ubuntu 上安裝 Docker","date":"2022-12-20T00:00:00.000Z","category":"Docker","tag":["Ubuntu","Ubuntu 22.04","Docker"],"description":"在 Ubuntu 上安裝 Docker 先決條件 作業系統需求 要安裝 Docker，以下 Ubuntu 版本之一的 64 位版本： Ubuntu Kinetic 22.10 Ubuntu Jammy 22.04 (LTS) Ubuntu Focal 20.04 (LTS) Ubuntu Bionic 18.04 (LTS) Docker Engine 可兼容 x86_64、amd64、armhf、arm64、s390x 架構","head":[["meta",{"property":"og:url","content":"https://pamiswang.github.io/posts/2022-12-20-install-ubuntu-docker/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"在 Ubuntu 上安裝 Docker"}],["meta",{"property":"og:description","content":"在 Ubuntu 上安裝 Docker 先決條件 作業系統需求 要安裝 Docker，以下 Ubuntu 版本之一的 64 位版本： Ubuntu Kinetic 22.10 Ubuntu Jammy 22.04 (LTS) Ubuntu Focal 20.04 (LTS) Ubuntu Bionic 18.04 (LTS) Docker Engine 可兼容 x86_64、amd64、armhf、arm64、s390x 架構"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-07-17T17:48:08.000Z"}],["meta",{"property":"article:author","content":"Pamis Wang"}],["meta",{"property":"article:tag","content":"Ubuntu"}],["meta",{"property":"article:tag","content":"Ubuntu 22.04"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2022-12-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-17T17:48:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 Ubuntu 上安裝 Docker\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-17T17:48:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamiswang.github.io\\",\\"email\\":\\"pamis1116@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"先決條件","slug":"先決條件","link":"#先決條件","children":[{"level":3,"title":"作業系統需求","slug":"作業系統需求","link":"#作業系統需求","children":[]},{"level":3,"title":"移除過舊版本","slug":"移除過舊版本","link":"#移除過舊版本","children":[]}]},{"level":2,"title":"透過 docker 的官方 apt 儲存庫安裝","slug":"透過-docker-的官方-apt-儲存庫安裝","link":"#透過-docker-的官方-apt-儲存庫安裝","children":[{"level":3,"title":"設定儲存庫","slug":"設定儲存庫","link":"#設定儲存庫","children":[]},{"level":3,"title":"安裝 Docker Engine, containerd, Docker Compose","slug":"安裝-docker-engine-containerd-docker-compose","link":"#安裝-docker-engine-containerd-docker-compose","children":[]}]},{"level":2,"title":"讓 Docker 可以不需要以 SuperUser 權限執行","slug":"讓-docker-可以不需要以-superuser-權限執行","link":"#讓-docker-可以不需要以-superuser-權限執行","children":[{"level":3,"title":"新增群組名稱  docker","slug":"新增群組名稱-docker","link":"#新增群組名稱-docker","children":[]},{"level":3,"title":"新增使用者到  docker  群組","slug":"新增使用者到-docker-群組","link":"#新增使用者到-docker-群組","children":[]},{"level":3,"title":"登出並重新登入使成員身分刷新，或執行命令來啟用變更","slug":"登出並重新登入使成員身分刷新-或執行命令來啟用變更","link":"#登出並重新登入使成員身分刷新-或執行命令來啟用變更","children":[]}]}],"git":{"createdTime":1689521396000,"updatedTime":1689616088000,"contributors":[{"name":"pamis","email":"pamis1116@gmail.com","commits":3}]},"readingTime":{"minutes":1.43,"words":430},"filePathRelative":"posts/2022-12-20-install-ubuntu-docker/index.md","localizedDate":"2022年12月20日","excerpt":"<h1> 在 Ubuntu 上安裝 Docker</h1>\\n<h2> 先決條件</h2>\\n<h3> 作業系統需求</h3>\\n<p>要安裝 Docker，以下 Ubuntu 版本之一的 64 位版本：</p>\\n<ul>\\n<li>Ubuntu Kinetic 22.10</li>\\n<li>Ubuntu Jammy 22.04 (LTS)</li>\\n<li>Ubuntu Focal 20.04 (LTS)</li>\\n<li>Ubuntu Bionic 18.04 (LTS)</li>\\n</ul>\\n<p>Docker Engine 可兼容 <code>x86_64</code>、<code>amd64</code>、<code>armhf</code>、<code>arm64</code>、<code>s390x</code> 架構</p>","autoDesc":true}');export{e as data};
