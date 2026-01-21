import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-12 px-4">
  <div class="max-w-4xl mx-auto">

    <!-- Header -->
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Design System</h1>
      <p class="text-gray-600">takayaso.com カラーパレット & コンポーネント</p>
    </header>

    <!-- Buttons Section -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Buttons</h2>

      <!-- Primary Button -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Primary</h3>
        <p class="text-sm text-gray-600 mb-4">メインアクション用。gray-900ベース。</p>
        <div class="flex flex-wrap gap-4 items-center">
          <button class="px-6 py-3 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
            Primary Button
          </button>
          <button class="w-12 h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Secondary Button -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Secondary</h3>
        <p class="text-sm text-gray-600 mb-4">サブアクション用。白背景、グレーボーダー。</p>
        <div class="flex flex-wrap gap-4 items-center">
          <button class="px-6 py-3 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-900 font-medium rounded-full border border-gray-300 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
            Secondary Button
          </button>
          <button class="w-12 h-12 bg-white hover:bg-gray-100 text-gray-900 rounded-full border border-gray-300 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Ghost Button -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Ghost</h3>
        <p class="text-sm text-gray-600 mb-4">最小限のスタイル。ホバーで背景表示。</p>
        <div class="flex flex-wrap gap-4 items-center">
          <button class="px-6 py-3 bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-900 font-medium rounded-full transition-all duration-200">
            Ghost Button
          </button>
          <button class="w-12 h-12 bg-transparent hover:bg-gray-100 text-gray-900 rounded-full transition-all duration-200 flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Outline Button -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Outline</h3>
        <p class="text-sm text-gray-600 mb-4">ボーダー強調。ホバーで塗りに変化。</p>
        <div class="flex flex-wrap gap-4 items-center">
          <button class="px-6 py-3 bg-transparent hover:bg-gray-900 active:bg-gray-800 text-gray-900 hover:text-white font-medium rounded-full border-2 border-gray-900 transition-all duration-200">
            Outline Button
          </button>
          <button class="w-12 h-12 bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded-full border-2 border-gray-900 transition-all duration-200 flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Destructive Button -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Destructive</h3>
        <p class="text-sm text-gray-600 mb-4">危険なアクション用。red-500ベース。</p>
        <div class="flex flex-wrap gap-4 items-center">
          <button class="px-6 py-3 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
            Delete
          </button>
          <button class="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Disabled Button -->
      <div class="mb-4">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Disabled</h3>
        <p class="text-sm text-gray-600 mb-4">無効状態。gray-200背景、gray-400テキスト。</p>
        <div class="flex flex-wrap gap-4 items-center">
          <button disabled class="px-6 py-3 bg-gray-200 text-gray-400 font-medium rounded-full cursor-not-allowed">
            Disabled Button
          </button>
          <button disabled class="w-12 h-12 bg-gray-200 text-gray-400 rounded-full cursor-not-allowed flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Links Section -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Links</h2>

      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Default Link</h3>
          <a href="#" class="text-gray-900 hover:text-gray-600 underline transition-colors duration-200">
            Standard text link
          </a>
        </div>

        <div>
          <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Accent Link</h3>
          <a href="#" class="text-blue-600 hover:text-blue-700 underline transition-colors duration-200">
            Highlighted link for emphasis
          </a>
        </div>

        <div>
          <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Navigation Link</h3>
          <div class="flex gap-6">
            <a href="#" class="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200">Home</a>
            <a href="#" class="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200">About</a>
            <a href="#" class="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200">Contact</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Elements Section -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Form Elements</h2>

      <!-- Input -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Input</h3>
        <div class="space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Normal</label>
            <input type="text" placeholder="Enter text..." class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all duration-200">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Error</label>
            <input type="text" value="Invalid input" class="w-full px-4 py-3 border-2 border-red-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 text-gray-900">
            <p class="mt-1 text-sm text-red-500">This field is required</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Disabled</label>
            <input type="text" placeholder="Disabled input" disabled class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-100 text-gray-400 cursor-not-allowed">
          </div>
        </div>
      </div>

      <!-- Textarea -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Textarea</h3>
        <div class="max-w-md">
          <textarea placeholder="Enter longer text..." rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all duration-200 resize-none"></textarea>
        </div>
      </div>

      <!-- Checkbox & Radio -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Checkbox & Radio</h3>
        <div class="flex gap-8">
          <div class="space-y-3">
            <label class="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-gray-900 focus:ring-gray-900">
              <span class="text-gray-900">Option 1</span>
            </label>
            <label class="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked class="w-5 h-5 rounded border-gray-300 text-gray-900 focus:ring-gray-900">
              <span class="text-gray-900">Option 2 (checked)</span>
            </label>
          </div>
          <div class="space-y-3">
            <label class="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="radio" class="w-5 h-5 border-gray-300 text-gray-900 focus:ring-gray-900">
              <span class="text-gray-900">Choice A</span>
            </label>
            <label class="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="radio" checked class="w-5 h-5 border-gray-300 text-gray-900 focus:ring-gray-900">
              <span class="text-gray-900">Choice B (selected)</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Select -->
      <div class="mb-4">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Select</h3>
        <div class="max-w-md">
          <select class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all duration-200 bg-white text-gray-900">
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>
    </section>

    <!-- Text Colors Section -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Text Colors</h2>

      <div class="space-y-4">
        <p class="text-gray-900 text-lg">Primary - gray-900 (#171717) - メインテキスト</p>
        <p class="text-gray-600 text-lg">Secondary - gray-600 (#525252) - サブテキスト</p>
        <p class="text-gray-500 text-lg">Muted - gray-500 (#737373) - 控えめテキスト</p>
        <p class="text-gray-400 text-lg">Disabled - gray-400 (#a3a3a3) - 無効テキスト</p>
      </div>

      <div class="mt-6 p-6 bg-gray-900 rounded-xl">
        <h3 class="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">On Dark Background</h3>
        <p class="text-gray-100 text-lg">Primary (dark) - #ededed</p>
        <p class="text-gray-400 text-lg">Secondary (dark) - #a3a3a3</p>
        <p class="text-gray-500 text-lg">Muted (dark) - #737373</p>
      </div>
    </section>

    <!-- Typography / Markdown Section -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Typography / Markdown</h2>

      <!-- Headings -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Headings</h3>
        <div class="space-y-4 border-l-4 border-gray-200 pl-6">
          <div>
            <code class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"># H1</code>
            <h1 class="text-4xl font-bold text-gray-900 mt-2">Heading 1</h1>
          </div>
          <div>
            <code class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">## H2</code>
            <h2 class="text-3xl font-bold text-gray-900 mt-2">Heading 2</h2>
          </div>
          <div>
            <code class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">### H3</code>
            <h3 class="text-2xl font-bold text-gray-900 mt-2">Heading 3</h3>
          </div>
        </div>
      </div>

      <!-- Paragraph -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Paragraph</h3>
        <p class="text-gray-700 leading-relaxed">
          これは本文テキストのサンプルです。<strong class="font-bold text-gray-900">太字テキスト</strong>と<em class="italic">斜体テキスト</em>を含みます。
          また<a href="#" class="text-gray-900 underline hover:text-gray-600 transition-colors">インラインリンク</a>もあります。
          <code class="text-sm bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded font-mono">インラインコード</code>も表示できます。
        </p>
      </div>

      <!-- Lists -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Lists</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <code class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded mb-3 inline-block">Unordered List</code>
            <ul class="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>リストアイテム 1</li>
              <li>リストアイテム 2
                <ul class="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                  <li>ネストアイテム A</li>
                  <li>ネストアイテム B</li>
                </ul>
              </li>
              <li>リストアイテム 3</li>
            </ul>
          </div>
          <div>
            <code class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded mb-3 inline-block">Ordered List</code>
            <ol class="list-decimal list-inside text-gray-700 space-y-2 mt-2">
              <li>最初のアイテム</li>
              <li>2番目のアイテム
                <ol class="list-decimal list-inside ml-6 mt-2 space-y-1 text-gray-600">
                  <li>サブアイテム 1</li>
                  <li>サブアイテム 2</li>
                </ol>
              </li>
              <li>3番目のアイテム</li>
            </ol>
          </div>
        </div>
      </div>

      <!-- Blockquote -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Blockquote</h3>
        <blockquote class="border-l-4 border-gray-400 pl-6 py-3 bg-gray-50 rounded-r-xl">
          <p class="text-gray-700 leading-relaxed">
            引用テキストはこのようにスタイリングされます。左ボーダーとグレー背景で視覚的に区別します。
          </p>
          <cite class="text-sm text-gray-500 mt-2 block not-italic">— 引用元</cite>
        </blockquote>
      </div>

      <!-- Message Boxes (Zenn style) -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Message Box (Zenn style)</h3>
        <div class="space-y-4">
          <!-- Info -->
          <div class="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div class="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="text-blue-800 text-sm leading-relaxed">
              <strong class="font-bold">Info:</strong> 補足情報や参考になる内容を伝えるときに使います。
            </div>
          </div>
          <!-- Warning -->
          <div class="flex gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <div class="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <div class="text-yellow-800 text-sm leading-relaxed">
              <strong class="font-bold">Warning:</strong> 注意が必要な内容を伝えるときに使います。
            </div>
          </div>
          <!-- Alert/Danger -->
          <div class="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div class="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div class="text-red-800 text-sm leading-relaxed">
              <strong class="font-bold">Alert:</strong> 重要な警告や危険な操作について伝えるときに使います。
            </div>
          </div>
          <!-- Tip -->
          <div class="flex gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
            <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <div class="text-green-800 text-sm leading-relaxed">
              <strong class="font-bold">Tip:</strong> 便利な情報やおすすめの方法を伝えるときに使います。
            </div>
          </div>
        </div>
      </div>

      <!-- Code Block with Language Label -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Code Block</h3>
        <div class="relative">
          <div class="absolute top-0 right-0 px-3 py-1 bg-gray-700 text-gray-300 text-xs font-mono rounded-bl-lg rounded-tr-xl">TypeScript</div>
          <pre class="bg-gray-900 text-gray-100 p-4 pt-8 rounded-xl overflow-x-auto font-mono text-sm leading-relaxed"><code><span class="text-gray-500">// コードブロックのサンプル</span>
<span class="text-purple-400">function</span> <span class="text-blue-300">greet</span>(<span class="text-orange-300">name</span>: <span class="text-green-300">string</span>): <span class="text-green-300">string</span> {
  <span class="text-purple-400">return</span> <span class="text-yellow-200">\`Hello, \${</span><span class="text-orange-300">name</span><span class="text-yellow-200">}!\`</span>;
}

<span class="text-blue-300">console</span>.<span class="text-yellow-300">log</span>(<span class="text-blue-300">greet</span>(<span class="text-yellow-200">'World'</span>));</code></pre>
        </div>
      </div>

      <!-- Details / Accordion (Zenn style) -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Details / Accordion</h3>
        <details class="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
          <summary class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 transition-colors">
            <span class="font-medium text-gray-900">クリックして詳細を表示</span>
            <svg class="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div class="px-4 pb-4 text-gray-700 leading-relaxed">
            <p>折りたたまれた詳細コンテンツがここに表示されます。長い補足説明やコードサンプルなどを隠しておくのに便利です。</p>
          </div>
        </details>
      </div>

      <!-- Link Card (note/Zenn style embed) -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Link Card</h3>
        <a href="#" class="block border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white">
          <div class="flex items-stretch">
            <div class="flex-1 p-4">
              <h4 class="font-bold text-gray-900 mb-1 line-clamp-2">記事タイトルがここに入ります - リンクカードのサンプル</h4>
              <p class="text-sm text-gray-500 line-clamp-2 mb-2">記事の説明文がここに表示されます。OGPのdescriptionから取得される内容です。</p>
              <div class="flex items-center gap-2 text-xs text-gray-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                <span>example.com</span>
              </div>
            </div>
            <div class="w-32 flex-shrink-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>

      <!-- Image with Caption (note style) -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Image with Caption</h3>
        <figure class="text-center">
          <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-48 flex items-center justify-center text-gray-400 mb-2">
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <figcaption class="text-sm text-gray-500">画像のキャプションがここに表示されます</figcaption>
        </figure>
      </div>

      <!-- Horizontal Rule -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Horizontal Rule</h3>
        <code class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded mb-3 inline-block">---</code>
        <hr class="border-t border-gray-300 mt-4">
      </div>

      <!-- Table -->
      <div class="mb-4">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Table</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-300">
                <th class="py-3 px-4 font-bold text-gray-900 bg-gray-50">Header 1</th>
                <th class="py-3 px-4 font-bold text-gray-900 bg-gray-50">Header 2</th>
                <th class="py-3 px-4 font-bold text-gray-900 bg-gray-50">Header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td class="py-3 px-4 text-gray-700">Cell 1-1</td>
                <td class="py-3 px-4 text-gray-700">Cell 1-2</td>
                <td class="py-3 px-4 text-gray-700">Cell 1-3</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td class="py-3 px-4 text-gray-700">Cell 2-1</td>
                <td class="py-3 px-4 text-gray-700">Cell 2-2</td>
                <td class="py-3 px-4 text-gray-700">Cell 2-3</td>
              </tr>
              <tr class="hover:bg-gray-50 transition-colors">
                <td class="py-3 px-4 text-gray-700">Cell 3-1</td>
                <td class="py-3 px-4 text-gray-700">Cell 3-2</td>
                <td class="py-3 px-4 text-gray-700">Cell 3-3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Cards</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-100">
          <h3 class="text-lg font-bold text-gray-900 mb-2">Standard Card</h3>
          <p class="text-gray-600">Basic card with subtle shadow and rounded corners.</p>
        </div>

        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <h3 class="text-lg font-bold text-gray-900 mb-2">Sunken Card</h3>
          <p class="text-gray-600">Card with sunken appearance using gray-50 background.</p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-2">Interactive Card</h3>
          <p class="text-gray-600">Card with lift effect on hover.</p>
        </div>

        <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-2">Gradient Card</h3>
          <p class="text-gray-600">Card with subtle gradient background.</p>
        </div>
      </div>
    </section>

    <!-- UI Components Section -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">UI Components</h2>

      <!-- Badge / Tag -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Badge / Tag</h3>
        <div class="flex flex-wrap gap-3">
          <span class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">Default</span>
          <span class="px-3 py-1 text-xs font-medium bg-gray-900 text-white rounded-full">Dark</span>
          <span class="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">Info</span>
          <span class="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Success</span>
          <span class="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">Warning</span>
          <span class="px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">Error</span>
          <span class="px-3 py-1 text-xs font-medium border border-gray-300 text-gray-700 rounded-full">Outline</span>
        </div>
      </div>

      <!-- Avatar -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Avatar</h3>
        <div class="flex items-end gap-4">
          <div class="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold">S</div>
          <div class="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
          <div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white text-base font-bold">L</div>
          <div class="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white text-lg font-bold">XL</div>
          <div class="relative">
            <div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full"></div>
            <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>

      <!-- Loading / Spinner -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Loading / Spinner</h3>
        <div class="flex items-center gap-6">
          <div class="w-6 h-6 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
          <div class="w-8 h-8 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
          <div class="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <div class="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            <span class="text-sm text-gray-600">Loading...</span>
          </div>
          <div class="flex gap-1">
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
          </div>
        </div>
      </div>

      <!-- Skeleton -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Skeleton</h3>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
              <div class="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div class="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
          </div>
          <div class="h-32 bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
      </div>

      <!-- Toast -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Toast / Notification</h3>
        <div class="space-y-3 max-w-sm">
          <div class="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-lg">
            <div class="w-5 h-5 text-green-500">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <p class="text-sm text-gray-700 flex-1">保存しました</p>
            <button class="text-gray-400 hover:text-gray-600">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div class="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl shadow-lg">
            <div class="w-5 h-5 text-red-500">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
            <p class="text-sm text-red-700 flex-1">エラーが発生しました</p>
            <button class="text-red-400 hover:text-red-600">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Breadcrumb -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Breadcrumb</h3>
        <nav class="flex items-center gap-2 text-sm">
          <a href="#" class="text-gray-500 hover:text-gray-900 transition-colors">Home</a>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <a href="#" class="text-gray-500 hover:text-gray-900 transition-colors">Blog</a>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span class="text-gray-900 font-medium">記事タイトル</span>
        </nav>
      </div>

      <!-- Pagination -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Pagination</h3>
        <div class="flex items-center gap-2">
          <button class="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">1</button>
          <button class="w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-lg">2</button>
          <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">3</button>
          <span class="text-gray-400">...</span>
          <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">10</button>
          <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>

      <!-- Tab -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Tab</h3>
        <div class="border-b border-gray-200">
          <nav class="flex gap-6">
            <button class="pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">Tab 1</button>
            <button class="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors">Tab 2</button>
            <button class="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors">Tab 3</button>
          </nav>
        </div>
        <div class="mt-4 p-4 bg-gray-50 rounded-xl">
          <p class="text-gray-700 text-sm">Tab 1 のコンテンツがここに表示されます。</p>
        </div>
      </div>

      <!-- Tooltip -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Tooltip</h3>
        <div class="flex items-center gap-8">
          <div class="relative group">
            <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">Hover me</button>
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              ツールチップテキスト
              <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
          <div class="relative group">
            <button class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              ヘルプ情報
              <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dropdown -->
      <div class="mb-4">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Dropdown Menu</h3>
        <div class="flex gap-4">
          <div class="relative">
            <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <span class="text-sm text-gray-700">Menu</span>
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-10">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Option 1</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Option 2</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Option 3</a>
              <hr class="my-1 border-gray-200">
              <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Layout Components Section -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Layout Components</h2>

      <!-- Header -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Header</h3>
        <div class="border border-gray-200 rounded-xl overflow-hidden">
          <header class="bg-white px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-8">
              <a href="#" class="text-xl font-bold text-gray-900">Logo</a>
              <nav class="hidden md:flex items-center gap-6">
                <a href="#" class="text-sm font-medium text-gray-900">Home</a>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              </nav>
            </div>
            <div class="flex items-center gap-4">
              <button class="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Login</button>
              <button class="hidden md:block px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">Sign Up</button>
              <button class="md:hidden w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
          </header>
        </div>
      </div>

      <!-- Header (Dark) -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Header (Dark)</h3>
        <div class="border border-gray-200 rounded-xl overflow-hidden">
          <header class="bg-gray-900 px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-8">
              <a href="#" class="text-xl font-bold text-white">Logo</a>
              <nav class="hidden md:flex items-center gap-6">
                <a href="#" class="text-sm font-medium text-white">Home</a>
                <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Blog</a>
                <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
              </nav>
            </div>
            <div class="flex items-center gap-4">
              <button class="hidden md:block px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">Login</button>
              <button class="hidden md:block px-4 py-2 text-sm font-medium bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors">Sign Up</button>
              <button class="md:hidden w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
          </header>
        </div>
      </div>

      <!-- Hamburger Menu Icon -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Hamburger Menu Icon</h3>
        <div class="flex items-center gap-6">
          <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <span class="text-sm text-gray-500">Open / Close</span>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Mobile Menu</h3>
        <div class="border border-gray-200 rounded-xl overflow-hidden max-w-xs">
          <div class="bg-white">
            <div class="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <span class="font-bold text-gray-900">Menu</span>
              <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <nav class="py-2">
              <a href="#" class="block px-4 py-3 text-gray-900 font-medium bg-gray-50">Home</a>
              <a href="#" class="block px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors">About</a>
              <a href="#" class="block px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors">Blog</a>
              <a href="#" class="block px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors">Contact</a>
            </nav>
            <div class="px-4 py-4 border-t border-gray-100 space-y-2">
              <button class="w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Login</button>
              <button class="w-full px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Footer</h3>
        <div class="border border-gray-200 rounded-xl overflow-hidden">
          <footer class="bg-gray-50 px-6 py-8">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 class="font-bold text-gray-900 mb-4">Logo</h4>
                <p class="text-sm text-gray-600">サイトの説明文がここに入ります。</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-4">Links</h4>
                <ul class="space-y-2 text-sm">
                  <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
                  <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
                  <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-4">Legal</h4>
                <ul class="space-y-2 text-sm">
                  <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a></li>
                  <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Terms</a></li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-4">SNS</h4>
                <div class="flex gap-3">
                  <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                  </a>
                  <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
              © 2025 Your Name. All rights reserved.
            </div>
          </footer>
        </div>
      </div>

      <!-- Hero Section -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Hero Section</h3>
        <div class="border border-gray-200 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-8 py-16 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Welcome to My Site</h1>
            <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">サブタイトルや説明文がここに入ります。訪問者にサイトの目的や価値を伝えます。</p>
            <div class="flex justify-center gap-4">
              <button class="px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">Get Started</button>
              <button class="px-6 py-3 bg-white text-gray-900 font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Search Bar</h3>
        <div class="space-y-4 max-w-md">
          <div class="relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="search" placeholder="Search..." class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all">
          </div>
          <div class="relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="search" placeholder="Search..." class="w-full pl-12 pr-12 py-3 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-gray-300 transition-all">
            <button class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-full">Search</button>
          </div>
        </div>
      </div>

      <!-- Modal / Dialog -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Modal / Dialog</h3>
        <div class="relative bg-gray-900/50 rounded-xl p-8">
          <div class="bg-white rounded-2xl shadow-xl max-w-md mx-auto overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 class="font-bold text-gray-900">Modal Title</h3>
              <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div class="px-6 py-4">
              <p class="text-gray-600 text-sm">モーダルの本文コンテンツがここに表示されます。確認メッセージやフォームなどを配置できます。</p>
            </div>
            <div class="px-6 py-4 bg-gray-50 flex justify-end gap-3">
              <button class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Cancel</button>
              <button class="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">Confirm</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Sidebar</h3>
        <div class="border border-gray-200 rounded-xl overflow-hidden max-w-xs">
          <div class="bg-white w-64 h-auto">
            <div class="px-4 py-4 border-b border-gray-100">
              <span class="font-bold text-gray-900">Dashboard</span>
            </div>
            <nav class="py-2">
              <a href="#" class="flex items-center gap-3 px-4 py-2.5 text-gray-900 bg-gray-100 font-medium">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                <span>Home</span>
              </a>
              <a href="#" class="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span>Profile</span>
              </a>
              <a href="#" class="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Settings</span>
              </a>
              <hr class="my-2 border-gray-100">
              <a href="#" class="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                <span>Logout</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      <!-- Article Card -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Article Card</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-40 bg-gradient-to-br from-gray-200 to-gray-300"></div>
            <div class="p-5">
              <div class="flex gap-2 mb-3">
                <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">Tech</span>
              </div>
              <h4 class="font-bold text-gray-900 mb-2">記事タイトルがここに入ります</h4>
              <p class="text-sm text-gray-600 mb-4 line-clamp-2">記事の抜粋や説明文がここに表示されます。読者の興味を引く内容を...</p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span>2025.01.21</span>
                <a href="#" class="text-gray-900 hover:underline">Read more →</a>
              </div>
            </div>
          </article>
          <article class="flex bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="w-32 flex-shrink-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
            <div class="p-4 flex flex-col justify-between">
              <div>
                <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Life</span>
                <h4 class="font-bold text-gray-900 mt-2 mb-1 line-clamp-2">横長カードの記事タイトル</h4>
                <p class="text-sm text-gray-600 line-clamp-2">記事の説明文...</p>
              </div>
              <span class="text-xs text-gray-500">2025.01.20</span>
            </div>
          </article>
        </div>
      </div>

      <!-- Profile Card -->
      <div class="mb-8">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Profile Card</h3>
        <div class="max-w-sm">
          <div class="bg-white rounded-2xl shadow-md p-6 text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-4"></div>
            <h4 class="font-bold text-gray-900 mb-1">Your Name</h4>
            <p class="text-sm text-gray-500 mb-4">Web Developer / Designer</p>
            <p class="text-sm text-gray-600 mb-4">自己紹介文がここに入ります。趣味や得意分野などを書きます。</p>
            <div class="flex justify-center gap-3">
              <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </a>
              <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline / Log -->
      <div class="mb-4">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Timeline / Log</h3>

        <!-- Style 1: Vertical Timeline with Line -->
        <div class="mb-8">
          <h4 class="text-xs text-gray-400 mb-3">Vertical Timeline</h4>
          <div class="relative pl-8 border-l-2 border-gray-200 space-y-8">
            <div class="relative">
              <div class="absolute -left-[25px] w-4 h-4 bg-gray-900 rounded-full border-4 border-white"></div>
              <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow">
                <time class="text-xs text-gray-500 mb-1 block">2025.01.21</time>
                <h4 class="font-bold text-gray-900 mb-1">新しい記事を投稿しました</h4>
                <p class="text-sm text-gray-600">タイムラインの説明文がここに入ります。活動の詳細など...</p>
              </div>
            </div>
            <div class="relative">
              <div class="absolute -left-[25px] w-4 h-4 bg-gray-400 rounded-full border-4 border-white"></div>
              <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow">
                <time class="text-xs text-gray-500 mb-1 block">2025.01.18</time>
                <h4 class="font-bold text-gray-900 mb-1">プロジェクトをリリース</h4>
                <p class="text-sm text-gray-600">新しいプロジェクトの詳細について...</p>
              </div>
            </div>
            <div class="relative">
              <div class="absolute -left-[25px] w-4 h-4 bg-gray-400 rounded-full border-4 border-white"></div>
              <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow">
                <time class="text-xs text-gray-500 mb-1 block">2025.01.10</time>
                <h4 class="font-bold text-gray-900 mb-1">イベントに参加</h4>
                <p class="text-sm text-gray-600">参加したイベントの感想など...</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Style 2: Simple Log List -->
        <div class="mb-8">
          <h4 class="text-xs text-gray-400 mb-3">Simple Log List</h4>
          <div class="bg-white rounded-xl shadow-md divide-y divide-gray-100">
            <a href="#" class="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group">
              <time class="text-sm text-gray-500 w-24 flex-shrink-0">2025.01.21</time>
              <span class="text-gray-900 group-hover:text-gray-600 transition-colors">新しい記事のタイトルがここに入ります</span>
              <svg class="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
            <a href="#" class="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group">
              <time class="text-sm text-gray-500 w-24 flex-shrink-0">2025.01.18</time>
              <span class="text-gray-900 group-hover:text-gray-600 transition-colors">プロジェクトのリリースについて</span>
              <svg class="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
            <a href="#" class="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group">
              <time class="text-sm text-gray-500 w-24 flex-shrink-0">2025.01.10</time>
              <span class="text-gray-900 group-hover:text-gray-600 transition-colors">イベントの振り返り</span>
              <svg class="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>

        <!-- Style 3: Year-Month Grouped -->
        <div class="mb-8">
          <h4 class="text-xs text-gray-400 mb-3">Year-Month Grouped</h4>
          <div class="space-y-6">
            <div>
              <h5 class="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span class="w-2 h-2 bg-gray-900 rounded-full"></span>
                2025年1月
              </h5>
              <ul class="space-y-2 pl-4 border-l border-gray-200">
                <li>
                  <a href="#" class="flex items-baseline gap-3 py-1 text-gray-700 hover:text-gray-900 transition-colors">
                    <time class="text-xs text-gray-400 w-8">21日</time>
                    <span>新しい記事のタイトル</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-baseline gap-3 py-1 text-gray-700 hover:text-gray-900 transition-colors">
                    <time class="text-xs text-gray-400 w-8">18日</time>
                    <span>プロジェクトのリリース</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-baseline gap-3 py-1 text-gray-700 hover:text-gray-900 transition-colors">
                    <time class="text-xs text-gray-400 w-8">10日</time>
                    <span>イベント参加レポート</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 class="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
                2024年12月
              </h5>
              <ul class="space-y-2 pl-4 border-l border-gray-200">
                <li>
                  <a href="#" class="flex items-baseline gap-3 py-1 text-gray-700 hover:text-gray-900 transition-colors">
                    <time class="text-xs text-gray-400 w-8">25日</time>
                    <span>年末のご挨拶</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-baseline gap-3 py-1 text-gray-700 hover:text-gray-900 transition-colors">
                    <time class="text-xs text-gray-400 w-8">15日</time>
                    <span>12月のまとめ</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Style 4: Card-based Timeline -->
        <div>
          <h4 class="text-xs text-gray-400 mb-3">Card Timeline with Tags</h4>
          <div class="space-y-4">
            <article class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">Tech</span>
                <time class="text-xs text-gray-500">2025.01.21</time>
              </div>
              <h4 class="font-bold text-gray-900 mb-2">新しい技術を試してみた</h4>
              <p class="text-sm text-gray-600 line-clamp-2">最近気になっていた技術を実際に使ってみた感想と、学んだことをまとめました...</p>
            </article>
            <article class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">Life</span>
                <time class="text-xs text-gray-500">2025.01.18</time>
              </div>
              <h4 class="font-bold text-gray-900 mb-2">週末の過ごし方</h4>
              <p class="text-sm text-gray-600 line-clamp-2">リフレッシュのために出かけた先での出来事など...</p>
            </article>
            <article class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">Work</span>
                <time class="text-xs text-gray-500">2025.01.10</time>
              </div>
              <h4 class="font-bold text-gray-900 mb-2">プロジェクト完了報告</h4>
              <p class="text-sm text-gray-600 line-clamp-2">長期間取り組んでいたプロジェクトがついに完了しました...</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Status Colors Section -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Status Colors</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-4 bg-green-50 border border-green-200 rounded-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
            <h3 class="font-medium text-green-700">Success</h3>
          </div>
          <p class="text-green-600 text-sm">Operation completed successfully.</p>
        </div>

        <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <h3 class="font-medium text-yellow-700">Warning</h3>
          </div>
          <p class="text-yellow-600 text-sm">Please review before proceeding.</p>
        </div>

        <div class="p-4 bg-red-50 border border-red-200 rounded-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="w-3 h-3 bg-red-500 rounded-full"></span>
            <h3 class="font-medium text-red-700">Error</h3>
          </div>
          <p class="text-red-600 text-sm">Something went wrong.</p>
        </div>

        <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="w-3 h-3 bg-blue-500 rounded-full"></span>
            <h3 class="font-medium text-blue-700">Info</h3>
          </div>
          <p class="text-blue-600 text-sm">Additional information available.</p>
        </div>
      </div>
    </section>

    <!-- Brand Colors Section -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Brand / SNS Colors</h2>

      <div class="flex flex-wrap gap-4">
        <button class="w-12 h-12 bg-white text-gray-900 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="X (Twitter)">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
        </button>
        <button class="w-12 h-12 bg-white text-pink-500 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="Instagram">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
        </button>
        <button class="w-12 h-12 bg-white text-red-500 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="YouTube">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
        </button>
        <button class="w-12 h-12 bg-white text-gray-900 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="TikTok">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
        </button>
        <button class="w-12 h-12 bg-white text-green-500 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="Note">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
        </button>
        <button class="w-12 h-12 bg-white text-blue-500 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="Facebook">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </button>
        <button class="w-12 h-12 bg-white text-blue-400 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="LinkedIn">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </button>
        <button class="w-12 h-12 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="GitHub">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </button>
      </div>
    </section>

    <!-- Gray Scale Section -->
    <section class="bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Gray Scale</h2>

      <div class="grid grid-cols-5 md:grid-cols-10 gap-2">
        <div class="text-center">
          <div class="w-full aspect-square bg-gray-50 rounded-lg border border-gray-200 mb-2"></div>
          <span class="text-xs text-gray-600">50</span>
        </div>
        <div class="text-center">
          <div class="w-full aspect-square bg-gray-100 rounded-lg mb-2"></div>
          <span class="text-xs text-gray-600">100</span>
        </div>
        <div class="text-center">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-2"></div>
          <span class="text-xs text-gray-600">200</span>
        </div>
        <div class="text-center">
          <div class="w-full aspect-square bg-gray-300 rounded-lg mb-2"></div>
          <span class="text-xs text-gray-600">300</span>
        </div>
        <div class="text-center">
          <div class="w-full aspect-square bg-gray-400 rounded-lg mb-2"></div>
          <span class="text-xs text-gray-600">400</span>
        </div>
        <div class="text-center">
          <div class="w-full aspect-square bg-gray-500 rounded-lg mb-2"></div>
          <span class="text-xs text-gray-600">500</span>
        </div>
        <div class="text-center">
          <div class="w-full aspect-square bg-gray-600 rounded-lg mb-2"></div>
          <span class="text-xs text-gray-600">600</span>
        </div>
        <div class="text-center">
          <div class="w-full aspect-square bg-gray-700 rounded-lg mb-2"></div>
          <span class="text-xs text-gray-600">700</span>
        </div>
        <div class="text-center">
          <div class="w-full aspect-square bg-gray-800 rounded-lg mb-2"></div>
          <span class="text-xs text-gray-600">800</span>
        </div>
        <div class="text-center">
          <div class="w-full aspect-square bg-gray-900 rounded-lg mb-2"></div>
          <span class="text-xs text-gray-600">900</span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center mt-12 text-gray-500 text-sm">
      <p>takayaso.com Design System Preview</p>
    </footer>

  </div>
</div>
`
