
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon';
import { cn } from '@/lib/utils';

// Типы для секций футера
type FooterSection = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

type FooterProps = {
  className?: string;
};

// Данные разделов футера
const footerSections: FooterSection[] = [
  {
    title: "О проекте",
    links: [
      { title: "О нас", href: "/about" },
      { title: "Команда", href: "/team" },
      { title: "Контакты", href: "/contacts" },
      { title: "Карьера", href: "/careers" }
    ]
  },
  {
    title: "Правовая информация",
    links: [
      { title: "Условия использования", href: "/terms" },
      { title: "Политика конфиденциальности", href: "/privacy" },
      { title: "Cookies", href: "/cookies" }
    ]
  },
  {
    title: "Сообщество",
    links: [
      { title: "Блог", href: "/blog" },
      { title: "Форум", href: "/forum" },
      { title: "Помощь", href: "/help" }
    ]
  }
];

// Массив с социальными сетями
const socialLinks = [
  { name: "Twitter", icon: "Twitter", href: "https://twitter.com" },
  { name: "Facebook", icon: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", icon: "Instagram", href: "https://instagram.com" },
  { name: "YouTube", icon: "Youtube", href: "https://youtube.com" },
  { name: "Telegram", icon: "Send", href: "https://t.me" }
];

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("w-full bg-gray-light dark:bg-dark border-t", className)}>
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Логотип и описание */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-oswald mb-4">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-accent">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                  FU
                </div>
              </div>
              <span className="font-bold text-lg">Football Universe</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Ваш путеводитель в мире футбола. Новости, матчи, статистика и многое другое.
            </p>
            
            {/* Социальные сети */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Секции с ссылками */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-oswald font-medium text-base mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link 
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Нижняя часть футера */}
        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Football Universe. Все права защищены.
          </p>
          <div className="flex items-center">
            <span className="text-sm text-muted-foreground">Создано с</span>
            <Icon name="Heart" className="h-4 w-4 mx-1 text-accent" />
            <span className="text-sm text-muted-foreground">к футболу</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
