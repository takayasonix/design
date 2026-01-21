'use client';

import { Github, Twitter, Instagram, File, ArrowLeft, ExternalLink, Plus, Download, Trash2, GraduationCap, Laptop, PenTool, Mic2, Cloud, Check, AlertTriangle, X, Info } from 'lucide-react';
import { useState } from 'react';

export default function DesignSystemPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [toggleOn, setToggleOn] = useState(false);

  const categories = [
    { id: 'all', name: 'すべて', icon: Cloud },
    { id: 'career', name: '経歴', icon: GraduationCap },
    { id: 'release', name: '作品', icon: Laptop },
    { id: 'article', name: '記事', icon: PenTool },
    { id: 'music', name: '音楽', icon: Mic2 }
  ];

  const socialLinks = [
    { name: 'X', icon: Twitter, color: 'text-blue-400' },
    { name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
    { name: 'note', icon: File, color: 'text-green-500' },
    { name: 'GitHub', icon: Github, color: 'text-gray-700' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Design System Preview
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            takayaso.com - ふわっと柔らかいデザイン
          </p>
        </div>

        {/* Section: Icon Buttons (Primary Pattern) */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-400">
            Icon Buttons（丸ボタン）
          </h2>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">SNS Links</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Category Filter</h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex flex-col items-center transition-all duration-200"
                >
                  <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 mb-2 ${
                    selectedCategory === category.id
                      ? 'bg-gray-700 text-white'
                      : 'bg-white text-gray-700'
                  }`}>
                    <category.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <span className={`text-xs font-medium ${
                    selectedCategory === category.id ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Sizes</h3>
            <div className="flex flex-wrap justify-center items-end gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700">
                  <Plus className="w-5 h-5" />
                </div>
                <span className="text-xs text-gray-500 mt-2">Small</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700">
                  <Plus className="w-6 h-6" />
                </div>
                <span className="text-xs text-gray-500 mt-2">Medium</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700">
                  <Plus className="w-8 h-8" />
                </div>
                <span className="text-xs text-gray-500 mt-2">Large</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Text Buttons (Pill Shape) */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-400">
            Text Buttons（ピル型）
          </h2>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Default</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900">
                <ArrowLeft size={20} />
                <span className="text-sm md:text-base font-medium">戻る</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900">
                <ExternalLink size={20} />
                <span className="text-sm md:text-base font-medium">開く</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900">
                <Download size={20} />
                <span className="text-sm md:text-base font-medium">ダウンロード</span>
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Primary (Dark)</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-full shadow-md hover:shadow-lg hover:bg-gray-800 transition-all duration-300 text-white">
                <Plus size={20} />
                <span className="text-sm md:text-base font-medium">追加する</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-white">
                <span className="text-sm md:text-base font-medium">送信</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Destructive</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-red-500 hover:text-red-600">
                <Trash2 size={20} />
                <span className="text-sm md:text-base font-medium">削除</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-red-500 rounded-full shadow-md hover:shadow-lg hover:bg-red-600 transition-all duration-300 text-white">
                <Trash2 size={20} />
                <span className="text-sm md:text-base font-medium">削除</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section: Cards */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-400">
            Cards
          </h2>

          <div className="space-y-4">
            {/* Timeline Card */}
            <div className="flex">
              <div className="w-10 h-10 bg-white rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-gray-700 shadow-md">
                <Laptop className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center h-10 mb-3">
                  <span className="text-xs md:text-sm font-medium text-gray-600">
                    リリースしました - 2025/01/15
                  </span>
                </div>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-shadow duration-300 h-[70px] md:h-[140px] cursor-pointer">
                  <div className="p-4 md:p-6 text-left flex flex-col justify-center h-full">
                    <h3 className="text-xs md:text-base font-semibold text-gray-900">
                      プロジェクト名
                    </h3>
                    <p className="text-[10px] md:text-sm text-gray-600 leading-relaxed">
                      ここに説明文が入ります。短い説明を書きます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Card */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-shadow duration-300 p-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                シンプルなカード
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                白背景 + rounded-2xl + shadow-md が基本スタイルです。
              </p>
            </div>
          </div>
        </section>

        {/* Section: Overlay / Modal */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-400">
            Overlay / Modal
          </h2>

          <div className="bg-gray-500/50 rounded-2xl p-6 md:p-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-md mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                オーバーレイタイトル
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-4">
                2025/01/15
              </p>
              <p className="text-sm text-gray-600 mb-6">
                オーバーレイの中身です。白いカードが中央に表示されます。
              </p>
              <div className="flex justify-center gap-3">
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700">
                  <ArrowLeft size={20} />
                  <span className="text-sm font-medium">戻る</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700">
                  <ExternalLink size={20} />
                  <span className="text-sm font-medium">開く</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Form Elements */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-400">
            Form Elements
          </h2>

          <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">テキスト入力</label>
              <input
                type="text"
                placeholder="入力してください..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition-all duration-200 text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">テキストエリア</label>
              <textarea
                placeholder="メッセージを入力..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition-all duration-200 text-gray-900 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">トグル</label>
              <button
                onClick={() => setToggleOn(!toggleOn)}
                className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${
                  toggleOn ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${
                  toggleOn ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">チェックボックス</label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-gray-700 focus:ring-gray-500" />
                  <span className="text-sm text-gray-700">オプション A</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-gray-700 focus:ring-gray-500" />
                  <span className="text-sm text-gray-700">オプション B</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Alerts */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-400">
            Alerts / Feedback
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-2xl border border-green-200">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-green-800">成功しました</p>
                <p className="text-sm text-green-700">変更が保存されました。</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-2xl border border-yellow-200">
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-yellow-800">注意</p>
                <p className="text-sm text-yellow-700">入力内容を確認してください。</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-2xl border border-red-200">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                <X className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-red-800">エラー</p>
                <p className="text-sm text-red-700">問題が発生しました。</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-200">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-blue-800">情報</p>
                <p className="text-sm text-blue-700">お知らせがあります。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Typography */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-400">
            Typography
          </h2>

          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <div>
              <span className="text-xs text-gray-400 font-mono">text-gray-800 / font-bold</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">見出しテキスト</h3>
            </div>
            <div>
              <span className="text-xs text-gray-400 font-mono">text-gray-700 / font-semibold</span>
              <h4 className="text-lg md:text-xl font-semibold text-gray-700">サブ見出し</h4>
            </div>
            <div>
              <span className="text-xs text-gray-400 font-mono">text-gray-600</span>
              <p className="text-sm md:text-base text-gray-600">本文テキストです。読みやすいグレーを使用しています。</p>
            </div>
            <div>
              <span className="text-xs text-gray-400 font-mono">text-gray-500 / text-xs</span>
              <p className="text-xs text-gray-500">キャプション・補足テキスト</p>
            </div>
          </div>
        </section>

        {/* Section: Color Palette */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-400">
            Color Palette
          </h2>

          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {[
              { name: '50', color: 'bg-gray-50' },
              { name: '100', color: 'bg-gray-100' },
              { name: '200', color: 'bg-gray-200' },
              { name: '300', color: 'bg-gray-300' },
              { name: '400', color: 'bg-gray-400' },
              { name: '500', color: 'bg-gray-500' },
              { name: '600', color: 'bg-gray-600' },
              { name: '700', color: 'bg-gray-700' },
              { name: '800', color: 'bg-gray-800' },
              { name: '900', color: 'bg-gray-900' },
            ].map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl shadow-md ${item.color}`} />
                <span className="text-xs text-gray-500 mt-1">{item.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Accent Colors (SNS)</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                <div className="w-4 h-4 rounded-full bg-blue-400" />
                <span className="text-sm text-gray-600">Twitter</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                <div className="w-4 h-4 rounded-full bg-pink-500" />
                <span className="text-sm text-gray-600">Instagram</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                <div className="w-4 h-4 rounded-full bg-green-500" />
                <span className="text-sm text-gray-600">note</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-300">
          <p className="text-xs md:text-sm text-gray-600">
            Design System Preview - takayaso.com
          </p>
        </footer>
      </div>
    </div>
  );
}
