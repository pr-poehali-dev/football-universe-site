import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import NewsCard, { NewsArticle } from "@/components/news-card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Типы данных для API интеграции
interface LiveNewsArticle {
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

const Index: React.FC = () => {
  // Здесь в реальном приложении будет вызов API или fetch для получения данных
  // const [featuredNews, setFeaturedNews] = useState<LiveNewsArticle | null>(null);
  // const [recentNews, setRecentNews] = useState<LiveNewsArticle[]>([]);
  // useEffect(() => { fetchNewsFromChampionat(); }, []);

  // Актуальные новости, которые будут заменены на данные из API
  const featuredNews: NewsArticle = {
    id: "1",
    title: "Россия победила Парагвай со счётом 2:1 в товарищеском матче",
    excerpt:
      "Сборная России по футболу обыграла команду Парагвая в товарищеском матче. Встреча прошла на стадионе «ВЭБ Арена» в Москве и завершилась со счётом 2:1 в пользу хозяев.",
    image: "https://source.unsplash.com/random/900x700/?soccer,russia",
    category: "Сборная России",
    date: "12 мая 2024",
    readTime: "3 мин",
    commentCount: 327,
    isHot: true,
  };

  const recentNews: NewsArticle[] = [
    {
      id: "2",
      title: "«Спартак» обыграл «Ростов» 2:1 и вышел на второе место в РПЛ",
      excerpt:
        "Московский «Спартак» победил «Ростов» в матче 28-го тура Российской Премьер-Лиги. Встреча прошла в Москве и завершилась со счётом 2:1.",
      image: "https://source.unsplash.com/random/900x700/?soccer,spartak",
      category: "РПЛ",
      date: "11 мая 2024",
      readTime: "4 мин",
      commentCount: 456,
      isHot: true,
    },
    {
      id: "3",
      title: "«Зенит» обыграл ЦСКА и стал чемпионом России шестой раз подряд",
      excerpt:
        "«Зенит» обыграл ЦСКА в матче 28-го тура Российской Премьер-Лиги и досрочно стал чемпионом страны. Петербургский клуб завоевал чемпионство в шестой раз подряд.",
      image: "https://source.unsplash.com/random/900x700/?soccer,zenit",
      category: "РПЛ",
      date: "11 мая 2024",
      readTime: "5 мин",
      commentCount: 394,
    },
    {
      id: "4",
      title: "Кейн стал лучшим бомбардиром Бундеслиги в дебютном сезоне",
      excerpt:
        "Нападающий «Баварии» Гарри Кейн установил рекорд немецкой Бундеслиги, забив 36 голов в своём дебютном сезоне и став лучшим бомбардиром чемпионата.",
      image: "https://source.unsplash.com/random/900x700/?soccer,kane",
      category: "Бундеслига",
      date: "10 мая 2024",
      readTime: "3 мин",
      commentCount: 126,
    },
    {
      id: "5",
      title: "«Манчестер Сити» и «Арсенал» продолжают борьбу за титул в АПЛ",
      excerpt:
        "За тур до конца сезона в английской Премьер-лиге «Манчестер Сити» опережает «Арсенал» на одно очко. Команда Гвардиолы близка к пятому титулу за последние шесть сезонов.",
      image:
        "https://source.unsplash.com/random/900x700/?soccer,manchester,arsenal",
      category: "АПЛ",
      date: "12 мая 2024",
      readTime: "4 мин",
      commentCount: 287,
    },
    {
      id: "6",
      title:
        "Обзор тура РПЛ: «Локомотив» победил «Динамо», «Краснодар» разгромил «Оренбург»",
      excerpt:
        "В 28-м туре Российской Премьер-Лиги «Локомотив» в московском дерби одолел «Динамо» со счётом 2:0, а «Краснодар» разгромил «Оренбург» — 4:1.",
      image: "https://source.unsplash.com/random/900x700/?soccer,lokomotiv",
      category: "РПЛ",
      date: "12 мая 2024",
      readTime: "6 мин",
      commentCount: 164,
    },
  ];

  // Массив ближайших матчей РПЛ
  const upcomingMatches = [
    {
      id: "m1",
      home: "Крылья Советов",
      away: "Спартак",
      league: "РПЛ, тур 29",
      date: "19 мая 2024",
      time: "17:30",
    },
    {
      id: "m2",
      home: "Зенит",
      away: "Ростов",
      league: "РПЛ, тур 29",
      date: "19 мая 2024",
      time: "17:30",
    },
    {
      id: "m3",
      home: "ЦСКА",
      away: "Краснодар",
      league: "РПЛ, тур 29",
      date: "19 мая 2024",
      time: "15:00",
    },
    {
      id: "m4",
      home: "Локомотив",
      away: "Ахмат",
      league: "РПЛ, тур 29",
      date: "18 мая 2024",
      time: "15:00",
    },
  ];

  // Массив турнирных таблиц с актуальными данными
  const leagues = [
    {
      id: "rpl",
      name: "РПЛ 23/24",
      teams: [
        { name: "Зенит", points: 67 },
        { name: "Спартак", points: 59 },
        { name: "Краснодар", points: 54 },
        { name: "Динамо", points: 53 },
        { name: "ЦСКА", points: 50 },
      ],
    },
    {
      id: "premier",
      name: "АПЛ 23/24",
      teams: [
        { name: "Манчестер Сити", points: 85 },
        { name: "Арсенал", points: 84 },
        { name: "Ливерпуль", points: 78 },
        { name: "Астон Вилла", points: 68 },
        { name: "Тоттенхэм", points: 63 },
      ],
    },
    {
      id: "laliga",
      name: "Ла Лига 23/24",
      teams: [
        { name: "Реал Мадрид", points: 90 },
        { name: "Барселона", points: 76 },
        { name: "Жирона", points: 74 },
        { name: "Атлетико", points: 70 },
        { name: "Атлетик", points: 62 },
      ],
    },
  ];

  // В реальном приложении здесь будет функция для получения данных с API
  // const fetchNewsFromChampionat = async () => {
  //   try {
  //     const response = await fetch('https://api-adapter-for-championat.com/latest-news');
  //     const data = await response.json();
  //     setFeaturedNews(data.featured);
  //     setRecentNews(data.recent);
  //   } catch (error) {
  //     console.error('Ошибка при получении новостей:', error);
  //   }
  // };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Герой-секция */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald">
                Футбольная Вселенная
              </h1>
              <p className="text-lg opacity-90">
                Ваш путеводитель в мире футбола. Последние новости, матчи,
                трансферы и аналитика — всё в одном месте.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-field-dark hover:bg-gray-100"
                >
                  <Icon name="Newspaper" className="mr-2 h-4 w-4" />
                  Последние новости
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Icon name="CalendarDays" className="mr-2 h-4 w-4" />
                  Расписание матчей
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Секция новостей */}
        <section className="py-16 bg-white dark:bg-dark">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-oswald">
                Последние новости
              </h2>
              <Link to="/news" className="football-link flex items-center">
                <span>Все новости</span>
                <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-10">
              {/* Главная новость */}
              <NewsCard article={featuredNews} variant="featured" />

              {/* Сетка новостей */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentNews.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>

              <div className="text-center">
                <Button className="mt-4">
                  <span>Загрузить еще</span>
                  <Icon name="ChevronDown" className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Секция матчей и турнирной таблицы */}
        <section className="py-16 bg-gray-light dark:bg-dark/60">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Ближайшие матчи */}
              <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-oswald">Ближайшие матчи</h2>
                  <Link
                    to="/matches"
                    className="football-link flex items-center"
                  >
                    <span>Все матчи</span>
                    <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                  </Link>
                </div>

                <div className="grid gap-4">
                  {upcomingMatches.map((match) => (
                    <Card
                      key={match.id}
                      className="football-card hover:-translate-y-0"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">
                              {match.league}
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-medium">{match.home}</span>
                              <span className="text-muted-foreground">vs</span>
                              <span className="font-medium">{match.away}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">
                              {match.date}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {match.time}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Турнирные таблицы */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-oswald">Турнирные таблицы</h2>
                  <Link
                    to="/standings"
                    className="football-link flex items-center"
                  >
                    <span>Все таблицы</span>
                    <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                  </Link>
                </div>

                <Card className="football-card hover:-translate-y-0">
                  <CardContent className="p-4">
                    <Tabs defaultValue="rpl">
                      <TabsList className="w-full">
                        {leagues.map((league) => (
                          <TabsTrigger
                            key={league.id}
                            value={league.id}
                            className="flex-1"
                          >
                            {league.name}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {leagues.map((league) => (
                        <TabsContent
                          key={league.id}
                          value={league.id}
                          className="mt-4"
                        >
                          <div className="space-y-3">
                            {league.teams.map((team, index) => (
                              <div
                                key={team.name}
                                className="flex justify-between"
                              >
                                <div className="flex items-center">
                                  <span className="w-6 text-center text-muted-foreground">
                                    {index + 1}
                                  </span>
                                  <span className="ml-2">{team.name}</span>
                                </div>
                                <div className="font-medium">{team.points}</div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Подписка на новости */}
        <section className="bg-field py-12 md:py-16 text-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-oswald">
                Оставайтесь в курсе последних событий
              </h2>
              <p className="opacity-90">
                Подпишитесь на нашу рассылку, чтобы получать самые свежие
                новости, эксклюзивные материалы и интересные предложения.
              </p>

              <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-3 rounded-md flex-grow focus:outline-none text-dark"
                  required
                />
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  Подписаться
                </Button>
              </form>

              <p className="text-xs opacity-80">
                Подписываясь, вы соглашаетесь с нашей политикой
                конфиденциальности.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
