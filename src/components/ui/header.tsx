
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import Icon from './icon';
import { cn } from '@/lib/utils';

// Определение типов для пунктов навигации
type NavItem = {
  title: string;
  href: string;
  icon?: string;
};

type HeaderProps = {
  className?: string;
};

// Массив пунктов навигации
const navItems: NavItem[] = [
  {
    title: "Главная",
    href: "/",
    icon: "Home"
  },
  {
    title: "Новости",
    href: "/news",
    icon: "Newspaper"
  },
  {
    title: "Команды",
    href: "/teams",
    icon: "Users"
  },
  {
    title: "Матчи",
    href: "/matches",
    icon: "CalendarDays"
  },
  {
    title: "Статистика",
    href: "/stats",
    icon: "BarChart"
  }
];

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center gap-2 font-oswald">
            <div className="relative h-9 w-9 overflow-hidden rounded-full bg-accent">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                FU
              </div>
            </div>
            <span className="hidden font-bold text-xl sm:inline-block">Football Universe</span>
          </Link>
        </div>

        {/* Десктопная навигация */}
        <nav className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  to={item.href} 
                  className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors py-2"
                >
                  {item.icon && <Icon name={item.icon} size={16} />}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Функциональные кнопки справа */}
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="icon" aria-label="Поиск">
            <Icon name="Search" className="h-5 w-5" />
          </Button>
          <Button className="hidden sm:flex" variant="default">
            <Icon name="LogIn" className="mr-2 h-4 w-4" />
            Войти
          </Button>
          
          {/* Мобильное меню */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Мобильная навигация */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container py-4">
            <ul className="grid gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="flex items-center gap-2 py-2 text-foreground/70 hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon && <Icon name={item.icon} size={20} />}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t">
                <Button className="w-full" variant="default">
                  <Icon name="LogIn" className="mr-2 h-4 w-4" />
                  Войти
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
