import { useEffect, useState } from "react";

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

// Сервис для получения прогнозируемых новостей на 12 мая 2025 года
export const useSportsForecastNews = (date: string = "2025-05-12") => {
  const [featuredNews, setFeaturedNews] = useState<NewsArticle | null>(null);
  const [recentNews, setRecentNews] = useState<NewsArticle[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [leagueTables, setLeagueTables] = useState<LeagueTable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForecastNews = async () => {
      try {
        setLoading(true);

        // Здесь в реальном приложении был бы API-запрос
        // Поскольку запрашиваются данные будущего, используем прогнозируемые данные

        // Прогноз на 2025 год
        setTimeout(() => {
          // Главная новость
          setFeaturedNews({
            id: "1",
            title: "«Краснодар» впервые в истории выиграл чемпионат России",
            excerpt:
              "ФК «Краснодар» досрочно стал чемпионом России сезона 2024/2025, прервав гегемонию «Зенита». Команда Владимира Ивича обеспечила себе титул за тур до финиша, обыграв «Спартак» со счётом 3:1.",
            image:
              "https://source.unsplash.com/random/900x700/?soccer,fc-krasnodar",
            category: "РПЛ",
            date: "12 мая 2025",
            readTime: "5 мин",
            commentCount: 1286,
            isHot: true,
          });

          // Недавние новости
          setRecentNews([
            {
              id: "2",
              title: "Карпин продлил контракт со сборной России до 2028 года",
              excerpt:
                "Валерий Карпин продолжит работу на посту главного тренера сборной России. Специалист подписал новое соглашение с РФС до 2028 года, после успешного выступления в отборочном цикле ЧМ-2026.",
              image: "https://source.unsplash.com/random/900x700/?soccer,coach",
              category: "Сборная России",
              date: "11 мая 2025",
              readTime: "3 мин",
              commentCount: 743,
              isHot: true,
            },
            {
              id: "3",
              title:
                "«Реал» в 16-й раз выиграл Лигу чемпионов, победив «Ман Сити» в финале",
              excerpt:
                "«Реал Мадрид» обыграл «Манчестер Сити» в финале Лиги чемпионов 2024/2025 со счётом 2:1. Решающий гол на 89-й минуте забил Килиан Мбаппе. Для королевского клуба это 16-й титул в истории турнира.",
              image:
                "https://source.unsplash.com/random/900x700/?soccer,real-madrid",
              category: "Лига чемпионов",
              date: "10 мая 2025",
              readTime: "6 мин",
              commentCount: 1874,
            },
            // ...остальные новости
          ]);

          // Ближайшие матчи
          setMatches([
            {
              id: "m1",
              home: "Зенит",
              away: "ЦСКА",
              league: "РПЛ, тур 29",
              date: "17 мая 2025",
              time: "19:00",
            },
            {
              id: "m2",
              home: "Спартак",
              away: "Динамо",
              league: "РПЛ, тур 29",
              date: "18 мая 2025",
              time: "17:30",
            },
            // ...остальные матчи
          ]);

          // Турнирные таблицы
          setLeagueTables([
            {
              id: "rpl",
              name: "РПЛ 24/25",
              teams: [
                { name: "Краснодар", points: 68 },
                { name: "Зенит", points: 63 },
                { name: "Спартак", points: 61 },
                { name: "Динамо", points: 59 },
                { name: "ЦСКА", points: 53 },
              ],
            },
            // ...остальные лиги
          ]);

          setLoading(false);
        }, 800);
      } catch (err) {
        setError("Ошибка при загрузке прогнозируемых данных.");
        setLoading(false);
        console.error("Error fetching forecast news:", err);
      }
    };

    fetchForecastNews();
  }, [date]);

  return { featuredNews, recentNews, matches, leagueTables, loading, error };
};

// Функция для получения реальных новостей через API championat.com
// В реальном проекте потребуется бэкенд-прокси для обхода CORS
export const useChampionatNews = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        // В реальном приложении здесь был бы запрос к бэкенд-прокси
        // const response = await fetch('https://your-backend-proxy/championat/news');
        // const data = await response.json();
        // setNews(data.news);

        // Уведомление о том, что в данный момент используются прогнозируемые данные
        console.info(
          "В данный момент используются прогнозируемые данные на 2025 год.",
        );
        setLoading(false);
      } catch (err) {
        setError("Ошибка при загрузке данных с championat.com.");
        setLoading(false);
        console.error("Error fetching news from championat:", err);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};

// Функция для форматирования даты и времени в российском формате
export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
