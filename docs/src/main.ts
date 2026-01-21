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
          <div>
            <code class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">#### H4</code>
            <h4 class="text-xl font-bold text-gray-900 mt-2">Heading 4</h4>
          </div>
          <div>
            <code class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">##### H5</code>
            <h5 class="text-lg font-bold text-gray-900 mt-2">Heading 5</h5>
          </div>
          <div>
            <code class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">###### H6</code>
            <h6 class="text-base font-bold text-gray-900 mt-2">Heading 6</h6>
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
        <button class="w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="X (Twitter)">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
        </button>
        <button class="w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="Instagram">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </button>
        <button class="w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="Note">
          <span class="font-bold text-sm">n</span>
        </button>
        <button class="w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center" title="GitHub">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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
