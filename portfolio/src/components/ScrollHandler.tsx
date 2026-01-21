'use client';

import { useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

export default function ScrollHandler() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    // トップページにいる場合は自動スクロールしない
    if (pathname !== '/') {
      return;
    }

    // sessionStorageからスクロール情報を取得
    const scrollTo = sessionStorage.getItem('scrollTo');
    const filterCategory = sessionStorage.getItem('filterCategory');
    
    if (scrollTo) {
      // 他のページから遷移してきた場合のみスクロール
      // 少し遅延を入れて、DOMが完全に読み込まれた後にスクロール
      setTimeout(() => {
        const targetElement = document.querySelector(scrollTo);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // フィルタリングがある場合は、カスタムイベントを発火
          if (filterCategory) {
            window.dispatchEvent(new CustomEvent('filterLog', { detail: { category: filterCategory } }));
          } else if (scrollTo === '#log') {
            // 記録セクションの場合は「すべて」を選択
            window.dispatchEvent(new CustomEvent('filterLog', { detail: { category: 'all' } }));
          } else {
            // 記録セクション以外の場合はURLパラメータをクリア
            window.dispatchEvent(new CustomEvent('filterLog', { detail: { category: null } }));
          }
        }
        
        // sessionStorageをクリア
        sessionStorage.removeItem('scrollTo');
        sessionStorage.removeItem('filterCategory');
      }, 300);
    }
    // トップページにいる場合は、URLパラメータがあっても自動スクロールしない
    // （フィルタリングのイベントはNavigation.tsxで発火される）
  }, [searchParams, pathname]);

  return null;
}

