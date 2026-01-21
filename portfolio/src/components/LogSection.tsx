'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GraduationCap, Laptop, Mic2, Cloud, PenTool, ArrowLeft, ExternalLink, BookOpen } from 'lucide-react';
import { LogItem } from '@/lib/github';
import { fetchMarkdownContent } from '@/lib/fetchMarkdown';
import MarkdownContent from './MarkdownContent';

export default function LogSection() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('all');
  const [logData, setLogData] = useState<LogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [overlayItem, setOverlayItem] = useState<LogItem | null>(null);
  const [overlayContent, setOverlayContent] = useState<string>('');
  const [overlayLoading, setOverlayLoading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollPositionRef = useRef<number>(0);
  const overlayContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: '0px 0px -20% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // URLパラメータからカテゴリを読み取る
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam && ['all', 'career', 'release', 'article', 'music'].includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, []);

  // オーバーレイが開いているときに背景のスクロールを防止（Safari対応）
  useEffect(() => {
    if (overlayItem) {
      // 現在のスクロール位置を保存
      scrollPositionRef.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      
      // 背景のスクロールを無効化（position: fixedを使わない方法）
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      // touchmoveイベントを防止（Safari用）
      const preventScroll = (e: TouchEvent) => {
        // オーバーレイコンテナ内のスクロールは許可
        const target = e.target as Node;
        if (overlayContentRef.current && overlayContentRef.current.contains(target)) {
          return;
        }
        e.preventDefault();
      };
      
      // wheelイベントも防止（デスクトップ用）
      const preventWheel = (e: WheelEvent) => {
        const target = e.target as Node;
        if (overlayContentRef.current && overlayContentRef.current.contains(target)) {
          return;
        }
        e.preventDefault();
      };
      
      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('wheel', preventWheel, { passive: false });
      
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.removeEventListener('touchmove', preventScroll);
        document.removeEventListener('wheel', preventWheel);
        window.scrollTo(0, scrollPositionRef.current);
      };
    }
  }, [overlayItem]);

  // カスタムイベントでフィルタリングを更新
  useEffect(() => {
    const handleFilterLog = (event: CustomEvent) => {
      setSelectedCategory(event.detail.category);
    };

    window.addEventListener('filterLog', handleFilterLog as EventListener);
    return () => {
      window.removeEventListener('filterLog', handleFilterLog as EventListener);
    };
  }, []);

  // 静的JSONファイルからlogデータを取得
  useEffect(() => {
    const fetchLogData = async () => {
      try {
        setLoading(true);
        console.log('Fetching log data from /api/log.json...');
        const response = await fetch('/api/log.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch log data: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched log data:', data.length, 'items');
        
        if (Array.isArray(data) && data.length > 0) {
          setLogData(data);
        } else {
          console.warn('No data returned, using fallback');
          setLogData(getFallbackData());
        }
      } catch (error) {
        console.error('Failed to fetch log data:', error);
        // エラー時もデモデータを使用
        setLogData(getFallbackData());
      } finally {
        setLoading(false);
      }
    };

    fetchLogData();
  }, []);

  // フォールバックデータ
  const getFallbackData = (): LogItem[] => [
    {
      date: '2025/01/15',
      title: 'プロジェクト完了',
      description: '新しい機能のリリースが完了しました。ユーザーフィードバックを反映した改善を行いました。',
      category: 'work',
    },
    {
      date: '2025/01/10',
      title: '記事を公開',
      description: '技術ブログに新しい記事を公開しました。Reactのパフォーマンス最適化について書きました。',
      category: 'article',
    },
    {
      date: '2025/01/05',
      title: '転職活動開始',
      description: '新しいキャリアのチャレンジを始めました。',
      category: 'career',
    },
    {
      date: '2024/12/28',
      title: 'オープンソースに貢献',
      description: 'GitHubでオープンソースプロジェクトにプルリクエストを送りました。',
      category: 'other',
    },
    {
      date: '2024/12/20',
      title: 'アプリリリース',
      description: '新しいモバイルアプリをリリースしました。',
      category: 'work',
    },
    {
      date: '2024/12/15',
      title: '技術記事を執筆',
      description: 'Next.jsの新機能についての記事を書きました。',
      category: 'article',
    }
  ];

  // カテゴリ定義
  const categories = [
    { id: 'all', name: 'すべて', icon: Cloud },
    { id: 'career', name: '経歴', icon: GraduationCap },
    { id: 'release', name: '作品', icon: Laptop },
    { id: 'article', name: '記事', icon: PenTool },
    { id: 'music', name: '音楽', icon: Mic2 }
  ];


  // フィルタリングされたデータ（statusが「公開」または「公開中」のもののみ、かつカテゴリでフィルタリング）
  const filteredData = logData
    .filter(item => {
      const status = item.status;
      // statusがnull、undefined、空文字列、または「null」文字列の場合は表示
      // 「公開」または「公開中」の場合も表示
      if (!status || status === 'null' || status === '' || status === '公開' || status === '公開中') {
        return true;
      }
      return false;
    })
    .filter(item => {
      if (selectedCategory === 'all' || !selectedCategory) {
        return true;
      }
      return item.category === selectedCategory;
    });


  // カテゴリごとの固定テキスト（日付の前に表示）
  const getCategoryText = (categoryId: string, isLatest: boolean, isCurrent: boolean, platform?: string) => {
    switch (categoryId) {
      case 'career':
        // endDateがあり、startとendが同じ日付の場合は「所属しています」
        if (isCurrent) {
          return '所属しています - ';
        }
        return isLatest ? '所属しています - ' : '所属していました - ';
      case 'release':
        return 'リリースしました - ';
      case 'article':
        if (platform === 'note') {
          return 'noteに投稿しました - ';
        } else if (platform === 'blog') {
          return 'ブログに投稿しました - ';
        } else if (platform === 'media') {
          return 'メディアに投稿しました - ';
        }
        return '書きました - ';
      case 'music':
        return '出演しました - ';
      default:
        return '';
    }
  };

  // フィルタリングを更新する関数
  const handleFilterChange = (category: string | null) => {
    setSelectedCategory(category);
    
    // URLパラメータを更新
    const url = new URL(window.location.href);
    if (category && category !== 'all') {
      url.searchParams.set('category', category);
    } else {
      url.searchParams.delete('category');
    }
    window.history.pushState({}, '', url.toString());
  };

  return (
    <section 
      ref={sectionRef}
      id="log" 
      className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
    >
      <div 
        className={`container mx-auto px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="max-w-2xl mx-auto">
          {/* フィルターボタン */}
          <div className="mb-10">
            {/* スマホ: 横に5つ並ぶ、PC: すべてを含めて横並び */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleFilterChange(category.id)}
                  className="flex flex-col items-center transition-all duration-200"
                >
                  <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 mb-2 ${
                    selectedCategory === category.id
                      ? 'bg-gray-700 text-white'
                      : 'bg-white text-gray-700'
                  }`}>
                    {(() => {
                      const Icon = category.icon;
                      return <Icon className="w-6 h-6 md:w-8 md:h-8" />;
                    })()}
                  </div>
                  <span className={`text-xs font-medium ${
                    selectedCategory === category.id
                      ? 'text-gray-900'
                      : 'text-gray-600'
                  }`}>
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 transform -translate-x-px h-full w-px bg-gray-300"></div>
            
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">読み込み中...</p>
              </div>
            ) : filteredData.length > 0 ? (
              filteredData.map((item, index) => (
              <div key={`${item.date}-${item.title}`} className="relative mb-6">
                <div className="flex">
                  {/* 左側：点（アイコン入り） */}
                  <div className="w-10 h-10 bg-white rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                    {(() => {
                      const CategoryIcon = categories.find(cat => cat.id === item.category)?.icon || PenTool;
                      return <CategoryIcon className="w-5 h-5" />;
                    })()}
                  </div>
                  {/* 右側：タイトルとカード */}
                  <div className="flex-1">
                    {/* 日付（アイコンと揃える） */}
                    <div className="flex items-center h-10 mb-3">
                      <span className="text-xs md:text-sm font-medium text-gray-600">
                        {(() => {
                          // 同じカテゴリの最新アイテムかどうかを判定
                          const sameCategoryItems = filteredData.filter(d => d.category === item.category);
                          const isLatest = sameCategoryItems.length > 0 && sameCategoryItems[0] === item;
                          // endDateがあり、startとendが同じ日付の場合は「現在」と表示
                          const isCurrent = !!(item.endDate && item.date === item.endDate);
                          let dateText: string;
                          if (isCurrent) {
                            dateText = `${item.date} ~ 現在`;
                          } else if (item.endDate) {
                            dateText = `${item.date} ~ ${item.endDate}`;
                          } else {
                            dateText = item.date;
                          }
                          return getCategoryText(item.category, isLatest, isCurrent, item.platform) + dateText;
                        })()}
                      </span>
                    </div>
                    {/* カード（タイトル、画像、説明） */}
                    {(() => {
                      const cardContent = (
                        <div className={`flex ${item.image && item.image !== null && item.image !== '' ? 'flex-row' : ''} h-full`}>
                          <div className="p-4 md:p-6 text-left flex-1 flex flex-col justify-center">
                            <h3 className="text-xs md:text-base font-semibold text-gray-900">
                              {item.title}
                            </h3>
                            <p className="text-[10px] md:text-sm text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          {item.image && item.image !== null && item.image !== '' && (
                            <div className="w-2/5 max-w-sm flex-shrink-0 h-full flex items-center justify-center bg-gray-200 overflow-hidden relative">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain transition-opacity duration-300"
                                sizes="(max-width: 768px) 40vw, 20vw"
                                loading="lazy"
                              />
                            </div>
                          )}
                        </div>
                      );

                      // オーバーレイを開く（すべてのカテゴリ）
                      return (
                        <button
                          onClick={async () => {
                            const dateSlug = item.date.replace(/\//g, '');
                            
                            // コンテンツを先に読み込む
                            let content = '';
                            try {
                              const result = await fetchMarkdownContent(dateSlug);
                              console.log('Fetched content length:', result.content.length);
                              if (result.content && result.content.trim()) {
                                content = result.content;
                              } else {
                                // コンテンツがない場合は空文字列
                                content = '';
                              }
                            } catch (error) {
                              console.error('Error fetching content:', error);
                              // エラー時も空文字列
                              content = '';
                            }
                            
                            // コンテンツの読み込みが完了してからオーバーレイを表示
                            setOverlayContent(content);
                            setOverlayItem(item);
                          }}
                          className="block bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-shadow duration-300 h-[70px] md:h-[140px] cursor-pointer w-full text-left"
                        >
                          {cardContent}
                        </button>
                      );
                    })()}
                  </div>
                </div>
              </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">該当する記録が見つかりませんでした</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* オーバーレイ */}
      {overlayItem && (
        <>
          {/* 背景（クリックで閉じる） */}
          <div
            className="fixed inset-0 z-40 animate-fadeIn"
            onClick={() => {
              setOverlayItem(null);
              setOverlayContent('');
            }}
          />
          {/* オーバーレイコンテナ（固定、画面より小さく） */}
          <div 
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
            ref={overlayContentRef}
            onClick={(e) => {
              // 背景クリックで閉じる（コンテンツ部分以外）
              if (e.target === e.currentTarget) {
                setOverlayItem(null);
                setOverlayContent('');
              }
            }}
          >
            {/* コンテンツ部分（固定サイズ、中身だけスクロール） */}
            <div 
              className="w-full max-w-2xl max-h-[calc(90vh-140px)] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* スクロール可能な中身 */}
              <div 
                className="flex-1 overflow-y-auto overscroll-contain p-8 md:p-12"
                style={{ 
                  WebkitOverflowScrolling: 'touch',
                  overscrollBehavior: 'contain'
                } as React.CSSProperties}
              >
                {/* タイトル */}
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                  {overlayItem.title}
                </h1>
                
                {/* 日付 */}
                <div className="text-xs md:text-base text-gray-600 mb-6">
                  {(() => {
                    const isCurrent = !!(overlayItem.endDate && overlayItem.date === overlayItem.endDate);
                    if (isCurrent) {
                      return `${overlayItem.date} ~ 現在`;
                    } else if (overlayItem.endDate) {
                      return `${overlayItem.date} ~ ${overlayItem.endDate}`;
                    } else {
                      return overlayItem.date;
                    }
                  })()}
                </div>
                
                {/* 画像 */}
                {overlayItem.image && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={overlayItem.image}
                      alt={overlayItem.title}
                      width={1200}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                
                {/* マークダウン本文 */}
                {overlayContent ? (
                  <MarkdownContent content={overlayContent} />
                ) : null}
              </div>
            </div>
            
            {/* 戻るボタンと遷移ボタン（オーバーレイの下） */}
            <div className="flex items-center gap-3 mt-4">
              {/* 戻るボタン */}
              <button
                onClick={() => {
                  setOverlayItem(null);
                  setOverlayContent('');
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900"
              >
                <ArrowLeft size={20} />
                <span className="text-sm md:text-base font-medium">戻る</span>
              </button>
              
              {/* 開くボタン（URLがある場合のみ表示） */}
              {overlayItem.url && (
                <a
                  href={overlayItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900"
                >
                  <ExternalLink size={20} />
                  <span className="text-sm md:text-base font-medium">開く</span>
                </a>
              )}
              
              {/* 読むボタン（blogカテゴリでURLがない場合のみ表示） */}
              {overlayItem.category === 'article' && !overlayItem.url && (
                <button
                  onClick={() => {
                    const dateSlug = overlayItem.date.replace(/\//g, '');
                    if (router) {
                      router.push(`/blog/${dateSlug}`);
                    } else {
                      window.location.href = `/blog/${dateSlug}`;
                    }
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900"
                >
                  <BookOpen size={20} />
                  <span className="text-sm md:text-base font-medium">読む</span>
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

