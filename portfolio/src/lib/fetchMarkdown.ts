// クライアントサイドでマークダウンコンテンツを取得する関数（静的JSONファイルから取得）
export async function fetchMarkdownContent(slug: string): Promise<{ content: string }> {
  try {
    // 静的JSONファイルからマークダウンコンテンツを取得
    const response = await fetch('/api/markdown-contents.json');
    if (!response.ok) {
      console.error('Failed to fetch markdown contents:', response.status);
      return { content: '' };
    }

    const markdownContents: Record<string, string> = await response.json();
    const content = markdownContents[slug] || '';
    
    if (!content) {
      console.warn(`No content found for slug: ${slug}`);
      return { content: '' };
    }

    console.log('Fetched markdown content length:', content.length);
    return { content };
  } catch (error) {
    console.error('Error fetching markdown:', error);
    return { content: '' };
  }
}

