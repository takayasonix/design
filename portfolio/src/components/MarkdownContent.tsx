import React from 'react';
import TwitterEmbed from './TwitterEmbed';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  
  interface ListItem {
    level: number;
    content: React.ReactNode;
  }
  
  const listStack: { level: number; items: ListItem[] }[] = [];
  
  const closeLists = (maxLevel: number) => {
    while (listStack.length > 0 && listStack[listStack.length - 1].level >= maxLevel) {
      const list = listStack.pop()!;
      if (list.items.length > 0) {
        const level = list.level;
        const listElement = (
          <ul key={`list-${elements.length}-${level}`} className={`mb-1 list-disc space-y-0.5 text-sm md:text-base ${level === 0 ? 'ml-0 pl-4 md:pl-6' : level === 1 ? 'ml-2 md:ml-4 pl-4 md:pl-6' : level === 2 ? 'ml-4 md:ml-8 pl-4 md:pl-6' : 'ml-6 md:ml-12 pl-4 md:pl-6'}`}>
            {list.items.map((item, idx) => (
              <li key={idx}>{item.content}</li>
            ))}
          </ul>
        );
        
        if (listStack.length > 0) {
          // 親リストの最後のアイテムに追加
          const parentList = listStack[listStack.length - 1];
          if (parentList.items.length > 0) {
            const lastItem = parentList.items[parentList.items.length - 1];
            parentList.items[parentList.items.length - 1] = {
              ...lastItem,
              content: (
                <>
                  {lastItem.content}
                  {listElement}
                </>
              ),
            };
          } else {
            // 親リストが空の場合は直接追加
            parentList.items.push({
              level: parentList.level,
              content: listElement,
            });
          }
        } else {
          elements.push(listElement);
        }
      }
    }
  };
  
  // YouTubeとTwitterのURLを埋め込み形式に変換する関数
  const parseEmbedUrl = (url: string, keyPrefix: string, originalUrl?: string): React.ReactElement | null => {
    const urlToUse = originalUrl || url;
    
    // YouTube URL（クエリパラメータを含む元のURLでチェック）
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const youtubeMatch = urlToUse.match(youtubeRegex);
    if (youtubeMatch) {
      const videoId = youtubeMatch[1];
      return (
        <div key={`${keyPrefix}-youtube`} className="my-4 -mx-4 md:mx-0">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    }
    
    // Twitter/X URL（クエリパラメータを除去してチェック）
    const cleanUrl = urlToUse.split('?')[0];
    const twitterRegex = /(?:https?:\/\/)?(?:www\.)?(?:twitter\.com|x\.com)\/([a-zA-Z0-9_]+)\/status\/([0-9]+)/;
    const twitterMatch = cleanUrl.match(twitterRegex);
    if (twitterMatch) {
      return (
        <TwitterEmbed key={`${keyPrefix}-twitter`} url={urlToUse} />
      );
    }
    
    return null;
  };
  
  const parseLink = (text: string, keyPrefix: string): (string | React.ReactElement)[] => {
    const parts: (string | React.ReactElement)[] = [];
    let remaining = text;
    let keyIndex = 0;
    
    // URL単体を検出する正規表現（http:// または https:// で始まるURL）
    const urlRegex = /(https?:\/\/[^\s\)]+)/g;
    
    // 太字とリンクを同時に処理
    while (remaining.length > 0) {
      // 太字の開始位置を探す
      const boldStart = remaining.indexOf('**');
      
      // リンクの開始位置を探す
      const linkStart = remaining.indexOf('[');
      
      // URL単体の開始位置を探す
      const urlMatch = remaining.match(urlRegex);
      const urlStart = urlMatch ? remaining.indexOf(urlMatch[0]) : -1;
      const urlEnd = urlMatch ? urlStart + urlMatch[0].length : -1;
      
      // どちらも見つからない場合は残りをそのまま追加
      if (boldStart === -1 && linkStart === -1 && urlStart === -1) {
        if (remaining.length > 0) {
          parts.push(remaining);
        }
        break;
      }
      
      // 最も早い位置の要素を処理
      let nextIndex = remaining.length;
      let nextType: 'bold' | 'link' | 'url' | null = null;
      
      if (boldStart !== -1 && boldStart < nextIndex) {
        nextIndex = boldStart;
        nextType = 'bold';
      }
      if (linkStart !== -1 && linkStart < nextIndex) {
        nextIndex = linkStart;
        nextType = 'link';
      }
      if (urlStart !== -1 && urlStart < nextIndex) {
        nextIndex = urlStart;
        nextType = 'url';
      }
      
      // 前のテキストを追加
      if (nextIndex > 0) {
        parts.push(remaining.substring(0, nextIndex));
      }
      
      if (nextType === 'bold') {
        // 太字の終了位置を探す
        const boldEnd = remaining.indexOf('**', nextIndex + 2);
        if (boldEnd !== -1) {
          const boldContent = remaining.substring(nextIndex + 2, boldEnd);
          // 太字の中身を再帰的に処理（リンクが含まれる可能性がある）
          const boldParts = parseLink(boldContent, `${keyPrefix}-bold-${keyIndex++}`);
          parts.push(<strong key={`${keyPrefix}-strong-${keyIndex}`}>{boldParts}</strong>);
          remaining = remaining.substring(boldEnd + 2);
        } else {
          // 閉じる**が見つからない場合はそのまま追加
          parts.push(remaining.substring(0, nextIndex + 2));
          remaining = remaining.substring(nextIndex + 2);
        }
      } else if (nextType === 'link') {
        // リンクの終了位置を探す
        const linkTextEnd = remaining.indexOf(']', nextIndex);
        const linkUrlStart = remaining.indexOf('(', linkTextEnd);
        const linkUrlEnd = remaining.indexOf(')', linkUrlStart);
        
        if (linkTextEnd !== -1 && linkUrlStart !== -1 && linkUrlEnd !== -1) {
          const linkText = remaining.substring(nextIndex + 1, linkTextEnd);
          const linkUrl = remaining.substring(linkUrlStart + 1, linkUrlEnd);
          // 文中のリンクは常に通常のリンクとして表示（埋め込みチェックはしない）
          parts.push(
            <a
              key={`${keyPrefix}-link-${keyIndex++}`}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              {linkText}
            </a>
          );
          remaining = remaining.substring(linkUrlEnd + 1);
        } else {
          // リンクの形式が正しくない場合はそのまま追加
          parts.push(remaining.substring(0, nextIndex + 1));
          remaining = remaining.substring(nextIndex + 1);
        }
      } else if (nextType === 'url') {
        // URL単体を処理（文中のURLも通常のリンクとして表示）
        const url = urlMatch![0];
        parts.push(
          <a
            key={`${keyPrefix}-url-${keyIndex++}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {url}
          </a>
        );
        remaining = remaining.substring(urlEnd);
      }
    }
    
    return parts.length > 0 ? parts : [text];
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // 画像 ![alt](src)
    const imageRegex = /^!\[([^\]]*)\]\(([^)]+)\)$/;
    const imageMatch = trimmedLine.match(imageRegex);
    if (imageMatch) {
      closeLists(0);
      const altText = imageMatch[1];
      let imageSrc = imageMatch[2];

      // 相対パスの場合は /log-assets/ を付与し、拡張子を.webpに変換
      if (!imageSrc.startsWith('http') && !imageSrc.startsWith('/')) {
        // 拡張子を.webpに変換（generate-log-data.jsでwebpに変換されるため）
        const fileNameWithoutExt = imageSrc.replace(/\.[^/.]+$/, '');
        imageSrc = `/log-assets/${fileNameWithoutExt}.webp`;
      }

      elements.push(
        <div key={i} className="my-4">
          <img
            src={imageSrc}
            alt={altText}
            className="w-auto h-auto max-w-full max-h-[60vh] rounded-lg mx-auto"
          />
        </div>
      );
      continue;
    }

    // 見出し
    if (trimmedLine.startsWith('# ')) {
      closeLists(0);
      elements.push(<h1 key={i} className="text-2xl md:text-3xl font-bold mt-6 md:mt-10 mb-4 md:mb-6 text-gray-900">{trimmedLine.substring(2)}</h1>);
    } else if (trimmedLine.startsWith('## ')) {
      closeLists(0);
      elements.push(<h2 key={i} className="text-xl md:text-2xl font-bold mt-5 md:mt-8 mb-1 md:mb-2 text-gray-900 border-b border-gray-300 pb-2">{trimmedLine.substring(3)}</h2>);
    } else if (trimmedLine.startsWith('### ')) {
      closeLists(0);
      elements.push(<h3 key={i} className="text-lg md:text-xl font-bold mt-4 md:mt-6 mb-2 md:mb-3 text-gray-900">{trimmedLine.substring(4)}</h3>);
    }
    // 引用
    else if (trimmedLine.startsWith('> ')) {
      closeLists(0);
      const quoteContent = trimmedLine.substring(2);
      const content = parseLink(quoteContent, `quote-${i}`);
      elements.push(
        <blockquote key={i} className="border-l-4 border-gray-400 pl-4 py-2 my-2 text-gray-700 bg-gray-50">
          {content}
        </blockquote>
      );
    }
    // リスト
    else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
      // インデントレベルを計算（行頭からのスペース/タブ数）
      // タブは4スペース相当、スペースは2つで1レベル
      const indentMatch = line.match(/^(\s*)/);
      if (!indentMatch) {
        continue;
      }
      const indentStr = indentMatch[1];
      let indentLevel = 0;
      for (let j = 0; j < indentStr.length; j++) {
        if (indentStr[j] === '\t') {
          indentLevel += 2; // タブは2レベル分
        } else if (indentStr[j] === ' ') {
          indentLevel += 0.5; // スペース2つで1レベル
        }
      }
      indentLevel = Math.floor(indentLevel);
      
      const listContent = trimmedLine.substring(2);
      const content = parseLink(listContent, `item-${i}`);
      
      // 現在のレベルより深いリストを閉じる
      closeLists(indentLevel);
      
      // 現在のレベルのリストが存在しない場合は作成
      if (listStack.length === 0 || listStack[listStack.length - 1].level < indentLevel) {
        listStack.push({ level: indentLevel, items: [] });
      }
      
      // 現在のレベルのリストにアイテムを追加
      listStack[listStack.length - 1].items.push({
        level: indentLevel,
        content: <>{content}</>,
      });
    }
    // 空行
    else if (trimmedLine === '') {
      closeLists(0);
      elements.push(<br key={i} className="mb-0.5" />);
    }
    // 通常のテキスト（リンクを含む可能性あり、<br/>タグも含む）
    else {
      closeLists(0);
      // 前後に<br/>がある場合をチェック（<br/>[text](url)<br/>のような形式）
      const brWrappedLinkRegex = /^<br\s*\/?>\s*\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)\s*<br\s*\/?>$/i;
      const brWrappedMatch = trimmedLine.match(brWrappedLinkRegex);
      if (brWrappedMatch) {
        const linkUrl = brWrappedMatch[2];
        const embed = parseEmbedUrl(linkUrl, `embed-${i}`, linkUrl);
        if (embed) {
          elements.push(embed);
        } else {
          // 埋め込みできないURLは通常のリンクとして表示
          const linkText = brWrappedMatch[1];
          elements.push(
            <p key={i} className="text-sm md:text-base mb-2">
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {linkText}
              </a>
            </p>
          );
        }
      }
      // 行全体がマークダウンリンク形式 [text](url) の場合をチェック
      else {
        const markdownLinkRegex = /^\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)$/;
        const markdownLinkMatch = trimmedLine.match(markdownLinkRegex);
        if (markdownLinkMatch) {
          const linkUrl = markdownLinkMatch[2];
          // 埋め込み可能なURLかチェック（元のURLを渡す）
          const embed = parseEmbedUrl(linkUrl, `embed-${i}`, linkUrl);
          if (embed) {
            elements.push(embed);
          } else {
            // 埋め込みできないURLは通常のリンクとして表示
            const linkText = markdownLinkMatch[1];
            elements.push(
              <p key={i} className="text-sm md:text-base mb-2">
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {linkText}
                </a>
              </p>
            );
          }
        }
        // 行全体がURLの場合は埋め込みとして表示
        else if (/^https?:\/\/[^\s]+$/.test(trimmedLine)) {
          const embed = parseEmbedUrl(trimmedLine, `embed-${i}`);
          if (embed) {
            elements.push(embed);
          } else {
            // 埋め込みできないURLは通常のリンクとして表示
            elements.push(
              <p key={i} className="text-sm md:text-base mb-2">
                <a
                  href={trimmedLine}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {trimmedLine}
                </a>
              </p>
            );
          }
        } else {
          // <br/>タグを処理
          if (trimmedLine.includes('<br/>') || trimmedLine.includes('<br />')) {
            const parts = trimmedLine.split(/(<br\s*\/?>)/gi);
            const processedParts: (string | React.ReactElement)[] = [];
            parts.forEach((part, partIdx) => {
              if (part.match(/<br\s*\/?>/gi)) {
                processedParts.push(<br key={`br-${i}-${partIdx}`} className="mb-0.5" />);
              } else if (part.trim()) {
                const linkParts = parseLink(part, `text-${i}-${partIdx}`);
                processedParts.push(...linkParts);
              }
            });
            elements.push(<p key={i} className="text-sm md:text-base mb-2">{processedParts}</p>);
          } else {
            const parts = parseLink(trimmedLine, `text-${i}`);
            elements.push(<p key={i} className="text-sm md:text-base mb-2">{parts}</p>);
          }
        }
      }
    }
  }
  
  closeLists(0);
  
  return (
    <div className="prose prose-lg max-w-none">
      <div className="markdown-content text-gray-800 leading-relaxed">
        {elements}
      </div>
    </div>
  );
}

