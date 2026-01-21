'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { X, Home, GraduationCap, Laptop, PenTool, Mic2, ArrowLeft } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: 'ホーム', href: '#about', filter: null, icon: Home, isPage: false },
    { name: '経歴', href: '#log', filter: 'career', icon: GraduationCap, isPage: false },
    { name: '作品', href: '#log', filter: 'release', icon: Laptop, isPage: false },
    { name: '記事', href: '#log', filter: 'article', icon: PenTool, isPage: false },
    { name: '音楽', href: '#log', filter: 'music', icon: Mic2, isPage: false }
  ];

  const scrollToSection = (href: string, filter: string | null = null) => {
    setIsOpen(false);
    
    // メインページ以外の場合は、メインページに遷移
    if (pathname !== '/') {
      let targetUrl = '/';
      if (filter !== null) {
        targetUrl += `?category=${filter}`;
      } else if (href === '#log') {
        targetUrl += '?category=all';
      } else {
        targetUrl += href;
      }
      
      // 遷移後にスクロールを実行するために、URLにハッシュを保存
      if (href.startsWith('#')) {
        sessionStorage.setItem('scrollTo', href);
        if (filter !== null) {
          sessionStorage.setItem('filterCategory', filter);
        }
      }
      
      router.push(targetUrl);
      return;
    }

    // メインページの場合の処理（スクロールはしない、フィルタリングのみ）
    if (filter !== null) {
      // フィルタリング情報をURLに追加
      const url = new URL(window.location.href);
      url.searchParams.set('category', filter);
      window.history.pushState({}, '', url.toString());
      
      // カスタムイベントを発火してLogSectionに通知
      window.dispatchEvent(new CustomEvent('filterLog', { detail: { category: filter } }));
    } else {
      // 記録セクションの場合は「すべて」を選択
      if (href === '#log') {
        const url = new URL(window.location.href);
        url.searchParams.set('category', 'all');
        window.history.pushState({}, '', url.toString());
        window.dispatchEvent(new CustomEvent('filterLog', { detail: { category: 'all' } }));
      } else {
        // 記録セクション以外の場合はURLパラメータをクリア
        const url = new URL(window.location.href);
        url.searchParams.delete('category');
        window.history.pushState({}, '', url.toString());
        window.dispatchEvent(new CustomEvent('filterLog', { detail: { category: null } }));
      }
    }
  };

  return (
    <>
      {/* ホームに戻るボタン（トップページ以外のみ表示） */}
      {pathname !== '/' && (
        <Link
          href="/"
          className="fixed bottom-6 left-6 z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900"
          aria-label="ホームに戻る"
        >
          <ArrowLeft size={24} />
        </Link>
      )}

      <div className="fixed bottom-6 right-6 z-50 hidden">
        {/* メインボタン */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900 overflow-hidden"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Image
              src="/home-icon.png"
              alt="Menu"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          )}
        </button>

        {/* 展開されるメニューボタン */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col gap-3">
            {menuItems.map((item, index) => {
              return (
                <div
                  key={item.name}
                  className="relative flex items-center justify-end gap-3"
                  style={{
                    animation: `slideUp 0.3s ease-out ${index * 50}ms both`,
                  }}
                >
                  {/* 日本語ラベル（右側、右寄せ） */}
                  <div className="px-3 py-1.5 bg-white rounded-lg shadow-md text-gray-900 text-sm font-medium whitespace-nowrap text-right">
                    {item.name}
                  </div>
                  {/* アイコンボタン（位置固定） */}
                  {item.isPage ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900 flex-shrink-0"
                      aria-label={item.name}
                    >
                      <item.icon size={24} />
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href, item.filter)}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900 flex-shrink-0"
                      aria-label={item.name}
                    >
                      <item.icon size={24} />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
