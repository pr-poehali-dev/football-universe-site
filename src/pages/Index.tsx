import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import NewsCard, { NewsArticle } from "@/components/news-card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Здесь находятся актуальные новости
const featuredNews: NewsArticle = {
  id: "1",
  title: "Реал Мадрид стал победителем Лиги чемпионов УЕФА 2023/24",
  excerpt:
    "Мадридский клуб одержал победу над дортмундской Боруссией со счетом 2:0 в финале на стадионе Уэмбли в Лондоне, завоевав свой 15-й титул в главном европейском клубном турнире.",
  image: "https://source.unsplash.com/random/900x700/?soccer,realmadrid",
  category: "Лига чемпионов",
  date: "1 июня 2024",
  readTime: "4 мин",
  commentCount: 142,
  isHot: true,
};

const recentNews: NewsArticle[] = [
  {
    id: "2",
    title: "Байер Леверкузен стал чемпионом Германии сезона 2023/24",
    excerpt:
      "Команда Хаби Алонсо впервые в своей истории выиграла Бундеслигу, не проиграв ни одного матча в чемпионате и прервав 11-летнюю гегемонию Баварии.",
    image: "https://source.unsplash.com/random/900x700/?soccer,bayer",
    category: "Бундеслига",
    date: "19 мая 2024",
    readTime: "3 мин",
    commentCount: 67,
  },
  {
    id: "3",
    title: "Интер Милан оформил второе подряд чемпионство в Серии А",
    excerpt:
      "Нерадзурри под руководством Симоне Индзаги стали чемпионами Италии, опередив Милан на 19 очков. Для клуба это 20-й скудетто в истории.",
    image: "https://source.unsplash.com/random/900x700/?soccer,inter",
    category: "Серия А",
    date: "27 мая 2024",
    readTime: "3 мин",
    commentCount: 28,
  },
  {
    id: "4",
    title: "Жирона впервые в истории квалифицировалась в Лигу чемпионов",
    excerpt:
      "Испанский клуб из Каталонии сенсационно финишировал на 3-м месте в Ла Лиге и впервые в своей истории будет играть в Лиге чемпионов УЕФА в следующем сезоне.",
    image: "https://source.unsplash.com/random/900x700/?soccer,girona",
    category: "Ла Лига",
    date: "24 мая 2024",
    readTime: "3 мин",
    commentCount: 54,
    isHot: true,
  },
  {
    id: "5",
    title: "Манчестер Сити стал чемпионом Англии в четвертый раз подряд",
    excerpt:
      "Команда Пепа Гвардиолы установила исторический рекорд, став первым клубом, выигравшим четыре подряд титула Премьер-лиги.",
    image: "https://source.unsplash.com/random/900x700/?soccer,mancity",
    category: "Премьер-лига",
    date: "19 мая 2024",
    readTime: "4 мин",
    commentCount: 87,
  },
  {
    id: "6",
    title: "ПСЖ объявил об уходе Килиана Мбаппе после окончания сезона",
    excerpt:
      "Французский форвард подтвердил, что покинет парижский клуб этим летом после истечения срока контракта. Ожидается его переход в Реал Мадрид.",
    image: "https://source.unsplash.com/random/900x700/?soccer,mbappe",
    category: "Трансферы",
    date: "10 мая 2024",
    readTime: "5 мин",
    commentCount: 211,
  },
];

// Массив ближайших матчей
const upcomingMatches = [
  {
    id: "m1",
    home: "Англия",
    away: "Сербия",
    league: "ЕВРО-2024",
    date: "16 июня 2024",
    time: "21:00",
  },
  {
    id: "m2",
    home: "Испания",
    away: "Хорватия",
    league: "ЕВРО-2024",
    date: "15 июня 2024",
    time: "18:00",
  },
  {
    id: "m3",
    home: "Италия",
    away: "Албания",
    league: "ЕВРО-2024",
    date: "15 июня 2024",
    time: "21:00",
  },
  {
    id: "m4",
    home: "Германия",
    away: "Шотландия",
    league: "ЕВРО-2024",
    date: "14 июня 2024",
    time: "21:00",
  },
];

// Массив турнирных таблиц
const leagues = [
  {
    id: "premier",
    name: "АПЛ 23/24",
    teams: [
      { name: "Манчестер Сити", points: 91 },
      { name: "Арсенал", points: 89 },
      { name: "Ливерпуль", points: 82 },
      { name: "Астон Вилла", points: 68 },
      { name: "Тоттенхэм", points: 66 },
    ],
  },
  {
    id: "laliga",
    name: "Ла Лига 23/24",
    teams: [
      { name: "Реал Мадрид", points: 95 },
      { name: "Барселона", points: 85 },
      { name: "Жирона", points: 78 },
      { name: "Атлетико Мадрид", points: 73 },
      { name: "Атлетик Бильбао", points: 65 },
    ],
  },
  {
    id: "bundesliga",
    name: "Бундеслига 23/24",
    teams: [
      { name: "Байер", points: 90 },
      { name: "Штутгарт", points: 73 },
      { name: "Бавария", points: 72 },
      { name: "РБ Лейпциг", points: 66 },
      { name: "Боруссия Д", points: 63 },
    ],
  },
];

const Index: React.FC = () => {
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
                    <Tabs defaultValue="premier">
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
