webpackJsonp([1641542509237],{363:function(t,n){t.exports={data:{markdownRemark:{html:'<p><em>Note: This is where the Intermediate React course starts. All lessons from 12-20 on out are self-contained and always start from the <a href="https://github.com/btholt/complete-intro-to-react-v4">master branch</a> of the git repository.</em></p>\n<p><strong>To get reset to the latest code:</strong></p>\n<ul>\n<li><code class="language-text">git clone git@github.com:btholt/complete-intro-to-react-v4.git</code></li>\n<li><code class="language-text">git checkout master -f</code></li>\n<li>Make sure you have <a href="https://nodejs.org">Node.js installed</a>.</li>\n<li><code class="language-text">npm install</code></li>\n<li>Add <code class="language-text">API_KEY</code> and <code class="language-text">API_SECRET</code> to a <code class="language-text">.env</code> file (<a href="react-state-and-lifecycles">more info in previous section</a>)</li>\n<li><code class="language-text">npm run dev</code> to start the server on <a href="http://localhost:1234/">http://localhost:1234/</a></li>\n</ul>\n<p>This is meant to be a very brief treatise on how to do testing on React applications. Frontend Masters already has a <a href="https://frontendmasters.com/courses/testing-react/">thorough course on how to test React applications</a> here from Kent C. Dodds. This will be a brief intro on how to set up Jest tests for the application we just created.</p>\n<h2 id="testing-with-jest"><a href="#testing-with-jest" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing with Jest</h2>\n<p>First we\'ll start with <a href="https://jestjs.io">Jest</a>. Jest is the testing framework that Facebook puts out. It is not at all tied to React despite both being maintained by Facebook. It\'s useful for other frameworks and I use it frequently with Node.js applications.</p>\n<p>It\'s useful to know that Jest is built on top of <a href="https://jasmine.github.io/">Jasmine</a>. Jasmine does the underlying testing part while Jest is the highlevel runner of the tests. Sometimes it\'s useful to consult the Jasmine docs too.</p>\n<p>So let\'s start testing our application. Run <code class="language-text">npm install -D jest react-test-renderer</code>.</p>\n<p>react-test-renderer is a tool directly from Facebook to rendering React component for testing purposes. Super useful.</p>\n<p>Next go into your src directory and create a folder called <code class="language-text">__tests__</code>. Notice that\'s double underscores on both sides. Why double? They borrowed it from Python where double underscores ("dunders" as I\'ve heard them called) mean something magic happens. In this case, Jest assumes all JS files in here are tests.</p>\n<p>We\'re going to write tests for Details. Make a file called Details.test.js. In there put:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> create <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-test-renderer"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Details <span class="token keyword">from</span> <span class="token string">"../Details"</span><span class="token punctuation">;</span>\n\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"snapshot"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Details <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="language-text">test</code> and <code class="language-text">expect</code> come from Jasmine via Jest and are injected in the global scope. To fix your lint errors, add this your <code class="language-text">env</code> in your .eslintrc.json: <code class="language-text">&quot;jest&quot;: true</code>.</p>\n<p>Here we\'re doing a Jest test in which we\'re doing a snapshot test. As soon as you run this test the first time, it\'ll run and capture the output in a snapshot file (you\'ll see it after you run it successfully the first time.) Every time afterwards when you run it it will compare the output with this snapshot. If it changes, it\'ll fail the test. If you mean to change it, you just run <code class="language-text">jest -u</code> and it will update the snapshots. Cool, right?</p>\n<p>Add that your package.json: <code class="language-text">&quot;test:update&quot;: &quot;jest -u&quot;,</code></p>\n<p>Let\'s go make it run first though. First we need to complete our Babel config. Jest doesn\'t know how to use Parcel\'s Babel config so we need to make ours complete. Update it to this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">"env"</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">"targets"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">"browsers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"last 2 versions"</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">"react"</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"transform-class-properties"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"transform-es2015-modules-commonjs"</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now run <code class="language-text">npm install -D babel-preset-env babel-plugin-transform-es2015-modules-commonjs</code>.</p>\n<p>We\'ve made it so whenever we run tests, Jest will apply these transformation. Specifically we have to make our browser code work in Node.js, hence the module transformation (since those don\'t work in Node yet.)</p>\n<p>Also add this to your package.json:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"jest"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"transformIgnorePatterns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"/node_modules/(?!petfinder-client).+"</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p>I didn\'t transpile my module so have Jest do it for you.</p>\n<p>Now your snapshot test should pass. Check out that it created a <code class="language-text">__snapshots__</code> directory with your snapshot in it. You should commit this file as everyone should get the same output as you.</p>\n<p>Let\'s add one more test.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"shows modal when toggleModal is called"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Details search<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> instance <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>showModal<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  instance<span class="token punctuation">.</span><span class="token function">toggleModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>showModal<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This creates an instance of your component and lets your run the functions on it. I don\'t show you this to show you a particularly good test: testing implementation details isn\'t necessarily a good idea, but wanted to show you how to get a handle on an instance.</p>\n<p>You\'ll notice that petfinder-client doesn\'t like being run in Node environments since it runs on jsonp. To make it shut up, just run <code class="language-text">jest --silent</code>.</p>\n<p>Let\'s talk about code coverage. Luckily has it built into jest because it can be a bit of a pain to set up. It\'s a tool called <a href="">istanbul</a>. Istanbul generates a report of how much of you code is covered by tests. It\'s a useful metric to track you\'re generally adding tests when you add new features but by no means does a 100% test-covered project means that those tests are good. It\'s easy to write garbage tests, and garbage tests hurt more than help.</p>\n<p>In any case, run <code class="language-text">npx jest --coverage</code> to try it out. It\'ll show you an outline of the results in the CLI and then generate a report in a new <code class="language-text">coverage</code> directory (don\'t check this in to git.) Open coverage/lcov-report/index.html to see a nice web page outlining your test coverage. Add this to your package.json:\n<code class="language-text">&quot;test:coverage&quot;: &quot;jest --coverage&quot;,</code>.</p>\n<p>One more useful thing about Jest: watch mode. You can run your tests interactively and on file-save. It\'ll only re-run tests that could have possibly been changed and previously failed so it\'s a fast feedback cycle to fix tests. Add this as well to your package.json: <code class="language-text">&quot;test:watch&quot;: &quot;jest --watch&quot;,</code>.</p>\n<p>If you want to go further with testing, checkout <a href="http://airbnb.io/enzyme/">Enzyme</a>, which I taught in former versions on this course.</p>\n<h2 id="-d887a47606ef0bc7c6536e2afa9fd5b977442508-branch-testing"><a href="#-d887a47606ef0bc7c6536e2afa9fd5b977442508-branch-testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🌳 d887a47606ef0bc7c6536e2afa9fd5b977442508 (branch testing)</h2>\n<p>[istanbul]:</p>',frontmatter:{path:"/testing",title:"Testing",order:13}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:1,path:"/intro",title:"Introduction"}}},{node:{frontmatter:{order:2,path:"/pure-react",title:"Pure React"}}},{node:{frontmatter:{order:3,path:"/eslint-prettier",title:"npm, ESLint & Prettier"}}},{node:{frontmatter:{order:4,path:"/parcel",title:"Parcel"}}},{node:{frontmatter:{order:5,path:"/jsx",title:"JSX"}}},{node:{frontmatter:{order:6,path:"/react-state-and-lifecycles",title:"State and Lifecycle Methods with React"}}},{node:{frontmatter:{order:7,path:"/reach-router",title:"Reach Router"}}},{node:{frontmatter:{order:8,path:"/async-and-events-in-react",title:"Handling Events and Async UIs with React"}}},{node:{frontmatter:{order:9,path:"/forms",title:"Forms with React"}}},{node:{frontmatter:{order:10,path:"/context",title:"Context"}}},{node:{frontmatter:{order:11,path:"/portals",title:"Portals"}}},{node:{frontmatter:{order:12,path:"/conclusion",title:"Conclusion"}}},{node:{frontmatter:{order:13,path:"/testing",title:"Testing"}}},{node:{frontmatter:{order:14,path:"/emotion",title:"Emotion"}}},{node:{frontmatter:{order:15,path:"/code-splitting",title:"Code Splitting"}}},{node:{frontmatter:{order:16,path:"/redux",title:"Redux"}}},{node:{frontmatter:{order:17,path:"/server-side-rendering",title:"Server Side Rendering"}}},{node:{frontmatter:{order:18,path:"/preact",title:"Preact"}}},{node:{frontmatter:{order:19,path:"/code-organization",title:"Code Organization"}}},{node:{frontmatter:{order:20,path:"/typescript",title:"TypeScript"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---testing-80cc89dc7cea13f1d64c.js.map