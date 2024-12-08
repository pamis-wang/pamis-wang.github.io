const e=JSON.parse('{"key":"v-0d025fe0","path":"/posts/2023-08-08-asp-dot-net-core-6-web-api-annotations/","title":"ASP.NET Core 6 Web API Swagger","lang":"zh-TW","frontmatter":{"title":"ASP.NET Core 6 Web API Swagger","date":"2023-08-08T00:00:00.000Z","category":"後端","tag":["ASP.NET Core","ASP.NET Core 6","Swagger","API"],"description":"ASP.NET Core 6 Web API Swagger 前言 一份好的 API 文件應該要有明確充足的說明， 不過在台灣一條龍開發的文化行之有年，要完善文件說明相對不容易。 工程師討厭的事情：「討厭別人不寫文件，討厭自己要寫文件」。 所以透過好用的工具配合程式註解產出文件可以有效降低大家的痛苦。 鬼島工程師ㄉ日常","head":[["meta",{"property":"og:url","content":"https://pamiswang.github.io/posts/2023-08-08-asp-dot-net-core-6-web-api-annotations/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"ASP.NET Core 6 Web API Swagger"}],["meta",{"property":"og:description","content":"ASP.NET Core 6 Web API Swagger 前言 一份好的 API 文件應該要有明確充足的說明， 不過在台灣一條龍開發的文化行之有年，要完善文件說明相對不容易。 工程師討厭的事情：「討厭別人不寫文件，討厭自己要寫文件」。 所以透過好用的工具配合程式註解產出文件可以有效降低大家的痛苦。 鬼島工程師ㄉ日常"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pamiswang.github.io/"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2024-04-29T17:19:49.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"ASP.NET Core 6 Web API Swagger"}],["meta",{"property":"article:author","content":"Pamis Wang"}],["meta",{"property":"article:tag","content":"ASP.NET Core"}],["meta",{"property":"article:tag","content":"ASP.NET Core 6"}],["meta",{"property":"article:tag","content":"Swagger"}],["meta",{"property":"article:tag","content":"API"}],["meta",{"property":"article:published_time","content":"2023-08-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-29T17:19:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ASP.NET Core 6 Web API Swagger\\",\\"image\\":[\\"https://pamiswang.github.io/\\"],\\"datePublished\\":\\"2023-08-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-29T17:19:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamiswang.github.io\\",\\"email\\":\\"pamis1116@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"Swagger 套件安裝","slug":"swagger-套件安裝","link":"#swagger-套件安裝","children":[{"level":3,"title":"選擇專案範本","slug":"選擇專案範本","link":"#選擇專案範本","children":[]},{"level":3,"title":"自行選擇安裝","slug":"自行選擇安裝","link":"#自行選擇安裝","children":[]}]},{"level":2,"title":"新增和設定 Swagger 中介軟體","slug":"新增和設定-swagger-中介軟體","link":"#新增和設定-swagger-中介軟體","children":[]},{"level":2,"title":"XML 註解","slug":"xml-註解","link":"#xml-註解","children":[{"level":3,"title":"啟用專案 XML 註解","slug":"啟用專案-xml-註解","link":"#啟用專案-xml-註解","children":[]},{"level":3,"title":"隱藏警告","slug":"隱藏警告","link":"#隱藏警告","children":[]},{"level":3,"title":"設定文件註解","slug":"設定文件註解","link":"#設定文件註解","children":[]},{"level":3,"title":"加入 XML 註解","slug":"加入-xml-註解","link":"#加入-xml-註解","children":[]},{"level":3,"title":"撰寫範例","slug":"撰寫範例","link":"#撰寫範例","children":[]},{"level":3,"title":"效果展示","slug":"效果展示","link":"#效果展示","children":[]}]},{"level":2,"title":"屬性標籤註解","slug":"屬性標籤註解","link":"#屬性標籤註解","children":[{"level":3,"title":"撰寫範例","slug":"撰寫範例-1","link":"#撰寫範例-1","children":[]},{"level":3,"title":"效果展示","slug":"效果展示-1","link":"#效果展示-1","children":[]}]},{"level":2,"title":"自訂屬性標籤","slug":"自訂屬性標籤","link":"#自訂屬性標籤","children":[{"level":3,"title":"套件介紹","slug":"套件介紹","link":"#套件介紹","children":[]},{"level":3,"title":"套件安裝","slug":"套件安裝","link":"#套件安裝","children":[]},{"level":3,"title":"啟用套件","slug":"啟用套件","link":"#啟用套件","children":[]},{"level":3,"title":"撰寫範例","slug":"撰寫範例-2","link":"#撰寫範例-2","children":[]},{"level":3,"title":"效果展示","slug":"效果展示-2","link":"#效果展示-2","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]},{"level":2,"title":"參考資料","slug":"參考資料","link":"#參考資料","children":[{"level":3,"title":"Swagger 入門","slug":"swagger-入門","link":"#swagger-入門","children":[]},{"level":3,"title":"使用 XML 註解","slug":"使用-xml-註解","link":"#使用-xml-註解","children":[]},{"level":3,"title":"屬性註解可用列表","slug":"屬性註解可用列表","link":"#屬性註解可用列表","children":[]},{"level":3,"title":"自訂屬性註解可用列表","slug":"自訂屬性註解可用列表","link":"#自訂屬性註解可用列表","children":[]}]}],"git":{"createdTime":1691489519000,"updatedTime":1714411189000,"contributors":[{"name":"pamis","email":"pamis1116@gmail.com","commits":4},{"name":"EXMAIL\\\\pamis","email":"pamis@mail.tca.org.tw","commits":1},{"name":"Pamis Wang","email":"pamis1116@gmail.com","commits":1}]},"readingTime":{"minutes":5.66,"words":1697},"filePathRelative":"posts/2023-08-08-asp-dot-net-core-6-web-api-annotations/index.md","localizedDate":"2023年8月8日","excerpt":"<h1> <a href=\\"http://ASP.NET\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ASP.NET</a> Core 6 Web API Swagger</h1>\\n<h2> 前言</h2>\\n<p>一份好的 API 文件應該要有明確充足的說明，<br>\\n不過在台灣一條龍開發的文化行之有年，要完善文件說明相對不容易。</p>\\n<p>工程師討厭的事情：「討厭別人不寫文件，討厭自己要寫文件」。</p>\\n<p>所以透過好用的工具配合程式註解產出文件可以有效降低大家的痛苦。</p>\\n<figure><figcaption style=\\"font-size: 1rem\\">鬼島工程師ㄉ日常</figcaption></figure>\\n","autoDesc":true}');export{e as data};
