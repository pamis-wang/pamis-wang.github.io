import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as i,d,a as e,b as a,f as c}from"./app-26859401.js";const r={},t=e("h1",{id:"在-ubuntu-設定關閉-icmp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在-ubuntu-設定關閉-icmp","aria-hidden":"true"},"#"),a(" 在 Ubuntu 設定關閉 ICMP")],-1),l=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),a(" 前言")],-1),o=e("p",null,[a("當主機不通會使用 ping 指令來測試主機會不會通。"),e("br"),a(" 然而在一些特別的情況下不希望被 ping 到，"),e("br"),a(" 這時候可以關閉 ICMP 。"),e("br"),a(" 像是討人厭的資安稽核！！")],-1),h=c(`<h2 id="開啟設定" tabindex="-1"><a class="header-anchor" href="#開啟設定" aria-hidden="true">#</a> 開啟設定</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nano</span> /etc/sysctl.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改設定" tabindex="-1"><a class="header-anchor" href="#修改設定" aria-hidden="true">#</a> 修改設定</h2><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>net.ipv4.conf.all.accept_redirects = 0
net.ipv6.conf.all.accept_redirects = 0
net.ipv4.icmp_echo_ignore_all = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="套用設定" tabindex="-1"><a class="header-anchor" href="#套用設定" aria-hidden="true">#</a> 套用設定</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function u(p,m){return s(),i("div",null,[t,l,o,d(" more "),h])}const _=n(r,[["render",u],["__file","index.html.vue"]]);export{_ as default};
