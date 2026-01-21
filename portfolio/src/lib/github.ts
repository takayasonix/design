// Logデータの型定義
export interface LogItem {
  date: string;
  endDate?: string;
  title: string;
  description: string;
  category: 'career' | 'work' | 'article' | 'other';
  image?: string;
  status?: string;
  platform?: string;
  url?: string;
}
