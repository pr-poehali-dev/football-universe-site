import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import NewsCard, { NewsArticle } from "@/components/news-card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index: React.FC = () => {
  // Новости на 12 мая 2025 года
  const featuredNews: NewsArticle = {
    id: "1",
    title: "«Краснодар» впервые в истории выиграл чемпионат России",
    excerpt:
      "ФК «Краснодар» досрочно стал чемпионом России сезона 2024/2025, прервав гегемонию «Зенита». Команда Владимира Ивича обеспечила себе титул за тур до финиша, обыграв «Спартак» со счётом 3:1.",
    image: "https://source.unsplash.com/random/900x700/?soccer,fc-krasnodar",
    category: "РПЛ",
    date: "12 мая 2025",
    readTime: "5 мин",
    commentCount: 1286,
    isHot: true,
  };

  const recentNews: NewsArticle[] = [
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
      image: "https://source.unsplash.com/random/900x700/?soccer,real-madrid",
      category: "Лига чемпионов",
      date: "10 мая 2025",
      readTime: "6 мин",
      commentCount: 1874,
    },
    {
      id: "4",
      title: "Пиоли возглавил «Спартак» после отставки Абаскаля",
      excerpt:
        "Бывший главный тренер «Милана» Стефано Пиоли стал новым наставником московского «Спартака». Специалист подписал контракт на 2 года с опцией продления ещё на сезон. Гильермо Абаскаль покинул команду по соглашению сторон.",
      image: "https://source.unsplash.com/random/900x700/?soccer,coach,spartak",
      category: "РПЛ",
      date: "9 мая 2025",
      readTime: "4 мин",
      commentCount: 968,
    },
    {
      id: "5",
      title: "Холанд побил рекорд АПЛ по голам за сезон, забив 41 мяч",
      excerpt:
        "Нападающий «Манчестер Сити» Эрлинг Холанд установил новый рекорд английской Премьер-лиги, забив 41 гол в одном сезоне. Норвежец превзошёл своё же достижение (36 голов) в кампании 2022/2023.",
      image: "https://source.unsplash.com/random/900x700/?soccer,haaland",
      category: "АПЛ",
      date: "12 мая 2025",
      readTime: "3 мин",
      commentCount: 651,
    },
    {
      id: "6",
      title: "«Динамо» выиграло Кубок России, победив ЦСКА в финале",
      excerpt:
        "Московское «Динамо» завоевало Кубок России сезона 2024/2025, обыграв в финальном матче ЦСКА со счётом 2:0. Голы забили Тюкавин и Макаров. Бело-голубые взяли трофей впервые с 1995 года.",
      image: "https://source.unsplash.com/random/900x700/?soccer,dinamo",
      category: "Кубок России",
      date: "8 мая 2025",
      readTime: "4 мин",
      commentCount: 587,
    },
  ];

  // Массив ближайших матчей РПЛ (сезон 2024/2025, финальные туры)
  const upcomingMatches = [
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
    {
      id: "m3",
      home: "Ростов",
      away: "Краснодар",
      league: "РПЛ, тур 29",
      date: "17 мая 2025",
      time: "15:00",
    },
    {
      id: "m4",
      home: "Локомотив",
      away: "Рубин",
      league: "РПЛ, тур 29",
      date: "18 мая 2025",
      time: "15:00",
    },
  ];

  // Массив турнирных таблиц (актуальных на май 2025 года)
  const leagues = [
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
    {
      id: "premier",
      name: "АПЛ 24/25",
      teams: [
        { name: "Манчестер Сити", points: 89 },
        { name: "Арсенал", points: 86 },
        { name: "Ливерпуль", points: 82 },
        { name: "Ньюкасл", points: 70 },
        { name: "Тоттенхэм", points: 68 },
      ],
    },
    {
      id: "laliga",
      name: "Ла Лига 24/25",
      teams: [
        { name: "Реал Мадрид", points: 92 },
        { name: "Барселона", points: 83 },
        { name: "Атлетико", points: 71 },
        { name: "Вильярреал", points: 65 },
        { name: "Севилья", points: 62 },
      ],
    },
  ];

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
