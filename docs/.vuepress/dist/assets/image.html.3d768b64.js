import{_ as s,e as n}from"./app.36150068.js";const a={},p=n(`<h1 id="\u5904\u7406\u56FE\u7247\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u56FE\u7247\u8D44\u6E90" aria-hidden="true">#</a> \u5904\u7406\u56FE\u7247\u8D44\u6E90</h1><p>\u8FC7\u53BB\u5728 Webpack4 \u65F6\uFF0C\u6211\u4EEC\u5904\u7406\u56FE\u7247\u8D44\u6E90\u901A\u8FC7 <code>file-loader</code> \u548C <code>url-loader</code> \u8FDB\u884C\u5904\u7406</p><p>\u73B0\u5728 Webpack5 \u5DF2\u7ECF\u5C06\u4E24\u4E2A Loader \u529F\u80FD\u5185\u7F6E\u5230 Webpack \u91CC\u4E86\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7B80\u5355\u914D\u7F6E\u5373\u53EF\u5904\u7406\u56FE\u7247\u8D44\u6E90</p><h2 id="_1-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-\u914D\u7F6E" aria-hidden="true">#</a> 1. \u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u7528\u6765\u5339\u914D .css \u7ED3\u5C3E\u7684\u6587\u4EF6</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// use \u6570\u7EC4\u91CC\u9762 Loader \u6267\u884C\u987A\u5E8F\u662F\u4ECE\u53F3\u5230\u5DE6</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sass-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="_2-\u6DFB\u52A0\u56FE\u7247\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#_2-\u6DFB\u52A0\u56FE\u7247\u8D44\u6E90" aria-hidden="true">#</a> 2. \u6DFB\u52A0\u56FE\u7247\u8D44\u6E90</h2><ul><li>src/images/1.jpeg</li><li>src/images/2.png</li><li>src/images/3.gif</li></ul><h2 id="_3-\u4F7F\u7528\u56FE\u7247\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528\u56FE\u7247\u8D44\u6E90" aria-hidden="true">#</a> 3. \u4F7F\u7528\u56FE\u7247\u8D44\u6E90</h2><ul><li>src/less/index.less</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;../images/1.jpeg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>src/sass/index.sass</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>.box3
  <span class="token property">width</span><span class="token punctuation">:</span> 100px
  <span class="token property">height</span><span class="token punctuation">:</span> 100px
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;../images/2.png&quot;</span><span class="token punctuation">)</span></span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>src/styl/index.styl</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>.box5
  width 100px
  height 100px
  background-image <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;../images/3.gif&quot;</span><span class="token punctuation">)</span></span>
  background-size cover
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_4-\u8FD0\u884C\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-\u8FD0\u884C\u6307\u4EE4" aria-hidden="true">#</a> 4. \u8FD0\u884C\u6307\u4EE4</h2><div class="language-text ext-text"><pre class="language-text"><code>npx webpack
</code></pre></div><p>\u6253\u5F00 index.html \u9875\u9762\u67E5\u770B\u6548\u679C</p><h2 id="_5-\u8F93\u51FA\u8D44\u6E90\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_5-\u8F93\u51FA\u8D44\u6E90\u60C5\u51B5" aria-hidden="true">#</a> 5. \u8F93\u51FA\u8D44\u6E90\u60C5\u51B5</h2><p>\u6B64\u65F6\u5982\u679C\u67E5\u770B dist \u76EE\u5F55\u7684\u8BDD\uFF0C\u4F1A\u53D1\u73B0\u591A\u4E86\u4E09\u5F20\u56FE\u7247\u8D44\u6E90</p><p>\u56E0\u4E3A Webpack \u4F1A\u5C06\u6240\u6709\u6253\u5305\u597D\u7684\u8D44\u6E90\u8F93\u51FA\u5230 dist \u76EE\u5F55\u4E0B</p><ul><li>\u4E3A\u4EC0\u4E48\u6837\u5F0F\u8D44\u6E90\u6CA1\u6709\u5462\uFF1F</li></ul><p>\u56E0\u4E3A\u7ECF\u8FC7 <code>style-loader</code> \u7684\u5904\u7406\uFF0C\u6837\u5F0F\u8D44\u6E90\u6253\u5305\u5230 main.js \u91CC\u9762\u53BB\u4E86\uFF0C\u6240\u4EE5\u6CA1\u6709\u989D\u5916\u8F93\u51FA\u51FA\u6765</p><h2 id="_6-\u5BF9\u56FE\u7247\u8D44\u6E90\u8FDB\u884C\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_6-\u5BF9\u56FE\u7247\u8D44\u6E90\u8FDB\u884C\u4F18\u5316" aria-hidden="true">#</a> 6. \u5BF9\u56FE\u7247\u8D44\u6E90\u8FDB\u884C\u4F18\u5316</h2><p>\u5C06\u5C0F\u4E8E\u67D0\u4E2A\u5927\u5C0F\u7684\u56FE\u7247\u8F6C\u5316\u6210 data URI \u5F62\u5F0F\uFF08Base64 \u683C\u5F0F\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u7528\u6765\u5339\u914D .css \u7ED3\u5C3E\u7684\u6587\u4EF6</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// use \u6570\u7EC4\u91CC\u9762 Loader \u6267\u884C\u987A\u5E8F\u662F\u4ECE\u53F3\u5230\u5DE6</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sass-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token comment">// \u5C0F\u4E8E10kb\u7684\u56FE\u7247\u4F1A\u88ABbase64\u5904\u7406</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><ul><li>\u4F18\u70B9\uFF1A\u51CF\u5C11\u8BF7\u6C42\u6570\u91CF</li><li>\u7F3A\u70B9\uFF1A\u4F53\u79EF\u53D8\u5F97\u66F4\u5927</li></ul><p>\u6B64\u65F6\u8F93\u51FA\u7684\u56FE\u7247\u6587\u4EF6\u5C31\u53EA\u6709\u4E24\u5F20\uFF0C\u6709\u4E00\u5F20\u56FE\u7247\u4EE5 data URI \u5F62\u5F0F\u5185\u7F6E\u5230 js \u4E2D\u4E86 \uFF08\u6CE8\u610F\uFF1A\u9700\u8981\u5C06\u4E0A\u6B21\u6253\u5305\u751F\u6210\u7684\u6587\u4EF6\u6E05\u7A7A\uFF0C\u518D\u91CD\u65B0\u6253\u5305\u624D\u6709\u6548\u679C\uFF09</p>`,27);function e(t,o){return p}var l=s(a,[["render",e],["__file","image.html.vue"]]);export{l as default};
