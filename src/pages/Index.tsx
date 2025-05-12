
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import NewsCard, { NewsArticle } from '@/components/news-card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Примеры новостей
const featuredNews: NewsArticle = {
  id: "1",
  title: "Месси подписал новый контракт с «Интер Майами» с рекордной зарплатой",
  excerpt: "Лионель Месси продлил контракт с американским клубом «Интер Майами», установив новый зарплатный рекорд для MLS. Это решение подтверждает серьезные намерения клуба на мировой футбольной арене.",
  image: "https://source.unsplash.com/random/900x700/?soccer,messi",
  category: "Трансферы",
  date: "12 мая 2025",
  readTime: "4 мин",
  commentCount: 56,
  isHot: true
};

const recentNews: NewsArticle[] = [
  {
    id: "2",
    title: "«Реал Мадрид» победил «Барселону» в классическом противостоянии",
    excerpt: "В очередном Эль-Класико мадридский «Реал» одержал уверенную победу над «Барселоной» со счетом 3:1.",
    image: "https://source.unsplash.com/random/900x700/?soccer,madrid",
    category: "Матчи",
    date: "11 мая 2025",
    readTime: "3 мин",
    commentCount: 42
  },
  {
    id: "3",
    title: "Лига Чемпионов: определились все участники полуфинала",
    excerpt: "Стали известны четыре команды, которые сыграют в полуфинале главного клубного турнира Европы.",
    image: "https://source.unsplash.com/random/900x700/?champions,league",
    category: "Турниры",
    date: "10 мая 2025",
    readTime: "5 мин",
    commentCount: 28
  },
  {
    id: "4",
    title: "Новый главный тренер сборной России: кто возглавит команду",
    excerpt: "РФС объявил о назначении нового главного тренера национальной сборной по футболу.",
    image: "https://source.unsplash.com/random/900x700/?soccer,coach",
    category: "Сборные",
    date: "9 мая 2025",
    readTime: "3 мин",
    commentCount: 64,
    isHot: true
  },
  {
    id: "5",
    title: "Мбаппе получил травму: под вопросом участие в ближайших матчах",
    excerpt: "Лидер французской сборной и звезда «ПСЖ» Килиан Мбаппе получил повреждение на тренировке.",
    image: "https://source.unsplash.com/random/900x700/?soccer,mbappe",
    category: "Игроки",
    date: "8 мая 2025",
    readTime: "2 мин",
    commentCount: 37
  },
  {
    id: "6",
    title: "Лучшие бомбардиры сезона: кто претендует на «Золотую бутсу»",
    excerpt: "Обзор главных претендентов на престижную награду лучшему бомбардиру европейских чемпионатов.",
    image: "https://source.unsplash.com/random/900x700/?soccer,goal",
    category: "Статистика",
    date: "7 мая 2025",
    readTime: "4 мин",
    commentCount: 21
  }
];

// Массив ближайших матчей
const upcomingMatches = [
  {
    id: "m1",
    home: "Манчестер Сити",
    away: "Ливерпуль",
    league: "Премьер-лига",
    date: "15 мая 2025",
    time: "19:00"
  },
  {
    id: "m2",
    home: "Барселона",
    away: "Атлетико Мадрид",
    league: "Ла Лига",
    date: "16 мая 2025",
    time: "21:30"
  },
  {
    id: "m3",
    home: "Бавария",
    away: "Боруссия Д",
    league: "Бундеслига",
    date: "17 мая 2025",
    time: "18:30"
  },
  {
    id: "m4",
    home: "ПСЖ",
    away: "Лион",
    league: "Лига 1",
    date: "17 мая 2025",
    time: "20:45"
  }
];

// Массив турнирных таблиц
const leagues = [
  {
    id: "premier",
    name: "Премьер-лига",
    teams: [
      { name: "Манчестер Сити", points: 86 },
      { name: "Арсенал", points: 84 },
      { name: "Ливерпуль", points: 79 },
      { name: "Челси", points: 70 },
      { name: "Тоттенхэм", points: 68 }
    ]
  },
  {
    id: "laliga",
    name: "Ла Лига",
    teams: [
      { name: "Реал Мадрид", points: 88 },
      { name: "Барселона", points: 82 },
      { name: "Атлетико Мадрид", points: 74 },
      { name: "Жирона", points: 68 },
      { name: "Реал Сосьедад", points: 63 }
    ]
  },
  {
    id: "bundesliga",
    name: "Бундеслига",
    teams: [
      { name: "Байер", points: 86 },
      { name: "Бавария", points: 80 },
      { name: "Штутгарт", points: 72 },
      { name: "Боруссия Д", points: 68 },
      { name: "РБ Лейпциг", points: 65 }
    ]
  }
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald">Футбольная Вселенная</h1>
              <p className="text-lg opacity-90">
                Ваш путеводитель в мире футбола. Последние новости, матчи, 
                трансферы и аналитика — всё в одном месте.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button size="lg" className="bg-white text-field-dark hover:bg-gray-100">
                  <Icon name="Newspaper" className="mr-2 h-4 w-4" />
                  Последние новости
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
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
              <h2 className="text-2xl md:text-3xl font-oswald">Последние новости</h2>
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
                {recentNews.map(article => (
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
                  <Link to="/matches" className="football-link flex items-center">
                    <span>Все матчи</span>
                    <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                <div className="grid gap-4">
                  {upcomingMatches.map(match => (
                    <Card key={match.id} className="football-card hover:-translate-y-0">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">{match.league}</div>
                            <div className="flex items-center gap-3">
                              <span className="font-medium">{match.home}</span>
                              <span className="text-muted-foreground">vs</span>
                              <span className="font-medium">{match.away}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{match.date}</div>
                            <div className="text-sm text-muted-foreground">{match.time}</div>
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
                  <Link to="/standings" className="football-link flex items-center">
                    <span>Все таблицы</span>
                    <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                <Card className="football-card hover:-translate-y-0">
                  <CardContent className="p-4">
                    <Tabs defaultValue="premier">
                      <TabsList className="w-full">
                        {leagues.map(league => (
                          <TabsTrigger key={league.id} value={league.id} className="flex-1">
                            {league.name}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      
                      {leagues.map(league => (
                        <TabsContent key={league.id} value={league.id} className="mt-4">
                          <div className="space-y-3">
                            {league.teams.map((team, index) => (
                              <div key={team.name} className="flex justify-between">
                                <div className="flex items-center">
                                  <span className="w-6 text-center text-muted-foreground">{index + 1}</span>
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
              <h2 className="text-2xl md:text-3xl font-oswald">Оставайтесь в курсе последних событий</h2>
              <p className="opacity-90">
                Подпишитесь на нашу рассылку, чтобы получать самые свежие новости, 
                эксклюзивные материалы и интересные предложения.
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
                Подписываясь, вы соглашаетесь с нашей политикой конфиденциальности.
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
