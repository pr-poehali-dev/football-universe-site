
import { useEffect, useState } from 'react';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime?: string;
  commentCount?: number;
  isHot?: boolean;
  url?: string;
  source?: string;
}

export interface Match {
  id: string;
  home: string;
  away: string;
  league: string;
  date: string;
  time: string;
}

export interface LeagueTable {
  id: string;
  name: string;
  teams: { name: string; points: number }[];
}

// В реальном проекте здесь будет функция для запроса к API championat.com
// Для этого понадобится создать бэкенд-сервис или использовать прокси,
// так как большинство сайтов новостей не предоставляют публичный API
// и запрещают прямой парсинг из-за CORS-политики

// Пример функции для получения новостей с использованием прокси или API
export const useSportsNews = () => {
  const [featuredNews, setFeaturedNews] = useState<NewsArticle | null>(null);
  const [recentNews, setRecentNews] = useState<NewsArticle[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [leagueTables, setLeagueTables] = useState<LeagueTable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // В реальном приложении здесь был бы запрос к API
        // const response = await fetch('https://your-backend-proxy/championat/news');
        // const data = await response.json();
        
        // Для прототипа используем жестко закодированные данные
        // В реальном проекте эта часть заменяется на полученные от API данные
        
        // Имитация получения данных от API
        setTimeout(() => {
          // Здесь бы обрабатывались данные от API
          setFeaturedNews({
            id: "1",
            title: "Россия победила Парагвай со счётом 2:1 в товарищеском матче",
            excerpt: "Сборная России по футболу обыграла команду Парагвая в товарищеском матче. Встреча прошла на стадионе «ВЭБ Арена» в Москве и завершилась со счётом 2:1 в пользу хозяев.",
            image: "https://source.unsplash.com/random/900x700/?soccer,russia",
            category: "Сборная России",
            date: "12 мая 2024",
            readTime: "3 мин",
            commentCount: 327,
            isHot: true,
          });
          
          setRecentNews([
            // Примеры новостей... 
            // В реальности здесь был бы код для обработки данных из API
          ]);
          
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Ошибка при загрузке данных. Пожалуйста, попробуйте позже.');
        setLoading(false);
        console.error('Error fetching news:', err);
      }
    };

    fetchNews();
  }, []);

  return { featuredNews, recentNews, matches, leagueTables, loading, error };
};

// Функция для форматирования даты и времени в российском формате
export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

// Этот файл является заготовкой для интеграции с API championat.com
// В реальном проекте потребуется:
// 1. Настроить бэкенд-прокси для обхода CORS-ограничений
// 2. Реализовать парсер HTML или использовать готовое API, если есть
// 3. Настроить регулярное обновление данных
