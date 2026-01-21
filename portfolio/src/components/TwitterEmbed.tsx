'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface TweetData {
  author_name: string;
  author_url: string;
  html: string;
  width: number;
  height: number;
  type: string;
  cache_age: string;
  provider_name: string;
  provider_url: string;
  version: string;
}

export default function TwitterEmbed({ url }: { url: string }) {
  const [tweetData, setTweetData] = useState<TweetData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // URLからユーザー名とツイートIDを抽出
  const extractTweetInfo = (url: string) => {
    const match = url.match(/(?:twitter\.com|x\.com)\/([a-zA-Z0-9_]+)\/status\/([0-9]+)/);
    if (match) {
      return { username: match[1], tweetId: match[2] };
    }
    return null;
  };

  const tweetInfo = extractTweetInfo(url);

  useEffect(() => {
    if (!tweetInfo) {
      setError(true);
      setLoading(false);
      return;
    }

    // oEmbed APIでツイート情報を取得
    const fetchTweetData = async () => {
      try {
        // oEmbed APIは認証不要だが、未ログインでは表示されない可能性がある
        // 代わりに、URL情報からシンプルなカード表示を作成
        setLoading(false);
        setError(false);
      } catch (err) {
        console.error('Error fetching tweet data:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchTweetData();
  }, [url, tweetInfo]);

  // ローディング中
  if (loading) {
    return (
      <div className="my-4 -mx-4 md:mx-0">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  // エラー時または情報がない場合
  if (error || !tweetInfo) {
    return (
      <div className="my-4 -mx-4 md:mx-0">
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-gray-900">@{tweetInfo?.username || 'Twitter'}</span>
                <span className="text-xs text-gray-500">· X</span>
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline break-all text-sm md:text-base block"
              >
                {url}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // oEmbedデータがある場合（将来の拡張用）
  if (tweetData) {
    return (
      <div className="my-4 -mx-4 md:mx-0">
        <div 
          className="twitter-embed"
          dangerouslySetInnerHTML={{ __html: tweetData.html }}
        />
      </div>
    );
  }

  // デフォルト: シンプルなカード表示
  return (
    <div className="my-4 -mx-4 md:mx-0">
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-gray-900">@{tweetInfo.username}</span>
              <span className="text-xs text-gray-500">· X</span>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline break-all text-sm md:text-base block"
            >
              {url}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

